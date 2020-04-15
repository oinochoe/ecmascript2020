'use strict';
/*
 * 자바스크립트에서 전역 this란 무엇인가? 브라우저에서는 window, 워커에서는 self,
 * Node.js에서는 global, 그리고 다른 환경에서는 또다른 변수를 뜻한다.
 * 이렇게 복잡한 상황은 이제 더는 일어나지 않을 것이다!
 * Jordan Harband 덕분에 우리는 globalThis를 활용할 수 있다.
 */

console.log(globalThis);
//  node와 브라우저 환경에서 각각 찍어보라
