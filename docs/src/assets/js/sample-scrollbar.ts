import SimpleBar from 'simplebar';


import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;


const customScrollbarBuild = () => {
    const costumScrollBars = document.querySelectorAll('[data-hidden-scrollbar]')
    if (costumScrollBars) costumScrollBars.forEach(costumScrollBar => {
        if (costumScrollBar instanceof HTMLElement) {
            new SimpleBar(costumScrollBar)
        }
    })
}

customScrollbarBuild()