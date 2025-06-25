import React from "react"
import { Barbershop } from "@/pages/index"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

export function BarbershopItem({ barbershop }: { barbershop: Barbershop }) {
  return (
    <Card>
      <CardContent>
        <div className="relative h-[159px]">
          <Image
            src={barbershop.imageUrl}
            fill
            alt={barbershop.name}
            className="object-cover"
          />
        </div>
        <h3>{barbershop.name}</h3>
      </CardContent>
    </Card>
  )
}
