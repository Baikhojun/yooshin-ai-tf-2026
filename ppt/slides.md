---
theme: seriph
title: AI 활용 2차 TF | 1회차
info: |
  ## AI 활용 2차 TF — 1회차
  LLM 원리 + MD 프롬프트 파일

  정보시스템실 · 2026. 5. 26.
fonts:
  sans: 'Noto Sans KR, sans-serif'
  serif: 'Noto Serif KR, serif'
  mono: 'D2Coding, Consolas, monospace'
canvasWidth: 1280
download: true
exportFilename: yooshin-2nd-tf-session-01
mdc: true
transition: slide-left
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920
class: text-center
hideInToc: true
layout: cover
---

# AI-native로 가는 길

<div class="text-2xl opacity-80 mt-4">

2차 TF · **Session 01**

</div>

<div class="text-xl opacity-70 mt-12">

LLM 원리 + <span class="text-yellow-300 font-bold">MD 프롬프트 파일</span>

</div>

<div class="abs-bl mx-14 my-12 opacity-60 text-sm">
정보시스템실 · 2026. 5. 26.
</div>

<!--
[3시간 운영 안내]
- 50분 × 3교시 + 휴식 10분 × 3
- 매 교시 끝에 본인 업무로 적용해 보는 실습
- 3교시 중반 'MD 프롬프트 파일' 15분이 오늘의 클라이맥스
-->

---
layout: center
class: text-center
---

# 시작 전, 가볍게 손 들어 봅시다 ✋

<div class="text-left mx-auto max-w-2xl mt-8 text-lg">

<v-clicks>

**①** 오늘 아침까지 **ChatGPT 또는 Gemini를 켜 본 분?**

**②** AI에게 시킬 때 *"어떻게 물어야 잘 답할까"* 를 **5초 이상 고민해 본 분?**

**③** AI 답변이 *마음에 안 들어서* **그냥 창을 닫아본 분?**

**④** **본인 업무에 AI를 *매일* 쓰고 있는 분?**

</v-clicks>

</div>

<div v-click class="mt-10 text-base opacity-80">
④에 손 든 사람이 0~1명이라면 — <span class="text-yellow-500 font-bold">이 교육이 바로 여러분을 위한 것</span>입니다.
</div>

---

# 큰 그림 — 9시간 뒤 뭐가 달라지나? 🎯

<div class="mt-6">

| 회차 | 일자 | 주제 | 회차 끝나면 내 손에 |
|:---:|:---:|:---|:---|
| **1회차 <span class="text-red-500">(오늘)</span>** | 5/26 (화) | LLM 원리 + **MD 프롬프트** | 업무 맥락 정의서 + 자동화 후보 3개 |
| 2회차 | 6/2 (화) | 출력 형식 (Mermaid) + 도구 컨셉 | 업무 흐름도 + 도구 컨셉 1건 |
| 3회차 | 6/9 (화) | 바이브 코딩 + 도구 완성 | **본인만의 HTML 도구 v1** ✨ |

</div>

<div class="mt-10 text-center text-lg opacity-90">
9시간 뒤, 교육생분 한 분 한 분의 손에<br>
<span class="text-2xl font-bold text-blue-500">본인 업무용 도구 한 개</span>가 쥐어집니다.
</div>

---

# 본 교육이 *하지 않는* 일 🚫

<div class="grid grid-cols-1 gap-4 mt-8 text-lg">

<v-clicks>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

❌ **코딩** — 교육생분이 키보드로 코드를 짤 일은 *없습니다*.<br>
<span class="text-sm opacity-70">3회차에 AI에게 *시키기만* 합니다.</span>

</div>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

❌ **새 솔루션 도입 결정** — *"○○ AI 도구 사야 할까요?"* 는 본 교육 범위가 아닙니다.

</div>

<div class="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">

✅ **우리가 하는 일**: 이미 손에 쥔 *ChatGPT / Gemini를 매일 매일 쓸 수 있는 사람으로* 만들기.

</div>

</v-clicks>

</div>

---

# 사용 도구 — 딱 4개 🛠

<div class="mt-6">

| 도구 | 용도 | 비용 |
|:---:|:---|:---:|
| 💬 **ChatGPT** | 대화·프롬프트 실행 | Plus 권장 (Free도 가능) |
| 💎 **Gemini** | 대화·프롬프트 실행 (대체) | Advanced 권장 |
| 📝 **메모장** | MD 파일 만들기 | **0원** |
| 🌐 **markdownlivepreview.com** | MD 미리보기 | **0원** |

</div>

<div class="mt-8 text-center text-lg">
모두 <span class="text-blue-500 font-bold">이미 갖고 계시거나 무료로 쓸 수 있는 것</span>.<br>
<span class="opacity-70 text-base">새 프로그램 설치 없음. 카톡으로 사진 보내는 것보다 쉬워요.</span>
</div>

---
layout: center
---

# ⭐ 1회차 목표 — 오늘 끝나면 이걸 할 수 있다

<div class="grid grid-cols-2 gap-4 mt-8 max-w-5xl">

<v-clicks>

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-300">

**① AI가 왜 그런 답을 하는지 *설명할 수 있다*** 💡

<div class="text-xs opacity-70 mt-2">친구가 "ChatGPT 별 거 없던데?" → "맥락을 안 줘서 그래" 한 마디</div>

</div>

<div class="p-5 rounded-xl bg-purple-50 border-2 border-purple-300">

**② AI에게 줄 글을 *마크다운으로* 정리** ✍️

<div class="text-xs opacity-70 mt-2">`#`, `-`, `**`, 표, 코드블록 — 5분이면 배움</div>

</div>

<div class="p-5 rounded-xl bg-yellow-50 border-2 border-yellow-400">

**③ ⭐ 본인 업무용 *MD 프롬프트 파일* 뼈대** 📂

<div class="text-xs opacity-70 mt-2">`회의록_정리.md` 같은 파일 1개 — 다음 달에도 *복사* 한 번</div>

</div>

<div class="p-5 rounded-xl bg-green-50 border-2 border-green-300">

**④ 본인 업무에서 *자동화 후보 3개*** 🎯

<div class="text-xs opacity-70 mt-2">2회차에 도구로 만들 *재료*</div>

</div>

</v-clicks>

</div>

---
layout: center
class: text-center
---

# 1회차의 *진짜* 성공 장면 🎬

<div class="text-left bg-gray-900 text-green-300 p-6 rounded-xl font-mono text-sm leading-relaxed max-w-2xl mx-auto mt-6">

