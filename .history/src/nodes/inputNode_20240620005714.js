import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  useEffect(() => {
    // Adjust the size of the textarea based on the content
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }

    // Extract variables enclosed in double curly brackets
    const varMatches = text.match(/{{\s*[\w]+\s*}}/g) || [];
    setVariables(varMatches.map(v => v.replace(/[{}]/g, '').trim()));
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{
      border: '2px solid #6140ef',
      borderRadius: '10px',
      padding: '15px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', color: '#6140ef' }}>Text</span>
      </div>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleTextChange}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          resize: 'none',
          overflow: 'hidden'
        }}
      />
      {variables.map((variable, index) => (
        <Handle
          key={index}
          type="source"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: 20 + index * 20 }} // Adjust handle positions dynamically
        />
      ))}
      <Handle
        type="target"
        position={Position.Right}
        id={`${id}-value`}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  );
};
