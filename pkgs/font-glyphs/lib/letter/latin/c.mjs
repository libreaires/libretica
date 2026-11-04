"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r681_t) {
    var r681_n, r681_i, r681_a, _r681_t3, _r681_t4, _r681_t5, _r681_t6, _r681_t7, _r681_t8, _r681_t9, _r681_t10, _r681_t11, _r681_t12, _r681_t13, _r681_t14, _r681_t15, _r681_t16, _r681_t17, _r681_t18, _r681_t19, _r681_t20, _r681_t21, _r681_t22, _r681_t23, _r681_t24, _r681_t25, _r681_t26;
    var _r681_t0 = function () {
        _r681_t7 = function (_r681_t8) {
            _r681_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r681_t8
            };
        };
        _r681_t9 = r681_t instanceof Array;
        if (_r681_t9) {
            _r681_t10 = r681_n = r681_t.length;
            _r681_t11 = r681_i = 0;
            _r681_t12 = function (_r681_t14) {
                return _r681_t7(_r681_t14);
            };
            _r681_t13 = function (_r681_t15) {
                _r681_t16 = r681_i < r681_n;
                if (_r681_t16) {
                    _r681_t0 = function (_r681_t17) {
                        return _r681_t13(r681_i = r681_i + 1);
                    };
                    return {
                        "value": [r681_i, r681_t[r681_i]],
                        "done": false
                    };
                } else return _r681_t12(_r681_t15);
            };
            return _r681_t13();
        } else {
            _r681_t18 = r681_a = Object.keys(r681_t);
            _r681_t19 = r681_n = r681_a.length;
            _r681_t20 = r681_i = 0;
            _r681_t21 = function (_r681_t23) {
                return _r681_t7(_r681_t23);
            };
            _r681_t22 = function (_r681_t24) {
                _r681_t25 = r681_i < r681_n;
                if (_r681_t25) {
                    _r681_t0 = function (_r681_t26) {
                        return _r681_t22(r681_i = r681_i + 1);
                    };
                    return {
                        "value": [r681_a[r681_i], r681_t[r681_a[r681_i]]],
                        "done": false
                    };
                } else return _r681_t21(_r681_t24);
            };
            return _r681_t22();
        }
    };
    var _r681_t1 = function (x) {
        try {
            return _r681_t0(x);
        } catch (ex) {
            return _r681_t2(ex);
        }
    };
    var _r681_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r681_t3 = this; else {
        _r681_t4 = function () {
            void 0;
        };
        _r681_t4.prototype = _r1_t10.prototype;
        _r681_t3 = new _r681_t4();
    }
    _r681_t3[Symbol.iterator] = function () {
        return _r681_t3;
    };
    _r681_t3.next = _r681_t1;
    _r681_t3.throw = function (x) {
        return _r681_t2(x);
    };
    return _r681_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-C", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_styTop, r313_styBot, r313_sl, r313_fillType, r313_bMask, r313_tMask, r313_bot, r313_top, r313_selector, _r313_t19, _r313_t22, _r313_t23, _r313_t24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_HalfUPM = _r313_t1.HalfUPM;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_AccentClearance = _r313_t1.AccentClearance;
        var r313_AccentHeight = _r313_t1.AccentHeight;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_xn$VERYFAR$5sIl = _r313_t1["VERY-FAR"];
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
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
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_Rect = _r313_t5.Rect;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var r313_PointingTo = _r313_t5.PointingTo;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markMiddle = _r313_t7.markMiddle;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendAboveBaseAnchors = _r313_t8.ExtendAboveBaseAnchors;
        var r313_ExtendBelowBaseAnchors = _r313_t8.ExtendBelowBaseAnchors;
        var r313_LeaningAnchor = _r313_t8.LeaningAnchor;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t9.CreateAccentedComposition;
        var r313_CreateDependentComposite = _r313_t9.CreateDependentComposite;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t10.EFVJutLength;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t11.CurlyTail;
        var r313_SerifedArcStart = _r313_t11.SerifedArcStart;
        var r313_SerifedArcEnd = _r313_t11.SerifedArcEnd;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_InwardSlabArcStart = _r313_t12.InwardSlabArcStart;
        var r313_InwardSlabArcEnd = _r313_t12.InwardSlabArcEnd;
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_ArcStartSerif = _r313_t13.ArcStartSerif;
        var r313_ArcEndSerif = _r313_t13.ArcEndSerif;
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t14.LetterBarOverlay;
        var r313_PalatalHook = _r313_t14.PalatalHook;
        var r313_RetroflexHook = _r313_t14.RetroflexHook;
        var r313_TopHook = _r313_t14.TopHook;
        var _r313_t15 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_ArcStartSerifWidth = _r313_t15.ArcStartSerifWidth;
        var r313_ArcStartSerifDepth = _r313_t15.ArcStartSerifDepth;
        var _r313_t16 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t16.BBS;
        var r313_BBD = _r313_t16.BBD;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABCLASSICAL$5sIl = 1;
        var r313_xn$SLABINWARD$5sIl = 2;
        var r313_xn$FLATCONNECTION$5sIl = 3;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r327_t0, _r327_t1;
            return {
                "CShapeT": r313_CShapeT
            };
        });
        var r313_CShapeT = function (r328_sink, r328_offset, r328_df, r328_st, r328_sb, r328_top, r328_bot, r328_ada, r328_adb, r328_hook, r328_sw, r328_ob, r328_ox, r328_oy) {
            var r328___, _r328_t0, _r328_t1, _r328_t2, _r328_t3;
            return r328_sink(r313_widths.lhs(r328_sw), (_r328_t0 = r328_st, _r328_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.RtlLhs(r328_df.rightSB - r328_offset, r328_top, r328_sw, r1_fallback(r328_hook, r313_Hook), r328_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_oy)) : _r328_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.RtlLhs(r328_df.rightSB - r328_offset, r328_top, r328_sw, r1_fallback(r328_hook, r313_Hook), r328_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_oy)) : _r328_t0 === r313_xn$FLATCONNECTION$5sIl ? [r313_flat(r328_df.width - r328_offset, r328_top - r328_offset), r313_curl(r313_Arch["adjust-x"].top(r328_df.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_sw)), r328_top - r328_offset), r313_archv()] : (r328___ = _r328_t0, [r313_g4(r328_df.rightSB - r328_offset, r328_top - r1_fallback(r328_hook, r313_Hook)), r313_HookStart(r328_top - r328_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_sw), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_oy))])), r313_flatside.ld(r328_df.leftSB + r328_offset, r328_bot, r328_top, r328_ada, r328_adb, r328_ox), (_r328_t1 = r328_sb, _r328_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.LtrLhs(r328_df.rightSB - r328_offset, r328_bot, r328_sw, r1_fallback(r328_hook, r313_Hook), r328_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_oy)) : _r328_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.LtrLhs(r328_df.rightSB - r328_offset, r328_bot, r328_sw, r1_fallback(r328_hook, r313_Hook), r328_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r328_oy)) : _r328_t1 === r313_xn$FLATCONNECTION$5sIl ? [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r328_df.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_sw)), r328_bot + r328_offset), r313_curl(r328_df.width - r328_offset, r328_bot + r328_offset)] : (r328___ = _r328_t1, [r313_HookEnd(r328_bot + r328_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_sw), new r313_xn$NamedParameterPair$2Lrc9b("o", r328_oy)), r313_g4(r328_df.rightSB - r328_offset, r328_bot + r1_fallback(r328_hook, r313_Hook))])));
        };
        var r313_RevCShapeT = function (r339_sink, r339_offset, r339_df, r339_st, r339_sb, r339_top, r339_bot, r339_ada, r339_adb, r339_hook, r339_sw, r339_ob, r339_ox, r339_oy) {
            var r339___, _r339_t0, _r339_t1, _r339_t2, _r339_t3;
            return r339_sink(r313_widths.rhs(r339_sw), (_r339_t0 = r339_st, _r339_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.LtrRhs(r339_df.leftSB + r339_offset, r339_top, r339_sw, r1_fallback(r339_hook, r313_Hook), r339_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r339_oy)) : _r339_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.LtrRhs(r339_df.leftSB + r339_offset, r339_top, r339_sw, r1_fallback(r339_hook, r313_Hook), r339_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r339_oy)) : _r339_t0 === r313_xn$FLATCONNECTION$5sIl ? [r313_flat(0 + r339_offset, r339_top - r339_offset), r313_curl(r313_Arch["adjust-x"].top(r339_df.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r339_sw)), r339_top - r339_offset), r313_archv()] : (r339___ = _r339_t0, [r313_g4(r339_df.leftSB + r339_offset, r339_top - r1_fallback(r339_hook, r313_Hook)), r313_HookStart(r339_top - r339_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r339_sw), new r313_xn$NamedParameterPair$2Lrc9b("o", r339_oy))])), r313_flatside.rd(r339_df.rightSB - r339_offset, r339_bot, r339_top, r339_ada, r339_adb, r339_ox), (_r339_t1 = r339_sb, _r339_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.RtlRhs(r339_df.leftSB + r339_offset, r339_bot, r339_sw, r1_fallback(r339_hook, r313_Hook), r339_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r339_oy)) : _r339_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.RtlRhs(r339_df.leftSB + r339_offset, r339_bot, r339_sw, r1_fallback(r339_hook, r313_Hook), r339_ob, new r313_xn$NamedParameterPair$2Lrc9b("o", r339_oy)) : _r339_t1 === r313_xn$FLATCONNECTION$5sIl ? [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r339_df.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r339_sw)), r339_bot + r339_offset), r313_curl(0 + r339_offset, r339_bot + r339_offset)] : (r339___ = _r339_t1, [r313_HookEnd(r339_bot + r339_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r339_sw), new r313_xn$NamedParameterPair$2Lrc9b("o", r339_oy)), r313_g4(r339_df.leftSB + r339_offset, r339_bot + r1_fallback(r339_hook, r313_Hook))])));
        };
        var r313_AutoStartSerifR = function (r350_df, r350_sty, r350_y, r350_hook, r350_sw) {
            var r350___, _r350_t1, _r350_t2;
            var _r350_t0 = r350_sty;
            return _r350_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcStartSerif.R(r350_df.rightSB, r350_y, r1_fallback(r350_sw, r313_Stroke), r1_fallback(r350_hook, r313_Hook)) : _r350_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcStartSerif.InwardR(r350_df.rightSB, r350_y, r1_fallback(r350_sw, r313_Stroke), r1_fallback(r350_hook, r313_Hook)) : (r350___ = _r350_t0, r313_xn$noshape$3cah());
        };
        var r313_AutoStartSerifL = function (r351_df, r351_sty, r351_y, r351_hook, r351_sw) {
            var r351___, _r351_t1, _r351_t2;
            var _r351_t0 = r351_sty;
            return _r351_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcStartSerif.L(r351_df.leftSB, r351_y, r1_fallback(r351_sw, r313_Stroke), r1_fallback(r351_hook, r313_Hook)) : _r351_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcStartSerif.InwardL(r351_df.leftSB, r351_y, r1_fallback(r351_sw, r313_Stroke), r1_fallback(r351_hook, r313_Hook)) : (r351___ = _r351_t0, r313_xn$noshape$3cah());
        };
        var r313_AutoEndSerifR = function (r352_df, r352_sty, r352_y, r352_hook, r352_sw) {
            var r352___, _r352_t1, _r352_t2;
            var _r352_t0 = r352_sty;
            return _r352_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.R(r352_df.rightSB, r352_y, r1_fallback(r352_sw, r313_Stroke), r1_fallback(r352_hook, r313_Hook)) : _r352_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardR(r352_df.rightSB, r352_y, r1_fallback(r352_sw, r313_Stroke), r1_fallback(r352_hook, r313_Hook)) : (r352___ = _r352_t0, r313_xn$noshape$3cah());
        };
        var r313_AutoEndSerifL = function (r353_df, r353_sty, r353_y, r353_hook, r353_sw) {
            var r353___, _r353_t1, _r353_t2;
            var _r353_t0 = r353_sty;
            return _r353_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.L(r353_df.leftSB, r353_y, r1_fallback(r353_sw, r313_Stroke), r1_fallback(r353_hook, r313_Hook)) : _r353_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardL(r353_df.leftSB, r353_y, r1_fallback(r353_sw, r313_Stroke), r1_fallback(r353_hook, r313_Hook)) : (r353___ = _r353_t0, r313_xn$noshape$3cah());
        };
        var r313_CCurlyTailShape = function (r354_df, r354_styTop, r354_top, r354_bot) {
            var _r354_t0, _r354_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                var r356___, _r356_t0, _r356_t1, _r356_t2;
                var r356_sw = r354_df.adviceStroke2(2, 3, r313_XH - 0);
                var r356_fine = r354_df.adviceStroke2(3, 3, r313_XH - 0);
                var r356_loopTop = r354_bot + 0.45 * (r313_XH - 0);
                r356_currentGlyph.include(r313_dispiro((_r356_t0 = r354_styTop, _r356_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.RtlLhs(r354_df.rightSB, r354_top, r356_sw, r313_Hook) : _r356_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.RtlLhs(r354_df.rightSB, r354_top, r356_sw, r313_Hook) : (r356___ = _r356_t0, [r313_g4(r354_df.rightSB, r354_top - r313_Hook, r313_widths.lhs(r356_sw)), r313_HookStart(r354_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r356_sw))])), r313_flatside.ld(r354_df.leftSB, r354_bot, r354_top, r313_SmallArchDepthA, r313_SmallArchDepthB), r313_CurlyTail.n(r356_fine, r354_bot, r354_df.rightSB, 0, r354_bot, new r313_xn$NamedParameterPair$2Lrc9b("yLoopTop", r356_loopTop))));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r361_t0, _r361_t1;
            return {
                "CLetterForm": r313_CLetterForm
            };
        });
        var r313_CLetterForm = function () {
            var _r362_t5, _r362_t7, _r362_tag8;
            var _r362_t6 = arguments;
            var r362_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r362_t6, 0);
            var _r362_t0 = [];
            var _r362_t1 = 0;
            while (_r362_t1 < r362_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r362_xn$flexarguments$2Lrc7uIe5[_r362_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r362_t0.push(r362_xn$flexarguments$2Lrc7uIe5[_r362_t1]);
                _r362_t1 = _r362_t1 + 1;
            }
            var _r362_t2 = r362_xn$flexarguments$2Lrc7uIe5;
            var _r362_t3 = _r362_t2.length;
            var _r362_t4 = 0;
            while (_r362_t4 < _r362_t3) {
                _r362_t1 = _r362_t2[_r362_t4];
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "df") r362_df = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "styTop") r362_styTop = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "styBot") r362_styBot = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "top") r362_top = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "bot") r362_bot = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "ada") r362_ada = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "adb") r362_adb = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "hook") r362_hook = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "sw") r362_sw = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "origBar") r362_origBar = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "ox") r362_ox = _r362_t1.right;
                if (_r362_t1 && _r362_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r362_t1.left === "oy") r362_oy = _r362_t1.right;
                _r362_t4 = _r362_t4 + 1;
            }
            var r362_df = r1_fallback(r362_df, _r362_t0[0]);
            var r362_styTop = r1_fallback(r362_styTop, _r362_t0[1]);
            var r362_styBot = r1_fallback(r362_styBot, _r362_t0[2]);
            var r362_top = r1_fallback(r362_top, _r362_t0[3]);
            var r362_bot = r1_fallback(r362_bot, _r362_t0[4]);
            var r362_ada = r1_fallback(r362_ada, _r362_t0[5], r313_ArchDepthA);
            var r362_adb = r1_fallback(r362_adb, _r362_t0[6], r313_ArchDepthB);
            var r362_hook = r1_fallback(r362_hook, _r362_t0[7], r313_Hook);
            var r362_sw = r1_fallback(r362_sw, _r362_t0[8], r313_Stroke);
            var r362_origBar = r1_fallback(r362_origBar, _r362_t0[9], void 0);
            var r362_ox = r1_fallback(r362_ox, _r362_t0[10], void 0);
            var r362_oy = r1_fallback(r362_oy, _r362_t0[11], void 0);
            return (function () {
                var r369_base, r369_topSerif, r369_botSerif, r369_revBase, r369_revTopSerif, r369_revBotSerif, r369_hookTop, r369_baseTopOnly, r369_descBase, r369_full, r369_revFull;
                var r369_exports = {};
                r369_exports.base = r369_base = function () {
                    var _r377_t0, _r377_t1;
                    return r313_CShapeT(r313_dispiro, 0, r362_df, r362_styTop, r362_styBot, r362_top, r362_bot, r362_ada, r362_adb, r362_hook, r362_sw, r362_origBar, r362_ox, r362_oy);
                };
                r369_exports.topSerif = r369_topSerif = function () {
                    var _r379_t0, _r379_t1;
                    return r313_AutoStartSerifR(r362_df, r362_styTop, r362_top, r362_hook, r362_sw);
                };
                r369_exports.botSerif = r369_botSerif = function () {
                    var _r381_t0, _r381_t1;
                    return r313_AutoEndSerifR(r362_df, r362_styBot, r362_bot, r362_hook, r362_sw);
                };
                r369_exports.revBase = r369_revBase = function () {
                    var _r383_t0, _r383_t1;
                    return r313_RevCShapeT(r313_dispiro, 0, r362_df, r362_styTop, r362_styBot, r362_top, r362_bot, r362_ada, r362_adb, r362_hook, r362_sw, r362_origBar, r362_ox, r362_oy);
                };
                r369_exports.revTopSerif = r369_revTopSerif = function () {
                    var _r385_t0, _r385_t1;
                    return r313_AutoStartSerifL(r362_df, r362_styTop, r362_top, r362_hook, r362_sw);
                };
                r369_exports.revBotSerif = r369_revBotSerif = function () {
                    var _r387_t0, _r387_t1;
                    return r313_AutoEndSerifL(r362_df, r362_styBot, r362_bot, r362_hook, r362_sw);
                };
                r369_exports.hookTop = r369_hookTop = function () {
                    var _r389_t0, _r389_t1;
                    return r313_TopHook.toRight.arcStart(r362_df.rightSB, r362_top, r362_hook, new r313_xn$NamedParameterPair$2Lrc9b("refSw", r362_sw));
                };
                r369_exports.baseTopOnly = r369_baseTopOnly = function () {
                    var _r392_t0, _r392_t1;
                    return r313_CShapeT(r313_dispiro, 0, r362_df, r362_styTop, r313_xn$SLABNONE$5sIl, r362_top, r362_bot, r362_ada, r362_adb, r362_hook, r362_sw, r362_origBar, r362_ox, r362_oy);
                };
                r369_exports.descBase = r369_descBase = function () {
                    var _r394_t0, _r394_t1;
                    return r313_CShapeT(r313_dispiro, 0, r362_df, r362_styTop, r362_styBot || r313_xn$SLABCLASSICAL$5sIl, r362_top, r362_bot, r362_ada, r362_adb, r362_hook, r362_sw, r362_origBar, r362_ox, r362_oy);
                };
                r369_exports.full = r369_full = function () {
                    var _r396_t0, _r396_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
                        var _r398_t0, _r398_t1;
                        r398_currentGlyph.include(r369_base(), true, true);
                        r398_currentGlyph.include(r369_topSerif());
                        r398_currentGlyph.include(r369_botSerif());
                        return void 0;
                    });
                };
                r369_exports.revFull = r369_revFull = function () {
                    var _r403_t0, _r403_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                        var _r405_t0, _r405_t1;
                        r405_currentGlyph.include(r369_revBase(), true, true);
                        r405_currentGlyph.include(r369_revTopSerif());
                        r405_currentGlyph.include(r369_revBotSerif());
                        return void 0;
                    });
                };
                return r369_exports;
            })();
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r410_t0, _r410_t1;
            return {
                "CConfig": r313_CConfig
            };
        });
        var r313_CConfig = {
            "serifless": [r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl],
            "bottomSerifed": [r313_xn$SLABNONE$5sIl, r313_xn$SLABCLASSICAL$5sIl],
            "bottomInwardSerifed": [r313_xn$SLABNONE$5sIl, r313_xn$SLABINWARD$5sIl],
            "unilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl, r313_xn$SLABNONE$5sIl],
            "bilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl, r313_xn$SLABCLASSICAL$5sIl],
            "unilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABNONE$5sIl],
            "bilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABINWARD$5sIl],
            "hybridSerifed1": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABCLASSICAL$5sIl]
        };
        var _r313_t17 = Object.entries(r313_CConfig)[Symbol.iterator]();
        var _r313_t18 = void 0;
        while (!(_r313_t18 = _r313_t17.next()).done) {
            _r313_t19 = _r313_t18.value;
            r313_suffix = _r313_t19[0];
            r313_styTop = _r313_t19[1][0];
            r313_styBot = _r313_t19[1][1];
            _r313_t19[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("C." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                    var _r416_t0, _r416_t1;
                    r416_currentGlyph.include(r313_MarkSet.capital());
                    var r416_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_CAP, 0);
                    r416_currentGlyph.include(r416_lf.full());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpC." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
                    var _r421_t0, _r421_t1;
                    r421_currentGlyph.include(r313_MarkSet.e());
                    var r421_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0);
                    r421_currentGlyph.include(r421_lf.full());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revC." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r426_currentGlyph) {
                    var _r426_t0, _r426_t1;
                    r426_currentGlyph.include(r313_MarkSet.capital());
                    var r426_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_CAP, 0);
                    r426_currentGlyph.include(r426_lf.revFull());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpRevC." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                    var _r431_t0, _r431_t1;
                    r431_currentGlyph.include(r313_MarkSet.e());
                    var r431_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0);
                    r431_currentGlyph.include(r431_lf.revFull());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("CHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                    var _r436_t0, _r436_t1;
                    r436_currentGlyph.include(r313_MarkSet.capital());
                    var r436_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_CAP, 0);
                    r436_currentGlyph.include(r313_union(r436_lf.base(), r436_lf.hookTop(), r436_lf.botSerif()));
                    r436_currentGlyph.include(r313_ExtendAboveBaseAnchors(r313_CAP + (r313_Ascender - r313_XH)));
                    r436_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r313_RightSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("currency/euroSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                    var _r443_t0, _r443_t1;
                    r443_currentGlyph.include(r313_xn$referglyph$1aao("C." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r443_currentGlyph.include(r313_union(r313_LetterBarOverlay.l(r313_SB, r1_mix(0, r313_CAP, 0.4)), r313_LetterBarOverlay.l(r313_SB, r1_mix(0, r313_CAP, 0.6))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("c." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
                    var _r448_t0, _r448_t1;
                    r448_currentGlyph.include(r313_MarkSet.e());
                    var r448_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r448_currentGlyph.include(r448_lf.full());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("c/centKernelStd." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
                    var _r455_t0, _r455_t1;
                    r455_currentGlyph.setWidth(0);
                    r455_currentGlyph.setMarkAnchor("cvDecompose", r313_Middle, r313_XH / 2);
                    var r455_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r455_currentGlyph.include(r455_lf.full());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("c/centKernelCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                    var _r463_t0, _r463_t1;
                    r463_currentGlyph.setWidth(0);
                    r463_currentGlyph.setMarkAnchor("cvDecompose", r313_Middle, r313_CAP / 2);
                    var r463_t = r313_CAP / 2 + r313_XH / 2;
                    var r463_b = r313_CAP / 2 - r313_XH / 2;
                    var r463_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r463_t, r463_b, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r463_currentGlyph.include(r463_lf.full());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revc." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
                    var _r471_t0, _r471_t1;
                    r471_currentGlyph.include(r313_MarkSet.e());
                    var r471_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r471_currentGlyph.include(r471_lf.revFull());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revcSlash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
                    var _r478_t0, _r478_t1;
                    r478_currentGlyph.include(r313_xn$referglyph$1aao("revc." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r478_fine = 0.5 * r313_OverlayStroke;
                    r478_currentGlyph.include(r313_dispiro(r313_widths.center(2 * r478_fine), r313_flat(r313_SB + r313_O + r478_fine, r1_mix(r313_XH, 0, 1.05)), r313_curl(r313_RightSB - r313_O - r478_fine, r1_mix(0, r313_XH, 1.05))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revcSideways." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
                    var _r483_t0, _r483_t1;
                    var r483_df = r313_DivFrame(r313_XH / r313_Width, 2, r313_XH * 0.1 / r313_SB);
                    r483_currentGlyph.include(r483_df.markSet.e());
                    var r483_p = r1_mix(1, 0.5 * (r313_Width / r313_HalfUPM), 0.5);
                    r483_currentGlyph.include(r313_PointingTo(r313_Width, r313_XH, r313_Width, 0, function () {
                        var _r486_t0, _r486_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r488_currentGlyph) {
                            var _r488_t0, _r488_t1;
                            var r488_lf = r313_CLetterForm(r483_df, r313_styTop, r313_styBot, r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook * r483_p));
                            r488_currentGlyph.include(r488_lf.revFull());
                            r488_currentGlyph.include(r313_Translate(0, r313_SB / 2));
                            return void 0;
                        });
                    }));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                    var _r494_t0, _r494_t1;
                    r494_currentGlyph.include(r313_MarkSet.e());
                    var r494_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r494_currentGlyph.include(r313_union(r494_lf.base(), r494_lf.hookTop(), r494_lf.botSerif()));
                    r494_currentGlyph.include(r313_ExtendAboveBaseAnchors(r313_Ascender));
                    r494_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r313_RightSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                    var _r503_t0, _r503_t1;
                    r503_currentGlyph.include(r313_MarkSet.e());
                    r503_currentGlyph.include(r313_union(r313_CCurlyTailShape(r313_DivFrame(1), r313_styTop, r313_XH, 0), r313_AutoStartSerifR(r313_DivFrame(1), r313_styTop, r313_XH)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cStretched." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r508_currentGlyph) {
                    var _r508_t0, _r508_t1;
                    r508_currentGlyph.include(r313_MarkSet.p());
                    var r508_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r508_currentGlyph.include(r508_lf.full());
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cStretchedCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                    var _r515_t0, _r515_t1;
                    r515_currentGlyph.include(r313_MarkSet.p());
                    r515_currentGlyph.include(r313_union(r313_CCurlyTailShape(r313_DivFrame(1), r313_styTop, r313_XH, r313_Descender), r313_AutoStartSerifR(r313_DivFrame(1), r313_styTop, r313_XH)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/esWide." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r520_currentGlyph) {
                    var _r520_t0, _r520_t1;
                    var r520_df = r520_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 3));
                    r520_currentGlyph.include(r520_df.markSet.e());
                    var r520_desc = -r313_LongVJut + r313_QuarterStroke;
                    r520_currentGlyph.include(r313_ExtendBelowBaseAnchors(r520_desc));
                    var r520_lf = r313_CLetterForm(r520_df, r313_styTop, r313_styBot, r313_XH, r520_desc, new r313_xn$NamedParameterPair$2Lrc9b("ada", r520_df.archDepthAOf(r313_SmallArchDepth, r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("adb", r520_df.archDepthBOf(r313_SmallArchDepth, r313_Stroke)));
                    r520_currentGlyph.include(r520_lf.full());
                    return void 0;
                }));
                var r413_CyrEShepe = function (r527_fCapital, r527_fMidSerif, r527_df, r527_top, r527_ada, r527_adb) {
                    var _r527_t0, _r527_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r529_currentGlyph) {
                        var r529_jutTop, r529_jutBot, r529_jutMid, r529_swVJut, _r529_t0, _r529_t1, _r529_t2;
                        var r529_sw = r527_df.adviceThinnerStroke2(2, 3, r527_top);
                        var r529_lf = r313_CLetterForm(r527_df, r313_styTop, r313_styBot, r527_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r527_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r527_adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r529_sw));
                        r529_currentGlyph.include(r529_lf.revFull());
                        var r529_xMidBarLeft = r527_fMidSerif && !r527_fCapital ? r527_df.middle : r1_mix(r527_df.leftSB, r527_df.rightSB, 0.35);
                        r529_currentGlyph.include(r313_HBar.m(r529_xMidBarLeft, r527_df.rightSB - r313_OX + r313_O, r527_top / 2, r529_sw));
                        if (r527_fMidSerif) {
                            _r529_t0 = r313_EFVJutLength(r527_top, 0, 0.5, r529_sw, r527_fCapital ? r313_Hook : void 0, r527_fCapital ? r313_Hook : void 0);
                            r529_jutTop = _r529_t0[0];
                            r529_jutBot = _r529_t0[1];
                            r529_jutMid = _r529_t0[2];
                            r529_swVJut = Math.min(r313_VJutStroke * (r529_sw / r313_Stroke), r313_VSwToH((r527_fCapital ? 0.8 : 0.625) * (r527_df.rightSB - r313_HSwToV(r529_sw) - (r527_fCapital ? r529_xMidBarLeft : r527_df.leftSB + r313_HSwToV(r529_sw)))));
                            r529_currentGlyph.include(r313_VSerif.ml(r529_xMidBarLeft - (r527_fCapital ? 0 : r313_HSwToV(0.5 * r529_swVJut)), r527_top / 2, r529_jutMid, r529_swVJut));
                        }
                        return void 0;
                    });
                };
                var r413_CyrYeShape = function (r536_fCapital, r536_fMidSerif, r536_df, r536_top, r536_ada, r536_adb) {
                    var _r536_t0, _r536_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r538_currentGlyph) {
                        var r538_jutTop, r538_jutBot, r538_jutMid, r538_swVJut, _r538_t0, _r538_t1, _r538_t2;
                        var r538_sw = r536_df.adviceThinnerStroke2(2, 3, r536_top);
                        var r538_lf = r313_CLetterForm(r536_df, r313_styTop, r313_styBot, r536_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r536_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r536_adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r538_sw));
                        r538_currentGlyph.include(r538_lf.full());
                        var r538_xMidBarRight = r536_fMidSerif && !r536_fCapital ? r536_df.middle : r1_mix(r536_df.rightSB, r536_df.leftSB, 0.35);
                        r538_currentGlyph.include(r313_HBar.m(r536_df.leftSB + r313_OX - r313_O, r538_xMidBarRight, r536_top / 2, r538_sw));
                        if (r536_fMidSerif) {
                            _r538_t0 = r313_EFVJutLength(r536_top, 0, 0.5, r538_sw, r536_fCapital ? r313_Hook : void 0, r536_fCapital ? r313_Hook : void 0);
                            r538_jutTop = _r538_t0[0];
                            r538_jutBot = _r538_t0[1];
                            r538_jutMid = _r538_t0[2];
                            r538_swVJut = Math.min(r313_VJutStroke * (r538_sw / r313_Stroke), r313_VSwToH((r536_fCapital ? 0.8 : 0.625) * ((r536_fCapital ? r538_xMidBarRight : r536_df.rightSB - r313_HSwToV(r538_sw)) - (r536_df.leftSB + r313_HSwToV(r538_sw)))));
                            r538_currentGlyph.include(r313_VSerif.mr(r538_xMidBarRight + (r536_fCapital ? 0 : r313_HSwToV(0.5 * r538_swVJut)), r536_top / 2, r538_jutMid, r538_swVJut));
                        }
                        return void 0;
                    });
                };
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/E." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r547_currentGlyph) {
                    var _r547_t0, _r547_t1;
                    r547_currentGlyph.include(r313_MarkSet.capital());
                    r547_currentGlyph.include(r413_CyrEShepe(true, false, r313_DivFrame(1), r313_CAP, r313_ArchDepthA, r313_ArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/E." + r313_suffix + "Capped", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                    var _r552_t0, _r552_t1;
                    r552_currentGlyph.include(r313_MarkSet.capital());
                    r552_currentGlyph.include(r413_CyrEShepe(true, true, r313_DivFrame(1), r313_CAP, r313_ArchDepthA, r313_ArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/e." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r557_currentGlyph) {
                    var _r557_t0, _r557_t1;
                    r557_currentGlyph.include(r313_MarkSet.e());
                    r557_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                    r557_currentGlyph.include(r413_CyrEShepe(false, false, r313_DivFrame(1), r313_XH, r313_SmallArchDepthA, r313_SmallArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/e." + r313_suffix + "Capped", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r563_currentGlyph) {
                    var _r563_t0, _r563_t1;
                    r563_currentGlyph.include(r313_MarkSet.e());
                    r563_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                    r563_currentGlyph.include(r413_CyrEShepe(false, true, r313_DivFrame(1), r313_XH, r313_SmallArchDepthA, r313_SmallArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YeUkrainian." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r569_currentGlyph) {
                    var _r569_t0, _r569_t1;
                    r569_currentGlyph.include(r313_MarkSet.capital());
                    r569_currentGlyph.include(r413_CyrYeShape(true, false, r313_DivFrame(1), r313_CAP, r313_ArchDepthA, r313_ArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YeUkrainian." + r313_suffix + "Capped", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r574_currentGlyph) {
                    var _r574_t0, _r574_t1;
                    r574_currentGlyph.include(r313_MarkSet.capital());
                    r574_currentGlyph.include(r413_CyrYeShape(true, true, r313_DivFrame(1), r313_CAP, r313_ArchDepthA, r313_ArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yeUkrainian." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r579_currentGlyph) {
                    var _r579_t0, _r579_t1;
                    r579_currentGlyph.include(r313_MarkSet.e());
                    r579_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                    r579_currentGlyph.include(r413_CyrYeShape(false, false, r313_DivFrame(1), r313_XH, r313_SmallArchDepthA, r313_SmallArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yeUkrainian." + r313_suffix + "Capped", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r585_currentGlyph) {
                    var _r585_t0, _r585_t1;
                    r585_currentGlyph.include(r313_MarkSet.e());
                    r585_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                    r585_currentGlyph.include(r413_CyrYeShape(false, true, r313_DivFrame(1), r313_XH, r313_SmallArchDepthA, r313_SmallArchDepthB));
                    return void 0;
                }));
                var r413_CyrKoppaShapeT = function (r589_base, r589_top) {
                    var _r589_t0, _r589_t1;
                    return r313_union(r313_VBar.r(r313_Middle + r313_HSwToV(r313_Stroke), r313_Descender, r313_HalfStroke), r313_difference(r589_base, r313_Rect(r589_top / 2, r313_Descender, r313_Middle + r313_HSwToV(r313_Stroke), r313_xn$VERYFAR$5sIl), r313_Rect(r313_XH / 2, r1_mix(r313_Stroke, r313_Hook, 0.5), r313_Middle, r313_xn$VERYFAR$5sIl)), r313_styTop && !r313_para.isItalic ? r313_HSerif.mb(r313_Middle + r313_HSwToV(r313_HalfStroke), r313_Descender, r313_MidJutCenter) : r313_xn$noshape$3cah());
                };
                if (!r313_styBot) r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Koppa." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r592_currentGlyph) {
                    var _r592_t0, _r592_t1;
                    r592_currentGlyph.include(r313_MarkSet.capDesc());
                    var r592_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_CAP, 0);
                    r592_currentGlyph.include(r413_CyrKoppaShapeT(r313_union(r592_lf.baseTopOnly(), r592_lf.topSerif()), r313_CAP));
                    return void 0;
                }));
                if (!r313_styBot) r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/koppa." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r597_currentGlyph) {
                    var _r597_t0, _r597_t1;
                    r597_currentGlyph.include(r313_MarkSet.p());
                    var r597_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r597_currentGlyph.include(r413_CyrKoppaShapeT(r313_union(r597_lf.baseTopOnly(), r597_lf.topSerif()), r313_XH));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("C/descBase." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r604_currentGlyph) {
                    var _r604_t0, _r604_t1;
                    r604_currentGlyph.include(r313_MarkSet.capital());
                    var r604_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_CAP, 0);
                    r604_currentGlyph.include(r313_union(r604_lf.descBase(), r604_lf.topSerif(), r313_VBar.r(r313_RightSB, 0, r313_ArcStartSerifDepth(r313_Hook), r313_ArcStartSerifWidth(r313_Stroke))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("c/descBase." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r609_currentGlyph) {
                    var _r609_t0, _r609_t1;
                    r609_currentGlyph.include(r313_MarkSet.e());
                    var r609_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB));
                    r609_currentGlyph.include(r313_union(r609_lf.descBase(), r609_lf.topSerif(), r313_VBar.r(r313_RightSB, 0, r313_ArcStartSerifDepth(r313_Hook), r313_ArcStartSerifWidth(r313_Stroke))));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("romanSixLateForm." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r616_currentGlyph) {
                    var r616_ink, r616_coInk, _r616_t0, _r616_t1;
                    r616_currentGlyph.include(r313_MarkSet.capDesc());
                    var r616_lf = r313_CLetterForm(r313_DivFrame(1), r313_styTop, r313_styBot, r313_CAP, 0);
                    r616_currentGlyph.include(r313_union(r616_lf.descBase(), r616_lf.topSerif(), r313_VBar.r(r313_RightSB, r313_Descender, r313_ArcStartSerifDepth(r313_Hook), r313_ArcStartSerifWidth(r313_Stroke))));
                    if (r313_styBot) {
                        r616_ink = r313_HSwToV(r313_ArcStartSerifWidth(r313_Stroke));
                        r616_coInk = r313_HSwToV(r313_Stroke - r313_ArcStartSerifWidth(r313_Stroke));
                        r616_currentGlyph.include(r313_union(r313_HSerif.rb(r313_RightSB - 0.5 * r616_ink, r313_Descender, r313_Jut - 0.5 * r616_coInk), r313_HSerif.lb(r313_RightSB - 0.5 * r616_ink, r313_Descender, r313_MidJutSide - 0.5 * r616_coInk)));
                    }
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("C", "C");
        r313_xn$linkreducedvariant$5sIl8("C/sansSerif", "C", r1_MathSansSerif);
        r313_alias("grek/SigmaLunate", 1017, "C");
        r313_xn$selectvariant$7Hrq("revC", 8579, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C"));
        r313_alias("grek/revSigmaLunate", 1021, "revC");
        r313_xn$selectvariant$7Hrq("CHookTop", 391);
        r313_xn$selectvariant$7Hrq("smcpC", 7428, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C"));
        r313_xn$selectvariant$7Hrq("currency/euroSign", 8364);
        r313_xn$selectvariant$7Hrq("c", "c");
        r313_xn$linkreducedvariant$5sIl8("c/sansSerif", "c", r1_MathSansSerif);
        r313_alias("grek/sigmaLunate", 1010, "c.serifless");
        r313_xn$selectvariant$7Hrq("revc", 8580, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c"));
        r313_alias("grek/revsigmaLunate", 891, "revc.serifless");
        r313_xn$selectvariant$7Hrq("c/centKernelStd", new r313_xn$NamedParameterPair$2Lrc9b("follow", "c"));
        r313_xn$selectvariant$7Hrq("c/centKernelCap", new r313_xn$NamedParameterPair$2Lrc9b("follow", "c"));
        r313_xn$selectvariant$7Hrq("cCurlyTail", 597);
        r313_xn$selectvariant$7Hrq("cHookTop", 392);
        r313_xn$selectvariant$7Hrq("cStretched", 663, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c"));
        r313_xn$selectvariant$7Hrq("cStretchedCurlyTail", 122639, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cCurlyTail"));
        r313_alias("cyrl/Es", 1057, "C");
        r313_alias("cyrl/es", 1089, "c");
        r313_xn$selectvariant$7Hrq("cyrl/esWide", 7299, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c"));
        r313_xn$selectvariant$7Hrq("cyrl/E", 1069);
        r313_xn$selectvariant$7Hrq("cyrl/e", 1101);
        r313_xn$selectvariant$7Hrq("cyrl/YeUkrainian", 1028);
        r313_xn$selectvariant$7Hrq("cyrl/yeUkrainian", 1108);
        r313_alias("latn/EpsilonLunate", 122732, "cyrl/YeUkrainian");
        r313_alias("latn/epsilonLunate", 122733, "cyrl/yeUkrainian");
        r313_xn$selectvariant$7Hrq("cyrl/Koppa", 1152, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C/topSerif"));
        r313_xn$selectvariant$7Hrq("cyrl/koppa", 1153, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/topSerif"));
        r313_xn$selectvariant$7Hrq("C/descBase");
        r313_xn$selectvariant$7Hrq("c/descBase");
        r313_xn$selectvariant$7Hrq("romanSixLateForm", 8581, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C/descBase"));
        r313_xn$selectvariant$7Hrq("OOpen", 390, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revC"));
        r313_xn$selectvariant$7Hrq("oOpen", 596, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revc"));
        r313_xn$selectvariant$7Hrq("smcpOOpen", 7440, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpRevC"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "OOpen"));
        r313_xn$selectvariant$7Hrq("oOpenSlash", 43839, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revcSlash"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "oOpen"));
        r313_xn$selectvariant$7Hrq("oOpenSideways", 7442, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revcSideways"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "oOpen"));
        r313_xn$selectvariant$7Hrq("oOpen/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revc"));
        r313_xn$derivecomposites$7Hrq("oOpenRetroflexHook", 7575, "oOpen/descBase", r313_RetroflexHook.l(r313_SB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise)));
        r313_xn$derivecomposites$7Hrq("CPalatalHook", 42948, "C/descBase", r313_PalatalHook.r(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise)));
        r313_xn$derivecomposites$7Hrq("cPalatalHook", 42900, "c/descBase", r313_PalatalHook.r(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise)));
        r313_xn$derivecomposites$7Hrq("cRTail", 122653, "c/descBase", r313_RetroflexHook.r(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise)));
        r313_xn$derivecomposites$7Hrq("grek/SigmaLunateDot", 1022, "grek/SigmaLunate", "innerDot");
        r313_xn$derivecomposites$7Hrq("grek/sigmaLunateDot", 892, "grek/sigmaLunate", "innerDotSmall");
        r313_xn$derivecomposites$7Hrq("grek/revSigmaLunateDot", 1023, "grek/revSigmaLunate", "innerDot");
        r313_xn$derivecomposites$7Hrq("grek/revsigmaLunateDot", 893, "grek/revsigmaLunate", "innerDotSmall");
        r313_xn$derivecomposites$7Hrq("revCDot", 42814, "revC", "innerDot");
        r313_xn$derivecomposites$7Hrq("revcDot", 42815, "revc", "innerDotSmall");
        r313_xn$derivecomposites$7Hrq("CBar", 42898, "C", r313_LetterBarOverlay.l.in(r313_SB, 0, r313_CAP));
        r313_xn$derivecomposites$7Hrq("cBar", 42899, "c", r313_LetterBarOverlay.l.in(r313_SB, 0, r313_XH));
        r313_xn$derivecomposites$7Hrq("oOpenBar", 122690, "oOpen", r313_LetterBarOverlay.r.in(r313_RightSB, 0, r313_XH));
        r313_xn$derivecomposites$7Hrq("CCedilla", 199, "C", "cedillaExtShapeBelowOArc");
        r313_xn$derivecomposites$7Hrq("cCedilla", 231, "c", "cedillaExtShapeBelowOArc");
        r313_xn$deriveglyphs$7Hrq("cyrl/The", 1194, "cyrl/Es", function (r644_src, r644_gr) {
            var _r644_t0, _r644_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r646_currentGlyph) {
                var _r646_t0, _r646_t1;
                r646_currentGlyph.include(r313_xn$referglyph$1aao(r644_src), r313_AS_BASE, r313_ALSO_METRICS);
                var r646_desc = 0 - r313_LongVJut + r313_QuarterStroke;
                r646_currentGlyph.include(r313_ExtendBelowBaseAnchors(r646_desc));
                r646_currentGlyph.include(r313_difference(r313_VBar.m(r313_Arch["adjust-x"].bot(r313_Middle), r646_desc, r313_O + r313_Stroke, r313_VJutStroke), r313_OShapeOutline.NoOvershoot(r313_CAP, 0, r313_SB, r313_RightSB, r313_Stroke, r313_ArchDepthA, r313_ArchDepthB)));
                return void 0;
            });
        });
        r313_xn$derivemultipartglyphs$7Hrq65("cyrl/The.BSH", null, ["cyrl/Es", "invCommaBelow"], function (r650_srcs, r650_gr) {
            var _r650_t0, _r650_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r652_currentGlyph) {
                var _r652_t1, _r652_t2;
                var _r652_t0 = r650_srcs;
                var r652_base = _r652_t0[0];
                var r652_mark = _r652_t0[1];
                r652_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r313_Arch["adjust-x"].bot(r313_Middle) - r313_markMiddle, 0 + r313_AccentClearance), r313_xn$referglyph$1aao(r652_mark)));
                r652_currentGlyph.include(r313_xn$referglyph$1aao(r652_base), r313_AS_BASE, r313_ALSO_METRICS);
                r652_currentGlyph.include(r313_ExtendBelowBaseAnchors(0 - r313_AccentHeight));
                return void 0;
            });
        });
        r313_alias("cyrl/The.CHU", null, "CCedilla");
        r313_xn$deriveglyphs$7Hrq("cyrl/the", 1195, "cyrl/es", function (r656_src, r656_gr) {
            var _r656_t0, _r656_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r658_currentGlyph) {
                var _r658_t0, _r658_t1;
                r658_currentGlyph.include(r313_xn$referglyph$1aao(r656_src), r313_AS_BASE, r313_ALSO_METRICS);
                var r658_desc = 0 - r313_LongVJut + r313_QuarterStroke;
                r658_currentGlyph.include(r313_ExtendBelowBaseAnchors(r658_desc));
                r658_currentGlyph.include(r313_difference(r313_VBar.m(r313_Arch["adjust-x"].bot(r313_Middle), r658_desc, r313_O + r313_Stroke, r313_VJutStroke), r313_OShapeOutline.NoOvershoot(r313_XH, 0, r313_SB, r313_RightSB, r313_Stroke, r313_SmallArchDepthA, r313_SmallArchDepthB)));
                return void 0;
            });
        });
        r313_xn$derivemultipartglyphs$7Hrq65("cyrl/the.BSH", null, ["cyrl/es", "invCommaBelow"], function (r662_srcs, r662_gr) {
            var _r662_t0, _r662_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r664_currentGlyph) {
                var _r664_t1, _r664_t2;
                var _r664_t0 = r662_srcs;
                var r664_base = _r664_t0[0];
                var r664_mark = _r664_t0[1];
                r664_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r313_Arch["adjust-x"].bot(r313_Middle) - r313_markMiddle, 0 + r313_AccentClearance), r313_xn$referglyph$1aao(r664_mark)));
                r664_currentGlyph.include(r313_xn$referglyph$1aao(r664_base), r313_AS_BASE, r313_ALSO_METRICS);
                r664_currentGlyph.include(r313_ExtendBelowBaseAnchors(0 - r313_AccentHeight));
                return void 0;
            });
        });
        r313_alias("cyrl/the.CHU", null, "cCedilla");
        r313_CreateAccentedComposition("CAcute", 262, "C", "acuteAbove");
        r313_CreateAccentedComposition("cAcute", 263, "c", "acuteAbove");
        r313_CreateAccentedComposition("CAcute.PLK", null, "C", "kreskaAbove");
        r313_CreateAccentedComposition("cAcute.PLK", null, "c", "kreskaAbove");
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/C", 8450, new r313_xn$Capture$2Lrc8.GlyphProc(function (r670_currentGlyph) {
            var _r670_t0, _r670_t1;
            r670_currentGlyph.include(r313_MarkSet.capital());
            r670_currentGlyph.include(r313_CShapeT(r313_dispiro, 0, r313_DivFrame(1), r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl, r313_CAP, 0, r313_ArchDepthA, r313_ArchDepthB, r313_Hook, r313_BBS));
            r670_currentGlyph.include(r313_intersection(r313_CShapeT(r313_xn$spirooutline$1aao, 0.1, r313_DivFrame(1), r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl, r313_CAP, 0, r313_ArchDepthA, r313_ArchDepthB, r313_Hook, r313_BBS), r313_VBar.l(r313_SB + r313_BBD, 0, r313_CAP, r313_BBS)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/c", 120148, new r313_xn$Capture$2Lrc8.GlyphProc(function (r676_currentGlyph) {
            var _r676_t0, _r676_t1;
            r676_currentGlyph.include(r313_MarkSet.capital());
            r676_currentGlyph.include(r313_CShapeT(r313_dispiro, 0, r313_DivFrame(1), r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl, r313_XH, 0, r313_SmallArchDepthA, r313_SmallArchDepthB, r313_Hook, r313_BBS));
            r676_currentGlyph.include(r313_intersection(r313_CShapeT(r313_xn$spirooutline$1aao, 0.1, r313_DivFrame(1), r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl, r313_XH, 0, r313_SmallArchDepthA, r313_SmallArchDepthB, r313_Hook, r313_BBS), r313_VBar.l(r313_SB + r313_BBD + r313_OX, 0, r313_CAP, r313_BBS)));
            return void 0;
        }));
        var r313_CentConfig = r1_SuffixCfg.weave({
            "": 0,
            "slanted": 0.08
        }, {
            "open": 0,
            "through": 1,
            "interrupted": 2
        }, {
            "": [0, r313_XH, r313_Descender / 2, r313_XH - r313_Descender / 2, "std"],
            "cap": [r313_CAP / 2 - r313_XH / 2, r313_CAP / 2 + r313_XH / 2, 0, r313_CAP, "cap"]
        });
        var _r313_t20 = _r1_t2(r313_CentConfig)[Symbol.iterator]();
        var _r313_t21 = void 0;
        while (!(_r313_t21 = _r313_t20.next()).done) {
            _r313_t22 = _r313_t21.value;
            r313_suffix = _r313_t22[0];
            r313_sl = _r313_t22[1][0];
            r313_fillType = _r313_t22[1][1];
            r313_bMask = _r313_t22[1][2][0];
            r313_tMask = _r313_t22[1][2][1];
            r313_bot = _r313_t22[1][2][2];
            r313_top = _r313_t22[1][2][3];
            r313_selector = _r313_t22[1][2][4];
            _r313_t22[1][2];
            _r313_t22[1];
            (function () {
                var r684_xBot = function (r685_df) {
                    var _r685_t0, _r685_t1;
                    return r1_mix(r685_df.leftSB, r685_df.rightSB, 0.5 - r313_sl);
                };
                var r684_xTop = function (r686_df) {
                    var _r686_t0, _r686_t1;
                    return r1_mix(r686_df.leftSB, r686_df.rightSB, 0.5 + r313_sl);
                };
                var r684_swBarThick = r313_AdviceStroke(3);
                var r684_swBarFine = r313_AdviceStroke(r313_StrokeWidthBlend(3, 5.5));
                var r684_FullBar = function (r687_df, r687_sw) {
                    var _r687_t0, _r687_t1;
                    return r313_dispiro(r313_flat(r684_xBot(r687_df), r313_bot, r313_widths.center.heading(r687_sw, r313_Downward)), r313_curl(r684_xTop(r687_df), r313_top, r313_widths.center.heading(r687_sw, r313_Downward)));
                };
                var r684_InterruptBar = function (r688_df) {
                    var _r688_t0, _r688_t1;
                    var r688_cofine = r313_AdviceStroke(4);
                    return r313_union(r313_dispiro(r313_flat(r684_xTop(r688_df), r313_top, r313_widths.center.heading(r688_cofine, r313_Downward)), r313_curl(r688_df.middle, r1_mix(r313_top, r313_bot, 0.5), r313_widths.center.heading(r684_swBarFine, r313_Downward))), r313_dispiro(r313_flat(r684_xBot(r688_df), r313_bot, r313_widths.center.heading(r688_cofine, r313_Upward)), r313_curl(r688_df.middle, r1_mix(r313_bot, r313_top, 0.5), r313_widths.center.heading(r684_swBarFine, r313_Upward))));
                };
                var r684_OutlineMask = function (r689_df) {
                    var _r689_t4, _r689_t5;
                    var _r689_t0 = r689_df.leftSB + r313_HalfStroke;
                    var _r689_t1 = r313_tMask - r313_HalfStroke;
                    var _r689_t2 = r689_df.rightSB - r313_HalfStroke;
                    var _r689_t3 = r313_bMask + r313_HalfStroke;
                    return r313_xn$spirooutline$1aao(r313_curl(_r689_t0, _r689_t1 - r313_SmallArchDepthA), r313_Arch.rhs(new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_Stroke), _r689_t1), r313_flat(_r689_t2, _r689_t1 - r313_SmallArchDepthB), r313_curl(_r689_t2, _r689_t3 + r313_SmallArchDepthA), r313_Arch.rhs(new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_Stroke), _r689_t3), r313_flat(_r689_t0, _r689_t3 + r313_SmallArchDepthB));
                };
                var r684_InterruptMask = function (r693_df) {
                    var _r693_t0, _r693_t1;
                    var r693_gap = Math.max(r313_XH / 8, r313_AdviceStroke2(6, 6, r313_XH));
                    return r313_HBar.m(0, r693_df.width, r1_mix(r313_bot, r313_top, 0.5), r693_gap);
                };
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cent/bar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r696_currentGlyph) {
                    var r696___, _r696_t0, _r696_t1, _r696_t2;
                    var r696_df = r696_currentGlyph.include(r313_DivFrame(1));
                    r696_currentGlyph.setBaseAnchor("cvDecompose", r696_df.middle, r1_mix(r313_bot, r313_top, 0.5));
                    r1_DependentSelector.set(r696_currentGlyph, r313_selector);
                    r696_currentGlyph.include(r313_difference(r684_FullBar(r696_df, r684_swBarThick), r684_OutlineMask(r696_df)));
                    r696_currentGlyph.include((_r696_t0 = r313_fillType, _r696_t0 === 1 ? r313_intersection(r684_FullBar(r696_df, r684_swBarFine), r684_OutlineMask(r696_df)) : _r696_t0 === 2 ? r313_intersection(r684_InterruptBar(r696_df), r313_difference(r684_OutlineMask(r696_df), r684_InterruptMask(r696_df))) : (r696___ = _r696_t0, r313_xn$noshape$3cah())));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("cent/bar", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cent"));
        return r313_CreateDependentComposite("cent/centSign", 162, "cent/bar", {
            "std": "c/centKernelStd",
            "cap": "c/centKernelCap"
        });
    });
    return void 0;
});


