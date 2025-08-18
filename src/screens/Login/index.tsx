import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function Login() {
  return(
      <Card className="w-md flex flex-col items-center justify-center text-center gap-4">
        <CardHeader className="flex flex-col items-center justify-center text-center w-full text-2xl mb-4">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>Ingresá a tu cuenta</CardTitle>
          <CardTitle>de Bull Market Brokers</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-4">
          <Input type="email" placeholder="Correo electrónico" className="h-13"/>
          <Input type="password" placeholder="Contraseña" className="h-13"/>
          <Button asChild  variant="default" className="bg-primary text-white h-13">
            <Link href="/">Ingresar</Link>
          </Button>
          <Button variant="link" className="h-13">Olvidé mi contraseña</Button>
        </CardContent>
        <div className="container w-full">
          <Separator />
        </div>
        <CardFooter className="w-full flex flex-col">
          <p>¿Nuevo en Bull Market?</p>
          <Button variant="link" className="h-13">Abrir una cuenta</Button>
        </CardFooter>
    </Card>
  )
}