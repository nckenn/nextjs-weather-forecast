import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10 max-w-4xl mt-12'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}