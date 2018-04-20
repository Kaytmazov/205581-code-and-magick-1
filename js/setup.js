'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');
  var wizardEyes = setupWizardForm.querySelector('.wizard-eyes');
  var wizardCoat = setupWizardForm.querySelector('.wizard-coat');
  var fireballWrap = setupWizardForm.querySelector('.setup-fireball-wrap');

  window.setup = {
    // Изменение цвета глаз при клике
    onWizardEyesClick: function () {
      var eyesColor = window.util.getRandomItemFromArray(EYES_COLORS);
      wizardEyes.style.fill = eyesColor;
      setupWizardForm.querySelector('input[name=eyes-color]').value = eyesColor;
    },
    // Изменение цвета fireball при клике
    onFireballClick: function () {
      var fireballColor = window.util.getRandomItemFromArray(FIREBALL_COLORS);
      fireballWrap.style.backgroundColor = fireballColor;
      fireballWrap.querySelector('input').value = fireballColor;
    },
    // Изменение цвета плаща при клике
    onWizardCoatClick: function () {
      var coatColor = window.util.getRandomItemFromArray(COAT_COLORS);
      wizardCoat.style.fill = coatColor;
      setupWizardForm.querySelector('input[name=coat-color]').value = coatColor;
    }
  };
})();
