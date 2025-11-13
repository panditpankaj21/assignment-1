import { Node } from "./Node"

const InputNode = ({id, data}) => (<Node id={id} data={data} nameOfNode='Input'/>)

const LLMNode = ({id, data}) => (<Node id={id} data={data} nameOfNode='LLM' />)

const OutputNode = ({id, data}) => <Node id={id} data={data} nameOfNode='Output' />

const TextNode = ({id, data}) => (<Node id={id} data={data} nameOfNode='Text'/>)

const MathNode = ({id, data}) => (<Node id={id} data={data} nameOfNode='Math'/>)

const ConnectorNode = ({id, data}) => (<Node id={id} data={data} nameOfNode='Connector'/>)

const DecisionNode = ({id, data}) => (<Node id={id} data={data} nameOfNode='Decision'/>)

const LoggerNode = ({id, data}) => (<Node id={id} data={data}  nameOfNode='Logger'/>)

const DataNode = ({id, data}) => (<Node id={id} data={data}  nameOfNode='Data'/>)

export {
  LoggerNode,
  DecisionNode,
  ConnectorNode,
  MathNode,
  TextNode,
  OutputNode,
  LLMNode,
  InputNode,
  DataNode
}