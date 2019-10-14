import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Pastgames = new Mongo.Collection("pastgames");
export const GamesRepo = new Mongo.Collection("gamesrepo");

if (Meteor.isServer) {
  Meteor.publish("pastgames", () => {
    return Pastgames.find({});
  });
  Meteor.publish("gamesrepo", function() {
    return GamesRepo.find({});
  });
}

Meteor.methods({
  "pastgames.insert"(name, code, story) {
    Pastgames.insert({
      name: name,
      code: code,
      story: story,
      createdAt: new Date()
    });
  }
});
