// 유니코드 기반 폰트 변환 유틸리티

export interface FontStyle {
  name: string;
  displayName: string;
  description: string;
  convert: (text: string) => string;
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

// 올드 잉글리쉬 스타일 (Medieval/Gothic 스타일 텍스트)
function oldEnglishText(text: string): string {
  const map: Record<string, string> = {
    'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ',
    'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓',
    'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛',
    'Y': '𝔜', 'Z': 'ℨ',
    'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥',
    'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭',
    'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵',
    'y': '𝔶', 'z': '𝔷',
  };
  
  return text.split('').map(char => map[char] || char).join('');
}

// 윤곽 텍스트 (Outlined/Hollow 스타일)
function outlinedText(text: string): string {
  const map: Record<string, string> = {
    'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗',
    'I': '🅘', 'J': '🅙', 'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟',
    'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣', 'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧',
    'Y': '🅨', 'Z': '🅩',
    'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗',
    'i': '🅘', 'j': '🅙', 'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟',
    'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧',
    'y': '🅨', 'z': '🅩',
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
  {
    name: 'oldEnglish',
    displayName: '올드 잉글리쉬',
    description: '중세 스타일',
    convert: oldEnglishText,
  },
  {
    name: 'outlined',
    displayName: '윤곽',
    description: '윤곽 텍스트',
    convert: outlinedText,
  },
];

// 이모지 및 특수문자 모음
export const emojiCategories = {
  symbols: ['✓', '✗', '✔️', '✖️', '◉', '●', '○', '◆', '◇', '★'],
  decorative: ['｡･:*:･ﾟ★', '✧･ﾟ', '♪', '♫', '☆', '✿', '❀', '✾', '✽', '❁'],
};

