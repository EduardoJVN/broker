import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import {
  SidebarTrigger,
} from '@/components/animate-ui/radix/sidebar';
import { NAV_ICONS } from "@/constants/nav"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import UserSideBar from '@/components/userSideBar';

 
 
export default function Navigation() { 
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4 w-full">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className='flex items-center justify-center md:justify-end gap-2 w-full aling-center'>
            <Input type="text" placeholder="Buscar" className="h-9 w-48 md:w-72 lg:w-96" />
            <Button variant="secondary" size="icon" className="size-9">
              <NAV_ICONS.notification/>
            </Button>
            <Button variant="secondary" size="icon" className="size-9">
              <NAV_ICONS.messaging/>
            </Button>
            <UserSideBar/>
        </div>
        
      </div>
    </header>
  );
};