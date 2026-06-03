"use client";

import Aurora from "@/components/Aurora";
import { Mail, Linkedin, ChevronDown, Truck, Rocket, Dice5, Puzzle, Coffee } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-100vw min-h-screen bg-[#050e1d]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex justify-end items-center px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex gap-4 sm:gap-6">
            <a 
              href="https://www.linkedin.com/in/anna-brogowski/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#fee801] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} className="sm:w-[45px] sm:h-[45px]" />
            </a>
            <a 
              href="mailto:annabrogowski.d20@gmail.com"
              className="text-white hover:text-[#fee801] transition-colors"
              aria-label="Email"
            >
              <Mail size={28} className="sm:w-[45px] sm:h-[45px]" />
            </a>
          </div>
        </div>
      </nav>

      {/* Landing Section with Aurora */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 w-full h-full">
          <Aurora
            colorStops={["#711c91","#ea00d9","#0abdc6","#133e7c"]}
            amplitude={0.6}
            blend={0.1}
          />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-start justify-between h-full px-4 sm:px-16 py-8 sm:py-16">
          <div></div>
          <h1 className="text-[12vw] sm:text-[12vw] font-thing text-[#fee801] font-[family-name:var(--font-doto)] leading-none">
            Anna<br />Brogowski
          </h1>
          
          {/* Experience & More with bouncing arrow */}
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="text-white text-sm sm:text-lg font-light tracking-wider">Experience & More</p>
            <ChevronDown 
              size={32} 
              className="text-white animate-bounce" 
            />
          </div>
        </div>
      </div>

      {/* Professional Experience Section */}
      <section className="relative w-full min-h-[150vh] sm:min-h-screen px-4 sm:px-16 py-12 sm:py-24 bg-[#0a1528]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extralight text-[#fee801] font-[family-name:var(--font-doto)] mb-8 sm:mb-12">
            Professional Experience
          </h2>
          
          {/* Top Row: Torc & NASA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Torc Robotics */}
            <div className="flex flex-col items-center text-center">
              <img 
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.truejob.com%2Fuploads%2Fcompany%2Flogo%2F22150%2Ftorc_circle_icon.png&f=1&nofb=1&ipt=1c76e4c31fda156b5bd5b10d8e46911ce423ba59eb24ee4e2381ae40a0c8acf6" 
                  alt="Torc Logo" 
                  className="h-40 sm:h-60 w-auto mb-4 sm:mb-6"
                />
              <p className="text-white text-base sm:text-lg leading-relaxed px-4">
                Co-Op, Test Engineer, and Software Engineer for Torc Robotics
              </p>
            </div>
            
            {/* NASA */}
            <div className="flex flex-col items-center text-center">
              <img 
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fnasa-logo-png-nasa-logo-1664.png&f=1&nofb=1&ipt=0b87d5d6326e656c1e87c7421b1c77ffb38c61d06f40cbb13e9314dd94816cf4" 
                  alt="NASA Logo" 
                  className="h-40 sm:h-60 w-auto mb-4 sm:mb-6"
                />
              <p className="text-white text-base sm:text-lg leading-relaxed px-4">
                Contributor to the NASA Vertical Solar Array Technology design
              </p>
            </div>
          </div>
          
          {/* Virginia Tech - Centered below */}
          <div className="flex flex-col items-center text-center mt-8 sm:mt-16">
            <img 
              src="https://logodix.com/logo/847885.png" 
              alt="Virginia Tech Logo" 
              className="h-40 sm:h-60 w-auto mb-4 sm:mb-6"
            />
            <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl px-4">
              Virginia Tech Alumni with B.S. in Computer Engineering<br />Primary Focus: Controls Robotics, & Autonomy, Secondary Focus: Space Systems
            </p>
          </div>

        </div>

        {/* Tech Stack Icons - Full Width Scrolling */}
        <div className="absolute left-0 right-0 bottom-8 sm:bottom-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <p className="text-white text-xl sm:text-3xl font-[family-name:var(--font-doto)] tracking-wider mb-4 sm:mb-6">Experience With the Following</p>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-10 sm:gap-20 animate-scroll whitespace-nowrap">
              {/* First set of icons */}
              <img src="/unreal-engine-white-icon.svg" alt="Unreal Engine" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg" alt="ROS" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-original.svg" alt="DataDog" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block invert" />
              <img src="https://docs.temporal.io/img/favicon.png" alt="Temporal" className="h-12 w-12 sm:h-20 sm:w-20 shrink-0 inline-block" />
              <img src="/icoins8-unity-500.png" alt="Unity" className="h-12 w-12 sm:h-20 sm:w-20 shrink-0 inline-block" />
              <img src="/nvidia_icon.png" alt="NVIDIA" className="h-12 w-12 sm:h-20 sm:w-20 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Agile" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="CI/CD" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              
              {/* Duplicate set for seamless loop */}
              <img src="/unreal-engine-white-icon.svg" alt="Unreal Engine" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg" alt="ROS" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-original.svg" alt="DataDog" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block invert" />
              <img src="https://docs.temporal.io/img/favicon.png" alt="Temporal" className="h-12 w-12 sm:h-20 sm:w-20 shrink-0 inline-block" />
              <img src="/icoins8-unity-500.png" alt="Unity" className="h-12 w-12 sm:h-20 sm:w-20 shrink-0 inline-block" />
              <img src="/nvidia_icon.png" alt="NVIDIA" className="h-12 w-12 sm:h-20 sm:w-20 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Agile" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="CI/CD" className="h-12 w-10 sm:h-20 sm:w-16 shrink-0 inline-block" />
            </div>
          </div>
        </div>
      </section>

      {/* Education and Notable Projects Section */}
      <section className="relative w-full min-h-50 px-4 sm:px-16 py-12 sm:py-24 bg-[#050e1d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extralight text-[#fee801] font-[family-name:var(--font-doto)] mb-8 sm:mb-12">
            Notable Projects
          </h2>
          <div className="text-white space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* VT Hunt */}
              <div className="flex flex-col items-center text-center">
                <Puzzle size={120} className="text-[#ffffff] mb-4 sm:mb-6 sm:w-60 sm:h-60" strokeWidth={1.5} />
                <p className="text-white text-base sm:text-lg leading-relaxed px-4">
                  <strong><em>VT Hun Puzzle Hunt Developer</em></strong><br />Developed interactive puzzles using Arduino and NVIDIA Jetson Nano for machine learning real-time object recognition challenges. Supported event logistics and puzzle deployment for over 500 participants annually.
                </p>
              </div>
              
              {/* D&D */}
              <div className="flex flex-col items-center text-center">
                <Dice5 size={120} className="text-[#ffffff] mb-4 sm:mb-6 sm:w-60 sm:h-60" strokeWidth={1.5} />
                <p className="text-white text-base sm:text-lg leading-relaxed px-4">
                  <strong><em>Vertical Solar Array Technology Designer</em></strong><br />
                    Developed software and control systems for NASA-sponsored lunar surface solar deployment technology. Utilized Python, C++, sensors, and microcontrollers to prototype automated testing and deployment solutions. Earned Best in Track Award among more than 25 senior design teams.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* Percolate Coffee App */}
              <div className="flex flex-col items-center text-center">
                <Coffee size={120} className="text-[#ffffff] mb-4 sm:mb-6 sm:w-60 sm:h-60" strokeWidth={1.5} />
                <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl px-4">
                  <strong><em>Percolate Coffee App</em></strong><br />
                  Self-driven project to develop a mobile application that helps users track their coffee habits, discover local coffee shops, improve their critical thinking by playing puzzles, and increase their awareness of their environmental impact through sustainable coffee consumption. Currently in development with React Native.
                </p>
              </div>
              {/* Cyberpunk TCG VR Platform */}
              <div className="flex flex-col items-center text-center">
                <Rocket size={120} className="text-[#ffffff] mb-4 sm:mb-6 sm:w-60 sm:h-60" strokeWidth={1.5} />
                <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl px-4">
                  <strong><em>Cyberpunk TCG AR Platform</em></strong><br />
                  Immersive augmented reality platform for playing a cyberpunk-themed trading card game. Utilized Unreal Engine to create engaging gameplay with holographic card interaction in augmented reality. Currently in development with a focus on multiplayer functionality in the theme of a Cyberpunk future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Training Section */}
      <section className="relative w-full min-h-50 px-4 sm:px-16 py-12 sm:py-24 bg-[#0a1528]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extralight text-[#fee801] font-[family-name:var(--font-doto)] mb-8 sm:mb-12">
            Professional Training
          </h2>
          <div className="text-white space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* NVIDIA */}
              <div className="flex flex-col items-center text-center">
                <img src="/nvidia_icon.png" alt="NVIDIA" className="h-40 sm:h-65 w-auto shrink-0 inline-block" />
                <p className="text-white text-base sm:text-lg leading-relaxed px-4">
                  <strong><em>NVIDIA Deep Learning Courses</em></strong><br /> Beginner's Guide to Autonomous Robotics<br />Getting Started with Deep Learning<br />Introduction to Robot Learning and Isaac Lab<br />Getting Started: Simulating Your First Robot in Isaac Sim
                </p>
              </div>
              
              {/* AWS */}
              <div className="flex flex-col items-center text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-40 sm:h-65 w-auto shrink-0 inline-block" />
                <p className="text-white text-base sm:text-lg leading-relaxed px-4">
                  <strong><em>AWS Training and Certification</em></strong><br />
                  Foundational AWS Cloud Concepts<br />
                  Architecting on AWS<br />
                  AWS Developer: Building on AWS<br />
                  AWS Machine Learning: Getting Started
                </p>
              </div>
            </div>
            
            {/* Certification Badges */}
            <div className="flex justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-16">
              <img src="/gs_bronze.png" alt="Bronze Certification" className="h-24 sm:h-50 w-auto" />
              <img src="/gs_silver.png" alt="Silver Certification" className="h-24 sm:h-50 w-auto" />
              <img src="/gs_gold.png" alt="Gold Certification" className="h-24 sm:h-50 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Training Section */}
      <section className="relative w-full min-h-50 px-16 py-24 bg-[#050e1d]">
        <p className="text-white text-center">Resume and references available upon request.</p>
      </section>
    </div>
  );
}
