
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { exercises } from '@/data/exercises';

const WorkoutForm: React.FC = () => {
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string>('');

  const handleAddExercise = () => {
    if (selectedExercise && !selectedExercises.includes(selectedExercise)) {
      setSelectedExercises([...selectedExercises, selectedExercise]);
      setSelectedExercise('');
    }
  };

  const handleRemoveExercise = (exerciseId: string) => {
    setSelectedExercises(selectedExercises.filter(id => id !== exerciseId));
  };

  const getExerciseName = (id: string) => {
    const exercise = exercises.find(ex => ex.id === id);
    return exercise ? exercise.name : 'Unknown Exercise';
  };

  return (
    <Card className="fitlog-card">
      <CardHeader>
        <CardTitle>Start New Workout</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="workout-name">Workout Name</Label>
            <Input 
              id="workout-name" 
              placeholder="e.g., Upper Body Strength" 
              className="w-full" 
            />
          </div>

          <div className="space-y-2">
            <Label>Select Exercises</Label>
            <div className="flex space-x-2">
              <Select value={selectedExercise} onValueChange={setSelectedExercise}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose an exercise" />
                </SelectTrigger>
                <SelectContent>
                  {exercises.map((exercise) => (
                    <SelectItem key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button 
                type="button" 
                variant="outline"
                className="whitespace-nowrap"
                onClick={handleAddExercise}
              >
                Add
              </Button>
            </div>
          </div>

          {selectedExercises.length > 0 && (
            <div className="space-y-2">
              <Label>Selected Exercises</Label>
              <div className="flex flex-wrap gap-2">
                {selectedExercises.map((exerciseId) => (
                  <Badge 
                    key={exerciseId}
                    variant="secondary"
                    className="px-2 py-1 flex items-center gap-1"
                  >
                    {getExerciseName(exerciseId)}
                    <button 
                      type="button"
                      className="ml-1 hover:text-red-500"
                      onClick={() => handleRemoveExercise(exerciseId)}
                    >
                      &times;
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-fitlog-purple hover:bg-fitlog-purple-dark"
          >
            Start Workout
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WorkoutForm;
