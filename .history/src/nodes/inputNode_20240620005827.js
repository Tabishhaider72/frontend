import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // Extract variables from text using regex
    const regex = /\{\{\s*(\w+)\s*\}\}/g;
    const matches = [...text.matchAll(regex)].map(match => match[1]);
    setVariables(matches);
  }, [text]);

  return (
    <div style={{
      minWidth: 200, 
      minHeight: 80, 
      padding: '10px', 
      border: '2px solid #6140ef', 
      borderRadius: '10px', 
      backgroundColor: '#f5f5f5', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      resize: 'both',
      overflow: 'auto'
    }}>
      <textarea 
        value={text} 
        onChange={handleTextChange} 
        style={{
          width: '100%',
          height: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          resize: 'none'
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
      {variables.map((variable, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`${id}-variable-${variable}`}
          style={{ top: `${index * 20 + 20}px`, background: '#6140ef' }}
        />
      ))}
    </div>
  );
};
