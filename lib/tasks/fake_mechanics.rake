require 'faker'

namespace :data  do
  desc "create some fake data"
  task :fake_mechanics => :environment do
    num_mechanics = ENV['NUM_RECORDS'].to_i
    num_mechanics.times do
      Mechanic.create(:company_name => Faker::Name.first_name,
                      :address => Faker::Address.street_name,
                      :city => Faker::Address.city,
                      :state => Faker::Address.state,
                      :phone_number => Faker::PhoneNumber.phone_number,
                      :email_address => Faker::Internet.email
                      )
    end
    print "#{num_mechanics} created.\n"
  end
end