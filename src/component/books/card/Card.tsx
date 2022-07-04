import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IBook } from "../../../store/bookInterface"
import GM from './GameStyle.module.scss'

interface ICard{
    book: IBook
}

export const Card: React.FC<ICard> =  React.memo(({book}: ICard) =>{

    const authors = book.volumeInfo?.authors?.map(el => <span key={el}>{el}</span>)

    return (
        <>
            <div className={GM.card}>
                <div className={GM.textSide}>
                    <div className={GM.center}><b>{book.volumeInfo?.title || ''}</b></div>
                    <div className={GM.tagContainer}>
                        <span><b>Author: </b>{authors}</span>
                    </div>
                    <div><b>Category: </b>{
                        book.volumeInfo?.categories === undefined?'':
                        book.volumeInfo?.categories[0]
                    }</div>
                </div>
                <img src={book.volumeInfo?.imageLinks?.thumbnail || ''} alt={''}></img>
            </div>
        </>
    )

})