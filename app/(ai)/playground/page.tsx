"use client"
import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Fileupload from './fileupload';
import { Headphones, MessageCircleMore , Upload } from 'lucide-react';
import Editor from "@/components/Editor/main";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ChatDemo } from "./chatui";

// export const metadata: Metadata = {
//   title: "Music App",
//   description: "Example music app using the components.",
// }

export default function MusicPage() {
    return (
        <>
            <div className="md:block">
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar className="hidden lg:block" />
                            <div className="col-span-3 lg:col-span-4 lg:border-l">

                                {/* Dashboard title  */}
                                <div className="flex-1 space-y-4 pt-2" style={{ "padding": "15px" }}>
                                    <div className="flex items-center justify-between space-y-2">
                                        <h2 className="text-3xl font-bold tracking-tight">Chat With your Bot</h2>
                                        <div className="flex items-center space-x-2">
                                            {/* <Button>Generation: 0/5</Button> */}
                                        </div>
                                    </div>
                                </div>


                                {/* Main dashboard content  */}
                                <div className="h-full w-full">
                                    <ChatDemo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
