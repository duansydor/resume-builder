import { useBoundStore } from '@/store/store'
import React, { useEffect } from 'react'

const LanguageResume = () => {
  const boundedStore = useBoundStore((state) => state)
  const componentDataForItem = boundedStore.componentData['e'];
  type languageType = {
    id: string,
    language: string,
    level: string
  }
  return (
    <div>
      <h1 className='text-3xl font-bold '>Languages</h1>
      {
        componentDataForItem.length > 0 ?componentDataForItem.map((language: languageType) => {
          return (
            <div>
                <div className='flex gap-2 mt-2'>
                  <span className='text-md font-bold'>
                  {language.language}:
                  </span>
                  <span>
                  {language.level}
                  </span>
                </div>
            </div>
          )
        })
        :
        <div>Sem dados</div>
      }
    </div>
  )
}

export default LanguageResume