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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Egyptological", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Middle = _r312_t1.Middle;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_end = _r312_t2.end;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_EgyptologicalYodComponent = function (r315_sw, r315_x, r315_bot, r315_top) {
            var _r315_t0, _r315_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
                var _r317_t0, _r317_t1;
                var r317_rad = (r315_top - r315_bot) / 2;
                var r317_wid = r317_rad * 1.2;
                var r317_balance = r317_wid * 0.55;
                r317_currentGlyph.include(r312_dispiro(r312_widths.rhs(r315_sw), r312_g4.right.start(r315_x - r317_balance, r315_top - r312_O, r312_heading(r312_Rightward)), r312_archv(), r312_g4.down.mid(r315_x + r317_wid - r317_balance, r1_mix(r315_bot, r315_top, 0.5), r312_heading(r312_Downward)), r312_arcvh(), r312_g4.left.end(r315_x - r317_balance, r315_bot + r312_O, r312_heading(r312_Leftward))));
                return void 0;
            });
        };
        var r312_EgyptologicalAyinComponent = function (r319_sw, r319_x, r319_bot, r319_top) {
            var _r319_t0, _r319_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                var r321_rad = (r319_top - r319_bot) / 2;
                var r321_wid = r321_rad * 1.2;
                var r321_balance = r321_wid * 0.55;
                r321_currentGlyph.include(r312_dispiro(r312_widths.lhs(r319_sw), r312_g4.left.start(r319_x + r321_balance, r319_top - r312_O, r312_heading(r312_Leftward)), r312_archv(), r312_g4.down.mid(r319_x - r321_wid + r321_balance, r1_mix(r319_bot, r319_top, 0.5), r312_heading(r312_Downward)), r312_arcvh(), r312_g4.right.end(r319_x + r321_balance, r319_bot + r312_O, r312_heading(r312_Rightward))));
                return void 0;
            });
        };
        var r312_EgyptologicalAlefShape = function (r323_bot, r323_top) {
            var _r323_t0, _r323_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1;
                var r325_sw = r312_AdviceStroke2(4, 4, r323_top);
                var r325_gap = Math.max(r325_sw / 2, r323_top / 12);
                var r325_rad = (r323_top - r325_gap) / 4;
                r325_currentGlyph.include(r312_EgyptologicalYodComponent(r325_sw, r312_Middle, r323_top - r325_rad * 2, r323_top));
                r325_currentGlyph.include(r312_EgyptologicalYodComponent(r325_sw, r312_Middle, r323_bot, r323_bot + r325_rad * 2));
                return void 0;
            });
        };
        var r312_EgyptologicalAyinShape = function (r328_bot, r328_top) {
            var _r328_t0, _r328_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                var _r330_t0, _r330_t1;
                var r330_sw = r312_AdviceStroke2(4, 4, r328_top);
                var r330_gap = Math.max(r330_sw / 2, r328_top / 12);
                var r330_rad = (r328_top + r330_gap) / 4;
                r330_currentGlyph.include(r312_EgyptologicalAyinComponent(r330_sw, r312_Middle, r328_top - r330_rad * 2, r328_top));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("EgyptologicalCapitalAlef", 42786, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1;
            r334_currentGlyph.include(r312_MarkSet.capital());
            r334_currentGlyph.include(r312_EgyptologicalAlefShape(0, r312_CAP));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("EgyptologicalSmallAlef", 42787, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            r339_currentGlyph.include(r312_MarkSet.e());
            r339_currentGlyph.include(r312_EgyptologicalAlefShape(0, r312_XH));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("EgyptologicalCapitalAyin", 42788, new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
            var _r344_t0, _r344_t1;
            r344_currentGlyph.include(r312_MarkSet.capital());
            r344_currentGlyph.include(r312_EgyptologicalAyinShape(0, r312_CAP));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("EgyptologicalSmallAyin", 42789, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            r349_currentGlyph.include(r312_MarkSet.e());
            r349_currentGlyph.include(r312_EgyptologicalAyinShape(0, r312_XH));
            return void 0;
        }));
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r312_markMiddle = _r312_t7.markMiddle;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r312_aboveMarkTop = _r312_t8.aboveMarkTop;
        var r312_aboveMarkBot = _r312_t8.aboveMarkBot;
        var r312_aboveMarkMid = _r312_t8.aboveMarkMid;
        var r312_aboveMarkStack = _r312_t8.aboveMarkStack;
        r312_xn$GlyphSaveSink$2Lrc4b.save("EgyptologicalYodAbove", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
            var _r356_t0, _r356_t1;
            r356_currentGlyph.setWidth(0);
            r356_currentGlyph.setMarkAnchor("above", r312_markMiddle, r312_XH, r312_markMiddle, r312_aboveMarkStack);
            r356_currentGlyph.setBaseAnchor("aboveBraceL", r312_markMiddle, r312_aboveMarkMid);
            r356_currentGlyph.setBaseAnchor("aboveBraceR", r312_markMiddle, r312_aboveMarkMid);
            var r356_fine = r312_AdviceStroke(5);
            r356_currentGlyph.include(r312_EgyptologicalYodComponent(r356_fine, r312_markMiddle, r312_aboveMarkBot, r312_aboveMarkTop));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("EgyptologicalYodTonos", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
            var _r364_t0, _r364_t1;
            r364_currentGlyph.setWidth(0);
            r364_currentGlyph.include(r312_xn$referglyph$1aao("EgyptologicalYodAbove"));
            r364_currentGlyph.setMarkAnchor("grekUpperTonos", r312_markMiddle, r312_XH);
            r364_currentGlyph.setBaseAnchor("aboveBraceL", r312_markMiddle, r312_aboveMarkMid);
            r364_currentGlyph.setBaseAnchor("aboveBraceR", r312_markMiddle, r312_aboveMarkMid);
            return void 0;
        }));
    });
    return void 0;
});


