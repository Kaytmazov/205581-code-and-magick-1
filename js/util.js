'use strict';

(function () {
  window.util = {
    getRandomItemFromArray: function (array) {
      var randomItem = array[Math.floor(Math.random() * array.length)];
      return randomItem;
    }
  };
})();
