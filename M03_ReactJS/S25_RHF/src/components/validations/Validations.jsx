
import "./Validations.css"
import {useForm} from "react-hook-form"
function Validations() {
const {register,handleSubmit,reset,formState:{errors}} = useForm()
    
    const handleMyForm = (data)=>{
      console.log(data) // {username:"------"}
      reset()

    }
  return (
    <div className='react-form'>
        <h1>React Hook Form Validations</h1>
        <form onSubmit={handleSubmit(handleMyForm)} >
            <input type="text" placeholder='enter username'  {...register("username",{required:{value:true,message:"name is required"},minLength:{value:3,message:"minimum 3 char required",
               
            }})} /><br/>
           {errors.username && <small className="error-message">{errors.username.message}</small> }
            
            <br/><br/>
            <input type="password" placeholder="enter password" {...register("password",{required:{value:true,message:"password required"},pattern:{value:/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{7,}$/,message:`Password must be at least 7 characters long and contain at least one uppercase letter, one digit, and one special character.`}})} />
            <br/>
           {errors.password &&  <small className="error-message">{errors.password.message}</small>}
            <br/><br/>
            <button type='submit' >Submit</button>
        </form>
    </div>
    
  )
}

export default Validations