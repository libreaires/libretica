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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Faces", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10, _r312_t11, _r312_tag12;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_PictTop = _r312_t1.PictTop;
        var r312_PictBot = _r312_t1.PictBot;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_WideWidth4 = _r312_t1.WideWidth4;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_close = _r312_t2.close;
        var r312_widths = _r312_t2.widths;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Ring = _r312_t5.Ring;
        var r312_DotAt = _r312_t5.DotAt;
        var r312_DotStrokeAt = _r312_t5.DotStrokeAt;
        var r312_OShape = _r312_t5.OShape;
        var r312_OShapeOutline = _r312_t5.OShapeOutline;
        var r312_HBar = _r312_t5.HBar;
        var r312_FlipAround = _r312_t5.FlipAround;
        var r312_ForceUpright = _r312_t5.ForceUpright;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_Face = function (r315_top, r315_bottom, r315_left, r315_right, r315_mosaicWidth, r315_mosaicWidthScalar, r315__scale) {
            var _r315_t0, _r315_t1, _r315_t2, _r315_tag3;
            return (function () {
                var r318_Dim, r318_Ring, r318_RoundRing, r318_Eyes, r318_OpenEyes, r318_ClosedEyes, r318_Nose, r318_Mouth, r318_OpenMouth;
                var r318_exports = {};
                r318_exports.Dim = r318_Dim = function () {
                    var _r326_t0, _r326_t1;
                    var r326_scale = r1_fallback(r315__scale, 1);
                    var r326_scaffold = {
                        "top": r315_top,
                        "bot": r315_bottom,
                        "width": Math.min(r315_right - r315_left, r315_top - r315_bottom),
                        "midX": r1_mix(r315_left, r315_right, 0.5)
                    };
                    var r326_adws = (r326_scaffold.width + r312_SB * 2) / r312_Width;
                    r326_scaffold.left = r326_scaffold.midX - r326_scaffold.width / 2;
                    r326_scaffold.right = r326_scaffold.midX + r326_scaffold.width / 2;
                    r326_scaffold.sma = r312_ArchDepthAOf(r312_SmallArchDepth * r315_mosaicWidthScalar * r326_scale, r315_mosaicWidth * r326_scale);
                    r326_scaffold.smb = r312_ArchDepthBOf(r312_SmallArchDepth * r315_mosaicWidthScalar * r326_scale, r315_mosaicWidth * r326_scale);
                    r326_scaffold.rda = r312_ArchDepthAOf((r315_top - r315_bottom) / 2, r315_mosaicWidth * r326_scale);
                    r326_scaffold.rdb = r312_ArchDepthBOf((r315_top - r315_bottom) / 2, r315_mosaicWidth * r326_scale);
                    r326_scaffold.stroke = r312_AdviceStroke(5, r326_adws);
                    r326_scaffold.fine = r312_AdviceStroke(6 * Math.sqrt(r315_mosaicWidthScalar * r326_scale), r326_adws);
                    var r326_eyeYPos = 0.625;
                    var r326_noseYPos = 0.5;
                    var r326_horiSep = 0.6 * (r326_scaffold.width - r326_scaffold.stroke * 2);
                    var r326_mouthDepth = 0.025 * Math.sqrt(r315_mosaicWidthScalar * r326_scale);
                    r326_scaffold.eyeRad = r312_DotRadius / r312_Stroke * r326_scaffold.fine * r326_scale;
                    r326_scaffold.bigEyeRad = r326_scaffold.eyeRad * 1.1;
                    r326_scaffold.eyeLeftX = r326_scaffold.midX - r326_horiSep / 2 + r326_scaffold.eyeRad / 2;
                    r326_scaffold.eyeRightX = r326_scaffold.midX + r326_horiSep / 2 - r326_scaffold.eyeRad / 2;
                    r326_scaffold.eyeYPos = r1_mix(r326_scaffold.bot, r326_scaffold.top, r326_eyeYPos);
                    r326_scaffold.noseRad = r326_scaffold.fine;
                    r326_scaffold.noseYPos = r1_mix(r326_scaffold.bot, r326_scaffold.top, r326_noseYPos);
                    r326_scaffold.mouthLeftX = r326_scaffold.midX - r326_horiSep / 2;
                    r326_scaffold.mouthRightX = r326_scaffold.midX + r326_horiSep / 2;
                    r326_scaffold.mouthYPos = function (r327_k) {
                        var _r327_t0, _r327_t1;
                        return r1_mix(r326_scaffold.bot, r326_scaffold.top, 1 - r326_eyeYPos + r327_k * r326_mouthDepth);
                    };
                    r326_scaffold.minGap = r326_scaffold.fine / 2;
                    return r326_scaffold;
                };
                var r318_dim = r318_Dim();
                r318_exports.Ring = r318_Ring = function (r329_F) {
                    var _r329_t0, _r329_t1;
                    return r329_F(r318_dim.top, r318_dim.bot, r318_dim.left, r318_dim.right, r318_dim.stroke, r318_dim.sma, r318_dim.smb);
                };
                r318_exports.RoundRing = r318_RoundRing = function (r331_F) {
                    var _r331_t0, _r331_t1;
                    return r331_F(r318_dim.top, r318_dim.bot, r318_dim.left, r318_dim.right, r318_dim.stroke, r318_dim.rda, r318_dim.rdb);
                };
                r318_exports.Eyes = r318_Eyes = function () {
                    var _r333_t0, _r333_t1;
                    return r312_union(r312_DotAt(r318_dim.eyeLeftX, r318_dim.eyeYPos, r318_dim.eyeRad), r312_DotAt(r318_dim.eyeRightX, r318_dim.eyeYPos, r318_dim.eyeRad));
                };
                r318_exports.OpenEyes = r318_OpenEyes = function () {
                    var _r335_t0, _r335_t1;
                    return r312_union(r312_DotStrokeAt(r318_dim.eyeLeftX, r318_dim.eyeYPos, r318_dim.bigEyeRad, r318_dim.fine), r312_DotStrokeAt(r318_dim.eyeRightX, r318_dim.eyeYPos, r318_dim.bigEyeRad, r318_dim.fine));
                };
                r318_exports.ClosedEyes = r318_ClosedEyes = function () {
                    var _r337_t0, _r337_t1;
                    return r312_union(r312_HBar.m(r318_dim.eyeLeftX - r318_dim.bigEyeRad, Math.min(r318_dim.eyeLeftX + r318_dim.bigEyeRad, r318_dim.midX - r318_dim.minGap), r318_dim.eyeYPos, r318_dim.fine), r312_HBar.m(Math.max(r318_dim.eyeRightX - r318_dim.bigEyeRad, r318_dim.midX + r318_dim.minGap), r318_dim.eyeRightX + r318_dim.bigEyeRad, r318_dim.eyeYPos, r318_dim.fine));
                };
                r318_exports.Nose = r318_Nose = function () {
                    var _r339_t0, _r339_t1;
                    return r312_DotAt(r318_dim.midX, r318_dim.noseYPos, r318_dim.noseRad);
                };
                r318_exports.Mouth = r318_Mouth = function (r341_k) {
                    var _r341_t0, _r341_t1;
                    return r312_dispiro(r312_widths.center(r318_dim.fine), r312_g4(r318_dim.mouthLeftX, r318_dim.mouthYPos(r341_k)), r312_g4(r318_dim.midX, r318_dim.mouthYPos(-r341_k)), r312_g4(r318_dim.mouthRightX, r318_dim.mouthYPos(r341_k)));
                };
                r318_exports.OpenMouth = r318_OpenMouth = function (r343_k) {
                    var _r343_t0, _r343_t1;
                    return r312_dispiro(r312_widths.center(r318_dim.fine), r312_g4(r318_dim.mouthLeftX, r318_dim.mouthYPos(0)), r312_arcvh(), r312_g4(r318_dim.midX, r318_dim.mouthYPos(-r343_k)), r312_archv(), r312_g4(r318_dim.mouthRightX, r318_dim.mouthYPos(0)), r312_arcvh(), r312_g4(r318_dim.midX, r318_dim.mouthYPos(r343_k)), r312_archv(), r312_close());
                };
                return r318_exports;
            })();
        };
        (function () {
            var r346_FMosaicWide, r346_MosaicNameSuffix, r346_MosaicWidth, r346_MosaicWidthScalar, _r346_t3, _r346_t5, _r346_t6, _r346_tag7;
            var r346_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r346_t0 = r346_WidthKinds;
            var _r346_t1 = _r346_t0.length;
            var _r346_t2 = 0;
            var _r346_t4 = _r346_t2 < _r346_t1;
            while (_r346_t4) {
                _r346_t3 = _r346_t0[_r346_t2];
                r346_FMosaicWide = _r346_t3[0];
                r346_MosaicNameSuffix = _r346_t3[1];
                r346_MosaicWidth = _r346_t3[2];
                r346_MosaicWidthScalar = _r346_t3[3];
                (function () {
                    var r349_MosaicDesiredWidth = r312_WideWidth1;
                    var r349_MosaicMiddle = r346_MosaicWidth / 2;
                    var r349_MosaicUnitWidth = r346_MosaicWidth / r346_MosaicWidthScalar;
                    var r349_MangleUnicode = function (r350_unicode, r350__desiredOverride) {
                        var _r350_t0, _r350_t1;
                        return r346_MosaicWidth === (r350__desiredOverride || r349_MosaicDesiredWidth) ? r350_unicode : void 0;
                    };
                    var r349_MangleName = function (r351_name) {
                        var _r351_t0, _r351_t1;
                        return r351_name + r346_MosaicNameSuffix;
                    };
                    var r349_faceTop = r1_mix(r312_SymbolMid, r312_PictTop, 0.75);
                    var r349_faceBot = r1_mix(r312_SymbolMid, r312_PictBot, 0.75);
                    var r349_face = r312_Face(r349_faceTop, r349_faceBot, r312_SB, r346_MosaicWidth - r312_SB, r346_MosaicWidth, r346_MosaicWidthScalar);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("whiteSadFace"), r349_MangleUnicode(9785), new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                        var _r354_t0, _r354_t1;
                        r354_currentGlyph.setWidth(r346_MosaicWidth);
                        r354_currentGlyph.include(r312_union(r349_face.Ring(r312_OShape), r349_face.Eyes(), r349_face.Mouth(-1)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("whiteSmileFace"), r349_MangleUnicode(9786), new r312_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                        var _r359_t0, _r359_t1;
                        r359_currentGlyph.setWidth(r346_MosaicWidth);
                        r359_currentGlyph.include(r312_union(r349_face.Ring(r312_OShape), r349_face.Eyes(), r349_face.Mouth(1)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("blackSmileFace"), r349_MangleUnicode(9787), new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                        var _r364_t0, _r364_t1;
                        r364_currentGlyph.setWidth(r346_MosaicWidth);
                        r364_currentGlyph.include(r312_difference(r349_face.Ring(r312_OShapeOutline), r349_face.Eyes(), r349_face.Mouth(1)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("neutralFace"), r349_MangleUnicode(128528), new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                        var _r369_t0, _r369_t1;
                        r369_currentGlyph.setWidth(r346_MosaicWidth);
                        r369_currentGlyph.include(r312_union(r349_face.Ring(r312_OShape), r349_face.Eyes(), r349_face.Mouth(0)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("blackNeutralFace"), r349_MangleUnicode(117871), new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                        var _r374_t0, _r374_t1;
                        r374_currentGlyph.setWidth(r346_MosaicWidth);
                        r374_currentGlyph.include(r312_difference(r349_face.Ring(r312_OShapeOutline), r349_face.Eyes(), r349_face.Mouth(0)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("mouthlessFace"), r349_MangleUnicode(128566), new r312_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                        var _r379_t0, _r379_t1;
                        r379_currentGlyph.setWidth(r346_MosaicWidth);
                        r379_currentGlyph.include(r312_union(r349_face.Ring(r312_OShape), r349_face.Eyes()));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("slightFrownFace"), r349_MangleUnicode(128577), new r312_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                        var _r384_t0, _r384_t1;
                        r384_currentGlyph.setWidth(r346_MosaicWidth);
                        r384_currentGlyph.include(r312_union(r349_face.Ring(r312_OShape), r349_face.Eyes(), r349_face.Mouth(-0.5)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("slightSmileFace"), r349_MangleUnicode(128578), new r312_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                        var _r389_t0, _r389_t1;
                        r389_currentGlyph.setWidth(r346_MosaicWidth);
                        r389_currentGlyph.include(r312_union(r349_face.Ring(r312_OShape), r349_face.Eyes(), r349_face.Mouth(0.5)));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r349_MangleName("upsideDownFace"), r349_MangleUnicode(128579), new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                        var _r394_t0, _r394_t1;
                        r394_currentGlyph.setWidth(r346_MosaicWidth);
                        r394_currentGlyph.include(r312_union(r349_face.Ring(r312_OShape), r349_face.Eyes(), r349_face.Mouth(1)));
                        r394_currentGlyph.include(r312_FlipAround(r349_MosaicMiddle, r1_mix(r349_faceTop, r349_faceBot, 0.5)));
                        return void 0;
                    }));
                })();
                _r346_t5 = _r346_t2 = _r346_t2 + 1;
                _r346_t4 = _r346_t2 < _r346_t1;
            }
            return _r346_t5;
        })();
        return (function () {
            var r400_FMosaicWide, r400_MosaicNameSuffix, r400_MosaicWidth, r400_MosaicWidthScalar, _r400_t3, _r400_t5, _r400_t6, _r400_tag7;
            var r400_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r400_t0 = r400_WidthKinds;
            var _r400_t1 = _r400_t0.length;
            var _r400_t2 = 0;
            var _r400_t4 = _r400_t2 < _r400_t1;
            while (_r400_t4) {
                _r400_t3 = _r400_t0[_r400_t2];
                r400_FMosaicWide = _r400_t3[0];
                r400_MosaicNameSuffix = _r400_t3[1];
                r400_MosaicWidth = _r400_t3[2];
                r400_MosaicWidthScalar = _r400_t3[3];
                (function () {
                    var r403_MosaicDesiredWidth = r312_WideWidth4;
                    var r403_MosaicMiddle = r400_MosaicWidth / 2;
                    var r403_MosaicUnitWidth = r400_MosaicWidth / r400_MosaicWidthScalar;
                    var r403_MangleUnicode = function (r404_unicode, r404__desiredOverride) {
                        var _r404_t0, _r404_t1;
                        return r400_MosaicWidth === (r404__desiredOverride || r403_MosaicDesiredWidth) ? r404_unicode : void 0;
                    };
                    var r403_MangleName = function (r405_name) {
                        var _r405_t0, _r405_t1;
                        return r405_name + r400_MosaicNameSuffix;
                    };
                    var _r403_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Mosaic-Split-Graphic"].resolve();
                    var r403_Multicell = _r403_t0.Multicell;
                    var r403_multicell = r403_Multicell(r400_MosaicWidth);
                    var r403_top = r312_fontMetrics.os2.sTypoAscender;
                    var r403_bottom = r312_fontMetrics.os2.sTypoDescender;
                    var r403_left = 0;
                    var r403_right = r400_MosaicWidth;
                    var r403_box = r403_multicell.NBox(r403_top, r403_bottom, r403_left, r403_right, 2, 2);
                    var r403_bigFace = r312_Face(r403_box.top, r403_box.bottom, r403_box.left, r403_box.right, r400_MosaicWidth, r400_MosaicWidthScalar, 2);
                    var r403_FaceOpenEyes = function (r407_t, r407_b, r407_l, r407_r) {
                        var _r407_t0, _r407_t1;
                        return r312_union(r403_bigFace.RoundRing(r312_OShape.NoOvershoot), r403_bigFace.OpenEyes(), r403_bigFace.Nose());
                    };
                    var r403_FaceClosedEyes = function (r408_t, r408_b, r408_l, r408_r) {
                        var _r408_t0, _r408_t1;
                        return r312_union(r403_bigFace.RoundRing(r312_OShape.NoOvershoot), r403_bigFace.ClosedEyes(), r403_bigFace.Nose());
                    };
                    var r403_FaceOpenMouth = function (r409_t, r409_b, r409_l, r409_r) {
                        var _r409_t0, _r409_t1;
                        return r312_union(r403_bigFace.RoundRing(r312_OShape.NoOvershoot), r403_bigFace.Nose(), r403_bigFace.OpenMouth(1));
                    };
                    var r403_FaceClosedMouth = function (r410_k) {
                        var _r410_t0, _r410_t1;
                        return function (r411_t, r411_b, r411_l, r411_r) {
                            var _r411_t0, _r411_t1;
                            return r312_union(r403_bigFace.RoundRing(r312_OShape.NoOvershoot), r403_bigFace.Nose(), r403_bigFace.Mouth(r410_k));
                        };
                    };
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                        var _r414_t0, _r414_t1;
                        r414_currentGlyph.setWidth(r400_MosaicWidth);
                        r414_currentGlyph.include(r312_ForceUpright());
                        r414_currentGlyph.include(r403_multicell.Split(r403_top, r403_bottom, r403_left, r403_right, 2, 2, r403_FaceOpenEyes, [[1, 0, r403_MangleName("openEyeBigFaceLeft"), r403_MangleUnicode(117926)], [1, 1, r403_MangleName("openEyeBigFaceRight"), r403_MangleUnicode(117927)]]));
                        r414_currentGlyph.include(r403_multicell.Split(r403_top, r403_bottom, r403_left, r403_right, 2, 2, r403_FaceClosedEyes, [[1, 0, r403_MangleName("closedEyeBigFaceLeft"), r403_MangleUnicode(117928)], [1, 1, r403_MangleName("closedEyeBigFaceRight"), r403_MangleUnicode(117929)]]));
                        r414_currentGlyph.include(r403_multicell.Split(r403_top, r403_bottom, r403_left, r403_right, 2, 2, r403_FaceClosedMouth(1), [[0, 0, r403_MangleName("smileBigFaceLeft"), r403_MangleUnicode(117930)], [0, 1, r403_MangleName("smileBigFaceRight"), r403_MangleUnicode(117931)]]));
                        r414_currentGlyph.include(r403_multicell.Split(r403_top, r403_bottom, r403_left, r403_right, 2, 2, r403_FaceClosedMouth(0), [[0, 0, r403_MangleName("neutralBigFaceLeft"), r403_MangleUnicode(117932)], [0, 1, r403_MangleName("neutralBigFaceRight"), r403_MangleUnicode(117933)]]));
                        r414_currentGlyph.include(r403_multicell.Split(r403_top, r403_bottom, r403_left, r403_right, 2, 2, r403_FaceOpenMouth, [[0, 0, r403_MangleName("openMouthBigFaceLeft"), r403_MangleUnicode(117934)], [0, 1, r403_MangleName("openMouthBigFaceRight"), r403_MangleUnicode(117935)]]));
                        r414_currentGlyph.include(r403_multicell.Split(r403_top, r403_bottom, r403_left, r403_right, 2, 2, r403_FaceClosedMouth(-1), [[0, 0, r403_MangleName("frownBigFaceLeft"), r403_MangleUnicode(117936)], [0, 1, r403_MangleName("frownBigFaceRight"), r403_MangleUnicode(117937)]]));
                        return void 0;
                    }));
                })();
                _r400_t5 = _r400_t2 = _r400_t2 + 1;
                _r400_t4 = _r400_t2 < _r400_t1;
            }
            return _r400_t5;
        })();
    });
    return void 0;
});


