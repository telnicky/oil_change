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

ActiveRecord::Schema.define(:version => 20121011173030) do

  create_table "appointments", :force => true do |t|
    t.datetime "owner_start"
    t.datetime "owner_end"
    t.text     "owner_notes"
    t.datetime "mechanic_start"
    t.datetime "mechanic_end"
    t.text     "mechanic_notes"
    t.integer  "mileage",        :limit => 6
    t.integer  "status",                      :default => 1, :null => false
    t.string   "street"
    t.string   "city"
    t.string   "zip",            :limit => 7
    t.string   "state",          :limit => 2
    t.integer  "vehicle_id",                                 :null => false
    t.integer  "mechanic_id"
    t.integer  "owner_id",                                   :null => false
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

  create_table "mechanics", :force => true do |t|
    t.string   "company_name"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "street"
    t.string   "city"
    t.integer  "zip",                    :limit => 7
    t.string   "state",                  :limit => 2
    t.string   "phone_number"
    t.datetime "created_at",                                          :null => false
    t.datetime "updated_at",                                          :null => false
    t.string   "email",                               :default => "", :null => false
    t.string   "encrypted_password",                  :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                       :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
  end

  add_index "mechanics", ["email"], :name => "index_mechanics_on_email", :unique => true
  add_index "mechanics", ["reset_password_token"], :name => "index_mechanics_on_reset_password_token", :unique => true

  create_table "owners", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone_number"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "provider"
    t.string   "uid"
    t.string   "stripe_customer_id"
  end

  add_index "owners", ["confirmation_token"], :name => "index_owners_on_confirmation_token", :unique => true
  add_index "owners", ["email"], :name => "index_owners_on_email", :unique => true
  add_index "owners", ["reset_password_token"], :name => "index_owners_on_reset_password_token", :unique => true

  create_table "payments", :force => true do |t|
    t.string   "stripeToken",    :null => false
    t.text     "description"
    t.integer  "appointment_id", :null => false
    t.integer  "mechanic_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
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
