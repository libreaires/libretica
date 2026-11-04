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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Counting-Rod", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10, _r312_t11, _r312_tag12;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_LongJut = _r312_t1.LongJut;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        (function () {
            var r316_rodDiv = Math.min(2, r1_mix(1, r312_para.advanceScaleMM, 3));
            var r316_rodDf = r312_DivFrame(r316_rodDiv, 5);
            var r316_rodSw = r316_rodDf.mvs;
            var r316_hRodSw = r312_AdviceStroke(3);
            var r316_rodSpace = r316_rodDf.width / 5;
            var r316_RodY = function (r317_i, r317_sw) {
                var _r317_t0, _r317_t1;
                return r1_mix(0 + r317_sw / 2, r312_CAP - r317_sw / 2, r317_i / 4);
            };
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod1", 119648, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_df = r320_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r320_currentGlyph.include(r320_df.markSet.capital());
                r320_currentGlyph.include(r312_HBar.m(r320_df.leftSB, r320_df.rightSB, r316_RodY(0, r316_hRodSw), r316_hRodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod2", 119649, new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var _r326_t0, _r326_t1;
                var r326_df = r326_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r326_currentGlyph.include(r312_xn$referglyph$1aao("countingRod1", r312_AS_BASE, r312_ALSO_METRICS));
                r326_currentGlyph.include(r312_HBar.m(r326_df.leftSB, r326_df.rightSB, r316_RodY(1, r316_hRodSw), r316_hRodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod3", 119650, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t0, _r332_t1;
                var r332_df = r332_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r332_currentGlyph.include(r312_xn$referglyph$1aao("countingRod2", r312_AS_BASE, r312_ALSO_METRICS));
                r332_currentGlyph.include(r312_HBar.m(r332_df.leftSB, r332_df.rightSB, r316_RodY(2, r316_hRodSw), r316_hRodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod4", 119651, new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var _r338_t0, _r338_t1;
                var r338_df = r338_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r338_currentGlyph.include(r312_xn$referglyph$1aao("countingRod3", r312_AS_BASE, r312_ALSO_METRICS));
                r338_currentGlyph.include(r312_HBar.m(r338_df.leftSB, r338_df.rightSB, r316_RodY(3, r316_hRodSw), r316_hRodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod5", 119652, new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                var _r344_t0, _r344_t1;
                var r344_df = r344_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r344_currentGlyph.include(r312_xn$referglyph$1aao("countingRod4", r312_AS_BASE, r312_ALSO_METRICS));
                r344_currentGlyph.include(r312_HBar.m(r344_df.leftSB, r344_df.rightSB, r316_RodY(4, r316_hRodSw), r316_hRodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod6", 119653, new r312_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                var _r350_t0, _r350_t1;
                var r350_df = r350_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r350_currentGlyph.include(r312_xn$referglyph$1aao("countingRod1", r312_AS_BASE, r312_ALSO_METRICS));
                r350_currentGlyph.include(r312_VBar.m(r350_df.middle, r316_RodY(0, r316_hRodSw), r312_CAP, r316_rodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod7", 119654, new r312_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                var _r356_t0, _r356_t1;
                var r356_df = r356_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r356_currentGlyph.include(r312_xn$referglyph$1aao("countingRod2", r312_AS_BASE, r312_ALSO_METRICS));
                r356_currentGlyph.include(r312_VBar.m(r356_df.middle, r316_RodY(1, r316_hRodSw), r312_CAP, r316_rodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod8", 119655, new r312_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                var _r362_t0, _r362_t1;
                var r362_df = r362_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r362_currentGlyph.include(r312_xn$referglyph$1aao("countingRod3", r312_AS_BASE, r312_ALSO_METRICS));
                r362_currentGlyph.include(r312_VBar.m(r362_df.middle, r316_RodY(2, r316_hRodSw), r312_CAP, r316_rodSw));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRod9", 119656, new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                var _r368_t0, _r368_t1;
                var r368_df = r368_currentGlyph.include(r312_DivFrame(r316_rodDiv));
                r368_currentGlyph.include(r312_xn$referglyph$1aao("countingRod4", r312_AS_BASE, r312_ALSO_METRICS));
                r368_currentGlyph.include(r312_VBar.m(r368_df.middle, r316_RodY(3, r316_hRodSw), r312_CAP, r316_rodSw));
                return void 0;
            }));
            var r316_rodTens = function (r372_nStrokes, r372_plusFive) {
                var _r372_t0, _r372_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                    var r374_radius, r374_j, _r374_t0, _r374_t1, _r374_t2, _r374_t3, _r374_t4, _r374_tag5;
                    var r374_df = r374_currentGlyph.include(r312_DivFrame(r316_rodDiv, r372_nStrokes));
                    r374_currentGlyph.include(r374_df.markSet.capital());
                    if (r372_plusFive) r374_currentGlyph.include(r312_HBar.t(r374_df.leftSB, r374_df.rightSB, r312_CAP, r316_hRodSw));
                    if (r372_nStrokes === 1) r374_currentGlyph.include(r312_VBar.m(r374_df.middle, 0, r312_CAP, r316_rodSw)); else {
                        r374_radius = r316_rodSpace * (r372_nStrokes - 1) / 2;
                        _r374_t0 = 0;
                        _r374_t1 = r372_nStrokes;
                        r374_j = _r374_t0;
                        while (r374_j < _r374_t1) {
                            (function () {
                                return r374_currentGlyph.include(r312_VBar.m(r374_df.middle + r1_mix(-r374_radius, r374_radius, r374_j / (r372_nStrokes - 1)), 0, r312_CAP, r316_rodSw));
                            })();
                            r374_j = r374_j + 1;
                        }
                    }
                    return void 0;
                });
            };
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens1", 119657, new r312_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                var _r386_t0, _r386_t1;
                r386_currentGlyph.include(r316_rodTens(1, 0));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens2", 119658, new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                var _r390_t0, _r390_t1;
                r390_currentGlyph.include(r316_rodTens(2, 0));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens3", 119659, new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                var _r394_t0, _r394_t1;
                r394_currentGlyph.include(r316_rodTens(3, 0));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens4", 119660, new r312_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
                var _r398_t0, _r398_t1;
                r398_currentGlyph.include(r316_rodTens(4, 0));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens5", 119661, new r312_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                var _r402_t0, _r402_t1;
                r402_currentGlyph.include(r316_rodTens(5, 0));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens6", 119662, new r312_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                var _r406_t0, _r406_t1;
                r406_currentGlyph.include(r316_rodTens(1, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens7", 119663, new r312_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                var _r410_t0, _r410_t1;
                r410_currentGlyph.include(r316_rodTens(2, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens8", 119664, new r312_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                var _r414_t0, _r414_t1;
                r414_currentGlyph.include(r316_rodTens(3, 1));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("countingRodTens9", 119665, new r312_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                var _r418_t0, _r418_t1;
                r418_currentGlyph.include(r316_rodTens(4, 1));
                return void 0;
            }));
        })();
        return (function () {
            var r421_rodDiv = Math.min(2, r1_mix(1, r312_para.advanceScaleMM, 2));
            r312_xn$GlyphSaveSink$2Lrc4b.save("tallyMarkOne", 119671, new r312_xn$Capture$2Lrc8.GlyphProc(function (r424_currentGlyph) {
                var _r424_t0, _r424_t1;
                var r424_df = r424_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleII < 1 ? r421_rodDiv / 4 : 1));
                r424_currentGlyph.include(r424_df.markSet.capital());
                r424_currentGlyph.include(r312_VBar.m(r424_df.middle, 0, r312_CAP, r424_df.mvs));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("tallyMarkFive", 119672, new r312_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                var _r430_t0, _r430_t1;
                var r430_df = r430_currentGlyph.include(r312_DivFrame(r421_rodDiv, 4));
                r430_currentGlyph.include(r430_df.markSet.capital());
                var r430_left = r430_df.leftSB + r312_HSwToV(0.5 * r430_df.mvs);
                var r430_right = r430_df.rightSB - r312_HSwToV(0.5 * r430_df.mvs);
                r430_currentGlyph.include(r312_VBar.m(r430_left, 0, r312_CAP, r430_df.mvs));
                r430_currentGlyph.include(r312_VBar.m(r1_mix(r430_left, r430_right, 1 / 3), 0, r312_CAP, r430_df.mvs));
                r430_currentGlyph.include(r312_VBar.m(r1_mix(r430_left, r430_right, 2 / 3), 0, r312_CAP, r430_df.mvs));
                r430_currentGlyph.include(r312_VBar.m(r430_right, 0, r312_CAP, r430_df.mvs));
                r430_currentGlyph.include(r312_dispiro(r312_flat(r430_left - r312_LongJut / 2 + r312_OX, r312_CAP * (1 / 3), r312_widths.center(r430_df.mvs)), r312_curl(r430_right + r312_LongJut / 2 - r312_OX, r312_CAP * (2 / 3))));
                return void 0;
            }));
        })();
    });
    return void 0;
});


