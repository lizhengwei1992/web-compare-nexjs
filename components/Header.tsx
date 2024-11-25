"use client";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isLoading: boolean;
  onUploadClick: () => void;
}

export default function Header({ isLoading, onUploadClick }: HeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-2 p-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg shadow-sm">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Image-Text-Match Compare
        </h1>
      </div>
      <Button 
        onClick={onUploadClick}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-full sm:w-auto py-0 px-2 text-sm"
        disabled={isLoading}
      >
        <Upload className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        {isLoading ? 'Loading...' : 'Upload JSON'}
      </Button>
    </div>
  );
}
