;(function(lw) {

    /**
    * LaserWeb layout module.
    *
    * Description...
    */
    lw.add_module('layout', {

        // Autoload the module ?
        autoload: true,

        // Module version
        version: '0.0.1',

        // Setup module
        setup: function() {
            // Register ui elements
            this.$.dock      = $('#dock');
            this.$.panes     = $('#panes');
            this.$.workspace = $('#workspace');

            // Notify module setup is done.
            //this.pub('module.setup.done');
            setTimeout(function(){lw.modules.layout.pub('module.setup.done');}, 2500);
        }

    });

})(laserweb);
