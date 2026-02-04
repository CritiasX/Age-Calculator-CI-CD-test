/// <reference types="vite/client" />

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
    glob: (pattern: string) => Record<string, () => Promise<any>>;
    globEager: (pattern: string) => Record<string, any>;
  }
}

export {};
