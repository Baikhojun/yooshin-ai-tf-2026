---
theme: seriph
title: AI 활용 2차 TF | 1회차
info: |
  ## AI 활용 2차 TF — 1회차
  LLM 원리 + MD 프롬프트 파일

  정보시스템실 · 2026. 5. 26.
fonts:
  sans: 'Yooshin, Noto Sans KR, sans-serif'
  serif: 'Yooshin, Noto Serif KR, serif'
  mono: 'D2Coding, Consolas, monospace'
css: ./style.css
canvasWidth: 1280
download: true
exportFilename: yooshin-2nd-tf-session-01
mdc: true
transition: slide-left
background: /cover-ai-native.jpg
class: text-center cover-hero
hideInToc: true
layout: cover
---

# AI-native로 가는 길

<div class="cover-sub">

2차 TF · **Session 01**

</div>

<div class="cover-tagline">

LLM 원리 + <span class="cover-accent">MD 프롬프트 파일</span>

</div>

<div class="abs-bl mx-14 my-12 cover-footer">
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
class: text-center slide-icebreaker
---

# 시작 전, 가볍게 손 들어 봅시다 ✋

<div class="slide-q-list">

<v-clicks>

**①** 오늘 아침까지 **ChatGPT 또는 Gemini를 켜 본 분?** — *손 들어 보세요*

**②** AI에게 시킬 때 *"어떻게 물어야 잘 답할까"* 를 **5초 이상 고민해 본 분?** — *손 들어 보세요*

**③** AI 답변이 *마음에 안 들어서* **그냥 창을 닫아본 분?** — *손 들어 보세요*

**④** **본인 업무에 AI를 *매일* 쓰고 있는 분?** — *손 들어 보세요*

</v-clicks>

</div>

<div v-click class="slide-focus-note">

💡 **오늘 교육 대상을 가르는 건 ④번뿐** — "업무에 AI를 *매일* 쓰고 있나요?"

<div class="slide-focus-sub mt-3">

**④에 손을 <span class="font-bold">안 든 분</span>이 대부분**이면 → <span class="text-yellow-500 font-bold">이 교육은 바로 여러분을 위한 것</span>입니다.

</div>

<div class="slide-focus-sub mt-2 opacity-90">

①~③은 손 든 분·안 든 분 **모두 환영** — AI를 써 본 적이 있어도 오늘 배울 게 있습니다.

</div>

</div>

---

# 큰 그림 — 9시간 뒤 뭐가 달라지나? 🎯

<div class="mt-6">

| 회차 | 일자 | 주제 | 회차 끝나면 내 손에 |
|:---:|:---:|:---|:---|
| **1회차 <span class="text-red-500">(오늘)</span>** | 5/26 (화) | LLM 원리 + **MD 프롬프트** | 업무 맥락 정의서 + 자동화 후보 3개 |
| 2회차 | 6/2 (화) | 출력 형식 (Mermaid) + 업무 대행 AI 컨셉 | 업무 흐름도 + 업무 대행 AI 컨셉 1건 |
| 3회차 | 6/9 (화) | 바이브 코딩 + 업무 대행 AI 완성 | **본인만의 HTML 업무 대행 AI v1** ✨ |

</div>

<div class="mt-3 text-center">
<span class="text-lg opacity-90">9시간 뒤, 교육생분 한 분 한 분의 손에<br>
<span class="text-2xl font-bold text-blue-500">본인 업무를 대신해주는 AI 한 개</span>가 쥐어집니다.</span>

<div class="mt-6 text-sm opacity-80">💡 <span class="font-bold">미리보기 — 이런 HTML 도구를 직접 만듭니다</span> (클릭하면 새 탭에서 열립니다)</div>

<div class="grid grid-cols-3 gap-2 mt-2 text-xs mx-auto">
<a href="./tools/01-chaksu.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">📄 착수계 자동 작성</a>
<a href="./tools/02-bid-winner.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">🎯 낙찰자 계산기</a>
<a href="./tools/03-collection.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">💰 수금액 정리</a>
<a href="./tools/04-contacts.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">📞 통합 연락처</a>
<a href="./tools/05-self-eval.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">📊 자체평가 산출기</a>
<a href="./tools/06-bank-transfer.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">🏦 은행 이체 정리</a>
</div>

<div class="mt-3 text-xs opacity-60">⚠ 위 예시는 <span class="font-bold">교육용 가공 데이터</span>로만 동작합니다 (개인정보·실거래정보 0건)</div>
</div>

---

# 본 교육이 *하지 않는* 일 🚫

<div class="grid grid-cols-1 gap-3 mt-3 text-lg">

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

<div class="mt-3 text-center text-lg">
모두 <span class="text-blue-500 font-bold">이미 갖고 계시거나 무료로 쓸 수 있는 것</span>.<br>
<span class="opacity-70 text-base">새 프로그램 설치 없음. 카톡으로 사진 보내는 것보다 쉬워요.</span>
</div>

---

# ⭐ 1회차 목표 — 오늘 끝나면 이걸 할 수 있다

<div class="grid grid-cols-2 gap-3 mt-2">

<v-clicks>

<div class="p-4 rounded-xl bg-blue-50 border-2 border-blue-300">

**① AI가 왜 그런 답을 하는지 *설명할 수 있다*** 💡

<div class="text-xs opacity-70 mt-2">친구가 "ChatGPT 별 거 없던데?" → "맥락을 안 줘서 그래" 한 마디</div>

</div>

<div class="p-4 rounded-xl bg-purple-50 border-2 border-purple-300">

**② AI에게 줄 글을 *마크다운으로* 정리** ✍️

<div class="text-xs opacity-70 mt-2">`#`, `-`, `**`, 표, 코드블록 — 5분이면 배움</div>

</div>

<div class="p-4 rounded-xl bg-yellow-50 border-2 border-yellow-400">

**③ ⭐ 본인 업무용 *MD 프롬프트 파일* 뼈대** 📂

<div class="text-xs opacity-70 mt-2">`회의록_정리.md` 같은 파일 1개 — 다음 달에도 *복사* 한 번</div>

</div>

<div class="p-4 rounded-xl bg-green-50 border-2 border-green-300">

**④ 본인 업무에서 *자동화 후보 3개*** 🎯

<div class="text-xs opacity-70 mt-2">2회차에 도구로 만들 *재료*</div>

</div>

</v-clicks>

</div>

---
layout: center
class: text-center slide-hero
---

# 1회차의 진짜 성공 장면 🎬

<div class="text-left bg-gray-900 text-green-300 p-4 rounded-xl font-mono text-sm leading-relaxed mx-auto mt-2">

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
| **1교시** | 13:00 ~ 13:50 | AI가 답을 만드는 방식 · **자동완성** | "AI는 다음 단어를 예측하는 자동완성 엔진이에요" |
| ☕ | 13:50 ~ 14:00 | 휴식 10분 | — |
| **2교시** | 14:00 ~ 14:50 | AI가 단어를 분류하는 방식 · **의미공간** + 매번 잊는 **작업기억** + 인터뷰 프롬프트 | "단어는 별자리로, 대화마다 기억은 리셋" |
| ☕ | 14:50 ~ 15:00 | 휴식 10분 | — |
| **3교시 ⭐** | 15:00 ~ 15:50 | **MD 프롬프트 파일 만들기** + 자동화 후보 정리 | "내 업무를 MD 파일로 박아두면 다음에도 똑같이 쓸 수 있어요" |
| 마무리 | 15:50 | 종료 — 정리·과제·예고·Q&A | — |

