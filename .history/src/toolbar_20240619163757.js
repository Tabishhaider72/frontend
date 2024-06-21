// PipelineToolbar.js

import { DraggableNode } from './draggableNode';

const nodeStyle = {
    backgroundColor: '#4CAF50', // Green background
    color: 'white', // White text
    width: '50px', // Width
    height: '50px', // Height
    display: 'flex', // Flexbox
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    border: 'none', // No border
    borderRadius: '8px', // Rounded corners
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition
    cursor: 'pointer', // Pointer cursor on hover
};

const nodeHoverStyle = {
    backgroundColor: '#45a049', // Darker green background on hover
    transform: 'scale(1.05)', // Slightly larger on hover
};

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {['customInput', 'llm', 'customOutput', 'text'].map((type) => (
                    <div
                        key={type}
                        style={nodeStyle}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = nodeHoverStyle.backgroundColor;
                            e.currentTarget.style.transform = nodeHoverStyle.transform;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = nodeStyle.backgroundColor;
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <DraggableNode type={type} label={type.charAt(0).toUpperCase() + type.slice(1)} />
                    </div>
                ))}
            </div>
        </div>
    );
};
