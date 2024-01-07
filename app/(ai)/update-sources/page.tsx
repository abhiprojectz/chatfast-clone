"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Sidebar } from "@/components/layout/sidebar"
import Fileupload from './fileupload';


const UpdateSources = () => {

    // const handleFileUploaded = (file: File) => {
    //     // Specify the path where you want to save the file
    //     const filePath = `user_files/${file.name}`;

    //     // Use the fs module to save the file
    //     fs.writeFile(filePath, file, (err) => {
    //       if (err) {
    //         console.error('Error saving file:', err);
    //       } else {
    //         console.log('File saved successfully:', filePath);

    //         // Call the file_uploaded_msg function
    //         file_uploaded_msg();
    //       }
    //     });
    //   };

    //   // Assuming file_uploaded_msg is a function defined elsewhere in your code
    //   const file_uploaded_msg = () => {
    //     console.log('File uploaded message!');
    //   };

    return (
        <>

            <div className="md:block">
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar className="hidden lg:block" />
                            <div className="col-span-3 lg:col-span-4 lg:border-l">

                                {/* Main dashboard content  */}
                                <div className="h-full py-2 mb-4 lg:px-8">
                                    <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-1 mb-8">
                                        <div className="flex-1 pt-6">
                                            <CardHeader>
                                                <CardTitle>Sources</CardTitle>
                                                <CardDescription>Update the knowledge base for the chatbot</CardDescription>
                                            </CardHeader>

                                            <div className="flex items-center justify-center h-full">
                                                <Tabs defaultValue="files" className="w-[600px]">
                                                    <TabsList className="grid w-full grid-cols-3">
                                                        <TabsTrigger value="files">Files</TabsTrigger>
                                                        <TabsTrigger value="textdata">Text</TabsTrigger>
                                                        <TabsTrigger value="website">Website</TabsTrigger>
                                                    </TabsList>
                                                    <TabsContent value="files">
                                                        <Card>
                                                            <CardContent className="space-y-2">
                                                                <div className="">
                                                                    <CardHeader>
                                                                        <CardTitle>Files</CardTitle>
                                                                    </CardHeader>
                                                                    <div>
                                                                        <Fileupload />
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                            <CardFooter>
                                                                <Button>Save changes</Button>
                                                            </CardFooter>
                                                        </Card>
                                                    </TabsContent>
                                                    <TabsContent value="textdata">
                                                        <Card>
                                                            <CardHeader>
                                                                <CardTitle>Text</CardTitle>
                                                                <CardDescription>
                                                                    Type the text content to train your chatbot.
                                                                </CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="space-y-2">
                                                                <Textarea rows={6} placeholder="Start typing here..." />
                                                            </CardContent>
                                                            <CardFooter>
                                                                <Button>Save Changes</Button>
                                                            </CardFooter>
                                                        </Card>
                                                    </TabsContent>

                                                    <TabsContent value="website">
                                                        <Card>
                                                            <CardHeader>
                                                                <CardTitle>Website</CardTitle>
                                                                <CardDescription>
                                                                    We will crawl all the required pages from this base url.
                                                                </CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="space-y-2">
                                                                <Label htmlFor="current">Base Url:</Label>
                                                                <div className="flex w-screen">
                                                                    <div>
                                                                        <Input id="current" style={{ 'width': '450px' }} type="password" placeholder="must starts with https://" />
                                                                    </div>
                                                                    <div className="px-4">
                                                                        <Button>Crawl</Button>
                                                                    </div>

                                                                </div>
                                                                <div className="space-y-1">
                                                                    <Label htmlFor="new">New password</Label>
                                                                    <Input id="new" type="password" />
                                                                </div>
                                                            </CardContent>
                                                            <CardFooter>
                                                                <Button>Save password</Button>
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
                </div>
            </div>




        </>
    );
}

export default UpdateSources;