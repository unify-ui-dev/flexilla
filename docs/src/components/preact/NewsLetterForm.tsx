import { useSignal } from '@preact/signals';

export function NewsLetterForm() {

    const responseMessage = useSignal<{ type: string, message: string }>({ type: "", message: "" });

    const responseData = responseMessage.value

    async function submit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch("/api/subsribe", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.message) {
            responseMessage.value = { type: data.type, message: data.message }
        }
    }
    return (
        <>
            <form
                onSubmit={submit}
                class="w-full max-w-2xl flex flex-col gap-y2 relative"
            >
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    class="px5 py3 md-py2.5 rd-xl bg-zinc2/70 dark-bg-zinc8/30 text-zinc7 dark-text-zinc3 outline-transparent focus-outline focus-outline-zinc2 dark-focus-outline-zinc8 flex-1 text-sm"
                    required
                />

                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="absolute top-1 right-1 md-top-0 md-right-0 md-relative px4 md-w-full rd-lg md-rd-xl h9 flex items-center justify-center outline-offset-2 bg-gradient-to-t from-zinc2 to-zinc1 dark-from-zinc9 dark-to-zinc8 b b-zinc2/80 dark-b-zinc8/90 text-sm" aria-label="subscribe to news letter">
                    Subscribe
                </button>
                {
                    responseData.type !== "none" ? (
                        responseData.type === "info" ? (
                            <span class="absolute left-0 top-full text-blue7 dark-text-blu5">
                                {responseData.message}
                            </span>
                        ) : responseData.type === "success" ? (
                            <span class="absolute left-0 top-full text-emerald7 dark-text-emerald5">
                                {responseData.message}
                            </span>
                        ): responseData.type === "error" ? (
                            <span class="absolute left-0 top-full text-red7 dark-text-red5">
                                {responseData.message}
                            </span>
                        ) : null
                    ) : null
                }
            </form>
        </>
    )
}
