require 'sinatra'

get '/index' do
    File.read(File.join('public', 'index.html'))
end

get '/test' do
    File.read(File.join('public', 'SpecRunner.html'))
end
