import { getPath, getPathInfo } from './../API/constPath';
import { IBook, IBooks } from './bookInterface';
import { makeAutoObservable, makeObservable } from "mobx"

class Book {

    //main
    books: IBooks | null= null
    bookInfo: IBook | null = null
    isLoading = false
    msg = ''

    //sort old parameter
    startId = 0
    category = ''
    find = ''
    orderby = ''

    constructor() {
        makeAutoObservable(this)
    }

    resetBookInfo() {
        this.bookInfo = null
    }

    showMore () {
        this.startId += 30
        this.fetchBooks(this.find, this.category, this.orderby, false)
    }

    setMsg (msg: string) {
        this.msg = 'try again '
    }

    *fetchBookInfo(id: string) {

        this.isLoading = true

        const response:Response = yield fetch(getPathInfo(id))

        if(response.status != 200) {
            this.setMsg('try again')
            this.isLoading = false
            this.bookInfo = null
            this.isLoading = false
        }
        else{
            response.json()
            .then((res:IBook) => { 

                this.isLoading = false

                if(res === undefined){
                    throw new Error('not Found')
                }
                else {
                    this.bookInfo = res
                }
            })
            .catch((er)=> {
                this.bookInfo = null
                this.msg = er.message
            })
            .finally(()=>{
                // this.msg = ''
                this.isLoading = false
            })
        }
    }

    *fetchBooks(find: string, categories: string, sortType: string, refresh: boolean) {
        //record old parametr
        this.find = find
        this.category = categories
        this.orderby = sortType
        //
        this.msg = ''
        this.isLoading = true
        if(refresh) {
            this.books = null
        }

        const response:Response = yield fetch(getPath(find, categories, sortType, this.startId))

        if(response.status != 200) {
            this.setMsg('try again')
            this.isLoading = false
            this.books = null
        }
        else{
            response.json()
            .then((res:IBooks) => { 

                this.isLoading = false

                if(res.items === undefined){
                    throw new Error('not Found')
                }
                else if(this.books === null || refresh){
                    this.books = res
                }
                else if (this.books?.items?.length !== undefined){           
                    this.books!.items=this.books!.items?.concat(res.items)
                }
            })
            .catch((er)=> {
                this.books = null
                this.msg = er.message
            })
            .finally(()=>{
                // this.msg = ''
                this.isLoading = false
            })
        }
    }
}

export default new Book()