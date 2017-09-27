var helper = require(__dirname + '/../test-helper');
var pg = helper.pg;

var host = 'localhost'//'ec2-107-20-224-218.compute-1.amazonaws.com';
var database = 'postgres' //'db6kfntl5qhp2';
var user = 'postgres'//'kwdzdnqpdiilfs';
var port = 5432;

var config = {
  host: host,
  port: port,
  database: database,
  user: user,
  password: 'uaZoSSHgi7mVM7kYaROtusClKu',
  ssl: false
};

test('connection with config ssl = true', function() {
  //connect & disconnect from heroku
  pg.connect(config, assert.calls(function(err, client, done) {
    assert.isNull(err);
    client.query('SELECT NOW() as time', assert.success(function(res) {
      assert(res.rows[0].time.getTime());
      done();
      pg.end();
    }))
  }));
});
