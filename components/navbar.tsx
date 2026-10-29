import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation menu"
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-12 cursor-pointer text-white hover:bg-white/15 hover:text-white"
          />
        }
      >
        <Menu aria-hidden="true" className="size-6" />
        <span className="sr-only">Open navigation menu</span>
      </SheetTrigger>
      <SheetContent className="w-[min(20rem,calc(100vw-2rem))] p-0">
        <SheetHeader className="cursor-default">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigate CineGate.</SheetDescription>
        </SheetHeader>
        <nav aria-label="Main navigation" className="grid gap-1 px-4 pb-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
