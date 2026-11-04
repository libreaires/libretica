"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r307_block, _r307_t4, _r307_t6;
    var _r307_t3 = this;
    var _r307_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r307_t1 = _r307_t0.length;
    var _r307_t2 = 0;
    var _r307_t5 = _r307_t2 < _r307_t1;
    while (_r307_t5) {
        _r307_t6 = (r307_block = _r307_t0[_r307_t2], r307_block(_r307_t3), _r307_t2 = _r307_t2 + 1);
        _r307_t5 = _r307_t2 < _r307_t1;
    }
    return _r307_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r311_xn$Capture_Ext$2Lrc2b) {
    var _r311_t0, _r311_t1;
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Logicals", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_DesignParameters = _r312_t1.DesignParameters;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_TackTop = _r312_t1.TackTop;
        var r312_TackBot = _r312_t1.TackBot;
        var r312_BgTkTop = _r312_t1.BgTkTop;
        var r312_BgTkBot = _r312_t1.BgTkBot;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_DotAt = _r312_t5.DotAt;
        var r312_OShape = _r312_t5.OShape;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_xn$clearanchors$1aao = _r312_t5["clear-anchors"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_turned = _r312_t6.turned;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r312_IdentHalfSpace = _r312_t7.IdentHalfSpace;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r312_markStroke = _r312_t8.markStroke;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Bar"].resolve();
        var r312_BarShape = _r312_t9.BarShape;
        var r312_DoubleBarShape = _r312_t9.DoubleBarShape;
        var r312_TripleBarShape = _r312_t9.TripleBarShape;
        r312_xn$GlyphSaveSink$2Lrc4b.save("negate", 172, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1;
            r320_currentGlyph.include(r312_xn$referglyph$1aao("minus"));
            r320_currentGlyph.include(r312_VBar.r(r312_RightSB, r312_SymbolMid - 0.55 * (r312_RightSB - r312_SB), r312_SymbolMid, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revNegate", 8976, new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
            var _r325_t0, _r325_t1;
            r325_currentGlyph.include(r312_xn$referglyph$1aao("minus"));
            r325_currentGlyph.include(r312_VBar.l(r312_SB, r312_SymbolMid - 0.55 * (r312_RightSB - r312_SB), r312_SymbolMid, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("turnNegate", 8985, "negate", r312_Middle, r312_SymbolMid);
        r312_turned("invNegate", null, "revNegate", r312_Middle, r312_SymbolMid);
        var r312_top = r312_TackTop;
        var r312_bot = r312_TackBot;
        r312_xn$GlyphSaveSink$2Lrc4b.save("endOfProof", 8718, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            r330_currentGlyph.include(r312_Rect(r312_top, r312_bot, r312_SB, r312_RightSB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("stile", 8739, r312_BarShape(r312_Middle, r312_top, r312_bot, r312_OperatorStroke));
        r312_xn$GlyphSaveSink$2Lrc4b.save("parallel", 8741, r312_DoubleBarShape(r312_Middle, r312_top, r312_bot, r312_OperatorStroke));
        r312_xn$GlyphSaveSink$2Lrc4b.save("vdash", 8866, new r312_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            r336_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_OperatorStroke));
            r336_currentGlyph.include(r312_VBar.l(r312_SB, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("dashv", 8867, "vdash", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("top", 8868, new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
            var _r341_t0, _r341_t1;
            r341_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_top, r312_OperatorStroke));
            r341_currentGlyph.include(r312_VBar.m(r312_Middle, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("bot", 8869, "top", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("assert", 8870, new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            var r346_l = r1_mix(r312_Middle, r312_SB, r312_DesignParameters.logic_narrow_shrink);
            var r346_r = r1_mix(r312_Middle, r312_RightSB, r312_DesignParameters.logic_narrow_shrink);
            r346_currentGlyph.include(r312_HBar.m(r346_l, r346_r, r312_SymbolMid, r312_OperatorStroke));
            r346_currentGlyph.include(r312_VBar.l(r346_l, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("models", 8871, new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
            var _r351_t0, _r351_t1;
            var r351_l = r1_mix(r312_Middle, r312_SB, r312_DesignParameters.logic_narrow_shrink);
            var r351_r = r1_mix(r312_Middle, r312_RightSB, r312_DesignParameters.logic_narrow_shrink);
            r351_currentGlyph.include(r312_HBar.m(r351_l, r351_r, r1_mix(r312_SymbolMid, r312_top, 1 / 3), r312_OperatorStroke));
            r351_currentGlyph.include(r312_HBar.m(r351_l, r351_r, r1_mix(r312_SymbolMid, r312_bot, 1 / 3), r312_OperatorStroke));
            r351_currentGlyph.include(r312_VBar.l(r351_l, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("tautology", 8872, new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
            var _r357_t0, _r357_t1;
            var r357_l = r1_mix(r312_Middle, r312_SB, 1);
            var r357_r = r1_mix(r312_Middle, r312_RightSB, 1);
            r357_currentGlyph.include(r312_HBar.m(r357_l, r357_r, r1_mix(r312_SymbolMid, r312_top, 1 / 3), r312_OperatorStroke));
            r357_currentGlyph.include(r312_HBar.m(r357_l, r357_r, r1_mix(r312_SymbolMid, r312_bot, 1 / 3), r312_OperatorStroke));
            r357_currentGlyph.include(r312_VBar.l(r357_l, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("forces", 8873, new r312_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
            var _r363_t0, _r363_t1;
            var r363_l = r1_mix(r312_Middle, r312_SB, 1);
            var r363_r = r1_mix(r312_Middle, r312_RightSB, 1);
            var r363_vs = r312_AdviceStroke(4);
            var r363_m = r1_mix(r363_l, r363_r - r363_vs, 3 / 5);
            r363_currentGlyph.include(r312_HBar.m(r363_m, r363_r, r312_SymbolMid, r312_OperatorStroke));
            r363_currentGlyph.include(r312_VBar.l(r363_l, r312_top, r312_bot, r363_vs));
            r363_currentGlyph.include(r312_VBar.m(r363_m, r312_top, r312_bot, r363_vs));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("tripleBarForces", 8874, new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
            var _r369_t0, _r369_t1;
            var r369_l = r1_mix(r312_Middle, r312_SB, 1);
            var r369_r = r1_mix(r312_Middle, r312_RightSB, 1);
            var r369_vs = r312_AdviceStroke(5);
            var r369_m = r1_mix(r369_l, r369_r - r369_vs, 3 / 4);
            r369_currentGlyph.include(r312_HBar.m(r369_m, r369_r, r312_SymbolMid, r312_OperatorStroke));
            r369_currentGlyph.include(r312_VBar.l(r369_l, r312_top, r312_bot, r369_vs));
            r369_currentGlyph.include(r312_VBar.m(r369_m, r312_top, r312_bot, r369_vs));
            r369_currentGlyph.include(r312_VBar.m(r1_mix(r369_l, r369_m, 1 / 2) + r312_HSwToV(0.25 * r369_vs), r312_top, r312_bot, r369_vs));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleForces", 8875, new r312_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
            var _r376_t0, _r376_t1;
            var r376_l = r1_mix(r312_Middle, r312_SB, 1);
            var r376_r = r1_mix(r312_Middle, r312_RightSB, 1);
            var r376_vs = r312_AdviceStroke(4);
            var r376_m = r1_mix(r376_l, r376_r - r376_vs, 3 / 5);
            r376_currentGlyph.include(r312_HBar.m(r376_m, r376_r, r1_mix(r312_SymbolMid, r312_top, 1 / 3), r312_OperatorStroke));
            r376_currentGlyph.include(r312_HBar.m(r376_m, r376_r, r1_mix(r312_SymbolMid, r312_bot, 1 / 3), r312_OperatorStroke));
            r376_currentGlyph.include(r312_VBar.l(r376_l, r312_top, r312_bot, r376_vs));
            r376_currentGlyph.include(r312_VBar.m(r376_m, r312_top, r312_bot, r376_vs));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("intercalate", 8890, new r312_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
            var _r383_t0, _r383_t1;
            var r383_l = r1_mix(r312_Middle, r312_SB, r312_DesignParameters.logic_narrow_shrink);
            var r383_r = r1_mix(r312_Middle, r312_RightSB, r312_DesignParameters.logic_narrow_shrink);
            r383_currentGlyph.include(r312_HBar.t(r383_l, r383_r, r312_top, r312_OperatorStroke));
            r383_currentGlyph.include(r312_VBar.m(r312_Middle, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("topOverbar", 9041, new r312_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
            var _r388_t0, _r388_t1;
            var r388_yMid = r1_mix(r312_bot, r312_top, 0.75);
            r388_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_top, r312_OperatorStroke));
            r388_currentGlyph.include(r312_VBar.m(r312_Middle, r312_bot, r388_yMid, r312_OperatorStroke));
            r388_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r388_yMid, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("botUnderbar", 9034, "topOverbar", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("topOverbar.aplForm", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
            var _r394_t0, _r394_t1;
            r394_currentGlyph.include(r312_xn$referglyph$1aao("top"), true, true);
            r394_currentGlyph.include(r312_MarkSet.tack());
            r394_currentGlyph.include(r312_xn$referglyph$1aao("sbRsbOverlineAbove"));
            r394_currentGlyph.include(r312_xn$clearanchors$1aao());
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("botUnderbar.aplForm", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
            var _r401_t0, _r401_t1;
            r401_currentGlyph.include(r312_xn$referglyph$1aao("bot"), true, true);
            r401_currentGlyph.include(r312_MarkSet.tack());
            r401_currentGlyph.include(r312_xn$referglyph$1aao("sbRsbUnderlineBelow"));
            r401_currentGlyph.include(r312_xn$clearanchors$1aao());
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("topring", 9045, new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
            var _r408_t0, _r408_t1;
            var r408_mid = r1_mix(r312_bot, r312_top - r312_OperatorStroke / 2, 0.5);
            var r408_w = 0.4 * (r312_RightSB - r312_SB);
            var r408_fine = Math.min(r408_w / 2.5, r312_AdviceStroke(5));
            r408_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_top, r312_OperatorStroke));
            r408_currentGlyph.include(r312_VBar.m(r312_Middle, r312_top, r408_mid + r408_w, r312_OperatorStroke));
            r408_currentGlyph.include(r312_VBar.m(r312_Middle, r408_mid - r408_w, r312_bot, r312_OperatorStroke));
            r408_currentGlyph.include(r312_VBar.m(r312_Middle, r408_mid + r408_w, r408_mid - r408_w, r408_fine));
            r408_currentGlyph.include(r312_OShape(r408_mid + r408_w, r408_mid - r408_w, r312_Middle - r408_w, r312_Middle + r408_w, r408_fine));
            return void 0;
        }));
        r312_turned("botring", 9038, "topring", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("perpendicular", 10178, new r312_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
            var _r416_t0, _r416_t1;
            r416_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, 0, r312_OperatorStroke));
            r416_currentGlyph.include(r312_VBar.m(r312_Middle, r312_SymbolMid * 2, 0, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("turnTautologyTautology", 10202, new r312_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
            var _r421_t0, _r421_t1;
            var r421_df = r421_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 4));
            var r421_vs = r312_OperatorStroke * (r421_df.mvs / r312_Stroke);
            var r421_sbInner = Math.min(r1_mix(0, r421_df.leftSB, 0.5), r1_mix(0, r312_SB, r421_df.adws / 3));
            var r421_l = Math.max(r421_df.middle - r421_sbInner, r1_mix(r421_df.leftSB, r421_df.rightSB, 1 / 3) + r312_HSwToV(0.5 * r421_vs));
            var r421_r = Math.min(r421_df.middle + r421_sbInner, r1_mix(r421_df.rightSB, r421_df.leftSB, 1 / 3) - r312_HSwToV(0.5 * r421_vs));
            r421_currentGlyph.include(r312_VBar.r(r421_l, r312_top, r312_bot, r421_vs));
            r421_currentGlyph.include(r312_VBar.l(r421_r, r312_top, r312_bot, r421_vs));
            var r421_t = r1_mix(r312_SymbolMid, r312_top, 1 / 3);
            var r421_b = r1_mix(r312_SymbolMid, r312_bot, 1 / 3);
            r421_currentGlyph.include(r312_HBar.m(r421_df.leftSB, r421_l, r421_t, r312_OperatorStroke));
            r421_currentGlyph.include(r312_HBar.m(r421_df.leftSB, r421_l, r421_b, r312_OperatorStroke));
            r421_currentGlyph.include(r312_HBar.m(r421_r, r421_df.rightSB, r421_t, r312_OperatorStroke));
            r421_currentGlyph.include(r312_HBar.m(r421_r, r421_df.rightSB, r421_b, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("dashvvdash", 10203, new r312_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
            var _r431_t0, _r431_t1;
            var r431_df = r431_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 4));
            var r431_vs = r312_OperatorStroke * (r431_df.mvs / r312_Stroke);
            var r431_sbInner = Math.min(r1_mix(0, r431_df.leftSB, 0.5), r1_mix(0, r312_SB, r431_df.adws / 3));
            var r431_l = Math.max(r431_df.middle - r431_sbInner, r1_mix(r431_df.leftSB, r431_df.rightSB, 1 / 3) + r312_HSwToV(0.5 * r431_vs));
            var r431_r = Math.min(r431_df.middle + r431_sbInner, r1_mix(r431_df.rightSB, r431_df.leftSB, 1 / 3) - r312_HSwToV(0.5 * r431_vs));
            r431_currentGlyph.include(r312_VBar.r(r431_l, r312_top, r312_bot, r431_vs));
            r431_currentGlyph.include(r312_VBar.l(r431_r, r312_top, r312_bot, r431_vs));
            r431_currentGlyph.include(r312_HBar.m(r431_df.leftSB, r431_l, r312_SymbolMid, r312_OperatorStroke));
            r431_currentGlyph.include(r312_HBar.m(r431_r, r431_df.rightSB, r312_SymbolMid, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("gleichStark", 10726, new r312_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
            var _r439_t0, _r439_t1;
            var r439_l = r1_mix(r312_Middle, r312_SB, 1);
            var r439_r = r1_mix(r312_Middle, r312_RightSB, 1);
            r439_currentGlyph.include(r312_HBar.m(r439_l, r439_r, r1_mix(r312_SymbolMid, r312_top, 1 / 3), r312_OperatorStroke));
            r439_currentGlyph.include(r312_HBar.m(r439_l, r439_r, r1_mix(r312_SymbolMid, r312_bot, 1 / 3), r312_OperatorStroke));
            r439_currentGlyph.include(r312_VBar.l(r439_l, r312_top, r312_bot, r312_OperatorStroke));
            r439_currentGlyph.include(r312_VBar.r(r439_r, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("turnAssert", 10974, "assert", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("shortTop", 10975, new r312_xn$Capture$2Lrc8.GlyphProc(function (r446_currentGlyph) {
            var _r446_t0, _r446_t1;
            var r446_t = r1_mix(r312_SymbolMid, r312_top, 5 / 12);
            var r446_b = r1_mix(r312_SymbolMid, r312_bot, 5 / 12);
            r446_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r446_t, r312_OperatorStroke));
            r446_currentGlyph.include(r312_VBar.m(r312_Middle, r446_t, r446_b, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("shortBot", 10976, "shortTop", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("ordinarilySatisfies", 10978, new r312_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
            var _r451_t0, _r451_t1;
            var r451_l = r1_mix(r312_Middle, r312_SB, 1);
            var r451_r = r1_mix(r312_Middle, r312_RightSB, 1);
            r451_currentGlyph.include(r312_HBar.m(r451_l, r451_r, r1_mix(r312_SymbolMid, r312_top, 1 / 2), r312_OperatorStroke));
            r451_currentGlyph.include(r312_HBar.m(r451_l, r451_r, r312_SymbolMid, r312_OperatorStroke));
            r451_currentGlyph.include(r312_HBar.m(r451_l, r451_r, r1_mix(r312_SymbolMid, r312_bot, 1 / 2), r312_OperatorStroke));
            r451_currentGlyph.include(r312_VBar.l(r451_l, r312_top, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("turnForces", 10979, "forces", r312_Middle, r312_SymbolMid);
        r312_turned("turnTautology", 10980, "tautology", r312_Middle, r312_SymbolMid);
        r312_turned("turnDoubleForces", 10981, "doubleForces", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save(10982, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r458_currentGlyph) {
            var _r458_t0, _r458_t1;
            var r458_l = r1_mix(r312_Middle, r312_SB, 1);
            var r458_r = r1_mix(r312_Middle, r312_RightSB, 1);
            var r458_vs = r312_AdviceStroke(4);
            var r458_m = r1_mix(r458_l, r458_r - r458_vs, 3 / 5);
            r458_currentGlyph.include(r312_HBar.m(r458_l, r458_r, r312_SymbolMid, r312_OperatorStroke));
            r458_currentGlyph.include(r312_VBar.l(r458_l, r312_top, r312_bot, r458_vs));
            r458_currentGlyph.include(r312_VBar.m(r458_m, r312_top, r312_bot, r458_vs));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("shortTopOverbar", 10983, new r312_xn$Capture$2Lrc8.GlyphProc(function (r464_currentGlyph) {
            var _r464_t0, _r464_t1;
            var r464_t = r1_mix(r312_SymbolMid, r312_top, 1 / 4);
            var r464_b = r1_mix(r312_SymbolMid, r312_bot, 7 / 12);
            var r464_markb = r1_mix(r312_SymbolMid, r312_top, 7 / 12);
            r464_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r464_t, r312_OperatorStroke));
            r464_currentGlyph.include(r312_VBar.m(r312_Middle, r464_t, r464_b, r312_OperatorStroke));
            r464_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, r464_markb, r312_markStroke));
            return void 0;
        }));
        r312_turned("shortBotUnderbar", 10984, "shortTopOverbar", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("shortBotOverShortTop", 10985, new r312_xn$Capture$2Lrc8.GlyphProc(function (r470_currentGlyph) {
            var _r470_t0, _r470_t1;
            var r470_b1 = r1_mix(r312_SymbolMid, r312_top, 1 / 6);
            var r470_t2 = r1_mix(r312_SymbolMid, r312_bot, 1 / 6);
            r470_currentGlyph.include(r312_VBar.m(r312_Middle, r470_b1, r312_top, r312_OperatorStroke));
            r470_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, r470_b1, r312_OperatorStroke));
            r470_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r470_t2, r312_OperatorStroke));
            r470_currentGlyph.include(r312_VBar.m(r312_Middle, r470_t2, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleTop", 10986, new r312_xn$Capture$2Lrc8.GlyphProc(function (r477_currentGlyph) {
            var _r477_t0, _r477_t1;
            var r477_vs = r312_AdviceStroke(4);
            r477_currentGlyph.include(r312_VBar.m(r1_mix(r312_Middle, r312_SB, 2 / 5), r312_top, r312_bot, r477_vs));
            r477_currentGlyph.include(r312_VBar.m(r1_mix(r312_Middle, r312_RightSB, 2 / 5), r312_top, r312_bot, r477_vs));
            r477_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_top, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("doubleBot", 10987, "doubleTop", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleNegate", 10988, new r312_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
            var _r483_t0, _r483_t1;
            r483_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid + r312_IdentHalfSpace / 2, r312_OperatorStroke));
            r483_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid - r312_IdentHalfSpace / 2, r312_OperatorStroke));
            r483_currentGlyph.include(r312_VBar.r(r312_RightSB, r312_SymbolMid + r312_IdentHalfSpace * 0.5, r312_SymbolMid - 0.55 * (r312_RightSB - r312_SB), r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revDoubleNegate", 10989, new r312_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
            var _r489_t0, _r489_t1;
            r489_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid + r312_IdentHalfSpace / 2, r312_OperatorStroke));
            r489_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid - r312_IdentHalfSpace / 2, r312_OperatorStroke));
            r489_currentGlyph.include(r312_VBar.l(r312_SB, r312_SymbolMid + r312_IdentHalfSpace / 2, r312_SymbolMid - 0.55 * (r312_RightSB - r312_SB), r312_OperatorStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("barRingAbove", 10991, new r312_xn$Capture$2Lrc8.GlyphProc(function (r495_currentGlyph) {
            var _r495_t0, _r495_t1;
            var r495_sw = r312_AdviceStroke(4);
            var r495_radius = (r312_RightSB - r312_SB) / 6;
            r495_currentGlyph.include(r312_VBar.m(r312_Middle, r312_top - r495_radius - r495_sw / 2, r312_bot, r312_OperatorStroke));
            r495_currentGlyph.include(r312_difference(r312_DotAt(r312_Middle, r312_top, r495_radius + r495_sw), r312_DotAt(r312_Middle, r312_top, r495_radius)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("botRingAbove", 10207, new r312_xn$Capture$2Lrc8.GlyphProc(function (r500_currentGlyph) {
            var _r500_t0, _r500_t1;
            r500_currentGlyph.include(r312_xn$referglyph$1aao("barRingAbove"));
            r500_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, r312_bot, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("barRingBelow", 10992, "barRingAbove", r312_Middle, r312_SymbolMid);
        r312_turned("topRingBelow", 10993, "botRingAbove", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("interleave", 10996, r312_TripleBarShape(r312_Middle, r312_top, r312_bot, r312_OperatorStroke));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("bigInterleave", 11004, r312_TripleBarShape(r312_Middle, r312_BgTkTop, r312_BgTkBot, r312_OperatorStroke));
    });
    return void 0;
});


