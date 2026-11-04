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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Rounded", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_WideWidth4 = _r313_t1.WideWidth4;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_close = _r313_t2.close;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
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
        var r313_difference = _r313_t4.difference;
        return (function () {
            var r316_FMosaicWide, r316_MosaicNameSuffix, r316_MosaicWidth, r316_MosaicWidthScalar, _r316_t3, _r316_t5, _r316_t6, _r316_tag7;
            var r316_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r316_t0 = r316_WidthKinds;
            var _r316_t1 = _r316_t0.length;
            var _r316_t2 = 0;
            var _r316_t4 = _r316_t2 < _r316_t1;
            while (_r316_t4) {
                _r316_t3 = _r316_t0[_r316_t2];
                r316_FMosaicWide = _r316_t3[0];
                r316_MosaicNameSuffix = _r316_t3[1];
                r316_MosaicWidth = _r316_t3[2];
                r316_MosaicWidthScalar = _r316_t3[3];
                (function () {
                    var r319_MosaicDesiredWidth = r313_WideWidth1;
                    var r319_MosaicMiddle = r316_MosaicWidth / 2;
                    var r319_MosaicUnitWidth = r316_MosaicWidth / r316_MosaicWidthScalar;
                    var r319_MangleUnicode = function (r320_unicode, r320__desiredOverride) {
                        var _r320_t0, _r320_t1;
                        return r316_MosaicWidth === (r320__desiredOverride || r319_MosaicDesiredWidth) ? r320_unicode : void 0;
                    };
                    var r319_MangleName = function (r321_name) {
                        var _r321_t0, _r321_t1;
                        return r321_name + r316_MosaicNameSuffix;
                    };
                    var _r319_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r319_PointingTo = _r319_t0.PointingTo;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_Size = r319_GeometricSizes(r319_Geom);
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("roundwhitesquare"), r319_MangleUnicode(9634), new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                        var _r327_t0, _r327_t1;
                        r327_currentGlyph.setWidth(r319_Geom.Width);
                        var r327_cr = r319_Geom.Size - r313_GeometryStroke * 2;
                        r327_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_GeometryStroke), r313_flat(r319_Geom.MidX + 1, r319_Geom.MidY + r319_Geom.Size, r313_heading(r313_Leftward)), r313_curl(r319_Geom.MidX - r327_cr, r319_Geom.MidY + r319_Geom.Size, r313_heading(r313_Leftward)), r313_archv(), r313_flat(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r327_cr, r313_heading(r313_Downward)), r313_curl(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r327_cr, r313_heading(r313_Downward)), r313_arcvh(), r313_flat(r319_Geom.MidX - r327_cr, r319_Geom.MidY - r319_Geom.Size, r313_heading(r313_Rightward)), r313_curl(r319_Geom.MidX + r327_cr, r319_Geom.MidY - r319_Geom.Size, r313_heading(r313_Rightward)), r313_archv(), r313_flat(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r327_cr, r313_heading(r313_Upward)), r313_curl(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r327_cr, r313_heading(r313_Upward)), r313_arcvh(), r313_flat(r319_Geom.MidX + r327_cr, r319_Geom.MidY + r319_Geom.Size, r313_heading(r313_Leftward)), r313_curl(r319_Geom.MidX - 1, r319_Geom.MidY + r319_Geom.Size, r313_heading(r313_Leftward))));
                        return void 0;
                    }));
                    var r319_ThickRoundedArrowBar = function (r330_x1, r330_y1, r330_x2, r330_y2, r330_r, r330_w) {
                        var _r330_t0, _r330_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                            var _r332_t0, _r332_t1;
                            r332_currentGlyph.include(r319_PointingTo(r330_x1, r330_y1, r330_x2, r330_y2, function (r334_mag) {
                                var _r334_t0, _r334_t1;
                                return r313_xn$spirooutline$1aao(r313_g4(-r330_r, 0), r313_arcvh(), r313_flat(0, r330_r), r313_curl(r334_mag, r330_r), r313_archv(), r313_g4(r334_mag + r330_r, 0), r313_arcvh(), r313_flat(r334_mag, -r330_r), r313_curl(0, -r330_r), r313_archv(), r313_close());
                            }));
                            return void 0;
                        });
                    };
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteHeavySaltireWithRoundedCorners"), r319_MangleUnicode(129984, r313_WideWidth4), new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                        var _r337_t0, _r337_t1;
                        r337_currentGlyph.setWidth(r319_Geom.Width);
                        var r337_inner = Math.max(r313_AdviceStroke(3), r313_Width / 8) / 2;
                        var r337_thick = r313_AdviceStroke(4);
                        var r337_left = r319_Geom.Left + (r337_inner + r337_thick);
                        var r337_right = r319_Geom.Right - (r337_inner + r337_thick);
                        var r337_bot = r319_Geom.Bot + (r337_inner + r337_thick);
                        var r337_top = r319_Geom.Top - (r337_inner + r337_thick);
                        r337_currentGlyph.include(r313_difference(r313_union(r319_ThickRoundedArrowBar(r337_left, r337_top, r337_right, r337_bot, r337_inner + r337_thick, 0), r319_ThickRoundedArrowBar(r337_right, r337_top, r337_left, r337_bot, r337_inner + r337_thick, 0)), r313_union(r319_ThickRoundedArrowBar(r337_left, r337_top, r337_right, r337_bot, r337_inner, 0), r319_ThickRoundedArrowBar(r337_right, r337_top, r337_left, r337_bot, r337_inner, 0))));
                        return void 0;
                    }));
                })();
                _r316_t5 = _r316_t2 = _r316_t2 + 1;
                _r316_t4 = _r316_t2 < _r316_t1;
            }
            return _r316_t5;
        })();
    });
    return void 0;
});


