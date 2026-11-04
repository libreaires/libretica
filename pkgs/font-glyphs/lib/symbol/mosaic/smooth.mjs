"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_Gr = _s0_t1;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Smooth", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8, _r313_t9, _r313_tag10;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_glyphStore = _r313_t0.glyphStore;
        var r313_fontMetrics = _r313_t0.fontMetrics;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_WideWidth4 = _r313_t1.WideWidth4;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_ForceUpright = _r313_t5.ForceUpright;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        return (function () {
            var r318_FMosaicWide, r318_MosaicNameSuffix, r318_MosaicWidth, r318_MosaicWidthScalar, _r318_t3, _r318_t5, _r318_t6, _r318_tag7;
            var r318_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
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
                    var r321_MosaicDesiredWidth = r313_WideWidth4;
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
                    var r321_top = r313_fontMetrics.os2.sTypoAscender;
                    var r321_bottom = r313_fontMetrics.os2.sTypoDescender;
                    var r321_left = 0;
                    var r321_right = r318_MosaicWidth;
                    var r321_PatternCorner23 = function (r324_bit) {
                        var _r324_t1, _r324_t2;
                        var _r324_t0 = r324_bit;
                        return 1 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 0 / 2), r1_mix(r321_top, r321_bottom, 0 / 3)) : 2 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 1 / 2), r1_mix(r321_top, r321_bottom, 0 / 3)) : 3 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 2 / 2), r1_mix(r321_top, r321_bottom, 0 / 3)) : 4 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 0 / 2), r1_mix(r321_top, r321_bottom, 1 / 3)) : 5 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 2 / 2), r1_mix(r321_top, r321_bottom, 1 / 3)) : 6 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 0 / 2), r1_mix(r321_top, r321_bottom, 2 / 3)) : 7 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 2 / 2), r1_mix(r321_top, r321_bottom, 2 / 3)) : 8 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 0 / 2), r1_mix(r321_top, r321_bottom, 3 / 3)) : 9 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 1 / 2), r1_mix(r321_top, r321_bottom, 3 / 3)) : 0 === _r324_t0 ? r313_corner(r1_mix(r321_left, r321_right, 2 / 2), r1_mix(r321_top, r321_bottom, 3 / 3)) : void 0;
                    };
                    var r321_PatternCorner22 = function (r325_bit) {
                        var _r325_t1, _r325_t2;
                        var _r325_t0 = r325_bit;
                        return 1 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 0 / 2), r1_mix(r321_top, r321_bottom, 0 / 2)) : 2 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 1 / 2), r1_mix(r321_top, r321_bottom, 0 / 2)) : 3 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 2 / 2), r1_mix(r321_top, r321_bottom, 0 / 2)) : 4 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 0 / 2), r1_mix(r321_top, r321_bottom, 1 / 2)) : 5 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 1 / 2), r1_mix(r321_top, r321_bottom, 1 / 2)) : 6 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 2 / 2), r1_mix(r321_top, r321_bottom, 1 / 2)) : 7 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 0 / 2), r1_mix(r321_top, r321_bottom, 2 / 2)) : 8 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 1 / 2), r1_mix(r321_top, r321_bottom, 2 / 2)) : 9 === _r325_t0 ? r313_corner(r1_mix(r321_left, r321_right, 2 / 2), r1_mix(r321_top, r321_bottom, 2 / 2)) : void 0;
                    };
                    var r321_PatternPolygon22 = function (r326_bits) {
                        var _r326_t0, _r326_t1;
                        return r313_xn$spirooutline$1aao(r326_bits.map(function (r327_x) {
                            var _r327_t0, _r327_t1;
                            return r321_PatternCorner22(r327_x - 0);
                        }));
                    };
                    var r321_SmoothMosaic23 = function (r328_unicode, r328_pattern) {
                        var _r328_t0, _r328_t1;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("blockMosaicSmooth23/" + r328_pattern), r321_MangleUnicode(r328_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                            var _r331_t0, _r331_t1;
                            r331_currentGlyph.setWidth(r318_MosaicWidth);
                            r331_currentGlyph.include(r313_ForceUpright());
                            var r331_corners = r328_pattern.split("").map(function (r334_x) {
                                var _r334_t0, _r334_t1;
                                return r321_PatternCorner23(r334_x - 0);
                            });
                            r331_currentGlyph.include(r313_xn$spirooutline$1aao(r331_corners));
                            return void 0;
                        }));
                    };
                    r321_SmoothMosaic23(129852, "689");
                    r321_SmoothMosaic23(129853, "680");
                    r321_SmoothMosaic23(129854, "489");
                    r321_SmoothMosaic23(129855, "480");
                    r321_SmoothMosaic23(129856, "189");
                    r321_SmoothMosaic23(129857, "42308");
                    r321_SmoothMosaic23(129858, "4308");
                    r321_SmoothMosaic23(129859, "62308");
                    r321_SmoothMosaic23(129860, "6308");
                    r321_SmoothMosaic23(129861, "2308");
                    r321_SmoothMosaic23(129862, "6508");
                    r321_SmoothMosaic23(129863, "970");
                    r321_SmoothMosaic23(129864, "870");
                    r321_SmoothMosaic23(129865, "950");
                    r321_SmoothMosaic23(129866, "850");
                    r321_SmoothMosaic23(129867, "930");
                    r321_SmoothMosaic23(129868, "25081");
                    r321_SmoothMosaic23(129869, "5081");
                    r321_SmoothMosaic23(129870, "27081");
                    r321_SmoothMosaic23(129871, "7081");
                    r321_SmoothMosaic23(129872, "2081");
                    r321_SmoothMosaic23(129873, "7084");
                    r321_SmoothMosaic23(129874, "69031");
                    r321_SmoothMosaic23(129875, "6031");
                    r321_SmoothMosaic23(129876, "49031");
                    r321_SmoothMosaic23(129877, "4031");
                    r321_SmoothMosaic23(129878, "9031");
                    r321_SmoothMosaic23(129879, "142");
                    r321_SmoothMosaic23(129880, "143");
                    r321_SmoothMosaic23(129881, "162");
                    r321_SmoothMosaic23(129882, "163");
                    r321_SmoothMosaic23(129883, "182");
                    r321_SmoothMosaic23(129884, "1653");
                    r321_SmoothMosaic23(129885, "18973");
                    r321_SmoothMosaic23(129886, "1873");
                    r321_SmoothMosaic23(129887, "18953");
                    r321_SmoothMosaic23(129888, "1853");
                    r321_SmoothMosaic23(129889, "1893");
                    r321_SmoothMosaic23(129890, "235");
                    r321_SmoothMosaic23(129891, "135");
                    r321_SmoothMosaic23(129892, "237");
                    r321_SmoothMosaic23(129893, "137");
                    r321_SmoothMosaic23(129894, "230");
                    r321_SmoothMosaic23(129895, "1473");
                    var r321_SmoothMosaic22 = function (r336_unicode, r336_pattern) {
                        var _r336_t0, _r336_t1;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r321_MangleName("blockMosaicSmooth22/" + r336_pattern), r336_unicode ? r321_MangleUnicode(r336_unicode) : null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                            var _r339_t0, _r339_t1;
                            r339_currentGlyph.setWidth(r318_MosaicWidth);
                            r339_currentGlyph.include(r313_ForceUpright());
                            var r339_corners = r336_pattern.split("").map(function (r342_x) {
                                var _r342_t0, _r342_t1;
                                return r321_PatternCorner22(r342_x - 0);
                            });
                            r339_currentGlyph.include(r313_xn$spirooutline$1aao(r339_corners));
                            return void 0;
                        }));
                    };
                    r321_SmoothMosaic22(129896, "15793");
                    r321_SmoothMosaic22(129897, "17935");
                    r321_SmoothMosaic22(129898, "17953");
                    r321_SmoothMosaic22(129899, "17593");
                    r321_SmoothMosaic22(129900, "175");
                    r321_SmoothMosaic22(129901, "315");
                    r321_SmoothMosaic22(129902, "359");
                    r321_SmoothMosaic22(129903, "579");
                    r321_SmoothMosaic22(129946, "1379");
                    r321_SmoothMosaic22(129947, "1739");
                    r321_SmoothMosaic22(null, "138");
                    r321_SmoothMosaic22(null, "167");
                    r321_SmoothMosaic22(null, "279");
                    r321_SmoothMosaic22(null, "349");
                    r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleUp"), r321_MangleName("blockMosaicSmooth22/279"), r1_Gr.MosaicForm);
                    r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleDown"), r321_MangleName("blockMosaicSmooth22/138"), r1_Gr.MosaicForm);
                    r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleLeft"), r321_MangleName("blockMosaicSmooth22/349"), r1_Gr.MosaicForm);
                    return r1_Gr.linkSingleGlyphPairGr(r313_glyphStore, r321_MangleName("blackTriangleRight"), r321_MangleName("blockMosaicSmooth22/167"), r1_Gr.MosaicForm);
                })();
                _r318_t5 = _r318_t2 = _r318_t2 + 1;
                _r318_t4 = _r318_t2 < _r318_t1;
            }
            return _r318_t5;
        })();
    });
    return void 0;
});


