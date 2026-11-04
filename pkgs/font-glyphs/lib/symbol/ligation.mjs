"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/glyph/relation";
import * as _s0_t3 from "../meta/aesthetics.mjs";
var _s0_t4;
export {_s0_t4 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t12;
var _r1_t2 = function _r1_t12(r637_t) {
    var r637_n, r637_i, r637_a, _r637_t3, _r637_t4, _r637_t5, _r637_t6, _r637_t7, _r637_t8, _r637_t9, _r637_t10, _r637_t11, _r637_t12, _r637_t13, _r637_t14, _r637_t15, _r637_t16, _r637_t17, _r637_t18, _r637_t19, _r637_t20, _r637_t21, _r637_t22, _r637_t23, _r637_t24, _r637_t25, _r637_t26;
    var _r637_t0 = function () {
        _r637_t7 = function (_r637_t8) {
            _r637_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r637_t8
            };
        };
        _r637_t9 = r637_t instanceof Array;
        if (_r637_t9) {
            _r637_t10 = r637_n = r637_t.length;
            _r637_t11 = r637_i = 0;
            _r637_t12 = function (_r637_t14) {
                return _r637_t7(_r637_t14);
            };
            _r637_t13 = function (_r637_t15) {
                _r637_t16 = r637_i < r637_n;
                if (_r637_t16) {
                    _r637_t0 = function (_r637_t17) {
                        return _r637_t13(r637_i = r637_i + 1);
                    };
                    return {
                        "value": [r637_i, r637_t[r637_i]],
                        "done": false
                    };
                } else return _r637_t12(_r637_t15);
            };
            return _r637_t13();
        } else {
            _r637_t18 = r637_a = Object.keys(r637_t);
            _r637_t19 = r637_n = r637_a.length;
            _r637_t20 = r637_i = 0;
            _r637_t21 = function (_r637_t23) {
                return _r637_t7(_r637_t23);
            };
            _r637_t22 = function (_r637_t24) {
                _r637_t25 = r637_i < r637_n;
                if (_r637_t25) {
                    _r637_t0 = function (_r637_t26) {
                        return _r637_t22(r637_i = r637_i + 1);
                    };
                    return {
                        "value": [r637_a[r637_i], r637_t[r637_a[r637_i]]],
                        "done": false
                    };
                } else return _r637_t21(_r637_t24);
            };
            return _r637_t22();
        }
    };
    var _r637_t1 = function (x) {
        try {
            return _r637_t0(x);
        } catch (ex) {
            return _r637_t2(ex);
        }
    };
    var _r637_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t12) _r637_t3 = this; else {
        _r637_t4 = function () {
            void 0;
        };
        _r637_t4.prototype = _r1_t12.prototype;
        _r637_t3 = new _r637_t4();
    }
    _r637_t3[Symbol.iterator] = function () {
        return _r637_t3;
    };
    _r637_t3.next = _r637_t1;
    _r637_t3.throw = function (x) {
        return _r637_t2(x);
    };
    return _r637_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Joining = _r1_t10.Joining;
