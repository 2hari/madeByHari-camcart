import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api",
  headers: {
    Authorization: "bearer " + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
  },
});


export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
    }${path}`
}

//@ts-ignore
export function getStrapiMedia(media) {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
