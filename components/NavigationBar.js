import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function NavigationBar() {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden md:flex justify-between mt-2 mx-4">
        <div>
          <Link href="/">
            <h1 className="font-bold">CS359 - FA25</h1>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/editorials">
            <Button variant="ghost" className="text-semibold">
              Editorials
            </Button>
          </Link>
          <Link href="/startups">
            <Button variant="ghost" className="text-semibold">
              Startups
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden justify-between mt-2 items-center mx-4">
        <div>
          <Link href="/">
            <h1 className="font-bold">CS359 - FA25</h1>
          </Link>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/editorials">Editorials</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/startups">Startups</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
