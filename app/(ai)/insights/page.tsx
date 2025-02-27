"use client"
import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import Fileupload from './fileupload';
import { Headphones, UserRound, Upload } from 'lucide-react';
import Editor from "@/components/Editor/main";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "./date-range-picker"
import { Overview } from "./overview"
import { RecentSales } from "./recent-sales"


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

                                <div className="flex-col md:flex">
                                    <div className="border-b">
                                        <div className="flex h-16 items-center px-4">

                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4 p-8 pt-6">
                                        <div className="flex items-center justify-between space-y-2">
                                            <h2 className="text-3xl font-bold tracking-tight">Insights</h2>
                                            <div className="flex items-center space-x-2">
                                                <CalendarDateRangePicker />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                                <Card>
                                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                        <CardTitle className="text-sm font-medium">
                                                            Total Revenue
                                                        </CardTitle>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            className="h-4 w-4 text-muted-foreground"
                                                        >
                                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                        </svg>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="text-2xl font-bold">$45,231.89</div>
                                                        <p className="text-xs text-muted-foreground">
                                                            +20.1% from last month
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                        <CardTitle className="text-sm font-medium">
                                                            Conversations
                                                        </CardTitle>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            className="h-4 w-4 text-muted-foreground"
                                                        >
                                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                            <circle cx="9" cy="7" r="4" />
                                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                                        </svg>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="text-2xl font-bold">0</div>
                                                        <p className="text-xs text-muted-foreground">
                                                            +0% from last month
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                        <CardTitle className="text-sm font-medium">Messages</CardTitle>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            className="h-4 w-4 text-muted-foreground"
                                                        >
                                                            <rect width="20" height="14" x="2" y="5" rx="2" />
                                                            <path d="M2 10h20" />
                                                        </svg>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="text-2xl font-bold">0</div>
                                                        <p className="text-xs text-muted-foreground">
                                                            +0% from last month
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                        <CardTitle className="text-sm font-medium">
                                                            Contacts
                                                        </CardTitle>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            className="h-4 w-4 text-muted-foreground"
                                                        >
                                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                        </svg>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="text-2xl font-bold">0</div>
                                                        <p className="text-xs text-muted-foreground">
                                                            +0 since last hour
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                                                <Card className="col-span-4">
                                                    <CardHeader>
                                                        <CardTitle>Overview Message Credits</CardTitle>
                                                    </CardHeader>
                                                    <CardContent className="pl-2">
                                                        <Overview />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
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
