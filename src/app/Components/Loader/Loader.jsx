import React from 'react';

const Loader = () => {
    return (

        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div id="spinner-container" className="space-y-10">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-(--primary-color) rounded-full animate-ping">
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Loader;