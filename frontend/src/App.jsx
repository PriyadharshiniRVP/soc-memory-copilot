import { useState } from "react";
import "./App.css";

import api from "./services/api";

import ThreatFeed from "./components/ThreatFeed";
import InvestigationPanel from "./components/InvestigationPanel";
import MemoryPanel from "./components/MemoryPanel";

function App() {

    const [investigation, setInvestigation] = useState(null);
    const [memory, setMemory] = useState("");

    const investigate = async (ioc) => {

        try {

            const response = await api.post("/investigate", {
                target: ioc.target,
                type: ioc.type,
            });

            setInvestigation(response.data);

            if (response.data.memory) {
                setMemory(response.data.memory);
            }

        } catch (err) {

            console.error(err);

            alert(
                err.response?.data?.detail ||
                "Investigation failed."
            );

        }

    };

    return (
        <div className="container">

            <h1>SOC Memory Copilot</h1>

            <ThreatFeed onInvestigate={investigate} />

            <InvestigationPanel
                result={investigation}
            />

            <MemoryPanel
                memory={memory}
            />

        </div>
    );
}

export default App;