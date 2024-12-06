import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";
import id from "@/app/posts/[id]/page";
export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML ,the backbone of every webpage",
      date: "2024-12-06",
      imageUrl: "../images/next1.jpg",
    },
    {
      id: "2",
      title: "Machine Learning Basics",
      description:
        "A dynamic and essential subset of Ai that focuses on developing algorithms that enable computers to learn from and made predications based on data ",
      date: "2024-12-07",
      imageUrl: "../images/next2.jpg",
    },
    {
      id: "3",
      title: "Deep learning Explained",
      description:
        "Deep learning is a revolutionary rubfiled of machine learning that employee neural networks to model complex patterns predication based on data",
      date: "2024-12-08",
      imageUrl: "../images/next3.jpg",
    },
    {
      id: "4",
      title: "Natural Language processing",
      description:
        "Understand NLP concepts techniques and application including zentiments assignments and chatbots,enhancing human-computer interactions ",
      date: "2024-12-09",
      imageUrl: "../images/next4.jpg",
    },
    {
      id: "5",
      title: "Al in Healthcare",
      description:
        "Ai is tranforming healthcare by improving diagnostics personalized medicine,and productive analysis for better patient outcomes",
      date: "2024-12-09",
      imageUrl: "../images/next5.jpg",
    },
    {
      id: "6",
      title: "Data Preprocessing Techniques",
      description:
        "Learn essential data preprocessing techniques to enhance model perfomance,including data cleaning,feature selection,and splitting",
      date: "2024-12-09",
      imageUrl: "../images/next6.jpg",
    },
    {
      id: "7",
      title: "Building Your First Neural Network",
      description:
        "Follow a step-by-step guide to create a neural network from scratch covering architecture,training and evalturation best practices",
      date: "2024-12-09",
      imageUrl: "../images/next7.jpg",
    },
    {
      id: "8",
      title: "Ethics in Ai",
      description:
        "Delve into ethical consideration in Ai, focusing on bias transparency and accountablity in developing responsible Ai techniques",
      date: "2024-12-09",
      imageUrl: "../images/next8.jpg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
      {" "}  Exploring the World Of AI Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post,index)=>(
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index %2 === 0}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
