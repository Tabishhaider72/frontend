import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{
      width: 220,
      height: 'auto',
      border: '2px solid #6140ef',
      borderRadius: '10px',
      padding: '15px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', color: '#6140ef' }}>Text</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box'
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
