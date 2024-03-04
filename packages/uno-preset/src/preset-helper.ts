import { Variant } from "unocss";

export type PrimitivesOptions = {
    /**
     * @default 'fx'
     */
    prefix?: string;
    /**
     * @default 'visible|hidden|active|inactive|open|close'
     */
    variants?: string;
    /**
     * @default 'data-state'
     */
    selector?: string;
    isAttrBoolean?: boolean;
}

export const presetVariants = (options: PrimitivesOptions = {}): Variant => {
    const {
        prefix = 'fx',
        variants = 'visible|hidden|active|inactive|open|close',
        selector = 'data-state',
        isAttrBoolean = false,
    } = options;

    return {
        name: 'unify-ui-variant',
        match: (matcher: string) => {
            const regex = new RegExp(`^${prefix}(-not)?-(${variants})[:-]`);
            const match = matcher.match(regex);

            if (!match) return matcher;
            const attrGen = !isAttrBoolean
                ? `[${selector}~='${match[2]}']`
                : `[${selector}-${match[2]}]`;

            return {
                matcher: matcher.slice(match[0].length),
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                selector: (s: any) => (match[1] === '-not')
                    ? `${s}[${selector}]:not(${attrGen}),:where([${selector}]:not(${attrGen})) ${s}:not(${selector})`
                    : `${s}${attrGen},:where(${attrGen}) ${s}`,
            };
        },
    };
}