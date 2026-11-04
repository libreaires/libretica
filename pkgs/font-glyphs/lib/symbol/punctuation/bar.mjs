"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "../../meta/aesthetics.mjs";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Bar", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t8, _r314_t9;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_para = _r314_t0.para;
        var r314_DivFrame = _r314_t0.DivFrame;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_Ascender = _r314_t1.Ascender;
        var r314_Descender = _r314_t1.Descender;
        var r314_ParenTop = _r314_t1.ParenTop;
        var r314_ParenBot = _r314_t1.ParenBot;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_HalfStroke = _r314_t1.HalfStroke;
        var r314_OverlayStroke = _r314_t1.OverlayStroke;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_Middle = _r314_t1.Middle;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_HBar = _r314_t5.HBar;
        var r314_VBar = _r314_t5.VBar;
        var r314_ForceUpright = _r314_t5.ForceUpright;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$orthographicslanted$3DrD = _r314_t6["orthographic-slanted"];
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r314_ExtendAboveBaseAnchors = _r314_t7.ExtendAboveBaseAnchors;
        var r314_ExtendBelowBaseAnchors = _r314_t7.ExtendBelowBaseAnchors;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "BarShape": r314_BarShape
            };
        });
        var r314_BarShape = function (r320_x, r320_top, r320_bot, r320__sw, r320_markSet) {
            var _r320_t0, _r320_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var _r322_t0, _r322_t1;
                if (r320_markSet) {
                    r322_currentGlyph.include(r320_markSet);
                    r322_currentGlyph.include(r314_ExtendAboveBaseAnchors(r320_top));
                    r322_currentGlyph.include(r314_ExtendBelowBaseAnchors(r320_bot));
                } else {
                    r322_currentGlyph.setBaseAnchor("above", r320_x, r320_top);
                    r322_currentGlyph.setBaseAnchor("below", r320_x, r320_bot);
                }
                r322_currentGlyph.include(r314_VBar.m(r320_x, r320_bot, r320_top, r320__sw));
                return void 0;
            });
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("bar.upright", null, r314_BarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("bar.slanted.naturalSlope", null, r314_BarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("bar.slanted.forceUpright", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            r333_currentGlyph.include(r314_ForceUpright());
            r333_currentGlyph.include(r314_BarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("ligBarInsideBracketLeft", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
            var _r338_t0, _r338_t1;
            r1_Joining.set(r338_currentGlyph, r1_Joining.Classes.Left);
            var r338_gap = r314_Stroke + Math.max(r314_AdviceStroke(5), r314_XH / 12);
            r338_currentGlyph.include(r314_BarShape(r1_mix(r314_SB, r314_RightSB, r314_DesignParameters.bracketOutside) + r314_HSwToV(r314_HalfStroke), r314_ParenTop - r338_gap, r314_ParenBot + r338_gap));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("ligBarInsideBracketRight", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
            var _r342_t0, _r342_t1;
            r1_Joining.set(r342_currentGlyph, r1_Joining.Classes.Right);
            var r342_gap = r314_Stroke + Math.max(r314_AdviceStroke(5), r314_XH / 12);
            r342_currentGlyph.include(r314_BarShape(r1_mix(r314_RightSB, r314_SB, r314_DesignParameters.bracketOutside) - r314_HSwToV(r314_HalfStroke), r314_ParenTop - r342_gap, r314_ParenBot + r342_gap));
            return void 0;
        }));
        var r314_BrokenBarShape = function (r344_x, r344_top, r344_bot, r344__sw) {
            var _r344_t0, _r344_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                var _r346_t0, _r346_t1;
                var r346_breakDist = Math.max(r314_Stroke, r314_CAP / 8);
                var r346_yMid = r1_mix(r344_top, r344_bot, 0.5);
                r346_currentGlyph.include(r314_VBar.m(r344_x, r346_yMid + r346_breakDist / 2, r344_top, r344__sw));
                r346_currentGlyph.include(r314_VBar.m(r344_x, r344_bot, r346_yMid - r346_breakDist / 2, r344__sw));
                return void 0;
            });
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("brokenBar.upright", null, r314_BrokenBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("brokenBar.slanted.naturalSlope", null, r314_BrokenBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("brokenBar.slanted.forceUpright", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
            var _r353_t0, _r353_t1;
            r353_currentGlyph.include(r314_ForceUpright());
            r353_currentGlyph.include(r314_BrokenBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
            return void 0;
        }));
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r357_t0, _r357_t1;
            return {
                "DoubleBarShape": r314_DoubleBarShape
            };
        });
        var r314_DoubleBarShape = function (r358_x, r358_top, r358_bot, r358__sw, r358_markSet) {
            var _r358_t0, _r358_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                var _r360_t0, _r360_t1;
                if (r358_markSet) {
                    r360_currentGlyph.include(r358_markSet);
                    r360_currentGlyph.include(r314_ExtendAboveBaseAnchors(r358_top));
                    r360_currentGlyph.include(r314_ExtendBelowBaseAnchors(r358_bot));
                } else {
                    r360_currentGlyph.setBaseAnchor("above", r358_x, r358_top);
                    r360_currentGlyph.setBaseAnchor("below", r358_x, r358_bot);
                }
                var r360_fine = r314_AdviceStroke(3.5) * (r1_fallback(r358__sw, r314_Stroke) / r314_Stroke);
                r360_currentGlyph.include(r314_VBar.m(r358_x - r314_Width / 6, r358_bot, r358_top, r360_fine));
                r360_currentGlyph.include(r314_VBar.m(r358_x + r314_Width / 6, r358_bot, r358_top, r360_fine));
                return void 0;
            });
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("doubleBar.upright", null, r314_DoubleBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("doubleBar.slanted.naturalSlope", null, r314_DoubleBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("doubleBar.slanted.forceUpright", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
            var _r372_t0, _r372_t1;
            r372_currentGlyph.include(r314_ForceUpright());
            r372_currentGlyph.include(r314_DoubleBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
            return void 0;
        }));
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r376_t0, _r376_t1;
            return {
                "TripleBarShape": r314_TripleBarShape
            };
        });
        var r314_TripleBarShape = function (r377_x, r377_top, r377_bot, r377__sw, r377_markSet) {
            var _r377_t0, _r377_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                var _r379_t0, _r379_t1;
                if (r377_markSet) {
                    r379_currentGlyph.include(r377_markSet);
                    r379_currentGlyph.include(r314_ExtendAboveBaseAnchors(r377_top));
                    r379_currentGlyph.include(r314_ExtendBelowBaseAnchors(r377_bot));
                } else {
                    r379_currentGlyph.setBaseAnchor("above", r377_x, r377_top);
                    r379_currentGlyph.setBaseAnchor("below", r377_x, r377_bot);
                }
                var r379_fine = r314_AdviceStroke(5.25) * (r1_fallback(r377__sw, r314_Stroke) / r314_Stroke);
                r379_currentGlyph.include(r314_VBar.m(r377_x - r314_Width / 4, r377_bot, r377_top, r379_fine));
                r379_currentGlyph.include(r314_VBar.m(r377_x, r377_bot, r377_top, r379_fine));
                r379_currentGlyph.include(r314_VBar.m(r377_x + r314_Width / 4, r377_bot, r377_top, r379_fine));
                return void 0;
            });
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("tripleBar.upright", null, r314_TripleBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("tripleBar.slanted.naturalSlope", null, r314_TripleBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
        r314_xn$GlyphSaveSink$2Lrc4b.save("tripleBar.slanted.forceUpright", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
            var _r392_t0, _r392_t1;
            r392_currentGlyph.include(r314_ForceUpright());
            r392_currentGlyph.include(r314_TripleBarShape(r314_Middle, r314_ParenTop, r314_ParenBot));
            return void 0;
        }));
        r314_xn$selectvariant$7Hrq("bar.slanted");
        r314_xn$orthographicslanted$3DrD("bar", "|");
        r314_xn$selectvariant$7Hrq("brokenBar.slanted", new r314_xn$NamedParameterPair$2Lrc9b("follow", "bar.slanted"));
        r314_xn$orthographicslanted$3DrD("brokenBar", 166);
        r314_xn$selectvariant$7Hrq("doubleBar.slanted", new r314_xn$NamedParameterPair$2Lrc9b("follow", "bar.slanted"));
        r314_xn$orthographicslanted$3DrD("doubleBar", 8214);
        r314_xn$selectvariant$7Hrq("tripleBar.slanted", new r314_xn$NamedParameterPair$2Lrc9b("follow", "bar.slanted"));
        r314_xn$orthographicslanted$3DrD("tripleBar", 10624);
        r314_xn$GlyphSaveSink$2Lrc4b.save("dentalClick", 448, new r314_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
            var _r400_t0, _r400_t1;
            var r400_df = r400_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r400_currentGlyph.include(r314_BarShape(r400_df.middle, r314_Ascender, r314_Descender, r400_df.mvs, r400_df.markSet.bp()));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("dentalClick/cap", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
            var _r405_t0, _r405_t1;
            var r405_df = r405_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleI));
            r405_currentGlyph.include(r314_BarShape(r405_df.middle, r314_CAP, 0, r405_df.mvs, r405_df.markSet.capital()));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("lateralClick", 449, new r314_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
            var _r410_t0, _r410_t1;
            var r410_df = r410_currentGlyph.include(r314_DivFrame(1));
            r410_currentGlyph.include(r314_DoubleBarShape(r410_df.middle, r314_Ascender, r314_Descender, r410_df.mvs, r410_df.markSet.bp()));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("lateralClick/cap", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
            var _r415_t0, _r415_t1;
            var r415_df = r415_currentGlyph.include(r314_DivFrame(1));
            r415_currentGlyph.include(r314_DoubleBarShape(r415_df.middle, r314_CAP, 0, r415_df.mvs, r415_df.markSet.capital()));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("retroflexClick", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
            var _r420_t0, _r420_t1;
            var r420_df = r420_currentGlyph.include(r314_DivFrame(1));
            r420_currentGlyph.include(r314_TripleBarShape(r420_df.middle, r314_Ascender, r314_Descender, r420_df.mvs, r420_df.markSet.bp()));
            return void 0;
        }));
        var r314_PalatalClickOverlayShape = function (r423_df, r423_top, r423_bot, r423_pGap) {
            var _r423_t0, _r423_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                var _r425_t0, _r425_t1;
                var r425_gap = (r314_XH - 0) * r423_pGap;
                r425_currentGlyph.include(r314_HBar.b(r423_df.leftSB, r423_df.rightSB, r1_mix(r423_bot, r423_top, 0.5) + r425_gap / 2, r314_OverlayStroke));
                r425_currentGlyph.include(r314_HBar.t(r423_df.leftSB, r423_df.rightSB, r1_mix(r423_bot, r423_top, 0.5) - r425_gap / 2, r314_OverlayStroke));
                return void 0;
            });
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("palatalClick", 450, new r314_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
            var _r430_t0, _r430_t1;
            var r430_df = r430_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleF));
            r430_currentGlyph.include(r314_BarShape(r430_df.middle, r314_Ascender, r314_Descender, r430_df.mvs, r430_df.markSet.bp()));
            r430_currentGlyph.include(r314_PalatalClickOverlayShape(r430_df, r314_Ascender, r314_Descender, 0.2));
            return void 0;
        }));
        return r314_xn$GlyphSaveSink$2Lrc4b.save("palatalClick/cap", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
            var _r436_t0, _r436_t1;
            var r436_df = r436_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleF));
            r436_currentGlyph.include(r314_BarShape(r436_df.middle, r314_CAP, 0, r436_df.mvs, r436_df.markSet.capital()));
            r436_currentGlyph.include(r314_PalatalClickOverlayShape(r436_df, r314_CAP, 0, 0.1));
            return void 0;
        }));
    });
    return void 0;
});


