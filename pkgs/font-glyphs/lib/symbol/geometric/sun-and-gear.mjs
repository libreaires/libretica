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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Sun-And-Gear", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
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
                    var r319_RingAt = _r319_t0.RingAt;
                    var r319_RingStrokeAt = _r319_t0.RingStrokeAt;
                    var r319_VBar = _r319_t0.VBar;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var r319_alias = _r319_t1.alias;
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_Size = r319_GeometricSizes(r319_Geom);
                    var r319_EightPointingRaysShape = function (r325_r, r325__r2) {
                        var _r325_t0, _r325_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                            var r327_theta, r327_c, r327_s, _r327_t2, _r327_t3;
                            var r327_r2 = r1_fallback(r325__r2, r319_Geom.Size);
                            var _r327_t0 = 0;
                            var _r327_t1 = 8;
                            var r327_n = _r327_t0;
                            while (r327_n < _r327_t1) {
                                r327_theta = r327_n / 8 * Math.PI * 2;
                                r327_c = Math.cos(r327_theta);
                                r327_s = Math.sin(r327_theta);
                                r327_currentGlyph.include(r313_dispiro(r313_widths.center(r319_rayWidth), r313_corner(r319_Geom.MidX + r327_c * r325_r, r319_Geom.MidY + r327_s * r325_r), r313_corner(r319_Geom.MidX + r327_c * r327_r2, r319_Geom.MidY + r327_s * r327_r2)));
                                r327_n = r327_n + 1;
                            }
                            return void 0;
                        });
                    };
                    var r319_rayWidth = r313_AdviceStroke(8, Math.sqrt(r319_Geom.Scalar));
                    var r319_rayInnerRadius = r319_Geom.Size * 0.56;
                    var r319_dotRadius = r319_Geom.Size * 0.44;
                    var r319_gearRingRad = r1_mix(r319_rayInnerRadius, r319_Geom.Size, 0.3);
                    var r319_handleLength = r319_Geom.Size * 0.5;
                    var r319_rayInwardShrink = r319_Geom.Size * 0.25;
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("blackSunWithRays"), r319_MangleUnicode(9728), new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                        var _r333_t0, _r333_t1;
                        r333_currentGlyph.setWidth(r319_Geom.Width);
                        r333_currentGlyph.include(r319_EightPointingRaysShape(r319_rayInnerRadius));
                        r333_currentGlyph.include(r319_RingAt(r319_Geom.MidX, r319_Geom.MidY, r319_dotRadius));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteSunWithRays"), r319_MangleUnicode(9788), new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                        var _r339_t0, _r339_t1;
                        r339_currentGlyph.setWidth(r319_Geom.Width);
                        r339_currentGlyph.include(r319_EightPointingRaysShape(r319_rayInnerRadius));
                        r339_currentGlyph.include(r319_RingStrokeAt(r319_Geom.MidX, r319_Geom.MidY, r319_dotRadius, r319_rayWidth));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("gearWithoutHub"), r319_MangleUnicode(9965), new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                        var _r345_t0, _r345_t1;
                        r345_currentGlyph.setWidth(r319_Geom.Width);
                        r345_currentGlyph.include(r319_EightPointingRaysShape(r319_gearRingRad - r319_rayWidth / 2));
                        r345_currentGlyph.include(r319_RingStrokeAt(r319_Geom.MidX, r319_Geom.MidY, r319_gearRingRad, r319_rayWidth));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("gearWithHandle"), r319_MangleUnicode(9966), new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                        var _r351_t0, _r351_t1;
                        r351_currentGlyph.setWidth(r319_Geom.Width);
                        r351_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("gearWithoutHub")));
                        r351_currentGlyph.include(r319_VBar.r(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r319_rayWidth / 2, r319_Geom.MidY + r319_handleLength, r319_rayWidth));
                        r351_currentGlyph.include(r319_VBar.l(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_handleLength, r319_Geom.MidY + r319_rayWidth / 2, r319_rayWidth));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("gear"), r319_MangleUnicode(9881), new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                        var _r358_t0, _r358_t1;
                        r358_currentGlyph.setWidth(r319_Geom.Width);
                        r358_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("gearWithoutHub")));
                        r358_currentGlyph.include(r319_RingAt(r319_Geom.MidX, r319_Geom.MidY, 0.4 * (r319_gearRingRad - r319_rayWidth)));
                        return void 0;
                    }));
                    r319_alias(r319_MangleName("lighthouseSymbol"), r319_MangleUnicode(9967), r319_MangleName("gear"));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("helm"), r319_MangleUnicode(9096), new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                        var _r364_t0, _r364_t1;
                        r364_currentGlyph.setWidth(r319_Geom.Width);
                        var r364_gearRingRad = r1_mix(r319_rayInnerRadius, r319_Geom.Size, 0.4);
                        r364_currentGlyph.include(r319_EightPointingRaysShape(0));
                        r364_currentGlyph.include(r319_RingStrokeAt(r319_Geom.MidX, r319_Geom.MidY, r364_gearRingRad, r319_rayWidth));
                        r364_currentGlyph.include(r319_RingAt(r319_Geom.MidX, r319_Geom.MidY, 1.1 * r319_rayWidth));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("raysInward"), r319_MangleUnicode(117865), new r313_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                        var _r371_t0, _r371_t1;
                        r371_currentGlyph.setWidth(r319_Geom.Width);
                        r371_currentGlyph.include(r319_EightPointingRaysShape(r319_rayInnerRadius - r319_rayInwardShrink, r319_Geom.Size - r319_rayInwardShrink));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("raysOutward"), r319_MangleUnicode(117866), new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                        var _r376_t0, _r376_t1;
                        r376_currentGlyph.setWidth(r319_Geom.Width);
                        r376_currentGlyph.include(r319_EightPointingRaysShape(r319_rayInnerRadius, r319_Geom.Size));
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


