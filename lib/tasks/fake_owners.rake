require 'faker'

namespace :fake  do
  desc "create some fake data"
  task :owners => :environment do
    num_owners = ENV['NUM_RECORDS'].present? ? ENV['NUM_RECORDS'].to_i : 10
    num_owners.times do
      owner = Owner.create(:first_name => Faker::Name.first_name,
                           :last_name => Faker::Name.last_name,
                           :phone_number => Faker::PhoneNumber.phone_number,
                           :email => Faker::Internet.email,
                           :password => 'password',
                           :password_confirmation => 'password' )
      owner.skip_confirmation!
      owner.save!

    end
    print "#{num_owners} owners created.\n"
  end
end
