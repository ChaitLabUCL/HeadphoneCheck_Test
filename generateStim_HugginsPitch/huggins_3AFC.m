%% MATLAB code used to generate the stimuli with Huggins Pitch (HP)
% The code was initially written by Maria Chait (UCL)
% Edited and commented by Sijia Zhao (2020-07-12)

% Special note: When running this code, you will see a warning in the
% command window "Warning: Data clipped when writing file.". Ignore it,
% it's not a problem here.

% [SZ] Special note about sound format: By default the soundfile is saved in flac. 
% This formate is recommended as it has very good compression quality and
% relatively good browser compatibility (but not Internet Explorer or Opera).
% If you want better browser compatibility, please use mp3.
% OGG is not recommended, not only because it is not compatible with Safari
% but also because its compression quality is bad.


clear; close all;

rng('shuffle');

%% Stimuli parameters
SampFreq = 44100;
freq = 600;  % frequency for HP
wd = 0.06; %6 percent (width of the phase shifted band)
burstLength = 1; % in [seconds]
intervalLength = 1;  % in [seconds]
numSet = 6;  %number of stimuli overall
IFC = 3; %number of intervals

%% Make the folder to store the stimuli (Remove all existing stimuli)
[parentdir,~,~] = fileparts(pwd);
path_out = [parentdir '\stimuli_HugginsPitch\'];
if exist(path_out, 'dir') == 7
    rmdir(path_out,'s');
    disp('... The existing output directory was removed!');
end
mkdir(path_out);

%% Make an example containing HP to calibrate sound level
fname = 'HugginsPitch_calibration_HP.flac';
signal = [];
for i = 1:10
    signal = [signal; makeHPitch(freq,wd,1,SampFreq)];
end
audiowrite([path_out fname], signal, SampFreq);

%% Make an pure noise example to calibrate sound level
fname = 'HugginsPitch_calibration_noise.flac';
signal = makeNoise(10,SampFreq);
audiowrite([path_out fname], signal, SampFreq);

%% Make an example with the tone present in the 2nd noise
fname = 'HugginsPitch_example_2.flac';
signal = [];
NSig1 = makeNoise(burstLength,SampFreq);
HPSig2 = makeHPitch(freq,wd,burstLength,SampFreq);
NSig3 = makeNoise(burstLength,SampFreq);
signal= [NSig1; zeros(SampFreq*intervalLength,2); HPSig2; zeros(SampFreq*intervalLength,2); NSig3];
audiowrite([path_out fname], signal, SampFreq);

%% Make the real stimuli
ccount = 0;
for i = 1:numSet
    
    for HPInt = 1:IFC
        %     HPInt = randi(IFC); %determines which interval the HP signal is in
        signal=[];
        
        for interval = 1:IFC
            if HPInt == interval %generating the HP signal
                HPSig = makeHPitch(freq,wd,burstLength,SampFreq);
                
                if interval ~= IFC
                    signal=[signal; HPSig; zeros(SampFreq*intervalLength,2)];
                else % if this is the 3rd interval no need to add silence afterwards
                    signal=[signal; HPSig];
                end
            else
                NSig = makeNoise(burstLength,SampFreq);
                
                if interval ~= IFC
                    signal=[signal; NSig; zeros(SampFreq*intervalLength,2)];
                else % if this is the 3rd interval no need to add silence afterwards
                    signal=[signal; NSig];
                end
            end
        end
        
        disp(num2str(max(signal)));
        
        fname = ['HugginsPitch_set'  num2str(i) '_' num2str(HPInt) '.flac'];
        audiowrite([path_out fname], signal, SampFreq);
        
    end
end
fprintf('+++ Special note from Sijia: If you saw a warning saying "Warning: Data clipped when writing file.". Ignore it, not a problem here. +++\n');