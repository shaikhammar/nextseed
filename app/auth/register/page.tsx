import { RegisterForm } from '@/components/register-form';
import { Sprout } from 'lucide-react';

export default function Page() {
  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <a
          href='#'
          className='flex items-center gap-2 self-center font-bold text-3xl'
        >
          <div className='bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md'>
            <Sprout className='size-5' />
          </div>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </a>
        <RegisterForm />
      </div>
    </div>
  );
}
