"use client";
import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import { useLoading } from "@/hooks/useLoading";
import Loader from "@/components/Loader";
const Page = () => {
  const { loading } = useLoading();
  return (
    <div className="flex flex-col h-screen">
      <div className="h-20"></div>
      <div className="flex-grow px-2 place-items-center ">
        <Home />
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-brightness-75">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
