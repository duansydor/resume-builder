import { useBoundStore } from "@/store/store"
import { EducationType, ExperienceType, LanguagesFieldsType } from "@/types"
import { useTranslations } from "next-intl"
import { useEffect } from "react"


export const EditInputField = ({ name, value, store }: { name: string, value: string, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')

    return (
        <>
            <label htmlFor={name}>{fieldsTranslation(name)}</label>
            <input
                name={name}
                placeholder={fieldsTranslation(name)}
                id={name}
                defaultValue={value}
                onChange={e => store.setField(name, e.target.value)}
            />
        </>
    )
}
export const EditGoalInputField = () => {
    const fieldsTranslation = useTranslations('Fields')
    const store = useBoundStore((state) => state)
    useEffect(() => {
        // This will re-render the component whenever 'store.fields.goals' changes
    }, [store.fields.goals])
    return (
        <>
            <label htmlFor="goals">{fieldsTranslation('goals')}</label>
            <textarea
                className="h-80 resize-none"
                name="goals"
                id="goals"
                value={store.fields.goals}
                placeholder={fieldsTranslation('goals')}

                onChange={e => store.setField('goals', e.target.value)}
            />
        </>
    )
}
export const EditLanguageInputField = ({ language, store }: { language: LanguagesFieldsType, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')
    const buttonTranslation = useTranslations('Buttons')
    return (
        <div className="flex flex-row justify-between border-2 border-gray-500 p-2 my-2">
            <div className="flex flex-col">
                <label htmlFor="language">{fieldsTranslation('language')}</label>
                <input
                    name="language"
                    placeholder={fieldsTranslation('language')}
                    id="language"
                    defaultValue={language.name}
                    onChange={e => store.setLanguage(language.id, { ...language, name: e.target.value })}
                />
                <label htmlFor="level">{fieldsTranslation('level')}</label>
                <input
                    name='level'
                    placeholder={fieldsTranslation('level')}
                    id="level"
                    defaultValue={language.level}
                    onChange={e => store.setLanguage(language.id, { ...language, level: e.target.value })}
                />
            </div>
            <button onClick={() => store.removeLanguage(language.id)}>
                {buttonTranslation('removefield')}

            </button>
        </div>
    )
}
export const EditExperienceInputField = ({ experience, store }: { experience: ExperienceType, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')
    const buttonTranslation = useTranslations('Buttons')

    return (
        <div className="flex flex-row justify-between border-2 border-gray-500 p-2 my-2">
            <div className="flex flex-col">
                <label htmlFor="company">{fieldsTranslation('company')}</label>
                <input
                    name="company"
                    placeholder={fieldsTranslation('company')}
                    id="company"
                    defaultValue={experience.company}
                    onChange={e => store.setExperience(experience.id, { ...experience, company: e.target.value })}
                />
                <label htmlFor="experience-position">{fieldsTranslation('position')}</label>
                <input
                    name="position"
                    placeholder={fieldsTranslation('position')}
                    id="experience-position"

                    defaultValue={experience.position}
                    onChange={e => store.setExperience(experience.id, { ...experience, position: e.target.value })}
                />
                <label htmlFor="experience-daterange">{fieldsTranslation('daterange')}</label>
                <input
                    name="experience-daterange"
                    placeholder={fieldsTranslation('daterange')}
                    id="experience-daterange"
                    defaultValue={experience.dateRange}
                    onChange={e => store.setExperience(experience.id, { ...experience, dateRange: e.target.value })}
                />
                <label htmlFor="experience-description">{fieldsTranslation('description')}</label>
                <input
                    placeholder={fieldsTranslation('description')}
                    id="experience-description"
                    name="experience-description"
                    defaultValue={experience.description}
                    onChange={e => store.setExperience(experience.id, { ...experience, description: e.target.value })}
                />
            </div>
            <button onClick={() => store.removeExperience(experience.id)}>
                {buttonTranslation('removefield')}

            </button>
        </div>
    )
}
export const EditEducationInputField = ({ education, store }: { education: EducationType, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')
    const buttonTranslation = useTranslations('Buttons')

    return (
        <div className="flex flex-row justify-between border-2 border-gray-500 p-2 my-2">
            <div className="flex flex-col">
                <label htmlFor="education-school">{fieldsTranslation('school')}</label>
                <input
                    name="school"
                    id="education-school"
                    placeholder={fieldsTranslation('school')}
                    defaultValue={education.school}
                    onChange={e => store.setEducation(education.id, { ...education, school: e.target.value })}
                />
                <label htmlFor="education-degree">{fieldsTranslation('degree')}</label>
                <input
                    name="education-degree"
                    placeholder={fieldsTranslation('degree')}
                    id="education-degree"
                    defaultValue={education.degree}
                    onChange={e => store.setEducation(education.id, { ...education, degree: e.target.value })}
                />
                <label htmlFor="education-daterange">{fieldsTranslation('daterange')}</label>
                <input
                    name="education-daterange"
                    placeholder={fieldsTranslation('daterange')}
                    id="education-daterange"
                    defaultValue={education.dateRange}
                    onChange={e => store.setEducation(education.id, { ...education, dateRange: e.target.value })}
                />
                <label htmlFor="education-description">{fieldsTranslation('description')}</label>
                <input
                    name="education-description"
                    placeholder={fieldsTranslation('description')}
                    id="education-description"
                    defaultValue={education.description}
                    onChange={e => store.setEducation(education.id, { ...education, description: e.target.value })}
                />
            </div>
            <button onClick={() => store.removeEducation(education.id)}>
                {buttonTranslation('removefield')}
            </button>
        </div>
    )
}