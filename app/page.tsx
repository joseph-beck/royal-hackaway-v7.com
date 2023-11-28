'use client';

import logo from './v7-logo.png'
import background from './background.png'

import { Accordion } from "@/components/accordion";
import { Footer } from "@/components/footer";
import { Schedule } from "@/components/schedule";
import { CountdownTimer } from "@/components/countdown";
import Image from 'next/image';
import { Card } from '@/components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Sponsors } from '@/components/sponsors';
import { H2 } from '@/components/title';
import { Committee } from '@/components/committee';
import { FAQ } from '@/components/faq';
import { Information } from '@/components/information';
import { Timetable } from '@/components/timetable';

export default function Home() {
  return (
    <main>
      <div className="absolute h-screen w-full [clip-path:inset(0,0,0,0)] bg-black">
        <div className="fixed w-full h-full left-0 top-0">
          <Image alt="Hackaway Photo"
            src={background}
            placeholder="blur"
            fill
            className="object-cover blur brightness-[.35]" />
        </div>
      </div>
      <div className="min-h-screen items-center">
        <div className="w-full pt-10">
          <Image alt="Hackaway V7 Logo" src={logo} className="blur-none drop-shadow-[4px_4px_rgba(217,91,23,.75)] mx-auto lg:w-1/2 w-3/4" />
        </div>
        <div className="w-full blur-none mt-5 sm:mt-10 mb-20 lg:mb-10">
          <div className="w-fit lg:w-4/5 mx-auto py-5 sm:mt-20 bg-accent rounded-3xl">
            <CountdownTimer date={new Date(2024, 1, 3, 10)} />
          </div>
        </div>
        <div className="h-full w-full mt-32 hidden lg:block">
          <div className="mx-auto w-fit">
            <FontAwesomeIcon className="drop-shadow-[6px_9px_rgb(217,91,23)] animate-[bounce_3s_infinite]" size="10x" color="white" icon={faChevronDown} />
          </div>
        </div>
      </div>

      <div className="relative w-full h-full bg-white" id="hackaway-info">
        <div className="">
          <Information/>
          <FAQ/>
          <Committee/>
          <Timetable/>
          <Sponsors/>
        </div>

        <Footer/>
      </div>
    </main>
  );
};
