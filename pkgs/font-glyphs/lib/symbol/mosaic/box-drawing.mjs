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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Box-Drawing", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth4 = _r312_t1.WideWidth4;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_MaskRight = _r312_t5.MaskRight;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_ForceUpright = _r312_t5.ForceUpright;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_NameUni = _r312_t6.NameUni;
        return (function () {
            var r317_FMosaicWide, r317_MosaicNameSuffix, r317_MosaicWidth, r317_MosaicWidthScalar, _r317_t3, _r317_t5, _r317_t6, _r317_tag7;
            var r317_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r317_t0 = r317_WidthKinds;
            var _r317_t1 = _r317_t0.length;
            var _r317_t2 = 0;
            var _r317_t4 = _r317_t2 < _r317_t1;
            while (_r317_t4) {
                _r317_t3 = _r317_t0[_r317_t2];
                r317_FMosaicWide = _r317_t3[0];
                r317_MosaicNameSuffix = _r317_t3[1];
                r317_MosaicWidth = _r317_t3[2];
                r317_MosaicWidthScalar = _r317_t3[3];
                (function () {
                    var r320_MosaicDesiredWidth = r312_WideWidth4;
                    var r320_MosaicMiddle = r317_MosaicWidth / 2;
                    var r320_MosaicUnitWidth = r317_MosaicWidth / r317_MosaicWidthScalar;
                    var r320_MangleUnicode = function (r321_unicode, r321__desiredOverride) {
                        var _r321_t0, _r321_t1;
                        return r317_MosaicWidth === (r321__desiredOverride || r320_MosaicDesiredWidth) ? r321_unicode : void 0;
                    };
                    var r320_MangleName = function (r322_name) {
                        var _r322_t0, _r322_t1;
                        return r322_name + r317_MosaicNameSuffix;
                    };
                    var r320_top = r312_fontMetrics.os2.sTypoAscender;
                    var r320_bottom = r312_fontMetrics.os2.sTypoDescender;
                    var r320_left = 0;
                    var r320_right = r317_MosaicWidth;
                    var r320_light = r312_AdviceStroke(3.5);
                    var r320_heavy = Math.max(r320_light * 2, r312_Width * 0.15);
                    var r320_midx = r1_mix(r320_left, r320_right, 0.5);
                    var r320_midy = r1_mix(r320_bottom, r320_top, 0.5);
                    var r320_hline = function (r323_unicode, r323_pos) {
                        var _r323_t0, _r323_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r323_unicode)), r320_MangleUnicode(r323_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                            var _r326_t0, _r326_t1;
                            r326_currentGlyph.setWidth(r317_MosaicWidth);
                            r326_currentGlyph.include(r312_ForceUpright());
                            var r326_posy = r1_mix(r320_bottom + r320_light / 2, r320_top - r320_light / 2, r323_pos);
                            r326_currentGlyph.include(r312_HBar.m(r320_left, r320_right, r326_posy, r320_light));
                            return void 0;
                        }));
                    };
                    var r320_vline = function (r330_unicode, r330_pos) {
                        var _r330_t0, _r330_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r330_unicode)), r320_MangleUnicode(r330_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                            var _r333_t0, _r333_t1;
                            r333_currentGlyph.setWidth(r317_MosaicWidth);
                            r333_currentGlyph.include(r312_ForceUpright());
                            var r333_posx = r1_mix(r320_left + r312_HSwToV(r320_light) / 2, r320_right - r312_HSwToV(r320_light) / 2, r330_pos);
                            r333_currentGlyph.include(r312_VBar.m(r333_posx, r320_bottom, r320_top, r320_light));
                            return void 0;
                        }));
                    };
                    r320_vline(9144, 0);
                    r320_vline(9145, 1);
                    r320_hline(9146, 1);
                    r320_hline(9147, 3 / 4);
                    r320_hline(9148, 1 / 4);
                    r320_hline(9149, 0);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117787)), r320_MangleUnicode(117787), new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                        var _r339_t0, _r339_t1;
                        r339_currentGlyph.setWidth(r317_MosaicWidth);
                        r339_currentGlyph.include(r312_ForceUpright());
                        r339_currentGlyph.include(r312_HBar.m(r320_left, r320_right, r320_midy, r320_light));
                        r339_currentGlyph.include(r312_VBar.r(r320_right, r320_midy, r320_top, r320_light));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117788)), r320_MangleUnicode(117788), new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                        var _r346_t0, _r346_t1;
                        r346_currentGlyph.setWidth(r317_MosaicWidth);
                        r346_currentGlyph.include(r312_ForceUpright());
                        r346_currentGlyph.include(r312_HBar.m(r320_left, r320_right, r320_midy, r320_light));
                        r346_currentGlyph.include(r312_VBar.r(r320_right, r320_bottom, r320_midy, r320_light));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117789)), r320_MangleUnicode(117789), new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                        var _r353_t0, _r353_t1;
                        r353_currentGlyph.setWidth(r317_MosaicWidth);
                        r353_currentGlyph.include(r312_ForceUpright());
                        r353_currentGlyph.include(r312_HBar.t(r320_left, r320_right, r320_top, r320_light));
                        r353_currentGlyph.include(r312_VBar.l(r320_left, r320_midy - 0.5 * r320_light, r320_top, r320_light));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117790)), r320_MangleUnicode(117790), new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                        var _r360_t0, _r360_t1;
                        r360_currentGlyph.setWidth(r317_MosaicWidth);
                        r360_currentGlyph.include(r312_ForceUpright());
                        r360_currentGlyph.include(r312_HBar.b(r320_left, r320_right, r320_bottom, r320_light));
                        r360_currentGlyph.include(r312_VBar.l(r320_left, r320_bottom, r320_midy + 0.5 * r320_light, r320_light));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(118285)), r320_MangleUnicode(118285), new r312_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
                        var _r367_t0, _r367_t1;
                        r367_currentGlyph.setWidth(r317_MosaicWidth);
                        r367_currentGlyph.include(r312_ForceUpright());
                        r367_currentGlyph.include(r312_HBar.m(r320_left, r1_mix(r320_left, r320_right, 1 / 3), r320_midy, r320_light));
                        r367_currentGlyph.include(r312_HBar.m(r1_mix(r320_left, r320_right, 2 / 3), r320_right, r320_midy, r320_light));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(118286)), r320_MangleUnicode(118286), new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                        var _r374_t0, _r374_t1;
                        r374_currentGlyph.setWidth(r317_MosaicWidth);
                        r374_currentGlyph.include(r312_ForceUpright());
                        r374_currentGlyph.include(r312_HBar.m(r1_mix(r320_left, r320_right, 1 / 3), r1_mix(r320_left, r320_right, 2 / 3), r320_midy, r320_light));
                        return void 0;
                    }));
                    var r320_hlinetick = function (r378_unicode, r378_a, r378_b, r378_c) {
                        var _r378_t0, _r378_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r378_unicode)), r320_MangleUnicode(r378_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                            var _r381_t0, _r381_t1;
                            r381_currentGlyph.setWidth(r317_MosaicWidth);
                            r381_currentGlyph.include(r312_ForceUpright());
                            r381_currentGlyph.include(r312_HBar.m(r320_left, r320_right, r320_midy, r320_light));
                            var r381_tickbot = r1_mix(r320_bottom, r320_midy, 0.5);
                            var r381_ticktop = r320_midy;
                            if (r378_a) r381_currentGlyph.include(r312_VBar.r(r1_mix(r320_left, r320_right, 1 / 3), r381_tickbot, r381_ticktop, r320_light));
                            if (r378_b) r381_currentGlyph.include(r312_VBar.r(r1_mix(r320_left, r320_right, 2 / 3), r381_tickbot, r381_ticktop, r320_light));
                            if (r378_c) r381_currentGlyph.include(r312_VBar.r(r320_right, r381_tickbot, r381_ticktop, r320_light));
                            return void 0;
                        }));
                    };
                    var r320_vlinetick = function (r388_unicode, r388_a, r388_b, r388_c, r388_d, r388_rev) {
                        var _r388_t0, _r388_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r388_unicode)), r320_MangleUnicode(r388_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                            var _r391_t0, _r391_t1;
                            r391_currentGlyph.setWidth(r317_MosaicWidth);
                            r391_currentGlyph.include(r312_ForceUpright());
                            r391_currentGlyph.include(r312_VBar.m(r320_midx, r388_d ? r320_bottom : r320_bottom, r388_c ? r320_top : r320_top, r320_light));
                            var r391_tickleft = r388_rev ? r320_midx : r320_left;
                            var r391_tickright = r388_rev ? r320_right : r320_midx;
                            if (r388_a) r391_currentGlyph.include(r312_HBar.t(r391_tickleft, r391_tickright, r1_mix(r320_bottom, r320_top, 1 / 3), r320_light));
                            if (r388_b) r391_currentGlyph.include(r312_HBar.t(r391_tickleft, r391_tickright, r1_mix(r320_bottom, r320_top, 2 / 3), r320_light));
                            if (r388_c) r391_currentGlyph.include(r312_HBar.t(r391_tickleft, r391_tickright, r320_top, r320_light));
                            if (r388_d) r391_currentGlyph.include(r312_HBar.b(r391_tickleft, r391_tickright, r320_bottom, r320_light));
                            return void 0;
                        }));
                    };
                    r320_hlinetick(118287, 0, 0, 1);
                    r320_hlinetick(118288, 0, 1, 0);
                    r320_hlinetick(118289, 1, 0, 1);
                    r320_hlinetick(118290, 1, 1, 1);
                    r320_vlinetick(118291, 0, 1, 0, 0, 0);
                    r320_vlinetick(118292, 1, 0, 1, 0, 0);
                    r320_vlinetick(118293, 1, 1, 1, 0, 0);
                    r320_vlinetick(118294, 0, 0, 1, 0, 1);
                    r320_vlinetick(118295, 0, 0, 0, 1, 1);
                    r320_vlinetick(118296, 0, 0, 1, 0, 0);
                    r320_vlinetick(118297, 0, 0, 0, 1, 0);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117904)), r320_MangleUnicode(117904), new r312_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                        var _r401_t2, _r401_t3;
                        r401_currentGlyph.setWidth(r317_MosaicWidth);
                        r401_currentGlyph.include(r312_ForceUpright());
                        r401_currentGlyph.include(r312_VBar.m(r320_midx, r320_bottom, r320_top, r320_light));
                        var r401_tickleft = r1_mix(r320_left, r320_right, 1 / 4);
                        var r401_tickright = r1_mix(r320_left, r320_right, 3 / 4);
                        var _r401_t0 = 0;
                        var _r401_t1 = 4;
                        var r401_i = _r401_t0;
                        while (r401_i < _r401_t1) {
                            r401_currentGlyph.include(r312_HBar.t(r401_tickleft, r401_tickright, r1_mix(r320_bottom, r320_top, (r401_i + 1) / 4), r320_light));
                            r401_i = r401_i + 1;
                        }
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117905)), r320_MangleUnicode(117905), new r312_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                        var _r409_t2, _r409_t3;
                        r409_currentGlyph.setWidth(r317_MosaicWidth);
                        r409_currentGlyph.include(r312_ForceUpright());
                        r409_currentGlyph.include(r312_HBar.m(r320_left, r320_right, r320_midy, r320_light));
                        var r409_tickbot = r1_mix(r320_bottom, r320_midy, 0.75);
                        var r409_ticktop = r1_mix(r320_midy, r320_top, 0.25);
                        var _r409_t0 = 0;
                        var _r409_t1 = 4;
                        var r409_i = _r409_t0;
                        while (r409_i < _r409_t1) {
                            r409_currentGlyph.include(r312_VBar.l(r1_mix(r320_left, r320_right, r409_i / 4), r409_tickbot, r409_ticktop, r320_light));
                            r409_i = r409_i + 1;
                        }
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117765)), r320_MangleUnicode(117765), new r312_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                        var _r417_t0, _r417_t1;
                        r417_currentGlyph.setWidth(r317_MosaicWidth);
                        r417_currentGlyph.include(r312_ForceUpright());
                        r417_currentGlyph.include(r312_VBar.m(r1_mix(r320_left, r320_right, 6.5 / 8), r320_bottom, r1_mix(r320_bottom, r320_top, 3 / 8), r320_light));
                        r417_currentGlyph.include(r312_HBar.m(r320_left, r320_right, r1_mix(r320_bottom, r320_top, 1.5 / 8), r320_light));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117766)), r320_MangleUnicode(117766), new r312_xn$Capture$2Lrc8.GlyphProc(function (r424_currentGlyph) {
                        var _r424_t0, _r424_t1;
                        r424_currentGlyph.setWidth(r317_MosaicWidth);
                        r424_currentGlyph.include(r312_ForceUpright());
                        r424_currentGlyph.include(r312_VBar.m(r1_mix(r320_left, r320_right, 6.5 / 8), r320_bottom, r320_top, r320_light));
                        r424_currentGlyph.include(r312_HBar.m(r1_mix(r320_left, r320_right, 5 / 8), r320_right, r1_mix(r320_bottom, r320_top, 1.5 / 8), r320_light));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117767)), r320_MangleUnicode(117767), new r312_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                        var _r431_t0, _r431_t1;
                        r431_currentGlyph.setWidth(r317_MosaicWidth);
                        r431_currentGlyph.include(r312_ForceUpright());
                        r431_currentGlyph.include(r312_VBar.m(r1_mix(r320_left, r320_right, 6.5 / 8), r320_bottom, r320_top, r320_light));
                        r431_currentGlyph.include(r312_HBar.m(r320_left, r320_right, r1_mix(r320_bottom, r320_top, 1.5 / 8), r320_light));
                        return void 0;
                    }));
                    var r320_boxdraw = function (r436_unicode, r436_u, r436_d, r436_l, r436_r) {
                        var _r436_t0, _r436_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r436_unicode)), r320_MangleUnicode(r436_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
                            var _r439_t0, _r439_t1;
                            r439_currentGlyph.setWidth(r317_MosaicWidth);
                            r439_currentGlyph.include(r312_ForceUpright());
                            var r439_stopH = Math.max(r436_u, r436_d) / 2;
                            var r439_stopV = Math.max(r436_l, r436_r) / 2;
                            if (r436_l) r439_currentGlyph.include(r312_HBar.m(r320_left, r320_midx + r439_stopH, r320_midy, r436_l));
                            if (r436_r) r439_currentGlyph.include(r312_HBar.m(r320_midx - r439_stopH, r320_right, r320_midy, r436_r));
                            if (r436_d) r439_currentGlyph.include(r312_VBar.m(r320_midx, r320_bottom, r320_midy + r439_stopV, r436_d));
                            if (r436_u) r439_currentGlyph.include(r312_VBar.m(r320_midx, r320_midy - r439_stopV, r320_top, r436_u));
                            return void 0;
                        }));
                    };
                    var r320_dlboxdraw = function (r446_unicode, r446_u, r446_d, r446_l, r446_r) {
                        var _r446_t0, _r446_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r446_unicode)), r320_MangleUnicode(r446_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r449_currentGlyph) {
                            var _r449_t0, _r449_t1;
                            r449_currentGlyph.setWidth(r317_MosaicWidth);
                            r449_currentGlyph.include(r312_ForceUpright());
                            var r449_stopH = Math.max(r446_u, r446_d) - r320_light * 1 - r312_HSwToV(0.5 * r320_light);
                            var r449_stopV = Math.max(r446_l, r446_r) - r320_light * 1.5;
                            var r449_capH = Math.max(r446_u, r446_d) - r320_light * 1;
                            var r449_capV = Math.max(r446_l, r446_r) - r320_light * 1;
                            if (r446_l) {
                                r449_currentGlyph.include(r312_HBar.m(r320_left, r320_midx - r449_stopH, r320_midy + (r446_l - r320_light), r320_light));
                                if (r446_l > r320_light) r449_currentGlyph.include(r312_HBar.m(r320_left, r320_midx - r449_stopH, r320_midy - (r446_l - r320_light), r320_light));
                            }
                            if (r446_r) {
                                r449_currentGlyph.include(r312_HBar.m(r320_midx + r449_stopH, r320_right, r320_midy + (r446_r - r320_light), r320_light));
                                if (r446_r > r320_light) r449_currentGlyph.include(r312_HBar.m(r320_midx + r449_stopH, r320_right, r320_midy - (r446_r - r320_light), r320_light));
                            }
                            if (r446_d) {
                                r449_currentGlyph.include(r312_VBar.m(r320_midx + (r446_d - r320_light), r320_bottom, r320_midy - r449_stopV, r320_light));
                                if (r446_d > r320_light) r449_currentGlyph.include(r312_VBar.m(r320_midx - (r446_d - r320_light), r320_bottom, r320_midy - r449_stopV, r320_light));
                            }
                            if (r446_u) {
                                r449_currentGlyph.include(r312_VBar.m(r320_midx + (r446_u - r320_light), r320_midy + r449_stopV, r320_top, r320_light));
                                if (r446_u > r320_light) r449_currentGlyph.include(r312_VBar.m(r320_midx - (r446_u - r320_light), r320_midy + r449_stopV, r320_top, r320_light));
                            }
                            if (r449_stopH > 0 && !r446_u) r449_currentGlyph.include(r312_HBar.m(r320_midx - r449_stopH - r312_HSwToV(r320_light), r320_midx + r449_stopH + r312_HSwToV(r320_light), r320_midy + r449_capV, r320_light));
                            if (r449_stopH > 0 && !r446_d) r449_currentGlyph.include(r312_HBar.m(r320_midx - r449_stopH - r312_HSwToV(r320_light), r320_midx + r449_stopH + r312_HSwToV(r320_light), r320_midy - r449_capV, r320_light));
                            if (r449_stopV > 0 && !r446_l) r449_currentGlyph.include(r312_VBar.m(r320_midx - r449_capH, r320_midy - r449_stopV - r320_light, r320_midy + r449_stopV + r320_light, r320_light));
                            if (r449_stopV > 0 && !r446_r) r449_currentGlyph.include(r312_VBar.m(r320_midx + r449_capH, r320_midy - r449_stopV - r320_light, r320_midy + r449_stopV + r320_light, r320_light));
                            return void 0;
                        }));
                    };
                    var r320_complexBoxDraw = function (r464_unicodeStart, r464_U, r464_D, r464_L, r464_R, r464_fn, r464_dl) {
                        var r464_u, r464_d, r464_l, r464_r, r464_newcome, r464_masked, r464_existing, _r464_t3, _r464_t4, _r464_t5, _r464_t6, _r464_t7, _r464_t8, _r464_t10;
                        var r464_order = [[r320_light, r320_light, r320_light, r320_light], [r320_light, r320_light, r320_heavy, r320_light], [r320_light, r320_light, r320_light, r320_heavy], [r320_light, r320_light, r320_heavy, r320_heavy], [r320_heavy, r320_light, r320_light, r320_light], [r320_light, r320_heavy, r320_light, r320_light], [r320_heavy, r320_heavy, r320_light, r320_light], [r320_heavy, r320_light, r320_heavy, r320_light], [r320_heavy, r320_light, r320_light, r320_heavy], [r320_light, r320_heavy, r320_heavy, r320_light], [r320_light, r320_heavy, r320_light, r320_heavy], [r320_heavy, r320_light, r320_heavy, r320_heavy], [r320_light, r320_heavy, r320_heavy, r320_heavy], [r320_heavy, r320_heavy, r320_heavy, r320_light], [r320_heavy, r320_heavy, r320_light, r320_heavy], [r320_heavy, r320_heavy, r320_heavy, r320_heavy]];
                        var r464_existings = [];
                        var r464_n = 0;
                        var _r464_t0 = r464_order;
                        var _r464_t1 = _r464_t0.length;
                        var _r464_t2 = 0;
                        var _r464_t9 = _r464_t2 < _r464_t1;
                        while (_r464_t9) {
                            _r464_t3 = _r464_t0[_r464_t2];
                            r464_u = _r464_t3[0];
                            r464_d = _r464_t3[1];
                            r464_l = _r464_t3[2];
                            r464_r = _r464_t3[3];
                            r464_newcome = true;
                            r464_masked = [r464_U * r464_u, r464_D * r464_d, r464_L * r464_l, r464_R * r464_r];
                            _r464_t4 = r464_existings;
                            _r464_t5 = _r464_t4.length;
                            _r464_t6 = 0;
                            while (_r464_t6 < _r464_t5) {
                                r464_existing = _r464_t4[_r464_t6];
                                if ("" + r464_existing === "" + r464_masked) r464_newcome = false;
                                _r464_t6 = _r464_t6 + 1;
                            }
                            if (r464_newcome) {
                                if (!r464_dl || (!r464_masked[0] || !r464_masked[1] || r464_masked[0] === r464_masked[1]) && (!r464_masked[2] || !r464_masked[3] || r464_masked[2] === r464_masked[3]) && (r464_masked[0] > r320_light || r464_masked[1] > r320_light || r464_masked[2] > r320_light || r464_masked[3] > r320_light)) {
                                    r1_fallback(r464_fn, r320_boxdraw).apply(null, [r464_unicodeStart + r464_n].concat(r464_masked));
                                    r464_n = r464_n + 1;
                                }
                                r464_existings.push(r464_masked);
                            }
                            _r464_t10 = _r464_t2 = _r464_t2 + 1;
                            _r464_t9 = _r464_t2 < _r464_t1;
                        }
                        return _r464_t10;
                    };
                    r320_boxdraw(9472, 0, 0, r320_light, r320_light);
                    r320_boxdraw(9473, 0, 0, r320_heavy, r320_heavy);
                    r320_boxdraw(9474, r320_light, r320_light, 0, 0);
                    r320_boxdraw(9475, r320_heavy, r320_heavy, 0, 0);
                    r320_boxdraw(9588, 0, 0, r320_light, 0);
                    r320_boxdraw(9589, r320_light, 0, 0, 0);
                    r320_boxdraw(9590, 0, 0, 0, r320_light);
                    r320_boxdraw(9591, 0, r320_light, 0, 0);
                    r320_boxdraw(9592, 0, 0, r320_heavy, 0);
                    r320_boxdraw(9593, r320_heavy, 0, 0, 0);
                    r320_boxdraw(9594, 0, 0, 0, r320_heavy);
                    r320_boxdraw(9595, 0, r320_heavy, 0, 0);
                    r320_boxdraw(9596, 0, 0, r320_light, r320_heavy);
                    r320_boxdraw(9597, r320_light, r320_heavy, 0, 0);
                    r320_boxdraw(9598, 0, 0, r320_heavy, r320_light);
                    r320_boxdraw(9599, r320_heavy, r320_light, 0, 0);
                    r320_dlboxdraw(9552, 0, 0, r320_heavy, r320_heavy);
                    r320_dlboxdraw(9553, r320_heavy, r320_heavy, 0, 0);
                    r320_complexBoxDraw(9484, 0, 1, 0, 1);
                    r320_complexBoxDraw(9488, 0, 1, 1, 0);
                    r320_complexBoxDraw(9492, 1, 0, 0, 1);
                    r320_complexBoxDraw(9496, 1, 0, 1, 0);
                    r320_complexBoxDraw(9500, 1, 1, 0, 1);
                    r320_complexBoxDraw(9508, 1, 1, 1, 0);
                    r320_complexBoxDraw(9516, 0, 1, 1, 1);
                    r320_complexBoxDraw(9524, 1, 0, 1, 1);
                    r320_complexBoxDraw(9532, 1, 1, 1, 1);
                    r320_complexBoxDraw(9554, 0, 1, 0, 1, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9557, 0, 1, 1, 0, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9560, 1, 0, 0, 1, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9563, 1, 0, 1, 0, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9566, 1, 1, 0, 1, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9569, 1, 1, 1, 0, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9572, 0, 1, 1, 1, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9575, 1, 0, 1, 1, r320_dlboxdraw, 1);
                    r320_complexBoxDraw(9578, 1, 1, 1, 1, r320_dlboxdraw, 1);
                    var r320_hDashed = function (r467_unicode, r467_segments, r467_weight) {
                        var _r467_t0, _r467_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r467_unicode)), r320_MangleUnicode(r467_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r470_currentGlyph) {
                            var _r470_t2, _r470_t3;
                            r470_currentGlyph.setWidth(r317_MosaicWidth);
                            r470_currentGlyph.include(r312_ForceUpright());
                            var _r470_t0 = 0;
                            var _r470_t1 = r467_segments;
                            var r470_j = _r470_t0;
                            while (r470_j < _r470_t1) {
                                r470_currentGlyph.include(r312_HBar.m(r1_mix(r317_MosaicWidth * r470_j / r467_segments, r317_MosaicWidth * (r470_j + 1) / r467_segments, 0.2), r1_mix(r317_MosaicWidth * r470_j / r467_segments, r317_MosaicWidth * (r470_j + 1) / r467_segments, 0.8), r320_midy, r467_weight));
                                r470_j = r470_j + 1;
                            }
                            return void 0;
                        }));
                    };
                    var r320_vDashed = function (r475_unicode, r475_segments, r475_weight) {
                        var _r475_t0, _r475_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r475_unicode)), r320_MangleUnicode(r475_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
                            var _r478_t2, _r478_t3;
                            r478_currentGlyph.setWidth(r317_MosaicWidth);
                            r478_currentGlyph.include(r312_ForceUpright());
                            var _r478_t0 = 0;
                            var _r478_t1 = r475_segments;
                            var r478_j = _r478_t0;
                            while (r478_j < _r478_t1) {
                                r478_currentGlyph.include(r312_VBar.m(r320_midx, r1_mix(r1_mix(r320_bottom, r320_top, r478_j / r475_segments), r1_mix(r320_bottom, r320_top, (r478_j + 1) / r475_segments), 0.2), r1_mix(r1_mix(r320_bottom, r320_top, r478_j / r475_segments), r1_mix(r320_bottom, r320_top, (r478_j + 1) / r475_segments), 0.8), r475_weight));
                                r478_j = r478_j + 1;
                            }
                            return void 0;
                        }));
                    };
                    r320_hDashed(9476, 3, r320_light);
                    r320_hDashed(9477, 3, r320_heavy);
                    r320_hDashed(9480, 4, r320_light);
                    r320_hDashed(9481, 4, r320_heavy);
                    r320_hDashed(9548, 2, r320_light);
                    r320_hDashed(9549, 2, r320_heavy);
                    r320_vDashed(9478, 3, r320_light);
                    r320_vDashed(9479, 3, r320_heavy);
                    r320_vDashed(9482, 4, r320_light);
                    r320_vDashed(9483, 4, r320_heavy);
                    r320_vDashed(9550, 2, r320_light);
                    r320_vDashed(9551, 2, r320_heavy);
                    var r320_bdArcRadius = Math.min(r320_midx + r312_O * 2, (r320_midy - r320_bottom) / 2);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(9581)), r320_MangleUnicode(9581), new r312_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
                        var _r485_t0, _r485_t1;
                        r485_currentGlyph.setWidth(r317_MosaicWidth);
                        r485_currentGlyph.include(r312_ForceUpright());
                        r485_currentGlyph.include(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_midx, r320_bottom, r312_heading(r312_Upward)), r312_curl(r320_midx, r320_midy - r320_bdArcRadius, r312_heading(r312_Upward)), r312_arcvh(), r312_flat(r320_midx + r320_bdArcRadius, r320_midy, r312_heading(r312_Rightward)), r312_curl(r320_right, r320_midy, r312_heading(r312_Rightward))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(9582)), r320_MangleUnicode(9582), new r312_xn$Capture$2Lrc8.GlyphProc(function (r491_currentGlyph) {
                        var _r491_t0, _r491_t1;
                        r491_currentGlyph.setWidth(r317_MosaicWidth);
                        r491_currentGlyph.include(r312_ForceUpright());
                        r491_currentGlyph.include(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_midx, r320_bottom, r312_heading(r312_Upward)), r312_curl(r320_midx, r320_midy - r320_bdArcRadius, r312_heading(r312_Upward)), r312_arcvh(), r312_flat(r320_midx - r320_bdArcRadius, r320_midy, r312_heading(r312_Leftward)), r312_curl(r320_left, r320_midy, r312_heading(r312_Leftward))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(9583)), r320_MangleUnicode(9583), new r312_xn$Capture$2Lrc8.GlyphProc(function (r497_currentGlyph) {
                        var _r497_t0, _r497_t1;
                        r497_currentGlyph.setWidth(r317_MosaicWidth);
                        r497_currentGlyph.include(r312_ForceUpright());
                        r497_currentGlyph.include(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_midx, r320_top, r312_heading(r312_Downward)), r312_curl(r320_midx, r320_midy + r320_bdArcRadius, r312_heading(r312_Downward)), r312_arcvh(), r312_flat(r320_midx - r320_bdArcRadius, r320_midy, r312_heading(r312_Leftward)), r312_curl(r320_left, r320_midy, r312_heading(r312_Leftward))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(9584)), r320_MangleUnicode(9584), new r312_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                        var _r503_t0, _r503_t1;
                        r503_currentGlyph.setWidth(r317_MosaicWidth);
                        r503_currentGlyph.include(r312_ForceUpright());
                        r503_currentGlyph.include(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_midx, r320_top, r312_heading(r312_Downward)), r312_curl(r320_midx, r320_midy + r320_bdArcRadius, r312_heading(r312_Downward)), r312_arcvh(), r312_flat(r320_midx + r320_bdArcRadius, r320_midy, r312_heading(r312_Rightward)), r312_curl(r320_right, r320_midy, r312_heading(r312_Rightward))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(9585)), r320_MangleUnicode(9585), new r312_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                        var _r509_t0, _r509_t1;
                        r509_currentGlyph.setWidth(r317_MosaicWidth);
                        r509_currentGlyph.include(r312_ForceUpright());
                        r509_currentGlyph.include(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_right, r320_top), r312_curl(r320_left, r320_bottom)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(9586)), r320_MangleUnicode(9586), new r312_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                        var _r515_t0, _r515_t1;
                        r515_currentGlyph.setWidth(r317_MosaicWidth);
                        r515_currentGlyph.include(r312_ForceUpright());
                        r515_currentGlyph.include(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_left, r320_top), r312_curl(r320_right, r320_bottom)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(9587)), r320_MangleUnicode(9587), new r312_xn$Capture$2Lrc8.GlyphProc(function (r521_currentGlyph) {
                        var _r521_t0, _r521_t1;
                        r521_currentGlyph.setWidth(r317_MosaicWidth);
                        r521_currentGlyph.include(r312_ForceUpright());
                        r521_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9585))));
                        r521_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9586))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130008)), r320_MangleUnicode(130008), new r312_xn$Capture$2Lrc8.GlyphProc(function (r528_currentGlyph) {
                        var _r528_t0, _r528_t1;
                        r528_currentGlyph.setWidth(r317_MosaicWidth);
                        r528_currentGlyph.include(r312_ForceUpright());
                        r528_currentGlyph.include(r312_intersection(r312_MaskRight(r320_midx), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9585)))));
                        r528_currentGlyph.include(r312_intersection(r312_MaskLeft(r320_midx), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9586)))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130009)), r320_MangleUnicode(130009), new r312_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
                        var _r535_t0, _r535_t1;
                        r535_currentGlyph.setWidth(r317_MosaicWidth);
                        r535_currentGlyph.include(r312_ForceUpright());
                        r535_currentGlyph.include(r312_intersection(r312_MaskAbove(r320_midy), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9585)))));
                        r535_currentGlyph.include(r312_intersection(r312_MaskBelow(r320_midy), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9586)))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130010)), r320_MangleUnicode(130010), new r312_xn$Capture$2Lrc8.GlyphProc(function (r542_currentGlyph) {
                        var _r542_t0, _r542_t1;
                        r542_currentGlyph.setWidth(r317_MosaicWidth);
                        r542_currentGlyph.include(r312_ForceUpright());
                        r542_currentGlyph.include(r312_intersection(r312_MaskLeft(r320_midx), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9585)))));
                        r542_currentGlyph.include(r312_intersection(r312_MaskRight(r320_midx), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9586)))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130011)), r320_MangleUnicode(130011), new r312_xn$Capture$2Lrc8.GlyphProc(function (r549_currentGlyph) {
                        var _r549_t0, _r549_t1;
                        r549_currentGlyph.setWidth(r317_MosaicWidth);
                        r549_currentGlyph.include(r312_ForceUpright());
                        r549_currentGlyph.include(r312_intersection(r312_MaskBelow(r320_midy), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9585)))));
                        r549_currentGlyph.include(r312_intersection(r312_MaskAbove(r320_midy), r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9586)))));
                        return void 0;
                    }));
                    var r320_DiamondBarRaw = function (r554_hStart, r554_vStart, r554_hEnd, r554_vEnd) {
                        var _r554_t0, _r554_t1;
                        var r554_zStartX = r1_mix(r320_left, r320_right, r554_hStart);
                        var r554_zStartY = r1_mix(r320_bottom, r320_top, r554_vStart);
                        var r554_zEndX = r1_mix(r320_left, r320_right, r554_hEnd);
                        var r554_zEndY = r1_mix(r320_bottom, r320_top, r554_vEnd);
                        return r312_dispiro(r312_widths.center(r320_light), r312_corner(r1_mix(r554_zStartX, r554_zEndX, -1), r1_mix(r554_zStartY, r554_zEndY, -1)), r312_corner(r1_mix(r554_zStartX, r554_zEndX, +2), r1_mix(r554_zStartY, r554_zEndY, +2)));
                    };
                    var r320_DiamondMask = function () {
                        var _r555_t0, _r555_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r1_mix(r320_left, r320_right, 0), r1_mix(r320_bottom, r320_top, 0)), r312_corner(r1_mix(r320_left, r320_right, 0), r1_mix(r320_bottom, r320_top, 1)), r312_corner(r1_mix(r320_left, r320_right, 1), r1_mix(r320_bottom, r320_top, 1)), r312_corner(r1_mix(r320_left, r320_right, 1), r1_mix(r320_bottom, r320_top, 0)));
                    };
                    var r320_DiamondBoxDrawing = function (r556_unicode, r556_a, r556_b, r556_c, r556_d) {
                        var _r556_t0, _r556_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r556_unicode)), r320_MangleUnicode(r556_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r559_currentGlyph) {
                            var _r559_t0, _r559_t1;
                            var r559_candidates = [];
                            if (r556_a) r559_candidates.push(r320_DiamondBarRaw(0.5, 1, 0, 0.5));
                            if (r556_b) r559_candidates.push(r320_DiamondBarRaw(1, 0.5, 0.5, 1));
                            if (r556_c) r559_candidates.push(r320_DiamondBarRaw(0, 0.5, 0.5, 0));
                            if (r556_d) r559_candidates.push(r320_DiamondBarRaw(0.5, 0, 1, 0.5));
                            r559_currentGlyph.setWidth(r317_MosaicWidth);
                            r559_currentGlyph.include(r312_ForceUpright());
                            r559_currentGlyph.include(r312_intersection(r320_DiamondMask(), r312_union.apply(null, r559_candidates)));
                            return void 0;
                        }));
                    };
                    r320_DiamondBoxDrawing(129952, 1, 0, 0, 0);
                    r320_DiamondBoxDrawing(129953, 0, 1, 0, 0);
                    r320_DiamondBoxDrawing(129954, 0, 0, 1, 0);
                    r320_DiamondBoxDrawing(129955, 0, 0, 0, 1);
                    r320_DiamondBoxDrawing(129956, 1, 0, 1, 0);
                    r320_DiamondBoxDrawing(129957, 0, 1, 0, 1);
                    r320_DiamondBoxDrawing(129958, 0, 0, 1, 1);
                    r320_DiamondBoxDrawing(129959, 1, 1, 0, 0);
                    r320_DiamondBoxDrawing(129960, 1, 0, 0, 1);
                    r320_DiamondBoxDrawing(129961, 0, 1, 1, 0);
                    r320_DiamondBoxDrawing(129962, 0, 1, 1, 1);
                    r320_DiamondBoxDrawing(129963, 1, 0, 1, 1);
                    r320_DiamondBoxDrawing(129964, 1, 1, 0, 1);
                    r320_DiamondBoxDrawing(129965, 1, 1, 1, 0);
                    r320_DiamondBoxDrawing(129966, 1, 1, 1, 1);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(118281)), r320_MangleUnicode(118281), new r312_xn$Capture$2Lrc8.GlyphProc(function (r565_currentGlyph) {
                        var _r565_t0, _r565_t1;
                        r565_currentGlyph.setWidth(r317_MosaicWidth);
                        r565_currentGlyph.include(r312_ForceUpright());
                        r565_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(129959))));
                        r565_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130010))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(118282)), r320_MangleUnicode(118282), new r312_xn$Capture$2Lrc8.GlyphProc(function (r572_currentGlyph) {
                        var _r572_t0, _r572_t1;
                        r572_currentGlyph.setWidth(r317_MosaicWidth);
                        r572_currentGlyph.include(r312_ForceUpright());
                        r572_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(129958))));
                        r572_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130008))));
                        return void 0;
                    }));
                    var r320_VDiagonal = function (r577_unicode, r577_sx, r577_sy) {
                        var _r577_t0, _r577_t1;
                        var r577_fUpwards = r577_sy === r320_bottom;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r577_unicode)), r320_MangleUnicode(r577_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r580_currentGlyph) {
                            var _r580_t0, _r580_t1;
                            r580_currentGlyph.setWidth(r317_MosaicWidth);
                            r580_currentGlyph.include(r312_ForceUpright());
                            r580_currentGlyph.include(r312_intersection(r577_fUpwards ? r312_MaskBelow(r320_top) : r312_MaskAbove(r320_bottom), r312_dispiro(r312_widths.center(r320_light), r312_flat(r577_sx, r577_sy), r312_curl(r1_mix(r577_sx, r320_midx, 1.5), r1_mix(r577_sy, r577_fUpwards ? r320_top : r320_bottom, 1.5)))));
                            return void 0;
                        }));
                    };
                    var r320_HDiagonal = function (r584_unicode, r584_sx, r584_sy) {
                        var _r584_t0, _r584_t1;
                        var r584_fRightwards = r584_sx === r320_left;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r584_unicode)), r320_MangleUnicode(r584_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r587_currentGlyph) {
                            var _r587_t0, _r587_t1;
                            r587_currentGlyph.setWidth(r317_MosaicWidth);
                            r587_currentGlyph.include(r312_ForceUpright());
                            r587_currentGlyph.include(r312_intersection(r584_fRightwards ? r312_MaskLeft(r320_right) : r312_MaskRight(r320_left), r312_dispiro(r312_widths.center(r320_light), r312_flat(r584_sx, r584_sy), r312_curl(r1_mix(r584_sx, r584_fRightwards ? r320_right : r320_left, 1.5), r1_mix(r584_sy, r320_midy, 1.5)))));
                            return void 0;
                        }));
                    };
                    r320_HDiagonal(130000, r320_left, r320_bottom);
                    r320_HDiagonal(130001, r320_right, r320_top);
                    r320_HDiagonal(130002, r320_left, r320_top);
                    r320_HDiagonal(130003, r320_right, r320_bottom);
                    r320_VDiagonal(130004, r320_left, r320_top);
                    r320_VDiagonal(130005, r320_right, r320_bottom);
                    r320_VDiagonal(130006, r320_right, r320_top);
                    r320_VDiagonal(130007, r320_left, r320_bottom);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130012)), r320_MangleUnicode(130012), new r312_xn$Capture$2Lrc8.GlyphProc(function (r593_currentGlyph) {
                        var _r593_t0, _r593_t1;
                        r593_currentGlyph.setWidth(r317_MosaicWidth);
                        r593_currentGlyph.include(r312_ForceUpright());
                        r593_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130004))));
                        r593_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130006))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130013)), r320_MangleUnicode(130013), new r312_xn$Capture$2Lrc8.GlyphProc(function (r600_currentGlyph) {
                        var _r600_t0, _r600_t1;
                        r600_currentGlyph.setWidth(r317_MosaicWidth);
                        r600_currentGlyph.include(r312_ForceUpright());
                        r600_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130001))));
                        r600_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130003))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130014)), r320_MangleUnicode(130014), new r312_xn$Capture$2Lrc8.GlyphProc(function (r607_currentGlyph) {
                        var _r607_t0, _r607_t1;
                        r607_currentGlyph.setWidth(r317_MosaicWidth);
                        r607_currentGlyph.include(r312_ForceUpright());
                        r607_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130005))));
                        r607_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130007))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(130015)), r320_MangleUnicode(130015), new r312_xn$Capture$2Lrc8.GlyphProc(function (r614_currentGlyph) {
                        var _r614_t0, _r614_t1;
                        r614_currentGlyph.setWidth(r317_MosaicWidth);
                        r614_currentGlyph.include(r312_ForceUpright());
                        r614_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130000))));
                        r614_currentGlyph.include(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(130002))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117791)), r320_MangleUnicode(117791), new r312_xn$Capture$2Lrc8.GlyphProc(function (r621_currentGlyph) {
                        var _r621_t0, _r621_t1;
                        r621_currentGlyph.setWidth(r317_MosaicWidth);
                        r621_currentGlyph.include(r312_ForceUpright());
                        var r621_offset = (r320_top - r320_bottom) / 4;
                        r621_currentGlyph.include(r312_intersection(r320_DiamondMask(), r312_union(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_right, r320_top + r621_offset), r312_curl(r1_mix(r320_right, r320_left, 1.5), r1_mix(r320_top, r320_bottom, 1.5) + r621_offset)), r312_dispiro(r312_widths.center(r320_light), r312_flat(r1_mix(r320_left, r320_right, 1.5), r1_mix(r320_bottom, r320_top, 1.5) - r621_offset), r312_curl(r320_left, r320_bottom - r621_offset)))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(117792)), r320_MangleUnicode(117792), new r312_xn$Capture$2Lrc8.GlyphProc(function (r627_currentGlyph) {
                        var _r627_t0, _r627_t1;
                        r627_currentGlyph.setWidth(r317_MosaicWidth);
                        r627_currentGlyph.include(r312_ForceUpright());
                        var r627_offset = (r320_top - r320_bottom) / 4;
                        r627_currentGlyph.include(r312_intersection(r320_DiamondMask(), r312_union(r312_dispiro(r312_widths.center(r320_light), r312_flat(r320_left, r320_top + r627_offset), r312_curl(r1_mix(r320_left, r320_right, 1.5), r1_mix(r320_top, r320_bottom, 1.5) + r627_offset)), r312_dispiro(r312_widths.center(r320_light), r312_flat(r1_mix(r320_right, r320_left, 1.5), r1_mix(r320_bottom, r320_top, 1.5) - r627_offset), r312_curl(r320_right, r320_bottom - r627_offset)))));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(129967)), r320_MangleUnicode(129967), new r312_xn$Capture$2Lrc8.GlyphProc(function (r633_currentGlyph) {
                        var _r633_t0, _r633_t1;
                        r633_currentGlyph.setWidth(r317_MosaicWidth);
                        r633_currentGlyph.include(r312_ForceUpright());
                        r633_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao(r320_MangleName(r312_NameUni(9532))), r312_Rect(r1_mix(r320_bottom, r320_top, 0.35), r1_mix(r320_bottom, r320_top, 0.65), 0, r317_MosaicWidth)));
                        return void 0;
                    }));
                })();
                _r317_t5 = _r317_t2 = _r317_t2 + 1;
                _r317_t4 = _r317_t2 < _r317_t1;
            }
            return _r317_t5;
        })();
    });
    return void 0;
});


