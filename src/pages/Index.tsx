
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import DashboardStats from '@/components/dashboard/DashboardStats';
import WorkoutForm from '@/components/workouts/WorkoutForm';
import WorkoutHistory from '@/components/workouts/WorkoutHistory';
import ExerciseItem from '@/components/workouts/ExerciseItem';
import { sampleWorkouts } from '@/data/workouts';
import { exercises } from '@/data/exercises';

const Index: React.FC = () => {
  // Get a subset of exercises to display
  const featuredExercises = exercises.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to FitLog</h1>
          <p className="text-gray-600">Track your fitness journey and crush your goals</p>
        </div>
        
        <div className="mb-8">
          <DashboardStats />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WorkoutHistory workouts={sampleWorkouts} />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Featured Exercises</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredExercises.map((exercise) => (
                  <ExerciseItem key={exercise.id} exercise={exercise} />
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <WorkoutForm />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fitlog-purple to-fitlog-orange flex items-center justify-center">
                <span className="font-bold text-white">FL</span>
              </div>
              <span className="font-bold gradient-text">FitLog</span>
            </div>
            <div className="text-sm text-gray-500">
              &copy; 2025 FitLog. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
