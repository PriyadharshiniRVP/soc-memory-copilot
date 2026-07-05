function InvestigationPanel({ result }) {
    if (!result) {
        return (
            <div className="panel">
                <h2>🛡 Investigation</h2>

                <div className="empty">
                    Select an IOC to begin an investigation.
                </div>
            </div>
        );
    }

    const risk =
        result.pulse_count >= 15
            ? "HIGH"
            : result.pulse_count >= 5
            ? "MEDIUM"
            : "LOW";

    const riskColor =
        risk === "HIGH"
            ? "#ff4d4f"
            : risk === "MEDIUM"
            ? "#faad14"
            : "#52c41a";

    return (
        <div className="panel">

            <h2>🛡 Investigation Result</h2>

            <div className="info-grid">

                <div>
                    <span>IOC</span>
                    <h3>{result.target}</h3>
                </div>

                <div>
                    <span>Type</span>
                    <h3>{result.type}</h3>
                </div>

                <div>
                    <span>Country</span>
                    <h3>{result.country || "Unknown"}</h3>
                </div>

                <div>
                    <span>ASN</span>
                    <h3>{result.asn || "Unknown"}</h3>
                </div>

                <div>
                    <span>Pulse Count</span>
                    <h3>{result.pulse_count}</h3>
                </div>

                <div>
                    <span>Risk</span>

                    <h3 style={{ color: riskColor }}>
                        {risk}
                    </h3>
                </div>

            </div>

            <div className="whois">

                <a
                    href={result.whois}
                    target="_blank"
                    rel="noreferrer"
                >
                    🔍 Open WHOIS
                </a>

            </div>

        </div>
    );
}

export default InvestigationPanel;