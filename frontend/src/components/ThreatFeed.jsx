import { useEffect, useState } from "react";
import api from "../services/api";

function ThreatFeed({ onInvestigate }) {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        api.get("/feed")
            .then((res) => {
                setFeed(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="panel">
            <h2>Threat Feed</h2>

            {feed.map((threat) => (
                <div className="card" key={threat.id}>
                    <h3>{threat.name}</h3>

                    <p>
                        {threat.description?.substring(0, 150)}...
                    </p>

                    <p>
                        <strong>Tags:</strong>{" "}
                        {threat.tags?.join(", ")}
                    </p>

                    <button
                        onClick={() => {
                            if (threat.indicators?.length > 0) {

                                const indicator = threat.indicators[0];

                                onInvestigate({
                                    target: indicator.indicator,
                                    type: indicator.type,
                                });
                            }
                        }}
                    >
                        Investigate First IOC
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ThreatFeed;