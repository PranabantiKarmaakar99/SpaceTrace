import { useState } from "react";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { SubHeading } from "../Components/SubHeading";
import { useNavigate } from "react-router-dom";

import emailjs from "@emailjs/browser"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const templateParams = {
            firstName: firstName,
            lastName: lastName,
            email: username,
            password: password, // Only if needed, consider security here.
        };

        emailjs.send(
            "service_x9mvvl4", // replace with your EmailJS service ID
            "template_aztk2ak", // replace with your EmailJS template ID
            templateParams,
            "RKrUmGwGoDYcn59hR" // replace with your EmailJS user ID
        )
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Signup data sent via email!");
            navigate('/');
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
        });
    };

    return (
        <div className="z-10 relative h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white bg-opacity-20 w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    <InputBox onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" label={"First Name"} />
                    <InputBox onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" label={"Last Name"} />
                    <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="Email" label={"Email"} />
                    <InputBox onChange={(e) => setPassword(e.target.value)} placeholder="Password" label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={handleSignUp} label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already Signed Up?"} buttonText={"Click here!"} to={"/"} />
                </div>
            </div>
        </div>
    );
};
