import * as React from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
export default function SkeletonComponent({ className }: React.ComponentProps<"div">) {
  return (
    <Skeleton className={cn("h-60 w-full rounded-xl", className)}/>
  );
}