require 'sinatra'
require 'json'

get '/contacts/:id' do
    p params[:id]
    contact = {
        :id => params[:id],
        :name => 'abruzzi',
        :age => 28
    }
    return contact.to_json
end

get '/' do
    File.read(File.join('public', 'SpecRunner.html'))
end
