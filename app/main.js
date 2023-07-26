'use client';
import "../app/globals.css"
import React, { useState } from 'react';

const Main = () => {
    const [message, setMessage] = useState("");

    return (
        <div className='flex flex-col min-h-screen bg-slate-200'>

            <div className='flex-1 flex items-center justify-center'>
                <div className='max-w-screen-lg mx-auto text-center text-4xl pb-24'>
                    Ai Generate Tweets
                </div>
            </div>

            <div className='fixed bottom-0 bg-slate-300 p-4 w-full'>
                <div className='max-w-screen-lg mx-auto flex gap-2'>
                    <input
                        type="text"
                        className='flex-1 p-4 rounded'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className='py-4 px-6 bg-slate-500 text-white rounded'>
                        Send
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Main;