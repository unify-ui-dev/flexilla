import { sidebarItems } from "@components/docs/Sidebar.astro";

interface Slug {
    title: string;
    slug: string;
    draft?: boolean
}

const flatMap: Slug[] = sidebarItems.flatMap((section) => section.items.map(({ text, href, draft }) => ({ title: text, slug: href, draft })))

const getActiveIndex = (array_: Slug[], slug: string) => {
    return array_.findIndex((item) => item.slug === slug)
}

export const getPagger = (href: string) => {
    const flatenedItems = [...flatMap]
    const activeIndex = getActiveIndex(flatenedItems, `/docs/${href}`)
    const prev = activeIndex !== 0 ? flatenedItems[activeIndex - 1] : null
    const next = activeIndex !== flatenedItems.length - 1 ? flatenedItems[activeIndex + 1] : null
    const current = flatenedItems[activeIndex]
    return { prev, next, current }
}