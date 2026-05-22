// slides.md: *italic* → **bold**, bold 내부 *italic* 은 plain text 로 병합
import fs from 'fs';

const path = new URL('../slides.md', import.meta.url);
let text = fs.readFileSync(path, 'utf8');

function stripNestedItalicInBold(input) {
  let prev;
  let out = input;
  do {
    prev = out;
    // 같은 줄 안에서만: **...*italic*...**
    out = out.replace(/\*\*([^*\n]*?)\*([^*\n]+?)\*([^*\n]*?)\*\*/g, '**$1$2$3**');
  } while (out !== prev);
  return out;
}

function italicToBold(input) {
  return input.replace(/(?<!\*)\*(?!\*)([^*\n]+?)(?<!\*)\*(?!\*)/g, '**$1**');
}

const before = (text.match(/(?<!\*)\*(?!\*)([^*\n]+?)(?<!\*)\*(?!\*)/g) ?? []).length;
text = stripNestedItalicInBold(text);
text = italicToBold(text);
text = text.replace(/\*{4,}/g, '**');
const after = (text.match(/(?<!\*)\*(?!\*)([^*\n]+?)(?<!\*)\*(?!\*)/g) ?? []).length;

fs.writeFileSync(path, text, 'utf8');
console.log(`italic: ${before} → ${after}`);
