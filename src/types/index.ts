export interface InterfaceUser {
  id: number
  nome: string
  cpf: string
  dataNascimento: string
}

export interface InterfaceBodyTableUser {
  id: {
    children: number
  }
  nome: {
    children: string
  }
  cpf: {
    children: string
  }
  dataNascimento: {
    children: string
  }
}
