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
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Archaic-M", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_SLAB = _r313_t1.SLAB;
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
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_MaskRight = _r313_t5.MaskRight;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t6.SerifFrame;
        var r313_ExtLineJct = function (r316_x1, r316_y1, r316_kl1, r316_kr1, r316_x2, r316_y2, r316_kl2, r316_kr2, r316_sw, r316_ke, r316_ks) {
            var _r316_t0, _r316_t1;
            return r313_dispiro(r313_flat(r1_mix(r316_x1, r316_x2, 0 - r316_ke), r1_mix(r316_y1, r316_y2, 0 - r316_ke), r313_widths(r316_sw * r316_kl1, r316_sw * r316_kr1)), r313_curl(r1_mix(r316_x1, r316_x2, 0), r1_mix(r316_y1, r316_y2, 0), r313_widths(r316_sw * r316_kl1, r316_sw * r316_kr1)), r313_flat(r1_mix(r316_x1, r316_x2, 0 + r316_ks), r1_mix(r316_y1, r316_y2, 0 + r316_ks), r313_widths.center(r316_sw)), r313_curl(r1_mix(r316_x1, r316_x2, 1 - r316_ks), r1_mix(r316_y1, r316_y2, 1 - r316_ks), r313_widths.center(r316_sw)), r313_flat(r1_mix(r316_x1, r316_x2, 1), r1_mix(r316_y1, r316_y2, 1), r313_widths(r316_sw * r316_kl2, r316_sw * r316_kr2)), r313_curl(r1_mix(r316_x1, r316_x2, 1 + r316_ke), r1_mix(r316_y1, r316_y2, 1 + r316_ke), r313_widths(r316_sw * r316_kl2, r316_sw * r316_kr2)));
        };
        var r313_ArchaicMShape = function (r317_df, r317_top, r317_bottom) {
            var _r317_t0, _r317_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var r319_sf, _r319_t0, _r319_t1;
                var r319_sw = r317_df.mvs;
                var r319_cl = r317_df.leftSB + r313_HSwToV(0.5 * r319_sw);
                var r319_cr = r317_df.rightSB - r313_HSwToV(0.5 * r319_sw);
                var r319_kt = 0.2;
                var r319_ko = 0.5;
                r319_currentGlyph.include(r313_intersection(r313_Rect(r317_top, r317_bottom, r317_df.leftSB, r317_df.rightSB), r313_union(r313_ExtLineJct(r1_mix(r319_cl, r319_cr, 0), r317_bottom, r319_ko, r319_ko, r1_mix(r319_cl, r319_cr, 0.2), r317_top, r319_ko, r319_kt, r319_sw, 4, 0.45), r313_ExtLineJct(r1_mix(r319_cl, r319_cr, 0.2), r317_top, r319_ko, r319_kt, r1_mix(r319_cl, r319_cr, 0.4), r317_bottom, r319_kt, r319_ko, r319_sw, 4, 0.45), r313_ExtLineJct(r1_mix(r319_cl, r319_cr, 0.4), r317_bottom, r319_kt, r319_ko, r1_mix(r319_cl, r319_cr, 0.6), r317_top, r319_ko, r319_kt, r319_sw, 4, 0.45), r313_ExtLineJct(r1_mix(r319_cl, r319_cr, 0.6), r317_top, r319_ko, r319_kt, r1_mix(r319_cl, r319_cr, 0.8), r317_bottom, r319_kt, r319_ko, r319_sw, 4, 0.45), r313_ExtLineJct(r1_mix(r319_cl, r319_cr, 0.8), r317_bottom, r319_kt, r319_ko, r1_mix(r319_cl, r319_cr, 1), r317_top, r319_ko, r319_ko, r319_sw, 4, 0.45))));
                if (r313_SLAB) {
                    r319_sf = r313_SerifFrame.fromDf(r317_df, r317_top, r317_bottom, new r313_xn$NamedParameterPair$2Lrc9b("fForceSymmetric", true));
                    r319_currentGlyph.include(r313_difference(r319_sf.lb.full, r313_MaskRight(r1_mix(r319_cl, r319_cr, 0.3))));
                    r319_currentGlyph.include(r313_difference(r319_sf.rt.full, r313_MaskLeft(r1_mix(r319_cl, r319_cr, 0.7))));
                }
                return void 0;
            });
        };
        return r313_xn$GlyphSaveSink$2Lrc4b.save("ArchaicM", 43007, new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
            var _r326_t0, _r326_t1;
            var r326_df = r326_currentGlyph.include(r313_DivFrame(r1_mix(1, r313_para.advanceScaleM, 2), 4.5));
            r326_currentGlyph.include(r326_df.markSet.capital());
            r326_currentGlyph.include(r313_ArchaicMShape(r326_df, r313_CAP, 0));
            return void 0;
        }));
    });
    return void 0;
});


