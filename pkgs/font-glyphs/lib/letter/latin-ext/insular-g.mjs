"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Insular-G", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_HVContrast = _r312_t1.HVContrast;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_VJut = _r312_t1.VJut;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThruThem = _r312_t2.alsoThruThem;
        var r312_bezControls = _r312_t2.bezControls;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_VSerif = _r312_t5.VSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_HalfAdvance = _r312_t6.HalfAdvance;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r312_CreateTurnedLetter = _r312_t7.CreateTurnedLetter;
        var r312_InsularGShape = function (r316_top, r316_bot) {
            var _r316_t0, _r316_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                var r318_fine = r312_AdviceStroke(4);
                var r318_pl = r312_SmallArchDepthB / (r312_SmallArchDepthA + r312_SmallArchDepthB);
                var r318_pr = r312_SmallArchDepthA / (r312_SmallArchDepthA + r312_SmallArchDepthB);
                var r318_fallArcShape = [[0.25, 0.1], [0.5, 0.21], [0.75, 0.38]];
                var r318_xFirstTurn = r1_mix(r312_SB, r312_RightSB, 0.3) + (r312_SLAB ? 0.75 : 0.5) * r312_HSwToV(r312_Stroke);
                var r318_xIntersection = r1_mix(r318_xFirstTurn, r312_RightSB, 0.3) - r312_HSwToV(r312_HalfStroke);
                var r318_yIntersection = r1_mix(r316_bot, r316_top, 0.55) - r312_QuarterStroke;
                var r318_yFirstTurn = r1_mix(r318_yIntersection, r316_top, 0.32) - 0.2 * r312_Stroke;
                var r318_yBottomRingLeft = r1_mix(r316_bot, r318_yIntersection, 0.875 * r318_pl) + r312_QuarterStroke;
                var r318_yBottomRingRight = r1_mix(r316_bot, r318_yIntersection, 0.875 * r318_pr) + r312_QuarterStroke;
                var r318_yPhantomBowlEnd = r1_mix(r316_bot, r318_yIntersection, 1.2);
                r318_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r316_top));
                r318_currentGlyph.include(r312_dispiro(r312_g4(r312_RightSB, r316_top - r312_Stroke, r312_widths.rhs(r318_fine)), r312_bezControls(0.7, 0.35, 1, 0.6, 12), r312_g4.down.mid(r318_xFirstTurn, r318_yFirstTurn, r312_widths.rhs.heading(r312_Stroke, {
                    "x": r312_HVContrast,
                    "y": +0.1
                })), r312_g2(r318_xIntersection, r318_yIntersection, r312_widths.center(r312_Stroke)), r312_alsoThruThem(r318_fallArcShape), r312_g4.down.mid(r312_RightSB - r312_O, r318_yBottomRingRight, r312_widths.rhs()), r312_arcvh(), r312_Arch.rhs.centerAt.rtl.b(r312_Middle, r316_bot)));
                r318_currentGlyph.include(r312_difference(r312_dispiro(r312_Arch.rhs.centerAt.rtl.b(r312_Middle, r316_bot), r312_archv(), r312_g4.up.mid(r312_SB + r312_O, r318_yBottomRingLeft), r312_g4(r312_Width - r318_xIntersection, r318_yIntersection, r312_widths.center(r318_fine)), r312_g4(r312_RightSB, r318_yPhantomBowlEnd)), r312_xn$spirooutline$1aao(r312_corner(r318_xFirstTurn, r316_top), r312_g4.down.mid(r318_xFirstTurn, r318_yFirstTurn), r312_g2(r318_xIntersection, r318_yIntersection), r312_alsoThruThem(r318_fallArcShape), r312_g4.down.mid(r312_RightSB - r312_O, r318_yBottomRingRight), r312_corner(r312_RightSB - r312_O, r316_bot), r312_corner(2 * r312_Width, r316_bot), r312_corner(2 * r312_Width, r316_top))));
                if (r312_SLAB) r318_currentGlyph.include(r312_VSerif.dl(r312_SB, r316_top, r312_VJut));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("gInsular", 7545, new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
            var _r325_t0, _r325_t1;
            r325_currentGlyph.include(r312_MarkSet.p());
            r325_currentGlyph.include(r312_InsularGShape(r312_XH, r312_Descender));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("GInsular", 42877, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            r330_currentGlyph.include(r312_MarkSet.capital());
            r330_currentGlyph.include(r312_InsularGShape(r312_CAP, 0));
            return void 0;
        }));
        r312_CreateTurnedLetter("turnGInsular", 42878, "GInsular", r312_HalfAdvance, r312_CAP / 2);
        return r312_CreateTurnedLetter("turngInsular", 42879, "gInsular", r312_HalfAdvance, r1_mix(r312_Descender, r312_XH, 0.5));
    });
    return void 0;
});


