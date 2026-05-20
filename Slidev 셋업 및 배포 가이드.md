# Slidev 셋업 및 배포 가이드

> 2차 TF 교육 슬라이드 작성·시연·배포 흐름 정리

---

## 0. 한눈에 보기

| 단계  | 무엇                          | 빈도          |
| --- | --------------------------- | ----------- |
| 1   | Node.js 설치                  | 처음 한 번      |
| 2   | 회차 폴더에서 `npm install`       | 회차별 한 번     |
| 3   | `npm run dev` → 브라우저 미리보기   | 작성·시연 시 매번  |
| 4   | `npm run export` → PDF 익스포트 | 위원 배포 시     |
| 5   | (선택) GitHub Pages 자동 배포     | 한 번 셋업 후 자동 |

---

## 1. Node.js 설치 (처음 한 번)

1. https://nodejs.org/en/download 접속

2. 옵션 선택 :
   
   - Operating System : **Windows**
   - Architecture : **x64**
   - Installation method : **Prebuilt Installer** ← (Docker나 Binaries 아님)

3. 표시되는 `node-vXX.x.x-x64.msi` 다운로드

4. `.msi` 더블클릭 → 기본 옵션으로 설치 (PATH 자동 등록)
   
   - "Automatically install the necessary tools" 체크박스는 **해제** 권장

5. **PowerShell 닫고 다시 열기** (PATH 갱신용)

6. 확인 :
   
   ```powershell
   node --version
   npm --version
   ```
   
   각각 `v22.x.x` 이상, `10.x.x` 이상 나오면 성공.

### ⚠️ `npm.ps1 파일을 로드할 수 없습니다` 에러가 뜨면

PowerShell 기본 정책이 스크립트 실행을 막아서 그렇습니다. 한 번만 풀어주면 됨:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

→ `Y` 입력 후 다시 `npm install`. 영구 설정이라 다음에 다시 안 해도 됨.

---

## 2. 슬라이드 로컬 실행

PowerShell에서:

```powershell
cd "D:\26년\26. 3\AI TF\1주차 회의록\claude\2차 교육\01_1회차_LLM원리_프롬프트"
npm install        # 처음 한 번만 (수 분 소요)
npm run dev        # 브라우저 자동 열림 (http://localhost:3030)
```

- `slides.md` 를 메모장·VS Code·Cursor 등으로 열어서 수정 → **저장하면 브라우저가 즉시 자동 새로고침**
- 종료 : PowerShell 창에서 `Ctrl + C` → `Y`

> 조작법·단축키·URL 라우트는 **3장 참조**.

---

## 3. 슬라이드 조작 / 단축키 / URL

### 3.1 URL 라우트

| 주소                                | 용도                                |
| --------------------------------- | --------------------------------- |
| `http://localhost:3030/`          | **일반 슬라이드 뷰** (기본)                |
| `http://localhost:3030/presenter` | **발표자 모드** — 다음 슬라이드, 스피커 노트, 타이머 |
| `http://localhost:3030/overview`  | 모든 슬라이드 한눈에 보기 (Grid)             |
| `http://localhost:3030/notes`     | 스피커 노트만 모아 보기                     |

### 3.2 키보드 단축키

| 키             | 동작                     |
| ------------- | ---------------------- |
| `→` / `Space` | 다음 클릭 단계 / 다음 슬라이드     |
| `←`           | 이전                     |
| `↓`           | 다음 슬라이드 (클릭 단계 건너뜀)    |
| `↑`           | 이전 슬라이드                |
| `f`           | 전체화면 토글                |
| `g`           | 슬라이드 번호 입력해 이동         |
| `o`           | 슬라이드 개요 토글 (Grid)      |
| `d`           | 그리기 모드 (펜) — 다시 누르면 해제 |
| `.`           | 하단 네비게이션 바 숨기기/보이기     |
| `Esc`         | 패널·메뉴 닫기, 전체화면 해제      |

### 3.3 우측에 뜬 패널·목차 닫는 법

브라우저 우측에 **목차나 패널이 떠 있으면** :

- **`Esc` 키** ← 가장 빠름
- 우하단 **햄버거(≡) 아이콘** 다시 클릭 → 슬라이드 목록 토글
- 우하단 **(i) 정보 아이콘** 다시 클릭 → 메타 정보 패널 토글
- 또는 **패널 바깥 클릭**

발표자 모드(`/presenter`)의 *다음 슬라이드 미리보기*를 없애려면 → 주소창에서 `/presenter` 지우고 `/` 만 남기세요.

### 3.4 시연 도중 자주 쓰는 조합

| 상황                 | 조작                               |
| ------------------ | -------------------------------- |
| 빔에 깔끔하게 띄우기        | `f` (전체화면) + `.` (네비게이션 바 숨기기)   |
| 회차 중간으로 점프         | `g` → 슬라이드 번호 입력                 |
| 위원이 질문해 이전 슬라이드 참조 | `o` (개요) → 클릭                    |
| 슬라이드 위에 표시하며 설명    | `d` (펜 모드)                       |
| 시연 중 슬라이드 수정       | 별도 창에서 `slides.md` 수정·저장 → 자동 반영 |

---

## 4. PDF / PPT 익스포트

```powershell
npm run export                              # 기본 PDF
npx slidev export --format pptx             # PowerPoint
npx slidev export --with-clicks             # 클릭 단위 분해된 PDF
```

→ 현재 폴더에 `slides-export.pdf` 생성. 위원들에게 메일로 배포 가능.

---

## 5. 시연 당일 권장 흐름

1. **노트북에서** `npm run dev` 실행 → 브라우저 띄움
2. 빔 프로젝터 HDMI 연결, 브라우저 풀스크린 (`f` 또는 `F11`)
3. 발표자 모드(`/presenter`)는 노트북 화면, 빔에는 일반 슬라이드 표시
4. 시연 도중 `slides.md` 한 줄 고치고 저장하면 즉시 반영

> ✅ 빌드·배포 없이 라이브 진행 가능. GitHub Pages는 *사후 공유용*.

---

## 6. GitHub Pages 자동 배포 (선택)

### 6.1 GitHub 레포 생성

1. https://github.com/new 에서 새 레포 생성
   - 이름 예시 : `yooshin-ai-tf-2nd`
   - **Public** 권장 (Private이면 Pages가 유료 플랜에서만 동작)
   - **Add a license : MIT** 체크 (다음 작성자에게 인계 시 안심하고 수정 가능)
2. 생성 후 Settings → **Pages** → Source : **GitHub Actions**

### 6.2 첫 푸시

`2차 교육/` 폴더 안에서:

```powershell
git init
git add .
git commit -m "1회차 슬라이드 초안"
git branch -M main
git remote add origin https://github.com/{사용자명}/yooshin-ai-tf-2nd.git
git push -u origin main
```

### 6.3 워크플로우 동작

- `.github/workflows/deploy.yml` 이 `main` 푸시를 감지

- 자동으로 `npm install` → `slidev build` → Pages 업로드

- 1~2분 후 다음 URL에 접근 가능 :
  
  ```
  https://{사용자명}.github.io/yooshin-ai-tf-2nd/session-01/
  ```

### 6.4 보안 체크리스트 (배포 전 필수)

Public 레포 푸시 전에 반드시 확인 :

- [ ] 슬라이드 안에 **실명**(위원·임원 이름) 들어가 있지 않은지
- [ ] **실제 법인카드 사용 내역**·거래처 명세 같은 사내 데이터가 더미로 치환됐는지
- [ ] **사내 시스템 명칭**(그룹웨어 명, 내부 코드명)이 일반어로 바뀌었는지
- [ ] 위원 명단·연락처가 `slides.md`에 없는지

> ❌ 사내 데이터가 들어 있으면 **Private 레포 + 무료 플랜 → 배포 불가**. 더미 치환이 가장 단순한 길.

### 6.5 다음 작성자에게 인계하기 (Fork 방식)

다음 회차 작성자 / 3차 TF 인수자가 *자유롭게 수정해 자기 환경에서 활용* 하게 하려면 :

1. **Public 레포 + MIT License** (위 6.1에서 체크) — 이 두 가지로 *수정·재배포 자유* 보장
2. 인계 시 레포 URL만 전달
3. 받는 사람은 GitHub 레포 페이지에서 **Fork** 클릭 → 본인 계정에 복사본 생성
4. 본인 노트북에 `git clone` → 자유 수정 → **본인 GitHub Pages**에 자기 URL로 배포
5. 우리 원본 레포는 영향 없이 유지 → 다음 인계나 백업으로 재사용

> 1차 강사가 우리에게 자료를 넘긴 방식(`isnbh0/yooshin-demo-data`)이 정확히 이 패턴입니다.

**git을 모르는 사람에게 넘길 경우** : GitHub 레포 페이지 → **Code → Download ZIP** → 압축 풀고 로컬에서 `npm install` / `npm run dev`. 다만 이 경우 GitHub Pages 배포는 본인이 별도로 셋업해야 함.

---

## 7. 슬라이드 수정 치트시트

| 하고 싶은 것    | 방법                                                          |
| ---------- | ----------------------------------------------------------- |
| 슬라이드 1장 추가 | 새로 `---` 한 줄 + 마크다운 작성                                      |
| 슬라이드 삭제    | 해당 슬라이드 블록(앞 `---` ~ 뒤 `---`) 통째로 지우기                       |
| 슬라이드 순서 변경 | 블록 단위로 잘라내기·붙여넣기                                            |
| 레이아웃 변경    | 슬라이드 앞 frontmatter에 `layout: cover/section/center/two-cols` |
| 스피커 노트 추가  | 슬라이드 본문 뒤에 `<!-- 노트 내용 -->`                                 |
| 클릭으로 순차 등장 | 글머리 목록을 `<v-clicks>` 로 감싸기                                  |
| 강조 색 변경    | 마크다운 옆에 HTML `<span class="text-red-500">...</span>`        |
| 표          | 일반 마크다운 표 문법 (`\|---\|---\|`)                               |

자세한 문법 : https://sli.dev/guide/syntax

---

## 8. 회차별 폴더 구조 (계획)

```
2차 교육/
├── 00_운영/
│   ├── 교육 운영 계획.md
│   └── Slidev 셋업 및 배포 가이드.md    ← 이 문서
├── 01_1회차_LLM원리_프롬프트/
│   ├── slides.md                       ← Slidev 본문
│   ├── package.json
│   └── 실습자료/                       ← 인터뷰 프롬프트, 더미 데이터
├── 02_2회차_출력형식_프롬프트고도화/   ← 동일 구조 예정
├── 03_3회차_바이브코딩/                ← 동일 구조 예정
└── .github/workflows/deploy.yml
```

회차 추가 시 `deploy.yml` 의 build 단계만 복사·붙여넣기 하면 됩니다.
