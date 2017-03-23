import $ from 'jquery';

export default function(weightData) {

    var thePromise = $.ajax({
        method: "GET",
        url: "http://www.caseytm.com:3030/weighted-results",
        data: weightData
    });
    return {
        type: "weight",
        payload: thePromise
    }

}