import { useStore } from "../../store/store";
import { useState, useEffect } from "react";

export default function AdminPage() {
    const { token, setToken } = useStore();
    const [scenarios, setScenarios] = useState([]);

    useEffect(() => {
        fetch('http://mtloveapi.huangdong.workers.dev/api/scenarios')
            .then(res => res.json())
            .then(data => setScenarios(data));
    }, []);
    
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
                <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg">
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
                                <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
                                <button className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}