/**
 * Sijia Zhao (2020) sijia.zhao@psy.ox.ac.uk
 * Read LICENSE file before using
 */

export default class HeadphonesTest {
  /**
   * Constructor
   *
   * @constructor
   * @param {object} [settings={}] - settings for the Headphones class instance
   * @param {string} [settings.volumeSound=volume.flac] - sound for volume adjustment
   * @param {string} [settings.volumeText] - additional text to show on volume adjustment page
   * @param {string} [settings.checkType=huggins] - headphone check paradigm,`huggins` or `phase`, or `beat`
   * @param {string} [settings.checkExample] - example check sound (`huggins` and `beat` checkType only)
   * @param {object[]} [settings.checkSounds] - sounds for headphones check. `object` format: `{answer: int, file: string}`
   * @param {int} [settings.checkNumber=6] - number of headphones check trials
   * @param {int} [settings.checkPassNumber=5] - number of correct trials to pass the check
   * @param {int} [settings.checkMaxAttempts=2] - max number of attempts
   * @param {function} [quitCallback=()=>{}] - callback function if user attempts to quit
   */
  constructor(settings = {}, quitCallback = () => {}) {
    this._settings = {
      volumeSound: 'stimuli_HugginsPitch/HugginsPitch_calibration.flac',
      volumeText: '',
      checkType: 'huggins',
      checkExample: 'stimuli_HugginsPitch/HugginsPitch_example_2.flac',
      checkSounds: [
        {answer: 1, file: 'stimuli_HugginsPitch/HugginsPitch_set1_1.flac'},
        {answer: 2, file: 'stimuli_HugginsPitch/HugginsPitch_set1_2.flac'},
        {answer: 3, file: 'stimuli_HugginsPitch/HugginsPitch_set1_3.flac'},
        {answer: 1, file: 'stimuli_HugginsPitch/HugginsPitch_set2_1.flac'},
        {answer: 2, file: 'stimuli_HugginsPitch/HugginsPitch_set2_2.flac'},
        {answer: 3, file: 'stimuli_HugginsPitch/HugginsPitch_set2_3.flac'},
        {answer: 1, file: 'stimuli_HugginsPitch/HugginsPitch_set3_1.flac'},
        {answer: 2, file: 'stimuli_HugginsPitch/HugginsPitch_set3_2.flac'},
        {answer: 3, file: 'stimuli_HugginsPitch/HugginsPitch_set3_3.flac'},
        {answer: 1, file: 'stimuli_HugginsPitch/HugginsPitch_set4_1.flac'},
        {answer: 2, file: 'stimuli_HugginsPitch/HugginsPitch_set4_2.flac'},
        {answer: 3, file: 'stimuli_HugginsPitch/HugginsPitch_set4_3.flac'},
        {answer: 1, file: 'stimuli_HugginsPitch/HugginsPitch_set5_1.flac'},
        {answer: 2, file: 'stimuli_HugginsPitch/HugginsPitch_set5_2.flac'},
        {answer: 3, file: 'stimuli_HugginsPitch/HugginsPitch_set5_3.flac'},
        {answer: 1, file: 'stimuli_HugginsPitch/HugginsPitch_set6_1.flac'},
        {answer: 2, file: 'stimuli_HugginsPitch/HugginsPitch_set6_2.flac'},
        {answer: 3, file: 'stimuli_HugginsPitch/HugginsPitch_set6_3.flac'},
      ],
      checkNumber: 6,
      checkPassNumber: 6,
      checkMaxAttempts: 1,
    };
    this.htmlElements = {
      huggins: {
        instruction: '<p class="notice">Now we will check your headphones.</p>\n' +
            '<p>We need to make sure that your headphones are adjusted and are functioning correctly.</p>\n' +
            '<p>On the next few pages, each page will have a button that plays a sound. You can only play each sound once, so don\'t press the button until you are ready.</p>\n' +
            '<p>Each sound contains three noises with silent gaps in-between. One of the noises has a faint tone hidden within.</p>\n' +
            '<p>Your task is to decide which of the three noises contains the tone, and click on the correct button: <b>1</b>, <b>2</b>, or <b>3</b>.</p>\n' +
            '<p>Click the <span style="color:#03a9f4;"><b>blue</b></span> button below to play an example. The tone is hidden inside the second noise, so the answer is <b>2</b>.\n' +
            '    You can play the example as many times as you like.</p>\n' +
            '<div class="notice">\n' +
            '    <button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sounds...</button>\n' +
            '</div>\n' +
            '<span data-helper-headphones-check-target></span>',
        checkPage: '<p class="notice">Remember, you can only play each sound once. Please listen carefully.</p>\n' +
            '<p class="center">Which noise contains the hidden tone? Is it <b>1</b>, <b>2</b>, or <b>3</b>?</p>',
      },
      phase: {
        instruction: '<p class="notice">Now we will check your headphones.</p>\n' +
            '<p>We need to make sure that your headphones are adjusted and are functioning correctly.</p>\n' +
            '<p>On the next few pages, each page will have a button that plays a sound. You can only play each sound once, so don\'t press the button until you are ready.</p>\n' +
            '<p>Each sound contains three noises with silent gaps in-between.</p>\n' +
            '<p>Your task is to decide which of the three noises was quietest or softest, and click on the correct button: <b>1</b>, <b>2</b>, or <b>3</b>.</p>',
        checkPage: '<p class="notice">Remember, you can only play each sound once. Please listen carefully.</p>\n' +
            '<p class="center">Which noise is the quietest or softest? Is it <b>1</b>, <b>2</b>, or <b>3</b>?</p>',
      },
      beat: {
        instruction: '<p class="notice">Now we will check your headphones.</p>\n' +
            '<p>We need to make sure that your headphones are adjusted and are functioning correctly.</p>\n' +
            '<p>On the next few pages, each page will have a button that plays a sound. You can only play each sound once, so don\'t press the button until you are ready.</p>\n' +
            '<p>Each sound contains three noises with silent gaps in-between.</p>\n' +
            '<p>Your task is to decide which of the three noises was smoothest, and click on the correct button: <b>1</b>, <b>2</b>, or <b>3</b>.</p>\n' +
            '<p>Click the <span style="color:#03a9f4;"><b>blue</b></span> button below to play an example. The smoothest tone is the second noise, so the answer is <b>2</b>.\n' +
            '    You can play the example as many times as you like.</p>\n' +
            '<div class="notice">\n' +
            '    <button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sounds...</button>\n' +
            '</div>\n' +
            '<span data-helper-headphones-check-target></span>',
        checkPage: '<p class="notice">Remember, you can only play each sound once. Please listen carefully.</p>\n' +
            '<p class="center">Which noise is the smoothest? Is it <b>1</b>, <b>2</b>, or <b>3</b>?</p>',
      },
      reattempt: '<p class="notice">Unfortunately, you did not pass the headphone check.</p>\n' +
          '<p>Please make sure that you are in a quiet room, and that you are wearing your headphones correctly.</p>\n' +
          '<p>You may also try using a different pair of headphones. It is possible that the sound quality of the headphones was not good enough.</p>\n' +
          '<p class="notice">If you are sure that your headphones are working properly, you can try the headphone check again.</p>',
    };
    if (settings) {
      this._settings = Object.assign(this._settings, settings);
      if (settings.checkType) {
        switch (settings.checkType.toLowerCase()) {
          case 'phase':
            this._settings.checkType = 'phase';
            break;
          case 'beat':
            this._settings.checkType = 'beat';
            break;
          case 'huggins':
          default:
            this._settings.checkType = 'huggins';
        }
      }
      if (this._settings.checkPassNumber > this._settings.checkNumber) {
        this._settings.checkPassNumber = this._settings.checkNumber;
      }
    }
    this._quitCallback = quitCallback;
    this.isHeadphones = undefined;
    this.attemptCount = 0;
    this.attemptRecord = new Map;
    this._callback = undefined;
  }

