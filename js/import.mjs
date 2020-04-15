'use strict';
/*
 * ECMAScript 2015에서 소개된 정적 모듈과는 반대로, Domenic Denicola가 제안한
 * 동적 가져오기(Dynamic import)는 필요에 따라 모듈을 가져올 수 있다.
 * 함수형 구문(Function.prototype를 상속하고 있다는 뜻은 아니다)인 import()는
 * 프로미스(promise)를 반환한다.
 * 동적 가져오기는 매우 강력해서 필요에 따라 모듈을 가져올 수 있으며,
 * 계산된 모듈 이름을 사용할 수 있고, 스크립트 안에서 실행하는 것도 가능하다
 */

const modulePage = 'page.mjs';
import(modulePage)
    .then((module) => {
        module.default();
    })
    .catch((err) => {
        console.error('error during loading module' + err);
    });

(async () => {
    const helpersModule = 'page.mjs';
    const module = await import(helpersModule);
    const total = module.sum(2, 2);
})().catch((err) => {
    console.error('error during loading module' + err);
});
