"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/geometry/transform";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Transform = _r1_t10.Transform;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Stick-Figure", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t7, _r314_t8, _r314_t9, _r314_tag10;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_SymbolMid = _r314_t1.SymbolMid;
        var r314_PlusTop = _r314_t1.PlusTop;
        var r314_PlusBot = _r314_t1.PlusBot;
        var r314_Scale = _r314_t1.Scale;
        var r314_Translate = _r314_t1.Translate;
        var r314_Rotate = _r314_t1.Rotate;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_WideWidth1 = _r314_t1.WideWidth1;
        var r314_TINY = _r314_t1.TINY;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_corner = _r314_t2.corner;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_widths = _r314_t2.widths;
        var r314_xn$disablecontrast$3qIs = _r314_t2["disable-contrast"];
        var r314_unimportant = _r314_t2.unimportant;
        var r314_dispiro = _r314_t2.dispiro;
        var r314_xn$spirooutline$1aao = _r314_t2["spiro-outline"];
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_DotAt = _r314_t5.DotAt;
        var r314_Circle = _r314_t5.Circle;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_PictographSw = r314_AdviceStroke(4);
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "D4Transform": r314_D4Transform,
                "WithD4Transform": r314_WithD4Transform
            };
        });
        var r314_D4Transform = function (r319_midx, r319_rot, r319_refl) {
            var _r319_t0, _r319_t1;
            return r1_Transform.Combine(r314_Translate(-r319_midx, -r314_SymbolMid), r319_refl ? r314_Scale(-1, 1) : r1_Transform.Id(), r314_Rotate(r319_rot / 2 * Math.PI), r314_Translate(+r319_midx, +r314_SymbolMid));
        };
        var r314_WithD4Transform = function (r320_midx, r320_rot, r320_refl, r320_shapeFunc) {
            var _r320_t0, _r320_t1;
            return r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t0, _r323_t1;
                var r323_giz = r323_currentGlyph.gizmo;
                r323_currentGlyph.gizmo = r1_Transform.Id();
                r323_currentGlyph.include(r320_shapeFunc());
                r323_currentGlyph.include(r314_D4Transform(r320_midx, r320_rot, r320_refl));
                r323_currentGlyph.include(r323_giz);
                return void 0;
            }));
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r328_t0, _r328_t1;
            return {
                "StickFigureKit": r314_StickFigureKit
            };
        });
        var r314_StickFigureKit = function (r329_box, r329_tfm, r329_sw) {
            var _r329_t0, _r329_t1, _r329_t2, _r329_tag3;
            return (function () {
                var r332_RoundSeg, r332_ArcVH, r332_ArcHV, r332_Arc, r332_Box, r332_Circ;
                var r332_exports = {};
                var r332_StrokeCap = function (r339_z1, r339_zc, r339_side) {
                    var _r339_t0, _r339_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                        var _r341_t0, _r341_t1;
                        var r341_dh1 = r339_zc.x - r339_z1.x;
                        var r341_dv1 = r339_zc.y - r339_z1.y;
                        var r341_mag = Math.hypot(r341_dh1, r341_dv1);
                        r341_currentGlyph.include(r314_Circle.Outline.DotAt(r339_z1.x + r341_dv1 * r339_side * r329_sw / r341_mag, r339_z1.y - r341_dh1 * r339_side * r329_sw / r341_mag, r329_sw / 2));
                        return void 0;
                    });
                };
                r332_exports.RoundSeg = r332_RoundSeg = function (r344_h1, r344_v1, r344_h2, r344_v2, r344_cl, r344_cr, r344__side) {
                    var _r344_t0, _r344_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                        var _r346_t0, _r346_t1;
                        var r346_side = r1_fallback(r344__side, 0) / 2 + 0.5;
                        var r346_z1 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r344_h1), r1_mix(r329_box.bottom, r329_box.top, r344_v1));
                        var r346_z2 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r344_h2), r1_mix(r329_box.bottom, r329_box.top, r344_v2));
                        r346_currentGlyph.include(r314_dispiro(r314_xn$disablecontrast$3qIs(), r314_widths((1 - r346_side) * r329_sw, r346_side * r329_sw), r314_corner(r346_z1.x, r346_z1.y), r314_corner(r346_z2.x, r346_z2.y)));
                        if (r344_cl) r346_currentGlyph.include(r332_StrokeCap(r346_z1, r346_z2, r346_side - 0.5));
                        if (r344_cr) r346_currentGlyph.include(r332_StrokeCap(r346_z2, r346_z1, 0.5 - r346_side));
                        return void 0;
                    });
                };
                var r332_ArcImpl = function (r350_mode, r350_h1, r350_v1, r350_h2, r350_v2, r350_cl, r350_cr, r350__side, r350__fMask) {
                    var _r350_t0, _r350_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                        var r352_theta, r352_c, r352_s, r352_mx, r352_my, r352_zm, _r352_t2, _r352_t3;
                        var r352_side = r1_fallback(r350__side, 0) / 2 + 0.5;
                        var r352_fMask = r1_fallback(r350__fMask, false);
                        var r352_z1 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r350_h1), r1_mix(r329_box.bottom, r329_box.top, r350_v1));
                        var r352_z2 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r350_h2), r1_mix(r329_box.bottom, r329_box.top, r350_v2));
                        var r352_zc = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r350_mode ? r350_h1 : r350_h2), r1_mix(r329_box.bottom, r329_box.top, r350_mode ? r350_v2 : r350_v1));
                        var r352_zr = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r350_mode ? r350_h2 : r350_h1), r1_mix(r329_box.bottom, r329_box.top, r350_mode ? r350_v1 : r350_v2));
                        var r352_innerKnots = [];
                        var _r352_t0 = 1;
                        var _r352_t1 = 64;
                        var r352_j = _r352_t0;
                        while (r352_j < _r352_t1) {
                            r352_theta = Math.PI / 2 * (r352_j / 64);
                            r352_c = Math.pow(Math.cos(r352_theta), 2 / r314_DesignParameters.superness);
                            r352_s = Math.pow(Math.sin(r352_theta), 2 / r314_DesignParameters.superness);
                            r352_mx = r1_mix(r329_box.left, r329_box.right, r1_mix(r350_h1, r350_h2, r350_mode ? 1 - r352_c : r352_s));
                            r352_my = r1_mix(r329_box.bottom, r329_box.top, r1_mix(r350_v1, r350_v2, r350_mode ? r352_s : 1 - r352_c));
                            r352_zm = r329_tfm.applyXY(r352_mx, r352_my);
                            r352_innerKnots.push(r314_g4(r352_zm.x, r352_zm.y, r314_unimportant));
                            r352_j = r352_j + 1;
                        }
                        r352_currentGlyph.include((r352_fMask ? r314_xn$spirooutline$1aao : r314_dispiro)(r314_xn$disablecontrast$3qIs(), r314_widths((1 - r352_side) * r329_sw, r352_side * r329_sw), r314_flat(r352_z1.x, r352_z1.y), r314_curl(r1_mix(r352_z1.x, r352_zc.x, r314_TINY), r1_mix(r352_z1.y, r352_zc.y, r314_TINY)), r352_innerKnots, r314_flat(r1_mix(r352_z2.x, r352_zc.x, r314_TINY), r1_mix(r352_z2.y, r352_zc.y, r314_TINY)), (r352_fMask ? r314_corner : r314_curl)(r352_z2.x, r352_z2.y), r352_fMask ? r314_corner(r352_zr.x, r352_zr.y) : []));
                        if (r350_cl) r352_currentGlyph.include(r332_StrokeCap(r352_z1, r352_zc, r352_side - 0.5));
                        if (r350_cr) r352_currentGlyph.include(r332_StrokeCap(r352_z2, r352_zc, 0.5 - r352_side));
                        return void 0;
                    });
                };
                r332_exports.ArcVH = r332_ArcVH = function (r360_h1, r360_v1, r360_h2, r360_v2, r360_cl, r360_cr, r360__side, r360__fMask) {
                    var _r360_t0, _r360_t1;
                    return r332_ArcImpl(1, r360_h1, r360_v1, r360_h2, r360_v2, r360_cl, r360_cr, r360__side, r360__fMask);
                };
                r332_exports.ArcHV = r332_ArcHV = function (r362_h1, r362_v1, r362_h2, r362_v2, r362_cl, r362_cr, r362__side, r362__fMask) {
                    var _r362_t0, _r362_t1;
                    return r332_ArcImpl(0, r362_h1, r362_v1, r362_h2, r362_v2, r362_cl, r362_cr, r362__side, r362__fMask);
                };
                r332_exports.Arc = r332_Arc = function (r364_h1, r364_v1, r364_h2, r364_v2, r364_hc, r364_vc, r364_cl, r364_cr, r364__side, r364__fMask) {
                    var _r364_t0, _r364_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                        var r366_theta, r366_c, r366_s, r366_mx, r366_my, r366_zm, _r366_t2, _r366_t3;
                        var r366_side = r1_fallback(r364__side, 0) / 2 + 0.5;
                        var r366_fMask = r1_fallback(r364__fMask, false);
                        var r366_fFlat = r364_h1 === r364_h2 || r364_v1 === r364_v2;
                        var r366_fSwap = (r364_h2 - r364_hc) * (r364_h1 - r364_h2) > 0 || (r364_v1 - r364_v2) * (r364_vc - r364_v1) > 0;
                        var r366_zr = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r366_fSwap ? r364_h1 : r364_h2), r1_mix(r329_box.bottom, r329_box.top, r366_fSwap ? r364_v2 : r364_v1));
                        var r366_z1 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r364_h1), r1_mix(r329_box.bottom, r329_box.top, r364_v1));
                        var r366_z2 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r364_h2), r1_mix(r329_box.bottom, r329_box.top, r364_v2));
                        var r366_zc = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r364_hc), r1_mix(r329_box.bottom, r329_box.top, r364_vc));
                        var r366_ho = r364_h1 + r364_h2 - r364_hc;
                        var r366_vo = r364_v1 + r364_v2 - r364_vc;
                        var r366_dh1 = r364_hc - r364_h1;
                        var r366_dv1 = r364_vc - r364_v1;
                        var r366_dh2 = r364_hc - r364_h2;
                        var r366_dv2 = r364_vc - r364_v2;
                        var r366_innerKnots = [];
                        var r366_nKnots = 64;
                        var _r366_t0 = 1;
                        var _r366_t1 = r366_nKnots;
                        var r366_j = _r366_t0;
                        while (r366_j < _r366_t1) {
                            r366_theta = Math.PI / 2 * (r366_j / r366_nKnots);
                            r366_c = Math.pow(Math.cos(r366_theta), 2 / r314_DesignParameters.superness);
                            r366_s = Math.pow(Math.sin(r366_theta), 2 / r314_DesignParameters.superness);
                            r366_mx = r1_mix(r329_box.left, r329_box.right, r366_ho + r366_s * r366_dh1 + r366_c * r366_dh2);
                            r366_my = r1_mix(r329_box.bottom, r329_box.top, r366_vo + r366_s * r366_dv1 + r366_c * r366_dv2);
                            r366_zm = r329_tfm.applyXY(r366_mx, r366_my);
                            r366_innerKnots.push(r314_g4(r366_zm.x, r366_zm.y, r366_fFlat && r366_j === Math.floor(r366_nKnots / 2) ? void 0 : r314_unimportant));
                            r366_j = r366_j + 1;
                        }
                        r366_currentGlyph.include((r366_fMask ? r314_xn$spirooutline$1aao : r314_dispiro)(r314_xn$disablecontrast$3qIs(), r314_widths((1 - r366_side) * r329_sw, r366_side * r329_sw), r314_flat(r366_z1.x, r366_z1.y), r314_curl(r1_mix(r366_z1.x, r366_zc.x, r314_TINY), r1_mix(r366_z1.y, r366_zc.y, r314_TINY)), r366_innerKnots, r314_flat(r1_mix(r366_z2.x, r366_zc.x, r314_TINY), r1_mix(r366_z2.y, r366_zc.y, r314_TINY)), (r366_fMask ? r314_corner : r314_curl)(r366_z2.x, r366_z2.y), r366_fMask ? r314_corner(r366_zr.x, r366_zr.y) : []));
                        if (r364_cl) r366_currentGlyph.include(r332_StrokeCap(r366_z1, r366_zc, r366_side - 0.5));
                        if (r364_cr) r366_currentGlyph.include(r332_StrokeCap(r366_z2, r366_zc, 0.5 - r366_side));
                        return void 0;
                    });
                };
                r332_exports.Box = r332_Box = function (r374_h1, r374_v1, r374_h2, r374_v2) {
                    var _r374_t0, _r374_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                        var _r376_t0, _r376_t1;
                        var r376_z1 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r374_h1), r1_mix(r329_box.bottom, r329_box.top, r374_v1));
                        var r376_z2 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r374_h2), r1_mix(r329_box.bottom, r329_box.top, r374_v1));
                        var r376_z3 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r374_h2), r1_mix(r329_box.bottom, r329_box.top, r374_v2));
                        var r376_z4 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r374_h1), r1_mix(r329_box.bottom, r329_box.top, r374_v2));
                        r376_currentGlyph.include(r314_xn$spirooutline$1aao(r314_corner(r376_z1.x, r376_z1.y), r314_corner(r376_z2.x, r376_z2.y), r314_corner(r376_z3.x, r376_z3.y), r314_corner(r376_z4.x, r376_z4.y)));
                        return void 0;
                    });
                };
                r332_exports.Circ = r332_Circ = function (r379_h1, r379_v1, r379_pr) {
                    var _r379_t0, _r379_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                        var _r381_t0, _r381_t1;
                        var r381_z1 = r329_tfm.applyXY(r1_mix(r329_box.left, r329_box.right, r379_h1), r1_mix(r329_box.bottom, r329_box.top, r379_v1));
                        r381_currentGlyph.include(r314_DotAt(r381_z1.x, r381_z1.y, r379_pr * (r329_box.top - r329_box.bottom)));
                        return void 0;
                    });
                };
                return r332_exports;
            })();
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r384_t0, _r384_t1;
            return {
                "PointingHandShape": r314_PointingHandShape
            };
        });
        var r314_PointingHandShape = function (r385_box, r385_tfm, r385_sw) {
            var _r385_t0, _r385_t1;
            var r385_Kit = r314_StickFigureKit(r385_box, r385_tfm, r385_sw);
            return r314_union(r385_Kit.RoundSeg(0 / 24, 0 / 8, 0 / 24, 8 / 8, 1, 1), r385_Kit.RoundSeg(3 / 24, 7 / 8, 0 / 24, 8 / 8), r385_Kit.RoundSeg(3 / 24, 1 / 8, 0 / 24, 0 / 8), r385_Kit.RoundSeg(3 / 24, 7 / 8, 3 / 24, 1 / 8), r385_Kit.ArcVH(3 / 24, 7 / 8, 6 / 24, 8 / 8), r385_Kit.ArcVH(3 / 24, 1 / 8, 6 / 24, 0 / 8), r385_Kit.RoundSeg(6 / 24, 8 / 8, 22 / 24, 8 / 8), r385_Kit.ArcHV(22 / 24, 8 / 8, 24 / 24, 7 / 8), r385_Kit.ArcVH(24 / 24, 7 / 8, 22 / 24, 6 / 8), r385_Kit.RoundSeg(14 / 24, 6 / 8, 22 / 24, 6 / 8), r385_Kit.ArcHV(11 / 24, 8 / 8, 14 / 24, 6 / 8), r385_Kit.ArcVH(14 / 24, 6 / 8, 12 / 24, 5 / 8), r385_Kit.RoundSeg(9 / 24, 5 / 8, 12 / 24, 5 / 8, 1, 0), r385_Kit.ArcVH(9 / 24, 5 / 8, 3 / 24, 2 / 8), r385_Kit.ArcHV(15 / 24, 6 / 8, 17 / 24, 5 / 8), r385_Kit.ArcVH(17 / 24, 5 / 8, 15 / 24, 4 / 8), r385_Kit.RoundSeg(11 / 24, 4 / 8, 15 / 24, 4 / 8, 1, 0), r385_Kit.ArcHV(14 / 24, 4 / 8, 16 / 24, 3 / 8), r385_Kit.ArcVH(16 / 24, 3 / 8, 14 / 24, 2 / 8), r385_Kit.RoundSeg(8 / 24, 2 / 8, 14 / 24, 2 / 8, 1, 0), r385_Kit.ArcHV(13 / 24, 2 / 8, 15 / 24, 1 / 8), r385_Kit.ArcVH(15 / 24, 1 / 8, 13 / 24, 0 / 8), r385_Kit.RoundSeg(6 / 24, 0 / 8, 13 / 24, 0 / 8));
        };
        return (function () {
            var r388_FMosaicWide, r388_MosaicNameSuffix, r388_MosaicWidth, r388_MosaicWidthScalar, _r388_t3, _r388_t5, _r388_t6, _r388_tag7;
            var r388_WidthKinds = [[0, ".NWID", r314_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r314_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r388_t0 = r388_WidthKinds;
            var _r388_t1 = _r388_t0.length;
            var _r388_t2 = 0;
            var _r388_t4 = _r388_t2 < _r388_t1;
            while (_r388_t4) {
                _r388_t3 = _r388_t0[_r388_t2];
                r388_FMosaicWide = _r388_t3[0];
                r388_MosaicNameSuffix = _r388_t3[1];
                r388_MosaicWidth = _r388_t3[2];
                r388_MosaicWidthScalar = _r388_t3[3];
                (function () {
                    var r391_MosaicDesiredWidth = r314_WideWidth1;
                    var r391_MosaicMiddle = r388_MosaicWidth / 2;
                    var r391_MosaicUnitWidth = r388_MosaicWidth / r388_MosaicWidthScalar;
                    var r391_MangleUnicode = function (r392_unicode, r392__desiredOverride) {
                        var _r392_t0, _r392_t1;
                        return r388_MosaicWidth === (r392__desiredOverride || r391_MosaicDesiredWidth) ? r392_unicode : void 0;
                    };
                    var r391_MangleName = function (r393_name) {
                        var _r393_t0, _r393_t1;
                        return r393_name + r388_MosaicNameSuffix;
                    };
                    var r391_sb = r314_SB * (0.5 * r388_MosaicWidthScalar);
                    var r391_hBox = new r1_Box(r1_mix(r314_SymbolMid, r314_PlusTop, 0.5 * r388_MosaicWidthScalar), r1_mix(r314_SymbolMid, r314_PlusBot, 0.5 * r388_MosaicWidthScalar), r391_sb, r388_MosaicWidth - r391_sb);
                    var r391_vScalar = Math.sqrt(2 * r388_MosaicWidthScalar);
                    var r391_vBox = new r1_Box(r1_mix(r314_SymbolMid, r314_PlusTop, 0.5 * r391_vScalar), r1_mix(r314_SymbolMid, r314_PlusBot, 0.5 * r391_vScalar), r391_sb + 0.5 * (r388_MosaicWidth - r314_Width * r391_vScalar), r314_Width * r391_vScalar - r391_sb + 0.5 * (r388_MosaicWidth - r314_Width * r391_vScalar));
                    var r391_sw = r314_AdviceStroke(8, Math.sqrt(r388_MosaicWidthScalar));
                    r314_xn$GlyphSaveSink$2Lrc4b.save(r391_MangleName("whiteRightPointingIndex"), r391_MangleUnicode(9758), new r314_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                        var _r396_t0, _r396_t1;
                        r396_currentGlyph.setWidth(r388_MosaicWidth);
                        r396_currentGlyph.include(r314_PointingHandShape(r391_hBox, r1_Transform.Id(), r391_sw));
                        return void 0;
                    }));
                    r314_xn$GlyphSaveSink$2Lrc4b.save(r391_MangleName("whiteLeftPointingIndex"), r391_MangleUnicode(9756), new r314_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                        var _r401_t0, _r401_t1;
                        r401_currentGlyph.setWidth(r388_MosaicWidth);
                        r401_currentGlyph.include(r314_PointingHandShape(r391_hBox, r314_D4Transform(r391_MosaicMiddle, 0, 1), r391_sw));
                        return void 0;
                    }));
                    r314_xn$GlyphSaveSink$2Lrc4b.save(r391_MangleName("whiteDownPointingIndex"), r391_MangleUnicode(9759), new r314_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                        var _r406_t0, _r406_t1;
                        r406_currentGlyph.setWidth(r388_MosaicWidth);
                        r406_currentGlyph.include(r314_PointingHandShape(r391_vBox, r314_D4Transform(r391_MosaicMiddle, 3, 0), r391_sw));
                        return void 0;
                    }));
                    return r314_xn$GlyphSaveSink$2Lrc4b.save(r391_MangleName("whiteUpPointingIndex"), r391_MangleUnicode(9757), new r314_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
                        var _r411_t0, _r411_t1;
                        r411_currentGlyph.setWidth(r388_MosaicWidth);
                        var r411_tfm = r1_Transform.Combine();
                        r411_currentGlyph.include(r314_PointingHandShape(r391_vBox, r314_D4Transform(r391_MosaicMiddle, 3, 1), r391_sw));
                        return void 0;
                    }));
                })();
                _r388_t5 = _r388_t2 = _r388_t2 + 1;
                _r388_t4 = _r388_t2 < _r388_t1;
            }
            return _r388_t5;
        })();
    });
    return void 0;
});


