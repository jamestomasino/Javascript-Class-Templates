(function() {

	// Configuration and constants
    var m = Math,
	τ = m.PI * 2,
	vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
		(/firefox/i).test(navigator.userAgent) ? 'Moz' :
		(/trident/i).test(navigator.userAgent) ? 'ms' :
		'opera' in window ? 'O' : '',

    // Browser capabilities
    isAndroid = (/android/gi).test(navigator.appVersion),
    isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
    isPlaybook = (/playbook/gi).test(navigator.appVersion),
    isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(),
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor + 'Transform' in document.documentElement.style,
    hasTransitionEnd = isIDevice || isPlaybook,

	// Events
	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
	WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel',

	// Helpers
	trnOpen = 'translate' + (has3d ? '3d(' : '('),
	trnClose = has3d ? ',0)' : ')',

	// Constructor
	ClassPrototype = function (options) {
		var self = this;

		// Default options
		self.options = {
			x: 0,
			y: 0,
		};

		// User defined options
		for (i in options) self.options[i] = options[i];

		// Set starting position
		self.x = self.options.x;
		self.y = self.options.y;

		self._privateMethod ();
	};

// Prototype
ClassPrototype.prototype = {
	// Variables
	enabled: true,
	x: 0,
	y: 0,

	// Event Handler
	handleEvent: function (e) {

	},

	// Private Method (not really private, just underscored)
	_privateMethod: function () {

	},

	// Public Method
	publicMethod: function () {

	},

};

if (typeof exports !== 'undefined') exports.ClassPrototype = ClassPrototype;
else window.ClassPrototype = ClassPrototype;

})();

