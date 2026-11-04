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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Zhe", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_legShape, r312_fSlab, r312_fMidSlab, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_tag14, _r312_t15, _r312_tag16;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Descender = _r312_t1.Descender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_Jut = _r312_t1.Jut;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_bezControls = _r312_t2.bezControls;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_archv = _r312_t2.archv;
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
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_MaskRight = _r312_t5.MaskRight;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_DiagCor = _r312_t5.DiagCor;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_FlipAround = _r312_t5.FlipAround;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var r312_ExtLineLhs = _r312_t5.ExtLineLhs;
        var r312_ExtLineRhs = _r312_t5.ExtLineRhs;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_CyrDescender = _r312_t7.CyrDescender;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r317_t0, _r317_t1;
            return {
                "Zhe": r312_Zhe
            };
        });
        var r312_Zhe = (function () {
            var r320_Descender, r320_StraightLegs, r320_CurlyLegs, r320_TouchingLegs, r320_ConnectingLegs, r320_CursiveLegs, r320_Shape, r320_HalfShape;
            var r320_exports = {};
            var r320_ZheSw = function (r327_df) {
                var _r327_t0, _r327_t1;
                return r327_df.adviceStroke(3.3);
            };
            var r320_ZheSw2 = function (r328_df) {
                var _r328_t0, _r328_t1;
                return r328_df.adviceStroke(4);
            };
            var r320_ZheSw3 = function (r329_df) {
                var _r329_t0, _r329_t1;
                return r329_df.adviceStroke(3.7);
            };
            var r320_Overshoot = function (r330_fSlab, r330_df) {
                var _r330_t0, _r330_t1;
                return r330_fSlab ? 0 : r312_O * 3 * r330_df.adws;
            };
            var r320_CenterBar = function (r331_fSlab, r331_df, r331_bot, r331_top, r331_midTop) {
                var _r331_t0, _r331_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                    var r333_fBGR, _r333_t0, _r333_t1;
                    var r333_fine = r320_ZheSw(r331_df);
                    r333_currentGlyph.include(r312_VBar.m(r331_df.middle, r331_bot, r331_midTop, r333_fine));
                    if (r331_fSlab) {
                        r333_fBGR = r331_midTop > r331_top;
                        if (!r312_para.isItalic && r331_df.width > 7 * r312_para.refJut) {
                            r333_currentGlyph.include(r312_HSerif.mb(r331_df.middle, r331_bot, r312_Jut));
                            if (!r333_fBGR) r333_currentGlyph.include(r312_HSerif.mt(r331_df.middle, r331_midTop, r312_Jut));
                        }
                        if (r333_fBGR) r333_currentGlyph.include(r312_HSerif.lt(r331_df.middle - r312_HSwToV(0.5 * r333_fine), r331_midTop, r312_SideJut));
                    }
                    return void 0;
                });
            };
            var r320_LegSerifs = function (r338_fSlab, r338_fHalf, r338_df, r338_bot, r338_top) {
                var _r338_t0, _r338_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    var r340_fine = r320_ZheSw(r338_df);
                    var r340_fineK = 0.1;
                    if (r338_fSlab) {
                        if (!r338_fHalf) {
                            r340_currentGlyph.include(r312_HSerif.lt(r338_df.leftSB + r340_fine * r340_fineK, r338_top, r312_SideJut, r340_fine));
                            r340_currentGlyph.include(r312_HSerif.lb(r338_df.leftSB + r340_fine * r340_fineK, r338_bot, r312_SideJut, r340_fine));
                        }
                        r340_currentGlyph.include(r312_HSerif.rt(r338_df.rightSB - r340_fine * r340_fineK, r338_top, r312_SideJut, r340_fine));
                        r340_currentGlyph.include(r312_HSerif.rb(r338_df.rightSB - r340_fine * r340_fineK, r338_bot, r312_SideJut, r340_fine));
                    }
                    return void 0;
                });
            };
            r320_exports.Descender = r320_Descender = function (r346_fSlab, r346_df) {
                var _r346_t0, _r346_t1;
                var r346_sw = r320_ZheSw(r346_df);
                var r346_fineK = 0.1;
                return r312_CyrDescender.rSideJut(new r312_xn$NamedParameterPair$2Lrc9b("x", r346_df.rightSB - r346_fineK * r346_sw - r320_Overshoot(r346_fSlab, r346_df)), new r312_xn$NamedParameterPair$2Lrc9b("y", 0), new r312_xn$NamedParameterPair$2Lrc9b("refSw", r346_sw), new r312_xn$NamedParameterPair$2Lrc9b("sideJut", r312_SideJut));
            };
            r320_exports.StraightLegs = r320_StraightLegs = function (r352_fSlab, r352_fHalf, r352_df, r352_bot, r352_top) {
                var _r352_t0, _r352_t1;
                var r352_fine = r320_ZheSw(r352_df);
                var r352_overshoot = r320_Overshoot(r352_fSlab, r352_df);
                var r352_attach1X = r352_df.middle - r312_HSwToV(0.5 * r352_fine);
                var r352_attach1Y = r1_mix(r352_bot, r352_top, 0.42) - r352_fine;
                var r352_attach2Y = r1_mix(r352_bot, r352_top, 0.72) + r352_fine;
                var r352_mask = function () {
                    var _r353_t0, _r353_t1;
                    return r312_xn$spirooutline$1aao(r312_corner(r352_df.leftSB + r352_overshoot + r312_TINY, r352_top), r312_corner(r352_attach1X, r352_attach1Y + r312_TINY), r312_corner(r352_df.width - r352_attach1X, r352_attach1Y + r312_TINY), r312_corner(r352_df.rightSB - r352_overshoot - r312_TINY, r352_top));
                };
                var r352_rightHalf = r312_union(r312_intersection(r312_MaskRight(r352_df.middle), r312_ExtLineRhs(r352_df.rightSB - r352_overshoot, r352_top, r352_df.width - r352_attach1X, r352_attach1Y, r352_fine, 4)), r312_intersection(r312_MaskRight(r352_df.middle), r312_difference(r312_ExtLineLhs(r352_df.rightSB - r352_overshoot, r352_bot, r352_df.width - r352_attach1X, r352_attach2Y, r352_fine, 4), r352_mask())));
                var r352_leftHalf = r312_union(r312_intersection(r312_MaskLeft(r352_df.middle), r312_ExtLineLhs(r352_df.leftSB + r352_overshoot, r352_top, r352_attach1X, r352_attach1Y, r352_fine, 4)), r312_intersection(r312_MaskLeft(r352_df.middle), r312_difference(r312_ExtLineRhs(r352_df.leftSB + r352_overshoot, r352_bot, r352_attach1X, r352_attach2Y, r352_fine, 4), r352_mask())));
                var r352_fullShape = r352_fHalf ? r352_rightHalf : r312_union(r352_rightHalf, r352_leftHalf);
                return r312_intersection(r312_MaskBelow(r352_top), r312_MaskAbove(r352_bot), r352_fullShape);
            };
            r320_exports.CurlyLegs = r320_CurlyLegs = function (r355_fSlab, r355_fHalf, r355_df, r355_bot, r355_top) {
                var _r355_t0, _r355_t1;
                var r355_fine = r320_ZheSw(r355_df);
                var r355_fine2 = r320_ZheSw3(r355_df);
                var r355_overshoot = r355_fSlab ? 0 : 2 * r312_O * r355_df.adws;
                var r355_attach1X = r355_df.middle - r312_HSwToV(0.5 * r355_fine);
                var r355_attach1Y = r1_mix(r355_bot, r355_top, r355_fSlab ? 0.325 : 0.375);
                var r355_attach2Y = r1_mix(r355_bot, r355_top, 0.75);
                var r355_upperCurvature = function () {
                    var _r356_t0, _r356_t1;
                    return r312_bezControls(0, 0.3, 0.5, 0.75, 8);
                };
                var r355_lowerCurvature = function () {
                    var _r357_t0, _r357_t1;
                    return r312_quadControls(0, 0.3, 8);
                };
                var r355_rightHalf = r312_union(r312_dispiro(r312_g4.down.start(r355_df.rightSB - r355_overshoot, r355_top, r312_widths.rhs.heading(r355_fine, r312_Downward)), r355_upperCurvature(), r312_g4(r355_df.width - r355_attach1X, r355_attach1Y, r312_widths.rhs(r355_fine2))), r312_difference(r312_dispiro(r312_g4.up.start(r355_df.rightSB - r355_overshoot, r355_bot, r312_widths.lhs.heading(r355_fine, r312_Upward)), r355_lowerCurvature(), r312_g4(r355_df.width - r355_attach1X, r355_attach2Y, r312_widths.center(r355_fine2))), r312_intersection(r312_MaskRight(r355_df.middle), r312_xn$spirooutline$1aao(r312_corner.down.start(r355_df.rightSB - r355_overshoot - r312_TINY, r355_top), r355_lowerCurvature(), r312_corner(r355_df.width - r355_attach1X, r355_attach1Y + r312_TINY), r312_corner(r355_df.middle, r355_top)))));
                var r355_leftHalf = r312_union(r312_dispiro(r312_g4.down.start(r355_df.leftSB + r355_overshoot, r355_top, r312_widths.lhs.heading(r355_fine, r312_Downward)), r355_upperCurvature(), r312_g4(r355_attach1X, r355_attach1Y, r312_widths.lhs(r355_fine2))), r312_difference(r312_dispiro(r312_g4.up.start(r355_df.leftSB + r355_overshoot, r355_bot, r312_widths.rhs.heading(r355_fine, r312_Upward)), r355_lowerCurvature(), r312_g4(r355_attach1X, r355_attach2Y, r312_widths.center(r355_fine2))), r312_intersection(r312_MaskLeft(r355_df.middle), r312_xn$spirooutline$1aao(r312_corner.down.start(r355_df.leftSB + r355_overshoot + r312_TINY, r355_top), r355_lowerCurvature(), r312_corner(r355_attach1X, r355_attach1Y + r312_TINY), r312_corner(r355_df.middle, r355_top)))));
                var r355_fullShape = r355_fHalf ? r355_rightHalf : r312_union(r355_rightHalf, r355_leftHalf);
                return r312_intersection(r312_MaskBelow(r355_top), r312_MaskAbove(r355_bot), r355_fullShape);
            };
            r320_exports.TouchingLegs = r320_TouchingLegs = function (r359_fSlab, r359_fHalf, r359_df, r359_bot, r359_top) {
                var _r359_t0, _r359_t1;
                return r320_ConnectedLegsImpl(1, r359_fSlab, r359_fHalf, r359_df, r359_bot, r359_top);
            };
            r320_exports.ConnectingLegs = r320_ConnectingLegs = function (r361_fSlab, r361_fHalf, r361_df, r361_bot, r361_top) {
                var _r361_t0, _r361_t1;
                return r320_ConnectedLegsImpl(0.6, r361_fSlab, r361_fHalf, r361_df, r361_bot, r361_top);
            };
            var r320_ConnectedLegsImpl = function (r362_k, r362_fSlab, r362_fHalf, r362_df, r362_bot, r362_top) {
                var _r362_t0, _r362_t1;
                var r362_fine = r320_ZheSw(r362_df);
                var r362_cor = r312_DiagCor(r362_top - r362_bot, r362_df.rightSB - r362_df.leftSB);
                var r362_midX = r1_mix(r362_df.leftSB, r362_df.middle - r312_HSwToV(r362_cor) * r362_fine, r362_k);
                var r362_midY = r1_mix(r362_bot, r362_top, 0.5);
                var r362_overshoot = r320_Overshoot(r362_fSlab, r362_df);
                var r362_rightHalf = r312_union(r312_intersection(r312_MaskBelow(r362_midY), r312_MaskAbove(r362_bot), r312_ExtLineLhs(r362_df.rightSB - r362_overshoot, r362_bot, r362_df.width - r362_midX, r362_midY, r362_fine, 4)), r312_intersection(r312_MaskBelow(r362_top), r312_MaskAbove(r362_midY), r312_ExtLineRhs(r362_df.rightSB - r362_overshoot, r362_top, r362_df.width - r362_midX, r362_midY, r362_fine, 4)));
                var r362_leftHalf = r312_union(r312_intersection(r312_MaskBelow(r362_midY), r312_MaskAbove(r362_bot), r312_ExtLineRhs(r362_df.leftSB + r362_overshoot, r362_bot, r362_midX, r362_midY, r362_fine, 4)), r312_intersection(r312_MaskBelow(r362_top), r312_MaskAbove(r362_midY), r312_ExtLineLhs(r362_df.leftSB + r362_overshoot, r362_top, r362_midX, r362_midY, r362_fine, 4)));
                var r362_fullShape = r362_fHalf ? r362_rightHalf : r312_union(r362_rightHalf, r362_leftHalf);
                return r312_union(r362_fullShape, r312_HBar.m(r362_fHalf ? r362_df.middle : r362_midX, r362_df.width - r362_midX, r362_midY, r362_fine));
            };
            r320_exports.CursiveLegs = r320_CursiveLegs = function (r364_fSlab, r364_fHalf, r364_df, r364_bot, r364_top) {
                var _r364_t0, _r364_t1;
                var r364_fine = r320_ZheSw(r364_df);
                var r364_fine2 = r364_df.adviceStroke(4.2);
                var r364_midX = r1_mix(r364_df.leftSB, r364_df.middle - r312_HSwToV(0.5 * r364_fine), 0.4);
                var r364_midY = r1_mix(r364_bot, r364_top, 0.5);
                var r364_overshoot = r320_Overshoot(r364_fSlab, r364_df);
                var r364_rightHalf = r312_dispiro(r312_straight.left.start(r364_df.rightSB - r364_overshoot, r364_top - r364_fine, r312_widths.rhs.heading(r364_fine, r312_Leftward)), r312_archv(), r312_g4.down.mid(r364_df.width - r364_midX + r312_OX, r364_midY, r312_widths.rhs.heading(r364_fine2, r312_Downward)), r312_arcvh(), r312_straight.right.end(r364_df.rightSB - r364_overshoot, r364_bot + r364_fine, r312_widths.rhs.heading(r364_fine, r312_Rightward)));
                var r364_leftHalf = r312_xn$withtransform$5sIl(r312_FlipAround(r364_df.middle, 0.5 * r364_top), r364_rightHalf);
                var r364_fullShape = r364_fHalf ? r364_rightHalf : r312_union(r364_rightHalf, r364_leftHalf);
                return r312_union(r364_fullShape, r312_HBar.m(r364_fHalf ? r364_df.middle : r364_midX + 0.5 * r364_fine, r364_df.width - (r364_midX + 0.5 * r364_fine), r364_midY, r364_fine));
            };
            r320_exports.Shape = r320_Shape = function (r366_Legs, r366_fSlab, r366_fMidSlab, r366_df, r366_bot, r366_top, r366_midTop) {
                var _r366_t0, _r366_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    r368_currentGlyph.include(r320_CenterBar(r366_fMidSlab, r366_df, r366_bot, r366_top, r366_midTop));
                    r368_currentGlyph.include(r366_Legs(r366_fSlab, false, r366_df, r366_bot, r366_top));
                    r368_currentGlyph.include(r320_LegSerifs(r366_fSlab, false, r366_df, r366_bot, r366_top));
                    return void 0;
                });
            };
            r320_exports.HalfShape = r320_HalfShape = function (r373_Legs, r373_fSlab, r373_fMidSlab, r373_df, r373_bot, r373_top, r373_midTop) {
                var _r373_t0, _r373_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                    var _r375_t0, _r375_t1;
                    r375_currentGlyph.include(r320_CenterBar(r373_fMidSlab, r373_df, r373_bot, r373_top, r373_midTop));
                    r375_currentGlyph.include(r373_Legs(r373_fSlab, true, r373_df, r373_bot, r373_top));
                    r375_currentGlyph.include(r320_LegSerifs(r373_fSlab, true, r373_df, r373_bot, r373_top));
                    return void 0;
                });
            };
            return r320_exports;
        })();
        var r312_ZheConfig = {
            "straight": [r312_Zhe.StraightLegs, r312_SLAB, r312_SLAB],
            "curly": [r312_Zhe.CurlyLegs, r312_SLAB, r312_SLAB],
            "symmetricTouching": [r312_Zhe.TouchingLegs, r312_SLAB, r312_SLAB],
            "symmetricConnected": [r312_Zhe.ConnectingLegs, r312_SLAB, r312_SLAB],
            "cursive": [r312_Zhe.CursiveLegs, false, r312_SLAB]
        };
        var _r312_t8 = Object.entries(r312_ZheConfig)[Symbol.iterator]();
        var _r312_t9 = void 0;
        while (!(_r312_t9 = _r312_t8.next()).done) {
            _r312_t10 = _r312_t9.value;
            r312_suffix = _r312_t10[0];
            r312_legShape = _r312_t10[1][0];
            r312_fSlab = _r312_t10[1][1];
            r312_fMidSlab = _r312_t10[1][2];
            _r312_t10[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Zhe." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                    var _r384_t0, _r384_t1;
                    var r384_df = r384_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
                    r384_currentGlyph.include(r384_df.markSet.capital());
                    r384_currentGlyph.include(r312_Zhe.Shape(r312_legShape, r312_fSlab, r312_fMidSlab, r384_df, 0, r312_CAP, r312_CAP));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ZheDescender." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                    var _r390_t0, _r390_t1;
                    var r390_df = r312_DivFrame(r312_para.advanceScaleMM, 3);
                    r390_currentGlyph.include(r312_xn$referglyph$1aao("cyrl/Zhe." + r312_suffix), r312_AS_BASE, r312_ALSO_METRICS);
                    r390_currentGlyph.include(r312_Zhe.Descender(r312_fSlab, r390_df));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zhe." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                    var _r395_t0, _r395_t1;
                    var r395_df = r395_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r395_currentGlyph.include(r395_df.markSet.e());
                    r395_currentGlyph.include(r312_Zhe.Shape(r312_legShape, r312_fSlab, r312_fMidSlab, r395_df, 0, r312_XH, r312_XH));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zheDescender." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                    var _r401_t0, _r401_t1;
                    var r401_df = r312_DivFrame(r312_para.advanceScaleM, 3);
                    r401_currentGlyph.include(r312_xn$referglyph$1aao("cyrl/zhe." + r312_suffix), r312_AS_BASE, r312_ALSO_METRICS);
                    r401_currentGlyph.include(r312_Zhe.Descender(r312_fSlab, r401_df));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zhe.BGR." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                    var _r406_t0, _r406_t1;
                    var r406_df = r406_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r406_currentGlyph.include(r406_df.markSet.b());
                    r406_currentGlyph.include(r312_Zhe.Shape(r312_legShape, r312_fSlab, r312_fMidSlab, r406_df, 0, r312_XH, r312_Ascender));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Zhe", 1046);
        r312_xn$selectvariant$7Hrq("cyrl/ZheDescender", 1174, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Zhe"));
        r312_xn$selectvariant$7Hrq("cyrl/zhe", 1078);
        r312_xn$selectvariant$7Hrq("cyrl/zhe.BGR", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/zhe"));
        return r312_xn$selectvariant$7Hrq("cyrl/zheDescender", 1175, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/zhe"));
    });
    return void 0;
});


