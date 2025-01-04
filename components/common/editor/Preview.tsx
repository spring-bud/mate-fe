import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface PreviewProps {
  content: string;
  className?: string;
}

export default function Preview({ content, className }: PreviewProps) {
  const processedContent = content
    .replace(/__([^_]+)__/g, '<u>$1</u>')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

  return (
    <div className={`bg-[#1E2227] rounded-lg p-4 ${className}`}>
      <div className="prose prose-invert max-w-none h-full overflow-y-auto">
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { breaks: true }]]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // 제목 스타일링
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
            h4: ({ node, ...props }) => <h4 className="text-lg font-bold mt-3 mb-2" {...props} />,
            // 텍스트 스타일링
            p: ({ children, ...props }) => (
              <p className="my-2 leading-relaxed whitespace-pre-line" {...props}>
                {children}
              </p>
            ),
            // 코드 블록 스타일링
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';

              return !inline ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={language || 'typescript'}
                  PreTag="div"
                  className="rounded-md"
                  showLineNumbers={true}
                  wrapLines={true}
                  customStyle={{
                    margin: '1em 0',
                    padding: '1em',
                    backgroundColor: '#1E1E1E',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                  {children}
                </code>
              );
            },
            // 인용구 스타일링
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-500 pl-4 my-4 italic">{children}</blockquote>
            ),
            // 표 스타일링
            table: ({ children }) => (
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">{children}</table>
              </div>
            ),
            th: ({ children }) => <th className="border border-gray-600 px-4 py-2 bg-gray-800">{children}</th>,
            td: ({ children }) => <td className="border border-gray-600 px-4 py-2">{children}</td>,
            // 밑줄 스타일링
            u: ({ children }) => <span className="underline decoration-2">{children}</span>,
          }}
        >
          {processedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
