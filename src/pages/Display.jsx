import { useState , useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [empdata , setEmpdata] = useState([]);
    const loadData=()=>{
        let url = "http://localhost:3000/employee";
        axios.get(url).then((res)=>{
        console.log(res.data);
        setEmpdata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans = empdata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
            </tr>
            </>
        )
    })
return(
    <>
    <h1>Display Data</h1>
    <table width="90%" border="2">
        <tr>
            <th>Epmloyee Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
        </tr>
        {ans}
    </table>
    </>
)
}
export default Display;