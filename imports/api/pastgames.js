import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Pastgames = new Mongo.Collection("pastgames");

Meteor.methods({
  "pastgames.insert"(name, story) {
    Pastgames.upsert({ name, story }, { name, story });
  }
});
