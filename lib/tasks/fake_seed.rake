namespace :fake do
  desc "Drop, create, migrate then seed the database"
  task :seed => :environment do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['fake:all_the_things'].invoke
  end
end