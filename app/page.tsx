'use client';

import { useState, useEffect } from 'react';
import { 
  Copy, 
  Share2, 
  Check, 
  Sparkles, 
  Type,
  Smile
} from 'lucide-react';
import { 
  fontStyles, 
  emojiCategories,
  type FontStyle 
} from '@/utils/fontConverter';

export default function Home() {
  const [inputText, setInputText] = useState('Hello Farcaster!');
  const [selectedFont, setSelectedFont] = useState<FontStyle>(fontStyles[0]);
  const [convertedText, setConvertedText] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showEmojis, setShowEmojis] = useState(false);

  // Text conversion
  useEffect(() => {
    if (inputText) {
      setConvertedText(selectedFont.convert(inputText));
    } else {
      setConvertedText('');
    }
  }, [inputText, selectedFont]);

  // Copy function
  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      alert('Failed to copy to clipboard.');
    }
  };

  // Share on Farcaster
  const handleShare = (text: string) => {
    const shareText = encodeURIComponent(text);
    const farcasterUrl = `https://warpcast.com/~/compose?text=${shareText}`;
    window.open(farcasterUrl, '_blank');
  };

  // Add emoji
  const addEmoji = (emoji: string) => {
    setInputText(prev => prev + emoji);
    setShowEmojis(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Fontify
              </h1>
              <p className="text-sm text-gray-600">Font Converter for Farcaster</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Input Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">Text Input</h2>
          </div>
          
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to convert..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none transition-colors"
              rows={4}
            />
            
            {/* Emoji Button */}
            <button
              onClick={() => setShowEmojis(!showEmojis)}
              className="absolute bottom-4 right-4 p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
              title="Add Emoji"
            >
              <Smile className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          {/* Emoji Picker */}
          {showEmojis && (
            <div className="mt-4 p-4 bg-purple-50 rounded-xl fade-in">
              {Object.entries(emojiCategories).map(([category, emojis]) => (
                <div key={category} className="mb-3">
                  <p className="text-xs text-gray-600 mb-2 capitalize">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {emojis.map((emoji, index) => (
                      <button
                        key={index}
                        onClick={() => addEmoji(emoji)}
                        className="p-2 hover:bg-white rounded-lg transition-colors text-xl"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Font Style Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 fade-in">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Font Styles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {fontStyles.map((style) => (
              <button
                key={style.name}
                onClick={() => setSelectedFont(style)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedFont.name === style.name
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <p className="font-semibold text-sm mb-1">{style.displayName}</p>
                <p className="text-xs text-gray-600">{style.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Preview and Result */}
        <div className="bg-white rounded-2xl shadow-lg p-6 fade-in">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Preview</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-4">
            <p
              className="break-words text-center text-lg"
              style={{
                minHeight: '60px',
              }}
            >
              {convertedText || 'Your converted text will appear here'}
            </p>
          </div>

          {/* Action Buttons */}
          {convertedText && (
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCopy(convertedText, -1)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl btn-hover font-medium"
              >
                {copiedIndex === -1 ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy
                  </>
                )}
              </button>
              
              <button
                onClick={() => handleShare(convertedText)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl btn-hover font-medium"
              >
                <Share2 className="w-5 h-5" />
                Share on Farcaster
              </button>
            </div>
          )}
        </div>

        {/* All Styles Preview */}
        {inputText && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 fade-in">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              All Styles Preview
            </h2>
            <div className="space-y-4">
              {fontStyles.map((style, index) => {
                const converted = style.convert(inputText);
                return (
                  <div
                    key={style.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        {style.displayName}
                      </p>
                      <p className="break-words text-base">
                        {converted}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleCopy(converted, index)}
                        className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
                        title="Copy"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-purple-600" />
                        )}
                      </button>
                      <button
                        onClick={() => handleShare(converted)}
                        className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                        title="Share"
                      >
                        <Share2 className="w-5 h-5 text-blue-600" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">
            Made with ❤️ for Farcaster Community
          </p>
          <p className="text-xs mt-2">
            © 2024 Fontify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

