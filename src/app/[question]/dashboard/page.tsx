"use client";
import Slider from "@/components/home/Slider";
import Todo from "@/components/question-two/Todo";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
    const params = useParams();
    const { question } = params;
    return (
        <>
            {question === "question-1" && <Slider />}
            {question === "question-2" && <Todo />}
        </>
    );
};

export default page;