import React from 'react'
import "./Categories.css"
import Category from '../category/Category.tsx'
import { categoryData } from '../../data/categoryData.ts'
function Categories() {
  return (
    <div className='categories'>
        {
            categoryData.map(({categoryImage,categoryName},index)=>{
                return <Category categoryImage={categoryImage} categoryName={categoryName}/>
            })
        }
    </div>
  )
}

export default Categories