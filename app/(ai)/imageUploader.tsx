"use client";

import { useState, ChangeEvent } from 'react';
import { createClient, StorageFile as SupabaseStorageFile } from '@supabase/supabase-js';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';


type StorageBucket = any; // Define the StorageBucket type


const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)


const ImageUploader = () => {
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const onDrop = async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setUploading(true);

        const { data, error }: { data: StorageFile | null; error: Error | null } = await supabase.storage
            .from('userFiles')
            .upload(`public/${uuidv4()}`, file);

        if (error) {
            setUploadError(error.message);
        } else if (data) {
            setUploadError(null);
            setUploadedImage(URL.createObjectURL(file));
        }

        setUploading(false);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="p-4">
            <div {...getRootProps()} className="border-2 border-dashed border-gray-400 p-4 rounded-lg text-center">
                <input {...getInputProps()} />
                {uploading ? (
                    <p>Uploading...</p>
                ) : (
                    <p>Drag 'n' drop an image here, or click to select an image</p>
                )}
            </div>
            {uploadError && <p className="text-red-500">{uploadError}</p>}
            {uploadedImage && (
                <div className="mt-4">
                    <img src={uploadedImage} className="max-w-full h-auto" alt="Uploaded" />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
