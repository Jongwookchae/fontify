# 🚀 빠른 배포 가이드

## 준비된 파일들 ✅

모든 준비가 완료되었습니다:
- ✅ Next.js 앱 (Fontify)
- ✅ 이미지 파일들 (`icon-1024.png`, `og.png`, `splash-200.png`)
- ✅ Farcaster 설정 (`public/.well-known/farcaster.json`)
- ✅ Vercel 설정 (`vercel.json`)

---

## 단계별 배포 (5분 완성)

### 1️⃣ Vercel 배포

**방법 A: CLI 사용 (추천)**
```bash
# Vercel CLI 설치 (처음 한 번만)
npm install -g vercel

# 배포 실행
vercel --prod
```

**방법 B: 웹사이트 사용**
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. 이 저장소 선택 및 Import
5. "Deploy" 클릭

---

### 2️⃣ 도메인 확인 및 설정 업데이트

배포 완료 후:

1. **Vercel 도메인 복사**
   - 예: `fontify-abc123.vercel.app`

2. **farcaster.json 업데이트**
   ```bash
   # 파일 열기
   code public/.well-known/farcaster.json
   
   # YOUR_VERCEL_DOMAIN을 실제 도메인으로 교체
   # 예: fontify-abc123.vercel.app
   ```

3. **변경사항 배포**
   ```bash
   git add .
   git commit -m "Update domain in farcaster.json"
   git push
   ```
   
   Vercel이 자동으로 재배포합니다 (약 30초 소요)

---

### 3️⃣ 배포 확인

다음 URL들이 정상 작동하는지 확인:

```bash
# 브라우저에서 접속 테스트
https://YOUR_DOMAIN                              # 메인 페이지
https://YOUR_DOMAIN/.well-known/farcaster.json   # Farcaster 설정
https://YOUR_DOMAIN/icon-1024.png                # 아이콘
https://YOUR_DOMAIN/og.png                       # OG 이미지
https://YOUR_DOMAIN/splash-200.png               # 스플래시
```

모두 정상 작동하면 ✅

---

### 4️⃣ Farcaster에 앱 등록

1. **Warpcast 개발자 포털 접속**
   - https://warpcast.com/~/developers

2. **미니앱 제출**
   - "Submit Mini App" 클릭
   - URL 입력: `https://YOUR_DOMAIN`
   - "Submit" 클릭

3. **자동 검증**
   - 시스템이 자동으로 `.well-known/farcaster.json` 읽음
   - 앱 정보, 아이콘, 이미지 자동 로드

4. **검토 대기**
   - 1-3일 내 Farcaster 팀 검토
   - 승인 후 앱 디렉토리에 등록

---

## 🎉 완료!

배포가 완료되면:
- 사용자들이 Warpcast에서 앱을 찾을 수 있습니다
- 앱이 Farcaster 앱 디렉토리에 표시됩니다
- 공유 시 OG 이미지가 표시됩니다

---

## ⚡ 빠른 명령어

```bash
# 로컬 테스트
npm run dev

# 빌드 테스트
npm run build

# 배포
vercel --prod

# 배포 스크립트 실행 (자동화)
chmod +x deploy.sh
./deploy.sh
```

---

## 🔧 문제 해결

### JSON 파일이 404 에러
- `vercel.json` 설정 확인
- 재배포: `vercel --prod --force`

### 이미지가 안 보임
- public 폴더에 파일 있는지 확인
- 파일명 정확한지 확인 (대소문자 구분)

### 도메인 변경 필요
1. `farcaster.json` 수정
2. `git add . && git commit -m "update" && git push`
3. 자동 재배포 확인

---

## 📞 도움말

- **Farcaster 문서**: https://docs.farcaster.xyz/
- **Vercel 문서**: https://vercel.com/docs
- **Warpcast 개발자**: https://warpcast.com/~/developers

