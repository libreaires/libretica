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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Small", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_DrawAt, r313_kDotRadius, r313_overshoot, _r313_t10, _r313_t13, _r313_t16, _r313_t17, _r313_t18, _r313_t19, _r313_tag20, _r313_t21, _r313_tag22, _r313_t23, _r313_tag24;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_GlobalTransform = _r313_t1.GlobalTransform;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_SquareDotScalar = _r313_t1.SquareDotScalar;
        var r313_CThin = _r313_t1.CThin;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DotRadius = _r313_t1.DotRadius;
        var r313_PeriodRadius = _r313_t1.PeriodRadius;
        var r313_OperatorStroke = _r313_t1.OperatorStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_close = _r313_t2.close;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_quadControls = _r313_t2.quadControls;
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
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_SquareAt = _r313_t5.SquareAt;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_RingStrokeAt = _r313_t5.RingStrokeAt;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var r313_DotVariants = _r313_t5.DotVariants;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var r313_turned = _r313_t6.turned;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Ellipsis"].resolve();
        var r313_EllipsisDotRadius = _r313_t7.EllipsisDotRadius;
        var _r313_t8 = Object.entries(r313_DotVariants)[Symbol.iterator]();
        var _r313_t9 = void 0;
        while (!(_r313_t9 = _r313_t8.next()).done) {
            _r313_t10 = _r313_t9.value;
            r313_suffix = _r313_t10[0];
            r313_DrawAt = _r313_t10[1][0];
            r313_kDotRadius = _r313_t10[1][1];
            r313_overshoot = _r313_t10[1][2];
            _r313_t10[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("period." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                    var _r322_t0, _r322_t1;
                    var r322_df = r322_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                    r322_currentGlyph.include(r313_DrawAt(r322_df.middle, r313_PeriodRadius * r313_kDotRadius, r313_PeriodRadius * r313_kDotRadius - r313_overshoot));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("halfXhPeriod." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                    var _r327_t0, _r327_t1;
                    var r327_df = r327_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                    r327_currentGlyph.include(r313_DrawAt(r327_df.middle, r313_XH / 2, r313_PeriodRadius * r313_kDotRadius - r313_overshoot));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("xhPeriod." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                    var _r332_t0, _r332_t1;
                    var r332_df = r332_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                    r332_currentGlyph.include(r313_DrawAt(r332_df.middle, r313_XH - r313_PeriodRadius * r313_kDotRadius, r313_PeriodRadius * r313_kDotRadius - r313_overshoot));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("sinologicalDot." + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r332_currentGlyph, r332_df.markSet.e()));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("capPeriod." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var _r339_t0, _r339_t1;
                    var r339_df = r339_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                    r339_currentGlyph.include(r313_DrawAt(r339_df.middle, r313_CAP - r313_PeriodRadius * r313_kDotRadius, r313_PeriodRadius * r313_kDotRadius - r313_overshoot));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smallPeriod." + r313_suffix, null, r313_DrawAt(r313_Middle, 0 + r313_DotRadius * r313_kDotRadius, r313_DotRadius * r313_kDotRadius - r313_overshoot));
                r313_xn$GlyphSaveSink$2Lrc4b.save("halfXhSmallPeriod." + r313_suffix, null, r313_DrawAt(r313_Middle, r313_XH / 2, r313_DotRadius * r313_kDotRadius - r313_overshoot));
                r313_xn$GlyphSaveSink$2Lrc4b.save("halfCapSmallPeriod." + r313_suffix, null, r313_DrawAt(r313_Middle, r313_CAP / 2, r313_DotRadius * r313_kDotRadius - r313_overshoot));
                r313_xn$GlyphSaveSink$2Lrc4b.save("xhSmallPeriod." + r313_suffix, null, r313_DrawAt(r313_Middle, r313_XH - r313_DotRadius * r313_kDotRadius, r313_DotRadius * r313_kDotRadius - r313_overshoot));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("capSmallPeriod." + r313_suffix, null, r313_DrawAt(r313_Middle, r313_CAP - r313_DotRadius * r313_kDotRadius, r313_DotRadius * r313_kDotRadius - r313_overshoot));
            })();
        }
        r313_xn$selectvariant$7Hrq("period", ".", new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("sinologicalDot", 42895, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        var r313_CommaShapeT = function (r349_cx, r349_cy, r349_gp) {
            var _r349_t0, _r349_t1;
            return r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var _r352_t1, _r352_t2;
                r352_currentGlyph.gizmo = r313_Translate(0, 0);
                r352_currentGlyph.include(r349_gp);
                var _r352_t0 = r313_GlobalTransform.apply({
                    "x": r349_cx,
                    "y": r349_cy
                });
                var r352_mx1 = _r352_t0.x;
                var r352_my1 = _r352_t0.y;
                r352_currentGlyph.include(r313_Translate(r352_mx1, r352_my1));
                return void 0;
            }));
        };
        var r313_CommaShape = function (r355_kdr, r355_o) {
            var _r355_t0, _r355_t1, _r355_t2, _r355_tag3;
            return (function () {
                var r358_round, r358_square;
                var r358_exports = {};
                var r358_r = r313_PeriodRadius * r355_kdr;
                var r358_ro = r358_r - r355_o;
                var r358_sw = Math.min(r313_AdviceStroke(4), r358_r * 0.8);
                var r358_swEnd = Math.min(r313_AdviceStroke(2), r358_r * 1);
                var r358_commaOverflow = r358_r - r358_swEnd / 2;
                var r358_rFill = r358_ro - r358_sw / 4;
                r358_exports.round = r358_round = function (r366_cx, r366_cy) {
                    var _r366_t0, _r366_t1;
                    return r313_CommaShapeT(r366_cx, r366_cy, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                        var _r368_t0, _r368_t1;
                        r368_currentGlyph.include(r313_union(r313_xn$spirooutline$1aao(r313_g4(r358_rFill, r358_rFill), r313_arcvh(), r313_g4(0, 0), r313_archv(), r313_g4(-r358_rFill, r358_rFill), r313_arcvh(), r313_g4(0, 2 * r358_rFill), r313_archv(), r313_close()), r313_dispiro(r313_g4(r358_r, r358_r, r313_widths.rhs(r358_sw / 4)), r313_arcvh(), r313_g4(0, r355_o, r313_widths.rhs(r358_sw / 2)), r313_archv(), r313_g4(-r358_ro, r358_r), r313_arcvh(), r313_g4(0, r358_r + r358_ro), r313_archv(), r313_g4(+r358_ro, r358_r, r313_widths.rhs(r358_sw)), r313_quadControls(0 + r313_TanSlope / 2, 0.5 - r313_TanSlope * (r358_r / r313_Descender), 12), r313_g4(r1_mix(0, r313_Descender, r313_TanSlope) - r358_commaOverflow, r313_Descender, r313_widths.rhs(r358_swEnd)))));
                        return void 0;
                    }));
                };
                r358_exports.square = r358_square = function (r371_cx, r371_cy) {
                    var _r371_t0, _r371_t1;
                    return r313_xn$withtransform$5sIl(r313_Translate(r371_cx, r371_cy), new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                        var _r373_t0, _r373_t1;
                        r373_currentGlyph.include(r313_union(r313_SquareAt(0, r358_r, r358_r), r313_dispiro(r313_flat(r358_r, r358_r, r313_widths.rhs(r358_sw)), r313_curl(r358_r, 0, r313_widths.rhs(r358_sw)), r313_quadControls(0 + r313_TanSlope / 2, 0.5 - r313_TanSlope * (r358_r / r313_Descender), 12), r313_g4(r1_mix(0, r313_Descender, r313_TanSlope) - r358_commaOverflow, r313_Descender, r313_widths.rhs(r358_swEnd)))));
                        return void 0;
                    }));
                };
                return r358_exports;
            })();
        };
        var r313_RevCommaShape = function (r375_kdr, r375_o) {
            var _r375_t0, _r375_t1, _r375_t2, _r375_tag3;
            return (function () {
                var r378_round, r378_square;
                var r378_exports = {};
                var r378_r = r313_PeriodRadius * r375_kdr;
                var r378_ro = r378_r - r375_o;
                var r378_sw = Math.min(r313_AdviceStroke(4), r378_r * 0.8);
                var r378_swEnd = Math.min(r313_AdviceStroke(2), r378_r * 1);
                var r378_commaOverflow = r378_r - r378_swEnd / 2;
                var r378_rFill = r378_ro - r378_sw / 4;
                r378_exports.round = r378_round = function (r386_cx, r386_cy) {
                    var _r386_t0, _r386_t1;
                    return r313_CommaShapeT(r386_cx, r386_cy, new r313_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                        var _r388_t0, _r388_t1;
                        r388_currentGlyph.include(r313_union(r313_xn$spirooutline$1aao(r313_g4(r378_rFill, r378_rFill), r313_arcvh(), r313_g4(0, 0), r313_archv(), r313_g4(-r378_rFill, r378_rFill), r313_arcvh(), r313_g4(0, 2 * r378_rFill), r313_archv(), r313_close()), r313_dispiro(r313_g4(-r378_r, r378_r, r313_widths.lhs(r378_sw / 4)), r313_arcvh(), r313_g4(0, r375_o, r313_widths.lhs(r378_sw / 2)), r313_archv(), r313_g4(+r378_ro, r378_r), r313_arcvh(), r313_g4(0, r378_r + r378_ro), r313_archv(), r313_g4(-r378_ro, r378_r, r313_widths.lhs(r378_sw)), r313_quadControls(0 - r313_TanSlope / 2, 0.5 - r313_TanSlope * (r378_r / r313_Descender), 12), r313_g4(r1_mix(0, r313_Descender, r313_TanSlope) + r378_commaOverflow, r313_Descender, r313_widths.lhs(r378_swEnd)))));
                        return void 0;
                    }));
                };
                r378_exports.square = r378_square = function (r391_cx, r391_cy) {
                    var _r391_t0, _r391_t1;
                    return r313_xn$withtransform$5sIl(r313_Translate(r391_cx, r391_cy), new r313_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                        var _r393_t0, _r393_t1;
                        r393_currentGlyph.include(r313_union(r313_SquareAt(0, r378_r, r378_r), r313_dispiro(r313_flat(-r378_r, r378_r, r313_widths.lhs(r378_sw)), r313_curl(-r378_r, 0), r313_quadControls(0 - r313_TanSlope / 2, 0.5 - r313_TanSlope * (r378_r / r313_Descender), 12), r313_g4(r1_mix(0, r313_Descender, r313_TanSlope) + r378_commaOverflow, r313_Descender, r313_widths.lhs(r378_swEnd)))));
                        return void 0;
                    }));
                };
                return r378_exports;
            })();
        };
        var _r313_t11 = Object.entries(r313_DotVariants)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_DrawAt = _r313_t13[1][0];
            r313_kDotRadius = _r313_t13[1][1];
            r313_overshoot = _r313_t13[1][2];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("comma." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                    var _r400_t0, _r400_t1;
                    var r400_df = r400_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                    r400_currentGlyph.include(r313_CommaShape(r313_kDotRadius, r313_overshoot)[r313_suffix](r400_df.middle, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revComma." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                    var _r405_t0, _r405_t1;
                    var r405_df = r405_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                    r405_currentGlyph.include(r313_RevCommaShape(r313_kDotRadius, r313_overshoot)[r313_suffix](r405_df.middle, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("comma/asDiacritic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t0, _r410_t1;
                    var r410_df = r410_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleSp));
                    r410_currentGlyph.include(r313_CommaShape(r313_kDotRadius, r313_overshoot)[r313_suffix](r410_df.middle, 0));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("revComma/asDiacritic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                    var _r415_t0, _r415_t1;
                    var r415_df = r415_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleSp));
                    r415_currentGlyph.include(r313_RevCommaShape(r313_kDotRadius, r313_overshoot)[r313_suffix](r415_df.middle, 0));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("comma", ",", new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("revComma", 11841, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("comma/asDiacritic", new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$selectvariant$7Hrq("revComma/asDiacritic", new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_turned("turnComma.round", null, "comma.round", r313_DivFrame(r313_para.advanceScaleI).middle, r313_PeriodRadius);
        r313_turned("turnComma.square", null, "comma.square", r313_DivFrame(r313_para.advanceScaleI).middle, r313_PeriodRadius * r313_SquareDotScalar);
        r313_xn$selectvariant$7Hrq("turnComma", 11826, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$derivecomposites$7Hrq("raisedPeriod.round", null, "period.round", r313_ApparentTranslate(0, r313_XH / 2 - r313_PeriodRadius));
        r313_xn$derivecomposites$7Hrq("raisedPeriod.square", null, "period.square", r313_ApparentTranslate(0, r313_XH / 2 - r313_PeriodRadius * r313_SquareDotScalar));
        r313_xn$derivecomposites$7Hrq("raisedComma.round", null, "comma.round", r313_ApparentTranslate(0, r313_XH / 2 - r313_PeriodRadius));
        r313_xn$derivecomposites$7Hrq("raisedComma.square", null, "comma.square", r313_ApparentTranslate(0, r313_XH / 2 - r313_PeriodRadius * r313_SquareDotScalar));
        r313_xn$selectvariant$7Hrq("raisedPeriod", 11827, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("raisedComma", 11828, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        var _r313_t14 = Object.entries(r313_DotVariants)[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_DrawAt = _r313_t16[1][0];
            r313_kDotRadius = _r313_t16[1][1];
            r313_overshoot = _r313_t16[1][2];
            _r313_t16[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("colon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                    var _r430_t0, _r430_t1;
                    r430_currentGlyph.include(r313_xn$referglyph$1aao("period." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r430_currentGlyph.include(r313_xn$referglyph$1aao("xhPeriod." + r313_suffix));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("colon/mid." + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r430_currentGlyph, new r313_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                        var _r436_t0, _r436_t1;
                        r436_currentGlyph.include(r313_ApparentTranslate(0, r313_SymbolMid - r313_XH / 2));
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("capColon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                    var _r440_t0, _r440_t1;
                    r440_currentGlyph.include(r313_xn$referglyph$1aao("period." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r440_currentGlyph.include(r313_xn$referglyph$1aao("capPeriod." + r313_suffix));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("mdfColon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r445_currentGlyph) {
                    var _r445_t0, _r445_t1;
                    var r445_df = r445_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleSp));
                    var r445_k = 0.9;
                    var r445_dr = r313_DotRadius * r313_kDotRadius;
                    r445_currentGlyph.include(r313_DrawAt(r445_df.middle, r1_mix(r445_dr, r313_XH - r445_dr, 0 + r445_k), r445_dr - r313_overshoot));
                    r445_currentGlyph.include(r313_DrawAt(r445_df.middle, r1_mix(r445_dr, r313_XH - r445_dr, 1 - r445_k), r445_dr - r313_overshoot));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("mdfRaisedColon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                    var _r451_t0, _r451_t1;
                    var r451_df = r451_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleSp));
                    var r451_k = 0.9;
                    var r451_dr = r313_DotRadius * r313_kDotRadius;
                    r451_currentGlyph.include(r313_DrawAt(r451_df.middle, r313_CAP - r1_mix(r451_dr, r313_XH - r451_dr, 0 + r451_k), r451_dr - r313_overshoot));
                    r451_currentGlyph.include(r313_DrawAt(r451_df.middle, r313_CAP - r1_mix(r451_dr, r313_XH - r451_dr, 1 - r451_k), r451_dr - r313_overshoot));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("semicolon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
                    var _r457_t0, _r457_t1;
                    r457_currentGlyph.include(r313_xn$referglyph$1aao("comma." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r457_currentGlyph.include(r313_xn$referglyph$1aao("xhPeriod." + r313_suffix));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revSemicolon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
                    var _r462_t0, _r462_t1;
                    r462_currentGlyph.include(r313_xn$referglyph$1aao("revComma." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r462_currentGlyph.include(r313_xn$referglyph$1aao("xhPeriod." + r313_suffix));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("doubleStackedComma." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    r467_currentGlyph.include(r313_xn$referglyph$1aao("comma." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r467_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r313_XH - 2 * r313_PeriodRadius * r313_kDotRadius), new r313_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
                        var _r471_t0, _r471_t1;
                        r471_currentGlyph.include(r313_xn$referglyph$1aao("comma." + r313_suffix), true, true);
                        return void 0;
                    })));
                    return void 0;
                }));
                var r427_multiDotShift = r313_RightSB - r313_DotRadius * r313_kDotRadius - r313_Middle;
                var r427_multiDotShiftDense = r1_mix(r313_Width, r313_RightSB, 0.5) - r313_DotRadius * r313_kDotRadius - r313_Middle;
                r313_xn$GlyphSaveSink$2Lrc4b.save("threeDotPunct." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r475_currentGlyph) {
                    var _r475_t0, _r475_t1;
                    r475_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+r427_multiDotShift, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
                        var _r478_t0, _r478_t1;
                        r478_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix), true, true);
                        r478_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix));
                        return void 0;
                    })));
                    r475_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r427_multiDotShift, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
                        var _r483_t0, _r483_t1;
                        r483_currentGlyph.include(r313_xn$referglyph$1aao("halfXhSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("geor/paragraphSeparator." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                    var _r487_t0, _r487_t1;
                    r487_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+r427_multiDotShift, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r490_currentGlyph) {
                        var _r490_t0, _r490_t1;
                        r490_currentGlyph.include(r313_xn$referglyph$1aao("halfXhSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    r487_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r427_multiDotShift, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                        var _r494_t0, _r494_t1;
                        r494_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix), true, true);
                        r494_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix));
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("twoDotOverOneDotPunct." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
                    var _r499_t0, _r499_t1;
                    r499_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix));
                    r499_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                        var _r503_t0, _r503_t1;
                        r503_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    r499_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r507_currentGlyph) {
                        var _r507_t0, _r507_t1;
                        r507_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("oneDotOverTwoDotPunct." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r511_currentGlyph) {
                    var _r511_t0, _r511_t1;
                    r511_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix));
                    r511_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                        var _r515_t0, _r515_t1;
                        r515_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    r511_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r519_currentGlyph) {
                        var _r519_t0, _r519_t1;
                        r519_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("fourDotPunct." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r523_currentGlyph) {
                    var _r523_t0, _r523_t1;
                    r523_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix));
                    r523_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix));
                    r523_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r528_currentGlyph) {
                        var _r528_t0, _r528_t1;
                        r528_currentGlyph.include(r313_xn$referglyph$1aao("halfXhSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    r523_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r532_currentGlyph) {
                        var _r532_t0, _r532_t1;
                        r532_currentGlyph.include(r313_xn$referglyph$1aao("halfXhSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("capFourDotPunct." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r536_currentGlyph) {
                    var _r536_t0, _r536_t1;
                    r536_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix));
                    r536_currentGlyph.include(r313_xn$referglyph$1aao("capSmallPeriod." + r313_suffix));
                    r536_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r541_currentGlyph) {
                        var _r541_t0, _r541_t1;
                        r541_currentGlyph.include(r313_xn$referglyph$1aao("halfCapSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    r536_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r545_currentGlyph) {
                        var _r545_t0, _r545_t1;
                        r545_currentGlyph.include(r313_xn$referglyph$1aao("halfCapSmallPeriod." + r313_suffix), true, true);
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("squareFourDotPunct." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r549_currentGlyph) {
                    var _r549_t0, _r549_t1;
                    r549_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                        var _r552_t0, _r552_t1;
                        r552_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix), true, true);
                        r552_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix));
                        return void 0;
                    })));
                    r549_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(+r427_multiDotShiftDense, 0), new r313_xn$Capture$2Lrc8.GlyphProc(function (r557_currentGlyph) {
                        var _r557_t0, _r557_t1;
                        r557_currentGlyph.include(r313_xn$referglyph$1aao("smallPeriod." + r313_suffix), true, true);
                        r557_currentGlyph.include(r313_xn$referglyph$1aao("xhSmallPeriod." + r313_suffix));
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("fiveDotPunct." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r562_currentGlyph) {
                    var _r562_t0, _r562_t1;
                    r562_currentGlyph.include(r313_xn$referglyph$1aao("squareFourDotPunct." + r313_suffix));
                    r562_currentGlyph.include(r313_xn$referglyph$1aao("halfXhSmallPeriod." + r313_suffix));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("fiveDotMark." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r567_currentGlyph) {
                    var _r567_t0, _r567_t1;
                    var r567_l = r1_mix(r313_SB, 0, 0.5);
                    var r567_r = r1_mix(r313_RightSB, r313_Width, 0.5);
                    var r567_radius = r313_EllipsisDotRadius(3, Math.min(r313_XH, r567_r - r567_l));
                    r567_currentGlyph.include(r313_DrawAt(r313_Middle, r567_radius, r313_kDotRadius * r567_radius - r313_overshoot));
                    r567_currentGlyph.include(r313_DrawAt(r313_Middle, r313_XH / 2, r313_kDotRadius * r567_radius - r313_overshoot));
                    r567_currentGlyph.include(r313_DrawAt(r313_Middle, r313_XH - r567_radius, r313_kDotRadius * r567_radius - r313_overshoot));
                    r567_currentGlyph.include(r313_DrawAt(r567_l + r567_radius, r313_XH / 2, r313_kDotRadius * r567_radius - r313_overshoot));
                    r567_currentGlyph.include(r313_DrawAt(r567_r - r567_radius, r313_XH / 2, r313_kDotRadius * r567_radius - r313_overshoot));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("dottedCross." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r575_currentGlyph) {
                    var _r575_t0, _r575_t1;
                    r575_currentGlyph.include(r313_HBar.m(r1_mix(0, r313_SB, 0.5), r1_mix(r313_Width, r313_RightSB, 0.5), r313_XH / 2, r313_OperatorStroke));
                    r575_currentGlyph.include(r313_VBar.m(r313_Middle, 0, r313_XH, r313_OperatorStroke));
                    var r575_radius = r313_HSwToV(0.5 * r313_AdviceStroke(3));
                    r575_currentGlyph.include(r313_DrawAt(r313_SB + r575_radius, r313_XH * 0.75, r313_kDotRadius * r575_radius - r313_overshoot));
                    r575_currentGlyph.include(r313_DrawAt(r313_SB + r575_radius, r313_XH * 0.25, r313_kDotRadius * r575_radius - r313_overshoot));
                    r575_currentGlyph.include(r313_DrawAt(r313_RightSB - r575_radius, r313_XH * 0.75, r313_kDotRadius * r575_radius - r313_overshoot));
                    r575_currentGlyph.include(r313_DrawAt(r313_RightSB - r575_radius, r313_XH * 0.25, r313_kDotRadius * r575_radius - r313_overshoot));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("colon", ":", new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("colon/mid", new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("mdfColon", 42889, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$selectvariant$7Hrq("mdfRaisedColon", 760, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$selectvariant$7Hrq("semicolon", ";", new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("revSemicolon", 8271, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("doubleStackedComma", 11849, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("threeDotPunct", 8278, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("geor/paragraphSeparator", 4347, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("twoDotOverOneDotPunct", 11818, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("oneDotOverTwoDotPunct", 11819, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("fourDotPunct", 8280, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("squareFourDotPunct", 11820, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("fiveDotPunct", 8281, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("fiveDotMark", 11821, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("capColon", 8282, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("capFourDotPunct", 8283, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_xn$selectvariant$7Hrq("dottedCross", 8284, new r313_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r313_alias("grek/question", 894, "semicolon");
        r313_alias("armn/fullstop", 1417, "colon");
        r313_turned("turnSemicolon", 11829, "semicolon", r313_DivFrame(r313_para.advanceScaleI).middle, r313_XH / 2);
        var r313_RingCommaStroke = function (r600_mx, r600_my, r600_rad, r600_s, r600_k1x, r600_k1y, r600_k2x, r600_k2y) {
            var _r600_t0, _r600_t1;
            var r600_u = r600_my + r600_rad;
            var r600_d = r600_my - r600_rad;
            var r600_l = r600_mx - r600_rad;
            var r600_r = r600_mx + r600_rad;
            var r600_fine = r600_s * r313_CThin;
            return r313_dispiro(r313_widths.rhs(r1_fallback(r600_fine)), r313_g4(r600_mx, r600_u - r600_s + r600_fine, r313_heading(r313_Rightward)), r313_archv(), r313_g4(r600_r - r600_s + r1_mix(r600_fine, r600_s, 0.5), r600_my, r313_widths.rhs(r1_mix(r600_fine, r600_s, 0.5))), r313_arcvh(), r313_g4(r600_mx, r600_d, r313_widths.rhs.heading(r600_s, r313_Leftward)), r313_archv(), r313_g4(r600_l, r600_my), r313_arcvh(), r313_g4(r600_mx, r600_u, r313_heading(r313_Rightward)), r313_archv(), r313_g4(r600_r, r600_my, r313_widths.rhs(r600_fine)), r313_flat(r600_mx + r600_rad * r600_k1x, r600_d + r600_rad * r600_k1y, r313_widths.rhs(r600_s)), r313_curl(r600_mx - r600_rad * r600_k2x, r600_d - r600_rad * r600_k2y));
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("hollowColon", 10626, new r313_xn$Capture$2Lrc8.GlyphProc(function (r603_currentGlyph) {
            var _r603_t0, _r603_t1;
            var r603_df = r603_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
            var r603_sw = r313_AdviceStroke(5);
            var r603_dotRadius = Math.max(r313_PeriodRadius, r313_XH / 8);
            r603_currentGlyph.include(r313_RingStrokeAt(r603_df.middle, r313_XH - r603_dotRadius, r603_dotRadius + r603_sw / 2 - r313_O, r603_sw));
            r603_currentGlyph.include(r313_RingStrokeAt(r603_df.middle, r603_dotRadius, r603_dotRadius + r603_sw / 2 - r313_O, r603_sw));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("zNotationSchemaComposition", 10783, new r313_xn$Capture$2Lrc8.GlyphProc(function (r609_currentGlyph) {
            var _r609_t0, _r609_t1;
            var r609_df = r609_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
            var r609_sw = r313_AdviceStroke(5);
            var r609_dotRadius = Math.max(r313_PeriodRadius, r313_XH / 8);
            r609_currentGlyph.include(r313_RingStrokeAt(r609_df.middle, r313_XH - r609_dotRadius, r609_dotRadius + r609_sw / 2 - r313_O, r609_sw));
            r609_currentGlyph.include(r313_intersection(r313_MaskAbove(r313_Descender), r313_RingCommaStroke(r609_df.middle, r609_dotRadius, r609_dotRadius + r609_sw / 2 - r313_O, r609_sw, 0.75, 0, 1, 3)));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("zNotationRelationalComposition", 10814, new r313_xn$Capture$2Lrc8.GlyphProc(function (r615_currentGlyph) {
            var _r615_t0, _r615_t1;
            var r615_df = r615_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
            var r615_sw = r313_AdviceStroke(6.5);
            var r615_dotRadius = 0.625 * Math.max(r313_PeriodRadius, r313_XH / 8);
            r615_currentGlyph.include(r313_RingStrokeAt(r615_df.middle, 0.625 * r313_XH - r615_dotRadius, r615_dotRadius + r615_sw / 2 - r313_O, r615_sw));
            r615_currentGlyph.include(r313_intersection(r313_MaskAbove(r313_Descender * 0.75), r313_RingCommaStroke(r615_df.middle, r615_dotRadius, r615_dotRadius + r615_sw / 2 - r313_O, r615_sw, 0.75, 0, 0.75, 3)));
            return void 0;
        }));
    });
    return void 0;
});


