// slides.md: **bold** 마크다운 제거 (코드블록·인라인 `code` 내부는 유지)
import fs from 'fs';

const filePath = new URL('../slides.md', import.meta.url);
const text = fs.readFileSync(filePath, 'utf8');

function stripBold(segment) {
  let out = segment;
  let prev;
  do {
    prev = out;
    out = out.replace(/\*\*([^*\n]+?)\*\*/g, '$1');
  } while (out !== prev);
  return out.replace(/\*\*/g, '');
}

function processLine(line) {
  const parts = line.split(/(`[^`]*`)/g);
  return parts.map((part, i) => (i % 2 === 1 ? part : stripBold(part))).join('');
}

function process(content) {
  const lines = content.split('\n');
  let inFence = false;
  const out = [];

  for (const line of lines) {
    if (/^\s*(`{3,}|~{3,})/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    out.push(inFence ? line : processLine(line));
  }
  return out.join('\n');
}

const before = (text.match(/\*\*/g) ?? []).length;
const result = process(text);
const after = (result.match(/\*\*/g) ?? []).length;

fs.writeFileSync(filePath, result, 'utf8');
console.log(`**: ${before} → ${after} (remaining should be inside \`code\` only)`);
