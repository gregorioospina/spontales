import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Pastgames = new Mongo.Collection("pastgames");

if (Meteor.isServer) {
  Meteor.publish("pastgames", () => {
    return Pastgames.find({});
  });
}

Meteor.methods({
  "pastgames.insert"(name, story) {
    Pastgames.upsert({ name, story }, { name, story });
  }
});
