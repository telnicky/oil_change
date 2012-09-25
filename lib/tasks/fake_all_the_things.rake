require 'faker'

namespace :data  do
  desc "create some fake data"
  task :fake_all_the_things => :environment do
    num_things = ENV['NUM_RECORDS'].to_i
    num_things.times do
     owner = Owner.create(:first_name => Faker::Name.first_name,
                          :last_name => Faker::Name.last_name,
                          :phone_number => Faker::PhoneNumber.phone_number,
                          :email_address => Faker::Internet.email )
     
     veh = Vehicle.create(:make => Faker::Lorem.words(1),
                          :model => Faker::Lorem.words(1),
                          :oil_type => Faker::Lorem.words(1),
                          :year => 2012,
                          :license_plate => Faker::Lorem.words(1),
                          :vin_number => Faker::Lorem.words(1),
                          :notes => Faker::Lorem.paragraph(),
                          :owner_id => owner.id )

     mech = Mechanic.create(:company_name => Faker::Name.first_name,
                :address => Faker::Address.street_name,
                :city => Faker::Address.city,
                :state => Faker::Address.state,
                :phone_number => Faker::PhoneNumber.phone_number,
                :email_address => Faker::Internet.email
                )

     Appointment.create(:availability_start_time => "#{Time.now}",
                        :availability_end_time => "#{Time.now.end_of_day}",
                        :owner_notes => Faker::Lorem.paragraph(),
                        :mechanic_notes => Faker::Lorem.paragraph(),
                        :status => 'available',
                        :scheduled_date => "#{Time.now.month / Time.now.day}",
                        :scheduled_end_time => (Time.now + 3600),
                        :vehicle_id => veh.id,
                        :owner_id => owner.id,
                        :street => Faker::Address.street_name,
                        :city => Faker::Address.city,
                        :zip => Faker::Address.zip
        )

    end
    print "#{num_things} created.\n"
  end
end