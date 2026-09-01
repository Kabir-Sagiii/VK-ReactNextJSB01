// import {useState} from 'react'
import "./ReactForm.css"
import {useForm} from "react-hook-form"
function ReactForm() {
const {register,handleSubmit,reset} = useForm()
    //  const [input,setInput] = useState("")

    //  const handleForm = (e)=>{
    //    e.preventDefault();
    //    console.log(input)
    //    setInput("")
    //  }

    const handleMyForm = (data)=>{
      console.log(data) // {username:"------"}
      reset()

    }
  return (
    <div className='react-form'>
        <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(handleMyForm)} >
            <input type="text" placeholder='enter text'  {...register("username")} />
            
            <br/><br/>
            <input type="password" placeholder="enter password" {...register("password")}/>
            <br/><br/>
            <button type='submit' >Submit</button>
        </form>
    </div>
    // <div className='react-form'>
    //     <h1>React Hook Form</h1>
    //     <form onSubmit={handleForm}>
    //         <input type="text" value={input} onChange={(event)=>{
    //             setInput(event.target.value)
    //         }} placeholder='enter text' />
    //         <button type='submit' >Submit</button>
    //     </form>
    // </div>
  )
}

export default ReactForm