import {
    defineConfig,
    presetIcons,
    presetMini,
    presetAttributify,
    presetUno,
  } from "unocss";
  
  export default defineConfig({
  
    presets: [
      presetUno(),
      presetAttributify(),
      presetMini({
        dark: "class",
      }),
      presetIcons({
        collections: {
          fx: {
            'expand': '<svg viewBox="0 0 56 56"><path fill="currentColor" d="M28 18.672c1.008 0 1.875-.82 1.875-1.805V9.11l-.164-3.914l2.016 2.086l3.046 3.07c.375.352.82.563 1.29.563c.984 0 1.71-.703 1.71-1.664c0-.54-.21-.96-.609-1.312L29.36.672C28.868.227 28.493.1 28 .1c-.469 0-.867.127-1.36.572l-7.78 7.265c-.422.352-.633.774-.633 1.313c0 .96.703 1.664 1.71 1.664c.47 0 .938-.21 1.29-.562l3.046-3.07l2.016-2.087l-.14 3.914v7.758c0 .985.843 1.805 1.851 1.805M8.266 43.727h7.664v-3.54H8.758c-2.11 0-3.398-1.406-3.398-3.328V19.141c0-1.922 1.289-3.305 3.398-3.305h7.172v-3.54H8.266c-3.89 0-6.633 2.65-6.633 6.259v18.914c0 3.586 2.742 6.258 6.633 6.258m39.468 0c3.914 0 6.633-2.672 6.633-6.258V18.555c0-3.61-2.719-6.258-6.633-6.258H40.07v3.539h7.172c2.11 0 3.399 1.383 3.399 3.305v17.718c0 1.922-1.29 3.328-3.399 3.328H40.07v3.54ZM28 55.96c.492 0 .867-.188 1.36-.633l7.804-7.266c.399-.351.61-.773.61-1.312c0-.961-.704-1.64-1.688-1.64c-.469 0-.937.187-1.312.538l-3.047 3.07l-2.016 2.087l.164-3.914v-7.735c0-1.008-.867-1.828-1.875-1.828s-1.852.82-1.852 1.828v7.735l.141 3.914l-2.016-2.086l-3.046-3.07a1.777 1.777 0 0 0-1.266-.54c-1.008 0-1.734.68-1.734 1.641c0 .539.21.96.633 1.313l7.78 7.265c.493.445.891.633 1.36.633"/></svg>',
            'expand-two-way': '<svg viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.5 2.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm14.5 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zM6.53 4.97a.75.75 0 0 1 0 1.06L4.56 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m2.94 1.06a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L11.44 8z" clip-rule="evenodd"/></svg>',
            'tabs': '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M14 4V2H0v12h16V4zm-4-1h3v1h-3zM6 3h3v1H6zm9 10H1V3h4v2h10z"/></svg>',
            'dropdown': '<svg viewBox="0 0 32 32"><path fill="currentColor" d="M26 6V2H2v10h9v18h19V6ZM4 10V4h20v2H11v4Zm24 18H13V8h15Z"/><path fill="currentColor" d="M15 11h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7z"/></svg>',
            'overlay-modal': '<svg viewBox="0 0 32 32"><path fill="currentColor" d="M28 8h-4V4a2.002 2.002 0 0 0-2-2H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h4v4a2.002 2.002 0 0 0 2 2h18a2.002 2.002 0 0 0 2-2V10a2.002 2.002 0 0 0-2-2M4 22V4h18v4H10a2.002 2.002 0 0 0-2 2v12Zm18 0h-2.586L10 12.586V10h2.586L22 19.416Zm-12-6.586L16.586 22H10Zm12.001 1.173L15.414 10H22ZM10 28v-4h12a2.002 2.002 0 0 0 2-2V10h4v18Z"/></svg>',
            'offcanvas': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3.615 19q-.69 0-1.152-.462Q2 18.075 2 17.385V6.615q0-.69.463-1.152Q2.925 5 3.615 5h1.808q.69 0 1.153.463q.462.462.462 1.152v10.77q0 .69-.462 1.152Q6.113 19 5.423 19zm0-.975h1.808q.27 0 .442-.173t.173-.442V6.59q0-.269-.173-.442t-.442-.173H3.615q-.269 0-.442.173T3 6.59v10.82q0 .269.173.442t.442.173m7.423.975q-.69 0-1.152-.462q-.463-.463-.463-1.153V6.615q0-.69.463-1.152Q10.348 5 11.038 5h9.347q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-.975h9.347q.269 0 .442-.173T21 17.41V6.59q0-.269-.173-.442t-.442-.173h-9.347q-.269 0-.442.173t-.173.442v10.82q0 .269.173.442t.442.173m-5 0V5.975zm4.385 0V5.975z"/></svg>',
            'popper': '<svg viewBox="0 0 48 48"><g fill="none"><path d="M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0m0 0h11m0 0l-4-4m4 4l-4 4"/><path d="M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0m0 0H21m0 0l4-4m-4 4l4 4"/><path d="M33 11a5 5 0 1 0 10 0a5 5 0 0 0-10 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 16a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0 0v11m0 0l4-4m-4 4l-4-4"/><path d="M5 37a5 5 0 1 1 10 0a5 5 0 0 1-10 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 32a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 0V21m0 0l4 4m-4-4l-4 4"/></g></svg>',
            'tooltip': '<svg viewBox="0 0 20 20"><path fill="currentColor" d="M5.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .799.401c-.202.666-.503 1.095-.653 1.245a.5.5 0 1 0 .708.708C6.283 8.424 7 7.23 7 5.5a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .799.401c-.202.666-.503 1.095-.653 1.245a.5.5 0 1 0 .708.708C9.283 8.424 10 7.23 10 5.5a.5.5 0 0 0-.5-.5zM2 4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.42l-1.48 2.738a.5.5 0 0 1-.879.002L5.562 12H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.858a.5.5 0 0 1 .439.26l1.2 2.194l1.186-2.192a.5.5 0 0 1 .44-.262H11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2.5 14h3.017l.547 1H2.5a.5.5 0 0 1 0-1m15 1H8.935l.54-1H17.5a.5.5 0 0 1 0 1m-15 2a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z"/></svg>',
            'auto-resize': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13 9v6h3l-4 4l-4-4h3V9H8l4-4l4 4zM4 2h16v2H4zm0 18h16v2H4z"/></svg>',
            'range-slide': '<svg viewBox="0 0 14 4"><path fill="currentColor" d="M2.31 2.5H.5C.22 2.5 0 2.28 0 2s.22-.5.5-.5h1.81c-.04.16-.07.33-.07.5s.03.34.07.5m11.19-1H6.17c.04.16.07.33.07.5s-.03.34-.07.5h7.33c.28 0 .5-.22.5-.5s-.22-.5-.5-.5m-7.33 1c-.22.86-1 1.5-1.93 1.5s-1.71-.64-1.93-1.5c-.04-.16-.07-.33-.07-.5s.03-.34.07-.5C2.53.64 3.31 0 4.24 0s1.71.64 1.93 1.5c.04.16.07.33.07.5s-.03.34-.07.5M5.24 2c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"/></svg>',
            'dismissible': '<svg viewBox="0 0 20 20"><path fill="currentColor" d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 4.793l-1.146-1.147a.5.5 0 0 0-.708.708L13.793 5.5l-1.147 1.146a.5.5 0 0 0 .708.708L14.5 6.207l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 5.5zM17 16v-5.6a5.507 5.507 0 0 0 1-.657V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.022a5.5 5.5 0 0 0 .185 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.794a5.51 5.51 0 0 0 1 1.48V17H16a1 1 0 0 0 1-1m-11-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/></svg>',
            'theme': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07zm-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13zm-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87zM19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35zm4.33-2.7l1.15-2.77l2.2 2.54zm1.15-4.96l-1.14-2.78l3.34.24zM9.63 18.93l2.77 1.15l-2.53 2.19z"/></svg>',
            'command-menu': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3.045 18.894L9.94 12L3.045 5.106a.75.75 0 0 1 1.06-1.061l7.425 7.425a.75.75 0 0 1 0 1.06l-7.424 7.425a.75.75 0 0 1-1.061-1.06Zm8.205.606a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5z"/></svg>',
            'tailwind-ico': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51m-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51"/></svg>',
            'unocss-ico': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.86 18.4a5.57 5.57 0 1 1 11.14 0a5.57 5.57 0 0 1-11.14 0m0-12.8A5.57 5.57 0 1 1 24 5.602v5.013a.557.557 0 0 1-.557.557H13.417a.557.557 0 0 1-.557-.557zm-1.72 12.8A5.57 5.57 0 1 1 0 18.4v-5.014a.557.557 0 0 1 .557-.557h10.026a.557.557 0 0 1 .557.557z"/></svg>',
            'html-ico': '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M.906 0 2.5 17.683l7.5 2.159 7.544-2.158L19.092 0H.906ZM15.1 6H7.044l.174 2h7.776l-.632 6.513-4.29 1.371-4.326-1.444-.29-2.909H7.5l.163 1.4 2.424.809 2.37-.757.3-2.982H5.368L4.8 4h10.519L15.1 6Z" /></svg>',
            'css-ico': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.772 3.364A1 1 0 0 0 20 3H6a1 1 0 0 0 0 2h12.786l-.78 4H5a1 1 0 0 0 0 2h12.615l-1.163 5.955l-6.323 1.997l-5.41-1.7l.203-1.064a1 1 0 0 0-1.964-.375l-.37 1.94a1 1 0 0 0 .682 1.141l6.56 2.06a1.002 1.002 0 0 0 .601 0l7.19-2.27a1 1 0 0 0 .68-.763l2.68-13.73a1 1 0 0 0-.209-.827"/></svg>',
            'js-ico': '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.494 2.494 0 0 1-.224 1.02a2.514 2.514 0 0 1-1.515 1.364a2.52 2.52 0 0 1-1.035.115a1.853 1.853 0 0 1-.214.012a2.51 2.51 0 0 1-1.673-.65a2.524 2.524 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1c.209 0 1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25c.003-.357.078-.699.224-1.02a2.5 2.5 0 0 1 .614-.842a2.48 2.48 0 0 1 .9-.52a3.476 3.476 0 0 1 2.023 0a2.524 2.524 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.743.743 0 0 1-.22-.53c0-.952-1.041-1-1.25-1c-.209 0-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.768.768 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>',
            'ts-ico': '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M9.25 6.51c0 .413.447.648 1.514 1.048c1.052.394 2.486.931 2.486 2.452v.002a2.492 2.492 0 0 1-.224 1.018a2.514 2.514 0 0 1-1.515 1.364c-.33.11-.687.15-1.035.115a1.853 1.853 0 0 1-.214.012a2.51 2.51 0 0 1-1.673-.65a2.524 2.524 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53c0 .952 1.041 1 1.25 1c.209 0 1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048c-1.052-.394-2.486-.93-2.486-2.452c.003-.357.078-.699.224-1.02c.144-.32.351-.605.614-.84a2.48 2.48 0 0 1 .901-.523a2.563 2.563 0 0 1 1.035-.116a2.44 2.44 0 0 1 .987.116a2.536 2.536 0 0 1 1.738 2.381c0 .202-.078.39-.22.532a.77.77 0 0 1-1.061 0a.743.743 0 0 1-.22-.53c0-.952-1.041-1-1.25-1c-.209 0-1.25.048-1.25 1m-7-2.5h4.5a.749.749 0 0 1 .53 1.28a.743.743 0 0 1-.53.22h-1.5v6.25a.749.749 0 0 1-1.28.53a.743.743 0 0 1-.22-.53V5.51h-1.5a.749.749 0 0 1-.53-1.28a.743.743 0 0 1 .53-.22"/></svg>',
            'astro-ico': '<svg viewBox="0 0 128 128"><path fill="currentColor" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735Zm0 0"/></svg>',
            'laravel-ico': '<svg viewBox="0 0 32 32"><path fill="currentColor" d="M31.526 7.24c.01.042.016.089.016.13v6.87a.496.496 0 0 1-.25.432l-5.766 3.323v6.578a.496.496 0 0 1-.25.432L13.24 31.932a.394.394 0 0 1-.089.036l-.031.016a.524.524 0 0 1-.255 0a.154.154 0 0 1-.036-.016a.416.416 0 0 1-.083-.036L.715 25.005a.502.502 0 0 1-.255-.432V3.964c0-.042.01-.089.021-.13c.005-.016.01-.026.016-.042l.031-.078c.005-.016.021-.026.031-.042l.047-.063a.295.295 0 0 0 .047-.036c.021-.016.036-.031.057-.042L6.726.067a.502.502 0 0 1 .5 0l6.021 3.464c.021.01.036.026.052.042l.052.036a.573.573 0 0 1 .042.063c.01.01.026.026.036.042l.031.078c.005.016.016.026.016.042a.351.351 0 0 1 .021.13v12.87l5.01-2.885V7.371a.491.491 0 0 1 .037-.172l.031-.078c.01-.021.026-.031.036-.047c.016-.021.026-.042.042-.057s.036-.026.052-.036a.213.213 0 0 1 .052-.042l6.021-3.464a.478.478 0 0 1 .5 0l6.016 3.464c.021.01.036.026.057.042c.016.01.031.021.047.036s.031.036.047.057c.01.016.026.026.031.047c.016.026.021.052.031.078c.01.01.016.026.021.042zm-.99 6.708V8.24l-2.104 1.208l-2.906 1.677v5.708zm-6.01 10.333v-5.714l-2.865 1.63l-8.167 4.667v5.766zM1.458 4.833v19.448l11.031 6.349v-5.766l-5.766-3.266c-.021-.01-.036-.026-.052-.042c-.016-.01-.036-.021-.047-.036h-.005c-.016-.016-.026-.036-.042-.052c-.01-.016-.026-.031-.036-.052a.238.238 0 0 1-.026-.063c-.01-.021-.021-.036-.026-.057s-.01-.047-.01-.073c-.005-.021-.01-.036-.01-.057V7.718L3.563 6.041zm5.516-3.755l-5.01 2.885l5.01 2.885l5.01-2.885zm2.609 18.011l2.906-1.677V4.834l-2.104 1.208l-2.911 1.677v12.578zM25.026 4.484L20.01 7.369l5.016 2.885l5.01-2.885zm-.5 6.641L19.51 8.24v5.708l2.906 1.677l2.109 1.208zM12.99 23.995l11.026-6.292l-5.005-2.885L7.99 21.162z"/></svg>',
            'symphony-ico': '<svg viewBox="0 0 256 257"><circle cx="128" cy="128.827" r="128" fill="#1A171B"/><path fill="#FFF" d="M183.706 48.124c-12.986.453-24.32 7.61-32.757 17.51c-9.342 10.855-15.557 23.73-20.035 36.872c-8.01-6.565-14.19-15.064-27.041-18.77c-9.933-2.852-20.366-1.674-29.96 5.474c-4.545 3.395-7.676 8.527-9.165 13.351c-3.855 12.537 4.053 23.694 7.645 27.7l7.853 8.416c1.619 1.65 5.518 5.955 3.612 12.127c-2.06 6.71-10.15 11.055-18.448 8.495c-3.706-1.13-9.03-3.891-7.838-7.779c.493-1.59 1.631-2.78 2.241-4.155c.56-1.181.827-2.067.997-2.587c1.516-4.95-.555-11.39-5.857-13.025c-4.946-1.516-10.007-.315-11.969 6.054c-2.225 7.235 1.237 20.366 19.783 26.084c21.729 6.676 40.11-5.155 42.717-20.586c1.642-9.665-2.722-16.845-10.717-26.08l-6.514-7.204c-3.946-3.942-5.301-10.661-1.217-15.825c3.446-4.356 8.354-6.215 16.392-4.029c11.733 3.186 16.963 11.327 25.69 17.893c-3.603 11.819-5.958 23.682-8.09 34.32l-1.299 7.931c-6.238 32.721-11 50.688-23.375 61.003c-2.493 1.773-6.057 4.427-11.429 4.612c-2.816.087-3.726-1.85-3.765-2.694c-.067-1.977 1.599-2.883 2.706-3.773c1.654-.902 4.155-2.398 3.985-7.191c-.18-5.664-4.872-10.575-11.654-10.35c-5.08.173-12.823 4.954-12.532 13.705c.303 9.039 8.728 15.813 21.43 15.384c6.79-.233 21.952-2.997 36.895-20.76c17.392-20.362 22.256-43.705 25.915-60.79l4.084-22.556c2.269.272 4.695.453 7.334.516c21.661.457 32.496-10.763 32.657-18.924c.107-4.939-3.241-9.799-7.928-9.689c-3.355.095-7.57 2.328-8.582 6.968c-.988 4.552 6.893 8.66.733 12.65c-4.376 2.832-12.221 4.828-23.269 3.206l2.009-11.103c4.1-21.055 9.157-46.954 28.341-47.584c1.398-.071 6.514.063 6.633 3.446c.035 1.13-.245 1.418-1.568 4.005c-1.347 2.017-1.855 3.734-1.792 5.707c.185 5.376 4.273 8.909 10.185 8.696c7.916-.256 10.193-7.963 10.063-11.921c-.32-9.3-10.122-15.175-23.1-14.75"/></svg>',
            'copied': '<svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 15l2 2l4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g></svg>',
            'story-map': '<svg viewBox="0 0 100 100"><path fill="currentColor" d="M49.999 3.848C22.679 3.848 0 22.238 0 45.56c0 13.842 8.002 25.933 20.21 33.486c-.826 4.52-4.819 8.426-8.619 12.45a2.762 2.762 0 0 0 2.35 4.635c8.955-1.119 17.198-5.944 23.304-10.235a59.24 59.24 0 0 0 12.754 1.38C77.319 87.276 100 68.883 100 45.56S77.319 3.848 49.999 3.848m0 5.523c24.858 0 44.477 16.487 44.477 36.19S74.857 81.752 50 81.752a54.61 54.61 0 0 1-6.995-.448c-.251-.033-.5-.07-.75-.106c-.357-.052-.717-.101-1.072-.16c-.266-.044-.529-.094-.794-.142c-.3-.054-.603-.107-.902-.166c-.327-.065-.652-.137-.977-.207c-.266-.058-.534-.113-.798-.175a52.307 52.307 0 0 1-1.677-.421a96.746 96.746 0 0 1-2.818 1.944l-.017.011a95.216 95.216 0 0 1-2.451 1.56c-2.73 1.696-5.683 3.337-8.765 4.64c1.378-1.888 2.556-3.967 3.252-6.289c.104-.349.193-.705.274-1.065c.029-.129.058-.257.084-.387c.06-.303.113-.61.155-.921c.032-.23.052-.465.074-.7c.02-.229.046-.455.056-.69c.022-.505.023-1.02-.009-1.549a2.762 2.762 0 0 0-.088-.574l-.005-.002l-.03-.017a45.91 45.91 0 0 1-1.961-1.114c-.232-.138-.458-.28-.686-.423c-10.72-6.659-17.575-17.157-17.575-28.79c0-19.703 19.617-36.19 44.475-36.19m-2.048 2.165c-.346.003-.694.02-1.042.032c.047.12.052.265-.047.477c1.362.288 2.686-.563 4.076-.18c1.236.265 2.696.638 3.489 1.565c.492.233-1.804-.745-1.32.309c.551 1.127 2.082.995 3.063.431c1.304-.18.213 1.139 1.098 1.472c-.859.084-2.175.722-3.325.785c-1.04-.021-.846.914.082.861c1.049.248 2.56-.498 2.928.857a.79.79 0 0 1 .233 1.484c.403.55 1.176 1.017.762 1.584c-.53 1.007-1.762.828-2.91 1.001c-1.07.077-2.25-.77-3.248-.01c-1.17.686-1.245 2.175-2.443 2.81c-.87 1.345-.308 2.04.151 2.45c.763.262 2.511.108 3.39-.552c.088-.547-.133-1.2-.213-1.584c.227.18.293.303.289.38c.024.257.449.45.494.496c.56.326-.062 1.329-.093 1.57c-1.106-.1-2.284.065-3.426.143c.098.507-1.215.964-1.16.993c-1.195-.215-1.749.245-2.545.8c-.056.022-.697.2-.697.2c.073.08-.214.445-.095.432c1.513-.163 1.655.667 1.603 1.424c-.638.887-3.354-.5-2.85 1.388c-.224.915-.767 2.407.897 2.257h.002s.878-.203.941-.203c.064 0 2.013-.738 2.013-.738l.056-.004c.014-.117.09-.275.26-.5c.451-.635 1.32-1.207 2.192-1.205c-.42.45.436 1.4.246 1.741l.813.063c.199-.165.215-.284.337-.444c.128-.141-.312-.917-.177-.971c.019-.008.05-.005.097.021c.568.26 2.253 1.214.755 1.314c.03 1.036.182.595 1.066.848c.502-.024.704-1.235 1.236-1.32a.444.444 0 0 1 .25.038c.208.249.455.541.728.816c.37.264.96.203 1.411-.153c.235-.331-.225-1.022-.16-1.001c.194.258.685.842.732 1.085c.747.569 1.707.431 2.419.781c.645-.181 1.537-.002.809.673c-1.109.154-2.346.336-3.446-.03c-.916-.416-2.018-.197-2.318.712c-.854-.366-1.887-.7-2.777-1.105c-2.65-1.339-5.249-.856-7.7-.213l.215-.205c-.562.615-1.536 1.078-1.717 2.05c-.782.798-1.985 1.158-2.499 2.263c-1.122.877-.326 2.097-.647 3.176c-.544.467-.928.926-.222 1.496c.27.982 1.535 3.252 1.883 4.244c1.05.718 2.237 1.804 3.668 1.141c1.33.152 2.555-.259 3.742-.556c.734.546 1.502.81 2.408.923c.348.952-.68 2.236.716 2.894c.826.944 1.36 2.313.976 3.467c-.867.934-.994 2.281-.169 3.276c.759 1.139.22 2.567 1.174 3.676c.62.682-.224 2.563 1.26 2.395c1.14-.525 2.565.134 3.606-.662c.923-.685 1.973-1.34 2.442-2.343c.623-.876 1.978-1.195 1.616-2.45c-.027-1.456 2.372-1.062 2.611-2.47c.675-1.4-.456-2.812-.153-4.223c.641-1.2 1.7-4.02 2.842-4.874c1.28-1.214 1.916-2.899 1.888-4.55c-.848-.918-2.33.897-2.967.258l-2.14-1.894l.004-.002c-.408-.317-.946-.988-1.001-1.256a7.176 7.176 0 0 0-.753-1.23c-.36-.473-1.51-1.85-1.33-1.674c.513.54 1.082 1.173 1.655 1.808c.574.635 1.064 1.53 1.873 2.17c1.891 1.82 2.713 1.657 4.55.456c.78-.747 1.955-1.213 2.126-2.337c.456-.846-.11-1.685-.802-2.05c-.77-.125-1.55.054-2.41-.125c-.422-.5-1.133-.872-1.621-1.217c-.022-.048-.093-.117-.183-.246c-.06-.055-.054-.066-.03-.065c.023.002.063.015.07.005c.11.08.175.149.208.172l1.268.73c.71.561 1.617.44 2.534.53c1.27.07 2.929-.66 3.8.572c.418 1.013 2.229.862 2.185 2.192c.714 1.388 1.613 2.724 2.145 4.167c.382.732 1.383.425 1.385 1.269c1.138.934 1.713-.91.915-1.569c-.64-1.179-1.225-2.552-.796-3.85c.7-.962.332-2.372 1.292-3.158c1.494.112 1.427 1.786 2.193 2.593c1.57.078 1.596 1.814 1.896 2.87c-.335 1.08 1.096 2.121.945 2.978c-.729-.995-2.036.117-1.117.887c.953 1.094 1.159 2.5 1.549 3.804c.189 1.051.762 2.014 1.018 3.031c.139.72.7 1.177 1.284 1.619c.095-.238.197-.472.285-.713c.133-.363.248-.735.367-1.104c-.156-.102-.354-.149-.628-.102c-.757-1.057.219-2.461-.686-3.482c-.296-1.035.16-2.048-.253-3.056c0-1.34-1.084-2.288-1.6-3.463c-.361-.52-.431-2.346.22-1.038c.38.45.783 1.844 1.227 1.649c.536-1.343.973-2.842.365-4.227c-.016-1.033-1.69-1.972-1.59-2.652c1.638-.406-.731-2.123.07-3.09c.265-.76-.507-2.111.713-1.603c.097-.177.122-.354.123-.53a30.93 30.93 0 0 0-.814-1.46c-.06-.1-.126-.197-.187-.297l-.003-.002c-.205-.217-.41-.424-.578-.613c-.902-.574-.913-1.614-1.6-2.335c-.758-.874-1.605-1.712-2.696-2.257c-.62-.4-1.576-1.229-1.392-1.832c.3.22.739.479 1.086.553c-.037-.036-.071-.074-.108-.11C74.104 15.7 61.377 11.255 49.78 11.56a39.725 39.725 0 0 0-1.83-.025m-3.795.211C28.612 13.307 12.83 23.417 8.75 38.555v.002c.191.772.611 1.704 1.739 2.07c.702.305.424 1.282 1.217 1.717c1.044.861.356 2.124 1.255 3.027c.29.626.642 1.088 1.397.695c1.267.444.073 2.146-.451 2.91c-.827 1-.042 2.24-.503 3.308c.352 1.378 1.57 2.412 2.076 3.742c.36 1.339 1.681 1.929 2.837 2.62c.967.884.93 2.196 1.385 3.296c.378 1.133.66 2.296 1.319 3.332c.604 1.21.765 2.566 1.678 3.649c.711.957 1.426 1.907 2.035 2.919c.597.699 1.418 1.28 1.892 2.052l.402.21c.004.001.007.004.01.006c1.186.413 2.712 1.12 3.688.168c.434-1.214-1.299-.694-1.85-1.463c-1.179-.558-.28-2.12-1.784-2.347c.369-.479-.457-.963-.144-1.649c-.212-.595-.631-1.46.34-1.676c.571-.726-.421-1.652.59-2.158c.318-1.176.858-2.351.697-3.58c-.341-1.547 2.092-1.077 2.337-2.393c.538-1.163.18-2.418.38-3.616c.592-1.077 2.067-2.343.986-3.586c-1.146-.891-2.625-1.204-3.973-1.619c-.878-.617-2.652-.333-2.363-1.646c-.241-1.297-1.575-1.801-2.818-2.13c-1.16-.337-.839-1.635-1.43-2.19c-2.933-.655-2.789-.458-3.317-1.003c-.809-.317-1.25-.03-1.963.274c-.273.543-.909.81-1.593.85c-1.656.338-.686-1.789-.345-2.496c.367-.888-1.121-1.324-1.251-1.414c.468-1.007 1.063-2.816 2.688-2.05c.554.244.454.71.29 1.043c1.513.227 1.407 1.281 2.343 1.929c.572-.692 2.816.768 2.276-.719c-1.01-.753-2.363-1.005-3.176-2.037c-.392-1.093 1.59-1.911.805-3.079c-.342-.613-.648.398-.354-.464c.116-1.33 1.497-1.988 2.77-2.276c1.02-.744 1.583-2.125 3.112-2.167c1.119.103 1.284-1.637 2.28-.58c.89-.037 2.28-.058 2.879-.794c.262.051 1.87 1.228 2.343.086c.414-.646-.312-1.573.658-1.983c.334-1.175-.112-2.471.911-3.478c.72-.988 2.062-1.26 3.19-1.72c.576-.402-.115-.915.664-1.277c.69-.732.94-2.005 2.151-2.102c.73-.418.348.173.561.378c.792 1.06-1.366 1.455-1.759 2.31c-1.067.852-2.285 1.989-2.008 3.378c.676 1.635 2.247-.04 3.05-.648c1.67-.54 3.436-.78 5.125-1.253c.698-.332.315-1.053 1.116-1.426c.71-.7.814-1.76 1.873-2.018c.246-1.314-1.576-1.583-2.66-1.607c-.286-1.193-1.793-1.073-2.786-1.513c.91-.363-1.068-.335-.438-.79c-.621-.062-1.27-.913-1.867-.34c-.23-.301-2.462-.002-1.562-1.062c1.97-1.18 4.664-.89 6.434-2.393c.012-.011.012-.025.022-.037m8 6.575c-.13-.006-.244.01-.314.056c-.45.262-.71 1.419.146.876c.468.229 1.566.262.846-.378c.227-.308-.287-.536-.677-.554m3.218.192a1.202 1.202 0 0 0-.242.047c-.761 1.016.14 2.382 1.174 2.917c.777.449 2.07-.616.777-.845c-1.147-.15-.626-2.204-1.71-2.12m-5.112.492a1.294 1.294 0 0 0-.265.01l-.145-.006c-1.442.13-1.48 1.789.004 1.899c1.458.258 1.645-1.808.408-1.903zm-12.21.064c.012-.006.032 0 .054.033c-.084.128-.093-.011-.054-.033m-4.614 1.403c.5.057.485.539-.172.226c-.266.049-.538-.156-.074-.22c.093-.012.175-.014.246-.006m-2.9.034a.507.507 0 0 1 .25.03c-.35.762.306 1.667-.873 2.085c-.682.353-1.895 1.893-2.139.412c-.08-1.268 1.095-2.402 2.51-2.5c.083-.001.167-.02.252-.027m2.255 2.618c-.013.63-.895.052 0 0m10.014.42a.644.644 0 0 0-.218.057c-.214.61-1.85.245-.807.89c.609.983 2.44 1.005 3.246.264c.397-.926-.807-1.345-1.57-1.079c-.205-.061-.43-.148-.65-.131m3.901 3.056c-.556.018-1.028.355-.992 1.014c-.655.413-2.067 1.496-1.053 2.056c1.267-.137 2.07-.538 3.208-.936l.151-.527c-.316-.366-.54-.807-.312-1.294a1.64 1.64 0 0 0-1.002-.313m-17.984 1.528c.026.014.05.04.08.047c.426.605-1.327.355-.17-.041c.035-.024.063-.021.09-.006m35.572 2.449c.26.45 1.793.962 1.403 1.273c-.468-.259-1.576-1.04-1.403-1.273m-5.737.55c.476 1.188 1.993-.024 2.815.58c.496.137.944.697.067.455c-.95-.835-3.02 1.102-3.221-.245c.058-.28.214-.532.339-.79m7.578 1.372a.432.432 0 0 1 .14.013c1.008.068.71 1.247-.097.535c-.153-.124-.308-.522-.043-.548m-51.594.777l.114.056c.15 1.397 2.131-.256 2.104 1.172c-.133.822-.852 1.896.117 2.582c.733.529-.346.63-.66.132c-.867-.435-1.557.807-2.564.257c-1.053-.351-1.313 1.964-2.168.673c-.207-.906.5-1.772.843-2.613c.528-.848 1.025-1.835 2.076-2.25zm75.512 1.586c-.773.603.412 1.925.49 2.734c.522.693.672 1.272.99 1.93c-.033-.145-.057-.295-.093-.44a29.474 29.474 0 0 0-1.387-4.224m-32.683.172c-1.666.377.105.631.777.633c.291-.523-.256-.462-.777-.633M16.26 39.813c-.783.011.208 1.233.936 1.07c.485-.114.152-.317-.08-.745a1.013 1.013 0 0 0-.405-.25a1.585 1.585 0 0 0-.451-.075m75.494.757c-.322.892-.226 2.036.182 2.777a.477.477 0 0 0 .196-.054c-.015-.185-.02-.368-.039-.554a29.96 29.96 0 0 0-.339-2.169m-21.1 2.218c-.058.005-.131.153.04.058c-.006-.043-.02-.06-.04-.058m21.523 1.18c-1.076.835-.256 2.34-1.135 3.297c-.88.694-.95 1.756-.772 2.723c.257.817-.028 2.353 1.048 2.523c.074-.278.156-.554.22-.835c.57-2.462.792-5.04.64-7.708m-2.675 6.28c.057-.007.125.037.03.15c-.134-.088-.088-.144-.03-.15M69.16 56.411c-.18.294-.515.947-.96.53c.576 1.312-2.307 1.034-1.748 2.487c-.29 1.035-1.474 2.394-.341 3.312c1.4.483 1.9-.896 2.343-1.763c.493-.883.988-1.763 1.519-2.628c-.114-.606.194-1.89-.813-1.938m-.66 14.951c-1.347.196-.61 2.032.472 1.079c.14-.353.048-1.031-.473-1.079m-37.95.24c-1.534.033-.066 2.213.616.822c.148-.868-.184-.582-.617-.823m29.804 3.15c-1.396-.072-3.522.577-4.415.466c-.98-.1-1.689-.432-2.606-.004c-1.1-.063-2.128-.453-3.235-.451a4.32 4.32 0 0 0-.479.025c-1.257.3-2.55.284-3.815.497c-.966.44-.75 1.903-1.961 2.058c-.123.844-.958.99-1.61.783c-.179.177-.076.453-.006.67c4.472.64 9.166.788 13.962.465c3.035-.261 6.107-.904 9.115-1.872c-1.351.127-2.424-.052-2.997-.695c.178-.88-1.314-.747-.874-1.575c-.23-.24-.614-.343-1.08-.367m-25.472 1.02c-.361.452-.39.92-.268 1.373c.191.057.378.12.57.174c.356.102.719.191 1.079.285c-.305-.196-.51-.459-.466-.89c-.137-1.047-.43-.75-.915-.942m4.46 2.424c-.074.01-.165.044-.248.069l.045.01c.31.063.624.114.937.17c-.27-.205-.49-.283-.734-.25" color="currentColor"/></svg>',
            'guide': '<svg viewBox="0 0 20 20"><path fill="currentColor" d="M8.62 16.26a1 1 0 0 0 1.226.706l5.417-1.451a.999.999 0 0 0 .706-1.225L13.133 3.741a1 1 0 0 0-1.225-.707L6.49 4.486a.999.999 0 0 0-.706 1.224zm1.486 1.672a2.002 2.002 0 0 1-2.451-1.414L4.819 5.97a1.998 1.998 0 0 1 1.413-2.45l5.416-1.451a2.002 2.002 0 0 1 2.451 1.413l2.836 10.55a1.998 1.998 0 0 1-1.413 2.449zM7.002 18h.152a2.48 2.48 0 0 1-.335-.74l-.079-.295A1.003 1.003 0 0 1 6 16v-1.79l-1.004-3.732l.005 5.523a2 2 0 0 0 2.001 2m-3.004-1.5c0 .152.014.3.04.445l-.054-.015a2.002 2.002 0 0 1-1.416-2.45l1.424-5.33l.003 3.864l-.46 1.725c-.12.446.082.902.462 1.124zM8.25 5.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"/></svg>',
            'install': '<svg viewBox="0 0 20 20"><path fill="currentColor" d="M4.5 17A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3H9a1.5 1.5 0 0 1 1.5 1.5v5h5A1.5 1.5 0 0 1 17 11v4.5a1.5 1.5 0 0 1-1.5 1.5zm11-6.5h-5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5m-6 0H4v5a.5.5 0 0 0 .5.5h5zm0-1v-5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5zm4.354-2.646a.5.5 0 0 1-.708-.708L14.793 4.5l-1.647-1.646a.5.5 0 0 1 .708-.708L15.5 3.793l1.646-1.647a.5.5 0 0 1 .708.708L16.207 4.5l1.647 1.646a.5.5 0 0 1-.708.708L15.5 5.207z"/></svg>',
            'warning': '<svg viewBox="0 0 72 72"><path fill="#fcea2b" d="M32.294 14.233a3.892 3.892 0 0 1 6.706 0l20.12 40.142a4.462 4.462 0 0 1 .574 1.916a3.885 3.885 0 0 1-3.832 3.88H15.528a3.803 3.803 0 0 1-3.832-3.784a3.454 3.454 0 0 1 .575-1.916z"/><path fill="#d22f27" d="M35.854 39.049c0 1.505-2.728 3.81-2.728 5.991l-.06.188s-.322 1.428-1.39 1.428a1.313 1.313 0 0 1-.772-.325c-.262-.244-.6.13-.547.458c.16 1.31 3.023 5.521 5.17 5.521c2.456 0 4.629-2.945 4.822-3.985c0-.498-.834-.187-.834-.873c0-.582.507-.964.507-1.729a.41.41 0 0 0-.424-.378c-.191 0-.46.134-.674.134c-.82 0-1.007-.746-1.007-1.51c0 0 .154.05.154-1.58a5.883 5.883 0 0 0-1.422-3.493a.551.551 0 0 0-.357-.133c-.19 0-.438.084-.438.286"/><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M29.548 52.622a8.294 8.294 0 0 0 5.936 2.332a8.836 8.836 0 0 0 6.02-2.332M27.69 50.224s-4.452-4.75-.212-11.025c0 0 .856 1.088 1.508 2.132c.486.56 1.367 1.515 1.833 1.515a1.004 1.004 0 0 0 1.018-1.102v-.382a15.477 15.477 0 0 1 1.526-7.293s2.969 1.611 1.697-6.191c0 0 6.763 4.558 6.509 12.106c0 .551.248.975.847.975c.59 0 2.388-.572 2.388-1.124c.042.043 2.671 5.555-1.06 10.389"/><path d="M33.079 45.118s-.298 1.641-1.488 1.527a2.674 2.674 0 0 1-.61-.245c-.328-.36-.674.084-.624.39a10.963 10.963 0 0 0 3.02 4.472s.93.685.98.685m2.609.063a12.345 12.345 0 0 0 1.547-1.048a6.84 6.84 0 0 0 1.806-2.487a.335.335 0 0 0-.297-.458a.782.782 0 0 1-.496-.458h0s-.1-.305.297-.992a1.604 1.604 0 0 0 .199-.916a.469.469 0 0 0-.645-.267a.96.96 0 0 1-1.29-.42s-.312-.153-.014-1.64a5.996 5.996 0 0 0-1.425-4.428a.546.546 0 0 0-.377-.133a.395.395 0 0 0-.417.286"/><path d="M32.294 14.233a3.892 3.892 0 0 1 6.706 0l20.12 40.142a4.462 4.462 0 0 1 .574 1.916a3.885 3.885 0 0 1-3.832 3.88H15.528a3.803 3.803 0 0 1-3.832-3.784a3.454 3.454 0 0 1 .575-1.916z"/></g></svg>',
            'update': '<svg height="1em" viewBox="0 0 48 48"><path fill="#FF6F00" d="m38.7 11.9l-3.1 2.5c2.2 2.7 3.4 6.1 3.4 9.5c0 8.3-6.7 15-15 15c-.9 0-1.9-.1-2.8-.3l-.7 3.9c1.2.2 2.4.3 3.5.3c10.5 0 19-8.5 19-19c0-4.2-1.5-8.5-4.3-11.9"/><path fill="#FF6F02" d="m31 8l11.9 1.6l-9.8 9.8z"/><path fill="#FF6F00" d="M24 5C13.5 5 5 13.5 5 24c0 4.6 1.6 9 4.6 12.4l3-2.6C10.3 31.1 9 27.6 9 24c0-8.3 6.7-15 15-15c.9 0 1.9.1 2.8.3l.7-3.9C26.4 5.1 25.2 5 24 5"/><path fill="#FF6F02" d="M17 40L5.1 38.4l9.8-9.8z"/></svg>',
            'note': '<svg viewBox="0 0 64 64"><path fill="#fff200" d="m3.988 48.46l47.452 6.62L59.979 9L16.898 3.179z"/><path fill="#e8d807" d="m3.988 48.46l3.562 5.531l48.14 7.712l-4.246-6.623z"/><path fill="#eddc0a" d="M14.406 1S4.862 45.37 2.842 46.678c-2.02 1.312 47.902 7.313 47.902 7.313s9.133-43.979 9.235-44.989c.102-1.01-45.573-8-45.573-8"/><path fill="#ad9a28" d="M15.507 2.436s-11.263 40.03-13.28 41.34C.217 45.088 51 52.552 51 52.552s8.429-42.4 8.526-43.41c.103-1.01-44.02-6.714-44.02-6.714"/><path fill="#dbbf33" d="m59.979 9l3.873 3.798l-8.166 48.905l-4.246-6.623z"/><path fill="#e8d807" d="M14.406 1S2.076 38.476.06 39.784c-2.02 1.312 47.695 13.186 50.22 10.728s9.601-40.499 9.703-41.509c.102-1.01-45.573-8-45.573-8"/><path fill="#fff200" d="M14.406 1S3.567 34.03 1.549 35.35c-2.02 1.312 37.879 17.09 42.07 13.211c1.813-1.677 6.04-9.03 8.874-15.934c4.802-11.696 7.422-23 7.482-23.623c.102-1.01-45.573-8-45.573-8"/></svg>',
            'important': '<svg viewBox="0 0 24 24"><path fill="#aa9d13" d="M12 2.002a3.875 3.875 0 0 0-3.875 3.875c0 2.92 1.207 6.552 1.813 8.199a2.187 2.187 0 0 0 2.064 1.423c.904 0 1.739-.542 2.063-1.418c.606-1.64 1.81-5.254 1.81-8.204A3.875 3.875 0 0 0 12 2.002M9.625 5.877a2.375 2.375 0 0 1 4.75 0c0 2.655-1.111 6.043-1.717 7.684a.686.686 0 0 1-.655.438a.687.687 0 0 1-.657-.44c-.607-1.652-1.721-5.058-1.721-7.682m2.376 11.124a2.501 2.501 0 1 0 0 5.002a2.501 2.501 0 0 0 0-5.002M11 19.502a1.001 1.001 0 1 1 2.002 0a1.001 1.001 0 0 1-2.002 0"/></svg>',
            'unstyled':'<svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 4a1 1 0 1 0-2 0v12.467l2-2V10h2a1 1 0 1 0 0-2h-2zm11.674 7.328a4.536 4.536 0 0 0-6.414 0l-9.42 9.42a4 4 0 0 0-1.017 1.73l-1.786 6.25a1 1 0 0 0 1.236 1.237l6.254-1.787a4 4 0 0 0 1.73-1.018l9.417-9.417a4.535 4.535 0 0 0 0-6.415m-5 1.415a2.536 2.536 0 0 1 3.586 3.585l-9.418 9.418c-.24.24-.538.416-.865.509l-4.523 1.292l1.292-4.52a2 2 0 0 1 .508-.865zM3.02 14.21c.1.47.52.79.98.79c.07 0 .14 0 .21-.02l.005-.001C4.452 14.922 12 13.123 12 5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5.95c-.56 5.72-5.92 6.97-6.16 7.02c-.54.12-.89.65-.77 1.19"/></svg>',
            'dots':'<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.25 12h-.5m.5-4h-.5m.5 8h-.5"/></svg>'
          },
          carbon: () =>
            import("@iconify-json/carbon/icons.json").then((i) => i.default),
        },
      }),
    ],
  });
  