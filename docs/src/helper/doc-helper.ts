import { sidebarItems } from "@components/docs/DataItems.astro";

interface Slug {
    title: string;
    slug: string;
    draft?: boolean
}

interface MetaData {
    description: string,
    keywords: string,
    name: string
}

const flatMap: Slug[] = sidebarItems.flatMap((section) => section.items.map(({ text, href, draft }) => ({ title: text, slug: href, draft })))

export const sidebarItemFlaterned: MetaData[] = sidebarItems.flatMap((section) => section.items.map(({ description, keywords, href }) => ({ name: href, description, keywords })))

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