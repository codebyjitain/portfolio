import React from "react";

const UberCloneProject = () => {
  return (
    <section className="min-h-screen w-full px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="w-fit px-4 py-1 rounded-full text-sm border border-green-400 text-green-400">
            ✔ Completed Project
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            Uber Clone <span className="text-[var(--text-color)]">Ride Booking Application</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-4xl leading-relaxed">
            This Uber Clone is a ride-booking web application that replicates the
            core workflow of a real-world ride-hailing platform. The project
            focuses on location-based ride booking, user flow design, and
            frontend-backend interaction rather than UI imitation alone.
          </p>
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Project Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              The Uber Clone demonstrates how a modern ride-booking system works
              end-to-end—from selecting pickup and drop locations to choosing a
              ride type and estimating fares. The project emphasizes smooth UX,
              modular code, and clean API integration.
            </p>

            <p className="text-gray-400 leading-relaxed">
              It is built as a learning-focused project to understand
              geo-location handling, conditional UI flows, and scalable frontend
              architecture.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Core Features</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Pickup and drop location selection</li>
              <li>Ride type selection with dynamic pricing</li>
              <li>Fare estimation logic</li>
              <li>Booking confirmation flow</li>
              <li>Responsive and mobile-first UI</li>
            </ul>
          </div>

        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Technology Stack</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "Map APIs",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Application Architecture</h2>
            <p className="text-gray-400 leading-relaxed">
              The application follows a component-based frontend architecture
              with reusable UI blocks and centralized state handling for ride
              details. Backend APIs manage ride requests, pricing logic, and
              location data.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Learning Outcomes</h2>
            <p className="text-gray-400 leading-relaxed">
              This project helped in understanding real-world application flows,
              map-based interactions, asynchronous API handling, and designing
              user journeys that feel intuitive and responsive.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-6">
          <a
            href="#"
            className="px-6 py-3 rounded-full border hover:border-[var(--text-color)] transition"
          >
            GitHub Repository
          </a>
        </div>

      </div>
    </section>
  );
};

export default UberCloneProject;