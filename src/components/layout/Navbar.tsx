
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fitlog-purple to-fitlog-orange flex items-center justify-center">
            <span className="font-bold text-white">FL</span>
          </div>
          <h1 className="text-2xl font-bold gradient-text">FitLog</h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="font-medium text-gray-600 hover:text-fitlog-purple transition-colors">Dashboard</a>
          <a href="#" className="font-medium text-gray-600 hover:text-fitlog-purple transition-colors">Workouts</a>
          <a href="#" className="font-medium text-gray-600 hover:text-fitlog-purple transition-colors">Exercises</a>
          <a href="#" className="font-medium text-gray-600 hover:text-fitlog-purple transition-colors">Progress</a>
        </div>
        
        <div>
          <Button variant="default" className="bg-fitlog-purple hover:bg-fitlog-purple-dark">
            Start Workout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
