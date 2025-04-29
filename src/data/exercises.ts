
export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility';
  muscleGroups: string[];
  equipment?: string;
}

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Bench Press',
    category: 'strength',
    muscleGroups: ['chest', 'triceps', 'shoulders'],
    equipment: 'Barbell, Bench'
  },
  {
    id: '2',
    name: 'Squat',
    category: 'strength',
    muscleGroups: ['quadriceps', 'hamstrings', 'glutes'],
    equipment: 'Barbell, Rack'
  },
  {
    id: '3',
    name: 'Deadlift',
    category: 'strength',
    muscleGroups: ['back', 'glutes', 'hamstrings'],
    equipment: 'Barbell'
  },
  {
    id: '4',
    name: 'Pull-Up',
    category: 'strength',
    muscleGroups: ['back', 'biceps', 'shoulders'],
    equipment: 'Pull-up Bar'
  },
  {
    id: '5',
    name: 'Treadmill Run',
    category: 'cardio',
    muscleGroups: ['quadriceps', 'hamstrings', 'calves'],
    equipment: 'Treadmill'
  },
  {
    id: '6',
    name: 'Plank',
    category: 'strength',
    muscleGroups: ['core', 'shoulders'],
    equipment: 'None'
  },
  {
    id: '7',
    name: 'Shoulder Press',
    category: 'strength',
    muscleGroups: ['shoulders', 'triceps'],
    equipment: 'Dumbbells, Barbell'
  },
  {
    id: '8',
    name: 'Bicep Curl',
    category: 'strength',
    muscleGroups: ['biceps', 'forearms'],
    equipment: 'Dumbbells, Barbell'
  }
];
