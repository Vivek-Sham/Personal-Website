import CSharp from "@/assets/logos/CSharp.svg";
import DotNet from "@/assets/logos/DotNet.svg";
import FastAPI from "@/assets/logos/FastAPI.svg";
import Firebase from "@/assets/logos/Firebase.svg";
import Huggingface from "@/assets/logos/Huggingface.svg";
import Java from "@/assets/logos/Java.svg";
import Javascript from "@/assets/logos/Javascript.svg";
import MongoDB from "@/assets/logos/MongoDB.svg";
import NextJS from "@/assets/logos/NextJS.svg";
import Python from "@/assets/logos/Python.svg";
import PyTorch from "@/assets/logos/PyTorch.svg";
import React from "@/assets/logos/React.svg";
import Shadcn from "@/assets/logos/Shadcn.svg";
import Tailwind from "@/assets/logos/Tailwind.svg";
import Tensorflow from "@/assets/logos/Tensorflow.svg";
import Typescript from "@/assets/logos/Typescript.svg";

const projects = [
  {
    id: 1,
    name: "Personal Website",
    description: "</> Work in Progress",
    image: "",
    year: "2025",
    tags: ["Hobby"],
    techStack: [
      { name: "Next.js", icon: NextJS },
      { name: "Tailwind", icon: Tailwind },
      { name: "Shadcn", icon: Shadcn },
    ],
    url: "",
    github_url: "",
  },
  {
    id: 2,
    name: "Opinion Mining For Comments Sentiment Analysis",
    description:
      "A User Interface for Scraping & Analysing Youtube and Reddit Comments Using a Fine-tuned BERT Multi-task Model  ",
    image: "",
    year: "2024",
    tags: ["Dissertation", "Machine Learning", "NLP"],
    techStack: [
      { name: "Next.js", icon: NextJS },
      { name: "Tailwind", icon: Tailwind },
      { name: "Shadcn", icon: Shadcn },
      { name: "FastAPI", icon: FastAPI },
      { name: "Huggingface", icon: Huggingface },
      { name: "PyTorch", icon: PyTorch },
    ],
    url: "1",
    github_url: "",
  },
];

export default projects;
