import { useStore } from "./store";
import axios from "axios";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(); 

  const handleSubmit = async () => {
    try {
      const payload = { nodes, edges };
      console.log("Sending data to backend:", payload);

      const res = await axios.post("http://127.0.0.1:8000/pipelines/parse", payload);

      const { num_nodes, num_edges, is_dag } = res.data;
      alert(
        `Pipeline Summary:\n\n` +
        `Number of Nodes: ${num_nodes}\n` +
        `Number of Edges: ${num_edges}\n` +
        `Is DAG: ${is_dag ? "Yes" : "No"}`
      );
    } catch (err) {
      console.error("Error submitting flow:", err);
      alert("Error submitting flow!");
    }
  };

  return (
    <div className="flex items-center justify-center mt-3">
      <button
        onClick={handleSubmit}
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </div>
  );
};


