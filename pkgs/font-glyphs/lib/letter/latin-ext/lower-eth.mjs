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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-Eth", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
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
        var r312_Ascender = _r312_t1.Ascender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_OverlayStroke = _r312_t1.OverlayStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_archv = _r312_t2.archv;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_HookEnd = _r312_t5.HookEnd;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$derivecomposites$7Hrq = _r312_t6["derive-composites"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_PalatalHook = _r312_t7.PalatalHook;
        var r312_fine = r312_ShoulderFine;
        var r312_yMid1 = r1_mix(0, r312_Ascender, 0.6);
        var r312_yMid2 = r312_YSmoothMidR(r312_yMid1, 0, r312_SmallArchDepthA, r312_SmallArchDepthB);
        var r312_yMid3 = r1_mix(r312_yMid1, r312_yMid2, 0.875);
        var r312_ArcStartKnots = function (r316__flatY1, r316__flatY2) {
            var _r316_t0, _r316_t1;
            return [r312_widths.lhs(r312_fine), r312_straight.up.mid(r312_RightSB - r312_OX - r312_HSwToV(r312_Stroke - r312_fine), r312_yMid2), r312_Arch.lhs(r312_yMid1, new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r312_fine)), r312_g4(r312_SB + r312_OX, r312_YSmoothMidL(r312_yMid1, 0, r312_SmallArchDepthA, r312_SmallArchDepthB)), r312_Arch.lhs(0), r312_flat(r312_RightSB - r312_OX, r1_fallback(r316__flatY1, r312_yMid2)), r312_curl(r312_RightSB - r312_OX, r1_fallback(r316__flatY2, r312_yMid3))];
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("dInsular.curlyBar", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1;
            r320_currentGlyph.include(r312_MarkSet.b());
            r320_currentGlyph.include(r312_dispiro(r312_ArcStartKnots(), r312_quadControls(0, 0.8), r312_g4(r312_SB + r312_Stroke * 1.1, r312_Ascender, r312_widths.lhs())));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("dInsular.straightBar", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
            var _r325_t0, _r325_t1;
            r325_currentGlyph.include(r312_MarkSet.b());
            var r325_yMockBarStart = r312_yMid2 + r312_Stroke * 0.3;
            var r325_xTerminal = r1_mix(r312_SB, r312_RightSB, 0.4) + r312_HSwToV(r312_HalfStroke);
            var r325_pStraightBarStart = 0.75 - r312_Stroke / (r312_Ascender - 0);
            r325_currentGlyph.include(r312_intersection(r312_MaskBelow(r312_Ascender), r312_dispiro(r312_ArcStartKnots(), r312_flat(r1_mix(r312_Width, r325_xTerminal, r325_pStraightBarStart), r1_mix(r325_yMockBarStart, r312_CAP, r325_pStraightBarStart), r312_widths.lhs()), r312_curl(r1_mix(r312_Width, r325_xTerminal, 2), r1_mix(r325_yMockBarStart, r312_CAP, 2)))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("dInsular.closedContour", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            r330_currentGlyph.include(r312_MarkSet.b());
            r330_currentGlyph.include(r312_dispiro(r312_ArcStartKnots(r312_SmallArchDepthA, r312_Ascender - r312_SmallArchDepthB), r312_HookEnd(r312_Ascender), r312_g4(r312_SB + r312_OX, r312_Ascender - r312_Hook)));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("dInsular", 42874, new r312_xn$NamedParameterPair$2Lrc9b("follow", "eth"));
        r312_xn$selectvariant$7Hrq("partial", 8706, new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dInsular"));
        r312_xn$derivecomposites$7Hrq("eth", 240, "dInsular", r312_dispiro(r312_widths.center(r312_OverlayStroke), r312_flat(r1_mix(r312_SB, r312_RightSB, 0.1), r1_mix(r312_XH, r312_Ascender, -0.05)), r312_curl(r1_mix(r312_SB, r312_RightSB, 0.95), r1_mix(r312_XH, r312_Ascender, +0.35))));
        return r312_xn$derivecomposites$7Hrq("ethPalatalHook", 122671, "eth", r312_PalatalHook.r(new r312_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r312_Arch["adjust-x"].bot(r312_Middle), r312_RightSB - r312_OX, 0.75)), new r312_xn$NamedParameterPair$2Lrc9b("y", 0), new r312_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r312_O, r312_yMid2, r312_archv.yFromX(0.75)))));
    });
    return void 0;
});


