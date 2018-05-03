'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';

  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.setup.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.setup.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var onLoad = function (data) {
    wizards = data;
    window.similarWizards.updateWizards();
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onLoad, window.util.onRequestError, LOAD_URL);

  window.similarWizards = {
    updateWizards: function () {
      similarListElement.innerHTML = '';
      var renderedWizards = window.renderWizards(wizards.sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = namesComparator(left.name, right.name);
        }
        return rankDiff;
      }), WIZARDS_COUNT);
      similarListElement.append(renderedWizards);
    }
  };
})();