</div>

---
layout: statement
class: text-center slide-statement
---

# 두 가지 부탁 🙏

<div class="slide-statement-block">

📵 **스마트폰**은 <span class="text-yellow-500 font-bold">가방 안</span>에,<br>
반드시 <span class="text-yellow-500 font-bold">무음·진동 OFF</span>로 부탁드립니다.

</div>

<div class="slide-statement-block">

💻 **실습용 PC**는 <span class="text-yellow-500 font-bold">전원 ON · 브라우저 열기</span>,<br>
손에 <span class="text-yellow-500 font-bold">마우스를 쥔 채로</span> 들어주세요.

</div>

<div class="slide-statement-note">
강사가 시연할 때 <span class="font-bold">교육생분도 같이 클릭</span>해 보는 것이 가장 빠른 학습입니다.<br>
가만히 듣기만 하면 — *내일 출근하면 다 잊습니다*.
</div>

---
layout: section
---

# 1교시 — 핵심 원리 1

<div class="text-4xl mt-4">자동완성</div>

<div class="opacity-60 mt-4 text-xl">

🤖 AI는 다음 단어를 예측하는 자동완성 엔진

</div>

---

# 🧊 아이스브레이커 — "이것은 무엇일까?"

<div class="mt-6 text-lg">

## 규칙

- ChatGPT 또는 Gemini 자유 사용 (PC로)
- **사진 업로드 금지** — 본인이 직접 글로 설명만
- 8분 안에 — A·B 두 사물 중 **하나만** 골라 도전

## 진행

1. 다음 두 슬라이드의 사진을 보고 떠오르는 단어를 **두 개**만 적어요
2. ChatGPT 또는 Gemini에 "이건 뭘까요?" 와 함께 그 두 단어를 같이 입력
3. AI가 정답 단어를 말하면 손 들기 ✋
4. 가장 먼저 끌어낸 분이 **어떤 단어를 썼는지 공유**

</div>

<div class="mt-3 text-center text-xl">
같은 사진이라도 <span class="text-blue-500 font-bold">설명(맥락)이 달라지면</span><br>AI의 추측이 완전히 달라져요 — 상품은 없어요 😄
</div>

---

# 🐟 A 사물 — 이건 뭘까요?

<div class="grid grid-cols-2 gap-3 mt-2 items-stretch">

<div class="flex items-center">
<img src="/icebreaker-fish.jpg" class="icebreaker-img rounded-xl shadow-2xl" />
</div>

<div class="flex flex-col justify-center text-lg">

**힌트는 없습니다.**

떠오르는 단어 **두 개**를 적어, AI에게 물어보세요.

<div class="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded text-base opacity-90">
예시 입력:<br>
"파란, 바다 — 이게 뭘까요?"<br>
"외계 생물, 무지개 — 이게 뭘까요?"
</div>

<div class="mt-3">
같은 사진이지만 어떤 두 단어를 고르느냐로<br>AI 답이 **완전히 갈립니다**.
</div>

</div>

</div>

---

# 🌊 B 사물 — 이건 뭘까요?

<div class="grid grid-cols-2 gap-3 mt-2 items-stretch">

<div class="flex items-center">
<img src="/icebreaker-bridge.jpg" class="icebreaker-img rounded-xl shadow-2xl" />
</div>

<div class="flex flex-col justify-center text-lg">

**힌트는 없습니다.**

떠오르는 단어 **두 개**를 적어, AI에게 물어보세요.

<div class="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded text-base opacity-90">
예시 입력:<br>
"다리, 물 — 이게 뭘까요?"<br>
"운하, 독일 — 이게 뭘까요?"
</div>

<div class="mt-3">
핵심은 **얼마나 적은 단어로**<br>정답을 끌어내느냐 입니다.
</div>

</div>

</div>

<!--
[강사 노트 — 아이스브레이커 정답·힌트]

═══ A 사물: 파란 바다 민달팽이 (Glaucus atlanticus) ═══

▶ 정답 단어:
   - 한국명: "파란 용", "바다 민달팽이", "글라우쿠스"
   - 영문: "Blue Dragon", "Glaucus atlanticus"

▶ 왜 어려운가:
   - 한국인 대부분 *처음 보는 생물* (희귀한 해양 무척추동물)
   - "물고기처럼 보이지만 실은 *민달팽이*" → 직관과 어긋남
   - 사람들이 "외계 생물", "산호", "물고기" 같은 단어로 시작하면 AI도 헤맴

▶ 정답 유도 키워드 (교육생분이 이런 단어를 쓰면 AI가 빨리 맞힘):
   - "파란", "바다", "민달팽이", "용처럼 생긴"
   - 진짜 핵심: "바다 + 민달팽이" — 두 단어만으로 거의 정답
   - "독성", "전기충격" 같은 특징도 강력한 단서

═══ B 사물: 마그데부르크 수로교 (Magdeburg Water Bridge, 독일) ═══

▶ 정답 단어:
   - "수로교", "수도교", "운하 다리"
   - 영문: "Water Bridge", "Aqueduct Bridge"

▶ 왜 어려운가:
   - "다리 위에 물(강)이 흐른다" — 직관과 완전히 어긋남
   - 일반인은 "그냥 다리", "운하" 정도까지밖에 못 좁힘
   - 한국에서 보기 어려운 구조물

▶ 정답 유도 키워드:
   - "다리 위에 물", "운하", "수로", "강이 강을 건너는"
   - 진짜 핵심: "다리 위로 배가 다니는 다리"
   - "독일", "엘베강", "마그데부르크" 같은 지명은 너무 어렵 → 안 써도 OK

═══ 게임 종료 후 강사 멘트 ═══

▶ "같은 사진인데, '바다 민달팽이' 또는 '다리 위에 물' 같은 한두 단어가 들어가니 AI가 바로 맞혔죠?"
▶ "이게 오늘의 첫 단어 — *맥락(context)*. AI는 사진을 본 게 아니라, 여러분이 쓴 글의 *다음 단어*를 예측한 거예요."
▶ "맞히기 어려운 단어일수록, *맥락 한 줄*이 어마어마하게 큰 차이를 만듭니다."
-->


---
layout: center
class: text-center slide-hero
---

# 🤖 AI는 다음 단어를 예측하는 자동완성 엔진

<div class="text-2xl mt-3 leading-relaxed">

AI는 *의미를 이해해서 답하는 것*이 <span class="text-red-500">아닙니다</span>.

</div>

<div class="text-2xl mt-3 leading-relaxed">

여러분이 쓴 글의<br>
**다음에 올 가장 그럴듯한 단어를 예측해서 이어 붙이는 엔진**이에요.

