'use client';
import React from 'react'
import CommentSection from '@/components/CommentSection';
import Author from '@/components/Author';
import { title } from 'process';
import Footer from '@/components/Footer';
const posts=[
  {
    id:"1",
    title:"Mastering HTML: The building blocks of web development",
    image:"../images/next1.jpg",
    description:"HTML (hyper text markup language ) is the foundation of web development and mastering is the critical for anyone "
  },
  {
    id: "2",
    title: "Machine Learning Basics",
    description:
      "A dynamic and essential subset of Ai that focuses on developing algorithms that enable computers to learn from and made predications based on data ",
    
    image: "../images/next2.jpg",
  },
  {
    id: "3",
    title: "Deep learning Explained",
    description:
      "Deep learning is a revolutionary rubfiled of machine learning that employee neural networks to model complex patterns predication based on data",
    
    image: "../images/next3.jpg",
  },
  {
    id: "4",
    title: "Natural Language processing",
    description:
      "Understand NLP concepts techniques and application including zentiments assignments and chatbots,enhancing human-computer interactions ",
    
    image: "../images/next4.jpg",
  },
  {
    id: "5",
    title: "Al in Healthcare",
    description:
      "Ai is tranforming healthcare by improving diagnostics personalized medicine,and productive analysis for better patient outcomes",
    
    image: "../images/next5.jpg",
  },
  {
    id: "6",
    title: "Data Preprocessing Techniques",
    description:
      "Learn essential data preprocessing techniques to enhance model perfomance,including data cleaning,feature selection,and splitting",
    
    image: "../images/next6.jpg",
  },
  {
    id: "7",
    title: "Building Your First Neural Network",
    description:
      "Follow a step-by-step guide to create a neural network from scratch covering architecture,training and evalturation best practices",
   
    image: "../images/next7.jpg",
  },
  {
    id: "8",
    title: "Ethics in Ai",
    description:
      "Delve into ethical consideration in Ai, focusing on bias transparency and accountablity in developing responsible Ai techniques",
    
    image: "../images/next8.jpg",
  },

]
export default function Post({params}:{params:{id:string}}) {
  const {id} = params;
  const post=posts.find((p)=>p.id===id);
  if(!post){
    return (
      <h2 className='text-2xl font-bold text-center mt-10'>Post not found</h2>
    );
  }
  const renderParagraphs=(description:string)=>{
    return description.split("/n").map((para ,index)=>{
      <p key={index} className="mt-4 text-justify">
       {para.trim()}{" "}
      </p>
    });
  };
  return(
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xltext-3xl font-bold text-red-600 text-center'>
        {" "}
        {post.title}
      </h1>
      {post.image && ( <img src={post.image}
      alt={post.title}
      className='w-full h-auto rounded-md mt-4'/>
    )}
    <div className='mt-6 text-lg text-slate-700'>
      (renderParagraphs(post.description))
    </div>
      <CommentSection postID={post.id}/>
      <Author/>
      <Footer/>
    </div>
  );
}
