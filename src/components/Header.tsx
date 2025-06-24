import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

function Header() {
  return (
    <Card className="rounded-t-none">
      <CardContent className="flex flex-row items-center justify-between">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
