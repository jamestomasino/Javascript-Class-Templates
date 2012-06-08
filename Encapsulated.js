;(function(window) {

    function TestClass ()
    {

        // ----------------------------------------------
        //                Static Properties
        // ----------------------------------------------

        TestClass.STATIC_VALUE = 'static value';

        // ----------------------------------------------
        //                Privileged Properties
        // ----------------------------------------------

        this.privilegedVar = 'Privileged Variable';

        // ----------------------------------------------
        //                Private Properties
        // ----------------------------------------------

        // Used for scope in inner functions
        var self = this;
        var _privateVar = 'Private Variable';

        // ----------------------------------------------
        //                Privileged Methods
        // ----------------------------------------------

        this.privilegedMethod = function ()
        {

        };

        // ----------------------------------------------
        //                Private Methods
        // ----------------------------------------------

        function privateMethod ()
        {

        }

        // ----------------------------------------------
        //                Getters / Setters
        // ----------------------------------------------

        // Getters / Setters via Privileged Methods
        self.getPrivateVar = function ()
        {
            return _privateVar;
        };

        self.setPrivateVar = function (val)
        {
            _privateVar = val;
        };

        // ----------------------------------------------
        //                Constructor
        // ----------------------------------------------

        function __construct()
        {

        } __construct();
    }

    var p = TestClass.prototype;

    // ----------------------------------------------
    //                Public Properties
    // ----------------------------------------------

    p.publicVar = 'Public Variable';

    // ----------------------------------------------
    //                Public Methods
    // ----------------------------------------------

    p.publicMethod = function ()
    {

    }

window.TestClass = TestClass;
}(window));
