import { Plus, Bot } from 'lucide-react';
import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <div className="h-full flex items-center justify-center mx-auto min-h-8xl max-w-8xl px-4 sm:px-6 lg:px-8" style={{ "minHeight": "80vh" }}>
                <div className="text-center">
                    <Bot className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">No Bots yet</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new chatbot.</p>
                    <div className="mt-6">
                        <Link href={"/insights"}>
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                New Bot
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomePage;