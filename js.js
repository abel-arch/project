document.querySelector('button').addEventListener('click',function(e){
    var p=document.querySelector('#prin').value;
    var y=document.querySelector('#year').value;
    var rate=document.querySelector("#rate").value;
    const num=1;
    var answer=p*(num+(rate*y));
    if(p.length==0&&y.length==0&&rate.length==0)
    {
        alert('Principal, Year and Rate can\'t be empty');
        e.preventDefault();
    }
    else if(p.length==0||y.length==0||rate.length==0)
    {
        alert('Please check if Principal, Year or Rate is empty');
        e.preventDefault();
    }
    else{
        var boldText=document.createElement('b');
        boldText.className='display-4 text-success change';
        boldText.appendChild(document.createTextNode(answer));
        var parent=document.querySelector('.text-success');
        var child=document.querySelector('.change');
        parent.replaceWith(boldText);
        e.preventDefault();
    }
})