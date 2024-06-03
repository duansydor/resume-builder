import EducationResume from "@/components/EducationResume"
import GeneralResumeBlock from "@/components/GeneralResumeBlock"
import LanguageResume from "@/components/LanguageResume"
import ObjectiveResume from "@/components/ObjectiveResume"
import ResumeHeader from "@/components/ResumeHeader"
import { componentsType } from "@/types"

type componentSlice = {
    components: componentsType[],
    setHidden: (key: string, isHidden: boolean) => void
}
const availableComponents = [
    { i: "a", name: 'Header', component: ResumeHeader, isHidden: true },
    { i: "b", name: 'Experience', component: GeneralResumeBlock, isHidden: true },
    { i: "c", name: 'ObjectiveResume', component: ObjectiveResume, isHidden: true },
    { i: "d", name: 'EducationResume', component: EducationResume, isHidden: true },
    { i: "e", name: 'LanguageResume', component: LanguageResume, isHidden: true },
    // Add more components as needed
] as componentsType[]


export const createComponentsSlice = (set: any, get: any): componentSlice => ({
    components: availableComponents,
    setHidden: (key: string, isHidden: boolean) => {
        const newComponents = [...get().components];
        const index = newComponents.findIndex((item) => item.i === key);
        if (index !== -1) {
            newComponents[index].isHidden = isHidden;
        }
        set({ components: newComponents });
    },

})