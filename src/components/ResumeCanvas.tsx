'use client'
import GridLayout from "react-grid-layout";
import { useBoundStore } from '@/store/store';
import { LayoutItemType } from "@/types";

const ResumeCanvas = () => {
  const boundedStore = useBoundStore((state)=>state)
  return (
    <div className='mt-20 w-screen overflow-scroll'>
      <div className='relative px-72'>
        <GridLayout
          className=""
          layout={boundedStore.layout}
          cols={12}
          width={720}
          autoSize={true}
          margin={[0, 10]}
          rowHeight={100}
          onLayoutChange={(layout:LayoutItemType[]) => {
            boundedStore.setLayout(layout)
          }}
        >
          {boundedStore.layout.map((item) => {
            const matchingComponent = boundedStore.components.find(
              (component) => component.i === item.i
            );
            return (
              <div className='border-2 border-primary z-0 w-[700px]' key={item.i}>
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