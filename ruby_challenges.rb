# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.
# class Bike 
#   attr_accessor :model, :wheels, :frame_size

#   def initialize model, frame_size, wheels=2
#     @model = model
#     @wheels = wheels
#     @frame_size = frame_size
#   end

#   def get_info
#     "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
#   end
# end

# bike = Bike.new 'trek', '123d'
# p bike.get_info

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.

class Bell 
  def ring
    p "RING!"
  end
end

class Bike 
  attr_accessor :model, :wheels, :frame_size, :bell

  def initialize model, frame_size, wheels=2
    @model = model
    @wheels = wheels
    @frame_size = frame_size
  end

  def get_info
    "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end

  def more_info
    p get_info
  end
end

bike = Bike.new 'Sham', '100s'
p bike.get_info
bell = Bell.new
bike.bell = bell
bike.bell.ring
bike.more_info





# Expected output example: my_bike.ring_bell => 'Ding ding!'


# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.





# Expected output example: my_bike.speed => 0


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.





# Expected output example: my_bike.pedal_faster 10 => 10


# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.





# Expected output example: my_bike.brake 15 => 0
