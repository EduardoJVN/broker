import * as React from 'react';
import { USER_DATA } from "@/constants/nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/animate-ui/radix/dropdown-menu';
import {
  ChevronsUpDown,
  Sparkles,
  BadgeCheck,
  CreditCard,
  Bell,
  LogOut,
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

export default function UserSideBar() {
    return(
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex flex-row gap-2 items-center rounded-lg px-2 py-1.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors cursor-pointer"
                >
                <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                    src={USER_DATA.avatar}
                    alt={USER_DATA.name}
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                    {USER_DATA.name}
                    </span>
                    <span className="truncate text-xs">
                    {USER_DATA.email}
                    </span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                        src={USER_DATA.avatar}
                        alt={USER_DATA.name}
                    />
                    <AvatarFallback className="rounded-lg">
                        CN
                    </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                        {USER_DATA.name}
                    </span>
                    <span className="truncate text-xs">
                        {USER_DATA.email}
                    </span>
                    </div>
                </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CreditCard />
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Bell />
                    Notifications
                </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <LogOut />
                Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}