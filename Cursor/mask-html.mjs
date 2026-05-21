// 6개 HTML 일괄 마스킹 (Node.js, UTF-8 안전)
import fs from 'node:fs';
import path from 'node:path';

const dir = 'C:\\Users\\yooshin\\Desktop\\AI Education\\ppt\\public\\tools';

const rules = [
  // ─── 회사명 통일 ─────────────────────────
  [/\(주\)\s*유신/g, '(주)멋진엔지니어링'],
  [/주식회사\s*유신/g, '(주)멋진엔지니어링'],
  [/유신_통합연락처/g, '통합연락처'],
  [/유신시/g, 'OO시'],
  [/유신사옥/g, '본사 사옥'],
  [/유신\s*본사/g, '본사'],

  // 영문 표기
  [/YooShin|YOOSHIN|YOO-SHIN/g, 'DemoCompany'],
  [/yooshin/g, 'democompany'],
  [/Yooshin/g, 'DemoCompany'],
  [/Yoo\s*Shin/g, 'DemoCompany'],

  // ─── 전화·핸드폰 ─────────────────────────
  [/\b010-\d{4}-\d{4}\b/g, '010-XXXX-XXXX'],
  [/\b0\d{1,2}-\d{3,4}-\d{4}\b/g, '0XX-XXXX-XXXX'],

  // ─── 이메일 (URL의 @버전 표기 제외) ─────────────────────────
  // 직전 문자가 / 또는 . 이면 제외 (URL/CDN 패턴 보호)
  [/(?<![/.\w])([a-zA-Z][\w.+-]*)@([a-zA-Z][\w-]*\.(?:co\.kr|com|net|org|kr))/g, 'demo@example.co.kr'],

  // ─── 사업자등록번호 ─────────────────────────
  [/\b\d{3}-\d{2}-\d{5}\b/g, 'XXX-XX-XXXXX'],

  // ─── 주민등록번호 ─────────────────────────
  [/\b\d{6}-[1-4]\d{6}\b/g, 'XXXXXX-XXXXXXX'],

  // ─── 알려진 실명 → 가공 ─────────────────────────
  [/채종헌/g, '담당자'],
  [/이태윤/g, '김민수'],
  [/최기술/g, '이지연'],
  [/최영준/g, '김민수'],
  [/이영미/g, '이지연'],
  [/조인영/g, '박상호'],
  [/황영신/g, '최영주'],
  [/김민용/g, '정현우'],
  [/최종대/g, '강은영'],
  [/박성수/g, '윤도현'],
  [/김달원/g, '임수빈'],
  [/정설희/g, '오민재'],
  [/선종완/g, '한지원'],
  [/임효빈/g, '김민수'],

  // ─── 내부 사업명 → 가공 ─────────────────────────
  [/통영항/g, '사업1 (가공)'],
  [/지개-남산/g, '사업2 (가공)'],
  [/하동권역/g, '사업3 (가공)'],
  [/밀양지구/g, '사업4 (가공)'],
  [/현풍 원교/g, '사업5 (가공)'],
  [/마곡구역 도시개발/g, '사업6 (가공)'],
  [/포천-화도/g, '사업7 (가공)'],
  [/신갈-수지, 인천공항/g, '사업8 (가공)'],
  [/인천공항 재포장/g, '사업9 (가공)'],

  // ─── "유신" 단독 단어 → "본사" (한글 경계) ─────────────────────────
  // 위에서 잡지 못한 *유신* 잔존 (예: "유신 협약&지분")
  [/(?<![가-힣A-Za-z])유신(?![가-힣A-Za-z])/g, '본사'],
];

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html'));

for (const f of files) {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  const orig = c.length;
  let touched = 0;
  for (const [pat, rep] of rules) {
    const before = c;
    c = c.replace(pat, rep);
    if (before !== c) touched++;
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log(`✓ ${f}: ${orig} → ${c.length} bytes, ${touched} rules`);
}
