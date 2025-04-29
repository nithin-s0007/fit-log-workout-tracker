
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: JSX.Element;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, icon }) => {
  return (
    <Card className="fitlog-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-fitlog-purple">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

const WeeklyProgress: React.FC = () => {
  const progress = 60; // percentage

  return (
    <Card className="fitlog-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Weekly Goal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">3 of 5 workouts</div>
        <div className="mt-2">
          <Progress value={progress} className="h-2" />
        </div>
        <p className="text-xs text-muted-foreground mt-2">2 more workouts to reach your goal</p>
      </CardContent>
    </Card>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="Workouts This Week"
        value="3"
        description="Up 20% from last week"
      />
      <StatsCard
        title="Total Workout Time"
        value="165 mins"
        description="This week"
      />
      <StatsCard
        title="Volume Lifted"
        value="12,450 lbs"
        description="Total weight this week"
      />
      <WeeklyProgress />
    </div>
  );
};

export default DashboardStats;
