"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r308_block, _r308_t4, _r308_t6;
    var _r308_t3 = this;
    var _r308_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r308_t1 = _r308_t0.length;
    var _r308_t2 = 0;
    var _r308_t5 = _r308_t2 < _r308_t1;
    while (_r308_t5) {
        _r308_t6 = (r308_block = _r308_t0[_r308_t2], r308_block(_r308_t3), _r308_t2 = _r308_t2 + 1);
        _r308_t5 = _r308_t2 < _r308_t1;
    }
    return _r308_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r312_xn$Capture_Ext$2Lrc2b) {
    var _r312_t0, _r312_t1;
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Shared-Shapes", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        var r313_JUT = {
            "NORMAL": 0,
            "RIGHT": 1,
            "LEFT": 2
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r317_t0, _r317_t1;
            return {
                "ArmHBar": r313_ArmHBar
            };
        });
        var r313_ArmHBar = function (r318_hPos, r318_df) {
            var _r318_t0, _r318_t1, _r318_t2, _r318_tag3;
            return (function () {
                var r321_xn$prefix$2Mrc79XZu1, r321_cap, r321_asc, r321_high, r321_mid, r321_base, r321_desc, r321_at, _r321_t0, _r321_t1;
                var r321_exports = {};
                var r321_left = (_r321_t0 = r318_hPos, _r321_t0 === r313_JUT.RIGHT ? r318_df.rightSB : _r321_t0 === r313_JUT.LEFT ? r318_df.leftSB - r313_jut * (r313_SLAB ? 1.5 : 1) + r313_HSwToV(0.5 * r318_df.mvs) : (r321_xn$prefix$2Mrc79XZu1 = _r321_t0, r318_df.leftSB));
                var r321_right = (_r321_t1 = r318_hPos, _r321_t1 === r313_JUT.RIGHT ? r318_df.rightSB + r313_jut * (r313_SLAB ? 1.5 : 1) - r313_HSwToV(0.5 * r318_df.mvs) : _r321_t1 === r313_JUT.LEFT ? r318_df.leftSB : (r321_xn$prefix$2Mrc79XZu1 = _r321_t1, r318_df.rightSB));
                r321_exports.cap = r321_cap = function () {
                    var _r329_t0, _r329_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                        var _r331_t0, _r331_t1;
                        r331_currentGlyph.include(r313_HBar.t(r321_left, r321_right, r313_CAP, r318_df.mvs));
                        return void 0;
                    });
                };
                r321_exports.asc = r321_asc = function () {
                    var _r334_t0, _r334_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                        var _r336_t0, _r336_t1;
                        r336_currentGlyph.include(r313_HBar.t(r321_left, r321_right, r313_Ascender, r318_df.mvs));
                        return void 0;
                    });
                };
                r321_exports.high = r321_high = function () {
                    var _r339_t0, _r339_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                        var _r341_t0, _r341_t1;
                        r341_currentGlyph.include(r313_HBar.t(r321_left, r321_right, r313_highBarPos, r318_df.mvs));
                        return void 0;
                    });
                };
                r321_exports.mid = r321_mid = function () {
                    var _r344_t0, _r344_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                        var _r346_t0, _r346_t1;
                        r346_currentGlyph.include(r313_HBar.m(r321_left, r321_right, r313_barPos, r318_df.mvs));
                        return void 0;
                    });
                };
                r321_exports.base = r321_base = function () {
                    var _r349_t0, _r349_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                        var _r351_t0, _r351_t1;
                        r351_currentGlyph.include(r313_HBar.b(r321_left, r321_right, 0, r318_df.mvs));
                        return void 0;
                    });
                };
                r321_exports.desc = r321_desc = function () {
                    var _r354_t0, _r354_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                        var _r356_t0, _r356_t1;
                        r356_currentGlyph.include(r313_HBar.b(r321_left, r321_right, r313_Descender, r318_df.mvs));
                        return void 0;
                    });
                };
                r321_exports.at = r321_at = function (r359_y) {
                    var _r359_t0, _r359_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                        var _r361_t0, _r361_t1;
                        r361_currentGlyph.include(r313_HBar.m(r321_left, r321_right, r359_y, r318_df.mvs));
                        return void 0;
                    });
                };
                return r321_exports;
            })();
        };
        r313_ArmHBar.normal = function (r363_df) {
            var _r363_t0, _r363_t1;
            return r313_ArmHBar(r313_JUT.NORMAL, r363_df);
        };
        r313_ArmHBar.right = function (r364_df) {
            var _r364_t0, _r364_t1;
            return r313_ArmHBar(r313_JUT.RIGHT, r364_df);
        };
        return r313_ArmHBar.left = function (r365_df) {
            var _r365_t0, _r365_t1;
            return r313_ArmHBar(r313_JUT.LEFT, r365_df);
        };
    });
    return void 0;
});


