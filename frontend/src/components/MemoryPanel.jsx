function MemoryPanel({ memory }) {

    return (

        <div className="panel">

            <h2>Cognee Memory</h2>

            <pre>

                {memory || "No memory yet."}

            </pre>

        </div>

    );

}

export default MemoryPanel;