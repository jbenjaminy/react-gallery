var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../js/gallery');

describe('Gallery component', function() {
    it('Displays a series of images',  function() {

    var images = [
    	{url: 'http://imgur.com/a/CwLXl', description: 'cat eats dinner'}, 
    	{url: 'http://imgur.com/a/8UO3d', description: 'cat gets treat'}
    ];

    var renderer = TestUtils.createRenderer();
    renderer.render(<Gallery images={images}/>);
    var result = renderer.getRenderOutput();
    console.log(result.props.children[0], '<result.props.children');
    console.log(result.props.children[0].props, '<children.props');
    console.log(result.props.children[0].type, '<children.type');

    result.props.className.should.equal('gallery');
    result.type.should.equal('div');
    result.props.children.length.should.equal(2);

    var img1 = result.props.children[0].props.children[0];
	// img1.props.children[0].type.should.equal('img');
    img1.src.should.equal(images[0].url);
    img1.alt.should.equal(images[0].description);
    img1.key.should.equal('0');
    img1.children[1].type.should.equal('p');

    var img2 = result.props.children[1].props.children[0];
	// img2.props.children[0].type.should.equal('img');
    img2.src.should.equal(images[1].url);
    img2.alt.should.equal(images[1].description);
    img2.key.should.equal('1');
    img2.children[1].type.should.equal('p');
	});
});

//  Gallery component
// { className: 'gallery',
//   children: 
//    [ { '$$typeof': Symbol(react.element),
//        type: [Function: Image],
//        key: '0',
//        ref: null,
//        props: [Object],
//        _owner: null,
//        _store: {} },
//      { '$$typeof': Symbol(react.element),
//        type: [Function: Image],
//        key: '1',
//        ref: null,
//        props: [Object],
//        _owner: null,
//        _store: {} } ] } '<result.props'