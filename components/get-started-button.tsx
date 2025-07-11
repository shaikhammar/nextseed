'use client';

import { useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const GetStartedButton = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className='flex flex-col gap-4'>
        <Button
          size='lg'
          className='opacity-50'
        >
          Get Started
        </Button>
      </div>
    );
  }

  const href = session ? '/profile' : '/auth/login';

  return (
    <div className='flex flex-col gap-4'>
      <Button
        size='lg'
        asChild
      >
        <Link href={href}>Get Started</Link>
      </Button>
      {session && <p>Welcome back, {session.user.name}!</p>}
    </div>
  );
};
