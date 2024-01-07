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
                                        <h2 className="text-3xl font-bold tracking-tight">Speech to text</h2>
                                        <div className="flex items-center space-x-2">
                                            <Button>Generation: 0/5</Button>
                                        </div>
                                    </div>
                                </div>


                                {/* Main dashboard content  */}
                                <div className="h-full px-4 py-6 lg:px-8">
                                    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-8">
                                        <Card className="col-span-4">
                                            <CardHeader>
                                                <CardTitle className="flex"><Headphones className="mr-3" /> Speech to text</CardTitle>
                                            </CardHeader>
                                            <CardContent className="pl-2">
                                                <Separator />

                                                <div className="bg-white shadow-sm sm:rounded-xl md:col-span-2">
                                                    <div className="px-4">
                                                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                            <div className="col-span-full">
                                                                <label htmlFor="website" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                                                                    Title
                                                                </label>
                                                                <div className="mt-2">
                                                                    <div className="w-full">
                                                                        <Input className="w-full" placeholder="Type here..." />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-span-full">
                                                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Upload audio
                                                                </label>
                                                                <div className="mt-2">
                                                                    <Fileupload />
                                                                </div>
                                                            </div>

                                                            <div className="col-span-full">
                                                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Description
                                                                </label>
                                                                <div className="mt-2">
                                                                    <textarea
                                                                        id="about"
                                                                        name="about"
                                                                        rows={3}
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                        defaultValue={''}
                                                                    />
                                                                </div>
                                                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-6 items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                                            Cancel
                                                        </button>
                                                        <Button
                                                            className=""
                                                        >
                                                            Save
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card className="col-span-4">
                                            <CardHeader>
                                                <CardTitle>Produced Result</CardTitle>
                                                <CardDescription>
                                                    Below is the produced output from the AI.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div>
                                                    <Editor />
                                                </div>
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
