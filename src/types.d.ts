export interface QuoteType {
    category: string;
    author: string;
    text: string;
}

export interface Quotes {
    [quoteId: string]: QuoteType;
}