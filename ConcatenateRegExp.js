function ConcatenateRegExpSource(...o){return '('+o.map(function(e){return e.source;}).join(')|(')+')';}

const RegularExpressions={
 CSS:(function(){
	const o={},
	Pseudo=o.Pseudo={
	 Page:/left|right/i,
	 Classes:/:(hover|focus|active|visited|link|empty|scope|target|root|fullscreen|default|optional|valid|(in(determinate|valid))|((in|out\-of)\-range)|((requir|check|((dis|en)abl))ed)|((first|only|last)\-(child|of\-type))|((not|lang|any|dir|(nth(\-last)?)\-(child|of\-type))\(.*\))|((\-.+\-)?(read\-(write|only))))/gi,
	 Elements:/([:]{1,2}(before|after|first\-(letter|line)))|(::(marker|backdrop|(spelling|grammar)\-error|((\-.+\-)?((selection|placeholder|fill(\-(lower|upper))?)|(progress\-(bar|value))|(thumb|track)|(range\-(progress|thumb|track))))))/gi,
	};
	Pseudo.All=new RegExp(ConcatenateRegExpSource(Pseudo.Elements,Pseudo.Classes,Pseudo.Page),'gi');
	return o;
 })(),
};

//console.dir(RegularExpressions);

function delCSSPseudoFrom(str){
 const s=str.trim();
 return (s.length>3 && s.includes(':'))?s.replace(RegularExpressions.CSS.Pseudo.All,''):s;
}
//
//---------------------------------------------------------------------------------------------------


function getElementsByCssQuery(str){
 return delCSSPseudoFrom(str);
};
//

const z='a:hover,b,a:link:focus,p:not(:active)';
console.log(getElementsByCssQuery(z));
console.log(getElementsByCssQuery('a'));
console.log(getElementsByCssQuery('a,b,c,s'));
console.log(z);






//
/*
	if(){

	};

hasPseudoClasses||hasPseudoElement
	hasPseudoClasses=o.Classes.test(s),
	hasPseudoElements=o.Elements.test(s);
	if(hasPseudoClasses||hasPseudoElement){
	 const selectors=s.split(',');
	 for(let i=0,m=selectors,l=m.length;i<l;++i){
		if(){};
		console.log(i)
	 };
	};

*/
//========================================================
console.log(i)
	 for(const selector of selectors){}


	function getElementsBySelector(selector) {

			var
			for (var i = 0; i < selectors.length; i++)
				SinglePseudoElement.test(selectors[i]) && (selectors.splice(i, 1), i--);

			selector = selectors.join(',');

		if (trim(selector) == '')
			return [];
		if (api == BOOLEAN_FALSE)
			try {
				return page.querySelectorAll(selector);
			} catch (err) {
				return [];
			}
		if (typeof qsa == TYPE_FUNCTION)
			try {
				return qsa(selector, page);
			} catch (err) {
				return [];
			}
		try {
			if (typeof Selector != TYPE_FUNCTION)
				throw new Error(FATAL_ERROR_MISSING_SAPI);
			var r = Selector(selector, page);
			return typeof r == TYPE_UNDEFINED ? [] : r;
		} catch (err) {
			if (err.message == FATAL_ERROR_MISSING_SAPI)
				throw err;
			return [];
		}
	}



//console.dir(ConcatenateRegExp(/1/,/2(s)/,/3/,/4(s)/));

