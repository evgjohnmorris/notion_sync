import React from 'react';
import { ASTNode } from '../../core/ast';

export interface NotionRendererProps {
  nodes: ASTNode[];
  // Optional custom renderers to override defaults
  components?: {
    [key: string]: React.ComponentType<{ node: ASTNode, children?: React.ReactNode }>;
  };
}

const DefaultRenderers: Record<string, React.FC<{ node: ASTNode, children?: React.ReactNode }>> = {
  heading_1: ({ node, children }) => <h1 style={{ marginTop: '2em', marginBottom: '1em' }}>{children}</h1>,
  heading_2: ({ node, children }) => <h2 style={{ marginTop: '1.5em', marginBottom: '0.75em' }}>{children}</h2>,
  heading_3: ({ node, children }) => <h3 style={{ marginTop: '1.17em', marginBottom: '0.5em' }}>{children}</h3>,
  paragraph: ({ node, children }) => <p style={{ marginBottom: '1em', lineHeight: 1.5 }}>{children}</p>,
  bulleted_list_item: ({ node, children }) => <li>{children}</li>,
  numbered_list_item: ({ node, children }) => <li>{children}</li>,
  code: ({ node }) => {
    const language = node.codeLanguage || 'text';
    const content = node.richText?.map(c => c.text).join('') || '';
    return (
      <pre style={{ background: '#f4f4f4', padding: '1em', borderRadius: '4px', overflowX: 'auto' }}>
        <code className={`language-${language}`}>{content}</code>
      </pre>
    );
  },
  quote: ({ node, children }) => (
    <blockquote style={{ borderLeft: '4px solid #ccc', margin: '1em 0', paddingLeft: '1em', color: '#666' }}>
      {children}
    </blockquote>
  )
};

export const NotionRenderer: React.FC<NotionRendererProps> = ({ nodes, components }) => {
  const renderers = { ...DefaultRenderers, ...components };

  // Helper to render rich text inline
  const renderRichText = (textItems: ASTNode['richText']) => {
    if (!textItems) return null;
    return textItems.map((item, i) => {
      let element = <React.Fragment key={i}>{item.text}</React.Fragment>;
      
      if (item.annotations?.bold) element = <strong key={i}>{element}</strong>;
      if (item.annotations?.italic) element = <em key={i}>{element}</em>;
      if (item.annotations?.strikethrough) element = <del key={i}>{element}</del>;
      if (item.annotations?.code) element = <code key={i} style={{ background: '#eee', padding: '0.2em 0.4em', borderRadius: '3px' }}>{element}</code>;
      
      if (item.link) {
        element = <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0366d6', textDecoration: 'none' }}>{element}</a>;
      }
      return element;
    });
  };

  const renderNode = (node: ASTNode, index: number): React.ReactNode => {
    const Renderer = renderers[node.type];
    
    const children = node.richText ? renderRichText(node.richText) : null;

    if (!Renderer) {
      // Fallback for unknown nodes
      return <div key={node.id || index} style={{ color: 'red' }}>Unsupported block type: {node.type}</div>;
    }

    return <Renderer key={node.id || index} node={node}>{children}</Renderer>;
  };

  // Pre-process lists so contiguous list items are wrapped in <ul> or <ol>
  // This is a simplified approach.
  const processedNodes: React.ReactNode[] = [];
  let currentListType: 'ul' | 'ol' | null = null;
  let currentListItems: React.ReactNode[] = [];

  const flushList = (key: string) => {
    if (currentListType === 'ul') {
      processedNodes.push(<ul key={key} style={{ paddingLeft: '2em', marginBottom: '1em' }}>{currentListItems}</ul>);
    } else if (currentListType === 'ol') {
      processedNodes.push(<ol key={key} style={{ paddingLeft: '2em', marginBottom: '1em' }}>{currentListItems}</ol>);
    }
    currentListType = null;
    currentListItems = [];
  };

  nodes.forEach((node, i) => {
    if (node.type === 'bulleted_list_item') {
      if (currentListType && currentListType !== 'ul') flushList(`list-${i}-flush`);
      currentListType = 'ul';
      currentListItems.push(renderNode(node, i));
    } else if (node.type === 'numbered_list_item') {
      if (currentListType && currentListType !== 'ol') flushList(`list-${i}-flush`);
      currentListType = 'ol';
      currentListItems.push(renderNode(node, i));
    } else {
      if (currentListType) flushList(`list-${i}-flush`);
      processedNodes.push(renderNode(node, i));
    }
  });

  if (currentListType) flushList(`list-end-flush`);

  return <>{processedNodes}</>;
};