  /**
   * Perform a volume check
   *
   * @function module:headhpones.checkVolume
   * @param {function} [callback] - (if set) callback on completion
   */
  checkVolume(callback) {
    if (typeof callback === 'function') {
      this._callback = callback;
    }
    this._adjustVolume()
        .then(
            () => {
              if (typeof this._callback === 'function') {
                this._callback();
              }
            },
            () => {
              this._quitCallback('You clicked the "Exit" button so the experiment has stopped.', this.checkVolume.bind(this));
            },
        );
  }

  /**
   * Perform a headphone check (includes a volume check)
   *
   * @function module:headhpones.checkHeadphones
   * @param {function} [callback] - (if set) callback on completion, with the result as argument: `true` or `false`
   * @returns {boolean} (only if `callback` not set) result of the headphone check: `true` or `false`
   */
  checkHeadphones(callback, repeat) {
    if (typeof callback === 'function') {
      this._callback = callback;
    }
    const promise = this._adjustVolume();
    if (repeat) {
      $('button:contains("finished")').button('option', 'disabled', false);
    }
    promise.then(
        () => {
          this._instruction();
        },
        () => {
          this._quitCallback('You clicked the "Exit" button so the experiment has stopped.', this.checkHeadphones.bind(this));
        },
    );
  }

