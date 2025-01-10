"use client";
import { useRouter } from "next/navigation";
import Divider from "../../components/auth/Divider";
import SignInForm from "../../components/auth/SignInForm";
import GoogleSignInButton from "../../components/auth/GoogleSignInButton";

const SignIn = () => {
  const router = useRouter();

  const handleFormSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;

    if (email && password) {
      router.push("/dashboard");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <section className="py-4 md:py-8 bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <GoogleSignInButton onClick={() => alert("Google Sign-In clicked")} />
            <Divider />
            <SignInForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
