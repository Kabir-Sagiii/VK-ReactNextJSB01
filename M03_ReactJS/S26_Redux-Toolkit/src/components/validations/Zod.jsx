
import "./Zod.css"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

 const schema =z.object({
       username: z.string().nonempty("username is required").min(3,"minimum 3 char's required") ,
       password:z.string().nonempty("password is mandatory").min(5,"minimum 5 char's required")
       .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{7,}$/,"Password must be at least 7 characters long and contain at least one uppercase letter, one digit, and one special character.")

    })

function Zod () {
const {register,handleSubmit,reset,formState:{errors}} = useForm({
    resolver : zodResolver(schema),
    mode:"on"
})
    
    const handleMyForm = (data)=>{
      console.log(data) // {username:"------"}
      reset()

    }
  return (
    <div className='react-form'>
        <h1>React Hook Form + Zod </h1>
        <form onSubmit={handleSubmit(handleMyForm)} >
            <input type="text" placeholder='enter username'  {...register("username")}
               
             /><br/>
           {errors.username && <small className="error-message">{errors.username.message}</small> }
            
            <br/><br/>
            <input type="password" placeholder="enter password" {...register("password")} />
            <br/>
            {errors.password && <small className="error-message">{errors.password.message}</small> }
            <br/><br/>
            <button type='submit' >Submit</button>
        </form>
    </div>
    
  )
}

export default Zod 