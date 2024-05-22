export interface IProduct{
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
    created_by: {
        id: number,
        name: string
    }
}