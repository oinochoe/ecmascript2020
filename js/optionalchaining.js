'use strict';
/*
 * 객체 프로퍼티에 접근하기 위해 길게 이어진 체인은 오류가 나기 쉬우며 가독성도 좋지 않다.
 * Gabriel Isenberg, Claude Pache, Dustin Savery 덕분에 이 체인이 훨씬 간단해졌다.
 * 만약 당신이 TypeScript 사용자라면 optional chaining이 3.7 버전에서 이미 구현되었으므로 이 기능이 새롭게 느껴지지 않을 것이다.
 */

// before
const title = data && data.article && data.article.title;

// after
const title = data?.article?.title;