  _adjustVolume() {
    const text = '<p class="notice">Please put on your headphones.</p>\n' +
        '<p>If you do not have headphones, you can use earphones (headphones are preferred).</p>\n' +
        '<p>Click the <span style="color:#03a9f4;"><b>blue</b></span> button below to play a sound to check your volume. ' + this._settings.volumeText + '</p>\n' +
        '<div class="notice">\n' +
        '    <button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sounds...</button>\n' +
        '    <audio data-headphones-audio-group="group1" preload="auto" loop>\n' +
        '        <source src="' + this._settings.volumeSound + '">\n' +
        '        <p>Your browser cannot play the audio files used in this experiment.<br>This experiment will not work.</p>\n' +
        '        <p>Please try this experiment in a different web browser (Firefox and Chrome are recommended), and update your web browser to its newest version.</p>\n' +
        '    </audio>\n' +
        '</div>\n' +
        '<p>If you do not adjust your volume correctly, you will not be able to successfully complete the experiment, and the experiment may stop before completion.</p>';
    const promise = createDialog(text, {id: 'headphoneDialog', title: 'Adjust your sound volume', yes: 'I have finished adjusting my sound volume', no: 'Exit'});
    this._createPlayer();
    return promise;
  }

  _instruction() {
    let html = this.htmlElements[this._settings.checkType].instruction +
        '<p class="notice">Remember, from now on, you can only play each sound once.<br>Please listen carefully and choose your answer.</p>\n' +
        '<p class="notice">Are you ready?</p>';
    const promise = createDialog(html, {id: 'headphoneDialog', title: 'Headphone check', yes: 'I am ready to begin', no: 'Exit', back: 'Back'});
    if (this._settings.checkType === 'huggins' || this._settings.checkType === 'beat') {
      $('span[data-helper-headphones-check-target]').html(
          '<audio data-headphones-audio-group="group1" preload="auto">\n' +
          '    <source src="' + this._settings.checkExample + '">\n' +
          '    <p class="notice">Your browser cannot play the audio files used in this experiment.<br>This experiment will not work.</p>\n' +
          '    <p class="notice">Please try this experiment in a different web browser (Firefox and Chrome are recommended), and update your web browser to its newest version.</p>\n' +
          '</audio>',
      );
      this._createPlayer('button:contains("ready")');
    }
    promise.then(
        () => {
          this._performCheck();
        },
        reason => {
          if (reason === 'back') {
            this.checkHeadphones(undefined, true);
          } else {
            this._quitCallback('You clicked the "Exit" button so the experiment has stopped.', this._instruction.bind(this));
          }
        },
    );
  }

  _offerReattempt() {
    let html = this.htmlElements.reattempt;
    if (+this.attemptCount === this._settings.checkMaxAttempts - 1) {
      html += '<p class="notice">If you do not pass on your next attempt, the experiment will stop.</p>';
    }
    createDialog(html, {id: 'headphoneDialog', title: 'Headphone check failed', yes: 'Try again', no: 'Exit', color: '#FFA500'})
        .then(
            () => {
              this._instruction();
            },
            () => {
              this._quitCallback('You clicked the "Exit" button so the experiment has stopped.', this._offerReattempt.bind(this));
            },
        );
  }