```
🗓 다음 달 첫 출근일 아침 9시

  "아 회의록 정리해야 하는데..."
        ↓
📂 내 PC \ 문서 \ 프롬프트 \ 회의록_정리.md  열기
        ↓
🖱 전체 선택 → 복사
        ↓
🌐 ChatGPT 새 대화 → 붙여넣기
        ↓
📋 회의 메모만 마지막에 추가
        ↓
✨ 결과 → 엑셀에 붙여넣기
        ↓
☕ 커피 한 잔 — 30분이 3분으로
```

</div>

<div class="mt-6 text-lg opacity-90">
이 한 장면이 <span class="text-blue-500 font-bold">매월·매주 반복</span>되면 — 이 교육은 성공입니다.
</div>

---

# 1회차 상세 목차 📑

<div class="mt-4">

| 교시 | 시간 | 큰 주제 | 한 줄 |
|:---:|:---:|:---|:---|
| **1교시** | 14:00~14:50 | 오리엔테이션 + **핵심 원리 1 자동완성** | "AI는 *다음 단어를 찍는 점쟁이*" |
| ☕ | 14:50~15:00 | 휴식 10분 | — |
| **2교시** | 15:00~15:50 | **핵심 원리 2 의미공간** + **핵심 원리 3 작업기억** | "AI는 *별자리*로 보고, *신입사원*처럼 매일 잊는다" |
| ☕ | 15:50~16:00 | 휴식 10분 | — |
| **3교시 ⭐** | 16:00~16:50 | **MD 프롬프트 파일** + 인터뷰 + 자동화 후보 | "내 업무를 *MD로 박아두면* 다음에도 그대로 쓸 수 있다" |
| 마무리 | 16:50~17:00 | 정리·과제·예고·Q&A | — |

</div>

---
layout: statement
---

# 두 가지 부탁 🙏

<div class="text-xl mt-6 leading-relaxed">

📵 **스마트폰**은 <span class="text-yellow-400 font-bold">가방 안</span>에,<br>
&nbsp;&nbsp;&nbsp;&nbsp;반드시 <span class="text-yellow-400 font-bold">무음·진동 OFF</span>로 부탁드립니다.

</div>

<div class="text-xl mt-6 leading-relaxed">

💻 **실습용 PC**는 <span class="text-yellow-400 font-bold">전원 ON · 브라우저 열기</span>,<br>
&nbsp;&nbsp;&nbsp;&nbsp;손에 <span class="text-yellow-400 font-bold">마우스를 쥔 채로</span> 들어주세요.

</div>

<div class="mt-10 text-base opacity-80">
강사가 시연할 때 <span class="font-bold">교육생분도 같이 클릭</span>해 보는 것이 가장 빠른 학습입니다.<br>
가만히 듣기만 하면 — *내일 출근하면 다 잊습니다*.
</div>

---
layout: section
---

# 1교시 — 핵심 원리 1

<div class="text-4xl mt-4">자동완성</div>

<div class="opacity-60 mt-4 text-xl">

🔮 AI는 *다음 단어를 찍는 점쟁이*

</div>

---

# 🧊 아이스브레이커 — "이것은 무엇일까?"

<div class="grid grid-cols-[1fr_1.1fr] gap-6 mt-4">

<div>

<img src="/icebreaker-haetae.png" class="rounded-xl shadow-lg w-full" />

<div class="text-xs text-center opacity-60 mt-1">↑ 강사 화면 (정답은 마지막에)</div>

</div>

<div class="text-sm">

## 규칙

- ChatGPT · Gemini 자유 사용
- **사진 업로드 ❌**
- 본인의 *글로만* 설명 ✅
- 5분 — 가장 먼저 정답 단어를 끌어낸 분 *우승*

## 진행

1. 위 사물을 *각자 본인 말로* 설명
2. AI에게 *"이것은 무엇일까?"* 물어보기
3. AI가 정답 단어를 말하면 ✋

</div>

</div>

<div class="mt-4 text-center text-base">
👉 같은 사물도 <span class="text-blue-500 font-bold">설명(맥락)이 다르면</span> AI의 추측이 달라집니다
</div>

<!--
[강사 노트 — 아이스브레이커 정답/힌트]

▶ 정답: **해태(獬豸)** — 광화문 앞에 서 있는 한국 전통 신화 속 수호 동물 석상.
   별칭: 해치 / 시비를 가린다는 정의의 동물 / 서울시 캐릭터의 모티브.

▶ 왜 어려운가:
   - 한국인이 *형상*은 알지만 "해태"라는 *명칭*은 잘 안 떠올림 (제과 회사 이름으로만 인식하기도)
   - 광화문 앞 → 사자상 → 호랑이상 → 등으로 오답 흐름 자주 발생

▶ 정답 유도 키워드 (교육생분이 이런 단어를 쓰면 AI가 빨리 맞힘):
   - "광화문 앞", "조선시대 석상", "정의를 상징", "외뿔", "비늘 덮인 사자"
   - 진짜 핵심 키워드: *"왕궁 앞 수호 동물"*, *"한자 이름은 두 글자"*

▶ 게임 종료 후 정리 멘트:
   "같은 사진인데, *광화문 앞* 한 단어 추가하니 AI가 바로 맞혔죠?"
   "이게 *맥락(context)*입니다. 오늘의 첫 번째 단어를 외우세요 — '맥락'."

▶ 위원 응답이 느릴 때 보조 힌트:
   "한자로 두 글자입니다. 첫 글자가 '풀 해(解)'와 발음이 같아요."
-->


---
layout: center
class: text-center
---

# 🔮 AI는 다음 단어를 찍는 점쟁이

<div class="text-2xl mt-12 leading-relaxed">

AI는 *의미를 이해해서 답하는 것*이 <span class="text-red-500">아닙니다</span>.

</div>

<div class="text-2xl mt-6 leading-relaxed">

여러분이 쓴 글의<br>
**다음에 올 *가장 그럴듯한* 단어를 찍는 기계**입니다.

</div>

<div class="text-2xl mt-8 leading-relaxed">
🎯 그래서 — <span class="text-blue-500 font-bold">앞에 뭘 써 주느냐</span>가 모든 것을 결정합니다.
</div>

---

# 빈칸 채우기 — 한국 직장인 버전

<div class="text-xl mt-4 mb-6 text-center">

> "내일 회의 시간을 ___"

</div>

