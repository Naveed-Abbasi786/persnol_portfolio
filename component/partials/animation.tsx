"use client";
import { RootState } from "@/store";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Loader() {
  const selectedColor = useSelector(
    (state: RootState) => state.color.selectedColor,
  );
  const [loading, setLoading] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    // Set loading to true whenever pathName changes
    setLoading(true);

    // Add active class to all layers
    const layers = document.querySelectorAll(".top-layer");
    layers.forEach((layer) => {
      layer.classList.add("active");
    });

    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    // Cleanup function
    return () => {
      // Remove active class from all layers
      layers.forEach((layer) => {
        layer.classList.remove("active");
      });

      // Clear the timeout if the component unmounts
      clearTimeout(timeoutId);
    };
  }, [pathName]); // Run effect whenever pathName changes

  return (
    <>
      {loading && (
        <div className="container">
          <div className="top-layer top-layer--1" style={{ backgroundColor: selectedColor }} />
          <div className="top-layer top-layer--2" style={{ backgroundColor: '#222222' }} />
          <div className="top-layer top-layer--3" style={{ backgroundColor: selectedColor }} />
          <div className="top-layer top-layer--4" style={{ backgroundColor: '#222222' }} />
          <div className="top-layer top-layer--5" style={{ backgroundColor: selectedColor }} />
        </div>
      )}
    </>
  );
}