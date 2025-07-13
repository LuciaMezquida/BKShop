import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

export const context = async ({ req, res }: any) => {
  return {
    prisma
  }
}
