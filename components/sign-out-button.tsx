'use client';

import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { signOut } from '@/lib/auth-client';
import { getHeaders } from 'better-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const SignOutButton = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    await signOut({
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
          toast.success('Sign out successful.');
          router.push('/auth/login');
        },
      },
    });
  };

  return (
    <Button
      variant='destructive'
      onClick={handleClick}
      size='sm'
      className='self-start'
      disabled={isPending}
    >
      Sign out
    </Button>
  );
};
