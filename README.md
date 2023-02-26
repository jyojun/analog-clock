## 아날로그 시계 구현

#### 설치 및 실행

- 설치

```
npm install
```

- 실행

```
npm run start
```

#### 사용 기술

- `react.js (spa library)`
- `redux toolkit, react-redux (state management)`
- `styled-components`

#### 폴더 구조

```
└── src
    ├── App.js
    ├── App.css
    ├── components
    │   ├── Clock (시, 분, 초침 핀)
    │   │   ├── Clock.jsx
    │   │   └── Clock.styled.js
    │   ├── ClockFace (시계 몸체)
    │   │   ├── ClockFace.jsx
    │   │   ├── ClockPin.jsx
    │   │   └── Face.styled.js
    │   └── ClockTooltip (시계 툴팁)
    │       ├── Tooltip.jsx
    │       └── Tooltip.styled.js
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── store
    │   ├── mouseTracer.js
    │   ├── store.js
    │   └── timer.js
    └── utils
        └── index.js
```
