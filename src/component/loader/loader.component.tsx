import LD from './loader.module.scss'
import React from 'react'
export const Loader = () =>{

    return (
        <div className={LD.center}>
            <div className={LD.anim}></div>
        </div>
        
    )
}
