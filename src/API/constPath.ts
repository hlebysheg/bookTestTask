import {API_KEY} from './const'

export const getPath = (find: string, categories: string, sortType: string, start: number) => {
    return `https://www.googleapis.com/books/v1/volumes?q=${find}+subject=${categories}&orderBy=${sortType}&startIndex=${start}&maxResults=30&keyes&key=${API_KEY}`
}

export const getPathInfo = (id: string) => {
    return `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
}