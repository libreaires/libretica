"use strict";
import * as _s0_t0 from "@iosevka/geometry/curve-util";
import * as _s0_t1 from "@iosevka/util";
import * as _s0_t2 from "../../meta/aesthetics.mjs";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_OCCURRENT_PRECISION = _r1_t8.OCCURRENT_PRECISION;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Shared", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_ConvexPolygonOutline, _r314_t5, _r314_t6;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_para = _r314_t0.para;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_SymbolMid = _r314_t1.SymbolMid;
        var r314_Translate = _r314_t1.Translate;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_GeometryStroke = _r314_t1.GeometryStroke;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_corner = _r314_t2.corner;
        var r314_widths = _r314_t2.widths;
        var r314_xn$disablecontrast$3qIs = _r314_t2["disable-contrast"];
        var r314_dispiro = _r314_t2.dispiro;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_intersection = _r314_t4.intersection;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "GeometricDim": r314_GeometricDim
            };
        });
        var r314_GeometricDim = function (r317_unitWidth, r317_fullWidth) {
            var _r317_t0, _r317_t1;
            var r317_s = r317_fullWidth / r317_unitWidth;
            var r317_sb = 0.625 * r314_SB * Math.pow(r317_s, 2) * Math.pow(r317_unitWidth / r314_Width, 2);
            var r317_tallSize = 0.5 * r314_para.arrowHeight * (r317_unitWidth - r317_sb) * Math.cbrt(r317_s);
            var r317_size = Math.min(0.5 * r317_fullWidth - r317_sb, r317_tallSize);
            return {
                "UnitWidth": r317_unitWidth,
                "Scalar": r317_s,
                "Size": r317_size,
                "TallSize": r317_tallSize,
                "Width": r317_fullWidth,
                "Left": 0.5 * r317_fullWidth - r317_size,
                "MidX": 0.5 * r317_fullWidth,
                "Right": 0.5 * r317_fullWidth + r317_size,
                "Top": r314_SymbolMid + r317_size,
                "MidY": r314_SymbolMid,
                "Bot": r314_SymbolMid - r317_size
            };
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "GeometricSizes": r314_GeometricSizes
            };
        });
        var r314_GeometricSizes = function (r322_Geom) {
            var _r322_t0, _r322_t1;
            return {
                "Large": {
                    "size": r314_DesignParameters.GeometricLargeX(r322_Geom.Width, r322_Geom.UnitWidth)
                },
                "Medium": {
                    "size": r314_DesignParameters.geometric_medium_x
                },
                "MediumSmall": {
                    "size": r314_DesignParameters.geometric_medium_small_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(5, r322_Geom.Scalar))
                },
                "Small": {
                    "size": r314_DesignParameters.geometric_small_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(6, r322_Geom.Scalar))
                },
                "SlightlySmall": {
                    "size": r314_DesignParameters.geometric_slightly_small_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(6.5, r322_Geom.Scalar))
                },
                "VerySmall": {
                    "size": r314_DesignParameters.geometric_very_small_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(7, r322_Geom.Scalar))
                },
                "Tiny": {
                    "size": r314_DesignParameters.geometric_tiny_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(8, r322_Geom.Scalar))
                },
                "Oblique": {
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(4.75, r322_Geom.Scalar))
                },
                "MediumOblique": {
                    "size": r314_DesignParameters.geometric_medium_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(4.75, r322_Geom.Scalar))
                },
                "MediumSmallOblique": {
                    "size": r314_DesignParameters.geometric_medium_small_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(5.25, r322_Geom.Scalar))
                },
                "SmallOblique": {
                    "size": r314_DesignParameters.geometric_small_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(6.25, r322_Geom.Scalar))
                },
                "VerySmallOblique": {
                    "size": r314_DesignParameters.geometric_very_small_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(7.25, r322_Geom.Scalar))
                },
                "TinyOblique": {
                    "size": r314_DesignParameters.geometric_tiny_x,
                    "sw": Math.min(r314_GeometryStroke, r314_AdviceStroke(8.25, r322_Geom.Scalar))
                },
                "ObliqueSA": {
                    "sw": Math.SQRT2 * Math.min(r314_GeometryStroke, r314_AdviceStroke(4.75, r322_Geom.Scalar))
                },
                "TinyInner": {
                    "innerSize": 1 / 4
                },
                "SmallInner": {
                    "innerSize": 1 / 3
                },
                "MediumInner": {
                    "innerSize": 2 / 3
                }
            };
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r324_t0, _r324_t1;
            return {
                "ConvexPolygonOutline": r314_ConvexPolygonOutline
            };
        });
        var r314_pointsAreNotClose = function (r325_a, r325_b) {
            var _r325_t0, _r325_t1;
            return Math.abs(r325_a.x - r325_b.x) > r1_OCCURRENT_PRECISION || Math.abs(r325_a.y - r325_b.y) > r1_OCCURRENT_PRECISION;
        };
        return r314_ConvexPolygonOutline = function (r326_shape, r326_sw) {
            var _r326_t0, _r326_t1;
            var r326_outlines = new r314_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var r328_c, r328_j, r328_a, r328_b, _r328_t3, _r328_t4, _r328_t5, _r328_t6;
                r328_currentGlyph.gizmo = r314_Translate(0, 0);
                var _r328_t0 = r326_shape.geometry.toContours();
                var _r328_t1 = _r328_t0.length;
                var _r328_t2 = 0;
                while (_r328_t2 < _r328_t1) {
                    r328_c = _r328_t0[_r328_t2];
                    _r328_t3 = 0;
                    _r328_t4 = r328_c.length;
                    r328_j = _r328_t3;
                    while (r328_j < _r328_t4) {
                        r328_a = r328_c[r328_j ? r328_j - 1 : r328_c.length - 1];
                        r328_b = r328_c[r328_j];
                        if (r314_pointsAreNotClose(r328_a, r328_b)) r328_currentGlyph.include(r314_dispiro(r314_xn$disablecontrast$3qIs(), r314_widths.center(r326_sw * 2), r314_corner(r1_mix(r328_a.x, r328_b.x, -2), r1_mix(r328_a.y, r328_b.y, -2)), r314_corner(r1_mix(r328_a.x, r328_b.x, +3), r1_mix(r328_a.y, r328_b.y, +3))));
                        r328_j = r328_j + 1;
                    }
                    _r328_t2 = _r328_t2 + 1;
                }
                return void 0;
            });
            return r314_intersection(r326_shape, r326_outlines);
        };
    });
    return void 0;
});


