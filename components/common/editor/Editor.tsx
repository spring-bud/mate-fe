// components/common/Editor/index.tsx
'use client';

import { useState, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';

interface EditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export default function Editor({ initialValue = '# 제목을 입력하세요', onChange }: EditorProps) {
  const [content, setContent] = useState(initialValue);
  const editorRef = useRef<{
    view: EditorView;
    state: EditorState;
  } | null>(null);

  return (
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
  );
}
