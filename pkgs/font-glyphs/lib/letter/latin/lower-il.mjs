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
var r1_boole = _r1_t8.boole;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-I", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t13, _r313_t14, _r313_t15, _r313_tag16, _r313_t17, _r313_tag18, _r313_t19, _r313_tag20, _r313_t21, _r313_tag22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28, _r313_t29, _r313_tag30, _r313_t31, _r313_tag32, _r313_t33, _r313_tag34;
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
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_HalfUPM = _r313_t1.HalfUPM;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_Hook = _r313_t1.Hook;
        var r313_HookX = _r313_t1.HookX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayPos = _r313_t1.OverlayPos;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_IBalance = _r313_t1.IBalance;
        var r313_IBalance2 = _r313_t1.IBalance2;
        var r313_Middle = _r313_t1.Middle;
        var r313_DotRadius = _r313_t1.DotRadius;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_SerifShiftS = _r313_t1.SerifShiftS;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_HOverlayBar = _r313_t5.HOverlayBar;
        var r313_FlatSlashShape = _r313_t5.FlatSlashShape;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var r313_CreateMultiAccentedComposition = _r313_t8.CreateMultiAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateCommaCaronComposition = _r313_t9.CreateCommaCaronComposition;
        var r313_CreateTurnedLetter = _r313_t9.CreateTurnedLetter;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RightwardTailedBar = _r313_t10.RightwardTailedBar;
        var r313_CurlyTail = _r313_t10.CurlyTail;
        var r313_FlatHookDepth = _r313_t10.FlatHookDepth;
        var r313_DiagTail = _r313_t10.DiagTail;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_VerticalHook = _r313_t11.VerticalHook;
        var r313_PalatalHook = _r313_t11.PalatalHook;
        var r313_RetroflexHook = _r313_t11.RetroflexHook;
        var r313_HalfRingDescender = _r313_t11.HalfRingDescender;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_BeltOverlay = _r313_t12.BeltOverlay;
        var r313_LetterBarOverlay = _r313_t12.LetterBarOverlay;
        var r313_TailedDotlessIShift = function (r322_df) {
            var _r322_t0, _r322_t1;
            return (1 - r322_df.adws) * 0.2;
        };
        var r313_xn$MODEI$5sIl = 0;
        var r313_xn$MODEL$5sIl = 1;
        var r313_XMiddleT = function (r323_mode) {
            var _r323_t0, _r323_t1, _r323_t2, _r323_tag3;
            return (function () {
                var r326_Center, r326_Serifed, r326_Hooky, r326_HookyBottom, r326_ZShaped, r326_Tailed, r326_TailedSerifed, r326_FlatTailed, r326_SerifedFlatTailed, r326_PhoneticLeft;
                var r326_exports = {};
                var r326_HookyImpl = function (r333_df, r333_doST, r333_doSB) {
                    var _r333_t0, _r333_t1;
                    return r333_df.middle + (r1_boole(r333_doST) - r1_boole(r333_doSB)) * r313_IBalance2(r333_df);
                };
                var r326_FlatTailedImpl = function (r334_df, r334_doST) {
                    var _r334_t0, _r334_t1;
                    return r326_HookyImpl(r334_df, r334_doST && r323_mode !== r313_xn$MODEL$5sIl, true);
                };
                var r326_TailedImpl = function (r335_df, r335_doST) {
                    var _r335_t0, _r335_t1;
                    return r1_mix(r335_df.leftSB, r335_df.rightSB, r313_StrokeWidthBlend(0.42, 0.46) - r313_TailedDotlessIShift(r335_df));
                };
                r326_exports.Center = r326_Center = function (r337_df) {
                    var _r337_t0, _r337_t1;
                    return r337_df.middle + 0;
                };
                r326_exports.Serifed = r326_Serifed = function (r339_df) {
                    var _r339_t0, _r339_t1;
                    return r339_df.middle + r313_IBalance(r339_df);
                };
                r326_exports.Hooky = r326_Hooky = function (r341_df) {
                    var _r341_t0, _r341_t1;
                    return r326_HookyImpl(r341_df, true, false);
                };
                r326_exports.HookyBottom = r326_HookyBottom = function (r343_df) {
                    var _r343_t0, _r343_t1;
                    return r326_HookyImpl(r343_df, false, true);
                };
                r326_exports.ZShaped = r326_ZShaped = function (r345_df) {
                    var _r345_t0, _r345_t1;
                    return r326_HookyImpl(r345_df, true, true);
                };
                r326_exports.Tailed = r326_Tailed = function (r347_df) {
                    var _r347_t0, _r347_t1;
                    return r326_TailedImpl(r347_df, false);
                };
                r326_exports.TailedSerifed = r326_TailedSerifed = function (r349_df) {
                    var _r349_t0, _r349_t1;
                    return r326_TailedImpl(r349_df, true);
                };
                r326_exports.FlatTailed = r326_FlatTailed = function (r351_df) {
                    var _r351_t0, _r351_t1;
                    return r326_FlatTailedImpl(r351_df, false);
                };
                r326_exports.SerifedFlatTailed = r326_SerifedFlatTailed = function (r353_df) {
                    var _r353_t0, _r353_t1;
                    return r326_FlatTailedImpl(r353_df, true);
                };
                r326_exports.PhoneticLeft = r326_PhoneticLeft = function (r355_df) {
                    var _r355_t0, _r355_t1;
                    return r355_df.leftSB + r313_HSwToV(r313_HalfStroke);
                };
                return r326_exports;
            })();
        };
        var r313_ILMarks = (function () {
            var r358_Serifless, r358_Serifed;
            var r358_exports = {};
            r358_exports.Serifless = r358_Serifless = function (r366_df, r366_top, r366_bot, r366_xMiddle, r366__stroke) {
                var _r366_t0, _r366_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    r368_currentGlyph.include(r313_LeaningAnchor.Above.At(r366_xMiddle));
                    r368_currentGlyph.include(r313_LeaningAnchor.Below.At(r366_xMiddle));
                    r368_currentGlyph.setBaseAnchor("overlay", r366_xMiddle, r1_mix(r366_bot, r366_top, r313_OverlayPos));
                    r368_currentGlyph.setBaseAnchor("topRight", r366_xMiddle + (r366_df.rightSB - r366_df.leftSB) / 2, r366_top);
                    r368_currentGlyph.setBaseAnchor("hooktopAttach", r366_xMiddle, r366_top);
                    return void 0;
                });
            };
            r358_exports.Serifed = r358_Serifed = function (r375_df, r375_top, r375_bot, r375_xMiddle, r375__stroke) {
                var _r375_t0, _r375_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                    var _r377_t0, _r377_t1;
                    r377_currentGlyph.include(r358_Serifless(r375_df, r375_top, r375_bot, r375_xMiddle, r375__stroke));
                    r377_currentGlyph.include(r313_LeaningAnchor.Above.At(r1_mix(r375_df.middle, r375_xMiddle, 0.75)));
                    return void 0;
                });
            };
            return r358_exports;
        })();
        var r313_ILBody = (function () {
            var r382_Serifless, r382_HookyBottom, r382_Serifed, r382_Tailed, r382_FlatTailed, r382_SemiTailed, r382_ShortTailed, r382_DiagTailed, r382_PhoneticLeft;
            var r382_exports = {};
            r382_exports.Serifless = r382_Serifless = function (r390_df, r390_top, r390_bot, r390_xMiddle, r390__stroke) {
                var _r390_t0, _r390_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                    var _r392_t0, _r392_t1;
                    var r392_stroke = r1_fallback(r390__stroke, r313_Stroke);
                    r392_currentGlyph.include(r313_VBar.m(r390_xMiddle, r390_bot, r390_top, r392_stroke));
                    r392_currentGlyph.setBaseAnchor("trailing", r390_xMiddle + r313_HSwToV(0.5 * r392_stroke), r390_bot);
                    return void 0;
                });
            };
            r382_exports.HookyBottom = r382_HookyBottom = function (r396_df, r396_top, r396_bot, r396_xMiddle, r396__stroke) {
                var _r396_t0, _r396_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
                    var _r398_t0, _r398_t1;
                    var r398_stroke = r1_fallback(r396__stroke, r313_Stroke);
                    r398_currentGlyph.include(r313_VBar.m(r396_xMiddle, r396_bot, r396_top, r398_stroke));
                    var r398_jut = Math.max(r313_Jut, r1_mix(r313_HSwToV(0.5 * r398_stroke), r313_LongJut, r396_df.adws));
                    r398_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.rb(r396_xMiddle, r396_bot, r398_jut, r313_Stroke, r398_stroke)));
                    r398_currentGlyph.setBaseAnchor("trailing", r396_xMiddle + r398_jut, r396_bot);
                    r398_currentGlyph.setBaseAnchor("palatalHookAttach", r396_xMiddle + r398_jut, r396_bot);
                    return void 0;
                });
            };
            r382_exports.Serifed = r382_Serifed = function (r404_df, r404_top, r404_bot, r404_xMiddle, r404__stroke) {
                var _r404_t0, _r404_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                    var _r406_t0, _r406_t1;
                    var r406_stroke = r1_fallback(r404__stroke, r313_Stroke);
                    r406_currentGlyph.include(r313_VBar.m(r404_xMiddle, r404_bot, r404_top, r406_stroke));
                    var r406_jut = Math.max(r313_MidJutCenter, r1_mix(r313_HSwToV(0.5 * r406_stroke), r313_LongJut, r404_df.adws));
                    r406_currentGlyph.include(r313_tagged("serifMB", r313_HSerif.mb(r404_df.middle, r404_bot, r406_jut)));
                    r406_currentGlyph.setBaseAnchor("trailing", r404_df.middle + r406_jut, r404_bot);
                    r406_currentGlyph.setBaseAnchor("palatalHookAttach", r404_df.middle + r406_jut, r404_bot);
                    return void 0;
                });
            };
            r382_exports.Tailed = r382_Tailed = function (r412_df, r412_top, r412_bot, r412_xMiddle, r412__stroke) {
                var _r412_t0, _r412_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                    var _r414_t0, _r414_t1;
                    var r414_stroke = r1_fallback(r412__stroke, r313_Stroke);
                    var r414_fine = r313_AdviceStroke(3) * (r414_stroke / r313_Stroke);
                    var r414_left = r412_xMiddle - r313_HSwToV(0.5 * r414_stroke);
                    var r414_right = r1_mix(r412_df.leftSB, r412_df.rightSB, 1.1 - r313_TailedDotlessIShift(r412_df));
                    var r414_rightTerm = Math.max(r414_right, r414_left + r313_HSwToV(r414_stroke) + Math.max(r313_HookX, r313_HSwToV(1.1 * r414_fine)));
                    var r414_middle = r1_mix(r414_left, r414_right, 0.55 * r412_df.adws);
                    var r414_hookDepth = Math.max(r414_stroke * 0.9, r313_Hook * r313_StrokeWidthBlend(0.85, 1) * r412_df.adws);
                    r414_currentGlyph.include(r313_dispiro(r313_widths.lhs(r414_stroke), r313_flat(r414_left, r412_top, r313_heading(r313_Downward)), r313_curl(r414_left, r412_bot + r313_SmallArchDepthB * 0.8), r313_HookEnd(r412_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r414_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swTerminal", r414_fine), new r313_xn$NamedParameterPair$2Lrc9b("isTail", true)), r313_g4(r414_rightTerm, r412_bot + r414_hookDepth, r313_widths.lhs(r414_fine))));
                    r414_currentGlyph.setBaseAnchor("trailing", r1_mix(r414_left, r414_rightTerm, 0.5), r412_bot);
                    r414_currentGlyph.setBaseAnchor("palatalHookAttach", r1_mix(r414_left, r414_rightTerm, 0.5), r412_bot);
                    r414_currentGlyph.setBaseAnchor("palatalHookMask", r1_mix(r414_left, r414_rightTerm, 0.5), r412_bot + r313_O + r313_HalfStroke);
                    return void 0;
                });
            };
            r382_exports.FlatTailed = r382_FlatTailed = function (r423_df, r423_top, r423_bot, r423_xMiddle, r423__stroke) {
                var _r423_t0, _r423_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                    var _r425_t0, _r425_t1;
                    var r425_stroke = r1_fallback(r423__stroke, r313_Stroke);
                    var r425_tailLength = r313_LongJut * 1.05 * r1_mix(1, r423_df.adws, 0.75);
                    var r425_hd = r313_FlatHookDepth(r423_df);
                    var r425_xFinal = r423_xMiddle + Math.max(r425_tailLength, r425_hd.x - r313_HSwToV(0.5 * r425_stroke) + 1) + 0.5 * r425_stroke * r313_TanSlope;
                    r425_currentGlyph.include(r313_dispiro(r313_widths.center(r425_stroke), r313_flat(r423_xMiddle, r423_top, r313_heading(r313_Downward)), r313_curl(r423_xMiddle, r423_bot + r425_hd.y), r313_arcvh.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r423_xMiddle + r425_hd.x - r313_HSwToV(0.5 * r425_stroke), r423_bot + 0.5 * r425_stroke), r313_curl(r425_xFinal, r423_bot + 0.5 * r425_stroke)));
                    r425_currentGlyph.setBaseAnchor("trailing", r425_xFinal, r423_bot);
                    r425_currentGlyph.setBaseAnchor("palatalHookAttach", r425_xFinal, r423_bot);
                    return void 0;
                });
            };
            r382_exports.SemiTailed = r382_SemiTailed = function (r430_df, r430_top, r430_bot, r430_xMiddle, r430__stroke) {
                var _r430_t0, _r430_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r432_currentGlyph) {
                    var _r432_t0, _r432_t1;
                    var r432_stroke = r1_fallback(r430__stroke, r313_Stroke);
                    var r432_tailLength = r313_LongJut * 1.05 * r1_mix(1, r430_df.adws, 0.75);
                    var r432_hookScaleX = r1_mix(1, r430_df.adws, 0.5);
                    var r432_hookScaleY = r1_mix(1, r430_df.adws, 1.25);
                    var r432_x0 = r1_mix(0.5 * r432_stroke, 0.5 * r432_stroke + (r313_Hook - r432_stroke + 1) * 0.85 * r430_df.adws + r313_IBalance2(r430_df), r432_hookScaleX);
                    var r432_x1 = r1_mix(0.5 * r432_stroke, Math.max(r432_tailLength, r313_Hook - 0.5 * r432_stroke + 1) + r313_IBalance2(r430_df), r432_hookScaleX);
                    r432_currentGlyph.include(r313_dispiro(r313_widths.center(r432_stroke), r313_flat(r430_xMiddle, r430_top, r313_heading(r313_Downward)), r313_curl(r430_xMiddle, r430_bot + Math.max(r432_stroke * 1.1, r1_mix(r432_stroke, r313_Hook, r432_hookScaleY))), r313_arcvh(16), r313_g2.right.mid(r430_xMiddle + r432_x0, r430_bot + r313_O + 0.5 * r432_stroke, r313_heading(r313_Rightward)), r313_g4(r430_xMiddle + r432_x1, r430_bot + r313_O * (1 - 2 * r432_hookScaleY) + 0.5 * r432_stroke, r313_heading(r313_Rightward))));
                    r432_currentGlyph.setBaseAnchor("trailing", r430_xMiddle + r432_x0, r430_bot);
                    r432_currentGlyph.setBaseAnchor("palatalHookAttach", r430_xMiddle + r432_x0, r430_bot);
                    r432_currentGlyph.setBaseAnchor("palatalHookMask", r430_xMiddle + r432_x0, r430_bot + r313_O + r313_HalfStroke);
                    return void 0;
                });
            };
            r382_exports.ShortTailed = r382_ShortTailed = function (r438_df, r438_top, r438_bot, r438_xMiddle, r438__stroke) {
                var _r438_t0, _r438_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                    var _r440_t0, _r440_t1;
                    var r440_stroke = r1_fallback(r438__stroke, r313_Stroke);
                    r440_currentGlyph.include(r313_RightwardTailedBar(r438_xMiddle + r313_HSwToV(0.5 * r440_stroke), r438_bot, r438_top, r440_stroke));
                    return void 0;
                });
            };
            r382_exports.DiagTailed = r382_DiagTailed = function (r443_df, r443_top, r443_bot, r443_xMiddle, r443__stroke) {
                var _r443_t0, _r443_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r445_currentGlyph) {
                    var _r445_t0, _r445_t1;
                    var r445_stroke = r1_fallback(r443__stroke, r313_Stroke);
                    var r445_depth = r313_DiagTail.StdDepth(r443_df, r445_stroke) - (r443_df.middle - r443_xMiddle) - 0.5 * r445_stroke;
                    r445_currentGlyph.include(r313_dispiro(r313_widths.center(r445_stroke), r313_flat(r443_xMiddle, r443_top, r313_heading(r313_Downward)), r313_DiagTail.R(r443_xMiddle, r443_bot, r445_depth, r445_stroke)));
                    r445_currentGlyph.setBaseAnchor("trailing", r443_xMiddle + r313_HSwToV(0.75 * r445_stroke), r443_bot);
                    r445_currentGlyph.setBaseAnchor("palatalHookAttach", r443_xMiddle + r313_HSwToV(0.75 * r445_stroke), r443_bot);
                    r445_currentGlyph.setBaseAnchor("palatalHookMask", r443_xMiddle + r313_HSwToV(0.75 * r445_stroke), r443_bot + r313_O + r313_HalfStroke);
                    return void 0;
                });
            };
            r382_exports.PhoneticLeft = r382_PhoneticLeft = function (r451_df, r451_top, r451_bot, r451_xMiddle, r451__stroke) {
                var _r451_t0, _r451_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
                    var _r453_t0, _r453_t1;
                    var r453_stroke = r1_fallback(r451__stroke, r313_Stroke);
                    var r453_tailLength = r313_LongJut * 1.05 * r451_df.adws;
                    r453_currentGlyph.include(r313_dispiro(r313_widths.center(r453_stroke), r313_flat(r451_xMiddle, r451_top, r313_heading(r313_Downward)), r313_curl(r451_xMiddle, r451_bot + r313_Hook), r313_arcvh(), r313_flat(r451_xMiddle + r313_Hook - 0.5 * r453_stroke, r451_bot + 0.5 * r453_stroke), r313_curl(Math.max(r451_df.rightSB, r451_xMiddle + Math.max(r453_tailLength, r313_HookX)), r451_bot + 0.5 * r453_stroke, r313_heading(r313_Rightward))));
                    return void 0;
                });
            };
            return r382_exports;
        })();
        var r313_ILJut = (function () {
            var r457_None, r457_Hooky, r457_Serifed, r457_HookyShort, r457_SerifedShort;
            var r457_exports = {};
            r457_exports.None = r457_None = function (r465_df, r465_top, r465_bot, r465_xMiddle, r465__stroke) {
                var _r465_t0, _r465_t1;
                return r313_HSwToV(0.5 * r1_fallback(r465__stroke, r313_Stroke));
            };
            r457_exports.Hooky = r457_Hooky = function (r467_df, r467_top, r467_bot, r467_xMiddle, r467__stroke) {
                var _r467_t0, _r467_t1;
                return Math.max(r313_Jut, r1_mix(r457_None(r467_df, r467_top, r467_bot, r467_xMiddle, r467__stroke), r313_LongJut, r467_df.adws));
            };
            r457_exports.Serifed = r457_Serifed = function (r469_df, r469_top, r469_bot, r469_xMiddle, r469__stroke) {
                var _r469_t0, _r469_t1;
                return Math.max(r313_Jut, r1_mix(r457_None(r469_df, r469_top, r469_bot, r469_xMiddle, r469__stroke), r313_LongJut, r469_df.adws) - (r469_xMiddle - r469_df.middle));
            };
            r457_exports.HookyShort = r457_HookyShort = function (r471_df, r471_top, r471_bot, r471_xMiddle, r471__stroke) {
                var _r471_t0, _r471_t1;
                return r1_mix(r313_Jut, r457_Hooky(r471_df, r471_top, r471_bot, r471_xMiddle, r471__stroke), 0.5);
            };
            r457_exports.SerifedShort = r457_SerifedShort = function (r473_df, r473_top, r473_bot, r473_xMiddle, r473__stroke) {
                var _r473_t0, _r473_t1;
                return r1_mix(r313_Jut, r457_Serifed(r473_df, r473_top, r473_bot, r473_xMiddle, r473__stroke), 0.5);
            };
            return r457_exports;
        })();
        var r313_ILSerifs = (function () {
            var r476_None, r476_Hooky, r476_Serifed, r476_HookyShort, r476_SerifedShort;
            var r476_exports = {};
            r476_exports.None = r476_None = function (r484_df, r484_top, r484_bot, r484_xMiddle, r484__stroke) {
                var _r484_t0, _r484_t1;
                return r313_xn$noshape$3cah();
            };
            r476_exports.Hooky = r476_Hooky = function (r486_df, r486_top, r486_bot, r486_xMiddle, r486__stroke) {
                var _r486_t0, _r486_t1;
                return r313_tagged("serifLT", r313_HSerif.lt(r486_xMiddle, r486_top, r313_ILJut.Hooky(r486_df, r486_top, r486_bot, r486_xMiddle, r486__stroke), r313_Stroke, r486__stroke));
            };
            r476_exports.Serifed = r476_Serifed = function (r488_df, r488_top, r488_bot, r488_xMiddle, r488__stroke) {
                var _r488_t0, _r488_t1;
                return r313_tagged("serifLT", r313_HSerif.lt(r488_xMiddle, r488_top, r313_ILJut.Serifed(r488_df, r488_top, r488_bot, r488_xMiddle, r488__stroke), r313_Stroke, r488__stroke));
            };
            r476_exports.HookyShort = r476_HookyShort = function (r490_df, r490_top, r490_bot, r490_xMiddle, r490__stroke) {
                var _r490_t0, _r490_t1;
                return r313_tagged("serifLT", r313_HSerif.lt(r490_xMiddle, r490_top, r313_ILJut.HookyShort(r490_df, r490_top, r490_bot, r490_xMiddle, r490__stroke), r313_Stroke, r490__stroke));
            };
            r476_exports.SerifedShort = r476_SerifedShort = function (r492_df, r492_top, r492_bot, r492_xMiddle, r492__stroke) {
                var _r492_t0, _r492_t1;
                return r313_tagged("serifLT", r313_HSerif.lt(r492_xMiddle, r492_top, r313_ILJut.SerifedShort(r492_df, r492_top, r492_bot, r492_xMiddle, r492__stroke), r313_Stroke, r492__stroke));
            };
            return r476_exports;
        })();
        var r313_CalcPhoneticHookPos = function (r493_g) {
            var _r493_t0, _r493_t1;
            var r493_attach = r493_g.gizmo.unapply(r493_g.baseAnchors.palatalHookAttach || r493_g.baseAnchors.overlay);
            var r493_posX = r493_g.baseAnchors.palatalHookAttach ? r493_attach.x + r313_HSwToV(0.5 * r313_VJutStroke) : r493_attach.x + r313_HSwToV(r313_HalfStroke) + r313_PalatalHook.adviceGap(r313_Stroke);
            var r493_maskY = r493_g.baseAnchors.palatalHookMask ? r493_g.gizmo.unapply(r493_g.baseAnchors.palatalHookMask).y : r313_Stroke;
            return [r493_attach, r493_posX, r493_maskY];
        };
        var r313_SmallILConfig = function (r494_mode) {
            var _r494_t0, _r494_t1;
            return {
                "serifless": [r313_ILBody.Serifless, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Center, r313_para.advanceScaleII, 0],
                "hooky": [r313_ILBody.Serifless, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).Hooky, r313_para.advanceScaleI, 0],
                "hookyBottom": [r313_ILBody.HookyBottom, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).HookyBottom, r313_para.advanceScaleI, r313_Stroke],
                "zshaped": [r313_ILBody.HookyBottom, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).ZShaped, r313_para.advanceScaleI, r313_Stroke],
                "zshapedAsymmetric": [r313_ILBody.HookyBottom, r313_ILSerifs.HookyShort, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).ZShaped, r313_para.advanceScaleI, r313_Stroke],
                "serifed": [r313_ILBody.Serifed, r313_ILSerifs.Serifed, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).Serifed, r313_para.advanceScaleI, r313_Stroke],
                "serifedAsymmetric": [r313_ILBody.Serifed, r313_ILSerifs.SerifedShort, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).Serifed, r313_para.advanceScaleI, r313_Stroke],
                "tailed": [r313_ILBody.Tailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Tailed, r313_para.advanceScaleI, r313_Stroke],
                "tailedSerifed": [r313_ILBody.Tailed, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).TailedSerifed, r313_para.advanceScaleI, r313_Stroke],
                "diagonalTailed": [r313_ILBody.DiagTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Tailed, r313_para.advanceScaleI, r313_Stroke],
                "serifedDiagonalTailed": [r313_ILBody.DiagTailed, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).TailedSerifed, r313_para.advanceScaleI, r313_Stroke],
                "flatTailed": [r313_ILBody.FlatTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).FlatTailed, r313_para.advanceScaleI, r313_Stroke],
                "serifedFlatTailed": [r313_ILBody.FlatTailed, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).SerifedFlatTailed, r313_para.advanceScaleI, r313_Stroke],
                "semiTailed": [r313_ILBody.SemiTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).FlatTailed, r313_para.advanceScaleI, r313_Stroke],
                "serifedSemiTailed": [r313_ILBody.SemiTailed, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).SerifedFlatTailed, r313_para.advanceScaleI, r313_Stroke],
                "seriflessDec": [r313_ILBody.Serifless, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Center, r313_para.advanceScaleI, 0],
                "hookyDec": [r313_ILBody.Serifless, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).Hooky, r313_para.advanceScaleI, 0],
                "tailedDec": [r313_ILBody.Tailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Tailed, r313_para.advanceScaleI, r313_Stroke],
                "diagonalTailedDec": [r313_ILBody.DiagTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Tailed, r313_para.advanceScaleI, r313_Stroke],
                "flatTailedDec": [r313_ILBody.FlatTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).FlatTailed, r313_para.advanceScaleI, r313_Stroke],
                "semiTailedDec": [r313_ILBody.SemiTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).FlatTailed, r313_para.advanceScaleI, r313_Stroke],
                "hookyBottomDec": [r313_ILBody.HookyBottom, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).HookyBottom, r313_para.advanceScaleI, r313_Stroke],
                "seriflessRTail": [r313_ILBody.Serifless, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).HookyBottom, r313_para.advanceScaleI, 0],
                "hookyRTail": [r313_ILBody.Serifless, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).Center, r313_para.advanceScaleI, 0],
                "seriflessRTailDec": [r313_ILBody.Serifless, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).HookyBottom, r313_para.advanceScaleI, 0],
                "hookyRTailDec": [r313_ILBody.Serifless, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).Center, r313_para.advanceScaleI, 0],
                "seriflessPL": [r313_ILBody.PhoneticLeft, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).PhoneticLeft, 1, 0],
                "hookyPL": [r313_ILBody.PhoneticLeft, r313_ILSerifs.Hooky, r313_ILMarks.Serifed, r313_XMiddleT(r494_mode).PhoneticLeft, 1, 0],
                "tau/tailless": [r313_ILBody.Serifless, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Center, 1, 0],
                "tau/tailed": [r313_ILBody.Tailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Tailed, 1, r313_Stroke],
                "tau/diagonalTailed": [r313_ILBody.DiagTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Tailed, 1, r313_Stroke],
                "tau/flatTailed": [r313_ILBody.FlatTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).FlatTailed, 1, r313_Stroke],
                "tau/semiTailed": [r313_ILBody.SemiTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).FlatTailed, 1, r313_Stroke],
                "tau/shortTailed": [r313_ILBody.ShortTailed, r313_ILSerifs.None, r313_ILMarks.Serifless, r313_XMiddleT(r494_mode).Center, 1, r313_Stroke]
            };
        };
        (function () {
            var r496_suffix, r496_Body, r496_Serifs, r496_Marks, r496_xMiddleTMono, r496_adws, r496_y0R, r496_xMiddleTCenter, r496_xMiddleT, _r496_t2, _r496_t4;
            var _r496_t0 = Object.entries(r313_SmallILConfig(r313_xn$MODEI$5sIl))[Symbol.iterator]();
            var _r496_t1 = void 0;
            var _r496_t3 = !(_r496_t1 = _r496_t0.next()).done;
            while (_r496_t3) {
                _r496_t4 = (_r496_t2 = _r496_t1.value, r496_suffix = _r496_t2[0], r496_Body = _r496_t2[1][0], r496_Serifs = _r496_t2[1][1], r496_Marks = _r496_t2[1][2], r496_xMiddleTMono = _r496_t2[1][3], r496_adws = _r496_t2[1][4], r496_y0R = _r496_t2[1][5], _r496_t2[1], r496_xMiddleTCenter = r313_XMiddleT(r313_xn$MODEI$5sIl).Center, r496_xMiddleT = r313_para.isQuasiProportional && r496_Body !== r313_ILBody.PhoneticLeft ? r496_xMiddleTCenter : r496_xMiddleTMono, r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessi." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r500_currentGlyph) {
                    var _r500_t0, _r500_t1;
                    var r500_df = r500_currentGlyph.include(r313_DivFrame(r496_adws));
                    r500_currentGlyph.include(r500_df.markSet.e());
                    var r500_xMiddle = r496_xMiddleT(r500_df);
                    r500_currentGlyph.include(r496_Body(r500_df, r313_XH, 0, r500_xMiddle));
                    r500_currentGlyph.include(r496_Marks(r500_df, r313_XH, 0, r500_xMiddle));
                    r500_currentGlyph.include(r496_Serifs(r500_df, r313_XH, 0, r500_xMiddle));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiCap." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r508_currentGlyph) {
                    var _r508_t0, _r508_t1;
                    var r508_df = r508_currentGlyph.include(r313_DivFrame(r496_adws));
                    r508_currentGlyph.include(r508_df.markSet.capital());
                    var r508_xMiddle = r496_xMiddleT(r508_df);
                    r508_currentGlyph.include(r496_Body(r508_df, r313_CAP, 0, r508_xMiddle));
                    r508_currentGlyph.include(r496_Marks(r508_df, r313_CAP, 0, r508_xMiddle));
                    r508_currentGlyph.include(r496_Serifs(r508_df, r313_CAP, 0, r508_xMiddle));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiRetroflexHook." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r516_currentGlyph) {
                    var _r516_t1, _r516_t2;
                    r516_currentGlyph.include(r313_xn$referglyph$1aao("dotlessi." + r496_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var _r516_t0 = r313_CalcPhoneticHookPos(r516_currentGlyph);
                    var r516_attach = _r516_t0[0];
                    var r516_posX = _r516_t0[1];
                    var r516_maskY = _r516_t0[2];
                    r516_currentGlyph.include(r313_RetroflexHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r516_posX), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r516_attach.x), new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_MaskAbove(r516_maskY))));
                    return void 0;
                })), r496_Body !== r313_ILBody.Serifed ? r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessaiDiphthong.upright." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r526_currentGlyph) {
                    var _r526_t0, _r526_t1;
                    var r526_df = r313_DivFrame(r496_adws);
                    r526_currentGlyph.include(r313_xn$referglyph$1aao("dotlessi." + r496_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r526_currentGlyph.include(r313_HalfRingDescender(r496_xMiddleT(r526_df) - r313_HSwToV(r313_HalfStroke), 0));
                    return void 0;
                })) : void 0, r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessaiDiphthong.italic." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
                    var _r531_t0, _r531_t1;
                    var r531_df = r313_DivFrame(r496_adws);
                    r531_currentGlyph.include(r313_xn$referglyph$1aao("dotlessi." + r496_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r531_currentGlyph.include(r313_RetroflexHook.mExt(r496_xMiddleT(r531_df), 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiStretched." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r536_currentGlyph) {
                    var _r536_t0, _r536_t1;
                    var r536_df = r536_currentGlyph.include(r313_DivFrame(r496_adws));
                    r536_currentGlyph.include(r536_df.markSet.p());
                    var r536_xMiddle = r496_xMiddleT(r536_df);
                    r536_currentGlyph.include(r496_Body(r536_df, r313_XH, r313_Descender, r536_xMiddle));
                    r536_currentGlyph.include(r496_Marks(r536_df, r313_XH, r313_Descender, r536_xMiddle));
                    r536_currentGlyph.include(r496_Serifs(r536_df, r313_XH, r313_Descender, r536_xMiddle));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/palochka." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r544_currentGlyph) {
                    var _r544_t0, _r544_t1;
                    var r544_df = r544_currentGlyph.include(r313_DivFrame(r496_adws));
                    r544_currentGlyph.include(r544_df.markSet.b());
                    var r544_xMiddle = r496_xMiddleT(r544_df);
                    r544_currentGlyph.include(r496_Body(r544_df, r313_Ascender, 0, r544_xMiddle));
                    r544_currentGlyph.include(r496_Marks(r544_df, r313_Ascender, 0, r544_xMiddle));
                    r544_currentGlyph.include(r496_Serifs(r544_df, r313_Ascender, 0, r544_xMiddle));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Twe/middle." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                    var _r552_t0, _r552_t1;
                    var r552_df = r552_currentGlyph.include(r313_DivFrame(r496_adws));
                    var r552_xMiddle = r496_xMiddleTCenter(r552_df);
                    r552_currentGlyph.include(r496_Body(r552_df, r313_CAP, 0, r552_xMiddle));
                    r552_currentGlyph.include(r496_Marks(r552_df, r313_CAP, 0, r552_xMiddle));
                    r552_currentGlyph.deleteBaseAnchor("trailing");
                    r552_currentGlyph.setMarkAnchor("cvDecompose", r552_xMiddle, r313_CAP);
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/twe/middle." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r559_currentGlyph) {
                    var _r559_t0, _r559_t1;
                    var r559_df = r559_currentGlyph.include(r313_DivFrame(r496_adws));
                    var r559_xMiddle = r496_xMiddleTCenter(r559_df);
                    r559_currentGlyph.include(r496_Body(r559_df, r313_XH, 0, r559_xMiddle));
                    r559_currentGlyph.include(r496_Marks(r559_df, r313_XH, 0, r559_xMiddle));
                    r559_currentGlyph.deleteBaseAnchor("trailing");
                    r559_currentGlyph.setMarkAnchor("cvDecompose", r559_xMiddle, r313_XH);
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("grek/tau." + r496_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r566_currentGlyph) {
                    var _r566_t0, _r566_t1;
                    var r566_df = r566_currentGlyph.include(r313_DivFrame(r496_adws));
                    r566_currentGlyph.include(r566_df.markSet.e());
                    var r566_xMiddle = r496_xMiddleTMono(r566_df);
                    r566_currentGlyph.include(r496_Body(r566_df, r313_XH, 0, r566_xMiddle));
                    r566_currentGlyph.include(r496_Marks(r566_df, r313_XH, 0, r566_xMiddle));
                    r566_currentGlyph.include(r313_HBar.t(r566_df.leftSB, r566_df.rightSB, r313_XH));
                    r566_currentGlyph.deleteBaseAnchor("trailing");
                    return void 0;
                })));
                _r496_t3 = !(_r496_t1 = _r496_t0.next()).done;
            }
            return _r496_t4;
        })();
        (function () {
            var r573_suffix, r573_Body, r573_Serifs, r573_Marks, r573_xMiddleTMono, r573_adws, r573_y0R, r573_xMiddleTCenter, r573_xMiddleT, r573_xShift, _r573_t2, _r573_t4;
            var _r573_t0 = Object.entries(r313_SmallILConfig(r313_xn$MODEL$5sIl))[Symbol.iterator]();
            var _r573_t1 = void 0;
            var _r573_t3 = !(_r573_t1 = _r573_t0.next()).done;
            while (_r573_t3) {
                _r573_t4 = (_r573_t2 = _r573_t1.value, r573_suffix = _r573_t2[0], r573_Body = _r573_t2[1][0], r573_Serifs = _r573_t2[1][1], r573_Marks = _r573_t2[1][2], r573_xMiddleTMono = _r573_t2[1][3], r573_adws = _r573_t2[1][4], r573_y0R = _r573_t2[1][5], _r573_t2[1], r573_xMiddleTCenter = r313_XMiddleT(r313_xn$MODEL$5sIl).Center, r573_xMiddleT = r313_para.isQuasiProportional && r573_Body !== r313_ILBody.PhoneticLeft ? r573_xMiddleTCenter : r573_xMiddleTMono, r313_xn$GlyphSaveSink$2Lrc4b.save("l." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r577_currentGlyph) {
                    var _r577_t0, _r577_t1;
                    var r577_df = r577_currentGlyph.include(r313_DivFrame(r573_adws));
                    r577_currentGlyph.include(r577_df.markSet.b());
                    var r577_xMiddle = r573_xMiddleT(r577_df);
                    r577_currentGlyph.include(r573_Body(r577_df, r313_Ascender, 0, r577_xMiddle));
                    r577_currentGlyph.include(r573_Marks(r577_df, r313_Ascender, 0, r577_xMiddle));
                    r577_currentGlyph.include(r573_Serifs(r577_df, r313_Ascender, 0, r577_xMiddle));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("lDot/base." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r585_currentGlyph) {
                    var _r585_t0, _r585_t1;
                    var r585_df = r585_currentGlyph.include(r313_DivFrame(r573_adws));
                    r585_currentGlyph.include(r313_xn$referglyph$1aao("l." + r573_suffix), r313_AS_BASE);
                    r585_currentGlyph.include(r313_Translate(-0.5 * r313_DotRadius, 0));
                    r585_currentGlyph.setBaseAnchor("cvDecompose", Math.max(r573_xMiddleTCenter(r585_df) + r313_HalfStroke + r313_DotRadius, r585_df.rightSB - r313_DotRadius), r1_mix(r573_y0R, r313_Ascender, 0.5));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("lRTail." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r592_currentGlyph) {
                    var _r592_t0, _r592_t1;
                    var r592_df = r313_DivFrame(r573_adws);
                    r592_currentGlyph.include(r313_xn$referglyph$1aao("l." + r573_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r592_currentGlyph.include(r313_RetroflexHook.mExt(r573_xMiddleT(r592_df), 0));
                    return void 0;
                })), r573_Body !== r313_ILBody.PhoneticLeft ? (r573_xShift = function (r595_df) {
                    var _r595_t0, _r595_t1;
                    return r573_xMiddleTCenter(r595_df) - r573_xMiddleT(r595_df);
                }, r313_xn$GlyphSaveSink$2Lrc4b.save("l/phoneticRight." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r598_currentGlyph) {
                    var _r598_t0, _r598_t1;
                    var r598_df = r598_currentGlyph.include(r313_DivFrame(r573_adws));
                    r598_currentGlyph.include(r598_df.markSet.b());
                    r598_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(r573_xShift(r598_df), 0), r313_xn$referglyph$1aao("l." + r573_suffix)));
                    r598_currentGlyph.include(r573_Marks(r598_df, r313_Ascender, 0, r573_xMiddleTCenter(r598_df)));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("lRTail/phoneticRight." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r605_currentGlyph) {
                    var _r605_t0, _r605_t1;
                    var r605_df = r605_currentGlyph.include(r313_DivFrame(r573_adws));
                    r605_currentGlyph.include(r605_df.markSet.bp());
                    r605_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(r573_xShift(r605_df), 0), r313_xn$referglyph$1aao("lRTail." + r573_suffix)));
                    r605_currentGlyph.include(r573_Marks(r605_df, r313_Ascender, 0, r573_xMiddleTCenter(r605_df)));
                    return void 0;
                }))) : void 0, r313_xn$GlyphSaveSink$2Lrc4b.save("llWelsh." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r612_currentGlyph) {
                    var _r612_t0, _r612_t1;
                    var r612_df = r612_currentGlyph.include(r313_DivFrame(1, 2));
                    var r612_subDf = r313_DivFrame(2 / 3, 3 / 2);
                    var r612_BodyShape = function () {
                        var _r614_t0, _r614_t1;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, r313_union(r573_Body(r612_subDf, r313_Ascender, 0, r573_xMiddleT(r612_subDf), r612_subDf.mvs), r573_Serifs(r612_subDf, r313_Ascender, 0, r573_xMiddleT(r612_subDf), r612_subDf.mvs)));
                    };
                    r612_currentGlyph.include(r612_BodyShape());
                    r612_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r612_df.width - r612_subDf.width, 0), r612_BodyShape()));
                    r612_currentGlyph.include(r313_HOverlayBar(r1_mix(r612_df.leftSB, 0, 0.7), r1_mix(r612_df.rightSB, r612_df.width, 0.7), r1_mix(0, r313_Ascender, 0.625)));
                    r612_currentGlyph.include(r612_df.markSet.b());
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("lPalatalHook." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r622_currentGlyph) {
                    var _r622_t1, _r622_t2;
                    r622_currentGlyph.include(r313_xn$referglyph$1aao("l." + r573_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var _r622_t0 = r313_CalcPhoneticHookPos(r622_currentGlyph);
                    var r622_attach = _r622_t0[0];
                    var r622_posX = _r622_t0[1];
                    var r622_maskY = _r622_t0[2];
                    r622_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r622_posX), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r622_attach.x), new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_MaskAbove(r622_maskY))));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("lHighBar." + r573_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r632_currentGlyph) {
                    var _r632_t0, _r632_t1;
                    var r632_df = r313_DivFrame(r573_adws);
                    r632_currentGlyph.include(r313_xn$referglyph$1aao("l." + r573_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r632_currentGlyph.include(r313_LetterBarOverlay.m.in(r573_xMiddleT(r632_df), r313_XH, r313_Ascender - (r573_Serifs !== r313_ILSerifs.None ? r313_Stroke : 0)));
                    return void 0;
                })));
                _r573_t3 = !(_r573_t1 = _r573_t0.next()).done;
            }
            return _r573_t4;
        })();
        (function () {
            r313_xn$selectvariant$7Hrq("dotlessi", 305);
            r313_xn$linkreducedvariant$5sIl8("dotlessi/sansSerif", "dotlessi", r1_MathSansSerif);
            r313_xn$selectvariant$7Hrq("dotlessi/compLigRight", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotlessi"));
            r313_xn$selectvariant$7Hrq("dotlessiRetroflexHook", new r313_xn$NamedParameterPair$2Lrc9b("follow", "dotlessi"));
            r313_CreateAccentedComposition("i", "i", "dotlessi", "tittleAbove");
            r313_CreateAccentedComposition("i/sansSerif", null, "dotlessi/sansSerif", "tittleAbove");
            r313_xn$linkreducedvariant$5sIl8("i/sansSerif", "i", r1_MathSansSerif);
            r313_CreateAccentedComposition("i/compLigRight", null, "dotlessi/compLigRight", "tittleAbove");
            r313_CreateAccentedComposition("iRetroflexHook", 7574, "dotlessiRetroflexHook", "tittleAbove");
            r313_xn$selectvariant$7Hrq("dotlessaiDiphthong.upright", new r313_xn$NamedParameterPair$2Lrc9b("follow", "dotlessiPigtail.upright"));
            r313_xn$selectvariant$7Hrq("dotlessaiDiphthong.italic", new r313_xn$NamedParameterPair$2Lrc9b("follow", "dotlessiRTail"));
            r313_xn$selectvariant$7Hrq("dotlessiStretched");
            r313_CreateAccentedComposition("iStretched", 122737, "dotlessiStretched", "tittleAbove");
            r313_CreateAccentedComposition("i.TRK", null, "dotlessi", "i.TRK/tittleAbove");
            r313_alias("cyrl/iUkrainian", 1110, "i");
            r313_CreateAccentedComposition("cyrl/yi", 1111, "dotlessi", "dieresisAbove");
            r313_xn$selectvariant$7Hrq("grek/iota", 953, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotlessi"));
            r313_xn$linkreducedvariant$5sIl8("grek/iota/sansSerif", "grek/iota", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotlessi"));
            r313_xn$selectvariant$7Hrq("latn/iota", 617, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotlessi"));
            r313_alias("cyrl/iota", 42567, "latn/iota");
            r313_xn$selectvariant$7Hrq("latn/Iota", 406, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotlessiCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "latn/iota"));
            r313_alias("cyrl/Iota", 42566, "latn/Iota");
            r313_xn$selectvariant$7Hrq("cyrl/palochka", 1231, new r313_xn$NamedParameterPair$2Lrc9b("follow", "dotlessi"));
            r313_xn$selectvariant$7Hrq("cyrl/ghe.SRB/base", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotlessi"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ghe.SRB"));
            r313_CreateAccentedComposition("cyrl/ghe.SRB", null, "cyrl/ghe.SRB/base", "cyrl/ghe.SRB/overlineAbove");
            r313_CreateMultiAccentedComposition("cyrl/gje.SRB", null, "cyrl/ghe.SRB/base", ["cyrl/ghe.SRB/overlineAbove", "acuteAbove"]);
            r313_CreateTurnedLetter("turni", 7433, "i", r313_HalfAdvance, r313_XH / 2);
            r313_CreateTurnedLetter("grek/turniota", 8489, "grek/iota", r313_HalfAdvance, r313_XH / 2);
            r313_CreateAccentedComposition("dotlessiBar", null, "dotlessi", "barOver");
            r313_CreateAccentedComposition("iBar", 616, "dotlessiBar", "tittleAbove");
            r313_CreateAccentedComposition("dotlessiBarRetroflexHook", null, "dotlessiRetroflexHook", "barOver");
            r313_CreateAccentedComposition("iBarRetroflexHook", 122650, "dotlessiBarRetroflexHook", "tittleAbove");
            r313_CreateAccentedComposition("iAcute", 237, "dotlessi", "acuteAbove");
            r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiStretchedHookLeft.serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r651_currentGlyph) {
                var _r651_t0, _r651_t1;
                var r651_df = r651_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                r651_currentGlyph.include(r651_df.markSet.p());
                var r651_xMiddle = r313_XMiddleT(r313_xn$MODEI$5sIl)[r313_para.isQuasiProportional ? "Center" : "Hooky"](r651_df);
                var r651_hd = {
                    "x": r313_ILJut.Hooky(r651_df, r313_XH, r313_Descender, r651_xMiddle) + r313_SerifShiftS,
                    "y": r313_Hook - r313_HalfStroke
                };
                r651_currentGlyph.include(r313_VerticalHook.m(r651_xMiddle, r313_XH - r651_hd.y - r313_HalfStroke, -r651_hd.x, -r651_hd.y));
                r651_currentGlyph.include(r313_ILBody.Serifless(r651_df, r313_XH - r651_hd.y - r313_HalfStroke, r313_Descender, r651_xMiddle));
                r651_currentGlyph.include(r313_ILMarks.Serifed(r651_df, r313_XH, r313_Descender, r651_xMiddle));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiStretchedHookLeft.hookyBottom", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r659_currentGlyph) {
                var _r659_t0, _r659_t1;
                var r659_df = r659_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                r659_currentGlyph.include(r659_df.markSet.p());
                var r659_xMiddle = r313_XMiddleT(r313_xn$MODEI$5sIl)[r313_para.isQuasiProportional ? "Center" : "ZShaped"](r659_df);
                var r659_hd = {
                    "x": r313_ILJut.Hooky(r659_df, r313_XH, r313_Descender, r659_xMiddle) + r313_SerifShiftS,
                    "y": r313_Hook - r313_HalfStroke
                };
                r659_currentGlyph.include(r313_VerticalHook.m(r659_xMiddle, r313_XH - r659_hd.y - r313_HalfStroke, -r659_hd.x, -r659_hd.y));
                r659_currentGlyph.include(r313_ILBody.HookyBottom(r659_df, r313_XH - r659_hd.y - r313_HalfStroke, r313_Descender, r659_xMiddle));
                r659_currentGlyph.include(r313_ILMarks.Serifed(r659_df, r313_XH, r313_Descender, r659_xMiddle));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiStretchedHookLeft.serifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r667_currentGlyph) {
                var _r667_t0, _r667_t1;
                var r667_df = r667_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                r667_currentGlyph.include(r667_df.markSet.p());
                var r667_xMiddle = r313_XMiddleT(r313_xn$MODEI$5sIl)[r313_para.isQuasiProportional ? "Center" : "Serifed"](r667_df);
                var r667_hd = {
                    "x": r313_ILJut.Serifed(r667_df, r313_XH, r313_Descender, r667_xMiddle) + r313_SerifShiftS,
                    "y": r313_Hook - r313_HalfStroke
                };
                r667_currentGlyph.include(r313_VerticalHook.m(r667_xMiddle, r313_XH - r667_hd.y - r313_HalfStroke, -r667_hd.x, -r667_hd.y));
                r667_currentGlyph.include(r313_ILBody.Serifed(r667_df, r313_XH - r667_hd.y - r313_HalfStroke, r313_Descender, r667_xMiddle));
                r667_currentGlyph.include(r313_ILMarks.Serifed(r667_df, r313_XH, r313_Descender, r667_xMiddle));
                return void 0;
            }));
            r313_xn$selectvariant$7Hrq("dotlessiStretchedHookLeft", 639);
            return r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiStretchedHookLeftRTail", 645, new r313_xn$Capture$2Lrc8.GlyphProc(function (r675_currentGlyph) {
                var _r675_t0, _r675_t1;
                var r675_df = r675_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                r675_currentGlyph.include(r675_df.markSet.p());
                var r675_xMiddle = r313_XMiddleT(r313_xn$MODEI$5sIl).Center(r675_df);
                var r675_hd = {
                    "x": r313_ILJut.Hooky(r675_df, r313_XH, 0, r675_xMiddle) + r313_SerifShiftS,
                    "y": r313_Hook - r313_HalfStroke
                };
                r675_currentGlyph.include(r313_VerticalHook.m(r675_xMiddle, r313_XH - r675_hd.y - r313_HalfStroke, -r675_hd.x, -r675_hd.y));
                r675_currentGlyph.include(r313_ILBody.Serifless(r675_df, r313_XH - r675_hd.y - r313_HalfStroke, 0, r675_xMiddle));
                r675_currentGlyph.include(r313_ILMarks.Serifed(r675_df, r313_XH, r313_Descender, r675_xMiddle));
                r675_currentGlyph.deleteBaseAnchor("trailing");
                r675_currentGlyph.include(r313_RetroflexHook.mExt(r675_xMiddle, 0));
                return void 0;
            }));
        })();
        (function () {
            r313_xn$selectvariant$7Hrq("l", "l");
            r313_xn$linkreducedvariant$5sIl8("l/sansSerif", "l", r1_MathSansSerif);
            r313_xn$selectvariant$7Hrq("l/reduced/decompress", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "l"));
            r313_CreateTurnedLetter("turnl", 42881, "l", r313_HalfAdvance, r313_XH / 2);
            r313_xn$selectvariant$7Hrq("l/phoneticLeft", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "l"));
            r313_xn$selectvariant$7Hrq("l/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("follow", "l"));
            r313_xn$selectvariant$7Hrq("l/compLigRight", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "l"));
            r313_xn$selectvariant$7Hrq("lDot/base", new r313_xn$NamedParameterPair$2Lrc9b("follow", "l"));
            r313_xn$selectvariant$7Hrq("lRTail", 621);
            r313_xn$selectvariant$7Hrq("lRTail/reduced/decompress", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "lRTail"));
            r313_xn$selectvariant$7Hrq("lRTail/phoneticRight", new r313_xn$NamedParameterPair$2Lrc9b("follow", "lRTail"));
            r313_xn$selectvariant$7Hrq("llWelsh", 7931, new r313_xn$NamedParameterPair$2Lrc9b("follow", "l"));
            r313_xn$selectvariant$7Hrq("lPalatalHook", 7557, new r313_xn$NamedParameterPair$2Lrc9b("follow", "l"));
            r313_xn$selectvariant$7Hrq("lPalatalHook/reduced/decompress", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "lPalatalHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "l/reduced/decompress"));
            r313_xn$selectvariant$7Hrq("lHighBar", 42825, new r313_xn$NamedParameterPair$2Lrc9b("follow", "l"));
            r313_xn$derivecomposites$7Hrq("lTildeOver", 619, "l/reduced/decompress", "tildeOver");
            r313_xn$derivecomposites$7Hrq("lInvLazySOver", 43831, "l/reduced/decompress", "invLazySOver");
            r313_xn$derivecomposites$7Hrq("lDblTildeOver", 43832, "l/reduced/decompress", "dblTildeOver");
            r313_xn$derivecomposites$7Hrq("lRingOver", 43833, "l/reduced/decompress", "ringOver");
            r313_xn$GlyphSaveSink$2Lrc4b.save("lBelt/overlay", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r698_currentGlyph) {
                var _r698_t0, _r698_t1;
                r698_currentGlyph.setMarkAnchor("overlay", 0, 0);
                r698_currentGlyph.include(r313_BeltOverlay.at(0, 0));
                return void 0;
            }));
            r313_xn$derivecomposites$7Hrq("lBelt", 620, "l/reduced/decompress", "lBelt/overlay");
            r313_xn$derivecomposites$7Hrq("lBeltRTail", 42894, "lRTail/reduced/decompress", "lBelt/overlay");
            r313_xn$derivecomposites$7Hrq("lBeltPalatalHook", 122643, "lPalatalHook/reduced/decompress", "lBelt/overlay");
            r313_xn$derivecomposites$7Hrq("lBelt/phoneticRight", null, "l/phoneticRight", "lBelt/overlay");
            r313_xn$derivecomposites$7Hrq("lBeltRTail/phoneticRight", null, "lRTail/phoneticRight", "lBelt/overlay");
            r313_xn$derivecomposites$7Hrq("lDot", 320, "lDot/base", "LDot/dot");
            r313_CreateCommaCaronComposition("lCaron", 318, "l");
            r313_CreateAccentedComposition("lWedge", null, "l", "caronAbove");
            r313_xn$deriveglyphs$7Hrq("lSlash", 322, "l", function (r701_src, r701_gr) {
                var _r701_t0, _r701_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r703_currentGlyph) {
                    var _r703_t0, _r703_t1;
                    r703_currentGlyph.include(r313_xn$referglyph$1aao(r701_src), r313_AS_BASE, r313_ALSO_METRICS);
                    var r703_anchor = r703_currentGlyph.baseAnchors.overlay;
                    var r703_stretch = Math.sqrt(r703_currentGlyph.advanceWidth / r313_HalfUPM);
                    r703_currentGlyph.include(r313_FlatSlashShape(r703_anchor.x, r703_anchor.y, 0.5 * r313_OverlayStroke, 0.8 * r703_stretch, 0.4 * r703_stretch));
                    return void 0;
                });
            });
            r313_CreateAccentedComposition("lBar", 410, "l", "barOver");
            r313_xn$GlyphSaveSink$2Lrc4b.save("lCurlyTail.serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r708_currentGlyph) {
                var _r708_t0, _r708_t1;
                var r708_df = r708_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                r708_currentGlyph.include(r708_df.markSet.b());
                var r708_xMiddle = r313_XMiddleT(r313_xn$MODEL$5sIl)[r313_para.isQuasiProportional ? "Center" : "FlatTailed"](r708_df);
                r708_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flat(r708_xMiddle - r313_HSwToV(r313_HalfStroke), r313_Ascender, r313_heading(r313_Downward)), r313_curl(r708_xMiddle - r313_HSwToV(r313_HalfStroke), 0 + r313_LongVJut), r313_CurlyTail.n(r313_AdviceStroke(3.5), 0, r708_xMiddle + r313_HSwToV(r313_HalfStroke) + r313_LongJut, r313_SB - (r313_Middle - r708_xMiddle), 0)));
                r313_xn$GlyphSaveSink$2Lrc4b.save("lCurlyTail.hooky", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r708_currentGlyph, r313_ILSerifs.Hooky(r708_df, r313_Ascender, 0, r708_xMiddle)));
                return void 0;
            }));
            return r313_xn$selectvariant$7Hrq("lCurlyTail", 564);
        })();
        (function () {
            r313_xn$selectvariant$7Hrq("grek/tau", 964);
            r313_xn$selectvariant$7Hrq("cyrl/Twe/middle", new r313_xn$NamedParameterPair$2Lrc9b("follow", "grek/tau/tailed"));
            return r313_xn$selectvariant$7Hrq("cyrl/twe/middle", new r313_xn$NamedParameterPair$2Lrc9b("follow", "grek/tau/tailed"));
        })();
        return (function () {
            var _r719_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
            var r719_BBS = _r719_t0.BBS;
            var r719_BBD = _r719_t0.BBD;
            var r719_BBBarCenter = _r719_t0.BBBarCenter;
            r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/dotlessi", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r723_currentGlyph) {
                var _r723_t0, _r723_t1;
                r723_currentGlyph.include(r313_MarkSet.e());
                r723_currentGlyph.include(r719_BBBarCenter(r313_Middle, 0, r313_XH));
                r723_currentGlyph.include(r313_HBar.t(r313_Middle - r719_BBD / 2 - r313_Jut, r313_Middle, r313_XH, r719_BBS));
                r723_currentGlyph.include(r313_HBar.b(r313_Middle - r719_BBD / 2 - r313_Jut, r313_Middle + r719_BBD / 2 + r313_Jut, 0, r719_BBS));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/i", 120154, new r313_xn$Capture$2Lrc8.GlyphProc(function (r730_currentGlyph) {
                var _r730_t0, _r730_t1;
                r730_currentGlyph.include(r313_xn$referglyph$1aao("mathbb/dotlessi"), r313_AS_BASE, r313_ALSO_METRICS);
                r730_currentGlyph.include(r313_xn$referglyph$1aao("mathbb/dotAbove"));
                r1_Dotless.set(r730_currentGlyph, "mathbb/dotlessi");
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/l", 120157, new r313_xn$Capture$2Lrc8.GlyphProc(function (r735_currentGlyph) {
                var _r735_t0, _r735_t1;
                r735_currentGlyph.include(r313_MarkSet.b());
                r735_currentGlyph.include(r719_BBBarCenter(r313_Middle, 0, r313_Ascender));
                r735_currentGlyph.include(r313_HBar.t(r313_Middle - r719_BBD / 2 - r313_Jut, r313_Middle, r313_Ascender, r719_BBS));
                r735_currentGlyph.include(r313_HBar.b(r313_Middle - r719_BBD / 2 - r313_Jut, r313_Middle + r719_BBD / 2 + r313_Jut, 0, r719_BBS));
                return void 0;
            }));
        })();
    });
    return void 0;
});


