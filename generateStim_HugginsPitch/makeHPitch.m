function signal=makeHPitch(freq,wd,Len,SampFreq)

n = [1:SampFreq*Len];
N = length(n);
stimulus = zeros(N,1);

noise = randn(size(stimulus));
noise(find(noise>4.2))=4.2;
noise(find(noise<-4.2))=-4.2;
noise=(noise/4.2)*0.99;

noise_fft = fft(noise);
noise_fft_copy = noise_fft;


for i = freq-freq*wd:freq+freq*wd
    noise_fft(i) = noise_fft(i)*-1;
    noise_fft(SampFreq - i +2)=conj(noise_fft(i));
end

signal = [ifft(noise_fft) ifft(noise_fft_copy)];

% figure;
% subplot(3,1,1);
% pwelch(signal(:,1),SampFreq);
% title('Huggins left ear');
% subplot(3,1,2);
% pwelch(signal(:,2),SampFreq);
% title('Huggins right ear');
% subplot(3,1,3)
% pwelch(signal(:,2)-signal(:,1)+noise, SampFreq);
% title('Huggins right ear minus left ear');