type UserData = {
    id: string
    isFavorite: boolean
    productId: number
    userId: number
}

export interface IProduct {
    id: number
    name: string
    imageUrl: string
    price: number
    type: string
    model: string
    year: number
    top10: boolean
    description: string
    brandId: number
    brand: {
        id: number
        name: string
    }
    userData?: UserData
}
