# Raw_Egg 블로그

GitHub Pages에서 빌드 없이 바로 공개할 수 있는 정적 블로그입니다. 첫 번째 참고 사이트의 카테고리별 페이지, 두 번째의 인상적인 첫 화면, 세 번째의 빛나는 글자 느낌을 참고해 계란 테마로 새로 디자인했습니다.

## 사이트 구성

- `/` — 계란 일러스트가 있는 홈
- `/archive/` — 전체 글과 검색
- `/categories/` — 6개 카테고리 선택
- `/categories/<slug>/` — 카테고리별 독립 페이지
- `/about/` — Raw_Egg 소개
- `/posts/first-note/` — 첫 글

카테고리: 개발, CTF/Wargame, Bug Bounty, 블로그/기술문서, 논문/컨퍼런스, 공모전/자격증.

## GitHub Pages 게시

1. GitHub에서 `BackedEgg.github.io`라는 공개 저장소를 만듭니다.
2. 이 폴더 안의 모든 파일과 폴더를 저장소 **최상위 위치**에 올립니다. `.nojekyll`도 포함합니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **Deploy from a branch**를 고릅니다.
4. 브랜치 `backend`, 폴더 `/(root)`를 선택하고 저장합니다.
5. 배포 후 `https://BackedEgg.github.io/`를 확인합니다. GitHub Pages 주소의 사용자명은 GitHub 계정명입니다. 사이트 표시 이름은 `Raw_Egg`입니다.

GitHub 공식 안내: https://docs.github.com/en/pages/quickstart

## 글 추가와 수정

`build.cjs` 상단의 `cats` 배열과 `post` 내용을 수정한 뒤, 이 폴더에서 `node build.cjs`를 실행하면 정적 페이지가 다시 생성됩니다. 현재 스크립트는 첫 글 한 편을 위한 간단한 구조입니다. 글을 여러 편으로 확장하려면 `posts` 배열과 반복 생성 방식으로 바꾸세요.

자기소개 문구는 `build.cjs`의 `home`과 `about` 페이지 부분에서 수정할 수 있습니다. 색상과 장식은 `style.css`, `egg-extra.css`에서 바꿀 수 있습니다. `app.js`는 모바일 메뉴, 색상 모드, 목록 검색을 담당합니다.

현재 공개 이력으로 검증할 수 없는 경력이나 수상 내역은 넣지 않았습니다. 빈 카테고리는 기록을 추가할 때까지 안내 문구가 보입니다.

