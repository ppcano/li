
var Serializer = require('app/data/serializer')['default'];
var Adapter = require('app/data/adapter')['default'];


moduleForModel('test', 'model: test', {

  setup: function(container) {
    container.register('serializer:-app', Serializer);
    container.register('adapter:application', Adapter.extend({
      auth: testUtils.authKey
    }));
  },
  teardown: function() {
    $.mockjaxClear();
  }
});

test('can deserialize a mock `test` list response', function() {

  expect(9);

    var response = [{"id":1694283,
      "status":3,
      "status_text":"Finished",
      "title":"Mixed test",
      "url":"http:\/\/test.loadimpact.com",
      "started":"2014-06-05T08:19:17+00:00",
      "ended":"2014-06-05T08:24:12+00:00",
      "public_url":"http:\/\/loadimpact.com\/load-test\/test.loadimpact.com-08ed4c05854b406bca3205723d8f1960"
    },
    {"id":1694261,"status":3,"status_text":"Finished","title":"Sunet test","url":"http:\/\/www.sunet.se","started":"2014-06-05T07:54:19+00:00","ended":"2014-06-05T08:00:26+00:00","public_url":"http:\/\/loadimpact.com\/load-test\/www.sunet.se-0756995234e5f88e5e479b75c1889a49"},
    {"id":1693566,"status":3,"status_text":"Finished","title":"Sunet test","url":"http:\/\/www.sunet.se","started":"2014-06-04T15:32:13+00:00","ended":"2014-06-04T15:38:20+00:00","public_url":"http:\/\/loadimpact.com\/load-test\/www.sunet.se-a95247a44d0d716e723d4ba0bd62c2c1"},
    {"id":1693552,"status":3,"status_text":"Finished","title":"Auto-generated (04\/06\/2014 17:17:47)","url":"http:\/\/test.loadimpact.com","started":"2014-06-04T15:18:03+00:00","ended":"2014-06-04T15:23:56+00:00","public_url":"http:\/\/loadimpact.com\/load-test\/test.loadimpact.com-5a697d556ff451073ebe0265b905c725"}];
      
    $.mockjax({
      url: '*/tests',
      dataType: 'json',
      responseText: response
    });


  var store = this.store();
  stop();
  store.find('test').then(function(tests) {
    
    equal(tests.get('length'), 4);

    tests.forEach(function(test){

      equal(test.get('status'), 3);
      equal(test.get('statusText'), 'Finished');

    });
    start();
  });
});


test('can deserialize a real `test` list response', function() {

  expect(1);

  var store = this.store();

  stop();
  store.find('test').then(function(tests) {
    
    ok(tests.get('length') > 0 , 'has real tests');

    start();
  });
});

