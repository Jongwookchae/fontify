# 🚀 Fontify Deployment Checklist

## Pre-Deployment

### 1. 도메인 준비
- [ ] 도메인 선택 완료 (예: fontify.yourdomain.com)
- [ ] DNS 설정 준비

### 2. 이미지 파일 준비
- [ ] `public/icon.png` (512x512px)
- [ ] `public/splash.png` (1200x1200px)
- [ ] `public/og-image.png` (1200x630px)
- [ ] `public/screenshot1.png` (750x1334px) - Optional
- [ ] `public/screenshot2.png` (750x1334px) - Optional
- [ ] `public/screenshot3.png` (750x1334px) - Optional

### 3. 매니페스트 설정
- [ ] `public/.well-known/farcaster.json`에서 `your-domain.com`을 실제 도메인으로 변경
- [ ] 모든 이미지 URL 확인

### 4. 로컬 테스트
```bash
# 개발 서버 실행
npm run dev

# 브라우저에서 확인
http://localhost:3000
http://localhost:3000/.well-known/farcaster.json
```

- [ ] 앱 정상 작동 확인
- [ ] 매니페스트 파일 접근 확인
- [ ] 모든 폰트 스타일 테스트
- [ ] 복사 기능 테스트
- [ ] 공유 기능 테스트

## Deployment

### Option A: Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

- [ ] Vercel 계정 생성
- [ ] 프로젝트 배포
- [ ] 커스텀 도메인 연결
- [ ] HTTPS 활성화 확인

### Option B: Other Platform

- [ ] 플랫폼 선택 (Netlify, Railway, etc.)
- [ ] 빌드 명령어 설정: `npm run build`
- [ ] 시작 명령어 설정: `npm start`
- [ ] 환경 변수 설정 (필요시)
- [ ] 도메인 연결

## Post-Deployment

### 1. 배포 확인
- [ ] `https://your-domain.com` 접속 테스트
- [ ] `https://your-domain.com/.well-known/farcaster.json` 접근 확인
- [ ] 모든 이미지 URL 로드 확인
- [ ] 모바일에서 테스트
- [ ] 다양한 브라우저에서 테스트

### 2. Farcaster 통합

#### 직접 호스팅 방식:
- [ ] 매니페스트 파일이 공개적으로 접근 가능한지 확인
- [ ] JSON 형식이 올바른지 검증

#### Hosted Manifests 방식:
- [ ] https://farcaster.xyz/~/developers/mini-apps/manifest 방문
- [ ] 도메인과 앱 정보 입력
- [ ] Hosted Manifest ID 받기
- [ ] `next.config.js`에 리다이렉트 추가
- [ ] 재배포

### 3. 소유권 인증 (선택사항 - 권장)

- [ ] https://farcaster.xyz/~/developers/new 방문
- [ ] Farcaster 계정으로 로그인
- [ ] 도메인 입력
- [ ] 서명 생성
- [ ] `accountAssociation` 객체를 `farcaster.json`에 추가
- [ ] 재배포

**혜택:**
- ✅ 인증 개발자 배지
- 💰 Warpcast Developer Rewards 자격

### 4. 최종 테스트

- [ ] Warpcast에서 앱 검색
- [ ] 앱 실행 테스트
- [ ] 모든 기능 작동 확인
- [ ] 공유 기능 테스트
- [ ] 다른 Farcaster 클라이언트에서 테스트

## Monitoring

### 사용자 피드백
- [ ] 소셜 미디어 모니터링
- [ ] 버그 리포트 수집
- [ ] 기능 요청 확인

### 성능 모니터링
- [ ] 로딩 속도 확인
- [ ] 에러 로그 확인
- [ ] 사용자 분석 설정 (선택사항)

## Updates & Maintenance

### 정기 업데이트
- [ ] 새로운 폰트 스타일 추가 계획
- [ ] UI/UX 개선
- [ ] 성능 최적화
- [ ] 보안 업데이트

### 매니페스트 업데이트
- [ ] 스크린샷 업데이트
- [ ] 설명 개선
- [ ] 새로운 기능 추가 시 매니페스트 수정

## Troubleshooting

### 일반적인 문제

**매니페스트 파일이 보이지 않음:**
- Next.js 개발 서버 재시작
- 빌드 후 재배포
- 브라우저 캐시 삭제

**이미지가 로드되지 않음:**
- 이미지 경로 확인
- 파일 이름 대소문자 확인
- CORS 설정 확인

**앱이 Farcaster에 나타나지 않음:**
- 매니페스트 캐시 시간 대기 (최대 24시간)
- JSON 형식 검증
- 도메인 설정 확인

## Resources

- 📚 [Full Publishing Guide](./PUBLISHING_GUIDE.md)
- 📁 [Image Requirements](./public/README.md)
- 🔧 [Farcaster Developer Portal](https://farcaster.xyz/~/developers)
- 💬 [Farcaster Discord](https://discord.gg/farcaster)

## Quick Commands

```bash
# 로컬 개발
npm run dev

# 프로덕션 빌드
npm run build
npm start

# Vercel 배포
vercel --prod

# 린트 체크
npm run lint
```

---

**현재 상태:** 🟡 Development
**다음 단계:** 이미지 준비 → 도메인 설정 → 배포

**제작:** Made by @wookii for Farcaster Community

