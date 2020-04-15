'use strict';
/*
 *  String.prototype의 match() 메서드는 정확히 일치하는 결과만을 반환하고 특정 정규 표현식 그룹에 관한 정보는 어떤 것도 제공하지 않았다.
 *  Jordan Harband 덕분에 이제 match()보다 더 많은 정보를 반환하는 String.prototype.matchAll을 사용할 수 있다.
 *  완벽히 동일한 문자열 이외에 반복자(iterator)가 반환되는데, 이를 통해 모든 정규 표현식 캡처 그룹에 접근할 수 있다.
 *  Gorkem Yakin과 Daniel Ehrenberg가 제안하고 ECMAScript 2018에 추가된 명명된 캡처 그룹이 기억나는가?
 *  matchAll() 메서드는 명명된 캡처 그룹과 함께 사용할 때 빛을 발한다. 아래의 예시를 살펴보면 명확히 와닿을 것이다.
 */

const recruit = 'From 2019.03.18 to 2020.05.30';
const regexp = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/gu;
const results = recruit.match(regexp);

console.log(results);
// [ '2019.03.18', '2020.05.30' ]

const resultsMatchAll = Array.from(recruit.matchAll(regexp));
console.log(resultsMatchAll);
// 각각의 매치 된 타입 별로 나타내어주고 index,와 input, groups 속성도 나타낸다.
