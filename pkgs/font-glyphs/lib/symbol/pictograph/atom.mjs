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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Atom", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9, _r312_t10, _r312_tag11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_close = _r312_t2.close;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_DotAt = _r312_t5.DotAt;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r312_GeometricDim = _r312_t7.GeometricDim;
        return (function () {
            var r318_FMosaicWide, r318_MosaicNameSuffix, r318_MosaicWidth, r318_MosaicWidthScalar, _r318_t3, _r318_t5, _r318_t6, _r318_tag7;
            var r318_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r318_t0 = r318_WidthKinds;
            var _r318_t1 = _r318_t0.length;
            var _r318_t2 = 0;
            var _r318_t4 = _r318_t2 < _r318_t1;
            while (_r318_t4) {
                _r318_t3 = _r318_t0[_r318_t2];
                r318_FMosaicWide = _r318_t3[0];
                r318_MosaicNameSuffix = _r318_t3[1];
                r318_MosaicWidth = _r318_t3[2];
                r318_MosaicWidthScalar = _r318_t3[3];
                (function () {
                    var _r321_t0, _r321_tag1;
                    var r321_MosaicDesiredWidth = r312_WideWidth1;
                    var r321_MosaicMiddle = r318_MosaicWidth / 2;
                    var r321_MosaicUnitWidth = r318_MosaicWidth / r318_MosaicWidthScalar;
                    var r321_MangleUnicode = function (r322_unicode, r322__desiredOverride) {
                        var _r322_t0, _r322_t1;
                        return r318_MosaicWidth === (r322__desiredOverride || r321_MosaicDesiredWidth) ? r322_unicode : void 0;
                    };
                    var r321_MangleName = function (r323_name) {
                        var _r323_t0, _r323_t1;
                        return r323_name + r318_MosaicNameSuffix;
                    };
                    return (function () {
                        var r325_Geom = r312_GeometricDim(r321_MosaicUnitWidth, r318_MosaicWidth);
                        var r325_pEllipse = 3 / 7;
                        var r325_N = 3;
                        var r325_NN = 4 * r325_N;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("atomSymbol"), r321_MangleUnicode(9883), new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                            var _r328_t2, _r328_t3, _r328_t4, _r328_tag5;
                            r328_currentGlyph.setWidth(r325_Geom.Width);
                            var r328_sw = r312_AdviceStroke(12, Math.sqrt(r325_Geom.Scalar));
                            var _r328_t0 = 0;
                            var _r328_t1 = r325_N;
                            var r328_k = _r328_t0;
                            while (r328_k < _r328_t1) {
                                (function () {
                                    var r332_phi, r332_px, r332_py;
                                    var r332_theta = Math.PI * (r328_k / r325_N);
                                    var r332_knots = [];
                                    var _r332_t0 = 0;
                                    var _r332_t1 = r325_NN;
                                    var r332_m = _r332_t0;
                                    while (r332_m < _r332_t1) {
                                        r332_phi = 2 * Math.PI * (r332_m / r325_NN);
                                        r332_px = r325_pEllipse * r325_Geom.Size * Math.cos(r332_phi);
                                        r332_py = r325_Geom.Size * Math.sin(r332_phi);
                                        r332_knots.push(r312_g2(r325_Geom.MidX + Math.cos(r332_theta) * r332_px - Math.sin(r332_theta) * r332_py, r325_Geom.MidY + Math.sin(r332_theta) * r332_px + Math.cos(r332_theta) * r332_py));
                                        r332_m = r332_m + 1;
                                    }
                                    return r328_currentGlyph.include(r312_dispiro(r312_widths.rhs(r328_sw), r332_knots, r312_close()));
                                })();
                                r328_k = r328_k + 1;
                            }
                            r328_currentGlyph.include(r312_DotAt(r325_Geom.MidX, r325_Geom.MidY, r325_Geom.Size * 0.2));
                            return void 0;
                        }));
                    })();
                })();
                _r318_t5 = _r318_t2 = _r318_t2 + 1;
                _r318_t4 = _r318_t2 < _r318_t1;
            }
            return _r318_t5;
        })();
    });
    return void 0;
});


