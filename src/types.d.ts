export interface QuoteType {
    category: string;
    author: string;
    text: string;
    id: string;
}

export interface Quotes {
    [quoteId: string]: QuoteType;
}