| AI가 본 *다음 단어* 후보 | 확률 |
|:---|---:|
| 잡아주세요 | **38%** |
| 조정해주세요 | 27% |
| 알려주세요 | 18% |
| 확인해주세요 | 12% |
| 늦춰주세요 | 5% |

<div class="mt-6 text-center text-base opacity-80">
→ AI는 <span class="font-bold">가장 확률 높은</span> 단어를 고를 뿐
</div>

<div class="mt-4 text-center text-base">
💡 *교육생분에게 한 마디*: "여기서 <span class="text-blue-500 font-bold">맥락을 한 줄만</span> 더 주면 답이 어떻게 바뀔까요?"
</div>

<!--
라이브: ChatGPT에 "내일 회의 시간을" 만 보내고 결과 확인.
-->

---

# 맥락 한 줄로 답이 바뀐다 ✨

<div class="text-xl mt-4 mb-6 text-center">

> "거래처 부장님께 보낼 메일을 쓰는 중입니다. 내일 회의 시간을 ___"

</div>

| 다음 단어 | 확률 |
|:---|---:|
| **말씀드리려 합니다** | **41%** |
| 안내드리고자 합니다 | 28% |
| 공지드립니다 | 17% |
| 알려드립니다 | 10% |

<div class="mt-6 text-lg">

**같은 빈칸** → 앞에 <span class="text-blue-500 font-bold">"거래처 부장님께 메일"</span> 한 줄 추가 → **반말체가 아닌 격식체**로 답이 바뀜.

</div>

<div class="mt-4 text-sm opacity-80">
🪄 *마법이 아니라 **확률**.* AI는 "부장님께 메일" 뒤에 "말씀드리려"가 흔하다는 통계를 외울 뿐.
</div>

---

# ❌ 나쁜 프롬프트 — 평소 교육생분이 하는 일

```
어제 회의록 정리 좀 해줘

오전 10시 시작
김 부장: 다음달 행사 예산이 부족함
박 차장: 그래서 어떻게 하실 건지
김 부장: 일단 본사에 추가 요청
이 과장: 예산은 다음주 화요일까지 확정 필요
박 차장: 알겠음
```

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-3 rounded-lg bg-red-50 border-l-4 border-red-400">

**AI 결과**: 어색한 표 + 행동 항목 누락 + 담당자 모호

</div>

<div class="p-3 rounded-lg bg-gray-100 border-l-4 border-gray-400">

**교육생분 반응**: *"음... 별로네"* → 창 닫음 → **다시 손으로 정리** 😩

</div>

</div>

---

# ✅ 좋은 프롬프트 — 오늘 끝나면 *이렇게* 쓸 수 있다

```markdown
[역할]
당신은 (주)멋진엔지니어링 관리부 회의록 담당자입니다.

[작업]
아래 회의 메모를 회사 표준 회의록 양식으로 정리해 주세요.

[판단 기준]
- 결정 사항과 의견을 구분
- 행동 항목은 반드시 담당자와 기한을 포함
- 발언자 이름은 "○○ 부장", "○○ 과장" 형태로 통일
- 책임 소재가 불명확한 항목은 [확인필요] 표기

[출력 형식]
## 회의록
| 항목 | 내용 |
| 일시 | (메모에서 추출) |
| 참석자 | (메모에서 추출) |
### 결정 사항
- (목록)
### 검토 사항 (담당 / 기한)
- 항목: ○○○ / 2026-06-XX

[메모]
(여기에 회의 메모 본문 붙여넣기)
```

<div class="absolute right-8 bottom-8 p-3 rounded-lg bg-green-50 border-l-4 border-green-500 max-w-sm">

✅ **결과**: 사내 결재용 회의록에 *그대로 붙여넣을* 수준

</div>

<!--
시연 노트: 한 번에 점프 ❌. 단계별로 (1) 메모만 → (2) 역할 추가 → (3) 판단 기준 추가 → (4) 출력 형식 추가.
마지막: "이 좋은 프롬프트 전체를 메모장에 저장해 두면, 다음 회의 때 메모만 갈아 끼우면 됩니다. 3교시에 정식으로 배웁니다."
-->

---

# 비교: 같은 AI, 다른 결과 ⚖️

|       | ❌ 나쁜 프롬프트 | ✅ 좋은 프롬프트 |
|-------|--------------|--------------|
| 역할 부여 | 없음 | 회의록 담당자 |
| 출력 형식 | AI가 알아서 (대개 어색) | 사내 표준 양식 |
| 판단 기준 | 누락 | 명시 |
| 결과 활용성 | "다시 손으로 고쳐야 함" | **"복사 → 결재판"** |
| 다음 달 재사용 | 매번 새로 씀 | 🎉 **파일 복사 한 번** |

<div class="mt-8 text-center text-xl">
🎯 같은 AI, 같은 데이터 — <span class="text-blue-500 font-bold">프롬프트만 바뀌면 결과가 달라진다</span>
</div>

---
layout: two-cols
---

# ⏱ 실습 ① — 본인 업무에 적용

<span class="text-2xl">**15분**</span>

::left::

## 진행

<v-clicks>

1. AI에게 시키고 싶은 *작은 작업* 1개
   <div class="text-xs opacity-70">메일, 공문 한 문단, 안내 문자, 회의 안건…</div>

2. **맥락 없이** 한 줄로 → 결과 받기

3. **역할 + 판단 기준 + 출력 형식** 추가 → 다시

4. 두 결과를 *나란히* 비교

</v-clicks>

::right::

## 기록 워크시트 📝

| 칸 | 적기 |
|---|------|
| 어떤 작업? | (한 줄) |
| 나쁜 결과 *모자란 점* | (한 문장) |
| 좋은 결과 *나아진 점* | (한 문장) |

<div class="mt-6 text-sm opacity-70">
→ 마지막 3분 한두 분 공유
</div>

---
layout: center
class: text-center
---

# ☕ 휴식 10분

<div class="text-xl mt-12 opacity-80">

2교시: AI가 단어를 *별자리*로 보고,<br>
*신입사원*처럼 매일 잊는 이야기

</div>

<div class="text-6xl mt-12">⏰</div>

---
layout: section
---

# 2교시 — 핵심 원리 2

<div class="text-4xl mt-4">의미공간</div>

<div class="opacity-60 mt-4 text-xl">

✨ AI는 단어를 *별자리*로 본다

</div>

---
layout: center
class: text-center
---

# ✨ AI는 단어를 별자리로 본다

<div class="text-xl mt-10 leading-relaxed max-w-3xl mx-auto">

