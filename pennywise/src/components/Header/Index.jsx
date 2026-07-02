import React from "react";
import "./styles.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import userImg from "../../assets/user.svg";

export default function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

 function logoutfunc() {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Logged Out Successfully!");
          navigate("/");
        })
        .catch((error) => {
          // An error happened.
          toast.error(error.message);
        });
    } catch (e) {
      toast.error(e.message);
    }
  }


  return (
    <div className="navbar">
      <p className="logo">Pennywise</p>
      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src={user.photoURL ? user.photoURL : userImg}
            style={{ borderRadius: "50%", height: "1.7rem", width: "1.7rem" }}
          />
          <p className="navbar-link" onClick={logoutfunc}>
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
