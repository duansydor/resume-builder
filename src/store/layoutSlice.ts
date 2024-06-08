import { LayoutItemType } from '@/types'

type layoutSlice = {
    layout: LayoutItemType[],
    // pushLayoutItem: (item: LayoutItemType) => void,
    setLayout: (layout: LayoutItemType[]) => void,
    removeLayoutItem: (key: string) => void,
    pushLayoutItem: (item: LayoutItemType) => void,
}
const BasicLayout = [
    { i: "header", x: 0, y: 0, w: 12, h: 2, maxH: 2, minW: 12, static: false, isResizable: true },
    { i: "goal", x: 0, y: 0, w: 12, h: 2, minW: 12, maxW: 12, maxH: 2, static: false, isResizable: true },
    { i: "education", x: 0, y: 0, w: 12, h: 2, minW: 12, maxW: 12, maxH: 2, static: false, isResizable: true },
    { i: "experiences", x: 0, y: 0, w: 12, h: 2, minW: 12, maxW: 12, maxH: 2, static: false, isResizable: true },
    { i: "languages", x: 0, y: 0, w: 12, h: 2, minW: 12, maxW: 12, maxH: 2, static: false, isResizable: true },
] as LayoutItemType[]
export const createLayoutSlice = (set:any, get:any):layoutSlice => ({
    layout: BasicLayout,
    removeLayoutItem: (key: string) => {
        set((state: { layout: any[] }) => ({
            layout: state.layout.filter((item: any) => item.i !== key),
        }))
    },
    pushLayoutItem: (item: LayoutItemType) =>
    set((state: { layout: any[] }) => ({
      layout: [...state.layout, item],
    })),
    setLayout: (layout: LayoutItemType[]) => set({ layout })
})