엑셀의 **VLOOKUP**은 글자가 *완벽히 일치*해야 매칭합니다.

</div>

<div class="text-xl mt-6 leading-relaxed max-w-3xl mx-auto">

AI는 다릅니다.<br>
AI는 단어를 <span class="text-blue-500 font-bold">별자리처럼</span> 봅니다.

</div>

<div class="text-lg mt-8 opacity-90 max-w-3xl mx-auto">
비슷한 의미는 <span class="text-yellow-500 font-bold">가까이</span>, 다른 의미는 <span class="text-gray-500 font-bold">멀리</span><br>
글자 하나가 달라도 **같은 무리**로 인식.
</div>

---

# 5초 만에 이해하기 — "휴가" 별자리

<div class="text-center mt-2 text-base opacity-80">"휴가" 주변에 어떤 단어들이 모여 있을까요?</div>

<div class="font-mono text-sm bg-gray-900 text-green-300 p-6 rounded-xl mt-6 leading-loose">

```
                  📚 휴직

  🌴 연차       😴 휴식

      🤒 병가

           ☂ 휴가  ← (중심)

      🧓 경조

  🚪 반차         📅 연가

           🕐 외출
```

</div>

<div class="mt-4 text-base">

→ AI는 *"휴가 / 연차 / 반차 / 연가 / 휴직 / 병가 / 경조 / 외출"* 을 **같은 동네 단어**로 인식.<br>
→ VLOOKUP은 *"연차"* 와 *"연가"* 가 *다른 글자* 라서 매칭 실패.

</div>

<div class="mt-3 text-lg text-center font-bold">
💡 한 마디로: AI는 *글자*가 아니라 <span class="text-blue-500">*뜻*</span>을 봅니다.
</div>

---

# 의미공간이 빛나는 사례 — 휴가 사유 분류

<div class="text-sm opacity-80 mb-2">(주)멋진엔지니어링 관리부에 한 달간 들어온 휴가 신청 사유 — 사람마다 표기가 제각각</div>

| 휴가 신청 사유 (원본) | VLOOKUP | AI (의미공간) |
|---------------------|:---:|:---|
| `정기 건강 검진` | ❌ | ✅ **의료** |
| `치과 진료 (스케일링)` | ❌ | ✅ **의료** |
| `자녀 예방 접종 동행` | ❌ | ✅ **의료/가족** |
| `장인어른 칠순` | ❌ | ✅ **경조사** |
| `처제 결혼식` | ❌ | ✅ **경조사** |
| `이사로 인한 휴가` | ❌ | ✅ **개인사정** |
| `자녀 학교 행사` | ❌ | ✅ **가족** |
| `여름 휴가 (제주)` | ❌ | ✅ **휴양** |

<div class="mt-4 text-center text-base">
🤖 AI는 각 사유의 *의미*를 읽고 <span class="font-bold">6개 범주</span>로 자동 분류
</div>

<!--
라이브: ChatGPT에 8건만 보내고 "이 휴가 사유들을 의미별로 묶어 표로 정리해줘" 한 줄 → 결과 보여줌
-->

---

# 같은 항목, 맥락이 다르면 결과가 갈린다 🎭

<div class="text-base opacity-80 mb-2">같은 *"외부 미팅 참석"* 인데 누구를 만나느냐에 따라 *비용 처리*가 달라짐</div>

| 외부 미팅 사유 | 정답 처리 | 이유 |
|---------------|:---|:---|
| 거래처 부장과 점심 | **접대비** | 외부 인사 |
| 협력업체 담당과 견적 협의 | **회의비** | 업무 협의 (식대 X) |
| 본사 임원과 식사 | **복리후생비/회의비** | 사내 |
| 채용 후보자와 인터뷰 카페 | **채용 관련 경비** | 채용 절차 |
| `업무 미팅` (메모만) | *[확인필요]* | 적요만으론 분간 불가 |

<div class="mt-6 text-center text-lg">
🧠 AI는 **적요의 *맥락***을 읽고 처리 — <span class="text-red-500 font-bold">엑셀 수식으론 절대 불가능</span>
</div>

---

# 의미공간의 함정 — AI는 *계산기*가 아닙니다 ⚠️

<div class="text-base opacity-80 mb-4">교육생분이 자주 빠지는 함정 №1</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

**❌ 잘못된 사용**

> "이 영수증 30건의 합계를 구해줘"

→ AI: *"대략 1,847,000원 정도"* (실제: 1,823,500원)<br>
→ 교육생분: *"AI 거짓말이네!"* 😡

</div>

<div class="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">

**✅ 올바른 사용**

> "이 영수증 30건의 합계를 구하는 **엑셀 수식**을 만들어줘"

→ AI: `=SUM(B2:B31)`<br>
→ 엑셀에 붙여넣기 → 정확 ✅

</div>

</div>

<div class="mt-6">

| 역할 | 누가 잘할까 |
|------|:---|
| 분류·판단·요약·다듬기 (의미공간 일) | 🤖 **AI** |
| 정확한 계산·합계·평균 | 📊 **엑셀 / 코드** |

</div>

<div class="mt-4 text-center text-base font-bold">
💡 AI는 <span class="text-blue-500">*연상 기계*</span>이지 <span class="text-red-500">*계산 기계*</span>가 아닙니다
</div>

---
layout: two-cols
---

# ⏱ 실습 ② — 휴가 사유 분류

<span class="text-2xl">**10분**</span>

::left::

## 진행

<v-clicks>

1. `휴가신청_사유_50건.txt` 열어 전체 복사
2. ChatGPT 새 대화 → 프롬프트 + 데이터:

```
[역할] 당신은 관리부 인사 담당자
[작업] 50건을 의미별로 분류
[출력] | # | 사유 | 분류 | 근거 |
[데이터]
(붙여넣기)
```

3. 결과 5건 *육안 검증*

</v-clicks>

::right::

## 기록 워크시트

<v-clicks>

- 같은 의미인데 *표기가 다른* 사유 **몇 건**?
- 엑셀이라면 매칭 못 잡았을 사유 한 가지
- *분류 애매한* 사유 한 가지

</v-clicks>

<div class="mt-6 text-xs opacity-70">
⏰ 시간 안 되면 30건만 해도 OK
</div>

---
layout: section
---

# 2교시 (계속) — 핵심 원리 3

<div class="text-4xl mt-4">작업기억</div>

<div class="opacity-60 mt-4 text-xl">

👶 AI는 매일 출근하는 *신입사원*

</div>

---
layout: center
class: text-center
---

