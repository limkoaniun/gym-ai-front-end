"use client"

import { LoginForm } from "@/components/auth/login-form"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="p-4 sm:p-6 md:p-8 flex justify-between items-center">
                <h1 className="text-lg font-semibold text-foreground">GymBuddy</h1>
                {/*<DropdownMenu>*/}
                {/*    <DropdownMenuTrigger asChild>*/}
                {/*        <Button variant="outline" size="sm">*/}
                {/*            <Globe className="mr-2 h-4 w-4" />*/}
                {/*            Language*/}
                {/*        </Button>*/}
                {/*    </DropdownMenuTrigger>*/}
                {/*    <DropdownMenuContent align="end">*/}
                {/*        <DropdownMenuItem onClick={() => console.log("English selected")}>*/}
                {/*            English*/}
                {/*        </DropdownMenuItem>*/}
                {/*        <DropdownMenuItem onClick={() => console.log("Chinese selected")}>*/}
                {/*            Chinese*/}
                {/*        </DropdownMenuItem>*/}
                {/*        <DropdownMenuItem onClick={() => console.log("Malay selected")}>*/}
                {/*            Malay*/}
                {/*        </DropdownMenuItem>*/}
                {/*    </DropdownMenuContent>*/}
                {/*</DropdownMenu>*/}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="bg-gray-200 px-4 py-2 rounded">Language</button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border border-gray-300 p-2 shadow-md">
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>Chinese</DropdownMenuItem>
                        <DropdownMenuItem>Malay</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8 -mt-16">
                <LoginForm />
            </main>
        </div>
    )
}