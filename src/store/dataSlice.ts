import { BasicFieldsType, EducationType, ExperienceType, LanguagesFieldsType } from "@/types";


const basicFields:BasicFieldsType = {
  name: '',
  role: '',
  address: '',
  phone: '',
  email: '',
  goals: '',
}
const languagesFields: LanguagesFieldsType[] = [
  {
    id: '1',
    name: '',
    level: ''
  }
]
const experiencesFields:ExperienceType[] = [
  {
    id:'1',
    company:'',
    position:'',
    dateRange:'',
    description:''
  }
]
const educationFields:EducationType[] = [
  {
    id:'1',
    school:'',
    degree:'',
    dateRange:'',
    description:''
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