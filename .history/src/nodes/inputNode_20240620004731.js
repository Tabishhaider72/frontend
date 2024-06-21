import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div style={{
      width: 220, 
      height: 120, 
      border: '1px solid #6140ef', 
      borderRadius: '10px', 
      padding: '10px', 
      backgroundColor: '#f5f5f5', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', color: '#6140ef' }}>Input</span>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            style={{
              width: '100%', 
              padding: '5px', 
              marginTop: '5px', 
              borderRadius: '5px', 
              border: '1px solid #ccc'
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            style={{
              width: '100%', 
              padding: '5px', 
              marginTop: '5px', 
              borderRadius: '5px', 
              border: '1px solid #ccc'
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </div>
  );
};
