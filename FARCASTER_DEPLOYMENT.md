# Farcaster 앱 배포 가이드

## 🚀 배포 단계별 가이드

### 1단계: Vercel 배포

#### 1.1 Vercel에 배포하기
```bash
# 방법 1: Vercel CLI 사용 (권장)
npm install -g vercel
vercel

# 방법 2: Vercel 웹사이트 사용
# https://vercel.com 접속 > GitHub 연동 > 프로젝트 import
```

#### 1.2 배포 확인
- 배포 완료 후 Vercel 도메인 확인 (예: `fontify-abc123.vercel.app`)
- 메인 페이지가 정상 작동하는지 확인

---

### 2단계: Farcaster JSON 설정 업데이트

배포된 도메인으로 `public/.well-known/farcaster.json` 파일 수정:

```bash
# YOUR_VERCEL_DOMAIN을 실제 도메인으로 교체
# 예: fontify-abc123.vercel.app
```

**수정할 부분:**
1. `YOUR_VERCEL_DOMAIN` → 실제 Vercel 도메인으로 교체
2. Git에 커밋 후 푸시:
   ```bash
   git add .
   git commit -m "Update Farcaster config with actual domain"
   git push
   ```
3. Vercel에서 자동으로 재배포됨

---

### 3단계: 필수 URL 확인

배포 후 다음 URL들이 정상 작동하는지 확인:

#### ✅ 체크리스트
- [ ] 메인 페이지: `https://YOUR_VERCEL_DOMAIN`
- [ ] Farcaster JSON: `https://YOUR_VERCEL_DOMAIN/.well-known/farcaster.json`
- [ ] 아이콘: `https://YOUR_VERCEL_DOMAIN/icon-1024.png`
- [ ] OG 이미지: `https://YOUR_VERCEL_DOMAIN/og.png`
- [ ] 스플래시 이미지: `https://YOUR_VERCEL_DOMAIN/splash-200.png`

**테스트 방법:**
```bash
# 브라우저에서 각 URL 직접 접속하여 확인
# 또는 curl로 테스트
curl https://YOUR_VERCEL_DOMAIN/.well-known/farcaster.json
```

---

### 4단계: Farcaster에 앱 등록

#### 4.1 Warpcast에서 미니앱 제출
1. Warpcast 앱 또는 웹 접속
2. 개발자 포털 이동: https://warpcast.com/~/developers
3. "Submit Mini App" 또는 "New Mini App" 클릭
4. 앱 URL 입력: `https://YOUR_VERCEL_DOMAIN`

#### 4.2 앱 정보 확인
시스템이 자동으로 `.well-known/farcaster.json` 파일을 읽어서 다음 정보를 가져옵니다:
- ✨ 앱 이름: Fontify
- 🎨 아이콘 (1024x1024)
- 🖼️ 스플래시 이미지 (200x200)
- 📝 설명 및 태그

#### 4.3 제출 및 검토
- "Submit for Review" 클릭
- Farcaster 팀의 검토 대기 (보통 1-3일)
- 승인되면 Farcaster 앱 디렉토리에 등록됨

---

### 5단계: 배포 후 확인사항

#### 성능 최적화
- [ ] 이미지 파일 크기 확인 (아이콘 < 500KB 권장)
- [ ] 페이지 로딩 속도 테스트
- [ ] 모바일 반응형 확인

#### SEO 및 공유
- [ ] OG 태그 정상 작동 확인 (소셜 미디어 공유 시)
- [ ] 메타 태그 설정 확인

#### 버전 관리
- [ ] `farcaster.json`의 version 필드 관리
- [ ] 업데이트 시 버전 증가

---

## 📋 Quick Start Commands

```bash
# 1. 로컬 테스트
npm run dev

# 2. 빌드 테스트
npm run build
npm start

# 3. Vercel 배포
vercel

# 4. 프로덕션 배포
vercel --prod
```

---

## 🔧 문제 해결

### JSON 파일이 안 보이는 경우
```bash
# Next.js 설정 확인
# next.config.js에 static file 설정 있는지 확인
```

### 이미지가 로드되지 않는 경우
- public 폴더에 파일이 있는지 확인
- 파일명이 정확한지 확인 (대소문자 구분)
- Vercel 배포 후 파일이 포함되었는지 확인

### 도메인 변경 필요시
1. `farcaster.json` 수정
2. Git 커밋 & 푸시
3. Vercel 자동 재배포 확인
4. Farcaster에 업데이트 알림 (필요시)

---

## 📞 지원

- Farcaster 개발자 문서: https://docs.farcaster.xyz/
- Warpcast 개발자: https://warpcast.com/~/developers
- Vercel 문서: https://vercel.com/docs

---

## ✅ 현재 상태

- [x] Next.js 앱 개발 완료
- [x] 이미지 파일 준비 완료
  - icon-1024.png ✅
  - og.png ✅
  - splash-200.png ✅
- [x] farcaster.json 설정 완료
- [ ] Vercel 배포 **← 다음 단계**
- [ ] 도메인으로 JSON 업데이트
- [ ] Farcaster 등록

