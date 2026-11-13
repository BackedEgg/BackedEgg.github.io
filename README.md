# Raw_Egg 블로그

GitHub Pages에서 빌드 없이 바로 공개할 수 있는 정적 블로그입니다. 첫 번째 참고 사이트의 카테고리별 페이지, 두 번째의 인상적인 첫 화면, 세 번째의 빛나는 글자 느낌을 참고해 계란 테마로 새로 디자인했습니다.

## 사이트 구성

- `/` — 계란 일러스트가 있는 홈
- `/archive/` — 전체 글과 검색
- `/categories/` — 8개 카테고리 선택
- `/categories/<slug>/` — 카테고리별 독립 페이지
- `/about/` — Raw_Egg 소개
- `/posts/my-values-and-goals/` — 첫 기록

카테고리: 개발, CTF/Wargame, Bug Bounty, 블로그/기술문서, 논문/컨퍼런스, 공모전, 자격증, Poc 구현.

## GitHub Pages 게시

1. GitHub에서 `BackedEgg.github.io`라는 공개 저장소를 만듭니다.
2. 이 폴더 안의 모든 파일과 폴더를 저장소 **최상위 위치**에 올립니다. `.nojekyll`도 포함합니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **Deploy from a branch**를 고릅니다.
4. 브랜치 `backend`, 폴더 `/(root)`를 선택하고 저장합니다.
5. 배포 후 `https://BackedEgg.github.io/`를 확인합니다. GitHub Pages 주소의 사용자명은 GitHub 계정명입니다. 사이트 표시 이름은 `Raw_Egg`입니다.

GitHub 공식 안내: https://docs.github.com/en/pages/quickstart

## 글 추가와 수정

새 글은 `posts/새-글-주소/` 폴더를 만들고 `meta.json`과 `content.txt`를 넣은 다음, 이 폴더에서 `node build.cjs`를 실행하면 기록 목록과 글 페이지가 생성됩니다. `meta.json`에는 `title`, `date`(YYYY-MM-DD), `excerpt`, `category`, `tags`를 적습니다. 목록 카드의 제목과 설명을 글 페이지와 다르게 표시하려면 `previewTitle`, `previewExcerpt`를 추가합니다. 전체 기록에만 올릴 글은 `category`를 `null`로 두고, 카테고리에 올릴 글은 `cats` 배열의 주소(slug)를 적습니다. `content.txt`의 빈 줄은 문단을 나누고 `Q.`로 시작하는 줄은 질문 제목, `A1.`처럼 번호가 붙은 줄은 답변 제목으로 표시됩니다. 생성된 HTML만 직접 고치면 다음 빌드 때 덮어써집니다.

자기소개 문구는 `build.cjs`의 `home`과 `about` 페이지 부분에서 수정할 수 있습니다. 색상과 장식은 `style.css`, `egg-extra.css`에서 바꿀 수 있습니다. `app.js`는 모바일 메뉴, 색상 모드, 목록 검색을 담당합니다.

현재 공개 이력으로 검증할 수 없는 경력이나 수상 내역은 넣지 않았습니다. 빈 카테고리는 기록을 추가할 때까지 안내 문구가 보입니다.
