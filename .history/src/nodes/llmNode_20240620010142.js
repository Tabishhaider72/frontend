import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

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
        id={`${id}-system`}
        style={{ top: '33%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: '66%' }}
      />
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', color: '#6140ef' }}>LLM</span>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
}
