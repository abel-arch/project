document.querySelector('button').addEventListener('click', function(e) {
    var principal = document.querySelector('#prin').value;
    var year = document.querySelector('#year').value;
    var rate = document.querySelector("#rate").value;
    const num = 1;
    var answer = principal * (num + (rate * year));
    if (principal.length == 0 && year.length == 0 && rate.length == 0) {
        alert('Principal, Year and Rate can\'t be empty');
        e.preventDefault();
    } else if (principal.length == 0 || year.length == 0 || rate.length == 0) {
        alert('Please check if Principal, Year or Rate is empty');
        e.preventDefault();
    } else {
        var boldText = document.createElement('b');
        boldText.className = 'display-4 text-success change';
        boldText.appendChild(document.createTextNode(answer));
        var parent = document.querySelector('.text-success');
        var child = document.querySelector('.change');
        parent.replaceWith(boldText);
        e.preventDefault();
    }
})