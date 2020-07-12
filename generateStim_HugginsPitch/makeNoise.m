function signal=makeNoise(Len,SampFreq)

n=[1:SampFreq*Len];
N=length(n);
stimulus = zeros(N,1);

noise = randn(size(stimulus));
noise(find(noise>4.2))=4.2;
noise(find(noise<-4.2))=-4.2;
noise=(noise/4.2)*0.99;

signal = [noise noise];
