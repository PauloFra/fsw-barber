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

        <Card className="mt-6">
          <CardContent className="flex">
            <div className="flex flex-col gap-2 py-5">
              <Badge>Confirmado</Badge>
              <h3 className="text-lg font-bold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
