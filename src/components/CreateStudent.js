import StudentForm from "./studenForm";
import { useState } from "react";
import Axios from "axios"
function CreateStudent(){
    const [arr,setArr]=useState([]); //arr=[sumanth,sumanth@gmail.com,1]

    const getState=(childData)=>{
        setArr(childData);    //childData=[sumanth,sumanth@gmail.com,1] 
    }

    const handleSubmit=()=>{
        const data={name:arr[0],email:arr[1],rollNo:arr[2]};
        Axios.post("https://crud-deployment-ir60.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status===200) {
                alert("record added successfully");
                window.location.reload();
            }
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <StudentForm getState={getState}
                    nameValue=""
                    emailValue=""
                    rollNoValue=""
                    >
                    Create Student
                </StudentForm>
            </form>
        </div>
    )
}
export default CreateStudent;