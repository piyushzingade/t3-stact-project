import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { auth, signOut } from "~/server/auth";
import { signout } from "./signout";
import Image from "next/image";
import Logo from "./Logo";

export default async function NavBar({className}  : {className : string}) {
  const session = await auth();

  console.log(session?.user);
  return (
    <nav
      className={`${className} container mx-auto flex items-center justify-between p-6`}
    >
      {/* Left Side: Logo + Links */}
      <div className="flex items-center gap-x-10">
        {/* Logo */}
        <Logo/>
        

        {/* Links */}
        <Link href="/shows" className="hover:underline">
          Shows
        </Link>
        <Link href="/create" className="hover:underline">
          Create
        </Link>
      </div>

      {/* Right Side: User Avatar Dropdown */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar>
              <AvatarImage
                src={session?.user.image ?? ""}
                alt="user profile photo"
              />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem onClick={signout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
