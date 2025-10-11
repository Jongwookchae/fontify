# Fontify - Farcaster 미니앱 퍼블리싱 가이드

## 📋 퍼블리싱 체크리스트

### 1. 도메인 선택 ✅
- 안정적인 도메인을 선택하세요 (예: fontify.yourdomain.com)
- 도메인은 나중에 변경할 수 없습니다
- 스킴(https://)이나 경로는 포함하지 마세요

### 2. 매니페스트 파일 준비 ✅
현재 프로젝트에 `public/.well-known/farcaster.json` 파일이 생성되어 있습니다.

**필수 수정 사항:**
다음 URL들을 실제 배포할 도메인으로 변경하세요:
- `your-domain.com` → 실제 도메인으로 변경

### 3. 필요한 이미지 준비 🎨

다음 이미지들을 `public/` 폴더에 추가해야 합니다:

#### 필수 이미지:
1. **icon.png** (앱 아이콘)
   - 권장 크기: 512x512px
   - 정사각형
   - PNG 형식

2. **splash.png** (스플래시 화면)
   - 권장 크기: 1200x1200px
   - 앱 로딩 시 표시
   - PNG 형식

3. **og-image.png** (Open Graph 이미지)
   - 권장 크기: 1200x630px
   - 소셜 공유 시 표시
   - PNG 형식

#### 선택 이미지 (권장):
4. **screenshot1.png, screenshot2.png, screenshot3.png**
   - 앱 스크린샷
   - 앱 스토어에 표시
   - 권장 크기: 750x1334px (세로)

### 4. 매니페스트 설정 확인

현재 `farcaster.json`에 설정된 내용:
```json
{
  "miniapp": {
    "version": "1",
    "name": "Fontify",
    "subtitle": "Fonts for Everyone",
    "description": "Transform your text into beautiful font styles...",
    "primaryCategory": "utilities",
    "tags": ["fonts", "text", "styling", "conversion", "design"]
  }
}
```

### 5. 두 가지 퍼블리싱 방법

#### 옵션 A: 직접 호스팅 (추천)
1. 이미지 파일들을 `public/` 폴더에 추가
2. `public/.well-known/farcaster.json`의 URL들을 실제 도메인으로 수정
3. 앱을 Vercel, Netlify 등에 배포
4. 배포된 URL에서 `https://your-domain.com/.well-known/farcaster.json` 접근 가능 확인

#### 옵션 B: Farcaster Hosted Manifests 사용
1. https://farcaster.xyz/~/developers/mini-apps/manifest 방문
2. 도메인과 앱 정보 입력
3. Hosted Manifest ID 받기
4. `next.config.js`에 리다이렉트 추가:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/YOUR_ID',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
```

### 6. 소유권 인증 (선택 사항)

소유권을 인증하면:
- ✅ 인증된 개발자 배지 획득
- 💰 Warpcast Developer Rewards 자격 획득

**인증 방법:**
1. https://farcaster.xyz/~/developers/new 방문
2. Farcaster 계정으로 로그인
3. 도메인 입력 및 서명
4. 생성된 `accountAssociation` 객체를 `farcaster.json`에 추가

### 7. 배포 전 테스트

```bash
# 개발 서버 실행
npm run dev

# 로컬에서 확인
http://localhost:3000/.well-known/farcaster.json
```

### 8. 배포

#### Vercel 배포 (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

#### 또는 Vercel 웹사이트 사용
1. https://vercel.com 방문
2. GitHub 저장소 연결
3. 자동 배포

### 9. 배포 후 확인사항

- [ ] `https://your-domain.com/.well-known/farcaster.json` 접근 가능
- [ ] 모든 이미지 URL 접근 가능
- [ ] 매니페스트 JSON 형식 유효성 검사
- [ ] Farcaster 클라이언트에서 앱 테스트

### 10. 앱 스토어 등록

배포가 완료되면:
1. Warpcast 또는 다른 Farcaster 클라이언트에서 앱 발견 가능
2. 자동으로 앱 스토어에 표시될 수 있음
3. 소유권 인증 시 Featured 섹션 진입 가능

## 📝 추가 정보

### 현재 앱 설정
- **앱 이름**: Fontify
- **태그라인**: Fonts for Everyone
- **카테고리**: Utilities
- **제작자**: @wookii
- **저작권**: © 2025 Fontify

### 지원하는 폰트 스타일 (10가지)
1. Normal
2. Underline
3. Strikethrough
4. Reverse
5. Upside Down
6. Wide
7. Bubble
8. Square
9. Old English
10. Outlined

### 필요한 작업 요약
1. ✅ 매니페스트 파일 생성 완료
2. 🎨 이미지 파일 준비 필요
3. 🌐 도메인 선택 필요
4. 🚀 배포 필요
5. ✍️ 소유권 인증 (선택)

## 🔗 유용한 링크

- [Farcaster Developer Portal](https://farcaster.xyz/~/developers)
- [Mini App Manifest Tool](https://farcaster.xyz/~/developers/mini-apps/manifest)
- [Warpcast Developer Rewards](https://farcaster.xyz/~/mini-apps/rewards)
- [Farcaster Docs](https://docs.farcaster.xyz)

## 💡 팁

1. **도메인 선택**: 짧고 기억하기 쉬운 도메인 추천
2. **이미지 최적화**: 파일 크기를 작게 유지하여 로딩 속도 향상
3. **테스트**: 배포 전 로컬에서 충분히 테스트
4. **업데이트**: 매니페스트 변경 시 캐시 고려 (최대 24시간 소요 가능)

## ❓ 문제 해결

### 매니페스트 파일이 보이지 않을 때
- Next.js 개발 서버 재시작
- 브라우저 캐시 삭제
- `public` 폴더 구조 확인

### 이미지가 표시되지 않을 때
- 이미지 경로 확인
- CORS 설정 확인
- 이미지 파일 형식 확인 (PNG 권장)

### 도메인 인증 실패
- 도메인 정확히 일치하는지 확인
- 스킴(https://)과 경로 제외
- 서브도메인 포함 여부 확인

