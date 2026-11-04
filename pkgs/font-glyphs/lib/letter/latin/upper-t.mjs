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
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-T", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_adws, r313_doST, r313_doSB, _r313_t16, _r313_t18, _r313_t19, _r313_t20, _r313_tag21;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_VJut = _r313_t1.VJut;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
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
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_MaskRight = _r313_t5.MaskRight;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$aliasreducedvariant$1aao8 = _r313_t6["alias-reduced-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateSelectorVariants = _r313_t9.CreateSelectorVariants;
        var r313_DefineSelectorGlyph = _r313_t9.DefineSelectorGlyph;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t10.EFVJutLength;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t11.LetterBarOverlay;
        var r313_SerifFrame = _r313_t11.SerifFrame;
        var r313_UpwardHookShape = _r313_t11.UpwardHookShape;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CyrDescender = _r313_t12.CyrDescender;
        var r313_RetroflexHook = _r313_t12.RetroflexHook;
        var r313_MidHook = _r313_t12.MidHook;
        var r313_LeftHook = _r313_t12.LeftHook;
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-C"].resolve();
        var r313_CLetterForm = _r313_t13.CLetterForm;
        var r313_CConfig = _r313_t13.CConfig;
        var r313_TLeftX = function (r323_df) {
            var _r323_t0, _r323_t1;
            return r323_df.leftSB + 0.75 * r313_OX;
        };
        var r313_TRightX = function (r324_df) {
            var _r324_t0, _r324_t1;
            return r324_df.rightSB - 0.75 * r313_OX;
        };
        var r313_TShape = function (r325_df, r325_top, r325_doTopSerifs, r325_doBottomSerif, r325_fBottomSerifRightHalfOnly) {
            var _r325_t0, _r325_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var r327_swVJut, _r327_t0, _r327_t1;
                r327_currentGlyph.include(r313_tagged("strokeV", r313_VBar.m(r325_df.middle, 0, r325_top)));
                var r327_l = r313_TLeftX(r325_df);
                var r327_r = r313_TRightX(r325_df);
                r327_currentGlyph.include(r313_tagged("strokeLT", r313_HBar.t(r327_l, r325_df.middle, r325_top)));
                r327_currentGlyph.include(r313_tagged("strokeRT", r313_HBar.t(r325_df.middle, r327_r, r325_top)));
                if (r325_doTopSerifs) {
                    r327_swVJut = Math.min(r313_VJutStroke, r313_VSwToH(0.625 * (r325_df.middle - r313_HSwToV(r313_HalfStroke) - r327_l)));
                    r327_currentGlyph.include(r313_tagged("serifRT", r313_VSerif.dr(r327_r, r325_top, r313_VJut, r327_swVJut)));
                    r327_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r327_l, r325_top, r313_VJut, r327_swVJut)));
                }
                if (r325_doBottomSerif) r327_currentGlyph.include(r313_tagged("serifMB", r313_HSerif[r325_fBottomSerifRightHalfOnly ? "rb" : "mb"](r325_df.middle, 0, r313_MidJutCenter)));
                return void 0;
            });
        };
        var r313_CyrKomiTjeShape = function (r334_df, r334_top, r334_doTopSerifs, r334_doBottomSerif) {
            var _r334_t0, _r334_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                var r336_jutTop, r336_jutBot, r336_jutMid, r336_swVJut, _r336_t0, _r336_t1, _r336_t2;
                var r336_sw = r334_df.adviceThinnerStroke(2.75);
                var r336_left = r1_mix(r334_df.leftSB, r334_df.rightSB, 0.3) + r313_OX;
                var r336_right = r334_df.rightSB - r313_OX;
                var r336_xTopBarLeft = r334_df.leftSB - r313_SideJut;
                var r336_xTopBarRight = r1_mix(r336_xTopBarLeft, r336_left + r313_HSwToV(0.5 * r336_sw), 2);
                r336_currentGlyph.include(r313_tagged("strokeLT", r313_HBar.t(r336_xTopBarLeft, r336_left + r313_HSwToV(0.5 * r336_sw), r334_top, r336_sw)));
                r336_currentGlyph.include(r313_tagged("strokeRT", r313_HBar.t(r336_left + r313_HSwToV(0.5 * r336_sw), r336_xTopBarRight, r334_top, r336_sw)));
                r336_currentGlyph.include(r313_tagged("strokeV", r313_UpwardHookShape(new r313_xn$NamedParameterPair$2Lrc9b("left", r336_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r336_right), new r313_xn$NamedParameterPair$2Lrc9b("ybegin", r334_top), new r313_xn$NamedParameterPair$2Lrc9b("yend", r334_top / 2 + r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA * (2 / r334_df.hPack) * r334_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB * (2 / r334_df.hPack) * r334_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("sw", r336_sw))));
                if (r334_doTopSerifs) {
                    _r336_t0 = r313_EFVJutLength(r334_top, 0, 0.5 - (r336_sw / 2 - r313_HalfStroke) / r334_top, r336_sw);
                    r336_jutTop = _r336_t0[0];
                    r336_jutBot = _r336_t0[1];
                    r336_jutMid = _r336_t0[2];
                    r336_swVJut = Math.min(r313_VJutStroke * (r336_sw / r313_Stroke), r313_VSwToH(0.625 * (r336_left - r336_xTopBarLeft)));
                    r336_currentGlyph.include(r313_tagged("serifRT", r313_VSerif.dr(r336_xTopBarRight, r334_top, r336_jutTop, r336_swVJut)));
                    r336_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r336_xTopBarLeft, r334_top, r336_jutTop, r336_swVJut)));
                }
                if (r313_SLAB) r336_currentGlyph.include(r313_SerifFrame(r334_top / 2 + r313_HalfStroke, 0, r336_left, r336_right, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r336_sw)).rt.full);
                return void 0;
            });
        };
        var r313_CyrTeMidHookShape = function (r351_pArc) {
            var _r351_t0, _r351_t1;
            return function (r352_df, r352_top, r352_doTopSerifs, r352_doBottomSerif) {
                var _r352_t0, _r352_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var r354_jutTop, r354_jutBot, r354_jutMid, r354_swVJut, r354_jut, _r354_t0, _r354_t1, _r354_t2;
                    var r354_sw = r352_df.adviceThinnerStroke(2.75);
                    var r354_left = r1_mix(r352_df.leftSB, r352_df.rightSB, 0.3) + r313_OX;
                    var r354_right = r352_df.rightSB - r313_OX;
                    var r354_xTopBarLeft = r352_df.leftSB - r313_SideJut;
                    var r354_xTopBarRight = r1_mix(r354_xTopBarLeft, r354_left + r313_HSwToV(0.5 * r354_sw), 2);
                    r354_currentGlyph.include(r313_tagged("strokeLT", r313_HBar.t(r354_xTopBarLeft, r354_left + r313_HSwToV(0.5 * r354_sw), r352_top, r354_sw)));
                    r354_currentGlyph.include(r313_tagged("strokeRT", r313_HBar.t(r354_left + r313_HSwToV(0.5 * r354_sw), r354_xTopBarRight, r352_top, r354_sw)));
                    r354_currentGlyph.include(r313_tagged("strokeV", r313_VBar.l(r354_left, 0, r352_top, r354_sw)));
                    r354_currentGlyph.include(r313_MidHook.general(new r313_xn$NamedParameterPair$2Lrc9b("left", r354_left + r313_HSwToV(r354_sw)), new r313_xn$NamedParameterPair$2Lrc9b("right", r354_right), new r313_xn$NamedParameterPair$2Lrc9b("top", r1_mix(0, r352_top, r313_HBarPos) + r354_sw / 4), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA * r351_pArc), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB * r351_pArc), new r313_xn$NamedParameterPair$2Lrc9b("sw", r354_sw)));
                    if (r352_doTopSerifs) {
                        _r354_t0 = r313_EFVJutLength(r352_top, 0, r313_HBarPos - (r354_sw / 4 + r313_O) / r352_top, r354_sw);
                        r354_jutTop = _r354_t0[0];
                        r354_jutBot = _r354_t0[1];
                        r354_jutMid = _r354_t0[2];
                        r354_swVJut = Math.min(r313_VJutStroke * (r354_sw / r313_Stroke), r313_VSwToH(0.625 * (r354_left - r354_xTopBarLeft)));
                        r354_currentGlyph.include(r313_tagged("serifRT", r313_VSerif.dr(r354_xTopBarRight, r352_top, r354_jutTop, r354_swVJut)));
                        r354_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r354_xTopBarLeft, r352_top, r354_jutTop, r354_swVJut)));
                    }
                    if (r352_doBottomSerif) {
                        r354_jut = Math.max(r313_Jut, r1_mix(r313_HSwToV(r313_HalfStroke), r313_MidJutCenter, 6 / 7 * r352_df.adws));
                        r354_currentGlyph.include(r313_tagged("serifMB", r313_intersection(r313_MaskLeft(r1_mix(r354_left + r313_HSwToV(r354_sw), r354_right - r313_HSwToV(r354_sw), 0.625)), r313_HSerif.mb(r354_left + r313_HSwToV(0.5 * r354_sw), 0, r354_jut - r313_HSwToV(0.5 * (r313_Stroke - r354_sw)), r354_sw))));
                    }
                    return void 0;
                });
            };
        };
        var r313_CyrTweUpperShape = function (r368_df, r368_top, r368_doTopSerifs, r368_doBottomSerif) {
            var _r368_t0, _r368_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                var _r370_t0, _r370_t1;
                r370_currentGlyph.include(r313_TShape(r368_df, r368_top, r368_doTopSerifs, false));
                r370_currentGlyph.ejectTagged("strokeV");
                return void 0;
            });
        };
        var r313_CyrTallTeShape = function (r373_df, r373_top, r373_doTopSerifs, r373_doBottomSerif) {
            var _r373_t0, _r373_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                var _r375_t0, _r375_t1;
                var r375_doFullSerifs = r373_doTopSerifs && r373_doBottomSerif && !r313_para.isItalic;
                var r375_xLeft = r373_df.leftSB + 0.75 * r313_OX;
                var r375_xBarRight = r1_mix(r373_df.width, r373_df.rightSB, 1.5);
                r375_currentGlyph.include(r313_tagged("strokeLT", r313_HBar.t(r375_xLeft, r375_xBarRight, r373_top)));
                r375_currentGlyph.include(r313_tagged("strokeV", r313_VBar.r(r375_xBarRight, 0, r373_top)));
                if (r373_doTopSerifs) r375_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r375_xLeft, r373_top, r313_VJut)));
                if (r373_doBottomSerif) r375_currentGlyph.include(r313_tagged("serifMB", r313_para.isItalic ? r313_HSerif.rb(r375_xBarRight, 0, r313_SideJut) : r313_union(r313_HSerif.rb(r375_xBarRight - r313_HSwToV(r313_HalfStroke), 0, r313_Jut), r313_HSerif.lb(r375_xBarRight - r313_HSwToV(r313_HalfStroke), 0, r313_MidJutSide))));
                if (r375_doFullSerifs) r375_currentGlyph.include(r313_tagged("serifRT", r313_HSerif.rt(r375_xBarRight, r373_top, r313_SideJut)));
                r375_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r375_xBarRight));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r383_t0, _r383_t1;
            return {
                "TConfig": r313_TConfig
            };
        });
        var r313_TConfig = {
            "serifless": [1, false, false],
            "motionSerifed": [r313_para.advanceScaleT, true, false],
            "serifed": [r313_para.advanceScaleT, true, true]
        };
        var _r313_t14 = Object.entries(r313_TConfig)[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_adws = _r313_t16[1][0];
            r313_doST = _r313_t16[1][1];
            r313_doSB = _r313_t16[1][2];
            _r313_t16[1];
            (function () {
                var r386_suffixEs, r386_styTop, r386_styBot, _r386_t2, _r386_t3, _r386_tag4;
                r313_xn$GlyphSaveSink$2Lrc4b.save("T." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                    var _r389_t0, _r389_t1;
                    var r389_df = r389_currentGlyph.include(r313_DivFrame(r313_adws));
                    r389_currentGlyph.include(r389_df.markSet.capital());
                    r389_currentGlyph.setBaseAnchor("bottomRight", r389_df.middle + r313_HSwToV(r313_HalfStroke), 0);
                    r389_currentGlyph.include(r313_TShape(r389_df, r313_CAP, r313_doST, r313_doSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/TeDescender." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                    var _r396_t0, _r396_t1;
                    var r396_df = r396_currentGlyph.include(r313_DivFrame(r313_adws));
                    r396_currentGlyph.include(r396_df.markSet.capital());
                    r396_currentGlyph.setBaseAnchor("bottomRight", r396_df.middle + r313_HSwToV(r313_HalfStroke), 0);
                    r396_currentGlyph.include(r313_TShape(r396_df, r313_CAP, r313_doST, r313_doSB));
                    r396_currentGlyph.include(r313_CyrDescender.rSideJut(new r313_xn$NamedParameterPair$2Lrc9b("x", r396_df.middle + r313_HSwToV(r313_HalfStroke)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("jut", r313_doSB ? r313_MidJutCenter : r313_Jut)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("TStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                    var _r407_t0, _r407_t1;
                    var r407_df = r313_DivFrame(r313_adws);
                    r407_currentGlyph.include(r313_xn$referglyph$1aao("T." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r407_currentGlyph.include(r313_LetterBarOverlay.m.in(r407_df.middle, 0, r313_CAP, 0.45));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("THookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                    var _r412_t0, _r412_t1;
                    var r412_df = r313_DivFrame(r313_adws);
                    r412_currentGlyph.include(r313_xn$referglyph$1aao("T." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r412_currentGlyph.ejectTagged("serifLT");
                    r412_currentGlyph.ejectTagged("strokeLT");
                    r412_currentGlyph.include(r313_LeftHook(r412_df.leftSB + r313_LeftHook.extension, r313_CAP, r412_df.middle));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("TRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                    var _r419_t0, _r419_t1;
                    var r419_df = r313_DivFrame(r313_adws);
                    r419_currentGlyph.include(r313_xn$referglyph$1aao("T." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r419_currentGlyph.include(r419_df.markSet.capital());
                    r419_currentGlyph.include(r313_RetroflexHook.mExt(r419_df.middle, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpT." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                    var _r425_t0, _r425_t1;
                    var r425_df = r425_currentGlyph.include(r313_DivFrame(r313_adws));
                    r425_currentGlyph.include(r425_df.markSet.e());
                    r425_currentGlyph.setBaseAnchor("bottomRight", r425_df.middle + r313_HSwToV(r313_HalfStroke), 0);
                    r425_currentGlyph.include(r313_TShape(r425_df, r313_XH, r313_doST, r313_doSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/teDescender.upright." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r432_currentGlyph) {
                    var _r432_t0, _r432_t1;
                    var r432_df = r432_currentGlyph.include(r313_DivFrame(r313_adws));
                    r432_currentGlyph.include(r432_df.markSet.e());
                    r432_currentGlyph.include(r313_TShape(r432_df, r313_XH, r313_doST, r313_doSB));
                    r432_currentGlyph.include(r313_CyrDescender.rSideJut(new r313_xn$NamedParameterPair$2Lrc9b("x", r432_df.middle + r313_HSwToV(r313_HalfStroke)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("jut", r313_doSB ? r313_MidJutCenter : r313_Jut)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/TeMidHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                    var _r442_t0, _r442_t1;
                    var r442_df = r442_currentGlyph.include(r313_DivFrame(r313_adws, 3));
                    r442_currentGlyph.include(r442_df.markSet.capDesc());
                    r442_currentGlyph.include(r313_CyrTeMidHookShape(1)(r442_df, r313_CAP, r313_doST, r313_doSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/teMidHook.upright." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
                    var _r448_t0, _r448_t1;
                    var r448_df = r448_currentGlyph.include(r313_DivFrame(r313_adws, 3));
                    r448_currentGlyph.include(r448_df.markSet.p());
                    r448_currentGlyph.include(r313_CyrTeMidHookShape(Math.pow(r313_HBarPos, 0.3))(r448_df, r313_XH, r313_doST, r313_doSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/TjeKomi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
                    var _r455_t0, _r455_t1;
                    var r455_df = r455_currentGlyph.include(r313_DivFrame(r313_adws, 3));
                    r455_currentGlyph.include(r455_df.markSet.capital());
                    r455_currentGlyph.include(r313_CyrKomiTjeShape(r455_df, r313_CAP, r313_doST, r313_doSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tjeKomi.upright." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                    var _r461_t0, _r461_t1;
                    var r461_df = r461_currentGlyph.include(r313_DivFrame(r313_adws, 3));
                    r461_currentGlyph.include(r461_df.markSet.e());
                    r461_currentGlyph.include(r313_CyrKomiTjeShape(r461_df, r313_XH, r313_doST, r313_doSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Twe/upper." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    var r467_df = r467_currentGlyph.include(r313_DivFrame(r313_adws));
                    r467_currentGlyph.include(r467_df.markSet.capital());
                    r467_currentGlyph.include(r313_CyrTweUpperShape(r467_df, r313_CAP, r313_doST, r313_doSB));
                    r467_currentGlyph.setBaseAnchor("cvDecompose", r467_df.width / 2, r313_CAP);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/twe/upper." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
                    var _r474_t0, _r474_t1;
                    var r474_df = r474_currentGlyph.include(r313_DivFrame(r313_adws));
                    r474_currentGlyph.include(r474_df.markSet.e());
                    r474_currentGlyph.include(r313_CyrTweUpperShape(r474_df, r313_XH, r313_doST, r313_doSB));
                    r474_currentGlyph.setBaseAnchor("cvDecompose", r474_df.width / 2, r313_XH);
                    return void 0;
                }));
                r313_DefineSelectorGlyph("cyrl/Tsse", r313_suffix, r313_DivFrame(r313_adws), "capDesc");
                r313_DefineSelectorGlyph("cyrl/tsse", r313_suffix, r313_DivFrame(r313_adws), "p");
                var _r386_t0 = Object.entries(r313_CConfig)[Symbol.iterator]();
                var _r386_t1 = void 0;
                while (!(_r386_t1 = _r386_t0.next()).done) {
                    _r386_t2 = _r386_t1.value;
                    r386_suffixEs = _r386_t2[0];
                    r386_styTop = _r386_t2[1][0];
                    r386_styBot = _r386_t2[1][1];
                    _r386_t2[1];
                    (function () {
                        var r481_TsseDescenderShape = function (r482_df, r482_ada, r482_adb) {
                            var _r482_t0, _r482_t1;
                            var r482_teLeft = r482_df.middle - r313_HSwToV(r313_HalfStroke);
                            var r482_esLeft = r482_teLeft - 0.5 * (r313_SB - 0) + r313_O * 2 - (r313_RightSB - r313_SB) * r313_StrokeWidthBlend(0.05, 0.06);
                            var r482_esRight = r1_mix(r482_esLeft, r482_teLeft, 2);
                            var r482_subDf = r313_DivFrame((r482_esRight - r482_esLeft + 2 * r313_SB) / r313_Width, 2.5, 1);
                            var r482_esTop = 0 + r482_subDf.mvs;
                            var r482_esBot = 0 - (r313_LongVJut - r313_QuarterStroke) - 0.5 * r482_subDf.mvs;
                            var r482_p = (r482_esTop - r482_esBot) / (r313_XH - 0);
                            var r482_es = r313_CLetterForm(r482_subDf, 3, r386_styBot, r482_esTop, r482_esBot, new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook * r482_p), new r313_xn$NamedParameterPair$2Lrc9b("sw", r482_subDf.mvs), new r313_xn$NamedParameterPair$2Lrc9b("ox", 0.5 * r313_O), new r313_xn$NamedParameterPair$2Lrc9b("ada", r482_ada * r482_p), new r313_xn$NamedParameterPair$2Lrc9b("adb", r482_adb * r482_p));
                            return r313_difference(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r482_esLeft - r482_subDf.leftSB, 0), r482_es.full()), r313_intersection(r313_MaskAbove(r313_O), r313_MaskRight(r482_df.middle)));
                        };
                        return !r386_styTop ? (r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Tsse." + r313_suffix + "." + r386_suffixEs, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r490_currentGlyph) {
                            var _r490_t0, _r490_t1;
                            r490_currentGlyph.setWidth(0);
                            r490_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r490_currentGlyph.include(r313_TShape(r313_DivFrame(r313_adws), r313_CAP, r313_doST, r313_doSB, true));
                            r490_currentGlyph.include(r481_TsseDescenderShape(r313_DivFrame(r313_adws), r313_ArchDepthA, r313_ArchDepthB));
                            return void 0;
                        })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tsse." + r313_suffix + "." + r386_suffixEs, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r497_currentGlyph) {
                            var _r497_t0, _r497_t1;
                            r497_currentGlyph.setWidth(0);
                            r497_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r497_currentGlyph.include(r313_TShape(r313_DivFrame(r313_adws), r313_XH, r313_doST, r313_doSB, true));
                            r497_currentGlyph.include(r481_TsseDescenderShape(r313_DivFrame(r313_adws), r313_SmallArchDepthA, r313_SmallArchDepthB));
                            return void 0;
                        }))) : void 0;
                    })();
                }
                r313_xn$selectvariant$7Hrq("cyrl/Tsse." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C/bottomSerif"));
                r313_xn$selectvariant$7Hrq("cyrl/tsse." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/bottomSerif"));
                r313_xn$GlyphSaveSink$2Lrc4b.save("currency/tengeSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r506_currentGlyph) {
                    var _r506_t0, _r506_t1;
                    var r506_df = r506_currentGlyph.include(r313_DivFrame(r313_adws));
                    r506_currentGlyph.include(r506_df.markSet.capital());
                    var r506_gap = Math.max(r313_HalfStroke, 0.1 * (r313_CAP - 0));
                    r506_currentGlyph.include(r313_HBar.t(r313_TLeftX(r506_df), r313_TRightX(r506_df), r313_CAP, r313_OverlayStroke));
                    r506_currentGlyph.include(r313_TShape(r506_df, r313_CAP - r313_OverlayStroke - r506_gap, r313_doST, r313_doSB));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/teTall." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r513_currentGlyph) {
                    var _r513_t0, _r513_t1;
                    var r513_df = r513_currentGlyph.include(r313_DivFrame(1));
                    r513_currentGlyph.include(r513_df.markSet.b());
                    r513_currentGlyph.include(r313_CyrTallTeShape(r513_df, r313_Ascender, r313_doST, r313_doSB));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("T", "T");
        r313_xn$linkreducedvariant$5sIl8("T/sansSerif", "T", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpT", 7451, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("TStroke", 358, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("THookLeft", 428, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("TRTail", 430, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        r313_CreateTurnedLetter("turnT", 42929, "T", r313_HalfAdvance, r313_CAP / 2);
        r313_alias("grek/Tau", 932, "T");
        r313_xn$aliasreducedvariant$1aao8("grek/Tau/sansSerif", "grek/Tau", "T/sansSerif", r1_MathSansSerif);
        r313_alias("cyrl/Te", 1058, "T");
        r313_alias("cyrl/te.upright", null, "smcpT");
        r313_alias("cyrl/te/reduced.upright", null, "smcpT");
        r313_xn$selectvariant$7Hrq("cyrl/TeDescender", 1196, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("cyrl/teDescender.upright", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("cyrl/TjeKomi", 1294, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        r313_xn$selectvariant$7Hrq("cyrl/tjeKomi.upright", null, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        r313_xn$selectvariant$7Hrq("cyrl/teTall", 7300, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("cyrl/TeMidHook", 42634, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("cyrl/teMidHook.upright", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("cyrl/Twe/upper", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        r313_xn$selectvariant$7Hrq("cyrl/twe/upper", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"));
        r313_xn$derivecomposites$7Hrq("cyrl/Twe", 42636, "cyrl/Twe/upper", "cyrl/Twe/middle");
        r313_xn$derivecomposites$7Hrq("cyrl/twe", 42637, "cyrl/twe/upper", "cyrl/twe/middle");
        r313_CreateSelectorVariants("cyrl/Tsse", 42640, Object.keys(r313_TConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_CreateSelectorVariants("cyrl/tsse", 42641, Object.keys(r313_TConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_xn$selectvariant$7Hrq("currency/tengeSign", 8376, new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"));
        r313_CreateAccentedComposition("TCedilla", 354, "T", "cedillaBelow");
        r313_CreateAccentedComposition("TComma", 538, "T", "commaBelow");
        r313_xn$GlyphSaveSink$2Lrc4b.save("smcpICap", 42926, new r313_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
            var r535_swVJut, _r535_t0, _r535_t1;
            var r535_df = r535_currentGlyph.include(r313_DivFrame(r313_SLAB ? r313_para.advanceScaleT : 1));
            r535_currentGlyph.include(r535_df.markSet.capital());
            var r535_l = r313_TLeftX(r535_df);
            var r535_r = r313_TRightX(r535_df);
            r535_currentGlyph.include(r313_VBar.m(r535_df.middle, 0, r313_CAP));
            r535_currentGlyph.include(r313_HBar.t(r535_l, r535_r, r313_CAP));
            r535_currentGlyph.include(r313_HBar.b(r535_l, r535_r, 0));
            if (r313_SLAB) {
                r535_swVJut = Math.min(r313_VJutStroke, r313_VSwToH(0.625 * (r535_df.middle - r313_HSwToV(r313_HalfStroke) - r535_l)));
                r535_currentGlyph.include(r313_tagged("serifRT", r313_VSerif.dr(r535_r, r313_CAP, r313_VJut, r535_swVJut)));
                r535_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r535_l, r313_CAP, r313_VJut, r535_swVJut)));
                r535_currentGlyph.include(r313_tagged("serifRB", r313_VSerif.ur(r535_r, 0, r313_VJut, r535_swVJut)));
                r535_currentGlyph.include(r313_tagged("serifLB", r313_VSerif.ul(r535_l, 0, r313_VJut, r535_swVJut)));
            }
            return void 0;
        }));
        var r313_SampiShape = function (r545_df, r545_top, r545_bottom, r545_doTopSerifs, r545_doBottomSerif) {
            var _r545_t0, _r545_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r547_currentGlyph) {
                var _r547_t0, _r547_t1;
                var r547_kSampiDepth = 0.45;
                var r547_l = r313_TLeftX(r545_df);
                var r547_r = r313_TRightX(r545_df);
                r547_currentGlyph.include(r313_VBar.m(r545_df.middle, r545_top, r545_bottom));
                r547_currentGlyph.include(r313_HBar.t(r547_l, r547_r, r545_top));
                var r547_swVJut = Math.min(r313_VJutStroke, r313_VSwToH(0.625 * (r545_df.middle - r313_HSwToV(r313_HalfStroke) - r547_l)));
                r547_currentGlyph.include(r313_VBar.l(r547_l, r545_top, r1_mix(r545_top - r313_Stroke, r545_bottom, r547_kSampiDepth), r547_swVJut));
                r547_currentGlyph.include(r313_VBar.r(r547_r, r545_top, r1_mix(r545_top - r313_Stroke, r545_bottom, r547_kSampiDepth), r547_swVJut));
                if (r545_doBottomSerif) r547_currentGlyph.include(r313_HSerif.mb(r545_df.middle, r545_bottom, r313_MidJutCenter));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/SampiArchaic", 882, new r313_xn$Capture$2Lrc8.GlyphProc(function (r555_currentGlyph) {
            var _r555_t0, _r555_t1;
            var r555_df = r555_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT));
            r555_currentGlyph.include(r555_df.markSet.capital());
            r555_currentGlyph.include(r313_SampiShape(r555_df, r313_CAP, 0, true, r313_SLAB));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/sampiArchaic", 883, new r313_xn$Capture$2Lrc8.GlyphProc(function (r561_currentGlyph) {
            var _r561_t0, _r561_t1;
            var r561_df = r561_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT));
            r561_currentGlyph.include(r561_df.markSet.p());
            r561_currentGlyph.include(r313_SampiShape(r561_df, r313_XH, r313_Descender, true, false));
            return void 0;
        }));
        var _r313_t17 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t17.BBS;
        var r313_BBD = _r313_t17.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/T", 120139, new r313_xn$Capture$2Lrc8.GlyphProc(function (r568_currentGlyph) {
            var _r568_t0, _r568_t1;
            var r568_df = r568_currentGlyph.include(r313_DivFrame(1));
            r568_currentGlyph.include(r568_df.markSet.capital());
            r568_currentGlyph.include(r313_HBar.t(r313_TLeftX(r568_df), r313_TRightX(r568_df), r313_CAP, r313_BBS));
            r568_currentGlyph.include(r313_VBar.m(r568_df.middle - r313_BBD / 2, 0, r313_CAP, r313_BBS));
            r568_currentGlyph.include(r313_VBar.m(r568_df.middle + r313_BBD / 2, 0, r313_CAP, r313_BBS));
            r568_currentGlyph.include(r313_HBar.b(r568_df.middle - r313_BBD / 2, r568_df.middle + r313_BBD / 2, 0, r313_BBS));
            return void 0;
        }));
    });
    return void 0;
});


