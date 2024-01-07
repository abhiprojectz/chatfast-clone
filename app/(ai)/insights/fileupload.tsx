"use client"
import { Dropzone } from '@/components/dropzone';
import { useEffect, useState } from 'react';

export default function Fileupload() {
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

    // Function to handle the change in uploaded files
    const handleFileChange: React.Dispatch<React.SetStateAction<string[]>> = (
        newState: React.SetStateAction<string[]>
    ) => {
        setUploadedFiles(newState);
    };

    // remove this useEffect hook if you don't need to do anything with the uploaded files
    useEffect(() => {
        console.log(uploadedFiles);
    }, [uploadedFiles]);

    return (
        <div className="p-5 m-2">
            <div>
                <Dropzone
                    onChange={handleFileChange} 
                    className="flex flex-col items-center px-4 py-6 bg-white border border-dashed rounded-md border-gray-400 dark:bg-gray-800 dark:border-gray-600 text-center" // Optional: Add any custom class
                    fileExtension="pdf" 
                />
            </div>
        </div>
    );
}