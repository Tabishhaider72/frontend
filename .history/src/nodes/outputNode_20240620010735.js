import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
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
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{ top: '50%' }}
      />
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', color: '#6140ef' }}>Output</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
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
        <label style={{ display: 'block' }}>
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box'
            }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
