import React from "react"
import { Barbershop } from "@/pages/index"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

export function BarbershopItem({ barbershop }: { barbershop: Barbershop }) {
  return (
    <Card className="min-w-[159px] p-0">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-full rounded-t-lg">
          <Image
            src={barbershop.imageUrl}
            fill
            alt={barbershop.name}
            className="rounded-t-lg object-cover"
          />
        </div>
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">
            {" "}
            {barbershop.address}
          </p>
          <Button variant="secondary" className="mt-3 w-full">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
