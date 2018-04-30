'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';

  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Создаем элемент
  var makeWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Функция отрисовки элементов
  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(makeWizardElement(wizards[i]));
    }
    return fragment;
  };

  var onLoad = function (wizards) {
    var wizardsArray = window.util.getItemsFromArray(wizards, WIZARDS_COUNT);
    similarListElement.append(renderWizards(wizardsArray));
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onLoad, window.util.onRequestError, LOAD_URL);
})();
