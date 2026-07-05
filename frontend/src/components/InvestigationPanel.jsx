function InvestigationPanel({ result }) {

    if (!result) {

        return (

            <div className="panel">

                <h2>Investigation</h2>

                <p>No investigation yet.</p>

            </div>

        );

    }

    return (

        <div className="panel">

            <h2>Investigation Result</h2>

            <p><b>Target:</b> {result.target}</p>

            <p><b>Country:</b> {result.country}</p>

            <p><b>ASN:</b> {result.asn}</p>

            <p><b>Pulse Count:</b> {result.pulse_count}</p>

            <p><b>Reputation:</b> {result.reputation}</p>

        </div>

    );

}

export default InvestigationPanel;