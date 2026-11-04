"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r451_t) {
    var r451_n, r451_i, r451_a, _r451_t3, _r451_t4, _r451_t5, _r451_t6, _r451_t7, _r451_t8, _r451_t9, _r451_t10, _r451_t11, _r451_t12, _r451_t13, _r451_t14, _r451_t15, _r451_t16, _r451_t17, _r451_t18, _r451_t19, _r451_t20, _r451_t21, _r451_t22, _r451_t23, _r451_t24, _r451_t25, _r451_t26;
    var _r451_t0 = function () {
        _r451_t7 = function (_r451_t8) {
            _r451_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r451_t8
            };
        };
        _r451_t9 = r451_t instanceof Array;
        if (_r451_t9) {
            _r451_t10 = r451_n = r451_t.length;
            _r451_t11 = r451_i = 0;
            _r451_t12 = function (_r451_t14) {
                return _r451_t7(_r451_t14);
            };
            _r451_t13 = function (_r451_t15) {
                _r451_t16 = r451_i < r451_n;
                if (_r451_t16) {
                    _r451_t0 = function (_r451_t17) {
                        return _r451_t13(r451_i = r451_i + 1);
                    };
                    return {
                        "value": [r451_i, r451_t[r451_i]],
                        "done": false
                    };
                } else return _r451_t12(_r451_t15);
            };
            return _r451_t13();
        } else {
            _r451_t18 = r451_a = Object.keys(r451_t);
            _r451_t19 = r451_n = r451_a.length;
            _r451_t20 = r451_i = 0;
            _r451_t21 = function (_r451_t23) {
                return _r451_t7(_r451_t23);
            };
            _r451_t22 = function (_r451_t24) {
                _r451_t25 = r451_i < r451_n;
                if (_r451_t25) {
                    _r451_t0 = function (_r451_t26) {
                        return _r451_t22(r451_i = r451_i + 1);
                    };
                    return {
                        "value": [r451_a[r451_i], r451_t[r451_a[r451_i]]],
                        "done": false
                    };
                } else return _r451_t21(_r451_t24);
            };
            return _r451_t22();
        }
    };
    var _r451_t1 = function (x) {
        try {
            return _r451_t0(x);
        } catch (ex) {
            return _r451_t2(ex);
        }
    };
    var _r451_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r451_t3 = this; else {
        _r451_t4 = function () {
            void 0;
        };
        _r451_t4.prototype = _r1_t10.prototype;
        _r451_t3 = new _r451_t4();
    }
    _r451_t3[Symbol.iterator] = function () {
        return _r451_t3;
    };
    _r451_t3.next = _r451_t1;
    _r451_t3.throw = function (x) {
        return _r451_t2(x);
    };
    return _r451_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-W", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_implT, r313_hookRightImplT, r313_bodyType, r313_midHClass, r313_adwsUpper, r313_adwsLower, r313_slabType, r313_straightBar, r313_bottomShape, r313_slabKind, _r313_t14, _r313_t17, _r313_t20, _r313_t21, _r313_t22, _r313_tag23, _r313_t24, _r313_tag25;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_TailX = _r313_t1.TailX;
        var r313_TailY = _r313_t1.TailY;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_CThin = _r313_t1.CThin;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_TightBendInnerRadius = _r313_t1.TightBendInnerRadius;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_unimportant = _r313_t2.unimportant;
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
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_NeedSlab = _r313_t5.NeedSlab;
        var r313_DiagCorDs = _r313_t5.DiagCorDs;
        var r313_HOverlayBar = _r313_t5.HOverlayBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t7.CreateTurnedLetter;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t8.SerifFrame;
        var r313_VerticalHook = _r313_t8.VerticalHook;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-M"].resolve();
        var r313_EarlessRoundedDoubleArchSmallMShape = _r313_t9.EarlessRoundedDoubleArchSmallMShape;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-M"].resolve();
        var r313_MShape = _r313_t10.MShape;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-Y"].resolve();
        var r313_NonCursiveYShapeT = _r313_t11.NonCursiveYShapeT;
        var r313_NonCursiveYConfig = _r313_t11.NonCursiveYConfig;
        var r313_xn$FORMCURLY$5sIl = 0;
        var r313_xn$FORMSTRAIGHT$5sIl = 1;
        var r313_xn$FORMVERTICAL$5sIl = 2;
        var r313_xn$FORMDOUBLEV$5sIl7 = 3;
        var r313_xn$FORMASYMMETRIC$5sIl = 4;
        var r313_xn$FORMCURSIVE$5sIl = 5;
        var r313_xn$FORMCYRLOMEGA$5sIl5 = 6;
        var r313_xn$FORMCURLYASYMMETRIC$5sIl6 = 7;
        var r313_xn$MIDHOTHER$5sIl = 0;
        var r313_xn$MIDHTOP$5sIl = 1;
        var r313_xn$MIDHALMOSTTOP$5sIl7 = 2;
        var r313_xn$SERIFSNONE$7Hrq = 0;
        var r313_xn$SERIFSAUTO$7Hrq = 1;
        var r313_xn$SERIFSMOTION$7Hrq = 2;
        var r313_xn$SERIFSDOUBLEV$7Hrq7 = 3;
        var r313_xn$SERIFSASYMMETRIC$7Hrq = 4;
        var r313_xn$SERIFSCURSIVE$7Hrq = 5;
        var r313_xn$SERIFSCYRLOMEGA$7Hrq5 = 6;
        var r313_xn$SERIFSALL$7Hrq = 7;
        var r313_xn$SERIFSALLOUTER$7Hrq4 = 8;
        var r313_xn$SERIFSALLASYMMETRIC$7Hrq4 = 9;
        var r313_CwFineOuter = 5;
        var r313_CwFineInner = 6;
        var r313_CwFineOuterStraight = 5.5;
        var r313_CwFineInnerStraight = 5.5;
        var r313_CwFineInnerDoubleV = 4.25;
        var r313_CwOuterStrokeCurly = 2.5;
        var r313_CwOuterStrokeStraight1 = 2.5;
        var r313_CwOuterStrokeStraight2 = 3;
        var r313_CwDoubleV = 3.625;
        var r313_CwCyrlOmega = 3;
        var r313_CwWCoCurly = 5;
        var r313_CwWCoStraight = 3.5;
        var r313_CwWCoDoubleV = 3.5;
        var r313_PXBot1Curly = 0.25;
        var r313_PXBot1Straight = 0.235;
        var r313_WMidHeight = function (r321_df, r321_top, r321_bodyType, r321_midHClass) {
            var r321___, _r321_t1, _r321_t2;
            var _r321_t0 = r321_bodyType;
            return _r321_t0 === r313_xn$FORMCURLY$5sIl ? r321_top * 0.6 : _r321_t0 === r313_xn$FORMVERTICAL$5sIl ? r321_top * 0.55 : _r321_t0 === r313_xn$FORMSTRAIGHT$5sIl ? r313_WMidHeightExt(r321_top * 0.72, r321_top, r321_bodyType, r321_midHClass) : _r321_t0 === r313_xn$FORMCURSIVE$5sIl ? r313_WMidHeightExt(r1_mix(r321_df.adviceStroke(3.25), r321_top, 11 / 16), r321_top, r321_bodyType, r321_midHClass) : _r321_t0 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_WMidHeightExt(r321_top, r321_top, r321_bodyType, r321_midHClass) : (r321___ = _r321_t0, r313_WMidHeightExt(r321_top, r321_top, r321_bodyType, r321_midHClass));
        };
        var r313_WMidHeightExt = function (r322_midh, r322_top, r322_bodyType, r322_midHClass) {
            var _r322_t1, _r322_t2;
            var _r322_t0 = r322_midHClass;
            return _r322_t0 === r313_xn$MIDHTOP$5sIl ? r322_top : _r322_t0 === r313_xn$MIDHALMOSTTOP$5sIl7 ? r322_top - r313_Stroke : _r322_t0 === r313_xn$MIDHOTHER$5sIl ? r322_midh : void 0;
        };
        var r313_WDim = function (r323_df, r323_top, r323_bodyType, r323_slabType, r323_midHClass) {
            var r323__, r323___, _r323_t0, _r323_t1, _r323_t2, _r323_t3, _r323_t4, _r323_t5, _r323_t6, _r323_t7, _r323_t8, _r323_t9, _r323_t10;
            var r323_CwOuterStrokeStraight = r323_midHClass === r313_xn$MIDHOTHER$5sIl ? r313_CwOuterStrokeStraight1 : r313_CwOuterStrokeStraight2;
            var r323_strokeOuter = (_r323_t0 = r323_bodyType, _r323_t0 === r313_xn$FORMCURLY$5sIl ? r313_AdviceStroke(r313_CwOuterStrokeCurly, Math.sqrt(r323_df.adws)) : _r323_t0 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_AdviceStroke(r313_CwOuterStrokeCurly, Math.sqrt(r323_df.adws)) : _r323_t0 === r313_xn$FORMSTRAIGHT$5sIl ? r313_AdviceStroke(r323_CwOuterStrokeStraight, Math.sqrt(r323_df.adws)) : _r323_t0 === r313_xn$FORMDOUBLEV$5sIl7 ? r313_AdviceStroke(r313_CwDoubleV, Math.sqrt(r323_df.adws)) : _r323_t0 === r313_xn$FORMASYMMETRIC$5sIl ? r313_AdviceStroke(r313_CwDoubleV, Math.sqrt(r323_df.adws)) : _r323_t0 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r313_AdviceStroke(r313_CwCyrlOmega, Math.sqrt(r323_df.adws)) : void 0);
            var r323_fineOuter = (_r323_t1 = r323_bodyType, _r323_t1 === r313_xn$FORMCURLY$5sIl ? r313_AdviceStroke(r313_CwFineOuter, r323_df.adws) : _r323_t1 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_AdviceStroke(r313_CwFineOuter, r323_df.adws) : _r323_t1 === r313_xn$FORMSTRAIGHT$5sIl ? r313_AdviceStroke(r313_CwFineOuterStraight, Math.sqrt(r323_df.adws)) : _r323_t1 === r313_xn$FORMDOUBLEV$5sIl7 ? r313_AdviceStroke(r313_CwDoubleV, Math.sqrt(r323_df.adws)) : _r323_t1 === r313_xn$FORMASYMMETRIC$5sIl ? r313_AdviceStroke(r313_CwDoubleV, Math.sqrt(r323_df.adws)) : _r323_t1 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r313_AdviceStroke(r313_CwCyrlOmega, Math.sqrt(r323_df.adws)) : void 0);
            var r323_fineInner = (_r323_t2 = r323_bodyType, _r323_t2 === r313_xn$FORMCURLY$5sIl ? r313_AdviceStroke(r313_CwFineInner, r323_df.adws) : _r323_t2 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_AdviceStroke(r313_CwFineInner, r323_df.adws) : _r323_t2 === r313_xn$FORMSTRAIGHT$5sIl ? r313_AdviceStroke(r313_CwFineInnerStraight, Math.sqrt(r323_df.adws)) : _r323_t2 === r313_xn$FORMDOUBLEV$5sIl7 ? r313_AdviceStroke(r313_CwFineInnerDoubleV, Math.sqrt(r323_df.adws)) : _r323_t2 === r313_xn$FORMASYMMETRIC$5sIl ? r313_AdviceStroke(r313_CwDoubleV, Math.sqrt(r323_df.adws)) : _r323_t2 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r313_AdviceStroke(r313_CwCyrlOmega, Math.sqrt(r323_df.adws)) : void 0);
            var r323_fineHeight = (r323_fineOuter + r323_fineInner) / 2;
            var r323_wCo = (_r323_t3 = r323_bodyType, _r323_t3 === r313_xn$FORMCURLY$5sIl ? r313_AdviceStroke(r313_CwWCoCurly, r323_df.adws) : _r323_t3 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_AdviceStroke(r313_CwWCoCurly, r323_df.adws) : _r323_t3 === r313_xn$FORMSTRAIGHT$5sIl ? r313_AdviceStroke(r313_CwWCoStraight, r323_df.adws) : _r323_t3 === r313_xn$FORMDOUBLEV$5sIl7 ? r313_AdviceStroke(r313_CwWCoDoubleV, r323_df.adws) : _r323_t3 === r313_xn$FORMASYMMETRIC$5sIl ? r313_AdviceStroke(r313_CwWCoDoubleV, r323_df.adws) : _r323_t3 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r313_AdviceStroke(r313_CwWCoDoubleV, r323_df.adws) : void 0);
            var r323_wCo2 = (_r323_t4 = r323_bodyType, _r323_t4 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r313_AdviceStroke(r313_CwCyrlOmega, r323_df.adws) : (r323__ = _r323_t4, r323_wCo));
            var r323_kWCoShrink = r313_CThin;
            var r323_pxBot1 = (_r323_t5 = r323_bodyType, _r323_t5 === r313_xn$FORMCURLY$5sIl ? 0.25 : _r323_t5 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? 0.3 : _r323_t5 === r313_xn$FORMSTRAIGHT$5sIl ? 0.235 : _r323_t5 === r313_xn$FORMDOUBLEV$5sIl7 ? 0.315 : _r323_t5 === r313_xn$FORMASYMMETRIC$5sIl ? 0.3 : _r323_t5 === r313_xn$FORMCYRLOMEGA$5sIl5 ? 0.265 : void 0);
            var r323_botMixOffset = r313_HSwToV(0.5 * r323_wCo2);
            var r323_xBot1 = (r323_bodyType ? r313_O : 0) + r1_mix(r323_df.leftSB + r323_botMixOffset, r323_df.rightSB - r323_botMixOffset, r323_pxBot1);
            var r323_xBot2 = r323_df.width - r323_xBot1;
            var r323_wMidHeight = r313_WMidHeight(r323_df, r323_top, r323_bodyType, r323_midHClass);
            var r323_wMidHeightExt = r313_WMidHeightExt(r323_wMidHeight, r323_top, r323_bodyType, r323_midHClass);
            var r323_xRight1 = (_r323_t6 = r323_bodyType, _r323_t6 === r313_xn$FORMDOUBLEV$5sIl7 || _r323_t6 === r313_xn$FORMASYMMETRIC$5sIl || _r323_t6 === r313_xn$FORMCYRLOMEGA$5sIl5 || _r323_t6 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r1_mix(r323_df.leftSB + r323_botMixOffset, r323_df.rightSB - r323_botMixOffset, 2 * r323_pxBot1) : (r323___ = _r323_t6, r323_bodyType < r313_xn$FORMDOUBLEV$5sIl7 ? r323_df.middle : void 0));
            var r323_xLeft2 = r323_df.width - r323_xRight1;
            var r323_corWCo = r313_DiagCorDs(r323_wMidHeight, r323_xRight1 - r323_xBot1, r323_wCo);
            var r323_wCoCr = r323_corWCo * r323_wCo;
            var r323_corFOuter = r313_DiagCorDs(r323_top, r323_xBot1 - r323_df.leftSB, r323_fineOuter);
            var r323_fineOuterCr = Math.min(r323_kWCoShrink * r323_wCoCr, r323_corFOuter * r323_fineOuter);
            var r323_strokeOuterCr = r323_corFOuter * r323_strokeOuter;
            var r323_corFInner = r313_DiagCorDs(r323_wMidHeight, r323_xRight1 - r323_xBot1, r323_fineInner);
            var r323_fineInnerCr = Math.min(r323_wCoCr, r323_corFInner * r323_fineInner);
            var r323_fineInnerCrTop = (_r323_t7 = r323_bodyType, _r323_t7 === r313_xn$FORMDOUBLEV$5sIl7 ? r323_fineInnerCr : _r323_t7 === r313_xn$FORMASYMMETRIC$5sIl ? r323_fineInnerCr : _r323_t7 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r323_fineInnerCr : _r323_t7 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r323_fineInnerCr : (r323___ = _r323_t7, r323_kWCoShrink * r323_wCoCr));
            var r323_curlyStraightSegLength = (_r323_t8 = r323_bodyType, _r323_t8 === r313_xn$FORMCURLY$5sIl ? 0.25 : _r323_t8 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? 0.25 : (r323___ = _r323_t8, 0.05));
            return {
                "xBot1": r323_xBot1,
                "xBot2": r323_xBot2,
                "strokeOuter": r323_strokeOuter,
                "strokeOuterCr": r323_strokeOuterCr,
                "fineOuter": r323_fineOuter,
                "fineOuterCr": r323_fineOuterCr,
                "fineInner": r323_fineInner,
                "fineInnerCr": r323_fineInnerCr,
                "fineInnerCrTop": r323_fineInnerCrTop,
                "fineHeight": r323_fineHeight,
                "wMidHeight": r323_wMidHeight,
                "wMidHeightExt": r323_wMidHeightExt,
                "xRight1": r323_xRight1,
                "xLeft2": r323_xLeft2,
                "wCoCr": r323_wCoCr,
                "curlyStraightSegLength": r323_curlyStraightSegLength
            };
        };
        var r313_WSerifs = function (r324_df, r324_top, r324_bodyType, r324_slabType, r324_dim) {
            var _r324_t0, _r324_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var r326___, r326_jut, _r326_t0, _r326_t1, _r326_t2, _r326_t3;
                var r326_oSlabPos = (_r326_t0 = r324_bodyType, _r326_t0 === r313_xn$FORMCURLY$5sIl ? 0 : _r326_t0 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? 0 : _r326_t0 === r313_xn$FORMVERTICAL$5sIl ? 0 : _r326_t0 === r313_xn$FORMCYRLOMEGA$5sIl5 ? 0 : (r326___ = _r326_t0, r313_O * 2));
                var r326_sf = r313_SerifFrame(r324_top, 0, r324_df.leftSB, r324_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("hSplit", 3));
                var r326_sfm = r313_SerifFrame(r324_top, 0, r324_df.leftSB + r326_oSlabPos, r324_df.rightSB - r326_oSlabPos, new r313_xn$NamedParameterPair$2Lrc9b("hSplit", 3));
                r326_currentGlyph.include((_r326_t1 = r324_slabType, _r326_t1 === r313_xn$SERIFSNONE$7Hrq ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                    var _r359_t0, _r359_t1;
                    return void 0;
                }) : _r326_t1 === r313_xn$SERIFSAUTO$7Hrq ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
                    var _r355_t0, _r355_t1;
                    r355_currentGlyph.include(r326_sf.lt.full, true, true);
                    r355_currentGlyph.include(r326_sf.rt.full);
                    return void 0;
                })) : _r326_t1 === r313_xn$SERIFSALL$7Hrq ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                    var _r351_t0, _r351_t1;
                    r351_currentGlyph.include(r326_sf.lt.full, true, true);
                    r351_currentGlyph.include(r326_sf.rt.full);
                    return void 0;
                }) : _r326_t1 === r313_xn$SERIFSALLOUTER$7Hrq4 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                    var _r347_t0, _r347_t1;
                    r347_currentGlyph.include(r326_sfm.lt.outer, true, true);
                    r347_currentGlyph.include(r326_sfm.rt.outer);
                    return void 0;
                }) : _r326_t1 === r313_xn$SERIFSALLASYMMETRIC$7Hrq4 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                    var _r343_t0, _r343_t1;
                    r343_currentGlyph.include(r326_sfm.lt.outer, true, true);
                    r343_currentGlyph.include(r326_sfm.rt.full);
                    return void 0;
                }) : _r326_t1 === r313_xn$SERIFSMOTION$7Hrq ? r326_sfm.lt.outer : _r326_t1 === r313_xn$SERIFSDOUBLEV$7Hrq7 ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var _r339_t0, _r339_t1;
                    r339_currentGlyph.include(r326_sfm.lt.outer, true, true);
                    r339_currentGlyph.include(r326_sfm.rt.outer);
                    return void 0;
                })) : _r326_t1 === r313_xn$SERIFSASYMMETRIC$7Hrq ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                    var _r335_t0, _r335_t1;
                    r335_currentGlyph.include(r326_sfm.lt.outer, true, true);
                    r335_currentGlyph.include(r326_sfm.rt.full);
                    return void 0;
                })) : _r326_t1 === r313_xn$SERIFSCURSIVE$7Hrq ? r313_NeedSlab(r313_SLAB, r326_sf.lt.outer) : _r326_t1 === r313_xn$SERIFSCYRLOMEGA$7Hrq5 ? (r326_jut = Math.min(r313_Jut, r313_HSwToV(0.5 * r324_dim.strokeOuter) + 0.375 * (r324_dim.xLeft2 - r324_df.leftSB - r313_HSwToV(1.5 * r324_dim.strokeOuter))), r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                    var _r331_t0, _r331_t1;
                    r331_currentGlyph.include(r313_HSerif.mtAsymmetric(r324_df.leftSB + r313_HSwToV(0.5 * r324_dim.strokeOuter), r324_dim.wMidHeight, r326_jut, r326_jut), true, true);
                    r331_currentGlyph.include(r313_HSerif.mtAsymmetric(r324_dim.xLeft2, r324_dim.wMidHeight, r326_jut, r326_jut));
                    return void 0;
                }))) : void 0));
                return void 0;
            });
        };
        var r313_WShapeImpl = function (r360_df, r360_top, r360_bodyType, r360_slabType, r360_midHClass) {
            var _r360_t0, _r360_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                var r362__, r362___, _r362_t0, _r362_t1, _r362_t2, _r362_t3, _r362_t4, _r362_t5, _r362_t6;
                var r362_dim = r313_WDim(r360_df, r360_top, r360_bodyType, r360_slabType, r360_midHClass);
                r362_currentGlyph.include(r313_tagged("strokeDown1", (_r362_t0 = r360_bodyType, _r362_t0 === r313_xn$FORMCURLY$5sIl || _r362_t0 === r313_xn$FORMCYRLOMEGA$5sIl5 || _r362_t0 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_dispiro(r313_widths.lhs(r362_dim.strokeOuter), r313_flat(r360_df.leftSB, r360_top, r313_heading(r313_Downward)), r313_curl(r360_df.leftSB, r360_top * (1 - r362_dim.curlyStraightSegLength), r313_heading(r313_Downward)), r313_quadControls(0, 0.3, 6, r313_unimportant), r313_g4(r362_dim.xBot1 - r313_HSwToV(0.5 * r362_dim.wCoCr), 0, r313_widths.lhs.heading(r362_dim.fineOuterCr, r313_Downward))) : (r362__ = _r362_t0, r313_dispiro(r313_widths.lhs(r362_dim.strokeOuterCr), r313_flat(r360_df.leftSB + r313_O * 2, r360_top, r313_heading(r313_Downward)), r313_g4(r362_dim.xBot1 - r313_HSwToV(0.5 * r362_dim.wCoCr), 0, r313_widths.lhs.heading(r362_dim.fineOuterCr, r313_Downward)))))));
                r362_currentGlyph.include(r313_tagged("strokeUp2", (_r362_t1 = r360_bodyType, _r362_t1 === r313_xn$FORMCURLY$5sIl || _r362_t1 === r313_xn$FORMCYRLOMEGA$5sIl5 || _r362_t1 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_dispiro(r313_widths.rhs(r362_dim.strokeOuter), r313_flat(r360_df.rightSB, r360_top, r313_heading(r313_Downward)), r313_curl(r360_df.rightSB, r360_top * (1 - r362_dim.curlyStraightSegLength), r313_heading(r313_Downward)), r313_quadControls(0, 0.3, 6, r313_unimportant), r313_g4(r362_dim.xBot2 + r313_HSwToV(0.5 * r362_dim.wCoCr), 0, r313_widths.rhs.heading(r362_dim.fineOuterCr, r313_Downward))) : (r362__ = _r362_t1, r313_dispiro(r313_widths.rhs(r362_dim.strokeOuterCr), r313_flat(r360_df.rightSB - r313_O * 2, r360_top, r313_heading(r313_Downward)), r313_g4(r362_dim.xBot2 + r313_HSwToV(0.5 * r362_dim.wCoCr), 0, r313_widths.rhs.heading(r362_dim.fineOuterCr, r313_Downward)))))));
                var r362_kTopShift = (_r362_t2 = r360_bodyType, _r362_t2 === r313_xn$FORMDOUBLEV$5sIl7 ? 0 : _r362_t2 === r313_xn$FORMASYMMETRIC$5sIl ? 0 : _r362_t2 === r313_xn$FORMCYRLOMEGA$5sIl5 ? 0 : _r362_t2 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? 0 : (r362___ = _r362_t2, 1));
                var r362_k1 = 0.5;
                var r362_k2 = 1 - r362_k1;
                var r362_shiftT = r313_HSwToV(r362_kTopShift * (0.5 * r362_dim.wCoCr - 0.5 * r362_dim.fineInnerCrTop));
                var r362_shiftB = r313_HSwToV(0.5 * r362_dim.wCoCr - 0.5 * r362_dim.fineOuterCr);
                r362_currentGlyph.include(r313_tagged("strokeUp1", r313_difference(r313_dispiro(r313_flat(r362_dim.xRight1 - r362_shiftT, r362_dim.wMidHeight, r313_widths.center.heading(r362_dim.fineInnerCrTop, r313_Downward)), r313_curl(r362_dim.xBot1 + r362_shiftB, 0, r313_widths.center.heading(r362_dim.fineOuterCr, r313_Downward))), (_r362_t3 = r360_bodyType, _r362_t3 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r313_xn$spirooutline$1aao(r313_corner(r360_df.width, r362_dim.wMidHeight + 1), r313_corner(r362_dim.xLeft2, r362_dim.wMidHeight + 1), r313_flat(r362_dim.xLeft2, r362_dim.wMidHeight), r313_curl(r362_dim.xLeft2, r362_dim.wMidHeight * (1 - r362_dim.curlyStraightSegLength)), r313_quadControls(0, 0.3, 6, r313_unimportant), r313_corner(r362_dim.xBot2 - r362_shiftB, 0), r313_corner(r360_df.width, 0)) : _r362_t3 === r313_xn$FORMASYMMETRIC$5sIl || _r362_t3 === r313_xn$FORMCURLYASYMMETRIC$5sIl6 ? r313_xn$spirooutline$1aao(r313_corner(r362_dim.xLeft2, r362_dim.wMidHeight), r313_corner(r362_dim.xBot2, 0), r313_corner(r360_df.width, 0), r313_corner(r360_df.width, r362_dim.wMidHeight)) : (r362__ = _r362_t3, r313_xn$noshape$3cah())))));
                r362_currentGlyph.include(r313_tagged("strokeDown2", (_r362_t4 = r360_bodyType, _r362_t4 === r313_xn$FORMCYRLOMEGA$5sIl5 ? r313_dispiro(r313_flat(r362_dim.xLeft2 - r313_HSwToV(0.5 * r362_dim.strokeOuter), r362_dim.wMidHeight, r313_widths.lhs.heading(r362_dim.strokeOuter, r313_Downward)), r313_curl(r362_dim.xLeft2 - r313_HSwToV(0.5 * r362_dim.strokeOuter), r362_dim.wMidHeight * (1 - r362_dim.curlyStraightSegLength), r313_heading(r313_Downward)), r313_quadControls(0, 0.3, 6, r313_unimportant), r313_g4(r362_dim.xBot2 - r362_shiftB, 0, r313_widths.center.heading(r362_dim.fineOuterCr, r313_Downward))) : (r362__ = _r362_t4, r313_dispiro(r313_flat(r362_dim.xLeft2 + r362_shiftT, r362_dim.wMidHeight, r313_widths.center.heading(r362_dim.fineInnerCrTop, r313_Downward)), r313_curl(r362_dim.xBot2 - r362_shiftB, 0, r313_widths.center.heading(r362_dim.fineOuterCr, r313_Downward)))))));
                if (r362_dim.wMidHeightExt > r362_dim.wMidHeight) r362_currentGlyph.include(r313_tagged("strokeExtension", r313_VBar.m(r360_df.middle, r362_dim.wMidHeight, r362_dim.wMidHeightExt, r362_dim.fineInnerCrTop + r313_VSwToH(r362_shiftT * 2))));
                r362_currentGlyph.include(r313_WSerifs(r360_df, r360_top, r360_bodyType, r360_slabType, r362_dim));
                return void 0;
            });
        };
        var r313_WHookRightShape = function (r369_df, r369_top, r369_bodyType, r369_slabType, r369_midHClass) {
            var _r369_t0, _r369_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                var _r371_t0, _r371_t1;
                r371_currentGlyph.include(r313_WShapeImpl(r369_df, r369_top, r369_bodyType, r369_slabType, r369_midHClass));
                var r371_dim = r313_WDim(r369_df, r369_top, r369_bodyType, r369_slabType, r369_midHClass);
                r371_currentGlyph.ejectTagged("strokeUp2");
                r371_currentGlyph.ejectTagged("serifRT");
                r371_currentGlyph.include(r313_dispiro(r313_widths.rhs(r371_dim.strokeOuter), r313_straight.down.start(r369_df.rightSB, r369_top - r313_TailY - 0.5 * r371_dim.strokeOuter - r313_O, r313_heading(r313_Downward)), r313_quadControls(0, 0.3, 6, r313_unimportant), r313_g4(r371_dim.xBot2 + r313_HSwToV(0.5 * r371_dim.wCoCr), 0, r313_widths.rhs.heading(r371_dim.fineOuterCr, r313_Downward))));
                r371_currentGlyph.include(r313_VerticalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r369_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", r369_top - r313_TailY - 0.5 * r371_dim.strokeOuter - r313_O), new r313_xn$NamedParameterPair$2Lrc9b("xDepth", r313_TailX), new r313_xn$NamedParameterPair$2Lrc9b("yDepth", -r313_TailY), new r313_xn$NamedParameterPair$2Lrc9b("sw", r371_dim.strokeOuter)));
                return void 0;
            });
        };
        var r313_VYShape = function (r382_df, r382_top, r382_straightBar, r382_bottomShape, r382_slabKind) {
            var _r382_t0, _r382_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                var _r384_t1, _r384_t2;
                var r384_wBodyType = r382_straightBar ? r313_xn$FORMSTRAIGHT$5sIl : r313_xn$FORMCURLY$5sIl;
                var _r384_t0 = r382_slabKind;
                var r384_doSlabTop = _r384_t0[0];
                var r384_doSlabBottom = _r384_t0[1];
                var r384_doSlabMotion = _r384_t0[2];
                var r384_wSlabType = r384_doSlabTop ? r313_xn$SERIFSALLOUTER$7Hrq4 : r384_doSlabMotion ? r313_xn$SERIFSMOTION$7Hrq : r313_xn$SERIFSNONE$7Hrq;
                var r384_dim = r313_WDim(r382_df, r382_top, r384_wBodyType, r384_wSlabType, r313_xn$MIDHTOP$5sIl);
                var r384_r = r382_df.width;
                var r384_l = r1_mix(r384_r, r384_dim.xBot2, 2);
                var r384_YShape = r313_NonCursiveYShapeT(r382_straightBar, r382_bottomShape, [false, r384_doSlabBottom, false], r384_l, r384_r, r384_l + r382_df.leftSB, r382_df.mvs);
                var r384_YShapeRight = r384_YShape.RightHalf(0, 1);
                r384_currentGlyph.include(r384_YShape.SmallYShape(r382_top, r313_Descender, r382_df.mvs));
                r384_currentGlyph.ejectTagged("leftHalf");
                r384_currentGlyph.include(r313_difference(r313_WShapeImpl(r382_df, r382_top, r384_wBodyType, r384_wSlabType, r313_xn$MIDHTOP$5sIl), r313_intersection(r313_MaskBelow(r382_top / 2), r313_MaskAbove(r313_Descender + r382_df.mvs), r384_YShapeRight.splitMask(r382_top, r313_Descender))));
                r384_currentGlyph.ejectTagged("strokeUp2");
                return void 0;
            });
        };
        var r313_WVertSides = function (r389_df, r389_top, r389_bodyType, r389_slabType, r389_midHClass) {
            var _r389_t0, _r389_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var _r391_t0, _r391_t1;
                var r391_wMidHeight = r313_WMidHeight(r389_df, r389_top, r389_bodyType, r389_midHClass);
                var r391_wMidHeightExt = r313_WMidHeightExt(r391_wMidHeight, r389_top, r389_bodyType, r389_midHClass);
                r391_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                    var _r395_t0, _r395_t1;
                    r395_currentGlyph.include(r313_MShape(r389_top, r389_df, new r313_xn$NamedParameterPair$2Lrc9b("form", 2), new r313_xn$NamedParameterPair$2Lrc9b("slabType", 0), new r313_xn$NamedParameterPair$2Lrc9b("middleYExt", r389_top - r391_wMidHeightExt)));
                    r395_currentGlyph.include(r313_FlipAround(r389_df.width / 2, r389_top / 2));
                    return void 0;
                })));
                r391_currentGlyph.include(r313_WSerifs(r389_df, r389_top, r389_bodyType, r389_slabType));
                return void 0;
            });
        };
        var r313_WVSHookRightShape = function (r402_df, r402_top, r402_bodyType, r402_slabType, r402_midHClass) {
            var _r402_t0, _r402_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                var _r404_t0, _r404_t1;
                r404_currentGlyph.include(r313_WVertSides(r402_df, r402_top, r402_bodyType, r402_slabType, r402_midHClass));
                r404_currentGlyph.ejectTagged("strokeLeftBar");
                r404_currentGlyph.ejectTagged("serifRT");
                var r404_sideSw = r402_df.adviceStroke(3);
                r404_currentGlyph.include(r313_dispiro(r313_widths.rhs(r404_sideSw), r313_flat(r402_df.rightSB, r402_top - r313_O - r313_TailY - r313_HalfStroke, r313_heading(r313_Downward)), r313_curl(r402_df.rightSB, Math.min(0.8 * r402_top, r402_top - r313_O - r313_TailY - r313_HalfStroke - r313_TINY), r313_heading(r313_Downward)), r313_straight.down.end(r402_df.rightSB, 0, r313_widths.rhs.heading(r402_df.adviceStroke(4), r313_Downward))));
                r404_currentGlyph.include(r313_VerticalHook.r(r402_df.rightSB, r402_top - r313_O - r313_TailY - r313_HalfStroke, r313_TailX, -r313_TailY, r404_sideSw));
                return void 0;
            });
        };
        var r313_WRounded = function (r410_df, r410_top, r410_bodyType, r410_slabType, r410_midHClass) {
            var _r410_t0, _r410_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                var _r412_t0, _r412_t1;
                var r412_wMidHeight = r313_WMidHeight(r410_df, r410_top, r410_bodyType, r410_midHClass);
                var r412_wMidHeightExt = r313_WMidHeightExt(r412_wMidHeight, r410_top, r410_bodyType, r410_midHClass);
                r412_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                    var _r416_t0, _r416_t1;
                    r416_currentGlyph.include(r313_EarlessRoundedDoubleArchSmallMShape(r410_df, r410_top, 0, r410_top - r412_wMidHeightExt, 0));
                    r416_currentGlyph.include(r313_FlipAround(r410_df.width / 2, r410_top / 2));
                    return void 0;
                })));
                r412_currentGlyph.include(r313_WSerifs(r410_df, r410_top, r410_bodyType, r410_slabType));
                return void 0;
            });
        };
        var r313_WHookRightRounded = function (r420_df, r420_top, r420_bodyType, r420_slabType, r420_midHClass) {
            var _r420_t0, _r420_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r422_currentGlyph) {
                var _r422_t0, _r422_t1;
                var r422_wMidHeight = r313_WMidHeight(r420_df, r420_top, r420_bodyType, r420_midHClass);
                var r422_wMidHeightExt = r313_WMidHeightExt(r422_wMidHeight, r420_top, r420_bodyType, r420_midHClass);
                r422_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r426_currentGlyph) {
                    var _r426_t0, _r426_t1;
                    r426_currentGlyph.include(r313_EarlessRoundedDoubleArchSmallMShape(r420_df, r420_top, 0 + r313_O + r313_TailY + r313_HalfStroke, r420_top - r422_wMidHeightExt, 0));
                    r426_currentGlyph.include(r313_FlipAround(r420_df.width / 2, r420_top / 2));
                    return void 0;
                })));
                r422_currentGlyph.include(r313_WSerifs(r420_df, r420_top, r420_bodyType, r420_slabType));
                r422_currentGlyph.ejectTagged("serifRT");
                r422_currentGlyph.include(r313_VerticalHook.r(r420_df.rightSB, r420_top - r313_O - r313_TailY - r313_HalfStroke, r313_TailX, -r313_TailY, new r313_xn$NamedParameterPair$2Lrc9b("sw", r420_df.mvs)));
                return void 0;
            });
        };
        var r313_WCursiveImplImpl = function (r433_fHookRight, r433_df, r433_top, r433_bodyType, r433_slabType, r433_midHClass) {
            var _r433_t0, _r433_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                var r435____, _r435_t0, _r435_t1, _r435_t2;
                var r435_fine = r433_df.adviceStroke(3.25);
                var r435_mfine = r435_fine * r313_CThin;
                var r435_x0 = r1_mix(r433_df.leftSB, r433_df.rightSB, 0.1);
                var r435_y0 = r433_top - r313_O;
                var r435_y1 = r1_mix(0, r433_top, 0.8);
                var r435_x1 = r433_df.leftSB + 0 * r313_OX;
                var r435_y3 = r1_mix(r435_fine, r433_top, 0.375);
                var r435_y4 = r313_WMidHeight(r433_df, r433_top, r433_bodyType, r433_midHClass);
                var r435_rInY = 1 * r313_TightBendInnerRadius;
                r435_currentGlyph.include(r313_dispiro(r313_widths.lhs(r435_fine), r313_flat(r435_x1, r433_top, r313_heading(r313_Downward)), r313_curl(r435_x1, r435_fine + r435_rInY, r313_heading(r313_Downward)), r313_arcvh(16), r313_g4(Math.min(r1_mix(r435_x1 + r313_HSwToV(r435_fine), r433_df.middle - r313_HSwToV(0.5 * r435_fine), 0.5) - r313_HSwToV(r435_fine - r435_mfine), r435_x1 + r313_HSwToV(r435_fine) + r435_rInY), r313_O, r313_heading({
                    "x": r313_TanSlope + 0.5 * (r435_fine - r435_mfine) / r435_fine,
                    "y": 1
                })), r313_archv(16), r313_flat(r433_df.middle + r313_HSwToV(r435_mfine - r435_fine / 2), r435_y3, r313_widths.heading(r435_mfine, 0, r313_Upward)), r313_curl(r433_df.middle + r313_HSwToV(r435_mfine - r435_fine / 2), r435_y4, r313_heading(r313_Upward))));
                if (r433_fHookRight) {
                    r435_currentGlyph.include(r313_VerticalHook.r(r433_df.rightSB, r433_top - r313_O - r313_TailY - 0.5 * r435_fine, r313_TailX, -r313_TailY, r435_fine));
                    r435_currentGlyph.include(r313_dispiro(r313_widths.rhs(r435_fine), r313_flat(r433_df.width - r435_x1, r433_top - r313_O - r313_TailY - 0.5 * r435_fine, r313_heading(r313_Downward)), r313_curl(r433_df.width - r435_x1, r435_y3, r313_heading(r313_Downward)), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r435_fine), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r435_mfine)), r313_flat(r433_df.middle - r313_HSwToV(r435_mfine - r435_fine / 2), r435_y3, r313_widths.heading(0, r435_mfine, r313_Upward)), r313_curl(r433_df.middle - r313_HSwToV(r435_mfine - r435_fine / 2), r435_y4, r313_heading(r313_Upward))));
                } else r435_currentGlyph.include(r313_dispiro(r313_widths.rhs(r435_fine), r313_g4(r433_df.width - r435_x0, r435_y0), r313_g4(r433_df.width - r435_x1 - r313_OX, r433_top / 2), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r435_fine), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r435_mfine)), r313_flat(r433_df.middle - r313_HSwToV(r435_mfine - r435_fine / 2), r435_y3, r313_widths.heading(0, r435_mfine, r313_Upward)), r313_curl(r433_df.middle - r313_HSwToV(r435_mfine - r435_fine / 2), r435_y4, r313_heading(r313_Upward))));
                var r435_sf = r313_SerifFrame(r433_top, 0, r435_x1, r433_df.rightSB);
                r435_currentGlyph.include((_r435_t0 = r433_slabType, _r435_t0 === r313_xn$SERIFSCURSIVE$7Hrq ? r313_NeedSlab(r313_SLAB, r435_sf.lt.outer) : _r435_t0 === r313_xn$SERIFSMOTION$7Hrq ? r435_sf.lt.outer : (r435____ = _r435_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r446_currentGlyph) {
                    var _r446_t0, _r446_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r313_WCursiveImpl = function (r447_df, r447_top, r447_bodyType, r447_slabType, r447_midHClass) {
            var _r447_t0, _r447_t1;
            return r313_WCursiveImplImpl(false, r447_df, r447_top, r447_bodyType, r447_slabType, r447_midHClass);
        };
        var r313_WHookRightCursive = function (r448_df, r448_top, r448_bodyType, r448_slabType, r448_midHClass) {
            var _r448_t0, _r448_t1;
            return r313_WCursiveImplImpl(true, r448_df, r448_top, r448_bodyType, r448_slabType, r448_midHClass);
        };
        var r313_WConfig = r1_SuffixCfg.weave({
            "straight": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMSTRAIGHT$5sIl, r313_xn$MIDHOTHER$5sIl, r313_para.advanceScaleM, r313_para.advanceScaleM],
            "straightAlmostFlatTop": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMSTRAIGHT$5sIl, r313_xn$MIDHALMOSTTOP$5sIl7, r313_para.advanceScaleMM, r313_para.advanceScaleM],
            "straightFlatTop": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMSTRAIGHT$5sIl, r313_xn$MIDHTOP$5sIl, r313_para.advanceScaleMM, r313_para.advanceScaleM],
            "straightAsymmetric": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMASYMMETRIC$5sIl, r313_xn$MIDHTOP$5sIl, r313_para.advanceScaleM, r313_para.advanceScaleT],
            "straightDoubleV": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMDOUBLEV$5sIl7, r313_xn$MIDHTOP$5sIl, r313_para.advanceScaleM, r313_para.advanceScaleT],
            "straightVerticalSides": [r313_WVertSides, r313_WVSHookRightShape, r313_xn$FORMVERTICAL$5sIl, r313_xn$MIDHOTHER$5sIl, r313_para.advanceScaleM, r313_para.advanceScaleT],
            "straightVerticalSidesAlmostFlatTop": [r313_WVertSides, r313_WVSHookRightShape, r313_xn$FORMVERTICAL$5sIl, r313_xn$MIDHALMOSTTOP$5sIl7, r313_para.advanceScaleM, r313_para.advanceScaleT],
            "straightVerticalSidesFlatTop": [r313_WVertSides, r313_WVSHookRightShape, r313_xn$FORMVERTICAL$5sIl, r313_xn$MIDHTOP$5sIl, r313_para.advanceScaleM, r313_para.advanceScaleT],
            "roundedVerticalSides": [r313_WRounded, r313_WHookRightRounded, r313_xn$FORMCURLY$5sIl, r313_xn$MIDHOTHER$5sIl, r313_para.advanceScaleMM, r313_para.advanceScaleMM],
            "roundedVerticalSidesAlmostFlatTop": [r313_WRounded, r313_WHookRightRounded, r313_xn$FORMCURLY$5sIl, r313_xn$MIDHALMOSTTOP$5sIl7, r313_para.advanceScaleMM, r313_para.advanceScaleMM],
            "roundedVerticalSidesFlatTop": [r313_WRounded, r313_WHookRightRounded, r313_xn$FORMCURLY$5sIl, r313_xn$MIDHTOP$5sIl, r313_para.advanceScaleMM, r313_para.advanceScaleMM],
            "curly": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMCURLY$5sIl, r313_xn$MIDHOTHER$5sIl, r313_para.advanceScaleM, r313_para.advanceScaleM],
            "curlyAlmostFlatTop": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMCURLY$5sIl, r313_xn$MIDHALMOSTTOP$5sIl7, r313_para.advanceScaleMM, r313_para.advanceScaleM],
            "curlyFlatTop": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMCURLY$5sIl, r313_xn$MIDHTOP$5sIl, r313_para.advanceScaleMM, r313_para.advanceScaleM],
            "curlyAsymmetric": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMCURLYASYMMETRIC$5sIl6, r313_xn$MIDHTOP$5sIl, r313_para.advanceScaleM, r313_para.advanceScaleT],
            "cursive": [r313_WCursiveImpl, r313_WHookRightCursive, r313_xn$FORMCURSIVE$5sIl, r313_xn$MIDHOTHER$5sIl, r313_para.advanceScaleMM, r313_para.advanceScaleM],
            "cyrlOmega": [r313_WShapeImpl, r313_WHookRightShape, r313_xn$FORMCYRLOMEGA$5sIl5, r313_xn$MIDHOTHER$5sIl, r313_para.advanceScaleMM, r313_para.advanceScaleM]
        }, function (r449_body) {
            var r449___, _r449_t0, _r449_t1, _r449_t2;
            return r449_body === "cyrlOmega" ? {
                "": r313_xn$SERIFSCYRLOMEGA$7Hrq5
            } : {
                "serifless": r313_xn$SERIFSNONE$7Hrq,
                "motionSerifed": r313_xn$SERIFSMOTION$7Hrq,
                "serifed": (_r449_t0 = r449_body, _r449_t0 === "straightAsymmetric" ? r313_xn$SERIFSALLASYMMETRIC$7Hrq4 : _r449_t0 === "curlyAsymmetric" ? r313_xn$SERIFSALLASYMMETRIC$7Hrq4 : _r449_t0 === "straightDoubleV" ? r313_xn$SERIFSALLOUTER$7Hrq4 : _r449_t0 === "straightFlatTop" ? r313_xn$SERIFSALLOUTER$7Hrq4 : _r449_t0 === "straightVerticalSidesFlatTop" ? r313_xn$SERIFSALLOUTER$7Hrq4 : _r449_t0 === "roundedVerticalSidesFlatTop" ? r313_xn$SERIFSALLOUTER$7Hrq4 : _r449_t0 === "curlyFlatTop" ? r313_xn$SERIFSALLOUTER$7Hrq4 : _r449_t0 === "cursive" ? r313_xn$SERIFSMOTION$7Hrq : (r449___ = _r449_t0, r313_xn$SERIFSALL$7Hrq))
            };
        });
        var _r313_t12 = _r1_t2(r313_WConfig)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_implT = _r313_t14[1][0][0];
            r313_hookRightImplT = _r313_t14[1][0][1];
            r313_bodyType = _r313_t14[1][0][2];
            r313_midHClass = _r313_t14[1][0][3];
            r313_adwsUpper = _r313_t14[1][0][4];
            r313_adwsLower = _r313_t14[1][0][5];
            _r313_t14[1][0];
            r313_slabType = _r313_t14[1][1];
            _r313_t14[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("W." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
                    var _r457_t0, _r457_t1;
                    var r457_df = r457_currentGlyph.include(r313_DivFrame(r313_adwsUpper, 3));
                    r457_currentGlyph.include(r457_df.markSet.capital());
                    r457_currentGlyph.include(r313_implT(r457_df, r313_CAP, r313_bodyType, r313_slabType, r313_midHClass));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpW." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                    var _r463_t0, _r463_t1;
                    var r463_df = r463_currentGlyph.include(r313_DivFrame(r313_adwsUpper < r313_para.advanceScaleMM ? r313_para.advanceScaleT : r313_para.advanceScaleM, 3));
                    r463_currentGlyph.include(r463_df.markSet.e());
                    r463_currentGlyph.include(r313_implT(r463_df, r313_XH, r313_bodyType, r313_slabType, r313_midHClass));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("w." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
                    var _r469_t0, _r469_t1;
                    var r469_df = r469_currentGlyph.include(r313_DivFrame(r313_adwsLower, 3));
                    r469_currentGlyph.include(r469_df.markSet.e());
                    r469_currentGlyph.include(r313_implT(r469_df, r313_XH, r313_bodyType, r313_slabType, r313_midHClass));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ww." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r475_currentGlyph) {
                    var _r475_t0, _r475_t1;
                    var r475_df = r475_currentGlyph.include(r313_DivFrame(r313_adwsLower < r313_para.advanceScaleM ? r313_para.advanceScaleF : 1, 3));
                    r475_currentGlyph.include(r475_df.markSet.capital());
                    var r475_gap = r313_CAP * 0.05;
                    r475_currentGlyph.include(r313_implT(r475_df, r313_CAP / 2 - r475_gap / 2, r313_bodyType, r313_slabType, r313_midHClass));
                    r475_currentGlyph.include(r313_ApparentTranslate(0, r313_CAP / 2 + r475_gap));
                    r475_currentGlyph.include(r313_implT(r475_df, r313_CAP / 2 - r475_gap / 2, r313_bodyType, r313_slabType, r313_midHClass));
                    return void 0;
                }));
                if (r313_hookRightImplT) r313_xn$GlyphSaveSink$2Lrc4b.save("WHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
                    var _r483_t0, _r483_t1;
                    var r483_df = r483_currentGlyph.include(r313_DivFrame(r313_adwsUpper, 3));
                    r483_currentGlyph.include(r483_df.markSet.capital());
                    r483_currentGlyph.include(r313_hookRightImplT(r483_df, r313_CAP, r313_bodyType, r313_slabType, r313_midHClass));
                    return void 0;
                }));
                if (r313_hookRightImplT) r313_xn$GlyphSaveSink$2Lrc4b.save("wHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
                    var _r489_t0, _r489_t1;
                    var r489_df = r489_currentGlyph.include(r313_DivFrame(r313_adwsLower, 3));
                    r489_currentGlyph.include(r489_df.markSet.e());
                    r489_currentGlyph.include(r313_hookRightImplT(r489_df, r313_XH, r313_bodyType, r313_slabType, r313_midHClass));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("wBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r495_currentGlyph) {
                    var _r495_t0, _r495_t1;
                    var r495_df = r313_DivFrame(r313_adwsLower, 3);
                    r495_currentGlyph.include(r313_xn$referglyph$1aao("w." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r495_currentGlyph.include(r313_HOverlayBar(r1_mix(r495_df.leftSB, 0, 0.7), r1_mix(r495_df.rightSB, r495_df.width, 0.7), r313_XH / 2));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("currency/wonSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r500_currentGlyph) {
                    var _r500_t0, _r500_t1;
                    var r500_df = r313_DivFrame(r313_adwsUpper, 3);
                    r500_currentGlyph.include(r313_xn$referglyph$1aao("W." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r500_currentGlyph.include(r313_HOverlayBar(r1_mix(r500_df.leftSB, 0, 0.7), r1_mix(r500_df.rightSB, r500_df.width, 0.7), r1_mix(0, r313_CAP, 0.6)));
                    r500_currentGlyph.include(r313_HOverlayBar(r1_mix(r500_df.leftSB, 0, 0.7), r1_mix(r500_df.rightSB, r500_df.width, 0.7), r1_mix(0, r313_CAP, 0.35)));
                    return void 0;
                }));
            })();
        }
        var _r313_t15 = Object.entries(r313_NonCursiveYConfig)[Symbol.iterator]();
        var _r313_t16 = void 0;
        while (!(_r313_t16 = _r313_t15.next()).done) {
            _r313_t17 = _r313_t16.value;
            r313_suffix = _r313_t17[0];
            r313_straightBar = _r313_t17[1][0];
            r313_bottomShape = _r313_t17[1][1];
            r313_slabKind = _r313_t17[1][2];
            _r313_t17[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("VY." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                    var _r509_t0, _r509_t1;
                    var r509_df = r509_currentGlyph.include(r313_DivFrame(r313_adwsLower, 3));
                    r509_currentGlyph.include(r509_df.markSet.p());
                    r509_currentGlyph.include(r313_VYShape(r509_df, r313_CAP, r313_straightBar, r313_bottomShape, r313_slabKind));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("vy." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                    var _r515_t0, _r515_t1;
                    var r515_df = r515_currentGlyph.include(r313_DivFrame(r313_adwsLower, 3));
                    r515_currentGlyph.include(r515_df.markSet.p());
                    r515_currentGlyph.include(r313_VYShape(r515_df, r313_XH, r313_straightBar, r313_bottomShape, r313_slabKind));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("VY", 42848, new r313_xn$NamedParameterPair$2Lrc9b("follow", "y/nonCursive"));
        r313_xn$selectvariant$7Hrq("vy", 42849, new r313_xn$NamedParameterPair$2Lrc9b("follow", "y/nonCursive"));
        r313_xn$selectvariant$7Hrq("W", "W");
        r313_xn$linkreducedvariant$5sIl8("W/sansSerif", "W", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpW", 7457, new r313_xn$NamedParameterPair$2Lrc9b("follow", "W"));
        r313_xn$selectvariant$7Hrq("WHookRight", 11378);
        r313_xn$selectvariant$7Hrq("w", "w");
        r313_xn$linkreducedvariant$5sIl8("w/sansSerif", "w", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("wBar", 122687, new r313_xn$NamedParameterPair$2Lrc9b("follow", "w"));
        r313_xn$selectvariant$7Hrq("ww", 684, new r313_xn$NamedParameterPair$2Lrc9b("follow", "w"));
        r313_xn$selectvariant$7Hrq("wHookRight", 11379);
        r313_xn$selectvariant$7Hrq("currency/wonSign", 8361, new r313_xn$NamedParameterPair$2Lrc9b("follow", "W"));
        r313_CreateTurnedLetter("turnw", 653, "w", r313_HalfAdvance, r313_XH / 2);
        r313_alias("cyrl/We", 1308, "W");
        r313_alias("cyrl/we", 1309, "w");
        r313_alias("cyrl/Omega", 1120, "W.cyrlOmega");
        r313_alias("cyrl/omega", 1121, "w.cyrlOmega");
        var _r313_t18 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t18.BBS;
        var r313_BBD = _r313_t18.BBD;
        var _r313_t19 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-V"].resolve();
        var r313_BBVShape = _r313_t19.BBVShape;
        var r313_BBVOuterMaskShape = _r313_t19.BBVOuterMaskShape;
        var r313_BBWShape = function (r527_top) {
            var _r527_t0, _r527_t1;
            var r527_offset = r313_BBD * 2;
            var r527_ksW = r313_AdviceStroke2(8, 2, r527_top) / r313_BBS;
            var r527_kdW = Math.min(r527_ksW, 0.75);
            return r313_union(r313_difference(r313_BBVShape(r313_SB, r313_RightSB - r527_offset, r527_kdW, r527_ksW, r527_top), r313_BBVOuterMaskShape(r313_SB + r527_offset, r313_RightSB, r527_kdW, r527_ksW, r527_top)), r313_BBVShape(r313_SB + r527_offset, r313_RightSB, r527_kdW, r527_ksW, r527_top));
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/W", 120142, new r313_xn$Capture$2Lrc8.GlyphProc(function (r530_currentGlyph) {
            var _r530_t0, _r530_t1;
            r530_currentGlyph.include(r313_MarkSet.capital(), true, true);
            r530_currentGlyph.include(r313_BBWShape(r313_CAP));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/w", 120168, new r313_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
            var _r535_t0, _r535_t1;
            r535_currentGlyph.include(r313_MarkSet.e(), true, true);
            r535_currentGlyph.include(r313_BBWShape(r313_XH));
            return void 0;
        }));
    });
    return void 0;
});


