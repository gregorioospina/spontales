import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Pastgames = new Mongo.Collection("pastgames");
export const GamesRepo = new Mongo.Collection("gamesrepo");
export const Games = new Mongo.Collection("games");
export const Blanks = new Mongo.Collection("blanks");

if (Meteor.isServer) {
  Meteor.publish("pastgames", () => {
    return Pastgames.find({});
  });
  Meteor.publish("gamesrepo", function() {
    return GamesRepo.find({});
  });
  Meteor.publish("blanks", function() {
    return Blanks.find({});
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
  "blanks.insert"(id, blank, text, order) {
    console.log("blanks insert");
    Blanks.upsert({ id, blank, text, order }, { id, blank, text, order });
  },
  "blanks.update"(id, text) {
    console.log("blanks update");
    Blanks.update({ id: id }, { $set: { blank: text } });
  }
});
