import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const detectedVariables = currText.match(/{{\s*[\w.]+\s*}}/g) || [];
    setVariables(detectedVariables.map(v => v.replace(/{{\s*|\s*}}/g, '')));
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const containerStyle = {
    border: '2px solid #6140ef',
    borderRadius: '10px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 'auto',
    height: 'auto',
    minWidth: '200px',
    minHeight: '80px',
    wordWrap: 'break-word'
  };

  return (
    <div style={containerStyle}>
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${(index + 1) * 20}%` }}
        />
      ))}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', color: '#6140ef' }}>Text</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Text:
          <textarea 
            value={currText} 
            onChange={handleTextChange} 
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              resize: 'none'
            }}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
