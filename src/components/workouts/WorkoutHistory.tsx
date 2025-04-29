
import React from 'react';
import { Workout } from '@/data/workouts';
import { exercises } from '@/data/exercises';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface WorkoutHistoryProps {
  workouts: Workout[];
}

const WorkoutHistory: React.FC<WorkoutHistoryProps> = ({ workouts }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getExerciseName = (id: string) => {
    const exercise = exercises.find(ex => ex.id === id);
    return exercise ? exercise.name : 'Unknown Exercise';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Recent Workouts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workouts.map((workout) => (
          <Card key={workout.id} className="fitlog-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {formatDate(workout.date)}
                  </p>
                  <CardTitle className="text-xl">{workout.name}</CardTitle>
                </div>
                <Badge className="bg-fitlog-purple">
                  {workout.duration} min
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {workout.exercises.map((exercise) => (
                    <Badge 
                      key={exercise.exerciseId} 
                      variant="outline"
                      className="text-xs"
                    >
                      {getExerciseName(exercise.exerciseId)}
                    </Badge>
                  ))}
                </div>
                {workout.notes && (
                  <p className="text-sm text-muted-foreground italic">
                    "{workout.notes}"
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkoutHistory;
