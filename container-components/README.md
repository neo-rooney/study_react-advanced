# 1. Container 컴포넌트

## 1.1 정의

**Container 컴포넌트**는 자식 컴포넌트를 대신하여 **데이터 로딩과 데이터 관리를 담당하는** React 컴포넌트

## **1.2 기존 방식의 문제점**

- 초급/중급 개발자들은 각 자식 컴포넌트가 자체적으로 데이터를 로드하도록 구현
- useState, useEffect, Axios/Fetch 등을 각 컴포넌트에서 개별적으로 사용
- **여러 자식 컴포넌트가 동일한 데이터 로딩 로직을 공유해야 할 때 중복 코드 발생**

## 1.3 Container 컴포넌트의 해결책

- 데이터 로딩 로직을 전용 컴포넌트(Container)로 추출
- Container가 데이터 검색 프로세스를 처리
- 자식 컴포넌트에 자동으로 데이터를 props로 전달

## 1.4 **핵심 원칙**

- **자식 컴포넌트는 데이터의 출처나 관리 방식을 알 필요가 없어야 함**
- 자식 컴포넌트는 단순히 props를 받아서 콘텐츠를 표시하기만 함
- 데이터 처리 로직과 출력 로직이 완전히 분리

# 2. Container 컴포넌트 예시 - DataResource 컴포넌트

## 2.1 DataResource 컴포넌트 구조

**DataResource**는 범용적인 Container 컴포넌트로, 다양한 데이터 소스에서 데이터를 가져와 자식 컴포넌트에 전달하는 역할

```jsx
export const DataResource = ({
  getData = () => {}, // 데이터를 가져오는 함수
  resourceName, // 자식 컴포넌트에 전달할 prop 이름
  children, // 렌더링할 자식 컴포넌트들
}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      const data = await getData();
      setResource(data);
    };
    fetchResource();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};
```

## 2.2 핵심 특징

1. **데이터 로딩 로직 분리**: `getData` 함수를 통해 데이터 소스와 무관하게 동작
2. **자동 props 전달**: `resourceName`을 키로 하여 자식 컴포넌트에 데이터 자동 전달
3. **재사용성**: 다양한 데이터 소스와 자식 컴포넌트에 활용 가능

## 2.3 사용 예시

```jsx
// 서버에서 사용자 데이터 가져오기
<DataResource
  getData={() => getDataFromServer("/users/3")}
  resourceName="user"
>
  <UserInfo user={null} />
</DataResource>

// 로컬 스토리지에서 메시지 가져오기
<DataResource
  getData={() => getDataFromLocalStorage("message")}
  resourceName="message"
>
  <Message message={null} />
</DataResource>

```

## 2.4 장점

- **관심사 분리**: 데이터 로딩과 UI 렌더링이 완전히 분리됨
- **코드 재사용**: 동일한 데이터 로딩 로직을 여러 컴포넌트에서 재사용
- **테스트 용이성**: 데이터 로딩 로직과 UI 로직을 독립적으로 테스트 가능
- **유지보수성**: 데이터 소스 변경 시 Container 컴포넌트만 수정하면 됨
