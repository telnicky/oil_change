require 'faker'

namespace :fake  do
  desc "create some fake data"
  task :all_the_things => :environment do
    num_things = ENV['NUM_RECORDS'].present? ? ENV['NUM_RECORDS'].to_i : 10

    #create admin info
    owner = Owner.create(:first_name => 'Admin',
                         :last_name => 'Admin',
                         :phone_number => Faker::PhoneNumber.phone_number,
                         :email => 'admin@md.com',
                         :password => 'password',
                         :password_confirmation => 'password' )
    owner.skip_confirmation!
    owner.save!
    
    veh = Vehicle.create(:make => Faker::Lorem.words(1).first,
                         :model => Faker::Lorem.words(1).first,
                         :oil_type => rand(1..3),
                         :year => 2012,
                         :license_plate => Faker::Lorem.words(1).first,
                         :vin_number => Faker::Lorem.words(1).first,
                         :notes => Faker::Lorem.paragraph(),
                         :color => Faker::Lorem.words.first,
                         :owner_id => owner.id )

    mech = Mechanic.create(:company_name => 'Admin',
                           :street => Faker::Address.street_name,
                           :city => Faker::Address.city,
                           :state => Faker::Address.state,
                           :zip => Faker::Address.zip,
                           :phone_number => Faker::PhoneNumber.phone_number,
                           :email => 'admin@md.com',
                           :password => 'password',
                           :password_confirmation => 'password')
    mech.skip_confirmation!
    mech.save!

    start_time = rand(0..31).days.from_now.utc
    Appointment.create(:owner_notes => Faker::Lorem.paragraph(),
                       :mechanic_notes => Faker::Lorem.paragraph(),
                       :status => rand(1..3),
                       :owner_start => start_time,
                       :owner_end => start_time.end_of_day,
                       :vehicle_id => veh.id,
                       :owner_id => owner.id,
                       :street => Faker::Address.street_name,
                       :city => Faker::Address.city,
                       :zip => Faker::Address.zip )

    # create fake info
    num_things.times do
      owner = Owner.create(:first_name => Faker::Name.first_name,
                           :last_name => Faker::Name.last_name,
                           :phone_number => Faker::PhoneNumber.phone_number,
                           :email => Faker::Internet.email,
                           :password => 'password',
                           :password_confirmation => 'password' )
      owner.skip_confirmation!
      owner.save!
      
      veh = Vehicle.create(:make => Faker::Lorem.words(1).first,
                           :model => Faker::Lorem.words(1).first,
                           :oil_type => rand(1..3),
                           :year => 2012,
                           :license_plate => Faker::Lorem.words(1).first,
                           :vin_number => Faker::Lorem.words(1).first,
                           :notes => Faker::Lorem.paragraph(),
                           :color => Faker::Lorem.words.first,
                           :owner_id => owner.id )

      mech = Mechanic.create(:company_name => Faker::Name.first_name,
                             :street => Faker::Address.street_name,
                             :city => Faker::Address.city,
                             :state => Faker::Address.state,
                             :zip => Faker::Address.zip,
                             :phone_number => Faker::PhoneNumber.phone_number,
                             :email => Faker::Internet.email,
                             :password => 'password',
                             :password_confirmation => 'password')
      mech.skip_confirmation!
      mech.save!

      start_time = rand(0..31).days.from_now.utc
      Appointment.create(:owner_notes => Faker::Lorem.paragraph(),
                         :mechanic_notes => Faker::Lorem.paragraph(),
                         :status => rand(1..3),
                         :owner_start => start_time,
                         :owner_end => start_time.end_of_day,
                         :vehicle_id => veh.id,
                         :owner_id => owner.id,
                         :street => Faker::Address.street_name,
                         :city => Faker::Address.city,
                         :zip => Faker::Address.zip )
 
    end
    print "#{num_things} of everything created.\n"
  end
end