import { ResumeHeaderInfo } from "@/types"



type dataSlice = {
    componentData:any,
    setComponentData:(key:string, data:any) => void
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

export const createDataSlice = (set: any, get: any):dataSlice => ({
    componentData:{a:header,b:{title:'Carreira', content:'conteudo aqui tem'}},
    setComponentData: (key: string, data: any) =>
       set((state: { componentData: any }) => ({
         componentData: { ...state.componentData, [key]: data },
       })),
})