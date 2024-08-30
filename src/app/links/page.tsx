"use client";

import { LucideGithub, LucidePhone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LinksPage = () => {
  return (
    <main className="flex flex-col w-full h-full bg-background">
      <div id="gradient" className="h-[35vh] css-selector relative w-full">
        <div className="md:w-40 md:h-40 rounded-full padding-avatar absolute bottom-[-5rem] left-1/2 transform -translate-x-1/2 p-2">
          <div className="w-full h-full rounded-full bg-green-300">
            <Image
              src="https://avatars.githubusercontent.com/u/16558533?v=4"
              width={160}
              alt="avatar"
              className="rounded-full"
              height={160}
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[65vh] bg-slate-900 md:pt-[7rem] pt-[6rem] flex flex-col items-center gap-y-4 py-4">
        <div className="flex flex-col md:w-6/12 w-10/12 items-center gap-y-2 mb-5">
          <p className="text-white text-2xl md:text-3xl font-bold">
            Hanif Ramadhan Abdillah
          </p>
          <Link href="/">
            <p className="text-sm md:text-base text-blue-400 font-medium cursor-pointer">
              https://haniframadhan.my.id
            </p>
          </Link>
          <p className="text-white text-sm font-medium">
            Suka ngoding buat aplikasi mobile ataupun website, kadang suka
            fotografi, kadang juga suka ngegame.
          </p>
        </div>
        <div className="bg-white md:py-4 py-2 md:px-10 px-4 rounded-md md:w-6/12 w-10/12 hover:bg-slate-200 transition-all">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hramadhaan"
            className="flex flex-row items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
            </svg>
            <p className="font-bold md:text-lg md:ml-4 ml-2 text-black">My Portfolio</p>
          </Link>
        </div>
        <div className="bg-white md:py-4 py-2 md:px-10 px-4 rounded-md md:w-6/12 w-10/12 hover:bg-slate-200 transition-all">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@codingwithhanif"
            className="flex flex-row items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
            </svg>
            <p className="font-bold md:text-lg md:ml-4 ml-2 text-black">
              Coding with Hanif
            </p>
          </Link>
        </div>
        <div className="bg-white md:py-4 py-2 md:px-10 px-4 rounded-md md:w-6/12 w-10/12 hover:bg-slate-200 transition-all">
          <Link
            py-2
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/hanif-ramadhan-a56634190/"
            className="flex flex-row items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <p className="font-bold md:text-lg md:ml-4 ml-2 text-black">LinkedIn</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LinksPage;