# 👶 AI는 매일 출근하는 신입사원

<div class="text-xl mt-10 leading-relaxed max-w-3xl mx-auto">

어제 AI에게 *우리 회사 회의록 양식*을 알려줬더라도,

</div>

<div class="text-xl mt-6 leading-relaxed max-w-3xl mx-auto">

오늘 **새 대화**를 열면 — AI는 <span class="text-red-500 font-bold">모릅니다</span>.

</div>

<div class="text-2xl mt-8 font-bold">
어제의 모든 가르침은 사라졌습니다. 🌬️
</div>

---

# 새 대화 = 완전 리셋 🔄

| 대화 ① (어제) | 대화 ② (오늘 새 채팅) |
|---|---|
| ✅ "당신은 회의록 담당자" 역할 부여 | ❌ 역할 없음 |
| ✅ 우리 회사 양식 5문단 설명 | ❌ 양식 정보 없음 |
| ✅ 발언자 표기 규칙 알려줌 | ❌ 규칙 없음 |
| → **완벽한 회의록** 결과 | → *위키백과처럼 어색한* 결과 |

<div class="mt-8 text-center text-xl">
🧠 AI가 *바보가 된 게* 아닙니다.<br>
<span class="text-blue-500 font-bold">그냥 어제의 기억이 통째로 사라진 것</span>.
</div>

---

# 교육생분이 자주 하는 착각 №1 🤔

<div class="text-center text-2xl mt-8 leading-relaxed space-y-4">

<v-clicks>

<div>*"엇? 어제는 잘 됐는데 오늘은 왜 이상하지?"*</div>

<div>*"AI가 일부러 그러나?"*</div>

<div>*"내가 뭘 잘못 친 건가?"* 😵</div>

</v-clicks>

</div>

<div v-click class="mt-12 p-6 rounded-xl bg-yellow-50 border-2 border-yellow-400 text-center">

→ 아닙니다. **새 채팅을 여셨거나, 시간이 너무 지났거나, 다른 대화에서 작업한 것**입니다.<br>
→ AI의 *기억력*은 본인 머리로 따라가지 마세요. <span class="font-bold">항상 0이라고 가정</span>하세요.

</div>

---

# 대응 전략 3가지 ⚙️

<div class="grid grid-cols-1 gap-4 mt-6">

<v-clicks>

<div class="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">

**① 자주 쓰는 맥락을 *텍스트 파일로 저장*** ← <span class="text-red-500 font-bold">이게 곧 MD 프롬프트 파일!</span>

<div class="text-sm opacity-70 mt-1">3교시 본론에서 정식 다룸</div>

</div>

<div class="p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500">

**② Custom Instructions 활용** (ChatGPT *"나에 대해"* 설정)

<div class="text-sm opacity-70 mt-1">본인 계정 내 *모든 대화*에 자동 반영 / 단, 동료에게 공유 불가</div>

</div>

<div class="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">

**③ 재사용 가능한 프롬프트 *한 덩어리*** 만들기

<div class="text-sm opacity-70 mt-1">회사 맥락 + 역할 + 출력 형식 = 한 번에 묶어서 복사</div>

</div>

</v-clicks>

</div>

<div v-click class="mt-6 text-center text-base">
🔮 *방금 ①번이 우리 교육의 핵심입니다. 3교시 시작하면 본인 손으로 한 번 만들어 보실 거예요.*
</div>

---

# 📋 클립보드 워크플로우 — 이번 교육의 *기본기*

<div class="font-mono bg-gray-900 text-green-300 p-6 rounded-xl mt-6 text-lg leading-loose text-center">

```
1️⃣  원본 데이터를 클립보드에 복사
         ↓
2️⃣  AI에게 *맥락과 함께* 붙여 요청
         ↓
3️⃣  결과를 다시 복사
         ↓
4️⃣  엑셀 / HWP / 메일창에 붙여넣기
```

</div>

<div class="mt-8 text-center text-lg">
도구가 ChatGPT든 Gemini든 — <span class="text-blue-500 font-bold">이 4단계는 살아남습니다</span>
</div>

<div class="mt-4 text-center text-sm opacity-70">
⚠️ 교육생분의 70%는 *2단계*에서 *맥락*을 빼먹습니다. 오늘 그 습관을 고치는 게 목표.
</div>

---
layout: two-cols
---

# ⏱ 실습 ③ — 신입사원 체험

<span class="text-2xl">**10분**</span>

::left::

## 진행

<v-clicks>

1. 실습 ①의 *좋은 프롬프트* 결과 (기존 결과로 OK)
2. **새 채팅 열기** (왼쪽 *"새 대화"* 버튼)
3. 데이터만 붙여넣고 *"정리해줘"* 한 줄
4. 두 결과를 *나란히* 비교

</v-clicks>

::right::

## 기록

| 칸 | 적기 |
|---|------|
| 두 결과의 *가장 큰 차이* | (한 문장) |
| *어이없는 부분* 하나 | (한 문장) |
| **다음에 *반드시 복사*해 둘 맥락 한 줄** | (한 줄) |

<div class="mt-4 text-sm bg-yellow-50 p-2 rounded">
🌱 마지막 "한 줄"이 곧 본인의<br>
**첫 MD 프롬프트의 씨앗**
</div>

---
layout: center
class: text-center
---

# ☕ 휴식 10분

<div class="text-xl mt-12 opacity-80">

3교시: 오늘의 진짜 클라이맥스 ⭐<br>
**나만의 MD 프롬프트 파일** 만들기

</div>

<div class="text-6xl mt-12">⏰</div>

---
layout: section
---

# 3교시 — ⭐ MD 프롬프트 파일

<div class="opacity-60 mt-4 text-xl">

📂 내 업무를 *MD 파일로 박아두는* 시간

</div>

---
layout: center
class: text-center
---

# 🎯 MD 파일은 *AI에게 같은 일을 매번 시키는 도구*

<div class="text-xl mt-10 leading-relaxed max-w-3xl mx-auto">

한 번 만들어 두면 —

</div>

<div class="text-2xl mt-6 leading-relaxed max-w-3xl mx-auto font-bold">

다음 달도, 그 다음 달도,<br>
다음 분기도, 부서 이동을 해도

</div>

<div class="text-3xl mt-8 font-bold">
🎉 <span class="text-blue-500">복사 한 번에 같은 결과</span>
</div>

---

# 텍스트는 텍스트가 *아니다* — 같은 글, 3가지 표기

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded-lg bg-gray-100 border border-gray-300">

