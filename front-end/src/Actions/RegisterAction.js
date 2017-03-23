import $ from 'jquery';

export default function(registerData){
	console.log("test");
	var thePromise = $.ajax({
		method: "POST",
		url: "http://www.caseytm.com:3030/register",
		data: registerData
	});
	return {
		type: "register",
		payload: thePromise
	}
}