  _performCheck() {
    let html = this.htmlElements[this._settings.checkType].checkPage +
        '<div id="target" class="center" data-headphones-check-target></div>\n' +
        '<hr><div id="progress" data-headphones-progress><span></span></div>';
    const promise = createDialog(html, {id: 'headphoneDialog', title: 'Headphone check', yes: 'Finished'});
    $('button:contains("Finished")')
        .button('option', 'disabled', true)
        .css('visibility', 'hidden');
    this._trialHandler(this._settings.checkNumber);
    promise.then(() => {
      if (this.isHeadphones) {
        if (typeof this._callback === 'function') {
          this._callback(true);
        } else {
          return true;
        }
      } else {
        if (this.attemptCount < this._settings.checkMaxAttempts) {
          this._offerReattempt();
        } else {
          if (typeof this._callback === 'function') {
            this._callback(false);
          } else {
            return false;
          }
        }
      }
    });
  }

  _trialHandler(remaining, current = false) {
    $('#target[data-headphones-check-target]').empty();
    if (!current) {
      current = 1;
      this.attemptCount++;
      this._currentRecord = {};
      this._currentRecord.results = [];
      this._currentRecord.numberCorrect = 0;
      this._soundList = new ObjectList(this._settings.checkSounds, 1, true);
    }
    if (remaining <= 0) {
      this._currentRecord.isHeadphones = (this._currentRecord.numberCorrect >= this._settings.checkPassNumber);
      this.isHeadphones = this._currentRecord.isHeadphones;
      this.attemptRecord.set(this.attemptCount, this._currentRecord);
      $('button:contains("Finished")')
          .button('option', 'disabled', false)
          .css('visibility', 'visible')
          .trigger('click');
      return;
    }
    $('#headphoneDialog').dialog('option', 'title', 'Headphone check (' + current + ' of ' + this._settings.checkNumber + ')');
    $('#progress[data-headphones-progress]')
        .progressbar({max: this._settings.checkNumber, value: current})
        .children('span').html('Progress: ' + current + '/' + this._settings.checkNumber);
    if (current > this._soundList.length) {
      this._soundList.shuffle().setIndexToFirst();
    }
    const trialData = this._soundList.next();
    this._createTrial(trialData.file)
        .then((response) => {
          if (+response === trialData.answer) {
            this._currentRecord.numberCorrect++;
          }
          this._currentRecord.results.push({
            answer: trialData.answer,
            file: trialData.file,
            response: response,
            correct: +response === trialData.answer,
          });
          this._trialHandler(--remaining, ++current);
        });
  }

  _createTrial(soundFile) {
    let html = '<table><tr>\n' +
        '    <td>\n' +
        '        <span data-headphones-check-stage="1">Listen to the sound</span>\n' +
        '        <button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sound...</button>\n' +
        '    </td>\n' +
        '    <td>\n' +
        '        <span class="disabled" data-headphones-check-stage="2">choose your answer</span>\n' +
        '        <button type="button" data-headphones-check-response="1" data-helper-button disabled>1</button>\n' +
        '        <button type="button" data-headphones-check-response="2" data-helper-button disabled>2</button>\n' +
        '        <button type="button" data-headphones-check-response="3" data-helper-button disabled>3</button>\n' +
        '    </td>\n' +
        '    <td>\n' +
        '        <span class="disabled" data-headphones-check-stage="3">and continue to the next sound</span>\n' +
        '        <button type="button" data-helper-button data-headphones-check-next disabled>Confirm and continue</button>\n' +
        '    </td>\n' +
        '</tr></table>\n' +
        '<audio data-headphones-audio-group="group1" preload="auto">\n' +
        '    <source src="' + soundFile + '">\n' +
        '    <p class="notice">Your browser cannot play the audio files used in this experiment.<br>This experiment will not work.</p>\n' +
        '    <p class="notice">Please try this experiment in a different web browser (Firefox and Chrome are recommended), and update your web browser to its newest version.</p>\n' +
        '</audio>';
    $('#target[data-headphones-check-target]').html(html);
    const audioSelector = $('audio[data-headphones-audio-group]');
    let audioCount = audioSelector.length;
    return new Promise((resolve) => {
      audioSelector.on('canplaythrough', () => {
        if (--audioCount <= 0) {
          $('button[data-headphones-audio-control]')
              .html('<img alt="Play" src="play.svg">')
              .prop('disabled', false)
              .on('click', function() {
                $(this)
                    .prop('disabled', true)
                    .html('Playing...');
                const audioElements = $('audio[data-headphones-audio-group=' + this.dataset.headphonesAudioGroup + ']');
                audioElements.on('ended', () => {
                  $('button[data-headphones-audio-control]').html('Already played');
                  $('span[data-headphones-check-stage]').addClass('disabled');
                  $('span[data-headphones-check-stage="2"]').removeClass('disabled');
                  $('button[data-headphones-check-response]')
                      .prop('disabled', false)
                      .on('click', function() {
                        $('span[data-headphones-check-stage="3"]').removeClass('disabled');
                        $('button[data-headphones-check-response]').attr('data-helper-button', '');
                        $(this).attr('data-helper-button', 'selected');
                        $('button:contains("continue")')
                            .prop('disabled', false)
                            .on('click', () => {
                              resolve(
                                  $('button[data-headphones-check-response][data-helper-button="selected"]')
                                      .attr('data-headphones-check-response'),
                              );
                            });
                      });
                });
                for (const audio of audioElements) {
                  audio.play();
                }
              });
        }
      });
    });
  }

