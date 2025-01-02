// components/common/Editor/Editor.tsx
'use client';

import { useState, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import Toolbar from './Toolbar';

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

  // 툴바 클릭 핸들러
  const handleToolbarClick = (type: string) => {
    const selectedText = getSelectedText();
    const defaultTexts: { [key: string]: string } = {
      H1: '제목 1',
      H2: '제목 2',
      H3: '제목 3',
      H4: '제목 4',
      B: '굵은 텍스트',
      I: '기울임 텍스트',
      U: '밑줄 텍스트',
      Q: '인용문',
      CODE: '코드',
      LINK: '링크텍스트',
      HR: '구분선',
      TABLE: '표',
    };

    const transformations: { [key: string]: (text: string) => string } = {
      H1: (text) => `# ${text}`,
      H2: (text) => `## ${text}`,
      H3: (text) => `### ${text}`,
      H4: (text) => `#### ${text}`,
      B: (text) => `**${text}**`,
      I: (text) => `*${text}*`,
      U: (text) => `__${text}__`,
      Q: (text) => `> ${text}`,
      CODE: (text) => `\`\`\`\n${text}\n\`\`\``,
      LINK: (text) => `[${text}](URL)`,
      HR: () => '\n---\n',
      TABLE: () =>
        `/| 제목1 | 제목2
---|---|---
내용 | 내용 | 내용
내용 | 내용 | 내용`,
    };

    if (transformations[type]) {
      const textToTransform = selectedText || defaultTexts[type];
      const transformedText = transformations[type](textToTransform);
      replaceSelectedText(transformedText);
    }
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = () => {
    console.log('Image upload clicked');
  };

  return (
    <div className="bg-[#1E2227] rounded-lg p-4">
      <Toolbar onToolbarClick={handleToolbarClick} onImageUpload={handleImageUpload} />
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
    </div>
  );
}
