import * as React from "react"
import { cn } from "@/lib/utils"
import SkeletonComponent from "@/components/skeleton"
export default function InvestmentsCard({ className }: React.ComponentProps<"div">) {
  return (
    <>
      <SkeletonComponent className={cn("h-60 w-full rounded-xl", className)}/>
    </>
  );
}