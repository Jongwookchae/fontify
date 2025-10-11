// 유니코드 기반 폰트 변환 유틸리티

export interface FontStyle {
  name: string;
  displayName: string;
  description: string;
  convert: (text: string) => string;
}

// 유니코드 폰트 매핑
const fontMaps = {
  // 볼드 (Mathematical Bold)
  bold: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D400 + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D41A + i);
      return acc;
    }, {} as Record<string, string>),
    numbers: '0123456789'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D7CE + i);
      return acc;
    }, {} as Record<string, string>),
  },
  
  // 이탤릭 (Mathematical Italic)
  italic: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D434 + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D44E + i);
      return acc;
    }, {} as Record<string, string>),
  },
  
  // 볼드 이탤릭
  boldItalic: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D468 + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D482 + i);
      return acc;
    }, {} as Record<string, string>),
  },
  
  // 필기체 (Mathematical Script)
  script: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D49C + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D4B6 + i);
      return acc;
    }, {} as Record<string, string>),
  },
  
  // 고딕체 (Fraktur)
  fraktur: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D504 + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D51E + i);
      return acc;
    }, {} as Record<string, string>),
  },
  
  // 모노스페이스 (Monospace)
  monospace: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D670 + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D68A + i);
      return acc;
    }, {} as Record<string, string>),
    numbers: '0123456789'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D7F6 + i);
      return acc;
    }, {} as Record<string, string>),
  },
  
  // 더블 스트럭 (Double-struck)
  doubleStruck: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D538 + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D552 + i);
      return acc;
    }, {} as Record<string, string>),
    numbers: '0123456789'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D7D8 + i);
      return acc;
    }, {} as Record<string, string>),
  },
  
  // Sans-serif
  sansSerif: {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D5A0 + i);
      return acc;
    }, {} as Record<string, string>),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D5BA + i);
      return acc;
    }, {} as Record<string, string>),
    numbers: '0123456789'.split('').reduce((acc, char, i) => {
      acc[char] = String.fromCharCode(0x1D7E2 + i);
      return acc;
    }, {} as Record<string, string>),
  },
};

// 텍스트 변환 함수
function convertText(text: string, fontMap: any): string {
  return text.split('').map(char => {
    if (fontMap.uppercase && fontMap.uppercase[char]) {
      return fontMap.uppercase[char];
    }
    if (fontMap.lowercase && fontMap.lowercase[char]) {
      return fontMap.lowercase[char];
    }
    if (fontMap.numbers && fontMap.numbers[char]) {
      return fontMap.numbers[char];
    }
    return char;
  }).join('');
}

// 특수 효과 함수들
function addUnderline(text: string): string {
  return text.split('').map(char => char + '\u0332').join('');
}

function addStrikethrough(text: string): string {
  return text.split('').map(char => char + '\u0336').join('');
}

function reverseText(text: string): string {
  return text.split('').reverse().join('');
}

function upsideDown(text: string): string {
  const map: Record<string, string> = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
    'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
    'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
    'y': 'ʎ', 'z': 'z',
    'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H',
    'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ',
    'Q': 'Q', 'R': 'ɹ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
    'Y': '⅄', 'Z': 'Z',
    '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ',
    '8': '8', '9': '6',
    '?': '¿', '!': '¡', '.': '˙', ',': '\'', '\'': ',',
  };
  
  return text.split('').reverse().map(char => map[char] || char).join('');
}

function wideText(text: string): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 33 && code <= 126) {
      return String.fromCharCode(code + 0xFEE0);
    }
    if (code === 32) {
      return '\u3000'; // 전각 스페이스
    }
    return char;
  }).join('');
}

function bubbleText(text: string): string {
  const map: Record<string, string> = {
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ',
    'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ',
    'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ',
    'y': 'ⓨ', 'z': 'ⓩ',
    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ',
    'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ',
    'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ',
    'Y': 'Ⓨ', 'Z': 'Ⓩ',
    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦',
    '8': '⑧', '9': '⑨',
  };
  
  return text.split('').map(char => map[char] || char).join('');
}

function squareText(text: string): string {
  const map: Record<string, string> = {
    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷',
    'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿',
    'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇',
    'y': '🅈', 'z': '🅉',
    'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷',
    'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾', 'P': '🄿',
    'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇',
    'Y': '🅈', 'Z': '🅉',
  };
  
  return text.split('').map(char => map[char] || char).join('');
}

// 폰트 스타일 정의
export const fontStyles: FontStyle[] = [
  {
    name: 'normal',
    displayName: '일반',
    description: '기본 텍스트',
    convert: (text: string) => text,
  },
  {
    name: 'bold',
    displayName: '볼드',
    description: '굵은 글씨',
    convert: (text: string) => convertText(text, fontMaps.bold),
  },
  {
    name: 'italic',
    displayName: '이탤릭',
    description: '기울임 글씨',
    convert: (text: string) => convertText(text, fontMaps.italic),
  },
  {
    name: 'boldItalic',
    displayName: '볼드 이탤릭',
    description: '굵은 기울임',
    convert: (text: string) => convertText(text, fontMaps.boldItalic),
  },
  {
    name: 'script',
    displayName: '필기체',
    description: '손글씨 스타일',
    convert: (text: string) => convertText(text, fontMaps.script),
  },
  {
    name: 'fraktur',
    displayName: '고딕체',
    description: '클래식 스타일',
    convert: (text: string) => convertText(text, fontMaps.fraktur),
  },
  {
    name: 'monospace',
    displayName: '고정폭',
    description: '코드 스타일',
    convert: (text: string) => convertText(text, fontMaps.monospace),
  },
  {
    name: 'doubleStruck',
    displayName: '더블 라인',
    description: '이중선 스타일',
    convert: (text: string) => convertText(text, fontMaps.doubleStruck),
  },
  {
    name: 'sansSerif',
    displayName: '산세리프',
    description: '깔끔한 스타일',
    convert: (text: string) => convertText(text, fontMaps.sansSerif),
  },
  {
    name: 'underline',
    displayName: '밑줄',
    description: '밑줄 효과',
    convert: addUnderline,
  },
  {
    name: 'strikethrough',
    displayName: '취소선',
    description: '취소선 효과',
    convert: addStrikethrough,
  },
  {
    name: 'reverse',
    displayName: '뒤집기',
    description: '좌우 반전',
    convert: reverseText,
  },
  {
    name: 'upsideDown',
    displayName: '거꾸로',
    description: '상하 반전',
    convert: upsideDown,
  },
  {
    name: 'wide',
    displayName: '넓게',
    description: '전각 문자',
    convert: wideText,
  },
  {
    name: 'bubble',
    displayName: '버블',
    description: '동그라미 효과',
    convert: bubbleText,
  },
  {
    name: 'square',
    displayName: '사각형',
    description: '네모 효과',
    convert: squareText,
  },
];

// 이모지 및 특수문자 모음
export const emojiCategories = {
  hearts: ['❤️', '💕', '💖', '💗', '💓', '💞', '💝', '♥️', '❣️', '💘'],
  stars: ['⭐', '🌟', '✨', '💫', '⚡', '🔥', '💥', '✴️', '🌠', '🎆'],
  arrows: ['→', '←', '↑', '↓', '↔', '↕', '➡️', '⬅️', '⬆️', '⬇️'],
  symbols: ['✓', '✗', '✔️', '✖️', '◉', '●', '○', '◆', '◇', '★'],
  decorative: ['｡･:*:･ﾟ★', '✧･ﾟ', '♪', '♫', '☆', '✿', '❀', '✾', '✽', '❁'],
};

