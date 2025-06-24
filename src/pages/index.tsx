"use client"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

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
      </div>
    </>
  )
}
