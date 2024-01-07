"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Sidebar } from "@/components/layout/sidebar"


type SliderProps = React.ComponentProps<typeof Slider>


const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function page() {
    return (
        <>
            <div className="md:block">
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar className="hidden lg:block" />
                            <div className="col-span-3 lg:col-span-4 lg:border-l">

                                <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                                    <CardHeader>
                                        <CardTitle>Settings</CardTitle>
                                        <CardDescription>Your Bot's settings</CardDescription>
                                    </CardHeader>

                                    <div className="flex items-center justify-center h-full">
                                        <Tabs defaultValue="basic" className="w-[900px]">
                                            <TabsList className="grid w-full grid-cols-3">
                                                <TabsTrigger value="basic">Basic</TabsTrigger>
                                                <TabsTrigger value="delete">Delete</TabsTrigger>
                                                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="basic">
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>Basic</CardTitle>
                                                        <CardDescription>
                                                            ChatBot Id: --- id here ---.
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent className="space-y-2">
                                                        <div className="space-y-1">
                                                            <div className="flex  justify-between items-center">
                                                                <div className="w-1/2">
                                                                    <Label htmlFor="name">Name</Label>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <Input id="botname" defaultValue="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator />

                                                        <div className="space-y-1  py-3">
                                                            <div className="flex  justify-between items-center">
                                                                <div className="w-1/2">
                                                                    <Label htmlFor="username">Visibility</Label>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <RadioGroup defaultValue="comfortable">
                                                                        <div className="flex items-center space-x-2">
                                                                            <RadioGroupItem value="default" id="r1" />
                                                                            <Label htmlFor="r1">Private</Label>
                                                                        </div>
                                                                        <div className="flex items-center space-x-2">
                                                                            <RadioGroupItem value="comfortable" id="r2" />
                                                                            <Label htmlFor="r2">Public</Label>
                                                                        </div>
                                                                    </RadioGroup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator />

                                                        <div className="space-y-1  py-3">
                                                            <div className="flex  justify-between items-center">
                                                                <div className="w-1/2">
                                                                    <Label htmlFor="username">Default language</Label>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <Select>
                                                                        <SelectTrigger className="w-[180px]">
                                                                            <SelectValue placeholder="Select a language" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectGroup>
                                                                                <SelectLabel>Languages</SelectLabel>
                                                                                <SelectItem value="english">English</SelectItem>
                                                                                <SelectItem value="spanish">Spanish</SelectItem>
                                                                                <SelectItem value="french">French</SelectItem>
                                                                                <SelectItem value="german">German</SelectItem>
                                                                                <SelectItem value="chinese">Chinese</SelectItem>
                                                                            </SelectGroup>
                                                                        </SelectContent>
                                                                    </Select>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator />
                                                        <div className="space-y-1  py-3">
                                                            <div className="flex  justify-between items-center">
                                                                <div className="w-1/2">
                                                                    <Label htmlFor="username">AI model</Label>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <Select>
                                                                        <SelectTrigger className="w-[180px]">
                                                                            <SelectValue placeholder="Select a GPT model" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectGroup>
                                                                                <SelectLabel>OpenAI GPT Models</SelectLabel>
                                                                                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                                                                                <SelectItem value="gpt-4">GPT-4</SelectItem>
                                                                                {/* Add more models as needed */}
                                                                            </SelectGroup>
                                                                        </SelectContent>
                                                                    </Select>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator />
                                                        <div className="space-y-3 py-3">
                                                            <div className="flex  justify-between items-center">
                                                                <div className="w-1/2">
                                                                    <Label htmlFor="username">Chatbot temperature</Label>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <CardDescription>
                                                                        Recommended temperature range: 0.2 - 0.7.
                                                                    </CardDescription>
                                                                    <br />
                                                                    <Slider defaultValue={[33]} max={100} step={1} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator />
                                                        <div className="space-y-2  py-3">
                                                            <div className="flex  justify-between items-center">
                                                                <div className="w-1/2">
                                                                    <Label htmlFor="username">Collect visitor information</Label>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <CardDescription>
                                                                        When enabled, your chatbot will ask visitors for their information based on specific actions.
                                                                    </CardDescription>
                                                                    <div className="flex w-full">
                                                                        <div className="flex justify-between my-2">
                                                                            <span className=""><b>Ask for:</b></span>
                                                                            <RadioGroup className="px-3" defaultValue="comfortable">
                                                                                <div className="flex items-center space-x-2">
                                                                                    <RadioGroupItem value="default" id="r1" />
                                                                                    <Label htmlFor="r1">Private</Label>
                                                                                </div>
                                                                                <div className="flex items-center space-x-2">
                                                                                    <RadioGroupItem value="comfortable" id="r2" />
                                                                                    <Label htmlFor="r2">Public</Label>
                                                                                </div>
                                                                            </RadioGroup>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex">
                                                                        <div className="flex justify-between my-2">
                                                                            <span><b>When:</b></span>
                                                                            <Input className="mx-3" id="botname" defaultValue="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator />

                                                        <div className="space-y-1  py-3">
                                                            <div className="flex  justify-between items-center">
                                                                <div className="w-1/2">
                                                                    <Label htmlFor="username">System prompt</Label>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <Textarea placeholder="Type your message here." rows={6} value={`Your name is "AI Assistant". You are acting as a friendly customer support and talking to an user. Refer to customer as 'we' when speaking. Current year is 2023. You provide short and concise responses. Be helpful, respectful, appreciate diverse language styles.`} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter>
                                                        <Button>Save changes</Button>
                                                    </CardFooter>
                                                </Card>
                                            </TabsContent>
                                            <TabsContent value="delete">
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>Delete</CardTitle>
                                                        <CardDescription>
                                                            ChatBot ID: 3617e499-c4c3-4a56-b731-fa6c77dfc821
                                                        </CardDescription>
                                                    </CardHeader>
                                                    
                                                    <CardFooter>
                                                        <Button variant={"destructive"}>Delete</Button>
                                                    </CardFooter>
                                                </Card>
                                            </TabsContent>
                                            <TabsContent value="advanced">
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>Advanced</CardTitle>
                                                        <CardDescription>
                                                            ChatBot ID: 3617e499-c4c3-4a56-b731-fa6c77dfc821
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent className="grid gap-6">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="message-limit">Message rate limit</Label>
                                                                <Input id="message-limit" defaultValue="20" />
                                                            </div>
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="time-limit">Limit to (in minutes)</Label>
                                                                <Input id="time-limit" defaultValue="2" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <CardDescription>
                                                                To avoid abuse, you can set a restriction on the number of messages a visitor can send to the chatbot within a certain time period.
                                                            </CardDescription>
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter className="justify-between space-x-2">
                                                        <Button variant="ghost">Cancel</Button>
                                                        <Button>Update</Button>
                                                    </CardFooter>
                                                </Card>

                                            </TabsContent>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
