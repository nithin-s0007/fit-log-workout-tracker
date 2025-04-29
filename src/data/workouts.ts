
export interface WorkoutSet {
  weight?: number;
  reps?: number;
  time?: number; // in seconds
  distance?: number; // in meters
  completed: boolean;
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: WorkoutSet[];
  notes?: string;
}

export interface Workout {
  id: string;
  date: string;
  name: string;
  exercises: WorkoutExercise[];
  duration: number; // in minutes
  notes?: string;
}

export const sampleWorkouts: Workout[] = [
  {
    id: '1',
    date: '2025-04-25',
    name: 'Upper Body Strength',
    exercises: [
      {
        exerciseId: '1', // Bench Press
        sets: [
          { weight: 135, reps: 12, completed: true },
          { weight: 155, reps: 10, completed: true },
          { weight: 175, reps: 8, completed: true },
        ]
      },
      {
        exerciseId: '4', // Pull-Up
        sets: [
          { reps: 10, completed: true },
          { reps: 8, completed: true },
          { reps: 6, completed: true },
        ]
      },
      {
        exerciseId: '7', // Shoulder Press
        sets: [
          { weight: 95, reps: 10, completed: true },
          { weight: 105, reps: 8, completed: true },
          { weight: 115, reps: 6, completed: true },
        ]
      }
    ],
    duration: 65,
    notes: 'Felt strong on bench press today!'
  },
  {
    id: '2',
    date: '2025-04-27',
    name: 'Lower Body Power',
    exercises: [
      {
        exerciseId: '2', // Squat
        sets: [
          { weight: 185, reps: 10, completed: true },
          { weight: 205, reps: 8, completed: true },
          { weight: 225, reps: 6, completed: true },
        ]
      },
      {
        exerciseId: '3', // Deadlift
        sets: [
          { weight: 225, reps: 8, completed: true },
          { weight: 275, reps: 6, completed: true },
          { weight: 315, reps: 4, completed: true },
        ],
        notes: 'New PR on deadlift!'
      }
    ],
    duration: 55
  },
  {
    id: '3',
    date: '2025-04-28',
    name: 'Cardio & Core',
    exercises: [
      {
        exerciseId: '5', // Treadmill Run
        sets: [
          { time: 1800, distance: 5000, completed: true }
        ],
        notes: '5K in 30 minutes'
      },
      {
        exerciseId: '6', // Plank
        sets: [
          { time: 60, completed: true },
          { time: 45, completed: true },
          { time: 30, completed: true }
        ]
      }
    ],
    duration: 45,
    notes: 'Good cardio session, felt tired after running'
  }
];
