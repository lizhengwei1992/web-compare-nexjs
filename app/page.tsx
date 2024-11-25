"use client";

import { useState, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { ImageIcon } from "lucide-react";
import { ThemeData } from "@/lib/types";
import Header from "@/components/Header";
import ThemeCard from "@/components/ThemeCard";

export default function Home() {
  const [themes, setThemes] = useState<ThemeData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid JSON format: expected an array');
      }

      setThemes(data.sort((a: ThemeData, b: ThemeData) => 
        parseInt(a.theme_id) - parseInt(b.theme_id)
      ));

      toast({
        title: "Success",
        description: `Loaded ${data.length} themes successfully`,
      });

      if (event.target) {
        event.target.value = '';
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      toast({
        title: "Error",
        description: "Failed to parse JSON file. Please check the file format.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen from-gray-900 via-gray-100 to-gray-900 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700">
      <div className="container mx-auto px-4 py-8">
        <Header isLoading={isLoading} onUploadClick={handleButtonClick} />
        
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          onChange={handleFileUpload}
          className="hidden"
          disabled={isLoading}
        />

        <ScrollArea className="h-[calc(100vh-12rem)] rounded-lg border bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
          <div className="p-6 space-y-8">
            {themes.map((theme) => (
              <ThemeCard key={theme.theme_id} theme={theme} />
            ))}
            
            {themes.length === 0 && (
              <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  No Themes Loaded
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  Upload a JSON file to start comparing image sets. The file should contain theme data with GPT4V and custom images.
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
