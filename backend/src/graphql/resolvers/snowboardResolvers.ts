export const snowboardResolvers = {
    Query: {
      snowboards: async (_: any, __: any, { prisma }: any) => {
        return prisma.snowBoard.findMany()
      }
    },
    Mutation: {
      createSnowboard: async (_: any, args: any, { prisma }: any) => {
        return prisma.snowBoard.create({
          data: {
            name: args.name,
            price: args.price,
            description: args.description,
            size: args.size,
            shape: args.shape,
            brand: args.brand
          }
        })  
      }
    }
  }
  