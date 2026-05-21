[Console]::OutputEncoding = [Text.Encoding]::UTF8
chcp 65001 | Out-Null

$dir = "C:\Users\yooshin\Desktop\AI Education\ppt\public\tools"
$files = Get-ChildItem "$dir\*.html"

Write-Host "=== 1단계: 6개 파일 일괄 자동 마스킹 ===" -ForegroundColor Cyan

foreach ($f in $files) {
    Write-Host "처리: $($f.Name)" -ForegroundColor Yellow
    $c = Get-Content $f.FullName -Raw -Encoding UTF8

    # ─── 회사명 통일 (다른 슬라이드와 동일) ────────────
    $c = $c -replace '\(주\)유신', '(주)멋진엔지니어링'
    $c = $c -replace '유신엔지니어링', '멋진엔지니어링'
    $c = $c -replace '주식회사\s*유신', '(주)멋진엔지니어링'
    $c = $c -replace 'YooShin|Yoo Shin|yooshin|YOOSHIN|YOO-SHIN', 'DemoCompany' -casesensitive

    # ─── 전화·핸드폰 일괄 마스킹 ────────────
    # 010-XXXX-XXXX → 010-XXXX-XXXX (자릿수만 유지)
    $c = [regex]::Replace($c, '\b010-\d{4}-\d{4}\b', '010-XXXX-XXXX')
    # 일반 전화 02-XXX-XXXX / 031-XXX-XXXX / 070-XXXX-XXXX 등
    $c = [regex]::Replace($c, '\b0\d{1,2}-\d{3,4}-\d{4}\b', '0XX-XXXX-XXXX')

    # ─── 이메일 ────────────
    $c = [regex]::Replace($c, '[\w.+-]+@[\w-]+\.[\w.-]+', 'demo@example.co.kr')

    # ─── 사업자등록번호 / 법인등록번호 ────────────
    $c = [regex]::Replace($c, '\b\d{3}-\d{2}-\d{5}\b', 'XXX-XX-XXXXX')

    # ─── 주민등록번호 ────────────
    $c = [regex]::Replace($c, '\b\d{6}-[1-4]\d{6}\b', 'XXXXXX-XXXXXXX')

    # ─── 계좌번호 다양한 형식 (3+-3+-3+ / 3+-3+-3+-3+) ────────────
    $c = [regex]::Replace($c, '\b\d{3,6}-\d{3,6}-\d{3,8}(-\d{1,3})?\b', 'XXX-XXX-XXXXXX')

    Set-Content $f.FullName -Value $c -NoNewline -Encoding UTF8
}

Write-Host "=== 1단계 완료 ===" -ForegroundColor Green
