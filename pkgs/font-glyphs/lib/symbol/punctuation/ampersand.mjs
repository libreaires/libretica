"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r345_t) {
    var r345_n, r345_i, r345_a, _r345_t3, _r345_t4, _r345_t5, _r345_t6, _r345_t7, _r345_t8, _r345_t9, _r345_t10, _r345_t11, _r345_t12, _r345_t13, _r345_t14, _r345_t15, _r345_t16, _r345_t17, _r345_t18, _r345_t19, _r345_t20, _r345_t21, _r345_t22, _r345_t23, _r345_t24, _r345_t25, _r345_t26;
    var _r345_t0 = function () {
        _r345_t7 = function (_r345_t8) {
            _r345_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r345_t8
            };
        };
        _r345_t9 = r345_t instanceof Array;
        if (_r345_t9) {
            _r345_t10 = r345_n = r345_t.length;
            _r345_t11 = r345_i = 0;
            _r345_t12 = function (_r345_t14) {
                return _r345_t7(_r345_t14);
            };
            _r345_t13 = function (_r345_t15) {
                _r345_t16 = r345_i < r345_n;
                if (_r345_t16) {
                    _r345_t0 = function (_r345_t17) {
                        return _r345_t13(r345_i = r345_i + 1);
                    };
                    return {
                        "value": [r345_i, r345_t[r345_i]],
                        "done": false
                    };
                } else return _r345_t12(_r345_t15);
            };
            return _r345_t13();
        } else {
            _r345_t18 = r345_a = Object.keys(r345_t);
            _r345_t19 = r345_n = r345_a.length;
            _r345_t20 = r345_i = 0;
            _r345_t21 = function (_r345_t23) {
                return _r345_t7(_r345_t23);
            };
            _r345_t22 = function (_r345_t24) {
                _r345_t25 = r345_i < r345_n;
                if (_r345_t25) {
                    _r345_t0 = function (_r345_t26) {
                        return _r345_t22(r345_i = r345_i + 1);
                    };
                    return {
                        "value": [r345_a[r345_i], r345_t[r345_a[r345_i]]],
                        "done": false
                    };
                } else return _r345_t21(_r345_t24);
            };
            return _r345_t22();
        }
    };
    var _r345_t1 = function (x) {
        try {
            return _r345_t0(x);
        } catch (ex) {
            return _r345_t2(ex);
        }
    };
    var _r345_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9) _r345_t3 = this; else {
        _r345_t4 = function () {
            void 0;
        };
        _r345_t4.prototype = _r1_t9.prototype;
        _r345_t3 = new _r345_t4();
    }
    _r345_t3[Symbol.iterator] = function () {
        return _r345_t3;
    };
    _r345_t3.next = _r345_t1;
    _r345_t3.throw = function (x) {
        return _r345_t2(x);
    };
    return _r345_t3;
};
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Ampersand", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_fSerifed, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_Translate = _r312_t1.Translate;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_SHook = _r312_t1.SHook;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_OverlayPos = _r312_t1.OverlayPos;
        var r312_CThin = _r312_t1.CThin;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DToothlessRise = _r312_t1.DToothlessRise;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var r312_CorrectionOMidX = _r312_t1.CorrectionOMidX;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThru = _r312_t2.alsoThru;
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
        var r312_Rect = _r312_t5.Rect;
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskRight = _r312_t5.MaskRight;
        var r312_VBar = _r312_t5.VBar;
        var r312_HookStart = _r312_t5.HookStart;
        var r312_Arch = _r312_t5.Arch;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Ezh"].resolve();
        var r312_RevEzh = _r312_t7.RevEzh;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_RightwardTailedBar = _r312_t8.RightwardTailedBar;
        var r312_SerifedArcEnd = _r312_t8.SerifedArcEnd;
        var r312_SwAmpersand = r312_AdviceStroke2(2.5, 3, r312_CAP);
        var r312_fineAmp = r312_AdviceStroke(3.5);
        var r312_pxUpperLoopRight = 0.75 + r312_HalfStroke / (r312_RightSB - r312_SB);
        var r312_pxUpperLoopLeft = 0.05;
        var r312_pXTerminal = 1.1;
        var r312_pStraightBar = 0.4;
        var r312_adaUpperLoop = r312_ArchDepthAOf(r312_ArchDepth * (r312_pxUpperLoopRight - r312_pxUpperLoopLeft), r312_Width);
        var r312_adbUpperLoop = r312_ArchDepthBOf(r312_ArchDepth * (r312_pxUpperLoopRight - r312_pxUpperLoopLeft), r312_Width);
        var r312_xTerminal = r1_mix(r312_SB, r312_RightSB, r312_pXTerminal) - r312_HSwToV(r312_SwAmpersand);
        var r312_xUpperLoopLeft = r1_mix(r312_SB, r312_RightSB, r312_pxUpperLoopLeft);
        var r312_yUpperLoopLeft = r312_CAP - r312_adaUpperLoop;
        var r312_xUpperLoopRight = r1_mix(r312_SB, r312_RightSB, r312_pxUpperLoopRight);
        var r312_yUpperLoopRight = r312_CAP - r312_adbUpperLoop;
        var r312_xUpperLoopTop = r1_mix(r312_xUpperLoopLeft, r312_xUpperLoopRight, 0.5);
        var r312_yMockUpperLoopLeftBottom = r312_CAP - r312_adaUpperLoop - r312_adbUpperLoop * 0.3;
        var r312_ClosedTipSw = r312_AdviceStroke(3);
        var r312_ClosedIncisedSw = r312_AdviceStroke(5);
        var r312_ClosedBottomSlopeVal = -0.5 * (r312_SwAmpersand - r312_ClosedIncisedSw) / r312_SwAmpersand;
        var r312_ClosedBottomSlope = {
            "x": r312_ClosedBottomSlopeVal,
            "y": -1
        };
        var r312_xClosedAmpersandBottom = r1_mix(r312_SB, r312_RightSB, 0.44) + (0.125 + 0.5 * r312_CorrectionOMidX + r312_ClosedBottomSlopeVal) * r312_SwAmpersand;
        var r312_ClosedAmpersandLeadDim = function (r317_sw, r317_swTip, r317_offset) {
            var _r317_t0, _r317_t1;
            var r317_x1 = r1_mix(r312_SB, r312_RightSB, 0.8) - r317_offset;
            var r317_x2 = r1_mix(r312_SB, r312_RightSB, r312_pXTerminal) + r312_HSwToV(0.1 * r317_sw) - r317_offset;
            var r317_y1 = 0;
            var r317_y2 = r1_mix(0, r312_CAP, 0.375) + r317_sw / 2;
            var r317_k1 = 0.5;
            return {
                "x1": r317_x1,
                "x2": r317_x2,
                "y1": r317_y1,
                "y2": r317_y2,
                "k1": r317_k1
            };
        };
        var r312_ClosedAmpersandLead = function (r318_sw, r318_swTip) {
            var _r318_t1, _r318_t2;
            var _r318_t0 = r312_ClosedAmpersandLeadDim(r318_sw, r318_swTip, 0);
            var r318_x1 = _r318_t0.x1;
            var r318_x2 = _r318_t0.x2;
            var r318_y1 = _r318_t0.y1;
            var r318_y2 = _r318_t0.y2;
            var r318_k1 = _r318_t0.k1;
            return r312_intersection(r312_MaskBelow(r318_y2), r312_dispiro(r312_flat(r1_mix(r318_x1, r318_x2, 4), r1_mix(r318_y1, r318_y2, 4), r312_widths.rhs(r318_swTip)), r312_curl(r1_mix(r318_x1, r318_x2, r318_k1), r1_mix(r318_y1, r318_y2, r318_k1)), r312_g4.left.mid(r312_xClosedAmpersandBottom, r312_O, r312_widths.rhs.heading(r318_sw, r312_ClosedBottomSlope))));
        };
        var r312_ClosedAmpersandLeadMask2 = function (r319_sw, r319_swTip) {
            var _r319_t1, _r319_t2;
            var _r319_t0 = r312_ClosedAmpersandLeadDim(r319_sw, r319_swTip, r312_HSwToV(r319_sw - r319_swTip));
            var r319_x1 = _r319_t0.x1;
            var r319_x2 = _r319_t0.x2;
            var r319_y1 = _r319_t0.y1;
            var r319_y2 = _r319_t0.y2;
            var r319_k1 = _r319_t0.k1;
            return r312_intersection(r312_MaskBelow(r319_y2), r312_xn$spirooutline$1aao(r312_flat(r1_mix(r319_x1, r319_x2, 4), r1_mix(r319_y1, r319_y2, 4), r312_widths.rhs(r319_swTip)), r312_curl(r1_mix(r319_x1, r319_x2, r319_k1), r1_mix(r319_y1, r319_y2, r319_k1)), r312_g4.left.mid(r312_xClosedAmpersandBottom, r312_O, r312_widths.rhs(r319_sw)), r312_corner(0, r312_O), r312_corner(0, r1_mix(r319_y1, r319_y2, 4))));
        };
        var r312_ClosedAmpersandLeadMask = function () {
            var _r320_t0, _r320_t1;
            return r312_union(r312_intersection(r312_MaskAbove(r1_mix(r312_yMockUpperLoopLeftBottom, 0, r312_pStraightBar)), r312_MaskRight(r312_xClosedAmpersandBottom)), r312_xn$spirooutline$1aao(r312_corner(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, r312_pStraightBar), r1_mix(r312_yMockUpperLoopLeftBottom, 0, r312_pStraightBar)), r312_corner(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 2), -r312_yMockUpperLoopLeftBottom), r312_corner(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 4), -r312_yMockUpperLoopLeftBottom), r312_corner(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 4), r1_mix(r312_yMockUpperLoopLeftBottom, 0, r312_pStraightBar))));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.closed", null, r312_union(r312_intersection(r312_ClosedAmpersandLead(r312_SwAmpersand, r312_ClosedTipSw), r312_ClosedAmpersandLeadMask()), r312_difference(r312_intersection(r312_ClosedAmpersandLead(r312_SwAmpersand, r312_ClosedTipSw), r312_ClosedAmpersandLeadMask2(r312_SwAmpersand, r312_ClosedIncisedSw)), r312_ClosedAmpersandLeadMask()), r312_difference(r312_dispiro(r312_g4.left.mid(r312_xClosedAmpersandBottom, r312_O, r312_widths.rhs.heading(r312_SwAmpersand, r312_ClosedBottomSlope)), r312_archv(), r312_g4(r312_SB + r312_OX, r312_YSmoothMidL(0.66 * r312_yUpperLoopRight + r312_HalfStroke, r312_O, r312_ArchDepthA, r312_ArchDepthB)), r312_alsoThru(0.5, 0.5, r312_widths.center(r312_SwAmpersand)), r312_g4(r312_xUpperLoopRight, r312_yUpperLoopRight, r312_widths.lhs(r312_SwAmpersand)), r312_Arch.lhs(r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_g4(r312_xUpperLoopLeft, r312_yUpperLoopLeft), r312_flat(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, r312_pStraightBar), r1_mix(r312_yMockUpperLoopLeftBottom, 0, r312_pStraightBar)), r312_curl(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 2), -r312_yMockUpperLoopLeftBottom)), r312_Rect(0, -r312_CAP * 2, r312_xTerminal, r312_Width * 2))));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.upperOpen", null, r312_union(r312_intersection(r312_ClosedAmpersandLead(r312_SwAmpersand, r312_ClosedTipSw), r312_ClosedAmpersandLeadMask()), r312_difference(r312_intersection(r312_ClosedAmpersandLead(r312_SwAmpersand, r312_ClosedTipSw), r312_ClosedAmpersandLeadMask2(r312_SwAmpersand, r312_ClosedIncisedSw)), r312_ClosedAmpersandLeadMask()), r312_difference(r312_dispiro(r312_g4.left.mid(r312_xClosedAmpersandBottom, r312_O, r312_widths.rhs.heading(r312_SwAmpersand, r312_ClosedBottomSlope)), r312_archv(), r312_g4(r312_SB + r312_OX, r312_YSmoothMidL(0.66 * r312_yUpperLoopRight + r312_HalfStroke, r312_O, r312_ArchDepthA, r312_ArchDepthB)), r312_alsoThru(0.5, 0.5, r312_widths.center(r312_SwAmpersand)), r312_g4(r312_xUpperLoopRight, r312_yUpperLoopRight, r312_widths.lhs(r312_SwAmpersand))), r312_Rect(r312_CAP * 2, r312_yUpperLoopRight, 0, r312_Width), r312_Rect(r312_CAP * 2, 0.5 * r312_CAP, r312_Middle, r312_Width), r312_intersection(r312_Rect(r312_CAP * 2, r312_ArchDepthA, 0, r312_RightSB - r312_HSwToV(r312_fineAmp)), r312_xn$withtransform$5sIl(r312_Translate(-r312_O, 0), r312_xn$spirooutline$1aao(r312_Arch.lhs.centerAt.rtl.t(r312_xUpperLoopTop, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_archv(), r312_g4(r312_xUpperLoopLeft, r312_yUpperLoopLeft), r312_flat(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, r312_pStraightBar), r1_mix(r312_yMockUpperLoopLeftBottom, 0, r312_pStraightBar)), r312_corner(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 2), -r312_yMockUpperLoopLeftBottom), r312_corner(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 2) + r312_Width * 2, -r312_yMockUpperLoopLeftBottom), r312_corner(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 2) + r312_Width * 2, r312_CAP - r312_O))))), r312_difference(r312_dispiro(r312_g4.up.start(r312_xUpperLoopRight, r312_yUpperLoopRight, r312_widths.heading(r312_SwAmpersand, 0, r312_Upward)), r312_arcvh(), r312_Arch.lhs.centerAt.rtl.t(r312_xUpperLoopTop, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_archv(), r312_g4(r312_xUpperLoopLeft, r312_yUpperLoopLeft), r312_flat(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, r312_pStraightBar), r1_mix(r312_yMockUpperLoopLeftBottom, 0, r312_pStraightBar)), r312_curl(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, 2), -r312_yMockUpperLoopLeftBottom)), r312_Rect(0, -r312_CAP * 2, r312_xTerminal, r312_Width * 2))));
        var r312_xLowerOpenRight = r1_mix(r312_xUpperLoopRight, r312_RightSB, 0.5);
        var r312_xLowerOpenBottom = r1_mix(r312_SB, r312_xLowerOpenRight, 0.5);
        var r312_yLowerOpenEnd = Math.max(r312_ArchDepthA + r312_fineAmp, r312_CAP * 0.45);
        var r312_xLowerOpenBarRight = r1_mix(r312_xLowerOpenRight, r312_Width, 0.5);
        var r312_xLowerOpenBarLeft = Math.min(r312_xLowerOpenRight - r312_HSwToV(r312_Stroke) - r312_xLowerOpenBarRight + r312_xLowerOpenRight, r1_mix(r312_Middle, r312_xLowerOpenRight, 0.5));
        var r312_LowerOpenCrossbar = function (r326_y) {
            var _r326_t0, _r326_t1;
            return r312_dispiro(r312_widths.rhs(r312_fineAmp), r312_corner(r312_xLowerOpenBarLeft + r312_TanSlope * r312_fineAmp / 2, r326_y), r312_corner(r312_xLowerOpenBarRight + r312_TanSlope * r312_fineAmp / 2, r326_y));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.lowerOpen", null, r312_union(r312_LowerOpenCrossbar(r312_yLowerOpenEnd), r312_dispiro(r312_widths.rhs(r312_SwAmpersand), r312_flat(r312_xLowerOpenRight - r312_O, r312_yLowerOpenEnd, r312_heading(r312_Downward)), r312_curl(r312_xLowerOpenRight - r312_O, r312_ArchDepthA), r312_arcvh(), r312_Arch.rhs.centerAt.rtl.b(r312_xLowerOpenBottom, 0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_archv(), r312_g4(r312_SB + r312_O, r312_ArchDepthB), r312_alsoThru(0.5, 0.5, r312_widths.center(r312_SwAmpersand)), r312_g4(r312_xUpperLoopRight, r312_yUpperLoopRight, r312_widths.lhs(r312_SwAmpersand)), r312_arcvh(), r312_Arch.lhs.centerAt.rtl.t(r312_xUpperLoopTop, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand))), r312_difference(r312_dispiro(r312_Arch.lhs.centerAt.rtl.t(r312_xUpperLoopTop, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_archv(), r312_g4(r312_xUpperLoopLeft, r312_yUpperLoopLeft), r312_flat(r1_mix(r312_xUpperLoopLeft, r312_xTerminal, r312_pStraightBar), r1_mix(r312_yMockUpperLoopLeftBottom, 0, r312_pStraightBar)), r312_curl(r312_xTerminal, 0)), r312_xn$spirooutline$1aao(r312_Arch.rhs.centerAt.rtl.b(r312_xLowerOpenBottom, 0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_archv(), r312_g4(r312_SB + r312_OX, r312_YSmoothMidL(0.66 * r312_yUpperLoopRight + r312_HalfStroke, r312_O, r312_ArchDepthA, r312_ArchDepthB)), r312_alsoThru(0.5, 0.5, r312_widths.center(r312_SwAmpersand)), r312_g4(r312_xUpperLoopRight, r312_yUpperLoopRight), r312_arcvh(), r312_Arch.lhs.centerAt.rtl.t(new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_corner), r312_xUpperLoopTop, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_Arch.lhs.centerAt.rtl.t(new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_corner), r312_xUpperLoopTop, r312_CAP * 2, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_SwAmpersand)), r312_corner(r312_Width * 2, r312_CAP * 2), r312_corner(r312_Width * 2, r312_O)))));
        var r312_yEtMiddle = r312_CAP * r312_OverlayPos;
        var r312_adaEt = r312_CAP - r1_mix(r312_yEtMiddle + r312_SwAmpersand / 2, r312_CAP - r312_O - r312_SwAmpersand, r312_ArchDepthB / (r312_ArchDepthA + r312_ArchDepthB)) - r312_HSwToV(r312_TanSlope) * r312_SwAmpersand;
        var r312_adbEt = r1_mix(r312_SwAmpersand + r312_O, r312_yEtMiddle - r312_SwAmpersand / 2, r312_ArchDepthB / (r312_ArchDepthA + r312_ArchDepthB)) + r312_HSwToV(r312_TanSlope) * r312_SwAmpersand;
        var r312_fineEt = r312_SwAmpersand * r312_CThin;
        var r312_xEtLeft = r312_SB;
        var r312_xEtRight = r1_mix(r312_xUpperLoopRight, r312_RightSB, 0.5);
        var r312_xEtCenterBarRight = r1_mix(r312_xEtRight, r312_Width, 0.5);
        var r312_yEtRightBarTop = r1_mix(r312_yEtMiddle + r312_SwAmpersand / 2, r312_CAP - r312_SHook, 0.375);
        var r312_xn$FORMTOOTHED$5sIl = 0;
        var r312_xn$FORMFLATBOTTOM$5sIl5 = 1;
        var r312_xn$FORMTOOTHLESSCORNER$5sIl0b = 2;
        var r312_xn$FORMTOOTHLESSROUNDED$5sIl0b = 3;
        var r312_EtUpperHalf = function () {
            var _r336_t0, _r336_t1;
            return r312_dispiro(r312_g4(r312_xEtRight, r312_CAP - r312_SHook, r312_widths.lhs()), r312_HookStart(r312_CAP), r312_g4(r312_xEtLeft, r312_CAP - r312_adaEt), r312_arcvh(), r312_flat(r312_Middle, r312_yEtMiddle - (r312_fineEt - r312_SwAmpersand / 2), r312_widths.heading(r312_fineEt, 0, r312_Rightward)), r312_curl(r312_xEtCenterBarRight, r312_yEtMiddle - (r312_fineEt - r312_SwAmpersand / 2), r312_heading(r312_Rightward)));
        };
        var r312_EtLowerHalf = function (r337_form) {
            var r337___, _r337_t0, _r337_t1, _r337_t2;
            return r312_dispiro(r312_flat(r312_xEtCenterBarRight, r312_yEtMiddle + (r312_fineEt - r312_SwAmpersand / 2), r312_widths.heading(r312_fineEt, 0, r312_Leftward)), r312_curl(r312_Middle, r312_yEtMiddle + (r312_fineEt - r312_SwAmpersand / 2), r312_heading(r312_Leftward)), r312_archv(), r312_g4(r312_xEtLeft + r312_O * 2, r312_adbEt, r312_widths.lhs()), (_r337_t0 = r337_form, _r337_t0 === r312_xn$FORMTOOTHED$5sIl ? r312_SerifedArcEnd.LtrLhs(r312_xEtRight, 0, r312_Stroke, r312_adaEt, r312_Stroke) : _r337_t0 === r312_xn$FORMFLATBOTTOM$5sIl5 ? [r312_arcvh(), r312_flat(r312_Arch["adjust-x"].bot(r1_mix(r312_xEtLeft, r312_xEtRight, 0.5)), 0), r312_curl(r312_xEtRight + r312_O, 0, r312_heading(r312_Rightward))] : _r337_t0 === r312_xn$FORMTOOTHLESSCORNER$5sIl0b ? [r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r312_g4(r312_xEtRight, r312_DToothlessRise)] : _r337_t0 === r312_xn$FORMTOOTHLESSROUNDED$5sIl0b ? [r312_Arch.lhs(0), r312_flat(r312_xEtRight, r312_adaEt), r312_curl(r312_xEtRight, r312_yEtRightBarTop, r312_heading(r312_Upward))] : (r337___ = _r337_t0, [])));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.etToothed", null, r312_union(r312_EtUpperHalf(), r312_EtLowerHalf(r312_xn$FORMTOOTHED$5sIl), r312_VBar.r(r312_xEtRight, r312_adaEt + r312_O, r312_yEtRightBarTop), r312_VBar.r(r312_xEtRight, r312_adaEt, 0, Math.max(r312_AdviceStroke(5), r312_Stroke - r312_ShoulderFine / 2))));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.etTailed", null, r312_union(r312_EtUpperHalf(), r312_EtLowerHalf(r312_xn$FORMTOOTHED$5sIl), r312_RightwardTailedBar(r312_xEtRight, 0, r312_yEtRightBarTop)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.etFlatBottom", null, r312_union(r312_EtUpperHalf(), r312_EtLowerHalf(r312_xn$FORMFLATBOTTOM$5sIl5), r312_VBar.r(r312_xEtRight, 0, r312_yEtRightBarTop)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.etToothlessCorner", null, r312_union(r312_EtUpperHalf(), r312_EtLowerHalf(r312_xn$FORMTOOTHLESSCORNER$5sIl0b), r312_VBar.r(r312_xEtRight, r312_DToothlessRise, r312_yEtRightBarTop)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand.etToothlessRounded", null, r312_union(r312_EtUpperHalf(), r312_EtLowerHalf(r312_xn$FORMTOOTHLESSROUNDED$5sIl0b)));
        var r312_yEtFlatTopEnd = Math.max(0 + r312_ArchDepthA + r312_fineAmp, r1_mix(0, r312_CAP, 0.4));
        var r312_pyEtFlatTopBarPos = (r1_mix(0, r312_CAP, r312_OverlayPos) + r312_Stroke * 0.125) / (r312_CAP - 0);
        var r312_EtFlatTopConfig = {
            "flatTopSerifless": false,
            "flatTopSerifed": true
        };
        var _r312_t9 = _r1_t2(r312_EtFlatTopConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_fSerifed = _r312_t11[1];
            (function () {
                return r312_xn$GlyphSaveSink$2Lrc4b.save("ampersand." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                    var _r351_t1, _r351_t2;
                    var r351_et = r312_RevEzh(r312_CAP, 0, new r312_xn$NamedParameterPair$2Lrc9b("fSerifed", r312_fSerifed), new r312_xn$NamedParameterPair$2Lrc9b("terminal", 0), new r312_xn$NamedParameterPair$2Lrc9b("ada", r312_adaEt), new r312_xn$NamedParameterPair$2Lrc9b("adb", r312_adbEt), new r312_xn$NamedParameterPair$2Lrc9b("pyMidRight", r312_pyEtFlatTopBarPos));
                    var _r351_t0 = r351_et.Dim();
                    var r351_xArcMid = _r351_t0.xArcMid;
                    var r351_yArcMid = _r351_t0.yArcMid;
                    r351_currentGlyph.include(r312_union(r312_LowerOpenCrossbar(r312_yEtFlatTopEnd), r351_et.Shape(), r312_dispiro(r312_widths.lhs(), r312_g4.down.mid(r351_xArcMid, r351_yArcMid, r312_heading(r312_Downward)), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r312_fineAmp)), r312_flat(r312_xLowerOpenRight - r312_OX, r312_adaEt, r312_widths.lhs(r312_fineAmp)), r312_curl(r312_xLowerOpenRight - r312_OX, r312_yEtFlatTopEnd, r312_heading(r312_Upward)))));
                    return void 0;
                }));
            })();
        }
        return r312_xn$selectvariant$7Hrq("ampersand", "&");
    });
    return void 0;
});


