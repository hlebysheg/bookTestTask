import { set } from "mobx"
import React, { useEffect, useState } from "react"
import FB from './findBar.module.scss'
import { KeyboardEvent } from 'react';
import book from "../../store/book";
import { Link } from "react-router-dom";

export const FindBar: React.FC = () => {
    
    //state
    const [find, setFind] = useState('')
    const [selectCat, setSelectCat] = useState({value: 'all'})
    const [selectSort, setSelectSort] = useState({value: 'relevance'})

    //actions
    const handleChangeFind = (e: React.FormEvent<HTMLInputElement>) => {
        setFind(e.currentTarget.value)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            handleClickFind()
        }
    }

    const handleClickFind = () => {
        book.fetchBooks(find, selectCat.value, selectSort.value, true)
    }

    const handleChangeCat = (e: React.FocusEvent<HTMLSelectElement>) => {
        setSelectCat({value: e.target.value})
    }

    const handleChangeSort = (e: React.FocusEvent<HTMLSelectElement>) => {
        setSelectSort({value: e.target.value})
    }


    //effects
    useEffect(()=>{
        return setFind('')
    },[])
    
    //JSX
    return (
        <header>
            <h1 className={FB.title}>Search for books</h1>
            <div className={FB.findBar}>
                <div className={FB.inputBar}>
                    <input type="text" placeholder="find book" className={FB.input} value={find} onChange={handleChangeFind} onKeyDown={handleKeyPress}/>
                    <Link to='/books'><button name="find-btn" className={FB.button} onClick={handleClickFind}>Find</button></Link>
                </div>
                <div className={FB.sortBar}>
                    <div>
                    <label>Categories</label>
                        <select value={selectCat.value} onChange={handleChangeCat} className={FB.selectBar} name="category">
                            <option value="">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </div>
                    <div>
                        <label>Sorting by</label>
                        <select value={selectSort.value} onChange={handleChangeSort} className={FB.selectBar} name="Sort-by">
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}