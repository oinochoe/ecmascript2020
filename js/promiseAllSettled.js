'use strict';
/*
 * ECMAScript 2015부터 자바스크립트에는 프로미스를 결합하는 방법으로 Promise.all()과 Promise.race() 2가지가 있었다.
 * Jason Williams, Robert Pamely and Mathias Bynens 덕분에 우리는 이제 Promise.allSettled()를 사용할 수 있다.
 * Promise.allSettled()는 이행(fulfilled)되거나 거부(rejected)된 결과와 상관없이 모든 프로미스가 실행된 후에 어떤 처리를 하고 싶을 때 사용한다.
 * 아래의 코드처럼 catch를 사용하지 않아도 된다!
 */

Promise.allSettled([
    fetch('https://api.github.com/users/oinochoe').then((data) => data.json()),
    fetch('https://api.github.com/users/yoon9').then((data) => console.log(data.json())),
]).then((result) => console.log('All profile settled'));