  _createPlayer(selector = 'button:contains("finished")') {
    $(selector).button('option', 'disabled', true);
    const audioSelector = $('audio[data-headphones-audio-group]');
    let audioCount = audioSelector.length;
    audioSelector
        .on('canplaythrough', function() {
          $(this).off('canplaythrough');
          if (--audioCount <= 0) {
            $('button[data-headphones-audio-control]')
                .html('<img alt="Play" data-helper-image-doNoWait src="play.svg">')
                .prop('disabled', false)
                .on('click', function() {
                  const audioElements = $('audio[data-headphones-audio-group=' + this.dataset.headphonesAudioGroup + ']');
                  for (const audio of audioElements) {
                    if (audio.paused || audio.ended) {
                      audio.play();
                      $(this).css('border-color', '#f0f')
                          .children('img')
                          .attr('src', 'pause.svg').attr('alt', 'Pause');
                      $(selector).button('option', 'disabled', false);
                    } else {
                      audio.pause();
                      $(this).css('border-color', '#03a9f4')
                          .children('img')
                          .attr('src', 'play.svg').attr('alt', 'Play');
                    }
                  }
                });
          }
        })
        .on('ended', () => {
          $('button[data-headphones-audio-control]')
              .css('border-color', '#03a9f4')
              .children('img')
              .attr('src', 'play.svg').attr('alt', 'Play');
        });
  }
}

/**
 * Create a dialog with a `Promise` resolved/rejected by buttons
 *
 * @function module:headphonesTest.createDialog
 * @param {string} text - dialog content
 * @param {{}} options
 * @param {string} [options.id=helperDialog] - element ID
 * @param {string} [options.title] - dialog title
 * @param {int} [options.width=1000] - dialog width in pixels
 * @param {int|string} [options.height=auto] - dialog height in pixels or `auto`
 * @param {string} [options.color=#32CD32] - title bar color
 * @param {string|undefined} [options.yes=undefined] - 'Yes' button text, or `undefined` for no button
 * @param {string|undefined} [options.no=undefined] - 'No' button text, or `undefined` for no button
 * @param {string|undefined} [options.back=undefined] - 'Back' button text, or `undefined` for no button
 * @return {Promise} Promise - `resolve()` by 'Yes' button, `reject()` by 'No' button, `reject('back')` by 'Back' button
 */
