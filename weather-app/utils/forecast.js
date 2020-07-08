const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const coordinates = longitude  + "," + latitude;
	const url = "http://api.weatherstack.com/current?access_key=a9a6244660a0781769928cdb6045264e&query=" + coordinates + "&units=f";
	
	request({url, json : true}, (error, {body} = {}) =>{
		if(error){
			callback("Unable to connect to api", undefined);
		}else if(body.error){
			callback(body.error.info, undefined);
		}else{
			callback(undefined,{
				temp : body.current.temperature,
				feels_like : body.current.feelslike
			});
		}
	});
};

		
module.exports = forecast;		