</div>

<div class="text-2xl mt-3 leading-relaxed">
🎯 그래서 — <span class="text-blue-500 font-bold">앞에 뭘 써 주느냐</span>가 모든 것을 결정합니다.
</div>

---

# 빈칸 채우기 — 한국 직장인 버전

<div class="exercise-card">

<div class="exercise-instruction">다음 빈칸을 채우시오.</div>

<div class="exercise-prompt">"내일 회의 시간을 _____"</div>

<div class="prob-list">

<div class="prob-row">
<span class="prob-num">(1)</span>
<div class="prob-track"><div class="prob-fill" style="width:38%"></div><span class="prob-label is-top">잡아주세요.</span></div>
<span class="prob-pct">38%</span>
</div>

<div class="prob-row">
<span class="prob-num">(2)</span>
<div class="prob-track"><div class="prob-fill" style="width:27%"></div><span class="prob-label">조정해주세요.</span></div>
<span class="prob-pct">27%</span>
</div>

<div class="prob-row">
<span class="prob-num">(3)</span>
<div class="prob-track"><div class="prob-fill" style="width:18%"></div><span class="prob-label">알려주세요.</span></div>
<span class="prob-pct">18%</span>
</div>

<div class="prob-row">
<span class="prob-num">(4)</span>
<div class="prob-track"><div class="prob-fill" style="width:12%"></div><span class="prob-label">확인해주세요.</span></div>
<span class="prob-pct">12%</span>
</div>

<div class="prob-row">
<span class="prob-num">(5)</span>
<div class="prob-track"><div class="prob-fill" style="width:5%"></div><span class="prob-label">늦춰주세요.</span></div>
<span class="prob-pct">5%</span>
</div>

</div>

</div>

<div class="exercise-note">
→ AI는 <span class="font-bold">가장 확률 높은</span> 단어를 고를 뿐
</div>

<div class="exercise-tip">
💡 강사가 한 마디: "여기서 <span class="text-blue-500 font-bold">맥락을 한 줄만</span> 더 주면 답이 어떻게 바뀔까요?"
</div>

<!--
라이브: ChatGPT에 "내일 회의 시간을" 만 보내고 결과 확인.
-->

---

# 맥락 한 줄로 답이 바뀐다 ✨

<div class="exercise-card">

<div class="exercise-instruction">맥락을 한 줄 추가했을 때 — 다음 빈칸을 채우시오.</div>

<div class="exercise-prompt">"거래처 부장님께 보낼 메일을 쓰는 중입니다. 내일 회의 시간을 _____"</div>

<div class="prob-list">

<div class="prob-row">
<span class="prob-num">(1)</span>
<div class="prob-track"><div class="prob-fill" style="width:41%"></div><span class="prob-label is-top">말씀드리려 합니다.</span></div>
<span class="prob-pct">41%</span>
</div>

<div class="prob-row">
<span class="prob-num">(2)</span>
<div class="prob-track"><div class="prob-fill" style="width:28%"></div><span class="prob-label">안내드리고자 합니다.</span></div>
<span class="prob-pct">28%</span>
</div>

<div class="prob-row">
<span class="prob-num">(3)</span>
<div class="prob-track"><div class="prob-fill" style="width:17%"></div><span class="prob-label">공지드립니다.</span></div>
<span class="prob-pct">17%</span>
</div>

<div class="prob-row">
<span class="prob-num">(4)</span>
<div class="prob-track"><div class="prob-fill" style="width:10%"></div><span class="prob-label">알려드립니다.</span></div>
<span class="prob-pct">10%</span>
</div>

</div>

</div>

<div class="exercise-note">
**같은 빈칸** → 앞에 <span class="text-blue-500 font-bold">"거래처 부장님께 메일"</span> 한 줄 추가 → **반말체가 아닌 격식체**로 답이 바뀜
</div>

<div class="exercise-tip opacity-85">
🪄 마법이 아니라 **확률**입니다. AI는 "부장님께 메일" 뒤에 "말씀드리려"가 흔하다는 통계를 외울 뿐.
</div>

---

# ❌ 보통 우리가 AI에 던지는 방식

<div class="exercise-card">

<div class="exercise-instruction">아래처럼 맥락 없이 던지면 — AI는 어떻게 답할까요?</div>

<div class="bad-prompt-pre">

```
어제 회의록 정리 좀 해줘

오전 10시 시작
김 부장: 다음달 행사 예산이 부족함
박 차장: 그래서 어떻게 하실 건지
김 부장: 일단 본사에 추가 요청
이 과장: 예산은 다음주 화요일까지 확정 필요
박 차장: 알겠음
```

</div>

<div class="exercise-outcomes">

<div class="exercise-outcome bad">

**AI 결과**: 어색한 표 + 행동 항목 누락 + 담당자 모호

</div>

<div class="exercise-outcome neutral">

**교육생분 반응**: *"음... 별로네"* → 창 닫음 → **다시 손으로 정리** 😩

</div>

</div>

</div>

---

# ✅ 좋은 프롬프트 — 오늘 끝나면 이렇게 쓸 수 있다

<div class="exercise-card">

<div class="exercise-instruction">역할 · 작업 · 판단 기준 · 출력 형식을 한 번에 주면 —</div>

<div class="prompt-stack">

```markdown
[역할]
당신은 (주)멋진엔지니어링 관리부 회의록 담당자입니다.

[작업]
아래 회의 메모를 회사 표준 회의록 양식으로 정리해 주세요.

[판단 기준]
- 결정 사항과 의견을 구분
- 행동 항목은 반드시 담당자와 기한 포함
- 발언자는 "○○ 부장", "○○ 과장" 형태로 통일
- 책임 불명확 → [확인필요] 표기

[출력 형식]
## 회의록 | 항목 | 내용 |
| 일시 | (추출) | | 참석자 | (추출) |
### 결정 사항 / ### 검토 사항 (담당·기한)

[메모]
(회의 메모 본문 붙여넣기)
```

<div class="prompt-result-bar">

<span class="prompt-result-label">✅ **결과**</span>

<span>사내 결재용 회의록에 **그대로 붙여넣을** 수준</span>

<span class="prompt-result-tip">→ MD 파일로 저장하면 다음 회의 때 **메모만 갈아 끼우면** 됩니다</span>

</div>

</div>

</div>

<!--
시연 노트: 한 번에 점프 ❌. 단계별로 (1) 메모만 → (2) 역할 추가 → (3) 판단 기준 추가 → (4) 출력 형식 추가.
마지막: "이 좋은 프롬프트 전체를 메모장에 저장해 두면, 다음 회의 때 메모만 갈아 끼우면 됩니다. 3교시에 정식으로 배웁니다."
-->

---

# 비교: 같은 AI, 다른 결과 ⚖️

<div class="exercise-card">

