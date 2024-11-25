'use client';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ImageGrid from '@/components/ImageGrid';
import { ThemeData } from '@/lib/types';
import { ImageIcon } from 'lucide-react';

interface ThemeCardProps {
  theme: ThemeData;
}
export default function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Theme {theme.theme_id}
            </h2>
          </div>
          <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
            <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50">
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {theme.theme}
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                GPT4V Images
              </h3>
              <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                {theme.gpt4v.length} images
              </span>
            </div>
            <ImageGrid images={theme.gpt4v} />
          </div>
          <Separator className="!my-6" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                My Images
              </h3>
              <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                {theme.my.length} images
              </span>
            </div>
            <ImageGrid images={theme.my} />
          </div>
        </div>
      </div>
    </Card>
  );
}
