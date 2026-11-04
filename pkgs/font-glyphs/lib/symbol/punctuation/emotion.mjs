"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Emotion", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10, _r312_t11, _r312_tag12;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Translate = _r312_t1.Translate;
        var r312_Rotate = _r312_t1.Rotate;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_DotSize = _r312_t1.DotSize;
        var r312_EssQuestion = _r312_t1.EssQuestion;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_VBar = _r312_t5.VBar;
        var r312_HookStart = _r312_t5.HookStart;
        var r312_Arch = _r312_t5.Arch;
        var r312_FlipAround = _r312_t5.FlipAround;
        var r312_DotVariants = _r312_t5.DotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$selectmultidimensionalvariant$7Hrq62b = _r312_t6["select-multi-dimensional-variant"];
        var r312_xn$deriveglyphs$7Hrq = _r312_t6["derive-glyphs"];
        var r312_alias = _r312_t6.alias;
        var r312_HalfAdvance = _r312_t6.HalfAdvance;
        var r312_emotionBottom = Math.max(r312_CAP * 0.3, r312_DotSize * 1.5);
        (function () {
            var r316_suffix, r316_DrawAt, r316_kdr, r316_overshoot, _r316_t4, _r316_t5, _r316_tag6;
            var _r316_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
            var r316_CreateTurnedLetter = _r316_t0.CreateTurnedLetter;
            var _r316_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r316_RetroflexHook = _r316_t1.RetroflexHook;
            var _r316_t2 = Object.entries(r312_DotVariants)[Symbol.iterator]();
            var _r316_t3 = void 0;
            while (!(_r316_t3 = _r316_t2.next()).done) {
                _r316_t4 = _r316_t3.value;
                r316_suffix = _r316_t4[0];
                r316_DrawAt = _r316_t4[1][0];
                r316_kdr = _r316_t4[1][1];
                r316_overshoot = _r316_t4[1][2];
                _r316_t4[1];
                (function () {
                    var r321_dr = r312_DotRadius * r316_kdr;
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("exclam." + r316_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                        var _r324_t0, _r324_t1;
                        var r324_df = r324_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                        r324_currentGlyph.include(r312_VBar.m(r324_df.middle, r1_clamp(0, r312_CAP * 0.4, r312_emotionBottom * 1.18), r312_CAP));
                        r324_currentGlyph.include(r316_DrawAt(r324_df.middle, r321_dr, r321_dr - r316_overshoot));
                        r312_xn$GlyphSaveSink$2Lrc4b.save("alveolarClick." + r316_suffix, null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r324_currentGlyph, r324_df.markSet.capital()));
                        r312_xn$GlyphSaveSink$2Lrc4b.save("exclamDown." + r316_suffix, null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r324_currentGlyph, r312_FlipAround(r324_df.middle, r312_XH / 2)));
                        return void 0;
                    }));
                })();
            }
            r312_xn$selectvariant$7Hrq("exclam", "!", new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("exclamDown", 161, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("alveolarClick", 451, new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            r316_CreateTurnedLetter("alveolarPercussive", null, "alveolarClick", r312_HalfAdvance, r312_XH / 2);
            r316_CreateTurnedLetter("alveolarPercussive/baseline", null, "alveolarClick", r312_HalfAdvance, r312_CAP / 2);
            return r312_xn$deriveglyphs$7Hrq("alveolarClickRTail", 122634, "alveolarClick", function (r335_src, r335_sel) {
                var _r335_t0, _r335_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                    var _r337_t0, _r337_t1;
                    var r337_df = r337_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                    r337_currentGlyph.include(r337_df.markSet.capDesc());
                    r337_currentGlyph.include(r312_xn$referglyph$1aao(r335_src));
                    r337_currentGlyph.include(r316_RetroflexHook.m(new r312_xn$NamedParameterPair$2Lrc9b("x", r337_df.middle), new r312_xn$NamedParameterPair$2Lrc9b("y", 0), new r312_xn$NamedParameterPair$2Lrc9b("yAttach", r312_DotRadius)));
                    return void 0;
                });
            });
        })();
        return (function () {
            var r346_suffix, r346_Body, r346_RevBody, r346_DrawAt, r346_kdr, r346_overshoot, _r346_t2, _r346_t5, _r346_t6, _r346_tag7, _r346_t8, _r346_tag9;
            var r346_YConnectT = function (r347_top, r347_emotionBottom) {
                var _r347_t0, _r347_t1;
                return r1_mix(r347_emotionBottom, r347_top - r312_HalfStroke, 0.375);
            };
            var r346_SmoothShape = function (r348_top, r348_emotionBottom, r348_left, r348_right) {
                var _r348_t0, _r348_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                    var _r350_t0, _r350_t1;
                    var r350_strokeEndCor = Math.hypot(1, r312_TanSlope);
                    r350_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_g4(r348_left, r348_top - r312_Hook), r312_HookStart(r348_top), r312_g4(r348_right, r348_top - r312_ArchDepthB * 0.9), r312_alsoThru.g2(0.5, 0.45, r312_widths.center(r312_EssQuestion)), r312_straight.down.end(r1_mix(r348_left, r348_right, 0.5) - r312_HSwToV(r312_HalfStroke) * r350_strokeEndCor, r348_emotionBottom, r312_widths.lhs.heading(r312_Stroke * r350_strokeEndCor, r312_Downward))));
                    return void 0;
                });
            };
            var r346_RevSmoothShape = function (r352_top, r352_emotionBottom, r352_left, r352_right) {
                var _r352_t0, _r352_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var _r354_t0, _r354_t1;
                    var r354_strokeEndCor = Math.hypot(1, r312_TanSlope);
                    r354_currentGlyph.include(r312_dispiro(r312_widths.lhs(), r312_g4(r352_right, r352_top - r312_Hook), r312_HookStart(r352_top), r312_g4(r352_left, r352_top - r312_ArchDepthA * 0.9), r312_alsoThru.g2(0.5, 0.45, r312_widths.center(r312_EssQuestion)), r312_straight.down.end(r1_mix(r352_left, r352_right, 0.5) + r312_HSwToV(r312_HalfStroke) * r354_strokeEndCor, r352_emotionBottom, r312_widths.rhs.heading(r312_Stroke * r354_strokeEndCor, r312_Downward))));
                    return void 0;
                });
            };
            var r346_CornerShape = function (r356_top, r356_emotionBottom, r356_left, r356_right) {
                var _r356_t0, _r356_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    var r358_questionYConnect = r346_YConnectT(r356_top, r356_emotionBottom);
                    r358_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_g4(r356_left, r356_top - r312_Hook), r312_HookStart(r356_top), r312_g4(r356_right - r312_OX, r312_YSmoothMidR(r356_top, r358_questionYConnect - r312_Stroke, r312_ArchDepthA, r312_ArchDepthB)), r312_arcvh(), r312_straight.left.end(r1_mix(r356_left, r356_right, 0.5), r358_questionYConnect - r312_Stroke, r312_heading(r312_Leftward))));
                    r358_currentGlyph.include(r312_VBar.m(r1_mix(r356_left, r356_right, 0.5), r356_emotionBottom, r358_questionYConnect));
                    return void 0;
                });
            };
            var r346_RevCornerShape = function (r361_top, r361_emotionBottom, r361_left, r361_right) {
                var _r361_t0, _r361_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                    var _r363_t0, _r363_t1;
                    var r363_questionYConnect = r346_YConnectT(r361_top, r361_emotionBottom);
                    r363_currentGlyph.include(r312_dispiro(r312_widths.lhs(), r312_g4(r361_right, r361_top - r312_Hook), r312_HookStart(r361_top), r312_g4(r361_left + r312_OX, r312_YSmoothMidL(r361_top, r363_questionYConnect - r312_Stroke, r312_ArchDepthA, r312_ArchDepthB)), r312_arcvh(), r312_straight.right.end(r1_mix(r361_left, r361_right, 0.5), r363_questionYConnect - r312_Stroke, r312_heading(r312_Rightward))));
                    r363_currentGlyph.include(r312_VBar.m(r1_mix(r361_left, r361_right, 0.5), r361_emotionBottom, r363_questionYConnect));
                    return void 0;
                });
            };
            var r346_CornerFlatShape = function (r366_top, r366_emotionBottom, r366_left, r366_right) {
                var _r366_t0, _r366_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    var r368_questionYConnect = r346_YConnectT(r366_top, r366_emotionBottom);
                    var r368_depth = Math.max(r312_Stroke * 1.5, (r366_right - r366_left) * 0.5);
                    r368_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_flat(r1_mix(r366_left, r366_right, 0.125), r366_top, r312_heading(r312_Rightward)), r312_curl(r312_Arch["adjust-x"].top(r366_right - r368_depth), r366_top), r312_archv(), r312_g4(r366_right - r312_OX, r312_YSmoothMidR(r366_top, r368_questionYConnect - r312_Stroke, r312_ArchDepthA, r312_ArchDepthB)), r312_arcvh(), r312_straight.left.end(r1_mix(r366_left, r366_right, 0.5), r368_questionYConnect - r312_Stroke, r312_heading(r312_Leftward))));
                    r368_currentGlyph.include(r312_VBar.m(r1_mix(r366_left, r366_right, 0.5), r366_emotionBottom, r368_questionYConnect));
                    return void 0;
                });
            };
            var r346_RevCornerFlatShape = function (r371_top, r371_emotionBottom, r371_left, r371_right) {
                var _r371_t0, _r371_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                    var _r373_t0, _r373_t1;
                    var r373_questionYConnect = r346_YConnectT(r371_top, r371_emotionBottom);
                    var r373_depth = Math.max(r312_Stroke * 1.5, (r371_right - r371_left) * 0.5);
                    r373_currentGlyph.include(r312_dispiro(r312_widths.lhs(), r312_flat(r1_mix(r371_right, r371_left, 0.125), r371_top, r312_heading(r312_Leftward)), r312_curl(r312_Arch["adjust-x"].bot(r371_left + r373_depth), r371_top), r312_archv(), r312_g4(r371_left + r312_OX, r312_YSmoothMidL(r371_top, r373_questionYConnect - r312_Stroke, r312_ArchDepthA, r312_ArchDepthB)), r312_arcvh(), r312_straight.right.end(r1_mix(r371_left, r371_right, 0.5), r373_questionYConnect - r312_Stroke, r312_heading(r312_Rightward))));
                    r373_currentGlyph.include(r312_VBar.m(r1_mix(r371_left, r371_right, 0.5), r371_emotionBottom, r373_questionYConnect));
                    return void 0;
                });
            };
            var r346_HookConfig = {
                "smooth": [r346_SmoothShape, r346_RevSmoothShape],
                "corner": [r346_CornerShape, r346_RevCornerShape],
                "cornerFlatHooked": [r346_CornerFlatShape, r346_RevCornerFlatShape]
            };
            var _r346_t0 = Object.entries(r346_HookConfig)[Symbol.iterator]();
            var _r346_t1 = void 0;
            while (!(_r346_t1 = _r346_t0.next()).done) {
                _r346_t2 = _r346_t1.value;
                r346_suffix = _r346_t2[0];
                r346_Body = _r346_t2[1][0];
                r346_RevBody = _r346_t2[1][1];
                _r346_t2[1];
                (function () {
                    r312_xn$GlyphSaveSink$2Lrc4b.save("mdfGlottalStop/base." + r346_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                        var _r381_t0, _r381_t1;
                        r381_currentGlyph.include(r312_MarkSet.capital());
                        r381_currentGlyph.include(r346_Body(r312_CAP, r312_emotionBottom, r312_SB, r312_RightSB));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("mdfRevGlottalStop/base." + r346_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                        var _r386_t0, _r386_t1;
                        r386_currentGlyph.include(r312_MarkSet.capital());
                        r386_currentGlyph.include(r346_RevBody(r312_CAP, r312_emotionBottom, r312_SB, r312_RightSB));
                        return void 0;
                    }));
                })();
            }
            var r346_Config = r1_SuffixCfg.dotWeave(r312_DotVariants, r346_HookConfig);
            var _r346_t3 = Object.entries(r346_Config)[Symbol.iterator]();
            var _r346_t4 = void 0;
            while (!(_r346_t4 = _r346_t3.next()).done) {
                _r346_t5 = _r346_t4.value;
                r346_suffix = _r346_t5[0];
                r346_DrawAt = _r346_t5[1][0][0];
                r346_kdr = _r346_t5[1][0][1];
                r346_overshoot = _r346_t5[1][0][2];
                _r346_t5[1][0];
                r346_Body = _r346_t5[1][1][0];
                r346_RevBody = _r346_t5[1][1][1];
                _r346_t5[1][1];
                _r346_t5[1];
                (function () {
                    r312_xn$GlyphSaveSink$2Lrc4b.save("question." + r346_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                        var _r394_t0, _r394_t1;
                        r394_currentGlyph.include(r346_Body(r312_CAP, r312_emotionBottom, r312_SB, r312_RightSB));
                        r394_currentGlyph.include(r346_DrawAt(r312_Middle, r312_DotRadius * r346_kdr, r312_DotRadius * r346_kdr - r346_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("questionDown." + r346_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                        var _r399_t0, _r399_t1;
                        r399_currentGlyph.include(r312_xn$referglyph$1aao("question." + r346_suffix), r312_AS_BASE, r312_ALSO_METRICS);
                        r399_currentGlyph.include(r312_FlipAround(r312_Middle, r312_XH / 2));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("revQuestion." + r346_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                        var _r404_t0, _r404_t1;
                        r404_currentGlyph.include(r346_RevBody(r312_CAP, r312_emotionBottom, r312_SB, r312_RightSB));
                        r404_currentGlyph.include(r346_DrawAt(r312_Middle, r312_DotRadius * r346_kdr, r312_DotRadius * r346_kdr - r346_overshoot));
                        return void 0;
                    }));
                    var r391_InterroBangBodyImpl = function () {
                        var _r407_t0, _r407_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                            var _r409_t0, _r409_t1;
                            var r409_angle = 12 / 180 * Math.PI;
                            r409_currentGlyph.include(r346_Body(r312_CAP, r312_emotionBottom, r1_mix(r312_Middle, r312_SB, 0.75), r312_RightSB));
                            r409_currentGlyph.include(r312_Translate(-r312_Middle, -r312_DotRadius));
                            r409_currentGlyph.include(r312_Rotate(-2 * r409_angle));
                            r409_currentGlyph.include(r312_Translate(r312_Middle, r312_DotRadius));
                            r409_currentGlyph.include(r312_VBar.m(r312_Middle, r312_emotionBottom, r312_CAP));
                            r409_currentGlyph.include(r312_Translate(-r312_Middle, -r312_DotRadius));
                            r409_currentGlyph.include(r312_Rotate(1.2 * r409_angle));
                            r409_currentGlyph.include(r312_Translate(r312_Middle, r312_DotRadius));
                            return void 0;
                        });
                    };
                    r312_xn$GlyphSaveSink$2Lrc4b.save("interrobang." + r346_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                        var _r420_t0, _r420_t1;
                        r420_currentGlyph.include(r391_InterroBangBodyImpl());
                        r420_currentGlyph.include(r346_DrawAt(r312_Middle, r312_DotRadius * r346_kdr, r312_DotRadius * r346_kdr - r346_overshoot));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("gnaborretni." + r346_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                        var _r425_t0, _r425_t1;
                        r425_currentGlyph.include(r312_xn$referglyph$1aao("interrobang." + r346_suffix, r312_AS_BASE, r312_ALSO_METRICS));
                        r425_currentGlyph.include(r312_FlipAround(r312_Middle, r312_XH / 2));
                        return void 0;
                    }));
                })();
            }
            r312_xn$selectmultidimensionalvariant$7Hrq62b("question", "?", new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "question"]));
            r312_xn$selectmultidimensionalvariant$7Hrq62b("questionDown", 191, new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "question"]));
            r312_xn$selectmultidimensionalvariant$7Hrq62b("revQuestion", 11822, new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "question"]));
            r312_xn$selectmultidimensionalvariant$7Hrq62b("interrobang", 8253, new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "question"]));
            r312_xn$selectmultidimensionalvariant$7Hrq62b("gnaborretni", 11800, new r312_xn$NamedParameterPair$2Lrc9b("follows", ["punctuationDot", "question"]));
            r312_alias("symbolForSubstituteFormTwo", 9254, "revQuestion");
            r312_xn$selectvariant$7Hrq("mdfGlottalStop/base", null, new r312_xn$NamedParameterPair$2Lrc9b("follow", "question"));
            return r312_xn$selectvariant$7Hrq("mdfRevGlottalStop/base", null, new r312_xn$NamedParameterPair$2Lrc9b("follow", "question"));
        })();
    });
    return void 0;
});


