import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
  return (
    <div className="stack">
      <h3>SignIn</h3>
      <GoogleButton />
      <div>or</div>
      <SignInForm/>
    </div>
  );
}
