"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Sampi", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t6, _r313_t7;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_close = _r313_t2.close;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Sampi", 992, new r313_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            r317_currentGlyph.include(r313_MarkSet.capital());
            var r317_sw = r313_AdviceStroke(3);
            var r317_fine = r313_AdviceStroke(4.25);
            var r317_rightStrokeShift = r313_HSwToV(0.45 * r317_sw);
            var r317_leftStrokeShift = r313_HSwToV(0.45 * r317_fine);
            var r317_LeftSideMask = function () {
                var _r319_t0, _r319_t1;
                return r313_xn$spirooutline$1aao(r313_corner(r313_RightSB - r313_HSwToV(r313_HalfStroke) + r313_O, 0), r313_corner(r313_Middle, r313_CAP), r313_corner(-2 * r313_Width, r313_CAP), r313_corner(-2 * r313_Width, 0));
            };
            r317_currentGlyph.include(r313_intersection(r313_MaskBelow(r313_CAP), r313_MaskAbove(0), r313_ExtLineCenter(r313_RightSB - r317_rightStrokeShift, 0, r313_Middle, r313_CAP, r317_sw, 2)));
            r317_currentGlyph.include(r313_intersection(r317_LeftSideMask(), r313_union(r313_ExtLineCenter(r313_SB + r317_leftStrokeShift, 0, r313_Middle, r313_CAP, r317_fine, 2), r313_ExtLineCenter(r1_mix(r313_SB, r313_RightSB, 0.45), 0, r1_mix(r313_SB, r313_RightSB, 0.95) - r317_leftStrokeShift, r313_CAP, r317_fine, 2))));
            if (r313_SLAB) r317_currentGlyph.include(r313_difference(r313_HSerif.mb(r313_RightSB - r313_HSwToV(0.5 * r317_sw), 0, r313_Jut), r317_LeftSideMask()));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("grek/sampi", 993, new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
            var _r325_t0, _r325_t1;
            r325_currentGlyph.include(r313_MarkSet.p());
            var r325_x1 = r1_mix(r313_SB, r313_RightSB, 0.95);
            var r325_SampiKnots = function (r327_offset) {
                var _r327_t0, _r327_t1;
                return [r313_g4(r313_SB, r313_XH - r313_O + r327_offset), r313_g4(r1_mix(r313_SB, r313_RightSB, 0.5), r1_mix(r313_XH + r327_offset, r313_Descender - r327_offset, 0.125)), r313_g4.down.mid(r313_RightSB - r313_OX + r327_offset, r1_mix(r313_Descender, r313_XH, 0.25)), r313_g4(r325_x1, r313_Descender + r313_O - r327_offset)];
            };
            r325_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r325_SampiKnots(0)));
            r325_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r325_SampiKnots(r313_O), r313_close()), r313_union(r313_dispiro(r313_widths.center(r313_Stroke * 1.5 + r313_XH / 6), r313_flat(r313_SB, r313_XH - r313_O), r313_curl(r325_x1, r313_Descender + r313_O)), r313_xn$spirooutline$1aao(r313_corner(r313_SB, r313_CAP), r313_corner(r313_SB, r313_XH - r313_O), r313_corner(r325_x1, r313_Descender - r313_O), r313_corner(2 * r313_Width, r313_Descender - r313_O), r313_corner(2 * r313_Width, r313_CAP), r313_close())), r313_union(r313_ExtLineCenter(r1_mix(r313_SB, r325_x1, 0.35), r1_mix(r313_XH, r313_Descender, 0.35), r1_mix(r313_SB, r325_x1, 0.35) + (r313_XH - r313_Descender), r1_mix(r313_XH, r313_Descender, 0.35) + (r325_x1 - r313_SB), r313_Stroke, 2), r313_ExtLineCenter(r1_mix(r313_SB, r325_x1, 0.65), r1_mix(r313_XH, r313_Descender, 0.65), r1_mix(r313_SB, r325_x1, 0.65) + (r313_XH - r313_Descender), r1_mix(r313_XH, r313_Descender, 0.65) + (r325_x1 - r313_SB), r313_Stroke, 2))));
            return void 0;
        }));
    });
    return void 0;
});


