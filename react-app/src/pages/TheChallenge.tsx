import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TheChallenge: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [currentView, setCurrentView] = useState<'challenges' | 'filming'>('challenges');

  const challengeData = {
    1: {
      title: "Day 1 – Foundation of the Arena",
      challenges: [
        { type: 'Endurance', name: 'Treadmill Marathon', icon: '🏃', area: 'Indoor gym, 10 treadmills in a row.', equipment: '10 pro treadmills with screen timers.', entertainment: 'Split-screen live stats (distance, time, heart rate) on big LED. Audience cheers contestants lasting longest.' },
        { type: 'Speed', name: 'Beach Sprint 100m', icon: '⚡', area: 'Outdoor beach lane (marked with flags).', equipment: 'Stopwatch system, starting blocks.', entertainment: 'Drone shot following runners + slow-motion replay at finish line.' },
        { type: 'Strength', name: 'Tire Flip Race', icon: '🏋️', area: 'Outdoor field with 40m lane.', equipment: 'Tractor tires (100–200 kg).', entertainment: 'Each flip shown with "power meter" graphic, race commentary for excitement.' }
      ]
    },
    2: {
      title: "Day 2 – Balance & Power",
      challenges: [
        { type: 'Endurance', name: 'Rowing Machine Marathon', icon: '🏃', area: 'Indoor gym, rowing machines side-by-side.', equipment: 'Concept2 rowers with meters.', entertainment: 'Live scoreboard with meters rowed, dramatic lighting & music.' },
        { type: 'Speed', name: 'Agility Ladder + Cones', icon: '⚡', area: 'Outdoor track.', equipment: 'Agility ladder, cones, timing gates.', entertainment: 'Fast camera cuts, crowd reacts to mistakes (touching lines = penalty).' },
        { type: 'Strength', name: 'Deadlift Max Reps', icon: '🏋️', area: 'Indoor stage with lifting platform.', equipment: 'Olympic barbells, plates.', entertainment: 'Spotlights + dramatic countdown for each lift, audience counts reps.' }
      ]
    },
    3: {
      title: "Day 3 – Explosive Energy",
      challenges: [
        { type: 'Endurance', name: 'Cycling Sprint 20km', icon: '🏃', area: 'Outdoor coastal road (closed track).', equipment: 'Bikes, helmets, GoPro cams.', entertainment: 'On-bike cameras + aerial drones. Live commentators narrating the race.' },
        { type: 'Speed', name: 'Obstacle Dash', icon: '⚡', area: 'Outdoor arena with obstacles.', equipment: 'Walls, tunnels, rope nets.', entertainment: 'Epic music, slow-motion crash replays, crowd laughs at slips.' },
        { type: 'Strength', name: 'Atlas Stones Lift', icon: '🏋️', area: 'Indoor stage.', equipment: 'Concrete stones (50–120 kg).', entertainment: 'Lighting spot each stone; audience cheers louder with each heavier lift.' }
      ]
    },
    4: {
      title: "Day 4 – Endurance of Mind & Body",
      challenges: [
        { type: 'Endurance', name: 'Plank Hold', icon: '🏃', area: 'Indoor floor space.', equipment: 'Mats, cameras overhead.', entertainment: 'Big clock countdown, heart-rate monitors on screen.' },
        { type: 'Speed', name: 'Reaction Wall – Lights', icon: '⚡', area: 'Indoor wall setup.', equipment: 'LED reaction wall.', entertainment: 'Contestants slap lights as they appear, crowd chants rhythmically.' },
        { type: 'Strength', name: 'Log Carry', icon: '🏋️', area: 'Outdoor field, 50m path.', equipment: 'Heavy wooden logs with handles.', entertainment: 'Viking-style theme music, smoke effects at finish line.' }
      ]
    },
    5: {
      title: "Day 5 – The Water Element",
      challenges: [
        { type: 'Endurance', name: 'Open-Water Swim', icon: '🏃', area: 'Sea section, 200m marked zone.', equipment: 'Safety buoys, kayaks for rescue.', entertainment: 'Drone shots over water, underwater GoPro cuts.' },
        { type: 'Speed', name: 'Beach Flag Dash', icon: '⚡', area: 'Sandy beach, 50m track.', equipment: 'Flags, cones.', entertainment: 'Sudden whistle start, replay of fastest dive for flags.' },
        { type: 'Strength', name: 'Sandbag Pyramid Build', icon: '🏋️', area: 'Beach zone.', equipment: 'Sandbags (20–40kg).', entertainment: 'Contestants building pyramids while crowd counts sandbags loudly.' }
      ]
    },
    6: {
      title: "Day 6 – Team Spirit",
      challenges: [
        { type: 'Endurance', name: 'Relay Run 5km', icon: '🏃', area: 'Outdoor track.', equipment: 'Batons.', entertainment: 'Team transitions shown in close-ups, suspense at handoffs.' },
        { type: 'Speed', name: 'Sled Push Race', icon: '⚡', area: 'Indoor turf track.', equipment: 'Weighted sleds.', entertainment: 'Audience on both sides cheering, live timer above track.' },
        { type: 'Strength', name: 'Tug of War', icon: '🏋️', area: 'Outdoor sand pit.', equipment: 'Heavy rope, markers.', entertainment: 'Smoke machines + referee countdown; crowd divided into cheering sides.' }
      ]
    },
    7: {
      title: "Day 7 – Mental Pressure",
      challenges: [
        { type: 'Endurance', name: 'Stair Run 50 Floors', icon: '🏃', area: 'Tall building stairwell (indoor).', equipment: 'Timing chips.', entertainment: 'Live split-screen race cam (floor 10, 20, 30…).' },
        { type: 'Speed', name: 'Reflex Catch Test', icon: '⚡', area: 'Indoor setup.', equipment: 'Falling sticks (reaction speed test).', entertainment: 'Ultra slow-motion replay of closest catches.' },
        { type: 'Strength', name: 'Car Pull', icon: '🏋️', area: 'Outdoor parking lot.', equipment: 'SUV/car with harness.', entertainment: 'Audience screams each meter pulled, DJ beats match contestants\' effort.' }
      ]
    },
    8: {
      title: "Day 8 – Core & Stability",
      challenges: [
        { type: 'Endurance', name: 'Battle Rope 5 min', icon: '🏃', area: 'Indoor.', equipment: 'Heavy ropes.', entertainment: 'Close-up slow-motion sweat + rope waves.' },
        { type: 'Speed', name: 'Sprint with Resistance Bands', icon: '⚡', area: 'Outdoor track.', equipment: 'Resistance belts.', entertainment: 'Tension graphics on screen, replay of most explosive launch.' },
        { type: 'Strength', name: 'Farmer\'s Walk', icon: '🏋️', area: 'Outdoor 40m lane.', equipment: 'Heavy kettlebells.', entertainment: 'Commentators highlight grip failures, suspense builds.' }
      ]
    },
    9: {
      title: "Day 9 – Semi-Final",
      challenges: [
        { type: 'Endurance', name: 'Rowing 10km', icon: '🏃', area: 'Indoor rowing machines.', equipment: 'Concept2 rowers.', entertainment: 'Live energy bar graphs per athlete.' },
        { type: 'Speed', name: 'Parkour Sprint', icon: '⚡', area: 'Outdoor custom parkour track.', equipment: 'Walls, rails, mats.', entertainment: 'Matrix-style slow motion jumps + audience roar.' },
        { type: 'Strength', name: 'One-Hand Deadlift', icon: '🏋️', area: 'Indoor stage.', equipment: 'Barbell, weights.', entertainment: 'Spotlights + fire torches for final lift.' }
      ]
    },
    10: {
      title: "Day 10 – Grand Finale",
      challenges: [
        { type: 'Endurance', name: 'Triathlon Mini', icon: '🏃', area: 'Outdoor beach & road loop.', equipment: 'Bikes, buoys, timing system.', entertainment: 'Multi-camera coverage, commentators hype every section.' },
        { type: 'Speed', name: 'Final Sprint Duel 200m', icon: '⚡', area: 'Outdoor straight lane.', equipment: 'Timing gates.', entertainment: 'Head-to-head close camera, finish line ribbon cut.' },
        { type: 'Strength', name: 'Ultimate Obstacle Gauntlet', icon: '🏋️', area: 'Mixed arena.', equipment: 'Rope climbs, wall lifts, weighted sleds, sandbags.', entertainment: 'Fireworks at finish, victory music, final slow-motion champion moment.' }
      ]
    }
  };

  const filmingPlanData = [
    {
      title: "General Daily Framework",
      content: [
        "**07:00 – 08:00** | Wake-up, breakfast (B-roll of morning routines)",
        "**08:00 – 09:00** | Call time, makeup/wardrobe, mic setup",
        "**09:00 – 14:00** | Filming Challenges (3 blocks)",
        "**14:00 – 15:00** | Lunch break (crew + contestants, informal B-roll)",
        "**15:00 – 18:00** | Private Interviews + sponsor inserts",
        "**18:00 – 19:00** | Rest, personal downtime",
        "**19:00 – 21:00** | Nightly Gathering + Recap/Scoring",
        "**21:00 – 23:00** | Crew wrap-up, backups, editorial notes",
      ]
    },
    {
      title: "Detailed Filming Plan",
      content: [
        "**MORNING (07:00-09:00):** Crew captures wake-ups, warm-ups, and drone establishing shots. Wardrobe and sound prep contestants. Directors brief the team.",
        "**CHALLENGES (09:00-14:00):** Each challenge gets ~90 minutes of filming (30 min setup, 40 min competition, 20 min post-reactions). Multi-camera setups including drones, GoPros, and slow-motion capture are used to match the energy of each challenge.",
        "**PRIVATE INTERVIEWS (15:00-18:00):** Conducted one-on-one in a confessional booth. Questions focus on strategy, rivalries, and motivation. Each contestant gets 15-20 minutes.",
        "**EVENING GATHERING (19:00-21:00):** A hosted discussion covering the day's emotional highlights and conflicts. On-screen scoring and leaderboard updates are filmed with a cinematic style.",
        "**PRODUCTION WRAP (21:00-23:00):** Data wrangling and footage backup. Editorial team drafts notes. Director debriefs crew and medical team checks on contestants."
      ]
    },
    {
      title: "Daily Crew Deployment",
      content: [
        "**Camera Crew:** 8 (3 static, 2 roaming, 1 drone, 1 GoPro, 1 slow-mo)",
        "**Sound Crew:** 3 (mics, boom, mix)",
        "**Directors:** 2 (Main + Technical)",
        "**Lighting:** 2 (for strength challenges + interviews)",
        "**Medical/Psych Support:** 2",
        "**Trainers & Coordinators:** 3",
        "**Editors (on-site):** 2",
      ]
    }
  ];

  const chartData = {
    labels: ['Gym / Arena', 'Outdoor / Natural', 'Obstacle / Technical', 'Team / Competition'],
    datasets: [{
      label: 'Number of Challenges',
      data: [13, 9, 4, 4],
      backgroundColor: [
        'rgba(59, 130, 246, 0.9)',
        'rgba(249, 115, 22, 0.9)',
        'rgba(16, 185, 129, 0.9)',
        'rgba(239, 68, 68, 0.9)'
      ],
      borderColor: '#F9FAFB',
      borderWidth: 4
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#4B5563',
          font: {
            size: 14,
            family: 'Inter'
          }
        }
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleFont: { size: 16, weight: 'bold' as const, family: 'Inter' },
        bodyFont: { size: 14, family: 'Inter' },
        padding: 12,
        cornerRadius: 6
      }
    }
  };

  const CollapsibleSection: React.FC<{ title: string; content: string[]; isOpen?: boolean }> = ({ title, content, isOpen = false }) => {
    const [isExpanded, setIsExpanded] = useState(isOpen);

    return (
      <div className="border border-gray-200 rounded-lg p-5">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4 className="text-xl font-bold text-gray-900">{title}</h4>
          <span className={`text-xl text-gray-500 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
        {isExpanded && (
          <ul className="list-disc list-inside text-gray-600 space-y-1 mt-4">
            {content.map((item, index) => (
              <li key={index} className="mb-2">
                {item.split('**').map((part, i) => 
                  i % 2 === 1 ? (
                    <strong key={i} className="font-semibold text-gray-700">{part}</strong>
                  ) : (
                    part
                  )
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            THE CHALLENGE
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            An Interactive 10-Day Professional & Entertainment Plan
          </p>
        </motion.header>

        <main>
          {/* Production Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-8"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Production Dashboard</h2>
              <p className="mt-1 text-gray-500">
                Select a day to view its challenges or switch to the detailed filming plan. 
                This dashboard provides a complete overview of the event's creative design and logistical execution.
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <div className="flex p-1 rounded-xl bg-gray-100 shadow-inner">
                <button
                  onClick={() => setCurrentView('challenges')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    currentView === 'challenges'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Challenge Details
                </button>
                <button
                  onClick={() => setCurrentView('filming')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    currentView === 'filming'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Filming Plan
                </button>
              </div>
            </div>

            {/* Day Selector */}
            {currentView === 'challenges' && (
              <nav className="flex flex-wrap justify-center gap-2 mb-8">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((day) => (
                  <button
                    key={day}
                    onClick={() => setCurrentDay(day)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 border ${
                      currentDay === day
                        ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
                        : 'border-gray-300 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    Day {day}
                  </button>
                ))}
              </nav>
            )}
          </motion.div>

          {/* Challenges View */}
          {currentView === 'challenges' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
                {challengeData[currentDay as keyof typeof challengeData].title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challengeData[currentDay as keyof typeof challengeData].challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{challenge.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-blue-500">{challenge.type.toUpperCase()}</p>
                        <h4 className="text-xl font-bold text-gray-900">{challenge.name}</h4>
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <p><strong className="font-semibold text-gray-700">Area:</strong> {challenge.area}</p>
                      <p><strong className="font-semibold text-gray-700">Equipment:</strong> {challenge.equipment}</p>
                      <p><strong className="font-semibold text-gray-700">Entertainment:</strong> {challenge.entertainment}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Filming Plan View */}
          {currentView === 'filming' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-xl p-6 md:p-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
                Daily Filming & Production Plan
              </h3>
              <p className="text-center text-gray-500 mb-8 max-w-3xl mx-auto">
                This section outlines the comprehensive daily schedule for filming, interviews, and production logistics. 
                It serves as a master call sheet, ensuring all departments are synchronized from dawn until wrap.
              </p>

              <div className="space-y-4 max-w-4xl mx-auto">
                {filmingPlanData.map((section, index) => (
                  <CollapsibleSection
                    key={index}
                    title={section.title}
                    content={section.content}
                    isOpen={index === 0}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Challenge Variety Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-xl p-6 md:p-10 mt-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
              Challenge Variety Overview
            </h3>
            <p className="text-center text-gray-500 mb-8 max-w-3xl mx-auto">
              To ensure a dynamic and engaging show, the 10-day plan incorporates a balanced mix of challenge types. 
              This chart visualizes the thematic distribution, highlighting the blend of controlled arena events, 
              natural outdoor trials, technical obstacle courses, and direct team competitions.
            </p>
            <div className="relative w-full max-w-md mx-auto h-80">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default TheChallenge;