require 'webrick'

root = File.expand_path File.dirname(__FILE__)
#root = File.expand_path '~/tmp'
server = WEBrick::HTTPServer.new :Port => 4040, :DocumentRoot => root
trap 'INT' do server.shutdown end
server.start
