'use strict';

(function () {
  var makeXHR = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000;

    return xhr;
  };

  window.backend = {
    load: function (onLoad, onError, url) {
      var xhr = makeXHR(onLoad, onError);
      xhr.open('GET', url);
      xhr.send();
    },
    save: function (data, onLoad, onError, url) {
      var xhr = makeXHR(onLoad, onError, url);
      xhr.open('POST', url);
      xhr.send(data);
    }
  };
})();
