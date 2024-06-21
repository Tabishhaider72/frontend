import React from 'react';

export const SubmitButton = () => {
    const buttonStyle = {
        backgroundColor: '#000', // Green background
        color: 'white', // White text
        padding: '10px 32px', // Padding
        textAlign: 'center', // Centered text
        textDecoration: 'none', // No underline
        display: 'inline-block', // Inline-block
        fontSize: '16px', // Font size
        margin: '4px 2px', // Margin
        cursor: 'pointer', // Pointer cursor on hover
        border: 'none', // No border
        borderRadius: '8px', // Rounded corners
        transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition
    };

    const buttonHoverStyle = {
        backgroundColor: '#1D2E28', // Darker green background on hover
        transform: 'scale(1.05)', // Slightly larger on hover
    };

    const handleSubmit = async () => {
        const nodes = []; // Define your nodes array here
        const edges = []; // Define your edges array here

        const response = await fetch('/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nodes, edges }),
        });

        const data = await response.json();
        alert(`Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
            <button
                type="button"
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
