"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Common-OShape-Variants", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_RoundRectShapeT, _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_close = _r312_t2.close;
        var r312_widths = _r312_t2.widths;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "OvalShapeT": r312_OvalShapeT
            };
        });
        var r312_OvalShapeT = function (r317_sink, r317_t, r317_b, r317_l, r317_r, r317__sw, r317__refAda, r317__refAdb) {
            var _r317_t0, _r317_t1;
            var r317_m = r1_mix(r317_l, r317_r, 0.5);
            var r317_sw = r1_fallback(r317__sw, r312_Stroke);
            var r317_refAda = r1_fallback(r317__refAda, r312_SmallArchDepthA);
            var r317_refAdb = r1_fallback(r317__refAdb, r312_SmallArchDepthB);
            return r317_sink(r312_widths.rhs(r317_sw), r312_Arch.rhs.centerAt.ltr.t(r317_m, r317_t, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_sw)), r312_archv(), r312_g4(r317_r - r312_OX, r312_YSmoothMidR(r317_t, r317_b, r317_refAda, r317_refAdb)), r312_arcvh(), r312_Arch.rhs.centerAt.rtl.b(r317_m, r317_b, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_sw)), r312_archv(), r312_g4(r317_l + r312_OX, r312_YSmoothMidL(r317_t, r317_b, r317_refAda, r317_refAdb)), r312_arcvh(), r312_close());
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "DiamondShapeT": r312_DiamondShapeT
            };
        });
        var r312_DiamondShapeT = function (r322_sink, r322_t, r322_b, r322_l, r322_r, r322_sw) {
            var _r322_t0, _r322_t1;
            var r322_body = r1_fallback(r322_sw, r312_Stroke);
            var r322_fine = r312_AdviceStroke(3) * (r322_body / r312_Stroke);
            var r322_sw1 = r322_fine;
            var r322_sw2 = r1_mix(r322_body, r322_fine, 0.375);
            var r322_mxb = r312_Arch["adjust-x"].bot(r1_mix(r322_l - r312_OX, r322_r + r312_OX, 0.5), new r312_xn$NamedParameterPair$2Lrc9b("sw", r322_fine));
            var r322_mxt = r312_Arch["adjust-x"].top(r1_mix(r322_l - r312_OX, r322_r + r312_OX, 0.5), new r312_xn$NamedParameterPair$2Lrc9b("sw", r322_fine));
            var r322_myl = r312_YSmoothMidL(r322_t, r322_b);
            var r322_myr = r312_YSmoothMidR(r322_t, r322_b);
            var r322_p1 = 0.45 + 0.8 * (r322_fine / (r322_r - r322_l));
            var r322_p2 = 0.15 + 0.5 * (r322_fine / (r322_t - r322_b));
            var r322_p3 = 0.35 + 0.8 * (r322_body / (r322_t - r322_b));
            var r322_p4 = 0.15 + 0 * (r322_body / (r322_r - r322_l));
            var r322_pcx = 0.5;
            var r322_pcy = 0.1;
            return r322_sink(r312_g2.right.mid(r322_mxb, r322_b + r312_O, r312_widths.lhs(r322_fine)), r312_alsoThru.g2(r322_pcx, r322_pcy), r312_flat(r1_mix(r322_mxb, r322_r, r322_p1), r1_mix(r322_b, r322_myr, r322_p2), r312_widths.lhs(r322_sw1)), r312_curl(r1_mix(r322_mxb, r322_r, 1 - r322_p4), r1_mix(r322_b, r322_myr, 1 - r322_p3), r312_widths.lhs(r322_sw2)), r312_g2.up.mid(r322_r - r312_OX, r322_myr, r312_widths.lhs(r322_body)), r312_flat(r1_mix(r322_r, r322_mxt, r322_p4), r1_mix(r322_myr, r322_t, r322_p3), r312_widths.lhs(r322_sw2)), r312_curl(r1_mix(r322_r, r322_mxt, 1 - r322_p1), r1_mix(r322_myr, r322_t, 1 - r322_p2), r312_widths.lhs(r322_sw1)), r312_alsoThru.g2(1 - r322_pcx, 1 - r322_pcy), r312_g2.left.mid(r322_mxt, r322_t - r312_O, r312_widths.lhs(r322_fine)), r312_alsoThru.g2(r322_pcx, r322_pcy), r312_flat(r1_mix(r322_mxt, r322_l, r322_p1), r1_mix(r322_t, r322_myl, r322_p2), r312_widths.lhs(r322_sw1)), r312_curl(r1_mix(r322_mxt, r322_l, 1 - r322_p4), r1_mix(r322_t, r322_myl, 1 - r322_p3), r312_widths.lhs(r322_sw2)), r312_g2.down.mid(r322_l + r312_OX, r322_myl, r312_widths.lhs(r322_body)), r312_flat(r1_mix(r322_l, r322_mxb, r322_p4), r1_mix(r322_myl, r322_b, r322_p3), r312_widths.lhs(r322_sw2)), r312_curl(r1_mix(r322_l, r322_mxb, 1 - r322_p1), r1_mix(r322_myl, r322_b, 1 - r322_p2), r312_widths.lhs(r322_sw1)), r312_alsoThru.g2(1 - r322_pcx, 1 - r322_pcy), r312_close());
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r326_t0, _r326_t1;
            return {
                "RoundRectShapeT": r312_RoundRectShapeT
            };
        });
        return r312_RoundRectShapeT = function (r327_sink, r327_u, r327_d, r327_l, r327_r, r327__sw, r327__cr) {
            var _r327_t0, _r327_t1;
            var r327_sw = r1_fallback(r327__sw, r312_Stroke);
            var r327_cr = r1_fallback(r327__cr, r1_clamp((r327_r - r327_l) / 5, (r327_r - r327_l) / 2.5, r312_HSwToV(r327_sw)));
            var r327_lMid = r327_l + r327_cr;
            var r327_rMid = r327_r - r327_cr;
            var r327_ada = r312_ArchDepthAOf(r327_cr, r327_r - r327_l);
            var r327_adb = r312_ArchDepthBOf(r327_cr, r327_r - r327_l);
            return r327_sink(r312_widths.lhs(r327_sw), r312_Arch.lhs.centerAt.rtl.t(r327_lMid, r327_u, new r312_xn$NamedParameterPair$2Lrc9b("sw", r327_sw), new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_curl)), r312_archv(), r312_flatside.ld(r327_l, r327_d, r327_u, r327_ada, r327_adb), r312_arcvh(), r312_Arch.lhs.centerAt.ltr.b(r327_lMid, r327_d, new r312_xn$NamedParameterPair$2Lrc9b("sw", r327_sw), new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_flat)), r312_Arch.lhs.centerAt.ltr.b(r327_rMid, r327_d, new r312_xn$NamedParameterPair$2Lrc9b("sw", r327_sw), new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_curl)), r312_archv(), r312_flatside.ru(r327_r, r327_d, r327_u, r327_ada, r327_adb), r312_arcvh(), r312_Arch.lhs.centerAt.rtl.t(r327_rMid, r327_u, new r312_xn$NamedParameterPair$2Lrc9b("sw", r327_sw), new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_flat)), r312_close());
        };
    });
    return void 0;
});


