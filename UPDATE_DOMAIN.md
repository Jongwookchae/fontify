# 🔄 도메인 업데이트 가이드

## Vercel 배포 후 해야 할 일

### 1. Vercel 도메인 확인
배포가 완료되면 Vercel이 제공하는 도메인을 확인하세요.
- 예: `fontify-abc123.vercel.app`
- Vercel 대시보드에서 확인 가능

### 2. Farcaster JSON 업데이트

`public/.well-known/farcaster.json` 파일을 열고 **모든 `YOUR_VERCEL_DOMAIN`을 실제 도메인으로 교체**하세요:

#### 변경 전:
```json
"iconUrl": "https://YOUR_VERCEL_DOMAIN/icon-1024.png",
"homeUrl": "https://YOUR_VERCEL_DOMAIN",
```

#### 변경 후:
```json
"iconUrl": "https://fontify-abc123.vercel.app/icon-1024.png",
"homeUrl": "https://fontify-abc123.vercel.app",
```

### 3. 전체 교체 목록

다음 항목들을 모두 업데이트하세요:
- `iconUrl`
- `homeUrl`
- `imageUrl`
- `splashImageUrl`
- `screenshotUrls`
- `heroImageUrl`
- `ogImageUrl`

### 4. 빠른 교체 방법

**VS Code에서:**
1. `Cmd + F` (또는 `Ctrl + F`)
2. "YOUR_VERCEL_DOMAIN" 검색
3. "Replace All" (모두 바꾸기) 클릭
4. 실제 도메인 입력 (예: `fontify-abc123.vercel.app`)

**커맨드 라인에서:**
```bash
# Mac/Linux
sed -i '' 's/YOUR_VERCEL_DOMAIN/fontify-abc123.vercel.app/g' public/.well-known/farcaster.json

# 확인
cat public/.well-known/farcaster.json
```

### 5. 변경사항 배포

```bash
git add .
git commit -m "Update Farcaster config with actual Vercel domain"
git push
```

Vercel이 자동으로 재배포합니다 (약 30초 소요).

### 6. 최종 확인

브라우저에서 다음 URL 접속 테스트:

1. ✅ https://YOUR_DOMAIN/.well-known/farcaster.json
   - JSON이 정상적으로 표시되는지 확인
   - 모든 URL이 YOUR_VERCEL_DOMAIN이 아닌 실제 도메인인지 확인

2. ✅ https://YOUR_DOMAIN/icon-1024.png
   - 아이콘 이미지가 표시되는지 확인

3. ✅ https://YOUR_DOMAIN/og.png
   - OG 이미지가 표시되는지 확인

4. ✅ https://YOUR_DOMAIN/splash-200.png
   - 스플래시 이미지가 표시되는지 확인

### 7. Farcaster 등록

모든 URL이 정상 작동하면:
1. https://warpcast.com/~/developers 접속
2. "Submit Mini App" 클릭
3. 도메인 입력: `https://YOUR_DOMAIN`
4. 제출!

---

## ⚠️ 주의사항

- https:// 포함하지 말고 도메인만 입력: `fontify-abc123.vercel.app`
- 슬래시(/) 끝에 붙이지 마세요
- 대소문자 정확히 입력

---

## 🎯 체크리스트

배포 전 최종 확인:
- [ ] Vercel 배포 완료
- [ ] 도메인 확인
- [ ] farcaster.json 업데이트
- [ ] Git 커밋 & 푸시
- [ ] 재배포 확인
- [ ] 모든 URL 테스트
- [ ] Farcaster 등록

완료되면 축하합니다! 🎉

