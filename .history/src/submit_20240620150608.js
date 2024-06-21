// /frontend/src/submit.js

import { useStore } from './store'; // Ensure the correct path
import { shallow } from 'zustand/shallow'; // Ensure the correct path

export const SubmitButton = () => {
    const buttonStyle = {
        backgroundColor: '#000', 
        color: 'white', 
        padding: '10px 32px', 
        textAlign: 'center', 
        textDecoration: 'none', 
        display: 'inline-block', 
        fontSize: '16px', 
        margin: '4px 2px', 
        cursor: 'pointer', 
        border: 'none', 
        borderRadius: '8px', 
        transition: 'background-color 0.3s ease, transform 0.3s ease', 
    };

    const buttonHoverStyle = {
        backgroundColor: '#1D2E28',
        transform: 'scale(1.05)',
    };

    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges
    }), shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            alert(`Number of Nodes: ${result.num_nodes}\nNumber of Edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
        } catch (error) {
            console.error('Error submitting the pipeline:', error);
            alert('Failed to submit the pipeline. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
            <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    e.currentTarget.style.transform = buttonHoverStyle.transform;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
                    e.currentTarget.style.transform = 'scale(1)';
                }}
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};
