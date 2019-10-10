import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";

Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: "en" }));
});
