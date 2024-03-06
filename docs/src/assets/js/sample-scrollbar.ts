import {
    OverlayScrollbars
} from 'overlayscrollbars';


// document.querySelectorAll('[data-hidden-scrollbar]')
const elements = Array.from(document.querySelectorAll('[data-hidden-scrollbar-s]')) as HTMLElement[]

for (const element of elements) {
    OverlayScrollbars(element, {});
}