<table class="exercise-compare">
<thead>
<tr><th></th><th>❌ 나쁜 프롬프트</th><th>✅ 좋은 프롬프트</th></tr>
</thead>
<tbody>
<tr><td>역할 부여</td><td>없음</td><td>회의록 담당자</td></tr>
<tr><td>출력 형식</td><td>AI가 알아서 (대개 어색)</td><td>사내 표준 양식</td></tr>
<tr><td>판단 기준</td><td>누락</td><td>명시</td></tr>
<tr><td>결과 활용성</td><td>"다시 손으로 고쳐야 함"</td><td><strong>"복사 → 결재판"</strong></td></tr>
<tr><td>다음 달 재사용</td><td>매번 새로 씀</td><td>🎉 <strong>파일 복사 한 번</strong></td></tr>
</tbody>
</table>

</div>

<div class="exercise-note text-xl">
🎯 같은 AI, 같은 데이터 — <span class="text-blue-500 font-bold">프롬프트만 바뀌면 결과가 달라진다</span>
</div>

---

# ⏱ 실습 ① — 법인카드 사용내역 정리

<div class="exercise-instruction">**15분 · 다 같이** — 같은 데이터, 다른 프롬프트로 결과를 비교합니다.</div>

<div class="exercise-card exercise-lab">

<div class="exercise-lab-box">

<h3>① 진행</h3>

<ol>
<li><strong>법인카드 50건</strong> 복사<br>
<a href="https://raw.githubusercontent.com/Baikhojun/yooshin-ai-tf-2026/main/demo-data/%EB%B2%95%EC%9D%B8%EC%B9%B4%EB%93%9C_50%EA%B1%B4.txt" target="_blank" class="text-blue-500 underline">📄 데이터 열기</a></li>
<li><strong>맥락 없이</strong> 새 대화에 붙여넣기</li>
<li><strong>역할 + 형식</strong> 추가 후 재시도</li>
<li><strong>두 결과 비교</strong></li>
</ol>

</div>

<div class="exercise-lab-box">

<h3>② 워크시트</h3>

<table class="exercise-lab-ws">
<thead><tr><th>시도</th><th>결과</th></tr></thead>
<tbody>
<tr><td>맥락 없이</td><td>(한 문장)</td></tr>
<tr><td>역할+형식</td><td>(한 문장)</td></tr>
<tr><td>차이점</td><td>(한 문장)</td></tr>
</tbody>
</table>

<div class="mt-2 opacity-80">→ 마지막 3분 공유</div>

</div>

</div>

<div class="exercise-lab-banner">
💡 같은 데이터 — <strong>무엇을 어떻게 묻느냐</strong>로 결과가 달라집니다 (1교시 핵심)
</div>

---
layout: center
class: text-center break-slide
---

# ☕ 휴식 10분

<div class="slide-break-body">

2교시 예고<br>
**별자리처럼 분류(의미공간)** + **대화마다 리셋되는 기억**

</div>

<div class="slide-break-icon">⏰</div>

---
layout: section
---

# 2교시 — 핵심 원리 2

<div class="text-4xl mt-4">의미공간</div>

<div class="opacity-80 mt-6 text-xl leading-relaxed">

AI는 단어를 **별자리**처럼 본다<br>
— 같은 동네에 모이는 비슷한 의미들

</div>

---
layout: center
class: text-center slide-hero
---

# ✨ AI는 단어를 별자리로 본다

<div class="text-xl mt-3 leading-relaxed mx-auto">

엑셀의 **VLOOKUP**은 글자가 *완벽히 일치*해야 매칭합니다.

</div>

<div class="text-xl mt-3 leading-relaxed mx-auto">

AI는 다릅니다.<br>
AI는 단어를 <span class="text-blue-500 font-bold">별자리처럼</span> 봅니다.

</div>

<div class="text-lg mt-3 opacity-90 mx-auto">
비슷한 의미는 <span class="text-yellow-500 font-bold">가까이</span>, 다른 의미는 <span class="text-gray-500 font-bold">멀리</span><br>
글자 하나가 달라도 **같은 무리**로 인식.
</div>

---

# 🎮 함께 체험 — "꼬맨틀" (의미 거리 게임)

<div class="grid grid-cols-[1fr_1fr] gap-4 mt-2 items-center">

<div class="text-lg">

**꼬맨틀** = 정답 단어와 **의미상 얼마나 가까운지** 점수로 보여주는 게임

<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded">
👉 <a href="https://semantle-ko.newsjel.ly/" target="_blank" class="text-blue-600 dark:text-blue-300 font-bold underline">semantle-ko.newsjel.ly</a> 열기
</div>

## 진행 방법

1. 각자 휴대폰·PC로 사이트 열기
2. 떠오르는 **단어 2개**씩 말로 외쳐 보기
3. **누가 가장 점수 높은 단어**를 찾았는지 공유
4. 상품은 없습니다 😄

</div>

<div class="text-base">

## 왜 이 게임이 의미공간일까?

- 정답이 "**바다**"라면<br>
  → "물" → **80점** (가까움)<br>
  → "사과" → **2점** (먼 동네)

- 이게 바로 **의미공간**에서<br>"단어 사이 거리"를 재는 방식

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-sm">
💡 AI는 **수십만 차원**에서<br>이런 거리를 계산합니다 (사람은 3차원까지가 한계)
</div>

</div>

</div>

---

# 5초 만에 이해하기 — "휴가" 별자리

<div class="text-center mt-2 text-base opacity-80">"휴가" 주변에 어떤 단어들이 모여 있을까요?</div>

<div class="font-mono text-sm bg-gray-900 text-green-300 p-4 rounded-xl mt-3 leading-loose">

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

→ AI는 "휴가 / 연차 / 반차 / 연가 / 휴직 / 병가 / 경조 / 외출"을 **같은 동네 단어**로 인식<br>
→ VLOOKUP은 "연차"와 "연가"가 **다른 글자**라서 매칭 실패

</div>

<div class="mt-4 p-3 bg-purple-50 dark:bg-purple-900 rounded text-base">
✨ **게다가 AI는 한 단어를 여러 동네에 동시에 둘 수 있습니다**<br>
예: "**자녀 학교 행사로 휴가**" → ① 휴가 동네 ② 가족 동네 ③ 평일 외출 동네 — **세 태두리에 동시에 포함** (다차원 분류)
</div>

<div class="mt-3 text-lg text-center font-bold">
💡 한 마디로: AI는 **글자**가 아니라 <span class="text-blue-500">**뜻**</span>을 봅니다.
</div>

---

# 의미공간이 빛나는 사례 — 휴가 사유 분류

<div class="text-sm opacity-80 mb-2">(주)멋진엔지니어링 관리부 — 한 달간 휴가 신청 50건 중 발췌 (표기·길이·뉘앙스가 제각각)</div>

