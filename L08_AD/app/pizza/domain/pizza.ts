import {Review} from './review';

export interface Pizza{
  _id: string,
  name: string,
  price: number,
  weight: number,
  image: string,
  ingredients: string,
  reviews: Review[],
  canPurchase: boolean,
  soldOut: boolean
}