var r1_NeqLigationSlashDotted = _r1_t10.NeqLigationSlashDotted;
var _r1_t11 = _s0_t3;
var r1_DesignParameters = _r1_t11.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r310_block, _r310_t4, _r310_t6;
    var _r310_t3 = this;
    var _r310_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r310_t1 = _r310_t0.length;
    var _r310_t2 = 0;
    var _r310_t5 = _r310_t2 < _r310_t1;
    while (_r310_t5) {
        _r310_t6 = (r310_block = _r310_t0[_r310_t2], r310_block(_r310_t3), _r310_t2 = _r310_t2 + 1);
        _r310_t5 = _r310_t2 < _r310_t1;
    }
    return _r310_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r314_xn$Capture_Ext$2Lrc2b) {
    var _r314_t0, _r314_t1;
    r314_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r314_xn$Capture_Ext$2Lrc2b, "Symbol-Ligation", function (r315_xn$Capture$2Lrc8, r315_xn$ExportCapture$2Lrc4b) {
        var _r315_t11, _r315_t12, _r315_t13, _r315_tag14, _r315_t15, _r315_tag16, _r315_t17, _r315_tag18, _r315_t19, _r315_tag20, _r315_t21, _r315_tag22, _r315_t23, _r315_tag24, _r315_t25, _r315_tag26, _r315_t27, _r315_tag28, _r315_t29, _r315_tag30;
        var _r315_t0 = r315_xn$Capture$2Lrc8;
        var r315_xn$GlyphSaveSink$2Lrc4b = _r315_t0["$GlyphSaveSink$"];
        var r315_xn$NamedParameterPair$2Lrc9b = _r315_t0["$NamedParameterPair$"];
        var r315_xn$Exec$2Lrc5 = _r315_t0["$Exec$"];
        var r315_AS_BASE = _r315_t0.AS_BASE;
        var r315_ALSO_METRICS = _r315_t0.ALSO_METRICS;
        var _r315_t1 = r315_xn$Capture$2Lrc8.Metrics;
        var r315_Width = _r315_t1.Width;
        var r315_SB = _r315_t1.SB;
        var r315_SymbolMid = _r315_t1.SymbolMid;
        var r315_ParenTop = _r315_t1.ParenTop;
        var r315_ParenBot = _r315_t1.ParenBot;
        var r315_BgOpTop = _r315_t1.BgOpTop;
        var r315_BgOpBot = _r315_t1.BgOpBot;
        var r315_BgTkTop = _r315_t1.BgTkTop;
        var r315_BgTkBot = _r315_t1.BgTkBot;
        var r315_Translate = _r315_t1.Translate;
        var r315_HSwToV = _r315_t1.HSwToV;
        var r315_AdviceStroke = _r315_t1.AdviceStroke;
        var r315_Stroke = _r315_t1.Stroke;
        var r315_HalfStroke = _r315_t1.HalfStroke;
        var r315_RightSB = _r315_t1.RightSB;
        var r315_Middle = _r315_t1.Middle;
        var r315_DotRadius = _r315_t1.DotRadius;
        var r315_OperatorStroke = _r315_t1.OperatorStroke;
        var _r315_t2 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_corner = _r315_t2.corner;
        var r315_widths = _r315_t2.widths;
        var r315_dispiro = _r315_t2.dispiro;
        var _r315_t3 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_xn$decor$0cao = _r315_t3["decor@"];
        var r315_xn$decor$0cao1 = _r315_t3["decor@@"];
        var r315_xn$decor$0cao11 = _r315_t3["decor@@@"];
        var _r315_t4 = r315_xn$Capture$2Lrc8.BooleFns;
        var r315_union = _r315_t4.union;
        var r315_intersection = _r315_t4.intersection;
        var r315_difference = _r315_t4.difference;
        var _r315_t5 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r315_xn$noshape$3cah = _r315_t5["no-shape"];
        var r315_Rect = _r315_t5.Rect;
        var r315_MaskAbove = _r315_t5.MaskAbove;
        var r315_MaskBelow = _r315_t5.MaskBelow;
        var r315_MaskLeftLine = _r315_t5.MaskLeftLine;
        var r315_MaskRightLine = _r315_t5.MaskRightLine;
        var r315_HBar = _r315_t5.HBar;
        var r315_VBar = _r315_t5.VBar;
        var r315_ExtLineCenter = _r315_t5.ExtLineCenter;
        var r315_DotVariants = _r315_t5.DotVariants;
        var _r315_t6 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r315_xn$queryglyph$1aao = _r315_t6["query-glyph"];
        var r315_xn$referglyph$1aao = _r315_t6["refer-glyph"];
        var r315_xn$selectvariant$7Hrq = _r315_t6["select-variant"];
        var r315_xn$deriveglyphs$7Hrq = _r315_t6["derive-glyphs"];
        var r315_xn$derivemultipartglyphs$7Hrq65 = _r315_t6["derive-multi-part-glyphs"];
        var _r315_t7 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r315_LessSlope = _r315_t7.LessSlope;
        var r315_EqualHalfSpace = _r315_t7.EqualHalfSpace;
        var r315_EqualHoleWidth = _r315_t7.EqualHoleWidth;
        var _r315_t8 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Equal"].resolve();
        var r315_EqualShape = _r315_t8.EqualShape;
        var r315_EqualHole = _r315_t8.EqualHole;
        var r315_IdentShape = _r315_t8.IdentShape;
        var r315_IdentHole = _r315_t8.IdentHole;
        var _r315_t9 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Arith"].resolve();
        var r315_PlusShape = _r315_t9.PlusShape;
        var r315_JunctDiamond = _r315_t9.JunctDiamond;
        var _r315_t10 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r315_GeometricDim = _r315_t10.GeometricDim;
        var r315_GeometricSizes = _r315_t10.GeometricSizes;
        var r315_ConvexPolygonOutline = _r315_t10.ConvexPolygonOutline;
        var r315_arrowheadsKern = 2 / 3 * r1_clamp(0, r315_Width * 0.4, r315_Width - r315_OperatorStroke * 3);
        var r315_SetJoiningKind = function (r322_lk, r322_rk) {
            var _r322_t0, _r322_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                var r324_k = 0;
                if (r322_lk !== "f") r324_k = r324_k + r1_Joining.Classes.Left;
                if (r322_rk !== "f") r324_k = r324_k + r1_Joining.Classes.Right;
                r1_Joining.set(r324_currentGlyph, r324_k);
                return void 0;
            });
        };
        var r315_RodBarHGap = Math.max(r315_Width / 8, r315_AdviceStroke(6));
        var r315_RodBarHOffset = 0.5 * r315_Width - r315_HSwToV(r315_HalfStroke) - r315_RodBarHGap;
        var r315_arrowheadSlope = 1 / r315_LessSlope;
        var r315_arrowExtend = r1_clamp(0, r315_Width, r315_RightSB - 0.5 * r315_OperatorStroke * r315_arrowheadSlope);
        var r315_arrowJ = r1_clamp(0, r315_Width, r315_SB + 0.5 * r315_OperatorStroke * r315_arrowheadSlope);
        var r315_dblExtend = r1_clamp(0, r315_Width, r315_RightSB - r315_EqualHalfSpace * r315_arrowheadSlope);
        var r315_dblArrowJ = r1_clamp(0, r315_Width, r315_SB + r315_EqualHalfSpace * r315_arrowheadSlope);
        var r315_HyphenNotch = function (r325_x) {
            var _r325_t0, _r325_t1;
            return r315_union(r315_VBar.m(r325_x, r315_SymbolMid + r315_OperatorStroke / 3, r315_SymbolMid + r315_OperatorStroke, r315_EqualHoleWidth), r315_VBar.m(r325_x, r315_SymbolMid - r315_OperatorStroke / 3, r315_SymbolMid - r315_OperatorStroke, r315_EqualHoleWidth));
        };
        (function () {
            var r327_prefix, r327_Shape, r327_Notch, r327_extend, r327_kern, r327_join, r327_fDB, _r327_t2, _r327_t4, _r327_t5, _r327_tag6;
            var r327_ArrowBarConfig = function (r328_extend, r328_kern, r328_join, r328_doubleBar) {
                var r328_l, r328_r, _r328_t3, _r328_t4, _r328_t5, _r328_t6, _r328_t7;
                var r328_cleft = 0;
                var r328_cright = r315_Width;
                var r328_arrowr = r328_doubleBar ? r315_Width + r315_SB + r315_HSwToV(r315_OperatorStroke) : r315_Width + r328_extend;
                var r328_arrowl = r328_doubleBar ? -r315_Width + r315_RightSB - r315_HSwToV(r315_OperatorStroke) : 0 - r328_extend;
                var r328_zleft = r328_cleft - r315_Width + r315_RightSB;
                var r328_zright = r328_cright + r315_SB;
                var r328_lk = {
                    "f": [r315_SB, false],
                    "x": [r315_SB - r315_Width, false],
                    "y": [-r328_join - r315_Width, false],
                    "l": [r328_arrowl, false],
                    "l1": [r328_arrowl - r328_kern, false],
                    "lx": [r1_mix(r328_arrowl, 0, 0.5), false],
                    "m": [0 - r315_RodBarHOffset, false],
                    "j": [-r328_join, false],
                    "j1": [-r328_join - r328_kern, false],
                    "c": [r328_cleft, true],
                    "z": [r328_zleft, true]
                };
                var r328_rk = {
                    "f": [r315_RightSB, false],
                    "p": [r328_arrowr - r315_Width, false],
                    "r": [r328_arrowr, false],
                    "r1": [r328_arrowr + r328_kern, false],
                    "m": [r315_Width + r315_RodBarHOffset, false],
                    "j": [r315_Width + r328_join, false],
                    "j1": [r315_Width + r328_join + r328_kern, false],
                    "c": [r328_cright, true],
                    "z": [r328_zright, true]
                };
                var r328_result = [];
                var _r328_t0 = Object.keys(r328_lk);
                var _r328_t1 = _r328_t0.length;
                var _r328_t2 = 0;
                while (_r328_t2 < _r328_t1) {
                    r328_l = _r328_t0[_r328_t2];
                    _r328_t3 = Object.keys(r328_rk);
                    _r328_t4 = _r328_t3.length;
                    _r328_t5 = 0;
                    while (_r328_t5 < _r328_t4) {
                        r328_r = _r328_t3[_r328_t5];
                        r328_result.push([r328_l, r328_r, r328_lk[r328_l], r328_rk[r328_r]]);
                        _r328_t5 = _r328_t5 + 1;
                    }
                    _r328_t2 = _r328_t2 + 1;
                }
                return r328_result;
            };
            var r327_HyphenShape = function (r333_l, r333_r) {
                var _r333_t0, _r333_t1;
                return r315_HBar.m(r333_l, r333_r, r315_SymbolMid, r315_OperatorStroke);
            };
            r327_HyphenShape.joinCap = function (r334_x) {
                var _r334_t0, _r334_t1;
                return r315_JunctDiamond(r334_x, r315_SymbolMid, r315_OperatorStroke);
            };
            var r327_Shapes = {
                "plus": [r315_PlusShape, r315_HyphenNotch, [r315_arrowExtend, r315_arrowheadsKern, r315_arrowJ, 0]],
                "hyphen": [r327_HyphenShape, r315_HyphenNotch, [r315_arrowExtend, r315_arrowheadsKern, r315_arrowJ, 0]],
                "equal": [r315_EqualShape, r315_EqualHole, [r315_dblExtend, r315_arrowheadsKern, r315_dblArrowJ, 1]],
                "ident": [r315_IdentShape, r315_IdentHole, [r315_dblExtend, r315_arrowheadsKern, r315_dblArrowJ, 1]]
            };
            var r327_NotchConfig = {
                "withoutNotch": [false],
                "withNotch": [true]
            };
            var _r327_t0 = Object.entries(r327_Shapes)[Symbol.iterator]();
            var _r327_t1 = void 0;
            var _r327_t3 = !(_r327_t1 = _r327_t0.next()).done;
            while (_r327_t3) {
                _r327_t2 = _r327_t1.value;
                r327_prefix = _r327_t2[0];
                r327_Shape = _r327_t2[1][0];
                r327_Notch = _r327_t2[1][1];
                r327_extend = _r327_t2[1][2][0];
                r327_kern = _r327_t2[1][2][1];
                r327_join = _r327_t2[1][2][2];
                r327_fDB = _r327_t2[1][2][3];
                _r327_t2[1][2];
                _r327_t2[1];
                _r327_t4 = (function () {
                    var r337_lS, r337_rS, r337_left, r337_capLeft, r337_right, r337_capRight, _r337_t3, _r337_t5, _r337_t6, _r337_tag7;
                    var _r337_t0 = r327_ArrowBarConfig(r327_extend, r327_kern, r327_join, r327_fDB);
                    var _r337_t1 = _r337_t0.length;
                    var _r337_t2 = 0;
                    var _r337_t4 = _r337_t2 < _r337_t1;
                    while (_r337_t4) {
                        _r337_t3 = _r337_t0[_r337_t2];
                        r337_lS = _r337_t3[0];
                        r337_rS = _r337_t3[1];
                        r337_left = _r337_t3[2][0];
                        r337_capLeft = _r337_t3[2][1];
                        _r337_t3[2];
                        r337_right = _r337_t3[3][0];
                        r337_capRight = _r337_t3[3][1];
                        _r337_t3[3];
                        (function () {
                            var r340_suffix, r340_fNotch, _r340_t2, _r340_t3, _r340_tag4;
                            var _r340_t0 = Object.entries(r327_NotchConfig)[Symbol.iterator]();
                            var _r340_t1 = void 0;
                            while (!(_r340_t1 = _r340_t0.next()).done) {
                                _r340_t2 = _r340_t1.value;
                                r340_suffix = _r340_t2[0];
                                r340_fNotch = _r340_t2[1][0];
                                _r340_t2[1];
                                (function () {
                                    return r315_xn$GlyphSaveSink$2Lrc4b.save("" + r327_prefix + ".lig." + r337_lS + "" + r337_rS + "." + r340_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                                        var _r346_t0, _r346_t1;
                                        r346_currentGlyph.include(r315_SetJoiningKind(r337_lS, r337_rS));
                                        r346_currentGlyph.include(r315_difference(r315_union(r327_Shape(r337_left, r337_right), r337_capLeft ? r327_Shape.joinCap(r337_left) : r315_xn$noshape$3cah(), r337_capRight ? r327_Shape.joinCap(r337_right) : r315_xn$noshape$3cah()), r340_fNotch && r337_left < r315_SB - r315_Width ? r327_Notch(-r315_Width) : r315_xn$noshape$3cah(), r340_fNotch && r337_left < r315_SB ? r327_Notch(0) : r315_xn$noshape$3cah(), r340_fNotch && r337_right > r315_RightSB ? r327_Notch(r315_Width) : r315_xn$noshape$3cah(), r340_fNotch && r337_right > r315_RightSB + r315_Width ? r327_Notch(2 * r315_Width) : r315_xn$noshape$3cah()));
                                        return void 0;
                                    }));
                                })();
                            }
                            r315_xn$selectvariant$7Hrq("" + r327_prefix + ".lig." + r337_lS + "" + r337_rS, new r315_xn$NamedParameterPair$2Lrc9b("follow", "lig-" + r327_prefix));
                            return r315_xn$selectvariant$7Hrq("" + r327_prefix + ".arrowBar." + r337_lS + "" + r337_rS, new r315_xn$NamedParameterPair$2Lrc9b("follow", "lig-arrowBar-" + r327_prefix), new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", "" + r327_prefix + ".lig." + r337_lS + "" + r337_rS));
                        })();
                        _r337_t5 = _r337_t2 = _r337_t2 + 1;
                        _r337_t4 = _r337_t2 < _r337_t1;
                    }
                    return _r337_t5;
                })();
                _r327_t3 = !(_r327_t1 = _r327_t0.next()).done;
            }
            return _r327_t4;
        })();
        (function () {
            var r353_lS, r353_rS, _r353_t4, _r353_t5, _r353_t6, _r353_t8;
            var _r353_t0 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
            var r353_CreateWaveShape = _r353_t0.CreateWaveShape;
            var r353_WaveShape = r353_CreateWaveShape(r315_EqualHalfSpace + 0.5 * r315_OperatorStroke, r315_OperatorStroke, -1 / 4);
            var r353_LR = 2 / 32;
            var r353_LR1 = 9 / 32;
            var r353_Z = 1 / 4;
            var r353_F = -1 / 4;
            var r353_C = 0;
            var r353_J = -1 / 8;
            var r353_lk = {
                "l": [r353_LR, -r315_arrowExtend, false],
                "l1": [r353_LR1, -r315_arrowExtend - r315_arrowheadsKern, false],
                "f": [r353_F, void 0, false],
                "z": [r353_Z, void 0, false],
                "c": [r353_C, void 0, false],
                "m": [r353_J, 0 - r315_RodBarHOffset, true],
                "j": [r353_J, -r315_arrowJ, true],
                "j1": [r353_J, -r315_arrowJ - r315_arrowheadsKern, true]
            };
            var r353_rk = {
                "r": [r353_LR, r315_Width + r315_arrowExtend, false],
                "r1": [r353_LR1, r315_Width + r315_arrowExtend + r315_arrowheadsKern, false],
                "f": [r353_F, void 0, false],
                "z": [r353_Z, void 0, false],
                "c": [r353_C, void 0, false],
                "m": [r353_J, r315_Width + r315_RodBarHOffset, true],
                "j": [r353_J, r315_Width + r315_arrowJ, true],
                "j1": [r353_J, r315_Width + r315_arrowJ + r315_arrowheadsKern, true]
            };
            var _r353_t1 = Object.keys(r353_lk);
            var _r353_t2 = _r353_t1.length;
            var _r353_t3 = 0;
            var _r353_t7 = _r353_t3 < _r353_t2;
            while (_r353_t7) {
                r353_lS = _r353_t1[_r353_t3];
                _r353_t4 = Object.keys(r353_rk);
                _r353_t5 = _r353_t4.length;
                _r353_t6 = 0;
                while (_r353_t6 < _r353_t5) {
                    r353_rS = _r353_t4[_r353_t6];
                    r315_xn$GlyphSaveSink$2Lrc4b.save("wave.lig." + r353_lS + "" + r353_rS, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                        var _r361_t2, _r361_t3;
                        r361_currentGlyph.include(r315_SetJoiningKind(r353_lS, r353_rS));
                        var _r361_t0 = r353_lk[r353_lS];
                        var r361_tL = _r361_t0[0];
                        var r361_jL = _r361_t0[1];
                        var r361_djL = _r361_t0[2];
                        var _r361_t1 = r353_rk[r353_rS];
                        var r361_tR = _r361_t1[0];
                        var r361_jR = _r361_t1[1];
                        var r361_djR = _r361_t1[2];
                        r361_currentGlyph.include(r353_WaveShape(new r315_xn$NamedParameterPair$2Lrc9b("left", r361_tL), new r315_xn$NamedParameterPair$2Lrc9b("right", r361_tR), new r315_xn$NamedParameterPair$2Lrc9b("xsJoin", r361_jL), new r315_xn$NamedParameterPair$2Lrc9b("xfJoin", r361_jR), new r315_xn$NamedParameterPair$2Lrc9b("diagJoinS", r361_djL), new r315_xn$NamedParameterPair$2Lrc9b("diagJoinF", r361_djR)));
                        return void 0;
                    }));
                    _r353_t6 = _r353_t6 + 1;
                }
                _r353_t8 = _r353_t3 = _r353_t3 + 1;
                _r353_t7 = _r353_t3 < _r353_t2;
            }
            return _r353_t8;
        })();
        (function () {
            var _r371_t0 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
            var r371_dH = _r371_t0.dH;
            var _r371_t1 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Inequality"].resolve();
            var r371_LigationLessShape = _r371_t1.LigationLessShape;
            var r371_LigationGreaterShape = _r371_t1.LigationGreaterShape;
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.dblhead", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                var _r376_t0, _r376_t1;
                r1_Joining.set(r376_currentGlyph, r1_Joining.Classes.Right);
                r376_currentGlyph.include(r371_LigationLessShape(r315_SymbolMid + r371_dH, r315_SymbolMid - r371_dH, r315_SB, r315_RightSB, r315_OperatorStroke, r315_OperatorStroke, 2 * r315_EqualHalfSpace));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.dblhead.mid", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r376_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.dblhead.shift1", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r376_currentGlyph, new r315_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                    var _r383_t0, _r383_t1;
                    r1_Joining.set(r383_currentGlyph, r1_Joining.Classes.Mid);
                    r383_currentGlyph.include(r315_Translate(-r315_arrowheadsKern, 0));
                    return void 0;
                })));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.dblhead", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
                var _r387_t0, _r387_t1;
                r1_Joining.set(r387_currentGlyph, r1_Joining.Classes.Left);
                r387_currentGlyph.include(r371_LigationGreaterShape(r315_SymbolMid + r371_dH, r315_SymbolMid - r371_dH, r315_SB, r315_RightSB, r315_OperatorStroke, r315_OperatorStroke, 2 * r315_EqualHalfSpace));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.dblhead.mid", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r387_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.dblhead.shift1", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r387_currentGlyph, new r315_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                    var _r394_t0, _r394_t1;
                    r1_Joining.set(r394_currentGlyph, r1_Joining.Classes.Mid);
                    r394_currentGlyph.include(r315_Translate(+r315_arrowheadsKern, 0));
                    return void 0;
                })));
                return void 0;
            }));
            r315_xn$deriveglyphs$7Hrq("exclam.lig.htmlcommentstart", null, "exclam", function (r396_src, r396_gr) {
                var _r396_t0, _r396_t1;
                return new r315_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
                    var _r398_t0, _r398_t1;
                    r1_Joining.set(r398_currentGlyph, r1_Joining.Classes.Mid);
                    r398_currentGlyph.include(r315_xn$referglyph$1aao(r396_src));
                    r398_currentGlyph.include(r315_Translate((r315_RightSB - r315_Width + (r315_Width - r315_arrowExtend / 2)) / 2 - r315_Middle, 0));
                    r398_currentGlyph.include(r315_HBar.m(-r315_arrowExtend, r315_RightSB - r315_Width, r315_SymbolMid, r315_OperatorStroke));
                    return void 0;
                });
            });
            var r371_ArrowShiftTranslate = function (r402_k) {
                var _r402_t0, _r402_t1;
                return new r315_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                    var _r404_t0, _r404_t1;
                    r404_currentGlyph.include(r315_Translate(r315_arrowheadsKern * r402_k, 0));
                    if (r402_k > 0) r1_Joining.set(r404_currentGlyph, r1_Joining.Classes.Right);
                    if (r402_k < 0) r1_Joining.set(r404_currentGlyph, r1_Joining.Classes.Left);
                    return void 0;
                });
            };
            r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift0", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
                var _r408_t0, _r408_t1;
                r408_currentGlyph.include(r315_xn$referglyph$1aao("greater"), r315_AS_BASE, r315_ALSO_METRICS);
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift0.head", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift0.mid", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift0.anti", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shiftN0", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shiftN0.mid", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift0h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(0.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift1", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift1.head", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift1h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(1.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shift2", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(2)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shiftN0h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(-0.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shiftN1", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(-1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shiftN1.anti", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(-1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shiftN1h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(-1.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.shiftN2", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r371_ArrowShiftTranslate(-2)));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift0", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                var _r442_t0, _r442_t1;
                r442_currentGlyph.include(r315_xn$referglyph$1aao("less"), r315_AS_BASE, r315_ALSO_METRICS);
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift0.head", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift0.mid", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift0.anti", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shiftN0", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shiftN0.mid", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, null));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift0h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(-0.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift1", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(-1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift1.head", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(-1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift1h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(-1.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shift2", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(-2)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shiftN0h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(0.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shiftN1", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shiftN1.anti", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(1)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shiftN1h", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(1.5)));
                r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.shiftN2", null, new r315_xn$Capture$2Lrc8.ForkGlyphProc(r442_currentGlyph, r371_ArrowShiftTranslate(2)));
                return void 0;
            }));
            var r371_ArrowHeadHole = function () {
                var _r474_t0, _r474_t1;
                return r315_Rect(r315_SymbolMid + r315_EqualHalfSpace - 0.5 * r315_OperatorStroke, r315_SymbolMid - r315_EqualHalfSpace + 0.5 * r315_OperatorStroke, -r315_Width, 2 * r315_Width);
            };
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.hole", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r477_currentGlyph) {
                var _r477_t0, _r477_t1;
                r1_Joining.set(r477_currentGlyph, r1_Joining.Classes.Left);
                r477_currentGlyph.include(r315_difference(new r315_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
                    var _r480_t0, _r480_t1;
                    r480_currentGlyph.include(r315_xn$referglyph$1aao("less"));
                    return void 0;
                }), r371_ArrowHeadHole()));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.hole", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r484_currentGlyph) {
                var _r484_t0, _r484_t1;
                r1_Joining.set(r484_currentGlyph, r1_Joining.Classes.Right);
                r484_currentGlyph.include(r315_difference(new r315_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                    var _r487_t0, _r487_t1;
                    r487_currentGlyph.include(r315_xn$referglyph$1aao("greater"));
                    return void 0;
                }), r371_ArrowHeadHole()));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.hole.shiftN1", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r491_currentGlyph) {
                var _r491_t0, _r491_t1;
                r1_Joining.set(r491_currentGlyph, r1_Joining.Classes.Mid);
                r491_currentGlyph.include(r315_difference(new r315_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                    var _r494_t0, _r494_t1;
                    r494_currentGlyph.include(r315_xn$referglyph$1aao("less.lig.shiftN1"));
                    return void 0;
                }), r371_ArrowHeadHole()));
                return void 0;
            }));
            return r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.hole.shiftN1", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r498_currentGlyph) {
                var _r498_t0, _r498_t1;
                r1_Joining.set(r498_currentGlyph, r1_Joining.Classes.Mid);
                r498_currentGlyph.include(r315_difference(new r315_xn$Capture$2Lrc8.GlyphProc(function (r501_currentGlyph) {
                    var _r501_t0, _r501_t1;
                    r501_currentGlyph.include(r315_xn$referglyph$1aao("greater.lig.shiftN1"));
                    return void 0;
                }), r371_ArrowHeadHole()));
                return void 0;
            }));
        })();
        (function () {
            var r504_suffix, r504_yBar, _r504_t3, _r504_t4, _r504_tag5;
            var _r504_t0 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Dashes"].resolve();
            var r504_UnderScoreConfig = _r504_t0.UnderScoreConfig;
            var _r504_t1 = Object.entries(r504_UnderScoreConfig)[Symbol.iterator]();
            var _r504_t2 = void 0;
            while (!(_r504_t2 = _r504_t1.next()).done) {
                _r504_t3 = _r504_t2.value;
                r504_suffix = _r504_t3[0];
                r504_yBar = _r504_t3[1][0];
                _r504_t3[1];
                (function () {
                    r315_xn$GlyphSaveSink$2Lrc4b.save("underscore.lig.fc." + r504_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r511_currentGlyph) {
                        var _r511_t0, _r511_t1;
                        r1_Joining.set(r511_currentGlyph, r1_Joining.Classes.Left);
                        r511_currentGlyph.include(r315_HBar.b(r315_SB, r315_Width, r504_yBar));
                        r511_currentGlyph.include(r315_JunctDiamond(r315_Width, r504_yBar + r315_HalfStroke, r315_Stroke));
                        return void 0;
                    }));
                    r315_xn$GlyphSaveSink$2Lrc4b.save("underscore.lig.cf." + r504_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r516_currentGlyph) {
                        var _r516_t0, _r516_t1;
                        r1_Joining.set(r516_currentGlyph, r1_Joining.Classes.Left);
                        r516_currentGlyph.include(r315_HBar.b(0, r315_RightSB, r504_yBar));
                        r516_currentGlyph.include(r315_JunctDiamond(0, r504_yBar + r315_HalfStroke, r315_Stroke));
                        return void 0;
                    }));
                    r315_xn$GlyphSaveSink$2Lrc4b.save("underscore.lig.cc." + r504_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r521_currentGlyph) {
                        var _r521_t0, _r521_t1;
                        r1_Joining.set(r521_currentGlyph, r1_Joining.Classes.Left);
                        r521_currentGlyph.include(r315_HBar.b(0, r315_Width, r504_yBar));
                        r521_currentGlyph.include(r315_JunctDiamond(0, r504_yBar + r315_HalfStroke, r315_Stroke));
                        r521_currentGlyph.include(r315_JunctDiamond(r315_Width, r504_yBar + r315_HalfStroke, r315_Stroke));
                        return void 0;
                    }));
                    r315_xn$GlyphSaveSink$2Lrc4b.save("underscore.lig.fm." + r504_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r527_currentGlyph) {
                        var _r527_t0, _r527_t1;
                        r1_Joining.set(r527_currentGlyph, r1_Joining.Classes.Right);
                        r527_currentGlyph.include(r315_HBar.b(r315_SB, r315_Width + r315_RodBarHOffset, r504_yBar));
                        return void 0;
                    }));
                    r315_xn$GlyphSaveSink$2Lrc4b.save("underscore.lig.mf." + r504_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
                        var _r531_t0, _r531_t1;
                        r1_Joining.set(r531_currentGlyph, r1_Joining.Classes.Left);
                        r531_currentGlyph.include(r315_HBar.b(0 - r315_RodBarHOffset, r315_RightSB, r504_yBar));
                        return void 0;
                    }));
                    return r315_xn$GlyphSaveSink$2Lrc4b.save("bar.lig.bottomMid." + r504_suffix, null, r315_VBar.m(r315_Middle, r504_yBar, r315_ParenTop));
                })();
            }
            r315_xn$selectvariant$7Hrq("underscore.lig.fc", new r315_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
            r315_xn$selectvariant$7Hrq("underscore.lig.cc", new r315_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
            r315_xn$selectvariant$7Hrq("underscore.lig.cf", new r315_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
            r315_xn$selectvariant$7Hrq("underscore.lig.fm", new r315_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
            r315_xn$selectvariant$7Hrq("underscore.lig.mf", new r315_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
            return r315_xn$selectvariant$7Hrq("bar.lig.bottomMid", new r315_xn$NamedParameterPair$2Lrc9b("follow", "underscore"));
        })();
        (function () {
            var r541_suffix, r541_DrawAt, r541_kdr, r541_overshoot, r541_place, r541_shift, r541_joinCls, _r541_t2, _r541_t5, _r541_t6, _r541_tag7, _r541_t9, _r541_t10, _r541_tag11, _r541_t12, _r541_tag13;
            var r541_Neq = (function () {
                var r544_Sw, r544_Dr, r544_DotGap, r544_PlacementSuffixes, r544_BarShapeSuffixes, r544_DependentGlyphBuilder;
                var r544_exports = {};
                r544_exports.Sw = r544_Sw = r315_OperatorStroke;
                r544_exports.Dr = r544_Dr = r544_Sw / r315_Stroke * r315_DotRadius;
                r544_exports.DotGap = r544_DotGap = Math.max((r315_ParenTop - r315_ParenBot) / 8, r315_AdviceStroke(5));
                r544_exports.PlacementSuffixes = r544_PlacementSuffixes = {
                    "1l": [0, r1_Joining.Classes.Right],
                    "2l": [1, r1_Joining.Classes.Right],
                    "3l": [2, r1_Joining.Classes.Right],
                    "4l": [3, r1_Joining.Classes.Right],
                    "1m": [0, r1_Joining.Classes.Mid],
                    "2m": [1, r1_Joining.Classes.Mid],
                    "3m": [2, r1_Joining.Classes.Mid],
                    "4m": [3, r1_Joining.Classes.Mid]
                };
                r544_exports.BarShapeSuffixes = r544_BarShapeSuffixes = {
                    "vertical": [0, false],
                    "slightlySlanted": [0.375, false],
                    "moreSlanted": [0.75, false],
                    "verticalDotted": [0, true],
                    "slightlySlantedDotted": [0.375, true],
                    "moreSlantedDotted": [0.75, true]
                };
                r544_exports.DependentGlyphBuilder = r544_DependentGlyphBuilder = function (r557_src) {
                    var _r557_t0, _r557_t1;
                    return new r315_xn$Capture$2Lrc8.GlyphProc(function (r559_currentGlyph) {
                        var _r559_t1, _r559_t2;
                        var _r559_t0 = r557_src;
                        var r559_bar = _r559_t0[0];
                        var r559_dot = _r559_t0[1];
                        r559_currentGlyph.include(r315_xn$referglyph$1aao(r559_bar), r315_AS_BASE, r315_ALSO_METRICS);
                        var r559_dotted = r1_NeqLigationSlashDotted.get(r315_xn$queryglyph$1aao(r559_bar));
                        if (r559_dotted) r559_currentGlyph.include(r315_xn$referglyph$1aao(r559_dot));
                        return void 0;
                    });
                };
                return r544_exports;
            })();
            var _r541_t0 = Object.entries(r315_DotVariants)[Symbol.iterator]();
            var _r541_t1 = void 0;
            while (!(_r541_t1 = _r541_t0.next()).done) {
                _r541_t2 = _r541_t1.value;
                r541_suffix = _r541_t2[0];
                r541_DrawAt = _r541_t2[1][0];
                r541_kdr = _r541_t2[1][1];
                r541_overshoot = _r541_t2[1][2];
                _r541_t2[1];
                (function () {
                    return r315_xn$GlyphSaveSink$2Lrc4b.save("neq/dotPart." + r541_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r567_currentGlyph) {
                        var _r567_t0, _r567_t1;
                        r567_currentGlyph.setWidth(0);
                        r567_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r567_currentGlyph.include(r541_DrawAt(0, 0, r541_Neq.Dr - r541_overshoot));
                        return void 0;
                    }));
                })();
            }
            r315_xn$selectvariant$7Hrq("neq/dotPart", new r315_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            var _r541_t3 = Object.entries(r541_Neq.PlacementSuffixes)[Symbol.iterator]();
            var _r541_t4 = void 0;
            var _r541_t8 = !(_r541_t4 = _r541_t3.next()).done;
            while (_r541_t8) {
                _r541_t5 = _r541_t4.value;
                r541_place = _r541_t5[0];
                r541_shift = _r541_t5[1][0];
                r541_joinCls = _r541_t5[1][1];
                _r541_t5[1];
                _r541_t9 = (function () {
                    var r574_barSuffix, r574_slope, r574_fDotted, _r574_t2, _r574_t3, _r574_tag4;
                    var _r574_t0 = Object.entries(r541_Neq.BarShapeSuffixes)[Symbol.iterator]();
                    var _r574_t1 = void 0;
                    while (!(_r574_t1 = _r574_t0.next()).done) {
                        _r574_t2 = _r574_t1.value;
                        r574_barSuffix = _r574_t2[0];
                        r574_slope = _r574_t2[1][0];
                        r574_fDotted = _r574_t2[1][1];
                        _r574_t2[1];
                        (function () {
                            return r315_xn$GlyphSaveSink$2Lrc4b.save("neq." + r541_place + "/barPart." + r574_barSuffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r580_currentGlyph) {
                                var r580_yDotCenter, r580_xDotCenter, _r580_t0, _r580_t1;
                                var r580_yUp = r315_BgOpTop;
                                var r580_yDown = r315_BgOpBot + (r574_fDotted ? 2 * r541_Neq.Dr + r541_Neq.DotGap : 0);
                                var r580_xCenter = r315_Width * (1 / 2 + r541_shift / 2);
                                var r580_xUp = r580_xCenter + r574_slope * (r580_yUp - r315_SymbolMid);
                                var r580_xDown = r580_xCenter + r574_slope * (r580_yDown - r315_SymbolMid);
                                r580_currentGlyph.include(r315_dispiro(r315_widths.center(r541_Neq.Sw), r315_corner(r580_xUp, r580_yUp), r315_corner(r580_xDown, r580_yDown)));
                                if (r574_fDotted) {
                                    r1_NeqLigationSlashDotted.set(r580_currentGlyph);
                                    r580_yDotCenter = r315_BgOpBot + r541_Neq.Dr;
                                    r580_xDotCenter = r580_xCenter + r574_slope * (r580_yDotCenter - r315_SymbolMid);
                                    r580_currentGlyph.setBaseAnchor("cvDecompose", r580_xDotCenter, r580_yDotCenter);
                                }
                                return void 0;
                            }));
                        })();
                    }
                    r315_xn$selectvariant$7Hrq("neq.allow-dot." + r541_place + "/barPart", new r315_xn$NamedParameterPair$2Lrc9b("follow", "neq.allow-dot"), new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", "neq." + r541_place + "/barPart"));
                    r315_xn$selectvariant$7Hrq("neq.bar-only." + r541_place + "/barPart", new r315_xn$NamedParameterPair$2Lrc9b("follow", "neq.bar-only"), new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", "neq." + r541_place + "/barPart"));
                    r315_xn$derivemultipartglyphs$7Hrq65("neq.allow-dot." + r541_place, null, ["neq.allow-dot." + r541_place + "/barPart", "neq/dotPart"], r541_Neq.DependentGlyphBuilder);
                    return r315_xn$derivemultipartglyphs$7Hrq65("neq.bar-only." + r541_place, null, ["neq.bar-only." + r541_place + "/barPart", "neq/dotPart"], r541_Neq.DependentGlyphBuilder);
                })();
                _r541_t8 = !(_r541_t4 = _r541_t3.next()).done;
            }
            return _r541_t9;
        })();
        (function () {
            var _r588_t0 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Inequality"].resolve();
            var r588_LessShape = _r588_t0.LessShape;
            var r588_GreaterShape = _r588_t0.GreaterShape;
            var _r588_t1 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Slashes-And-Number-Sign"].resolve();
            var r588_slashDefautLeft = _r588_t1.slashDefautLeft;
            var r588_slashDefaultRight = _r588_t1.slashDefaultRight;
            var r588_koTriangle = 1 / 6;
            var r588_koTag = 0;
            var r588_kiShrunk = 0;
            var r588_kiExtend = 1;
            var r588_kiExtend2 = 2;
            var r588_trigLeft = function (r591_k) {
                var _r591_t0, _r591_t1;
                return r1_mix(r315_SB, r315_RightSB, r591_k);
            };
            var r588_trigRight = function (r592_k) {
                var _r592_t0, _r592_t1;
                return r1_mix(r315_RightSB, r315_Width * 1.5 - r315_HSwToV(1.5 * r315_OperatorStroke), r592_k);
            };
            var r588_dHTriangle = function (r593_kOut, r593_kIn) {
                var _r593_t0, _r593_t1;
                return r315_LessSlope * (r588_trigRight(r593_kIn) - r588_trigLeft(r593_kOut));
            };
            var r588_TrigLeftShape = function (r594_kOut, r594_kIn, r594_shift) {
                var _r594_t0, _r594_t1;
                return r588_LessShape(r315_SymbolMid + r588_dHTriangle(r594_kOut, r594_kIn), r315_SymbolMid - r588_dHTriangle(r594_kOut, r594_kIn), r588_trigLeft(r594_kOut) + r594_shift, r588_trigRight(r594_kIn) + r594_shift);
            };
            var r588_TrigRightShape = function (r595_kOut, r595_kIn, r595_shift) {
                var _r595_t0, _r595_t1;
                return r588_GreaterShape(r315_SymbolMid + r588_dHTriangle(r595_kOut, r595_kIn), r315_SymbolMid - r588_dHTriangle(r595_kOut, r595_kIn), r315_Width - r588_trigRight(r595_kIn) + r595_shift, r315_Width - r588_trigLeft(r595_kOut) + r595_shift);
            };
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.trig", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r598_currentGlyph) {
                var _r598_t0, _r598_t1;
                r1_Joining.set(r598_currentGlyph, r1_Joining.Classes.Right);
                r598_currentGlyph.include(r588_TrigLeftShape(r588_koTriangle, r588_kiExtend, 0));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("bar.lig.trig", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r602_currentGlyph) {
                var _r602_t0, _r602_t1;
                r602_currentGlyph.include(r315_VBar.m(r315_Middle, r315_SymbolMid + r588_dHTriangle(r588_koTriangle, r588_kiExtend) + r315_OperatorStroke, r315_SymbolMid - r588_dHTriangle(r588_koTriangle, r588_kiExtend) - r315_OperatorStroke, r315_OperatorStroke));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.trig", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r606_currentGlyph) {
                var _r606_t0, _r606_t1;
                r1_Joining.set(r606_currentGlyph, r1_Joining.Classes.Left);
                r606_currentGlyph.include(r588_TrigRightShape(r588_koTriangle, r588_kiExtend, 0));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.diamond", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r610_currentGlyph) {
                var _r610_t0, _r610_t1;
                r1_Joining.set(r610_currentGlyph, r1_Joining.Classes.Right);
                r610_currentGlyph.include(r315_intersection(r588_TrigLeftShape(r588_koTriangle, r588_kiExtend2, 0), r315_union(r315_Rect(r315_ParenTop, r315_ParenBot, 0, r315_Width), r588_TrigRightShape(r588_koTriangle, r588_kiExtend2, r315_Width))));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.diamond", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r614_currentGlyph) {
                var _r614_t0, _r614_t1;
                r1_Joining.set(r614_currentGlyph, r1_Joining.Classes.Left);
                r614_currentGlyph.include(r315_intersection(r588_TrigRightShape(r588_koTriangle, r588_kiExtend2, 0), r315_union(r315_Rect(r315_ParenTop, r315_ParenBot, 0, r315_Width), r588_TrigLeftShape(r588_koTriangle, r588_kiExtend2, -r315_Width))));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.diamond.tag", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r618_currentGlyph) {
                var _r618_t0, _r618_t1;
                r1_Joining.set(r618_currentGlyph, r1_Joining.Classes.Right);
                r618_currentGlyph.include(r315_intersection(r588_TrigLeftShape(r588_koTag, r588_kiExtend2, 0), r315_union(r315_Rect(r315_ParenTop, r315_ParenBot, 0, r315_Width), r588_TrigRightShape(r588_koTag, r588_kiExtend2, r315_Width))));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.diamond.tag", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r622_currentGlyph) {
                var _r622_t0, _r622_t1;
                r1_Joining.set(r622_currentGlyph, r1_Joining.Classes.Left);
                r622_currentGlyph.include(r315_intersection(r588_TrigRightShape(r588_koTag, r588_kiExtend2, 0), r315_union(r315_Rect(r315_ParenTop, r315_ParenBot, 0, r315_Width), r588_TrigLeftShape(r588_koTag, r588_kiExtend2, -r315_Width))));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("less.lig.tag-slash", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r626_currentGlyph) {
                var _r626_t0, _r626_t1;
                r1_Joining.set(r626_currentGlyph, r1_Joining.Classes.Right);
                r626_currentGlyph.include(r315_intersection(r315_MaskAbove(r315_SymbolMid), r588_TrigLeftShape(r588_koTag, r588_kiShrunk, 0)));
                r626_currentGlyph.include(r315_intersection(r315_MaskBelow(r315_SymbolMid), r588_TrigLeftShape(r588_koTag, r588_kiExtend2, 0), r315_MaskLeftLine(r588_slashDefautLeft + r315_Width, r315_ParenBot, r588_slashDefaultRight + r315_Width, r315_ParenTop)));
                return void 0;
            }));
            return r315_xn$GlyphSaveSink$2Lrc4b.save("greater.lig.tag-slash", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r631_currentGlyph) {
                var _r631_t0, _r631_t1;
                r1_Joining.set(r631_currentGlyph, r1_Joining.Classes.Left);
                r631_currentGlyph.include(r315_intersection(r315_MaskBelow(r315_SymbolMid), r588_TrigRightShape(r588_koTag, r588_kiShrunk, 0)));
                r631_currentGlyph.include(r315_intersection(r315_MaskAbove(r315_SymbolMid), r588_TrigRightShape(r588_koTag, r588_kiExtend2, 0), r315_MaskRightLine(r588_slashDefautLeft - r315_Width, r315_ParenBot, r588_slashDefaultRight - r315_Width, r315_ParenTop)));
                return void 0;
            }));
        })();
        (function () {
            var r635_suffix, r635_fNotch, _r635_t2, _r635_t3, _r635_tag4;
            var r635_NotchConfig = {
                "withoutNotch": [false],
                "withNotch": [true]
            };
            var _r635_t0 = _r1_t2(r635_NotchConfig)[Symbol.iterator]();
            var _r635_t1 = void 0;
            while (!(_r635_t1 = _r635_t0.next()).done) {
                _r635_t2 = _r635_t1.value;
                r635_suffix = _r635_t2[0];
                r635_fNotch = _r635_t2[1][0];
                _r635_t2[1];
                (function () {
                    r315_xn$GlyphSaveSink$2Lrc4b.save("plus.lig.fc.s." + r635_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r643_currentGlyph) {
                        var _r643_t0, _r643_t1;
                        r1_Joining.set(r643_currentGlyph, r1_Joining.Classes.Right);
                        r643_currentGlyph.include(r315_difference(r315_union(r315_PlusShape(r315_SB, r315_Width, r315_SB), r315_PlusShape.joinCap(r315_Width)), r635_fNotch ? r315_HyphenNotch(r315_Width) : r315_xn$noshape$3cah()));
                        return void 0;
                    }));
                    return r315_xn$GlyphSaveSink$2Lrc4b.save("plus.lig.cf.s." + r635_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r647_currentGlyph) {
                        var _r647_t0, _r647_t1;
                        r1_Joining.set(r647_currentGlyph, r1_Joining.Classes.Left);
                        r647_currentGlyph.include(r315_difference(r315_union(r315_PlusShape(0, r315_RightSB, -r315_SB), r315_PlusShape.joinCap(0)), r635_fNotch ? r315_HyphenNotch(0) : r315_xn$noshape$3cah()));
                        return void 0;
                    }));
                })();
            }
            r315_xn$selectvariant$7Hrq("plus.lig.fc.s", new r315_xn$NamedParameterPair$2Lrc9b("follow", "lig-plus"));
            return r315_xn$selectvariant$7Hrq("plus.lig.cf.s", new r315_xn$NamedParameterPair$2Lrc9b("follow", "lig-plus"));
        })();
        (function () {
            return r315_xn$GlyphSaveSink$2Lrc4b.save("greaterArrow", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r655_currentGlyph) {
                var _r655_t0, _r655_t1;
                r655_currentGlyph.include(r315_xn$referglyph$1aao("hyphen.lig.jp"), true, true);
                r655_currentGlyph.include(r315_xn$referglyph$1aao("greater"));
                return void 0;
            }));
        })();
        return (function () {
            var r659_borderSw = r315_AdviceStroke(3.5);
            var r659_box = new r1_Box(r315_BgTkTop, r315_BgTkBot, r1_mix(r315_SB, r315_RightSB, 0.375), r1_mix(r315_SB, r315_RightSB, 0.625));
            r315_xn$GlyphSaveSink$2Lrc4b.save("markdownCheckBox/leftHalfBorder", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r662_currentGlyph) {
                var _r662_t0, _r662_t1;
                r662_currentGlyph.include(r315_VBar.l(r659_box.left, r659_box.bot, r659_box.top, r659_borderSw));
                r662_currentGlyph.include(r315_HBar.t(r659_box.left, 1.51 * r315_Width, r659_box.top, r659_borderSw));
                r662_currentGlyph.include(r315_HBar.b(r659_box.left, 1.51 * r315_Width, r659_box.bot, r659_borderSw));
                return void 0;
            }));
            r315_xn$GlyphSaveSink$2Lrc4b.save("markdownCheckBox/rightHalfBorder", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r668_currentGlyph) {
                var _r668_t0, _r668_t1;
                r668_currentGlyph.include(r315_VBar.r(r659_box.right, r659_box.bot, r659_box.top, r659_borderSw));
                r668_currentGlyph.include(r315_HBar.t(-0.51 * r315_Width, r659_box.right, r659_box.top, r659_borderSw));
                r668_currentGlyph.include(r315_HBar.b(-0.51 * r315_Width, r659_box.right, r659_box.bot, r659_borderSw));
                return void 0;
            }));
            return r315_xn$GlyphSaveSink$2Lrc4b.save("markdownCheckBox/cross", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r674_currentGlyph) {
                var _r674_t0, _r674_t1;
                var r674_gap = Math.max(r315_Width / 12, r315_AdviceStroke(6));
                var r674_innerBox = r659_box.pad(r659_borderSw + r674_gap).withWidth(r315_RightSB - r315_SB);
                r674_currentGlyph.include(r315_intersection(r315_Rect.fromBox(r674_innerBox), r315_union(r315_ExtLineCenter(r659_box.xMid - r659_box.height, r659_box.yMid - r659_box.height, r659_box.xMid + r659_box.height, r659_box.yMid + r659_box.height, r315_Stroke, 4), r315_ExtLineCenter(r659_box.xMid - r659_box.height, r659_box.yMid + r659_box.height, r659_box.xMid + r659_box.height, r659_box.yMid - r659_box.height, r315_Stroke, 4))));
                return void 0;
            }));
        })();
    });
    return void 0;
});


