import React from 'react'
import "./Category.css"
import type { category } from '../../types/categoryType'
function Category({categoryImage,categoryName}:category) {
  return (
    <div className='category'>
        <img src={categoryImage} width={90} height={90} alt="" />
        <h2>{categoryName}</h2>
    </div>
  )
}

export default Category