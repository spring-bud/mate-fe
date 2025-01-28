import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
interface PreviewProps {
  content: string;
  className?: string;
}

export default function Preview({ content, className }: PreviewProps) {
  return (
    <div className={`bg-[#1E2227] rounded-lg p-4 px-6 ${className}`}>
      <div className="prose prose-invert max-w-none h-full overflow-y-auto">
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { breaks: true }]]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children, ...props }) => (
              <h1 className="text-3xl font-bold mt-8 mb-10 text-white" {...props}>
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => (
              <h2 className="text-2xl font-bold mt-8 mb-6 text-white" {...props}>
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3 className="text-xl font-bold mt-6 mb-4 text-white" {...props}>
                {children}
              </h3>
            ),
            h4: ({ children, ...props }) => (
              <h4 className="text-lg font-bold mt-6 mb-3 text-white" {...props}>
                {children}
              </h4>
            ),
            p: ({ children, ...props }) => (
              <p className="my-4 leading-relaxed whitespace-pre-line text-white" {...props}>
                {children}
              </p>
            ),
            ul: ({ children, ...props }) => (
              <ul className="list-disc pl-6 my-6 text-white space-y-3" {...props}>
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol className="list-decimal pl-6 my-6 text-white space-y-3" {...props}>
                {children}
              </ol>
            ),
            li: ({ children, ...props }) => (
              <li className="text-white pl-2" {...props}>
                <div className="flex">
                  <span className="leading-relaxed">{children}</span>
                </div>
              </li>
            ),
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';
              return !inline ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={language}
                  PreTag="div"
                  className="rounded-md"
                  showLineNumbers={false}
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
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 bg-gray-800 border-gray-500 p-2 pl-4 my-4 italic">
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border border-gray-600 px-4 py-2 bg-gray-800 text-white">{children}</th>
            ),
            td: ({ children }) => <td className="border border-gray-600 px-4 py-2 text-white">{children}</td>,
            u: ({ children }) => <span className="underline decoration-2 text-white">{children}</span>,
            a: ({ children, href }) => (
              <a href={href} className="text-blue-400 hover:text-blue-300 underline">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
