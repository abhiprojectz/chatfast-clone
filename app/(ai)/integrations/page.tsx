"use client"
import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Fileupload from './fileupload';
import { Headphones, UserRound, Upload } from 'lucide-react';
import Editor from "@/components/Editor/main";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDateRangePicker } from "./date-range-picker"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

// export const metadata: Metadata = {
//   title: "Music App",
//   description: "Example music app using the components.",
// }

export default function MusicPage() {
  const people = [
    { name: 'Lindsay Walton', title: 'user', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
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
                    <h2 className="text-3xl font-bold tracking-tight">Integrations</h2>
                  </div>
                </div>


                {/* Main dashboard content  */}
                <div className="h-full">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                      <div className="sm:flex-auto">
                        <p className="mt-2 text-sm text-gray-700">
                          Make your chatbot public to users.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 flow-root">
                      <Card className="space-y-4 mb-4">
                        <CardHeader>
                          <CardTitle>Allow public access</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                          <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" />
                            <Label htmlFor="airplane-mode">Allow</Label>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="space-y-4 mb-4">
                        <CardHeader>
                          <CardTitle>Share</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Use this url to access chatbot directly:</p>
                          <a href="https://www.chatfast.io/chat/3617e499-c4c3-4a56-b731-fa6c77dfc821">https://www.chatfast.io/chat/3617e499-c4c3-4a56-b731-fa6c77dfc821</a>
                          <Separator className="m-3" />
                          <p><b>Or</b></p>
                          <Separator className="m-3" />
                          <p>Embeded on website</p>
                          <p>Copy and add the following script to your website html:</p>
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
    </>
  )
}
