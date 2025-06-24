import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

function Header() {
  return (
    <Card>
      <CardContent>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <h1>Header</h1>
      </CardContent>
    </Card>
  )
}

export default Header
