function MemoryPanel({ memory }) {

    return (

        <div className="panel">

            <h2>🧠 Previous Memory</h2>

            {memory ? (

                <pre className="memory-box">
                    {memory}
                </pre>

            ) : (

                <div className="empty">
                    No previous investigation found.
                </div>

            )}

        </div>

    );

}

export default MemoryPanel;