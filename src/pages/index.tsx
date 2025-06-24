"use client"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="font-bold">Olá, Paulo !</h2>
        <p className="text-sm">Segunda Feira, 23 de Junho</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full rounded-xl">
          <Image
            src="/banner-01.png"
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <h2 className="mt-6 mb-6 text-lg font-bold text-gray-500">
          Agendamentos
        </h2>
        <Card className="p-0">
          <CardContent className="flex items-center justify-between p-0">
            <div className="flex flex-col gap-1 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="text-lg font-bold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex h-full flex-col items-center justify-center border-l-1 border-solid border-gray-100 px-5 py-5 pl-5">
              <div></div>
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
