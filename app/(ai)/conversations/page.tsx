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
import { Headphones, UserRound, Upload } from 'lucide-react';
import Editor from "@/components/Editor/main";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"


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
                                <div className="flex-1 space-y-4 p-8 pt-6">
                                    <div className="flex items-center justify-between space-y-2">
                                        <h2 className="text-3xl font-bold tracking-tight">Conversations</h2>
                                    </div>
                                </div>


                                {/* Main dashboard content  */}
                                <div className="h-full px-4 py-6 lg:px-8">
                                    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-8">
                                        <Card className="col-span-3 h-[80vh]">
                                            <CardHeader>
                                                <CardTitle className="flex">Select</CardTitle>
                                            </CardHeader>
                                            <CardContent className="pl-2">
                                                <Separator />

                                                <div className="muted p-6">No conversations yet.</div>

                                            </CardContent>
                                        </Card>
                                        <Card className="col-span-5 h-[80vh]">
                                            <CardHeader>
                                                <CardTitle>Selected Chats</CardTitle>
                                                <CardDescription>
                                                    Chosen conversations will appear below.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="muted p-6">No chat selected.</div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
