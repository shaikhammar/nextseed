import { GetStartedButton } from '@/components/get-started-button';
import { Sprout } from 'lucide-react';

export default function Page() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center space-y-4'>
      <div className='flex items-center gap-2'>
        <Sprout className='size-5 text-emerald-600' />
        <h1 className='text-emerald-600 text-3xl font-bold'>NextSeed</h1>
      </div>
      <GetStartedButton />
    </div>
  );
}
