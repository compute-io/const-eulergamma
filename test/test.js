'use strict';

// MODULES //

var tape = require( 'tape' );
var GAMMA = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof GAMMA, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 0.5772156649015329', function test( t ) {
	t.equal( GAMMA, 0.5772156649015329, 'returns 0.5772156649015329' );
	t.end();
});
