const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionStepSchema = new Schema({
  type: { type: String, enum: ['input', 'select'], required: true },
  name: { type: String, required: true },
  placeholder: { type: String, required: true },
  options: { type: [String], default: [] }
});

const landingSchema = new Schema({
  idLanding: { type: String, required: true, unique: true },
  domaineName: { type: String, required: true },
  title: { type: String },
  images: { type: [String], default: [] },
  logo:String,
  products:[],
  pixelFacebook: [],
  pixelLinkedIn: String,
  pixelTikTok: String,
  pixelGoogleAnalytics: String,
  pixelAdManager: String,
  lienGoogleAnalytics: String,
  lienTagManager: String,

  seoMetaKeywords: { type: [String], default: [] },
  numeroWhatsapp: { type: String },

  questionsStep: { type: [questionStepSchema], default: [] },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LandingPage', landingSchema);
