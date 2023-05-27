import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10 sm:max-w-4xl mt-12'>
            <div className='text-center'>
                <p className="mt-10">Sorry, the requested city not found.</p>
                <Link href="/home" className={cn(buttonVariants(), 'mt-12')}>Search again</Link>
            </div>
        </div>
    )
}