'use strict';
/*
 * Gabriel Isenberg이 한 환상적인 작업은 null 병합 연산자를 추가한 것이다.
 * null 병합 연산자는 디폴트 값을 처리하기 위한 새로운 논리 연산자이다.
 * 이 기능은 optional chaining과 관련되어 있다. || 연산자와는 반대로,
 * null 병합 연산자인 ??는 좌변 값이 null 또는 undefined일 때만 평가한다.
 */

'' || 'default value';
// default value

'' ?? 'default value';
// ""

const title = data?.article?.title ?? "what's new in ECMASCRIPT 2020";
console.log(title);
