"use strict";
import * as _s0_t0 from "@iosevka/font-kits/weight-control";
import * as _s0_t1 from "@iosevka/geometry/point";
import * as _s0_t2 from "@iosevka/geometry/transform";
import * as _s0_t3 from "@iosevka/geometry/anchor";
import * as _s0_t4 from "@iosevka/geometry/box";
import * as _s0_t5 from "@iosevka/util";
var _s0_t6;
export {_s0_t6 as calculateMetrics};
var _s0_t7;
export {_s0_t7 as setFontMetrics};
var _s0_t8;
export {_s0_t8 as copyFontMetrics};
var _s0_t9;
export {_s0_t9 as DesignParameters};
var r1_calculateMetrics, r1_setFontMetrics, r1_copyFontMetrics, r1_DesignParameters, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_CreateWeightControl = _r1_t8.CreateWeightControl;
var _r1_t9 = _s0_t1;
var r1_Vec2 = _r1_t9.Vec2;
var r1_Point = _r1_t9.Point;
var _r1_t10 = _s0_t2;
var r1_Transform = _r1_t10.Transform;
var _r1_t11 = _s0_t3;
var r1_Anchor = _r1_t11.Anchor;
var _r1_t12 = _s0_t4;
var r1_Box = _r1_t12.Box;
var _r1_t13 = _s0_t5;
var r1_mix = _r1_t13.mix;
var r1_linreg = _r1_t13.linreg;
var r1_clamp = _r1_t13.clamp;
var r1_fallback = _r1_t13.fallback;
_s0_t6 = r1_calculateMetrics = function (r136_para) {
    var _r136_t1, _r136_t2;
    var r136_UPM = 1000;
    var r136_HalfUPM = r136_UPM / 2;
    var r136_Width = Math.round(r136_para.width);
    var r136_SB = Math.round(r136_para.sb);
    var r136_CAP = Math.round(r136_para.cap);
    var r136_XH = Math.round(r136_para.xHeight);
    var r136_Ascender = Math.round(r136_para.ascender);
    var r136_Descender = Math.round(r1_fallback(r136_para.descender, r136_XH - r136_Ascender));
    var r136_SymbolMid = Math.round(r136_para.symbolMid);
    var r136_halfParenSize = Math.ceil(r136_para.parenSize / 2);
    var r136_ParenTop = r136_SymbolMid + r136_halfParenSize;
    var r136_ParenBot = r136_SymbolMid - r136_halfParenSize;
    var r136_OperTop = r136_SymbolMid + r136_para.operSize * (r136_Width - r136_SB * 2);
    var r136_OperBot = r136_SymbolMid - r136_para.operSize * (r136_Width - r136_SB * 2);
    var r136_TackTop = r136_SymbolMid + r136_para.tackSize * (r136_Width - r136_SB * 2);
    var r136_TackBot = r136_SymbolMid - r136_para.tackSize * (r136_Width - r136_SB * 2);
    var r136_PlusTop = r136_SymbolMid + r136_para.plusSize * (r136_Width - r136_SB * 2);
    var r136_PlusBot = r136_SymbolMid - r136_para.plusSize * (r136_Width - r136_SB * 2);
    var r136_PictTop = r136_SymbolMid + r136_para.pictSize * (r136_Width - r136_SB * 2);
    var r136_PictBot = r136_SymbolMid - r136_para.pictSize * (r136_Width - r136_SB * 2);
    var r136_BgOpTop = r136_SymbolMid + r136_para.bgopSize * (r136_Width - r136_SB * 2);
    var r136_BgOpBot = r136_SymbolMid - r136_para.bgopSize * (r136_Width - r136_SB * 2);
    var r136_BgTkTop = r136_SymbolMid + r136_para.bgtkSize * (r136_Width - r136_SB * 2);
    var r136_BgTkBot = r136_SymbolMid - r136_para.bgtkSize * (r136_Width - r136_SB * 2);
    var r136_Contrast = r1_fallback(r136_para.contrast, 1);
    var r136_Italify = function (r137_angle, r137_shift) {
        var _r137_t0, _r137_t1;
        var r137_slope = Math.tan(r1_fallback(r137_angle, r136_para.slopeAngle) / 180 * Math.PI);
        return new r1_Transform(1, r137_slope, 0, 1, r1_fallback(r137_shift, -r137_slope * r136_SymbolMid), 0);
    };
    var r136_Upright = function (r138_angle, r138_shift) {
        var _r138_t0, _r138_t1;
        return r136_Italify(r138_angle, r138_shift).inverse;
    };
    var r136_Scale = function (r139_sx, r139_sy) {
        var _r139_t0, _r139_t1;
        return new r1_Transform(r139_sx, 0, 0, r1_fallback(r139_sy, r139_sx), 0, 0);
    };
    var r136_Translate = function (r140_x, r140_y) {
        var _r140_t0, _r140_t1;
        return new r1_Transform(1, 0, 0, 1, r140_x, r140_y);
    };
    var r136_ApparentTranslate = function (r141_x, r141_y) {
        var _r141_t0, _r141_t1;
        return r136_Translate(r141_x + r136_TanSlope * r141_y, r141_y);
    };
    var r136_Rotate = function (r142_angle) {
        var _r142_t0, _r142_t1;
        return new r1_Transform(Math.cos(r142_angle), Math.sin(-r142_angle), Math.sin(r142_angle), Math.cos(r142_angle), 0, 0);
    };
    var r136_GlobalTransform = r136_Italify(r136_para.slopeAngle);
    var r136_TanSlope = r136_GlobalTransform.xy;
    var r136_SinSlope = Math.sin(r136_para.slopeAngle / 180 * Math.PI);
    var r136_CosSlope = Math.cos(r136_para.slopeAngle / 180 * Math.PI);
    var r136_HVContrast = r136_Contrast * r136_CosSlope + r136_SinSlope * r136_TanSlope;
    var r136_VHContrast = 1 / r136_HVContrast;
    var r136_HSwToV = function (r143_sw) {
        var _r143_t0, _r143_t1;
        return r143_sw * r136_HVContrast;
    };
    var r136_VSwToH = function (r144_sw) {
        var _r144_t0, _r144_t1;
        return r144_sw / r136_HVContrast;
    };
    var r136_Upward = new r1_Vec2(-r136_HVContrast, 0);
    var r136_Downward = new r1_Vec2(+r136_HVContrast, 0);
    var r136_Rightward = new r1_Vec2(0, +1);
    var r136_Leftward = new r1_Vec2(0, -1);
    var r136_O = r136_para.overshoot;
    var r136_OX = r136_para.overshootx;
    var r136_OXHook = r136_para.oxhook;
    var r136_Hook = r136_para.hook;
    var r136_AHook = r136_para.ahook;
    var r136_SHook = r136_para.shook;
    var r136_RHook = r136_para.rhook;
    var r136_JHook = r136_para.jhook;
    var r136_HookX = r136_para.hookx;
    var r136_TailX = r136_para.tailX;
    var r136_TailY = r136_para.tailY;
    var r136_DiagTailAngle = r136_para.diagTailAngle;
    var r136_DiagTailDepth = r136_para.diagTailDepth;
    var r136_ArchDepth = r136_para.archDepth;
    var r136_SmallArchDepth = r136_para.smallArchDepth;
    var _r136_t0 = r1_CreateWeightControl(r136_para, {
        "Width": r136_Width,
        "SB": r136_SB,
        "HVContrast": r136_HVContrast
    });
    var r136_AdviceStrokeInSpace = _r136_t0.AdviceStrokeInSpace;
    var r136_AdviceStroke = _r136_t0.AdviceStroke;
    var r136_AdviceStroke2 = _r136_t0.AdviceStroke2;
    var r136_Stroke = r136_AdviceStroke(2);
    var r136_HalfStroke = r136_Stroke / 2;
    var r136_QuarterStroke = r136_Stroke / 4;
    var r136_DotSize = r1_fallback(r136_para.dotSize, r136_Stroke);
    var r136_PeriodSize = r1_fallback(r136_para.periodSize, r136_DotSize);
    var r136_SquareDotScalar = r1_DesignParameters.squareDotScalar;
    var r136_HBarPos = r1_DesignParameters.hBarPos - 0.09 * r136_Stroke / r136_CAP;
    var r136_OverlayPos = r1_DesignParameters.overlayPos;
    var r136_OverlayStroke = r136_AdviceStroke(3.75);
    var r136_Jut = r136_para.jut;
    var r136_LongJut = r136_para.longjut;
    var r136_MidJutSide = Math.max(r136_Jut, r1_mix(r136_HSwToV(r136_HalfStroke), r136_LongJut, 0.5));
    var r136_MidJutCenter = Math.max(r136_Jut, r1_mix(r136_HSwToV(r136_HalfStroke), r136_LongJut, 0.6));
    var r136_VJut = r136_para.vjut;
    var r136_LongVJut = r1_fallback(r136_para.longvjut, r136_LongJut);
    var r136_VJutStroke = r136_AdviceStroke(3.5);
    var r136_AccentStackOffset = r136_para.accentStackOffset;
    var r136_AccentWidth = r136_para.accentWidth;
    var r136_AccentClearance = r136_para.accentClearance;
    var r136_AccentHeight = r136_para.accentHeight;
    var r136_CThin = r1_fallback(r136_para.cthin, 0.75);
    var r136_CThinB = r1_fallback(r136_para.cthinb, 0.5);
    var r136_SLAB = r136_para.slab;
    var r136_IBalance = function (r145_df) {
        var _r145_t0, _r145_t1;
        return r145_df.adws * r145_df.adws * r1_fallback(r136_para.ibalance, r136_LongJut * 0.04);
    };
    var r136_IBalance2 = function (r146_df) {
        var _r146_t0, _r146_t1;
        return r146_df.adws * r1_fallback(r136_para.ibalance2, r136_LongJut * 0.14);
    };
    var r136_JBalance = r1_fallback(r136_para.jbalance, 0);
    var r136_JBalance2 = r1_fallback(r136_para.jbalance2, r136_LongJut * 0.04 + r136_QuarterStroke);
    var r136_TBalance = r1_fallback(r136_para.tbalance, r136_JBalance);
    var r136_TBalance2 = r1_fallback(r136_para.tbalance2, r136_TBalance);
    var r136_RBalance = r1_fallback(r136_para.rbalance, r136_JBalance * 0.3);
    var r136_RBalance2 = r1_fallback(r136_para.rbalance2, 0);
    var r136_FBalance = r1_fallback(r136_para.fbalance, 0);
    var r136_OneBalance = r1_fallback(r136_para.onebalance, 0);
    var r136_WideWidth0 = r136_para.isQuasiProportional ? r136_UPM : r136_Width * 2;
    var r136_WideWidth1 = r136_para.spacing >= 1 ? r136_WideWidth0 : r136_Width;
    var r136_WideWidth2 = r136_para.spacing >= 2 ? r136_WideWidth0 : r136_Width;
    var r136_WideWidth3 = r136_para.spacing >= 3 ? r136_WideWidth0 : r136_Width;
    var r136_WideWidth4 = r136_para.spacing >= 4 ? r136_WideWidth0 : r136_Width;
    var r136_NarrowUnicodeT = function (r147_wd) {
        var _r147_t0, _r147_t1;
        return function (r148_u) {
            var _r148_t0, _r148_t1;
            return r147_wd === r136_Width ? r148_u : null;
        };
    };
    var r136_WideUnicodeT = function (r149_wd) {
        var _r149_t0, _r149_t1;
        return function (r150_u) {
            var _r150_t0, _r150_t1;
            return r149_wd !== r136_Width ? r150_u : null;
        };
    };
    var r136_EssRatioUpper = r1_fallback(r136_para.essRatioUpper, r136_para.essRatio, r136_Contrast);
    var r136_EssRatioLower = r1_fallback(r136_para.essRatioLower, r136_para.essRatio, r136_Contrast);
    var r136_EssRatioQuestion = r1_fallback(r136_para.essRatioQuestion, r136_para.essRatio, r136_Contrast);
    var r136_EssUpper = r136_Stroke * r136_EssRatioUpper;
    var r136_EssLower = r136_Stroke * r136_EssRatioLower;
    var r136_EssQuestion = r136_Stroke * r136_EssRatioQuestion;
    var r136_RightSB = r136_Width - r136_SB;
    var r136_Middle = r136_Width / 2;
    var r136_DotRadius = r136_DotSize / 2;
    var r136_PeriodRadius = r136_PeriodSize / 2;
    var r136_SideJut = r136_Jut - r136_HSwToV(r136_HalfStroke);
    var r136_DToothlessRise = r136_Hook / 4 + r136_Stroke / 16;
    var r136_ShoulderFine = Math.min(r136_Stroke * r136_para.shoulderFineMin, r136_AdviceStroke(24));
    var r136_TightBendInnerDiameter = Math.max(r136_XH / 32, r136_AdviceStroke2(24, 32, r136_XH));
    var r136_TightBendInnerRadius = r136_TightBendInnerDiameter / 2;
    var r136_StrokeWidthBlend = function (r151_lo, r151_hi, r151_sw) {
        var _r151_t0, _r151_t1;
        var r151_swRef = r1_fallback(r151_sw, r136_Stroke) / r136_Stroke * r136_para.refStroke;
        return r1_linreg(r136_para.canonicalStrokeWidthMin, r151_lo, r136_para.canonicalStrokeWidthMax, r151_hi, r151_swRef);
    };
    var r136_SmoothAdjust = r136_StrokeWidthBlend(80, 144);
    var r136_ArchDepthAOf = function (r152_archDepth, r152_width) {
        var _r152_t0, _r152_t1;
        var r152_adws = r1_fallback(r152_width, r136_Width) / r136_Width;
        return r152_archDepth - r136_TanSlope * r136_SmoothAdjust * r152_adws;
    };
    var r136_ArchDepthBOf = function (r153_archDepth, r153_width) {
        var _r153_t0, _r153_t1;
        var r153_adws = r1_fallback(r153_width, r136_Width) / r136_Width;
        return r153_archDepth + r136_TanSlope * r136_SmoothAdjust * r153_adws;
    };
    var r136_ArchDepthA = r136_ArchDepthAOf(r136_ArchDepth);
    var r136_ArchDepthB = r136_ArchDepthBOf(r136_ArchDepth);
    var r136_SmallArchDepthA = r136_ArchDepthAOf(r136_SmallArchDepth);
    var r136_SmallArchDepthB = r136_ArchDepthBOf(r136_SmallArchDepth);
    var r136_YSmoothMidR = function (r154_top, r154_bot, r154__ada, r154__adb) {
        var _r154_t0, _r154_t1;
        if (r154_bot > r154_top) return r136_YSmoothMidR(r154_bot, r154_top, r154__ada, r154__adb);
        var r154_ada = r1_fallback(r154__ada, r136_ArchDepthA);
        var r154_adb = r1_fallback(r154__adb, r136_ArchDepthB);
        var r154_delta = (r154_adb - r154_ada) / 2;
        var r154_smOfSma = r154_ada + r154_delta;
        var r154_smOfSmb = r154_adb - r154_delta;
        var r154_yNotAdjusted = r1_mix(r154_bot, r154_top, r154_smOfSma / (r154_smOfSma + r154_smOfSmb));
        return r154_yNotAdjusted - r154_delta * Math.min(1, (r154_top - r154_bot) / (r154_ada + r154_adb));
    };
    r136_YSmoothMidR.cr = function (r155_c, r155_r, r155__ada, r155__adb) {
        var _r155_t0, _r155_t1;
        return r136_YSmoothMidR(r155_c + r155_r, r155_c - r155_r, r155__ada, r155__adb);
    };
    var r136_YSmoothMidL = function (r156_top, r156_bot, r156__ada, r156__adb) {
        var _r156_t0, _r156_t1;
        if (r156_bot > r156_top) return r136_YSmoothMidL(r156_bot, r156_top, r156__ada, r156__adb);
        var r156_ada = r1_fallback(r156__ada, r136_ArchDepthA);
        var r156_adb = r1_fallback(r156__adb, r136_ArchDepthB);
        var r156_delta = (r156_adb - r156_ada) / 2;
        var r156_smOfSma = r156_ada + r156_delta;
        var r156_smOfSmb = r156_adb - r156_delta;
        var r156_yNotAdjusted = r1_mix(r156_bot, r156_top, r156_smOfSmb / (r156_smOfSma + r156_smOfSmb));
        return r156_yNotAdjusted + r156_delta * Math.min(1, (r156_top - r156_bot) / (r156_ada + r156_adb));
    };
    r136_YSmoothMidL.cr = function (r157_c, r157_r, r157__ada, r157__adb) {
        var _r157_t0, _r157_t1;
        return r136_YSmoothMidL(r157_c + r157_r, r157_c - r157_r, r157__ada, r157__adb);
    };
    var r136_ArchDepthAClamped = function (r158_top, r158_bot, r158__ada, r158__adb) {
        var _r158_t0, _r158_t1;
        var r158_height = Math.abs(r158_top - r158_bot);
        var r158_ada = r1_fallback(r158__ada, r136_ArchDepthA);
        var r158_adb = r1_fallback(r158__adb, r136_ArchDepthB);
        return r158_ada + r158_adb < r158_height ? r158_ada : r136_YSmoothMidR(r158_height, 0, r158_ada, r158_adb);
    };
    var r136_ArchDepthBClamped = function (r159_top, r159_bot, r159__ada, r159__adb) {
        var _r159_t0, _r159_t1;
        var r159_height = Math.abs(r159_top - r159_bot);
        var r159_ada = r1_fallback(r159__ada, r136_ArchDepthA);
        var r159_adb = r1_fallback(r159__adb, r136_ArchDepthB);
        return r159_ada + r159_adb < r159_height ? r159_adb : r136_YSmoothMidL(r159_height, 0, r159_ada, r159_adb);
    };
    var r136_CorrectionOMidX = r136_TanSlope * 0.9 * r136_StrokeWidthBlend(1.3, 0.9);
    var r136_CorrectionOMidS = r136_Stroke * r136_CorrectionOMidX;
    var r136_SerifShiftX = r136_TanSlope * r1_DesignParameters.serifShiftX;
    var r136_SerifShiftS = r136_Stroke * r136_SerifShiftX;
    var r136_OperatorStroke = r136_AdviceStroke(2.75);
    var r136_GeometryStroke = r136_AdviceStroke(4);
    var r136_UnicodeWeightGrade = function (r160_n00, r160__adws, r160__sw) {
        var _r160_t0, _r160_t1;
        var r160_n = r160_n00 / 100;
        var r160_adws = r1_fallback(r160__adws, 1);
        var r160_kw = 10 - r160_adws - r160_n / 2;
        var r160_mulPow = function (r161_s) {
            var _r161_t0, _r161_t1;
            return (0.25 + r161_s / 8) * r136_StrokeWidthBlend(2, 1);
        };
        var r160_kMul = Math.pow(r160_n, r160_mulPow(r160_adws)) / Math.pow(4, r160_mulPow(2));
        var r160_kAdj = r1_fallback(r160__sw, r136_Stroke) / r136_AdviceStroke(6);
        return r160_kMul * r160_kAdj * r136_AdviceStroke(r160_kw);
    };
    var r136_xn$VERYFAR$5sIl = r136_UPM * 16;
    var r136_TINY = 1 / 128;
    return {
        "DesignParameters": r1_DesignParameters,
        "UPM": r136_UPM,
        "HalfUPM": r136_HalfUPM,
        "Width": r136_Width,
        "SB": r136_SB,
        "CAP": r136_CAP,
        "XH": r136_XH,
        "Ascender": r136_Ascender,
        "Descender": r136_Descender,
        "SymbolMid": r136_SymbolMid,
        "ParenTop": r136_ParenTop,
        "ParenBot": r136_ParenBot,
        "OperTop": r136_OperTop,
        "OperBot": r136_OperBot,
        "TackTop": r136_TackTop,
        "TackBot": r136_TackBot,
        "PlusTop": r136_PlusTop,
        "PlusBot": r136_PlusBot,
        "PictTop": r136_PictTop,
        "PictBot": r136_PictBot,
        "BgOpTop": r136_BgOpTop,
        "BgOpBot": r136_BgOpBot,
        "BgTkTop": r136_BgTkTop,
        "BgTkBot": r136_BgTkBot,
        "Contrast": r136_Contrast,
        "Italify": r136_Italify,
        "Upright": r136_Upright,
        "Scale": r136_Scale,
        "Translate": r136_Translate,
        "ApparentTranslate": r136_ApparentTranslate,
        "Rotate": r136_Rotate,
        "GlobalTransform": r136_GlobalTransform,
        "TanSlope": r136_TanSlope,
        "HVContrast": r136_HVContrast,
        "VHContrast": r136_VHContrast,
        "HSwToV": r136_HSwToV,
        "VSwToH": r136_VSwToH,
        "Upward": r136_Upward,
        "Downward": r136_Downward,
        "Rightward": r136_Rightward,
        "Leftward": r136_Leftward,
        "O": r136_O,
        "OX": r136_OX,
        "OXHook": r136_OXHook,
        "Hook": r136_Hook,
        "AHook": r136_AHook,
        "SHook": r136_SHook,
        "RHook": r136_RHook,
        "JHook": r136_JHook,
        "HookX": r136_HookX,
        "TailX": r136_TailX,
        "TailY": r136_TailY,
        "DiagTailAngle": r136_DiagTailAngle,
        "DiagTailDepth": r136_DiagTailDepth,
        "ArchDepth": r136_ArchDepth,
        "SmallArchDepth": r136_SmallArchDepth,
        "AdviceStrokeInSpace": r136_AdviceStrokeInSpace,
        "AdviceStroke": r136_AdviceStroke,
        "AdviceStroke2": r136_AdviceStroke2,
        "Stroke": r136_Stroke,
        "HalfStroke": r136_HalfStroke,
        "QuarterStroke": r136_QuarterStroke,
        "DotSize": r136_DotSize,
        "PeriodSize": r136_PeriodSize,
        "SquareDotScalar": r136_SquareDotScalar,
        "HBarPos": r136_HBarPos,
        "OverlayPos": r136_OverlayPos,
        "OverlayStroke": r136_OverlayStroke,
        "Jut": r136_Jut,
        "LongJut": r136_LongJut,
        "MidJutSide": r136_MidJutSide,
        "MidJutCenter": r136_MidJutCenter,
        "VJut": r136_VJut,
        "LongVJut": r136_LongVJut,
        "VJutStroke": r136_VJutStroke,
        "AccentStackOffset": r136_AccentStackOffset,
        "AccentWidth": r136_AccentWidth,
        "AccentClearance": r136_AccentClearance,
        "AccentHeight": r136_AccentHeight,
        "CThin": r136_CThin,
        "CThinB": r136_CThinB,
        "SLAB": r136_SLAB,
        "IBalance": r136_IBalance,
        "IBalance2": r136_IBalance2,
        "JBalance": r136_JBalance,
        "JBalance2": r136_JBalance2,
        "TBalance": r136_TBalance,
        "TBalance2": r136_TBalance2,
        "RBalance": r136_RBalance,
        "RBalance2": r136_RBalance2,
        "FBalance": r136_FBalance,
        "OneBalance": r136_OneBalance,
        "WideWidth0": r136_WideWidth0,
        "WideWidth1": r136_WideWidth1,
        "WideWidth2": r136_WideWidth2,
        "WideWidth3": r136_WideWidth3,
        "WideWidth4": r136_WideWidth4,
        "NarrowUnicodeT": r136_NarrowUnicodeT,
        "WideUnicodeT": r136_WideUnicodeT,
        "EssRatioUpper": r136_EssRatioUpper,
        "EssRatioLower": r136_EssRatioLower,
        "EssRatioQuestion": r136_EssRatioQuestion,
        "EssUpper": r136_EssUpper,
        "EssLower": r136_EssLower,
        "EssQuestion": r136_EssQuestion,
        "RightSB": r136_RightSB,
        "Middle": r136_Middle,
        "DotRadius": r136_DotRadius,
        "PeriodRadius": r136_PeriodRadius,
        "SideJut": r136_SideJut,
        "DToothlessRise": r136_DToothlessRise,
        "ShoulderFine": r136_ShoulderFine,
        "TightBendInnerDiameter": r136_TightBendInnerDiameter,
        "TightBendInnerRadius": r136_TightBendInnerRadius,
        "StrokeWidthBlend": r136_StrokeWidthBlend,
        "SmoothAdjust": r136_SmoothAdjust,
        "ArchDepthAOf": r136_ArchDepthAOf,
        "ArchDepthBOf": r136_ArchDepthBOf,
        "ArchDepthA": r136_ArchDepthA,
        "ArchDepthB": r136_ArchDepthB,
        "SmallArchDepthA": r136_SmallArchDepthA,
        "SmallArchDepthB": r136_SmallArchDepthB,
        "YSmoothMidR": r136_YSmoothMidR,
        "YSmoothMidL": r136_YSmoothMidL,
        "ArchDepthAClamped": r136_ArchDepthAClamped,
        "ArchDepthBClamped": r136_ArchDepthBClamped,
        "CorrectionOMidX": r136_CorrectionOMidX,
        "CorrectionOMidS": r136_CorrectionOMidS,
        "SerifShiftX": r136_SerifShiftX,
        "SerifShiftS": r136_SerifShiftS,
        "OperatorStroke": r136_OperatorStroke,
        "GeometryStroke": r136_GeometryStroke,
        "UnicodeWeightGrade": r136_UnicodeWeightGrade,
        "VERY-FAR": r136_xn$VERYFAR$5sIl,
        "TINY": r136_TINY
    };
};
_s0_t7 = r1_setFontMetrics = function (r163_para, r163_metrics, r163_fm) {
    var _r163_t1, _r163_t2;
    var _r163_t0 = r163_metrics;
    var r163_CAP = _r163_t0.CAP;
    var r163_Descender = _r163_t0.Descender;
    var r163_XH = _r163_t0.XH;
    var r163_Width = _r163_t0.Width;
    var r163_SymbolMid = _r163_t0.SymbolMid;
    var r163_leading = Math.round(r163_para.leading);
    var r163_asc = Math.round(r163_SymbolMid + r163_leading / 2);
    var r163_desc = Math.round(r163_SymbolMid - r163_leading / 2);
    var r163_descenderPad = Math.round(r1_fallback(r163_para.descenderPad, 0));
    var r163_winMetricAscenderPad = Math.round(r1_fallback(r163_para.winMetricAscenderPad, 0));
    var r163_winMetricDescenderPad = Math.round(r1_fallback(r163_para.winMetricDescenderPad, 0));
    r163_fm.os2.xAvgCharWidth = r163_Width;
    r163_fm.head.unitsPerEm = 1000;
    r163_fm.hhea.ascender = r163_asc;
    r163_fm.os2.usWinAscent = r163_asc + r163_winMetricAscenderPad;
    r163_fm.os2.sTypoAscender = r163_asc;
    r163_fm.hhea.descender = r163_Descender - r163_descenderPad;
    r163_fm.os2.usWinDescent = Math.abs(r163_desc) + r163_descenderPad + r163_winMetricDescenderPad;
    r163_fm.os2.sTypoDescender = r163_desc - r163_descenderPad;
    r163_fm.hhea.lineGap = r163_leading - r163_asc + r163_Descender;
    r163_fm.os2.sTypoLineGap = r163_leading - r163_asc + r163_desc;
    r163_fm.os2.sxHeight = r163_XH;
    r163_fm.os2.sCapHeight = r163_CAP;
    var r163_slope = Math.tan(r163_para.slopeAngle);
    r163_fm.post.italicAngle = Math.round(0 - r163_para.slopeAngle);
    r163_fm.hhea.caretSlopeRise = r163_para.slopeAngle ? 1000 : 1;
    r163_fm.hhea.caretSlopeRun = r163_para.slopeAngle ? -r163_slope * 1000 : 0;
    r163_fm.hhea.caretOffset = r163_para.slopeAngle ? -r163_slope * r163_para.symbolMid : 0;
    r163_fm.os2.yStrikeoutPosition = r163_para["os2.yStrikeoutPosition"];
    r163_fm.os2.yStrikeoutSize = r163_para["os2.yStrikeoutSize"];
    r163_fm.os2.ySubscriptXOffset = r163_para["os2.ySubscriptXOffset"];
    r163_fm.os2.ySubscriptXSize = r163_para["os2.ySubscriptXSize"];
    r163_fm.os2.ySubscriptYOffset = r163_para["os2.ySubscriptYOffset"];
    r163_fm.os2.ySubscriptYSize = r163_para["os2.ySubscriptYSize"];
    r163_fm.os2.ySuperscriptXOffset = r163_para["os2.ySuperscriptXOffset"];
    r163_fm.os2.ySuperscriptXSize = r163_para["os2.ySuperscriptXSize"];
    r163_fm.os2.ySuperscriptYOffset = r163_para["os2.ySuperscriptYOffset"];
    r163_fm.os2.ySuperscriptYSize = r163_para["os2.ySuperscriptYSize"];
    r163_fm.post.underlinePosition = r163_para["post.underlinePosition"];
    return r163_fm.post.underlineThickness = r163_para["post.underlineThickness"];
};
_s0_t8 = r1_copyFontMetrics = function (r165_fm1, r165_fm2) {
    var _r165_t0, _r165_t1;
    r165_fm2.os2.xAvgCharWidth = r165_fm1.os2.xAvgCharWidth;
    r165_fm2.head.unitsPerEm = r165_fm1.head.unitsPerEm;
    r165_fm2.hhea.ascender = r165_fm1.hhea.ascender;
    r165_fm2.os2.usWinAscent = r165_fm1.os2.usWinAscent;
    r165_fm2.os2.sTypoAscender = r165_fm1.os2.sTypoAscender;
    r165_fm2.hhea.descender = r165_fm1.hhea.descender;
    r165_fm2.os2.usWinDescent = r165_fm1.os2.usWinDescent;
    r165_fm2.os2.sTypoDescender = r165_fm1.os2.sTypoDescender;
    r165_fm2.hhea.lineGap = r165_fm1.hhea.lineGap;
    r165_fm2.os2.sTypoLineGap = r165_fm1.os2.sTypoLineGap;
    r165_fm2.os2.sxHeight = r165_fm1.os2.sxHeight;
    r165_fm2.os2.sCapHeight = r165_fm1.os2.sCapHeight;
    r165_fm2.post.italicAngle = r165_fm1.post.italicAngle;
    r165_fm2.hhea.caretSlopeRise = r165_fm1.hhea.caretSlopeRise;
    r165_fm2.hhea.caretSlopeRun = r165_fm1.hhea.caretSlopeRun;
    r165_fm2.hhea.caretOffset = r165_fm1.hhea.caretOffset;
    r165_fm2.os2.yStrikeoutPosition = r165_fm1.os2.yStrikeoutPosition;
    r165_fm2.os2.yStrikeoutSize = r165_fm1.os2.yStrikeoutSize;
    r165_fm2.os2.ySubscriptXOffset = r165_fm1.os2.ySubscriptXOffset;
    r165_fm2.os2.ySubscriptXSize = r165_fm1.os2.ySubscriptXSize;
    r165_fm2.os2.ySubscriptYOffset = r165_fm1.os2.ySubscriptYOffset;
    r165_fm2.os2.ySubscriptYSize = r165_fm1.os2.ySubscriptYSize;
    r165_fm2.os2.ySuperscriptXOffset = r165_fm1.os2.ySuperscriptXOffset;
    r165_fm2.os2.ySuperscriptXSize = r165_fm1.os2.ySuperscriptXSize;
    r165_fm2.os2.ySuperscriptYOffset = r165_fm1.os2.ySuperscriptYOffset;
    r165_fm2.os2.ySuperscriptYSize = r165_fm1.os2.ySuperscriptYSize;
    r165_fm2.post.underlinePosition = r165_fm1.post.underlinePosition;
    return r165_fm2.post.underlineThickness = r165_fm1.post.underlineThickness;
};
_s0_t9 = r1_DesignParameters = {
    "straightVShapeSbShrink": 0.8,
    "straightSmallYShapeSbShrink": 0.8,
    "equal_wideness": 0.075,
    "logic_narrow_shrink": 0.75,
    "GeometricLargeX": function (r167_mw, r167_uw) {
        var _r167_t0, _r167_t1;
        return (r167_mw + r167_uw / 2) / r167_mw;
    },
    "geometric_tiny_x": 1 / 7,
    "geometric_very_small_x": 2.5 / 7,
    "geometric_slightly_small_x": 3.25 / 7,
    "geometric_small_x": 4 / 7,
    "geometric_medium_small_x": 4.75 / 7,
    "geometric_medium_x": 5.5 / 7,
    "arrow_size": 0.45,
    "parenOutside": 0.2,
    "parenOutsideSwAdj": 0.2,
    "parenInside": 0.9,
    "parenInsideSwAdj": 0.35,
    "parenCurliness": 0.7,
    "parenOvershoot": 0.0375,
    "bracketOutside": 0.2,
    "bracketOutsideSwAdj": 0.2,
    "bracketInside": 0.9,
    "braceOutside": 0.05,
    "braceInside": 0.9,
    "braceCurlyM1": 0.6,
    "braceCurlyM2": 0.45,
    "braceOvershoot": 0.02,
    "aBarPos": 0.5304,
    "hBarPos": 0.525,
    "eBarPos": 0.5,
    "fiveBarPos": 0.64,
    "overlayPos": 0.52,
    "fBarPosToXH": 0.875,
    "gBarPos": 0.42,
    "upperEBarPos": 0.52,
    "upperGBarPos": 0.52,
    "aBarStrokeAdj": -0.075,
    "fbarStrokeAdj": 0.25,
    "superness": 2.275,
    "tightHookSuperness": 2.3,
    "rHookSuperness": 2.35,
    "serifShiftX": 0.6,
    "squareDotScalar": 0.95
};


