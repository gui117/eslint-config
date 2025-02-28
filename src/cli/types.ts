export interface PromItem<T> {
  label: string
  value: T
  hint?: string
}

export type FrameworkOption = 'vue' | 'react' | 'svelte' | 'astro' | 'solid' | 'slidev'

export type ExtraLibrariesOption = 'formatter' | 'unocss' | 'tailwind'

export interface PromptResult {
  uncommittedConfirmed: boolean
  frameworks: FrameworkOption[]
  extra: ExtraLibrariesOption[]
  updateVscodeSettings: unknown
}
