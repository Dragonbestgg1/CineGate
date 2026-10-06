import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { List } from "lucide-react";

export default function NavBar() {
    return(
        <Sheet>
            <SheetTrigger render={<List />} />
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                        This is the menu for the application.
                    </SheetDescription>
                </SheetHeader>
                <Button variant="ghost" className="w-full">Home</Button>
                <Button variant="ghost" className="w-full">About</Button>
                <Button variant="ghost" className="w-full">Contact</Button>
            </SheetContent>
        </Sheet>
    )
}