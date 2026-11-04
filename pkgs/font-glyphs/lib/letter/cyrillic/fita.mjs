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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Fita", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_OShape = _r312_t5.OShape;
        var r312_OShapeOutline = _r312_t5.OShapeOutline;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_FitaWave = r312_XH / 16;
        var r312_FitaLeft = function (r315_sw) {
            var _r315_t0, _r315_t1;
            return r312_SB + r312_HSwToV(0.5 * r315_sw);
        };
        var r312_FitaRight = function (r316_sw) {
            var _r316_t0, _r316_t1;
            return r312_RightSB - r312_HSwToV(0.5 * r316_sw);
        };
        var r312_FitaCrossbar = function (r317_y, r317_sw, r317_swc) {
            var _r317_t0, _r317_t1;
            return r312_dispiro(r312_widths.center(r317_swc), r312_g4.right.mid(r1_mix(r312_FitaLeft(r317_sw), r312_Middle, -1), r317_y), r312_g4.right.mid(r1_mix(r312_FitaLeft(r317_sw), r312_Middle, -0.5), r317_y - r312_FitaWave), r312_g4(r312_FitaLeft(r317_sw), r317_y), r312_g4.right.mid(r1_mix(r312_FitaLeft(r317_sw), r312_Middle, 0.5), r317_y + r312_FitaWave), r312_g4(r312_Middle, r317_y), r312_g4.right.mid(r1_mix(r312_FitaRight(r317_sw), r312_Middle, 0.5), r317_y - r312_FitaWave), r312_g4(r312_FitaRight(r317_sw), r317_y), r312_g4.right.mid(r1_mix(r312_FitaRight(r317_sw), r312_Middle, -0.5), r317_y + r312_FitaWave), r312_g4.right.mid(r1_mix(r312_FitaRight(r317_sw), r312_Middle, -1), r317_y));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Fita", 1138, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1;
            var r320_sw = r312_AdviceStroke2(2, 3, r312_CAP);
            var r320_swc = Math.min(r312_FitaWave * 2, r312_AdviceStroke2(3, 4, r312_CAP));
            r320_currentGlyph.include(r312_MarkSet.capital());
            r320_currentGlyph.include(r312_union(r312_OShape(r312_CAP, 0, r312_SB, r312_RightSB, r320_sw, r312_ArchDepthA, r312_ArchDepthB), r312_intersection(r312_OShapeOutline.NoOvershoot(r312_CAP, 0, r312_SB, r312_RightSB, r320_sw, r312_ArchDepthA, r312_ArchDepthB), r312_FitaCrossbar(r312_CAP / 2, r320_sw, r320_swc))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/fita", 1139, new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
            var _r325_t0, _r325_t1;
            var r325_sw = r312_AdviceStroke2(2, 3, r312_XH);
            var r325_swc = Math.min(r312_FitaWave * 2, r312_AdviceStroke2(3, 4, r312_XH));
            r325_currentGlyph.include(r312_MarkSet.e());
            r325_currentGlyph.include(r312_union(r312_OShape(r312_XH, 0, r312_SB, r312_RightSB, r325_sw, r312_SmallArchDepthA, r312_SmallArchDepthA), r312_intersection(r312_OShapeOutline.NoOvershoot(r312_XH, 0, r312_SB, r312_RightSB, r325_sw, r312_SmallArchDepthA, r312_SmallArchDepthA), r312_FitaCrossbar(r312_XH / 2, r325_sw, r325_swc))));
            return void 0;
        }));
    });
    return void 0;
});