**(A) 메모장**

```
2026년 5월 행사 안내
일시 5월 30일 오후 2시
장소 본사 5층 대회의실
대상 전 임직원
준비물 사원증 명찰
```

<div class="text-xs text-red-600 mt-2">😩 사람도 읽기 힘듦, AI도 모름</div>

</div>

<div class="p-3 rounded-lg bg-yellow-50 border border-yellow-400">

**(B) 한글(HWP) 표**

<div class="text-sm">화려한 표<br>셀 색깔<br>중간 정렬<br>진한 글씨…</div>

<div class="text-xs text-red-600 mt-4">🚫 복사해 붙이면<br>**서식이 모두 사라짐**</div>

</div>

<div class="p-3 rounded-lg bg-green-50 border-2 border-green-500">

**(C) 마크다운** ⭐

```markdown
## 2026년 5월 행사

| 항목 | 내용 |
|------|------|
| 일시 | 5/30 14시 |
| 장소 | 본사 5층 |
```

<div class="text-xs text-green-700 mt-2">✅ 사람도 AI도 둘 다 OK</div>

</div>

</div>

<div class="mt-6 text-center text-lg">
💎 마크다운 = 사람과 AI가 *모두 잘 읽는* <span class="text-blue-500 font-bold">공통어</span>
</div>

---

# Markdown 5문법 — 5분이면 끝 📝

<div class="mt-2">

| # | 문법 | 입력 | 결과 |
|:---:|:---:|:---|:---|
| 1 | **헤딩** | `# 큰 제목` &nbsp; `## 중간` &nbsp; `### 작은` | 글의 위계 |
| 2 | **목록** | `- 첫 항목`<br>`- 둘째 항목` | 글머리표 |
| 3 | **굵게** | `**중요**` | **중요** |
| 4 | **표** | `\| A \| B \|`<br>`\|---\|---\|` | 표 |
| 5 | **코드** | ` ``` ` 위아래 감싸기 | 데이터 영역 분리 |

</div>

<div class="mt-6 text-center text-lg">
🎯 이 5개만 알면 AI 응답의 <span class="text-blue-500 font-bold">90%</span>가 읽힘<br>
<span class="text-sm opacity-70">+ AI에게 줄 글의 **90%**를 쓸 수 있음</span>
</div>

<div class="mt-2 text-center text-sm">
🌐 라이브 시연 → <span class="font-mono bg-gray-100 px-2 py-1 rounded">markdownlivepreview.com</span>
</div>

---

# 📂 MD 프롬프트 파일이 뭐예요?

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

교육생분의 PC 어딘가에 *조용히 잠들어 있다가*,<br>
일이 생기면 *깨워서* 쓰는 텍스트 파일.

<div class="mt-4 p-4 bg-blue-50 rounded-lg text-sm">

**한 번 만들어 두면**:

- 회의록 정리 → `회의록_정리.md` 복사
- ChatGPT 새 대화에 붙여넣기
- 메모만 끝에 추가 → 끝
- 🎉 *매번 새로 프롬프트 쓰는 번거로움 0*

</div>

</div>

<div>

```
📂 내 PC \ 문서 \ 프롬프트 \
   ├── 회의록_정리.md
   ├── 거래처_메일_초안.md
   ├── 공문_다듬기.md
   ├── 안내문_작성.md
   ├── 휴가사유_분류.md
   └── 행사_안내문.md
```

</div>

</div>

<div class="mt-6 p-3 rounded-lg bg-yellow-50 border-2 border-yellow-400 text-center text-lg">
✨ 이것이 <span class="font-bold">본 1회차 교육의 핵심 산출물</span>
</div>

---

# ⭐ 6개 영역 — 표준 템플릿

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div>

```markdown
# [작업명] 프롬프트

## [역할]
당신은 (주)멋진엔지니어링
관리부 ○○ 담당자입니다.

## [작업]
(한 줄로 — 무엇을 해달라는지)

## [판단 기준]
- 규칙 1
- 규칙 2
- 모호하면 [확인필요]

## [출력 형식]
(원하는 모양 - 표/목록/문단)

## [예시]
입력: (샘플)
출력: (결과 샘플)

