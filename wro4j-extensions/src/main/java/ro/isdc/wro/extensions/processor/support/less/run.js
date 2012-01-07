var lessIt = function(css) {
    var result;
    var parser = new less.Parser({ optimization: 2 });

    parser.parse(css, function (e, root) {
    	result = css;
    	if (root && root.toCSS) {
    		result = root.toCSS();	
    	}
    });
    return result;
};
