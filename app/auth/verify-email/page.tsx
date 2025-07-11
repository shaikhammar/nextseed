import { SendVerificationEmailForm } from '@/components/send-verification-email-form';
import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: Promise<{ error: string }>;
}
export default async function Page({ searchParams }: PageProps) {
  const error = (await searchParams).error;

  if (!error) redirect('/profile');

  return (
    <div className='flex flex-col gap-4 m-10 justify-center items-center'>
      <div>
        <h1 className='text-primary text-3xl font-semibold'>Verify Email</h1>
      </div>

      {/* <SignOutButton /> */}

      <p className='text-destructive'>
        {error === 'invalid_token' || error === 'token_expired'
          ? 'Your verification link has expired. Please request a new one.'
          : 'Oops! Something went wrong. Please try again.'}
      </p>
      <SendVerificationEmailForm />
    </div>
  );
}
