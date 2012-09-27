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

ActiveRecord::Schema.define(:version => 20120920184320) do

  create_table "appointments", :force => true do |t|
    t.datetime "owner_start",                 :default => '2012-09-27 18:33:49'
    t.datetime "owner_end",                   :default => '2012-09-27 19:33:49'
    t.text     "owner_notes"
    t.datetime "mechanic_start"
    t.datetime "mechanic_end"
    t.text     "mechanic_notes"
    t.integer  "mileage",        :limit => 6
    t.integer  "status",                      :default => 1,                     :null => false
    t.string   "street"
    t.string   "city"
    t.string   "zip",            :limit => 7
    t.string   "state",          :limit => 2
    t.integer  "vehicle_id",                                                     :null => false
    t.integer  "mechanic_id"
    t.integer  "owner_id",                                                       :null => false
    t.datetime "created_at",                                                     :null => false
    t.datetime "updated_at",                                                     :null => false
  end

  create_table "mechanics", :force => true do |t|
    t.string   "company_name"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "street"
    t.string   "city"
    t.integer  "zip",           :limit => 7
    t.string   "state",         :limit => 2
    t.string   "phone_number"
    t.string   "email_address",              :null => false
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
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
    t.integer  "year",          :limit => 4
    t.string   "color"
    t.string   "license_plate", :limit => 7
    t.string   "vin_number",    :limit => 17
    t.integer  "oil_type",                    :default => 1
    t.text     "notes"
    t.integer  "owner_id",                                   :null => false
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

end
