import { PrismaClient } from "../generated/prisma"

declare global {
  var cachedPrisma: PrismaClient | undefined
}

const prisma: PrismaClient = global.cachedPrisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") global.cachedPrisma = prisma

export const db = prisma
