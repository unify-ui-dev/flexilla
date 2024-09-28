import { Preset } from 'unocss'
import { presetVariants } from './preset-helper'

type MyPresetOptions = {
    prefix?: string
}

export default function unifyUI(options: MyPresetOptions = { prefix: "fx" }): Preset {
    return {
        name: '@flexilla/uno-preset',
        variants: [
            presetVariants({
                prefix: options.prefix
            })
        ],
        shortcuts: {
            'ui-tabs-indicator': 'absolute transform-origin-[0_0] w-[var(--un-tab-indicator-width)] h-[var(--un-tab-indicator-height)] top-[var(--un-tab-indicator-top)] left-[var(--un-tab-indicator-left)]',
            'ui-animated-modal-content': 'animate-[var(--un-modal-animation)] animate-fill-both',
            'ui-animated-tab-panel': 'animate-[var(--un-tab-show-animation)] animate-fill-both',
            'ui-overlay': 'fixed inset-0'
        },
        rules: [
            [
                'ui-popper', {
                    position: "fixed",
                    left: "var(--fx-popper-placement-x)",
                    top: "var(--fx-popper-placement-y)"
                }
            ], [
                'ui-popper-absolute', {
                    position: "absolute",
                    left: "var(--fx-popper-placement-x)",
                    top: "var(--fx-popper-placement-y)"
                },
            ]
        ]
    }
}