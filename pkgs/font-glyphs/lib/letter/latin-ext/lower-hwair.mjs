"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r320_t) {
    var r320_n, r320_i, r320_a, _r320_t3, _r320_t4, _r320_t5, _r320_t6, _r320_t7, _r320_t8, _r320_t9, _r320_t10, _r320_t11, _r320_t12, _r320_t13, _r320_t14, _r320_t15, _r320_t16, _r320_t17, _r320_t18, _r320_t19, _r320_t20, _r320_t21, _r320_t22, _r320_t23, _r320_t24, _r320_t25, _r320_t26;
    var _r320_t0 = function () {
        _r320_t7 = function (_r320_t8) {
            _r320_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r320_t8
            };
        };
        _r320_t9 = r320_t instanceof Array;
        if (_r320_t9) {
            _r320_t10 = r320_n = r320_t.length;
            _r320_t11 = r320_i = 0;
            _r320_t12 = function (_r320_t14) {
                return _r320_t7(_r320_t14);
            };
            _r320_t13 = function (_r320_t15) {
                _r320_t16 = r320_i < r320_n;
                if (_r320_t16) {
                    _r320_t0 = function (_r320_t17) {
                        return _r320_t13(r320_i = r320_i + 1);
                    };
                    return {
                        "value": [r320_i, r320_t[r320_i]],
                        "done": false
                    };
                } else return _r320_t12(_r320_t15);
            };
            return _r320_t13();
        } else {
            _r320_t18 = r320_a = Object.keys(r320_t);
            _r320_t19 = r320_n = r320_a.length;
            _r320_t20 = r320_i = 0;
            _r320_t21 = function (_r320_t23) {
                return _r320_t7(_r320_t23);
            };
            _r320_t22 = function (_r320_t24) {
                _r320_t25 = r320_i < r320_n;
                if (_r320_t25) {
                    _r320_t0 = function (_r320_t26) {
                        return _r320_t22(r320_i = r320_i + 1);
                    };
                    return {
                        "value": [r320_a[r320_i], r320_t[r320_a[r320_i]]],
                        "done": false
                    };
                } else return _r320_t21(_r320_t24);
            };
            return _r320_t22();
        }
    };
    var _r320_t1 = function (x) {
        try {
            return _r320_t0(x);
        } catch (ex) {
            return _r320_t2(ex);
        }
    };
    var _r320_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r320_t3 = this; else {
        _r320_t4 = function () {
            void 0;
        };
        _r320_t4.prototype = _r1_t10.prototype;
        _r320_t3 = new _r320_t4();
    }
    _r320_t3[Symbol.iterator] = function () {
        return _r320_t3;
    };
    _r320_t3.next = _r320_t1;
    _r320_t3.throw = function (x) {
        return _r320_t2(x);
    };
    return _r320_t3;
};
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-Hwair", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_serifLT, r313_serifLB, _r313_t12, _r313_t13, _r313_t14, _r313_t15, _r313_tag16;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateSelectorVariants = _r313_t8.CreateSelectorVariants;
        var r313_DefineSelectorGlyph = _r313_t8.DefineSelectorGlyph;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_nShoulder = _r313_t9.nShoulder;
        var r313_uBowl = _r313_t9.uBowl;
        var r313_SerifFrame = _r313_t9.SerifFrame;
        var r313_HConfig = {
            "straightSerifless": [false, false],
            "straightTopLeftSerifed": [true, false],
            "straightSerifedExceptBottomRight": [true, true]
        };
        var r313_VConfig = {
            "roundedSerifless": false,
            "roundedSerifed": true
        };
        var _r313_t10 = _r1_t2(r313_HConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_serifLT = _r313_t12[1][0];
            r313_serifLB = _r313_t12[1][1];
            _r313_t12[1];
            (function () {
                var r323_suffixV, r323_serifRT, _r323_t2, _r323_t3, _r323_tag4;
                var r323_df = r313_DivFrame(r313_para.advanceScaleMM, 3);
                r313_DefineSelectorGlyph("hwair", r313_suffix, r323_df, "b");
                var _r323_t0 = Object.entries(r313_VConfig)[Symbol.iterator]();
                var _r323_t1 = void 0;
                while (!(_r323_t1 = _r323_t0.next()).done) {
                    _r323_t2 = _r323_t1.value;
                    r323_suffixV = _r323_t2[0];
                    r323_serifRT = _r323_t2[1];
                    (function () {
                        return r313_xn$GlyphSaveSink$2Lrc4b.save("hwair." + r313_suffix + "." + r323_suffixV, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                            var r329_sf2, _r329_leti0, _r329_t1, _r329_t2, _r329_t6, _r329_tag7;
                            r329_currentGlyph.setWidth(0);
                            r329_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r329_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r323_df.leftSB, r323_df.mvs));
                            var r329_ada = r313_SmallArchDepthA * (2 / r323_df.hPack) * r323_df.adws;
                            var r329_adb = r313_SmallArchDepthB * (2 / r323_df.hPack) * r323_df.adws;
                            r329_currentGlyph.include(r313_VBar.l(r323_df.leftSB, 0, r313_Ascender, r323_df.mvs));
                            var _r329_t3 = r329_currentGlyph;
                            var _r329_t4 = _r329_t3.include;
                            var _r329_t5 = r1_mix(0, r313_XH, 0.5);
                            var _r329_t8 = (function (_r329_leti0) {
                                var r335_yJoin = _r329_leti0;
                                return r313_union(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r335_yJoin - r313_TINY), new r313_xn$NamedParameterPair$2Lrc9b("left", r323_df.leftSB + r313_HSwToV(r323_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r323_df.middle + r313_HSwToV(0.5 * r323_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r323_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r323_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r329_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r329_adb)), r313_uBowl.toothlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r335_yJoin + r313_TINY), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r323_df.middle - r313_HSwToV(0.5 * r323_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r323_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r323_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("ada", r329_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r329_adb), new r313_xn$NamedParameterPair$2Lrc9b("rightY0", r313_XH)));
                            })(_r329_t5);
                            _r329_t4.call(_r329_t3, _r329_t8);
                            var r329_sf = r313_SerifFrame.fromDf(r323_df, r313_Ascender, 0);
                            if (r313_serifLT) r329_currentGlyph.include(r313_tagged("serifLT", r329_sf.lt.outer));
                            if (r313_serifLB) r329_currentGlyph.include(r313_tagged("serifLB", r329_sf.lb.full));
                            if (r323_serifRT) {
                                r329_sf2 = r313_SerifFrame.fromDf(r323_df, r313_XH, 0);
                                r329_currentGlyph.include(r313_tagged("serifRT", r329_sf2.rt.full));
                            }
                            return void 0;
                        }));
                    })();
                }
                return r313_xn$selectvariant$7Hrq("hwair." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "hv/v"));
            })();
        }
        return r313_CreateSelectorVariants("hwair", 405, Object.keys(r313_HConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "hv/h"));
    });
    return void 0;
});


