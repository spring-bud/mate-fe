// components/common/Editor/Editor.tsx
'use client';

import { useState, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import Toolbar from './Toolbar';
import Preview from './Preview';
import DragDrop from '../dragDrop/DragDrop';

interface EditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export default function Editor({ initialValue = '# 제목을 입력하세요', onChange }: EditorProps) {
  const [content, setContent] = useState(initialValue);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<{
    view: EditorView;
    state: EditorState;
  } | null>(null);

  // 선택된 텍스트 가져오기
  const getSelectedText = () => {
    if (!editorRef.current?.view) return '';
    const state = editorRef.current.view.state;
    const selection = state.selection.main;
    return state.sliceDoc(selection.from, selection.to);
  };

  // 선택된 텍스트 변경하기
  const replaceSelectedText = (newText: string) => {
    if (!editorRef.current?.view) return;
    const view = editorRef.current.view;
    const selection = view.state.selection.main;

    const from = selection.from;
    const to = selection.from === selection.to ? selection.from : selection.to;

    view.dispatch({
      changes: { from, to, insert: newText },
    });
  };


    // 이미지를 마크다운 형식으로 변환하여 에디터에 추가
    const addImageToEditor = (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        const imageMarkdown = `![${file.name}](${imageUrl})\n`;
        setContent(prev => prev + imageMarkdown);
        onChange?.(content + imageMarkdown);
      };
      reader.readAsDataURL(file);
    };


    // 이미지 업로드 핸들러 (드래그 드롭용)
    const handleImageUpload = (files: File[]) => {
     if (files && files.length > 0) {
        addImageToEditor(files[0]); 
     }
    };

    // 이미지 버튼 클릭 핸들러 - Toolbar에 전달될 함수
    const handleImageButtonClick = () => {
      fileInputRef.current?.click();
    };

      // 파일 input change 핸들러 (클릭 업로드용)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
        if (files && files.length > 0) {
        addImageToEditor(files[0]); 
        e.target.value = ''; 
      }
    };



  return (
    <div className="flex gap-4">
      <div className="w-1/2">
        <DragDrop onImageUpload={handleImageUpload}>
          <div className="bg-[#1E2227] rounded-lg p-4">
          <Toolbar 
            onReplace={replaceSelectedText}
            getSelectedText={getSelectedText}
            onImageUpload={handleImageButtonClick}
          />
            <div className="relative">
              <CodeMirror
                value={content}
                height="600px"
                theme="dark"
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                onChange={(value) => {
                  setContent(value);
                  onChange?.(value);
                }}
                className="border border-gray-700 rounded"
                onCreateEditor={(view) => {
                  editorRef.current = {
                    view,
                    state: view.state,
                  };
                }}
              />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </DragDrop>
      </div>
      <div className="w-1/2">
        <Preview content={content} className="h-[744px]" />
      </div>
    </div>
  );
}
