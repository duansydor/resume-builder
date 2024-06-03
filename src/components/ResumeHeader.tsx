import { useBoundStore } from '@/store/store'
import React from 'react'


const ResumeHeader = () => {
    const boundedStore = useBoundStore((state)=>state);
    const componentDataForItem = boundedStore.componentData.a;


    return (
        <div className='flex'>
            <div className='p-2'>
                
                { 
                componentDataForItem?
                Object.entries(componentDataForItem).map(([key, value]:any) => {
                    console.log(key)
                    return (
                        <div key={key}>
                            {key === 'name'?<h1 className='text-3xl font-bold '>{value}</h1>:
                            <h3 className={`${key === 'role'?'-mt-2':''}`}>{value}</h3>
                            
                        }
                        </div>
                    )
                })
                : <></>

                }
            </div>
        </div>
    )
}

export default ResumeHeader