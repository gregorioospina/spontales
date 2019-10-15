import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Games = new Mongo.Collection("games");
export const GamesRepo = new Mongo.Collection("gamesrepo");

//No se si esto funcione como me lo imagino, saqué esto de la documentación de meteor https://docs.meteor.com/api/pubsub.html
//primer ejemplo, linea 20
if (Meteor.isServer) {
  Meteor.publish("gamesAndgamesrepo", function() {
    return [ 
      Games.find({}),
      GamesRepo.find({})
    ];
  });
}

Meteor.methods({});
