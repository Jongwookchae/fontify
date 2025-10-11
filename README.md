# 🎨 Fontify - Farcaster 폰트 변환기

Farcaster를 위한 강력하고 사용하기 쉬운 폰트 변환 미니앱입니다. 다양한 폰트 스타일로 텍스트를 변환하고 Farcaster에 바로 공유할 수 있습니다.

## ✨ 주요 기능

- **🔤 16가지 폰트 스타일**: 볼드, 이탤릭, 필기체, 고딕체, 모노스페이스 등 다양한 스타일
- **🎨 색상 커스터마이징**: 8가지 색상 옵션으로 텍스트 꾸미기
- **📏 크기 조절**: 4가지 크기 옵션 제공
- **😊 이모지 & 특수문자**: 하트, 별, 화살표 등 50개 이상의 이모지
- **📋 원클릭 복사**: 변환된 텍스트를 클릭 한 번으로 복사
- **🚀 Farcaster 공유**: Warpcast에 바로 공유하기
- **📱 반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **⚡ 실시간 미리보기**: 입력하는 즉시 모든 스타일 확인

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 앱을 확인하세요.

## 🎯 사용 방법

1. **텍스트 입력**: 상단 입력창에 변환할 텍스트를 입력합니다
2. **스타일 선택**: 원하는 폰트 스타일을 선택합니다
3. **커스터마이징**: 색상과 크기를 조정합니다
4. **이모지 추가**: 😊 버튼을 클릭하여 이모지를 추가합니다
5. **미리보기**: 변환된 텍스트를 실시간으로 확인합니다
6. **복사 또는 공유**: 복사 버튼으로 클립보드에 복사하거나 Farcaster에 바로 공유합니다

## 📋 폰트 스타일 목록

| 스타일 | 설명 | 예시 |
|--------|------|------|
| 일반 | 기본 텍스트 | Hello |
| 볼드 | 굵은 글씨 | 𝐇𝐞𝐥𝐥𝐨 |
| 이탤릭 | 기울임 글씨 | 𝐻𝑒𝑙𝑙𝑜 |
| 볼드 이탤릭 | 굵은 기울임 | 𝑯𝒆𝒍𝒍𝒐 |
| 필기체 | 손글씨 스타일 | 𝓗𝓮𝓵𝓵𝓸 |
| 고딕체 | 클래식 스타일 | ℌ𝔢𝔩𝔩𝔬 |
| 고정폭 | 코드 스타일 | 𝙷𝚎𝚕𝚕𝚘 |
| 더블 라인 | 이중선 스타일 | ℍ𝕖𝕝𝕝𝕠 |
| 산세리프 | 깔끔한 스타일 | 𝖧𝖾𝗅𝗅𝗈 |
| 밑줄 | 밑줄 효과 | H̲e̲l̲l̲o̲ |
| 취소선 | 취소선 효과 | H̶e̶l̶l̶o̶ |
| 뒤집기 | 좌우 반전 | olleH |
| 거꾸로 | 상하 반전 | oллǝH |
| 넓게 | 전각 문자 | Ｈｅｌｌｏ |
| 버블 | 동그라미 효과 | Ⓗⓔⓛⓛⓞ |
| 사각형 | 네모 효과 | 🄷🄴🄻🄻🄾 |

## 🛠️ 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font Conversion**: Unicode Character Mapping

## 📱 호환성

- ✅ Chrome/Edge (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (iOS/macOS)
- ✅ 모바일 브라우저

## 🎨 디자인 특징

- 모던하고 직관적인 UI/UX
- 부드러운 애니메이션과 전환 효과
- 접근성을 고려한 디자인
- 다크 모드 지원 준비

## 🚀 배포

### Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 빌드

```bash
npm run build
npm run start
```

## 🤝 기여하기

기여는 언제나 환영합니다! 다음 단계를 따라주세요:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 향후 개발 계획

- [ ] 더 많은 폰트 스타일 추가
- [ ] 폰트 조합 추천 기능
- [ ] 사용자 즐겨찾기 기능
- [ ] 히스토리 기능
- [ ] 다국어 지원 (영어, 한국어)
- [ ] PWA 지원
- [ ] 다크 모드
- [ ] 커스텀 폰트 업로드

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👥 제작자

Made with ❤️ for Farcaster Community

## 🔗 링크

- [Farcaster](https://www.farcaster.xyz/)
- [Warpcast](https://warpcast.com/)

---

**Fontify**로 당신의 Farcaster 게시물을 더욱 특별하게 만들어보세요! ✨


# fontify
