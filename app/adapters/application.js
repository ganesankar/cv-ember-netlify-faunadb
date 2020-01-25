import JSONAPIAdapter from "@ember-data/adapter/json-api";

export default JSONAPIAdapter.extend({
  namespace: "https://ganesan-cv-reactjs.netlify.com/.netlify/functions/cv-all"
});
