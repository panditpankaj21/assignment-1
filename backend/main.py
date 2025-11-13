from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from collections import defaultdict, deque

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: Optional[str] = None
    position: Dict[str, float]
    data: Dict[str, Any]
    width: Optional[float] = None
    height: Optional[float] = None

class Edge(BaseModel):
    source: str
    target: str
    type: Optional[str] = None
    sourceHandle: Optional[str] = None
    targetHandle: Optional[str] = None
    animated: Optional[bool] = None
    markerEnd: Optional[Dict[str, Any]] = None

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    adj = defaultdict(list)
    indegree = defaultdict(int)

    for edge in edges:
        adj[edge.source].append(edge.target)
        indegree[edge.target] += 1

    q = deque([node.id for node in nodes if indegree[node.id] == 0])
    visited = 0

    while q:
        current = q.popleft()
        visited += 1
        for neighbor in adj[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                q.append(neighbor)

    return visited == len(nodes)

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    dag_status = is_dag(pipeline.nodes, pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag_status
    }