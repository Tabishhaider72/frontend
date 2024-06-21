// toolbar.js

import { useState } from 'react';
import { Draggable } from 'react-flow-renderer';

const PipelineToolbar = () => {
    const [elements, setElements] = useState([]);

    const addNode = (type, label) => {
        const newNode = {
            id: type + Math.random(),
            type: 'default',
            data: { label },
            position: { x: 0, y: 0 },
        };
        setElements([...elements, newNode]);
    };

    return (
        <div className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Tool</h1>
                <div className="relative">
                    <button className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 focus:outline-none">
                        Select Tool
                    </button>
                    <div className="absolute hidden bg-white shadow-md rounded w-48 mt-2">
                        <div className="py-1">
                            <button onClick={() => addNode('input', 'Input')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Input</button>
                            <button onClick={() => addNode('llm', 'LLM')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">LLM</button>
                            <button onClick={() => addNode('output', 'Output')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Output</button>
                            <button onClick={() => addNode('text', 'Text')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Text</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-4 mt-4">
                    {elements.map(node => (
                        <Draggable key={node.id} draggableId={node.id} node={node} isDragDisabled={false}>
                            <div className="bg-white p-2 rounded shadow-md cursor-pointer">{node.data.label}</div>
                        </Draggable>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PipelineToolbar;
