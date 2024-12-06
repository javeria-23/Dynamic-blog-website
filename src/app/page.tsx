import React from "react";
import Navbar from "@/components/Navbar";
import Mega from "@/components/Mega";
import Author from "@/components/Author";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      
     <Navbar/>
     <Feature/>
     <Mega/>
     <Author/>
     <Footer/>
    </div>
  );
}
