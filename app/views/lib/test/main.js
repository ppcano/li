

App.TestRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('test');
  },
  afterModel: function() {
    this.transitionTo('test.result', 1);
  }

});

// TODO: ember-jj-abrams does not support namespace convention
// App.TestResultRoute
// Find the reason App.TestRoute is correctly resolved and a Nested Route
// isn't

define("app/routes/test/result",
["exports"],
function(__exports__) {
"use strict";


    var Route = Ember.Route.extend({

      model: function() {

        var response = {"__li_clients_active":[{"timestamp":1401895939890761,"offset":1,"value":1},{"timestamp":1401895942973347,"offset":3,"value":1},{"timestamp":1401895946006313,"offset":5,"value":1},{"timestamp":1401895949027919,"offset":7,"value":1},{"timestamp":1401895952048584,"offset":10,"value":2},{"timestamp":1401895955087658,"offset":13,"value":3},{"timestamp":1401895958146777,"offset":16,"value":3},{"timestamp":1401895961179108,"offset":19,"value":3},{"timestamp":1401895964209636,"offset":22,"value":3},{"timestamp":1401895967234817,"offset":25,"value":4},{"timestamp":1401895970263283,"offset":28,"value":4},{"timestamp":1401895973302915,"offset":31,"value":4},{"timestamp":1401895976332558,"offset":34,"value":4},{"timestamp":1401895979359444,"offset":37,"value":5},{"timestamp":1401895982399043,"offset":40,"value":5},{"timestamp":1401895985428409,"offset":43,"value":5},{"timestamp":1401895988471524,"offset":46,"value":5},{"timestamp":1401895991745160,"offset":49,"value":6},{"timestamp":1401895994773341,"offset":52,"value":6},{"timestamp":1401895997810910,"offset":55,"value":6},{"timestamp":1401896000851134,"offset":58,"value":6},{"timestamp":1401896003883495,"offset":61,"value":7},{"timestamp":1401896006918916,"offset":64,"value":7},{"timestamp":1401896009957957,"offset":67,"value":7},{"timestamp":1401896012984566,"offset":70,"value":7},{"timestamp":1401896016007317,"offset":73,"value":7},{"timestamp":1401896019028811,"offset":76,"value":8},{"timestamp":1401896022062751,"offset":79,"value":8},{"timestamp":1401896025096421,"offset":82,"value":8},{"timestamp":1401896028128420,"offset":85,"value":8},{"timestamp":1401896031192244,"offset":88,"value":9},{"timestamp":1401896034234117,"offset":91,"value":9},{"timestamp":1401896037269806,"offset":94,"value":9},{"timestamp":1401896040300392,"offset":97,"value":9},{"timestamp":1401896043343027,"offset":100,"value":10},{"timestamp":1401896046378948,"offset":103,"value":10},{"timestamp":1401896049420339,"offset":106,"value":10},{"timestamp":1401896052449994,"offset":109,"value":11},{"timestamp":1401896055493572,"offset":112,"value":11},{"timestamp":1401896058526910,"offset":115,"value":11},{"timestamp":1401896061576079,"offset":118,"value":11},{"timestamp":1401896064612512,"offset":121,"value":11},{"timestamp":1401896067647181,"offset":124,"value":12},{"timestamp":1401896070684094,"offset":127,"value":12},{"timestamp":1401896073721088,"offset":130,"value":12},{"timestamp":1401896076789920,"offset":133,"value":13},{"timestamp":1401896079819739,"offset":136,"value":13},{"timestamp":1401896082856812,"offset":139,"value":13},{"timestamp":1401896085897914,"offset":142,"value":13},{"timestamp":1401896088943252,"offset":145,"value":13},{"timestamp":1401896091975331,"offset":148,"value":13},{"timestamp":1401896095006907,"offset":151,"value":14},{"timestamp":1401896098042906,"offset":154,"value":14},{"timestamp":1401896101084468,"offset":157,"value":14},{"timestamp":1401896104123297,"offset":160,"value":15},{"timestamp":1401896107166769,"offset":163,"value":15},{"timestamp":1401896110203662,"offset":166,"value":15},{"timestamp":1401896113250908,"offset":169,"value":15},{"timestamp":1401896116284087,"offset":172,"value":15},{"timestamp":1401896119321766,"offset":175,"value":16},{"timestamp":1401896122374319,"offset":178,"value":16},{"timestamp":1401896125488365,"offset":181,"value":16},{"timestamp":1401896128524253,"offset":184,"value":17},{"timestamp":1401896131574906,"offset":187,"value":17},{"timestamp":1401896134604929,"offset":190,"value":17},{"timestamp":1401896137622915,"offset":193,"value":17},{"timestamp":1401896140643934,"offset":196,"value":18},{"timestamp":1401896143683499,"offset":199,"value":18},{"timestamp":1401896146721612,"offset":202,"value":18},{"timestamp":1401896149765592,"offset":205,"value":18},{"timestamp":1401896152806904,"offset":208,"value":19},{"timestamp":1401896155900865,"offset":211,"value":19},{"timestamp":1401896158941450,"offset":214,"value":19},{"timestamp":1401896161974823,"offset":217,"value":19},{"timestamp":1401896165026854,"offset":220,"value":19},{"timestamp":1401896168064064,"offset":223,"value":20},{"timestamp":1401896171255365,"offset":226,"value":20},{"timestamp":1401896174289368,"offset":229,"value":20},{"timestamp":1401896177338324,"offset":232,"value":20},{"timestamp":1401896180385090,"offset":235,"value":21},{"timestamp":1401896183434062,"offset":238,"value":21},{"timestamp":1401896186475638,"offset":241,"value":21},{"timestamp":1401896189503306,"offset":244,"value":21},{"timestamp":1401896192526394,"offset":247,"value":22},{"timestamp":1401896195559214,"offset":250,"value":22},{"timestamp":1401896198598902,"offset":253,"value":22},{"timestamp":1401896201642905,"offset":256,"value":22},{"timestamp":1401896204698906,"offset":259,"value":23},{"timestamp":1401896207738913,"offset":262,"value":23},{"timestamp":1401896210778907,"offset":265,"value":23},{"timestamp":1401896213814904,"offset":268,"value":23},{"timestamp":1401896216859334,"offset":271,"value":24},{"timestamp":1401896219899195,"offset":274,"value":24},{"timestamp":1401896222940864,"offset":277,"value":24},{"timestamp":1401896225978509,"offset":280,"value":24},{"timestamp":1401896229018662,"offset":283,"value":25},{"timestamp":1401896232049156,"offset":286,"value":25},{"timestamp":1401896235087074,"offset":289,"value":25},{"timestamp":1401896238138914,"offset":292,"value":25},{"timestamp":1401896241189963,"offset":295,"value":23},{"timestamp":1401896244232032,"offset":298,"value":22},{"timestamp":1401896247258914,"offset":301,"value":21},{"timestamp":1401896250278909,"offset":304,"value":18},{"timestamp":1401896253302912,"offset":307,"value":17},{"timestamp":1401896256326830,"offset":310,"value":16},{"timestamp":1401896259350907,"offset":313,"value":15},{"timestamp":1401896262379124,"offset":316,"value":14},{"timestamp":1401896265399732,"offset":319,"value":12},{"timestamp":1401896300248714,"offset":322,"value":12}],"__li_user_load_time":[{"timestamp":1401895985428409,"offset":1,"value":852.79},{"timestamp":1401895997810910,"offset":3,"value":728.07},{"timestamp":1401896000851134,"offset":5,"value":5646},{"timestamp":1401896025096421,"offset":7,"value":750.94},{"timestamp":1401896031192244,"offset":9,"value":5286.2},{"timestamp":1401896040300392,"offset":11,"value":731.6},{"timestamp":1401896046378948,"offset":13,"value":702.27},{"timestamp":1401896052449994,"offset":15,"value":5014.2},{"timestamp":1401896058526910,"offset":17,"value":738.76},{"timestamp":1401896061576079,"offset":19,"value":792.68},{"timestamp":1401896064612512,"offset":21,"value":5147.53},{"timestamp":1401896082856812,"offset":23,"value":760.05},{"timestamp":1401896085897914,"offset":25,"value":775.31},{"timestamp":1401896088943252,"offset":27,"value":6099.33},{"timestamp":1401896098042906,"offset":29,"value":759.72},{"timestamp":1401896101084468,"offset":32,"value":2963.295},{"timestamp":1401896107166769,"offset":34,"value":755.69},{"timestamp":1401896113250908,"offset":36,"value":810.31},{"timestamp":1401896116284087,"offset":38,"value":738.95},{"timestamp":1401896122374319,"offset":40,"value":5055.03},{"timestamp":1401896125488365,"offset":42,"value":5561.31},{"timestamp":1401896140643934,"offset":44,"value":743.1},{"timestamp":1401896143683499,"offset":46,"value":5064.19},{"timestamp":1401896146721612,"offset":49,"value":2753.455},{"timestamp":1401896149765592,"offset":52,"value":2915.25},{"timestamp":1401896152806904,"offset":54,"value":5286.2},{"timestamp":1401896158941450,"offset":56,"value":4738.84},{"timestamp":1401896161974823,"offset":58,"value":722.89},{"timestamp":1401896174289368,"offset":61,"value":2935.805},{"timestamp":1401896177338324,"offset":64,"value":2921.555},{"timestamp":1401896180385090,"offset":66,"value":5289.99},{"timestamp":1401896183434062,"offset":68,"value":795.59},{"timestamp":1401896195559214,"offset":71,"value":2844.87},{"timestamp":1401896198598902,"offset":73,"value":785.85},{"timestamp":1401896201642905,"offset":75,"value":830.16},{"timestamp":1401896204698906,"offset":78,"value":2882.005},{"timestamp":1401896207738913,"offset":80,"value":4758.95},{"timestamp":1401896210778907,"offset":82,"value":5074.85},{"timestamp":1401896213814904,"offset":84,"value":4982.01},{"timestamp":1401896216859334,"offset":86,"value":4685.24},{"timestamp":1401896219899195,"offset":88,"value":745.58},{"timestamp":1401896222940864,"offset":90,"value":760.21},{"timestamp":1401896225978509,"offset":92,"value":724.92},{"timestamp":1401896232049156,"offset":94,"value":5315.32},{"timestamp":1401896235087074,"offset":97,"value":2896.13},{"timestamp":1401896238138914,"offset":100,"value":2887.75},{"timestamp":1401896241189963,"offset":102,"value":5255.58}]};

        var model = {
          clientsActive: response.__li_clients_active,
          userLoadTime: response.__li_user_load_time
        };

        // could be promised to simulate the loading process
        return model;

      }

    });


__exports__["default"] = Route;
});


App.Router.map(function () {

  this.resource('test', { path: '/' }, function() {
    this.route('result', { path: ':id' });
  });

});

App.Router.reopen({
  location: 'none'
});
