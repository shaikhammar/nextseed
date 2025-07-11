import { SignOutButton } from '@/components/sign-out-button';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect('/auth/login');

  return (
    <div className='flex flex-col gap-4 m-10'>
      <div>
        <h1 className='text-primary text-3xl font-semibold'>Profile</h1>
      </div>

      <SignOutButton />

      <pre className='text-sm overflow-clip'>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
