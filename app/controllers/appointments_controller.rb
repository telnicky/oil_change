class AppointmentsController < ApplicationController
  respond_to :html, :json
  
  def new
    @appointment = Appointment.new
  end

  def concat_dates_to_datetime
      #combine two feilds, each containing a hash of values
      hashed_start_date = (params[:owner_start_time]).merge (params[:owner_start_date])
       #create an empty string
       owner_start_date = []
       #get the values of the hash and concatenate into one string
         hashed_start_date.each_value do |value|
          owner_start_date << value.to_i
         end  
        #create new DateTime object from two fields 
        @owner_start_date = DateTime.new(owner_start_date[0],owner_start_date[1],owner_start_date[2],owner_start_date[3],owner_start_date[4])  

      #do the same thing as above for the owner_end_date
      hashed_end_date =  (params[:owner_end_time]).merge (params[:owner_start_date])
        owner_end_date = []
          hashed_end_date.each_value do |value|
            owner_end_date << value.to_i
          end

        @owner_end_date = DateTime.new(owner_end_date[0],owner_end_date[1],owner_end_date[2],owner_end_date[3],owner_end_date[4])
  end
  
  def create
    appointment = params[:appointment]

    concat_dates_to_datetime
    #appointment[:scheduled_date] = Date.strptime(appointment[:scheduled_date], '%m/%d/%Y')
    #appointment[:scheduled_start_time] = Time.parse(appointment[:scheduled_start_time])
    #appointment[:scheduled_end_time] = Time.parse(appointment[:scheduled_end_time])
    @appointment = Appointment.new(appointment)
    #from concat_dates_to_datetime  
    @appointment.owner_start = @owner_start_date
    @appointment.owner_end = @owner_end_date

    @appointment.save!
    redirect_to new_payment_path(:appointment_id => @appointment.id)
  end

  def index
    @appointments = Appointment.all
  end

  def show
    @appointment = Appointment.find(params[:id])
    @appointments = Appointment.all
  end

  def edit 
    @appointment = Appointment.find(params[:id])
    @mechanic_id = params[:mechanic_id]
  end

  def update
    @appointment = Appointment.find(params[:id])
    @appointment.update_attributes(params[:appointment])

    redirect_to owner_path(@appointment_)
  end

  def destroy
    Appointment.find(params[:id]).destroy
    
    flash[:notice] = "Your appointment has been deleted."
    redirect_to owner_path(params[:owner_id])
  end
 
end
