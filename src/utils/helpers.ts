import axios from "axios";
import qs from "qs"
import { Product, Category } from './types';

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api",
  headers: {
    Authorization: "bearer " + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
  },
});

// use only in server side fetch 
export const createRequestString = (path: string, urlParamsObject?: object) => {
  return `${path}${urlParamsObject ? `?${qs.stringify(urlParamsObject)}` : ""}`
}

export const flattenedProd = (i: any): Product => {
  return {
    id: i.id,
    title: i.attributes.title,
    slug: i.attributes.slug,
    img: i.attributes.image.data?.attributes.url,
    description: i.attributes.description,
    category: i.attributes.categories.data[0].attributes.title,
    isNew: i.attributes.isNew,
    price: i.attributes.price,
  }
}

export const flattenedCategory = (i: any): Category => {
  return {
    id: i.id,
    title: i.attributes.title,
    slug: i.attributes.slug,
  }
}