| 휴가 신청 사유 (원본) | VLOOKUP | AI (의미공간 — 2~3차원) |
|:---|:---:|:---|
| `강남세브란스 건강검진 (위·대장)` | ❌ | **의료** · **검진** |
| `치과 스케일링 + 충치 2개 치료` | ❌ | **의료** · **치과** |
| `둘째 B형 간염 2차 접종 병원 동행` | ❌ | **의료** · **가족** · **육아** |
| `장인어른 70회 생신 잔치 (대구)` | ❌ | **경조사** · **가족** · **지방** |
| `처형 딸 결혼식 (오전만)` | ❌ | **경조사** · **가족** |
| `7/25 포장 이사 (1일)` | ❌ | **개인사정** · **이사** |
| `초4 딸 학예회 (오후)` | ❌ | **가족** · **교육** · **육아** |
| `8월 초 제주 3박4일 (가족)` | ❌ | **휴양** · **더위** · **섬** |

<div class="mt-3 p-2 bg-purple-50 dark:bg-purple-900 rounded text-sm text-center">
🤖 AI는 한 사유를 **여러 의미 동네**에 동시에 둡니다 — VLOOKUP은 글자 1개만 달라도 매칭 실패
</div>

<!--
라이브: ChatGPT에 8건만 보내고 "이 휴가 사유들을 의미별로 묶어 표로 정리해줘" 한 줄 → 결과 보여줌
-->

---

# 그래도 안 되는 것 — "같은 글자, 다른 의미" ⚠️

<div class="text-base opacity-80 mb-3">
법인카드 적요에 똑같이 "외부 미팅"이라고만 적혀 있어도,<br>
<span class="font-bold">누구를 만나느냐</span>에 따라 비용 처리 항목이 완전히 달라집니다.
</div>

| 적요 (카드 내역) | 정답 처리 | 이유 |
|---------------|:---|:---|
| 거래처 부장과 점심 | **접대비** | 외부 인사 |
| 협력업체와 견적 협의 | **회의비** | 업무 협의 |
| 본사 임원과 식사 | **복리후생비** | 사내 |
| 채용 후보자와 카페 | **채용 경비** | 채용 절차 |
| `업무 미팅` (메모만) | ❓ 판단 불가 | **정보 부족** |

<div class="mt-5 p-3 bg-red-50 dark:bg-red-900 rounded text-base">
💡 **결론**: 의미공간이 강력해도 — 적요가 *너무 짧으면* AI도 답을 못 만듭니다.<br>
→ 그래서 **누가·언제·어디서** 같은 **맥락 정보**를 같이 줘야 해요 (1교시 핵심)
</div>

<div class="mt-6 text-center text-lg">
🧠 AI는 **적요의 *맥락***을 읽고 처리 — <span class="text-red-500 font-bold">엑셀 수식으론 절대 불가능</span>
</div>

---

# 의미공간의 함정 — AI는 *계산기*가 아닙니다 ⚠️

<div class="text-base opacity-80 mb-4">교육생분이 자주 빠지는 함정 №1</div>

<div class="grid grid-cols-2 gap-3">

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
layout: section
---

# 인터뷰 프롬프트 — AI를 인터뷰어로

<div class="opacity-80 mt-4 text-lg">

🎤 본인 머릿속 업무 지식을 **질문으로 끌어내는** 기술

</div>

---

# 🎤 AI를 인터뷰어로 바꿔 보자

<div class="grid grid-cols-2 gap-4 mt-2 text-sm">

<div class="slide-card bg-gray-50 dark:bg-gray-800">

**일반 MD 프롬프트** — 교육생분 → AI

"이거 해주세요" → AI가 결과를 줌 (**1턴**)

</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**인터뷰 MD 프롬프트** — AI → 교육생분

"당신이 인터뷰어, 나에게 질문해" → **여러 턴** 대화

</div>

</div>

<div class="slide-banner mt-3 bg-yellow-50 dark:bg-yellow-900">
🪞 답하다 보면 **본인도 몰랐던 업무 지도**가 완성됩니다
</div>

---

# 두 가지 MD 프롬프트 — 한눈에 비교

| | 일반 MD | **인터뷰 MD** |
|:---|:---|:---|
| 흐름 | 데이터 → AI → 결과 | AI 질문 ↔ 답 ↔ 다음 질문 |
| 적합 | 데이터가 **이미 있을 때** | 데이터가 **머릿속에만 있을 때** |
| 예시 | 회의록 정리, 휴가 분류 | 업무 정리, 도구 사양 |
| 비유 | 담당자 · 분류기 | **신문기자 · 코치** |

---

# 🎬 라이브 시연 — `homework-interviewer-prompt.md`

<div class="text-sm mt-1 leading-snug">

1. **`homework-interviewer-prompt.md`** 강사 화면에 띄우기 — 마법의 부적이 아니라 **부탁의 글**
2. ChatGPT **새 대화** → 전체 복사·붙여넣기 → Enter
3. AI **첫 질문**: "어떤 부서에서 어떤 역할을…"
4. 한 줄 답변 → AI **후속 질문** 1~2턴 더
5. 끝나면 **업무 맥락 문서** (A~E 영역) 받기

</div>

<div class="slide-banner mt-2 bg-green-50 dark:bg-green-900">
🏠 오늘 저녁 본인 업무로 그대로 하시면 됩니다 — **그게 과제**
</div>

---

# 인터뷰 프롬프트 — 3회차까지 이어짐 🏗

| 회차 | 프롬프트 | 결과물 |
|:---:|:---|:---|
| **1회차** | `homework-interviewer-prompt.md` | **업무 맥락 정의서** |
| 2회차 | 업무 흐름도용 | Mermaid 흐름도 |
| 3회차 | `micro-tool-interviewer.md` | HTML 도구 사양서 |

<div class="slide-banner mt-2 bg-blue-50 dark:bg-blue-900">
💎 9시간 뒤 — 일반 MD 여러 개 + **인터뷰 MD 1~2개** = 본인 자산
</div>

---

# ⏱ 실습 ② — 인터뷰 프롬프트 직접 써보기 🎤

<div class="slide-sub">**10분 · 1인 1대화창**</div>

<div class="grid grid-cols-2 gap-3">

<div class="slide-card bg-gray-50 dark:bg-gray-800">

**① 진행**

1. ChatGPT/Gemini **새 대화** 열기
2. **`homework-interviewer-prompt.md`** 전체 붙여넣기<br>
   <a href="https://raw.githubusercontent.com/Baikhojun/yooshin-ai-tf-2026/main/demo-data/homework-interviewer-prompt.md" target="_blank" class="text-blue-500 underline text-xs">📄 파일 열기</a>
3. AI **질문 1개**씩 → 솔직히 답하기
4. **인터뷰 노트** 확인 → **업무 맥락 문서** (A~E) 받기

<div class="mt-2 p-2 bg-blue-100 dark:bg-blue-950 rounded text-xs">
부서·역할 → 반복 업무 → 도구 → 병목 → 자동화 후보
</div>

</div>

<div class="slide-card border border-gray-200 dark:border-gray-600">

**② 손에 남는 것**

- **인터뷰 노트** (AI가 정리)
- **업무 맥락 문서** (A4 2p 목표)
- 3교시 MD의 **씨앗**

<div class="mt-2 font-mono text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">
A 역할 / B 업무 / C 병목 / D 도구 / E 기타
</div>

<div class="mt-2 text-xs opacity-80">⏰ 시간 부족 시 5~7번 질문만 OK</div>

