"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Hourglass", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
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
        var r313_Rect = _r313_t5.Rect;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t7.GeometricDim;
        var r313_HourglassShape = function (r317_bound, r317_sw, r317__swRef) {
            var _r317_t0, _r317_t1;
            var r317_swRef = r1_fallback(r317__swRef, r317_sw);
            var r317_left = r317_bound.left + r313_HSwToV(0.5 * r317_swRef);
            var r317_right = r317_bound.right - r313_HSwToV(0.5 * r317_swRef);
            var r317_curveL = [r313_straight.down.start(r317_left, r317_bound.top, r313_heading(r313_Downward)), r313_alsoThru(0, 0.45), r313_flat(r317_bound.mixX(0.3), r317_bound.mixY(0.6)), r313_curl(r317_bound.mixX(0.7), r317_bound.mixY(0.4)), r313_alsoThru(1, 0.55), r313_straight.down.end(r317_right, r317_bound.bottom, r313_heading(r313_Downward))];
            var r317_curveR = [r313_straight.up.start(r317_left, r317_bound.bottom, r313_heading(r313_Upward)), r313_alsoThru(0, 0.45), r313_flat(r317_bound.mixX(0.3), r317_bound.mixY(0.4)), r313_curl(r317_bound.mixX(0.7), r317_bound.mixY(0.6)), r313_alsoThru(1, 0.55), r313_straight.up.end(r317_right, r317_bound.top, r313_heading(r313_Upward))];
            return r317_sw ? r313_union(r313_HBar.t(r317_bound.left, r317_bound.right, r317_bound.top, r1_mix(r317_sw, r317_swRef, 0.5)), r313_HBar.b(r317_bound.left, r317_bound.right, r317_bound.bottom, r1_mix(r317_sw, r317_swRef, 0.5)), r313_dispiro(r313_widths.center(r317_sw), r317_curveL), r313_dispiro(r313_widths.center(r317_sw), r317_curveR)) : r313_xn$spirooutline$1aao(r317_curveL, r317_curveR);
        };
        return (function () {
            var r320_FMosaicWide, r320_MosaicNameSuffix, r320_MosaicWidth, r320_MosaicWidthScalar, _r320_t3, _r320_t5, _r320_t6, _r320_tag7;
            var r320_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r320_t0 = r320_WidthKinds;
            var _r320_t1 = _r320_t0.length;
            var _r320_t2 = 0;
            var _r320_t4 = _r320_t2 < _r320_t1;
            while (_r320_t4) {
                _r320_t3 = _r320_t0[_r320_t2];
                r320_FMosaicWide = _r320_t3[0];
                r320_MosaicNameSuffix = _r320_t3[1];
                r320_MosaicWidth = _r320_t3[2];
                r320_MosaicWidthScalar = _r320_t3[3];
                (function () {
                    var r323_MosaicDesiredWidth = r313_WideWidth1;
                    var r323_MosaicMiddle = r320_MosaicWidth / 2;
                    var r323_MosaicUnitWidth = r320_MosaicWidth / r320_MosaicWidthScalar;
                    var r323_MangleUnicode = function (r324_unicode, r324__desiredOverride) {
                        var _r324_t0, _r324_t1;
                        return r320_MosaicWidth === (r324__desiredOverride || r323_MosaicDesiredWidth) ? r324_unicode : void 0;
                    };
                    var r323_MangleName = function (r325_name) {
                        var _r325_t0, _r325_t1;
                        return r325_name + r320_MosaicNameSuffix;
                    };
                    var r323_Geom = r313_GeometricDim(r323_MosaicUnitWidth, r320_MosaicWidth);
                    var r323_Bound = new r1_Box(r313_PictTop, r313_PictBot, r323_Geom.Left, r323_Geom.Right);
                    var r323_sandSlope = 0.3;
                    var r323_sandFill1 = 0.33;
                    var r323_sandFill2 = 0.15;
                    var r323_sandFill3 = 0.8;
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r323_MangleName("hourglass"), r323_MangleUnicode(8987), new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                        var _r328_t0, _r328_t1;
                        r328_currentGlyph.setWidth(r323_Geom.Width);
                        r328_currentGlyph.include(r313_HourglassShape(r323_Bound, r313_GeometryStroke));
                        var r328_mask = r313_HourglassShape(r323_Bound, r313_GeometryStroke * 2, r313_GeometryStroke);
                        var r328_mask2 = r313_HourglassShape(r323_Bound, 0, r313_GeometryStroke);
                        var r328_sandBot = r323_Bound.bottom + r313_GeometryStroke;
                        var r328_sandTop = r1_mix(r328_sandBot, r323_Bound.top - r313_GeometryStroke, r323_sandFill1);
                        var r328_sandRad = (r323_Bound.top - r323_Bound.bottom - r313_GeometryStroke) * r323_sandFill1 / r323_sandSlope;
                        var r328_sand = r313_xn$spirooutline$1aao(r313_corner(r323_Bound.xMid - r328_sandRad, r328_sandBot), r313_corner(r323_Bound.xMid + r328_sandRad, r328_sandBot), r313_corner(r323_Bound.xMid, r328_sandTop));
                        r328_currentGlyph.include(r313_difference(r313_intersection(r328_sand, r328_mask2), r328_mask));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r323_MangleName("hourglassFlowing"), r323_MangleUnicode(9203), new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                        var _r334_t0, _r334_t1;
                        r334_currentGlyph.setWidth(r323_Geom.Width);
                        r334_currentGlyph.include(r313_HourglassShape(r323_Bound, r313_GeometryStroke));
                        var r334_mask = r313_HourglassShape(r323_Bound, r313_GeometryStroke * 2, r313_GeometryStroke);
                        var r334_mask2 = r313_HourglassShape(r323_Bound, 0, r313_GeometryStroke);
                        var r334_sandBot = r323_Bound.bottom + r313_GeometryStroke;
                        var r334_sandTop = r1_mix(r334_sandBot, r323_Bound.top - r313_GeometryStroke, r323_sandFill2);
                        var r334_sandRad = (r323_Bound.top - r323_Bound.bottom - r313_GeometryStroke) * r323_sandFill2 / r323_sandSlope;
                        var r334_sand = r313_union(r313_xn$spirooutline$1aao(r313_corner(r323_Bound.xMid - r334_sandRad, r334_sandBot), r313_corner(r323_Bound.xMid + r334_sandRad, r334_sandBot), r313_corner(r323_Bound.xMid, r334_sandTop)), r313_Rect(r323_Bound.mixY(r323_sandFill3), r323_Bound.yMid, r323_Bound.left, r323_Bound.right), r313_VBar.m(r323_Bound.xMid, r323_Bound.bottom, r323_Bound.yMid, r313_AdviceStroke(10)));
                        r334_currentGlyph.include(r313_difference(r313_intersection(r334_sand, r334_mask2), r334_mask));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r323_MangleName("wineglass"), r323_MangleUnicode(127863), new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                        var _r340_t0, _r340_t1;
                        r340_currentGlyph.setWidth(r323_Geom.Width);
                        r340_currentGlyph.include(r313_HBar.b(r323_Geom.Left, r323_Geom.Right, r313_PictBot, r313_GeometryStroke));
                        r340_currentGlyph.include(r313_HBar.t(r323_Geom.Left, r323_Geom.Right, r313_PictTop, r313_GeometryStroke));
                        r340_currentGlyph.include(r313_VBar.m(r323_Geom.MidX, r313_PictBot, r313_SymbolMid, r313_GeometryStroke));
                        r340_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_GeometryStroke), r313_straight.down.start(r323_Geom.Left, r313_PictTop, r313_heading(r313_Downward)), r313_curl(r323_Geom.Left, r313_SymbolMid - r313_GeometryStroke / 2 + r313_ArchDepthB), r313_arcvh(), r313_g4(r323_Geom.MidX, r313_SymbolMid - r313_GeometryStroke / 2), r313_archv(), r313_flat(r323_Geom.Right, r313_SymbolMid - r313_GeometryStroke / 2 + r313_ArchDepthA), r313_straight.up.end(r323_Geom.Right, r313_PictTop, r313_heading(r313_Upward))));
                        return void 0;
                    }));
                })();
                _r320_t5 = _r320_t2 = _r320_t2 + 1;
                _r320_t4 = _r320_t2 < _r320_t1;
            }
            return _r320_t5;
        })();
    });
    return void 0;
});


