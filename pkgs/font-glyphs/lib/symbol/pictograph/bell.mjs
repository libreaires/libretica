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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Bell", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_DotAt = _r313_t5.DotAt;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t7.GeometricDim;
        return (function () {
            var r319_FMosaicWide, r319_MosaicNameSuffix, r319_MosaicWidth, r319_MosaicWidthScalar, _r319_t3, _r319_t5, _r319_t6, _r319_tag7;
            var r319_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r319_t0 = r319_WidthKinds;
            var _r319_t1 = _r319_t0.length;
            var _r319_t2 = 0;
            var _r319_t4 = _r319_t2 < _r319_t1;
            while (_r319_t4) {
                _r319_t3 = _r319_t0[_r319_t2];
                r319_FMosaicWide = _r319_t3[0];
                r319_MosaicNameSuffix = _r319_t3[1];
                r319_MosaicWidth = _r319_t3[2];
                r319_MosaicWidthScalar = _r319_t3[3];
                (function () {
                    var r322_MosaicDesiredWidth = r313_WideWidth1;
                    var r322_MosaicMiddle = r319_MosaicWidth / 2;
                    var r322_MosaicUnitWidth = r319_MosaicWidth / r319_MosaicWidthScalar;
                    var r322_MangleUnicode = function (r323_unicode, r323__desiredOverride) {
                        var _r323_t0, _r323_t1;
                        return r319_MosaicWidth === (r323__desiredOverride || r322_MosaicDesiredWidth) ? r323_unicode : void 0;
                    };
                    var r322_MangleName = function (r324_name) {
                        var _r324_t0, _r324_t1;
                        return r324_name + r319_MosaicNameSuffix;
                    };
                    var r322_Geom = r313_GeometricDim(r322_MosaicUnitWidth, r319_MosaicWidth);
                    var r322_clapperRad = r322_Geom.Size * 0.2;
                    var r322_top = r1_mix(r313_PictBot, r313_PictTop, 0.7 + 0.1 * r319_MosaicWidthScalar);
                    var r322_bot = r1_mix(r313_PictBot, r313_PictTop, 0.3 - 0.1 * r319_MosaicWidthScalar);
                    var r322_bellTop = r1_mix(r322_bot, r322_top, 0.9);
                    var r322_bellBot = r1_mix(r322_bot, r322_top, 0.2);
                    var r322_px1 = 0.2;
                    var r322_py1 = 1 / 3;
                    var r322_py2 = 2 / 3;
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r322_MangleName("bell"), r322_MangleUnicode(128276), new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                        var _r327_t0, _r327_t1;
                        r327_currentGlyph.setWidth(r322_Geom.Width);
                        r327_currentGlyph.include(r313_xn$spirooutline$1aao(r313_straight.right.start(r322_Geom.Left, r322_bellBot), r313_archv(), r313_flat(r1_mix(r322_Geom.Left, r322_Geom.Right, r322_px1), r1_mix(r322_bellBot, r322_bellTop, r322_py1)), r313_curl(r1_mix(r322_Geom.Left, r322_Geom.Right, r322_px1), r1_mix(r322_bellBot, r322_bellTop, r322_py2)), r313_arcvh(), r313_g4(r322_Geom.MidX, r322_bellTop), r313_archv(), r313_flat(r1_mix(r322_Geom.Right, r322_Geom.Left, r322_px1), r1_mix(r322_bellBot, r322_bellTop, r322_py2)), r313_curl(r1_mix(r322_Geom.Right, r322_Geom.Left, r322_px1), r1_mix(r322_bellBot, r322_bellTop, r322_py1)), r313_arcvh(), r313_straight.right.end(r322_Geom.Right, r322_bellBot)));
                        r327_currentGlyph.include(r313_HBar.t(r322_Geom.Left, r322_Geom.Right, r322_bellBot, r313_GeometryStroke));
                        r327_currentGlyph.include(r313_DotAt(r322_Geom.MidX, r322_bot + r322_clapperRad, r322_clapperRad));
                        r327_currentGlyph.include(r313_VBar.m(r322_Geom.MidX, r322_bellBot, r322_top, r313_GeometryStroke));
                        return void 0;
                    }));
                })();
                _r319_t5 = _r319_t2 = _r319_t2 + 1;
                _r319_t4 = _r319_t2 < _r319_t1;
            }
            return _r319_t5;
        })();
    });
    return void 0;
});


