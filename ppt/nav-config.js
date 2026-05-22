// 슬라이드별 상단 목차·유형 — useNav().currentPage (1-based)
// type: cover | break | thanks | section | hero | dense
// step/total = 해당 소단원 내 진행 (구간마다 1부터 리셋)
export default {
  1: { type: 'cover' },

  // ── 1회차 개요 (8) ──
  2: { type: 'dense', section: 0, topic: '손 들어 보기', step: 1, total: 8 },
  3: { type: 'dense', section: 0, topic: '9시간 로드맵', step: 2, total: 8 },
  4: { type: 'dense', section: 0, topic: '교육이 하지 않는 일', step: 3, total: 8 },
  5: { type: 'dense', section: 0, topic: '사용 도구 4종', step: 4, total: 8 },
  6: { type: 'dense', section: 0, topic: '1회차 목표', step: 5, total: 8 },
  7: { type: 'hero', section: 0, topic: '성공 장면', step: 6, total: 8 },
  8: { type: 'dense', section: 0, topic: '상세 목차', step: 7, total: 8 },
  9: { type: 'dense', section: 0, topic: '두 가지 부탁', step: 8, total: 8 },

  10: { type: 'section', section: 1, topic: '1교시 · 자동완성' },

  // ── 1교시 · 자동완성 (10) ──
  11: { type: 'dense', section: 1, topic: '아이스브레이커', step: 1, total: 10 },
  12: { type: 'dense', section: 1, topic: 'A 사물 퀴즈', step: 2, total: 10 },
  13: { type: 'dense', section: 1, topic: 'B 사물 퀴즈', step: 3, total: 10 },
  14: { type: 'hero', section: 1, topic: '자동완성이란?', step: 4, total: 10 },
  15: { type: 'dense', section: 1, topic: '빈칸 채우기', step: 5, total: 10 },
  16: { type: 'dense', section: 1, topic: '맥락 한 줄', step: 6, total: 10 },
  17: { type: 'dense', section: 1, topic: '나쁜 프롬프트', step: 7, total: 10 },
  18: { type: 'dense', section: 1, topic: '좋은 프롬프트', step: 8, total: 10 },
  19: { type: 'dense', section: 1, topic: '나쁨 vs 좋음', step: 9, total: 10 },
  20: { type: 'dense', section: 1, topic: '실습 ① 법인카드', step: 10, total: 10 },

  21: { type: 'break' },

  22: { type: 'section', section: 2, topic: '2교시 · 의미공간' },

  // ── 의미공간 (6) ──
  23: { type: 'hero', section: 2, topic: '별자리로 본다', step: 1, total: 6 },
  24: { type: 'dense', section: 2, topic: '꼬맨틀 게임', step: 2, total: 6 },
  25: { type: 'dense', section: 2, topic: '휴가 별자리', step: 3, total: 6 },
  26: { type: 'dense', section: 2, topic: '휴가 사유 분류', step: 4, total: 6 },
  27: { type: 'dense', section: 2, topic: '같은 글자 함정', step: 5, total: 6 },
  28: { type: 'dense', section: 2, topic: '계산기 아님', step: 6, total: 6 },

  29: { type: 'section', section: 2, topic: '인터뷰 프롬프트' },

  // ── 인터뷰 (4) ──
  30: { type: 'dense', section: 2, topic: '인터뷰어로', step: 1, total: 4 },
  31: { type: 'dense', section: 2, topic: 'MD 두 종류', step: 2, total: 4 },
  32: { type: 'dense', section: 2, topic: '2회차까지', step: 3, total: 4 },
  33: { type: 'dense', section: 2, topic: '실습 ②', step: 4, total: 4 },

  34: { type: 'section', section: 2, topic: '핵심 원리 3 · 작업기억' },

  // ── 작업기억 (4) ──
  35: { type: 'hero', section: 2, topic: '신입사원 비유', step: 1, total: 4 },
  36: { type: 'dense', section: 2, topic: '새 대화 = 리셋', step: 2, total: 4 },
  37: { type: 'dense', section: 2, topic: '어제는 됐는데?', step: 3, total: 4 },
  38: { type: 'dense', section: 2, topic: '대응 3가지', step: 4, total: 4 },

  39: { type: 'break' },

  40: { type: 'section', section: 3, topic: '3교시 · MD 파일' },

  // ── MD 파일 (9) ──
  41: { type: 'hero', section: 3, topic: 'MD 파일이란?', step: 1, total: 9 },
  42: { type: 'dense', section: 3, topic: '텍스트 3가지 표기', step: 2, total: 9 },
  43: { type: 'dense', section: 3, topic: 'Markdown 5문법', step: 3, total: 9 },
  44: { type: 'dense', section: 3, topic: 'MD 파일이 뭐예요?', step: 4, total: 9 },
  45: { type: 'dense', section: 3, topic: '6개 영역', step: 5, total: 9 },
  46: { type: 'dense', section: 3, topic: '표준 템플릿', step: 6, total: 9 },
  47: { type: 'dense', section: 3, topic: '일상 MD 3종', step: 7, total: 9 },
  48: { type: 'dense', section: 3, topic: '함정 3가지', step: 8, total: 9 },
  49: { type: 'dense', section: 3, topic: '핵심 비교표', step: 9, total: 9 },

  50: { type: 'section', section: 3, topic: '자동화 후보' },

  // ── 자동화 (4) ──
  51: { type: 'dense', section: 3, topic: '후보 정리', step: 1, total: 4 },
  52: { type: 'dense', section: 3, topic: '4가지 조건', step: 2, total: 4 },
  53: { type: 'dense', section: 3, topic: '관리부 사례', step: 3, total: 4 },
  54: { type: 'dense', section: 3, topic: '실습 ③', step: 4, total: 4 },

  55: { type: 'section', section: 3, topic: '마무리' },

  // ── 마무리 (3) ──
  56: { type: 'dense', section: 3, topic: '5줄 정리', step: 1, total: 3 },
  57: { type: 'dense', section: 3, topic: '과제 안내', step: 2, total: 3 },
  58: { type: 'dense', section: 3, topic: '2회차 예고', step: 3, total: 3 },

  59: { type: 'thanks' },
}
