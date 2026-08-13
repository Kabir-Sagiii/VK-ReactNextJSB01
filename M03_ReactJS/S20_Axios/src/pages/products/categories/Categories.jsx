import React from 'react'
import "./Categories.css"
import Category from './category/Category'
function Categories() {
  return (
    <div className='categories'>
        <Category label="all" checked={true} />
         <Category label="electronics" />
          <Category label="jewelery" />
           <Category label="men's Clothing" />
            <Category label="women's Clothing" />
    </div>
  )
}

export default Categories