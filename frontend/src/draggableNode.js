// draggableNode.js

import { useState } from 'react';
import { FiCpu, FiDownload, FiUpload, FiEdit3 } from 'react-icons/fi';
import { BiMath } from "react-icons/bi";
import { CiDatabase } from "react-icons/ci";
import { ImConnection } from "react-icons/im";
import { FcDecision } from "react-icons/fc";
import { RiBloggerLine } from "react-icons/ri";

export const DraggableNode = ({ type, label }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    setIsDragging(true);
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (event) => {
    setIsDragging(false);
  };

  const iconMap = {
    customInput: <FiDownload size={20} />,
    customOutput: <FiUpload size={20} />,
    llm: <FiCpu size={20} />,
    text: <FiEdit3 size={20} />,
    math: <BiMath size={20}/>,
    data: <CiDatabase size={20}/>,
    connector: <ImConnection size={20}/>,
    decision: <FcDecision size={20}/>,
    logger: <RiBloggerLine size={20}/>
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={onDragEnd}
      className={`
        ${type}
        cursor-grab select-none
        w-[75px] h-[60px]
        flex flex-col items-center justify-center gap-2
        rounded-xl shadow-md border
        transition-all duration-200
        bg-gray-700 border-gray-800
        ${isDragging ? 'opacity-70 scale-95' : 'hover:shadow-lg hover:scale-105'}
      `}
    >
      <div className="text-white">{iconMap[type]}</div>
      <span className="text-white font-medium text-sm">{label}</span>
    </div>
  );
};
