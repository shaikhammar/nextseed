'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUpEmailAction } from '@/actions/sign-up-email.action';

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    setIsPending(true);

    const formData = new FormData(evt.target as HTMLFormElement);

    const { error } = await signUpEmailAction(formData);

    if (error) {
      toast.error(error);
      setIsPending(false);
    } else {
      toast.success('Registration successful. You can login now.');
      router.push('/profile');
    }

    setIsPending(false);

    // await signUp.email(
    //   {
    //     name,
    //     email,
    //     password,
    //   },
    //   {
    //     onRequest: () => {
    //       setIsPending(true);
    //     },
    //     onResponse: () => {
    //       setIsPending(false);
    //     },
    //     onError: (ctx) => {
    //       toast.error(ctx.error.message);
    //     },
    //     onSuccess: () => {
    //       toast.success('Registration successful. You are logged in.');
    //       router.push('/profile');
    //     },
    //   }
    // );
  }
  return (
    <div
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <Card>
        <CardHeader className='flex flex-col items-center text-center'>
          <CardTitle className='text-2xl font-bold'>Register</CardTitle>
          {/* // TODO: cleanup */}
          {/* <CardDescription>
            Enter your email below to login to your account
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className={cn('flex flex-col gap-6', className)}
          >
            <div className='grid gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Light Yagami'
                />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='lyagami@example.com'
                />
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <a
                    href='#'
                    className='ml-auto text-sm underline-offset-4 hover:underline'
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='••••••••'
                />
              </div>
              <Button
                type='submit'
                className='w-full'
                disabled={isPending}
              >
                Register
              </Button>
              {/* TODO: cleanup */}
              {/* <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                <span className='bg-background text-muted-foreground relative z-10 px-2'>
                  Or continue with
                </span>
              </div> */}
              {/* <Button
                variant='outline'
                className='w-full'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                    fill='currentColor'
                  />
                </svg>
                Login with GitHub
              </Button> */}
            </div>
            <div className='text-center text-sm'>
              Already have an account?{' '}
              <a
                href={'/auth/login'}
                className='underline underline-offset-4'
              >
                Sign in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>{' '}
        and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
}
