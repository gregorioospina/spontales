import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Games = new Mongo.Collection("games");
export const GamesRepo = new Mongo.Collection("games_repo");

if (Meteor.isServer) {
  Meteor.publish("games", () => {
    return Games.find({});
  });
}

Meteor.methods({
  "games.insert"(code, players, story) {
    Games.upsert({ code, players, story }, { code, players, story });
  }
});
