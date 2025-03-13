import Link from "next/link";


export default function Menu() {
    return (
        <div className="h-screen pl-54 pt-44">

            <img
                className="w-8 h-8" alt=""
                src="/img/logo-black.svg" />

            <div className="pt-12 flex font-medium flex-col gap-1">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
                <div className="my-2 border-t border-gray-300 w-32"></div>
                <Link href="/blog" className="text-gray-500">Demo</Link>
            </div>
        </div>
    );
}