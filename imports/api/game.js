import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const GamesRepo = new Mongo.Collection("games-repo");

if (Meteor.isServer) {
  Meteor.publish("games-repo", () => {
    return GamesRepo.find({});
  });
}

Meteor.methods({});
