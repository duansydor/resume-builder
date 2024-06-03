import React from 'react'
import GridLayout from "react-grid-layout";
import { useBoundStore } from '@/store/store';

const ResumeCanvas = () => {
  const boundedStore = useBoundStore((state)=>state)
  return (
    <div className='relative ml-72 mt-20'>
      <div className=''>
        <GridLayout
          className=""
          layout={boundedStore.layout}
          cols={12}
          autoSize={true}
          width={720}
          margin={[0, 10]}
          rowHeight={100}
        >
          {boundedStore.layout.map((item) => {
            const matchingComponent = boundedStore.components.find(
              (component) => component.i === item.i
            );
            return (
              <div className='border-2 border-primary z-0' key={item.i}>
                {matchingComponent ? (
                  <matchingComponent.component />
                ) : (
                  <div>Add</div>
                )}
                <button className='z-50 absolute -right-16 top-0 bg-red-500 text-white p-1 rounded-md' onClick={e => {
                  boundedStore.setHidden(item.i, false)
                  boundedStore.removeLayoutItem(item.i)
                }}>Delete</button>
              </div>
            )
          })}
        </GridLayout>

      </div>
    </div>
  )
}

export default ResumeCanvas