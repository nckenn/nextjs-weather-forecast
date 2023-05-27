import Link from "next/link"

export default function NotFound() {
    return (
        <div className="text-center">
            <p className="mt-10">Sorry, the requested city does not exist.</p>
            <Link href="/home">Back to Home</Link>
        </div>
    )
}