import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart2, Play, Settings, Brain, Home, HelpCircle , BookType, Link2, Package, SquareUserRound } from 'lucide-react';


import Link from "next/link";
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"

export function Sidebar({ className }: any) {
  const pathname = usePathname()
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>
          <div className="space-y-1">
            <Link href="/">
              <Button variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            ChatFast
          </h2>
          <div className="space-y-1">
            <Link href="/insights">
              <Button variant={pathname === "/insights" ? "secondary" : "ghost"} className="w-full justify-start">
                <BarChart2 className="mr-2 h-4 w-4" />
                Insights
              </Button>
            </Link>
            <Link href="/playground">
              <Button variant={pathname === "/playground" ? "secondary" : "ghost"} className="w-full justify-start">
                <Play className="mr-2 h-4 w-4" />
                Playground
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant={pathname === "/settings" ? "secondary" : "ghost"} className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/update-sources">
              <Button variant={pathname === "/update-sources" ? "secondary" : "ghost"} className="w-full justify-start">
                <Brain className="mr-2 h-4 w-4" />
                AI knowledge
              </Button>
            </Link>
            {/* <Link href="/custom-qa">
              <Button variant={pathname === "/custom-qa" ? "secondary" : "ghost"} className="w-full justify-start">
                <HelpCircle className="mr-2 h-4 w-4" />
                Custom Q&A
              </Button>
            </Link> */}
            {/* <Link href="/smart-forms">
              <Button variant={pathname === "/smart-forms" ? "secondary" : "ghost"} className="w-full justify-start">
                <BookType className="mr-2 h-4 w-4" />
                Smart forms
              </Button>
            </Link> */}
            <Link href="/integrations">
              <Button variant={pathname === "/integrations" ? "secondary" : "ghost"} className="w-full justify-start">
                <Link2 className="mr-2 h-4 w-4" />
                Integrations
              </Button>
            </Link>
            <Link href="/conversations">
              <Button variant={pathname === "/conversations" ? "secondary" : "ghost"} className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Conversations
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant={pathname === "/contact" ? "secondary" : "ghost"} className="w-full justify-start">
                <SquareUserRound className="mr-2 h-4 w-4" />
                Contacts
              </Button>
            </Link>
            {/* Repeat the structure for other menu items */}
          </div>

        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            {/* Mics */}
          </h2>
        </div>
      </div>
    </div>
  )
}
