require 'faker'

namespace :fake  do
  desc "create some fake data"
  task :mechanics => :environment do
    num_mechanics = ENV['NUM_RECORDS'].present? ? ENV['NUM_RECORDS'].to_i : 10
    num_mechanics.times do
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
    end
    print "#{num_mechanics} mechanics created.\n"
  end
end