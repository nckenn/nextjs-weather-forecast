'use client'

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const LogoutButton = () => {
    const { data: session } = useSession()
    
    return <>
        {session ? (
            <Button 
                variant="ghost"
                onClick={() => signOut()}
            >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Button>
            ) : ""
        }
    </>
}

export default LogoutButton;