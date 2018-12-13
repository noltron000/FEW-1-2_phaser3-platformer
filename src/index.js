import 'phaser';

function preload() {
	this.load.image('sky', 'src/assets/sky.png');
	this.load.image('ground', 'src/assets/platform.png');
	this.load.image('star', 'src/assets/star.png');
	this.load.image('bomb', 'src/assets/bomb.png');
	this.load.spritesheet('dude',
		'assets/dude.png',
		{ frameWidth: 32, frameHeight: 48 }
	);
}

function create() {
	this.add.image(400, 300, 'sky');
	this.add.image(400, 300, 'star');
}

function update() {
}

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

const game = new Phaser.Game(config);
