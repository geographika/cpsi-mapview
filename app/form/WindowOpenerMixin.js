/*
To be mixed into any menu controller and window controller where checking on double windows is needed.
*/

Ext.define('CpsiMapview.form.WindowOpenerMixin', {
    extend: 'Ext.Mixin',

    /**
     * Find an existing window based on a record id
     * @param {any} recId
     * @param {any} editWindowType
     */
    getExistingEditingFormWindow: function (recId, editWindowType) {

        var windowXType = Ext.ClassManager.get(editWindowType).prototype.getXType();
        var existingWindows = Ext.ComponentQuery.query(windowXType);
        var rec, recordWindow = null;

        Ext.each(existingWindows, function (w) {
            rec = w.getViewModel().get('currentRecord');
            if (rec.getId() == recId) {
                recordWindow = w;
                return false;
            }
        });

        return recordWindow;
    },

    /**
     * Return the existing window for the given record if it already exists
     * or a new window if not
     * */
    getEditingFormWindow: function (record, editWindowType) {

        var me = this;
        var recId = record.getId();
        var recordWindow = me.getExistingEditingFormWindow(recId, editWindowType);

        return recordWindow || Ext.create(editWindowType);
    }

});