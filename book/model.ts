
export interface User {
    id: string;
    name: string;
    borrowed: Book[];
}

export interface Book {
    id: string;
    title: string;
}
