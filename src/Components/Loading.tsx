import React, { useEffect, useState } from 'react';
import './Loading.css'; // Optional CSS for styling

const Loading: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <video autoPlay loop muted className="loading-video">
                    <source src="/videos/loading.mp4" type="video/mp4" />
                </video>
                {/* Uncomment this section for SVG loading animation */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="5" fill="none" />
                    <path d="M 50,5 A 45,45 0 0,1 95,50 A 45,45 0 0,1 50,95 A 45,45 0 0,1 5,50 A 45,45 0 0,1 50,5" fill="none" stroke="black" strokeWidth="5" />
                </svg> */}
            </div>
        );
    }

    return null; // Or return your main content here
};

export default Loading;
