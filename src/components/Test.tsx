"use client";
import React from 'react';
import { useRouter, useParams } from 'next/navigation';

const Test = () => {
    const params = useParams();
    const router = useRouter();
    const index = Number(params.question);

    const handleButtonClick = (index: number) => {
        router.push(`/question-one/${index}`);
    };

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='flex gap-10'>
                <button
                    onClick={() => handleButtonClick(index+1)}
                    className='p-3 border border-black rounded-xl text-white bg-green-600'
                >
                    question-one
                </button>
                <button
                    onClick={() => handleButtonClick(index + 1)}
                    className='p-3 border border-black rounded-xl text-white bg-green-600'
                >
                    question-two
                </button>
            </div>
        </div>
    );
};

export default Test;