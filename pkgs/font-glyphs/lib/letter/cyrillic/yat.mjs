"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r375_t) {
    var r375_n, r375_i, r375_a, _r375_t3, _r375_t4, _r375_t5, _r375_t6, _r375_t7, _r375_t8, _r375_t9, _r375_t10, _r375_t11, _r375_t12, _r375_t13, _r375_t14, _r375_t15, _r375_t16, _r375_t17, _r375_t18, _r375_t19, _r375_t20, _r375_t21, _r375_t22, _r375_t23, _r375_t24, _r375_t25, _r375_t26;
    var _r375_t0 = function () {
        _r375_t7 = function (_r375_t8) {
            _r375_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r375_t8
            };
        };
        _r375_t9 = r375_t instanceof Array;
        if (_r375_t9) {
            _r375_t10 = r375_n = r375_t.length;
            _r375_t11 = r375_i = 0;
            _r375_t12 = function (_r375_t14) {
                return _r375_t7(_r375_t14);
            };
            _r375_t13 = function (_r375_t15) {
                _r375_t16 = r375_i < r375_n;
                if (_r375_t16) {
                    _r375_t0 = function (_r375_t17) {
                        return _r375_t13(r375_i = r375_i + 1);
                    };
                    return {
                        "value": [r375_i, r375_t[r375_i]],
                        "done": false
                    };
                } else return _r375_t12(_r375_t15);
            };
            return _r375_t13();
        } else {
            _r375_t18 = r375_a = Object.keys(r375_t);
            _r375_t19 = r375_n = r375_a.length;
            _r375_t20 = r375_i = 0;
            _r375_t21 = function (_r375_t23) {
                return _r375_t7(_r375_t23);
            };
            _r375_t22 = function (_r375_t24) {
                _r375_t25 = r375_i < r375_n;
                if (_r375_t25) {
                    _r375_t0 = function (_r375_t26) {
                        return _r375_t22(r375_i = r375_i + 1);
                    };
                    return {
                        "value": [r375_a[r375_i], r375_t[r375_a[r375_i]]],
                        "done": false
                    };
                } else return _r375_t21(_r375_t24);
            };
            return _r375_t22();
        }
    };
    var _r375_t1 = function (x) {
        try {
            return _r375_t0(x);
        } catch (ex) {
            return _r375_t2(ex);
        }
    };
    var _r375_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r375_t3 = this; else {
        _r375_t4 = function () {
            void 0;
        };
        _r375_t4.prototype = _r1_t10.prototype;
        _r375_t3 = new _r375_t4();
    }
    _r375_t3[Symbol.iterator] = function () {
        return _r375_t3;
    };
    _r375_t3.next = _r375_t1;
    _r375_t3.throw = function (x) {
        return _r375_t2(x);
    };
    return _r375_t3;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Yat", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Uc, r313_Lc, r313_BGRc, _r313_t14, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendAboveBaseAnchors = _r313_t7.ExtendAboveBaseAnchors;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateDependentComposite = _r313_t8.CreateDependentComposite;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t9.EFVJutLength;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r313_YeriConfig = _r313_t10.YeriConfig;
        var r313_YeriBarPos = _r313_t10.YeriBarPos;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Iotated"].resolve();
        var r313_Iotation = _r313_t11.Iotation;
        var r313_yYatDefaultCrossbarPos = function (r321_top, r321_pBar, r321_stroke) {
            var _r321_t0, _r321_t1;
            var r321_bowl = r1_mix(0, r321_top, r321_pBar) + r321_stroke / 2;
            var r321_fine = r313_OverlayStroke * (r321_stroke / r313_Stroke) / 2;
            return r1_mix(r321_bowl, r313_SLAB ? r321_top - r321_stroke : r321_top, r313_SLAB ? 0.625 : 0.5) + r321_fine;
        };
        var r313_YatShape = function () {
            var _r323_t5;
            var _r323_t6 = arguments;
            var r323_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r323_t6, 0);
            var _r323_t0 = [];
            var _r323_t1 = 0;
            while (_r323_t1 < r323_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r323_xn$flexarguments$2Lrc7uIe5[_r323_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r323_t0.push(r323_xn$flexarguments$2Lrc7uIe5[_r323_t1]);
                _r323_t1 = _r323_t1 + 1;
            }
            var _r323_t2 = r323_xn$flexarguments$2Lrc7uIe5;
            var _r323_t3 = _r323_t2.length;
            var _r323_t4 = 0;
            while (_r323_t4 < _r323_t3) {
                _r323_t1 = _r323_t2[_r323_t4];
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "df") r323_df = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "Yeri") r323_Yeri = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "top") r323_top = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "pBar") r323_pBar = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "fCapital") r323_fCapital = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "stroke") r323_stroke = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "yCrossbarPos") r323_yCrossbarPos = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "xCrossbarLeftExt") r323_xCrossbarLeftExt = _r323_t1.right;
                _r323_t4 = _r323_t4 + 1;
            }
            var r323_df = r1_fallback(r323_df, _r323_t0[0]);
            var r323_Yeri = r1_fallback(r323_Yeri, _r323_t0[1]);
            var r323_top = r1_fallback(r323_top, _r323_t0[2]);
            var r323_pBar = r1_fallback(r323_pBar, _r323_t0[3], r313_YeriBarPos);
            var r323_fCapital = r1_fallback(r323_fCapital, _r323_t0[4], false);
            var r323_stroke = r1_fallback(r323_stroke, _r323_t0[5], r323_df.adviceStroke(2.75));
            var r323_yCrossbarPos = r1_fallback(r323_yCrossbarPos, _r323_t0[6], r313_yYatDefaultCrossbarPos(r323_top, r323_pBar, r323_stroke));
            var r323_xCrossbarLeftExt = r1_fallback(r323_xCrossbarLeftExt, _r323_t0[7], void 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var r328_swVJut, r328_jutTop, r328_jutBot, r328_jutMid, _r328_t0, _r328_t1, _r328_t2;
                var r328_xYeriLeft = Math.max(r323_df.rightSB - (r313_RightSB - r313_SB), r313_SLAB ? r1_mix(r323_df.leftSB, r323_df.rightSB, 0.35) - r313_HSwToV(0.5 * r323_stroke) : r1_mix(r323_df.leftSB, r323_df.rightSB, 0.2) - r313_HSwToV(0.25 * r323_stroke));
                r328_currentGlyph.include(r323_Yeri(r323_top, new r313_xn$NamedParameterPair$2Lrc9b("left", r328_xYeriLeft), new r313_xn$NamedParameterPair$2Lrc9b("right", r323_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("pBar", r323_pBar), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r323_stroke), new r313_xn$NamedParameterPair$2Lrc9b("jut", r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r323_stroke)))));
                var r328_xCrossbarLeftSym = r1_mix(0, r323_df.leftSB, r313_SLAB ? 0.25 : 0.375);
                var r328_xCrossbarLeft = r1_fallback(r323_xCrossbarLeftExt, r328_xCrossbarLeftSym);
                var r328_xCrossbarRight = r1_mix(r328_xCrossbarLeftSym, r328_xYeriLeft + r313_HSwToV(0.5 * r323_stroke), 2);
                r328_currentGlyph.include(r313_HBar.t(r328_xCrossbarLeft, r328_xCrossbarRight, r323_yCrossbarPos, r313_OverlayStroke * (r323_stroke / r313_Stroke)));
                if (r313_SLAB) {
                    r328_swVJut = Math.min(r313_VJutStroke * (r323_stroke / r313_Stroke), r313_VSwToH(0.625 * (r328_xYeriLeft - r328_xCrossbarLeftSym)));
                    _r328_t0 = r313_EFVJutLength(r323_yCrossbarPos, 0, r1_mix(0, r323_top, r323_pBar) / r323_yCrossbarPos, r323_stroke);
                    r328_jutTop = _r328_t0[0];
                    r328_jutBot = _r328_t0[1];
                    r328_jutMid = _r328_t0[2];
                    r328_currentGlyph.include(r313_tagged("serifDL", r313_VSerif.dl(r328_xCrossbarLeft, r323_yCrossbarPos, r328_jutTop, r328_swVJut)));
                    r328_currentGlyph.include(r313_tagged("serifDR", r313_VSerif.dr(r328_xCrossbarRight, r323_yCrossbarPos, r328_jutTop, r328_swVJut)));
                    if (!r323_fCapital) {
                        r328_currentGlyph.ejectTagged("serifYeriLT");
                        r328_currentGlyph.include(r313_tagged("serifLT", r313_HSerif.lt(r328_xYeriLeft, r323_top, r313_SideJut, r323_stroke)));
                    }
                }
                return void 0;
            });
        };
        var r313_IotatedYatShape = function () {
            var _r341_t5;
            var _r341_t6 = arguments;
            var r341_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r341_t6, 0);
            var _r341_t0 = [];
            var _r341_t1 = 0;
            while (_r341_t1 < r341_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r341_xn$flexarguments$2Lrc7uIe5[_r341_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r341_t0.push(r341_xn$flexarguments$2Lrc7uIe5[_r341_t1]);
                _r341_t1 = _r341_t1 + 1;
            }
            var _r341_t2 = r341_xn$flexarguments$2Lrc7uIe5;
            var _r341_t3 = _r341_t2.length;
            var _r341_t4 = 0;
            while (_r341_t4 < _r341_t3) {
                _r341_t1 = _r341_t2[_r341_t4];
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "df") r341_df = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "Yeri") r341_Yeri = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "top") r341_top = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "pBar") r341_pBar = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "fCapital") r341_fCapital = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "stroke") r341_stroke = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "yCrossbarPos") r341_yCrossbarPos = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "xCrossbarLeftExt") r341_xCrossbarLeftExt = _r341_t1.right;
                _r341_t4 = _r341_t4 + 1;
            }
            var r341_df = r1_fallback(r341_df, _r341_t0[0]);
            var r341_Yeri = r1_fallback(r341_Yeri, _r341_t0[1]);
            var r341_top = r1_fallback(r341_top, _r341_t0[2]);
            var r341_pBar = r1_fallback(r341_pBar, _r341_t0[3], r313_YeriBarPos);
            var r341_fCapital = r1_fallback(r341_fCapital, _r341_t0[4], false);
            var r341_stroke = r1_fallback(r341_stroke, _r341_t0[5], r313_AdviceStroke(2.75, r341_df.adws * (7 / 9)));
            var r341_yCrossbarPos = r1_fallback(r341_yCrossbarPos, _r341_t0[6], r313_yYatDefaultCrossbarPos(r341_top, r341_pBar, r341_stroke));
            var r341_xCrossbarLeftExt = r1_fallback(r341_xCrossbarLeftExt, _r341_t0[7], r341_df.leftSB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                var _r346_t0, _r346_t1;
                var r346_gap = 0.25 * (r341_df.rightSB - r341_df.leftSB) + (r313_SLAB ? 0.375 : 0.125) * r341_stroke;
                var r346_subDf = r313_DivFrame(Math.min((r341_df.width - r346_gap) / r313_Width, r341_df.adws * (7 / 9)), 2);
                var r346_shift = r341_df.width - r346_subDf.width;
                var r346_Yat = function () {
                    var _r347_t0, _r347_t1;
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                        var _r350_t0, _r350_t1;
                        r350_currentGlyph.include(r313_YatShape(r346_subDf, r341_Yeri, r341_top, new r313_xn$NamedParameterPair$2Lrc9b("pBar", r341_pBar), new r313_xn$NamedParameterPair$2Lrc9b("fCapital", r341_fCapital), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r341_stroke), new r313_xn$NamedParameterPair$2Lrc9b("yCrossbarPos", r341_yCrossbarPos), new r313_xn$NamedParameterPair$2Lrc9b("xCrossbarLeftExt", r341_xCrossbarLeftExt - r346_shift)));
                        r350_currentGlyph.ejectTagged("serifDL");
                        return void 0;
                    }));
                };
                r346_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r346_shift, 0), r346_Yat()));
                r346_currentGlyph.include(r313_Iotation[r341_fCapital ? "full" : "ascender"](r341_df, r341_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("fCapital", r341_fCapital), new r313_xn$NamedParameterPair$2Lrc9b("swRef", r341_stroke)));
                return void 0;
            });
        };
        var r313_SakhaYatShape = function (r362_Yeri, r362_df, r362_top) {
            var _r362_t0, _r362_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                var _r364_t0, _r364_t1;
                var r364_jut = Math.min(r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r362_df.mvs)), r1_mix(r313_HSwToV(0.5 * r362_df.mvs), r313_Jut, 2 / r362_df.hPack * r362_df.adws));
                r364_currentGlyph.include(r362_Yeri(r362_top, new r313_xn$NamedParameterPair$2Lrc9b("left", r362_df.middle - r313_HSwToV(0.5 * r362_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r362_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r362_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("jut", r364_jut)));
                var r364_fEnoughSpaceForFullSerifs = r362_df.width > 7 * r313_para.refJut;
                if (!r364_fEnoughSpaceForFullSerifs) r364_currentGlyph.ejectTagged("serifYeriLB");
                r364_currentGlyph.include(r313_Iotation[r364_fEnoughSpaceForFullSerifs ? "full" : "outer"](r362_df, r362_top, new r313_xn$NamedParameterPair$2Lrc9b("hBarRight", r362_df.middle + r313_HSwToV(0.5 * r362_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("hBarY", r362_top - r362_df.mvs / 2)));
                return void 0;
            });
        };
        var _r313_t12 = _r1_t2(r313_YeriConfig)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_Uc = _r313_t14[1][0];
            r313_Lc = _r313_t14[1][1];
            r313_BGRc = _r313_t14[1][2];
            _r313_t14[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Yat." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                    var _r381_t0, _r381_t1;
                    var r381_df = r381_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 2));
                    r381_currentGlyph.include(r381_df.markSet.capital());
                    r381_currentGlyph.include(r313_YatShape(r381_df, r313_Uc, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("pBar", 0.5), new r313_xn$NamedParameterPair$2Lrc9b("fCapital", true), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r381_df.adviceThinnerStroke2(2.75, 3, r313_CAP))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yat.upright." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                    var _r390_t0, _r390_t1;
                    var r390_df = r390_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 2));
                    r390_currentGlyph.include(r390_df.markSet.b());
                    r390_currentGlyph.include(r313_YatShape(r390_df, r313_Lc, r313_Ascender, new r313_xn$NamedParameterPair$2Lrc9b("pBar", r1_mix(0, r313_XH, r313_YeriBarPos) / r313_Ascender), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r390_df.adviceThinnerStroke2(2.75, 3, r313_XH)), new r313_xn$NamedParameterPair$2Lrc9b("yCrossbarPos", r313_XH)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yatTall." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                    var _r399_t0, _r399_t1;
                    var r399_df = r399_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 2));
                    r399_currentGlyph.include(r399_df.markSet.b());
                    var r399_asc = r1_mix(r313_XH, r313_Ascender, 2);
                    r399_currentGlyph.include(r313_ExtendAboveBaseAnchors(r399_asc));
                    r399_currentGlyph.include(r313_YatShape(r399_df, r313_Lc, r399_asc, new r313_xn$NamedParameterPair$2Lrc9b("pBar", r1_mix(0, r313_XH, r313_YeriBarPos) / r399_asc), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r399_df.adviceThinnerStroke2(2.75, 3, r313_XH)), new r313_xn$NamedParameterPair$2Lrc9b("yCrossbarPos", r313_Ascender)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YatIotated." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                    var _r409_t0, _r409_t1;
                    var r409_df = r409_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r409_currentGlyph.include(r409_df.markSet.capital());
                    r409_currentGlyph.include(r313_IotatedYatShape(r409_df, r313_Uc, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("pBar", 0.5), new r313_xn$NamedParameterPair$2Lrc9b("fCapital", true), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r409_df.adviceThinnerStroke2(2.75, 3, r313_CAP, 7 / 9))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yatIotated." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                    var _r418_t0, _r418_t1;
                    var r418_df = r418_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r418_currentGlyph.include(r418_df.markSet.b());
                    r418_currentGlyph.include(r313_IotatedYatShape(r418_df, r313_Lc, r313_Ascender, new r313_xn$NamedParameterPair$2Lrc9b("pBar", r1_mix(0, r313_XH, r313_YeriBarPos) / r313_Ascender), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r418_df.adviceThinnerStroke2(2.75, 3, r313_XH, 7 / 9)), new r313_xn$NamedParameterPair$2Lrc9b("yCrossbarPos", r313_XH)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("latn/yatSakha.upright." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
                    var _r427_t0, _r427_t1;
                    var r427_df = r427_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r427_currentGlyph.include(r427_df.markSet.e());
                    r427_currentGlyph.include(r313_SakhaYatShape(r313_Lc, r427_df, r313_XH));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yat.italic/yeri." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                    var _r433_t0, _r433_t1;
                    var r433_df = r433_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r433_currentGlyph.include(r433_df.markSet.e());
                    var r433_subDf = r433_df.slice(3, 2);
                    var r433_xMidBarLeft = r433_subDf.rightSB - r313_HSwToV(r433_df.mvs);
                    r433_currentGlyph.include(r313_Lc(r313_XH, r433_xMidBarLeft, r433_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r433_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("yStart", r313_XH - r433_subDf.smallArchDepthB)));
                    r433_currentGlyph.ejectTagged("serifYeriLT");
                    r433_currentGlyph.ejectTagged("serifYeriLB");
                    r1_DependentSelector.set(r433_currentGlyph, r313_suffix === "corner" ? "full" : "reduced");
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tje.italic/yeri." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                    var _r443_t0, _r443_t1;
                    var r443_df = r443_currentGlyph.include(r313_DivFrame(r1_mix(1, r313_para.advanceScaleMM, 2), 4));
                    r443_currentGlyph.include(r443_df.markSet.e());
                    var r443_subDf = r443_df.slice(4, 3, 0);
                    var r443_xMidBarLeft = r443_subDf.rightSB - r313_HSwToV(r443_df.mvs);
                    r443_currentGlyph.include(r313_Lc(r313_XH, r443_xMidBarLeft, r443_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("stroke", r443_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("yStart", r313_XH - r313_SmallArchDepthB * (2 / r443_df.hPack) * r443_df.adws)));
                    r443_currentGlyph.ejectTagged("serifYeriLT");
                    r443_currentGlyph.ejectTagged("serifYeriLB");
                    r1_DependentSelector.set(r443_currentGlyph, r313_suffix === "corner" ? "full" : "reduced");
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/Yat", 1122, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yeri"));
        r313_xn$selectvariant$7Hrq("cyrl/yat.upright", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeri"));
        r313_xn$selectvariant$7Hrq("cyrl/yatTall", 7303, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeri"));
        r313_xn$selectvariant$7Hrq("cyrl/YatIotated", 42578, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yeri"));
        r313_xn$selectvariant$7Hrq("cyrl/yatIotated", 42579, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeri"));
        r313_xn$selectvariant$7Hrq("latn/yatSakha.upright", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeri"));
        r313_xn$selectvariant$7Hrq("cyrl/yat.italic/yeri", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeri"));
        r313_CreateDependentComposite("cyrl/yat.italic", null, "cyrl/yat.italic/yeri", {
            "full": "cyrl/yat.italic/base/corner",
            "reduced": "cyrl/yat.italic/base/cursive"
        });
        r313_xn$selectvariant$7Hrq("cyrl/tje.italic/yeri", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/tje/rightHalf"));
        r313_CreateDependentComposite("cyrl/tje.italic", null, "cyrl/tje.italic/yeri", {
            "full": "cyrl/tje.italic/base/corner",
            "reduced": "cyrl/tje.italic/base/cursive"
        });
        return r313_alias("latn/yatSakha.italic", null, "cyrl/yat.italic");
    });
    return void 0;
});


