import { useState } from "react";

import api from "./services/api";

import ThreatFeed from "./components/ThreatFeed";
import InvestigationPanel from "./components/InvestigationPanel";
import MemoryPanel from "./components/MemoryPanel";

import "./App.css";

function App() {

    const [investigation, setInvestigation] = useState(null);

    const [memory, setMemory] = useState("");

    async function investigate(target) {

        try {

            const response = await api.post("/investigate", {
                target: target
            });

            setInvestigation(response.data);

            setMemory(response.data.memory);

        }

        catch (err) {

            console.log(err);

        }

    }

    return (

        <div className="container">

            <h1>SOC Memory Copilot</h1>

            <ThreatFeed
                onInvestigate={investigate}
            />

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