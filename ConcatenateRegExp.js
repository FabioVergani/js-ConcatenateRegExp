function ConcatenateRegExp(...o){//...theArgs
return new RegExp('('+o.map(function(e){return e.source;}).join(')|(')+')');
}
//console.dir(ConcatenateRegExp(/1/,/2(s)/,/3/,/4(s)/));

