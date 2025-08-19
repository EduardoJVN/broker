import * as React from "react"
import { cn } from "@/lib/utils"
import SkeletonComponent from "@/components/skeleton"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const render = true
export default function WalletCard({ className }: React.ComponentProps<"div">) {
  if(!render){
    return (
      <SkeletonComponent className={cn("h-60 w-full rounded-xl", className)}/>
    );
  }
  return (
      <Card className={cn("h-60 w-full rounded-xl shadow-none", className)}>
        <CardHeader>
            <CardTitle>Cartera</CardTitle>
        </CardHeader>
        <CardContent>
            
        </CardContent>
      </Card>
  );
}