import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AirMag from "../components/AirMag";
import Loader from "../components/Loader";


export default function AirMagPage() {
  return (
    <div className="text-white">
      <div className="  md:flex">
        <div className="align-left h-96 md:h-[600px] w-full md:w-[550px] relative">
          <p className="absolute text-9xl md:text-[200px]  font-outline-2 text-transparent whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            AIR MAG
          </p>
          <Canvas className="">
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={5.0}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 2]} intensity={5} />
            <Suspense fallback={<Loader />}>
              <AirMag />
            </Suspense>
          </Canvas>
        </div>
        <div className="md:ml-24 mb-8 mt-24">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
          </div>
          <div className=" uppercase">
            <h4 className="mt-1 font-extralight">Limited Edition</h4>
            <h2 className="text-8xl -mt-1 font-shoes ">NIKE AIR MAG</h2>
            <p className="text-5xl">$76,927</p>
          </div>
          <div className=" mt-5">
            <p className="font-extralight">Size</p>
            <div className="flex gap-3 mt-2">
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">37</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">39</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">40</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">41</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">42</p>
              </div>
            </div>
          </div>
          <button className="bg-white text-black w-full py-3 mt-7 text-xl font-bold hover:bg-black hover:border hover:text-white">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex-col w-3/6">
          <h5 className="font-bold">Description</h5>
          <p className="text-[#969696]">
            he Nike MAG is a limited-edition shoe created by Nike Inc. It is a
            replica of a shoe featured in the film Back to the Future Part II.
            The Nike Mag was originally released for sale in 2011 and again in
            2016. Both launches were in limited quantities. The 2011 release was
            limited to 1,510 pairs, while the 2016 release was limited to 89
            pairs
          </p>
        </div>
        <div className="">
          <h5 className="font-bold">Reviews</h5>
          <div className="grid grid-cols-2">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
