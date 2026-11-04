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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Block", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_WideWidth4 = _r312_t1.WideWidth4;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_xn$disablecontrast$3qIs = _r312_t2["disable-contrast"];
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_ForceUpright = _r312_t5.ForceUpright;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_NameUni = _r312_t6.NameUni;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "HShade": r312_HShade,
                "VShade": r312_VShade
            };
        });
        var r312_HShade = function (r317_steps, r317_t, r317_b, r317_l, r317_r) {
            var _r317_t0, _r317_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_t2, _r319_t3;
                var _r319_t0 = 0;
                var _r319_t1 = r317_steps;
                var r319_j = _r319_t0;
                while (r319_j < _r319_t1) {
                    r319_currentGlyph.include(r312_dispiro(r312_widths.center(r312_GeometryStroke), r312_xn$disablecontrast$3qIs(), r312_flat(r317_l, r1_mix(r317_t, r317_b, (r319_j + 0.5) / r317_steps), r312_heading(r312_Rightward)), r312_curl(r317_r, r1_mix(r317_t, r317_b, (r319_j + 0.5) / r317_steps), r312_heading(r312_Rightward))));
                    r319_j = r319_j + 1;
                }
                return void 0;
            });
        };
        var r312_VShade = function (r323_steps, r323_t, r323_b, r323_l, r323_r) {
            var _r323_t0, _r323_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t2, _r325_t3;
                var _r325_t0 = 0;
                var _r325_t1 = r323_steps;
                var r325_j = _r325_t0;
                while (r325_j < _r325_t1) {
                    r325_currentGlyph.include(r312_dispiro(r312_widths.center(r312_GeometryStroke), r312_xn$disablecontrast$3qIs(), r312_flat(r1_mix(r323_l, r323_r, (r325_j + 0.5) / r323_steps), r323_t, r312_heading(r312_Downward)), r312_curl(r1_mix(r323_l, r323_r, (r325_j + 0.5) / r323_steps), r323_b, r312_heading(r312_Downward))));
                    r325_j = r325_j + 1;
                }
                return void 0;
            });
        };
        return (function () {
            var r331_FMosaicWide, r331_MosaicNameSuffix, r331_MosaicWidth, r331_MosaicWidthScalar, _r331_t3, _r331_t5, _r331_t6, _r331_tag7;
            var r331_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r331_t0 = r331_WidthKinds;
            var _r331_t1 = _r331_t0.length;
            var _r331_t2 = 0;
            var _r331_t4 = _r331_t2 < _r331_t1;
            while (_r331_t4) {
                _r331_t3 = _r331_t0[_r331_t2];
                r331_FMosaicWide = _r331_t3[0];
                r331_MosaicNameSuffix = _r331_t3[1];
                r331_MosaicWidth = _r331_t3[2];
                r331_MosaicWidthScalar = _r331_t3[3];
                (function () {
                    var r334_xCoord, r334_yCoord, r334_lower, r334_upper;
                    var r334_MosaicDesiredWidth = r312_WideWidth4;
                    var r334_MosaicMiddle = r331_MosaicWidth / 2;
                    var r334_MosaicUnitWidth = r331_MosaicWidth / r331_MosaicWidthScalar;
                    var r334_MangleUnicode = function (r335_unicode, r335__desiredOverride) {
                        var _r335_t0, _r335_t1;
                        return r331_MosaicWidth === (r335__desiredOverride || r334_MosaicDesiredWidth) ? r335_unicode : void 0;
                    };
                    var r334_MangleName = function (r336_name) {
                        var _r336_t0, _r336_t1;
                        return r336_name + r331_MosaicNameSuffix;
                    };
                    var r334_top = r312_fontMetrics.os2.sTypoAscender;
                    var r334_bottom = r312_fontMetrics.os2.sTypoDescender;
                    var r334_left = 0;
                    var r334_right = r331_MosaicWidth;
                    var r334_PatternCorner22 = function (r337_bit) {
                        var _r337_t1, _r337_t2;
                        var _r337_t0 = r337_bit;
                        return 1 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 0 / 2), r1_mix(r334_top, r334_bottom, 0 / 2)) : 2 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 1 / 2), r1_mix(r334_top, r334_bottom, 0 / 2)) : 3 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 2 / 2), r1_mix(r334_top, r334_bottom, 0 / 2)) : 4 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 0 / 2), r1_mix(r334_top, r334_bottom, 1 / 2)) : 5 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 1 / 2), r1_mix(r334_top, r334_bottom, 1 / 2)) : 6 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 2 / 2), r1_mix(r334_top, r334_bottom, 1 / 2)) : 7 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 0 / 2), r1_mix(r334_top, r334_bottom, 2 / 2)) : 8 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 1 / 2), r1_mix(r334_top, r334_bottom, 2 / 2)) : 9 === _r337_t0 ? r312_corner(r1_mix(r334_left, r334_right, 2 / 2), r1_mix(r334_top, r334_bottom, 2 / 2)) : void 0;
                    };
                    var r334_PatternPolygon22 = function (r338_bits) {
                        var _r338_t0, _r338_t1;
                        return r312_xn$spirooutline$1aao(r338_bits.map(function (r339_x) {
                            var _r339_t0, _r339_t1;
                            return r334_PatternCorner22(r339_x - 0);
                        }));
                    };
                    var r334_FillBlock = function (r340_hStart, r340_hEnd, r340_vStart, r340_vEnd) {
                        var _r340_t0, _r340_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r1_mix(r334_left, r334_right, r340_hStart), r1_mix(r334_bottom, r334_top, r340_vStart)), r312_corner(r1_mix(r334_left, r334_right, r340_hStart), r1_mix(r334_bottom, r334_top, r340_vEnd)), r312_corner(r1_mix(r334_left, r334_right, r340_hEnd), r1_mix(r334_bottom, r334_top, r340_vEnd)), r312_corner(r1_mix(r334_left, r334_right, r340_hEnd), r1_mix(r334_bottom, r334_top, r340_vStart)));
                    };
                    var r334_BlockElementGlyph = function (r341_unicode, r341_hStart, r341_hEnd, r341_vStart, r341_vEnd) {
                        var _r341_t0, _r341_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(r341_unicode)), r334_MangleUnicode(r341_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                            var _r344_t0, _r344_t1;
                            r344_currentGlyph.setWidth(r331_MosaicWidth);
                            r344_currentGlyph.include(r312_ForceUpright());
                            r344_currentGlyph.include(r334_FillBlock(r341_hStart, r341_hEnd, r341_vStart, r341_vEnd));
                            return void 0;
                        }));
                    };
                    var r334_BlockElementGlyph2 = function (r348_unicode, r348_hStart1, r348_hEnd1, r348_vStart1, r348_vEnd1, r348_hStart2, r348_hEnd2, r348_vStart2, r348_vEnd2) {
                        var _r348_t0, _r348_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(r348_unicode)), r334_MangleUnicode(r348_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                            var _r351_t0, _r351_t1;
                            r351_currentGlyph.setWidth(r331_MosaicWidth);
                            r351_currentGlyph.include(r312_ForceUpright());
                            r351_currentGlyph.include(r312_union(r334_FillBlock(r348_hStart1, r348_hEnd1, r348_vStart1, r348_vEnd1), r334_FillBlock(r348_hStart2, r348_hEnd2, r348_vStart2, r348_vEnd2)));
                            return void 0;
                        }));
                    };
                    r334_BlockElementGlyph(9608, 0, 1, 0, 1);
                    r334_BlockElementGlyph(129926, 0, 1, 1 / 8, 1);
                    r334_BlockElementGlyph(129925, 0, 1, 2 / 8, 1);
                    r334_BlockElementGlyph(129924, 0, 1, 3 / 8, 1);
                    r334_BlockElementGlyph(9600, 0, 1, 1 / 2, 1);
                    r334_BlockElementGlyph(129923, 0, 1, 5 / 8, 1);
                    r334_BlockElementGlyph(129922, 0, 1, 6 / 8, 1);
                    r334_BlockElementGlyph(9620, 0, 1, 7 / 8, 1);
                    r334_BlockElementGlyph(9621, 7 / 8, 1, 0, 1);
                    r334_BlockElementGlyph(129927, 6 / 8, 1, 0, 1);
                    r334_BlockElementGlyph(129928, 5 / 8, 1, 0, 1);
                    r334_BlockElementGlyph(9616, 1 / 2, 1, 0, 1);
                    r334_BlockElementGlyph(129929, 3 / 8, 1, 0, 1);
                    r334_BlockElementGlyph(129930, 2 / 8, 1, 0, 1);
                    r334_BlockElementGlyph(129931, 1 / 8, 1, 0, 1);
                    var _r334_t0 = 1;
                    var _r334_t1 = 8;
                    var r334_fill = _r334_t0;
                    while (r334_fill < _r334_t1) {
                        r334_BlockElementGlyph(9600 + r334_fill, 0, 1, 0, r334_fill / 8);
                        r334_BlockElementGlyph(9616 - r334_fill, 0, r334_fill / 8, 0, 1);
                        if (r334_fill >= 2 && r334_fill <= 7) {
                            r334_BlockElementGlyph(129904 - 2 + r334_fill, (r334_fill - 1) / 8, r334_fill / 8, 0, 1);
                            r334_BlockElementGlyph(129910 - 2 + r334_fill, 0, 1, 1 - (r334_fill - 1) / 8, 1 - r334_fill / 8);
                        }
                        r334_fill = r334_fill + 1;
                    }
                    var _r334_t2 = 0;
                    var _r334_t3 = 16;
                    var r334_pos = _r334_t2;
                    while (r334_pos < _r334_t3) {
                        r334_xCoord = r334_pos % 4 / 4;
                        r334_yCoord = 1 - Math.floor(r334_pos / 4) / 4;
                        r334_BlockElementGlyph(118416 + r334_pos, r334_xCoord, r334_xCoord + 0.25, r334_yCoord - 0.25, r334_yCoord);
                        r334_pos = r334_pos + 1;
                    }
                    var _r334_t4 = 0;
                    var _r334_t5 = 4;
                    var r334_index = _r334_t4;
                    while (r334_index < _r334_t5) {
                        r334_lower = Math.max(0, r334_index - 1) / 4;
                        r334_upper = Math.min(4, r334_index + 2) / 4;
                        r334_BlockElementGlyph(118432 + r334_index, 1 - r334_upper, 1 - r334_lower, 0, 1 / 4);
                        r334_BlockElementGlyph(118436 + r334_index, 0, 1 / 4, r334_lower, r334_upper);
                        r334_BlockElementGlyph(118440 + r334_index, r334_lower, r334_upper, 3 / 4, 1);
                        r334_BlockElementGlyph(118444 + r334_index, 3 / 4, 1, 1 - r334_upper, 1 - r334_lower);
                        r334_index = r334_index + 1;
                    }
                    r334_BlockElementGlyph(129998, 0, 2 / 3, 0, 1);
                    r334_BlockElementGlyph(129999, 0, 1 / 3, 0, 1);
                    r334_BlockElementGlyph(130020, 1 / 4, 3 / 4, 1 / 2, 1);
                    r334_BlockElementGlyph(130021, 1 / 4, 3 / 4, 0, 1 / 2);
                    r334_BlockElementGlyph(130022, 0, 1 / 2, 1 / 4, 3 / 4);
                    r334_BlockElementGlyph(130023, 1 / 2, 1, 1 / 4, 3 / 4);
                    r334_BlockElementGlyph2(129916, 0, 1 / 8, 0, 1, 0, 1, 0, 1 / 8);
                    r334_BlockElementGlyph2(129917, 0, 1 / 8, 0, 1, 0, 1, 7 / 8, 1);
                    r334_BlockElementGlyph2(129918, 7 / 8, 1, 0, 1, 0, 1, 7 / 8, 1);
                    r334_BlockElementGlyph2(129919, 7 / 8, 1, 0, 1, 0, 1, 0, 1 / 8);
                    r334_BlockElementGlyph2(129920, 0, 1, 7 / 8, 1, 0, 1, 0, 1 / 8);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(129921)), r334_MangleUnicode(129921), new r312_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                        var _r363_t0, _r363_t1;
                        r363_currentGlyph.setWidth(r331_MosaicWidth);
                        r363_currentGlyph.include(r312_ForceUpright());
                        r363_currentGlyph.include(r312_union(r334_FillBlock(0, 1, 7 / 8, 1), r334_FillBlock(0, 1, 5 / 8, 6 / 8), r334_FillBlock(0, 1, 3 / 8, 4 / 8), r334_FillBlock(0, 1, 0, 1 / 8)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(129973)), r334_MangleUnicode(129973), new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                        var _r369_t0, _r369_t1;
                        r369_currentGlyph.setWidth(r331_MosaicWidth);
                        r369_currentGlyph.include(r312_ForceUpright());
                        r369_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName("arrowLeft")));
                        r369_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName(r312_NameUni(129920))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(129974)), r334_MangleUnicode(129974), new r312_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                        var _r376_t0, _r376_t1;
                        r376_currentGlyph.setWidth(r331_MosaicWidth);
                        r376_currentGlyph.include(r312_ForceUpright());
                        r376_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName("arrowRight")));
                        r376_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName(r312_NameUni(129920))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(129975)), r334_MangleUnicode(129975), new r312_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                        var _r383_t0, _r383_t1;
                        r383_currentGlyph.setWidth(r331_MosaicWidth);
                        r383_currentGlyph.include(r312_ForceUpright());
                        r383_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName("arrowDown")));
                        r383_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName(r312_NameUni(9621))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(129976)), r334_MangleUnicode(129976), new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                        var _r390_t0, _r390_t1;
                        r390_currentGlyph.setWidth(r331_MosaicWidth);
                        r390_currentGlyph.include(r312_ForceUpright());
                        r390_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName("arrowUp")));
                        r390_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName(r312_NameUni(9621))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(129980)), r334_MangleUnicode(129980), new r312_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                        var _r397_t0, _r397_t1;
                        r397_currentGlyph.setWidth(r331_MosaicWidth);
                        r397_currentGlyph.include(r312_ForceUpright());
                        r397_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName("blackSmallCircle")));
                        r397_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName(r312_NameUni(9621))));
                        r397_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName(r312_NameUni(129920))));
                        return void 0;
                    }));
                    var r334_Shade = function (r403__steps, r403_fill, r403_box) {
                        var _r403_t0, _r403_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                            var _r405_t0, _r405_t1;
                            var r405_steps = Math.abs(r403__steps);
                            var r405_sign = r403__steps >= 0 ? 1 : -1;
                            var r405_sw = (r334_top - r334_bottom) / r405_steps * r403_fill;
                            var r405_skew = Math.round(r331_MosaicWidth / r312_Width) * (r334_top - r334_bottom) / 2;
                            r405_currentGlyph.include(r312_ForceUpright());
                            r405_currentGlyph.include(r312_intersection(new r312_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                                var r409_y0, r409_y1, _r409_t2, _r409_t3;
                                var _r409_t0 = -r405_steps * 4 - 2;
                                var _r409_t1 = r405_steps * 4 + 2;
                                var r409_j = _r409_t0;
                                while (r409_j < _r409_t1) {
                                    r409_y0 = r1_mix(r334_top, r334_bottom, r409_j / r405_steps);
                                    r409_y1 = r409_y0 + r405_sign * r405_skew;
                                    r409_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r409_y0 - r405_sw / 2), r312_corner(r331_MosaicWidth, r409_y1 - r405_sw / 2), r312_corner(r331_MosaicWidth, r409_y1 + r405_sw / 2), r312_corner(0, r409_y0 + r405_sw / 2)));
                                    r409_j = r409_j + 1;
                                }
                                return void 0;
                            }), r1_fallback(r403_box, r334_FillBlock(0, 1, 0, 1))));
                            return void 0;
                        });
                    };
                    var r334_FillLight = 1 / 8;
                    var r334_FillMedium = 1 / 4;
                    var r334_FillHeavy = 1 / 2;
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("lightShade"), r334_MangleUnicode(9617), new r312_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                        var _r414_t0, _r414_t1;
                        r414_currentGlyph.setWidth(r331_MosaicWidth);
                        r414_currentGlyph.include(r334_Shade(4, r334_FillLight));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("denseShade"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                        var _r419_t0, _r419_t1;
                        r419_currentGlyph.setWidth(r331_MosaicWidth);
                        r419_currentGlyph.include(r334_Shade(16, r334_FillHeavy));
                        return void 0;
                    }));
                    var r334_MediumShade = function (r422_unicode, r422_bits) {
                        var _r422_t0, _r422_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(r422_unicode)), r334_MangleUnicode(r422_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                            var _r425_t0, _r425_t1;
                            r425_currentGlyph.setWidth(r331_MosaicWidth);
                            r425_currentGlyph.include(r334_Shade(8, r334_FillMedium, r334_PatternPolygon22(r422_bits)));
                            return void 0;
                        }));
                    };
                    var r334_InverseMediumShade = function (r428_unicode, r428_bits) {
                        var _r428_t0, _r428_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName(r312_NameUni(r428_unicode)), r334_MangleUnicode(r428_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                            var _r431_t0, _r431_t1;
                            r431_currentGlyph.setWidth(r331_MosaicWidth);
                            r431_currentGlyph.include(r334_Shade(-8, 1 - r334_FillMedium, r334_PatternPolygon22(r428_bits)));
                            r431_currentGlyph.include(r312_difference(r334_FillBlock(0, 1, 0, 1), r334_PatternPolygon22(r428_bits)));
                            return void 0;
                        }));
                    };
                    r334_MediumShade(9618, [1, 3, 9, 7]);
                    r334_MediumShade(129932, [1, 2, 8, 7]);
                    r334_MediumShade(129933, [2, 3, 9, 8]);
                    r334_MediumShade(129934, [1, 3, 6, 4]);
                    r334_MediumShade(129935, [4, 6, 9, 7]);
                    r334_InverseMediumShade(129936, [1, 3, 9, 7]);
                    r334_InverseMediumShade(129940, [1, 2, 8, 7]);
                    r334_InverseMediumShade(129938, [1, 3, 6, 4]);
                    r334_InverseMediumShade(129937, [4, 6, 9, 7]);
                    r334_MediumShade(129948, [1, 3, 7]);
                    r334_MediumShade(129949, [1, 3, 9]);
                    r334_MediumShade(129950, [3, 7, 9]);
                    r334_MediumShade(129951, [1, 7, 9]);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("heavyShade"), r334_MangleUnicode(9619), new r312_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                        var _r437_t0, _r437_t1;
                        r437_currentGlyph.setWidth(r331_MosaicWidth);
                        r437_currentGlyph.include(r334_Shade(8, r334_FillHeavy));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("upperLeftToLowerRightFill"), r334_MangleUnicode(129944), new r312_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                        var _r442_t0, _r442_t1;
                        r442_currentGlyph.setWidth(r331_MosaicWidth);
                        r442_currentGlyph.include(r334_Shade(-4, r334_FillHeavy));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("upperRightToLowerLeftFill"), r334_MangleUnicode(129945), new r312_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
                        var _r447_t0, _r447_t1;
                        r447_currentGlyph.setWidth(r331_MosaicWidth);
                        r447_currentGlyph.include(r334_Shade(4, r334_FillHeavy));
                        return void 0;
                    }));
                    var r334_DiagShade = function (r450__steps) {
                        var _r450_t0, _r450_t1;
                        var r450_steps = Math.abs(r450__steps);
                        var r450_skew = Math.round(r331_MosaicWidth / r312_Width) * (r334_top - r334_bottom) / 2;
                        var r450_coSw = r312_GeometryStroke * Math.hypot(1, r450_skew / r331_MosaicWidth);
                        var r450_fill = r450_coSw * r450_steps / (r334_top - r334_bottom);
                        return r334_Shade(r450__steps, r450_fill);
                    };
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("sparseHoriShade"), r334_MangleUnicode(117824), new r312_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
                        var _r453_t0, _r453_t1;
                        r453_currentGlyph.setWidth(r331_MosaicWidth);
                        r453_currentGlyph.include(r312_ForceUpright());
                        r453_currentGlyph.include(r312_HShade(4, r334_top, r334_bottom, r334_left, r334_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("sparseVertShade"), r334_MangleUnicode(117825), new r312_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
                        var _r459_t0, _r459_t1;
                        r459_currentGlyph.setWidth(r331_MosaicWidth);
                        r459_currentGlyph.include(r312_ForceUpright());
                        r459_currentGlyph.include(r312_VShade(2 * r331_MosaicWidthScalar, r334_top, r334_bottom, r334_left, r334_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("orthoCrosshatchShade"), r334_MangleUnicode(117826), new r312_xn$Capture$2Lrc8.GlyphProc(function (r465_currentGlyph) {
                        var _r465_t0, _r465_t1;
                        r465_currentGlyph.setWidth(r331_MosaicWidth);
                        r465_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName("sparseHoriShade")));
                        r465_currentGlyph.include(r312_xn$referglyph$1aao(r334_MangleName("sparseVertShade")));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("diagCrosshatchShade"), r334_MangleUnicode(117827), new r312_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
                        var _r471_t0, _r471_t1;
                        r471_currentGlyph.setWidth(r331_MosaicWidth);
                        r471_currentGlyph.include(r334_DiagShade(4));
                        r471_currentGlyph.include(r334_DiagShade(-4));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("denseVertShade"), r334_MangleUnicode(117828), new r312_xn$Capture$2Lrc8.GlyphProc(function (r477_currentGlyph) {
                        var _r477_t0, _r477_t1;
                        r477_currentGlyph.setWidth(r331_MosaicWidth);
                        r477_currentGlyph.include(r312_ForceUpright());
                        r477_currentGlyph.include(r312_VShade(4 * r331_MosaicWidthScalar, r334_top, r334_bottom, r334_left, r334_right));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r334_MangleName("denseHoriShade"), r334_MangleUnicode(117829), new r312_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
                        var _r483_t0, _r483_t1;
                        r483_currentGlyph.setWidth(r331_MosaicWidth);
                        r483_currentGlyph.include(r312_ForceUpright());
                        r483_currentGlyph.include(r312_HShade(8, r334_top, r334_bottom, r334_left, r334_right));
                        return void 0;
                    }));
                })();
                _r331_t5 = _r331_t2 = _r331_t2 + 1;
                _r331_t4 = _r331_t2 < _r331_t1;
            }
            return _r331_t5;
        })();
    });
    return void 0;
});


