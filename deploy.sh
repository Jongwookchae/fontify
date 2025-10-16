#!/bin/bash

# Fontify Deployment Script
# Farcaster 앱 배포 자동화 스크립트

echo "🚀 Fontify 배포 시작..."
echo ""

# 1. 빌드 테스트
echo "📦 1. 빌드 테스트 중..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 빌드 실패! 에러를 확인하세요."
    exit 1
fi

echo "✅ 빌드 성공!"
echo ""

# 2. Git 상태 확인
echo "📝 2. Git 상태 확인 중..."
git status

echo ""
read -p "변경사항을 커밋하시겠습니까? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "커밋 메시지 입력: " commit_message
    git add .
    git commit -m "$commit_message"
    git push
    echo "✅ Git 푸시 완료!"
fi

echo ""

# 3. Vercel 배포
echo "🌐 3. Vercel 배포 중..."
vercel --prod

if [ $? -ne 0 ]; then
    echo "❌ Vercel 배포 실패!"
    exit 1
fi

echo ""
echo "✨ 배포 완료!"
echo ""
echo "📋 다음 단계:"
echo "1. Vercel 대시보드에서 배포된 도메인 확인"
echo "2. public/.well-known/farcaster.json에서 YOUR_VERCEL_DOMAIN을 실제 도메인으로 교체"
echo "3. 변경사항 커밋 및 재배포"
echo "4. https://warpcast.com/~/developers 에서 앱 등록"
echo ""

