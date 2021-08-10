describe('CpsiMapview.form.ControllerMixin', function () {
    var mixin = Ext.create('CpsiMapview.form.ControllerMixin');

    describe('Basics', function () {
        it('is defined', function () {
            expect(mixin).not.to.be(undefined);
        });
    });

    describe('Functions', function () {

        it('#onFieldChanged', function () {
            var fn = mixin.onFieldChanged;
            expect(fn).not.to.be(undefined);
        });
    });
});
