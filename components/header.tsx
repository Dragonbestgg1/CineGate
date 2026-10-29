import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar";

export default function Header() {
  return (
    <header className="h-20 w-full shrink-0 rounded-b-2xl border-b border-purple-500 bg-purple-700 text-white shadow-sm">
      <div className="mx-auto flex h-full w-full max-w-8xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md font-heading text-xl font-extralight tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <Image
            src="/cinegate-logo.png"
            alt=""
            aria-hidden="true"
            width={48}
            height={48}
            className="size-12 object-contain"
            priority
          />
          <span>CineGate</span>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
