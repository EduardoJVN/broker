import * as React from "react"
import { cn } from "@/lib/utils"
import SkeletonComponent from "@/components/skeleton"
import Widget from "@/domain/models/Widget.model"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink, Ellipsis, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountingNumber } from "@/components/animate-ui/text/counting-number"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/animate-ui/radix/dropdown-menu';


export default function GeneralWidget({ className, data}: Readonly<{
  className?: string;
  data?: Widget | undefined;
}>) { 
  if(!data){
    return <SkeletonComponent className={cn("h-49 w-full rounded-xl", className)}/>
  }

  const badge = data.badget > 0 ? true : false;
  return (
    <Card className={cn("h-49 w-full rounded-xl shadow-none flex justify-start", className)}>
        <CardHeader className="flex flex-row gap-4 w-full">
            <div className="flex flex-row items-center justify-start gap-4 w-3/5">
                <div className="flex w-10 h-10 items-center justify-center rounded-full border-1">
                    {data.icon && React.createElement(data.icon)}
                </div>
                <CardTitle>{data.title}</CardTitle>
            </div>
            <div className="w-2/5 flex justify-end align-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-9">
                            <Ellipsis/>
                        </Button> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="min-w-20 rounded-lg"
                        side="bottom"
                        align="center"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Abrir
                            <ExternalLink />
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                    
                </DropdownMenu>            
            </div>
        </CardHeader>
        <CardContent>
            <div className="flex flex-row items-center justify-start gap-2 xl:gap-4">
                <div className="text-2xl font-bold">
                    $<CountingNumber number={data.value} decimalPlaces={2} fromNumber={data.value - 0.1} inView/>
                </div>
                
                <Badge
                    variant="secondary"
                    className={badge ? "bg-success-100 text-success" : "bg-error-100 text-error"}
                    >
                    {data.badget}%
                    <TrendingUp />
                </Badge>
            </div>
        </CardContent>
        <CardFooter>
            <CardDescription>{data.description}</CardDescription>
        </CardFooter>
    </Card>
  );
}