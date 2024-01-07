import React, { useEffect, useRef } from 'react';
import Quill, { DeltaStatic } from 'quill';
import 'quill/dist/quill.snow.css';

interface QuillEditorProps {
  content: DeltaStatic;
  onChange: (content: DeltaStatic) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ content, onChange }) => {
  const quillRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<Quill>();

  useEffect(() => {
    if (quillRef.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: 'snow',
        placeholder: 'Write something amazing...',
      });

      quillInstance.current.setContents(content);

      quillInstance.current.on('text-change', () => {
        if (quillInstance.current) {
          onChange(quillInstance.current.getContents());
        }
      });
    }

    return () => {
      quillInstance.current?.off('text-change');
      quillInstance.current = undefined;
    };
  }, [content, onChange]);

  return <div ref={quillRef} />;
};

export default QuillEditor;
