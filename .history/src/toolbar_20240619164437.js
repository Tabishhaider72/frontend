// PipelineToolbar.js

import { DraggableNode } from './draggableNode';

const nodeStyle = {
    backgroundColor: 'white', // White background
    border: 'white', // Black border
    color: 'black', // Black text
    width: '50px', // Width
    height: '40px', // Height
    display: 'flex', // Flexbox
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    borderRadius: '20px', // Rounded corners
    margin: '12px', // Margin for spacing
    cursor: 'pointer', // Pointer cursor on hover
};

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {['Input', 'llm', 'Output', 'text'].map((type) => (
                    <div key={type} style={nodeStyle}>
                        <DraggableNode type={type} label={type.charAt(0).toUpperCase() + type.slice(1)} />
                    </div>
                ))}
            </div>
        </div>
    );
};
