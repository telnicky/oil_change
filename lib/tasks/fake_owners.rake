require 'faker'

namespace :data  do
  desc "create some fake data"
  task :fake_owners => :environment do
    num_owners = ENV['NUM_RECORDS'].to_i
    num_owners.times do
     owner = Owner.create(:first_name => Faker::Name.first_name,
                          :last_name => Faker::Name.last_name,
                          :phone_number => Faker::PhoneNumber.phone_number,
                          :email_address => Faker::Internet.email )
     
     Vehicle.create(:make => Faker::Lorem.words(1),
                    :model => Faker::Lorem.words(1),
                    :oil_type => Faker::Lorem.words(1),
                    :year => 2012,
                    :license_plate => Faker::Lorem.words(1),
                    :vin_number => Faker::Lorem.words(1),
                    :notes => Faker::Lorem.paragraph(),
                    :owner_id => owner.id )

    end
    print "#{num_owners} created.\n"
  end
end
