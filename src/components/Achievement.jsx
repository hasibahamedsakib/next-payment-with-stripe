'use client'
import { useState, useEffect, useRef } from 'react';

export default function Achievement() {
  const [counts, setCounts] = useState({
    drivers: 0,
    trips: 0,
    customerService: 0,
  });

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting(); // Start the counting animation whenever the component enters the viewport
        }
      },
      { threshold: 0.5 } // Trigger the animation when 50% of the component is visible
    );

    const currentRef = statsRef.current; // Save the current ref value in a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use the saved ref value in cleanup
    };
  }, []);

  const startCounting = () => {
    const targetCounts = { drivers: 1600000, trips: 5600000, customerService: 24 };
    const duration = 2000;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounts({
        drivers: Math.min(Math.round(progress * targetCounts.drivers), targetCounts.drivers),
        trips: Math.min(Math.round(progress * targetCounts.trips), targetCounts.trips),
        customerService: Math.min(Math.round(progress * targetCounts.customerService), targetCounts.customerService),
      });

      if (frame >= totalFrames) {
        clearInterval(counter); 
      }
    }, duration / totalFrames);
  };

  return (
    <section className="py-10" ref={statsRef}>
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {/* 1.6 million drivers */}
          <div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">{(counts.drivers / 1000000).toFixed(1)} million</h3>
            <p className="text-gray-600">drivers</p>
          </div>

          {/* 5.6 million trips completed */}
          <div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">{(counts.trips / 1000000).toFixed(1)} million</h3>
            <p className="text-gray-600">trips completed</p>
          </div>

          {/* 24/7 Customer service */}
          <div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">{counts.customerService}/7</h3>
            <p className="text-gray-600">Customer service</p>
          </div>

          {/* Extensive coverage */}
          <div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">Extensive</h3>
            <p className="text-gray-600">coverage</p>
          </div>

        </div>
      </div>
    </section>
  );
}
