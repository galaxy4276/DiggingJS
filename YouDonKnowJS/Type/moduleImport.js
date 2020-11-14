/* 자신의 모듈/프로그램에 작성한 유틸리티 함수를 
카피페이스트로 사용할 때 가져다 스는 프로그램에
 유틸리티의 특정 변숫값이 정의되어 있는지 체크해야 하는 상황
*/

function doSomethingCool() {
  var helper =
    (typeof FeatureXYZ !== 'undefined') ?
    FeatureXYZ :
    function() { /* 기본 XYZ 기능.. */};

  var val = helper();
  // ...
}

// 이렇게 해야 다른 사람이 카피페이스트를 수행해도 안전하게 XYZ가 존재하는지 체크할 수 있다
