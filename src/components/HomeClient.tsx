"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import DemoShowcaseSection from "./DemoShowcaseSection";
import EcosystemSection from "./EcosystemSection";
import CoursesSection from "./CoursesSection";
import TeamSliderSection from "./TeamSliderSection";
import CompanySection from "./CompanySection";
import { DemoScreen } from "./KodelaMobileDemo";
import { CourseId } from "@/data/kodelaData";

export default function HomeClient() {
  const [activeScreen, setActiveScreen] = useState<DemoScreen>("splash");
  const [selectedCourse, setSelectedCourse] = useState<CourseId>("python");

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLaunchCourseQuiz = (courseId: CourseId) => {
    setSelectedCourse(courseId);
    setActiveScreen("quiz");
    scrollToDemo();
  };

  const handleLaunchDemoHome = () => {
    setActiveScreen("home");
    scrollToDemo();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip">
      <Navbar onLaunchDemo={handleLaunchDemoHome} />
      <main className="flex-1">
        <HeroSection
          onStartQuiz={handleLaunchCourseQuiz}
          onScrollToDemo={handleLaunchDemoHome}
        />
        <DemoShowcaseSection
          activeScreen={activeScreen}
          onScreenChange={setActiveScreen}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
        />
        <EcosystemSection />
        <CoursesSection onSelectCourseQuiz={handleLaunchCourseQuiz} />
        <TeamSliderSection />
        <CompanySection />
      </main>
    </div>
  );
}
