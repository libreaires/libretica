"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_quantize = _r1_t8.quantize;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Phi", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Bowl, r313_adws, r313_Bar, r313_sMT, r313_sMB, _r313_t14, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
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
        var r313_Width = _r313_t1.Width;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Downward = _r313_t1.Downward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_ArchDepthAClamped = _r313_t1.ArchDepthAClamped;
        var r313_TINY = _r313_t1.TINY;
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
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_OShape = _r313_t5.OShape;
        var r313_OShapeFlatTB = _r313_t5.OShapeFlatTB;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendAboveBaseAnchors = _r313_t7.ExtendAboveBaseAnchors;
        var r313_ExtendBelowBaseAnchors = _r313_t7.ExtendBelowBaseAnchors;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_BowlXDepth = _r313_t8.BowlXDepth;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_FlatHookDepth = _r313_t9.FlatHookDepth;
        var r313_DiagTail = _r313_t9.DiagTail;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_OBarLeft = _r313_t9.OBarLeft;
        var r313_OBarRight = _r313_t9.OBarRight;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-T"].resolve();
        var r313_yShortNeck1 = _r313_t10.yShortNeck1;
        var r313_yShortNeck2 = _r313_t10.yShortNeck2;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-Thorn"].resolve();
        var r313_ThornShapeImpl = _r313_t11.ThornShapeImpl;
        var r313_PhiRing = function (r321_fFlatTB) {
            var _r321_t0, _r321_t1;
            return function (r322_df, r322_y2, r322_y3, r322_ada, r322_adb) {
                var _r322_t0, _r322_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                    var r324_sbMul, r324_l, r324_r, r324_turnRadius, _r324_t0, _r324_t1;
                    r324_currentGlyph.include(r313_VBar.m(r322_df.middle, r322_y2, r322_y3, r322_df.mvs));
                    if (r321_fFlatTB) {
                        r324_sbMul = 1 - 0.75 * (r322_df.adws % 0.5);
                        r324_l = r1_mix(0, r322_df.leftSB, r324_sbMul);
                        r324_r = r1_mix(r322_df.width, r322_df.rightSB, r324_sbMul);
                        r324_turnRadius = r313_BowlXDepth(r322_y3, r322_y2, r324_l, r322_df.middle + r313_HSwToV(r313_HalfStroke), r322_df.mvs);
                        r324_currentGlyph.include(r313_OShapeFlatTB(r322_y3, r322_y2, r324_l, r324_r, r322_df.mvs, r322_ada, r322_adb, Math.max(r324_r - r324_l - 2 * r324_turnRadius, r313_HSwToV(r1_clamp(r322_df.mvs, r313_Stroke, r313_VSwToH(r324_r - r324_l - r313_HSwToV(2.5 * r322_df.mvs)))))));
                    } else r324_currentGlyph.include(r313_OShape(r322_y3, r322_y2, r322_df.leftSB, r322_df.rightSB, r322_df.mvs, r322_ada, r322_adb));
                    return {
                        "swBar": Math.min(r313_Stroke, r322_df.adviceStroke(2))
                    };
                });
            };
        };
        var r313_CyrEfSplitRing = function (r328_df, r328_y2, r328_y3, r328_ada, r328_adb) {
            var _r328_t0, _r328_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                var _r330_t0, _r330_t1;
                r330_currentGlyph.include(r313_VBar.m(r328_df.middle, r328_y2, r328_y3, r328_df.mvs));
                var r330_subDf = r328_df.slice(3, 2, r313_OX);
                r330_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r328_y3), new r313_xn$NamedParameterPair$2Lrc9b("bot", r328_y2), new r313_xn$NamedParameterPair$2Lrc9b("left", r328_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r328_df.middle + r313_HSwToV(0.5 * r328_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r328_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r330_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r330_subDf.smallArchDepthB)));
                r330_currentGlyph.include(r313_OBarLeft.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r328_y3), new r313_xn$NamedParameterPair$2Lrc9b("bot", r328_y2), new r313_xn$NamedParameterPair$2Lrc9b("left", r328_df.middle - r313_HSwToV(0.5 * r328_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r328_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r328_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r330_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r330_subDf.smallArchDepthB)));
                return {
                    "swBar": r328_df.mvs
                };
            });
        };
        var r313_LowerPhiCursiveRing = function (r350_df, r350_y2, r350_y3, r350_ada, r350_adb) {
            var _r350_t0, _r350_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var _r352_t0, _r352_t1;
                var r352_l = r350_df.leftSB + r313_OX * 2;
                var r352_r = r350_df.rightSB - r313_OX * 2;
                r352_currentGlyph.include(r313_dispiro(r313_widths.lhs(r350_df.mvs), r313_g4(r1_mix(r350_df.leftSB, r350_df.rightSB, 0.1), r350_y3), r313_g4(r352_l, r1_mix(r350_y2, r350_y3, 0.55)), r313_Arch.lhs(r350_y2, new r313_xn$NamedParameterPair$2Lrc9b("sw", r350_df.mvs)), r313_g4(r352_r, r1_mix(r350_y2, r350_y3, 0.55)), r313_arcvh(8), r313_g4.left.mid(r1_mix(r352_r, r350_df.middle - r313_HSwToV(0.5 * r350_df.mvs), 0.525), r350_y3, r313_heading(r313_Leftward)), r313_archv(), r313_flat(r350_df.middle - r313_HSwToV(0.5 * r350_df.mvs), r1_mix(r350_y2, r350_y3, 0.66)), r313_curl(r350_df.middle - r313_HSwToV(0.5 * r350_df.mvs), r350_y2 + 0.2 * r350_df.mvs, r313_heading(r313_Downward))));
                return {
                    "swBar": Math.min(r313_Stroke, r350_df.adviceStroke(2))
                };
            });
        };
        var r313_StraightBar = function (r355_df, r355_y1, r355_y2, r355_y3, r355_y4, r355_sw) {
            var _r355_t0, _r355_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                var _r357_t0, _r357_t1;
                r357_currentGlyph.include(r313_VBar.m(r355_df.middle, r355_y1, r355_y2 + r313_HalfStroke, r355_sw));
                r357_currentGlyph.include(r313_VBar.m(r355_df.middle, r355_y3 - r313_HalfStroke, r355_y4, r355_sw));
                return void 0;
            });
        };
        var r313_CursiveBar = function (r360_fDiag) {
            var _r360_t0, _r360_t1;
            return function (r361_df, r361_y1, r361_y2, r361_y3, r361_y4, r361_sw) {
                var _r361_t0, _r361_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                    var _r363_t0, _r363_t1;
                    var r363_adwsHook = r1_quantize(r1_mix(1, 1 / r361_df.adws, 0.5), 1 / 6);
                    var r363_mulHook = r1_mix(1, r363_adwsHook, 1.5);
                    var r363_dfHook = r313_DivFrame(r363_adwsHook, 1, r363_mulHook);
                    var r363_hd = r313_FlatHookDepth(r363_dfHook);
                    var r363_xCrossLeft = r1_mix(0, r363_dfHook.leftSB, r363_mulHook) + (r361_df.middle - r363_dfHook.middle);
                    var r363_xCrossRight = r1_mix(r363_dfHook.width, r363_dfHook.rightSB, r363_mulHook) + (r361_df.middle - r363_dfHook.middle);
                    var r363_xBarLeft = r361_df.middle - r313_HSwToV(0.5 * r361_sw);
                    var r363_xBarRight = r361_df.middle + r313_HSwToV(0.5 * r361_sw);
                    r363_currentGlyph.include(r313_dispiro(r313_widths.lhs(r361_sw), r313_flat(r363_xCrossRight, r361_y4), r313_curl(Math.min(r363_xBarLeft + r363_hd.x, r363_xCrossRight - r313_TINY), r361_y4), r313_archv(), r313_flat(r363_xBarLeft, Math.max(r361_y3, r361_y4 - r363_hd.y)), r313_curl(r363_xBarLeft, r361_y3 + r313_O)));
                    r363_currentGlyph.include(r360_fDiag ? r313_dispiro(r313_widths.center(r361_sw), r313_flat(r361_df.middle, r361_y2 - r313_O, r313_heading(r313_Downward)), r313_DiagTail.L(r361_df.middle, r361_y1, r313_DiagTail.StdDepth(r363_dfHook, r361_sw) - 0.5 * r361_sw, r361_sw)) : r313_dispiro(r313_widths.lhs(r361_sw), r313_flat(r363_xCrossLeft, r361_y1), r313_curl(Math.max(r363_xBarRight - r363_hd.x, r363_xCrossLeft + r313_TINY), r361_y1), r313_archv(), r313_flat(r363_xBarRight, Math.min(r361_y2, r361_y1 + r363_hd.y)), r313_curl(r363_xBarRight, r361_y2 - r313_O)));
                    return void 0;
                });
            };
        };
        var r313_MtSerif = function (r366_df, r366_y4, r366_sw) {
            var _r366_t0, _r366_t1;
            return r313_tagged("serifMT", r313_HSerif.lt(r366_df.middle, r366_y4, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r366_sw)), r366_sw));
        };
        var r313_MbSerif = function (r367_df, r367_y1, r367_sw) {
            var _r367_t0, _r367_t1;
            return r313_tagged("serifMB", r313_HSerif.mb(r367_df.middle, r367_y1, r313_MidJutCenter - r313_HSwToV(0.5 * (r313_Stroke - r367_sw)), r367_sw));
        };
        var r313_yCapitalPhiBowlBot = function (r368_y1, r368_y4, r368_fSlab) {
            var _r368_t0, _r368_t1;
            return r1_mix(r368_y1 + (r368_fSlab ? r313_Stroke : 0), r368_y4 - (r368_fSlab ? r313_Stroke : 0), 0.125);
        };
        var r313_yCapitalPhiBowlTop = function (r369_y1, r369_y4, r369_fSlab) {
            var _r369_t0, _r369_t1;
            return r1_mix(r369_y1 + (r369_fSlab ? r313_Stroke : 0), r369_y4 - (r369_fSlab ? r313_Stroke : 0), 0.875);
        };
        var r313_CapitalPhiShape = function (r370_fFlatTB) {
            var _r370_t0, _r370_t1;
            return function (r371_df) {
                var _r371_t0, _r371_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                    var _r373_t0, _r373_t1;
                    var r373_y2 = r313_yCapitalPhiBowlBot(0, r313_CAP, r313_SLAB);
                    var r373_y3 = r313_yCapitalPhiBowlTop(0, r313_CAP, r313_SLAB);
                    var r373_dim = r373_currentGlyph.include(r313_PhiRing(r370_fFlatTB)(r371_df, r373_y2, r373_y3, r371_df.archDepthA, r371_df.archDepthB));
                    r373_currentGlyph.include(r313_StraightBar(r371_df, 0, r373_y2, r373_y3, r313_CAP, r373_dim.swBar));
                    if (r313_SLAB) {
                        r373_currentGlyph.include(r313_tagged("serifMT", r313_HSerif.mt(r371_df.middle, r313_CAP, r313_MidJutCenter, r373_dim.swBar)));
                        r373_currentGlyph.include(r313_tagged("serifMB", r313_HSerif.mb(r371_df.middle, 0, r313_MidJutCenter, r373_dim.swBar)));
                    }
                    return void 0;
                });
            };
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Phi", 934, new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
            var _r380_t0, _r380_t1;
            var r380_df = r380_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r380_currentGlyph.include(r380_df.markSet.capital());
            r380_currentGlyph.include(r313_CapitalPhiShape(false)(r380_df));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Sho", 1015, new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
            var _r386_t0, _r386_t1;
            r386_currentGlyph.include(r313_MarkSet.capital());
            r386_currentGlyph.include(r313_ThornShapeImpl(r313_CAP, r313_SLAB, r313_SLAB, r313_yCapitalPhiBowlBot(0, r313_CAP, r313_SLAB), r313_yCapitalPhiBowlTop(0, r313_CAP, r313_SLAB)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Ef", 1060, new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
            var _r391_t0, _r391_t1;
            var r391_df = r391_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r391_currentGlyph.include(r391_df.markSet.capital());
            r391_currentGlyph.include(r313_CapitalPhiShape(true)(r391_df));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Ef.BGR", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
            var _r397_t0, _r397_t1;
            var r397_df = r397_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
            r397_currentGlyph.include(r397_df.markSet.capital());
            var r397_y1 = 0 - (r313_LongVJut - r313_QuarterStroke);
            var r397_y4 = r313_CAP + (r313_LongVJut - r313_QuarterStroke);
            r397_currentGlyph.include(r313_ExtendBelowBaseAnchors(r397_y1));
            r397_currentGlyph.include(r313_ExtendAboveBaseAnchors(r397_y4));
            var r397_pseudoY2 = r313_yCapitalPhiBowlBot(0, r313_CAP, r313_SLAB);
            var r397_pseudoY3 = r313_yCapitalPhiBowlTop(0, r313_CAP, r313_SLAB);
            var r397_y2 = Math.max(0, r397_y1 + (r397_pseudoY2 - 0));
            var r397_y3 = Math.min(r313_CAP, r397_y4 - (r313_CAP - r397_pseudoY3));
            var r397_pArchDepth = r1_mix(1, (r397_y3 - r397_y2) / (r397_pseudoY3 - r397_pseudoY2), 2 * (r397_df.adws - 1));
            var r397_ada = r397_df.archDepthAOf(r313_ArchDepth * r397_pArchDepth);
            var r397_adb = r397_df.archDepthBOf(r313_ArchDepth * r397_pArchDepth);
            var r397_dim = r397_currentGlyph.include(r313_PhiRing(true)(r397_df, r397_y2, r397_y3, r397_ada, r397_adb));
            r397_currentGlyph.include(r313_StraightBar(r397_df, r397_y1, r397_y2, r397_y3, r397_y4, r397_dim.swBar));
            if (r313_SLAB) {
                r397_currentGlyph.include(r313_tagged("serifMT", r313_HSerif.mt(r397_df.middle, r397_y4, r313_MidJutCenter, r397_dim.swBar)));
                r397_currentGlyph.include(r313_tagged("serifMB", r313_HSerif.mb(r397_df.middle, r397_y1, r313_MidJutCenter, r397_dim.swBar)));
            }
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("taillessphi.cursive", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
            var _r408_t0, _r408_t1;
            var r408_df = r408_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r408_currentGlyph.include(r408_df.markSet.e());
            r408_currentGlyph.include(r313_LowerPhiCursiveRing(r408_df, 0, r313_XH, r408_df.smallArchDepthA, r408_df.smallArchDepthB));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("taillessphi.neohellenic", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
            var _r414_t0, _r414_t1;
            var r414_df = r414_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r414_currentGlyph.include(r414_df.markSet.e());
            r414_currentGlyph.include(r313_PhiRing(false)(r414_df, 0, r313_XH, r414_df.smallArchDepthA, r414_df.smallArchDepthB));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("taillessphi", 11383);
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/phi.cursive", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
            var _r420_t0, _r420_t1;
            var r420_df = r420_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r420_currentGlyph.include(r420_df.markSet.p());
            var r420_dim = r420_currentGlyph.include(r313_LowerPhiCursiveRing(r420_df, 0, r313_XH, r420_df.smallArchDepthA, r420_df.smallArchDepthB));
            r420_currentGlyph.include(r313_VBar.m(r420_df.middle, r313_Descender, 0.2 * r420_df.mvs, r420_dim.swBar));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
            var _r427_t0, _r427_t1;
            var r427_df = r427_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r427_currentGlyph.include(r427_df.markSet.bp());
            var r427_dim = r427_currentGlyph.include(r313_PhiRing(false)(r427_df, 0, r313_XH, r427_df.smallArchDepthA, r427_df.smallArchDepthB));
            r313_xn$GlyphSaveSink$2Lrc4b.save("grek/phi.straight", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r427_currentGlyph, r313_StraightBar(r427_df, r313_Descender, 0, r313_XH, r313_Ascender, r427_dim.swBar)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("grek/phi.straightShortNeck", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r427_currentGlyph, r313_StraightBar(r427_df, r313_Descender, 0, r313_XH, r313_yShortNeck1, r427_dim.swBar)));
            r313_xn$GlyphSaveSink$2Lrc4b.save("grek/phi.straightShortNeck2", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r427_currentGlyph, r313_StraightBar(r427_df, r313_Descender, 0, r313_XH, r313_yShortNeck2, r427_dim.swBar)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/phi.neohellenic", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
            var _r439_t0, _r439_t1;
            var r439_df = r439_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r439_currentGlyph.include(r439_df.markSet.p());
            var r439_dim = r439_currentGlyph.include(r313_PhiRing(false)(r439_df, 0, r313_XH, r439_df.smallArchDepthA, r439_df.smallArchDepthB));
            r439_currentGlyph.include(r313_VBar.m(r439_df.middle, r313_Descender, 0.2 * r439_df.mvs, r439_dim.swBar));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("grek/phi", 966);
        r313_xn$selectvariant$7Hrq("grek/phiSymbol", 981, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "grek/phi"));
        r313_xn$GlyphSaveSink$2Lrc4b.save("latn/phi", 632, new r313_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
            var _r447_t0, _r447_t1;
            var r447_df = r447_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r447_currentGlyph.include(r313_xn$referglyph$1aao("grek/phi.straight"), r313_AS_BASE, r313_ALSO_METRICS);
            if (r313_SLAB) {
                r447_currentGlyph.include(r313_tagged("serifMT", r313_HSerif.mt(r447_df.middle, r313_Ascender, r313_MidJutCenter)));
                r447_currentGlyph.include(r313_tagged("serifMB", r313_HSerif.mb(r447_df.middle, r313_Descender, r313_MidJutCenter)));
            }
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("latn/phiPalatalHook", 122675, new r313_xn$Capture$2Lrc8.GlyphProc(function (r454_currentGlyph) {
            var _r454_t0, _r454_t1;
            var r454_adws = r1_mix(1, r313_para.advanceScaleM, 2);
            var r454_df = r454_currentGlyph.include(r313_DivFrame(r454_adws, 1));
            r454_currentGlyph.include(r454_df.markSet.bp());
            var r454_subDf = r313_DivFrame(0.8 * r454_adws, 3);
            var r454_dim = r454_currentGlyph.include(r313_PhiRing(false)(r454_subDf, 0, r313_XH, r454_subDf.smallArchDepthA, r454_subDf.smallArchDepthB));
            r454_currentGlyph.include(r313_StraightBar(r454_subDf, r313_Descender, 0, r313_XH, r313_Ascender, r454_dim.swBar));
            var r454_jut = r1_mix(r313_HSwToV(r313_HalfStroke), r313_MidJutCenter, 0.6 * r454_adws) - r313_HSwToV(0.5 * (r313_Stroke - r454_dim.swBar));
            if (r313_SLAB) {
                r454_currentGlyph.include(r313_tagged("serifMT", r313_HSerif.mt(r454_subDf.middle, r313_Ascender, r454_jut)));
                r454_currentGlyph.include(r313_tagged("serifMB", r313_HSerif.mb(r454_subDf.middle, r313_Descender, r454_jut)));
            }
            var r454_tinyGap = Math.max(r313_Width / 32, r313_AdviceStroke(24));
            var r454_xMask = Math.max(r454_subDf.middle + r313_HSwToV(0.5 * r454_dim.swBar) + 2 * r454_tinyGap, r454_subDf.middle + r454_jut + r454_tinyGap);
            r454_currentGlyph.include(r313_PalatalHook.r(r454_df.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("xLink", r1_mix(r313_Arch["adjust-x"].bot(r454_subDf.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r454_subDf.mvs)), r454_subDf.rightSB - r313_OX, 0.75)), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r313_O, r313_ArchDepthAClamped(r313_XH, 0, r454_subDf.smallArchDepthA, r454_subDf.smallArchDepthB), r313_archv.yFromX(0.75))), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r454_subDf.mvs), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r454_xMask)))));
            return void 0;
        }));
        var r313_CyrlLowerEfConfig = r1_SuffixCfg.weave({
            "": [r313_PhiRing(true), r313_para.advanceScaleM],
            "splitBowl": [r313_CyrEfSplitRing, r313_para.advanceScaleMM]
        }, {
            "serifless": [r313_StraightBar, null, null],
            "topSerifed": [r313_StraightBar, r313_MtSerif, null],
            "serifed": [r313_StraightBar, r313_MtSerif, r313_MbSerif],
            "cursive": [r313_CursiveBar(false), null, null],
            "diagonalTailedCursive": [r313_CursiveBar(true), null, null]
        });
        var _r313_t12 = Object.entries(r313_CyrlLowerEfConfig)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_Bowl = _r313_t14[1][0][0];
            r313_adws = _r313_t14[1][0][1];
            _r313_t14[1][0];
            r313_Bar = _r313_t14[1][1][0];
            r313_sMT = _r313_t14[1][1][1];
            r313_sMB = _r313_t14[1][1][2];
            _r313_t14[1][1];
            _r313_t14[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ef." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r472_currentGlyph) {
                    var _r472_t0, _r472_t1;
                    var r472_df = r472_currentGlyph.include(r313_DivFrame(r313_adws, 3));
                    r472_currentGlyph.include(r472_df.markSet.bp());
                    var r472_dim = r472_currentGlyph.include(r313_Bowl(r472_df, 0, r313_XH, r472_df.smallArchDepthA, r472_df.smallArchDepthB));
                    r472_currentGlyph.include(r313_Bar(r472_df, r313_Descender, 0, r313_XH, r313_Ascender, r472_dim.swBar));
                    if (r313_sMT) r472_currentGlyph.include(r313_sMT(r472_df, r313_Ascender, r472_dim.swBar));
                    if (r313_sMB) r472_currentGlyph.include(r313_sMB(r472_df, r313_Descender, r472_dim.swBar));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/ef", 1092);
        return r313_xn$selectvariant$7Hrq("cyrl/ef.BGR", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/ef"));
    });
    return void 0;
});


