const { Schema } = require('mongoose');

const PitcherSchema = Schema({
  last_name: {type: String, required: true},
  first_name: {type: String, required: true},
  display_name: {type: String, required: true},
  pitch_order: {type: Number, required: true},
  win: {type: Boolean, required: true},
  loss: {type: Boolean, required: true},
  _save: {type: Boolean, required: true},
  hold: {type: Boolean, required: true},
  era: {type: Number, required: true},
  whip: {type: Number, required: true},
  innings_pitched: {type: Number, required: true},
  hits_allowed: {type: Number, required: true},
  runs_allowed: {type: Number, required: true},
  earned_runs: {type: Number, required: true},
  walks: {type: Number, required: true},
  intentional_walks: {type: Number, required: true},
  strike_outs: {type: Number, required: true},
  home_runs_allowed: {type: Number, required: true},
  pitch_count: {type: Number, required: true},
  pitches_strikes: {type: Number, required: true},
  wild_pitches: {type: Number, required: true},
  hit_by_pitch: {type: Number, required: true},
  _errors: {type: Number, required: true},
  team_abbreviation: {type: String, required: true}
})

module.exports = PitcherSchema;
