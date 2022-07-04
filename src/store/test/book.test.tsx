import Book from '../book'
import fetchMock from "jest-fetch-mock";
import { mockBooks } from './mockData';

fetchMock.enableMocks();

describe("book store", () => {

    beforeEach(() => {
        
    });
    
    it("Book store", () => {
        expect(Book.books).toBe(null)
        expect(Book.bookInfo).toBe(null)
        expect(Book.msg).toBe('')
        expect(Book.isLoading).toBe(false)
    })

})