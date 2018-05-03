'use strict';

(function () {
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
  window.renderWizards = function (data, wizardsCount) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsCount; i++) {
      fragment.appendChild(makeWizardElement(data[i]));
    }
    return fragment;
  };
})();
