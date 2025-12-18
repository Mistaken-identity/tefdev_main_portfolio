import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Skill } from '../types';

interface SkillsChartProps {
  skills: Skill[];
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills }) => {
  // Transform data for Radar Chart
  // We'll aggregate max level per category or just list top skills
  // For visual clarity, let's pick 6 key distinct skills
  const chartData = skills.slice(0, 6).map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <div className="h-[300px] w-full text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Level"
            dataKey="A"
            stroke="#00f0ff"
            strokeWidth={2}
            fill="#00f0ff"
            fillOpacity={0.2}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#11111e', borderColor: '#333', color: '#fff' }}
            itemStyle={{ color: '#00f0ff' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
