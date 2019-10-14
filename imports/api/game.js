import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Games = new Mongo.Collection("games");
export const GamesRepo = new Mongo.Collection("gamesrepo");

if (true) {
  Meteor.publish("games", function() {
    return Games.find({});
  });
  Meteor.publish("gamesrepo", function() {
    return GamesRepo.find({});
  });
}

Meteor.methods({
  "games.insert"(code, players, story) {
    Games.upsert({ code, players, story }, { code, players, story });
  }
});
