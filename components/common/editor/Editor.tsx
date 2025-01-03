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
import TagInput from './TagInput';

interface EditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export default function Editor({ initialValue = '# 제목을 입력하세요', onChange }: EditorProps) {
  const [content, setContent] = useState(initialValue);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
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
      setContent((prev) => prev + imageMarkdown);
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

  // 파일 input change 핸들러 (클릭 업로드용)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      addImageToEditor(files[0]);
      e.target.value = '';
    }
  };

  // 태그 관련 핸들러
  const handleTagAdd = (newTag: string) => {
    setTags((prev) => [...prev, newTag]);
  };

  const handleTagRemove = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="bg-[#15181E] min-h-screen text-white">
      <main className="max-w-7xl mx-auto p-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <DragDrop onImageUpload={handleImageUpload}>
              <div className="bg-[#1E2227] rounded-lg p-4">
                <input
                  type="text"
                  placeholder="제목을 입력하세요"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mb-4 px-3 py-2 bg-[#2A2E35] border border-gray-700 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                />
                <Toolbar
                  onReplace={replaceSelectedText}
                  getSelectedText={getSelectedText}
                  onImageUpload={() => fileInputRef.current?.click()}
                />
                <div className="relative">
                  <CodeMirror
                    value={content}
                    height="600px"
                    theme="dark"
                    extensions={[
                      markdown({ base: markdownLanguage, codeLanguages: languages }),
                      EditorView.lineWrapping,
                    ]}
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
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </div>
            </DragDrop>
          </div>
          <div className="w-1/2">
            <Preview content={content} className="h-[744px]" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button className="shrink-0 flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded">나가기</button>
          <TagInput tags={tags} onTagAdd={handleTagAdd} onTagRemove={handleTagRemove} />
          <div className="shrink-0 flex gap-2">
            <button className="px-4 py-2 hover:bg-gray-700 rounded">임시저장</button>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">등록하기</button>
          </div>
        </div>
      </main>
    </div>
  );
}
