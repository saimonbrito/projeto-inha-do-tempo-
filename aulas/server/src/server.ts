import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const user = await prisma.user.findMany()
  return user
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running on http://localhost:3333')
  })
