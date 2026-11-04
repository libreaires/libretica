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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Be", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_doSerifLT, r312_doSerifRT, r312_doSerifLB, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_important = _r312_t2.important;
        var r312_alsoThruThem = _r312_t2.alsoThruThem;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_VSerif = _r312_t5.VSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r312_EFVJutLength = _r312_t7.EFVJutLength;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r312_YeriBarPos = _r312_t8.YeriBarPos;
        var r312_YeriUpper = _r312_t8.YeriUpper;
        var r312_RevYeriUpper = _r312_t8.RevYeriUpper;
        var r312_BeConfig = {
            "standardSerifless": [false, false, false],
            "standardUnilateralSerifed": [true, false, false],
            "standardBilateralSerifed": [true, true, true]
        };
        var _r312_t9 = Object.entries(r312_BeConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_doSerifLT = _r312_t11[1][0];
            r312_doSerifRT = _r312_t11[1][1];
            r312_doSerifLB = _r312_t11[1][2];
            _r312_t11[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Be." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                    var r322_jutTop, r322_jutBot, r322_jutMid, r322_swVJut, _r322_t0, _r322_t1, _r322_t2;
                    r322_currentGlyph.include(r312_MarkSet.capital());
                    var r322_stroke = r312_AdviceStroke2(2, 3, r312_CAP);
                    r322_currentGlyph.include(r312_YeriUpper.Shape(r312_CAP, r312_SB, r312_RightSB, r322_stroke, new r312_xn$NamedParameterPair$2Lrc9b("fSlab", false)));
                    r322_currentGlyph.include(r312_HBar.t(r312_SB - r312_O, r1_mix(r312_SB, r312_RightSB, 0.9), r312_CAP, r322_stroke));
                    if (r312_doSerifLT) r322_currentGlyph.include(r312_tagged("serifLT", r312_HSerif.lt(r312_SB, r312_CAP, r312_SideJut, r322_stroke)));
                    if (r312_doSerifRT) {
                        _r322_t0 = r312_EFVJutLength(r312_CAP, 0, r312_YeriBarPos, r322_stroke);
                        r322_jutTop = _r322_t0[0];
                        r322_jutBot = _r322_t0[1];
                        r322_jutMid = _r322_t0[2];
                        r322_swVJut = r312_VJutStroke * (r322_stroke / r312_Stroke);
                        r322_currentGlyph.include(r312_tagged("serifRT", r312_VSerif.dr(r1_mix(r312_SB, r312_RightSB, 0.9), r312_CAP, r322_jutTop, r322_swVJut)));
                    }
                    if (r312_doSerifLB) r322_currentGlyph.include(r312_tagged("serifLB", r312_HSerif.lb(r312_SB, 0, r312_SideJut, r322_stroke)));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revBe." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                    var r332_jutTop, r332_jutBot, r332_jutMid, r332_swVJut, _r332_t0, _r332_t1, _r332_t2;
                    r332_currentGlyph.include(r312_MarkSet.capital());
                    var r332_stroke = r312_AdviceStroke2(2, 3, r312_CAP);
                    r332_currentGlyph.include(r312_RevYeriUpper.Shape(r312_CAP, r312_SB, r312_RightSB, r332_stroke, new r312_xn$NamedParameterPair$2Lrc9b("fSlab", false)));
                    r332_currentGlyph.include(r312_HBar.t(r1_mix(r312_SB, r312_RightSB, 0.1), r312_RightSB + r312_O, r312_CAP, r332_stroke));
                    if (r312_doSerifLT) r332_currentGlyph.include(r312_tagged("serifRT", r312_HSerif.rt(r312_RightSB, r312_CAP, r312_SideJut, r332_stroke)));
                    if (r312_doSerifRT) {
                        _r332_t0 = r312_EFVJutLength(r312_CAP, 0, r312_YeriBarPos, r332_stroke);
                        r332_jutTop = _r332_t0[0];
                        r332_jutBot = _r332_t0[1];
                        r332_jutMid = _r332_t0[2];
                        r332_swVJut = r312_VJutStroke * (r332_stroke / r312_Stroke);
                        r332_currentGlyph.include(r312_tagged("serifLT", r312_VSerif.dl(r1_mix(r312_SB, r312_RightSB, 0.1), r312_CAP, r332_jutTop, r332_swVJut)));
                    }
                    if (r312_doSerifLB) r332_currentGlyph.include(r312_tagged("serifRB", r312_HSerif.rb(r312_RightSB, 0, r312_SideJut, r332_stroke)));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Be", 1041);
        r312_xn$selectvariant$7Hrq("latn/Be", 386, new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/Be"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "bCap"));
        r312_xn$selectvariant$7Hrq("latn/De", 395, new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/revBe"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "dCap"));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/be", 1073, new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            r346_currentGlyph.include(r312_MarkSet.b());
            var r346_yRingTop = Math.min(r312_XH + r312_O, r312_XH - r312_QuarterStroke);
            var r346_ada = r312_ArchDepthAOf(r312_SmallArchDepth * (r346_yRingTop / r312_XH));
            var r346_adb = r312_ArchDepthBOf(r312_SmallArchDepth * (r346_yRingTop / r312_XH));
            r346_currentGlyph.include(r312_dispiro(r312_widths.rhs(r312_ShoulderFine), r312_straight.up.start(r312_SB + r312_OX + r312_HSwToV(r312_Stroke - r312_ShoulderFine), r346_yRingTop - r346_ada), r312_Arch.rhs(r346_yRingTop, new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r312_ShoulderFine)), r312_flatside.rd(r312_RightSB, 0, r346_yRingTop, r346_ada, r346_adb), r312_Arch.rhs(0), r312_flatside.lu(r312_SB, 0, r346_yRingTop, r346_ada, r346_adb), r312_alsoThruThem([[0.3, 0.85], [0.65, 0.925]], r312_important, r312_g4), r312_g4(r312_RightSB - r312_HSwToV(0.0625 * r312_Stroke), r312_Ascender, r312_heading(r312_Rightward))));
            return void 0;
        }));
    });
    return void 0;
});


