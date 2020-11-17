# Headphone Check with Huggins Pitch

This set of codes implements a online headphone check test using special noises. You can find more details about this test in our paper [Milne A, Bianco R, Poole K, Zhao S, Billig A & Chait M. An online headphone screening test based on dichotic pitch. BioRxiv](https://www.biorxiv.org/content/10.1101/2020.07.21.214395v1).

## Try it first!
[Start your headphone test here!](https://sijiazhao.github.io/headphonecheck/headphonesTestHugginsPitch.html)

This is just a demo. We don't save your data.

## Stimuli and task
The Huggins Pitch (HP) stimulus is a type of illusory pitch phenomenon generated by presenting a white noise stimulus to one ear, and the same white noise—but with a phase shift of 180° over a narrow frequency band—to the other ear (Chait et al., 2006; Cramer & Huggins, 1958).

In particular, the HP stimuli consist of three intervals of white noise, each 1000 ms long. Two of the intervals contained diotically presented white noise. The third interval contained the HP stimulus. A centre frequency of 600 Hz is used (roughly in the middle of the frequency region where HP is salient). The signals are created by choosing Gaussian distributed numbers (sampling frequency 44.1 kHz, bandwidth 22.05 kHz). The HP signals are generated by introducing a constant phase shift of 180°in a frequency band (± 6%) surrounding 600 Hz within the noise sample delivered to the right ear, while the original sample is delivered to the left ear (Yost et al., 1987).

This results in the perception of a faint tonal object (corresponding in pitch to the centre frequency of the phase-shifted band), embedded in noise. Importantly, the input to either ear alone lacks any spectral or temporal cues to pitch. The percept is only present when the two signals are dichotically combined over headphones, implicating a central mechanism that receives the inputs from the two ears, computes their invariance and differences, and translates these into a tonal object. Due to acoustic mixing effects, it is weak or absent when the stimuli are presented over loudspeakers.

#### How to use the stimuli outside of Gorilla or JavaScript
If you would like to use the stimuli in your own experimental engine, then download the stimuli from the 'stimuli_HugginsPitch' folder. Each sound file contains the three intervals and the target interval is noted as the last number in the filename.
For example: HugginsPitch_set3_1.flac means that the first interval contains the target.

## How to use this
Before diving into the JavaScript code, check out our Gorilla version of this task, which you can use directly if you are planning to host your experiment on [Gorilla](https://gorilla.sc/admin/experiment/22282/design?). 

## Alternative tests
In addition to the test based on detecting the Huggins pitch, you may also try other two headphone tests.

### Headphone Screen using Antiphase tone (AT)
[Try the Anti-Phase test here!](https://sijiazhao.github.io/headphonecheck/headphonesTestAntiPhase.html)

This was developed by McDermott Lab (MIT). The details of that task has been documented in [Woods KJP, Siegel MH, Traer J & McDermott JH (2017) Headphone screening to facilitate web-based auditory experiments. Attention, Perception & Psychophysics](http://mcdermottlab.mit.edu/papers/Woods_etal_2017_headphone_screening.pdf). And you can also find their version of implementation on [here](https://github.com/mcdermottLab/HeadphoneCheck).

Participants have to correctly detect an acoustic target in an intensity-discrimination task. In each trial the listener is presented with three consecutive 200 Hz sinusoidal tones and must determine which was perceptually the softest. Two of the tones are presented diotically: 1) the ”standard”, and 2) the ”target" which is presented at -6dB relative to the standard. The third tone (a "foil") has the same amplitude as the standard but is presented dichotically such that the left and right signals have opposite polarity (anti-phase, 180°). Over headphones, the standard and foil should have the same loudness, making the target clearly distinguishable as softer. In contrast, over loudspeakers the left and right signals interact destructively before reaching the listener’s ears resulting in a weaker acoustic signal at both ears, and thus a weaker loudness sensation for the foil than the target, causing participants to respond incorrectly.

#### How to use the stimuli outside of Gorilla or JavaScript
Download the stimuli from the 'stimuli_AntiPhase' folder. Each sound file contains the three intervals denoted by a code at the end of the filename (I = in-phase, O = out-of-phase, S = attenuated/target).
For example: Antiphase_HC_IOS.flac would mean that the first interval is in-phase, the second interval is out of phase and the last interval would be quieter and therefore the target.

### Headphone Screen using Binaural Beat (BT)
[Try the Binaural Beat test here!](https://sijiazhao.github.io/headphonecheck/headphonesTestBeat.html)

We also designed another test using binaural beat which can potentially be combined with the HP test to result in better selectivity for headphone use. 

Monaural beats are perceived when two tones of similar but non-identical frequencies (e.g. 1800Hz and 1830Hz) are presented simultaneously. The listener perceives an AM-like interference (“beat”) whose rate is at the difference of the two frequencies. A related binaural phenomenon occurs when the tones are presented to each ear separately. A “Binauaral beat” is perceived due to central interference between the two frequencies. However, due to the phase locking limits on binaural processing, binaural beats are only perceived for frequencies lower than 1000-1500 Hz. We take advantage of this effect to create a test of L and R channel independence. The stimulus simultaneously presents two pure tones (‘pair’), of frequencies f1 and f2. F1 is randomly drawn from between 1800 and 2500 Hz and F2 is set to f1+30Hz. In each trial the listener is presented with three intervals, each containing a pair, and must determine which interval was the smoothest. Two of the pairs are presented diotically (“standards”) and should be associated with a strong perception of a beat at 30 Hz. In the other pair (“target”), the tones are presented dichotically, one to each ear. Because the frequencies are above the phase locking limit, the stimulus should NOT lead to a binaural beat percept,and will therefore be heard as “smooth” over headphones. However, over loudspeakers the left and right signals interact before reaching the listener’s ears to create a monaural beat percept, making the target indistinguishable from the standards. This test is similar to the AP test in that it relies on channel interference over loudspeakers and therefore suffers from analogous constraints, including being affected by the specific positions of the loudspeakers relative to the listener. Furthermore, similarly to AP, it is possible to pass the BT test when listening over a single channel (e.g. when listening through a single ear bud) therefore it cannot be used as a headphone screening test on its own. Nonetheless, we reasoned that the robust percept evoked by the beat stimuli may make the BT test, when used in combination with the HP test, a more sensitive test of headphone use than HP+AP.

The paradigm is a 3-AFC test. The BT stimuli consisted of three intervals, each 1000 ms long. Two of the intervals contained diotically presented tone pairs. The frequency of the first tone (f1) was randomly drawn from a range of 1800-2500Hz. The frequency of the second tone (f2) was set to f1+30 Hz. The third interval contained a dichotically presented tone pair. To reduce reliance on any loudness cues the amplitude of each interval was randomly roved to result in relative differences of 0-4dB. 12 trials were pre-generated offline (the position of the target uniformly distributed). For each participant, in each block, 6 trials are randomly drawn from the pool without replacement. In the BT test listeners are informed that they would hear three sounds in succession and asked to detect the sound (1,2 or 3) that they think is the “smoothest”.

#### How to use the stimuli outside of Gorilla or JavaScript
Download the stimuli from the 'stimuli_Beat' folder. Each sound file contains the three intervals and the target is denoted by the last number.
For example: Beat_8_2.flac would mean that the second interval is the target

## How to cite us
If you want to acknowledge use of this software when you publish your research, please cite us: 
Milne A, Bianco R, Poole K, Zhao S, Billig A & Chait M. An online headphone screening test based on dichotic pitch. BioRxiv.

## Contact
- If you have any problems with this code or usage on Pavlovia, please contact Sijia Zhao (sijia.zhao@psy.ox.ac.uk).
- If you have any problems with the Gorilla version of this task, please contact Alice Milne (a.milne@ucl.ac.uk).

