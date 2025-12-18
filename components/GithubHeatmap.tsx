import React, { useMemo } from 'react';
import { Github, GitCommit } from 'lucide-react';

interface DayData {
  date: Date;
  level: number; // 0-4
  count: number;
}

const GithubHeatmap: React.FC = () => {
  const weeks = useMemo(() => {
    const today = new Date();
    const data: DayData[][] = [];
    
    // We want roughly 3 months (14 weeks to fill width nicely)
    const totalWeeks = 16; 
    
    // Start from the Sunday of 16 weeks ago
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (totalWeeks * 7));
    // Adjust to previous Sunday
    startDate.setDate(startDate.getDate() - startDate.getDay());

    let currentDate = new Date(startDate);

    for (let w = 0; w < totalWeeks; w++) {
      const week: DayData[] = [];
      for (let d = 0; d < 7; d++) {
        // Deterministic pseudo-random based on date string
        const dateStr = currentDate.toDateString();
        let hash = 0;
        for (let i = 0; i < dateStr.length; i++) {
            hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
            hash |= 0;
        }
        const rand = Math.abs(hash % 100);
        
        let level = 0;
        let count = 0;
        
        // Custom distribution
        if (rand > 80) { level = 4; count = 10 + (rand % 10); }
        else if (rand > 60) { level = 3; count = 7 + (rand % 3); }
        else if (rand > 40) { level = 2; count = 4 + (rand % 3); }
        else if (rand > 20) { level = 1; count = 1 + (rand % 3); }
        
        // Stop if future
        if (currentDate > today) {
            level = 0;
            count = 0;
        }

        week.push({
          date: new Date(currentDate),
          level,
          count
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getColor = (level: number) => {
    switch(level) {
        case 1: return 'bg-nexus-accent/20 border-nexus-accent/30';
        case 2: return 'bg-nexus-accent/40 border-nexus-accent/50';
        case 3: return 'bg-nexus-accent/70 border-nexus-accent/80';
        case 4: return 'bg-nexus-accent border-nexus-accent shadow-[0_0_10px_rgba(0,240,255,0.5)]';
        default: return 'bg-white/5 border-transparent';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-white font-bold">
            <Github size={20} />
            <h3>GITHUB_ACTIVITY // LAST_3_MONTHS</h3>
        </div>
        <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
            <span>LESS</span>
            <div className={`w-3 h-3 rounded-sm ${getColor(0)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColor(1)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColor(2)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColor(3)}`}></div>
            <div className={`w-3 h-3 rounded-sm ${getColor(4)}`}></div>
            <span>MORE</span>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto pb-2">
          <div className="flex gap-1 min-w-max">
            {weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1">
                    {week.map((day, dIndex) => (
                        <div 
                            key={day.date.toISOString()}
                            className={`w-3 h-3 md:w-4 md:h-4 rounded-sm border transition-all duration-300 hover:scale-125 ${getColor(day.level)}`}
                            title={`${day.count} contributions on ${day.date.toLocaleDateString()}`}
                        ></div>
                    ))}
                </div>
            ))}
          </div>
      </div>
      <div className="mt-2 flex justify-between text-xs font-mono text-gray-500">
          <div>TOTAL_CONTRIBUTIONS: <span className="text-nexus-accent">482</span></div>
          <div>CURRENT_STREAK: <span className="text-white">12 DAYS</span></div>
      </div>
    </div>
  );
};

export default GithubHeatmap;