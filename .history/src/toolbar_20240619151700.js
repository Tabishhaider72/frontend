// toolbar.js

import { DraggableNode } from './draggableNode';

const PipelineToolbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                    <span className="text-white">Tool:</span>
                    <select className="bg-white rounded-md py-1 px-2">
                        <option value="input">Input</option>
                        <option value="llm">LLM</option>
                        <option value="output">Output</option>
                        <option value="text">Text</option>
                    </select>
                </div>
                <div>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded-md">Add Node</button>
                </div>
            </div>
        </nav>
    );
};

export default PipelineToolbar;
