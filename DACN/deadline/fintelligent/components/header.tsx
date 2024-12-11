import { HeaderLogo } from "@/components/header-logo"
import { Navigation } from "@/components/navigation"
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"
import { WelcomMsg } from "@/components/welcom-msg"
import { Filters } from "@/components/filters"

export const Header = () => {
    return (
        <header  className="bg-gradient-to-b from-blue-800 to-blue-400 px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo/>
                        <Navigation/>
                    </div>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-muted-foreground"/>
                    </ClerkLoading>
                </div>
                <WelcomMsg />
                <Filters />
            </div>
        </header>
    )
}