# 📍 이미지 파일 위치 가이드

## 이미지를 추가할 정확한 위치

모든 이미지 파일은 **`public/` 폴더**에 직접 추가하면 됩니다.

```
1011 cursor/
├── app/
├── utils/
├── public/              ← 여기에 이미지 추가!
│   ├── .well-known/
│   │   └── farcaster.json
│   ├── README.md
│   │
│   ├── icon.png         ← 여기에 추가
│   ├── splash.png       ← 여기에 추가
│   ├── og-image.png     ← 여기에 추가
│   ├── screenshot1.png  ← 여기에 추가 (선택)
│   ├── screenshot2.png  ← 여기에 추가 (선택)
│   └── screenshot3.png  ← 여기에 추가 (선택)
│
├── package.json
└── next.config.js
```

## 🎯 정확한 경로

Finder(파인더)에서:
```
/Users/chaejongwook/Desktop/1011 cursor/public/
```

이 폴더에 다음 파일들을 넣으면 됩니다:

### 필수 파일 (반드시 추가)
1. **icon.png** - 앱 아이콘
2. **splash.png** - 스플래시 화면
3. **og-image.png** - 소셜 공유 이미지

### 선택 파일 (권장)
4. **screenshot1.png** - 앱 스크린샷 1
5. **screenshot2.png** - 앱 스크린샷 2
6. **screenshot3.png** - 앱 스크린샷 3

## 📝 방법

### 방법 1: Finder 사용 (가장 쉬움)
1. Finder를 엽니다
2. 다음 경로로 이동: `/Users/chaejongwook/Desktop/1011 cursor/public/`
3. 준비한 이미지 파일들을 이 폴더에 드래그 앤 드롭

### 방법 2: 터미널 사용
```bash
# public 폴더로 이동
cd "/Users/chaejongwook/Desktop/1011 cursor/public/"

# 이미지 파일이 있는 위치에서 복사
cp /path/to/your/icon.png .
cp /path/to/your/splash.png .
cp /path/to/your/og-image.png .
```

### 방법 3: VS Code 사용
1. VS Code에서 왼쪽 Explorer 열기
2. `public` 폴더 찾기
3. 이미지 파일을 `public` 폴더로 드래그 앤 드롭

## ✅ 확인 방법

이미지를 추가한 후:

```bash
# 파일이 제대로 추가되었는지 확인
ls -la "/Users/chaejongwook/Desktop/1011 cursor/public/"
```

다음과 같이 보여야 합니다:
```
.well-known/
README.md
icon.png           ← ✅
splash.png         ← ✅
og-image.png       ← ✅
screenshot1.png    ← ✅ (선택)
screenshot2.png    ← ✅ (선택)
screenshot3.png    ← ✅ (선택)
```

## 🌐 웹에서 접근 가능한 URL

이미지를 `public/` 폴더에 추가하면, Next.js가 자동으로 다음 URL로 제공합니다:

- `public/icon.png` → `https://your-domain.com/icon.png`
- `public/splash.png` → `https://your-domain.com/splash.png`
- `public/og-image.png` → `https://your-domain.com/og-image.png`

## 🎨 이미지 요구사항 다시 확인

| 파일명 | 크기 | 형식 | 용도 |
|--------|------|------|------|
| icon.png | 512x512px | PNG | 앱 아이콘 |
| splash.png | 1200x1200px | PNG | 스플래시 화면 |
| og-image.png | 1200x630px | PNG | 소셜 공유 |
| screenshot1.png | 750x1334px | PNG | 스크린샷 (선택) |
| screenshot2.png | 750x1334px | PNG | 스크린샷 (선택) |
| screenshot3.png | 750x1334px | PNG | 스크린샷 (선택) |

## 🚀 다음 단계

1. ✅ 이미지를 `public/` 폴더에 추가
2. ⚙️ `public/.well-known/farcaster.json`에서 `your-domain.com`을 실제 도메인으로 변경
3. 🧪 로컬 테스트: `npm run dev`
4. 📱 브라우저에서 확인: `http://localhost:3000/icon.png`
5. 🚀 배포!

## 💡 팁

- 이미지 파일명은 **정확히** 위와 같아야 합니다 (대소문자 구분)
- 이미지는 **PNG 형식**을 권장합니다
- 파일 크기는 가능한 작게 유지 (최적화 권장)
- 이미지 품질은 높게 유지

## ❓ 문제 해결

### "이미지가 보이지 않아요"
- 파일명 확인 (대소문자 정확히)
- 파일 형식 확인 (PNG)
- 개발 서버 재시작: `npm run dev`

### "public 폴더를 찾을 수 없어요"
```bash
# public 폴더 생성
mkdir -p "/Users/chaejongwook/Desktop/1011 cursor/public"
```

---

**요약**: 이미지는 `public/` 폴더에 바로 넣으면 됩니다! 📁

