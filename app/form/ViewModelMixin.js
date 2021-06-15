/**
 * A mixin to handle hiding and showing layers associated with an edit model
 *
 *
 *  mixed in viewmodels are expected to implement the "valid" formula to trigger the validation on the desired record fields, example:
 *
 *      valid: function (get) {
            get('currentRecord.fundingCategoryId');
            get('currentRecord.year');
            get('currentRecord.code');
            get('currentRecord.name');
            var rec = get('currentRecord');
            var v = rec && rec.isValid();
            return v;
        }

 *
 */

Ext.define('Pms.util.EditFormViewModelMixin', {
    extend: 'Ext.Mixin',
    requires: [
        'Pms.constants.General',
        'CpsiMapview.util.RoleManager'
    ],
    mixinConfig: {
        before: {
            destroy: 'destroyUtil'
        },
        after: {
            initConfig: 'onInitConfig'
        }
    },

    destroyUtil: function () {
        var me = this;
        me.get('currentRecord').destroy();
    },

    getFeatureStore: function (currentRecord, storeName) {
        if (currentRecord && currentRecord.featureStores) {
            return currentRecord.featureStores[storeName];
        }
    },

    onInitConfig: function () {
        var me = this;
        // add the currentRecord property which is used for all data entry forms
        me.set('currentRecord', null);
    },

    config: {

        formulas: {

            networkSolverUrl: function () {
                return '/pmspy/netsolver';
            },

            segmentFeaturesStore: {
                bind: {
                    currentRecord: '{currentRecord}'
                },
                get: function () {
                    var me = this;
                    var storeName = me.get('featureStoreName');
                    var currentRecord = me.get('currentRecord');
                    var fs = me.getFeatureStore(currentRecord, storeName);
                    return fs;
                }
            },

            resultLayer: {
                bind: {
                    currentRecord: '{currentRecord}'
                },
                get: function () {
                    var me = this;
                    var storeName = me.get('featureStoreName');
                    var currentRecord = me.get('currentRecord');
                    var fs = me.getFeatureStore(currentRecord, storeName);

                    // when a model is reloaded then the featureStore and layer
                    // are recreated, and the tool is pointing to the old layer
                    // TODO fix this for all tool types
                    // see bindings in PublicLighting.util.EditFormWindowMixin
                    var pointTool = me.getView().down('#pointDigitiserButton');
                    if (pointTool) {
                        var toolCtrl = pointTool.getController();
                        toolCtrl.setResultLayer(fs.layer);
                        toolCtrl.setDrawLayer(fs.layer);
                    }

                    if (fs) {
                        return fs.layer;
                    }
                }
            },

            polygonLayer: {
                bind: {
                    currentRecord: '{currentRecord}'
                },
                get: function () {

                    var me = this;
                    var storeName = me.get('polygonStoreName');
                    var currentRecord = me.get('currentRecord');
                    var fs = me.getFeatureStore(currentRecord, storeName);
                    if (fs) {
                        return fs.layer;
                    }
                }
            },

            selectStyle: {
                bind: {
                    resultLayer: '{resultLayer}'
                },
                get: function (data) {
                    var layer = data.resultLayer;
                    return layer.get('selectStyle');
                }
            },

            isLocked: {
                bind: {
                    currentRecord: '{currentRecord}',
                    isLocked: '{currentRecord.isLocked}'
                },
                get: function (data) {
                    // if value is "undefined" the binding doesn't work so it needs to retun a proper boolean value
                    var ret = data.currentRecord.get('isLocked') === true;
                    return ret;
                }
            },
            shouldBeLocked: {
                bind: {
                    currentRecord: '{currentRecord}',
                    shouldBeLocked: '{currentRecord.shouldBeLocked}'
                },
                get: function (data) {
                    // if value is "undefined" the binding doesn't work so it needs to retun a proper boolean value
                    var ret = data.currentRecord.get('shouldBeLocked') === true;
                    return ret;
                }
            },
            padlockIcon: {
                bind: {
                    currentRecord: '{currentRecord}',
                    isLocked: '{currentRecord.isLocked}',
                    shouldBeLocked: '{currentRecord.shouldBeLocked}'
                },
                get: function (data) {
                    var ret = 'xf023@FontAwesome';
                    if (!data.isLocked) {
                        ret = 'xf09c@FontAwesome';
                    }
                    return ret;
                }
            },
            padlockToolText: {
                bind: {
                    currentRecord: '{currentRecord}',
                    isLocked: '{currentRecord.isLocked}',
                    shouldBeLocked: '{currentRecord.shouldBeLocked}',
                    canUnlock: '{canUnlock}'
                },
                get: function (data) {
                    var ret = 'Locked';
                    if (data.canUnlock) {
                        ret += ' (click to unlock)';
                    }
                    if (!data.isLocked && data.shouldBeLocked) {
                        ret = 'Temporarily unlocked';
                    }
                    if (!data.isLocked && !data.shouldBeLocked) {
                        ret = 'Unlocked';
                    }
                    return ret;
                }
            },
            isLegacy: {
                bind: {
                    currentRecord: '{currentRecord}'
                },
                get: function (data) {
                    // if value is "undefined" the binding doesn't work so it needs to retun a proper boolean value
                    var rec = data.currentRecord;
                    var ret = (rec ? (rec.get('isLegacy') === true) : false);
                    return ret;
                }
            },
            canSave: {
                bind: {
                    currentRecord: '{currentRecord}',
                    isLocked: '{currentRecord.isLocked}',
                    isValid: '{valid}' // see header comment about the "valid" formula
                },
                get: function (data) {
                    var ret = data.isValid;
                    ret = ret && (data.isLocked !== true);
                    ret = ret && this.getFormulas().belongsToRoleReadWrite.call(this, this.getFormulaFn);
                    return ret;
                }
            },

            canDelete: {
                bind: {
                    currentRecord: '{currentRecord}',
                    isLocked: '{currentRecord.isLocked}',
                    phantom: '{currentRecord.phantom}'
                },
                get: function (data) {
                    var ret = (data.isLocked !== true) && !data.phantom;
                    ret = ret && this.getFormulas().belongsToRoleReadWrite.call(this, this.getFormulaFn);
                    return ret;
                }
            },

            canRefresh: {
                bind: {
                    currentRecord: '{currentRecord}',
                    phantom: '{currentRecord.phantom}'
                },
                get: function (data) {
                    return !data.currentRecord.isPhantom();
                }
            },

            canUnlock: {
                bind: {
                    currentRecord: '{currentRecord}',
                    phantom: '{currentRecord.phantom}',
                    belongsToRole: '{belongsToRoleUnlocker}',
                    customRule: '{canUnlockCustom}'
                },
                get: function (data) {
                    var ret = data.belongsToRole;
                    ret = ret && data.customRule;
                    return ret;
                }
            },

            canUnlockCustom: function (get) {
                get('currentRecord');
                return true;
            },

            belongsToRoleAdmin: function (get) {
                get('currentRecord');
                var ret = Pms.util.RoleManager.checkRole(Pms.constants.General.roles.browser.admin);
                return ret;
            },

            belongsToRoleReadOnly: function (get) {
                get('currentRecord');
                var ret = Pms.util.RoleManager.checkRole(Pms.constants.General.roles.browser.readOnly);
                return ret;
            },

            belongsToRoleBridgeEditor: function (get) {
                get('currentRecord');
                var ret = Pms.util.RoleManager.checkRole(Pms.constants.General.roles.browser.bridgeEditor);
                return ret;
            },

            belongsToRoleReadWrite: function (get) {
                get('currentRecord');
                var ret = Pms.util.RoleManager.checkRole(Pms.constants.General.roles.browser.readWrite);
                return ret;
            },

            belongsToRoleRoadScheduleEditor: function (get) {
                get('currentRecord');
                var ret = Pms.util.RoleManager.checkRole(Pms.constants.General.roles.browser.roadScheduleEditor);
                return ret;
            },

            belongsToRoleProgrammeSubmitter: function (get) {
                get('currentRecord');
                var ret = Pms.util.RoleManager.checkRole(Pms.constants.General.roles.browser.programmeSubmitter);
                return ret;
            },

            belongsToRoleUnlocker: function (get) {
                get('currentRecord');
                var ret = Pms.util.RoleManager.checkRole(Pms.constants.General.roles.browser.unlocker);
                return ret;
            }

        }
    }
});