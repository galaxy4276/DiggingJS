// return 없이도 클로저가 발생하는 다양한 경우
(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
    }
    console.log(a);
  };

  intervalId = setInterval(inner, 1000);
})();

(() => {
  const count = 0;
  const button = document.createElement('button');
  button.innerText = 'click';
  button.addEventListener('click', function () {
    console.log(++count, 'times clicked');
  });
  document.body.append(button);
});
