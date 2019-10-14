import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Pastgames = new Mongo.Collection("pastgames");
export const GamesRepo = new Mongo.Collection("gamesrepo");
export const Games = new Mongo.Collection("games");

if (Meteor.isServer) {
  Meteor.publish("pastgames", () => {
    return Pastgames.find({});
  });
  Meteor.publish("games", function() {
    return Games.find({});
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
  },
  "games.insert"(code, players, story) {
    Games.insert({ code, players, story });
  }
});
