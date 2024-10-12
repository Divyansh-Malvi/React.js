import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Insert=()=>{
    const [input , setInput] = useState({})

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api = "http://localhost:3000/employee";
        axios.post(api , input).then((res)=>{
            console.log(res);
           // alert("Data Saved!!")
           toast.success("Data Saved");
        })
    }
    return(
        <>
        <h1>Insert Record</h1>
        <br />
        Enter Employee No : <input type="text" name="empno" onChange={handleInput} />
        <br />
        Enter Name : <input type="text" name="name" onChange={handleInput} />
        <br />
        Enter Email : <input type="text" name="email" onChange={handleInput} />
        <br />
        Enter Contact No : <input type="text" name="contact" onChange={handleInput} />
        <br />
        <button onClick={handleSubmit}>Save</button>
        <ToastContainer/>
        </>
    )
}
export default Insert;
