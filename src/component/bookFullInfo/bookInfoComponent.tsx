import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BK from './bookInfo.module.scss'
import book from "../../store/book"
import { observer } from "mobx-react-lite"
import { Loader } from "../loader/loader.component"

export const BookInfoComponent: React.FC = observer(() => {

    //component
    const authors = book.bookInfo?.volumeInfo?.authors?.map(el => <span key={el}>{el}</span>)
    const category = book.bookInfo?.volumeInfo?.categories?.map(el => <span key={el}>{el}</span>)
    //params
    const {id} = useParams()

    useEffect(()=>{
        if(id !== undefined){
            book.fetchBookInfo(id)
        }
        return () => book.resetBookInfo()
    },[])
    //JSX
    return (
        <div className={BK.background}>
            <div className={BK.body}>
                <div className={BK.imgContainer}>
                    <img src={book.bookInfo?.volumeInfo?.imageLinks?.medium}></img>
                </div>
                <div className={BK.info}>
                    <div className={BK.category}>
                        {category}
                    </div>
                    <span>{book.bookInfo?.volumeInfo?.title}</span>
                    <div>
                        {authors}
                    </div>
                </div>    
            </div>
            <div className={BK.description}>
                <h2>Description:</h2>
                {book.bookInfo?.volumeInfo?.description}
            </div>
                {
                    book.isLoading?<Loader/>:''
                }
       </div>
       
    )
})