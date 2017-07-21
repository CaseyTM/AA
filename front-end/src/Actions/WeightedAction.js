import $ from 'jquery';

export default function(weightData) {

    var thePromise = $.ajax({
        method: "GET",
<<<<<<< HEAD
        url: "http://www.caseytm.com:3030/weighted-results",
=======
        url: "http://www.elizabethgulsby.com:3030/weighted-results",
>>>>>>> 74a2c5aa2fccfb23ded9f620d936b480106fb5b8
        data: weightData
    });
    return {
        type: "weight",
        payload: thePromise
    }

}