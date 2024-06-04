import { useBoundStore } from '@/store/store';

import React from 'react'

const ObjectiveResume = () => {
  const boundedStore = useBoundStore((state) => state)
  const componentDataForItem = boundedStore.componentData['b'];
  return (
    <div>
      {
        componentDataForItem ?
          Object.entries(componentDataForItem).map(([key, value]: any) => {
            console.log(key)
            return (
              <div key={key}>
                {key === 'title' ? <h1 className='text-3xl font-bold '>{value}</h1> :
                  <div className='text-justify w-full p-2 max-h-40 break-words'><p className='text-clip'>{value}</p></div>

                }
              </div>
            )
          })
          : <></>

      }
    </div>
  )
}

export default ObjectiveResume