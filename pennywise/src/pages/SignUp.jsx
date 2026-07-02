import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Header from "../components/Header/Index";
import SignUpSignIn from "../components/SignUpSignIn/Index";

export default function SignUp() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading]);

  return (
    <>
      <Header />
      <div className="wrapper">
        <SignUpSignIn />
      </div>
    </>
  );
}