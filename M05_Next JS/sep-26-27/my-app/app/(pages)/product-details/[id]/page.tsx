

async function ProductDetails(props:any) {
   const {id}= await props.params
   console.log(id)
     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
   const data = await res.json()
   console.log(data)
  return (
    <div className="m-10">
        <img src={data.image} className="w-[100px] h-[100px]" alt="" />
         <h1 className='text-green-800 text-3xl '>
            {data.title}
         </h1>
    </div>
  )
}

export default ProductDetails