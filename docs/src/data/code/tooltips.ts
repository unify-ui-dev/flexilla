import type { SourceData } from "@/types/index";

export const tooltipCode: SourceData = {
    "tooltipDefault": [
        {
            id: "tooltip1_demo",
            title: "Dropdown Demo",
            items: [
                {
                    id: "tab1",
                    icon: "html",
                    title: "with-uno.html",
                    lang: "html",
                    code: `
<div class="flex items-center gap4 relative">
    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test"
    class="relative bg-zinc8 text-white b b-zinc8 p2 rd-full">
        <span aria-hidden="true" class="flex i-carbon-chevron-down"></span>
    </button>
    <div data-tooltip-demo data-placement="bottom" id="tooltip-test"
    class="ui-popper invisible op0 fx-open-visible fx-open-op100 w48 px4 py1.5 text-center text-zinc6 truncate bg-white rd-lg shadow-lg dark-shadow-none shadow-zinc2 dark-bg-zinc8 dark-text-white">
        <p>
            This is a tooltip
        </p>
    </div>

    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test2"
        class="relative bg-zinc8 text-white b b-zinc8 p2 rd-full">
        <span aria-hidden="true" class="flex i-carbon-chevron-up"></span>
    </button>
    <div data-tooltip-demo data-placement="top" id="tooltip-test2"
        class="ui-popper invisible op0 fx-open-visible fx-open-op100 w48 px4 py1.5 text-center text-zinc6 truncate bg-white rd-lg shadow-lg dark-shadow-none shadow-zinc2 dark-bg-zinc8 dark-text-white">
        <p>
            This is a tooltip
        </p>
    </div>

    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test3"
        class="relative bg-zinc8 text-white b b-zinc8 p2 rd-full">
        <span aria-hidden="true" class="flex i-carbon-chevron-left"></span>
    </button>
    <div data-tooltip-demo data-placement="left" id="tooltip-test3"
        class="ui-popper invisible op0 fx-open-visible fx-open-op100 w48 px4 py1.5 text-center text-zinc6 truncate bg-white rd-lg shadow-lg dark-shadow-none shadow-zinc2 dark-bg-zinc8 dark-text-white">
        <p>
        This is a tooltip
        </p>
    </div>

    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test4"
        class="relative bg-zinc8 text-white b b-zinc8 p2 rd-full">
        <span aria-hidden="true" class="flex i-carbon-chevron-right"></span>
    </button>
    <div data-tooltip-demo data-placement="right" id="tooltip-test4"
        class="ui-popper invisible op0 fx-open-visible fx-open-op100 w48 px4 py1.5 text-center text-zinc6 truncate bg-white rd-lg shadow-lg dark-shadow-none shadow-zinc2 dark-bg-zinc8 dark-text-white">
        <p>
        This is a tooltip
        </p>
    </div>
</div>`,
                },
                {
                    id: "tab2",
                    icon: "html",
                    title: "with-tail.html",
                    lang: "html",
                    code: `
<div class="flex items-center gap4 relative">
    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test"
    class="relative bg-zinc-800 text-white border border-gray-800 p-2 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>      
    </button>
    <div data-tooltip-demo data-placement="bottom" id="tooltip-test"
    class="ui-popper invisible op0 fx-open:visible fx-open:opacity-100 w-48 px-4 py-1.5 text-center text-zinc-600 truncate bg-white rounded-lg shadow-lg dark:shadow-none shadow-zinc-200 dark:bg-zinc-800 dark:text-white">
        <p>
            This is a tooltip
        </p>
    </div>

    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test2"
        class="relative bg-zinc-800 text-white border border-gray-800 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
          </svg>          
    </button>
    <div data-tooltip-demo data-placement="top" id="tooltip-test2"
        class="ui-popper invisible op0 fx-open:visible fx-open:opacity-100 w-48 px-4 py-1.5 text-center text-zinc-600 truncate bg-white rounded-lg shadow-lg dark:shadow-none shadow-zinc-200 dark:bg-zinc-800 dark:text-white">
        <p>
            This is a tooltip
        </p>
    </div>

    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test3"
        class="relative bg-zinc-800 text-white border border-gray-800 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>          
    </button>
    <div data-tooltip-demo data-placement="left" id="tooltip-test3"
        class="ui-popper invisible op0 fx-open:visible fx-open:opacity-100 w-48 px-4 py-1.5 text-center text-zinc-600 truncate bg-white rounded-lg shadow-lg dark:shadow-none shadow-zinc-200 dark:bg-zinc-800 dark:text-white">
        <p>
        This is a tooltip
        </p>
    </div>

    <button aria-label="tooltip with default placement" data-tooltip-trigger data-tooltip-id="tooltip-test4"
        class="relative bg-zinc-800 text-white border border-gray-800 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>          
    </button>
    <div data-tooltip-demo data-placement="right" id="tooltip-test4"
        class="ui-popper invisible op0 fx-open:visible fx-open:opacity-100 w-48 px-4 py-1.5 text-center text-zinc-600 truncate bg-white rounded-lg shadow-lg dark:shadow-none shadow-zinc-200 dark:bg-zinc-800 dark:text-white">
        <p>
        This is a tooltip
        </p>
    </div>
</div>`,
                },
            ],
        },
    ],
}