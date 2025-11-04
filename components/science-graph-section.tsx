"use client"

import { Button } from "@/components/ui/button"

export function ScienceGraphSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-balance text-amber-900">
                A Breakthrough in Skincare Device
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              The Definitive Collection sets a new industry standard. Scientifically developed with over 100 active
              ingredients to ensure maximum absorption and optimum skin rejuvenation.
            </p>

            <Button
              variant="outline"
              className="border-black/20 text-black hover:bg-black/5 transition-all duration-500 group bg-transparent"
            >
              EXPLORE SCIENCE
              <svg
                className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          <div className="relative h-96 flex items-center justify-center">
            {/* SVG Graph */}
            <svg
              viewBox="0 0 500 400"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}
            >
              {/* Grid lines */}
              <line x1="60" y1="350" x2="500" y2="350" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="60" y1="300" x2="500" y2="300" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="60" y1="250" x2="500" y2="250" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="60" y1="200" x2="500" y2="200" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="60" y1="150" x2="500" y2="150" stroke="#f3f4f6" strokeWidth="1" />

              {/* Y-axis labels */}
              <text x="45" y="355" textAnchor="end" className="text-xs fill-gray-400">
                0
              </text>
              <text x="45" y="305" textAnchor="end" className="text-xs fill-gray-400">
                20
              </text>
              <text x="45" y="255" textAnchor="end" className="text-xs fill-gray-400">
                40
              </text>
              <text x="45" y="205" textAnchor="end" className="text-xs fill-gray-400">
                60
              </text>
              <text x="45" y="155" textAnchor="end" className="text-xs fill-gray-400">
                80
              </text>
              <text x="45" y="105" textAnchor="end" className="text-xs fill-gray-400">
                100
              </text>

              {/* Axes */}
              <line x1="60" y1="20" x2="60" y2="350" stroke="#d1d5db" strokeWidth="2" />
              <line x1="60" y1="350" x2="500" y2="350" stroke="#d1d5db" strokeWidth="2" />

              {/* Y-axis label */}
              <text x="20" y="180" textAnchor="middle" className="text-xs fill-gray-400" transform="rotate(-90 20 180)">
                ACTIVE INGREDIENTS
              </text>

              {/* Main curve - beige/tan color */}
              <path
                d="M 80 320 Q 150 280, 220 240 T 360 120 Q 420 70, 480 40"
                fill="none"
                stroke="#d4a574"
                strokeWidth="3"
              />

              {/* Filled area under curve */}
              <path
                d="M 80 320 Q 150 280, 220 240 T 360 120 Q 420 70, 480 40 L 480 350 L 80 350 Z"
                fill="url(#gradient-fill)"
                opacity="0.15"
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#d4a574", stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: "#d4a574", stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>

              {/* Vertical marker line */}
              <line
                x1="360"
                y1="120"
                x2="360"
                y2="350"
                stroke="#d4a574"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.5"
              />

              {/* Central circle with 100+ */}
              <circle cx="360" cy="200" r="50" fill="white" stroke="#d4a574" strokeWidth="2" opacity="0.9" />
              <text x="360" y="205" textAnchor="middle" className="font-bold text-2xl fill-amber-800">
                100+
              </text>
              <text x="360" y="225" textAnchor="middle" className="text-xs fill-amber-700">
                active
              </text>
              <text x="360" y="240" textAnchor="middle" className="text-xs fill-amber-700">
                ingredients
              </text>
            </svg>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-24 flex items-center justify-center">
          <div className="border-l-2 border-gray-300 pl-8 text-center">
            <p className="text-sm text-gray-400 mb-4">Ordinary Skincare Device</p>
            <div className="w-24 border-b-2 border-gray-300 mx-auto"></div>
          </div>
          <div className="px-12 text-gray-400 text-sm">vs</div>
          <div className="border-r-2 border-accent pl-8 pr-8 text-center">
            <p className="text-sm text-accent font-medium">GemDerma Skincare Device</p>
            <div className="w-24 border-b-2 border-accent mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
