import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface PreviewProps {
  content: string;
  className?: string;
}

export default function Preview({ content, className }: PreviewProps) {
  return (
    <div className={`bg-[#1E2227] rounded-lg p-4 ${className}`}>
      <div className="prose prose-invert max-w-none h-full overflow-y-auto">
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { breaks: true }]]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // 밑줄 텍스트를 위한 커스텀 렌더링
            u: ({ node, ...props }) => <span className="underline decoration-2" {...props} />,
            // 줄바꿈을 위한 paragraph 컴포넌트
            p: ({ children }) => <p className="whitespace-pre-line">{children}</p>,
          }}
        >
          {content.replace(/__([^_]+)__/g, '<u>$1</u>')}
        </ReactMarkdown>
      </div>
    </div>
  );
}
