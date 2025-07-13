import { PrismaClient } from './src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Insertar datos de prueba
  await prisma.snowBoard.createMany({
    data: [
      {
        name: 'Burton Custom X',
        brand: 'Burton',
        description: 'High-performance all-mountain board',
        price: 599.99,
        size: 158,
        shape: 'Directional',
      },
      {
        name: 'Capita DOA',
        brand: 'Capita',
        description: 'Defenders of Awesome freestyle board',
        price: 549.99,
        size: 156,
        shape: 'True Twin',
      },
      {
        name: 'Lib Tech T.Rice Pro',
        brand: 'Lib Tech',
        description: "Travis Rice's signature board",
        price: 679.99,
        size: 162,
        shape: 'Directional',
      },
    ],
  })

  console.log('✅ Datos de prueba insertados correctamente')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 