import { ResumeHeaderInfo } from "@/types"
import { uuid } from "uuidv4"



type dataSlice = {
  componentData: any,
  setComponentData: (key: string, data: any) => void,
  setLanguages: (id: number, language: string, level: string) => void,
  deleteLanguage: (id: number) => void,
  addLanguage: (language: string, level: string) => void,
}


const header = {
  name: 'John Doe',
  role: 'Web Designer',
  address: '123 Main Street, Anytown, CA 12345',
  phone: '(123) 456-7890',
  email: 'john.doe@email.com',
  website: 'www.johndoe.com',
  linkedin: 'linkedin.com/in/john-doe',
  github: 'github.com/john-doe'
}
const goals = {
  objective: 'Carreira',
  objectiveContent: 'conteudo aqui tem'
}
const experiences = [
  {
    id:1,
    place:'Nasa',
    position:'de quatro',
    date:'2021-2022',
    description:'Fiz coisas no espaço'
  },
  {
    id:2,
    place:'Google',
    position:'de 5',
    date:'2022-2023',
    description:'roubei dados de pessoas'
  }
]
const education = {
  education: 'Education',
  educationContent: []
}
const languages = [
  {
    id: 2,
    language: 'English',
    level: 'Beginner'
  },
  {
    id: 1,
    language: 'Spanish',
    level: 'Intermediate'
  }
]
export const createDataSlice = (set: any, get: any): dataSlice => ({
  componentData: { a: header, b: goals, c: experiences, d: education, e: languages },
  setComponentData: (key: string, data: any) =>
    set((state: { componentData: any }) => ({
      componentData: { ...state.componentData, [key]: data },
    })),
  setLanguages(id, language, level) {
    const languages = get().componentData.e
    const index = languages.findIndex((l: any) => l.id === id)
    if (index !== -1) {
      languages[index].language = language
      languages[index].level = level
    }
    set((state:{componentData:any}) => ({ componentData: { ...state.componentData, e: languages } }))
  },
  deleteLanguage(id) {
    const languages = get().componentData.e
    const index = languages.findIndex((l: any) => l.id === id)
    if (index !== -1) {
      languages.splice(index, 1)
    }
    set((state:{componentData:any})  => ({ componentData: { ...state.componentData, e: languages } }))
  },
  addLanguage: (language, level) => {
    const languages = get().componentData.e
    languages.push({ id: uuid(), language, level })
    set((state:{componentData:any}) => ({ componentData: { ...state.componentData, e: languages } }))
  }
});