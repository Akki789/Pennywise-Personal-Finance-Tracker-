import React, { useState } from "react";
import "./styles.css";
import Input from "../Input/Index";
import Button from "../Button/Index";
import { toast } from "react-toastify";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


export default function SignUpSignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function sigupWithEmail() {
    setLoading(true);
    // signup logic
    console.log("Name", name);
    console.log("Email", email);
    console.log("Password", password);
    console.log("Confirm Password", confirmPassword);
   

    //Authenticate user
    if (name!="" && email!="" && password!="" && confirmPassword!="") {

      if (password == confirmPassword) {
         createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User...", user);
          toast.success("User Signed Up Successfully");
          setLoading(false);
          setConfirmPassword("");
          setEmail("");
          setName("");
          setPassword("");
          // create a document with user id as the following id
          createDoc(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage)
          setLoading(false);
          // ..
        })
      }else{
        toast.error("Password and Confirm Password do not match");
        setLoading(false);
      }
    
     
    } else {
      toast.error("All the fields are mandatory");
      setLoading(false);
    }
  }

  function createDoc(user){
    //Make sure that document with the uid does not exist
    //create a document in firestore with user id

  }

  return (
    <div className="signup-wrapper">
      <h2 className="title">
        Sign Up on <span style={{ color: "var(--theme)" }}>Pennywise</span>
      </h2>
      <form>
        <Input
          label={"Full Name"}
          state={name}
          setState={setName}
          placeholder={"John Doe"}
        />

        <Input
          type={"email"}
          label={"Email"}
          state={email}
          setState={setEmail}
          placeholder={"JohnDoe@gmail.com"}
        />

        <Input
          type={"password"}
          label={"Password"}
          state={password}
          setState={setPassword}
          placeholder={"Example@123"}
        />

        <Input
          type={"password"}
          label={"Confirm Password"}
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"Example@123"}
        />

        <Button
          disabled={loading}
          text={loading ? "Loading .." :"Sign Up using Email and Password"}
          onClick={sigupWithEmail}
        />

        <p style={{ textAlign: "center", margin: 0 }}>or</p>

        <Button text={loading ? "Loading .." :"Sign Up using Google"} blue={true} />
      </form>
    </div>
  );
}
