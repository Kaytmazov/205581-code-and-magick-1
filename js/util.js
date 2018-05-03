'use strict';

(function () {
  window.util = {
    getRandomItemFromArray: function (array) {
      var randomItem = array[Math.floor(Math.random() * array.length)];
      return randomItem;
    },
    // Перемешать массив
    shuffleArray: function (array) {
      var sheffledArray = [];
      var clone = array.slice();

      while (clone.length) {
        var index = Math.floor(Math.random() * clone.length);
        var element = clone.splice(index, 1)[0];
        sheffledArray.push(element);
      }

      return sheffledArray;
    },
    onRequestError: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };
})();
