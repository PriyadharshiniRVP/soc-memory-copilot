import { useState } from "react";
import "./App.css";

import api from "./services/api";

import ThreatFeed from "./components/ThreatFeed";
import InvestigationPanel from "./components/InvestigationPanel";
import MemoryPanel from "./components/MemoryPanel";

function App() {
    const [investigation, setInvestigation] = useState(null);
    const [memory, setMemory] = useState("");
    const [loading, setLoading] = useState(false);

    const investigate = async (ioc) => {
        setLoading(true);

        try {
            const response = await api.post("/investigate", {
                target: ioc.target,
                type: ioc.type,
            });

            setInvestigation(response.data);

            if (
                response.data.memory &&
                response.data.memory.length > 0
            ) {
                setMemory(response.data.memory[0].text);
            } else {
                setMemory("No previous investigation found.");
            }
        } catch (err) {
            console.error(err);

            alert(
                err.response?.data?.detail ||
                "Investigation failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">

            <header className="header">

                <div>
                    <h1>🛡 ThreatVault SOC Memory Copilot</h1>

                    <p>
                        AI-Powered Threat Intelligence &
                        Investigation Dashboard
                    </p>
                </div>

                <div className="status-card">

                    <span className="status-dot"></span>

                    Backend Connected

                </div>

            </header>

            <div className="dashboard">

                <div className="left-panel">

                    <ThreatFeed
                        onInvestigate={investigate}
                    />

                </div>

                <div className="right-panel">

                    {loading && (
                        <div className="loading-card">
                            Investigating IOC...
                        </div>
                    )}

                    <InvestigationPanel
                        result={investigation}
                    />

                    <MemoryPanel
                        memory={memory}
                    />

                </div>

            </div>

        </div>
    );
}

export default App;