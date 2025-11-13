import { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { LeftHandle } from './leftHandle';
import { extractVariables } from '../utils/extractVariables';
import { LabelledInput } from '../components/LabelledInput';
import { LabelledSelect } from '../components/LabelledSelect';
import { NodeHeader } from '../components/NodeHeader';

export const Node = ({ id, data, nameOfNode }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  const isInputOrOutput = nameOfNode === 'Input' || nameOfNode === 'Output';
  const isTextNode = nameOfNode === 'Text';
  const isLLMNode = nameOfNode === 'LLM';
  const DisplayMessage = (!isInputOrOutput && !isTextNode && !isLLMNode) || isLLMNode;

  const labelMap = {
    Input: 'Name:',
    Output: 'Name:',
    Text: 'Text:',
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);
    if (isTextNode) {
      const validVars = extractVariables(value);
      setVariables(validVars);
    }
  };

  const handleTypeChange = (e) => setOutputType(e.target.value);

  useEffect(() => {
    if (isTextNode && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [currText, isTextNode]);

  useEffect(() => {
    if (isTextNode) setVariables(extractVariables(currText));
  }, []);

  return (
    <div className="relative w-[220px] h-auto min-h-[90px] border border-gray-400 rounded-xl bg-white shadow-sm flex flex-col gap-2 text-sm">
      {(isLLMNode || nameOfNode === 'Output') && (
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-value`}
          className="!bg-gray-500"
          style={isLLMNode ? { top: '40%' } : { top: '50%' }}
        />
      )}

      <NodeHeader title={nameOfNode} />

      <div className="px-2 pb-2">
        {DisplayMessage && (
          <div className="text-gray-600 text-xs text-center italic">
            This is {nameOfNode}.
          </div>
        )}

        {(isInputOrOutput || isTextNode) && (
          <LabelledInput
            label={labelMap[nameOfNode]}
            value={currText}
            onChange={handleTextChange}
            isTextarea={isTextNode}
            inputRef={textAreaRef}
          />
        )}

        {isInputOrOutput && (
          <LabelledSelect
            label="Type:"
            value={outputType}
            onChange={handleTypeChange}
            options={[
              { value: 'Text', label: 'Text' },
              { value: 'File', label: 'Image' },
            ]}
          />
        )}

        {isTextNode &&
          variables.map((variable, index) => (
            <LeftHandle key={variable} id={id} variable={variable} index={index} />
          ))}

        {(isTextNode || nameOfNode === 'Input' || isLLMNode) && (
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-output`}
            className="!bg-gray-500"
            style={{ top: '50%' }}
          />
        )}
      </div>
    </div>
  );
};
