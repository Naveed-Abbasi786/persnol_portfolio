// // // component/partials/loader/page.tsx
// "use client"
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

// export default function Loader() {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = () => {
//       console.log("Route change started...");
//       setLoading(true);

//       setTimeout(() => {
//         console.log("Loader stopped after 3 seconds");
//         setLoading(false);
//       }, 3000);
//     };

//     const handleStop = () => {
//       console.log("Route change complete/error...");
//       setLoading(false);
//     };

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleStop);
//     router.events.on("routeChangeError", handleStop);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleStop);
//       router.events.off("routeChangeError", handleStop);
//     };
//   }, [router]);

//   // Test button to trigger route change manually
//   const navigate = () => {
//     router.push("/test-page"); // Change to any page for testing
//   };

//   return (
//     <>
//       {loading && (
//         <div className="fixed top-0 left-0 w-full h-full bg-white opacity-70 flex justify-center items-center z-50">
//           <p className="text-xl font-semibold">Loading...</p>
//         </div>
//       )}

//       <button onClick={navigate}>Go to Test Page</button>
//     </>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, EffectCallback } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setLoading(true);

    const layers = document.querySelectorAll(".top-layer");
    console.log("Layers found:", layers); 

    layers.forEach((layer) => {
      layer.classList.add("active");
    });

    return () => {
      layers.forEach((layer) => {
        layer.classList.remove("active");
      });
      setLoading(false); 
    };
  }, [pathName]); 

  return (
    loading && (
      <div className="container">
        <div className="top-layer top-layer--1" />
        <div className="top-layer top-layer--2" />
        <div className="top-layer top-layer--3" />
        <div className="top-layer top-layer--4" />
        <div className="top-layer top-layer--5" />
      </div>
    )
  );
}
