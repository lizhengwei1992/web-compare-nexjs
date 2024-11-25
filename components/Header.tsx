"use client";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isLoading: boolean;
  onUploadClick: () => void;
}

export default function Header({ isLoading, onUploadClick }: HeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border shadow-sm">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Compare
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Developed by <span className="font-semibold">zhengwei.li</span>
        </p>
      </div>
      <Button 
        onClick={onUploadClick}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-full sm:w-auto"
        disabled={isLoading}
      >
        <Upload className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        {isLoading ? 'Loading...' : 'Upload JSON'}
      </Button>
    </div>
  );
}