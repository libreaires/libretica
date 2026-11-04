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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-IEC-Power-And-Playback", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_Translate = _r312_t1.Translate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
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
        return (function () {
            var r315_FMosaicWide, r315_MosaicNameSuffix, r315_MosaicWidth, r315_MosaicWidthScalar, _r315_t3, _r315_t5, _r315_t6, _r315_tag7;
            var r315_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r315_t0 = r315_WidthKinds;
            var _r315_t1 = _r315_t0.length;
            var _r315_t2 = 0;
            var _r315_t4 = _r315_t2 < _r315_t1;
            while (_r315_t4) {
                _r315_t3 = _r315_t0[_r315_t2];
                r315_FMosaicWide = _r315_t3[0];
                r315_MosaicNameSuffix = _r315_t3[1];
                r315_MosaicWidth = _r315_t3[2];
                r315_MosaicWidthScalar = _r315_t3[3];
                (function () {
                    var r318_MosaicDesiredWidth = r312_WideWidth1;
                    var r318_MosaicMiddle = r315_MosaicWidth / 2;
                    var r318_MosaicUnitWidth = r315_MosaicWidth / r315_MosaicWidthScalar;
                    var r318_MangleUnicode = function (r319_unicode, r319__desiredOverride) {
                        var _r319_t0, _r319_t1;
                        return r315_MosaicWidth === (r319__desiredOverride || r318_MosaicDesiredWidth) ? r319_unicode : void 0;
                    };
                    var r318_MangleName = function (r320_name) {
                        var _r320_t0, _r320_t1;
                        return r320_name + r315_MosaicNameSuffix;
                    };
                    var _r318_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r318_Rect = _r318_t0.Rect;
                    var r318_RingAt = _r318_t0.RingAt;
                    var r318_RingStrokeAt = _r318_t0.RingStrokeAt;
                    var r318_Circle = _r318_t0.Circle;
                    var r318_VBar = _r318_t0.VBar;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_xn$referglyph$1aao = _r318_t1["refer-glyph"];
                    var r318_turned = _r318_t1.turned;
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r318_GeometricDim = _r318_t2.GeometricDim;
                    var r318_GeometricSizes = _r318_t2.GeometricSizes;
                    var r318_Geom = r318_GeometricDim(r318_MosaicUnitWidth, r315_MosaicWidth);
                    var r318_Size = r318_GeometricSizes(r318_Geom);
                    var r318_gap = Math.max(r318_Geom.Size / 8 * r315_MosaicWidthScalar, r312_GeometryStroke);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("powerOff"), r318_MangleUnicode(11096), new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                        var _r326_t0, _r326_t1;
                        r326_currentGlyph.setWidth(r318_Geom.Width);
                        r326_currentGlyph.include(r318_RingStrokeAt(r318_Geom.MidX, r318_Geom.MidY, r318_Geom.Size, r312_GeometryStroke));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("heavyCircledSaltire"), r318_MangleUnicode(11097), new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                        var _r331_t0, _r331_t1;
                        r331_currentGlyph.setWidth(r318_Geom.Width);
                        r331_currentGlyph.include(r318_RingStrokeAt(r318_Geom.MidX, r318_Geom.MidY, r318_Geom.Size, r312_GeometryStroke));
                        r331_currentGlyph.include(r312_intersection(r318_RingAt(r318_Geom.MidX, r318_Geom.MidY, r318_Geom.Size), r312_union(r312_dispiro(r312_widths.center(r312_GeometryStroke), r312_flat(r318_Geom.Left, r318_Geom.Top), r312_curl(r318_Geom.Right, r318_Geom.Bot)), r312_dispiro(r312_widths.center(r312_GeometryStroke), r312_flat(r318_Geom.Left, r318_Geom.Bot), r312_curl(r318_Geom.Right, r318_Geom.Top)))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("powerOn"), r318_MangleUnicode(9213), new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                        var _r337_t0, _r337_t1;
                        r337_currentGlyph.setWidth(r318_Geom.Width);
                        r337_currentGlyph.include(r318_Rect(r318_Geom.MidY + r318_Geom.Size, r318_Geom.MidY - r318_Geom.Size, r318_Geom.MidX - r312_HSwToV(0.5 * r312_GeometryStroke), r318_Geom.MidX + r312_HSwToV(0.5 * r312_GeometryStroke)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("powerOnOff"), r318_MangleUnicode(9212), new r312_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                        var _r342_t0, _r342_t1;
                        r342_currentGlyph.setWidth(r318_Geom.Width);
                        r342_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("powerOff")));
                        r342_currentGlyph.include(r318_Rect(r318_Geom.MidY + r318_Geom.Size - r312_GeometryStroke - r318_gap, r318_Geom.MidY - r318_Geom.Size + r312_GeometryStroke + r318_gap, r318_Geom.MidX - r312_HSwToV(0.5 * r312_GeometryStroke), r318_Geom.MidX + r312_HSwToV(0.5 * r312_GeometryStroke)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("powerStandby"), r318_MangleUnicode(9211), new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                        var _r348_t0, _r348_t1;
                        r348_currentGlyph.setWidth(r318_Geom.Width);
                        r348_currentGlyph.include(r312_union(r312_difference(r318_xn$referglyph$1aao(r318_MangleName("powerOff")), r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX, r318_Geom.MidY), r312_corner(r318_Geom.MidX - r318_gap * 4 - r312_HSwToV(r312_GeometryStroke), r318_Geom.MidY + r318_Geom.Size * 2), r312_corner(r318_Geom.MidX + r318_gap * 4 + r312_HSwToV(r312_GeometryStroke), r318_Geom.MidY + r318_Geom.Size * 2))), r318_Rect(r318_Geom.MidY + 1.125 * r318_Geom.Size, r318_Geom.MidY - 0 * r318_Geom.Size, r318_Geom.MidX - r312_HSwToV(0.5 * r312_GeometryStroke), r318_Geom.MidX + r312_HSwToV(0.5 * r312_GeometryStroke))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("powerSleep"), r318_MangleUnicode(9214), new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                        var _r353_t0, _r353_t1;
                        r353_currentGlyph.setWidth(r318_Geom.Width);
                        r353_currentGlyph.include(r312_difference(r318_Circle.Outline.At(r318_Geom.MidX, r318_Geom.MidY, r318_Geom.Size), r318_Circle.Outline.At(r318_Geom.MidX + r318_Geom.Size * 0.5, r318_Geom.MidY + r318_Geom.Size * 0.35, r318_Geom.Size * 1.1)));
                        r353_currentGlyph.include(r312_Translate(r318_Geom.Size * 0.15, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/record"), r318_MangleUnicode(9210), new r312_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                        var _r359_t0, _r359_t1;
                        r359_currentGlyph.setWidth(r318_Geom.Width);
                        r359_currentGlyph.include(r318_RingAt(r318_Geom.MidX, r318_Geom.MidY, r318_Geom.Size, r312_GeometryStroke));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/stop"), r318_MangleUnicode(9209), new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                        var _r364_t0, _r364_t1;
                        r364_currentGlyph.setWidth(r318_Geom.Width);
                        r364_currentGlyph.include(r318_Rect(r318_Geom.MidY + r318_Geom.Size, r318_Geom.MidY - r318_Geom.Size, r318_Geom.MidX - r318_Geom.Size, r318_Geom.MidX + r318_Geom.Size));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/pause"), r318_MangleUnicode(9208), new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                        var _r369_t0, _r369_t1;
                        r369_currentGlyph.setWidth(r318_Geom.Width);
                        r369_currentGlyph.include(r318_Rect(r318_Geom.MidY + r318_Geom.Size, r318_Geom.MidY - r318_Geom.Size, r318_Geom.MidX - r318_Geom.Size, r318_Geom.MidX - r318_Geom.Size / 3));
                        r369_currentGlyph.include(r318_Rect(r318_Geom.MidY + r318_Geom.Size, r318_Geom.MidY - r318_Geom.Size, r318_Geom.MidX + r318_Geom.Size / 3, r318_Geom.MidX + r318_Geom.Size));
                        return void 0;
                    }));
                    var r318_trigRad = r318_Geom.Size - r312_O;
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/down"), r318_MangleUnicode(9207), new r312_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                        var _r375_t0, _r375_t1;
                        r375_currentGlyph.setWidth(r318_Geom.Width);
                        r375_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY + r318_trigRad / 2), r312_corner(r318_Geom.MidX + r318_trigRad, r318_Geom.MidY + r318_trigRad / 2), r312_corner(r318_Geom.MidX, r318_Geom.MidY - r318_trigRad / 2)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/up"), r318_MangleUnicode(9206), new r312_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                        var _r380_t0, _r380_t1;
                        r380_currentGlyph.setWidth(r318_Geom.Width);
                        r380_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY - r318_trigRad / 2), r312_corner(r318_Geom.MidX + r318_trigRad, r318_Geom.MidY - r318_trigRad / 2), r312_corner(r318_Geom.MidX, r318_Geom.MidY + r318_trigRad / 2)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/right"), r318_MangleUnicode(9205), new r312_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                        var _r385_t0, _r385_t1;
                        r385_currentGlyph.setWidth(r318_Geom.Width);
                        r385_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad / 2, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX - r318_trigRad / 2, r318_Geom.MidY + r318_trigRad), r312_corner(r318_Geom.MidX + r318_trigRad / 2, r318_Geom.MidY)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/left"), r318_MangleUnicode(9204), new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                        var _r390_t0, _r390_t1;
                        r390_currentGlyph.setWidth(r318_Geom.Width);
                        r390_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX + r318_trigRad / 2, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX + r318_trigRad / 2, r318_Geom.MidY + r318_trigRad), r312_corner(r318_Geom.MidX - r318_trigRad / 2, r318_Geom.MidY)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/eject"), r318_MangleUnicode(9167), new r312_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                        var _r395_t0, _r395_t1;
                        r395_currentGlyph.setWidth(r318_Geom.Width);
                        r395_currentGlyph.include(r318_Rect(r318_Geom.MidY - r318_Geom.Size / 3, r318_Geom.MidY - r318_Geom.Size, r318_Geom.MidX - r318_Geom.Size, r318_Geom.MidX + r318_Geom.Size));
                        r395_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY), r312_corner(r318_Geom.MidX + r318_trigRad, r318_Geom.MidY), r312_corner(r318_Geom.MidX, r318_Geom.MidY + r318_trigRad)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/fastForward"), r318_MangleUnicode(9193), new r312_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                        var _r401_t0, _r401_t1;
                        r401_currentGlyph.setWidth(r318_Geom.Width);
                        r401_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY + r318_trigRad), r312_corner(r318_Geom.MidX, r318_Geom.MidY)));
                        r401_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX, r318_Geom.MidY + r318_trigRad), r312_corner(r318_Geom.MidX + r318_trigRad, r318_Geom.MidY)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/fastForwardToEnd"), r318_MangleUnicode(9197), new r312_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                        var _r407_t0, _r407_t1;
                        r407_currentGlyph.setWidth(r318_Geom.Width);
                        var r407_sw = Math.max(r312_AdviceStroke(6 * Math.sqrt(r318_Geom.Scalar), r318_Geom.Scalar), r318_trigRad / 6);
                        var r407_swh = r312_HSwToV(r407_sw);
                        r407_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY + r318_trigRad), r312_corner(r318_Geom.MidX - r407_swh / 2, r318_Geom.MidY)));
                        r407_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r407_swh / 2, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX - r407_swh / 2, r318_Geom.MidY + r318_trigRad), r312_corner(r318_Geom.MidX + r318_trigRad - r407_swh, r318_Geom.MidY)));
                        r407_currentGlyph.include(r318_VBar.r(r318_Geom.MidX + r318_trigRad, r318_Geom.MidY - r318_trigRad, r318_Geom.MidY + r318_trigRad, r407_sw));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/playOrStop"), r318_MangleUnicode(9199), new r312_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                        var _r414_t0, _r414_t1;
                        r414_currentGlyph.setWidth(r318_Geom.Width);
                        var r414_sw = Math.max(r312_AdviceStroke(6 * Math.sqrt(r318_Geom.Scalar), r318_Geom.Scalar), r318_trigRad / 6);
                        var r414_swh = r312_HSwToV(r414_sw);
                        var r414_gap = Math.max(r312_AdviceStroke(4 * Math.sqrt(r318_Geom.Scalar), r318_Geom.Scalar), r318_trigRad / 4);
                        var r414_width = r318_trigRad + r414_swh * 2 + r414_gap;
                        r414_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r414_width / 2, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX - r414_width / 2, r318_Geom.MidY + r318_trigRad), r312_corner(r318_Geom.MidX - r414_width / 2 + r318_trigRad, r318_Geom.MidY)));
                        r414_currentGlyph.include(r318_VBar.r(r318_Geom.MidX + r414_width / 2 - r414_swh - r414_gap, r318_Geom.MidY - r318_trigRad, r318_Geom.MidY + r318_trigRad, r414_sw));
                        r414_currentGlyph.include(r318_VBar.r(r318_Geom.MidX + r414_width / 2, r318_Geom.MidY - r318_trigRad, r318_Geom.MidY + r318_trigRad, r414_sw));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("playback/fastUpward"), r318_MangleUnicode(9195), new r312_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
                        var _r421_t0, _r421_t1;
                        r421_currentGlyph.setWidth(r318_Geom.Width);
                        r421_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX + r318_trigRad, r318_Geom.MidY - r318_trigRad), r312_corner(r318_Geom.MidX, r318_Geom.MidY)));
                        r421_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r318_Geom.MidX - r318_trigRad, r318_Geom.MidY), r312_corner(r318_Geom.MidX + r318_trigRad, r318_Geom.MidY), r312_corner(r318_Geom.MidX, r318_Geom.MidY + r318_trigRad)));
                        return void 0;
                    }));
                    r318_turned(r318_MangleName("playback/fastBackward"), r318_MangleUnicode(9194), r318_MangleName("playback/fastForward"), r318_Geom.MidX, r318_Geom.MidY);
                    r318_turned(r318_MangleName("playback/fastBackwardToEnd"), r318_MangleUnicode(9198), r318_MangleName("playback/fastForwardToEnd"), r318_Geom.MidX, r318_Geom.MidY);
                    return r318_turned(r318_MangleName("playback/fastDownward"), r318_MangleUnicode(9196), r318_MangleName("playback/fastUpward"), r318_Geom.MidX, r318_Geom.MidY);
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