</div>

</div>

---
layout: section
---

# 핵심 원리 3 — 작업기억

<div class="text-4xl mt-6">매일 첫 출근하는 신입사원</div>

<div class="opacity-80 mt-6 text-xl leading-relaxed">

AI는 **새 대화창을 열 때마다**<br>
어제 알려준 모든 걸 **0%부터 다시 배웁니다**

</div>

---
layout: center
class: text-center slide-hero
---

# 👶 AI는 매일 첫!! 출근하는 신입사원

<div class="text-xl mt-3 leading-relaxed mx-auto">

어제 AI에게 **우리 회사 회의록 양식**을 알려줬어도,

</div>

<div class="text-xl mt-2 leading-relaxed mx-auto">

오늘 **새 대화창**을 열면 — AI는 <span class="text-red-500 font-bold">하나도 기억 못 합니다</span>.

</div>

<div class="text-2xl mt-3 font-bold">
어제 알려준 것 = 전부 사라짐 🌬️
</div>

<div class="text-lg mt-3 opacity-80">
→ 그래서 우리는 <span class="text-blue-500 font-bold">"MD 파일"</span>이라는 도구를 만듭니다 (3교시 핵심)
</div>

---

# 새 대화 = 완전 리셋 🔄

| 대화 ① (어제) | 대화 ② (오늘 새 채팅) |
|---|---|
| ✅ "당신은 회의록 담당자" 역할 부여 | ❌ 역할 없음 |
| ✅ 우리 회사 양식 5문단 설명 | ❌ 양식 정보 없음 |
| ✅ 발언자 표기 규칙 알려줌 | ❌ 규칙 없음 |
| → **완벽한 회의록** 결과 | → *위키백과처럼 어색한* 결과 |

<div class="mt-3 text-center text-xl">
🧠 AI가 *바보가 된 게* 아닙니다.<br>
<span class="text-blue-500 font-bold">그냥 어제의 기억이 통째로 사라진 것</span>.
</div>

---

# 자주 하는 착각 — "어제는 잘 됐는데?" 🤔

<div class="text-center text-2xl mt-3 leading-relaxed space-y-3">

<v-clicks>

<div>"엇? 어제는 잘 됐는데 오늘은 왜 이상하지?"</div>

<div>"AI가 일부러 그러나?"</div>

<div>"내가 뭘 잘못 친 건가?" 😵</div>

<div class="text-blue-500 font-bold mt-4">→ AI 잘못이 아닙니다. 어제의 가르침이 전부 사라진 것뿐</div>

</v-clicks>

</div>

<div v-click class="mt-4 p-4 rounded-xl bg-yellow-50 border-2 border-yellow-400 text-center">

→ 아닙니다. **새 채팅을 여셨거나, 시간이 너무 지났거나, 다른 대화에서 작업한 것**입니다.<br>
→ AI의 *기억력*은 본인 머리로 따라가지 마세요. <span class="font-bold">항상 0이라고 가정</span>하세요.

</div>

---

# 대응 전략 3가지 ⚙️

<div class="slide-fill">

<div class="grid grid-cols-1 gap-3 mt-2">

<v-clicks>

<div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**① 자주 쓰는 맥락을 *텍스트 파일로 저장*** ← <span class="text-red-500 font-bold">이게 곧 MD 프롬프트 파일!</span>

<div class="text-sm opacity-80 mt-1">3교시 본론에서 정식 다룸 — **본 교육의 핵심**</div>

</div>

<div class="p-3 rounded-lg bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-500">

**② AI 도구에 *맥락을 등록*** (요즘 무료로 가능)

<div class="text-sm opacity-80 mt-1 grid grid-cols-2 gap-2">

<div>
🔵 <span class="font-bold">Gemini Gems</span> (제미나이)<br>
<span class="text-xs">→ "회의록 정리 전용 봇" 등으로 미리 만들어 두기</span>
</div>

<div>
🟢 <span class="font-bold">ChatGPT GPTs</span> (GPT)<br>
<span class="text-xs">→ 본인 전용 맞춤 GPT를 만들어 동료에게도 공유 가능</span>
</div>

</div>

</div>

<div class="p-3 rounded-lg bg-green-50 dark:bg-green-900 border-l-4 border-green-500">

**③ 재사용 가능한 프롬프트 *한 덩어리*** 만들기

<div class="text-sm opacity-80 mt-1">회사 맥락 + 역할 + 출력 형식 = 한 번에 묶어서 복사 (=MD 프롬프트)</div>

</div>

</v-clicks>

</div>

<div v-click class="slide-fill-bottom text-center text-base">
🔮 **①번 = 오늘의 핵심**. ②번은 익숙해진 다음에 천천히 도전하세요.
</div>

</div>

---

# 📋 클립보드 워크플로우 — 이번 교육의 *기본기*

<div class="slide-fill">

<div class="font-mono bg-gray-900 text-green-300 p-4 rounded-xl mt-2 text-lg leading-loose text-center">

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

<div class="mt-3 text-center text-lg">
도구가 ChatGPT든 Gemini든 — <span class="text-blue-500 font-bold">이 4단계는 살아남습니다</span>
</div>

<div class="slide-fill-bottom text-center text-sm opacity-70">
⚠️ 교육생분의 70%는 *2단계*에서 *맥락*을 빼먹습니다. 오늘 그 습관을 고치는 게 목표.
</div>

</div>

---
layout: center
class: text-center break-slide
---

# ☕ 휴식 10분

<div class="slide-break-body">

3교시: 오늘의 진짜 클라이맥스 ⭐<br>
**나만의 MD 프롬프트 파일** 만들기

</div>

<div class="slide-break-icon">⏰</div>

---
layout: section
---

# 3교시 — ⭐ MD 프롬프트 파일

<div class="opacity-60 mt-4 text-xl">

📂 내 업무를 *MD 파일로 박아두는* 시간

</div>

---
layout: center
class: text-center slide-hero
---

# 🎯 MD 파일은 *AI에게 같은 일을 매번 시키는 도구*

<div class="text-xl mt-3 leading-relaxed mx-auto">

한 번 만들어 두면 —

</div>

<div class="text-2xl mt-3 leading-relaxed mx-auto font-bold">

다음 달도, 그 다음 달도,<br>
다음 분기도, 부서 이동을 해도

</div>

<div class="text-3xl mt-3 font-bold">
🎉 <span class="text-blue-500">복사 한 번에 같은 결과</span>
</div>

---

# 텍스트도 다 같은 텍스트가 아니다 — 같은 글, 3가지 표기

<div class="text-base opacity-80 mb-3 text-center">
같은 한국어처럼 보여도, **글자를 담는 방식**(인코딩·서식)이 다르면 AI가 못 읽을 수도 있어요.
</div>

<div class="grid grid-cols-3 gap-3 mt-2">

<div class="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300">

**(A) 그냥 메모장**

```
2026년 5월 행사 안내
일시 5월 30일 오후 2시
장소 본사 5층 대회의실
대상 전 임직원
```

