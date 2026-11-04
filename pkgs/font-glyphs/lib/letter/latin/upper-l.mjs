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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-L", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_serifGrade, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_VJut = _r313_t1.VJut;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markMiddle = _r313_t7.markMiddle;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t8.LeaningAnchor;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t9.CreateAccentedComposition;
        var r313_CreateTurnedLetter = _r313_t9.CreateTurnedLetter;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_BeltOverlay = _r313_t10.BeltOverlay;
        var r313_LetterBarOverlay = _r313_t10.LetterBarOverlay;
        var r313_kSB = 1.5;
        var r313_xLBarLeft = function (r320_df) {
            var _r320_t0, _r320_t1;
            return r1_mix(0, r320_df.leftSB, r313_kSB);
        };
        var r313_xLRight = function (r321_df) {
            var _r321_t0, _r321_t1;
            return r321_df.rightSB - 0.75 * r313_OX;
        };
        var r313_LShape = function (r322_df, r322_top, r322_sgr, r322_swv) {
            var _r322_t0, _r322_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                r324_currentGlyph.include(r313_VBar.l(r313_xLBarLeft(r322_df), 0, r322_top, r322_swv));
                r324_currentGlyph.include(r313_HBar.b(r313_xLBarLeft(r322_df) - r313_O, r313_xLRight(r322_df), 0));
                if (r322_sgr > 0) r324_currentGlyph.include(r313_VSerif.ur(r313_xLRight(r322_df), 0, r313_VJut));
                if (r322_sgr > 1) {
                    r324_currentGlyph.include(r313_HSerif.lb(r313_xLBarLeft(r322_df) + r313_HSwToV(0.5 * r322_swv), 0, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r322_swv))));
                    r324_currentGlyph.include(r313_union(r313_HSerif.lt(r313_xLBarLeft(r322_df) + r313_HSwToV(0.5 * r322_swv), r322_top, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r322_swv))), r313_HSerif.rt(r313_xLBarLeft(r322_df) + r313_HSwToV(0.5 * r322_swv), r322_top, r313_MidJutSide - r313_HSwToV(0.5 * (r313_Stroke - r322_swv)))));
                }
                return void 0;
            });
        };
        var r313_LSlashOverlay = function (r330_df, r330_top, r330_sgr) {
            var _r330_t0, _r330_t1;
            var r330_fine = 0.5 * r313_OverlayStroke;
            var r330_yMiddle = r1_mix(0 + r313_Stroke, r330_top - (r330_sgr > 1 ? r313_Stroke : 0), 0.5);
            return r313_dispiro(r313_widths.center(2 * r330_fine), r313_flat(r1_mix(0, r330_df.leftSB, 0.5), r330_yMiddle - r313_LongVJut * 0.4), r313_curl(r1_mix(0, r330_df.leftSB, 0.5) + 1.6 * r313_LongJut, r330_yMiddle + r313_LongVJut * 0.4));
        };
        var r313_LConfig = {
            "serifless": [0],
            "motionSerifed": [1],
            "serifed": [2]
        };
        var _r313_t11 = Object.entries(r313_LConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_serifGrade = _r313_t13[1][0];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("L." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                    var _r336_t0, _r336_t1;
                    var r336_df = r336_currentGlyph.include(r313_DivFrame(1));
                    r336_currentGlyph.include(r336_df.markSet.capital());
                    r336_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_xLBarLeft(r336_df)));
                    r336_currentGlyph.include(r313_LShape(r336_df, r313_CAP, r313_serifGrade, r313_Stroke));
                    r336_currentGlyph.setBaseAnchor("cvDecompose", r1_mix(r336_df.leftSB, r336_df.rightSB, 0.65) + r313_HSwToV(r313_QuarterStroke), r1_mix(r313_Stroke, r313_CAP, 0.5));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("LSlash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                    var _r344_t0, _r344_t1;
                    r344_currentGlyph.include(r313_xn$referglyph$1aao("L." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r344_currentGlyph.include(r313_LSlashOverlay(r313_DivFrame(1), r313_CAP, r313_serifGrade));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpL." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                    var _r349_t0, _r349_t1;
                    var r349_df = r349_currentGlyph.include(r313_DivFrame(1));
                    r349_currentGlyph.include(r349_df.markSet.e());
                    r349_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_xLBarLeft(r349_df)));
                    r349_currentGlyph.include(r313_LShape(r349_df, r313_XH, r313_serifGrade, r313_Stroke));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpLSlash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                    var _r356_t0, _r356_t1;
                    r356_currentGlyph.include(r313_xn$referglyph$1aao("smcpL." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r356_currentGlyph.include(r313_LSlashOverlay(r313_DivFrame(1), r313_XH, r313_serifGrade));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("LLWelsh." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                    var _r361_t0, _r361_t1;
                    var r361_df = r361_currentGlyph.include(r313_DivFrame(1));
                    r361_currentGlyph.include(r361_df.markSet.capital());
                    var r361_sw = r313_AdviceStroke(4);
                    var r361_gap = Math.max(r313_Width / 8, r313_AdviceStroke(8));
                    r361_currentGlyph.include(r313_LShape(r361_df, r313_CAP, r313_serifGrade, r361_sw));
                    r361_currentGlyph.include(r313_intersection(r313_MaskLeft(r361_df.rightSB), r313_MaskAbove(r361_sw), r313_xn$withtransform$5sIl(r313_ApparentTranslate(r313_HSwToV(r361_sw) + r361_gap, 0), r313_LShape(r361_df, r313_CAP, r313_serifGrade, r361_sw))));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("LHighBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    r368_currentGlyph.include(r313_xn$referglyph$1aao("L." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r368_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_xLBarLeft(r313_DivFrame(1)), r313_XH, r313_CAP - (r313_serifGrade > 1 ? r313_Stroke : 0)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("L", "L");
        r313_xn$linkreducedvariant$5sIl8("L/sansSerif", "L", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("LSlash", 321, new r313_xn$NamedParameterPair$2Lrc9b("follow", "L"));
        r313_xn$selectvariant$7Hrq("smcpL", 671, new r313_xn$NamedParameterPair$2Lrc9b("follow", "L"));
        r313_xn$selectvariant$7Hrq("smcpLSlash", 7436, new r313_xn$NamedParameterPair$2Lrc9b("follow", "L"));
        r313_xn$selectvariant$7Hrq("LLWelsh", 7930, new r313_xn$NamedParameterPair$2Lrc9b("follow", "L"));
        r313_xn$selectvariant$7Hrq("LHighBar", 42824, new r313_xn$NamedParameterPair$2Lrc9b("follow", "L"));
        r313_CreateTurnedLetter("turnL", 42880, "L", r313_HalfAdvance, r313_CAP / 2);
        r313_CreateTurnedLetter("turnL/sansSerif", 8514, "L/sansSerif", r313_HalfAdvance, r313_CAP / 2);
        r313_xn$derivemultipartglyphs$7Hrq65("LCaron", 317, ["L", "commaAbove"], function (r376_srcs, r376_gr) {
            var _r376_t0, _r376_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                var _r378_t1, _r378_t2;
                var _r378_t0 = r376_srcs;
                var r378_base = _r378_t0[0];
                var r378_mark = _r378_t0[1];
                r378_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(r1_mix(r313_SB, r313_RightSB, 0.875) - r313_markMiddle, 0), r313_xn$referglyph$1aao(r378_mark)));
                r378_currentGlyph.include(r313_xn$referglyph$1aao(r378_base), r313_AS_BASE, r313_ALSO_METRICS);
                return void 0;
            });
        });
        r313_CreateAccentedComposition("LWedge", null, "L", "caronAbove");
        r313_xn$derivecomposites$7Hrq("LDot", 319, "L", "LDot/dot");
        r313_xn$GlyphSaveSink$2Lrc4b.save("LBar/overlay", null, r313_LetterBarOverlay.l.in(r313_xLBarLeft(r313_DivFrame(1)), 0, r313_CAP));
        r313_xn$derivecomposites$7Hrq("LBar", 573, "L", "LBar/overlay");
        r313_xn$GlyphSaveSink$2Lrc4b.save("LDoubleBar/overlay", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
            var _r384_t0, _r384_t1;
            r384_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_xLBarLeft(r313_DivFrame(1)), 0, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("py", 0.6)), true, true);
            r384_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_xLBarLeft(r313_DivFrame(1)), 0, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("py", 0.4)));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("LDoubleBar", 11360, "L", "LDoubleBar/overlay");
        r313_xn$deriveglyphs$7Hrq("LTildeOver", 11362, "L", function (r389_src, r389_gr) {
            var _r389_t0, _r389_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var _r391_t0, _r391_t1;
                r391_currentGlyph.include(r313_xn$referglyph$1aao(r389_src), r313_AS_BASE, r313_ALSO_METRICS);
                r391_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                    var _r396_t0, _r396_t1;
                    r396_currentGlyph.include(r313_xn$referglyph$1aao("tildeOver"));
                    r396_currentGlyph.include(r313_ApparentTranslate(r313_xLBarLeft(r313_DivFrame(1)) + r313_HSwToV(r313_HalfStroke) - r313_markMiddle, r1_mix(0, r313_CAP, 0.525) - r313_XH / 2));
                    return void 0;
                })));
                return void 0;
            });
        });
        r313_xn$GlyphSaveSink$2Lrc4b.save("LBelt/overlay", null, r313_BeltOverlay(r313_CAP, r313_xLBarLeft(r313_DivFrame(1)) + r313_HSwToV(r313_HalfStroke)));
        r313_xn$derivecomposites$7Hrq("LBelt", 42925, "L", "LBelt/overlay");
        r313_xn$GlyphSaveSink$2Lrc4b.save("smcpLBelt/overlay", null, r313_BeltOverlay(r313_XH, r313_xLBarLeft(r313_DivFrame(1)) + r313_HSwToV(r313_HalfStroke)));
        r313_xn$derivecomposites$7Hrq("smcpLBelt", 122628, "smcpL", "smcpLBelt/overlay");
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/L", 120131, new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
            var _r404_t0, _r404_t1;
            var r404_df = r404_currentGlyph.include(r313_DivFrame(1));
            r404_currentGlyph.include(r404_df.markSet.capital());
            r404_currentGlyph.include(r313_VBar.l(r313_xLBarLeft(r404_df), 0, r313_CAP, r313_BBS));
            r404_currentGlyph.include(r313_VBar.l(r313_xLBarLeft(r404_df) + r313_BBD, 0, r313_CAP, r313_BBS));
            r404_currentGlyph.include(r313_HBar.b(r313_xLBarLeft(r404_df) - r313_O, r313_xLRight(r404_df), 0, r313_BBS));
            r404_currentGlyph.include(r313_HBar.t(r313_xLBarLeft(r404_df), r313_xLBarLeft(r404_df) + r313_BBD, r313_CAP, r313_BBS));
            return void 0;
        }));
    });
    return void 0;
});