function createDialog(text = '', options = {}) {
  options.id = options.id || 'helperDialog';
  options.title = options.title || '';
  options.width = options.width || '1000';
  options.height = options.height || 'auto';
  options.color = options.color || '#32CD32';
  return new Promise((resolve, reject) => {
    $('body').append('<div id="' + options.id + '" class="helperDialog" title="' + options.title + '">\n' + text + '\n</div>');
    const imageSelector = $('#' + options.id + ' img:not([data-helper-image-doNoWait])');
    let imageCount = imageSelector.length;
    let imageTotalHeight = 0;
    const dialogOptions = {
      width: options.width,
      height: options.height,
      dialogClass: 'no-close',
      modal: true,
      closeOnEscape: false,
      buttons: [],
      open() {
        const max = document.documentElement.clientHeight - 40;
        if ($(this).outerHeight(true) + imageTotalHeight > max) {
          $(this).dialog('option', 'height', max);
        }
      },
      close() {
        $(this).dialog('destroy').remove();
      },
    };
    if (options.back) {
      dialogOptions.buttons.push({
        text: options.back,
        click() {
          $(this).dialog('close');
          reject('back');
        },
      });
    }
    if (options.yes) {
      dialogOptions.buttons.push({
        text: options.yes,
        click() {
          $(this).dialog('close');
          resolve(true);
        },
      });
    }
    if (options.no) {
      dialogOptions.buttons.push({
        text: options.no,
        click() {
          $(this).dialog('close');
          reject(false);
        },
      });
    }
    if (imageCount) {
      imageSelector.on('load', function() {
        imageTotalHeight += $(this).outerHeight(true);
        if (--imageCount <= 0) {
          $('#' + options.id).dialog(dialogOptions).prev('.ui-dialog-titlebar').css('background', options.color);
        }
      });
    } else {
      $('#' + options.id).dialog(dialogOptions).prev('.ui-dialog-titlebar').css('background', options.color);
    }
  });
}

export function quitDialog(message = '', callback) {
  const text = '<p class="notice left">The experiment is not complete</p>\n' +
      '<p>Are you sure you want to exit?</p>';
  createDialog(text, {yes: 'Exit', back: 'Resume experiment', color: '#FFA500'}).then(
      () => {
        const text = '<p style="font-weight: bold; margin: 2em 0;">The experiment has stopped.</p>\n' +
            '<p>' + message + '</p>\n';
        void createDialog(text, {color: '#FF0000'});
      },
      reason => {
        if (typeof callback === 'function') {
          callback(reason);
        } else {
          return reason;
        }
      },
  );
}

/**
 * objectList extends Array with (optional) wrap-around, reversible, and variable-step iterators
 *
 * @augments Array
 */
class ObjectList extends Array {
  /**
   * Constructor
   *
   * @constructor
   * @param {*[]} objects
   * @param {int} [repeats=1]
   * @param {boolean} [shuffle=false]
   * @param {boolean} [wrap=false]
   */
  constructor(objects = [], repeats = 1, shuffle = false, wrap = false) {
    if (objects.length === 0) {
      throw 'objectList requires objects to create';
    }
    const list = ObjectList.replicateArray(objects, repeats);
    if (shuffle) {
      ObjectList.shuffleArray(list);
    }
    super(...list);
    this.wrap = wrap;
    this._index = 0;
    this._current = this._index;
  }

  /**
   * Shuffle an array (or ObjectList)
   *
   * @param {*[]|ObjectList} array
   * @return {*[]} shuffled array
   */
  static shuffleArray(array = []) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * Replicate an array <replications> times
   *
   * @param {*[]} array
   * @param {int} [replications=1]
   * @return {*[]} replicated array
   */
  static replicateArray(array = [], replications = 1) {
    let copy = Array.apply(null, new Array(replications));
    copy = copy.map(function() { return array; });
    return [].concat.apply([], copy);
  }

  first() {
    return this[0];
  }

  prev(n = 1) {
    this._current = this._index;
    if (this.wrap) {
      this._index -= n;
      this._index %= this.length;
    }
    if ((this._index -= n) < 0) {
      this._index = 0;
    }
    return this.current();
  }

  current() {
    return this[this._current];
  }

  next(n = 1) {
    this._current = this._index;
    if (this.wrap) {
      this._index += n;
      this._index %= this.length;
    }
    if ((this._index += n) > (this.length - 1)) {
      this._index = this.length - 1;
    }
    return this.current();
  }

  last() {
    return this[this.length - 1];
  }

  shuffle() {
    ObjectList.shuffleArray(this);
    return this;
  }

  setIndex(n = false) {
    if (n !== false) {
      if (n < 0) {
        this._index = 0;
        return this;
      }
      if (this.wrap) {
        this._index %= this.length;
        return this;
      }
      if (n > (this.length - 1)) {
        this._index = this.length - 1;
        return this;
      }
    }
    return this;
  }

  getIndex() {
    return this._index;
  }

  setIndexToFirst() {
    this._index = 0;
    return this;
  }

  setIndexToLast() {
    this._index = this.length - 1;
    return this;
  }
}