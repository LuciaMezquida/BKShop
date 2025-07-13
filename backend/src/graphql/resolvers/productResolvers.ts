export const productResolvers = {
    Query: {
      products: (_parent: any, _args: any, ctx: any) => {
        return ctx.prisma.product.findMany()
      }
    },
    Mutation: {
      createProduct: (_: any, args: any, ctx: any) => {
        return ctx.prisma.product.create({
          data: {
            name: args.name,
            price: args.price
          }
        })
      }
    }
  }
  