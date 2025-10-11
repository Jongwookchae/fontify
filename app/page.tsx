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

  // 텍스트 변환
  useEffect(() => {
    if (inputText) {
      setConvertedText(selectedFont.convert(inputText));
    } else {
      setConvertedText('');
    }
  }, [inputText, selectedFont]);

  // 복사 기능
  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      alert('복사에 실패했습니다.');
    }
  };

  // Farcaster 공유
  const handleShare = (text: string) => {
    const shareText = encodeURIComponent(text);
    const farcasterUrl = `https://warpcast.com/~/compose?text=${shareText}`;
    window.open(farcasterUrl, '_blank');
  };

  // 이모지 추가
  const addEmoji = (emoji: string) => {
    setInputText(prev => prev + emoji);
    setShowEmojis(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* 헤더 */}
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
              <p className="text-sm text-gray-600">Farcaster 폰트 변환기</p>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 입력 영역 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">텍스트 입력</h2>
          </div>
          
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="변환할 텍스트를 입력하세요..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none transition-colors"
              rows={4}
            />
            
            {/* 이모지 버튼 */}
            <button
              onClick={() => setShowEmojis(!showEmojis)}
              className="absolute bottom-4 right-4 p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
              title="이모지 추가"
            >
              <Smile className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          {/* 이모지 선택기 */}
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

        {/* 폰트 스타일 선택 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 fade-in">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">폰트 스타일</h2>
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

        {/* 미리보기 및 결과 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 fade-in">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">미리보기</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-4">
            <p
              className="break-words text-center text-lg"
              style={{
                minHeight: '60px',
              }}
            >
              {convertedText || '여기에 변환된 텍스트가 표시됩니다'}
            </p>
          </div>

          {/* 액션 버튼 */}
          {convertedText && (
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCopy(convertedText, -1)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl btn-hover font-medium"
              >
                {copiedIndex === -1 ? (
                  <>
                    <Check className="w-5 h-5" />
                    복사됨!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    복사하기
                  </>
                )}
              </button>
              
              <button
                onClick={() => handleShare(convertedText)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl btn-hover font-medium"
              >
                <Share2 className="w-5 h-5" />
                Farcaster에 공유
              </button>
            </div>
          )}
        </div>

        {/* 모든 스타일 미리보기 */}
        {inputText && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 fade-in">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              모든 스타일 미리보기
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
                        title="복사"
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
                        title="공유"
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

      {/* 푸터 */}
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

