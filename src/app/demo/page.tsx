"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoShowcaseSection from "@/components/DemoShowcaseSection";
import { DemoScreen } from "@/components/KodelaMobileDemo";
import { CourseId } from "@/data/kodelaData";

export default function DemoStudioPage() {
  const [activeScreen, setActiveScreen] = useState<DemoScreen>("splash");
  const [selectedCourse, setSelectedCourse] = useState<CourseId>("python");

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip">
      <Navbar isDemoPage />
      <main className="flex-1">
        <DemoShowcaseSection
          activeScreen={activeScreen}
          onScreenChange={setActiveScreen}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
          standalone
        />
      </main>
    </div>
  );
}
