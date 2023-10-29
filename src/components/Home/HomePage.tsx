import React from 'react'
import { Container, Message } from './HomePage.styles'
import Image from 'next/image'

export const HomePage = () => {
  return (
    <Container>
      <Image src="/logo.svg" alt="Vercel Logo" width={300} height={100}  />
      <Message>
        Página em construção. Aguarde novidades em breve!
      </Message>
    </Container>
  )
}
