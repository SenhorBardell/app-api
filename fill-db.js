var log                 = require('./libs/log')(module);
var mongoose            = require('./libs/mongoose').mongoose;
var UserModel           = require('./libs/mongoose').UserModel;
var ClientModel         = require('./libs/mongoose').ClientModel;
var AccessTokenModel    = require('./libs/mongoose').AccessTokenModel;
var RefreshTokenModel   = require('./libs/mongoose').RefreshTokenModel;
var faker               = require('Faker');

UserModel.remove({}, function(err) {
	var user = new UserModel({ username: "John", password: "test111" });
	user.save(function(err, user) {
		if(err) return log.error(err);
		else log.info("New user - %s:%s",user.username,user.password);
	});

	for(i=0; i<4; i++) {
		var user = new UserModel({ username: faker.random.first_name().toLowerCase(), password: faker.Lorem.words(1)[0] });
		user.save(function(err, user) {
			if(err) return log.error(err);
			else log.info("New user - %s:%s",user.username,user.password);
			});
		}
});

ClientModel.remove({}, function(err) {
	var client = new ClientModel({ name: "Test Client", clientId: "mobile", clientSecret:"1366613" });
	client.save(function(err, client) {
		if(err) return log.error(err);
		else log.info("New client - %s:%s",client.clientId,client.clientSecret);
	});
});

AccessTokenModel.remove({}, function (err) {
	if (err) return log.error(err);
});

RefreshTokenModel.remove({}, function (err) {
	if (err) return log.error(err);
});

setTimeout(function() {
	mongoose.disconnect();
}, 3000);