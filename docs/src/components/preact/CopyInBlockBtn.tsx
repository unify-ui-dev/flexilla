
import { copyToClipboard } from '@helper/preact-copycode';
import { useSignal } from '@preact/signals';
import { createRef } from 'preact';


export function CopyInBlockBtn() {
    const isCopied = useSignal(false)
    const btnBoxRef = createRef<HTMLDivElement>();
    const isCopiedValue = isCopied.value

    const copyToClipboard_ = async () => {
        const codePre = btnBoxRef.current?.closest("[data-code-component]")?.querySelector("pre")
        copyToClipboard({
            snippet:codePre,
            onCopy() {
                isCopied.value = true;
            },
            onCopyCompleted() {
                isCopied.value = false;
            },
        })
    };

    return (
        <>
            <div ref={btnBoxRef} className={"absolute right-2 top-2 z20 invisible op0 group-hover-visible group-hover-op100"}>
                <span class={`absolute before-absolute before-top-0 before--right-2px before-translate-y-6px before-content-empty before-size-2.5 before-rotate-45 before-bg-emerald7/50 before-dark-bg-emerald8/90 before-backdrop-blur-md right-10 top-1/2 -translate-y-1/2 px4 py0.5 text-sm rd-lg bg-emerald6/50 dark-bg-emerald5/50 backdrop-blur-md text-white  ${isCopiedValue ? "visible translate-y-0 op100 ease-linear duration-100" : "invisible op0 -translate-y-2 transition-opacity ease"}`}>
                    Copied!
                </span>
                <button
                    className="flex p2 rd-md backdrop-blur-xl bg-zinc2/80 dark-bg-zinc8/80 focus-bg-zinc3/90 dark-focus-bg-zinc7/80 text-zinc7 dark-text-zinc3 children-flex"
                    aria-label='copy code'
                    onClick={() => {
                        copyToClipboard_();
                    }}
                    disabled={isCopiedValue}
                >
                    {isCopiedValue ? (
                        <span aria-hidden="true" class="flex i-fx-copied"></span>
                    ) : (
                        <span aria-hidden="true" class="flex i-carbon-copy"></span>
                    )}
                </button>
            </div>
        </>
    );
}