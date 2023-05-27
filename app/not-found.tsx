import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10 sm:max-w-4xl mt-12'>
      <div className='text-center'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/home" className={cn(buttonVariants(), 'mt-12')}>Back to Home</Link>
      </div>
    </div>
  );
}