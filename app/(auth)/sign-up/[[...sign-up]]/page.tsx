import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import logo from "@/assests/logo4.png"

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
            <h1 className="font-bold text-3xl">Welcome Back</h1>
            <p text-base>
            Log in or Create account to get back to your dashboard!
            </p>
        </div>
        <div>
            <ClerkLoaded>
                <SignUp/>
            </ClerkLoaded>
            <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground"/>
            </ClerkLoading>
        </div>
      </div>
      <div className="bg-black flex items-center justify-center">
        <Image src={logo} alt="logo" height={400} width={400}/>
      </div>
    </div>
  );
}