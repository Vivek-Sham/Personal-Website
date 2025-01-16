import CSharp from "@/assets/logos/CSharp.svg";
import Colab from "@/assets/logos/Colab.svg";
import DotNet from "@/assets/logos/DotNet.svg";
import FastAPI from "@/assets/logos/FastAPI.svg";
import Firebase from "@/assets/logos/Firebase.svg";
import Git from "@/assets/logos/Git.svg";
import GitHub from "@/assets/logos/Github.svg";
import Huggingface from "@/assets/logos/Huggingface.svg";
import Java from "@/assets/logos/Java.svg";
import Javascript from "@/assets/logos/Javascript.svg";
import MongoDB from "@/assets/logos/MongoDB.svg";
import NextJS from "@/assets/logos/NextJS.svg";
import Numpy from "@/assets/logos/Numpy.svg";
import Pandas from "@/assets/logos/Pandas.svg";
import Python from "@/assets/logos/Python.svg";
import PyTorch from "@/assets/logos/PyTorch.svg";
import React from "@/assets/logos/React.svg";
import Seaborn from "@/assets/logos/Seaborn.svg";
import Shadcn from "@/assets/logos/Shadcn.svg";
import Tailwind from "@/assets/logos/Tailwind.svg";
import Tensorflow from "@/assets/logos/Tensorflow.svg";
import Typescript from "@/assets/logos/Typescript.svg";
import Vercel from "@/assets/logos/Vercel.svg";
import VSCode from "@/assets/logos/VSCode.svg";

import { Languages } from "@/assets/icons/Languages";
import { Web } from "@/assets/icons/WebDev";
import { AI } from "@/assets/icons/AI";
import { Tools } from "@/assets/icons/Tools";

export const technologies = [
  {
    category: "Languages",
    icon: Languages,
    items: [
      { name: "Java", icon: Java },
      { name: "C#", icon: CSharp },
      { name: "Python", icon: Python },
      { name: "JavaScript", icon: Javascript },
      { name: "TypeScript", icon: Typescript },
    ],
  },
  {
    category: "Web Development",
    icon: Web,
    items: [
      { name: "React", icon: React },
      { name: "NextJS", icon: NextJS },
      { name: "ASP.NET", icon: DotNet },
      { name: "FastAPI", icon: FastAPI },
      { name: "Tailwind", icon: Tailwind },
      { name: "Shadcn", icon: Shadcn },
      { name: "MongoDB", icon: MongoDB },
    ],
  },
  {
    category: "AI & Data Science",
    icon: AI,
    items: [
      { name: "Colab", icon: Colab },
      { name: "Huggingface", icon: Huggingface },
      { name: "PyTorch", icon: PyTorch },
      { name: "TensorFlow", icon: Tensorflow },
      { name: "Pandas", icon: Pandas },
      { name: "NumPy", icon: Numpy },
      { name: "Seaborn", icon: Seaborn },
    ],
  },
  {
    category: "Tools",
    icon: Tools,
    items: [
      { name: "VSCode", icon: VSCode },
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHub },
      { name: "Vercel", icon: Vercel },
    ],
  },
];