## [데이터]
(매번 갈리는 부분)
```

</div>

<div>

| 영역 | 비유 |
|------|------|
| **[역할]** | 신입사원에게 *명함* |
| **[작업]** | 업무 *지시서* |
| **[판단 기준]** | *판단 매뉴얼* |
| **[출력 형식]** | *결재 양식지* |
| **[예시]** | *모범 답안* |
| **[데이터]** | *오늘치 입력* |

<div class="mt-4 p-2 bg-blue-50 rounded text-xs">
💡 6칸을 한 번만 잘 채워두면<br>
[데이터]만 갈아 끼우는 일이 <span class="font-bold">평생 반복</span>됩니다
</div>

</div>

</div>

---

# 🎬 라이브 시연 — `회의록_정리.md` 만들기

<div class="text-base mt-3 leading-relaxed">

<v-clicks>

1. **메모장 열기** (Win 시작 → 메모장)
2. 6칸 템플릿을 **그대로 복사** → 붙여넣기
3. *회의록 정리용*으로 6칸 채우기 (강사가 *생각하며* 채움)
4. **파일 → 다른 이름으로 저장 → `회의록_정리.md`**
5. **ChatGPT 새 대화** → 전체 복사·붙여넣기
6. 마지막 `[데이터]` 아래에 회의메모 5줄 추가 → Enter
7. ✨ 결과 — **사내 결재용 회의록 그대로**
8. *다른* 회의메모로 같은 작업 → 같은 품질 ✅
9. *새 채팅* 열어서 같은 파일 다시 → 또 같은 품질 ✅

</v-clicks>

</div>

<div v-click class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-center text-lg font-bold">
🚀 이게 본 교육이 가는 길입니다
</div>

<!--
강사 노트:
- 회의메모_샘플_3건.txt에서 샘플 1 사용
- "이거 마법의 부적 아닙니다, 그냥 텍스트 파일" 강조
-->

---

# 교육생분이 빠지기 쉬운 *함정 3가지* 🪤

<div class="grid grid-cols-1 gap-3 mt-6">

<v-clicks>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

**함정 ①** ❌ *매번 새로 프롬프트를 쓴다*

→ MD 파일로 *한 번만* 쓰고 *복사 재사용*. 머리 안 굴려도 됨.

</div>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

**함정 ②** ❌ *AI 답변이 마음에 안 들면 답변을 다시 시킨다*

→ 답변이 아니라 **MD의 [판단 기준]·[예시]를 *수정해서 저장***. 다음에 또 같은 문제 안 생김.

</div>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

**함정 ③** ❌ *내 비법 프롬프트는 내 머릿속에 있음*

→ MD 파일이면 **부서원에게 *공유 가능***. 후임자 인수인계도 *파일 전송* 한 번.

</div>

</v-clicks>

</div>

---

# 💎 1회차에서 가져가는 *가장 중요한 표*

<div class="mt-4">

| 비교 항목 | 평범한 메모 | **MD 프롬프트 파일** |
|---------|-----------|---------------------|
| 다음 달에 다시 쓸 수 있나? | "어떻게 썼더라..." 😵 | **파일 열면 끝** ✅ |
| 동료에게 공유 가능? | 말로 설명 (10분) | **파일 전송 (3초)** 📨 |
| AI 결과 품질 | *그때그때 다름* | **매번 같은 수준** 🎯 |
| 개선 가능? | 머릿속에서 어림 | **파일을 *고쳐서 저장*** 🔧 |
| 휴가·이직 시 인수인계 | "본인이 잘 해보세요" 😬 | **"이 폴더 통째로 드릴게요"** 🎁 |

</div>

<div class="mt-8 text-center text-lg">
📸 이 한 장의 표가 1회차에서 <span class="text-blue-500 font-bold">교육생분이 가져가는 가장 큰 인사이트</span>
</div>

---
layout: section
---

# 3교시 (계속) — 인터뷰 프롬프트

<div class="opacity-60 mt-4 text-xl">

🎤 AI를 *인터뷰어*로 바꿔 보자

</div>

---
layout: center
class: text-center
---

# 🎤 AI를 *인터뷰어*로 바꿔 보자

<div class="text-lg mt-10 leading-relaxed max-w-3xl mx-auto">

지금까지의 MD 프롬프트는 <span class="font-bold">교육생분 → AI</span> 방향.<br>
*"이거 해주세요"* 하면 AI가 결과를 줌.

</div>

<div class="text-lg mt-8 leading-relaxed max-w-3xl mx-auto">

**인터뷰 프롬프트는 *방향이 반대*** —<br>
*"당신이 인터뷰어다, 나에게 질문해라"* → AI가 **교육생분에게 질문**

</div>

<div class="text-xl mt-8 font-bold">
🪞 답만 하다 보면 <span class="text-blue-500">본인도 몰랐던 본인 업무 지도</span>가 완성
</div>

---

# 두 가지 MD 프롬프트 — 한눈에 비교

<div class="mt-4">

| 일반 MD 프롬프트 | **인터뷰 MD 프롬프트** |
|----------------|---------------------|
| 교육생분 → 데이터 → AI → 결과 | AI 질문 ↔ 교육생분 답 ↔ AI 다음 질문 … |
| **1턴** (한 방에) | **여러 턴** 대화 |
| 데이터가 *이미 있을 때* 적합 | 데이터가 *내 머릿속에만 있을 때* 적합 |
| 회의록 정리, 휴가 분류 | 업무 정리, 도구 사양, OJT |
| 회의록 담당자 · 분류기 · 작성기 | **🗞 신문기자 · 컨설턴트 · 코치** |

</div>

<div class="mt-8 text-center text-lg">
🎯 인터뷰 프롬프트가 빛나는 순간:<br>
*"내가 뭘 모르는지 모를 때"*, *"머릿속에 있는데 글로 못 쓸 때"*
</div>

---

# 🎬 라이브 시연 — `homework-interviewer.md`

<div class="text-base mt-4">

<v-clicks>

1. `homework-interviewer.md` 파일을 *메모장으로* 강사 화면에 띄움

2. *"이건 그냥 텍스트 파일입니다. 마법의 부적이 아닙니다.<br>
   안에는 *AI에게 인터뷰어가 되어달라*는 *부탁의 글*이 마크다운으로 쓰여 있을 뿐."*

3. ChatGPT 새 대화 → 전체 복사·붙여넣기 → Enter

4. AI의 **첫 질문**: *"안녕하세요. 먼저 어떤 부서에서 어떤 역할을…"*

5. 강사가 *본인 역할*로 한 줄 답변 → AI가 *후속 질문*

6. 1~2턴 더 → *AI가 잊었던 것까지 파고드는 모습*

</v-clicks>

</div>

<div v-click class="mt-6 p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">
🏠 *"오늘 저녁 본인 업무로 이걸 그대로 하시면 됩니다. 그게 과제."*
</div>

---

# 인터뷰 프롬프트는 *전 회차의 골격* 🏗

<div class="mt-6">

| 회차 | 어떤 인터뷰 프롬프트? | 결과물 |
|:---:|:---|:---|
| **1회차** (오늘 과제) | `homework-interviewer.md` | **업무 맥락 정의서** 📋 |
| 2회차 | 업무 흐름도용 (Mermaid 함께) | 업무 흐름도 + 도구 컨셉 📐 |
| 3회차 | `micro-tool-interviewer.md` | HTML 도구 사양서 ⚙️ |

</div>

<div class="mt-10 p-4 bg-blue-50 rounded-lg text-center text-base">
💎 본 교육 9시간이 끝나면, 본인의 *프롬프트 폴더*에는<br>
**일반 MD 프롬프트 여러 개 + 인터뷰 MD 프롬프트 1~2개**가 쌓여 있을 겁니다.<br>
<span class="font-bold text-blue-500 mt-2 inline-block">이게 진짜 자산입니다.</span>
</div>

---
layout: section
---

# 3교시 (계속) — 자동화 후보

<div class="opacity-60 mt-4 text-xl">

🎯 이번 교육에서 만들 *나의 도구*는?

</div>

---

# 자동화에 *적합한* 작업 — 4가지 조건

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg bg-green-50 border-2 border-green-500">

## ✅ MD 프롬프트가 빛나는 작업

<v-clicks>

- 매주·매월 **반복** 발생
- 입력·출력 *형식이 정형화* 가능
- **판단보다 *처리*** 가 많은 작업
- 한 번 만들면 **나만 써도** 가치 있음

</v-clicks>

</div>

<div class="p-4 rounded-lg bg-red-50 border-2 border-red-400">

## ❌ 적합하지 않은 작업

<v-clicks>

- 1년에 1~2번뿐인 작업
- 매번 결과물 양식이 *완전히 달라지는* 작업
- **결정 권한·책임**이 필요한 작업
- *정확한 숫자 계산* 만 하는 작업

</v-clicks>

</div>

</div>

---

# 관리부서 자동화 사례 — 영감 얻기 💡

<div class="text-sm opacity-80 mb-2">*"본인 업무에서 비슷한 게 떠오르는지 보세요"*</div>

| 부서 | 후보 예시 | MD 파일 이름 (가칭) | 시간 절감 |
|:---:|:---|:---|:---:|
| 총무 | 회의록 정리 | `회의록_정리.md` | 30분 → **3분** |
| 인사 | 휴가 사유 분류·집계 | `휴가사유_분류.md` | 1시간 → **5분** |
| 인사 | 채용 공고 문구 다듬기 | `채용공고_다듬기.md` | 2시간 → **15분** |
| 구매 | 거래처 답신 메일 초안 | `거래처_메일_초안.md` | 20분 → **2분** |
| 자산 | 자산 카드 분류 | `자산_분류.md` | 1시간 → **10분** |
| 총무 | 안내 문자 작성 | `안내문자_작성.md` | 10분 → **1분** |
| 일반 | 보고서 초안 다듬기 | `보고서_다듬기.md` | 1시간 → **15분** |
| 일반 | 공문 톤앤매너 다듬기 | `공문_다듬기.md` | 30분 → **5분** |

<div class="mt-4 text-center text-base">
🎯 *매월 *같은 일* 을 반복* 하고 있다 — 그게 <span class="font-bold text-blue-500">후보의 신호</span>
</div>

---
layout: two-cols
---

# ⏱ 실습 ④ — 본인 업무 후보 3개

<span class="text-2xl">**10분**</span>

::left::

## 워크시트

| # | 작업명 | 입력 → 출력 |
|:---:|:---|:---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

<div class="text-xs mt-2 opacity-70">+ 빈도 · 1회 소요 · MD 파일 이름</div>

::right::

## 작성 팁 💡

<v-clicks>

- *"내가 매주 / 매월 *같은 패턴* 으로 하는 일은?"*
- 너무 거창하게 ❌
  *"메일 초안 한 줄"* 도 훌륭한 후보
- **파일 이름**까지 적어두기
- 시간 모자라도 **3개 칸은 다 채우기**

</v-clicks>

<div v-click class="mt-4 p-3 bg-yellow-50 rounded text-xs">
🚀 다음 달 본인의 *업무 자동화 도구 후보 리스트*가 완성됩니다
</div>

---
layout: section
---

# 마무리

<div class="opacity-60 mt-4 text-xl">

오늘 정리 · 과제 · 2회차 예고

</div>

---

# 오늘 정리 — 5줄로 📌

<div class="space-y-3 mt-6 text-lg">

<v-clicks>

<div class="flex items-center gap-3">
<span class="text-3xl">1️⃣</span>
<div>**자동완성** — 맥락과 역할이 *모든 것을* 결정한다</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">2️⃣</span>
<div>**의미공간** — AI는 *별자리*로 단어를 본다 (계산은 약점)</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">3️⃣</span>
<div>**작업기억** — 매 대화는 *백지*, 신입사원에게 다시 알려주는 마음으로</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">4️⃣</span>
<div>**마크다운** — AI와 사람이 *모두 잘 읽는* 공통어</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">⭐</span>
<div>**MD 프롬프트 파일** — 한 번 만들면 *평생 재사용*하는 자동화 도구</div>
</div>

</v-clicks>

</div>

<div v-click class="mt-8 text-center text-lg">
🧳 자동화 후보 **3개** + MD 프롬프트 파일 **1개의 뼈대** 들고 2회차로!
</div>

---

# 과제 안내 📚

<div class="text-sm opacity-80 mb-2">**기한**: 6. 2.(화) 오전 9시까지</div>

<div class="grid grid-cols-1 gap-3 mt-2 text-sm">

<div class="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500">

**과제 ① — 업무 맥락 정의서 작성** *(필수)*

1. 운영팀 메일의 `homework-interviewer.md` 전체 복사
2. ChatGPT/Gemini *새 대화* → 붙여넣기 → Enter
3. AI 질문에 답변 (20~30분 / A4 2페이지)
4. 다운로드 텍스트 파일로 정리 + 대화 *공유 링크*

</div>

<div class="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-500">

**과제 ② — 자동화 후보 3개 워크시트** *(필수)*<br>
실습 ④ 표 정리해 첨부

</div>

<div class="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">

**과제 ③ — MD 프롬프트 파일 시범 작성** *(선택·강력 권장)*<br>
후보 3개 중 1개를 6칸 템플릿으로 작성

</div>

</div>

<div class="mt-3 text-sm">📨 **제출**: Google Forms (URL 별도 안내)</div>

---

# 다음 회차 예고 — 2회차 (6/2 화) 🎨

<div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mt-6 border-2 border-blue-200">

## "AI에게 *그림*까지 그리게 한다"

<div class="grid grid-cols-2 gap-4 mt-4 text-base">

- 🎨 **Mermaid** — 마크다운 안에서 *순서도* 그리기
- 📐 본인 업무의 *흐름도* 작성
- 🧩 프롬프트 3요소 (Input / Instruction / Output)
- ✨ 후보 3개 → **도구 1개 컨셉 확정**

</div>

</div>

<div class="mt-8 text-center text-lg">
다음 주에는 <span class="text-blue-500 font-bold">본인의 업무가 그림으로</span> 보입니다.<br>
<span class="text-sm opacity-70">그 그림에서 *이번에 도구로 만들 한 부분* 을 골라낼 거예요.</span>
</div>

---
layout: center
class: text-center
---

# 감사합니다 🎉

<div class="text-xl mt-10 opacity-90">

질문은 <span class="text-blue-500 font-bold">정보시스템실 상시 문의 채널</span>로

</div>

<div class="text-base mt-12 opacity-70">

*"오늘 못 다 들으신 부분이 있어도 2회차 시작 5분 복습에서 다시 짚어 드립니다."*

</div>

<div class="text-base mt-2 opacity-60">
부담 없이 가세요 😊
</div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setInterval(() => {
    const gotoDialog = document.getElementById('slidev-goto-dialog');
    if (gotoDialog) {
      gotoDialog.remove();
    }
  }, 500);
})
</script>

<style>
div#slidev-goto-dialog {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
  pointer-events: none !important;
  position: absolute !important;
  z-index: -99999 !important;
}

*, html, body, #slidev-app {
  cursor: default !important;
}
.slidev-cursor {
  display: none !important;
}
</style>
