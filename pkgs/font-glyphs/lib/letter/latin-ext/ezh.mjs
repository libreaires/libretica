"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r401_t) {
    var r401_n, r401_i, r401_a, _r401_t3, _r401_t4, _r401_t5, _r401_t6, _r401_t7, _r401_t8, _r401_t9, _r401_t10, _r401_t11, _r401_t12, _r401_t13, _r401_t14, _r401_t15, _r401_t16, _r401_t17, _r401_t18, _r401_t19, _r401_t20, _r401_t21, _r401_t22, _r401_t23, _r401_t24, _r401_t25, _r401_t26;
    var _r401_t0 = function () {
        _r401_t7 = function (_r401_t8) {
            _r401_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r401_t8
            };
        };
        _r401_t9 = r401_t instanceof Array;
        if (_r401_t9) {
            _r401_t10 = r401_n = r401_t.length;
            _r401_t11 = r401_i = 0;
            _r401_t12 = function (_r401_t14) {
                return _r401_t7(_r401_t14);
            };
            _r401_t13 = function (_r401_t15) {
                _r401_t16 = r401_i < r401_n;
                if (_r401_t16) {
                    _r401_t0 = function (_r401_t17) {
                        return _r401_t13(r401_i = r401_i + 1);
                    };
                    return {
                        "value": [r401_i, r401_t[r401_i]],
                        "done": false
                    };
                } else return _r401_t12(_r401_t15);
            };
            return _r401_t13();
        } else {
            _r401_t18 = r401_a = Object.keys(r401_t);
            _r401_t19 = r401_n = r401_a.length;
            _r401_t20 = r401_i = 0;
            _r401_t21 = function (_r401_t23) {
                return _r401_t7(_r401_t23);
            };
            _r401_t22 = function (_r401_t24) {
                _r401_t25 = r401_i < r401_n;
                if (_r401_t25) {
                    _r401_t0 = function (_r401_t26) {
                        return _r401_t22(r401_i = r401_i + 1);
                    };
                    return {
                        "value": [r401_a[r401_i], r401_t[r401_a[r401_i]]],
                        "done": false
                    };
                } else return _r401_t21(_r401_t24);
            };
            return _r401_t22();
        }
    };
    var _r401_t1 = function (x) {
        try {
            return _r401_t0(x);
        } catch (ex) {
            return _r401_t2(ex);
        }
    };
    var _r401_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r401_t3 = this; else {
        _r401_t4 = function () {
            void 0;
        };
        _r401_t4.prototype = _r1_t10.prototype;
        _r401_t3 = new _r401_t4();
    }
    _r401_t3[Symbol.iterator] = function () {
        return _r401_t3;
    };
    _r401_t3.next = _r401_t1;
    _r401_t3.throw = function (x) {
        return _r401_t2(x);
    };
    return _r401_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Ezh", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_fCursive, r313_fSerifed, _r313_t13, _r313_t14, _r313_t15, _r313_t16, _r313_tag17, _r313_t18, _r313_tag19;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_AHook = _r313_t1.AHook;
        var r313_SHook = _r313_t1.SHook;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_EssRatioLower = _r313_t1.EssRatioLower;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_xn$VERYFAR$5sIl = _r313_t1["VERY-FAR"];
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_MaskRight = _r313_t5.MaskRight;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_Arch = _r313_t5.Arch;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var r313_ExtLineLhsToRhs = _r313_t5.ExtLineLhsToRhs;
        var r313_ExtLineRhsToLhs = _r313_t5.ExtLineRhsToLhs;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateSelectorVariants = _r313_t7.CreateSelectorVariants;
        var r313_DefineSelectorGlyph = _r313_t7.DefineSelectorGlyph;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t8.EFVJutLength;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t9.CurlyTail;
        var r313_SerifedArcEnd = _r313_t9.SerifedArcEnd;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_RetroflexHook = _r313_t9.RetroflexHook;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-S"].resolve();
        var r313_AdviceSArchDepth = _r313_t10.AdviceSArchDepth;
        var r313_SNeck = _r313_t10.SNeck;
        var r313_xn$TERMINALNONE$9XZu = 0;
        var r313_xn$TERMINALHOOK$9XZu = 1;
        var r313_xn$TERMINALDESC$9XZu = 2;
        var r313_xn$TERMINALCURL$9XZu = 3;
        var r313_xn$TERMINALTAIL$9XZu = 4;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "Ezh": r313_Ezh
            };
        });
        var r313_Ezh = function () {
            var _r323_t5, _r323_t7, _r323_tag8;
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
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "top") r323_top = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "bottom") r323_bottom = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "fCursive") r323_fCursive = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "fSerifed") r323_fSerifed = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "pxTopRight") r323_pxTopRight = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "pxMidLeft") r323_pxMidLeft = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "pyMidLeft") r323_pyMidLeft = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "terminal") r323_terminal = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "stroke") r323_stroke = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "hook") r323_hook = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "origBar") r323_origBar = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "ada") r323_ada = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "adb") r323_adb = _r323_t1.right;
                _r323_t4 = _r323_t4 + 1;
            }
            var r323_df = r1_fallback(r323_df, _r323_t0[0]);
            var r323_top = r1_fallback(r323_top, _r323_t0[1]);
            var r323_bottom = r1_fallback(r323_bottom, _r323_t0[2]);
            var r323_fCursive = r1_fallback(r323_fCursive, _r323_t0[3], false);
            var r323_fSerifed = r1_fallback(r323_fSerifed, _r323_t0[4], false);
            var r323_pxTopRight = r1_fallback(r323_pxTopRight, _r323_t0[5], 0.925);
            var r323_pxMidLeft = r1_fallback(r323_pxMidLeft, _r323_t0[6], 0.2);
            var r323_pyMidLeft = r1_fallback(r323_pyMidLeft, _r323_t0[7], 0.55);
            var r323_terminal = r1_fallback(r323_terminal, _r323_t0[8], r313_xn$TERMINALHOOK$9XZu);
            var r323_stroke = r1_fallback(r323_stroke, _r323_t0[9], r323_df.mvs);
            var r323_hook = r1_fallback(r323_hook, _r323_t0[10], r313_Hook);
            var r323_origBar = r1_fallback(r323_origBar, _r323_t0[11], void 0);
            var r323_ada = r1_fallback(r323_ada, _r323_t0[12], r313_SmallArchDepthA);
            var r323_adb = r1_fallback(r323_adb, _r323_t0[13], r313_SmallArchDepthB);
            return (function () {
                var r329_Dim, r329_Shape;
                var r329_exports = {};
                r329_exports.Dim = r329_Dim = function () {
                    var _r337_t0, _r337_t1;
                    var r337_kOXTopLeft = r323_origBar !== void 0 ? 0 : r323_fCursive ? 1 : true ? 0.75 : void 0;
                    var r337_xTopLeft = r323_df.leftSB + r313_OX * r337_kOXTopLeft;
                    var r337_xTopRight = r1_mix(r323_df.leftSB, r323_df.rightSB, r323_pxTopRight);
                    var r337_xMidLeft = r1_mix(r323_df.leftSB, r323_df.rightSB, r323_pxMidLeft);
                    var r337_yMidLeft = r1_mix(r323_bottom, r323_top, r323_pyMidLeft) + r323_stroke / 2;
                    var r337_xArcMid = r323_df.rightSB - r313_OX * 2;
                    var r337_yArcMid = r313_YSmoothMidR(r337_yMidLeft, r323_bottom, r323_ada, r323_adb);
                    var r337_xArcTop = r1_clamp(r337_xMidLeft + r313_TINY - Math.min(0, r313_TanSlope * r323_stroke), r337_xArcMid - r313_HSwToV(1.125 * r323_stroke) - r313_TINY - Math.max(0, r313_TanSlope * r323_stroke), r313_Arch["adjust-x"].top(r323_df.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r323_stroke)));
                    var r337_yArcTop = r337_yMidLeft - 0;
                    return {
                        "xTopLeft": r337_xTopLeft,
                        "xTopRight": r337_xTopRight,
                        "xMidLeft": r337_xMidLeft,
                        "yMidLeft": r337_yMidLeft,
                        "xArcTop": r337_xArcTop,
                        "yArcTop": r337_yArcTop,
                        "xArcMid": r337_xArcMid,
                        "yArcMid": r337_yArcMid
                    };
                };
                var r329_ConventionalTop = function () {
                    var _r339_t0, _r339_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                        var _r341_t1, _r341_t2;
                        var _r341_t0 = r329_Dim();
                        var r341_xTopLeft = _r341_t0.xTopLeft;
                        var r341_xTopRight = _r341_t0.xTopRight;
                        var r341_xMidLeft = _r341_t0.xMidLeft;
                        var r341_yMidLeft = _r341_t0.yMidLeft;
                        r341_currentGlyph.include(r313_tagged("strokeTop", r313_HBar.t(r341_xTopLeft, r341_xTopRight, r323_top, r323_stroke)));
                        r341_currentGlyph.include(r313_tagged("strokeMiddle", r313_ExtLineRhsToLhs(r341_xTopRight, r323_top - r323_stroke, r341_xMidLeft, r341_yMidLeft, r313_VSwToH(r323_stroke))));
                        return void 0;
                    });
                };
                var r329_CursiveTop = function () {
                    var _r344_t0, _r344_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                        var _r346_t1, _r346_t2;
                        var _r346_t0 = r329_Dim();
                        var r346_xTopLeft = _r346_t0.xTopLeft;
                        var r346_xTopRight = _r346_t0.xTopRight;
                        var r346_xMidLeft = _r346_t0.xMidLeft;
                        var r346_yMidLeft = _r346_t0.yMidLeft;
                        var r346_vJut = Math.min(r313_Hook, r1_mix(r323_stroke, r323_top - r346_yMidLeft, 0.5) - r323_stroke * 0.25);
                        var r346_hookTerminalWidth = Math.min(r323_stroke, r323_df.adviceStroke2(3.5, 3, r323_top - r323_bottom));
                        var r346_xDiagWidth = r323_stroke * 1;
                        var r346_yFootHeight = Math.max(0.15 * (r323_top - r323_bottom), r323_stroke * 0.625) + r323_stroke * 0.4;
                        var r346_yHookDepth = r346_vJut + r323_stroke * 0.25;
                        var r346_yHookStraightDepth = Math.min(r346_yHookDepth - r323_stroke * 1.1, r346_yHookDepth / 3 - r323_stroke * 0.25);
                        var r346_xHookDepth = Math.max(0.25 * (r323_df.rightSB - r323_df.leftSB), r346_hookTerminalWidth * 1.5);
                        var r346_xMockTailDepth = Math.max(0.375 * (r323_df.rightSB - r323_df.leftSB), r346_hookTerminalWidth * 1.375);
                        var r346_kTop = 0.625;
                        var r346_kBot = 0.625;
                        var r346_yTailDepth = r346_vJut * 0.5;
                        r346_currentGlyph.include(r313_tagged("strokeTop", r313_intersection(r313_xn$spirooutline$1aao(r313_corner(-r313_xn$VERYFAR$5sIl, r323_bottom), r313_corner(-r313_xn$VERYFAR$5sIl, r313_xn$VERYFAR$5sIl), r313_corner(r346_xTopRight - r346_xDiagWidth + r313_TINY, r313_xn$VERYFAR$5sIl), r313_corner(r346_xTopRight - r346_xDiagWidth + r313_TINY, r323_top - r346_yFootHeight), r313_corner(r346_xMidLeft + r346_xDiagWidth, r346_yMidLeft), r313_corner(r346_xMidLeft + r346_xDiagWidth, r323_bottom)), r313_dispiro(r313_widths.rhs(r346_hookTerminalWidth), r313_flat(r346_xTopLeft, r323_top - r346_yHookDepth, r313_heading(r313_Upward)), r313_curl(r346_xTopLeft, r323_top - r346_yHookDepth + r346_yHookStraightDepth, r313_heading(r313_Upward)), r313_arcvh(), r313_g2.right.mid(r323_df.leftSB + r346_xHookDepth, r323_top - r313_O, r313_widths.rhs.heading(r323_stroke, r313_Rightward)), r313_flat(r1_mix(r323_df.leftSB + r346_xMockTailDepth, r346_xTopRight, r346_kTop), r323_top - r346_kTop * r346_yTailDepth), r313_curl(r1_mix(r323_df.leftSB + r346_xMockTailDepth, r346_xTopRight, 4), r323_top - 4 * r346_yTailDepth)))));
                        r346_currentGlyph.include(r313_VBar.r(r346_xTopRight, r323_top, r323_top - r346_yFootHeight, r313_VSwToH(r346_xDiagWidth)));
                        r346_currentGlyph.include(r313_tagged("strokeMiddle", r313_ExtLineRhsToLhs(r346_xTopRight, r323_top - r346_yFootHeight, r346_xMidLeft, r346_yMidLeft, r313_VSwToH(r323_stroke))));
                        return void 0;
                    });
                };
                r329_exports.Shape = r329_Shape = function () {
                    var _r351_t0, _r351_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                        var r353___, r353_jutTop, r353_jutBot, r353_jutMid, _r353_leti2, _r353_leti3, _r353_t4, _r353_t5, _r353_t6, _r353_t16, _r353_t17, _r353_t18, _r353_t19, _r353_t20, _r353_tag21, _r353_t22, _r353_t23, _r353_t24, _r353_tag25;
                        var _r353_t0 = r329_Dim();
                        var r353_xTopLeft = _r353_t0.xTopLeft;
                        var r353_xTopRight = _r353_t0.xTopRight;
                        var r353_xMidLeft = _r353_t0.xMidLeft;
                        var r353_yMidLeft = _r353_t0.yMidLeft;
                        var r353_xArcTop = _r353_t0.xArcTop;
                        var r353_yArcTop = _r353_t0.yArcTop;
                        var r353_xArcMid = _r353_t0.xArcMid;
                        var r353_yArcMid = _r353_t0.yArcMid;
                        var _r353_t7 = r353_currentGlyph;
                        var _r353_t8 = _r353_t7.include;
                        var _r353_t9 = r313_union;
                        var _r353_t10 = r323_fCursive ? r329_CursiveTop() : r329_ConventionalTop();
                        var _r353_t11 = r313_dispiro;
                        var _r353_t12 = r313_widths.rhs(r323_stroke);
                        var _r353_t13 = r313_flat(r353_xMidLeft, r353_yMidLeft, r313_heading(r313_Rightward));
                        var _r353_t14 = r313_curl(r353_xArcTop, r353_yArcTop);
                        var _r353_t15 = r313_archv();
                        var _r353_t1 = r323_terminal;
                        if (_r353_t1 === r313_xn$TERMINALNONE$9XZu) _r353_t16 = [r313_g4.down.mid(r353_xArcMid, r353_yArcMid, r313_heading(r313_Downward))]; else {
                            if (_r353_t1 === r313_xn$TERMINALDESC$9XZu) _r353_t17 = [r313_g4(r353_xArcMid, r353_yArcMid), r313_SerifedArcEnd.RtlRhs(r323_df.leftSB, r323_bottom, r323_stroke, r323_hook, r323_origBar)]; else {
                                if (_r353_t1 === r313_xn$TERMINALCURL$9XZu) {
                                    _r353_t19 = Math.min(r323_stroke, r323_df.adviceStroke2(3.5, 3, r353_yMidLeft - r323_bottom));
                                    _r353_t18 = (function (_r353_leti3) {
                                        var r359_fine = _r353_leti3;
                                        return [r313_g4(r353_xArcMid, r353_yArcMid), r313_CurlyTail.n(r359_fine, r323_bottom, r323_df.leftSB, r323_df.width, r323_bottom + 0.5 * r359_fine, new r313_xn$NamedParameterPair$2Lrc9b("yLoopTop", r1_mix(r353_yMidLeft, r323_bottom, 0.5) + 0.25 * r359_fine), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r323_stroke))];
                                    })(_r353_t19);
                                } else {
                                    if (_r353_t1 === r313_xn$TERMINALTAIL$9XZu) {
                                        _r353_t23 = r313_AdviceSArchDepth(r353_yMidLeft - r323_bottom, +1, r323_stroke);
                                        _r353_t22 = (function (_r353_leti2) {
                                            var r356_adb2 = _r353_leti2;
                                            return [r313_g4(r353_xArcMid, r353_yMidLeft - r356_adb2), r313_xn$decor$0cao(r313_SNeck(r323_df, r353_yMidLeft - r323_bottom, r323_stroke, r323_stroke * r313_EssRatioLower)), r313_g4(r323_df.leftSB + r313_OX, r323_bottom + r356_adb2, r313_widths.lhs(r323_stroke)), r313_HookEnd(r323_bottom, new r313_xn$NamedParameterPair$2Lrc9b("sw", r323_stroke)), r313_g4(r323_df.rightSB - r313_OX, r323_bottom + r323_hook)];
                                        })(_r353_t23);
                                    } else _r353_t22 = (r353___ = _r353_t1, [r313_g4(r353_xArcMid, r353_yArcMid), r313_HookEnd(r323_bottom, new r313_xn$NamedParameterPair$2Lrc9b("sw", r323_stroke)), r313_g4(r323_df.leftSB + (r323_origBar === void 0 ? r313_OX : r313_HSwToV(0.5 * (r323_origBar - r323_stroke))), r323_bottom + r323_hook)]);
                                    _r353_t18 = _r353_t22;
                                }
                                _r353_t17 = _r353_t18;
                            }
                            _r353_t16 = _r353_t17;
                        }
                        var _r353_t26 = _r353_t11(_r353_t12, _r353_t13, _r353_t14, _r353_t15, _r353_t16);
                        var _r353_t27 = _r353_t9(_r353_t10, _r353_t26);
                        _r353_t8.call(_r353_t7, _r353_t27);
                        if (r323_fSerifed) {
                            _r353_t4 = r313_EFVJutLength(r323_top, r323_bottom, r323_pyMidLeft, r323_stroke, void 0, r323_hook);
                            r353_jutTop = _r353_t4[0];
                            r353_jutBot = _r353_t4[1];
                            r353_jutMid = _r353_t4[2];
                            r353_currentGlyph.include(r313_VSerif.dl(r353_xTopLeft, r323_top, r353_jutTop, r313_VJutStroke * (r323_stroke / r313_Stroke)));
                        }
                        return void 0;
                    });
                };
                return r329_exports;
            })();
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r364_t0, _r364_t1;
            return {
                "RevEzh": r313_RevEzh
            };
        });
        var r313_RevEzh = function () {
            var _r366_t5, _r366_t7, _r366_tag8;
            var _r366_t6 = arguments;
            var r366_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r366_t6, 0);
            var _r366_t0 = [];
            var _r366_t1 = 0;
            while (_r366_t1 < r366_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r366_t0.push(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1]);
                _r366_t1 = _r366_t1 + 1;
            }
            var _r366_t2 = r366_xn$flexarguments$2Lrc7uIe5;
            var _r366_t3 = _r366_t2.length;
            var _r366_t4 = 0;
            while (_r366_t4 < _r366_t3) {
                _r366_t1 = _r366_t2[_r366_t4];
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "top") r366_top = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "bottom") r366_bottom = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "fCursive") r366_fCursive = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "fSerifed") r366_fSerifed = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "pxTopLeft") r366_pxTopLeft = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "pxMidRight") r366_pxMidRight = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "pyMidRight") r366_pyMidRight = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "terminal") r366_terminal = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "stroke") r366_stroke = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "hook") r366_hook = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "origBar") r366_origBar = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "ada") r366_ada = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "adb") r366_adb = _r366_t1.right;
                _r366_t4 = _r366_t4 + 1;
            }
            var r366_top = r1_fallback(r366_top, _r366_t0[0]);
            var r366_bottom = r1_fallback(r366_bottom, _r366_t0[1]);
            var r366_fCursive = r1_fallback(r366_fCursive, _r366_t0[2], false);
            var r366_fSerifed = r1_fallback(r366_fSerifed, _r366_t0[3], false);
            var r366_pxTopLeft = r1_fallback(r366_pxTopLeft, _r366_t0[4], 0.075);
            var r366_pxMidRight = r1_fallback(r366_pxMidRight, _r366_t0[5], 0.8);
            var r366_pyMidRight = r1_fallback(r366_pyMidRight, _r366_t0[6], 0.55);
            var r366_terminal = r1_fallback(r366_terminal, _r366_t0[7], r313_xn$TERMINALHOOK$9XZu);
            var r366_stroke = r1_fallback(r366_stroke, _r366_t0[8], r313_Stroke);
            var r366_hook = r1_fallback(r366_hook, _r366_t0[9], r313_Hook);
            var r366_origBar = r1_fallback(r366_origBar, _r366_t0[10], void 0);
            var r366_ada = r1_fallback(r366_ada, _r366_t0[11], r313_SmallArchDepthA);
            var r366_adb = r1_fallback(r366_adb, _r366_t0[12], r313_SmallArchDepthB);
            return (function () {
                var r372_Dim, r372_Shape;
                var r372_exports = {};
                r372_exports.Dim = r372_Dim = function () {
                    var _r380_t0, _r380_t1;
                    var r380_kOXTopRight = r366_origBar !== void 0 ? 0 : r366_fCursive ? 1 : true ? 0.75 : void 0;
                    var r380_xTopRight = r313_RightSB - r313_OX * r380_kOXTopRight;
                    var r380_xTopLeft = r1_mix(r313_SB, r313_RightSB, r366_pxTopLeft);
                    var r380_xMidRight = r1_mix(r313_SB, r313_RightSB, r366_pxMidRight);
                    var r380_yMidRight = r1_mix(r366_bottom, r366_top, r366_pyMidRight) + r366_stroke / 2;
                    var r380_xArcMid = r313_SB + r313_OX * 2;
                    var r380_yArcMid = r313_YSmoothMidL(r380_yMidRight, r366_bottom, r366_ada, r366_adb);
                    var r380_xArcTop = r1_clamp(r380_xArcMid + r313_HSwToV(1.125 * r366_stroke) + r313_TINY - Math.min(0, r313_TanSlope * r366_stroke), r380_xMidRight - r313_TINY - Math.max(0, r313_TanSlope * r366_stroke), r313_Arch["adjust-x"].top(r313_Middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r366_stroke)));
                    var r380_yArcTop = r380_yMidRight - 0;
                    return {
                        "xTopLeft": r380_xTopLeft,
                        "xTopRight": r380_xTopRight,
                        "xMidRight": r380_xMidRight,
                        "yMidRight": r380_yMidRight,
                        "xArcTop": r380_xArcTop,
                        "yArcTop": r380_yArcTop,
                        "xArcMid": r380_xArcMid,
                        "yArcMid": r380_yArcMid
                    };
                };
                var r372_ConventionalTop = function () {
                    var _r382_t0, _r382_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                        var _r384_t1, _r384_t2;
                        var _r384_t0 = r372_Dim();
                        var r384_xTopLeft = _r384_t0.xTopLeft;
                        var r384_xTopRight = _r384_t0.xTopRight;
                        var r384_xMidRight = _r384_t0.xMidRight;
                        var r384_yMidRight = _r384_t0.yMidRight;
                        r384_currentGlyph.include(r313_tagged("strokeTop", r313_HBar.t(r384_xTopLeft, r384_xTopRight, r366_top, r366_stroke)));
                        r384_currentGlyph.include(r313_tagged("strokeMiddle", r313_ExtLineLhsToRhs(r384_xTopLeft, r366_top - r366_stroke, r384_xMidRight, r384_yMidRight, r313_VSwToH(r366_stroke))));
                        return void 0;
                    });
                };
                var r372_CursiveTop = function () {
                    var _r387_t0, _r387_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                        var _r389_t1, _r389_t2;
                        var _r389_t0 = r372_Dim();
                        var r389_xTopLeft = _r389_t0.xTopLeft;
                        var r389_xTopRight = _r389_t0.xTopRight;
                        var r389_xMidRight = _r389_t0.xMidRight;
                        var r389_yMidRight = _r389_t0.yMidRight;
                        var r389_vJut = Math.min(r313_Hook, r1_mix(r366_stroke, r366_top - r389_yMidRight, 0.5) - r366_stroke * 0.25);
                        var r389_hookTerminalWidth = Math.min(r366_stroke, r313_AdviceStroke2(3.5, 3, r366_top - r366_bottom));
                        var r389_xDiagWidth = r366_stroke * 1;
                        var r389_yFootHeight = Math.max(0.15 * (r366_top - r366_bottom), r366_stroke * 0.625) + r366_stroke * 0.4;
                        var r389_yHookDepth = r389_vJut + r366_stroke * 0.25;
                        var r389_yHookStraightDepth = Math.min(r389_yHookDepth - r366_stroke * 1.1, r389_yHookDepth / 3 - r366_stroke * 0.25);
                        var r389_xHookDepth = Math.max(0.25 * (r313_RightSB - r313_SB), r389_hookTerminalWidth * 1.5);
                        var r389_xMockTailDepth = Math.max(0.375 * (r313_RightSB - r313_SB), r389_hookTerminalWidth * 1.375);
                        var r389_kTop = 0.625;
                        var r389_kBot = 0.625;
                        var r389_yTailDepth = r389_vJut * 0.5;
                        r389_currentGlyph.include(r313_tagged("strokeTop", r313_intersection(r313_xn$spirooutline$1aao(r313_corner(+r313_xn$VERYFAR$5sIl, r366_bottom), r313_corner(+r313_xn$VERYFAR$5sIl, r313_xn$VERYFAR$5sIl), r313_corner(r389_xTopLeft + r389_xDiagWidth - r313_TINY, r313_xn$VERYFAR$5sIl), r313_corner(r389_xTopLeft + r389_xDiagWidth - r313_TINY, r366_top - r389_yFootHeight), r313_corner(r389_xMidRight - r389_xDiagWidth, r389_yMidRight), r313_corner(r389_xMidRight - r389_xDiagWidth, r366_bottom)), r313_dispiro(r313_widths.lhs(r389_hookTerminalWidth), r313_flat(r389_xTopRight, r366_top - r389_yHookDepth, r313_heading(r313_Upward)), r313_curl(r389_xTopRight, r366_top - r389_yHookDepth + r389_yHookStraightDepth, r313_heading(r313_Upward)), r313_arcvh(), r313_g2.left.mid(r313_RightSB - r389_xHookDepth, r366_top - r313_O, r313_widths.lhs.heading(r366_stroke, r313_Leftward)), r313_flat(r1_mix(r313_RightSB - r389_xMockTailDepth, r389_xTopLeft, r389_kTop), r366_top - r389_kTop * r389_yTailDepth), r313_curl(r1_mix(r313_RightSB - r389_xMockTailDepth, r389_xTopLeft, 4), r366_top - 4 * r389_yTailDepth)))));
                        r389_currentGlyph.include(r313_VBar.l(r389_xTopLeft, r366_top, r366_top - r389_yFootHeight, r313_VSwToH(r389_xDiagWidth)));
                        r389_currentGlyph.include(r313_tagged("strokeMiddle", r313_ExtLineLhsToRhs(r389_xTopLeft, r366_top - r389_yFootHeight, r389_xMidRight, r389_yMidRight, r313_VSwToH(r366_stroke))));
                        return void 0;
                    });
                };
                r372_exports.Shape = r372_Shape = function () {
                    var _r394_t0, _r394_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                        var r396___, r396_jutTop, r396_jutBot, r396_jutMid, _r396_t1, _r396_t2, _r396_t3, _r396_t4;
                        var _r396_t0 = r372_Dim();
                        var r396_xTopLeft = _r396_t0.xTopLeft;
                        var r396_xTopRight = _r396_t0.xTopRight;
                        var r396_xMidRight = _r396_t0.xMidRight;
                        var r396_yMidRight = _r396_t0.yMidRight;
                        var r396_xArcTop = _r396_t0.xArcTop;
                        var r396_yArcTop = _r396_t0.yArcTop;
                        var r396_xArcMid = _r396_t0.xArcMid;
                        var r396_yArcMid = _r396_t0.yArcMid;
                        r396_currentGlyph.include(r313_union(r366_fCursive ? r372_CursiveTop() : r372_ConventionalTop(), r313_dispiro(r313_widths.lhs(r366_stroke), r313_flat(r396_xMidRight, r396_yMidRight, r313_heading(r313_Leftward)), r313_curl(r396_xArcTop, r396_yArcTop), r313_archv(), (_r396_t1 = r366_terminal, _r396_t1 === r313_xn$TERMINALNONE$9XZu ? [r313_g4.down.mid(r396_xArcMid, r396_yArcMid, r313_heading(r313_Downward))] : (r396___ = _r396_t1, [r313_g4(r396_xArcMid, r396_yArcMid), r313_HookEnd(r366_bottom, new r313_xn$NamedParameterPair$2Lrc9b("sw", r366_stroke)), r313_g4(r313_RightSB - (r366_origBar === void 0 ? r313_OX : r313_HSwToV(0.5 * (r366_origBar - r366_stroke))), r366_bottom + r366_hook)])))));
                        if (r366_fSerifed) {
                            _r396_t2 = r313_EFVJutLength(r366_top, r366_bottom, r366_pyMidRight, r366_stroke, void 0, r366_hook);
                            r396_jutTop = _r396_t2[0];
                            r396_jutBot = _r396_t2[1];
                            r396_jutMid = _r396_t2[2];
                            r396_currentGlyph.include(r313_VSerif.dr(r396_xTopRight, r366_top, r396_jutTop, r313_VJutStroke * (r366_stroke / r313_Stroke)));
                        }
                        return void 0;
                    });
                };
                return r372_exports;
            })();
        };
        var r313_EzhConfig = {
            "straightSerifless": [false, false],
            "straightTopSerifed": [false, true],
            "cursive": [true, false]
        };
        var _r313_t11 = _r1_t2(r313_EzhConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_fCursive = _r313_t13[1][0];
            r313_fSerifed = _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("Ezh." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                    var _r407_t0, _r407_t1;
                    r407_currentGlyph.include(r313_MarkSet.capital());
                    var r407_ezh = r313_Ezh(r313_DivFrame(1), r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_CAP - 0)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    r407_currentGlyph.include(r407_ezh.Shape());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpEzh." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                    var _r419_t0, _r419_t1;
                    r419_currentGlyph.include(r313_MarkSet.e());
                    var r419_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - 0)), new r313_xn$NamedParameterPair$2Lrc9b("hook", Math.max(r313_AHook, r313_Hook * (r313_XH / r313_CAP))), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    r419_currentGlyph.include(r419_ezh.Shape());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ezh." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                    var _r431_t0, _r431_t1;
                    r431_currentGlyph.include(r313_MarkSet.p());
                    var r431_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r431_currentGlyph.include(r431_ezh.Shape());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revEzh." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                    var _r443_t0, _r443_t1;
                    r443_currentGlyph.include(r313_MarkSet.capital());
                    var r443_revEzh = r313_RevEzh(r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidRight", r313_fCursive ? 0.5 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_CAP - 0)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                    r443_currentGlyph.include(r443_revEzh.Shape());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revezh." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
                    var _r455_t0, _r455_t1;
                    r455_currentGlyph.include(r313_MarkSet.p());
                    var r455_revEzh = r313_RevEzh(r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidRight", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r455_currentGlyph.include(r455_revEzh.Shape());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ezhTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    r467_currentGlyph.include(r313_MarkSet.p());
                    var r467_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", (r1_mix(0, r313_XH, r313_fCursive ? 0.5 : 0.52) - r313_Descender) / (r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - 0)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALTAIL$9XZu));
                    r467_currentGlyph.include(r467_ezh.Shape());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ezhCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
                    var _r480_t0, _r480_t1;
                    r480_currentGlyph.include(r313_MarkSet.p());
                    var r480_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALCURL$9XZu));
                    r480_currentGlyph.include(r480_ezh.Shape());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ezhRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                    var _r493_t0, _r493_t1;
                    r493_currentGlyph.include(r313_MarkSet.e());
                    var r493_stroke = r313_AdviceStroke2(2, 3, r313_XH - 0);
                    var r493_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r493_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALDESC$9XZu));
                    r493_currentGlyph.include(r493_ezh.Shape());
                    r493_currentGlyph.include(r313_RetroflexHook.l(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r493_stroke)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ezhPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r511_currentGlyph) {
                    var _r511_t1, _r511_t2;
                    var r511_df = r511_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 1));
                    r511_currentGlyph.include(r511_df.markSet.p());
                    var r511_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                    var r511_stroke = r511_subDf.adviceStroke2(2, 3, r313_XH - r313_Descender);
                    var r511_ezh = r313_Ezh(r511_subDf, r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r511_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r511_subDf.archDepthAOf(r313_SmallArchDepth, r511_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r511_subDf.archDepthBOf(r313_SmallArchDepth, r511_stroke)));
                    r511_currentGlyph.include(r511_ezh.Shape());
                    var _r511_t0 = r511_ezh.Dim();
                    var r511_xArcTop = _r511_t0.xArcTop;
                    var r511_yArcTop = _r511_t0.yArcTop;
                    var r511_xArcMid = _r511_t0.xArcMid;
                    var r511_yArcMid = _r511_t0.yArcMid;
                    var r511_fine = Math.min(r511_stroke, r511_subDf.adviceStroke(3));
                    var r511_pos = {
                        "x": r511_df.rightSB,
                        "y": 0
                    };
                    var r511_attach = {
                        "x": r1_mix(r511_xArcMid, r511_xArcTop, r313_arcvh.xFromY(r1_clamp(0, 1, (Math.max(r511_fine, r511_yArcMid + r511_fine / 2) - r511_yArcMid) / (r511_yArcTop - r511_yArcMid)))),
                        "y": Math.max(0, r511_yArcMid - r511_fine / 2)
                    };
                    r511_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r511_pos.x), new r313_xn$NamedParameterPair$2Lrc9b("y", r511_pos.y), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r511_attach.x), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r511_attach.y), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r511_fine), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(r511_attach.y), r313_MaskLeft(r511_attach.x)))));
                    return void 0;
                }));
                return !r313_fSerifed ? (r313_DefineSelectorGlyph("lyogh", r313_suffix, r313_DivFrame(1), "bp"), r313_DefineSelectorGlyph("lyoghCurlyTail", r313_suffix, r313_DivFrame(1), "bp"), r313_DefineSelectorGlyph("lyoghRTail", r313_suffix, r313_DivFrame(1), "bp"), r313_xn$GlyphSaveSink$2Lrc4b.save("lyogh." + r313_suffix + ".serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
                    var _r531_t0, _r531_t1;
                    r531_currentGlyph.setWidth(0);
                    r531_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    var r531_yogh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 0.4), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("origBar", r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r531_currentGlyph.include(r531_yogh.Shape());
                    r531_currentGlyph.include(r313_VBar.l(r313_SB, 0, r313_Ascender));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("lyogh." + r313_suffix + ".hooky", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r531_currentGlyph, r313_tagged("serifLT", r313_HSerif.lt(r313_SB, r313_Ascender, r313_SideJut))));
                    return void 0;
                })), r313_xn$selectvariant$7Hrq("lyogh." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "lyogh/l")), r313_xn$GlyphSaveSink$2Lrc4b.save("lyoghCurlyTail." + r313_suffix + ".serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r550_currentGlyph) {
                    var _r550_t0, _r550_t1;
                    r550_currentGlyph.setWidth(0);
                    r550_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    var r550_yogh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 0.4), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("origBar", r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALCURL$9XZu));
                    r550_currentGlyph.include(r550_yogh.Shape());
                    r550_currentGlyph.include(r313_VBar.l(r313_SB, 0, r313_Ascender));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("lyoghCurlyTail." + r313_suffix + ".hooky", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r550_currentGlyph, r313_tagged("serifLT", r313_HSerif.lt(r313_SB, r313_Ascender, r313_SideJut))));
                    return void 0;
                })), r313_xn$selectvariant$7Hrq("lyoghCurlyTail." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "lyogh/l")), r313_xn$GlyphSaveSink$2Lrc4b.save("lyoghRTail." + r313_suffix + ".serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r570_currentGlyph) {
                    var _r570_t0, _r570_t1;
                    r570_currentGlyph.setWidth(0);
                    r570_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    var r570_yogh = r313_Ezh(r313_DivFrame(1), r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 0.4), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.52), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - 0)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("origBar", r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALDESC$9XZu));
                    r570_currentGlyph.include(r570_yogh.Shape());
                    r570_currentGlyph.include(r313_VBar.l(r313_SB, 0, r313_Ascender));
                    r570_currentGlyph.include(r313_RetroflexHook.lExt(r313_SB, 0));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("lyoghRTail." + r313_suffix + ".hooky", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r570_currentGlyph, r313_tagged("serifLT", r313_HSerif.lt(r313_SB, r313_Ascender, r313_SideJut))));
                    return void 0;
                })), r313_xn$selectvariant$7Hrq("lyoghRTail." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "lyogh/l")), r313_xn$GlyphSaveSink$2Lrc4b.save("ezh/phoneticRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r591_currentGlyph) {
                    var _r591_t0, _r591_t1;
                    r591_currentGlyph.include(r313_MarkSet.p());
                    var r591_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 4 / 15), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r591_currentGlyph.include(r591_ezh.Shape());
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("ezhCurlyTail/phoneticRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r604_currentGlyph) {
                    var _r604_t0, _r604_t1;
                    r604_currentGlyph.include(r313_MarkSet.p());
                    var r604_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 4 / 15), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke2(2, 3, r313_XH - r313_Descender)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALCURL$9XZu));
                    r604_currentGlyph.include(r604_ezh.Shape());
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("ezhRTail/phoneticRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r618_currentGlyph) {
                    var _r618_t0, _r618_t1;
                    r618_currentGlyph.include(r313_MarkSet.p());
                    var r618_stroke = r313_AdviceStroke2(2, 3, r313_XH - r313_Descender);
                    var r618_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 4 / 15), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r618_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALDESC$9XZu));
                    r618_currentGlyph.include(r618_ezh.Shape());
                    r618_currentGlyph.include(r313_RetroflexHook.l(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("y", r313_Descender), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_Descender + r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r618_stroke)));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("ezhPalatalHook/phoneticRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r637_currentGlyph) {
                    var _r637_t1, _r637_t2;
                    r637_currentGlyph.include(r313_MarkSet.p());
                    var r637_stroke = r313_AdviceStroke2(2, 3, r313_XH - r313_Descender);
                    var r637_ezh = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 4 / 15), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r637_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r637_currentGlyph.include(r637_ezh.Shape());
                    var _r637_t0 = r637_ezh.Dim();
                    var r637_xArcTop = _r637_t0.xArcTop;
                    var r637_yArcTop = _r637_t0.yArcTop;
                    var r637_xArcMid = _r637_t0.xArcMid;
                    var r637_yArcMid = _r637_t0.yArcMid;
                    var r637_fine = Math.min(r637_stroke, r313_AdviceStroke(3));
                    var r637_pos = {
                        "x": r1_mix(0, r313_Width, 4 / 3) - r313_SB,
                        "y": 0
                    };
                    var r637_attach = {
                        "x": r1_mix(r637_xArcMid, r637_xArcTop, r313_arcvh.xFromY(r1_clamp(0, 1, (Math.max(r637_fine, r637_yArcMid + r637_fine / 2) - r637_yArcMid) / (r637_yArcTop - r637_yArcMid)))),
                        "y": Math.max(0, r637_yArcMid - r637_fine / 2)
                    };
                    r637_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r637_pos.x), new r313_xn$NamedParameterPair$2Lrc9b("y", r637_pos.y), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r637_attach.x), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r637_attach.y), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r637_fine), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(r637_attach.y), r313_MaskLeft(r637_attach.x)))));
                    return void 0;
                })), r313_DefineSelectorGlyph("lyogh/phoneticRight", r313_suffix, r313_DivFrame(1), "bp"), r313_DefineSelectorGlyph("lyoghRTail/phoneticRight", r313_suffix, r313_DivFrame(1), "bp"), r313_xn$GlyphSaveSink$2Lrc4b.save("lyogh/phoneticRight." + r313_suffix + ".serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r657_currentGlyph) {
                    var _r657_t0, _r657_t1;
                    r657_currentGlyph.setWidth(0);
                    r657_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    var r657_gap = 0.5 * (r313_SB - 0) + r313_HSwToV(r313_QuarterStroke);
                    var r657_subDf = r313_DivFrame((r313_Width - r657_gap) / r313_Width, 2, 1);
                    var r657_stroke = r657_subDf.adviceStroke2(2, 3, r313_XH - r313_Descender);
                    var r657_origBar = r657_subDf.adviceStroke(2);
                    var r657_yogh = r313_Ezh(r657_subDf, r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", Math.max(0.4, (r313_HSwToV(r657_origBar) + Math.max(r313_Width / 32, r313_AdviceStroke(24))) / (r657_subDf.rightSB - r657_subDf.leftSB))), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r657_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("origBar", r657_origBar), new r313_xn$NamedParameterPair$2Lrc9b("ada", r657_subDf.archDepthAOf(r313_SmallArchDepth, r657_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r657_subDf.archDepthBOf(r313_SmallArchDepth, r657_stroke)));
                    r657_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(r657_gap, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r671_currentGlyph) {
                        var _r671_t0, _r671_t1;
                        r671_currentGlyph.include(r657_yogh.Shape(), true, true);
                        r671_currentGlyph.include(r313_VBar.l(r657_subDf.leftSB, 0, r313_Ascender, r657_origBar));
                        return void 0;
                    })));
                    r657_currentGlyph.include(r313_HBar.t(r313_SB - r313_SideJut, r657_subDf.leftSB + r657_gap - r313_O, r313_XH));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("lyogh/phoneticRight." + r313_suffix + ".hooky", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r657_currentGlyph, r313_tagged("serifLT", r313_HSerif.lt(r657_subDf.leftSB + r657_gap, r313_Ascender, r313_SideJut, r657_origBar))));
                    return void 0;
                })), r313_xn$selectvariant$7Hrq("lyogh/phoneticRight." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "lyogh/l")), r313_xn$GlyphSaveSink$2Lrc4b.save("lyoghRTail/phoneticRight." + r313_suffix + ".serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r680_currentGlyph) {
                    var _r680_t0, _r680_t1;
                    r680_currentGlyph.setWidth(0);
                    r680_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    var r680_gap = 0.5 * (r313_SB - 0) + r313_HSwToV(r313_QuarterStroke);
                    var r680_subDf = r313_DivFrame((r313_Width - r680_gap) / r313_Width, 2, 1);
                    var r680_stroke = r680_subDf.adviceStroke2(2, 3, r313_XH - 0);
                    var r680_origBar = r680_subDf.adviceStroke(2);
                    var r680_yogh = r313_Ezh(r680_subDf, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("fCursive", r313_fCursive), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", r313_fSerifed), new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", Math.max(0.4, (r313_HSwToV(r680_origBar) + Math.max(r313_Width / 32, r313_AdviceStroke(24))) / (r680_subDf.rightSB - r680_subDf.leftSB))), new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", r313_fCursive ? 0.5 : 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r680_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("origBar", r680_origBar), new r313_xn$NamedParameterPair$2Lrc9b("ada", r680_subDf.archDepthAOf(r313_SmallArchDepth, r680_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r680_subDf.archDepthBOf(r313_SmallArchDepth, r680_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("terminal", r313_xn$TERMINALDESC$9XZu));
                    r680_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(r680_gap, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r695_currentGlyph) {
                        var _r695_t0, _r695_t1;
                        r695_currentGlyph.include(r680_yogh.Shape(), true, true);
                        r695_currentGlyph.include(r313_VBar.l(r680_subDf.leftSB, 0, r313_Ascender, r680_origBar));
                        r695_currentGlyph.include(r313_RetroflexHook.lExt(r680_subDf.leftSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r680_origBar)));
                        return void 0;
                    })));
                    r680_currentGlyph.include(r313_HBar.t(r313_SB - r313_SideJut, r680_subDf.leftSB + r680_gap - r313_O, r313_XH));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("lyoghRTail/phoneticRight." + r313_suffix + ".hooky", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r680_currentGlyph, r313_tagged("serifLT", r313_HSerif.lt(r680_subDf.leftSB + r680_gap, r313_Ascender, r313_SideJut, r680_origBar))));
                    return void 0;
                })), r313_xn$selectvariant$7Hrq("lyoghRTail/phoneticRight." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "lyogh/l"))) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("Ezh", 439);
        r313_xn$selectvariant$7Hrq("revEzh", 440, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Ezh"));
        r313_xn$selectvariant$7Hrq("smcpEzh", 7459, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Ezh"));
        r313_xn$selectvariant$7Hrq("ezh", 658);
        r313_xn$selectvariant$7Hrq("revezh", 441, new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh"));
        r313_xn$selectvariant$7Hrq("ezhTail", 442, new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh"));
        r313_xn$selectvariant$7Hrq("ezhCurlyTail", 659, new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh"));
        r313_xn$selectvariant$7Hrq("ezhRTail", 7578, new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh"));
        r313_xn$selectvariant$7Hrq("ezhPalatalHook", 122648, new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh"));
        r313_CreateSelectorVariants("lyogh", 622, Object.keys(r313_EzhConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_CreateSelectorVariants("lyoghCurlyTail", 122727, Object.keys(r313_EzhConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_CreateSelectorVariants("lyoghRTail", 122629, Object.keys(r313_EzhConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_xn$selectvariant$7Hrq("ezh/phoneticRight");
        r313_xn$selectvariant$7Hrq("ezhCurlyTail/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_xn$selectvariant$7Hrq("ezhRTail/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_xn$selectvariant$7Hrq("ezhPalatalHook/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_CreateSelectorVariants("lyogh/phoneticRight", null, Object.keys(r313_EzhConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_CreateSelectorVariants("lyoghRTail/phoneticRight", null, Object.keys(r313_EzhConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "ezh/phoneticRight"));
        r313_alias("cyrl/abk/Dze", 1248, "Ezh");
        r313_alias("cyrl/abk/dze", 1249, "ezh");
        return (function () {
            var r720_suffix, r720_styTop, r720_styBot, _r720_t3, _r720_t4, _r720_tag5;
            var _r720_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-C"].resolve();
            var r720_CLetterForm = _r720_t0.CLetterForm;
            var r720_CConfig = _r720_t0.CConfig;
            var r720_xn$FLATCONNECTION$5sIl = 3;
            var _r720_t1 = Object.entries(r720_CConfig)[Symbol.iterator]();
            var _r720_t2 = void 0;
            while (!(_r720_t2 = _r720_t1.next()).done) {
                _r720_t3 = _r720_t2.value;
                r720_suffix = _r720_t3[0];
                r720_styTop = _r720_t3[1][0];
                r720_styBot = _r720_t3[1][1];
                _r720_t3[1];
                (function () {
                    return !r720_styBot ? (r313_xn$GlyphSaveSink$2Lrc4b.save("ZVisigothic." + r720_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r727_currentGlyph) {
                        var _r727_t1, _r727_t2;
                        r727_currentGlyph.include(r313_MarkSet.capital());
                        var r727_stroke = r313_AdviceStroke2(2, 3, r313_XH - 0);
                        var r727_c = r720_CLetterForm(r313_DivFrame(1), r720_styTop, r720_xn$FLATCONNECTION$5sIl, r313_CAP, r313_XH - r727_stroke, new r313_xn$NamedParameterPair$2Lrc9b("sw", r727_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", Math.max(r313_AHook, r313_Hook * ((r313_CAP - (r313_XH - r727_stroke)) / r313_XH))), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                        var r727_z = r313_Ezh(r313_DivFrame(1), r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", 0.52), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r727_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", Math.max(r313_AHook, r313_Hook * (r313_XH / r313_CAP))), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                        var _r727_t0 = r727_z.Dim();
                        var r727_xTopRight = _r727_t0.xTopRight;
                        r727_currentGlyph.include(r313_union(r313_difference(r727_c.full(), r313_intersection(r313_MaskBelow(r313_XH - r313_O), r313_MaskRight(r727_xTopRight))), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r741_currentGlyph) {
                            var _r741_t0, _r741_t1;
                            r741_currentGlyph.include(r727_z.Shape());
                            r741_currentGlyph.ejectTagged("strokeTop");
                            return void 0;
                        }))));
                        return void 0;
                    })), r313_xn$GlyphSaveSink$2Lrc4b.save("zVisigothic." + r720_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r746_currentGlyph) {
                        var _r746_t1, _r746_t2;
                        r746_currentGlyph.include(r313_MarkSet.bp());
                        var r746_stroke = r313_AdviceStroke2(2, 3, r313_XH - r313_Descender);
                        var r746_c = r720_CLetterForm(r313_DivFrame(1), r720_styTop, r720_xn$FLATCONNECTION$5sIl, r313_Ascender, r313_XH - r746_stroke, new r313_xn$NamedParameterPair$2Lrc9b("sw", r746_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                        var r746_z = r313_Ezh(r313_DivFrame(1), r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("pyMidLeft", 0.55), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r746_stroke), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                        var _r746_t0 = r746_z.Dim();
                        var r746_xTopRight = _r746_t0.xTopRight;
                        r746_currentGlyph.include(r313_union(r313_difference(r746_c.full(), r313_intersection(r313_MaskBelow(r313_XH - r313_O), r313_MaskRight(r746_xTopRight))), r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r760_currentGlyph) {
                            var _r760_t0, _r760_t1;
                            r760_currentGlyph.include(r746_z.Shape());
                            r760_currentGlyph.ejectTagged("strokeTop");
                            return void 0;
                        }))));
                        return void 0;
                    }))) : void 0;
                })();
            }
            r313_xn$selectvariant$7Hrq("ZVisigothic", 42850, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C/topSerif"));
            return r313_xn$selectvariant$7Hrq("zVisigothic", 42851, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/topSerif"));
        })();
    });
    return void 0;
});


