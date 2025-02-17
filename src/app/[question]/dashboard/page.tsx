"use client";
import Todo from "@/components/question-two/Todo";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const { question } = params;
  return <div className="text-white">
    <Todo />
  </div>;
};

export default page;