<div class="text-xs text-red-600 mt-2">😩 사람이 봐도 줄글, **구조 없음** — AI도 무엇이 표인지 모름</div>

</div>

<div class="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 border border-yellow-400">

**(B) 한글(HWP)·워드 표**

<div class="text-sm">화려한 표<br>셀 색깔<br>중간 정렬<br>진한 글씨…</div>

<div class="text-xs text-red-600 mt-4">🚫 보기엔 예쁘지만, **AI에 복사** → 서식·표 다 사라짐 (그냥 한 줄 텍스트)</div>

</div>

<div class="p-3 rounded-lg bg-green-50 dark:bg-green-900 border-2 border-green-500">

**(C) 마크다운** ⭐

```markdown
## 2026년 5월 행사

| 항목 | 내용 |
|------|------|
| 일시 | 5/30 14시 |
| 장소 | 본사 5층 |
```

<div class="text-xs text-green-700 dark:text-green-300 mt-2">✅ 사람·AI 둘 다 같은 구조로 읽음</div>

</div>

</div>

<div class="mt-5 p-3 bg-blue-50 dark:bg-blue-900 rounded text-center text-lg">
💎 **마크다운 = AI와 사람이 같이 잘 읽는 *공통어***<br>
<span class="text-sm opacity-80">(나라마다 말은 달라도 영어처럼 — AI 세상의 공통어가 마크다운)</span>
</div>

---

# Markdown 5문법 — 기호 이름까지 외우면 끝 📝

<div class="mt-2 text-sm">

| # | 문법 | 기호 (이름·발음) | 입력 예시 | 결과 |
|:---:|:---:|:---|:---|:---|
| 1 | **헤딩** | `#` — **샵 / 해시** | `# 큰 제목`<br>`## 중간`<br>`### 작은` | 글 위계 |
| 2 | **목록** | `-` — **하이픈 / 대시** | `- 첫 항목`<br>`- 둘째 항목` | 글머리표 |
| 3 | **굵게** | `**` — **별표 두 개 (애스터리스크)** | `**중요**` | **중요** |
| 4 | **표** | `\|` — **버티컬 바 / 파이프** | `\| A \| B \|`<br>`\|---\|---\|` | 표 |
| 5 | **코드** | ` ``` ` — **백틱 세 개** | ` ``` ` 위아래로 감싸기 | 데이터 영역 분리 |

</div>

<div class="mt-4 text-center text-lg">
🎯 이 5개만 알면 AI 응답의 <span class="text-blue-500 font-bold">90%</span>가 읽힙니다.
</div>

<div class="mt-2 text-center text-base">
🌐 직접 입력해보기 → <a href="https://markdownlivepreview.com/" target="_blank" class="text-blue-600 dark:text-blue-300 font-bold underline font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">markdownlivepreview.com</a>
</div>

---

# 📂 MD 프롬프트 파일이 뭐예요?

<div class="slide-fill">

<div class="grid grid-cols-2 gap-3 mt-1 items-stretch text-base">

<div>

<div class="mb-2">PC 어딘가에 **잠들어 있다가**, 일이 생기면 **깨워 쓰는** 텍스트 파일</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**한 번 만들면** (4단계)

1. `회의록_정리.md` **전체 복사**
2. ChatGPT **새 대화** 붙여넣기
3. `[데이터]` 아래 **오늘 메모** 추가
4. 🎉 **프롬프트 다시 쓸 필요 0**

</div>

</div>

<div class="slide-card bg-gray-100 dark:bg-gray-800 font-mono text-xs leading-snug">

```
📂 내 PC \ 문서 \ 프롬프트 \
   ├── 회의록_정리.md
   ├── homework-interviewer-prompt.md
   ├── 법인카드_적요_분류.md
   ├── 거래처_메일_초안.md
   └── 저녁_메뉴_추천.md
```

</div>

</div>

<div class="slide-fill-bottom slide-banner bg-yellow-50 dark:bg-yellow-900 border border-yellow-400">
✨ **1회차 핵심 산출물** — 오늘 실습 ③에서 **업무 1 + 개인 1** 만듭니다
</div>

</div>

---

# ⭐ 6개 영역 — 표준 템플릿

<div class="slide-fill">

<div class="grid grid-cols-2 gap-3 mt-1 text-sm">

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

</div>

</div>

<div class="slide-fill-bottom p-2 bg-blue-50 dark:bg-blue-900 rounded text-center text-sm">
💡 6칸을 한 번만 잘 채워두면 [데이터]만 갈아 끼우는 일이 <span class="font-bold">평생 반복</span>됩니다
</div>

</div>

---

# 🎬 라이브 시연 — 일상 MD 프롬프트 3종 비교

<div class="slide-fill">

<div class="text-base opacity-80 mb-2">
업무 외에도 — 일상에서 같은 MD 패턴이 똑같이 동작합니다. 다음 3개 중 **하나를 골라** 시연합니다.
</div>

<div class="grid grid-cols-3 gap-3 mt-1">

<div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900 border border-blue-400">

### 💊 약·증상 안내

`증상_정리_도우미.md`

<div class="text-sm mt-2 opacity-80">
가족이 "머리가 아파"라고 하면<br>
→ MD 붙여넣기 + 증상 메모<br>
→ **확인 질문 → 자가 케어 안내 + 병원 방문 기준**
</div>

</div>

<div class="p-3 rounded-lg bg-pink-50 dark:bg-pink-900 border border-pink-400">

### 👔 옷·코디 추천

`오늘_코디_추천.md`

<div class="text-sm mt-2 opacity-80">
"오늘 비, 미팅 3시"<br>
→ MD 붙여넣기 + 일정 메모<br>
→ **상의·하의·신발·우산** 추천 표
</div>

</div>

<div class="p-3 rounded-lg bg-orange-50 dark:bg-orange-900 border border-orange-400">

### 🍱 저녁 메뉴 추천

`저녁_메뉴_추천.md`

<div class="text-sm mt-2 opacity-80">
"냉장고에 두부, 김치, 계란"<br>
→ MD 붙여넣기 + 재료 목록<br>
→ **3가지 메뉴 + 5분 레시피**
</div>

</div>

</div>

<div class="mt-4 text-base">

## 시연 순서 (5분)

<v-clicks>

1. **메모장 열기** → MD 6칸 템플릿 붙여넣기 → 위 사례 중 1개로 6칸 채우기
2. **다른 이름으로 저장** → `*.md` 확장자 (예: `저녁_메뉴_추천.md`)
3. **ChatGPT 새 대화** → MD 전체 복사·붙여넣기 → 마지막 `[데이터]` 아래 실제 상황 1줄 추가
4. ✨ 결과 — **AI가 정해진 형식으로 답함**
5. 다른 상황으로 같은 파일 → 또 같은 형식 ✅

</v-clicks>

</div>

<div v-click class="slide-fill-bottom p-3 bg-green-50 dark:bg-green-900 border-l-4 border-green-500 rounded text-center text-lg font-bold">
🚀 업무도 일상도 — MD 한 장이면 같은 품질이 매번 나옵니다
</div>

</div>

