"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_LowerYDotAtBelow = _r1_t9.LowerYDotAtBelow;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_OgonekTrY = _r1_t9.OgonekTrY;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-Y", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_straightBar, r313_bottomShape, r313_slabKind, r313_hookShape, r313_hookEnd, r313_DrawAt, r313_kdr, _r313_t13, _r313_t16, _r313_t19, _r313_t21, _r313_t22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28, _r313_t29, _r313_tag30;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_Metrics = _r313_t0.Metrics;
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_HalfUPM = _r313_t1.HalfUPM;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Italify = _r313_t1.Italify;
        var r313_Scale = _r313_t1.Scale;
        var r313_Translate = _r313_t1.Translate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_Hook = _r313_t1.Hook;
        var r313_SHook = _r313_t1.SHook;
        var r313_TailX = _r313_t1.TailX;
        var r313_TailY = _r313_t1.TailY;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_AccentStackOffset = _r313_t1.AccentStackOffset;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DotRadius = _r313_t1.DotRadius;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_important = _r313_t2.important;
        var r313_alsoThruThem = _r313_t2.alsoThruThem;
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
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_tagged = _r313_t5.tagged;
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_DiagCor = _r313_t5.DiagCor;
        var r313_DiagCorDs = _r313_t5.DiagCorDs;
        var r313_HBar = _r313_t5.HBar;
        var r313_HOverlayBar = _r313_t5.HOverlayBar;
        var r313_FlatSlashShape = _r313_t5.FlatSlashShape;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var r313_DotVariants = _r313_t5.DotVariants;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Below"].resolve();
        var r313_belowMarkStack = _r313_t7.belowMarkStack;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_uBowl = _r313_t9.uBowl;
        var r313_FlatHookDepth = _r313_t9.FlatHookDepth;
        var r313_SerifFrame = _r313_t9.SerifFrame;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t10.LetterBarOverlay;
        var r313_BeltOverlay = _r313_t10.BeltOverlay;
        var r313_TopHook = _r313_t10.TopHook;
        var r313_xn$SLABNONE$5sIl = [false, false, false];
        var r313_xn$SLABAUTO$5sIl = [r313_SLAB, r313_SLAB, false];
        var r313_xn$SLABALL$5sIl = [true, true, false];
        var r313_xn$SLABMOTION$5sIl = [false, false, true];
        var r313_xn$SLABCURSIVEMOTION$5sIl8 = [true, true, true];
        var r313_xn$TSNONE$3cah = 0;
        var r313_xn$TSHOOKRIGHT$3cah5 = 1;
        var r313_xn$SHRINKNONE$7Hrq = 0;
        var r313_xn$SHRINKINNER$7Hrq = 1;
        var r313_xn$BSSTRAIGHT$3cah = 0;
        var r313_xn$BSTURN$3cah = 1;
        var r313_xn$BSLOOP$3cah = 2;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "NonCursiveYShapeT": r313_NonCursiveYShapeT,
                "NonCursiveYConfig": r313_NonCursiveYConfig
            };
        });
        var r313_NonCursiveYShapeT = function (r322_straightBar, r322_bottomShape, r322_slabKind, r322__l, r322__r, r322__sb, r322__sw) {
            var _r322_t0, _r322_t1, _r322_t2, _r322_tag3;
            return (function () {
                var r325_RightHalf, r325_LeftHalf, r325_SmallYShape, r325_SmallYHookRightShape, r325_SmallLambdaShape, r325_SmallLambdaTailedShape;
                var r325_exports = {};
                var _r325_t0 = r322_slabKind;
                var r325_doSlabTop = _r325_t0[0];
                var r325_doSlabBottom = _r325_t0[1];
                var r325_doSlabMotion = _r325_t0[2];
                var r325_l = r1_fallback(r322__l, 0);
                var r325_r = r1_fallback(r322__r, r313_Width);
                var r325_m = r1_mix(r325_l, r325_r, 0.5);
                var r325_sb = r1_fallback(r322__sb, r313_SB);
                var r325_rsb = r325_r + r325_l - r325_sb;
                var r325_sw = r1_fallback(r322__sw, r313_Stroke);
                var r325_useStraightBottom = r322_straightBar && !r322_bottomShape;
                var r325_slabCurly = r325_doSlabTop && !r322_straightBar;
                var r325_slabCurlyNoTurnT = r325_doSlabTop && !r322_straightBar && !r322_bottomShape;
                var r325_slabCurlyNoTurnB = r325_doSlabBottom && !r322_straightBar && !r322_bottomShape;
                var r325_bottomIsNotVertical = r325_doSlabBottom || r325_useStraightBottom || r322_bottomShape;
                var r325_yBottomJut = r313_Jut * 1.25;
                var r325_slabysize = 0.5 * r325_yBottomJut * (r313_Width / r313_HalfUPM) + r325_sw;
                var r325_CalcDS = function (r332_top, r332_bottom) {
                    var _r332_t0, _r332_t1;
                    var r332_pds = 0.1;
                    var r332_pds2 = 0.01;
                    var r332_slabyvx = 0.625;
                    var r332_ds0 = (r332_top - r332_bottom) * r332_pds;
                    var r332_ds20 = (r332_top - r332_bottom) * r332_pds2;
                    var r332_ds = r325_slabCurly ? Math.max(r332_ds0, r313_AdviceStroke2(3, 6, r332_top - r332_bottom)) : r332_ds0;
                    var r332_ds2 = r325_slabCurlyNoTurnB ? r332_ds : r332_ds20 + (r325_bottomIsNotVertical ? r325_slabysize * r332_slabyvx : 0);
                    return [r332_ds, r332_ds2];
                };
                var r325_Metrics = function (r333_ts, r333_kShrink) {
                    var _r333_t0, _r333_t1, _r333_t2, _r333_tag3;
                    return (function () {
                        var r336_px1, r336_py1, r336_px2, r336_py2VertBot, r336_py2, r336_dpy1, r336_dpy2, r336_yrstrokel, r336_yrstroker, r336_yshrink, r336_diagCor, r336_yJoinProportion, r336_yJoinHeight, r336_createSplitMask;
                        var r336_exports = {};
                        var r336_pxHookRightOffset = r313_StrokeWidthBlend(0.5 * r313_TailX, 0.375 * r313_TailX) / (r325_rsb - r325_sb);
                        r336_exports.px1 = r336_px1 = 0.84 - (r333_ts === r313_xn$TSHOOKRIGHT$3cah5 ? r336_pxHookRightOffset : 0);
                        r336_exports.py1 = r336_py1 = r313_StrokeWidthBlend(0.8, 0.76) * (r325_slabCurly ? r313_StrokeWidthBlend(1, 0.9) : 1);
                        r336_exports.px2 = r336_px2 = r325_slabCurlyNoTurnB ? r336_px1 : 0.95;
                        r336_exports.py2VertBot = r336_py2VertBot = 0.88 * (r325_slabCurly ? r313_StrokeWidthBlend(1, 0.9) : 1);
                        r336_exports.py2 = r336_py2 = r325_slabCurlyNoTurnB ? r336_py1 : r325_bottomIsNotVertical ? 0.97 : r336_py2VertBot;
                        r336_exports.dpy1 = r336_dpy1 = (1 - r1_linreg(1 - r336_px2, 1 - r336_py2, r336_px1, r336_py1, 1)) / (1 - r336_py1);
                        r336_exports.dpy2 = r336_dpy2 = (1 - r1_linreg(1 - r336_px1, 1 - r336_py1, r336_px2, r336_py2, 1)) / (1 - r336_py2);
                        var r336_yrstrokel0 = r1_mix(r325_l, r325_r, 0.4);
                        r336_exports.yrstrokel = r336_yrstrokel = r336_yrstrokel0 + r313_HSwToV(r325_sw * (r325_bottomIsNotVertical ? 2 / 3 : 1 / 3) * (r325_slabCurly ? r313_StrokeWidthBlend(0.95, 0.97) : 1));
                        r336_exports.yrstroker = r336_yrstroker = r1_mix(r325_r, r325_rsb, r322_straightBar ? r313_DesignParameters.straightSmallYShapeSbShrink : 1);
                        r336_exports.yshrink = r336_yshrink = r1_mix(1, r313_StrokeWidthBlend(1, 0.85) * (r322_straightBar ? r313_AdviceStroke(3.25) / r313_Stroke : 1), r333_kShrink);
                        r336_exports.diagCor = r336_diagCor = function (r354_dy) {
                            var _r354_t0, _r354_t1;
                            return r313_DiagCor(r354_dy, r336_yrstroker - r336_yrstrokel, 0, 0);
                        };
                        r336_exports.yJoinProportion = r336_yJoinProportion = function (r356_x) {
                            var _r356_t0, _r356_t1;
                            return r1_linreg(1 - r336_px2, 1 - r336_py2, r322_straightBar && r333_ts !== r313_xn$TSHOOKRIGHT$3cah5 ? 1 : r336_px1, r322_straightBar && r333_ts !== r313_xn$TSHOOKRIGHT$3cah5 ? 1 : r336_py1, (r356_x - r336_yrstrokel) / (r336_yrstroker - r336_yrstrokel));
                        };
                        r336_exports.yJoinHeight = r336_yJoinHeight = function (r358_top, r358_bottom) {
                            var _r358_t1, _r358_t2;
                            var _r358_t0 = r325_CalcDS(r358_top, r358_bottom);
                            var r358_ds = _r358_t0[0];
                            var r358_ds2 = _r358_t0[1];
                            return r1_mix(r358_bottom + r358_ds2, r358_top - r358_ds, r336_yJoinProportion(r325_m));
                        };
                        r336_exports.createSplitMask = r336_createSplitMask = function (r360_top, r360_bottom, r360_dir, r360_elev) {
                            var _r360_t1, _r360_t2;
                            var _r360_t0 = r325_CalcDS(r360_top, r360_bottom);
                            var r360_ds = _r360_t0[0];
                            var r360_ds2 = _r360_t0[1];
                            var r360_jp0 = r336_yJoinProportion(r1_mix(r325_m, r325_l, r360_dir));
                            var r360_jp1 = r336_yJoinProportion(r1_mix(r325_m, r325_r, r360_dir));
                            var r360_hs = 0.75 * r325_sw;
                            var r360_yLeft = r1_mix(r360_bottom + r360_ds2, r360_top - r360_ds, r360_jp1) + r360_hs - r1_fallback(r360_elev, 0);
                            var r360_yRight = r1_mix(r360_bottom + r360_ds2, r360_top - r360_ds, r360_jp0) + r360_hs - r1_fallback(r360_elev, 0);
                            var r360_yMin = Math.min(r360_bottom, r360_yLeft, r360_yRight);
                            return r313_xn$spirooutline$1aao(r313_corner(r325_r, r360_yMin), r313_corner(r325_r, r360_yRight), r313_corner(r325_l, r360_yLeft), r313_corner(r325_l, r360_yMin));
                        };
                        return r336_exports;
                    })();
                };
                r325_exports.RightHalf = r325_RightHalf = function (r362_ts, r362_kShrink) {
                    var _r362_t0, _r362_t1, _r362_t2, _r362_tag3;
                    return (function () {
                        var r365_topKnots, r365_baseKnots, r365_baseSerif, r365_ogonekAttach, r365_splitMask;
                        var r365_exports = {};
                        var r365_me = r325_Metrics(r362_ts, r362_kShrink);
                        r365_exports.topKnots = r365_topKnots = function (r373_top, r373_bottom) {
                            var _r373_t1, _r373_t2;
                            var _r373_t0 = r325_CalcDS(r373_top, r373_bottom);
                            var r373_ds = _r373_t0[0];
                            return r362_ts === r313_xn$TSHOOKRIGHT$3cah5 ? [r313_straight.left.start(r1_mix(r365_me.yrstrokel, r365_me.yrstroker, r365_me.px1) - r325_sw / 2 + 0.875 * r313_TailX, r373_top - r325_sw - r313_O, r313_widths.rhs(r325_sw)), r313_alsoThruThem([[r313_StrokeWidthBlend(0.58, 0.65), 0.2], [r313_StrokeWidthBlend(0.78, 0.85), 0.5]], r313_important)] : r322_straightBar ? [r313_flat(r365_me.yrstroker, r373_top, r313_widths.rhs.heading(r365_me.diagCor(r373_top - r373_bottom) * r325_sw, r313_Downward))] : true ? [r313_flat(r365_me.yrstroker, r373_top, r313_widths.rhs.heading(r325_sw, r313_Downward)), r313_curl(r365_me.yrstroker, r373_top - r373_ds, r313_heading(r313_Downward)), r313_quadControls(0, r365_me.dpy1, 16)] : void 0;
                        };
                        r365_exports.baseKnots = r365_baseKnots = function (r375_top, r375_bottom) {
                            var r375_joinHeight1, r375_k, r375_joinHeight3, r375_deltaX, r375_fine, r375_xLoopLeft, r375_xCenter, _r375_t1, _r375_t2;
                            var _r375_t0 = r325_CalcDS(r375_top, r375_bottom);
                            var r375_ds = _r375_t0[0];
                            var r375_ds2 = _r375_t0[1];
                            var r375_coJoinX = r1_mix(r365_me.yrstrokel, r365_me.yrstroker, r365_me.px1);
                            var r375_coJoinY = r1_mix(r375_bottom + r375_ds2, r375_top - r375_ds, r365_me.py1);
                            var r375_joinX = r1_mix(r365_me.yrstrokel, r365_me.yrstroker, 1 - r365_me.px2);
                            var r375_joinY = r1_mix(r375_bottom + r375_ds2, r375_top - r375_ds, 1 - r365_me.py2);
                            var r375_ConnectZ = function (r376_shrink) {
                                var _r376_t0, _r376_t1;
                                return r313_curl(r375_joinX, r375_joinY, r313_widths.rhs(r325_sw * r376_shrink));
                            };
                            return [r322_straightBar && r362_ts !== r313_xn$TSHOOKRIGHT$3cah5 ? [] : [r313_flat(r375_coJoinX, r375_coJoinY)], r325_useStraightBottom ? [r375_ConnectZ(r365_me.yshrink), r313_curl(r1_mix(r365_me.yrstroker, r375_joinX, (r375_top - r375_bottom) / (r375_top - r375_joinY)), r375_bottom, r313_widths.rhs.heading(r365_me.diagCor(r375_top - r375_bottom) * r325_sw, r313_Downward))] : r322_bottomShape === r313_xn$BSLOOP$3cah ? (r375_joinHeight1 = r365_me.yJoinHeight(r375_top, r375_bottom), r375_k = Math.abs(1 / Math.sin(Math.atan2(r375_joinX - r325_m, r375_joinY - r375_joinHeight1)) - 0.25), r375_joinHeight3 = r375_k * r325_sw + r375_joinHeight1, r375_deltaX = Math.max(r325_yBottomJut, r313_HSwToV(1.2 * r325_sw)), r375_fine = r313_AdviceStroke(3) / r313_Stroke * r325_sw, r375_xLoopLeft = Math.min(r375_joinX - r313_HSwToV(1.5 * r375_fine), Math.max(-0.25 * r313_SB, r1_mix(r375_joinX, r365_me.yrstrokel - r375_deltaX, 2))), r375_xCenter = r1_mix(r375_xLoopLeft, r375_joinX, 0.5), [r375_ConnectZ(r365_me.yshrink), r313_g2.left.mid(r313_Arch["adjust-x"].bot(r375_xCenter, r375_fine), r375_bottom, r313_widths.rhs(r325_sw)), r313_archv(), r313_g2.up.mid(r375_xLoopLeft, r1_mix(r375_bottom, r375_joinHeight3, 0.5), r313_widths.rhs.heading(r375_fine, r313_Upward)), r313_arcvh(), r313_flat(r375_xCenter, r375_joinHeight3, r313_heading(r313_Rightward)), r313_curl(r325_m, r375_joinHeight3, r313_heading(r313_Rightward))]) : r322_bottomShape === r313_xn$BSTURN$3cah ? [r375_ConnectZ(r365_me.yshrink), r313_flat(r365_me.yrstrokel - r325_slabysize, r375_bottom, r313_widths.rhs(r325_sw)), r313_curl(Math.min(r365_me.yrstrokel - r325_slabysize - r313_TINY, r365_me.yrstrokel - r313_Stroke - r325_yBottomJut), r375_bottom)] : true ? [r375_ConnectZ(1), r313_quadControls(1, 1 - r365_me.dpy2, 16), r313_flat(r365_me.yrstrokel, r375_bottom + r375_ds2, r313_widths.rhs.heading(r325_sw, r313_Downward)), r313_curl(r365_me.yrstrokel, r375_bottom, r313_widths.rhs.heading(r325_sw, r313_Downward))] : void 0];
                        };
                        r365_exports.baseSerif = r365_baseSerif = function (r378_top, r378_bottom) {
                            var _r378_t0, _r378_t1;
                            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                                var r380_xBaseKnot, _r380_t1, _r380_t2;
                                var _r380_t0 = r325_CalcDS(r378_top, r378_bottom);
                                var r380_ds = _r380_t0[0];
                                var r380_ds2 = _r380_t0[1];
                                var r380_joinX = r1_mix(r365_me.yrstrokel, r365_me.yrstroker, 1 - r365_me.px2);
                                var r380_joinY = r1_mix(r378_bottom + r380_ds2, r378_top - r380_ds, 1 - r365_me.py2);
                                if (r322_bottomShape) return void 0;
                                if (r325_useStraightBottom) {
                                    r380_xBaseKnot = r1_mix(r365_me.yrstroker, r380_joinX, (r378_top - r378_bottom) / (r378_top - r380_joinY));
                                    r380_currentGlyph.include(r313_HSerif.lb(r380_xBaseKnot - r313_HSwToV(r325_sw / 2), r378_bottom, r325_yBottomJut));
                                } else r380_currentGlyph.include(r313_HSerif.lb(r365_me.yrstrokel - r313_HSwToV(r325_sw / 2), r378_bottom, r325_yBottomJut));
                                return void 0;
                            });
                        };
                        r365_exports.ogonekAttach = r365_ogonekAttach = function (r384_top, r384_bottom) {
                            var _r384_t0, _r384_t1;
                            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                                var _r386_t1, _r386_t2;
                                var _r386_t0 = r325_CalcDS(r384_top, r384_bottom);
                                var r386_ds = _r386_t0[0];
                                var r386_ds2 = _r386_t0[1];
                                var r386_coJoinX = r322_straightBar && r362_ts !== r313_xn$TSHOOKRIGHT$3cah5 ? r365_me.yrstroker : r1_mix(r365_me.yrstrokel, r365_me.yrstroker, r365_me.px1);
                                var r386_coJoinY = r322_straightBar && r362_ts !== r313_xn$TSHOOKRIGHT$3cah5 ? r384_top : r1_mix(r384_bottom + r386_ds2, r384_top - r386_ds, r365_me.py1);
                                var r386_joinX = r1_mix(r365_me.yrstrokel, r365_me.yrstroker, 1 - r365_me.px2);
                                var r386_joinY = r1_mix(r384_bottom + r386_ds2, r384_top - r386_ds, 1 - r365_me.py2);
                                var r386_anchorX = r1_mix(r386_coJoinX, r386_joinX, (0 - r386_coJoinY) / (r386_joinY - r386_coJoinY));
                                r386_currentGlyph.setBaseAnchor("trailing", r386_anchorX, 0);
                                r1_OgonekTrY.set(r386_currentGlyph);
                                return void 0;
                            });
                        };
                        r365_exports.splitMask = r365_splitMask = function (r389_top, r389_bottom, r389_elev) {
                            var _r389_t0, _r389_t1;
                            return r365_me.createSplitMask(r389_top, r389_bottom, -1, r389_elev);
                        };
                        return r365_exports;
                    })();
                };
                r325_exports.LeftHalf = r325_LeftHalf = function (r391_ts, r391_kShrink) {
                    var _r391_t0, _r391_t1, _r391_t2, _r391_tag3;
                    return (function () {
                        var r394_topKnots, r394_joinKnots, r394_splitMask;
                        var r394_exports = {};
                        var r394_me = r325_Metrics(r391_ts, r391_kShrink);
                        r394_exports.topKnots = r394_topKnots = function (r402_top, r402_bottom) {
                            var _r402_t1, _r402_t2, _r402_t3;
                            var _r402_t0 = r325_CalcDS(r402_top, r402_bottom);
                            var r402_ds = _r402_t0[0];
                            if (r322_straightBar) return [r313_flat(r325_l + r325_r - r394_me.yrstroker, r402_top, r313_widths.lhs.heading(r394_me.diagCor(r402_top - r402_bottom) * r325_sw, r313_Downward))]; else return [r313_flat(r325_l + r325_r - r394_me.yrstroker, r402_top, r313_widths.lhs.heading(r325_sw, r313_Downward)), r313_curl(r325_l + r325_r - r394_me.yrstroker, r402_top - r402_ds, r313_heading(r313_Downward)), r313_quadControls(0, r394_me.dpy1, 16)];
                        };
                        r394_exports.joinKnots = r394_joinKnots = function (r404_top, r404_bottom) {
                            var _r404_t1, _r404_t2;
                            var _r404_t0 = r325_CalcDS(r404_top, r404_bottom);
                            var r404_ds = _r404_t0[0];
                            var r404_ds2 = _r404_t0[1];
                            return [r322_straightBar ? [] : [r313_flat(r1_mix(r325_l + r325_r - r394_me.yrstrokel, r325_l + r325_r - r394_me.yrstroker, r394_me.px1), r1_mix(r404_bottom + r404_ds2, r404_top - r404_ds, r394_me.py1))], r313_curl(r313_Middle, r394_me.yJoinHeight(r404_top, r404_bottom), r313_widths.lhs(r325_sw * r394_me.yshrink))];
                        };
                        r394_exports.splitMask = r394_splitMask = function (r406_top, r406_bottom, r406_elev) {
                            var _r406_t0, _r406_t1;
                            return r394_me.createSplitMask(r406_top, r406_bottom, +1, r406_elev);
                        };
                        return r394_exports;
                    })();
                };
                r325_exports.SmallYShape = r325_SmallYShape = function (r408_top, r408_bottom, r408_yShCutoff) {
                    var _r408_t0, _r408_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                        var _r410_leti0, _r410_t1, _r410_t2, _r410_t3, _r410_t4, _r410_t5, _r410_t6, _r410_tag7, _r410_t8;
                        var r410_right = r325_RightHalf(r313_xn$TSNONE$3cah, r313_xn$SHRINKNONE$7Hrq);
                        var r410_rightSh = r325_RightHalf(r313_xn$TSNONE$3cah, r313_xn$SHRINKINNER$7Hrq);
                        var r410_left = r325_LeftHalf(r313_xn$TSNONE$3cah, r313_xn$SHRINKINNER$7Hrq);
                        var r410_leftSplitMask = r408_yShCutoff !== void 0 ? r313_union(r313_MaskBelow(r408_yShCutoff), r410_left.splitMask(r408_top, r408_bottom)) : r410_left.splitMask(r408_top, r408_bottom);
                        r410_currentGlyph.include(r410_right.ogonekAttach(r408_top, r408_bottom));
                        r410_currentGlyph.include(r313_tagged("rightHalf", r313_union(r313_intersection(r313_dispiro(r410_right.topKnots(r408_top, r408_bottom), r410_right.baseKnots(r408_top, r408_bottom)), r410_leftSplitMask), r313_difference(r313_dispiro(r410_right.topKnots(r408_top, r408_bottom), r410_rightSh.baseKnots(r408_top, r408_bottom)), r410_leftSplitMask))));
                        r410_currentGlyph.include(r313_tagged("leftHalf", r313_difference(r313_dispiro(r410_left.topKnots(r408_top, r408_bottom), r410_left.joinKnots(r408_top, r408_bottom)), r410_right.splitMask(r408_top, r408_bottom), r313_Rect(r408_bottom + r325_sw / 2, r408_bottom - r408_top, r325_l, r325_r))));
                        if (r325_doSlabTop) {
                            _r410_t3 = r410_currentGlyph;
                            _r410_t4 = _r410_t3.include;
                            _r410_t5 = r313_SerifFrame.fromDf(r313_DivFrame(1), r408_top, r408_bottom);
                            _r410_t8 = (function (_r410_leti0) {
                                var r415_sf = _r410_leti0;
                                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                                    var _r417_t0, _r417_t1;
                                    r417_currentGlyph.include(r415_sf.lt.full, true, true);
                                    r417_currentGlyph.include(r415_sf.rt.full);
                                    return void 0;
                                });
                            })(_r410_t5);
                            _r410_t4.call(_r410_t3, _r410_t8);
                        }
                        if (r325_doSlabBottom) r410_currentGlyph.include(r410_right.baseSerif(r408_top, r408_bottom));
                        if (r325_doSlabMotion) r410_currentGlyph.include(r313_HSerif.lt(r325_sb, r408_top, r313_SideJut));
                        return void 0;
                    });
                };
                r325_exports.SmallYHookRightShape = r325_SmallYHookRightShape = function (r423_top, r423_bottom, r423_yShCutoff) {
                    var _r423_t0, _r423_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                        var _r425_leti0, _r425_t1, _r425_t2, _r425_t3, _r425_t4, _r425_t5, _r425_t6, _r425_tag7, _r425_t8;
                        var r425_right = r325_RightHalf(r313_xn$TSHOOKRIGHT$3cah5, r313_xn$SHRINKNONE$7Hrq);
                        var r425_rightSh = r325_RightHalf(r313_xn$TSHOOKRIGHT$3cah5, r313_xn$SHRINKINNER$7Hrq);
                        var r425_left = r325_LeftHalf(r313_xn$TSNONE$3cah, r313_xn$SHRINKINNER$7Hrq);
                        var r425_leftSplitMask = r423_yShCutoff !== void 0 ? r313_intersection(r313_MaskAbove(r423_yShCutoff), r425_left.splitMask(r423_top, r423_bottom)) : r425_left.splitMask(r423_top, r423_bottom);
                        r425_currentGlyph.include(r425_right.ogonekAttach(r423_top, r423_bottom));
                        r425_currentGlyph.include(r313_tagged("rightHalf", r313_union(r313_intersection(r313_dispiro(r425_right.topKnots(r423_top, r423_bottom), r425_right.baseKnots(r423_top, r423_bottom)), r425_leftSplitMask), r313_difference(r313_dispiro(r425_right.topKnots(r423_top, r423_bottom), r425_rightSh.baseKnots(r423_top, r423_bottom)), r425_leftSplitMask))));
                        r425_currentGlyph.include(r313_tagged("leftHalf", r313_difference(r313_dispiro(r425_left.topKnots(r423_top, r423_bottom), r425_left.joinKnots(r423_top, r423_bottom)), r425_right.splitMask(r423_top, r423_bottom), r313_Rect(r423_bottom + r325_sw / 2, r423_bottom - r423_top, r325_l, r325_r))));
                        if (r325_doSlabTop) {
                            _r425_t3 = r425_currentGlyph;
                            _r425_t4 = _r425_t3.include;
                            _r425_t5 = r313_SerifFrame.fromDf(r313_DivFrame(1), r423_top, r423_bottom);
                            _r425_t8 = (function (_r425_leti0) {
                                var r430_sf = _r425_leti0;
                                return r430_sf.lt.full;
                            })(_r425_t5);
                            _r425_t4.call(_r425_t3, _r425_t8);
                        }
                        if (r325_doSlabBottom) r425_currentGlyph.include(r425_right.baseSerif(r423_top, r423_bottom));
                        if (r325_doSlabMotion) r425_currentGlyph.include(r313_HSerif.lt(r325_sb, r423_top, r313_SideJut));
                        return void 0;
                    });
                };
                r325_exports.SmallLambdaShape = r325_SmallLambdaShape = function (r434_top, r434_bottom) {
                    var _r434_t0, _r434_t1;
                    return r313_union(new r313_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                        var _r436_t0, _r436_t1;
                        r436_currentGlyph.gizmo = r313_Italify(-r313_para.slopeAngle);
                        r436_currentGlyph.include(r325_SmallYShape(r434_top, r434_bottom));
                        r436_currentGlyph.gizmo = r313_Italify(+r313_para.slopeAngle);
                        r436_currentGlyph.include(r313_Translate(0, -r1_mix(r434_bottom, r434_top, 0.5)));
                        r436_currentGlyph.include(r313_Scale(+1, -1));
                        r436_currentGlyph.include(r313_Translate(0, +r1_mix(r434_bottom, r434_top, 0.5)));
                        return void 0;
                    }));
                };
                r325_exports.SmallLambdaTailedShape = r325_SmallLambdaTailedShape = function (r442_top, r442_bottom) {
                    var _r442_t0, _r442_t1;
                    return r313_union(new r313_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                        var _r444_t0, _r444_t1;
                        r444_currentGlyph.gizmo = r313_Italify(-r313_para.slopeAngle);
                        r444_currentGlyph.include(r325_SmallYHookRightShape(r442_top, r442_bottom));
                        r444_currentGlyph.gizmo = r313_Italify(+r313_para.slopeAngle);
                        r444_currentGlyph.include(r313_Translate(0, -r1_mix(r442_bottom, r442_top, 0.5)));
                        r444_currentGlyph.include(r313_Scale(+1, -1));
                        r444_currentGlyph.include(r313_Translate(0, +r1_mix(r442_bottom, r442_top, 0.5)));
                        return void 0;
                    }));
                };
                return r325_exports;
            })();
        };
        var r313_NonCursiveYConfig = r1_SuffixCfg.weave({
            "straight": true,
            "curly": false
        }, {
            "": r313_xn$BSSTRAIGHT$3cah,
            "turn": r313_xn$BSTURN$3cah,
            "loop": r313_xn$BSLOOP$3cah
        }, {
            "": r313_xn$SLABAUTO$5sIl,
            "serifless": r313_xn$SLABNONE$5sIl,
            "serifed": r313_xn$SLABALL$5sIl,
            "motionSerifed": r313_xn$SLABMOTION$5sIl
        });
        var _r313_t11 = Object.entries(r313_NonCursiveYConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_straightBar = _r313_t13[1][0];
            r313_bottomShape = _r313_t13[1][1];
            r313_slabKind = _r313_t13[1][2];
            _r313_t13[1];
            (function () {
                var r451_Shapes = r313_NonCursiveYShapeT(r313_straightBar, r313_bottomShape, r313_slabKind);
                r313_xn$GlyphSaveSink$2Lrc4b.save("y." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r454_currentGlyph) {
                    var _r454_t0, _r454_t1;
                    r454_currentGlyph.include(r313_MarkSet.p());
                    r454_currentGlyph.setBaseAnchor("overlay", r313_Middle, 0);
                    r454_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r454_currentGlyph.setBaseAnchor("yBelowDot", r313_RightSB - 0.5 * r313_DotRadius, r313_Descender + r313_AccentStackOffset + r313_DotRadius);
                    r454_currentGlyph.include(r451_Shapes.SmallYShape(r313_XH, r313_Descender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("yCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
                    var _r462_t0, _r462_t1;
                    r462_currentGlyph.include(r313_MarkSet.capital());
                    r462_currentGlyph.setBaseAnchor("overlay", r313_Middle, 0 - r313_Descender);
                    r462_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2 - r313_Descender);
                    r462_currentGlyph.include(r451_Shapes.SmallYShape(r313_CAP, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("yHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
                    var _r469_t0, _r469_t1;
                    r469_currentGlyph.include(r313_MarkSet.p());
                    r469_currentGlyph.setBaseAnchor("overlay", r313_Middle, 0);
                    r469_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r469_currentGlyph.include(r451_Shapes.SmallYHookRightShape(r313_XH, r313_Descender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("yLowBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                    var _r476_t0, _r476_t1;
                    r476_currentGlyph.include(r313_xn$referglyph$1aao("y." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r476_currentGlyph.include(r313_HOverlayBar(r313_Middle - r313_LongJut * 0.75, r313_Middle + r313_LongJut * 0.75, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("grek/lambda." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r481_currentGlyph) {
                    var _r481_t0, _r481_t1;
                    r481_currentGlyph.include(r313_MarkSet.b());
                    r481_currentGlyph.include(r451_Shapes.SmallLambdaShape(r313_Ascender, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("grek/lambdaTailed." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r486_currentGlyph) {
                    var _r486_t0, _r486_t1;
                    r486_currentGlyph.include(r313_MarkSet.b());
                    r486_currentGlyph.include(r451_Shapes.SmallLambdaTailedShape(r313_Ascender, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("latn/lambdaStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r491_currentGlyph) {
                    var _r491_t0, _r491_t1;
                    r491_currentGlyph.include(r313_MarkSet.b());
                    r491_currentGlyph.include(r313_union(r313_FlatSlashShape(r1_mix(r313_SB, r313_RightSB, 0.45), r1_mix(0, r313_Ascender, 0.8), r313_OverlayStroke / 2), r451_Shapes.SmallLambdaShape(r313_Ascender, 0)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("latn/lambdaStrokeTailed." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r496_currentGlyph) {
                    var _r496_t0, _r496_t1;
                    r496_currentGlyph.include(r313_MarkSet.b());
                    r496_currentGlyph.include(r313_union(r313_FlatSlashShape(r1_mix(r313_SB, r313_RightSB, 0.45), r1_mix(0, r313_Ascender, 0.8), r313_OverlayStroke / 2), r451_Shapes.SmallLambdaTailedShape(r313_Ascender, 0)));
                    return void 0;
                }));
            })();
        }
        r313_alias("grek/lambda.tailedTurn", null, "grek/lambdaTailed.straightTurn");
        r313_alias("latn/lambdaStroke.tailedTurn", null, "latn/lambdaStrokeTailed.straightTurn");
        r313_alias("grek/lambda.tailedTurnSerifless", null, "grek/lambdaTailed.straightTurnSerifless");
        r313_alias("latn/lambdaStroke.tailedTurnSerifless", null, "latn/lambdaStrokeTailed.straightTurnSerifless");
        r313_alias("grek/lambda.curlyTailedTurn", null, "grek/lambdaTailed.curlyTurn");
        r313_alias("latn/lambdaStroke.curlyTailedTurn", null, "latn/lambdaStrokeTailed.curlyTurn");
        r313_alias("grek/lambda.curlyTailedTurnSerifless", null, "grek/lambdaTailed.curlyTurnSerifless");
        r313_alias("latn/lambdaStroke.curlyTailedTurnSerifless", null, "latn/lambdaStrokeTailed.curlyTurnSerifless");
        var r313_CursiveYShape = (function () {
            var r501_Arc, r501_Hook, r501_FlatHook, r501_Serifs;
            var r501_exports = {};
            r501_exports.Arc = r501_Arc = function (r509_top, r509_bottom) {
                var _r509_t0, _r509_t1;
                return r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r509_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r509_bottom), new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB - r313_HSwToV(r313_Stroke)));
            };
            r501_exports.Hook = r501_Hook = function (r515_y0, r515_bottom) {
                var _r515_t0, _r515_t1;
                return r313_dispiro(r313_widths.rhs(), r313_flat(r313_RightSB, r515_y0, r313_heading(r313_Downward)), r313_curl(r313_RightSB, r515_bottom + r313_SmallArchDepthA), r313_HookEnd(r515_bottom), r313_g4(r313_SB, r515_bottom + r313_SHook));
            };
            r501_exports.FlatHook = r501_FlatHook = function (r517_y0, r517_bottom) {
                var _r517_t0, _r517_t1;
                var r517_hd = r313_FlatHookDepth(r313_DivFrame(1), 9 / 8);
                var r517_xTerminal = Math.min(r313_RightSB - r517_hd.x - r313_TINY, r1_mix(r313_SB, r313_RightSB, 1 / 5));
                return r313_dispiro(r313_widths.rhs(), r313_flat(r313_RightSB, r517_y0, r313_heading(r313_Downward)), r313_curl(r313_RightSB, r517_bottom + r517_hd.y), r313_arcvh(), r313_flat(r313_RightSB - r517_hd.x, r517_bottom), r313_curl(r517_xTerminal, r517_bottom));
            };
            r501_exports.Serifs = r501_Serifs = function (r519_top, r519_slabType) {
                var _r519_t1, _r519_t2;
                var _r519_t0 = r313_slabKind;
                var r519_doSlabTop = _r519_t0[0];
                var r519_doSlabBottom = _r519_t0[1];
                var r519_doSlabMotion = _r519_t0[2];
                return !r519_doSlabTop ? r313_xn$noshape$3cah() : new r313_xn$Capture$2Lrc8.GlyphProc(function (r521_currentGlyph) {
                    var _r521_t0, _r521_t1;
                    var r521_sf = r313_SerifFrame.fromDf(r313_DivFrame(1), r519_top, 0);
                    r521_currentGlyph.include(r521_sf.lt.outer);
                    if (!r519_doSlabMotion) r521_currentGlyph.include(r521_sf.rt.inner);
                    return void 0;
                });
            };
            return r501_exports;
        })();
        var r313_CursiveYConfig = r1_SuffixCfg.weave({
            "cursive": [r313_CursiveYShape.Hook, r313_SHook],
            "cursiveFlatHook": [r313_CursiveYShape.FlatHook, 0]
        }, {
            "serifless": r313_xn$SLABNONE$5sIl,
            "serifed": r313_xn$SLABALL$5sIl,
            "motionSerifed": r313_xn$SLABCURSIVEMOTION$5sIl8
        });
        var _r313_t14 = Object.entries(r313_CursiveYConfig)[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_hookShape = _r313_t16[1][0][0];
            r313_hookEnd = _r313_t16[1][0][1];
            _r313_t16[1][0];
            r313_slabKind = _r313_t16[1][1];
            _r313_t16[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("y." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r529_currentGlyph) {
                    var _r529_t0, _r529_t1;
                    r529_currentGlyph.include(r313_MarkSet.p());
                    r529_currentGlyph.setBaseAnchor("overlay", r313_Middle, r1_mix(r313_O, r313_Descender + Math.max(r313_hookEnd, r313_Stroke), 0.5));
                    r529_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r529_currentGlyph.setBaseAnchor("yBelowDot", r313_Middle, r313_Descender);
                    r529_currentGlyph.include(r313_CursiveYShape.Arc(r313_XH, 0));
                    r529_currentGlyph.include(r313_hookShape(r313_XH, r313_Descender));
                    r529_currentGlyph.include(r313_CursiveYShape.Serifs(r313_XH, r313_slabKind));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("yCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r539_currentGlyph) {
                    var _r539_t0, _r539_t1;
                    r539_currentGlyph.include(r313_MarkSet.capital());
                    r539_currentGlyph.setBaseAnchor("overlay", r313_Middle, r1_mix(r313_O - r313_Descender, Math.max(r313_hookEnd, r313_Stroke), 0.5));
                    r539_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2 - r313_Descender);
                    r539_currentGlyph.include(r313_CursiveYShape.Arc(r313_CAP, r313_CAP - r313_XH));
                    r539_currentGlyph.include(r313_hookShape(r313_CAP, 0));
                    r539_currentGlyph.include(r313_CursiveYShape.Serifs(r313_CAP, r313_slabKind));
                    return void 0;
                }));
                if (r313_slabKind !== r313_xn$SLABALL$5sIl) r313_xn$GlyphSaveSink$2Lrc4b.save("yHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
                    var _r548_t0, _r548_t1;
                    r548_currentGlyph.include(r313_MarkSet.p());
                    r548_currentGlyph.setBaseAnchor("overlay", r313_Middle, r1_mix(r313_O, r313_Descender + Math.max(r313_hookEnd, r313_Stroke), 0.5));
                    r548_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r548_currentGlyph.include(r313_CursiveYShape.Arc(r313_XH, 0));
                    r548_currentGlyph.include(r313_hookShape(r313_XH - r313_TailY - r313_HalfStroke, r313_Descender));
                    r548_currentGlyph.include(r313_TopHook.toRight.rBarInner(r313_RightSB, 0, r313_XH));
                    r548_currentGlyph.include(r313_CursiveYShape.Serifs(r313_XH, r313_slabKind));
                    r548_currentGlyph.ejectTagged("serifRT");
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("yLowBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r559_currentGlyph) {
                    var _r559_t0, _r559_t1;
                    r559_currentGlyph.include(r313_xn$referglyph$1aao("y." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r559_currentGlyph.include(r313_LetterBarOverlay.r.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("top", 0), new r313_xn$NamedParameterPair$2Lrc9b("bot", r313_Descender + r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("space", [r313_hookEnd ? r313_SB + r313_HSwToV(r313_Stroke) : 0, r313_Width])));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("y", "y");
        r313_xn$linkreducedvariant$5sIl8("y/sansSerif", "y", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("y/nonCursive", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "y"));
        r313_xn$selectvariant$7Hrq("yHookRight", 436);
        r313_xn$selectvariant$7Hrq("yLowBar", 122709, new r313_xn$NamedParameterPair$2Lrc9b("follow", "y"));
        r313_xn$selectvariant$7Hrq("cyrl/U", 1059, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "yCap"));
        r313_xn$selectvariant$7Hrq("cyrl/u", 1091, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "y"));
        r313_xn$selectvariant$7Hrq("cyrl/uk/u", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "yHookRight"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/u/nonCursive"));
        r313_xn$selectvariant$7Hrq("YLoop", 7934, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "yCap"));
        r313_xn$selectvariant$7Hrq("yLoop", 7935, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "y"));
        r313_xn$selectvariant$7Hrq("grek/lambda", 955);
        r313_xn$selectvariant$7Hrq("latn/lambda", 42971, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "grek/lambda"));
        r313_xn$selectvariant$7Hrq("latn/lambdaStroke", 411, new r313_xn$NamedParameterPair$2Lrc9b("follow", "latn/lambda"));
        r313_CreateTurnedLetter("turny", 654, "y/nonCursive", r313_HalfAdvance, r313_XH / 2);
        r313_xn$deriveglyphs$7Hrq("turnyBelt", 122630, "y/nonCursive", function (r576_src, r576_sel) {
            var _r576_t0, _r576_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r578_currentGlyph) {
                var _r578_t0, _r578_t1;
                r578_currentGlyph.include(r313_MarkSet.b());
                r578_currentGlyph.include(r313_xn$referglyph$1aao(r576_src));
                r578_currentGlyph.include(r313_FlipAround(r313_Middle, r313_XH / 2));
                r578_currentGlyph.include(r313_BeltOverlay.at(r313_Middle, r313_XH));
                return void 0;
            });
        });
        var _r313_t17 = Object.entries(r313_DotVariants)[Symbol.iterator]();
        var _r313_t18 = void 0;
        while (!(_r313_t18 = _r313_t17.next()).done) {
            _r313_t19 = _r313_t18.value;
            r313_suffix = _r313_t19[0];
            r313_DrawAt = _r313_t19[1][0];
            r313_kdr = _r313_t19[1][1];
            _r313_t19[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("yDotBelow/dotBelow." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r588_currentGlyph) {
                    var _r588_t0, _r588_t1;
                    r588_currentGlyph.setMarkAnchor("yBelowDot", 0, 0, 0, r313_belowMarkStack);
                    r588_currentGlyph.include(r313_DrawAt(0, -r313_AccentStackOffset, r313_DotRadius * r313_kdr));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("yDotBelow/dotBelow", new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_CreateAccentedComposition("yDotBelow", 7925, "y", "yDotBelow/dotBelow");
        var _r313_t20 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t20.BBS;
        var r313_BBD = _r313_t20.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/y", 120170, new r313_xn$Capture$2Lrc8.GlyphProc(function (r595_currentGlyph) {
            var _r595_t0, _r595_t1;
            var r595_kDiag = r313_DiagCorDs(r313_XH, (r313_RightSB - r313_SB) / 2, r313_BBD * 0.25);
            r595_currentGlyph.include(r313_MarkSet.p());
            r595_currentGlyph.include(r313_HBar.t(r313_SB, r313_SB + r595_kDiag * r313_BBD, r313_XH, r313_BBS));
            r595_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r1_mix(r313_RightSB, r313_Middle, -1), r1_mix(r313_XH, 0, -1)), r313_corner(r1_mix(r313_RightSB, r313_Middle, +2), r1_mix(r313_XH, 0, +2)), r313_corner(r1_mix(0, r313_Width, -2), r1_mix(r313_XH, 0, +2)), r313_corner(r1_mix(0, r313_Width, -2), r1_mix(r313_XH, 0, -1))), r313_Rect(r313_XH, r313_Descender, r1_mix(0, r313_Width, -1), r1_mix(0, r313_Width, +2)), r313_union(r313_ExtLineCenter(r313_SB, r313_XH, r313_Middle - 0.25 * r595_kDiag * r313_BBD, 0, r313_BBS, 1), r313_ExtLineCenter(r313_SB + r595_kDiag * r313_BBD, r313_XH, r313_Middle + 0.75 * r595_kDiag * r313_BBD, 0, r313_BBS, 1))));
            r595_currentGlyph.include(r313_intersection(r313_Rect(r313_XH, r313_Descender, r1_mix(0, r313_Width, -1), r1_mix(0, r313_Width, +2)), r313_ExtLineCenter(r313_RightSB, r313_XH, r313_Middle, 0, r313_BBS, 1)));
            return void 0;
        }));
    });
    return void 0;
});


