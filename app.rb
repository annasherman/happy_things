require 'bundler'
Bundler.require

get '/' do
 erb :index
end

get '/api' do
  happy_json = JSONReader.new('happy.json')
  return happy_json.to_hash.to_json
end
