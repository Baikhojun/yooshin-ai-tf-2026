# 유신 AI 활용 2차 TF — 1회차 자료

> **AI 활용 관리부서 자체 교육 / 3회차 9시간 코스**
> 정보시스템실 · 2026

[![Deploy](https://github.com/Baikhojun/yooshin-ai-tf-2026/actions/workflows/deploy.yml/badge.svg)](https://github.com/Baikhojun/yooshin-ai-tf-2026/actions/workflows/deploy.yml)

---

## 📺 슬라이드 (라이브 데모)

**👉 [https://baikhojun.github.io/yooshin-ai-tf-2026/](https://baikhojun.github.io/yooshin-ai-tf-2026/)**

> Repository 첫 푸시 후 1~2분 안에 위 URL이 활성화됩니다.

| 주소 | 용도 |
|------|------|
| `/` | 일반 슬라이드 뷰 |
| `/presenter` | 발표자 모드 (다음 슬라이드 + 스피커 노트 + 타이머) |
| `/overview` | 모든 슬라이드 한눈에 보기 |
| `/notes` | 스피커 노트만 모아 보기 |

---

## 🎯 본 교육의 목적

평소 ChatGPT·Gemini를 *"검색기"* 처럼만 쓰는 관리부서 위원이,
본인 손으로 **MD 프롬프트 파일**을 만들어 *반복 업무*에 매번 재사용할 수 있게 되는 것.

```
🗓 다음 달 첫 출근일 아침 9시
   ↓
📂 내 PC \ 문서 \ 프롬프트 \ 회의록_정리.md  열기
   ↓
🖱 복사 → ChatGPT 새 대화 → 붙여넣기 → 회의 메모 추가
   ↓
☕ 30분 걸리던 일이 3분으로
```

---

## 📅 3회차 일정

| 회차 | 일자 | 주제 | 회차 끝나면 손에 |
|:---:|:---:|:---|:---|
| **1회차** | 5/26 (화) | LLM 원리 + **MD 프롬프트** | 업무 맥락 정의서 + 자동화 후보 3개 |
| 2회차 | 6/2 (화) | 출력 형식 (Mermaid) + 도구 컨셉 | 업무 흐름도 + 도구 컨셉 1건 |
| 3회차 | 6/9 (화) | 바이브 코딩 + 도구 완성 | **본인만의 HTML 도구 v1** |

각 회차 = 50분 × 3교시 + 휴식 10분 × 3 = 180분

---

## 📂 폴더 구조

```
yooshin-ai-tf-2026/
├── ppt/                          # Slidev 슬라이드 (1회차)
│   ├── slides.md                 # ← 본문 (51 슬라이드)
│   ├── package.json
│   └── package-lock.json
├── Cursor/                       # 분석·설계 문서
│   ├── 00_overall-analysis.md    # 전체 자료 분석 + 1회차 설계도
│   └── 01_session-01-content.md  # 1회차 본문 MD (Slidev 변환 소스)
├── demo-data/                    # 강사 시연·실습용 가공 데이터
│   ├── README.md
│   ├── 휴가신청_사유_50건.txt    # 실습 ②
│   ├── 회의메모_샘플_3건.txt     # Part 1·4 시연
│   ├── 회의록_정리.md            # 강사 견본 MD 프롬프트 파일
│   └── 빈_템플릿.md              # 위원 배포용
├── .github/workflows/deploy.yml  # GitHub Pages 자동 배포
└── README.md                     # 이 파일
```

---

## 🛠 로컬에서 슬라이드 실행

```powershell
cd ppt
npm install   # 처음 한 번
npm run dev   # 브라우저 자동 열림 (http://localhost:3030)
```

- `slides.md`를 메모장·VS Code·Cursor 등으로 열어 수정 → **저장하면 브라우저가 즉시 자동 새로고침**
- 종료: PowerShell 창에서 `Ctrl + C` → `Y`

**PDF / PowerPoint로 내보내기**

```powershell
npm run export                # 기본 PDF
npx slidev export --format pptx   # PowerPoint
```

---

## 🎬 시연 도중 자주 쓰는 단축키

| 키 | 동작 |
|---|---|
| `→` / `Space` | 다음 클릭 단계 / 다음 슬라이드 |
| `←` | 이전 |
| `f` | 전체화면 |
| `g` | 슬라이드 번호 입력해 이동 |
| `o` | 슬라이드 개요 |
| `d` | 그리기 모드 (펜) |
| `.` | 하단 네비게이션 바 숨기기/보이기 |
| `Esc` | 패널·메뉴 닫기, 전체화면 해제 |

---

## 🔐 보안·가공 정책

본 레포는 **Public** 으로 공개되어 있습니다. 안전을 위해:

- 회사명은 **(주)멋진엔지니어링** (가공명) 으로 통일
- 부서명·인명·휴가사유·회의메모는 **모두 가공 데이터** — 실제 인물·실제 사례 차용 없음
- 사내 데이터·실명·연락처는 **본 레포 안에 절대 없음**
- 위원 명단·실명·이메일 노출 없음

추가 보안 가이드: [`Slidev 셋업 및 배포 가이드.md`](./Slidev%20셋업%20및%20배포%20가이드.md) 의 *6.4 보안 체크리스트* 참조

---

## 📝 다음 회차 작성자에게 — 인계 안내

이 레포는 **MIT License + Public** 입니다. 다음 회차 작성자(2회차·3회차 또는 3차 TF 인수자)는 자유롭게:

1. 본 레포 **Fork** → 본인 계정에 복사본 생성
2. `git clone` → 본인 노트북에서 자유 수정
3. 본인 GitHub Pages로 배포 (원본은 영향 없음)

자세한 절차: `Slidev 셋업 및 배포 가이드.md` 의 *6.5 인계 안내* 참조

---

## 📚 참고 자료

- 1차 외부 강사 자료 (자체 교육 설계의 영감): https://github.com/isnbh0/yooshin-demo-data
- Slidev 공식: https://sli.dev/

---

## License

[MIT License](./LICENSE) — 자유롭게 수정·재배포 가능
