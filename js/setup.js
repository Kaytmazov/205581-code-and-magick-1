'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');

  window.setup = {
    coatColor: '',
    eyesColor: '',
    // Изменение цвета глаз при клике
    onWizardEyesClick: function () {
      var newColor = window.util.getRandomItemFromArray(EYES_COLORS);
      this.style.fill = newColor;
      setupWizardForm.querySelector('input[name=eyes-color]').value = newColor;
      window.setup.eyesColor = newColor;
      window.debounce(window.similarWizards.updateWizards);
    },
    // Изменение цвета fireball при клике
    onFireballClick: function () {
      var fireballColor = window.util.getRandomItemFromArray(FIREBALL_COLORS);
      this.style.backgroundColor = fireballColor;
      setupWizardForm.querySelector('input[name=fireball-color]').value = fireballColor;
    },
    // Изменение цвета плаща при клике
    onWizardCoatClick: function () {
      var newColor = window.util.getRandomItemFromArray(COAT_COLORS);
      this.style.fill = newColor;
      setupWizardForm.querySelector('input[name=coat-color]').value = newColor;
      window.setup.coatColor = newColor;
      window.debounce(window.similarWizards.updateWizards);
    },
    // Перемещение артефакта
    onShopElementDragstart: function (dragstartEvt) {
      var artifactsElement = document.querySelector('.setup-artifacts');
      var draggedItem = null;

      if (dragstartEvt.target.tagName.toLowerCase() === 'img') {
        draggedItem = dragstartEvt.target;
        dragstartEvt.dataTransfer.setData('text/plain', dragstartEvt.target.alt);
        artifactsElement.style.outline = '2px dashed red';
      }

      artifactsElement.addEventListener('dragstart', function () {
        artifactsElement.style.outline = '2px dashed red';
      });

      artifactsElement.addEventListener('dragover', function (evt) {
        evt.preventDefault();
        return false;
      });

      artifactsElement.addEventListener('drop', function (evt) {
        evt.preventDefault();
        evt.target.style.backgroundColor = '';
        evt.target.appendChild(draggedItem);
        artifactsElement.style.outline = '';
      });

      artifactsElement.addEventListener('dragenter', function (evt) {
        evt.preventDefault();
        evt.target.style.backgroundColor = 'yellow';
      });

      artifactsElement.addEventListener('dragleave', function (evt) {
        evt.preventDefault();
        evt.target.style.backgroundColor = '';
      });

      document.addEventListener('dragend', function (evt) {
        evt.preventDefault();
        artifactsElement.style.outline = '';
      });
    }
  };
})();


