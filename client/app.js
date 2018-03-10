// Bacon.js is a library for functional reactive prgramming. Or let's say it's a library for working with events
// and dynamic values
const clicks = $("h1").asEventStream("click");

var plus = $("#plus").asEventStream("click").map(1)
var minus = $("#minus").asEventStream("click").map(-1)
var both = plus.merge(minus)

both.onValue(function(val) { console.log(val) });