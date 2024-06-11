import { useBoundStore } from "@/store/store"
import { EducationType, ExperienceType, LanguagesFieldsType } from "@/types"
import { useTranslations } from "next-intl"

export const EditInputField = ({ name, value, store }: { name: string, value: string, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')
    return (
        <>
            <label htmlFor={name}>{fieldsTranslation(name)}</label>
            {name === 'goals' ? <textarea
                className="h-80 resize-none"
                name={name}
                defaultValue={value}
                placeholder={fieldsTranslation('goals')}

                onChange={e => store.setField(name, e.target.value)}
            /> : <input
                name={name}
                placeholder={fieldsTranslation(name)}

                defaultValue={value}
                onChange={e => store.setField(name, e.target.value)}
            />}
        </>
    )
}
export const EditLanguageInputField = ({ language, store }: { language: LanguagesFieldsType, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')
    return (
        <div className="flex flex-row justify-between border-2 border-gray-500 p-2 my-2">
            <div className="flex flex-col">
                <label htmlFor="language">{fieldsTranslation('language')}</label>
                <input
                    name="language"
                    placeholder={fieldsTranslation('language')}

                    defaultValue={language.name}
                    onChange={e => store.setLanguage(language.id, { ...language, name: e.target.value })}
                />
                <label htmlFor='level'>{fieldsTranslation('level')}</label>
                <input
                    name='level'
                    placeholder={fieldsTranslation('level')}

                    defaultValue={language.level}
                    onChange={e => store.setLanguage(language.id, { ...language, level: e.target.value })}
                />
            </div>
            <button onClick={()=>store.removeLanguage(language.id)}>Remove</button>
        </div>
    )
}
export const EditExperienceInputField = ({ experience, store }: { experience: ExperienceType, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')

    return (
        <div className="flex flex-row justify-between border-2 border-gray-500 p-2 my-2">
            <div className="flex flex-col">
                <label htmlFor="company">{fieldsTranslation('company')}</label>
                <input
                    name="company"
                    placeholder={fieldsTranslation('company')}
                    
                    defaultValue={experience.company}
                    onChange={e => store.setExperience(experience.id, { ...experience, company: e.target.value})}
                />
                <label htmlFor="position">{fieldsTranslation('position')}</label>
                <input
                    name="position"
                    placeholder={fieldsTranslation('position')}

                    defaultValue={experience.position}
                    onChange={e => store.setExperience(experience.id, { ...experience, position: e.target.value})}
                />
                <label htmlFor="daterange">{fieldsTranslation('daterange')}</label>
                <input
                    name="daterange"
                    placeholder={fieldsTranslation('daterange')}
                    
                    defaultValue={experience.dateRange}
                    onChange={e => store.setExperience(experience.id, { ...experience, dateRange: e.target.value})}
                />
                <label htmlFor="description">{fieldsTranslation('description')}</label>
                <input
                    placeholder={fieldsTranslation('description')}

                    name="description"
                    defaultValue={experience.description}
                    onChange={e => store.setExperience(experience.id, { ...experience, description: e.target.value})}
                />
            </div>
            <button onClick={()=>store.removeExperience(experience.id)}>Remove</button>
        </div>
    )
}
export const EditEducationInputField = ({ education, store }: { education: EducationType, store: any }) => {
    const fieldsTranslation = useTranslations('Fields')

    return (
        <div className="flex flex-row justify-between border-2 border-gray-500 p-2 my-2">
            <div className="flex flex-col">
                <label htmlFor="school">{fieldsTranslation('school')}</label>
                <input
                    name="school"
                    placeholder={fieldsTranslation('school')}
                    defaultValue={education.school}
                    onChange={e => store.setEducation(education.id, { ...education, school: e.target.value})}
                />
                <label htmlFor="degree">{fieldsTranslation('degree')}</label>
                <input
                    name="degree"
                    placeholder={fieldsTranslation('degree')}

                    defaultValue={education.degree}
                    onChange={e => store.setEducation(education.id, { ...education, degree: e.target.value})}
                />
                <label htmlFor="daterange">{fieldsTranslation('daterange')}</label>
                <input
                    name="daterange"
                    placeholder={fieldsTranslation('daterange')}

                    defaultValue={education.dateRange}
                    onChange={e => store.setEducation(education.id, { ...education, dateRange: e.target.value})}
                />
                <label htmlFor="description">{fieldsTranslation('description')}</label>
                <input
                    name="description"
                    placeholder={fieldsTranslation('description')}

                    defaultValue={education.description}
                    onChange={e => store.setEducation(education.id, { ...education, description: e.target.value})}
                />
            </div>
            <button onClick={()=>store.removeEducation(education.id)}>Remove</button>
        </div>
    )
}