<!--
강사 노트:
- 일상 사례 3개 중 강사가 1개 선택 (청중 반응 좋은 걸로)
- 본인 업무용 시연은 실습 ③에서 교육생분이 직접 진행
- "마법의 부적 아닙니다, 그냥 텍스트 파일" 강조
-->

---

# 교육생분이 빠지기 쉬운 *함정 3가지* 🪤

<div class="slide-fill">

<div class="grid grid-cols-1 gap-3 mt-2">

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

</div>

---

# 💎 1회차에서 가져가는 *가장 중요한 표*

<div class="slide-fill">

<div class="mt-2">

| 비교 항목 | 평범한 메모 | **MD 프롬프트 파일** |
|---------|-----------|---------------------|
| 다음 달에 다시 쓸 수 있나? | "어떻게 썼더라..." 😵 | **파일 열면 끝** ✅ |
| 동료에게 공유 가능? | 말로 설명 (10분) | **파일 전송 (3초)** 📨 |
| AI 결과 품질 | *그때그때 다름* | **매번 같은 수준** 🎯 |
| 개선 가능? | 머릿속에서 어림 | **파일을 *고쳐서 저장*** 🔧 |
| 휴가·이직 시 인수인계 | "본인이 잘 해보세요" 😬 | **"이 폴더 통째로 드릴게요"** 🎁 |

</div>

<div class="slide-fill-bottom text-center text-lg">
📸 이 한 장의 표가 1회차에서 <span class="text-blue-500 font-bold">교육생분이 가져가는 가장 큰 인사이트</span>
</div>

</div>

---
layout: section
---

# 자동화 후보 정리

<div class="opacity-80 mt-6 text-xl leading-relaxed">

🎯 본 교육이 끝난 뒤, 내가 만들 **업무 대행 AI**는?

</div>

---

# 자동화에 적합한 작업 — 4가지 조건

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-green-50 dark:bg-green-900 border-l-4 border-green-500">

**✅ MD 프롬프트가 빛나는 작업**

- 매주·매월 **반복** 발생
- 입·출력 **형식 정형화** 가능
- **판단보다 처리**가 많음
- 한 번 만들면 **나만 써도** 가치

</div>

<div class="slide-card bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

**❌ 적합하지 않은 작업**

- 1년에 **1~2번**뿐
- 매번 **양식이 완전히** 달라짐
- **결정 권한·책임** 필요
- **숫자 계산만** 하는 일

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

# ⏱ 실습 ③ — MD 파일 두 개 만들기 ⭐

<div class="slide-sub">**15분 · 1인 2파일**</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**🏢 업무용 MD 1개**

반복 업무 1가지 → MD 프롬프트 작성

- `회의록_정리.md`
- `법인카드_적요_분류.md`
- `메일_답장_초안.md`

<div class="mt-2 text-xs opacity-80">💡 다음 주 **그대로 다시 쓸** 파일</div>

</div>

<div class="slide-card bg-pink-50 dark:bg-pink-900 border-l-4 border-pink-500">

**🏠 개인용 MD 1개**

일상 반복 1가지 → MD 프롬프트 작성

- `오늘_저녁_메뉴_추천.md`
- `자녀_숙제_도우미.md`
- `여행_일정_정리.md`

<div class="mt-2 text-xs opacity-80">💡 부담 없이 **재미있게**</div>

</div>

</div>

<div class="slide-banner mt-2 bg-yellow-50 dark:bg-yellow-900">
🚀 오늘 끝나면 **MD 파일 2개** — 본 교육의 첫 자산
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
<div>**자동완성** — 맥락과 역할이 **모든 것을** 결정한다</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">2️⃣</span>
<div>**의미공간** — AI는 **별자리**로 단어를 본다 (계산은 약점)</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">3️⃣</span>
<div>**작업기억** — 매 대화는 **백지**, 매일 첫 출근하는 신입사원에게 알려주는 마음으로</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">4️⃣</span>
<div>**마크다운** — AI와 사람이 **모두 잘 읽는** 공통어</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">⭐</span>
<div>**MD 프롬프트 파일** — 한 번 만들면 **평생 재사용**하는 업무 대행 AI 뼈대</div>
</div>

</v-clicks>

</div>

<div v-click class="mt-3 text-center text-lg">
🧳 손에는 **MD 파일 2개**(업무 1 + 개인 1) — 다음 회차로 가져가는 첫 자산
</div>

---

# 과제 안내 📚

<div class="text-base opacity-80 mb-3">**기한**: 6. 2.(화) 오전 9시까지</div>

<div class="grid grid-cols-1 gap-3 mt-2 text-base">

<div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**과제 ① — 업무용 MD 파일 1개 완성** (필수)

오늘 실습 ③의 **업무용 MD 파일**을 다듬어 완성<br>
<span class="text-sm opacity-80">→ 다음 주 월요일에 그대로 다시 쓸 수 있는 형태로</span>

</div>

<div class="p-3 rounded-lg bg-pink-50 dark:bg-pink-900 border-l-4 border-pink-500">

**과제 ② — 개인용 MD 파일 1개 완성** (필수)

실습 ③의 **개인용 MD 파일**을 다듬어 완성<br>
<span class="text-sm opacity-80">→ 부담 없이, 재미로 만들어도 OK</span>

</div>

<div class="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500">

**과제 ③ — 인터뷰 프롬프트로 본인 업무 정리** (선택·강력 권장)

<a href="https://raw.githubusercontent.com/Baikhojun/yooshin-ai-tf-2026/main/demo-data/homework-interviewer-prompt.md" target="_blank" class="text-blue-500 underline">homework-interviewer-prompt.md</a> 로 **업무 맥락 문서**(A~E) 완성<br>
<span class="text-sm opacity-80">→ 2회차 Mermaid 흐름도 그릴 재료</span>

</div>

</div>

<div class="mt-4 text-base">📨 **제출**: Google Forms (URL 별도 안내)</div>

---

# 다음 회차 예고 — 2회차 (6/2 화) 🎨

<div class="slide-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 mt-2 text-sm">

<div class="text-base font-bold mb-2">"AI에게 **그림**까지 그리게 한다"</div>

<div class="grid grid-cols-2 gap-x-4 gap-y-1">

- 🎨 **Mermaid** — MD 안에서 순서도
- 📐 본인 업무 **흐름도** 작성
- 🧩 프롬프트 3요소 (Input / Instruction / Output)
- ✨ **업무 대행 AI 1개** 컨셉 확정

</div>

</div>

<div class="slide-banner mt-3">
다음 주 — **본인 업무가 그림으로** 보입니다. 그중 **도구로 만들 1부분**을 고릅니다.
</div>

---
layout: center
class: text-center thanks-slide
---

# 감사합니다 🎉

<div class="slide-thanks-body">

질문은 <span class="text-blue-500 font-bold">정보시스템실 상시 문의 채널</span>로

</div>

<div class="slide-thanks-quote">

*"오늘 못 다 들으신 부분이 있어도 2회차 시작 5분 복습에서 다시 짚어 드립니다."*

</div>

<div class="slide-thanks-foot">
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
