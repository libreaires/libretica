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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Integrals", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_BgOpTop = _r312_t1.BgOpTop;
        var r312_BgOpBot = _r312_t1.BgOpBot;
        var r312_Translate = _r312_t1.Translate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Hook = _r312_t1.Hook;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskRight = _r312_t5.MaskRight;
        var r312_OShape = _r312_t5.OShape;
        var r312_OShapeOutline = _r312_t5.OShapeOutline;
        var r312_ForceUpright = _r312_t5.ForceUpright;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var r312_WithDotVariants = _r312_t5.WithDotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_HDual = _r312_t6.HDual;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Long-S"].resolve();
        var r312_LongSShape = _r312_t7.LongSShape;
        var r312_MosaicTop = r312_fontMetrics.os2.sTypoAscender;
        var r312_MosaicBottom = r312_fontMetrics.os2.sTypoDescender;
        var r312_MosaicHeight = r312_MosaicTop - r312_MosaicBottom;
        var r312_IntHookY = r312_Hook * 0.75;
        r312_xn$GlyphSaveSink$2Lrc4b.save("integrate", 8747, new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            r318_currentGlyph.include(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke));
            return void 0;
        }));
        r312_HDual("doubleIntegrate", 8748, "integrate", 0.4 * r312_Width);
        r312_xn$GlyphSaveSink$2Lrc4b.save("integralUpper", 8992, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            r322_currentGlyph.include(r312_ForceUpright());
            r322_currentGlyph.include(r312_intersection(r312_Rect(r312_MosaicTop, r312_MosaicBottom, -r312_Width, 2 * r312_Width), r312_LongSShape(r312_BgOpTop, r312_BgOpBot - r312_MosaicHeight * 2, r312_Hook, r312_IntHookY, r312_OperatorStroke)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("integralExtension", 9134, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            r327_currentGlyph.include(r312_ForceUpright());
            r327_currentGlyph.include(r312_intersection(r312_Rect(r312_MosaicTop, r312_MosaicBottom, -r312_Width, 2 * r312_Width), r312_LongSShape(r312_BgOpTop + r312_MosaicHeight, r312_BgOpBot - r312_MosaicHeight, r312_Hook, r312_IntHookY, r312_OperatorStroke)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("integralLower", 8993, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
            var _r332_t0, _r332_t1;
            r332_currentGlyph.include(r312_ForceUpright());
            r332_currentGlyph.include(r312_intersection(r312_Rect(r312_MosaicTop, r312_MosaicBottom, -r312_Width, 2 * r312_Width), r312_LongSShape(r312_BgOpTop + r312_MosaicHeight * 2, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("tripleIntegrate", 8749, new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
            var _r337_t0, _r337_t1;
            var r337_shape = function () {
                var _r338_t0, _r338_t1;
                return r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.75, r312_IntHookY, r312_AdviceStroke(4));
            };
            r337_currentGlyph.include(r337_shape());
            r337_currentGlyph.include(r312_Translate(-r312_Width * 0.275, 0));
            r337_currentGlyph.include(r337_shape());
            r337_currentGlyph.include(r312_Translate(-r312_Width * 0.275, 0));
            r337_currentGlyph.include(r337_shape());
            r337_currentGlyph.include(r312_Translate(r312_Width * 0.275, 0));
            return void 0;
        }));
        var r312_IntegrateRingMask = function (r345_kx) {
            var _r345_t0, _r345_t1;
            return r312_OShapeOutline.NoOvershoot(r312_SymbolMid + (r312_RightSB - r312_SB) / 2, r312_SymbolMid - (r312_RightSB - r312_SB) / 2, r1_mix(0, r312_SB, r345_kx), r1_mix(r312_Width, r312_RightSB, r345_kx));
        };
        var r312_IntegrateRing = function (r346_kx, r346_sw) {
            var _r346_t0, _r346_t1;
            return r312_OShape(r312_SymbolMid + (r312_RightSB - r312_SB) / 2, r312_SymbolMid - (r312_RightSB - r312_SB) / 2, r1_mix(0, r312_SB, r346_kx), r1_mix(r312_Width, r312_RightSB, r346_kx), r346_sw);
        };
        var r312_RingIntFine = r312_AdviceStroke(4);
        r312_xn$GlyphSaveSink$2Lrc4b.save("ringIntegrate", 8750, r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_IntegrateRingMask(1)), r312_intersection(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_RingIntFine), r312_IntegrateRingMask(1)), r312_IntegrateRing(1, r312_RingIntFine)));
        var r312_RingIntDotSize = r312_DotRadius * r312_OperatorStroke / r312_Stroke;
        var r312_RingIntSideShift = (r312_RightSB - r312_SB) * 0.375 - r312_HSwToV(r312_OperatorStroke);
        r312_WithDotVariants("ringDotIntegrate", 10773, function (r348_DrawAt, r348_kdr, r348_ov) {
            var _r348_t0, _r348_t1;
            return r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_IntegrateRingMask(1)), r312_IntegrateRing(1, r312_RingIntFine), r348_DrawAt(r312_Middle, r312_SymbolMid, r312_RingIntDotSize * r348_kdr - r348_ov));
        });
        r312_WithDotVariants("rightHalfRingDotIntegrate", 10771, function (r349_DrawAt, r349_kdr, r349_ov) {
            var _r349_t0, _r349_t1;
            return r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_IntegrateRingMask(1)), r312_intersection(r312_IntegrateRing(1, r312_RingIntFine), r312_MaskRight(r312_Middle - r312_HSwToV(0.5 * r312_OperatorStroke))), r349_DrawAt(r312_Middle, r312_SymbolMid, r312_RingIntDotSize * r349_kdr - r349_ov));
        });
        r312_WithDotVariants("shiftedRightHalfRingDotIntegrate", 10772, function (r350_DrawAt, r350_kdr, r350_ov) {
            var _r350_t0, _r350_t1;
            return r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_xn$withtransform$5sIl(r312_Translate(r312_RingIntSideShift, 0), r312_IntegrateRingMask(1))), r312_intersection(r312_xn$withtransform$5sIl(r312_Translate(r312_RingIntSideShift, 0), r312_IntegrateRing(1, r312_RingIntFine)), r312_MaskRight(r312_Middle - r312_HSwToV(0.5 * r312_OperatorStroke))), r350_DrawAt(r312_Middle + r312_RingIntSideShift, r312_SymbolMid, r312_RingIntDotSize * r350_kdr - r350_ov));
        });
        var r312_RingIntArrowSize = r312_Hook / 2;
        var r312_RingIntArrowGap = Math.max(r312_AdviceStroke(6), r312_RingIntArrowSize / 4);
        var r312_RingIntegrateArrowHead = function (r351_sz, r351_gap, r351_kx, r351_sw) {
            var _r351_t0, _r351_t1;
            var r351_cx = r1_mix(r312_Width, r312_RightSB, r351_kx) - r312_HSwToV(0.5 * r351_sw);
            return r312_xn$spirooutline$1aao(r312_corner(r351_cx - (r351_sz + r351_gap), r312_SymbolMid + r351_sz / 2), r312_corner(r351_cx + (r351_sz + r351_gap), r312_SymbolMid + r351_sz / 2), r312_corner(r351_cx, r312_SymbolMid - r351_sz / 2 - r351_gap));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("semiringIntegrateCw", 8753, r312_union(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_difference(r312_IntegrateRing(1, r312_RingIntFine), r312_RingIntegrateArrowHead(r312_RingIntArrowSize, r312_RingIntArrowGap, 1, r312_RingIntFine), r312_MaskBelow(r312_SymbolMid)), r312_RingIntegrateArrowHead(r312_RingIntArrowSize, 0, 1, r312_RingIntFine)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("semiringIntegrateCcw", 10769, r312_union(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_difference(r312_IntegrateRing(1, r312_RingIntFine), r312_RingIntegrateArrowHead(-r312_RingIntArrowSize, -r312_RingIntArrowGap, 1, r312_RingIntFine), r312_MaskAbove(r312_SymbolMid)), r312_RingIntegrateArrowHead(-r312_RingIntArrowSize, 0, 1, r312_RingIntFine)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ringIntegrateCw", 8754, r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_IntegrateRingMask(1)), r312_intersection(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_RingIntFine), r312_IntegrateRingMask(1)), r312_difference(r312_IntegrateRing(1, r312_RingIntFine), r312_RingIntegrateArrowHead(r312_RingIntArrowSize, r312_RingIntArrowGap, 1, r312_RingIntFine)), r312_RingIntegrateArrowHead(r312_RingIntArrowSize, 0, 1, r312_RingIntFine)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ringIntegrateCcw", 8755, r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_IntegrateRingMask(1)), r312_intersection(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_RingIntFine), r312_IntegrateRingMask(1)), r312_difference(r312_IntegrateRing(1, r312_RingIntFine), r312_RingIntegrateArrowHead(-r312_RingIntArrowSize, -r312_RingIntArrowGap, 1, r312_RingIntFine)), r312_RingIntegrateArrowHead(-r312_RingIntArrowSize, 0, 1, r312_RingIntFine)));
        var r312_IntegrateBox = function (r356_kx, r356_sw) {
            var _r356_t0, _r356_t1;
            return r312_Rect(r312_SymbolMid + (r312_RightSB - r312_SB) / 2 - r356_sw, r312_SymbolMid - (r312_RightSB - r312_SB) / 2 + r356_sw, r1_mix(0, r312_SB, r356_kx) + r312_HSwToV(r356_sw), r1_mix(r312_Width, r312_RightSB, r356_kx) - r312_HSwToV(r356_sw));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("boxIntegral", 10774, r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_IntegrateBox(1, 0)), r312_intersection(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_RingIntFine), r312_IntegrateBox(1, 0)), r312_difference(r312_IntegrateBox(1, 0), r312_IntegrateBox(1, r312_RingIntFine))));
        r312_WithDotVariants("rightHalfBoxDotIntegral", 10770, function (r358_DrawAt, r358_kdr, r358_ov) {
            var _r358_t0, _r358_t1;
            return r312_union(r312_difference(r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook, r312_IntHookY, r312_OperatorStroke), r312_IntegrateBox(1, 0)), r312_difference(r312_intersection(r312_IntegrateBox(1, 0), r312_MaskRight(r312_Middle - r312_HSwToV(0.5 * r312_OperatorStroke))), r312_IntegrateBox(1, r312_RingIntFine)), r358_DrawAt(r312_Middle, r312_SymbolMid, r312_RingIntDotSize * r358_kdr - r358_ov));
        });
        r312_xn$GlyphSaveSink$2Lrc4b.save("ringDoubleIntegrate", 8751, r312_union(r312_difference(r312_union(r312_xn$withtransform$5sIl(r312_Translate(-r312_Width / 7, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.75, r312_IntHookY, r312_AdviceStroke(4))), r312_xn$withtransform$5sIl(r312_Translate(+r312_Width / 7, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.75, r312_IntHookY, r312_AdviceStroke(4)))), r312_IntegrateRingMask(1 / 2)), r312_intersection(r312_union(r312_xn$withtransform$5sIl(r312_Translate(-r312_Width / 7, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.75, r312_IntHookY, r312_AdviceStroke(5))), r312_xn$withtransform$5sIl(r312_Translate(+r312_Width / 7, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.75, r312_IntHookY, r312_AdviceStroke(5)))), r312_IntegrateRingMask(1 / 2)), r312_IntegrateRing(1 / 2, r312_AdviceStroke(5))));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("ringTripleIntegrate", 8752, r312_union(r312_difference(r312_union(r312_xn$withtransform$5sIl(r312_Translate(-r312_Width * 0.225, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.625, r312_Hook * 0.625, r312_AdviceStroke(5))), r312_xn$withtransform$5sIl(r312_Translate(+0, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.625, r312_Hook * 0.625, r312_AdviceStroke(5))), r312_xn$withtransform$5sIl(r312_Translate(+r312_Width * 0.225, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.625, r312_Hook * 0.625, r312_AdviceStroke(5)))), r312_IntegrateRingMask(1 / 4)), r312_intersection(r312_union(r312_xn$withtransform$5sIl(r312_Translate(-r312_Width * 0.225, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.625, r312_Hook * 0.625, r312_AdviceStroke(6))), r312_xn$withtransform$5sIl(r312_Translate(+0, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.625, r312_Hook * 0.625, r312_AdviceStroke(6))), r312_xn$withtransform$5sIl(r312_Translate(+r312_Width * 0.225, 0), r312_LongSShape(r312_BgOpTop, r312_BgOpBot, r312_Hook * 0.625, r312_Hook * 0.625, r312_AdviceStroke(6)))), r312_IntegrateRingMask(1 / 4)), r312_IntegrateRing(1 / 4, r312_AdviceStroke(6))));
    });
    return void 0;
});


