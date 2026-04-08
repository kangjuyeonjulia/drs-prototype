# DRS Main Page Renewal - Prototype

LINE Design Request System의 메인페이지 리뉴얼 프로토타입입니다.

## 🎯 프로젝트 목표

- DRS 시스템의 활발한 사용 현황 시각화
- 팀별 리소스 현황 표시
- 새로운 디자인 요청을 위한 명확한 CTA 제공

## 🚀 빠른 시작

```bash
# 의존성 설치 (이미 완료됨)
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
drs-prototype/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # 헤더 (로고, 언어 선택)
│   │   ├── HeroSection.tsx     # 메인 CTA 섹션
│   │   ├── MetricsCards.tsx    # 현황 카드 (877건 등)
│   │   ├── TeamStatus.tsx      # 팀별 작업 현황
│   │   ├── ProjectGallery.tsx  # 완료 프로젝트 갤러리
│   │   └── Footer.tsx          # 푸터
│   ├── data/
│   │   └── mockData.ts         # 목업 데이터
│   ├── types/
│   │   └── index.ts            # TypeScript 타입
│   ├── App.tsx                 # 메인 앱
│   └── main.tsx                # 엔트리 포인트
├── tailwind.config.js          # Tailwind 설정
└── package.json
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary Green**: `#5DD98D` (메인 버튼, 완료 상태)
- **Background**: `#FAFBFC`
- **Text Primary**: `#1F2937`
- **Text Secondary**: `#6B7280`

### 주요 섹션
1. **Hero Section**: 큰 CTA 버튼과 헤딩
2. **Metrics Cards**: 진행중(877건), 완료(245건), 평균(10일)
3. **Team Status**: VX Design(8건), UI Design(5건), Multimedia(3건)
4. **Project Gallery**: 최근 완료된 프로젝트 4개 카드

## 🛠 기술 스택

- **React 18** + **TypeScript**
- **Vite** - 빠른 개발 환경
- **Tailwind CSS** - 유틸리티 우선 CSS
- **Lucide React** - 아이콘 라이브러리

## 📊 표시 데이터

현재 목업 데이터로 표시중:
- 진행중 요청: 877건
- 완료 요청: 245건 (이번달)
- 평균 처리 시간: 10일
- 팀별 현황 (VX, UI, Multimedia)
- 최근 완료 프로젝트 4개

## 🔄 다음 단계

1. 실제 API 연동
2. 요청 폼/모달 구현
3. 사용자 인증 추가
4. 프로젝트 상세 페이지
5. 검색 및 필터 기능

## 📝 참고 자료

- [Linear](https://linear.app) - UI/UX 참고
- [Monday.com](https://monday.com) - 워크로드 시각화 참고
- [Notion](https://notion.so) - 갤러리 뷰 참고

---

**접속 URL**: http://localhost:5173/

**개발 서버 실행중**: ✅
