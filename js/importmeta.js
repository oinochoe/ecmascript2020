'use strict';
/*
 * Domenic Denicola가 제안한 import.meta는 현재 실행 중인 모듈에 호스트에 관한 메타 데이터 객체를 추가한다.
 *
 */

console.log(import.meta.url);
// file:///import.js

// export * as ns from "mod"
/*  개발자가 다른 모듈의 네임 스페이스를 새로운 이름의
 * 특수 객체(exotic object)로 내보낼 수 있게 하는 유용한 기능이 추가되었다.
 *
 */
export * as ns from 'mod';
