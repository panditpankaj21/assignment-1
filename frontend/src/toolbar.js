// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="p-4 bg-gray-50 border-b border-gray-200 shadow-sm rounded-md">
      <div className="flex flex-wrap gap-3">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        {/* New Nodes */}
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="data" label="Data" />
        <DraggableNode type="connector" label="Connector" />
        <DraggableNode type="decision" label="Decision" />
        <DraggableNode type="logger" label="Logger" />
      </div>
    </div>
  );
};
