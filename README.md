# SuPA
원티드 프리온보딩 3차 첫번쨰 과제로 vite를 이용해 만든 react 프로젝트에 rendering 기능을 추가해보기.

### project directory
직접 작성한 파일은 src폴더 내의 components, hooks, pages이다.
```
...
├── src
| ├── components
| | ├── Route                  // Context로부터 받은 path와 Route의 path를 비교하여 일치하면 해당 Route의 component를 렌더링
| | ├── Router                 // path, setPath를 Context에 등록 + children으로 받은 Route들을 <div className="App"> 안에 렌더링
| | └── RouterContext          // Router에서 사용하는 Context 위치
| ├── pages
| | ├── About.jsx              // About 페이지
| | └── Root.jsx               // Root 페이지
| ├── main.css                 // 전체 css를 다룸
| └── main.jsx                 // createRoot로 Route를 가진 Router를 렌더링
├ ...

```



### how to run?
project를 클론받고 아래 명령어를 입력하면 local에서 실행된 서비스를 확인할 수 있다.
```bash
yarn
yarn dev
```

### result
![image](https://user-images.githubusercontent.com/48820696/194390899-1ca816e3-257f-4bad-8ebb-d6e036135a83.png)



