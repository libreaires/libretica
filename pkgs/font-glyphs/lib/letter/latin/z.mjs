"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r383_t) {
    var r383_n, r383_i, r383_a, _r383_t3, _r383_t4, _r383_t5, _r383_t6, _r383_t7, _r383_t8, _r383_t9, _r383_t10, _r383_t11, _r383_t12, _r383_t13, _r383_t14, _r383_t15, _r383_t16, _r383_t17, _r383_t18, _r383_t19, _r383_t20, _r383_t21, _r383_t22, _r383_t23, _r383_t24, _r383_t25, _r383_t26;
    var _r383_t0 = function () {
        _r383_t7 = function (_r383_t8) {
            _r383_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r383_t8
            };
        };
        _r383_t9 = r383_t instanceof Array;
        if (_r383_t9) {
            _r383_t10 = r383_n = r383_t.length;
            _r383_t11 = r383_i = 0;
            _r383_t12 = function (_r383_t14) {
                return _r383_t7(_r383_t14);
            };
            _r383_t13 = function (_r383_t15) {
                _r383_t16 = r383_i < r383_n;
                if (_r383_t16) {
                    _r383_t0 = function (_r383_t17) {
                        return _r383_t13(r383_i = r383_i + 1);
                    };
                    return {
                        "value": [r383_i, r383_t[r383_i]],
                        "done": false
                    };
                } else return _r383_t12(_r383_t15);
            };
            return _r383_t13();
        } else {
            _r383_t18 = r383_a = Object.keys(r383_t);
            _r383_t19 = r383_n = r383_a.length;
            _r383_t20 = r383_i = 0;
            _r383_t21 = function (_r383_t23) {
                return _r383_t7(_r383_t23);
            };
            _r383_t22 = function (_r383_t24) {
                _r383_t25 = r383_i < r383_n;
                if (_r383_t25) {
                    _r383_t0 = function (_r383_t26) {
                        return _r383_t22(r383_i = r383_i + 1);
                    };
                    return {
                        "value": [r383_a[r383_i], r383_t[r383_a[r383_i]]],
                        "done": false
                    };
                } else return _r383_t21(_r383_t24);
            };
            return _r383_t22();
        }
    };
    var _r383_t1 = function (x) {
        try {
            return _r383_t0(x);
        } catch (ex) {
            return _r383_t2(ex);
        }
    };
    var _r383_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r383_t3 = this; else {
        _r383_t4 = function () {
            void 0;
        };
        _r383_t4.prototype = _r1_t10.prototype;
        _r383_t3 = new _r383_t4();
    }
    _r383_t3[Symbol.iterator] = function () {
        return _r383_t3;
    };
    _r383_t3.next = _r383_t1;
    _r383_t3.throw = function (x) {
        return _r383_t2(x);
    };
    return _r383_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Z", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_capital, r313_small, r313_bsMask, r313_serifs, r313_slash, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_HookX = _r313_t1.HookX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_VJut = _r313_t1.VJut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_important = _r313_t2.important;
        var r313_alsoThru = _r313_t2.alsoThru;
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
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_tagged = _r313_t5.tagged;
        var r313_Rect = _r313_t5.Rect;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var r313_ExtLineRhsToLhs = _r313_t5.ExtLineRhsToLhs;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$aliasreducedvariant$1aao8 = _r313_t6["alias-reduced-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendBelowBaseAnchors = _r313_t7.ExtendBelowBaseAnchors;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_HCurlyTail = _r313_t9.HCurlyTail;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_RetroflexHook = _r313_t9.RetroflexHook;
        var r313_CyrDescender = _r313_t9.CyrDescender;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-X"].resolve();
        var r313_XStrand = _r313_t10.XStrand;
        var r313_xn$MODEZ$5sIl = 0;
        var r313_xn$MODEZDESC$5sIl = 1;
        var r313_xn$MODEZHOOK$5sIl = 2;
        var r313_xn$MODEZSWASH$5sIl = 3;
        var r313_DisplayBottomStroke = function (r320_mode) {
            var _r320_t0, _r320_t1;
            return !(r320_mode === r313_xn$MODEZHOOK$5sIl || r320_mode === r313_xn$MODEZSWASH$5sIl);
        };
        var r313_ZSerifless = function (r321_top) {
            var _r321_t0, _r321_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t0, _r323_t1;
                return void 0;
            });
        };
        var r313_ZStdSerifs = function (r324_top) {
            var _r324_t0, _r324_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var _r326_t0, _r326_t1;
                r326_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r313_SB, r324_top, r313_VJut)));
                r326_currentGlyph.include(r313_tagged("serifRB", r313_VSerif.ur(r313_RightSB, 0, r313_VJut)));
                return void 0;
            });
        };
        var r313_ZMotionSerifsB = function (r329_top) {
            var _r329_t0, _r329_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var _r331_t0, _r331_t1;
                r331_currentGlyph.include(r313_tagged("serifRB", r313_VSerif.ur(r313_RightSB, 0, r313_VJut)));
                return void 0;
            });
        };
        var r313_ZMotionSerifsT = function (r333_top) {
            var _r333_t0, _r333_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                var _r335_t0, _r335_t1;
                r335_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r313_SB, r333_top, r313_VJut)));
                return void 0;
            });
        };
        var r313_ZBaseShape = function (r337_mode) {
            var _r337_t0, _r337_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                var r339_cor = 1.15 * r313_HVContrast;
                r339_currentGlyph.include(r313_tagged("strokeTop", r313_HBar.t(r313_SB, r313_RightSB, r313_CAP)));
                r339_currentGlyph.include(r313_tagged("strokeMiddle", r313_xn$spirooutline$1aao(r313_corner(r313_SB, r337_mode === r313_xn$MODEZSWASH$5sIl ? 0 : r313_Stroke), r313_corner(r313_RightSB - r313_Stroke * r339_cor, r313_CAP - r313_Stroke), r313_corner(r313_RightSB, r313_CAP - r313_Stroke), r313_corner(r313_SB + r313_Stroke * r339_cor, r337_mode === r313_xn$MODEZSWASH$5sIl ? 0 : r313_Stroke))));
                if (r313_DisplayBottomStroke(r337_mode)) r339_currentGlyph.include(r313_tagged("strokeBottom", r313_HBar.b(r313_SB, r313_RightSB, 0)));
                return void 0;
            });
        };
        var r313_ZCurlyShape = function (r343_mode) {
            var _r343_t0, _r343_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                var _r345_t0, _r345_t1;
                r345_currentGlyph.include(r313_tagged("strokeTop", r313_HBar.t(r313_SB, r313_RightSB - r313_HSwToV(r313_Stroke), r313_CAP)));
                r345_currentGlyph.include(r313_tagged("strokeMiddle", r313_XStrand(false, r313_SLAB, r313_SB, 0, r313_RightSB, r313_CAP, 0.125, 0.4, 0.32)));
                if (r313_DisplayBottomStroke(r343_mode)) r345_currentGlyph.include(r313_tagged("strokeBottom", r313_HBar.b(r313_SB + r313_HSwToV(r313_Stroke), r313_RightSB, 0)));
                return void 0;
            });
        };
        r313_HBar.mOver = function () {
            var _r349_t0, _r349_t1;
            return r313_xn$referglyph$1aao("barOver");
        };
        var r313_DBarOver = function () {
            var _r350_t0, _r350_t1;
            return r313_xn$referglyph$1aao("antiSlashOver");
        };
        var r313_SmallZBaseShape = function (r351_mode) {
            var _r351_t0, _r351_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                var _r353_t0, _r353_t1;
                var r353_cor = 1.2 * r313_HVContrast;
                r353_currentGlyph.include(r313_tagged("strokeTop", r313_HBar.t(r313_SB, r313_RightSB, r313_XH)));
                r353_currentGlyph.include(r313_tagged("strokeMiddle", r313_ExtLineRhsToLhs(r313_SB, r351_mode === r313_xn$MODEZSWASH$5sIl ? 0 : r313_Stroke, r313_RightSB, r313_XH - r313_Stroke, r313_VSwToH(r313_Stroke))));
                if (r313_DisplayBottomStroke(r351_mode)) r353_currentGlyph.include(r313_tagged("strokeBottom", r313_HBar.b(r313_SB, r313_RightSB, 0)));
                r353_currentGlyph.setBaseAnchor("trailing", r313_RightSB, 0);
                return void 0;
            });
        };
        var r313_SmallZCurlyShape = function (r358_mode) {
            var _r358_t0, _r358_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                var _r360_t0, _r360_t1;
                r360_currentGlyph.include(r313_tagged("strokeTop", r313_HBar.t(r313_SB, r313_RightSB - r313_HSwToV(r313_Stroke), r313_XH)));
                r360_currentGlyph.include(r313_tagged("strokeMiddle", r313_XStrand(false, r313_SLAB, r313_SB, 0, r313_RightSB, r313_XH, 0.125, 0.4, 0.36)));
                if (r313_DisplayBottomStroke(r358_mode)) r360_currentGlyph.include(r313_tagged("strokeBottom", r313_HBar.b(r313_SB + r313_HSwToV(r313_Stroke), r313_RightSB, 0)));
                r360_currentGlyph.setBaseAnchor("trailing", r313_RightSB, 0);
                return void 0;
            });
        };
        var r313_ZCursiveShapeImpl = function (r365_top, r365_mode) {
            var _r365_t0, _r365_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
                var r367___, _r367_t0, _r367_t1, _r367_t2;
                var r367_hookTerminalWidth = r313_AdviceStroke(3.5);
                var r367_xDiagWidth = 1 * r313_Stroke;
                var r367_yFootHeight = Math.max(0.15 * r365_top, r313_Stroke * 0.625) + 0.7 * r313_Stroke;
                var r367_kFoot = 1 + r313_HalfStroke / r367_yFootHeight;
                var r367_yHookDepth = r313_Hook + r313_QuarterStroke;
                var r367_yHookStraightDepth = Math.min(r367_yHookDepth - r313_Stroke * 1.1, r367_yHookDepth / 3 - r313_QuarterStroke);
                var r367_xHookDepth = Math.max(0.25 * (r313_RightSB - r313_SB), r367_hookTerminalWidth * 1.5);
                var r367_xMockTailDepth = Math.max(0.375 * (r313_RightSB - r313_SB), r367_hookTerminalWidth * 1.375);
                var r367_kTop = 0.625;
                var r367_kBot = 0.625;
                var r367_yTailDepth = r313_Hook * 0.5;
                r367_currentGlyph.include(r313_tagged("strokeTop", r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r313_SB, 0), r313_corner(-r313_Width, 0), r313_corner(-r313_Width, 2 * r365_top), r313_corner(r313_RightSB - r367_xDiagWidth + r313_TINY, 2 * r365_top), r313_corner(r313_RightSB - r367_xDiagWidth + r313_TINY, r365_top - r367_yFootHeight)), r313_dispiro(r313_flat(r313_SB + r313_OX, r365_top - r367_yHookDepth, r313_widths.rhs.heading(r367_hookTerminalWidth, r313_Upward)), r313_curl(r313_SB + r313_OX, r365_top - r367_yHookDepth + r367_yHookStraightDepth, r313_heading(r313_Upward)), r313_arcvh(), r313_g2.right.mid(r313_SB + r367_xHookDepth, r365_top - r313_O, r313_widths.rhs.heading(r313_Stroke, r313_Rightward)), r313_flat(r1_mix(r313_SB + r367_xMockTailDepth, r313_RightSB, r367_kTop), r365_top - r367_kTop * r367_yTailDepth), r313_curl(r313_RightSB, r365_top - 1 * r367_yTailDepth)))));
                r367_currentGlyph.include(r313_tagged("strokeMiddle", r313_ExtLineRhsToLhs(r313_RightSB, r365_top - r367_yFootHeight, r313_SB, r365_mode === r313_xn$MODEZSWASH$5sIl ? 0 : r367_yFootHeight, r313_VSwToH(r313_Stroke))));
                r367_currentGlyph.include(r313_VBar.r(r313_RightSB, r365_top, r365_top - r367_yFootHeight, r313_VSwToH(r367_xDiagWidth)));
                if (r365_mode !== r313_xn$MODEZSWASH$5sIl) r367_currentGlyph.include(r313_VBar.l(r313_SB, 0, r367_yFootHeight, r313_VSwToH(r367_xDiagWidth)));
                r367_currentGlyph.include(r313_tagged("strokeBottom", (_r367_t0 = r365_mode, _r367_t0 === r313_xn$MODEZDESC$5sIl ? r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r313_SB + r367_xDiagWidth, r367_yFootHeight), r313_corner(r313_SB + r367_xDiagWidth, -r365_top), r313_corner(2 * r313_Width, -r365_top), r313_corner(2 * r313_Width, +r365_top), r313_corner(r313_RightSB, r365_top)), r313_union(r313_VBar.r(r313_RightSB, 0, r367_yHookDepth, r367_hookTerminalWidth), r313_dispiro(r313_flat(r313_RightSB, r313_O, r313_widths.rhs.heading(r313_Stroke, r313_Leftward)), r313_g2(r313_RightSB - r367_xHookDepth, r313_O, r313_widths.rhs.heading(r313_Stroke, r313_Leftward)), r313_flat(r1_mix(r313_RightSB - r367_xHookDepth, r313_SB, r367_kBot), r367_kBot * r367_yTailDepth), r313_curl(r313_SB, 1 * r367_yTailDepth)))) : _r367_t0 === r313_xn$MODEZHOOK$5sIl || _r367_t0 === r313_xn$MODEZSWASH$5sIl ? r313_xn$noshape$3cah() : (r367___ = _r367_t0, r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r313_SB + r367_xDiagWidth - r313_TINY, r367_yFootHeight), r313_corner(r313_SB + r367_xDiagWidth - r313_TINY, -r365_top), r313_corner(2 * r313_Width, -r365_top), r313_corner(2 * r313_Width, +r365_top), r313_corner(r313_RightSB, r365_top)), r313_dispiro(r313_flat(r313_RightSB - r313_OX, r367_yHookDepth, r313_widths.rhs.heading(r367_hookTerminalWidth, r313_Downward)), r313_curl(r313_RightSB - r313_OX, r367_yHookDepth - r367_yHookStraightDepth, r313_heading(r313_Downward)), r313_arcvh(), r313_g2.left.mid(r313_RightSB - r367_xHookDepth, r313_O, r313_widths.rhs.heading(r313_Stroke, r313_Leftward)), r313_flat(r1_mix(r313_RightSB - r367_xHookDepth, r313_SB, r367_kBot), r367_kBot * r367_yTailDepth), r313_curl(r313_SB, 1 * r367_yTailDepth)))))));
                if (r365_mode !== r313_xn$MODEZDESC$5sIl) r367_currentGlyph.setBaseAnchor("trailing", r313_RightSB - 0.55 * r367_xHookDepth, 0);
                return void 0;
            });
        };
        var r313_ZCursiveShape = function (r374_mode) {
            var _r374_t0, _r374_t1;
            return r313_ZCursiveShapeImpl(r313_CAP, r374_mode);
        };
        var r313_SmallZCursiveShape = function (r375_mode) {
            var _r375_t0, _r375_t1;
            return r313_ZCursiveShapeImpl(r313_XH, r375_mode);
        };
        var r313_NoBottomStrokeMask = function (r376_top) {
            var _r376_t0, _r376_t1;
            return r313_xn$noshape$3cah();
        };
        var r313_CurlyBottomStrokeMask = function (r377_top) {
            var _r377_t0, _r377_t1;
            return r313_xn$spirooutline$1aao(r313_corner(0, 0), r313_corner(r313_SB, 0), r313_corner(r313_SB + r313_Stroke, r313_Stroke), r313_corner(0, r313_Stroke));
        };
        var r313_DTailBottomStroke = function () {
            var _r378_t0, _r378_t1;
            return r313_dispiro(r313_widths.lhs(), r313_flat(r313_SB, 0, r313_heading(r313_Rightward)), r313_curl(r313_RightSB - r313_HookX, 0), r313_archv(), r313_straight.down.end(r313_RightSB, -r313_Hook, r313_widths.heading(0, r313_Stroke, r313_Downward)));
        };
        var r313_SwashBottomStroke = function () {
            var _r379_t0, _r379_t1;
            return r313_dispiro(r313_widths.lhs(), r313_g4(r313_SB, 0), r313_alsoThru(0.36, 0.6, r313_important), r313_flat(r313_RightSB - 1, r313_Descender), r313_curl(r313_RightSB, r313_Descender));
        };
        var r313_ZemlyaBottomStroke = function () {
            var _r380_t0, _r380_t1;
            var r380_fine = r313_AdviceStroke(4);
            var r380_hx = Math.max(0.5 * r313_HookX, r313_HSwToV(1.25 * r380_fine)) + r313_HSwToV(0.125 * r380_fine);
            return r313_dispiro(r313_widths.lhs(), r313_flat(r313_SB, 0, r313_heading(r313_Rightward)), r313_curl(r313_RightSB - r380_hx, 0), r313_archv(), r313_g4.down.mid(r313_RightSB - r313_O - r313_HSwToV(r380_fine), r1_mix(r313_Descender + r380_fine, 0, 0.5), r313_widths.lhs.heading(r380_fine, {
                "x": r313_HVContrast,
                "y": (r313_Stroke - r380_fine) / r380_fine
            })), r313_arcvh(), r313_g2.left.mid(r313_RightSB - r380_hx, r313_Descender + r380_fine + r313_O), r313_alsoThru(0.5, 0.5, r313_widths.center(r380_fine)), r313_g2.left.mid(r313_SB + r380_hx, r1_mix(r313_Descender, 0, 0.75) - r380_fine, r313_widths.rhs(r380_fine)), r313_archv(), r313_g4.down.end(r313_SB + r313_O + r313_HSwToV(r380_fine), r313_Descender, r313_heading(r313_Downward)));
        };
        var r313_ZemlyaBottomStrokeCursive = function () {
            var _r381_t0, _r381_t1;
            var r381_fine = r313_AdviceStroke(4);
            var r381_hx = Math.max(0.5 * r313_HookX, r313_HSwToV(1.25 * r381_fine)) + r313_HSwToV(0.125 * r381_fine);
            return r313_dispiro(r313_flat(r313_RightSB - r313_HSwToV(r381_fine), r313_HalfStroke, r313_widths.lhs.heading(r381_fine, r313_Downward)), r313_curl(r313_RightSB - r313_HSwToV(r381_fine), r1_mix(r313_Descender + r381_fine, 0, 0.5), r313_widths.lhs.heading(r381_fine, r313_Downward)), r313_arcvh(), r313_g2.left.mid(r313_RightSB - r381_hx, r313_Descender + r381_fine + r313_O), r313_alsoThru(0.5, 0.5, r313_widths.center(r381_fine)), r313_g2.left.mid(r313_SB + r381_hx, r1_mix(r313_Descender, 0, 0.75) - r381_fine, r313_widths.rhs(r381_fine)), r313_archv(), r313_g4.down.end(r313_SB + r313_O + r313_HSwToV(r381_fine), r313_Descender, r313_heading(r313_Downward)));
        };
        var r313_ZConfig = r1_SuffixCfg.weave({
            "straight": [r313_ZBaseShape, r313_SmallZBaseShape, r313_NoBottomStrokeMask],
            "curly": [r313_ZCurlyShape, r313_SmallZCurlyShape, r313_CurlyBottomStrokeMask],
            "cursive": [r313_ZCursiveShape, r313_SmallZCursiveShape, r313_NoBottomStrokeMask]
        }, {
            "": [r313_ZSerifless],
            "serifless": [r313_ZSerifless],
            "serifed": [r313_ZStdSerifs],
            "bottomSerifed": [r313_ZMotionSerifsB],
            "topSerifed": [r313_ZMotionSerifsT]
        }, {
            "": [null],
            "withCrossBar": [r313_DBarOver],
            "withHorizontalCrossBar": [r313_HBar.mOver]
        });
        var _r313_t11 = _r1_t2(r313_ZConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_capital = _r313_t13[1][0][0];
            r313_small = _r313_t13[1][0][1];
            r313_bsMask = _r313_t13[1][0][2];
            _r313_t13[1][0];
            r313_serifs = _r313_t13[1][1][0];
            _r313_t13[1][1];
            r313_slash = _r313_t13[1][2][0];
            _r313_t13[1][2];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("Z." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                    var _r389_t0, _r389_t1;
                    r389_currentGlyph.include(r313_MarkSet.capital());
                    r389_currentGlyph.include(r313_capital(r313_xn$MODEZ$5sIl));
                    if (r313_serifs) r389_currentGlyph.include(r313_serifs(r313_CAP));
                    if (r313_slash) r389_currentGlyph.include(r313_slash(r313_CAP));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("Z/descBase." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                    var _r396_t0, _r396_t1;
                    r396_currentGlyph.include(r313_MarkSet.capital());
                    r396_currentGlyph.include(r313_capital(r313_xn$MODEZDESC$5sIl));
                    if (r313_serifs) r396_currentGlyph.include(r313_serifs(r313_CAP));
                    if (r313_slash) r396_currentGlyph.include(r313_slash(r313_CAP));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ZHookBottom." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
                    var _r403_t0, _r403_t1;
                    r403_currentGlyph.include(r313_MarkSet.capDesc());
                    r403_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_CAP / 2);
                    r403_currentGlyph.include(r313_capital(r313_xn$MODEZHOOK$5sIl));
                    if (r313_serifs) r403_currentGlyph.include(r313_serifs(r313_CAP));
                    if (r313_slash) r403_currentGlyph.include(r313_slash(r313_CAP));
                    r403_currentGlyph.ejectTagged("serifRB");
                    r403_currentGlyph.include(r313_difference(r313_DTailBottomStroke(), r313_bsMask(r313_CAP)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Zemlya." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
                    var _r413_t0, _r413_t1;
                    r413_currentGlyph.include(r313_MarkSet.capital());
                    r413_currentGlyph.include(r313_ExtendBelowBaseAnchors(r313_Descender));
                    if (r313_capital === r313_ZCursiveShape) {
                        r413_currentGlyph.include(r313_capital(r313_xn$MODEZDESC$5sIl));
                        if (r313_serifs) r413_currentGlyph.include(r313_serifs(r313_CAP));
                        if (r313_slash) r413_currentGlyph.include(r313_slash(r313_CAP));
                        r413_currentGlyph.include(r313_ZemlyaBottomStrokeCursive());
                    } else {
                        r413_currentGlyph.include(r313_capital(r313_xn$MODEZHOOK$5sIl));
                        if (r313_serifs) r413_currentGlyph.include(r313_serifs(r313_CAP));
                        if (r313_slash) r413_currentGlyph.include(r313_slash(r313_CAP));
                        r413_currentGlyph.ejectTagged("serifRB");
                        r413_currentGlyph.include(r313_difference(r313_ZemlyaBottomStroke(), r313_bsMask(r313_CAP)));
                    }
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ZSwash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
                    var _r427_t0, _r427_t1;
                    r427_currentGlyph.include(r313_MarkSet.capDesc());
                    r427_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_CAP / 2);
                    r427_currentGlyph.include(r313_capital(r313_xn$MODEZSWASH$5sIl));
                    if (r313_serifs) r427_currentGlyph.include(r313_serifs(r313_CAP));
                    if (r313_slash) r427_currentGlyph.include(r313_slash(r313_CAP));
                    r427_currentGlyph.ejectTagged("serifRB");
                    r427_currentGlyph.include(r313_difference(r313_SwashBottomStroke(), r313_bsMask(r313_CAP)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("z." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                    var _r437_t0, _r437_t1;
                    r437_currentGlyph.include(r313_MarkSet.e());
                    r437_currentGlyph.include(r313_small(r313_xn$MODEZ$5sIl));
                    if (r313_serifs) r437_currentGlyph.include(r313_serifs(r313_XH));
                    if (r313_slash) r437_currentGlyph.include(r313_slash(r313_XH));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("z/descBase." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                    var _r444_t0, _r444_t1;
                    r444_currentGlyph.include(r313_MarkSet.e());
                    r444_currentGlyph.include(r313_small(r313_xn$MODEZDESC$5sIl));
                    if (r313_serifs) r444_currentGlyph.include(r313_serifs(r313_XH));
                    if (r313_slash) r444_currentGlyph.include(r313_slash(r313_XH));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("zHookBottom." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                    var _r451_t0, _r451_t1;
                    r451_currentGlyph.include(r313_MarkSet.p());
                    r451_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_XH / 2);
                    r451_currentGlyph.include(r313_small(r313_xn$MODEZHOOK$5sIl));
                    if (r313_serifs) r451_currentGlyph.include(r313_serifs(r313_XH));
                    if (r313_slash) r451_currentGlyph.include(r313_slash(r313_XH));
                    r451_currentGlyph.ejectTagged("serifRB");
                    r451_currentGlyph.include(r313_difference(r313_DTailBottomStroke(), r313_bsMask(r313_XH)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zemlya." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                    var _r461_t0, _r461_t1;
                    r461_currentGlyph.include(r313_MarkSet.e());
                    r461_currentGlyph.include(r313_ExtendBelowBaseAnchors(r313_Descender));
                    if (r313_small === r313_SmallZCursiveShape) {
                        r461_currentGlyph.include(r313_small(r313_xn$MODEZDESC$5sIl));
                        if (r313_serifs) r461_currentGlyph.include(r313_serifs(r313_XH));
                        if (r313_slash) r461_currentGlyph.include(r313_slash(r313_XH));
                        r461_currentGlyph.include(r313_ZemlyaBottomStrokeCursive());
                    } else {
                        r461_currentGlyph.include(r313_small(r313_xn$MODEZHOOK$5sIl));
                        if (r313_serifs) r461_currentGlyph.include(r313_serifs(r313_XH));
                        if (r313_slash) r461_currentGlyph.include(r313_slash(r313_XH));
                        r461_currentGlyph.ejectTagged("serifRB");
                        r461_currentGlyph.include(r313_difference(r313_ZemlyaBottomStroke(), r313_bsMask(r313_XH)));
                    }
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("zSwash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r475_currentGlyph) {
                    var _r475_t0, _r475_t1;
                    r475_currentGlyph.include(r313_MarkSet.p());
                    r475_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_XH / 2);
                    r475_currentGlyph.include(r313_small(r313_xn$MODEZSWASH$5sIl));
                    if (r313_serifs) r475_currentGlyph.include(r313_serifs(r313_XH));
                    if (r313_slash) r475_currentGlyph.include(r313_slash(r313_XH));
                    r475_currentGlyph.ejectTagged("serifRB");
                    r475_currentGlyph.include(r313_difference(r313_SwashBottomStroke(), r313_bsMask(r313_XH)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("zCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
                    var _r485_t0, _r485_t1;
                    r485_currentGlyph.include(r313_MarkSet.e());
                    r485_currentGlyph.include(r313_small(r313_xn$MODEZHOOK$5sIl));
                    if (r313_serifs) r485_currentGlyph.include(r313_serifs(r313_XH));
                    if (r313_slash) r485_currentGlyph.include(r313_slash(r313_XH));
                    r485_currentGlyph.ejectTagged("serifRB");
                    var r485_fine = r313_AdviceStroke2(5, 4, r313_XH);
                    var r485_rinner = Math.max(r313_XH * 0.04, r485_fine * 0.1);
                    var r485_x2 = r1_mix(r313_SB + r313_Stroke, r313_RightSB, 0.3);
                    var r485_x1 = r1_mix(r485_x2, r313_RightSB - r485_fine - r485_rinner * 1.5, 0.45);
                    var r485_y2 = r313_XH * -0.2;
                    var r485_m1 = r313_RightSB - r485_fine / 2 - r485_rinner * 1.5 + r313_O;
                    r485_currentGlyph.include(r313_difference(r313_HCurlyTail(r485_fine, r313_Stroke, r485_rinner, r313_SB, r485_m1, r313_RightSB + r485_fine / 2, r485_x1, r485_x2, r485_y2), r313_bsMask(r313_XH)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("Z", "Z");
        r313_xn$linkreducedvariant$5sIl8("Z/sansSerif", "Z", r1_MathSansSerif);
        r313_xn$linkreducedvariant$5sIl8("Z/reduced", "Z");
        r313_xn$linkreducedvariant$5sIl8("Z/reduced/sansSerif", "Z");
        r313_xn$selectvariant$7Hrq("Z/descBase", new r313_xn$NamedParameterPair$2Lrc9b("follow", "Z"));
        r313_xn$selectvariant$7Hrq("smcpZ", 7458, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "z"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "Z"));
        r313_xn$selectvariant$7Hrq("z", "z");
        r313_xn$linkreducedvariant$5sIl8("z/sansSerif", "z", r1_MathSansSerif);
        r313_xn$linkreducedvariant$5sIl8("z/reduced", "z");
        r313_xn$selectvariant$7Hrq("z/descBase", new r313_xn$NamedParameterPair$2Lrc9b("follow", "z"));
        r313_xn$selectvariant$7Hrq("ZHookBottom", 548);
        r313_xn$selectvariant$7Hrq("zHookBottom", 549);
        r313_xn$selectvariant$7Hrq("ZSwash", 11391, new r313_xn$NamedParameterPair$2Lrc9b("follow", "ZHookBottom"));
        r313_xn$selectvariant$7Hrq("zSwash", 576, new r313_xn$NamedParameterPair$2Lrc9b("follow", "zHookBottom"));
        r313_xn$selectvariant$7Hrq("zCurlyTail", 657, new r313_xn$NamedParameterPair$2Lrc9b("follow", "zHookBottom"));
        r313_xn$selectvariant$7Hrq("cyrl/Zemlya", 42560, new r313_xn$NamedParameterPair$2Lrc9b("follow", "ZHookBottom/reduced"));
        r313_xn$selectvariant$7Hrq("cyrl/zemlya", 42561, new r313_xn$NamedParameterPair$2Lrc9b("follow", "zHookBottom/reduced"));
        r313_xn$selectvariant$7Hrq("z/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "z"));
        r313_xn$selectvariant$7Hrq("z/descBase/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "z/descBase"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "z/phoneticRight"));
        r313_xn$selectvariant$7Hrq("zCurlyTail/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "zCurlyTail"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "zHookBottom/phoneticRight"));
        r313_xn$derivecomposites$7Hrq("ZDescender", 11371, "Z/descBase", r313_CyrDescender.r(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("zDescender", 11372, "z/descBase", r313_CyrDescender.r(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("ZPalatalHook", 42950, "Z/descBase", r313_PalatalHook.r(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("zPalatalHook", 7566, "z/descBase", r313_PalatalHook.r(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("zPalatalHook/phoneticRight", null, "z/descBase/phoneticRight", r313_PalatalHook.r(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("zRTail", 656, "z/descBase", r313_RetroflexHook.r(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("zRTail/phoneticRight", null, "z/descBase/phoneticRight", r313_RetroflexHook.r(r313_RightSB, 0));
        r313_alias("grek/Zeta", 918, "Z/reduced");
        r313_xn$aliasreducedvariant$1aao8("grek/Zeta/sansSerif", "grek/Zeta", "Z/reduced/sansSerif", r1_MathSansSerif);
        r313_CreateAccentedComposition("ZAcute", 377, "Z", "acuteAbove");
        r313_CreateAccentedComposition("zAcute", 378, "z", "acuteAbove");
        r313_CreateAccentedComposition("ZDot", 379, "Z", "dotAbove");
        r313_CreateAccentedComposition("zDot", 380, "z", "dotAbove");
        r313_CreateAccentedComposition("ZCaron", 381, "Z", "caronAbove", true);
        r313_CreateAccentedComposition("zCaron", 382, "z", "caronAbove", true);
        r313_alias("Z.PLK", null, "Z/reduced");
        r313_alias("z.PLK", null, "z/reduced");
        r313_CreateAccentedComposition("ZAcute.PLK", null, "Z/reduced", "kreskaAbove");
        r313_CreateAccentedComposition("zAcute.PLK", null, "z/reduced", "kreskaAbove");
        r313_CreateAccentedComposition("ZDot.PLK", null, "Z/reduced", "kropkaAbove");
        r313_CreateAccentedComposition("zDot.PLK", null, "z/reduced", "kropkaAbove");
        r313_CreateAccentedComposition("ZStroke", 437, "Z/reduced", "barOver");
        r313_CreateAccentedComposition("zStroke", 438, "z/reduced", "barOver");
        r313_CreateAccentedComposition("cyrl/Dzelo", 42562, "cyrl/Zemlya", "barOver");
        r313_CreateAccentedComposition("cyrl/dzelo", 42563, "cyrl/zemlya", "barOver");
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        var r313_BBZShape = function (r507_top) {
            var _r507_t0, _r507_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                var _r509_t0, _r509_t1;
                r509_currentGlyph.include(r313_HBar.t(r313_SB, r313_RightSB, r507_top, r313_BBS));
                r509_currentGlyph.include(r313_HBar.b(r313_SB, r313_RightSB, 0, r313_BBS));
                r509_currentGlyph.include(r313_intersection(r313_Rect(r507_top, 0, r313_SB, r313_RightSB), r313_union(r313_ExtLineCenter(r313_SB, 0 + r313_BBS / 2, r313_RightSB - r313_BBD, r507_top - r313_BBS / 2, r313_BBS), r313_ExtLineCenter(r313_SB + r313_BBD, 0 + r313_BBS / 2, r313_RightSB, r507_top - r313_BBS / 2, r313_BBS))));
                r509_currentGlyph.include(r313_intersection(r313_union(r313_VBar.r(r313_RightSB, r507_top - r313_BBS * 2, r507_top, r313_BBS), r313_VBar.l(r313_SB, 0, 0 + r313_BBS * 2, r313_BBS)), r313_xn$spirooutline$1aao(r313_corner(r313_SB, 0 + r313_BBS / 2), r313_corner(r313_RightSB - r313_BBD, r507_top - r313_BBS / 2), r313_corner(r313_RightSB, r507_top - r313_BBS / 2), r313_corner(r313_SB + r313_BBD, 0 + r313_BBS / 2))));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/Z", 8484, new r313_xn$Capture$2Lrc8.GlyphProc(function (r516_currentGlyph) {
            var _r516_t0, _r516_t1;
            r516_currentGlyph.include(r313_MarkSet.capital(), true, true);
            r516_currentGlyph.include(r313_BBZShape(r313_CAP));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/z", 120171, new r313_xn$Capture$2Lrc8.GlyphProc(function (r521_currentGlyph) {
            var _r521_t0, _r521_t1;
            r521_currentGlyph.include(r313_MarkSet.e(), true, true);
            r521_currentGlyph.include(r313_BBZShape(r313_XH));
            return void 0;
        }));
    });
    return void 0;
});


