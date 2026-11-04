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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Circled", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10, _r312_t11, _r312_tag12;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_PlusTop = _r312_t1.PlusTop;
        var r312_PlusBot = _r312_t1.PlusBot;
        var r312_BgOpTop = _r312_t1.BgOpTop;
        var r312_BgOpBot = _r312_t1.BgOpBot;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_xn$clearanchors$1aao = _r312_t5["clear-anchors"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$deriveglyphs$7Hrq = _r312_t6["derive-glyphs"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Frame"].resolve();
        var r312_MathEnclosureSw = _r312_t7.MathEnclosureSw;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
        var r312_ArrowHead = _r312_t8.ArrowHead;
        var r312_ArrowBar = _r312_t8.ArrowBar;
        var r312_MakeMathCircled = function (r317_u, r317_inner) {
            var _r317_t0, _r317_t1;
            return r312_xn$deriveglyphs$7Hrq("mathCircled{" + r317_inner + "}", r317_u, r317_inner, function (r318_src, r318_gr) {
                var _r318_t0, _r318_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                    var _r320_t0, _r320_t1;
                    r320_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
                    r320_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathO/outline"), r312_xn$referglyph$1aao(r318_src)));
                    return void 0;
                });
            });
        };
        r312_MakeMathCircled(8853, "innerPlus");
        r312_MakeMathCircled(8854, "innerMinus");
        r312_MakeMathCircled(8855, "innerMultiply");
        r312_MakeMathCircled(8856, "innerMultiply/stroke1");
        r312_MakeMathCircled(8857, "mathCDotInner");
        r312_MakeMathCircled(8858, "whiteSmallCircle.NWID");
        r312_MakeMathCircled(8859, "opAsterisk");
        r312_MakeMathCircled(10678, "innerVerticalBar");
        r312_MakeMathCircled(10680, "innerMultiply/stroke2");
        r312_MakeMathCircled(10682, "hebr/innerPlus");
        r312_MakeMathCircled(10684, "rotatedInnerDivide");
        r312_MakeMathCircled(10686, "whiteVerySmallCircle.NWID");
        r312_MakeMathCircled(10687, "blackVerySmallCircle.NWID");
        r312_MakeMathCircled(10808, "innerDivide");
        var r312_MakeMathCircledAllowingOverflow = function (r323_u, r323_inner) {
            var _r323_t0, _r323_t1;
            return r312_xn$deriveglyphs$7Hrq("mathCircledAllowingOverflow{" + r323_inner + "}", r323_u, r323_inner, function (r324_src, r324_gr) {
                var _r324_t0, _r324_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                    var _r326_t0, _r326_t1;
                    r326_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
                    r326_currentGlyph.include(r312_xn$referglyph$1aao(r324_src));
                    return void 0;
                });
            });
        };
        r312_MakeMathCircledAllowingOverflow(8960, "innerMultiply/stroke1");
        r312_MakeMathCircledAllowingOverflow(10683, "innerMultiply");
        var r312_MakeMathLeftHalfCircled = function (r329_u, r329_inner) {
            var _r329_t0, _r329_t1;
            return r312_xn$deriveglyphs$7Hrq("mathLeftHalfCircled{" + r329_inner + "}", r329_u, r329_inner, function (r330_src, r330_gr) {
                var _r330_t0, _r330_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                    var _r332_t0, _r332_t1;
                    r332_currentGlyph.include(r312_xn$referglyph$1aao("mathOLeftHalf"), true, true);
                    r332_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathO/outline"), r312_xn$referglyph$1aao(r330_src)));
                    return void 0;
                });
            });
        };
        var r312_MakeMathRightHalfCircled = function (r335_u, r335_inner) {
            var _r335_t0, _r335_t1;
            return r312_xn$deriveglyphs$7Hrq("mathRightHalfCircled{" + r335_inner + "}", r335_u, r335_inner, function (r336_src, r336_gr) {
                var _r336_t0, _r336_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                    var _r338_t0, _r338_t1;
                    r338_currentGlyph.include(r312_xn$referglyph$1aao("mathORightHalf"), true, true);
                    r338_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathO/outline"), r312_xn$referglyph$1aao(r336_src)));
                    return void 0;
                });
            });
        };
        r312_MakeMathLeftHalfCircled(10797, "innerPlus");
        r312_MakeMathRightHalfCircled(10798, "innerPlus");
        r312_MakeMathLeftHalfCircled(10804, "innerMultiply");
        r312_MakeMathRightHalfCircled(10805, "innerMultiply");
        r312_xn$GlyphSaveSink$2Lrc4b.save(10806, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
            var _r343_t0, _r343_t1;
            r343_currentGlyph.include(r312_xn$referglyph$1aao("mathCircled{innerMultiply}"), true, true);
            r343_currentGlyph.include(r312_MarkSet.plus());
            r343_currentGlyph.include(r312_xn$referglyph$1aao("circumflexAbove"));
            r343_currentGlyph.include(r312_xn$clearanchors$1aao());
            return void 0;
        }));
        (function () {
            var r350_FMosaicWide, r350_MosaicNameSuffix, r350_MosaicWidth, r350_MosaicWidthScalar, _r350_t3, _r350_t5, _r350_t6, _r350_tag7;
            var r350_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r350_t0 = r350_WidthKinds;
            var _r350_t1 = _r350_t0.length;
            var _r350_t2 = 0;
            var _r350_t4 = _r350_t2 < _r350_t1;
            while (_r350_t4) {
                _r350_t3 = _r350_t0[_r350_t2];
                r350_FMosaicWide = _r350_t3[0];
                r350_MosaicNameSuffix = _r350_t3[1];
                r350_MosaicWidth = _r350_t3[2];
                r350_MosaicWidthScalar = _r350_t3[3];
                (function () {
                    var r353_MosaicDesiredWidth = r312_WideWidth1;
                    var r353_MosaicMiddle = r350_MosaicWidth / 2;
                    var r353_MosaicUnitWidth = r350_MosaicWidth / r350_MosaicWidthScalar;
                    var r353_MangleUnicode = function (r354_unicode, r354__desiredOverride) {
                        var _r354_t0, _r354_t1;
                        return r350_MosaicWidth === (r354__desiredOverride || r353_MosaicDesiredWidth) ? r354_unicode : void 0;
                    };
                    var r353_MangleName = function (r355_name) {
                        var _r355_t0, _r355_t1;
                        return r355_name + r350_MosaicNameSuffix;
                    };
                    var r353_MakeMathBigCircled = function (r356_u, r356_inner) {
                        var _r356_t0, _r356_t1;
                        return r312_xn$deriveglyphs$7Hrq(r353_MangleName("mathBigCircled{" + r356_inner + "}"), r353_MangleUnicode(r356_u), r353_MangleName(r356_inner), function (r357_src, r357_gr) {
                            var _r357_t0, _r357_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                                var _r359_t0, _r359_t1;
                                r359_currentGlyph.include(r312_xn$referglyph$1aao(r353_MangleName("mathOBig")), true, true);
                                r359_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao(r353_MangleName("mathOBig/outline")), r312_xn$referglyph$1aao(r357_src)));
                                return void 0;
                            });
                        });
                    };
                    r353_MakeMathBigCircled(10752, "mathCDotBig");
                    r353_MakeMathBigCircled(10753, "innerPlusBig");
                    return r353_MakeMathBigCircled(10754, "innerMultiplyBig");
                })();
                _r350_t5 = _r350_t2 = _r350_t2 + 1;
                _r350_t4 = _r350_t2 < _r350_t1;
            }
            return _r350_t5;
        })();
        r312_xn$GlyphSaveSink$2Lrc4b.save(8861, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
            var _r364_t0, _r364_t1;
            r364_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
            r364_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathO/outline"), r312_HBar.m(r312_SB + r312_MathEnclosureSw, r312_RightSB - r312_MathEnclosureSw, r312_SymbolMid, r312_MathEnclosureSw)));
            return void 0;
        }));
        var r312_eqS = Math.min(r312_MathEnclosureSw, (r312_RightSB - r312_SB) / 8);
        var r312_eqD = Math.max(r312_eqS, (r312_RightSB - r312_SB) / 6);
        r312_xn$GlyphSaveSink$2Lrc4b.save(8860, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
            var _r369_t0, _r369_t1;
            r369_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
            r369_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathO/outline"), r312_union(r312_HBar.m(r312_SB + r312_eqS, r312_RightSB - r312_eqS, r312_SymbolMid + r312_eqD, r312_eqS), r312_HBar.m(r312_SB + r312_eqS, r312_RightSB - r312_eqS, r312_SymbolMid - r312_eqD, r312_eqS))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(10677, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
            var _r374_t0, _r374_t1;
            r374_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
            r374_currentGlyph.include(r312_HBar.m(r1_mix(r312_Middle, r312_SB, Math.SQRT2), r1_mix(r312_Middle, r312_RightSB, Math.SQRT2), r312_SymbolMid, r312_MathEnclosureSw));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(10679, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
            var _r379_t0, _r379_t1;
            r379_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
            r379_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathO/outline"), r312_union(r312_VBar.m(r312_Middle + r312_eqD, r312_PlusBot + r312_eqS, r312_PlusTop - r312_eqS, r312_eqS), r312_VBar.m(r312_Middle - r312_eqD, r312_PlusBot + r312_eqS, r312_PlusTop - r312_eqS, r312_eqS))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(10681, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
            var _r384_t0, _r384_t1;
            r384_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
            r384_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathO/outline"), r312_union(r312_VBar.m(r312_Middle, r312_PlusTop, r312_SymbolMid - r312_eqD, r312_eqS), r312_HBar.m(r312_SB + r312_eqS, r312_RightSB - r312_eqS, r312_SymbolMid - r312_eqD, r312_eqS))));
            return void 0;
        }));
        var r312_arrowTop = r1_mix(r312_SymbolMid, r312_BgOpTop, 1.1);
        var r312_arrowBot = r1_mix(r312_SymbolMid, r312_BgOpBot, 1.1);
        return r312_xn$GlyphSaveSink$2Lrc4b.save(10685, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
            var _r389_t0, _r389_t1;
            r389_currentGlyph.include(r312_xn$referglyph$1aao("mathO"), true, true);
            r389_currentGlyph.include(r312_union(r312_ArrowHead(r312_Middle, r312_arrowBot, r312_Middle, r312_arrowTop, (r312_RightSB - r312_SB) / 2), r312_ArrowBar(r312_Middle, r312_arrowBot, r312_Middle, r312_arrowTop, r312_MathEnclosureSw / 2)));
            return void 0;
        }));
    });
    return void 0;
});


