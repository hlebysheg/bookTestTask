import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import BK from './book.module.scss'
import { Card } from "./card/Card"
import book from "../../store/book"
import { observer } from "mobx-react-lite"
import { Loader } from "../loader/loader.component"

export const BookComponent: React.FC = observer(() => {

    //component
    let el= book.books?.items!.map((el,id) =>   <Link to={`/book-info/${el.id}`}>
                                                    <span key={el.id + id}><Card book={el}/></span>
                                                </Link>)

    //JSX
    return (
       <div className={BK.body}>
            {book.books?.totalItems?
            <h1>Total: {book.books?.totalItems}</h1>
            :''}
            <h3>{book.msg}</h3>
            <div className={BK.bookContainer}>
                {el}
            </div>
            {/* loader */}
            {
                book.isLoading?<Loader/>:''
            }
            {/* show more btn */}
            {
                book.books?.items!.length != 0&&
                book.books?.items != undefined?
                <button onClick={()=>book.showMore()}>show more</button>:''
            }
       </div>
       
    )
})