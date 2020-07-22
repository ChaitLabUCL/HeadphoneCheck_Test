# Web-based headphone Check with Huggins Pitch

This set of codes implements a online headphone check test using special noises. You can find more details about this test in our paper [Milne A, Bianco R, Poole K, Zhao S, Billig A & Chait M. An online headphone screening test based on dichotic pitch. BioRxiv.](https://www.biorxiv.org/content/10.1101/2020.07.21.214395v1).

## Try it first!
[Start your headphone test here!](https://sijiazhao.github.io/headphonecheck/headphonesTestHugginsPitch.html)

This is just a demo. We don't save your data.

## Stimuli and task
This task uses a 3AFC paradigm: two intervals of white noise, and a third interval that contains a Huggins' Pitch are played in a random order, and listeners have to detect which of the 3 noises contains the Huggins' Pitch. 6 trials are presented and you will need to manually input the number of correct response required to pass the test using the experiment tree. We recommend a threshold of 6/6 as lower thresholds will result in a similar sensitivity but an increased portion of speaker users.

## How to use this
Before diving into the JavaScript code, check out our Gorilla version of this task, which you can use directly if you are planning to host your experiment on [Gorilla](https://gorilla.sc/admin/experiment/22282/design?). 

### Alternative test: Anti-Phase headphone test
In addition to the test based on detecting the Huggins pitch, you may also try another headphone screening test developed by McDermott Lab (MIT).
[Try the Anti-Phase test here!](https://sijiazhao.github.io/headphonecheck/headphonesTestAntiPhase.html)

The details of that task has been documented in [Woods KJP, Siegel MH, Traer J & McDermott JH (2017) Headphone screening to facilitate web-based auditory experiments. Attention, Perception & Psychophysics](http://mcdermottlab.mit.edu/papers/Woods_etal_2017_headphone_screening.pdf). And you can also find their version of implementation on [here](https://github.com/mcdermottLab/HeadphoneCheck).

## How to cite us
If you want to acknowledge use of this software when you publish your research, please cite us: 
Milne A, Bianco R, Poole K, Zhao S, Billig A & Chait M. An online headphone screening test based on dichotic pitch. BioRxiv.

## Contact
- If you have any problems with this code or usage on Pavlovia, please contact Sijia Zhao (sijia.zhao@psy.ox.ac.uk).
- If you have any problems with the Gorilla version of this task, please contact Alice Milne (a.milne@ucl.ac.uk).
