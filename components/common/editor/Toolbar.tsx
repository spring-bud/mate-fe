'use client';

import { ImageIcon } from 'lucide-react';

interface ToolbarProps {
  onReplace: (text: string) => void;
  getSelectedText: () => string;
  onImageUpload?: () => void;
}

type ToolbarItem = {
  type: string;
  label: string | React.ReactNode;
  className?: string;
};

const toolbarItems: ToolbarItem[] = [
  { type: 'H1', label: 'H1' },
  { type: 'H2', label: 'H2' },
  { type: 'H3', label: 'H3' },
  { type: 'H4', label: 'H4' },
  { type: 'B', label: 'B' },
  { type: 'I', label: 'I' },
  { type: 'U', label: 'U' },
  { type: 'Q', label: '""' },
  { type: 'CODE', label: '</>' },
  { type: 'HR', label: '─' },
  { type: 'TABLE', label: '⊞' },
  { type: 'LINK', label: '[]' },
  { type: 'IMAGE', label: <ImageIcon size={20} /> },
];

export default function Toolbar({ onReplace, getSelectedText, onImageUpload }: ToolbarProps) {
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

  const handleToolbarClick = (type: string) => {
    if (type === 'IMAGE') {
      onImageUpload?.();
      return;
    }

    if (transformations[type]) {
      const selectedText = getSelectedText();
      const textToTransform = selectedText || defaultTexts[type];
      const transformedText = transformations[type](textToTransform);
      onReplace(transformedText);
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      {/* 제목 관련 버튼 그룹 */}
      <div className="flex gap-1 border-r border-gray-700 pr-2 mr-2">
        {toolbarItems.slice(0, 4).map((item) => (
          <button
            key={item.type}
            className="p-2 hover:bg-gray-700 rounded"
            onClick={() => handleToolbarClick(item.type)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 나머지 버튼들 */}
      {toolbarItems.slice(4).map((item) => (
        <button
          key={item.type}
          className="p-2 hover:bg-gray-700 rounded"
          onClick={() => handleToolbarClick(item.type)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}