export interface SearchEngine {
  inputQuery: string[]
  bodyQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  openai: {
    inputQuery: ['form #prompt-textarea'],
    sidebarContainerQuery: ['h3'],
  },
}
