interface RefeicoesProps {
  horario: string
  nome: string
  alimentos: string[]
}

export interface Data {
  nome: string
  sexo: string
  idade: number
  altuta: number
  peso: number
  objetivo: string
  refeicoes: RefeicoesProps[]
  suplementos: string[]
}
