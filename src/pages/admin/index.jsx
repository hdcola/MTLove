import { useStore } from "../../store/store";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function AdminPage() {
    // const host = 'http://localhost:8787';
    const host = 'https://mtloveapi.huangdong.workers.dev';
    const { token, setToken } = useStore();
    const [scenarios, setScenarios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${host}/api/scenarios`)
            .then(res => res.json())
            .then(data => setScenarios(data));
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this scenario?')) return;
        
        try {
            await fetch(`${host}/api/scenarios/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `${token}`
                }
            });
            // Refresh scenarios after deletion
            setScenarios(scenarios.filter(s => s.id !== id));
        } catch (error) {
            console.error('Error deleting scenario:', error);
        }
    };
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
            <div className="max-w-md flex flex-row items-center mb-6">
                <div className="mr-2">Token:</div>
                <input
                    type="password"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    placeholder="Enter token"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg"
                    onClick={() => navigate('/admin/new')}
                >
                    Create
                </button>
            </div>

            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scenarios.map(scenario => (
                        <tr key={scenario.id}>
                            <td className="border p-2">{scenario.id}</td>
                            <td className="border p-2">{scenario.title}</td>
                            <td className="border p-2">
                                <button 
                                    className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
                                    onClick={() => navigate(`/admin/${scenario.id}`)}
                                >
                                    Edit
                                </button>
                                <button 
                                    className="px-3 py-1 bg-red-500 text-white rounded"
                                    onClick={() => handleDelete(scenario.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}