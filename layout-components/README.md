# Design Patterns - Layout Components

## 1. 핵심 개념

웹페이지의 **구조를 잡아주는 틀** 역할을 하는 컴포넌트

**레이아웃 컴포넌트 = "무엇을 어디에 놓을지"만 정하는 컴포넌트**

- 실제 내용(버튼, 텍스트 등)은 신경 쓰지 않음
- 구조만 제공하여 유연성과 재사용성을 높임
- 페이지마다 같은 틀을 재사용하면서 내용만 바꿀 수 있음

## 2. 주요 특징

### 2-1. 독립성 (위치에 구애받지 않음)

**나쁜 예:**
"헤더는 무조건 상단 50px, 사이드바는 왼쪽 200px"

**좋은 예:**
"헤더를 위한 공간, 사이드바를 위한 공간" 제공

**장점:** 나중에 위치를 바꾸기 쉬움

### 2-2. 재사용성

같은 레이아웃을 여러 페이지에서 재사용

```jsx
// 같은 레이아웃을 여러 페이지에서 재사용
<DashboardLayout>
  <UserPage />
</DashboardLayout>

<DashboardLayout>
  <SettingsPage />
</DashboardLayout>
```

### 2-3. 일관된 디자인 유지

- 모든 페이지가 같은 레이아웃을 공유
- 스타일을 한 곳에서 관리 → 유지보수 편함

## 3. 실제 예시: SplitScreen 컴포넌트

### 3-1. 구조와 내용의 분리

- **구조**: 화면을 좌우로 나누는 레이아웃만 담당
- **내용**: `children` prop으로 받아서 실제 내용은 신경 쓰지 않음
- **결과**: 어떤 내용이든 좌우 분할 레이아웃에 넣을 수 있음

### 3-2. 유연한 비율 조정

```jsx
// 1:1 비율
<SplitScreen leftWidth={1} rightWidth={1}>
  <LeftContent />
  <RightContent />
</SplitScreen>

// 2:1 비율
<SplitScreen leftWidth={2} rightWidth={1}>
  <LeftContent />
  <RightContent />
</SplitScreen>
```

### 3-3. 재사용성 극대화

- **동일한 레이아웃**: 여러 페이지에서 같은 분할 구조 재사용
- **다양한 내용**: 각 페이지마다 다른 컴포넌트를 넣어도 됨
- **일관성**: 모든 분할 화면이 동일한 스타일과 동작 방식 유지

**핵심**: "어떻게 나눌지"는 고정하고, "무엇을 넣을지"는 자유롭게

## 4. 실제 예시: BasicList 컴포넌트

### 4-1. 완전한 구조와 내용의 분리

- **구조**: 리스트 렌더링 로직만 담당 (`map`, `key` 처리)
- **내용**: `ItemComponent`로 받아서 실제 아이템 표시는 신경 쓰지 않음
- **결과**: 어떤 아이템 컴포넌트든 리스트에 넣을 수 있음

### 4-2. 동적 속성 전달의 유연성

```jsx
// authors 데이터 → "author" 속성으로 전달
<BasicList
  items={authors}
  sourceName="author"
  ItemComponent={LargeAuthorsList}
/>

// books 데이터 → "book" 속성으로 전달
<BasicList
  items={books}
  sourceName="book"
  ItemComponent={LargeBooksList}
/>
```

### 4-3. 하나의 레이아웃, 다양한 표현

- **동일한 리스트 구조**: `authors`와 `books` 모두 같은 리스트 레이아웃 사용
- **다양한 아이템 표시**: `LargeAuthorsList`, `SmallAuthorsList`, `LargeBooksList` 등
- **일관성**: 모든 리스트가 동일한 렌더링 방식과 키 처리

### 4-4. 재사용성의 극대화

- **데이터 타입 무관**: `Author[]`, `Book[]` 등 어떤 배열이든 처리 가능
- **컴포넌트 교체**: `LargeAuthorsList` ↔ `SmallAuthorsList` 자유롭게 교체
- **속성명 자유**: `sourceName`으로 동적으로 속성명 결정

**핵심**: "어떻게 리스트를 만들지"는 고정하고, "무엇을 표시할지"와 "어떻게 표시할지"는 자유롭게
