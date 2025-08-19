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
const CLASS_DEFAULT = "h-15 w-48 rounded-xl"
export default function FavoriteCard({ className, data}: Readonly<{
  className?: string;
  data?: Widget | undefined;
}>) {
  if(!data){
      return <SkeletonComponent className={cn(CLASS_DEFAULT, className)}/>
  }
  return (
    <SkeletonComponent className={cn(CLASS_DEFAULT, className)}/>
  );
}