# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120924200759) do

  create_table "appointments", :force => true do |t|
    t.date     "scheduled_date"         #CHANGE owner_start t.datetime
    t.date     "date"                   #REMOVE        
    t.time     "scheduled_start_time"   #REMOVE
    t.time     "time"                   #CHANGE owner_end t.datetime => owner_start + x.hours + xx.minutes
    t.time     "scheduled_end_time"     #REMOVE
    t.datetime "created_at",                                  :null => false
    t.datetime "updated_at",                                  :null => false
    t.text     "owner_notes"
    t.text     "mechanic_notes"
    t.string   "status",                  :default => "Open" #CHANGE to_i 1,2,3
    t.time     "availability_start_time" #CHANGE mechanic_start t.datetime
    t.time     "availability_end_time"   #CHANGE mechanic_end   t.datetime    
    t.integer  "vehicle_id"
    t.integer  "mechanic_id"
    t.integer  "owner_id"
    t.string   "street"
    t.string   "city"
    t.string   "zip"
  end

  create_table "mechanics", :force => true do |t|
    t.string   "company_name"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "phone_number"
    t.string   "email_address"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "owners", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email_address"
    t.string   "phone_number"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "vehicles", :force => true do |t|
    t.string   "make"
    t.string   "model"
    t.integer  "year"           #ADD color t.string        
    t.string   "oil_type"       #CHANGE to_i 1,2,3
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "license_plate"
    t.string   "vin_number"
    t.text     "notes"
    t.integer  "owner_id"
  end

end
