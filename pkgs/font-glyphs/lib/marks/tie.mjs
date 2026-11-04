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
var r1_TieMark = _r1_t9.TieMark;
var r1_TieGlyph = _r1_t9.TieGlyph;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Mark-Tie", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t12, _r313_t13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_AccentClearance = _r313_t1.AccentClearance;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_quadControls = _r313_t2.quadControls;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markExtend = _r313_t7.markExtend;
        var r313_markHalfStroke = _r313_t7.markHalfStroke;
        var r313_markStress = _r313_t7.markStress;
        var r313_markFine = _r313_t7.markFine;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markMiddle = _r313_t8.markMiddle;
        var r313_markDotsRadius = _r313_t8.markDotsRadius;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_aboveMarkTop = _r313_t9.aboveMarkTop;
        var r313_aboveMarkBot = _r313_t9.aboveMarkBot;
        var r313_aboveMarkMid = _r313_t9.aboveMarkMid;
        var r313_aboveMarkStack = _r313_t9.aboveMarkStack;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_TildeShape = _r313_t10.TildeShape;
        var r313_CaretCaronMidSw = _r313_t10.CaretCaronMidSw;
        var r313_CaretCaronTerminalSw = _r313_t10.CaretCaronTerminalSw;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Below"].resolve();
        var r313_belowMarkBot = _r313_t11.belowMarkBot;
        var r313_belowMarkTop = _r313_t11.belowMarkTop;
        var r313_belowMarkMid = _r313_t11.belowMarkMid;
        var r313_aboveTieBase = r313_aboveMarkStack - r313_AccentClearance;
        var r313_aboveTieTop = r1_mix(r313_XH, r313_aboveMarkTop, 2);
        var r313_aboveTieBottom = r313_aboveTieTop - (r313_aboveMarkTop - r313_aboveMarkBot) * 0.875;
        var r313_aboveTieMid = r1_mix(r313_aboveTieBottom, r313_aboveTieTop, 0.5);
        var r313_belowTieBase = r313_Descender;
        var r313_belowTieBottom = r313_belowTieBase - (r313_aboveTieTop - r313_aboveTieBase);
        var r313_belowTieTop = r313_belowTieBase - (r313_aboveTieBottom - r313_aboveTieBase);
        var r313_belowTieMid = r1_mix(r313_belowTieBottom, r313_belowTieTop, 0.5);
        var r313_tieLeft = r1_mix(0, r313_markMiddle, 1.5);
        var r313_tieRight = -r313_tieLeft;
        var r313_TieAboveAnchors = function () {
            var _r321_t0, _r321_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t0, _r323_t1;
                r323_currentGlyph.setMarkAnchor("tieAbove", 0, r313_aboveTieBase, 0, r313_aboveTieTop);
                r323_currentGlyph.setBaseAnchor("aboveBraceL", r313_tieLeft, r313_aboveTieMid);
                r323_currentGlyph.setBaseAnchor("aboveBraceR", r313_tieRight, r313_aboveTieMid);
                return void 0;
            });
        };
        var r313_TieBelowAnchors = function () {
            var _r327_t0, _r327_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                var _r329_t0, _r329_t1;
                r329_currentGlyph.setMarkAnchor("tieBelow", 0, r313_belowTieBase, 0, r313_belowTieBottom);
                r329_currentGlyph.setBaseAnchor("belowBraceL", r313_tieLeft, r313_belowTieMid);
                r329_currentGlyph.setBaseAnchor("belowBraceR", r313_tieRight, r313_belowTieMid);
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("tieAbove", 865, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            r335_currentGlyph.setWidth(0);
            r335_currentGlyph.include(r313_TieAboveAnchors());
            r1_TieGlyph.set(r335_currentGlyph);
            r335_currentGlyph.include(r313_dispiro(r313_widths.center(r313_markHalfStroke * 2), r313_g4(r313_tieLeft, r313_aboveTieBottom), r313_quadControls(0.5, 1), r313_g4.right.mid(0, r313_aboveTieTop, r313_heading(r313_Rightward)), r313_quadControls(0.5, 0), r313_g4(r313_tieRight, r313_aboveTieBottom)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("turnTieAbove", 861, new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
            var _r341_t0, _r341_t1;
            r341_currentGlyph.setWidth(0);
            r341_currentGlyph.include(r313_TieAboveAnchors());
            r1_TieGlyph.set(r341_currentGlyph);
            r341_currentGlyph.include(r313_dispiro(r313_widths.center(r313_markHalfStroke * 2), r313_g4(r313_tieLeft, r313_aboveTieTop), r313_quadControls(0.5, 1), r313_g4.right.mid(0, r313_aboveTieBottom, r313_heading(r313_Rightward)), r313_quadControls(0.5, 0), r313_g4(r313_tieRight, r313_aboveTieTop)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("tieBelow", 860, new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
            var _r347_t0, _r347_t1;
            r347_currentGlyph.setWidth(0);
            r347_currentGlyph.include(r313_TieBelowAnchors());
            r1_TieGlyph.set(r347_currentGlyph);
            r347_currentGlyph.include(r313_xn$referglyph$1aao("tieAbove"));
            r347_currentGlyph.include(r313_FlipAround(0, r1_mix(r313_belowTieBase, r313_aboveTieBase, 0.5)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("turnTieBelow", 7676, new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
            var _r354_t0, _r354_t1;
            r354_currentGlyph.setWidth(0);
            r354_currentGlyph.include(r313_TieBelowAnchors());
            r1_TieGlyph.set(r354_currentGlyph);
            r354_currentGlyph.include(r313_xn$referglyph$1aao("turnTieAbove"));
            r354_currentGlyph.include(r313_FlipAround(0, r1_mix(r313_belowTieBase, r313_aboveTieBase, 0.5)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("overlineTieAbove", 862, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            r361_currentGlyph.setWidth(0);
            r361_currentGlyph.include(r313_TieAboveAnchors());
            r1_TieGlyph.set(r361_currentGlyph);
            r361_currentGlyph.include(r313_dispiro(r313_widths.center(r313_markHalfStroke * 2), r313_flat(r313_tieLeft, r313_aboveTieMid), r313_curl(r313_tieRight, r313_aboveTieMid)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("underlineTieBelow", 863, new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
            var _r367_t0, _r367_t1;
            r367_currentGlyph.setWidth(0);
            r367_currentGlyph.include(r313_TieBelowAnchors());
            r1_TieGlyph.set(r367_currentGlyph);
            r367_currentGlyph.include(r313_xn$referglyph$1aao("overlineTieAbove"));
            r367_currentGlyph.include(r313_FlipAround(0, r1_mix(r313_belowTieBase, r313_aboveTieBase, 0.5)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("arrowTieAbove", 6891, new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
            var _r374_t0, _r374_t1;
            r374_currentGlyph.setWidth(0);
            r374_currentGlyph.include(r313_TieBelowAnchors());
            r1_TieGlyph.set(r374_currentGlyph);
            r374_currentGlyph.include(r313_HBar.m(r313_tieLeft, r313_tieRight, r313_aboveTieMid, r313_markFine * 2));
            r374_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                var _r381_t0, _r381_t1;
                var r381_top = r313_aboveTieMid + (r313_aboveMarkTop - r313_aboveMarkBot) * 0.75;
                var r381_bot = r313_aboveTieMid - (r313_aboveMarkTop - r313_aboveMarkBot) * 0.75;
                var r381_left = r313_tieRight - r313_markExtend * 1.5;
                var r381_right = r313_tieRight;
                var r381_exp = Math.hypot(1, 0.5 * (r381_top - r381_bot) / (r381_right - r381_left));
                r381_currentGlyph.include(r313_dispiro(r313_widths.center(r313_markFine * 2), r313_flat(r381_left, r381_top), r313_curl(r381_right, r1_mix(r381_top, r381_bot, 0.5), r313_widths.heading(r313_markFine * r381_exp, r313_markFine * r381_exp, r313_Downward))));
                r381_currentGlyph.include(r313_dispiro(r313_widths.center(r313_markFine * 2), r313_flat(r381_left, r381_bot), r313_curl(r381_right, r1_mix(r381_top, r381_bot, 0.5), r313_widths.heading(r313_markFine * r381_exp, r313_markFine * r381_exp, r313_Upward))));
                return void 0;
            })));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("arrowTieBelow", 866, new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
            var _r386_t0, _r386_t1;
            r386_currentGlyph.setWidth(0);
            r386_currentGlyph.include(r313_TieBelowAnchors());
            r1_TieGlyph.set(r386_currentGlyph);
            r386_currentGlyph.include(r313_HBar.m(r313_tieLeft, r313_tieRight, r313_belowTieMid, r313_markFine * 2));
            r386_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                var _r393_t0, _r393_t1;
                var r393_top = r313_belowTieMid + (r313_belowMarkTop - r313_belowMarkBot) * 0.75;
                var r393_bot = r313_belowTieMid - (r313_belowMarkTop - r313_belowMarkBot) * 0.75;
                var r393_left = r313_tieRight - r313_markExtend * 1.5;
                var r393_right = r313_tieRight;
                var r393_exp = Math.hypot(1, 0.5 * (r393_top - r393_bot) / (r393_right - r393_left));
                r393_currentGlyph.include(r313_dispiro(r313_widths.center(r313_markFine * 2), r313_flat(r393_left, r393_top), r313_curl(r393_right, r1_mix(r393_top, r393_bot, 0.5), r313_widths.heading(r313_markFine * r393_exp, r313_markFine * r393_exp, r313_Downward))));
                r393_currentGlyph.include(r313_dispiro(r313_widths.center(r313_markFine * 2), r313_flat(r393_left, r393_bot), r313_curl(r393_right, r1_mix(r393_top, r393_bot, 0.5), r313_widths.heading(r313_markFine * r393_exp, r313_markFine * r393_exp, r313_Upward))));
                return void 0;
            })));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("tildeTieAbove", 864, new r313_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
            var _r398_t0, _r398_t1;
            r398_currentGlyph.setWidth(0);
            r398_currentGlyph.include(r313_TieAboveAnchors());
            r1_TieGlyph.set(r398_currentGlyph);
            r398_currentGlyph.include(r313_TildeShape(new r313_xn$NamedParameterPair$2Lrc9b("ttop", r313_aboveTieTop), new r313_xn$NamedParameterPair$2Lrc9b("tbot", r313_aboveTieBottom), new r313_xn$NamedParameterPair$2Lrc9b("leftEnd", r313_tieLeft), new r313_xn$NamedParameterPair$2Lrc9b("rightEnd", r313_tieRight), new r313_xn$NamedParameterPair$2Lrc9b("hs", r313_markHalfStroke)));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("circumflexTieAbove", 7629, new r313_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
            var _r409_t0, _r409_t1;
            r409_currentGlyph.setWidth(0);
            r409_currentGlyph.include(r313_TieAboveAnchors());
            r1_TieGlyph.set(r409_currentGlyph);
            var r409_leftHalf = r409_currentGlyph.include(r313_dispiro(r313_flat(r313_tieLeft, r313_aboveTieBottom, r313_widths.center(r313_CaretCaronTerminalSw)), r313_curl(0, r313_aboveTieTop, r313_widths.center(r313_CaretCaronMidSw))));
            var r409_rightHalf = r409_currentGlyph.include(r313_dispiro(r313_flat(r313_tieRight, r313_aboveTieBottom, r313_widths.center(r313_CaretCaronTerminalSw)), r313_curl(0, r313_aboveTieTop, r313_widths.center(r313_CaretCaronMidSw))));
            var r409_a = r409_leftHalf.lhsKnots[1];
            var r409_b = r409_rightHalf.rhsKnots[1];
            var r409_c = r409_leftHalf.rhsKnots[1];
            var r409_d = r409_rightHalf.lhsKnots[1];
            r409_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r409_a.x, r409_a.y), r313_corner(r409_b.x, r409_b.y), r313_corner(Math.max(r409_c.x, r409_d.x), r409_d.y), r313_corner(Math.min(r409_c.x, r409_d.x), r409_c.y)));
            return void 0;
        }));
    });
    return void 0;
});


