'use strict';
/*
 * Daniel Ehrenberg 덕분에 앞으로 Number.MAX_SAFE_INTEGER를 제한 없이 사용할 수 있을 것이다.
 * BigInt는 임의 정밀도로 정수를 표현하는 새로운 원시 값이다.
 * BigInt 함수를 사용하거나 숫자 값에 n 접미사를 붙여서 숫자를 bigint 타입으로 변환할 수 있다.
 */

const HISTORY = Number.MAX_SAFE_INTEGER;
// 900719925470991

const BAD = Number.MAX_SAFE_INTEGER + 10 - 10;
// 900719925470990 -> OMG  ㅡㅡ 숫자표현이..

const BEST = BigInt(Number.MAX_SAFE_INTEGER) + 10n - 10n;
// good

console.log(`${HISTORY} \n${BAD} \n${BEST} `);
