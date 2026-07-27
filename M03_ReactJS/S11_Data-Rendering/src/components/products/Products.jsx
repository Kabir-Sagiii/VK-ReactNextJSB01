import {useState} from 'react'

function Products() {
    const [products,setProducts] = useState([{
        image:"",
        pname:"",
        price:0,
        description:""
    },{},{},{},{}])
  return (
    <div>
        <h1>Products Details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ab, alias repellendus quaerat quisquam voluptas nostrum quidem corporis voluptates nihil veniam dignissimos, repellat veritatis. Temporibus, ullam quam? Rerum modi fugiat incidunt ullam! Distinctio quo quidem animi accusantium reprehenderit vitae ex illum nemo, sed quaerat asperiores voluptatem aut molestias expedita doloribus iste commodi deleniti accusamus facilis iure aliquid minus reiciendis. Officiis nemo modi repudiandae tenetur fugiat mollitia, earum voluptatibus perferendis. Ducimus praesentium cupiditate a beatae voluptas exercitationem nam iusto ratione itaque dignissimos! Architecto culpa eligendi amet impedit deleniti enim, excepturi non aliquam accusamus veniam numquam illo rerum pariatur laboriosam voluptatem corrupti.</p>
        
        

    </div>
  )
}

export default Products