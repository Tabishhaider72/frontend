// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' style={{ backgroundColor: 'white', border: '1px solid black', color: 'black', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                <DraggableNode type='llm' label='LLM' style={{ backgroundColor: 'white', border: '1px solid black', color: 'black', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                <DraggableNode type='customOutput' label='Output' style={{ backgroundColor: 'white', border: '1px solid black', color: 'black', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                <DraggableNode type='text' label='Text' style={{ backgroundColor: 'white', border: '1px solid black', color: 'black', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            </div>
        </div>
    );
};
