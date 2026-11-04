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
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-Y", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_bodyType, r313_slabType, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_TailX = _r313_t1.TailX;
        var r313_TailY = _r313_t1.TailY;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_unimportant = _r313_t2.unimportant;
        var r313_quadControls = _r313_t2.quadControls;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_Rect = _r313_t5.Rect;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_HOverlayBar = _r313_t5.HOverlayBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var r313_CreateTurnedLetter = _r313_t7.CreateTurnedLetter;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-X"].resolve();
        var r313_HalfXStrand = _r313_t8.HalfXStrand;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_SetGrekUpperTonos = _r313_t9.SetGrekUpperTonos;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t10.SerifFrame;
        var r313_WithSerifOverflowMask = _r313_t10.WithSerifOverflowMask;
        var r313_xn$BODYCURLY$5sIl = 0;
        var r313_xn$BODYSTRAIGHT$5sIl = 1;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABALL$5sIl = 1;
        var r313_xn$SLABBASE$5sIl = 2;
        var r313_xn$SLABMOTION$5sIl = 3;
        var r313_YCrossPos = function (r320_top, r320_bot) {
            var _r320_t0, _r320_t1;
            return r1_mix(r320_bot, r320_top, 0.4);
        };
        var r313_YSlabs = function (r321_slabType, r321_top, r321_bot) {
            var _r321_t0, _r321_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t1, _r323_t2;
                var r323_sf = r313_SerifFrame.fromDf(r313_DivFrame(1), r321_top, 0);
                var _r323_t0 = r321_slabType;
                if (_r323_t0 === r313_xn$SLABALL$5sIl) {
                    r323_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                        var _r328_t0, _r328_t1;
                        r328_currentGlyph.include(r323_sf.lt.full, true, true);
                        r328_currentGlyph.include(r323_sf.rt.full);
                        return void 0;
                    }));
                    r323_currentGlyph.include(r313_HSerif.mb(r313_Middle, r321_bot, r313_MidJutCenter));
                } else if (_r323_t0 === r313_xn$SLABMOTION$5sIl) {
                    r323_currentGlyph.include(r323_sf.lt.outer);
                } else if (_r323_t0 === r313_xn$SLABBASE$5sIl) {
                    r323_currentGlyph.include(r313_HSerif.mb(r313_Middle, r321_bot, r313_MidJutCenter));
                } else void 0;
                return void 0;
            });
        };
        var r313_YShape = function () {
            var _r332_t5;
            var _r332_t6 = arguments;
            var r332_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r332_t6, 0);
            var _r332_t0 = [];
            var _r332_t1 = 0;
            while (_r332_t1 < r332_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r332_xn$flexarguments$2Lrc7uIe5[_r332_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r332_t0.push(r332_xn$flexarguments$2Lrc7uIe5[_r332_t1]);
                _r332_t1 = _r332_t1 + 1;
            }
            var _r332_t2 = r332_xn$flexarguments$2Lrc7uIe5;
            var _r332_t3 = _r332_t2.length;
            var _r332_t4 = 0;
            while (_r332_t4 < _r332_t3) {
                _r332_t1 = _r332_t2[_r332_t4];
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "bodyType") r332_bodyType = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "slabType") r332_slabType = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "top") r332_top = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "bot") r332_bot = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "cross") r332_cross = _r332_t1.right;
                _r332_t4 = _r332_t4 + 1;
            }
            var r332_bodyType = r1_fallback(r332_bodyType, _r332_t0[0]);
            var r332_slabType = r1_fallback(r332_slabType, _r332_t0[1]);
            var r332_top = r1_fallback(r332_top, _r332_t0[2]);
            var r332_bot = r1_fallback(r332_bot, _r332_t0[3]);
            var r332_cross = r1_fallback(r332_cross, _r332_t0[4], r313_YCrossPos(r332_top, r332_bot));
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var _r338_t0, _r338_t1;
                var r338_maskLT = r332_slabType === r313_xn$SLABALL$5sIl || r332_slabType === r313_xn$SLABMOTION$5sIl;
                var r338_maskRT = r332_slabType === r313_xn$SLABALL$5sIl;
                r338_currentGlyph.include(r313_tagged("strokeLT", r313_WithSerifOverflowMask(r338_maskLT, r313_DivFrame().bodyBox(r332_top, r332_bot), r313_HalfXStrand(r332_bodyType, r313_SLAB, r313_SB, r332_top, r313_Middle, r332_cross, 0.1, 0.4, 0.28))));
                r338_currentGlyph.include(r313_tagged("strokeRT", r313_WithSerifOverflowMask(r338_maskRT, r313_DivFrame().bodyBox(r332_top, r332_bot), r313_HalfXStrand(r332_bodyType, r313_SLAB, r313_RightSB, r332_top, r313_Middle, r332_cross, 0.1, 0.4, 0.28))));
                r338_currentGlyph.include(r313_tagged("strokeVMid", r313_VBar.m(r313_Middle, r332_bot, r332_cross + r313_HalfStroke)));
                r338_currentGlyph.setBaseAnchor("overlay", r313_Middle, r332_cross);
                r338_currentGlyph.setBaseAnchor("overlayOnExtension", r313_Middle, r1_mix(r332_bot + (r332_slabType === r313_xn$SLABALL$5sIl || r332_slabType === r313_xn$SLABBASE$5sIl ? r313_Stroke : 0), r332_cross, 0.5) + (r313_Stroke - r313_OverlayStroke) / 2);
                return void 0;
            });
        };
        var r313_YenOverlayShape = function (r344_slabType) {
            var _r344_t0, _r344_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                var r346_otherwise, _r346_t1, _r346_t2, _r346_t3;
                var _r346_t0 = (_r346_t1 = r344_slabType, _r346_t1 === r313_xn$SLABALL$5sIl || _r346_t1 === r313_xn$SLABBASE$5sIl ? [0.25, r313_Stroke] : (r346_otherwise = _r346_t1, [0, 0]));
                var r346_ks = _r346_t0[0];
                var r346_bot = _r346_t0[1];
                r346_currentGlyph.include(r313_HOverlayBar(r313_SB, r313_RightSB, r1_mix(r346_bot, r313_YCrossPos(r313_CAP, 0), 0.5) - r313_OverlayStroke * r346_ks));
                r346_currentGlyph.include(r313_HOverlayBar(r313_SB, r313_RightSB, r1_mix(r346_bot, r313_YCrossPos(r313_CAP, 0), 1)));
                return void 0;
            });
        };
        var r313_YHookLeftHookedStroke = function (r349_top, r349_bot, r349_cross) {
            var _r349_t0, _r349_t1;
            return r313_dispiro(r313_widths.lhs(), r313_straight.right.start(r313_SB - r313_TailX / 3, r349_top - r313_O - r313_Stroke), r313_g4(r313_SB + r313_TailX / 3, r349_top - r313_TailY, r313_widths.lhs(r313_AdviceStroke(2.75))), r313_quadControls(0.55, 0.7, 32, r313_unimportant), r313_g4(r313_Middle - r313_HSwToV(r313_HalfStroke), r349_cross, r313_widths.lhs(r313_AdviceStroke(3.5))));
        };
        var r313_YHookRightHookedStroke = function (r350_top, r350_bot, r350_cross) {
            var _r350_t0, _r350_t1;
            return r313_dispiro(r313_widths.rhs(), r313_straight.left.start(r313_RightSB + r313_TailX / 3, r350_top - r313_O - r313_Stroke), r313_g4(r313_RightSB - r313_TailX / 3, r350_top - r313_TailY, r313_widths.rhs(r313_AdviceStroke(2.75))), r313_quadControls(0.55, 0.7, 32, r313_unimportant), r313_g4(r313_Middle + r313_HSwToV(r313_HalfStroke), r350_cross, r313_widths.rhs(r313_AdviceStroke(3.5))));
        };
        var r313_YHookRightShape = function () {
            var _r351_t5;
            var _r351_t6 = arguments;
            var r351_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r351_t6, 0);
            var _r351_t0 = [];
            var _r351_t1 = 0;
            while (_r351_t1 < r351_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r351_xn$flexarguments$2Lrc7uIe5[_r351_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r351_t0.push(r351_xn$flexarguments$2Lrc7uIe5[_r351_t1]);
                _r351_t1 = _r351_t1 + 1;
            }
            var _r351_t2 = r351_xn$flexarguments$2Lrc7uIe5;
            var _r351_t3 = _r351_t2.length;
            var _r351_t4 = 0;
            while (_r351_t4 < _r351_t3) {
                _r351_t1 = _r351_t2[_r351_t4];
                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "bodyType") r351_bodyType = _r351_t1.right;
                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "slabType") r351_slabType = _r351_t1.right;
                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "top") r351_top = _r351_t1.right;
                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "bot") r351_bot = _r351_t1.right;
                if (_r351_t1 && _r351_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r351_t1.left === "cross") r351_cross = _r351_t1.right;
                _r351_t4 = _r351_t4 + 1;
            }
            var r351_bodyType = r1_fallback(r351_bodyType, _r351_t0[0]);
            var r351_slabType = r1_fallback(r351_slabType, _r351_t0[1]);
            var r351_top = r1_fallback(r351_top, _r351_t0[2]);
            var r351_bot = r1_fallback(r351_bot, _r351_t0[3]);
            var r351_cross = r1_fallback(r351_cross, _r351_t0[4], r313_YCrossPos(r351_top, r351_bot));
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                var _r357_t0, _r357_t1;
                r357_currentGlyph.include(r313_YShape(r351_bodyType, r351_slabType, r351_top, r351_bot, r351_cross));
                r357_currentGlyph.ejectTagged("strokeRT");
                r357_currentGlyph.include(r313_YHookRightHookedStroke(r351_top, r351_bot, r351_cross));
                return void 0;
            });
        };
        var r313_YHookLeftRightShape = function () {
            var _r361_t5;
            var _r361_t6 = arguments;
            var r361_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r361_t6, 0);
            var _r361_t0 = [];
            var _r361_t1 = 0;
            while (_r361_t1 < r361_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r361_xn$flexarguments$2Lrc7uIe5[_r361_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r361_t0.push(r361_xn$flexarguments$2Lrc7uIe5[_r361_t1]);
                _r361_t1 = _r361_t1 + 1;
            }
            var _r361_t2 = r361_xn$flexarguments$2Lrc7uIe5;
            var _r361_t3 = _r361_t2.length;
            var _r361_t4 = 0;
            while (_r361_t4 < _r361_t3) {
                _r361_t1 = _r361_t2[_r361_t4];
                if (_r361_t1 && _r361_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r361_t1.left === "bodyType") r361_bodyType = _r361_t1.right;
                if (_r361_t1 && _r361_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r361_t1.left === "slabType") r361_slabType = _r361_t1.right;
                if (_r361_t1 && _r361_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r361_t1.left === "top") r361_top = _r361_t1.right;
                if (_r361_t1 && _r361_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r361_t1.left === "bot") r361_bot = _r361_t1.right;
                if (_r361_t1 && _r361_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r361_t1.left === "cross") r361_cross = _r361_t1.right;
                _r361_t4 = _r361_t4 + 1;
            }
            var r361_bodyType = r1_fallback(r361_bodyType, _r361_t0[0]);
            var r361_slabType = r1_fallback(r361_slabType, _r361_t0[1]);
            var r361_top = r1_fallback(r361_top, _r361_t0[2]);
            var r361_bot = r1_fallback(r361_bot, _r361_t0[3]);
            var r361_cross = r1_fallback(r361_cross, _r361_t0[4], r313_YCrossPos(r361_top, r361_bot));
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
                var _r367_t0, _r367_t1;
                r367_currentGlyph.include(r313_VBar.m(r313_Middle, r361_bot, r361_cross + r313_HalfStroke));
                r367_currentGlyph.include(r313_YHookLeftHookedStroke(r361_top, r361_bot, r361_cross));
                r367_currentGlyph.include(r313_YHookRightHookedStroke(r361_top, r361_bot, r361_cross));
                return void 0;
            });
        };
        var r313_YConfig = {
            "straightSerifless": [r313_xn$BODYSTRAIGHT$5sIl, r313_xn$SLABNONE$5sIl],
            "curlySerifless": [r313_xn$BODYCURLY$5sIl, r313_xn$SLABNONE$5sIl],
            "straightBaseSerifed": [r313_xn$BODYSTRAIGHT$5sIl, r313_xn$SLABBASE$5sIl],
            "curlyBaseSerifed": [r313_xn$BODYCURLY$5sIl, r313_xn$SLABBASE$5sIl],
            "straightMotionSerifed": [r313_xn$BODYSTRAIGHT$5sIl, r313_xn$SLABMOTION$5sIl],
            "curlyMotionSerifed": [r313_xn$BODYCURLY$5sIl, r313_xn$SLABMOTION$5sIl],
            "straightSerifed": [r313_xn$BODYSTRAIGHT$5sIl, r313_xn$SLABALL$5sIl],
            "curlySerifed": [r313_xn$BODYCURLY$5sIl, r313_xn$SLABALL$5sIl]
        };
        var _r313_t11 = Object.entries(r313_YConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_bodyType = _r313_t13[1][0];
            r313_slabType = _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("Y." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                    var _r376_t0, _r376_t1;
                    r376_currentGlyph.include(r313_MarkSet.capital());
                    r376_currentGlyph.include(r313_YShape(r313_bodyType, r313_slabType, r313_CAP, 0));
                    r376_currentGlyph.include(r313_YSlabs(r313_slabType, r313_CAP, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Upsilon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                    var _r382_t0, _r382_t1;
                    r382_currentGlyph.include(r313_xn$referglyph$1aao("Y." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r382_currentGlyph.include(r313_SetGrekUpperTonos(r313_OX - (r313_slabType === r313_xn$SLABNONE$5sIl || r313_slabType === r313_xn$SLABBASE$5sIl ? 0 : r313_SideJut)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpY." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
                    var _r387_t0, _r387_t1;
                    r387_currentGlyph.include(r313_MarkSet.e());
                    r387_currentGlyph.include(r313_YShape(r313_bodyType, r313_slabType, r313_XH, 0));
                    r387_currentGlyph.include(r313_YSlabs(r313_slabType, r313_XH, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("YHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                    var _r393_t0, _r393_t1;
                    r393_currentGlyph.include(r313_MarkSet.capital());
                    r393_currentGlyph.include(r313_YHookRightShape(r313_bodyType, r313_slabType, r313_CAP, 0));
                    r393_currentGlyph.include(r313_YSlabs(r313_slabType, r313_CAP, 0));
                    r393_currentGlyph.ejectTagged("serifRT");
                    return void 0;
                }));
                if (r313_slabType !== r313_xn$SLABBASE$5sIl) r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ue." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                    var _r400_t0, _r400_t1;
                    r400_currentGlyph.include(r313_MarkSet.p());
                    r400_currentGlyph.include(r313_YShape(r313_bodyType, r313_slabType, r313_XH, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("cross", 0)));
                    r400_currentGlyph.include(r313_YSlabs(r313_slabType, r313_XH, r313_Descender));
                    return void 0;
                }));
                if ((r313_slabType === r313_xn$SLABNONE$5sIl || r313_slabType === r313_xn$SLABBASE$5sIl) && r313_bodyType === r313_xn$BODYSTRAIGHT$5sIl) r313_xn$GlyphSaveSink$2Lrc4b.save("grek/UpsilonHookSymbol." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                    var _r407_t0, _r407_t1;
                    r407_currentGlyph.include(r313_MarkSet.capital());
                    r407_currentGlyph.include(r313_YHookLeftRightShape(r313_bodyType, r313_slabType, r313_CAP, 0));
                    r407_currentGlyph.include(r313_YSlabs(r313_slabType, r313_CAP, 0));
                    r407_currentGlyph.ejectTagged("serifLT");
                    r407_currentGlyph.ejectTagged("serifRT");
                    r407_currentGlyph.include(r313_SetGrekUpperTonos(r313_OX - r313_TailX / 3));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("currency/yenSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                    var _r416_t0, _r416_t1;
                    r416_currentGlyph.include(r313_xn$referglyph$1aao("Y." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r416_currentGlyph.include(r313_YenOverlayShape(r313_slabType));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("Y", "Y");
        r313_xn$linkreducedvariant$5sIl8("Y/sansSerif", "Y", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpY", 655, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Y"));
        r313_xn$selectvariant$7Hrq("YHookRight", 435, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Y"));
        r313_CreateAccentedComposition("YStrokeBottom", null, "Y", "barOverOnExtension");
        r313_xn$selectvariant$7Hrq("grek/Upsilon", 933, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Y"));
        r313_xn$linkreducedvariant$5sIl8("grek/Upsilon/sansSerif", "grek/Upsilon", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Y/sansSerif"));
        r313_xn$selectvariant$7Hrq("grek/UpsilonHookSymbol", 978);
        r313_xn$selectvariant$7Hrq("cyrl/Ue", 1198, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "Y"));
        r313_xn$selectvariant$7Hrq("cyrl/ue", 1199);
        r313_CreateAccentedComposition("cyrl/Uo", 1200, "cyrl/Ue", "barOver");
        r313_CreateAccentedComposition("cyrl/uo", 1201, "cyrl/ue", "barOver");
        r313_xn$GlyphSaveSink$2Lrc4b.save("YStroke/overlay", null, r313_HOverlayBar(r1_mix(0, r313_SB, 0.5), r1_mix(r313_Width, r313_RightSB, 0.5), r1_mix(0, r313_CAP, 0.75)));
        r313_xn$derivecomposites$7Hrq("YStroke", 590, "Y", "YStroke/overlay");
        r313_CreateTurnedLetter("latn/Lambda", 42970, "Y", r313_HalfAdvance, r313_CAP / 2);
        r313_CreateTurnedLetter("latn/LambdaStroke", 42972, "YStrokeBottom", r313_HalfAdvance, r313_CAP / 2);
        r313_CreateTurnedLetter("turnY/sansSerif", 8516, "Y/sansSerif", r313_HalfAdvance, r313_CAP / 2);
        r313_xn$selectvariant$7Hrq("currency/yenSign", 165, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Y"));
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/Y", 120144, new r313_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
            var _r429_t0, _r429_t1;
            r429_currentGlyph.include(r313_MarkSet.capital());
            var r429_yCross = r313_YCrossPos(r313_CAP, 0);
            r429_currentGlyph.include(r313_HBar.t(r313_SB, r313_SB + r313_BBD, r313_CAP, r313_BBS));
            r429_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, -r313_Width, 2 * r313_Width), r313_union(r313_difference(r313_ExtLineCenter(r313_SB - 0, r313_CAP, r313_Middle - r313_BBD / 2, r429_yCross, r313_BBS, 1), r313_Rect(r313_CAP, 0, r313_Middle - r313_BBD / 2 + r313_HSwToV(0.5 * r313_BBS), r313_Width * 2)), r313_difference(r313_ExtLineCenter(r313_SB + r313_BBD, r313_CAP, r313_Middle + r313_BBD / 2, r429_yCross, r313_BBS, 1), r313_Rect(r313_CAP, 0, r313_Middle + r313_BBD / 2 + r313_HSwToV(0.5 * r313_BBS), r313_Width * 2)))));
            r429_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, r429_yCross, -r313_Width, 2 * r313_Width), r313_ExtLineCenter(r313_RightSB + 0, r313_CAP, r313_Middle + r313_BBD / 2, r429_yCross, r313_BBS, 1)));
            r429_currentGlyph.include(r313_HBar.b(r313_Middle - r313_BBD / 2, r313_Middle + r313_BBD / 2, 0, r313_BBS));
            r429_currentGlyph.include(r313_union(r313_VBar.m(r313_Middle - r313_BBD / 2, 0, r429_yCross, r313_BBS), r313_VBar.m(r313_Middle + r313_BBD / 2, 0, r429_yCross, r313_BBS)));
            return void 0;
        }));
    });
    return void 0;
});


