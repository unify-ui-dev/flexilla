export const changeCollapseElState = (collapseElement: HTMLElement, state: "open" | "close") => {
    collapseElement.setAttribute("aria-hidden", state === "open" ? "false" : "true");
    collapseElement.setAttribute("data-state", state);
}



export const measureHeight = async (element: HTMLElement): Promise<number> => {
    return new Promise(resolve => {
        const clientRect = element.getBoundingClientRect();
        resolve(clientRect.height);
    });
}

export const nextFrame = (): Promise<void> => {
    return new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                resolve();
            });
        });
    });
}

export const requestAnimationFrameAsync = (callback: FrameRequestCallback): Promise<void> => {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            callback(0);
            resolve();
        });
    });
}

export const transitionEndAsync = (element: HTMLElement, propertyName: string): Promise<void> => {
    return new Promise(resolve => {
        function onTransitionEnd(event: TransitionEvent) {
            if (event.propertyName === propertyName) {
                element.removeEventListener('transitionend', onTransitionEnd);
                resolve();
            }
        }

        element.addEventListener('transitionend', onTransitionEnd);
    })
}