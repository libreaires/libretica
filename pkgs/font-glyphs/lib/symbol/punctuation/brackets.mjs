"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "../../meta/aesthetics.mjs";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r363_t) {
    var r363_n, r363_i, r363_a, _r363_t3, _r363_t4, _r363_t5, _r363_t6, _r363_t7, _r363_t8, _r363_t9, _r363_t10, _r363_t11, _r363_t12, _r363_t13, _r363_t14, _r363_t15, _r363_t16, _r363_t17, _r363_t18, _r363_t19, _r363_t20, _r363_t21, _r363_t22, _r363_t23, _r363_t24, _r363_t25, _r363_t26;
    var _r363_t0 = function () {
        _r363_t7 = function (_r363_t8) {
            _r363_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r363_t8
            };
        };
        _r363_t9 = r363_t instanceof Array;
        if (_r363_t9) {
            _r363_t10 = r363_n = r363_t.length;
            _r363_t11 = r363_i = 0;
            _r363_t12 = function (_r363_t14) {
                return _r363_t7(_r363_t14);
            };
            _r363_t13 = function (_r363_t15) {
                _r363_t16 = r363_i < r363_n;
                if (_r363_t16) {
                    _r363_t0 = function (_r363_t17) {
                        return _r363_t13(r363_i = r363_i + 1);
                    };
                    return {
                        "value": [r363_i, r363_t[r363_i]],
                        "done": false
                    };
                } else return _r363_t12(_r363_t15);
            };
            return _r363_t13();
        } else {
            _r363_t18 = r363_a = Object.keys(r363_t);
            _r363_t19 = r363_n = r363_a.length;
            _r363_t20 = r363_i = 0;
            _r363_t21 = function (_r363_t23) {
                return _r363_t7(_r363_t23);
            };
            _r363_t22 = function (_r363_t24) {
                _r363_t25 = r363_i < r363_n;
                if (_r363_t25) {
                    _r363_t0 = function (_r363_t26) {
                        return _r363_t22(r363_i = r363_i + 1);
                    };
                    return {
                        "value": [r363_a[r363_i], r363_t[r363_a[r363_i]]],
                        "done": false
                    };
                } else return _r363_t21(_r363_t24);
            };
            return _r363_t22();
        }
    };
    var _r363_t1 = function (x) {
        try {
            return _r363_t0(x);
        } catch (ex) {
            return _r363_t2(ex);
        }
    };
    var _r363_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11) _r363_t3 = this; else {
        _r363_t4 = function () {
            void 0;
        };
        _r363_t4.prototype = _r1_t11.prototype;
        _r363_t3 = new _r363_t4();
    }
    _r363_t3[Symbol.iterator] = function () {
        return _r363_t3;
    };
    _r363_t3.next = _r363_t1;
    _r363_t3.throw = function (x) {
        return _r363_t2(x);
    };
    return _r363_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Joining = _r1_t9.Joining;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Brackets", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t7, _r314_t8, _r314_t9, _r314_tag10, _r314_t11, _r314_tag12, _r314_t13, _r314_tag14, _r314_t15, _r314_tag16, _r314_t17, _r314_tag18, _r314_t19, _r314_tag20, _r314_t21, _r314_tag22, _r314_t23, _r314_tag24;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_AS_BASE = _r314_t0.AS_BASE;
        var r314_ALSO_METRICS = _r314_t0.ALSO_METRICS;
        var r314_DivFrame = _r314_t0.DivFrame;
        var r314_fontMetrics = _r314_t0.fontMetrics;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_SymbolMid = _r314_t1.SymbolMid;
        var r314_ParenTop = _r314_t1.ParenTop;
        var r314_ParenBot = _r314_t1.ParenBot;
        var r314_Translate = _r314_t1.Translate;
        var r314_ApparentTranslate = _r314_t1.ApparentTranslate;
        var r314_HVContrast = _r314_t1.HVContrast;
        var r314_VHContrast = _r314_t1.VHContrast;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_Upward = _r314_t1.Upward;
        var r314_Downward = _r314_t1.Downward;
        var r314_Leftward = _r314_t1.Leftward;
        var r314_O = _r314_t1.O;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_HalfStroke = _r314_t1.HalfStroke;
        var r314_CThin = _r314_t1.CThin;
        var r314_EssUpper = _r314_t1.EssUpper;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_Middle = _r314_t1.Middle;
        var r314_StrokeWidthBlend = _r314_t1.StrokeWidthBlend;
        var r314_OperatorStroke = _r314_t1.OperatorStroke;
        var r314_TINY = _r314_t1.TINY;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_corner = _r314_t2.corner;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_end = _r314_t2.end;
        var r314_straight = _r314_t2.straight;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_alsoThru = _r314_t2.alsoThru;
        var r314_quadControls = _r314_t2.quadControls;
        var r314_archv = _r314_t2.archv;
        var r314_arcvh = _r314_t2.arcvh;
        var r314_dispiro = _r314_t2.dispiro;
        var r314_xn$spirooutline$1aao = _r314_t2["spiro-outline"];
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var r314_intersection = _r314_t4.intersection;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_Rect = _r314_t5.Rect;
        var r314_MaskAbove = _r314_t5.MaskAbove;
        var r314_MaskBelow = _r314_t5.MaskBelow;
        var r314_UShape = _r314_t5.UShape;
        var r314_HBar = _r314_t5.HBar;
        var r314_VBar = _r314_t5.VBar;
        var r314_FlipAround = _r314_t5.FlipAround;
        var r314_ForceUpright = _r314_t5.ForceUpright;
        var r314_PointingTo = _r314_t5.PointingTo;
        var r314_xn$withtransform$5sIl = _r314_t5["with-transform"];
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$referglyph$1aao = _r314_t6["refer-glyph"];
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_alias = _r314_t6.alias;
        var r314_turned = _r314_t6.turned;
        var r314_MosaicTop = r314_fontMetrics.os2.sTypoAscender;
        var r314_MosaicBottom = r314_fontMetrics.os2.sTypoDescender;
        var r314_MosaicHeight = r314_MosaicTop - r314_MosaicBottom;
        var r314_Paren = (function () {
            var r319_Dim, r319_Shape, r319_UpperShape, r319_ExtensionShape, r319_LowerShape, r319_ShapeMask;
            var r319_exports = {};
            r319_exports.Dim = r319_Dim = function () {
                var _r327_t5;
                var _r327_t6 = arguments;
                var r327_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r327_t6, 0);
                var _r327_t0 = [];
                var _r327_t1 = 0;
                while (_r327_t1 < r327_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r327_xn$flexarguments$2Lrc7uIe5[_r327_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r327_t0.push(r327_xn$flexarguments$2Lrc7uIe5[_r327_t1]);
                    _r327_t1 = _r327_t1 + 1;
                }
                var _r327_t2 = r327_xn$flexarguments$2Lrc7uIe5;
                var _r327_t3 = _r327_t2.length;
                var _r327_t4 = 0;
                while (_r327_t4 < _r327_t3) {
                    _r327_t1 = _r327_t2[_r327_t4];
                    if (_r327_t1 && _r327_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r327_t1.left === "df") r327_df = _r327_t1.right;
                    if (_r327_t1 && _r327_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r327_t1.left === "delta") r327_delta = _r327_t1.right;
                    if (_r327_t1 && _r327_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r327_t1.left === "dp") r327_dp = _r327_t1.right;
                    if (_r327_t1 && _r327_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r327_t1.left === "sw") r327_sw = _r327_t1.right;
                    _r327_t4 = _r327_t4 + 1;
                }
                var r327_df = r1_fallback(r327_df, _r327_t0[0]);
                var r327_delta = r1_fallback(r327_delta, _r327_t0[1], 0);
                var r327_dp = r1_fallback(r327_dp, _r327_t0[2], r1_DesignParameters);
                var r327_sw = r1_fallback(r327_sw, _r327_t0[3], r314_Stroke);
                return {
                    "outside": r1_mix(r327_df.leftSB, r327_df.rightSB, r327_dp.parenOutside) - r327_delta - r314_HSwToV(r327_dp.parenOutsideSwAdj) * r327_sw + r314_O,
                    "inside": r1_mix(r327_df.leftSB, r327_df.rightSB, r327_dp.parenInside) - r314_HSwToV(r327_dp.parenInsideSwAdj) * r327_sw,
                    "bottom": r1_mix(r314_SymbolMid, r314_ParenBot, 1 + r327_dp.parenOvershoot) - r327_delta,
                    "top": r1_mix(r314_SymbolMid, r314_ParenTop, 1 + r327_dp.parenOvershoot) + r327_delta,
                    "mid": r314_SymbolMid
                };
            };
            r319_exports.Shape = r319_Shape = function () {
                var _r333_t5;
                var _r333_t6 = arguments;
                var r333_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r333_t6, 0);
                var _r333_t0 = [];
                var _r333_t1 = 0;
                while (_r333_t1 < r333_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r333_xn$flexarguments$2Lrc7uIe5[_r333_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r333_t0.push(r333_xn$flexarguments$2Lrc7uIe5[_r333_t1]);
                    _r333_t1 = _r333_t1 + 1;
                }
                var _r333_t2 = r333_xn$flexarguments$2Lrc7uIe5;
                var _r333_t3 = _r333_t2.length;
                var _r333_t4 = 0;
                while (_r333_t4 < _r333_t3) {
                    _r333_t1 = _r333_t2[_r333_t4];
                    if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "df") r333_df = _r333_t1.right;
                    if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "sw") r333_sw = _r333_t1.right;
                    if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "dp") r333_dp = _r333_t1.right;
                    _r333_t4 = _r333_t4 + 1;
                }
                var r333_df = r1_fallback(r333_df, _r333_t0[0]);
                var r333_sw = r1_fallback(r333_sw, _r333_t0[1], r314_Stroke);
                var r333_dp = r1_fallback(r333_dp, _r333_t0[2], r1_DesignParameters);
                var r333_dim = r319_Dim(r333_df, new r314_xn$NamedParameterPair$2Lrc9b("delta", 0), new r314_xn$NamedParameterPair$2Lrc9b("dp", r333_dp), new r314_xn$NamedParameterPair$2Lrc9b("sw", r333_sw));
                return r314_dispiro(r314_widths.lhs(r333_sw), r314_g4(r333_dim.inside, r333_dim.top), r314_quadControls(1, 1 - r333_dp.parenCurliness), r314_g4(r333_dim.outside, r333_dim.mid), r314_quadControls(0, r333_dp.parenCurliness), r314_g4(r333_dim.inside, r333_dim.bottom));
            };
            r319_exports.UpperShape = r319_UpperShape = function (r342_df, r342_sw) {
                var _r342_leti0, _r342_t1, _r342_t2, _r342_t4, _r342_tag5;
                var _r342_t3 = r319_Dim(r342_df, 0, new r314_xn$NamedParameterPair$2Lrc9b("sw", r342_sw));
                return (function (_r342_leti0) {
                    var r343_dim = _r342_leti0;
                    return r314_dispiro(r314_widths.lhs(r342_sw), r314_g4(r343_dim.inside, r343_dim.top), r314_quadControls(1, 1 - r1_DesignParameters.parenCurliness), r314_g4.down.end(r343_dim.outside, r314_MosaicBottom, r314_heading(r314_Downward)));
                })(_r342_t3);
            };
            r319_exports.ExtensionShape = r319_ExtensionShape = function (r346_df, r346_sw) {
                var _r346_leti0, _r346_t1, _r346_t2, _r346_t4, _r346_tag5;
                var _r346_t3 = r319_Dim(r346_df, 0, new r314_xn$NamedParameterPair$2Lrc9b("sw", r346_sw));
                return (function (_r346_leti0) {
                    var r347_dim = _r346_leti0;
                    return r314_dispiro(r314_widths.lhs(r346_sw), r314_g4.down.start(r347_dim.outside, r314_MosaicTop, r314_heading(r314_Downward)), r314_g4.down.end(r347_dim.outside, r314_MosaicBottom, r314_heading(r314_Downward)));
                })(_r346_t3);
            };
            r319_exports.LowerShape = r319_LowerShape = function (r350_df, r350_sw) {
                var _r350_leti0, _r350_t1, _r350_t2, _r350_t4, _r350_tag5;
                var _r350_t3 = r319_Dim(r350_df, 0, new r314_xn$NamedParameterPair$2Lrc9b("sw", r350_sw));
                return (function (_r350_leti0) {
                    var r351_dim = _r350_leti0;
                    return r314_dispiro(r314_widths.lhs(r350_sw), r314_g4.down.start(r351_dim.outside, r314_MosaicTop, r314_heading(r314_Downward)), r314_quadControls(0, 0 + r1_DesignParameters.parenCurliness), r314_g4(r351_dim.inside, r351_dim.bottom));
                })(_r350_t3);
            };
            r319_exports.ShapeMask = r319_ShapeMask = function (r354_df, r354_sw, r354_delta) {
                var _r354_leti0, _r354_t1, _r354_t2, _r354_t4, _r354_tag5;
                var _r354_t3 = r319_Dim(r354_df, r354_delta, new r314_xn$NamedParameterPair$2Lrc9b("sw", r354_sw));
                return (function (_r354_leti0) {
                    var r355_dim = _r354_leti0;
                    return r314_xn$spirooutline$1aao(r314_corner(r355_dim.inside, r355_dim.top), r314_quadControls(1, 1 - r1_DesignParameters.parenCurliness), r314_g4(r355_dim.outside, r355_dim.mid), r314_quadControls(0, 0 + r1_DesignParameters.parenCurliness), r314_corner(r355_dim.inside, r355_dim.bottom));
                })(_r354_t3);
            };
            return r319_exports;
        })();
        (function () {
            var r358_suffix, r358_shape, _r358_t2;
            var r358_NormalShape = function (r359_df) {
                var _r359_t0, _r359_t1;
                return r314_Paren.Shape(r359_df, r359_df.mvs);
            };
            var r358_LargeContourShape = function (r360_df) {
                var _r360_t0, _r360_t1;
                var r360_dp = {
                    "parenOutside": 0.25 * r314_DesignParameters.parenOutside,
                    "parenInside": r314_DesignParameters.parenInside,
                    "parenOutsideSwAdj": r314_DesignParameters.parenOutsideSwAdj,
                    "parenInsideSwAdj": r314_DesignParameters.parenInsideSwAdj,
                    "parenCurliness": r1_mix(1, r314_DesignParameters.parenCurliness, 0.5),
                    "parenOvershoot": r314_DesignParameters.parenOvershoot
                };
                return r314_Paren.Shape(r360_df, r360_df.mvs, r360_dp);
            };
            var r358_FlatArcShape = function (r361_df) {
                var _r361_t0, _r361_t1;
                var r361_dp = {
                    "parenOutside": 0.5 * r314_DesignParameters.parenOutside,
                    "parenInside": r314_DesignParameters.parenInside,
                    "parenOutsideSwAdj": r314_DesignParameters.parenOutsideSwAdj,
                    "parenInsideSwAdj": r314_DesignParameters.parenInsideSwAdj,
                    "parenCurliness": r1_mix(1, r314_DesignParameters.parenCurliness, 0.5),
                    "parenOvershoot": r314_DesignParameters.parenOvershoot
                };
                var r361_dim = r314_Paren.Dim(r361_df, 0, r361_dp);
                return r314_dispiro(r314_widths.lhs(r361_df.mvs), r314_g4.left.start(r361_dim.inside, r361_dim.top), r314_archv(), r314_flat(r361_dim.outside, r1_mix(r361_dim.bottom, r361_dim.top, 0.65)), r314_curl(r361_dim.outside, r1_mix(r361_dim.bottom, r361_dim.top, 0.35)), r314_arcvh(), r314_g4.right.start(r361_dim.inside, r361_dim.bottom));
            };
            var r358_SimpleParenConfig = {
                "normal": r358_NormalShape,
                "largeContour": r358_LargeContourShape,
                "flatArc": r358_FlatArcShape
            };
            var _r358_t0 = _r1_t2(r358_SimpleParenConfig)[Symbol.iterator]();
            var _r358_t1 = void 0;
            while (!(_r358_t1 = _r358_t0.next()).done) {
                _r358_t2 = _r358_t1.value;
                r358_suffix = _r358_t2[0];
                r358_shape = _r358_t2[1];
                r314_xn$GlyphSaveSink$2Lrc4b.save("parenLeft." + r358_suffix, null, r358_shape(r314_DivFrame(1)));
                r314_xn$GlyphSaveSink$2Lrc4b.save("doubleParenLeft." + r358_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    var r368_df = r314_DivFrame(1, 3);
                    var r368_subDf = r368_df.slice(3, 2);
                    r368_currentGlyph.include(r358_shape(r368_subDf));
                    r368_currentGlyph.include(r314_xn$withtransform$5sIl(r314_ApparentTranslate(r368_df.width - r368_subDf.width, 0), r358_shape(r368_subDf)));
                    return void 0;
                }));
                r314_turned("parenRight." + r358_suffix, null, "parenLeft." + r358_suffix, r314_Middle, r314_SymbolMid);
                r314_turned("doubleParenRight." + r358_suffix, null, "doubleParenLeft." + r358_suffix, r314_Middle, r314_SymbolMid);
                r314_xn$GlyphSaveSink$2Lrc4b.save("parenLeftUHalf." + r358_suffix, null, r314_intersection(r314_xn$referglyph$1aao("parenLeft." + r358_suffix), r314_MaskAbove(r314_SymbolMid)));
                r314_xn$GlyphSaveSink$2Lrc4b.save("parenLeftLHalf." + r358_suffix, null, r314_intersection(r314_xn$referglyph$1aao("parenLeft." + r358_suffix), r314_MaskBelow(r314_SymbolMid)));
                r314_turned("parenRightUHalf." + r358_suffix, null, "parenLeftLHalf." + r358_suffix, r314_Middle, r314_SymbolMid);
                r314_turned("parenRightLHalf." + r358_suffix, null, "parenLeftUHalf." + r358_suffix, r314_Middle, r314_SymbolMid);
            }
            r314_xn$selectvariant$7Hrq("parenLeft", "(");
            r314_xn$selectvariant$7Hrq("parenRight", ")");
            r314_xn$selectvariant$7Hrq("doubleParenLeft", 11816, new r314_xn$NamedParameterPair$2Lrc9b("follow", "parenLeft"));
            r314_xn$selectvariant$7Hrq("doubleParenRight", 11817, new r314_xn$NamedParameterPair$2Lrc9b("follow", "parenRight"));
            r314_xn$selectvariant$7Hrq("parenLeftUHalf", 11865, new r314_xn$NamedParameterPair$2Lrc9b("follow", "parenLeft"));
            r314_xn$selectvariant$7Hrq("parenRightUHalf", 11866, new r314_xn$NamedParameterPair$2Lrc9b("follow", "parenRight"));
            r314_xn$selectvariant$7Hrq("parenLeftLHalf", 11867, new r314_xn$NamedParameterPair$2Lrc9b("follow", "parenLeft"));
            r314_xn$selectvariant$7Hrq("parenRightLHalf", 11868, new r314_xn$NamedParameterPair$2Lrc9b("follow", "parenRight"));
            r314_alias("flattenedParenLeft", 10222, "parenLeft.flatArc");
            r314_alias("flattenedParenRight", 10223, "parenRight.flatArc");
            r314_xn$GlyphSaveSink$2Lrc4b.save("parenLeftUpper", 9115, new r314_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                var _r381_t0, _r381_t1;
                r381_currentGlyph.include(r314_ForceUpright());
                r381_currentGlyph.include(r314_Paren.UpperShape(r314_DivFrame(1), r314_Stroke));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("parenLeftExtension", 9116, new r314_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                var _r386_t0, _r386_t1;
                r386_currentGlyph.include(r314_ForceUpright());
                r386_currentGlyph.include(r314_Paren.ExtensionShape(r314_DivFrame(1), r314_Stroke));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("parenLeftLower", 9117, new r314_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var _r391_t0, _r391_t1;
                r391_currentGlyph.include(r314_ForceUpright());
                r391_currentGlyph.include(r314_Paren.LowerShape(r314_DivFrame(1), r314_Stroke));
                return void 0;
            }));
            r314_turned("parenRightupper", 9118, "parenLeftLower", r314_Middle, r314_SymbolMid);
            r314_turned("parenRightExtension", 9119, "parenLeftExtension", r314_Middle, r314_SymbolMid);
            r314_turned("parenRightLower", 9120, "parenLeftUpper", r314_Middle, r314_SymbolMid);
            r314_xn$GlyphSaveSink$2Lrc4b.save("zNotationParenLeft", 10631, new r314_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                var _r396_t0, _r396_t1;
                var r396_df = r314_DivFrame(1);
                var r396_fine = r314_AdviceStroke(4);
                var r396_dim = r314_Paren.Dim(r396_df, 0, new r314_xn$NamedParameterPair$2Lrc9b("sw", r396_fine));
                r396_currentGlyph.include(r314_intersection(r314_Rect(r1_mix(r396_dim.bottom, r396_dim.top, 2), r1_mix(r396_dim.top, r396_dim.bottom, 2), 0, r396_dim.inside), r314_union(r314_Paren.Shape(r396_df, r396_fine), r314_intersection(r314_VBar.r(r396_dim.inside, r396_dim.bottom, r396_dim.top, r396_fine), r314_Paren.ShapeMask(r396_df, r396_fine, r314_O)))));
                return void 0;
            }));
            return r314_turned("zNotationParenRight", 10632, "zNotationParenLeft", r314_Middle, r314_SymbolMid);
        })();
        var r314_Bracket = (function () {
            var r401_HDim, r401_Mask, r401_Shape;
            var r401_exports = {};
            r401_exports.HDim = r401_HDim = function (r409_barLeft, r409_ext) {
                var _r409_t0, _r409_t1, _r409_t2, _r409_tag3;
                return (function () {
                    var r412_l, r412_r;
                    var r412_exports = {};
                    r412_exports.l = r412_l = r1_fallback(r409_barLeft, r1_mix(r314_SB, r314_RightSB, r1_DesignParameters.bracketOutside) - r314_HSwToV(r1_DesignParameters.bracketOutsideSwAdj * r314_Stroke));
                    r412_exports.r = r412_r = r1_fallback(r409_ext, 0) + r1_mix(r314_SB, r314_RightSB, r1_DesignParameters.bracketInside);
                    return r412_exports;
                })();
            };
            r401_exports.Mask = r401_Mask = function () {
                var _r422_t0, _r422_t1;
                return r314_Rect(r314_MosaicTop, r314_MosaicBottom, -r314_Width, 2 * r314_Width);
            };
            r401_exports.Shape = r401_Shape = function (r424_top, r424_bottom, r424_barLeft, r424_ext) {
                var _r424_t0, _r424_t1;
                var r424_hDim = r401_HDim(r424_barLeft, r424_ext);
                return r314_union(r314_HBar.b(r424_hDim.l, r424_hDim.r, r424_bottom), r314_HBar.t(r424_hDim.l, r424_hDim.r, r424_top), r314_VBar.l(r424_hDim.l, r424_bottom, r424_top));
            };
            return r401_exports;
        })();
        (function () {
            r314_xn$GlyphSaveSink$2Lrc4b.save("bracketLeft", "[", r314_Bracket.Shape(r314_ParenTop, r314_ParenBot));
            r314_xn$GlyphSaveSink$2Lrc4b.save("bracketLeftUHalf", 11810, r314_intersection(r314_xn$referglyph$1aao("bracketLeft"), r314_MaskAbove(r314_SymbolMid)));
            r314_xn$GlyphSaveSink$2Lrc4b.save("bracketLeftLHalf", 11812, r314_intersection(r314_xn$referglyph$1aao("bracketLeft"), r314_MaskBelow(r314_SymbolMid)));
            r314_xn$GlyphSaveSink$2Lrc4b.save("ligExtBracketLeft", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r432_currentGlyph) {
                var _r432_t0, _r432_t1;
                r1_Joining.set(r432_currentGlyph, r1_Joining.Classes.Right);
                r432_currentGlyph.include(r314_Bracket.Shape(r314_ParenTop, r314_ParenBot, r314_Middle - r314_HSwToV(r314_HalfStroke), r314_Width));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("bracketLeftUpper", 9121, new r314_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                var _r436_t0, _r436_t1;
                r436_currentGlyph.include(r314_ForceUpright());
                r436_currentGlyph.include(r314_intersection(r314_Bracket.Mask(), r314_Bracket.Shape(r314_ParenTop, r314_ParenBot - r314_MosaicHeight)));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("bracketLeftExtension", 9122, new r314_xn$Capture$2Lrc8.GlyphProc(function (r441_currentGlyph) {
                var _r441_t0, _r441_t1;
                r441_currentGlyph.include(r314_ForceUpright());
                r441_currentGlyph.include(r314_intersection(r314_Bracket.Mask(), r314_Bracket.Shape(r314_ParenTop + r314_MosaicHeight, r314_ParenBot - r314_MosaicHeight)));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("bracketLeftLower", 9123, new r314_xn$Capture$2Lrc8.GlyphProc(function (r446_currentGlyph) {
                var _r446_t0, _r446_t1;
                r446_currentGlyph.include(r314_ForceUpright());
                r446_currentGlyph.include(r314_intersection(r314_Bracket.Mask(), r314_Bracket.Shape(r314_ParenTop + r314_MosaicHeight, r314_ParenBot)));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("dblBracketLeft", 10214, new r314_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                var _r451_t0, _r451_t1;
                var r451_hDim = r314_Bracket.HDim();
                var r451_sw = Math.min((r451_hDim.r - r451_hDim.l) / 5, r314_AdviceStroke(4));
                r451_currentGlyph.include(r314_union(r314_HBar.b(r451_hDim.l, r451_hDim.r, r314_ParenBot), r314_HBar.t(r451_hDim.l, r451_hDim.r, r314_ParenTop), r314_VBar.l(r451_hDim.l, r314_ParenBot, r314_ParenTop, r451_sw), r314_VBar.m(r1_mix(r451_hDim.l, r451_hDim.r, 1 / 2), r314_ParenBot, r314_ParenTop, r451_sw)));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("bracketBarLeft", 8261, new r314_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
                var _r455_t0, _r455_t1;
                var r455_hDim = r314_Bracket.HDim();
                r455_currentGlyph.include(r314_union(r314_HBar.b(r455_hDim.l, r455_hDim.r, r314_ParenBot), r314_HBar.m(r455_hDim.l, r455_hDim.r, r1_mix(r314_ParenBot, r314_ParenTop, 0.5)), r314_HBar.t(r455_hDim.l, r455_hDim.r, r314_ParenTop), r314_VBar.l(r455_hDim.l, r314_ParenBot, r314_ParenTop)));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("barBarLeft", 11808, new r314_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
                var _r459_t0, _r459_t1;
                var r459_hDim = r314_Bracket.HDim();
                r459_currentGlyph.include(r314_union(r314_HBar.m(r459_hDim.l, r459_hDim.r, r1_mix(r314_ParenBot, r314_ParenTop, 0.5)), r314_VBar.l(r459_hDim.l, r314_ParenBot, r314_ParenTop)));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("smallBracketLeft", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                var _r463_t0, _r463_t1;
                var r463_p = r314_XH / r314_CAP;
                r463_currentGlyph.include(r314_xn$withtransform$5sIl(r314_Translate(0, r314_SymbolMid * (r463_p - 1)), r314_Bracket.Shape(r1_mix(r314_SymbolMid, r314_ParenTop, r463_p), r1_mix(r314_SymbolMid, r314_ParenBot, r463_p))));
                return void 0;
            }));
            r314_turned("bracketRight", "]", "bracketLeft", r314_Middle, r314_SymbolMid);
            r314_turned("bracketBarRight", 8262, "bracketBarLeft", r314_Middle, r314_SymbolMid);
            r314_turned("bracketRightUpper", 9124, "bracketLeftLower", r314_Middle, r314_SymbolMid);
            r314_turned("bracketRightExtension", 9125, "bracketLeftExtension", r314_Middle, r314_SymbolMid);
            r314_turned("bracketRightLower", 9126, "bracketLeftUpper", r314_Middle, r314_SymbolMid);
            r314_turned("dblBracketRight", 10215, "dblBracketLeft", r314_Middle, r314_SymbolMid);
            r314_turned("barBarRight", 11809, "barBarLeft", r314_Middle, r314_SymbolMid);
            r314_turned("bracketRightUHalf", 11811, "bracketLeftLHalf", r314_Middle, r314_SymbolMid);
            r314_turned("bracketRightLHalf", 11813, "bracketLeftUHalf", r314_Middle, r314_SymbolMid);
            return r314_xn$GlyphSaveSink$2Lrc4b.save("ligExtBracketRight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                var _r467_t0, _r467_t1;
                r467_currentGlyph.include(r314_xn$referglyph$1aao("ligExtBracketLeft"), r314_AS_BASE, r314_ALSO_METRICS);
                r467_currentGlyph.include(r314_FlipAround(r314_Middle, r314_SymbolMid));
                r1_Joining.set(r467_currentGlyph, r1_Joining.Classes.Left);
                return void 0;
            }));
        })();
        var r314_BraceT = function (r470__dpOverride) {
            var _r470_t0, _r470_t1, _r470_t2, _r470_tag3;
            return (function () {
                var r473_UpperHalfShape, r473_LowerHalfShape, r473_UpperThirdShape, r473_LowerThirdShape, r473_CenterThirdShape, r473_ExtensionShape, r473_CurlyShape;
                var r473_exports = {};
                var r473_dp = Object.assign({}, r1_DesignParameters, r1_fallback(r470__dpOverride, {}));
                var r473_Dim = function () {
                    var _r480_t0, _r480_t1;
                    var r480_parenCenter = r1_mix(r314_SB, r314_RightSB, r1_mix(r473_dp.braceInside, r473_dp.braceOutside, 0.5));
                    var r480_radius = Math.min(r1_mix(r314_SB, r314_RightSB, r473_dp.braceInside) - r480_parenCenter, (r314_ParenTop - r314_SymbolMid - r314_Stroke * 1.5) / 2);
                    return {
                        "parenCenter": r480_parenCenter,
                        "radius": r480_radius
                    };
                };
                r473_exports.UpperHalfShape = r473_UpperHalfShape = function (r482_top, r482_bottom, r482_sw, r482_ext) {
                    var _r482_t0, _r482_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r484_currentGlyph) {
                        var _r484_t1, _r484_t2;
                        var _r484_t0 = r473_Dim();
                        var r484_parenCenter = _r484_t0.parenCenter;
                        var r484_radius = _r484_t0.radius;
                        var r484_xIns = r1_mix(r314_SB, r314_RightSB, r473_dp.braceInside);
                        var r484_xTip = r1_mix(r314_SB, r314_RightSB, r473_dp.braceOutside);
                        r484_currentGlyph.include(r314_dispiro(r314_flat(r484_xIns + r1_fallback(r482_ext, 0), r482_top, r314_widths.center.heading(r482_sw, r314_Leftward)), r314_curl(r484_xIns - r314_TINY, r482_top, r314_heading(r314_Leftward)), r314_archv(), r314_flat(r484_parenCenter, r482_top - r484_radius, r314_heading(r314_Downward)), r314_curl(r484_parenCenter, r482_bottom + r484_radius, r314_heading(r314_Downward)), r314_arcvh(), r314_straight.left.end(r484_xTip, r482_bottom, r314_heading(r314_Leftward))));
                        return void 0;
                    });
                };
                r473_exports.LowerHalfShape = r473_LowerHalfShape = function (r487_top, r487_bottom, r487_sw, r487_ext) {
                    var _r487_t0, _r487_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
                        var _r489_t1, _r489_t2;
                        var _r489_t0 = r473_Dim();
                        var r489_parenCenter = _r489_t0.parenCenter;
                        var r489_radius = _r489_t0.radius;
                        var r489_xIns = r1_mix(r314_SB, r314_RightSB, r473_dp.braceInside);
                        var r489_xTip = r1_mix(r314_SB, r314_RightSB, r473_dp.braceOutside);
                        r489_currentGlyph.include(r314_dispiro(r314_flat(r489_xIns + r1_fallback(r487_ext, 0), r487_bottom, r314_widths.center.heading(r487_sw, r314_Leftward)), r314_curl(r489_xIns - r314_TINY, r487_bottom, r314_heading(r314_Leftward)), r314_archv(), r314_flat(r489_parenCenter, r487_bottom + r489_radius, r314_heading(r314_Upward)), r314_curl(r489_parenCenter, r487_top - r489_radius, r314_heading(r314_Upward)), r314_arcvh(), r314_straight.left.end(r489_xTip, r487_top, r314_heading(r314_Leftward))));
                        return void 0;
                    });
                };
                r473_exports.UpperThirdShape = r473_UpperThirdShape = function (r492_top, r492_bottom, r492_sw) {
                    var _r492_t0, _r492_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                        var _r494_t1, _r494_t2;
                        var _r494_t0 = r473_Dim();
                        var r494_parenCenter = _r494_t0.parenCenter;
                        var r494_radius = _r494_t0.radius;
                        r494_currentGlyph.include(r314_intersection(r314_Bracket.Mask(), r473_UpperHalfShape(r492_top, r492_bottom - r314_MosaicHeight, r492_sw)));
                        return void 0;
                    });
                };
                r473_exports.LowerThirdShape = r473_LowerThirdShape = function (r497_top, r497_bottom, r497_sw) {
                    var _r497_t0, _r497_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
                        var _r499_t1, _r499_t2;
                        var _r499_t0 = r473_Dim();
                        var r499_parenCenter = _r499_t0.parenCenter;
                        var r499_radius = _r499_t0.radius;
                        r499_currentGlyph.include(r314_intersection(r314_Bracket.Mask(), r473_LowerHalfShape(r497_top + r314_MosaicHeight, r497_bottom, r497_sw)));
                        return void 0;
                    });
                };
                r473_exports.CenterThirdShape = r473_CenterThirdShape = function (r502_top, r502_bottom, r502_sw) {
                    var _r502_t0, _r502_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r504_currentGlyph) {
                        var _r504_t1, _r504_t2;
                        var _r504_t0 = r473_Dim();
                        var r504_parenCenter = _r504_t0.parenCenter;
                        var r504_radius = _r504_t0.radius;
                        r504_currentGlyph.include(r314_intersection(r314_Bracket.Mask(), r314_union(r473_UpperHalfShape(r502_top + r314_MosaicHeight, r1_mix(r502_bottom, r502_top, 0.5), r502_sw), r473_LowerHalfShape(r1_mix(r502_bottom, r502_top, 0.5), r502_bottom - r314_MosaicHeight, r502_sw))));
                        return void 0;
                    });
                };
                r473_exports.ExtensionShape = r473_ExtensionShape = function (r507_top, r507_bottom, r507_sw) {
                    var _r507_t0, _r507_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                        var _r509_t1, _r509_t2;
                        var _r509_t0 = r473_Dim();
                        var r509_parenCenter = _r509_t0.parenCenter;
                        var r509_radius = _r509_t0.radius;
                        r509_currentGlyph.include(r314_intersection(r314_Bracket.Mask(), r314_union(r473_UpperHalfShape(r507_top + r314_MosaicHeight, r507_bottom - r314_MosaicHeight, r507_sw))));
                        return void 0;
                    });
                };
                r473_exports.CurlyShape = r473_CurlyShape = function (r512_sw, r512_pFlatIn, r512_pFlatOut, r512_ext) {
                    var _r512_t0, _r512_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r514_currentGlyph) {
                        var _r514_t0, _r514_t1;
                        var r514_hs = r512_sw / 2;
                        var r514_xIns = r1_mix(r314_SB, r314_RightSB, r473_dp.braceInside);
                        var r514_xOus = r1_mix(r314_SB, r314_RightSB, r473_dp.braceOutside);
                        var r514_m1 = r1_mix(r514_xIns, r514_xOus, r473_dp.braceCurlyM1 * (1 + 0.5 * r512_pFlatIn));
                        var r514_m2 = r1_mix(r514_xIns, r514_xOus, r473_dp.braceCurlyM2 * (1 + 0.5 * r512_pFlatOut));
                        var r514_braceRadiusLowLimit = (r314_ParenTop - r314_SymbolMid - r512_sw) * (1 / 3) + r514_hs;
                        var r514_radius1 = r512_sw / 16 + r1_mix(Math.min(r514_xIns - r514_m1, r514_braceRadiusLowLimit), r512_sw, 0.75 * r512_pFlatIn);
                        var r514_radius2 = r512_sw / 16 + r1_mix(Math.min(r514_m2 - r514_xOus, r514_braceRadiusLowLimit), r512_sw, 0.75 * r512_pFlatOut) - r514_hs;
                        var r514_ess = r1_mix(r512_sw, r314_EssUpper * r512_sw / r314_Stroke, 0.25);
                        var r514_top = r1_mix(r314_SymbolMid, r314_ParenTop, 1 + r473_dp.braceOvershoot);
                        var r514_bot = r1_mix(r314_SymbolMid, r314_ParenBot, 1 + r473_dp.braceOvershoot);
                        var r514_flatLengthIn = Math.max(0.1, r512_pFlatIn * (r514_xIns - r514_xOus));
                        var r514_flatLengthOut = Math.max(0.1, r512_pFlatOut * (r514_xIns - r514_xOus));
                        var r514_fine = r512_sw * r314_CThin;
                        r514_currentGlyph.include(r314_dispiro(r314_flat(r514_xIns + r1_fallback(r512_ext, 0), r514_top - r514_hs, r314_widths.center.heading(r512_sw, r314_Leftward)), r314_curl(r514_xIns - r514_flatLengthIn, r514_top - r514_hs, r314_heading(r314_Leftward)), r314_archv.superness(2.2 + r512_pFlatIn), r314_g4.down.mid(r514_m1, r514_top - r514_radius1, r314_heading(r314_Downward)), r314_alsoThru(0.5, 0.5, r314_widths.center(r514_ess)), r314_g4.down.mid(r514_m2, r314_SymbolMid + r514_radius2, r314_widths.center.heading(r512_sw, r314_Downward)), r314_arcvh(), r314_flat(r514_xOus + r514_flatLengthOut, r314_SymbolMid + (r512_sw - r514_fine) / 2, r314_widths.center.heading(r514_fine, r314_Leftward)), r314_curl(r514_xOus, r314_SymbolMid + (r512_sw - r514_fine) / 2, r314_heading(r314_Leftward))));
                        r514_currentGlyph.include(r314_dispiro(r314_flat(r514_xIns + r1_fallback(r512_ext, 0), r514_bot + r514_hs, r314_widths.center.heading(r512_sw, r314_Leftward)), r314_curl(r514_xIns - r514_flatLengthIn, r514_bot + r514_hs, r314_heading(r314_Leftward)), r314_archv.superness(2.2 + r512_pFlatIn), r314_g4.up.mid(r514_m1, r514_bot + r514_radius1, r314_heading(r314_Upward)), r314_alsoThru(0.5, 0.5, r314_widths.center(r514_ess)), r314_g4.up.mid(r514_m2, r314_SymbolMid - r514_radius2, r314_widths.center.heading(r512_sw, r314_Upward)), r314_arcvh(), r314_flat(r514_xOus + r514_flatLengthOut, r314_SymbolMid - (r512_sw - r514_fine) / 2, r314_widths.center.heading(r514_fine, r314_Leftward)), r314_curl(r514_xOus, r314_SymbolMid - (r512_sw - r514_fine) / 2, r314_heading(r314_Leftward))));
                        return void 0;
                    });
                };
                return r473_exports;
            })();
        };
        var r314_Brace = r314_BraceT();
        var r314_BraceLarge = r314_BraceT({
            "braceInside": r1_mix(r314_DesignParameters.braceInside, 1 - r314_DesignParameters.braceOutside, 0.5),
            "braceOutside": r1_mix(r314_DesignParameters.braceOutside, 1 - r314_DesignParameters.braceInside, 0.5)
        });
        (function () {
            var _r518_t0, _r518_tag1, _r518_t2, _r518_tag3, _r518_t4, _r518_tag5;
            (function () {
                var r520_top = r1_mix(r314_SymbolMid, r314_ParenTop, 1 + r314_DesignParameters.braceOvershoot) - r314_HalfStroke;
                var r520_bot = r1_mix(r314_SymbolMid, r314_ParenBot, 1 + r314_DesignParameters.braceOvershoot) + r314_HalfStroke;
                r314_xn$GlyphSaveSink$2Lrc4b.save("braceLeft.straight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r523_currentGlyph) {
                    var _r523_t0, _r523_t1;
                    r523_currentGlyph.include(r314_Brace.UpperHalfShape(r520_top, r314_SymbolMid, r314_Stroke));
                    r523_currentGlyph.include(r314_Brace.LowerHalfShape(r314_SymbolMid, r520_bot, r314_Stroke));
                    return void 0;
                }));
                r314_turned("braceRight.straight", null, "braceLeft.straight", r314_Middle, r314_SymbolMid);
                r314_xn$GlyphSaveSink$2Lrc4b.save("ligExtBraceLeft.straight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r528_currentGlyph) {
                    var _r528_t0, _r528_t1;
                    r1_Joining.set(r528_currentGlyph, r1_Joining.Classes.Right);
                    r528_currentGlyph.include(r314_Brace.UpperHalfShape(r520_top, r314_SymbolMid, r314_Stroke, r314_Width));
                    r528_currentGlyph.include(r314_Brace.LowerHalfShape(r314_SymbolMid, r520_bot, r314_Stroke, r314_Width));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("ligExtBraceRight.straight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r533_currentGlyph) {
                    var _r533_t0, _r533_t1;
                    r533_currentGlyph.include(r314_xn$referglyph$1aao("ligExtBraceLeft.straight"), r314_AS_BASE, r314_ALSO_METRICS);
                    r533_currentGlyph.include(r314_FlipAround(r314_Middle, r314_SymbolMid));
                    r1_Joining.set(r533_currentGlyph, r1_Joining.Classes.Left);
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("braceLeftUpper", 9127, new r314_xn$Capture$2Lrc8.GlyphProc(function (r538_currentGlyph) {
                    var _r538_t0, _r538_t1;
                    r538_currentGlyph.include(r314_ForceUpright());
                    r538_currentGlyph.include(r314_BraceLarge.UpperThirdShape(r520_top, r520_bot, r314_Stroke));
                    return void 0;
                }));
                r314_turned("braceRightLower", 9133, "braceLeftUpper", r314_Middle, r314_SymbolMid);
                r314_xn$GlyphSaveSink$2Lrc4b.save("braceLeftLower", 9129, new r314_xn$Capture$2Lrc8.GlyphProc(function (r543_currentGlyph) {
                    var _r543_t0, _r543_t1;
                    r543_currentGlyph.include(r314_ForceUpright());
                    r543_currentGlyph.include(r314_BraceLarge.LowerThirdShape(r520_top, r520_bot, r314_Stroke));
                    return void 0;
                }));
                r314_turned("braceRightUpper", 9131, "braceLeftLower", r314_Middle, r314_SymbolMid);
                r314_xn$GlyphSaveSink$2Lrc4b.save("braceLeftMiddle", 9128, new r314_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
                    var _r548_t0, _r548_t1;
                    r548_currentGlyph.include(r314_ForceUpright());
                    r548_currentGlyph.include(r314_BraceLarge.CenterThirdShape(r520_top, r520_bot, r314_Stroke));
                    return void 0;
                }));
                r314_turned("braceRightMiddle", 9132, "braceLeftMiddle", r314_Middle, r314_SymbolMid);
                r314_xn$GlyphSaveSink$2Lrc4b.save("braceExtension", 9130, new r314_xn$Capture$2Lrc8.GlyphProc(function (r553_currentGlyph) {
                    var _r553_t0, _r553_t1;
                    r553_currentGlyph.include(r314_ForceUpright());
                    r553_currentGlyph.include(r314_BraceLarge.ExtensionShape(r520_top, r520_bot, r314_Stroke));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("whiteBraceLeft.straight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r558_currentGlyph) {
                    var _r558_t0, _r558_t1;
                    var r558_fine = r314_AdviceStroke(4);
                    var r558_xIns = r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.braceInside);
                    r558_currentGlyph.include(r314_Brace.UpperHalfShape(r520_top, r314_SymbolMid, r558_fine));
                    r558_currentGlyph.include(r314_Brace.LowerHalfShape(r314_SymbolMid, r520_bot, r558_fine));
                    r558_currentGlyph.include(r314_VBar.r(r558_xIns, r520_bot + r558_fine / 2, r520_top - r558_fine / 2, r558_fine));
                    return void 0;
                }));
                return r314_turned("whiteBraceRight.straight", null, "whiteBraceLeft.straight", r314_Middle, r314_SymbolMid);
            })();
            (function () {
                var r563_top = r1_mix(r314_SymbolMid, r314_ParenTop, 1 + r314_DesignParameters.braceOvershoot);
                var r563_bot = r1_mix(r314_SymbolMid, r314_ParenBot, 1 + r314_DesignParameters.braceOvershoot);
                r314_xn$GlyphSaveSink$2Lrc4b.save("upperLeftOrLowerRightfBrace", 9136, new r314_xn$Capture$2Lrc8.GlyphProc(function (r566_currentGlyph) {
                    var _r566_t0, _r566_t1;
                    r566_currentGlyph.include(r314_ForceUpright());
                    r566_currentGlyph.include(r314_Brace.UpperHalfShape(r563_top - r314_HalfStroke, r563_bot + r314_HalfStroke, r314_Stroke));
                    return void 0;
                }));
                return r314_xn$GlyphSaveSink$2Lrc4b.save("upperRightOrLowerLeftfBrace", 9137, new r314_xn$Capture$2Lrc8.GlyphProc(function (r571_currentGlyph) {
                    var _r571_t0, _r571_t1;
                    r571_currentGlyph.include(r314_ForceUpright());
                    r571_currentGlyph.include(r314_Brace.LowerHalfShape(r563_top - r314_HalfStroke, r563_bot + r314_HalfStroke, r314_Stroke));
                    return void 0;
                }));
            })();
            (function () {
                var r575_suffix, r575_pFlatIn, r575_pFlatOut, _r575_t2, _r575_t4, _r575_t5, _r575_tag6;
                var r575_CurlyBraceConfig = {
                    "curly": [0, 0],
                    "curlyFlatBoundary": [0.25, 0.05]
                };
                var _r575_t0 = Object.entries(r575_CurlyBraceConfig)[Symbol.iterator]();
                var _r575_t1 = void 0;
                var _r575_t3 = !(_r575_t1 = _r575_t0.next()).done;
                while (_r575_t3) {
                    _r575_t2 = _r575_t1.value;
                    r575_suffix = _r575_t2[0];
                    r575_pFlatIn = _r575_t2[1][0];
                    r575_pFlatOut = _r575_t2[1][1];
                    _r575_t2[1];
                    _r575_t4 = (function () {
                        r314_xn$GlyphSaveSink$2Lrc4b.save("braceLeft." + r575_suffix, null, r314_Brace.CurlyShape(r314_Stroke, r575_pFlatIn, r575_pFlatOut));
                        r314_turned("braceRight." + r575_suffix, null, "braceLeft." + r575_suffix, r314_Middle, r314_SymbolMid);
                        r314_xn$GlyphSaveSink$2Lrc4b.save("ligExtBraceLeft." + r575_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r582_currentGlyph) {
                            var _r582_t0, _r582_t1;
                            r1_Joining.set(r582_currentGlyph, r1_Joining.Classes.Right);
                            r582_currentGlyph.include(r314_Brace.CurlyShape(r314_Stroke, r575_pFlatIn, r575_pFlatOut, r314_Width));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save("ligExtBraceRight." + r575_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r586_currentGlyph) {
                            var _r586_t0, _r586_t1;
                            r586_currentGlyph.include(r314_xn$referglyph$1aao("ligExtBraceLeft." + r575_suffix), r314_AS_BASE, r314_ALSO_METRICS);
                            r586_currentGlyph.include(r314_FlipAround(r314_Middle, r314_SymbolMid));
                            r1_Joining.set(r586_currentGlyph, r1_Joining.Classes.Left);
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save("whiteBraceLeft." + r575_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r591_currentGlyph) {
                            var _r591_t0, _r591_t1;
                            var r591_fine = r314_AdviceStroke(4);
                            var r591_xIns = r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.braceInside);
                            var r591_top = r1_mix(r314_SymbolMid, r314_ParenTop, 1 + r314_DesignParameters.braceOvershoot);
                            var r591_bot = r1_mix(r314_SymbolMid, r314_ParenBot, 1 + r314_DesignParameters.braceOvershoot);
                            r591_currentGlyph.include(r314_Brace.CurlyShape(r591_fine, r575_pFlatIn, r575_pFlatOut));
                            r591_currentGlyph.include(r314_VBar.r(r591_xIns, r591_bot + r591_fine / 2, r591_top - r591_fine / 2, r591_fine));
                            return void 0;
                        }));
                        return r314_turned("whiteBraceRight." + r575_suffix, null, "whiteBraceLeft." + r575_suffix, r314_Middle, r314_SymbolMid);
                    })();
                    _r575_t3 = !(_r575_t1 = _r575_t0.next()).done;
                }
                return _r575_t4;
            })();
            r314_xn$selectvariant$7Hrq("braceLeft", "{");
            r314_xn$selectvariant$7Hrq("braceRight", "}");
            r314_xn$selectvariant$7Hrq("ligExtBraceLeft", new r314_xn$NamedParameterPair$2Lrc9b("follow", "braceLeft"));
            r314_xn$selectvariant$7Hrq("ligExtBraceRight", new r314_xn$NamedParameterPair$2Lrc9b("follow", "braceRight"));
            r314_xn$selectvariant$7Hrq("whiteBraceLeft", 10627, new r314_xn$NamedParameterPair$2Lrc9b("follow", "braceLeft"));
            return r314_xn$selectvariant$7Hrq("whiteBraceRight", 10628, new r314_xn$NamedParameterPair$2Lrc9b("follow", "braceRight"));
        })();
        (function () {
            var r599_AngleLeftShape = function (r600_outside, r600_inside, r600_sw) {
                var _r600_t0, _r600_t1;
                var r600_fatten = Math.hypot(1, (r600_inside - r600_outside - r314_O) / (r314_ParenTop - r314_SymbolMid));
                return r314_union(r314_dispiro(r314_widths.lhs(r600_sw), r314_flat(r600_inside, r314_ParenTop), r314_curl(r600_outside + r314_O, r314_SymbolMid, r314_widths.heading(r600_sw * r600_fatten, 0, r314_Downward))), r314_dispiro(r314_widths.rhs(r600_sw), r314_flat(r600_inside, r314_ParenBot), r314_curl(r600_outside + r314_O, r314_SymbolMid, r314_widths.heading(0, r600_sw * r600_fatten, r314_Upward))));
            };
            var r599_AngleLeftShapeMask = function (r601_outside, r601_inside, r601_sw) {
                var _r601_t0, _r601_t1;
                return r314_xn$spirooutline$1aao(r314_corner(r601_inside, r314_ParenTop), r314_corner(r601_outside + r314_O, r314_SymbolMid), r314_corner(r601_inside, r314_ParenBot));
            };
            r314_xn$GlyphSaveSink$2Lrc4b.save("angleLeft", 9001, new r314_xn$Capture$2Lrc8.GlyphProc(function (r604_currentGlyph) {
                var _r604_t0, _r604_t1;
                var r604_dim = r314_Paren.Dim(r314_DivFrame(1), new r314_xn$NamedParameterPair$2Lrc9b("delta", 0));
                r604_currentGlyph.include(r599_AngleLeftShape(r604_dim.outside, r604_dim.inside, r314_OperatorStroke));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("dblAngleLeft", 10218, new r314_xn$Capture$2Lrc8.GlyphProc(function (r609_currentGlyph) {
                var _r609_t0, _r609_t1;
                var r609_dim = r314_Paren.Dim(r314_DivFrame(1), new r314_xn$NamedParameterPair$2Lrc9b("delta", 0), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_OperatorStroke));
                var r609_fine = Math.min(r314_OperatorStroke, r314_AdviceStroke(3.5));
                var r609_farOutside = r609_dim.outside / 2;
                var r609_middle = r1_mix(r609_farOutside, r609_dim.inside, 0.5);
                r609_currentGlyph.include(r599_AngleLeftShape(r609_farOutside, r609_middle, r609_fine));
                r609_currentGlyph.include(r599_AngleLeftShape(r609_middle, r609_dim.inside, r609_fine));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("zNotationAngleLeft", 10633, new r314_xn$Capture$2Lrc8.GlyphProc(function (r616_currentGlyph) {
                var _r616_t0, _r616_t1;
                var r616_df = r314_DivFrame(1);
                var r616_fine = r314_AdviceStroke(4);
                var r616_dim = r314_Paren.Dim(r616_df, 0, new r314_xn$NamedParameterPair$2Lrc9b("sw", r616_fine));
                r616_currentGlyph.include(r314_intersection(r314_Rect(r1_mix(r314_ParenBot, r314_ParenTop, 2), r1_mix(r314_ParenTop, r314_ParenBot, 2), 0, r616_dim.inside), r314_union(r599_AngleLeftShape(r616_dim.outside, r616_dim.inside, r616_fine), r314_intersection(r314_VBar.r(r616_dim.inside, r616_dim.bottom, r616_dim.top, r616_fine), r599_AngleLeftShapeMask(r616_dim.outside, r616_dim.inside, r616_fine)))));
                return void 0;
            }));
            r314_turned("zNotationAngleRight", 10634, "zNotationAngleLeft", r314_Middle, r314_SymbolMid);
            r314_turned("angleRight", 9002, "angleLeft", r314_Middle, r314_SymbolMid);
            r314_turned("dblAngleRight", 10219, "dblAngleLeft", r314_Middle, r314_SymbolMid);
            r314_alias("mathAngleLeft", 10216, "angleLeft");
            return r314_alias("mathAngleRight", 10217, "angleRight");
        })();
        (function () {
            r314_xn$GlyphSaveSink$2Lrc4b.save("uSidewaysBracketLeft", 11814, r314_xn$withtransform$5sIl(r314_ApparentTranslate(0, r314_SymbolMid - r314_XH / 2), r314_PointingTo(r314_Width, r314_XH, r314_Width, 0, function () {
                var _r622_t0, _r622_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r624_currentGlyph) {
                    var _r624_t0, _r624_t1;
                    var r624_df = r314_DivFrame(r314_XH / r314_Width, 2, r314_XH * 0.1 / r314_SB);
                    r624_currentGlyph.include(r314_UShape(r1_mix(r314_Width, r314_RightSB, 0.5), r1_mix(0, r314_SB, 0.5), r624_df.leftSB, r624_df.rightSB, r314_Stroke * r314_StrokeWidthBlend(r314_HVContrast, r314_VHContrast)));
                    r624_currentGlyph.include(r314_FlipAround(r624_df.middle, r314_Middle));
                    return void 0;
                });
            })));
            return r314_turned("uSidewaysBracketRight", 11815, "uSidewaysBracketLeft", r314_Middle, r314_SymbolMid);
        })();
        return (function () {
            r314_xn$GlyphSaveSink$2Lrc4b.save("ceilingLeft", 8968, new r314_xn$Capture$2Lrc8.GlyphProc(function (r631_currentGlyph) {
                var _r631_t0, _r631_t1;
                r631_currentGlyph.include(r314_HBar.t(r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.bracketOutside), r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.bracketInside), r314_ParenTop));
                r631_currentGlyph.include(r314_VBar.l(r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.bracketOutside), r314_ParenBot, r314_ParenTop));
                return void 0;
            }));
            r314_xn$GlyphSaveSink$2Lrc4b.save("floorLeft", 8970, new r314_xn$Capture$2Lrc8.GlyphProc(function (r636_currentGlyph) {
                var _r636_t0, _r636_t1;
                r636_currentGlyph.include(r314_HBar.b(r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.bracketOutside), r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.bracketInside), r314_ParenBot));
                r636_currentGlyph.include(r314_VBar.l(r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.bracketOutside), r314_ParenBot, r314_ParenTop));
                return void 0;
            }));
            r314_turned("floorRight", 8971, "ceilingLeft", r314_Middle, r314_SymbolMid);
            return r314_turned("ceilingRight", 8969, "floorLeft", r314_Middle, r314_SymbolMid);
        })();
    });
    return void 0;
});


