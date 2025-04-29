
import React from 'react';
import { Exercise } from '@/data/exercises';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExerciseItemProps {
  exercise: Exercise;
  onClick?: () => void;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise, onClick }) => {
  // Define color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'strength': return 'bg-fitlog-purple text-white';
      case 'cardio': return 'bg-fitlog-orange text-white';
      case 'flexibility': return 'bg-blue-500 text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <Card 
      className="fitlog-card cursor-pointer hover:border hover:border-fitlog-purple transition-all"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{exercise.name}</CardTitle>
          <Badge className={getCategoryColor(exercise.category)}>
            {exercise.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-2">
          {exercise.muscleGroups.map((muscle) => (
            <Badge key={muscle} variant="outline" className="text-xs capitalize">
              {muscle}
            </Badge>
          ))}
        </div>
        {exercise.equipment && (
          <p className="text-sm text-muted-foreground mt-1">
            Equipment: {exercise.equipment}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ExerciseItem;
