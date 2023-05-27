'use client'; // Error components must be Client Components
 
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10 max-w-4xl'>
      <h2 className='text-center'>Something went wrong!</h2>
      <div className='flex justify-center'>
        <Button
            onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
            }
        >
            Try again
        </Button>
      </div>
    </div>
  );
}