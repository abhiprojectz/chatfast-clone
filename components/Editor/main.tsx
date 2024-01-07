"use client"

import React, { useCallback, useMemo, useRef, useState } from "react";
import QuillEditor, { Quill } from "react-quill"; // Import QuillEditor and Quill type

import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.css";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"


interface EditorProps { }

const Editor: React.FC<EditorProps> = () => {
  const [value, setValue] = useState<string>(""); // Add string type for value state

  const quill = useRef<Quill | null>(null); // Define Quill type for the ref

  const handler = () => {
    console.log(value);
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          const imageUrl = reader.result as string;
          const quillEditor = quill.current?.getEditor();

          if (quillEditor) {
            const range = quillEditor.getSelection(true);
            quillEditor.insertEmbed(range.index, "image", imageUrl);
          }
        };

        reader.readAsDataURL(file);
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  return (
    <>
    <div className="bg-white shadow-sm sm:rounded-xl md:col-span-2">
    <div className="col-span-full">
    <QuillEditor
        ref={(el) => (quill.current = el)}
        className={styles.editor}
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => setValue(value)}
      />
      <CardFooter className="p-2" style={{ "marginTop": 80 }}>
        <div className="flex w-full items-center justify-end gap-x-6 px-4 py-4 sm:px-8">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <Button
            onClick={handler}
            className="rounded-md"
          >
            Submit
          </Button>
        </div>
      </CardFooter>
    </div>
    </div>
    </>

  );
};

export default Editor;
