export interface CardType {
    id: string,
    title: string,
    image: string
    author: string,
    category: CategoryType,
    content: string
}

export interface CategoryType {
    id: string,
    title: string
}