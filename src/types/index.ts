
export type ResumeHeaderInfo = {
    name?: string,
    image?: string,
    role?: string,
    address?: string,
    phone?: string,
    email?: string,
    website?: string,
    linkedin?: string,
    github?: string,

}

export interface LayoutItemType {
    i: string,
    x:number,
    y:number,
    w: number,
    h: number,
    maxH: number,
    minW : number,
    maxW:number,
    static: boolean,
    isResizable: boolean
}

export interface componentsType {
    // { name: 'Header', component: ResumeHeader, i:"a", isHidden: true },
    i:string,
    name:string,
    component:() => JSX.Element,
    editComponent:() => JSX.Element,
    isHidden:boolean
}
export type BasicFieldsType = {
    name: string,
    role: string,
    address: string,
    phone: string,
    email: string,
    goals: string
  }
  export type LanguagesFieldsType = {
    id: string,
    name: string,
    level: string
  }
  export type ExperienceType = {
    id: string,
    company: string,
    position: string,
    dateRange: string,
    description: string,
  }
  export type EducationType = {
    id:string,
    school: string,
    degree: string,
    dateRange: string,
    description: string,
  }
