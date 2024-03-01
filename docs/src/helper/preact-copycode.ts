import { createRef } from "preact";

export const copyToClipboard = async ({ snippet, onCopy, onCopyCompleted, timeout = 1000 }: { snippet: HTMLPreElement | string | undefined | null, onCopy: (() => void), onCopyCompleted: (() => void), timeout?: number }) => {
    const timeoutRef = createRef<ReturnType<typeof setTimeout>>();
    if (snippet instanceof HTMLPreElement || typeof snippet === 'string') {
        let snippetText = ""
        if (typeof snippet === 'string') {
            snippetText = snippet
        } else {
            snippetText = snippet.innerText;
        }
        await navigator.clipboard.writeText(snippetText);
        onCopy()
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
            onCopyCompleted()
        }, timeout);
    }
};