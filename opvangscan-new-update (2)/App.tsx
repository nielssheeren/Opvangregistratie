// Updated App.tsx

import React, { useEffect, useState, useCallback } from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchFromCloud = useCallback(async () => {
        try {
            const response = await fetch('https://api.example.com/data', { // Use secure API URL
                method: 'GET',
                mode: 'cors' // Fix CORS mode
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError('Failed to fetch data: ' + error.message);
        }
    }, []);

    useEffect(() => {
        fetchFromCloud();
    }, [fetchFromCloud]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="app-container"> {/* Fix incomplete HTML class name */}
            <h1>Data</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default App;
