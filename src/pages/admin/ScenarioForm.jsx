import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useStore } from "../../store/store";

export default function ScenarioForm() {

    // const host = 'http://localhost:8787';
    const host = 'https://mtloveapi.huangdong.workers.dev';
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useStore();
    const [scenario, setScenario] = useState({
        title: '',
        description: '',
        system: '',
        start: ''
    });

    useEffect(() => {
        if (id !== 'new') {
            fetch(`${host}/api/scenarios/${id}`)
                .then(res => res.json())
                .then(data => setScenario(data));
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${host}/api/scenarios`;
        const method = id === 'new' ? 'POST' : 'PUT';
        
        try {
            await fetch(id === 'new' ? url : `${url}/${id}`, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(scenario)
            });
            navigate('/admin');
        } catch (error) {
            console.error('Error saving scenario:', error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                {id === 'new' ? 'Create New Scenario' : 'Edit Scenario'}
            </h1>
            <form onSubmit={handleSubmit} className="max-w-2xl">
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        value={scenario.title}
                        onChange={(e) => setScenario({...scenario, title: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        value={scenario.description}
                        onChange={(e) => setScenario({...scenario, description: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg h-24"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">System</label>
                    <textarea
                        value={scenario.system}
                        onChange={(e) => setScenario({...scenario, system: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg h-32"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Start</label>
                    <textarea
                        value={scenario.start}
                        onChange={(e) => setScenario({...scenario, start: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg h-24"
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => navigate('/admin')}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
