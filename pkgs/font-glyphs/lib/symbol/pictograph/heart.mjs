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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Heart", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_O = _r313_t1.O;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_close = _r313_t2.close;
        var r313_quadControls = _r313_t2.quadControls;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t7.GeometricDim;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "HeartShapeImpl": r313_HeartShapeImpl
            };
        });
        var r313_HeartShapeImpl = function (r319_bound, r319_sw, r319_tip, r319_ext) {
            var _r319_t0, _r319_t1;
            var r319_heart = r319_bound.withTop(r319_bound.mixY(0.975));
            var r319_y2 = r319_heart.mixY(0.75);
            var r319_y3 = r319_heart.mixY(0.75);
            return r313_xn$spirooutline$1aao(r313_corner(r319_heart.xMid, r319_heart.bottom + r319_sw * r319_tip), r313_quadControls(1, 2 / 3), r313_g4(r319_heart.right - r313_O - r319_sw, r319_y2), r313_arcvh(), r313_g4(r319_heart.mixXMidRight(0.5), r319_heart.top - r319_sw * r319_tip / 1.75), r313_archv(), r319_sw ? [r313_corner(r319_heart.xMid + r319_sw / 3, r319_y3 - r319_sw * r319_ext), r313_corner(r319_heart.xMid - r319_sw / 3, r319_y3 - r319_sw * r319_ext)] : r313_corner(r319_heart.xMid, r319_y3 - r319_sw), r313_arcvh(), r313_g4(r319_heart.mixXMidLeft(0.5), r319_heart.top - r319_sw * r319_tip / 1.75), r313_archv(), r313_g4(r319_heart.left + r313_O + r319_sw, r319_y2), r313_quadControls(0, 1 / 3), r313_close());
        };
        return (function () {
            var r322_FMosaicWide, r322_MosaicNameSuffix, r322_MosaicWidth, r322_MosaicWidthScalar, _r322_t3, _r322_t5, _r322_t6, _r322_tag7;
            var r322_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r322_t0 = r322_WidthKinds;
            var _r322_t1 = _r322_t0.length;
            var _r322_t2 = 0;
            var _r322_t4 = _r322_t2 < _r322_t1;
            while (_r322_t4) {
                _r322_t3 = _r322_t0[_r322_t2];
                r322_FMosaicWide = _r322_t3[0];
                r322_MosaicNameSuffix = _r322_t3[1];
                r322_MosaicWidth = _r322_t3[2];
                r322_MosaicWidthScalar = _r322_t3[3];
                (function () {
                    var r325_MosaicDesiredWidth = r313_WideWidth1;
                    var r325_MosaicMiddle = r322_MosaicWidth / 2;
                    var r325_MosaicUnitWidth = r322_MosaicWidth / r322_MosaicWidthScalar;
                    var r325_MangleUnicode = function (r326_unicode, r326__desiredOverride) {
                        var _r326_t0, _r326_t1;
                        return r322_MosaicWidth === (r326__desiredOverride || r325_MosaicDesiredWidth) ? r326_unicode : void 0;
                    };
                    var r325_MangleName = function (r327_name) {
                        var _r327_t0, _r327_t1;
                        return r327_name + r322_MosaicNameSuffix;
                    };
                    var r325_Geom = r313_GeometricDim(r325_MosaicUnitWidth, r322_MosaicWidth);
                    var r325_bound = new r1_Box(r325_Geom.Top, r325_Geom.Bot, r325_Geom.Left, r325_Geom.Right);
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r325_MangleName("blackHeart"), r325_MangleUnicode(128420), new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                        var _r330_t0, _r330_t1;
                        r330_currentGlyph.setWidth(r325_Geom.Width);
                        r330_currentGlyph.include(r313_HeartShapeImpl(r325_bound, 0, 0, 0));
                        return void 0;
                    }));
                    r313_alias(r325_MangleName("heavyblackHeart"), r325_MangleUnicode(10084), r325_MangleName("blackHeart"));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r325_MangleName("whiteHeart"), r325_MangleUnicode(129293), new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                        var _r335_t0, _r335_t1;
                        r335_currentGlyph.setWidth(r325_Geom.Width);
                        r335_currentGlyph.include(r313_difference(r313_xn$referglyph$1aao(r325_MangleName("blackHeart")), r313_HeartShapeImpl(r325_bound, r313_GeometryStroke, 1.75 / r313_HVContrast, 0.8)));
                        return void 0;
                    }));
                })();
                _r322_t5 = _r322_t2 = _r322_t2 + 1;
                _r322_t4 = _r322_t2 < _r322_t1;
            }
            return _r322_t5;
        })();
    });
    return void 0;
});


