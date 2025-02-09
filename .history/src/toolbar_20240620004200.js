import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
                marginTop: '20px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px',
                justifyContent: 'center', 
                color: '#6140ef' // Change text color to #6140ef
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>
    );
};
