### Typescript-Express template (진행중)

- ORM: Prisma
- DATABASE: PostgreSQL

@TODO
- nest와 같이 interceptor 기능 구현하깅
  - 2024-07-30
    - nest와 같은 interceptor를 구현하는건 실패.
    - express의 res.send | res.json은 리턴값을 무시하기때문에 리턴한 값을 받을 방법이 없음.
    - res.send를 중간에 가로채, 성공 응답인 경우(200 status code)에만 추가적으로 데이터 삽입.
- winson | morgan으로 로그 레벨지정하고 상황에 따른 로그 남기기 (OK)
- 성공을 보장하는 테스트코드 & 실패를 보장하는 테스트코드
  - http-exception-filter (unit test) OK
  - not-found-exception-filter (unit test) OK
  - unhandled-exception-filter (unit test) OK

  - @TODO integration test
- prisma transaction manager

2024-07-13 ~ ing