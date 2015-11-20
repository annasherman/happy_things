class JSONReader

def initialize(filename)
  @json = String.new
  File.foreach(filename) do |line|
      @json = @json + line
  end
  # @json.close #closes access to a file. leaving these open is a bad idea.
  #close it in the same function you open it in

end

def to_hash
  return JSON.parse(@json)

end


end
