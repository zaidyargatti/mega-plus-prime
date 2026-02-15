import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  hero: {
    title: String,
    subtitle: String
  },

  pricing: [
    {
      title: String,
      price: String
    }
  ],

  aboutProject: String,

  amenities: [
    {
      title: String,
      desc: String
    }
  ],

  exploreBuildings: [
    {
      title: String
    }
  ],

  nearbyConnectivity: String,

  constructionUpdates: [String],

  faqs: [
    {
      question: String,
      answer: String
    }
  ]
});

export default mongoose.model("Content", ContentSchema);
