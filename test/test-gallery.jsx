var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../js/gallery');
var Image = require('../js/image');

describe('Gallery component', function() {
    it('Displays a series of images',  function() {

    var images = [
    	{url: 'http://imgur.com/a/CwLXl', description: 'cat eats dinner'}, 
    	{url: 'http://imgur.com/a/8UO3d', description: 'cat gets treat'}
    ];

    var renderer = TestUtils.createRenderer();
    renderer.render(<Gallery images={images}/>);
    var result = renderer.getRenderOutput();

    result.props.className.should.equal('gallery');
    result.type.should.equal('div');
    result.props.children.length.should.equal(2);

    var img1 = result.props.children[0];
    img1.type.should.equal(Image);
    img1.props.url.should.equal(images[0].url);
    img1.props.description.should.equal(images[0].description);

    var img2 = result.props.children[1];
    img2.type.should.equal(Image);
    img2.props.url.should.equal(images[1].url);
    img2.props.description.should.equal(images[1].description);

	});
});
