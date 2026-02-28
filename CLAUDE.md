# Dancing Cat Project

React + Vite 기반 춤추는 고양이 애니메이션 웹 페이지.

## Tech Stack
- React 18, Vite 6
- Pure CSS animations (no animation libraries)
- Inline SVG cat character

## Project Structure
```
src/
  components/
    DancingCat.jsx   - SVG 고양이 + 애니메이션 래퍼
    Controls.jsx     - Play/Pause 버튼
  styles/
    DancingCat.css   - 고양이 춤 애니메이션 keyframes
    Controls.css     - 버튼 스타일
  App.jsx            - 루트 컴포넌트 (isPlaying state 관리)
  App.css            - 레이아웃 + 타이틀 스타일
  index.css          - 글로벌 리셋 + 배경
```

## Commands
- `npm run dev` — 개발 서버 (Vite)
- `npm run build` — 프로덕션 빌드
- `npm run preview` — 빌드 결과 미리보기

## Key Decisions
- 외부 이미지 없이 인라인 SVG로 고양이 렌더링
- CSS `@keyframes`로 bounce, wave, wag 등 춤 동작 구현
- `isPlaying` state를 App에서 관리하고 props로 전달
- 반응형 디자인: 600px / 1200px breakpoints
