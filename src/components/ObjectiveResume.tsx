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
                  <h3 className={`${key === 'role' ? '-mt-2' : ''}`}>{value}</h3>

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