import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Pastgames = new Mongo.Collection("pastgames");
export const GamesRepo = new Mongo.Collection("gamesrepo");
export const Games = new Mongo.Collection("games");
export const Blanks = new Mongo.Collection("blanks");
export const Players = new Mongo.Collection("players");

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
  Meteor.publish("blanks", function() {
    return Blanks.find({});
  });
  Meteor.publish("players", function() {
    return Players.find({});
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
  },
  "blanks.insert"(id, code, blank, text, order) {
    Blanks.upsert(
      { id, code, blank, text, order },
      { id, code, blank, text, order }
    );
  },
  "blanks.update"(id, code, text) {
    Blanks.update({ id: id, code: code }, { $set: { blank: text } });
  },
  "players.insert"(name, code) {
    Players.upsert(
      { name, code },
      { name, code, id: Math.floor(Math.random() * 10) % 4 }
    );
  }
});
