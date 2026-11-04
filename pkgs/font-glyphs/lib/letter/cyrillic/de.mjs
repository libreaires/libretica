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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-De", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_desc, r312_styTop, r312_styBot, _r312_t12, _r312_t15, _r312_t16, _r312_t17, _r312_t18, _r312_tag19, _r312_t20, _r312_tag21;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Descender = _r312_t1.Descender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_VSwToH = _r312_t1.VSwToH;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_SHook = _r312_t1.SHook;
        var r312_TailY = _r312_t1.TailY;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_VJut = _r312_t1.VJut;
        var r312_LongVJut = _r312_t1.LongVJut;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_SerifShiftX = _r312_t1.SerifShiftX;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_VSerif = _r312_t5.VSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_ExtendAboveBaseAnchors = _r312_t7.ExtendAboveBaseAnchors;
        var r312_ExtendBelowBaseAnchors = _r312_t7.ExtendBelowBaseAnchors;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r312_CreateAccentedComposition = _r312_t8.CreateAccentedComposition;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Ze"].resolve();
        var r312_CyrZe = _r312_t9.CyrZe;
        var r312_ZeConfig = _r312_t9.ZeConfig;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "BottomExtension": r312_BottomExtension
            };
        });
        var r312_BottomExtension = -r312_LongVJut + r312_QuarterStroke;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "CyrDeBottom": r312_CyrDeBottom
            };
        });
        var r312_CyrDeBottom = function (r322_left, r322_right, r322__sw, r322__desc) {
            var _r322_t0, _r322_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                var r324_descenderOverflow = r312_SLAB ? r312_SideJut : (r322_right - r322_left) * 0.075;
                var r324_xTopLeft = r1_mix(r322_left, r322_right, r312_StrokeWidthBlend(0.15, 0.1));
                var r324_xTopRight = r1_mix(r322_left, r322_right, r312_StrokeWidthBlend(0.95, 0.96));
                var r324_swOuter = r1_fallback(r322__sw, r312_Stroke);
                var r324_swVJut = r312_VJutStroke * (r324_swOuter / r312_Stroke);
                var r324_desc = r1_fallback(r322__desc, r312_BottomExtension);
                r324_currentGlyph.include(r312_HBar.b(r324_xTopLeft, r324_xTopRight, 0, r324_swOuter));
                r324_currentGlyph.include(r312_tagged("footL", r312_union(r312_HBar.b(r322_left - r324_descenderOverflow, r324_xTopLeft, 0, r324_swOuter), r312_VBar.l(r322_left - r324_descenderOverflow, r324_desc, r312_TINY, r324_swVJut))));
                r324_currentGlyph.include(r312_tagged("footR", r312_union(r312_HBar.b(r324_xTopRight, r322_right + r324_descenderOverflow, 0, r324_swOuter), r312_VBar.r(r322_right + r324_descenderOverflow, r324_desc, r312_TINY, r324_swVJut))));
                return void 0;
            });
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r329_t0, _r329_t1;
            return {
                "CyrDeShape": r312_CyrDeShape
            };
        });
        var r312_CyrDeShape = function (r330_fCapital, r330_top, r330_left, r330_right, r330__sw, r330__desc) {
            var _r330_t0, _r330_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t0, _r332_t1;
                var r332_descenderOverflow = r312_SLAB ? r312_SideJut : (r330_right - r330_left) * 0.075;
                var r332_xTopLeft = r1_mix(r330_left, r330_right, r312_StrokeWidthBlend(0.15, 0.1));
                var r332_xTopRight = r1_mix(r330_left, r330_right, r312_StrokeWidthBlend(0.95, 0.96));
                var r332_swOuter = r1_fallback(r330__sw, r312_Stroke);
                var r332_swInner = Math.min(r312_AdviceStroke(2.75) * (r332_swOuter / r312_Stroke), r312_VSwToH(0.375 * (r332_xTopRight - r332_xTopLeft)));
                var r332_desc = r1_fallback(r330__desc, r312_BottomExtension);
                r332_currentGlyph.include(r312_CyrDeBottom(r330_left, r330_right, r332_swOuter, r332_desc));
                r332_currentGlyph.include(r312_VBar.r(r332_xTopRight, 0, r330_top, r332_swInner));
                r332_currentGlyph.include(r312_dispiro(r312_widths.lhs(r332_swInner), r312_flat(r332_xTopLeft, r330_top, r312_heading(r312_Downward)), r312_curl(r332_xTopLeft, r1_mix(r330_top, 0 + r332_swOuter + r312_TailY - r332_swInner / 2, 0.75)), r312_g4(r330_left, 0 + r332_swOuter)));
                r332_currentGlyph.include(r312_SLAB ? r312_dispiro(r312_widths.rhs(r332_swOuter), r312_flat(r332_xTopLeft - r332_descenderOverflow - r332_swOuter * r312_SerifShiftX, r330_top), r330_fCapital || !r312_para.isItalic ? [r312_curl(r332_xTopRight + r332_descenderOverflow - r332_swOuter * r312_SerifShiftX, r330_top)] : [r312_curl(r332_xTopRight, r330_top, r312_heading(r312_Rightward))]) : r312_HBar.t(r332_xTopLeft, r332_xTopRight, r330_top, r332_swOuter));
                return {
                    "xTopLeft": r332_xTopLeft,
                    "xTopRight": r332_xTopRight,
                    "swOuter": r332_swOuter,
                    "swInner": r332_swInner,
                    "desc": r332_desc
                };
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/De", 1044, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            r339_currentGlyph.include(r312_MarkSet.capital());
            r339_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            r339_currentGlyph.include(r312_CyrDeShape(true, r312_CAP, r312_SB, r312_RightSB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/de.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
            var _r345_t0, _r345_t1;
            r345_currentGlyph.include(r312_MarkSet.e());
            r345_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            r345_currentGlyph.include(r312_CyrDeShape(false, r312_XH, r312_SB, r312_RightSB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/deLongLeg.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
            var _r351_t0, _r351_t1;
            r351_currentGlyph.include(r312_MarkSet.p());
            r351_currentGlyph.include(r312_CyrDeShape(false, r312_XH, r312_SB, r312_RightSB, void 0, r312_Descender));
            return void 0;
        }));
        var r312_CyrSoftDeShape = function (r354_vSlab) {
            var _r354_t0, _r354_t1;
            return function (r355_fCapital, r355_df, r355_top, r355__sw, r355__desc) {
                var _r355_t0, _r355_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                    var r357_swVJut, _r357_t1, _r357_t2;
                    var r357_sw = r1_fallback(r355__sw, r312_Stroke);
                    var r357_xm = r312_SLAB ? r1_mix(r355_df.leftSB, r355_df.rightSB, 0.625) + r312_HSwToV(0.25 * r357_sw) : r1_mix(r355_df.leftSB, r355_df.rightSB, r355_df.adws > 1 ? 2 / 3 : 3 / 4);
                    var _r357_t0 = r357_currentGlyph.include(r312_CyrDeShape(r355_fCapital, r355_top, r355_df.leftSB, r357_xm, r357_sw, r355__desc));
                    var r357_xTopRight = _r357_t0.xTopRight;
                    var r357_xTopBarRightEnd = r1_mix(r355_df.width, r355_df.rightSB, r354_vSlab ? 0.25 : 0.375);
                    r357_currentGlyph.include(r312_HBar.t(r357_xTopRight + r312_O, r357_xTopBarRightEnd, r355_top, r357_sw));
                    if (r354_vSlab) {
                        r357_swVJut = Math.min(r312_VJutStroke * (r357_sw / r312_Stroke), r312_VSwToH(0.625 * (r357_xTopBarRightEnd - r357_xTopRight)));
                        r357_currentGlyph.include(r312_VSerif.dr(r357_xTopBarRightEnd, r355_top, r312_VJut, r357_swVJut));
                    }
                    return void 0;
                });
            };
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
            var _r363_t0, _r363_t1;
            var r363_df = r363_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r363_currentGlyph.include(r363_df.markSet.capital());
            r363_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/DeSoft.serifless", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r363_currentGlyph, r312_CyrSoftDeShape(false)(true, r363_df, r312_CAP, r363_df.mvs)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/DeSoft.topRightSerifed", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r363_currentGlyph, r312_CyrSoftDeShape(true)(true, r363_df, r312_CAP, r363_df.mvs)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
            var _r373_t0, _r373_t1;
            var r373_df = r373_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r373_currentGlyph.include(r373_df.markSet.e());
            r373_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/deSoft.serifless", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r373_currentGlyph, r312_CyrSoftDeShape(false)(false, r373_df, r312_XH, r373_df.mvs)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/deSoft.topRightSerifed", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r373_currentGlyph, r312_CyrSoftDeShape(true)(false, r373_df, r312_XH, r373_df.mvs)));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("cyrl/DeSoft", 42594, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/EnGhe/Ghe"));
        r312_xn$selectvariant$7Hrq("cyrl/deSoft", 42595, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/enghe/ghe"));
        var _r312_t10 = Object.entries(r312_ZeConfig)[Symbol.iterator]();
        var _r312_t11 = void 0;
        while (!(_r312_t11 = _r312_t10.next()).done) {
            _r312_t12 = _r312_t11.value;
            r312_suffix = _r312_t12[0];
            r312_desc = _r312_t12[1][0][0];
            _r312_t12[1][0];
            r312_styTop = _r312_t12[1][1][0];
            r312_styBot = _r312_t12[1][1][1];
            _r312_t12[1][1];
            _r312_t12[1];
            (function () {
                var r385_DzzeDescenderShape = function (r386_de, r386_ada, r386_adb) {
                    var _r386_t0, _r386_t1;
                    var r386_zeRight = r1_mix(r312_RightSB, r312_Width, 0.5) - r312_O * 2;
                    var r386_zeLeft = r1_mix(r386_zeRight, r386_de.xTopRight, 2);
                    var r386_sw = r312_AdviceStroke(2.5, (r386_zeRight - r386_zeLeft + 2 * r312_SB) / r312_Width);
                    var r386_zeTop = 0 + r386_sw;
                    var r386_zeBot = r386_de.desc - 0.5 * r386_sw;
                    var r386_p = (r386_zeTop - r386_zeBot) / (r312_CAP - 0);
                    var r386_ze = r312_CyrZe(3, r312_styBot, r386_zeTop, r386_zeBot, new r312_xn$NamedParameterPair$2Lrc9b("left", r386_zeLeft), new r312_xn$NamedParameterPair$2Lrc9b("right", r386_zeRight), new r312_xn$NamedParameterPair$2Lrc9b("hook", r312_Hook * r386_p), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r386_sw), new r312_xn$NamedParameterPair$2Lrc9b("xo", 0.5 * r312_O), new r312_xn$NamedParameterPair$2Lrc9b("barPos", 0.5), new r312_xn$NamedParameterPair$2Lrc9b("ada", r386_ada * r386_p), new r312_xn$NamedParameterPair$2Lrc9b("adb", r386_adb * r386_p));
                    return r312_union(r386_ze.Shape(), r386_ze.AutoEndSerifL());
                };
                return !r312_desc && !r312_styTop ? (r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dzze." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                    var _r397_t0, _r397_t1;
                    r397_currentGlyph.include(r312_MarkSet.capital());
                    r397_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
                    var r397_de = r397_currentGlyph.include(r312_CyrDeShape(true, r312_CAP, r312_SB, r312_RightSB));
                    r397_currentGlyph.ejectTagged("footR");
                    r397_currentGlyph.include(r385_DzzeDescenderShape(r397_de, r312_ArchDepthA, r312_ArchDepthB));
                    return void 0;
                })), r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzze.upright." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                    var _r405_t0, _r405_t1;
                    r405_currentGlyph.include(r312_MarkSet.e());
                    r405_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
                    var r405_de = r405_currentGlyph.include(r312_CyrDeShape(false, r312_XH, r312_SB, r312_RightSB));
                    r405_currentGlyph.ejectTagged("footR");
                    r405_currentGlyph.include(r385_DzzeDescenderShape(r405_de, r312_SmallArchDepthA, r312_SmallArchDepthB));
                    return void 0;
                }))) : void 0;
            })();
        }
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dwe", 42624, new r312_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
            var _r413_t0, _r413_t1;
            r413_currentGlyph.include(r312_MarkSet.capital());
            var r413_asc = r312_CAP + r312_LongVJut - r312_QuarterStroke;
            r413_currentGlyph.include(r312_ExtendAboveBaseAnchors(r413_asc));
            r413_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            var r413_de = r413_currentGlyph.include(r312_CyrDeShape(true, r312_CAP, r312_SB, r312_RightSB));
            r413_currentGlyph.include(r312_VBar.l(r413_de.xTopLeft, r312_CAP + r312_O, r413_asc, Math.min(r413_de.swInner, r312_VJutStroke * (r413_de.swOuter / r312_Stroke))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dwe.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
            var _r421_t0, _r421_t1;
            r421_currentGlyph.include(r312_MarkSet.e());
            var r421_asc = r312_XH + r312_LongVJut - r312_QuarterStroke;
            r421_currentGlyph.include(r312_ExtendAboveBaseAnchors(r421_asc));
            r421_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            var r421_de = r421_currentGlyph.include(r312_CyrDeShape(false, r312_XH, r312_SB, r312_RightSB));
            r421_currentGlyph.include(r312_VBar.l(r421_de.xTopLeft, r312_XH + r312_O, r421_asc, Math.min(r421_de.swInner, r312_VJutStroke * (r421_de.swOuter / r312_Stroke))));
            return void 0;
        }));
        var r312_CyrDeItalicKnots = function (r427_df, r427__sw) {
            var _r427_t0, _r427_t1;
            var r427_sw = r1_fallback(r427__sw, r427_df.mvs);
            var r427_fine = r312_ShoulderFine * (r427_sw / r312_Stroke);
            var r427_yRingTop = Math.min(r312_XH + r312_O, r312_XH - r312_QuarterStroke);
            var r427_ada = r427_df.archDepthAOf(r312_SmallArchDepth * (r427_yRingTop / r312_XH), r427_sw);
            var r427_adb = r427_df.archDepthBOf(r312_SmallArchDepth * (r427_yRingTop / r312_XH), r427_sw);
            return [r312_straight.up.start(r427_df.rightSB - r312_OX - r312_HSwToV(r427_sw - r427_fine), r427_yRingTop - r427_adb, r312_widths.lhs(r427_fine)), r312_Arch.lhs(r427_yRingTop, new r312_xn$NamedParameterPair$2Lrc9b("sw", r427_sw), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r427_fine)), r312_flatside.ld(r427_df.leftSB, 0, r427_yRingTop, r427_ada, r427_adb), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r427_sw)), r312_flatside.ru(r427_df.rightSB, 0, r427_yRingTop, r427_ada, r427_adb), r312_quadControls(0, 0.8), r312_g4(r427_df.leftSB + r427_sw * 1.1, r312_Ascender)];
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r432_t0, _r432_t1;
            return {
                "CyrDeItalicShape": r312_CyrDeItalicShape
            };
        });
        var r312_CyrDeItalicShape = function (r433_df, r433__sw) {
            var _r433_t0, _r433_t1;
            return r312_dispiro(r312_CyrDeItalicKnots(r433_df, r433__sw));
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r435_t0, _r435_t1;
            return {
                "CyrDeItalicMask": r312_CyrDeItalicMask
            };
        });
        var r312_CyrDeItalicMask = function (r436_df, r436__sw) {
            var _r436_t0, _r436_t1;
            return r312_xn$spirooutline$1aao(r312_CyrDeItalicKnots(r436_df, r436__sw));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/de.italic", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
            var _r439_t0, _r439_t1;
            r439_currentGlyph.include(r312_MarkSet.b());
            r439_currentGlyph.include(r312_CyrDeItalicShape(r312_DivFrame(1)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dwe.italic/base", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
            var _r444_t0, _r444_t1;
            r444_currentGlyph.include(r312_MarkSet.b());
            r444_currentGlyph.include(r312_CyrDeItalicShape(r312_DivFrame(0.95)));
            r444_currentGlyph.setBaseAnchor("topRight", r312_RightSB - r312_DotRadius, r312_XH);
            return void 0;
        }));
        r312_CreateAccentedComposition("cyrl/dwe.italic", null, "cyrl/dwe.italic/base", "commaTR");
        var _r312_t13 = Object.entries(r312_ZeConfig)[Symbol.iterator]();
        var _r312_t14 = void 0;
        while (!(_r312_t14 = _r312_t13.next()).done) {
            _r312_t15 = _r312_t14.value;
            r312_suffix = _r312_t15[0];
            r312_desc = _r312_t15[1][0][0];
            _r312_t15[1][0];
            r312_styTop = _r312_t15[1][1][0];
            r312_styBot = _r312_t15[1][1][1];
            _r312_t15[1][1];
            _r312_t15[1];
            (function () {
                return r312_desc && !r312_styTop ? r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzze.italic." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
                    var _r453_t0, _r453_t1;
                    var r453_df = r453_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
                    r453_currentGlyph.include(r453_df.markSet.bp());
                    var r453_subDf = r453_df.slice(3, 2, r312_OX);
                    r453_currentGlyph.include(r312_CyrDeItalicShape(r453_subDf, r453_df.mvs));
                    var r453_shift = r453_df.width - r453_subDf.width;
                    var r453_ze = r312_CyrZe(1, r312_styBot, r312_XH, r312_Descender, new r312_xn$NamedParameterPair$2Lrc9b("left", r453_subDf.leftSB + r312_OX + r453_shift), new r312_xn$NamedParameterPair$2Lrc9b("right", r453_subDf.rightSB - r312_OX + r453_shift), new r312_xn$NamedParameterPair$2Lrc9b("blend", 0.7), new r312_xn$NamedParameterPair$2Lrc9b("hook", r312_SHook), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r453_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("xOverflow", 0), new r312_xn$NamedParameterPair$2Lrc9b("barPos", 0.55), new r312_xn$NamedParameterPair$2Lrc9b("ada", r312_SmallArchDepthA), new r312_xn$NamedParameterPair$2Lrc9b("adb", r312_SmallArchDepthB));
                    r453_currentGlyph.include(r312_union(r453_ze.Shape(), r453_ze.AutoEndSerifL()));
                    return void 0;
                })) : void 0;
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Dzze", 42632, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Dzze/Ze"));
        r312_xn$selectvariant$7Hrq("cyrl/dzze.upright", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/dzze.upright/ze"));
        return r312_xn$selectvariant$7Hrq("cyrl/dzze.italic", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/dzze.italic/ze"));
    });
    return void 0;
});


