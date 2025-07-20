"use client";

import Image from "next/image";

// @ts-expect-error #TODO: Remove this line when the ab-ui package is updated to Typescript
import { Button } from "@dukeofgaming/ab-ui";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>AB App</h1>
        <h2>Version: {process.env.NEXT_PUBLIC_APP_VERSION}</h2>
        <Image
          className="dark:invert"
          src={`${process.env.NEXT_BASE_PATH || ""}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            Clone this repository <a href="https://github.com/dukeofgaming/ab-app">🔗dukeofgaming/ab-app</a>
          </li>
          <li className="tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>.
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly with <code>npm run dev</code>
          </li>
          <li className="tracking-[-.01em]">
            Use the AB-UI Design System <a href="https://github.com/dukeofgaming/ab-ui">(🔗GitHub)</a>: 
            <br />
            <br />
            <Button onClick={() => window.open("https://dukeofgaming.github.io/ab-ui")}>Storybook (main) @ Github Pages</Button> 
            &nbsp;
            <Button onClick={() => window.open("https://www.chromatic.com/library?appId=6859827d92dfebdf526cc555")}>Storybook (develop) @ Chromatic</Button>
          </li>
        </ol>
        <h2>Optional</h2>
        <ul>
          <li>
            Run <code>npm run repo:set-upstream</code> to upgrade the base project from the upsgtream branch or remote.
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src={`${process.env.NEXT_BASE_PATH || ""}/vercel.svg`}
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-xs text-gray-500">v{process.env.NEXT_PUBLIC_APP_VERSION}</span>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${process.env.NEXT_BASE_PATH || ""}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${process.env.NEXT_BASE_PATH || ""}/window.svg`}
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${process.env.NEXT_BASE_PATH || ""}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
