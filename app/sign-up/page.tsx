import React from "react";
import Link from 'next/link';
import UsernameInput from "@/components/shared/SignUp/UsernameInput";
import EmailInput from "@/components/shared/SignUp/EmailInput";
import PasswordInput from "@/components/shared/SignUp/PasswordInput";
import TermsAndConditions from "@/components/shared/SignUp/TermsAndConditions";
import SocialButtons from "@/components/shared/SignUp/SocialButtons";

const SignUp = () => (
    <div className="flex items-center justify-center h-screen w-screen bg-secondary overflow-hidden bg-zinc-800">
        <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-5">
            <h1 className="text-center text-xl font-bold">Create Your Account</h1>
            <div className="mx-6">
                <UsernameInput />
                <EmailInput />
                <PasswordInput label="Password*" placeholder="Set your Password" />
                <PasswordInput label="Confirm Password*" placeholder="Confirm password" />
                <TermsAndConditions />
                <button className="mt-5 h-12 w-full rounded-md bg-primary text-center font-bold shadow-sm bg-red-500">
                    SIGN UP
                </button>
                <p className="py-2 font-semibold text-sm text-center">
                    Already have an account?{" "}
                    <Link href={"/login"}>
                        <span className="cursor-pointer underline">Sign In</span>
                    </Link>
                </p>
                <div className="flex items-center justify-center my-4 w-full">
                    <div className="h-px w-full bg-black"></div>
                    <span className="px-3">or</span>
                    <div className="h-px w-full bg-black"></div>
                </div>
            </div>
            <SocialButtons />
        </div>
    </div>
);

export default SignUp;
