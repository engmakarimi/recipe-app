export type Recipe ={
    directions: string[];
    ingredients: string[];
    language: string;
    source: string;
    tags: string[];
    title: string;
    url: string;
    imageUrl: string;
    id: string;
    isSaved?:boolean;
}