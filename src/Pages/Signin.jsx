import { Button } from "../Components/Button";
import { InputBox } from "../Components/InputBox";
import { Heading } from "../Components/Heading";
import {SubHeading} from "../Components/SubHeading"
import {BottomWarning} from "../Components/BottomWarning"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';







export const Signin =()=> {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    return <div className=" relative z-10 flex h-screen justify-center">
    <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white bg-opacity-20 w-80 text-center p-2 h-max px-4">
            <Heading label={'Sign In'} />
            <SubHeading label={'Enter your username and password'} />
            <InputBox label={"UserName"} placeholder={"PK@gmail.com"} onChange={(e)=>{setUsername(e.target.value)}}/>
            <InputBox label={"Password"} placeholder={"*********"} onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className="pt-4">

       
            <Button label={"Sign In"} onClick={async()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signin",{username,password});
                    localStorage.setItem('token',response.data.token);
                    navigate('/')
               
            }} />
                 </div>

            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>

            </div>
            </div>
            </div>

    

}