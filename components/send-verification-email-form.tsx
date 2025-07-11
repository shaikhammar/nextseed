'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sendVerificationEmail } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const SendVerificationEmailForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.target as HTMLFormElement);

    const email = formData.get('email') as string;
    if (!email) return toast.error('Email is required');
    await sendVerificationEmail({
      email,
      callbackURL: '/auth/verify-email',
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success('Verification email sent successfully.');
          router.push('/auth/verify-email/success');
        },
      },
    });
  }

  return (
    <div>
      <form
        className='p-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-6 w-60'>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='m@example.com'
            />
          </div>
          <Button
            type='submit'
            className='w-full'
            disabled={isPending}
          >
            Re-send Verification Email
          </Button>
        </div>
      </form>
    </div>
  );
};
