export type SeoType = {
    ogImage: {
        src: string;
        alt: string;
    };
    keywords: string;
    title: string;
    description: string;
};



export type SupportedLanguage = "html" | "css" | "js" | "ts" | "vue"

export interface CodeSnippet {
    id: string;
    title: string;
    icon:string
    lang: SupportedLanguage;
    code: string;
  }
  
  export interface SubkeyData {
    id: string;
    title: string;
    items: CodeSnippet[];
  }
  
  export interface SourceData {
    [source: string]: SubkeyData[];
  }