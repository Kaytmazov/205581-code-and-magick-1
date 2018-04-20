'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');
  var setupNameInput = setupWizardForm.querySelector('.setup-user-name');
  var wizardEyes = setupWizardForm.querySelector('.wizard-eyes');
  var wizardCoat = setupWizardForm.querySelector('.wizard-coat');
  var fireballWrap = setupWizardForm.querySelector('.setup-fireball-wrap');

  // Закрытие окна настроек при нажатии кнопки ESC
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (evt.target === setupNameInput) {
        evt.stopPropagation();
      } else {
        closePopup();
      }
    }
  };

  // Закрытие окна настроек при клике на крестик
  var onSetupCloseClick = function () {
    closePopup();
  };

  // Закрытие окна настроек при нажатии Enter на крестик
  var onSetupCloseEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', onSetupCloseClick);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
    wizardEyes.addEventListener('click', window.setup.onWizardEyesClick);
    fireballWrap.addEventListener('click', window.setup.onFireballClick);
    wizardCoat.addEventListener('click', window.setup.onWizardCoatClick);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = null;
    setup.style.left = null;
    document.removeEventListener('keydown', onPopupEscPress);
    setupClose.removeEventListener('click', onSetupCloseClick);
    setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
    wizardEyes.removeEventListener('click', window.setup.onWizardEyesClick);
    fireballWrap.removeEventListener('click', window.setup.onFireballClick);
    wizardCoat.removeEventListener('click', window.setup.onWizardCoatClick);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });
})();

