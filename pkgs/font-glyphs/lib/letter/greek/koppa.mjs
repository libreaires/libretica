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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Koppa", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_MaskRight = _r312_t5.MaskRight;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_ExtLineCenter = _r312_t5.ExtLineCenter;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r312_xn$GlyphSaveSink$2Lrc4b.save("grek/Koppa", 990, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var r317_kSerifShift, _r317_t0, _r317_t1;
            r317_currentGlyph.include(r312_MarkSet.capital());
            var r317_x1 = r312_SB + r312_HSwToV(r312_QuarterStroke) - r312_O;
            var r317_x1co = r312_Width - r317_x1;
            var r317_x2 = r1_mix(r312_SB, r312_RightSB, 0.3);
            var r317_x2co = r312_Width - r317_x2;
            r317_currentGlyph.include(r312_intersection(r312_MaskAbove(r312_CAP / 2 - r312_HalfStroke), r312_MaskBelow(r312_CAP), r312_ExtLineCenter(r317_x1, r312_CAP / 2 - r312_HalfStroke, r317_x2, r312_CAP, r312_Stroke, 2)));
            r317_currentGlyph.include(r312_intersection(r312_MaskAbove(0), r312_MaskBelow(r312_CAP / 2 + r312_HalfStroke), r312_ExtLineCenter(r317_x1co, r312_CAP / 2 + r312_HalfStroke, r317_x2co, 0, r312_Stroke, 2)));
            r317_currentGlyph.include(r312_HBar.m(r317_x1 + r312_HSwToV(r312_HalfStroke), r317_x1co - r312_HSwToV(r312_HalfStroke), r312_CAP / 2));
            if (r312_SLAB) {
                r317_kSerifShift = 0.45 * (0.3 * (r312_RightSB - r312_SB) / (r312_CAP / 2 + r312_HalfStroke));
                r317_currentGlyph.include(r312_HSerif.mb(r317_x2co + r317_kSerifShift * r312_Stroke, 0, r312_Jut));
                r317_currentGlyph.include(r312_HSerif.mt(r317_x2 - r317_kSerifShift * r312_Stroke, r312_CAP, r312_Jut));
            }
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("grek/koppa", 991, new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
            var _r326_t0, _r326_t1;
            r326_currentGlyph.include(r312_MarkSet.b());
            var r326_y1 = r1_mix(0, r312_Ascender, 0.4);
            var r326_y1co = r1_mix(0, r312_Ascender, 0.6);
            r326_currentGlyph.include(r312_intersection(r312_VBar.l(r312_SB, 0, r312_Ascender), r312_xn$spirooutline$1aao(r312_corner(r312_SB, r326_y1), r312_corner(r312_SB, r312_Ascender), r312_corner(r312_RightSB, r312_Ascender), r312_corner(r312_RightSB, r326_y1co))));
            r326_currentGlyph.include(r312_intersection(r312_VBar.r(r312_RightSB, 0, r312_Ascender), r312_xn$spirooutline$1aao(r312_corner(r312_SB, r326_y1), r312_corner(r312_SB, 0), r312_corner(r312_RightSB, 0), r312_corner(r312_RightSB, r326_y1co))));
            r326_currentGlyph.include(r312_intersection(r312_ExtLineCenter(r312_SB, r326_y1, r312_RightSB, r326_y1co, r312_Stroke, 2), r312_MaskRight(r312_SB), r312_MaskLeft(r312_RightSB)));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r333_xn$Capture_Ext$2Lrc2b) {
    var _r333_t0, _r333_t1;
    r333_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r333_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Qoppa", function (r334_xn$Capture$2Lrc8, r334_xn$ExportCapture$2Lrc4b) {
        var _r334_t7, _r334_t8;
        var _r334_t0 = r334_xn$Capture$2Lrc8;
        var r334_xn$GlyphSaveSink$2Lrc4b = _r334_t0["$GlyphSaveSink$"];
        var r334_xn$NamedParameterPair$2Lrc9b = _r334_t0["$NamedParameterPair$"];
        var r334_xn$Exec$2Lrc5 = _r334_t0["$Exec$"];
        var r334_MarkSet = _r334_t0.MarkSet;
        var _r334_t1 = r334_xn$Capture$2Lrc8.Metrics;
        var r334_SB = _r334_t1.SB;
        var r334_CAP = _r334_t1.CAP;
        var r334_XH = _r334_t1.XH;
        var r334_Descender = _r334_t1.Descender;
        var r334_Stroke = _r334_t1.Stroke;
        var r334_HalfStroke = _r334_t1.HalfStroke;
        var r334_MidJutCenter = _r334_t1.MidJutCenter;
        var r334_SLAB = _r334_t1.SLAB;
        var r334_RightSB = _r334_t1.RightSB;
        var r334_Middle = _r334_t1.Middle;
        var r334_ArchDepthA = _r334_t1.ArchDepthA;
        var r334_ArchDepthB = _r334_t1.ArchDepthB;
        var _r334_t2 = r334_xn$Capture$2Lrc8.SpiroFns;
        var _r334_t3 = r334_xn$Capture$2Lrc8.SpiroFns;
        var r334_xn$decor$0cao = _r334_t3["decor@"];
        var r334_xn$decor$0cao1 = _r334_t3["decor@@"];
        var r334_xn$decor$0cao11 = _r334_t3["decor@@@"];
        var _r334_t4 = r334_xn$Capture$2Lrc8.BooleFns;
        var _r334_t5 = r334_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r334_OShape = _r334_t5.OShape;
        var r334_HSerif = _r334_t5.HSerif;
        var r334_VBar = _r334_t5.VBar;
        var _r334_t6 = r334_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r334_xn$GlyphSaveSink$2Lrc4b.save("grek/Qoppa", 984, new r334_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            r339_currentGlyph.include(r334_MarkSet.capital());
            var r339_yAttach = (r334_SLAB ? r334_Stroke : 0) + 0.2 * (r334_XH - 0);
            r339_currentGlyph.include(r334_OShape(r334_CAP, r339_yAttach, r334_SB, r334_RightSB, r334_Stroke, r334_ArchDepthA, r334_ArchDepthB));
            r339_currentGlyph.include(r334_VBar.m(r334_Middle, 0, r339_yAttach + r334_HalfStroke));
            if (r334_SLAB) r339_currentGlyph.include(r334_HSerif.mb(r334_Middle, 0, r334_MidJutCenter));
            return void 0;
        }));
        return r334_xn$GlyphSaveSink$2Lrc4b.save("grek/qoppa", 985, new r334_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            r346_currentGlyph.include(r334_MarkSet.p());
            r346_currentGlyph.include(r334_OShape(r334_XH, 0, r334_SB, r334_RightSB));
            r346_currentGlyph.include(r334_VBar.m(r334_Middle, r334_Descender, r334_HalfStroke));
            return void 0;
        }));
    });
    return void 0;
});


