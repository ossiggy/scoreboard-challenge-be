import { Schema } from "mongoose";

export const FielderSchema = new Schema({
  last_name: { type: String, required: true },
  first_name: { type: String, required: true },
  display_name: { type: String, required: true },
  _errors: { type: Number, required: true },
  team_abbreviation: { type: String, required: true },
});
