import { SoldProducts } from "./soldProducts"

export interface Stats{
    usersCount : number
    productsCount: number
    salesSum: number
    priceSum: number
    products : SoldProducts[]
  }