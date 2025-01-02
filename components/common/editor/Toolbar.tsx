// components/common/Editor/Toolbar.tsx
import { ImageIcon } from 'lucide-react';

interface ToolbarProps {
  onToolbarClick: (type: string) => void;
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

export default function Toolbar({ onToolbarClick, onImageUpload }: ToolbarProps) {
  return (
    <div className="flex gap-2 mb-4">
      {/* 제목 관련 버튼 그룹 */}
      <div className="flex gap-1 border-r border-gray-700 pr-2 mr-2">
        {toolbarItems.slice(0, 4).map((item) => (
          <button key={item.type} className="p-2 hover:bg-gray-700 rounded" onClick={() => onToolbarClick(item.type)}>
            {item.label}
          </button>
        ))}
      </div>

      {/* 나머지 버튼들 */}
      {toolbarItems.slice(4).map((item) => (
        <button
          key={item.type}
          className="p-2 hover:bg-gray-700 rounded"
          onClick={() => (item.type === 'IMAGE' ? onImageUpload?.() : onToolbarClick(item.type))}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
