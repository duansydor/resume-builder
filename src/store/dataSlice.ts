import { BasicFieldsType, EducationType, ExperienceType, LanguagesFieldsType } from "@/types";


const basicFields:BasicFieldsType = {
  name: 'John Doe',
  role: 'Web Designer',
  address: '123 Main Street, Anytown, CA 12345',
  phone: '(123) 456-7890',
  email: 'john.doe@email.com',
  goals: 'To Manage this enterprise',
}
const languagesFields: LanguagesFieldsType[] = [
  {
    id: '1',
    name: 'English',
    level: 'Basic'
  }
]
const experiencesFields:ExperienceType[] = [
  {
    id:'1',
    company:'CompanyFake',
    position:'to fake fake news',
    dateRange:'2021-2022',
    description:'Using fake news to expread the fake philosophy'
  }
]
const educationFields:EducationType[] = [
  {
    id:'1',
    school:'University Test',
    degree:'1st degree',
    dateRange:'2021-2022',
    description:'Some description'
  }
]
type BasicFieldsSliceType = {
  fields: BasicFieldsType,
  languages: LanguagesFieldsType[],
  experiences: ExperienceType[],
  education: EducationType[],
  setField: (field: keyof BasicFieldsType, data: string) => void,
  setLanguage: (id: string, language: LanguagesFieldsType) => void,
  addLanguage:(language:LanguagesFieldsType)=>void,
  removeLanguage:(id:string)=>void,
  setExperience: (id:string, experience: ExperienceType) => void,
  addExperience:(experience:ExperienceType)=>void,
  removeExperience: (id: string) => void,
  setEducation: (id:string,education: EducationType) => void,
  addEducation: (education: EducationType) => void,
  removeEducation: (id: string) => void,
}

export const createBasicFieldsSlice = (set: any, get: any): BasicFieldsSliceType => ({
  fields: basicFields,
  languages: languagesFields,
  experiences: experiencesFields,
  education: educationFields,
  setField: (field, data) => {
    set((state: any) => ({
      ...state,
      fields: {
        ...state.fields,
        [field]: data
      }
    }))
  },
  setLanguage: (id, newLanguage) => {
    set((state: any) => ({
      ...state,
      languages: state.languages.map((lang: any) =>
        lang.id === id ? newLanguage : lang
      )
    }))
  },
  addLanguage: (language) => {
    set((state: any) => ({
      ...state,
      languages: [...state.languages, language]
    }))
  },
  removeLanguage(id) {
    set((state: any) => ({
      ...state,
      languages: state.languages.filter((lang: any) => lang.id !== id)
    }))
  },
  setExperience(id,experience) {
    set((state: any) => ({
      ...state,
      experiences: state.experiences.map((lang: any) =>
        lang.id === id ? experience : lang
      )
    }))
  },
  addExperience(experience) {
    set((state: any) => ({
      ...state,
      experiences: [...state.experiences, experience]
    }))
  },
  removeExperience(id) {
    set((state: any) => ({
      ...state,
      experiences: state.experiences.filter((lang: any) => lang.id !== id)
    }))
  },
  setEducation(id,education) {
    set((state: any) => ({
      ...state,
      education: state.education.map((lang: any) =>
        lang.id === id ? education : lang
      )
    }))
  },
  addEducation(education) {
    set((state: any) => ({
      ...state,
      education: [...state.education, education]
    }))
  },
  removeEducation(id) {
    set((state: any) => ({
      ...state,
      education: state.education.filter((lang: any) => lang.id !== id)
    }))
  },
});