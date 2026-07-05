import { useEffect, useState } from "react";
import api from "../services/api";

function ThreatFeed({ onInvestigate }) {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/feed")
            .then((res) => {
                setFeed(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="panel">

            <div className="panel-title">

                <h2>🚨 Live Threat Feed</h2>

                <span className="feed-count">
                    {feed.length} Threats
                </span>

            </div>

            {loading && (
                <div className="loading-card">
                    Loading Threat Feed...
                </div>
            )}

            {!loading && feed.length === 0 && (
                <div className="empty">
                    No threats available.
                </div>
            )}

            {feed.map((threat) => {

                const indicator =
                    threat.indicators?.length > 0
                        ? threat.indicators[0]
                        : null;

                return (
                    <div
                        className="threat-card"
                        key={threat.id}
                    >

                        <div className="threat-header">

                            <h3>{threat.name}</h3>

                            <span className="severity">
                                {threat.tags?.includes("malware")
                                    ? "HIGH"
                                    : threat.tags?.includes("phishing")
                                    ? "MEDIUM"
                                    : "INFO"}
                            </span>

                        </div>

                        <p className="description">
                            {threat.description
                                ? threat.description.substring(
                                      0,
                                      180
                                  ) + "..."
                                : "No description available."}
                        </p>

                        <div className="tags">

                            {threat.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="tag"
                                >
                                    #{tag}
                                </span>
                            ))}

                        </div>

                        {indicator && (

                            <div className="indicator-box">

                                <strong>IOC</strong>

                                <p>{indicator.indicator}</p>

                                <small>
                                    {indicator.type}
                                </small>

                            </div>

                        )}

                        <button
                            className="investigate-btn"
                            onClick={() => {

                                if (indicator) {

                                    onInvestigate({
                                        target:
                                            indicator.indicator,
                                        type:
                                            indicator.type,
                                    });

                                }

                            }}
                        >

                            🔍 Investigate IOC

                        </button>

                    </div>
                );
            })}
        </div>
    );
}

export default ThreatFeed;