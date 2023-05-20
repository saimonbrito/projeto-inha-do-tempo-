import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface fastifyJwt {
    user: {
      sub: string
      name: string
      avatarUrl: string
    }
  }
}
