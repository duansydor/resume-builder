
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
    name:string,
    component:() => JSX.Element,
    i:string,
    isHidden:boolean
}