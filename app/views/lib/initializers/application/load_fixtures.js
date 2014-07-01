


export default {
  name: 'load-fixtures',

  initialize: function(container, application) {
    
    var Test = container.resolve('model:test');

    Test.FIXTURES = [{"id":1694283,
      "status":3,
      "statusText":"Finished",
      "title":"Mixed test",
      "url":"http:\/\/test.loadimpact.com",
      "started":"2014-06-05T08:19:17+00:00",
      "ended":"2014-06-05T08:24:12+00:00",
      "publicUrl":"http:\/\/loadimpact.com\/load-test\/test.loadimpact.com-08ed4c05854b406bca3205723d8f1960"
    },
    {"id":1694261,"status":3,"statusText":"Finished","title":"Sunet test","url":"http:\/\/www.sunet.se","started":"2014-06-05T07:54:19+00:00","ended":"2014-06-05T08:00:26+00:00","publicUrl":"http:\/\/loadimpact.com\/load-test\/www.sunet.se-0756995234e5f88e5e479b75c1889a49"},
    {"id":1693566,"status":3,"statusText":"Finished","title":"Sunet test","url":"http:\/\/www.sunet.se","started":"2014-06-04T15:32:13+00:00","ended":"2014-06-04T15:38:20+00:00","publicUrl":"http:\/\/loadimpact.com\/load-test\/www.sunet.se-a95247a44d0d716e723d4ba0bd62c2c1"},
    {"id":1693552,"status":3,"statusText":"Finished","title":"Auto-generated (04\/06\/2014 17:17:47)","url":"http:\/\/test.loadimpact.com","started":"2014-06-04T15:18:03+00:00","ended":"2014-06-04T15:23:56+00:00","publicUrl":"http:\/\/loadimpact.com\/load-test\/test.loadimpact.com-5a697d556ff451073ebe0265b905c725"}];

  }
};
