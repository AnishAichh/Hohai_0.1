import Link from "next/link";
import EmailInput from "@/components/shared/Login/EmailInput";
import PasswordInput from "@/components/shared/Login/PasswordInput";
import SocialLogin from "@/components/shared/Login/SocialLogin";
import ForgotPassword from "@/components/shared/Login/ForgotPassword";
import LoginButton from "@/components/shared/buttons/Login";

const Login: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-secondary bg-zinc-800 overflow-hidden">
            <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-5">
                <h1 className="text-center text-xl font-bold">Login</h1>
                <div className="mx-6">
                    <EmailInput />
                    <PasswordInput />
                    <ForgotPassword />

                    <LoginButton />

                    <p className="py-2 font-semibold text-sm text-center">
                        Don't have an account?{" "}
                        <Link href='/sign-up'>
                            <span className="cursor-pointer underline">Register Now</span>
                        </Link>
                    </p>

                    <div className="flex items-center justify-center my-4">
                        <div className="h-px w-full bg-black"></div>
                        <span className="px-3">or</span>
                        <div className="h-px w-full bg-black"></div>
                    </div>
                </div>

                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
