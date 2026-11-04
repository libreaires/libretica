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
var r1_ScheduleLeaningMark = _r1_t9.ScheduleLeaningMark;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Mark-Below", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t10, _r313_t11, _r313_t12, _r313_tag13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_AccentStackOffset = _r313_t1.AccentStackOffset;
        var r313_AccentClearance = _r313_t1.AccentClearance;
        var r313_AccentHeight = _r313_t1.AccentHeight;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_DotAt = _r313_t5.DotAt;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_FlipAround = _r313_t5.FlipAround;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$queryglyph$1aao = _r313_t6["query-glyph"];
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markExtend = _r313_t7.markExtend;
        var r313_markStroke = _r313_t7.markStroke;
        var r313_markHalfStroke = _r313_t7.markHalfStroke;
        var r313_markStress = _r313_t7.markStress;
        var r313_markFine = _r313_t7.markFine;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markMiddle = _r313_t8.markMiddle;
        var r313_markDotsRadius = _r313_t8.markDotsRadius;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_WigglyLineShape = _r313_t9.WigglyLineShape;
        var r313_SnakeBelowShape = _r313_t9.SnakeBelowShape;
        var r313_MeasureGlyphBounds = _r313_t9.MeasureGlyphBounds;
        var r313_CenterMarkHorizontally = _r313_t9.CenterMarkHorizontally;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r320_t0, _r320_t1;
            return {
                "belowMarkBot": r313_belowMarkBot,
                "belowMarkTop": r313_belowMarkTop,
                "belowMarkMid": r313_belowMarkMid,
                "belowMarkStack": r313_belowMarkStack
            };
        });
        var r313_belowMarkBot = 0 - r313_AccentClearance - r313_AccentHeight;
        var r313_belowMarkTop = 0 - r313_AccentClearance;
        var r313_belowMarkMid = r1_mix(r313_belowMarkBot, r313_belowMarkTop, 0.5);
        var r313_belowMarkStack = 0 - r313_AccentStackOffset;
        var r313_toneBelowBaseline = r313_belowMarkTop;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r322_t0, _r322_t1;
            return {
                "AlignToneMarkBelow": r313_AlignToneMarkBelow
            };
        });
        var r313_AlignToneMarkBelow = function () {
            var _r323_t0, _r323_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1;
                r325_currentGlyph.include(r313_CenterMarkHorizontally());
                var r325_b = r325_currentGlyph.include(r313_MeasureGlyphBounds());
                if (!r325_b) return void 0;
                var r325_yShift = r313_toneBelowBaseline - r325_b.yMax;
                if (Math.abs(r325_yShift) > 0.000001) r325_currentGlyph.applyTransform(r313_ApparentTranslate(0, r325_yShift));
                return void 0;
            });
        };
        var r313_StdAnchors = (function () {
            var r330_impl, r330_narrow, r330_mediumNarrow, r330_medium, r330_mediumWide, r330_wide;
            var r330_exports = {};
            r330_exports.impl = r330_impl = function (r338_padding, r338_k, r338_fLeaning) {
                var _r338_t0, _r338_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    r340_currentGlyph.setMarkAnchor("below", r313_markMiddle, 0 + r338_padding * r313_AccentHeight, r313_markMiddle, r313_belowMarkStack - r338_padding * r313_AccentHeight);
                    r340_currentGlyph.setBaseAnchor("belowBraceL", r313_markMiddle - r338_k * r313_markExtend, r313_belowMarkMid);
                    r340_currentGlyph.setBaseAnchor("belowBraceR", r313_markMiddle + r338_k * r313_markExtend, r313_belowMarkMid);
                    if (r338_fLeaning) r1_ScheduleLeaningMark.set(r340_currentGlyph);
                    return void 0;
                });
            };
            r330_exports.narrow = r330_narrow = function () {
                var _r345_t0, _r345_t1;
                return r330_impl(0, 0, true);
            };
            r330_exports.mediumNarrow = r330_mediumNarrow = function () {
                var _r347_t0, _r347_t1;
                return r330_impl(0, 0.25, true);
            };
            r330_exports.medium = r330_medium = function () {
                var _r349_t0, _r349_t1;
                return r330_impl(0, 0.5, true);
            };
            r330_exports.mediumWide = r330_mediumWide = function () {
                var _r351_t0, _r351_t1;
                return r330_impl(0, 0.75);
            };
            r330_exports.wide = r330_wide = function () {
                var _r353_t0, _r353_t1;
                return r330_impl(0, 1);
            };
            return r330_exports;
        })();
        r313_xn$GlyphSaveSink$2Lrc4b.save("blankBelow", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
            var _r356_t0, _r356_t1;
            r356_currentGlyph.setWidth(0);
            r356_currentGlyph.include(r313_StdAnchors.narrow());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("blankLeaningBelow", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            r361_currentGlyph.setWidth(0);
            r361_currentGlyph.setMarkAnchor("leaningBelow", r313_markMiddle, 0, r313_markMiddle, r313_belowMarkStack);
            r361_currentGlyph.setBaseAnchor("belowBraceL", r313_markMiddle - 0.5 * r313_markExtend, r313_belowMarkMid);
            r361_currentGlyph.setBaseAnchor("belowBraceR", r313_markMiddle + 0.5 * r313_markExtend, r313_belowMarkMid);
            return void 0;
        }));
        var r313_CedillaShape = function (r366_ext) {
            var _r366_t0, _r366_t1;
            var r366_fine = Math.min(0.75 * (r313_belowMarkTop - r313_belowMarkBot - r313_markStroke), r313_AdviceStroke(6));
            var r366_cedillaTop = r313_belowMarkTop + 0.875 * r366_fine;
            var r366_cedillaBot = r313_belowMarkBot;
            return r313_union(r313_VBar.m(r313_markMiddle, r366_ext, r366_cedillaTop - r366_fine, r313_markStroke), r313_dispiro(r313_flat(r313_markMiddle - r313_HSwToV(0.5 * r313_markStroke), r366_cedillaTop, r313_widths.rhs.heading(r366_fine, r313_Rightward)), r313_curl(r313_markMiddle, r366_cedillaTop, r313_heading(r313_Rightward)), r313_archv(), r313_g4(r313_markMiddle + r313_markExtend - r313_O, r1_mix(r366_cedillaTop, r366_cedillaBot, 0.5), r313_widths.rhs.heading(r1_mix(r366_fine, r313_markStroke, 0.5), {
                "x": r313_HVContrast,
                "y": -0.5 * (r313_markStroke - r366_fine) / r313_markStroke
            })), r313_arcvh(), r313_flat(r313_markMiddle, r366_cedillaBot, r313_widths.rhs.heading(r313_markStroke, r313_Leftward)), r313_curl(r313_markMiddle - r313_markExtend, r366_cedillaBot, r313_heading(r313_Leftward))));
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("cedillaExtShapeBelow", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
            var _r369_t0, _r369_t1;
            r369_currentGlyph.setWidth(0);
            r369_currentGlyph.include(r313_StdAnchors.medium());
            r369_currentGlyph.include(r313_CedillaShape(4 * r313_Stroke));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cedillaExtShapeBelowOArc", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
            var _r375_t0, _r375_t1;
            r375_currentGlyph.setWidth(0);
            r375_currentGlyph.include(r313_StdAnchors.medium());
            r375_currentGlyph.include(r313_CedillaShape(r313_Stroke + r313_O));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cedillaExtShapeBelowSOArc", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
            var _r381_t0, _r381_t1;
            r381_currentGlyph.setWidth(0);
            r381_currentGlyph.include(r313_StdAnchors.medium());
            r381_currentGlyph.include(r313_CedillaShape(r313_AdviceStroke2(2, 3, r313_XH) + r313_O));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cedillaBelow", 807, new r313_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
            var _r387_t0, _r387_t1;
            r387_currentGlyph.setWidth(0);
            r387_currentGlyph.include(r313_StdAnchors.medium());
            r387_currentGlyph.include(r313_CedillaShape(0));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("iotaBelow", 837, new r313_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
            var _r393_t0, _r393_t1;
            r393_currentGlyph.setWidth(0);
            r393_currentGlyph.include(r313_StdAnchors.narrow());
            r393_currentGlyph.include(r313_VBar.m(r313_markMiddle, r313_belowMarkBot, r313_belowMarkTop, r313_markStroke));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("iotaLF", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
            var _r399_t0, _r399_t1;
            r399_currentGlyph.setWidth(0);
            r399_currentGlyph.setMarkAnchor("lf", r313_markMiddle, 0, r313_markMiddle, r313_belowMarkStack);
            r399_currentGlyph.include(r313_VBar.m(r313_markMiddle, r313_belowMarkBot, r313_belowMarkTop, r313_markStroke));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("descenderBarBelow", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
            var _r405_t0, _r405_t1;
            r405_currentGlyph.setWidth(0);
            r405_currentGlyph.include(r313_StdAnchors.narrow());
            r405_currentGlyph.include(r313_VBar.m(r313_markMiddle, r313_Descender, r1_mix(r313_belowMarkTop, 0, 0.5), r313_markStroke));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("shelfBelow", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
            var _r411_t0, _r411_t1;
            r411_currentGlyph.setWidth(0);
            r411_currentGlyph.include(r313_StdAnchors.impl(0, 1.5));
            r411_currentGlyph.include(r313_VBar.l(r313_SB - r313_Width, r313_belowMarkBot, r313_belowMarkTop, r313_markFine * 2));
            r411_currentGlyph.include(r313_VBar.r(r313_RightSB - r313_Width, r313_belowMarkBot, r313_belowMarkTop, r313_markFine * 2));
            r411_currentGlyph.include(r313_HBar.b(r313_SB - r313_Width, r313_RightSB - r313_Width, r313_belowMarkBot, r313_markFine * 2));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("openShelfBelow", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
            var _r419_t0, _r419_t1;
            r419_currentGlyph.setWidth(0);
            r419_currentGlyph.include(r313_StdAnchors.impl(0, 1.5));
            r419_currentGlyph.include(r313_VBar.l(r313_SB - r313_Width, r313_belowMarkBot, r313_belowMarkTop, r313_markFine * 2));
            r419_currentGlyph.include(r313_HBar.b(r313_SB - r313_Width, r313_RightSB - r313_Width, r313_belowMarkBot, r313_markFine * 2));
            return void 0;
        }));
        var r313_mirrorAnchor = function (r424_gs, r424_gt, r424_srcCls, r424_dstCls) {
            var r424_a, _r424_t0, _r424_t1;
            if (r424_gs.markAnchors[r424_srcCls]) {
                r424_a = r424_gs.gizmo.unapply(r424_gs.markAnchors[r424_srcCls]);
                r424_gt.setMarkAnchor(r424_dstCls, r1_mix(r313_markMiddle, r424_a.x, -1), r1_mix(r313_XH / 2, r424_a.y, -1));
            }
            return r424_gs.baseAnchors[r424_srcCls] ? (r424_a = r424_gs.gizmo.unapply(r424_gs.baseAnchors[r424_srcCls]), r424_gt.setBaseAnchor(r424_dstCls, r1_mix(r313_markMiddle, r424_a.x, -1), r1_mix(r313_XH / 2, r424_a.y, -1))) : void 0;
        };
        var r313_TurnAboveMarkToBelow = function (r425_gnBelowMark, r425_unicodeBelowMark, r425_gnAboveMark) {
            var _r425_t0, _r425_t1;
            return r313_xn$deriveglyphs$7Hrq(r425_gnBelowMark, r425_unicodeBelowMark, r425_gnAboveMark, function (r426_src, r426_gr) {
                var _r426_t0, _r426_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                    var _r428_t0, _r428_t1;
                    r428_currentGlyph.setWidth(0);
                    r428_currentGlyph.include(r313_xn$referglyph$1aao(r426_src));
                    r428_currentGlyph.include(r313_FlipAround(r313_markMiddle, r313_XH / 2));
                    var r428_aboveGlyph = r313_xn$queryglyph$1aao(r426_src);
                    if (r428_aboveGlyph) {
                        r313_mirrorAnchor(r428_aboveGlyph, r428_currentGlyph, "above", "below");
                        r313_mirrorAnchor(r428_aboveGlyph, r428_currentGlyph, "aboveBraceL", "belowBraceR");
                        r313_mirrorAnchor(r428_aboveGlyph, r428_currentGlyph, "aboveBraceR", "belowBraceL");
                    }
                    if (r1_ScheduleLeaningMark.get(r428_aboveGlyph)) r1_ScheduleLeaningMark.set(r428_currentGlyph);
                    return void 0;
                });
            });
        };
        r313_TurnAboveMarkToBelow("graveBelow", 790, "graveAbove");
        r313_TurnAboveMarkToBelow("acuteBelow", 791, "acuteAbove");
        r313_TurnAboveMarkToBelow("leftTackBelow", 792, "rightTackAbove");
        r313_TurnAboveMarkToBelow("rightTackBelow", 793, "leftTackAbove");
        r313_TurnAboveMarkToBelow("leftHalfRingBelow", 796, "rightHalfRingAbove");
        r313_TurnAboveMarkToBelow("upTackBelow", 797, "downTackAbove");
        r313_TurnAboveMarkToBelow("downTackBelow", 798, "upTackAbove");
        r313_TurnAboveMarkToBelow("plusBelow", 799, "plusAbove");
        r313_TurnAboveMarkToBelow("minusBelow", 800, "minusAbove");
        r313_TurnAboveMarkToBelow("dotBelow", 803, "dotAbove");
        r313_TurnAboveMarkToBelow("dieresisBelow", 804, "dieresisAbove");
        r313_TurnAboveMarkToBelow("ringBelow", 805, "ringAbove");
        r313_TurnAboveMarkToBelow("commaBelow", 806, "turnCommaAbove");
        r313_TurnAboveMarkToBelow("ogonekBelow", 808, "ogonekAbove");
        r313_TurnAboveMarkToBelow("barBelow", 809, "barAbove");
        r313_TurnAboveMarkToBelow("bridgeBelow", 810, "invBridgeAbove");
        r313_TurnAboveMarkToBelow("caronBelow", 812, "circumflexAbove");
        r313_TurnAboveMarkToBelow("circumflexBelow", 813, "caronAbove");
        r313_TurnAboveMarkToBelow("breveBelow", 814, "invBreveAbove");
        r313_TurnAboveMarkToBelow("invBreveBelow", 815, "breveAbove");
        r313_TurnAboveMarkToBelow("tildeBelow", 816, "tildeAbove");
        r313_TurnAboveMarkToBelow("macronBelow", 817, "macronAbove");
        r313_TurnAboveMarkToBelow("underlineBelow", 818, "overlineAbove");
        r313_TurnAboveMarkToBelow("dblUnderlineBelow", 819, "dblOverlineAbove");
        r313_TurnAboveMarkToBelow("rightHalfRingBelow", 825, "leftHalfRingAbove");
        r313_TurnAboveMarkToBelow("invBridgeBelow", 826, "bridgeAbove");
        r313_TurnAboveMarkToBelow("boxBelow", 827, "boxAbove");
        r313_TurnAboveMarkToBelow("seagullBelow", 828, "turnSeagullAbove");
        r313_TurnAboveMarkToBelow("equalBelow", 839, "equalAbove");
        r313_TurnAboveMarkToBelow("dblBarBelow", 840, "dblBarAbove");
        r313_TurnAboveMarkToBelow("leftAngleBelow", 841, "turnLeftAngleAbove");
        r313_TurnAboveMarkToBelow("lrArrowBelow", 845, "lrArrowAbove");
        r313_TurnAboveMarkToBelow("upArrowBelow", 846, "downArrowAbove");
        r313_TurnAboveMarkToBelow("crossBelow", 851, "crossAbove");
        r313_TurnAboveMarkToBelow("leftArrowHeadBelow", 852, "rightArrowHeadAbove");
        r313_TurnAboveMarkToBelow("rightArrowHeadBelow", 853, "leftArrowHeadAbove");
        r313_TurnAboveMarkToBelow("dblRingBelow", 858, "dblRingAbove");
        r313_TurnAboveMarkToBelow("turnCommaBelow", 6839, "commaAbove");
        r313_TurnAboveMarkToBelow("dblTurnCommaBelow", 6840, "dblCommaAbove");
        r313_TurnAboveMarkToBelow("dblPlusBelow", 6858, "dblPlusAbove");
        r313_TurnAboveMarkToBelow("dotRingBelow", 6877, "ringDotAbove");
        r313_TurnAboveMarkToBelow("doubleGraveBelow", 6894, "doubleGraveAbove");
        r313_TurnAboveMarkToBelow("doubleAcuteBelow", 6895, "doubleAcuteAbove");
        r313_TurnAboveMarkToBelow("zigzagBelow", 7631, "zigzagAbove");
        r313_TurnAboveMarkToBelow("wideInvBridgeBelow", 7673, "wideBridgeAbove");
        r313_TurnAboveMarkToBelow("dblTildeBelow", 7677, "dblTildeAbove");
        r313_TurnAboveMarkToBelow("ellipsisBelow", 8424, "ellipsisAbove");
        r313_TurnAboveMarkToBelow("rightHLArrowBelow", 8428, "leftHRArrowAbove");
        r313_TurnAboveMarkToBelow("leftHRArrowBelow", 8429, "rightHLArrowAbove");
        r313_TurnAboveMarkToBelow("leftArrowBelow", 8430, "rightArrowAbove");
        r313_TurnAboveMarkToBelow("rightArrowBelow", 8431, "leftArrowAbove");
        r313_TurnAboveMarkToBelow("upArrowHeadBelow", null, "downArrowHeadAbove");
        r313_TurnAboveMarkToBelow("downArrowHeadBelow", null, "upArrowHeadAbove");
        r313_TurnAboveMarkToBelow("invCommaBelow", null, "revCommaAbove");
        r313_TurnAboveMarkToBelow("sbRsbUnderlineBelow", null, "sbRsbOverlineAbove");
        r313_TurnAboveMarkToBelow("largeCandrabinduBelow", null, "largeFermataAbove");
        r313_xn$GlyphSaveSink$2Lrc4b.save("rightAndUpArrowheadBelow", 854, new r313_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
            var _r434_t0, _r434_t1;
            r434_currentGlyph.setWidth(0);
            r434_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(-r313_markExtend, 0), r313_xn$referglyph$1aao("rightArrowHeadBelow")));
            r434_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(+r313_markExtend, 0), r313_xn$referglyph$1aao("upArrowHeadBelow")));
            r434_currentGlyph.include(r313_StdAnchors.impl(0, 1.5));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("rightAndDownArrowheadBelow", 7679, new r313_xn$Capture$2Lrc8.GlyphProc(function (r441_currentGlyph) {
            var _r441_t0, _r441_t1;
            r441_currentGlyph.setWidth(0);
            r441_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(-r313_markExtend, 0), r313_xn$referglyph$1aao("rightArrowHeadBelow")));
            r441_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(+r313_markExtend, 0), r313_xn$referglyph$1aao("downArrowHeadBelow")));
            r441_currentGlyph.include(r313_StdAnchors.impl(0, 1.5));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("dblCrossBelow", 6837, new r313_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
            var _r448_t0, _r448_t1;
            r448_currentGlyph.setWidth(0);
            r448_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(-r313_markExtend, 0), r313_xn$referglyph$1aao("crossBelow")));
            r448_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(+r313_markExtend, 0), r313_xn$referglyph$1aao("crossBelow")));
            r448_currentGlyph.include(r313_StdAnchors.impl(0, 1.5));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("wigglyLineBelow", 6838, new r313_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
            var _r455_t0, _r455_t1;
            r455_currentGlyph.setWidth(0);
            r455_currentGlyph.include(r313_StdAnchors.impl(0, 1.5));
            r455_currentGlyph.include(r313_WigglyLineShape(new r313_xn$NamedParameterPair$2Lrc9b("ttop", r313_belowMarkTop), new r313_xn$NamedParameterPair$2Lrc9b("tbot", r313_belowMarkBot + r313_markFine / 2), new r313_xn$NamedParameterPair$2Lrc9b("width", r313_markExtend * 3), new r313_xn$NamedParameterPair$2Lrc9b("hs", r313_markHalfStroke)));
            r455_currentGlyph.include(r313_AlignToneMarkBelow());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("snakeBelow", 7618, new r313_xn$Capture$2Lrc8.GlyphProc(function (r466_currentGlyph) {
            var _r466_t0, _r466_t1;
            r466_currentGlyph.setWidth(0);
            r466_currentGlyph.include(r313_StdAnchors.impl(0, 1.75));
            r466_currentGlyph.include(r313_SnakeBelowShape(new r313_xn$NamedParameterPair$2Lrc9b("ttop", r313_belowMarkTop), new r313_xn$NamedParameterPair$2Lrc9b("tbot", r313_belowMarkBot - 0.55 * r313_AccentHeight), new r313_xn$NamedParameterPair$2Lrc9b("topAmp", r313_markExtend * 0.85), new r313_xn$NamedParameterPair$2Lrc9b("botAmp", r313_markExtend * 0.32), new r313_xn$NamedParameterPair$2Lrc9b("hsTop", r313_markFine), new r313_xn$NamedParameterPair$2Lrc9b("hsBot", 0.4 * r313_markFine)));
            r466_currentGlyph.include(r313_AlignToneMarkBelow());
            return void 0;
        }));
        var r313_centralizationFine = r313_AdviceStroke(6);
        var r313_slashDx = (r313_RightSB - r313_SB) / 2 + r313_O * 3 - 0.5 * r313_centralizationFine;
        var r313_slashDy = r313_XH * 0.6;
        var r313_centralizationY0 = r313_Stroke;
        var r313_centralizationY1 = r313_belowMarkBot;
        var r313_centralizationCx = r313_markMiddle - (r313_RightSB - r313_SB) / 3;
        var r313_centralizationX0 = r313_centralizationCx + r313_slashDx * r313_centralizationY0 / r313_slashDy;
        var r313_centralizationX1 = r313_centralizationCx + r313_slashDx * r313_centralizationY1 / r313_slashDy;
        var r313_centralizationBlobR = 0.45 * r313_AccentHeight;
        r313_xn$GlyphSaveSink$2Lrc4b.save("lightCentralizationStrokeBelow", 6841, new r313_xn$Capture$2Lrc8.GlyphProc(function (r479_currentGlyph) {
            var _r479_t0, _r479_t1;
            r479_currentGlyph.setWidth(0);
            r479_currentGlyph.include(r313_StdAnchors.impl(0, 1.25, true));
            r479_currentGlyph.include(r313_dispiro(r313_widths.center(r313_centralizationFine), r313_flat(r313_centralizationX0, r313_centralizationY0), r313_curl(r313_centralizationX1, r313_centralizationY1)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("strongCentralizationStrokeBelow", 6842, new r313_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
            var _r485_t0, _r485_t1;
            r485_currentGlyph.setWidth(0);
            r485_currentGlyph.include(r313_StdAnchors.impl(0, 1.25, true));
            r485_currentGlyph.include(r313_dispiro(r313_widths.center(r313_centralizationFine), r313_flat(r313_centralizationX0, r313_centralizationY0), r313_curl(r313_centralizationX1, r313_centralizationY1)));
            r485_currentGlyph.include(r313_DotAt(r313_centralizationX1, r313_centralizationY1, r313_centralizationBlobR));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("leftParenBelow", 6851, new r313_xn$Capture$2Lrc8.GlyphProc(function (r492_currentGlyph) {
            var _r492_t0, _r492_t1;
            r492_currentGlyph.setWidth(0);
            r492_currentGlyph.setMarkAnchor("belowBraceL", r313_markMiddle, r313_belowMarkMid, r313_markMiddle - r313_markExtend, r313_belowMarkMid);
            var r492_braceDepth = r313_markExtend * 0.25;
            var r492_left = r313_markMiddle - 1.5 * r313_markExtend;
            r492_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_markFine), r313_g4(r492_left + r492_braceDepth, r313_belowMarkTop + r313_markFine), r313_g4(r492_left + r313_OX, r313_belowMarkMid), r313_g4(r492_left + r492_braceDepth, r313_belowMarkBot - r313_markFine)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("rightParenBelow", 6852, new r313_xn$Capture$2Lrc8.GlyphProc(function (r498_currentGlyph) {
            var _r498_t0, _r498_t1;
            r498_currentGlyph.setWidth(0);
            r498_currentGlyph.setMarkAnchor("belowBraceR", r313_markMiddle, r313_belowMarkMid, r313_markMiddle + r313_markExtend, r313_belowMarkMid);
            var r498_braceDepth = r313_markExtend * 0.25;
            var r498_right = r313_markMiddle + 1.5 * r313_markExtend;
            r498_currentGlyph.include(r313_dispiro(r313_widths.rhs(r313_markFine), r313_g4(r498_right - r498_braceDepth, r313_belowMarkTop + r313_markFine), r313_g4(r498_right - r313_OX, r313_belowMarkMid), r313_g4(r498_right - r498_braceDepth, r313_belowMarkBot - r313_markFine)));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("parenBelow", 6845, new r313_xn$Capture$2Lrc8.GlyphProc(function (r504_currentGlyph) {
            var _r504_t0, _r504_t1;
            r504_currentGlyph.setWidth(0);
            r504_currentGlyph.include(r313_xn$referglyph$1aao("leftParenBelow"));
            r504_currentGlyph.include(r313_xn$referglyph$1aao("rightParenBelow"));
            return void 0;
        }));
    });
    return void 0;
});


