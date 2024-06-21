// PipelineToolbar.js

import { DraggableNode } from './draggableNode';

const nodeStyle = {
    backgroundColor: 'white', // White background
    border: '1px solid black', // Black border
    color: 'black', // Black text
    width: '50px', // Width
    height: '50px', // Height
    display: 'flex', // Flexbox
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    borderRadius: '8px', // Rounded corners
    margin: '10px', // Margin for spacing
    cursor: 'pointer', // Pointer cursor on hover
};

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {['customInput', 'llm', 'customOutput', 'text'].map((type) => (
                    <div key={type} style={nodeStyle}>
                        <DraggableNode type={type} label={type.charAt(0).toUpperCase() + type.slice(1)} />
                    </div>
                ))}
            </div>
        </div>
    );
};
