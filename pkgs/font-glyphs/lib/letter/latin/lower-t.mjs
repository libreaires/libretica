"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r494_t) {
    var r494_n, r494_i, r494_a, _r494_t3, _r494_t4, _r494_t5, _r494_t6, _r494_t7, _r494_t8, _r494_t9, _r494_t10, _r494_t11, _r494_t12, _r494_t13, _r494_t14, _r494_t15, _r494_t16, _r494_t17, _r494_t18, _r494_t19, _r494_t20, _r494_t21, _r494_t22, _r494_t23, _r494_t24, _r494_t25, _r494_t26;
    var _r494_t0 = function () {
        _r494_t7 = function (_r494_t8) {
            _r494_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r494_t8
            };
        };
        _r494_t9 = r494_t instanceof Array;
        if (_r494_t9) {
            _r494_t10 = r494_n = r494_t.length;
            _r494_t11 = r494_i = 0;
            _r494_t12 = function (_r494_t14) {
                return _r494_t7(_r494_t14);
            };
            _r494_t13 = function (_r494_t15) {
                _r494_t16 = r494_i < r494_n;
                if (_r494_t16) {
                    _r494_t0 = function (_r494_t17) {
                        return _r494_t13(r494_i = r494_i + 1);
                    };
                    return {
                        "value": [r494_i, r494_t[r494_i]],
                        "done": false
                    };
                } else return _r494_t12(_r494_t15);
            };
            return _r494_t13();
        } else {
            _r494_t18 = r494_a = Object.keys(r494_t);
            _r494_t19 = r494_n = r494_a.length;
            _r494_t20 = r494_i = 0;
            _r494_t21 = function (_r494_t23) {
                return _r494_t7(_r494_t23);
            };
            _r494_t22 = function (_r494_t24) {
                _r494_t25 = r494_i < r494_n;
                if (_r494_t25) {
                    _r494_t0 = function (_r494_t26) {
                        return _r494_t22(r494_i = r494_i + 1);
                    };
                    return {
                        "value": [r494_a[r494_i], r494_t[r494_a[r494_i]]],
                        "done": false
                    };
                } else return _r494_t21(_r494_t24);
            };
            return _r494_t22();
        }
    };
    var _r494_t1 = function (x) {
        try {
            return _r494_t0(x);
        } catch (ex) {
            return _r494_t2(ex);
        }
    };
    var _r494_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r494_t3 = this; else {
        _r494_t4 = function () {
            void 0;
        };
        _r494_t4.prototype = _r1_t10.prototype;
        _r494_t3 = new _r494_t4();
    }
    _r494_t3[Symbol.iterator] = function () {
        return _r494_t3;
    };
    _r494_t3.next = _r494_t1;
    _r494_t3.throw = function (x) {
        return _r494_t2(x);
    };
    return _r494_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-T", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_df, r313_Style, r313_sym, r313_top, r313_doBS, _r313_t16, _r313_t19, _r313_t22, _r313_t25, _r313_t27, _r313_t28, _r313_t29, _r313_tag30, _r313_t31, _r313_tag32, _r313_t33, _r313_tag34, _r313_t35, _r313_tag36, _r313_t37, _r313_tag38, _r313_t39, _r313_tag40, _r313_t41, _r313_tag42, _r313_t43, _r313_tag44, _r313_t45, _r313_tag46, _r313_t47, _r313_tag48;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_SHook = _r313_t1.SHook;
        var r313_HookX = _r313_t1.HookX;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_TBalance = _r313_t1.TBalance;
        var r313_TBalance2 = _r313_t1.TBalance2;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
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
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_archv = _r313_t2.archv;
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
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_HBar = _r313_t5.HBar;
        var r313_HCrossBar = _r313_t5.HCrossBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var r313_CreateCommaCaronComposition = _r313_t8.CreateCommaCaronComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateDependentComposite = _r313_t9.CreateDependentComposite;
        var r313_CreateTurnedLetter = _r313_t9.CreateTurnedLetter;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t10.CurlyTail;
        var r313_FlatHookDepth = _r313_t10.FlatHookDepth;
        var r313_ConnectedCedilla = _r313_t10.ConnectedCedilla;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_DiagTail = _r313_t11.DiagTail;
        var r313_TopHook = _r313_t11.TopHook;
        var r313_PalatalHook = _r313_t11.PalatalHook;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifedArcEnd = _r313_t12.SerifedArcEnd;
        var r313_InwardSlabArcEnd = _r313_t12.InwardSlabArcEnd;
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-S"].resolve();
        var r313_SAutoSlabEnd = _r313_t13.SAutoSlabEnd;
        var r313_AdviceSArchDepth = _r313_t13.AdviceSArchDepth;
        var r313_xn$SYMLEFT$9Jrj = 0;
        var r313_xn$SYMBALANCED$9Jrj = 1;
        var r313_xn$SYMPRLEFT$9Jrj3 = 2;
        var r313_xn$SYMPRBALANCED$9Jrj3 = 3;
        var r313_dfN = r313_DivFrame(1);
        var r313_dfF = r313_DivFrame(r313_para.advanceScaleF, 1, 0.75);
        var r313_xSmallTBarLeftT = function (r323_df) {
            var _r323_t0, _r323_t1;
            return r323_df.middle - r323_df.adws * (r323_df.adws * r313_TBalance) - r313_HSwToV(r313_HalfStroke);
        };
        var r313_xSmallTCrossRefT = function (r324_df) {
            var _r324_t0, _r324_t1;
            return r313_xSmallTBarLeftT(r324_df) + r324_df.adws * r313_TBalance2 + r313_HSwToV(r313_HalfStroke);
        };
        var r313_ySmallTBarPos = r313_XH;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r326_t0, _r326_t1;
            return {
                "yShortNeck1": r313_yShortNeck1,
                "yShortNeck2": r313_yShortNeck2
            };
        });
        var r313_yShortNeck1 = r1_clamp(r1_mix(r313_XH, r313_Ascender, 0.5), r313_CAP, r1_mix(r313_XH, r313_Ascender, 0.875) - r313_Stroke * 0.125);
        var r313_yShortNeck2 = r1_clamp(r1_mix(r313_XH, r313_Ascender, 0.5), r313_CAP, r1_mix(r313_XH, r313_Ascender, 0.75) - r313_Stroke * 0.125);
        var r313_BentHook = (function () {
            var r329_BarLeftPos, r329_Dims, r329_HookShapeT, r329_CrossBar, r329_Body, r329_Retroflex;
            var r329_exports = {};
            r329_exports.BarLeftPos = r329_BarLeftPos = function (r337_df, r337_sym) {
                var r337___, _r337_t1, _r337_t2;
                var _r337_t0 = r337_sym;
                return _r337_t0 === r313_xn$SYMLEFT$9Jrj ? r1_mix(r337_df.leftSB, r313_xSmallTBarLeftT(r337_df), 0.5) : _r337_t0 === r313_xn$SYMBALANCED$9Jrj ? r313_xSmallTBarLeftT(r337_df) : (r337___ = _r337_t0, r337_df.middle - r313_HSwToV(r313_HalfStroke));
            };
            var r329_xCrossBarPos = function (r338_df, r338_sym) {
                var r338___, _r338_t1, _r338_t2;
                var _r338_t0 = r338_sym;
                return _r338_t0 === r313_xn$SYMLEFT$9Jrj || _r338_t0 === r313_xn$SYMPRLEFT$9Jrj3 ? [r329_BarLeftPos(r338_df, r338_sym) + r313_TanSlope * r313_Stroke, r313_xSmallTCrossRefT(r338_df) + r313_LongJut * Math.sqrt(r338_df.adws)] : (r338___ = _r338_t0, [r313_xSmallTCrossRefT(r338_df) - r313_LongJut * Math.sqrt(r338_df.adws), r313_xSmallTCrossRefT(r338_df) + r313_LongJut * Math.sqrt(r338_df.adws)]);
            };
            var r329_xHookTerminal = function (r339_df, r339_sym) {
                var r339___, _r339_t1, _r339_t2;
                var _r339_t0 = r339_sym;
                return _r339_t0 === r313_xn$SYMLEFT$9Jrj ? r339_df.rightSB : (r339___ = _r339_t0, r329_BarLeftPos(r339_df, r339_sym) + Math.max((r339_df.rightSB - r339_df.leftSB) * 0.75 + r313_HSwToV(r313_QuarterStroke), r313_HSwToV(2.25 * r313_Stroke)));
            };
            r329_exports.Dims = r329_Dims = function (r341_df, r341_sym) {
                var _r341_t0, _r341_t1;
                var r341_xLeft = r329_BarLeftPos(r341_df, r341_sym);
                var r341_xHook = r329_xHookTerminal(r341_df, r341_sym);
                return {
                    "xLeft": r341_xLeft,
                    "xHook": r341_xHook,
                    "yHook": r313_Hook,
                    "ada": r1_clamp(r313_Hook, 1.2 * (r313_Arch["adjust-x"].top(r1_mix(r341_xLeft, r341_xHook, 0.5)) - r341_xLeft), r313_ArchDepthA),
                    "adb": r1_clamp(r313_Hook, 1.2 * (r313_Arch["adjust-x"].bot(r1_mix(r341_xLeft, r341_xHook, 0.5)) - r341_xLeft), r313_ArchDepthB)
                };
            };
            r329_exports.HookShapeT = r329_HookShapeT = function (r343_sink, r343_df, r343_sym, r343_offset, r343_top, r343_bot, r343_sw) {
                var _r343_t1, _r343_t2;
                var _r343_t0 = r329_Dims(r343_df, r343_sym);
                var r343_xLeft = _r343_t0.xLeft;
                var r343_xHook = _r343_t0.xHook;
                var r343_yHook = _r343_t0.yHook;
                var r343_adb = _r343_t0.adb;
                return r343_sink(r313_widths.lhs(r343_sw), (r343_sink === r313_xn$spirooutline$1aao ? r313_corner : r313_flat)(r343_offset + r343_xLeft, r343_top, r313_heading(r313_Downward)), r313_curl(r343_offset + r343_xLeft, r343_bot + r343_adb), r313_HookEnd(r343_bot + r343_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r343_sw)), r313_g4(r343_xHook - r343_offset, r343_bot + r343_yHook), r343_sink === r313_xn$spirooutline$1aao ? [r313_corner(r343_xHook - r343_offset, r343_top)] : []);
            };
            r329_exports.CrossBar = r329_CrossBar = function (r346_df, r346_sym) {
                var _r346_t1, _r346_t2;
                var _r346_t0 = r329_xCrossBarPos(r346_df, r346_sym);
                var r346_xcl = _r346_t0[0];
                var r346_xcr = _r346_t0[1];
                return r313_HCrossBar.top(r346_xcl, r346_xcr, r313_ySmallTBarPos);
            };
            r329_exports.Body = r329_Body = function (r348_df, r348_sym, r348_top, r348_bot) {
                var _r348_t0, _r348_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                    var _r350_t0, _r350_t1;
                    r350_currentGlyph.include(r329_CrossBar(r348_df, r348_sym));
                    var r350_g = r350_currentGlyph.include(r329_HookShapeT(r313_dispiro, r348_df, r348_sym, 0, r348_top, r348_bot, r313_Stroke));
                    var r350_gEnd = r350_g.knots[r350_g.knots.length - 1];
                    var r350_xLeft = r329_BarLeftPos(r348_df, r348_sym);
                    r350_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r350_xLeft));
                    r350_currentGlyph.include(r313_LeaningAnchor.Below.Hook(r350_xLeft, r350_gEnd.x));
                    r350_currentGlyph.setBaseAnchor("hooktopAttach", r350_xLeft + r313_HSwToV(r313_HalfStroke), r348_top);
                    r350_currentGlyph.setBaseAnchor("bottomRight", r350_gEnd.x, r350_gEnd.y);
                    r350_currentGlyph.setBaseAnchor("overlay", r350_g.knots[0].x + r313_HSwToV(0.625 * r313_Stroke), r1_mix(0, r313_XH, 0.58));
                    return void 0;
                });
            };
            r329_exports.Retroflex = r329_Retroflex = function (r359_df, r359_sym, r359_top, r359_bot) {
                var _r359_t0, _r359_t1;
                return r313_FlatHook.Retroflex(r359_df, r359_sym, r359_top, r359_bot);
            };
            return r329_exports;
        })();
        var r313_NarrowBentHook = (function () {
            var r362_BarLeftPos, r362_HookShapeT, r362_CrossBar, r362_Body, r362_Retroflex;
            var r362_exports = {};
            r362_exports.BarLeftPos = r362_BarLeftPos = function (r370_df, r370_sym) {
                var _r370_t0, _r370_t1;
                return r313_BentHook.BarLeftPos(r370_df, r370_sym);
            };
            var r362_xCrossBarPos = function (r371_df, r371_sym) {
                var r371___, _r371_t0, _r371_t1, _r371_t2;
                var r371_pAdaptive = r313_para.advanceScaleF < 1 ? (1 - r371_df.adws) / (1 - r313_para.advanceScaleF) : 0;
                var r371_narrowScaleLeft = r1_mix(0.82, 0.87, r371_pAdaptive);
                var r371_narrowScaleRight = r1_mix(0.75, 0.875, r371_pAdaptive);
                return (_r371_t0 = r371_sym, _r371_t0 === r313_xn$SYMLEFT$9Jrj || _r371_t0 === r313_xn$SYMPRLEFT$9Jrj3 ? [r362_BarLeftPos(r371_df, r371_sym) + r313_TanSlope * r313_Stroke, r313_xSmallTCrossRefT(r371_df) + r313_LongJut * r371_narrowScaleRight * Math.sqrt(r371_df.adws)] : (r371___ = _r371_t0, [r313_xSmallTCrossRefT(r371_df) - r313_LongJut * r371_narrowScaleLeft * Math.sqrt(r371_df.adws), r313_xSmallTCrossRefT(r371_df) + r313_LongJut * r371_narrowScaleRight * Math.sqrt(r371_df.adws)]));
            };
            var r362_xHookTerminal = function (r372_df, r372_sym) {
                var r372___, _r372_t0, _r372_t1, _r372_t2;
                var r372_pAdaptive = r313_para.advanceScaleF < 1 ? (1 - r372_df.adws) / (1 - r313_para.advanceScaleF) : 0;
                return (_r372_t0 = r372_sym, _r372_t0 === r313_xn$SYMLEFT$9Jrj ? r1_mix(r362_BarLeftPos(r372_df, r372_sym), r372_df.rightSB, r1_mix(0.75, 1, r372_pAdaptive)) : (r372___ = _r372_t0, r362_BarLeftPos(r372_df, r372_sym) + Math.max((r372_df.rightSB - r372_df.leftSB) * r1_mix(0.55, 0.8, r372_pAdaptive) + r313_HSwToV(r313_QuarterStroke), r313_HSwToV(2.25 * r313_Stroke))));
            };
            r362_exports.HookShapeT = r362_HookShapeT = function (r374_sink, r374_df, r374_sym, r374_offset, r374_top, r374_bot, r374_sw) {
                var _r374_t0, _r374_t1;
                var r374_xLeft = r362_BarLeftPos(r374_df, r374_sym);
                var r374_xHook = r362_xHookTerminal(r374_df, r374_sym);
                var r374_xTurn = r313_Arch["adjust-x"].bot(r1_mix(r374_xLeft, r374_xHook, 0.5));
                var r374_adb = r1_clamp(r313_Hook, (r374_xTurn - r374_xLeft) * 1.2, r313_ArchDepthB);
                var r374_pAdaptive = r313_para.advanceScaleF < 1 ? (1 - r374_df.adws) / (1 - r313_para.advanceScaleF) : 0;
                var r374_swTerminal = r1_mix(r374_sw, r374_df.adviceStroke(2.75), r1_mix(0.35, 0.1, r374_pAdaptive));
                return r374_sink(r313_widths.lhs(r374_sw), (r374_sink === r313_xn$spirooutline$1aao ? r313_corner : r313_flat)(r374_offset + r374_xLeft, r374_top, r313_heading(r313_Downward)), r313_curl(r374_offset + r374_xLeft, r374_bot + r374_adb), r313_HookEnd(r374_bot + r374_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r374_sw), new r313_xn$NamedParameterPair$2Lrc9b("swTerminal", r374_swTerminal)), r313_g4(r374_xHook - r374_offset, r374_bot + r313_Hook), r374_sink === r313_xn$spirooutline$1aao ? [r313_corner(r374_xHook - r374_offset, r374_top)] : []);
            };
            r362_exports.CrossBar = r362_CrossBar = function (r378_df, r378_sym) {
                var _r378_t1, _r378_t2;
                var _r378_t0 = r362_xCrossBarPos(r378_df, r378_sym);
                var r378_xcl = _r378_t0[0];
                var r378_xcr = _r378_t0[1];
                return r313_HCrossBar.top(r378_xcl, r378_xcr, r313_ySmallTBarPos);
            };
            r362_exports.Body = r362_Body = function (r380_df, r380_sym, r380_top, r380_bot) {
                var _r380_t0, _r380_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                    var _r382_t0, _r382_t1;
                    r382_currentGlyph.include(r362_CrossBar(r380_df, r380_sym));
                    var r382_g = r382_currentGlyph.include(r362_HookShapeT(r313_dispiro, r380_df, r380_sym, 0, r380_top, r380_bot, r313_Stroke));
                    var r382_gEnd = r382_g.knots[r382_g.knots.length - 1];
                    var r382_xLeft = r362_BarLeftPos(r380_df, r380_sym);
                    r382_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r382_xLeft));
                    r382_currentGlyph.include(r313_LeaningAnchor.Below.Hook(r382_xLeft, r382_gEnd.x));
                    r382_currentGlyph.setBaseAnchor("hooktopAttach", r382_xLeft + r313_HSwToV(r313_HalfStroke), r380_top);
                    r382_currentGlyph.setBaseAnchor("bottomRight", r382_gEnd.x, r382_gEnd.y);
                    r382_currentGlyph.setBaseAnchor("overlay", r382_g.knots[0].x + r313_HSwToV(0.625 * r313_Stroke), r1_mix(0, r313_XH, 0.58));
                    return void 0;
                });
            };
            r362_exports.Retroflex = r362_Retroflex = function (r391_df, r391_sym, r391_top, r391_bot) {
                var _r391_t0, _r391_t1;
                return r313_FlatHook.Retroflex(r391_df, r391_sym, r391_top, r391_bot);
            };
            return r362_exports;
        })();
        var r313_DiagonalTailed = (function () {
            var r394_BarLeftPos, r394_Body, r394_Retroflex;
            var r394_exports = {};
            var r394_HookShape = function (r401_df, r401_sym, r401_top, r401_bot, r401_sw) {
                var _r401_t0, _r401_t1;
                var r401_xMid = r394_BarLeftPos(r401_df, r401_sym) + r313_HSwToV(r313_HalfStroke);
                var r401_hookDepth = (r401_sym === r313_xn$SYMLEFT$9Jrj ? 1.375 : 1) * r313_DiagTail.StdDepth(r313_DivFrame(Math.sqrt(r401_df.adws)), r401_sw) - r313_HSwToV(r313_HalfStroke);
                return r313_dispiro(r313_flat(r401_xMid, r401_top, r313_widths.center.heading(r401_sw, r313_Downward)), r313_DiagTail.R(r401_xMid, r401_bot, r401_hookDepth, r401_sw));
            };
            r394_exports.BarLeftPos = r394_BarLeftPos = r313_BentHook.BarLeftPos;
            r394_exports.Body = r394_Body = function (r404_df, r404_sym, r404_top, r404_bot) {
                var _r404_t0, _r404_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                    var _r406_t0, _r406_t1;
                    r406_currentGlyph.include(r313_BentHook.CrossBar(r404_df, r404_sym));
                    var r406_g = r406_currentGlyph.include(r394_HookShape(r404_df, r404_sym, r404_top, 0, r313_Stroke));
                    var r406_gEnd = r406_g.rhsKnots[r406_g.rhsKnots.length - 1];
                    r406_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r394_BarLeftPos(r404_df, r404_sym)));
                    r406_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r394_BarLeftPos(r404_df, r404_sym), 2 * r313_Stroke));
                    r406_currentGlyph.setBaseAnchor("hooktopAttach", r394_BarLeftPos(r404_df, r404_sym) + r313_HSwToV(r313_HalfStroke), r404_top);
                    r406_currentGlyph.setBaseAnchor("bottomRight", r406_gEnd.x, r406_gEnd.y);
                    r406_currentGlyph.setBaseAnchor("overlay", r406_g.knots[0].x + r313_HSwToV(0.125 * r313_Stroke), r1_mix(0, r313_XH, 0.58));
                    return void 0;
                });
            };
            r394_exports.Retroflex = r394_Retroflex = function (r415_df, r415_sym, r415_top, r415_bot) {
                var _r415_t0, _r415_t1;
                return r313_FlatHook.Retroflex(r415_df, r415_sym, r415_top, r415_bot);
            };
            return r394_exports;
        })();
        var r313_FlatHook = (function () {
            var r418_xCrossBarPos, r418_BarLeftPos, r418_Body, r418_Retroflex, r418_CrossRTBody;
            var r418_exports = {};
            r418_exports.xCrossBarPos = r418_xCrossBarPos = function (r426_df, r426_sym) {
                var r426___, _r426_t1, _r426_t2;
                var _r426_t0 = r426_sym;
                return _r426_t0 === r313_xn$SYMLEFT$9Jrj || _r426_t0 === r313_xn$SYMPRLEFT$9Jrj3 ? [r418_BarLeftPos(r426_df, r426_sym) + r313_TanSlope * r313_Stroke, r1_mix(r426_df.width, r426_df.rightSB, r1_mix(1, r426_df.adws, 2))] : (r426___ = _r426_t0, [r1_mix(0, r1_mix(0, r426_df.leftSB, 0.6), r1_mix(1, r426_df.adws, 2)), r1_mix(r426_df.width, r426_df.rightSB, r1_mix(1, r426_df.adws, 2))]);
            };
            var r418_NORMAL = 0;
            var r418_RETROFLEX = 1;
            var r418_PR = 2;
            r418_exports.BarLeftPos = r418_BarLeftPos = function (r428_df, r428_sym) {
                var r428___, _r428_t1, _r428_t2;
                var _r428_t0 = r428_sym;
                return _r428_t0 === r313_xn$SYMLEFT$9Jrj ? r1_mix(r428_df.leftSB, r313_xSmallTBarLeftT(r428_df), 0.5) : _r428_t0 === r313_xn$SYMBALANCED$9Jrj ? r313_xSmallTBarLeftT(r428_df) : (r428___ = _r428_t0, r428_df.middle - r313_HSwToV(r313_HalfStroke));
            };
            r418_exports.Body = r418_Body = function (r430_df, r430_sym, r430_top, r430_bot) {
                var _r430_t0, _r430_t1;
                return r418_Impl(r418_NORMAL, r430_df, r430_sym, r430_top, r430_bot, 0);
            };
            r418_exports.Retroflex = r418_Retroflex = function (r432_df, r432_sym, r432_top, r432_bot) {
                var _r432_t0, _r432_t1;
                return r418_Impl(r418_RETROFLEX, r432_df, r432_sym, r432_top, r432_bot, 0);
            };
            r418_exports.CrossRTBody = r418_CrossRTBody = function (r434_df, r434_sym, r434_top, r434_bot) {
                var _r434_t0, _r434_t1;
                return r418_Impl(r418_RETROFLEX, r434_df, r434_sym, r434_top, r434_bot, 0);
            };
            var r418_Impl = function (r435_shape, r435_df, r435_sym, r435_top, r435_bot, r435_ext) {
                var _r435_t0, _r435_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                    var r437___, _r437_t1, _r437_t2, _r437_t3;
                    var r437_xBarLeft = r418_BarLeftPos(r435_df, r435_sym);
                    var _r437_t0 = r418_xCrossBarPos(r435_df, r435_sym);
                    var r437_xCrossLeft = _r437_t0[0];
                    var r437_xCrossRight = _r437_t0[1];
                    var r437_hd = r313_FlatHookDepth(r435_df);
                    var r437_xTailEnd = (_r437_t1 = r435_shape, _r437_t1 === r418_RETROFLEX ? r437_xBarLeft + r313_HookX + r313_HSwToV(r313_HalfStroke) : (r437___ = _r437_t1, r437_xCrossRight));
                    r437_currentGlyph.include(r313_union(r313_HCrossBar.top(r437_xCrossLeft, r437_xCrossRight + r435_ext, r313_ySmallTBarPos), r313_dispiro(r313_widths.rhs(), r435_shape === r418_RETROFLEX ? r313_straight.left.start(r437_xTailEnd, r435_bot) : [r313_flat(r437_xCrossRight, r435_bot), r313_curl(Math.min(r437_xBarLeft + r437_hd.x, r437_xCrossRight - 1), r435_bot)], r313_archv.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r437_xBarLeft, r435_shape === r418_RETROFLEX ? r435_bot + r313_Hook + r313_HalfStroke : r437_hd.y), r313_curl(r437_xBarLeft, r435_top, r313_heading(r313_Upward)))));
                    r437_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r437_xBarLeft));
                    r437_currentGlyph.include(r313_LeaningAnchor.Below.Hook(r437_xBarLeft, r437_xCrossRight));
                    r437_currentGlyph.setBaseAnchor("hooktopAttach", r437_xBarLeft + r313_HSwToV(r313_HalfStroke), r435_top);
                    r437_currentGlyph.setBaseAnchor("topRight", r437_xCrossRight, r313_Ascender);
                    r437_currentGlyph.setBaseAnchor("overlay", r437_xBarLeft + r313_HSwToV(0.625 * r313_Stroke), r1_mix(0, r313_XH, 0.58));
                    r437_currentGlyph.setBaseAnchor("bottomRight", r437_xTailEnd, r435_bot);
                    r437_currentGlyph.setBaseAnchor("palatalHookAttach", r437_xTailEnd, r435_bot + r313_Stroke);
                    return void 0;
                });
            };
            return r418_exports;
        })();
        var r313_UprightTailed = (function () {
            var r448_BarLeftPos, r448_Body;
            var r448_exports = {};
            r448_exports.BarLeftPos = r448_BarLeftPos = r313_FlatHook.BarLeftPos;
            r448_exports.Body = r448_Body = function (r457_df, r457_sym, r457_top, r457_bot) {
                var _r457_t0, _r457_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
                    var _r459_t1, _r459_t2;
                    var _r459_t0 = r313_FlatHook.xCrossBarPos(r457_df, r457_sym);
                    var r459_xCrossLeft = _r459_t0[0];
                    var r459_xCrossRight = _r459_t0[1];
                    var r459_xBarLeft = r448_BarLeftPos(r457_df, r457_sym);
                    r459_currentGlyph.include(r313_union(r313_HCrossBar.top(r459_xCrossLeft, r459_xCrossRight, r313_ySmallTBarPos), r313_dispiro(r313_widths.rhs(), r313_flat(r459_xCrossRight, r457_bot), r313_curl(r459_xCrossRight, r457_top, r313_heading(r313_Upward)), r313_flat(r459_xBarLeft, r457_top), r313_curl(r459_xBarLeft, r457_bot, r313_heading(r313_Downward)))));
                    return void 0;
                });
            };
            return r448_exports;
        })();
        var r313_Hookless = (function () {
            var r463_BarLeftPos, r463_Body, r463_Retroflex, r463_PLBody;
            var r463_exports = {};
            r463_exports.BarLeftPos = r463_BarLeftPos = function (r471_df, r471_sym) {
                var r471___, _r471_t1, _r471_t2;
                var _r471_t0 = r471_sym;
                return _r471_t0 === r313_xn$SYMLEFT$9Jrj ? r1_mix(r471_df.leftSB, r313_xSmallTBarLeftT(r471_df), 0.5) : (r471___ = _r471_t0, r471_df.middle - r313_HSwToV(r313_HalfStroke));
            };
            var r463_xCrossBarPos = function (r472_df, r472_sym) {
                var r472___, _r472_t1, _r472_t2;
                var _r472_t0 = r472_sym;
                return _r472_t0 === r313_xn$SYMLEFT$9Jrj || _r472_t0 === r313_xn$SYMPRLEFT$9Jrj3 ? [r463_BarLeftPos(r472_df, r472_sym) + r313_TanSlope * r313_Stroke, r472_df.middle + r313_LongJut * Math.sqrt(r472_df.adws)] : (r472___ = _r472_t0, [r472_df.middle - r313_LongJut * Math.sqrt(r472_df.adws), r472_df.middle + r313_LongJut * Math.sqrt(r472_df.adws)]);
            };
            r463_exports.Body = r463_Body = function (r474_df, r474_sym, r474_top, r474_bot) {
                var _r474_t0, _r474_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                    var _r476_t1, _r476_t2;
                    var r476_xLeft = r463_BarLeftPos(r474_df, r474_sym);
                    var _r476_t0 = r463_xCrossBarPos(r474_df, r474_sym);
                    var r476_xcl = _r476_t0[0];
                    var r476_xcr = _r476_t0[1];
                    var r476_xEnd = r476_xLeft + r313_HSwToV(1.75 * r313_Stroke);
                    r476_currentGlyph.include(r313_VBar.l(r476_xLeft, 0, r474_top));
                    r476_currentGlyph.include(r313_HCrossBar.top(r476_xcl, r476_xcr, r313_ySmallTBarPos));
                    r476_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r476_xLeft));
                    r476_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r476_xLeft));
                    r476_currentGlyph.setBaseAnchor("overlay", r476_xLeft + r313_HSwToV(r313_HalfStroke), r1_mix(0, r313_XH, 0.58));
                    r476_currentGlyph.setBaseAnchor("hooktopAttach", r476_xLeft + r313_HSwToV(r313_HalfStroke), r474_top);
                    r476_currentGlyph.setBaseAnchor("bottomRight", r476_xEnd, r474_bot + r313_Stroke);
                    r476_currentGlyph.setBaseAnchor("palatalHookAttach", r476_xEnd, r474_bot + r313_Stroke);
                    return void 0;
                });
            };
            r463_exports.Retroflex = r463_Retroflex = function (r486_df, r486_sym, r486_top, r486_bot) {
                var _r486_t0, _r486_t1;
                return r313_FlatHook.CrossRTBody(r486_df, r486_sym, r486_top, r486_bot);
            };
            r463_exports.PLBody = r463_PLBody = function (r488_df, r488_sym, r488_top, r488_bot) {
                var _r488_t0, _r488_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r490_currentGlyph) {
                    var _r490_t0, _r490_t1;
                    var r490_xLeft = r463_BarLeftPos(r488_df, r488_sym);
                    r490_currentGlyph.include(r463_Body(r488_df, r488_sym, r488_top, r488_bot));
                    r490_currentGlyph.include(r313_HBar.b(r490_xLeft, r313_RightSB, 0));
                    return void 0;
                });
            };
            return r463_exports;
        })();
        var r313_SmallTConfig = r1_SuffixCfg.weave({
            "bentHook": [r313_dfN, r313_BentHook],
            "narrowBentHook": [r313_dfF, r313_NarrowBentHook],
            "diagonalTailed": [r313_dfF, r313_DiagonalTailed],
            "flatHook": [r313_dfF, r313_FlatHook],
            "hookless": [r313_dfF, r313_Hookless]
        }, {
            "": r313_xn$SYMBALANCED$9Jrj,
            "asymmetric": r313_xn$SYMLEFT$9Jrj
        }, {
            "": r313_Ascender,
            "shortNeck": r313_yShortNeck1,
            "shortNeck2": r313_yShortNeck2
        });
        var _r313_t14 = _r1_t2(r313_SmallTConfig)[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_df = _r313_t16[1][0][0];
            r313_Style = _r313_t16[1][0][1];
            _r313_t16[1][0];
            r313_sym = _r313_t16[1][1];
            r313_top = _r313_t16[1][2];
            _r313_t16[1];
            (function () {
                var r497_fShortNeck = r313_top < r313_Ascender;
                r313_xn$GlyphSaveSink$2Lrc4b.save("t." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r500_currentGlyph) {
                    var _r500_t0, _r500_t1;
                    r500_currentGlyph.setWidth(r313_df.width);
                    r500_currentGlyph.include(r313_df.markSet.b());
                    r500_currentGlyph.include(r313_Style.Body(r313_df, r313_sym, r313_top, 0));
                    r500_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                    r500_currentGlyph.copyBaseAnchorIfAbsent("leaningBelow", "below");
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("t/phoneticLeft2." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r506_currentGlyph) {
                    var _r506_t0, _r506_t1;
                    r506_currentGlyph.setWidth(r313_df.width);
                    r506_currentGlyph.include(r313_df.markSet.b());
                    r506_currentGlyph.include((r313_Style.PLBody || r313_Style.Body)(r313_df, r313_sym, r313_top, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("t/phoneticLeft3." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r512_currentGlyph) {
                    var _r512_t0, _r512_t1;
                    r512_currentGlyph.setWidth(r313_dfN.width);
                    r512_currentGlyph.include(r313_dfN.markSet.b());
                    r512_currentGlyph.include(r313_Style.Body(r313_dfN, r313_sym, r313_top, 0));
                    r512_currentGlyph.include(r313_HCrossBar.top(r313_dfN.middle, r313_dfN.width + r313_dfN.middle, r313_ySmallTBarPos));
                    return void 0;
                }));
                if (!r497_fShortNeck) r313_xn$GlyphSaveSink$2Lrc4b.save("t/compLigRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r519_currentGlyph) {
                    var _r519_t0, _r519_t1;
                    r519_currentGlyph.setWidth(r313_df.width);
                    r519_currentGlyph.include(r313_df.markSet.b());
                    r519_currentGlyph.include(r313_difference(r313_Style.Body(r313_df, r313_sym + r313_xn$SYMPRLEFT$9Jrj3, r313_top, 0), r313_MaskLeft(r1_mix(r313_df.leftSB, r313_df.middle - r313_HSwToV(r313_HalfStroke), 0.5))));
                    return void 0;
                }));
                if (!r497_fShortNeck) r313_xn$GlyphSaveSink$2Lrc4b.save("tHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r525_currentGlyph) {
                    var _r525_t0, _r525_t1;
                    r525_currentGlyph.include(r313_xn$referglyph$1aao("t." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r525_attach = r525_currentGlyph.gizmo.unapply(r525_currentGlyph.baseAnchors.hooktopAttach);
                    r525_currentGlyph.clearGeometry();
                    r525_currentGlyph.include(r313_union(r313_difference(r313_Style.Body(r313_df, r313_sym, r313_top, 0), r313_MaskAbove(r313_XH)), r313_TopHook.toRight.mBarInner(r525_attach.x, r313_XH, r313_Ascender)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("tRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r530_currentGlyph) {
                    var _r530_t0, _r530_t1;
                    r530_currentGlyph.setWidth(r313_df.width);
                    r530_currentGlyph.include(r313_df.markSet.bp());
                    r530_currentGlyph.include(r313_Style.Retroflex(r313_df, r313_sym, r313_top, r313_Descender));
                    return void 0;
                }));
                if (!r497_fShortNeck) r313_xn$GlyphSaveSink$2Lrc4b.save("tHookTopRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r536_currentGlyph) {
                    var _r536_t0, _r536_t1;
                    r536_currentGlyph.setWidth(r313_df.width);
                    r536_currentGlyph.include(r313_df.markSet.bp());
                    r536_currentGlyph.include(r313_Style.Retroflex(r313_df, r313_sym, r313_XH, r313_Descender));
                    var r536_attach = r536_currentGlyph.gizmo.unapply(r536_currentGlyph.baseAnchors.hooktopAttach);
                    r536_currentGlyph.include(r313_TopHook.toRight.mBarInner(r536_attach.x, r313_XH, r313_Ascender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("tPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r543_currentGlyph) {
                    var _r543_t0, _r543_t1;
                    r543_currentGlyph.setWidth(r313_df.width);
                    r543_currentGlyph.include(r313_df.markSet.bp());
                    r543_currentGlyph.include(r313_Style.Body(r313_df, r313_sym, r313_top, 0));
                    var r543_attach = r543_currentGlyph.gizmo.unapply(r543_currentGlyph.baseAnchors.palatalHookAttach || r543_currentGlyph.baseAnchors.bottomRight);
                    r543_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r543_attach.x), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r543_attach.y)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("tCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r553_currentGlyph) {
                    var _r553_t0, _r553_t1;
                    r553_currentGlyph.setWidth(r313_dfN.width);
                    r553_currentGlyph.include(r313_dfN.markSet.b());
                    var r553_fine = r313_AdviceStroke(3.5);
                    var r553_xLeft = r313_Style.BarLeftPos(r313_dfN, r313_sym);
                    r553_currentGlyph.include(r313_difference(r313_Style.Body(r313_dfN, r313_sym, r313_top, 0), r313_MaskBelow(r313_ySmallTBarPos - r313_Stroke - r313_TINY)));
                    r553_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flat(r553_xLeft, r313_ySmallTBarPos - r313_Stroke, r313_heading(r313_Downward)), r313_curl(r553_xLeft, 0 + r313_LongVJut), r313_CurlyTail.n(r553_fine, 0, r553_xLeft + r313_HSwToV(r313_Stroke) + r313_LongJut, 0, 0)));
                    return void 0;
                }));
                return !r497_fShortNeck ? r313_xn$GlyphSaveSink$2Lrc4b.save("turntCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r560_currentGlyph) {
                    var _r560_t0, _r560_t1;
                    r560_currentGlyph.setWidth(r313_df.width);
                    r560_currentGlyph.include(r313_df.markSet.b());
                    var r560_fine = r313_AdviceStroke2(3.5, 2.5, 0 - r313_Descender);
                    var r560_xRight = r313_df.width - r313_Style.BarLeftPos(r313_df, r313_sym);
                    r560_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r566_currentGlyph) {
                        var _r566_t0, _r566_t1;
                        r566_currentGlyph.include(r313_Style.Body(r313_df, r313_sym, r313_XH, 0), true, true);
                        r566_currentGlyph.include(r313_FlipAround(r313_df.middle, r313_XH / 2));
                        return void 0;
                    })));
                    r560_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(r560_xRight, r313_TINY, r313_heading(r313_Downward)), r313_curl(r560_xRight, 0, r313_heading(r313_Downward)), r313_CurlyTail.n(r560_fine, r313_Descender, r560_xRight - r313_HSwToV(r313_Stroke) - r313_LongJut, r313_df.rightSB, r313_Descender, r1_mix(0, r313_Descender, 0.5) + r560_fine)));
                    return void 0;
                })) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("t", "t");
        r313_xn$selectvariant$7Hrq("t/compLigRight");
        r313_xn$selectvariant$7Hrq("t/phoneticLeft1", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "t"));
        r313_xn$selectvariant$7Hrq("t/phoneticLeft2");
        r313_xn$selectvariant$7Hrq("t/phoneticLeft3", new r313_xn$NamedParameterPair$2Lrc9b("follow", "t"));
        r313_xn$selectvariant$7Hrq("t/phoneticLeft3/reduced", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "t/phoneticLeft3"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "t/phoneticLeft1"));
        r313_xn$GlyphSaveSink$2Lrc4b.save("t/phoneticLeft4/selector.serifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r576_currentGlyph) {
            var _r576_t0, _r576_t1;
            var r576_df = r576_currentGlyph.include(r313_dfN);
            r576_currentGlyph.include(r576_df.markSet.b());
            r1_DependentSelector.set(r576_currentGlyph, "full");
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("t/phoneticLeft4/selector.serifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r581_currentGlyph) {
            var _r581_t0, _r581_t1;
            var r581_df = r581_currentGlyph.include(r313_dfN);
            r581_currentGlyph.include(r581_df.markSet.b());
            r1_DependentSelector.set(r581_currentGlyph, "reduced");
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("t/phoneticLeft4/selector", new r313_xn$NamedParameterPair$2Lrc9b("follow", "l/bottomSerif/leftHalf"));
        r313_CreateDependentComposite("t/phoneticLeft4", null, "t/phoneticLeft4/selector", {
            "full": "t/phoneticLeft3",
            "reduced": "t/phoneticLeft3/reduced"
        });
        r313_CreateCommaCaronComposition("tCaron", 357, "t");
        r313_CreateAccentedComposition("tWedge", null, "t", "caronAbove");
        r313_xn$deriveglyphs$7Hrq("tCedilla", 355, "t", r313_ConnectedCedilla);
        r313_CreateAccentedComposition("tComma", 539, "t", "commaBelow");
        r313_xn$selectvariant$7Hrq("tPalatalHook", 427, new r313_xn$NamedParameterPair$2Lrc9b("follow", "t"));
        r313_xn$selectvariant$7Hrq("tHookTop", 429);
        r313_xn$selectvariant$7Hrq("tRTail", 648);
        r313_xn$selectvariant$7Hrq("tHookTopRTail", 122633);
        r313_CreateTurnedLetter("turnt", 647, "t", r313_HalfAdvance, r313_XH / 2);
        r313_xn$selectvariant$7Hrq("tCurlyTail", 566);
        r313_xn$selectvariant$7Hrq("turntCurlyTail", 122637, new r313_xn$NamedParameterPair$2Lrc9b("follow", "tHookTop"));
        var r313_ClosedTConfig = {
            "hookless": [r313_xn$SYMBALANCED$9Jrj],
            "hooklessAsymmetric": [r313_xn$SYMLEFT$9Jrj]
        };
        var _r313_t17 = _r1_t2(r313_ClosedTConfig)[Symbol.iterator]();
        var _r313_t18 = void 0;
        while (!(_r313_t18 = _r313_t17.next()).done) {
            _r313_t19 = _r313_t18.value;
            r313_suffix = _r313_t19[0];
            r313_sym = _r313_t19[1][0];
            _r313_t19[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("tClosed." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r593_currentGlyph) {
                    var _r593_t1, _r593_t2;
                    var r593_df = r593_currentGlyph.include(r313_dfN);
                    r593_currentGlyph.include(r593_df.markSet.b());
                    var _r593_t0 = r313_BentHook.Dims(r593_df, r313_sym);
                    var r593_xLeft = _r593_t0.xLeft;
                    var r593_xHook = _r593_t0.xHook;
                    var r593_yHook = _r593_t0.yHook;
                    var r593_ada = _r593_t0.ada;
                    var r593_adb = _r593_t0.adb;
                    r593_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r593_xLeft, r593_xHook));
                    r593_currentGlyph.include(r313_LeaningAnchor.Below.Hook(r593_xLeft, r593_xHook));
                    r593_currentGlyph.setBaseAnchor("bottomRight", r593_xHook, r593_yHook);
                    r593_currentGlyph.setBaseAnchor("overlay", r593_xLeft + r313_HSwToV(r313_HalfStroke), r1_mix(0, r313_XH, 0.58));
                    r593_currentGlyph.include(r313_intersection(r313_BentHook.CrossBar(r593_df, r313_sym), r313_MaskLeft(r1_mix(r593_xLeft + r313_HSwToV(r313_Stroke), r593_xHook - r313_HSwToV(r313_Stroke), r313_StrokeWidthBlend(0.9, 0.7)))));
                    r593_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flatside.ld(r593_xLeft, 0, r313_Ascender, r593_ada, r593_adb, 0), r313_Arch.lhs(0), r313_g4(r593_xHook - r313_OX, r313_YSmoothMidR(r313_Ascender, 0, r313_SmallArchDepthA, r313_SmallArchDepthB)), r313_Arch.lhs(r313_Ascender), r313_flatside.ld(r593_xLeft, 0, r313_Ascender, r593_ada, r593_adb, 0)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("latn/the", 122745, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "tClosed"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "tHookTopRTail"));
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABCLASSICAL$5sIl = 1;
        var r313_xn$SLABINWARD$5sIl = 2;
        var r313_TsLigStrokeShape = function (r604_df, r604_stroke, r604_top, r604_sb) {
            var r604___, _r604_t0, _r604_t1, _r604_t2;
            var r604_archDepth = r313_AdviceSArchDepth(r313_XH + 0.5 * r313_ArchDepth, -1, r604_stroke);
            return r313_dispiro(r313_widths.lhs(r604_stroke), r313_flat(r313_xSmallTBarLeftT(r604_df), r604_top, r313_heading(r313_Downward)), r313_curl(r313_xSmallTBarLeftT(r604_df), r313_XH, r313_heading(r313_Downward)), r313_alsoThru.g2(0.5, 0.5, r313_widths.center(r604_stroke)), r313_g4(r604_df.rightSB, 0 + r604_archDepth, r313_widths.rhs(r604_stroke)), (_r604_t0 = r604_sb, _r604_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.RtlRhs(r604_df.leftSB, 0, r604_stroke, r313_SHook) : _r604_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.RtlRhs(r604_df.leftSB, 0, r604_stroke, r313_SHook) : (r604___ = _r604_t0, [r313_HookEnd(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r604_stroke)), r313_g4(r604_df.leftSB, 0 + r313_SHook)])));
        };
        var r313_TSUpperConfig = {
            "bentHook": [r313_Ascender],
            "bentHookShortNeck": [r313_yShortNeck1],
            "bentHookShortNeck2": [r313_yShortNeck2]
        };
        var _r313_t20 = Object.entries(r313_TSUpperConfig)[Symbol.iterator]();
        var _r313_t21 = void 0;
        while (!(_r313_t21 = _r313_t20.next()).done) {
            _r313_t22 = _r313_t21.value;
            r313_suffix = _r313_t22[0];
            r313_top = _r313_t22[1][0];
            _r313_t22[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("tsLig/upperHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r611_currentGlyph) {
                    var _r611_t0, _r611_t1;
                    var r611_df = r611_currentGlyph.include(r313_DivFrame(1));
                    r611_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                    r611_currentGlyph.include(r313_difference(r313_TsLigStrokeShape(r611_df, r313_Stroke, r313_top, false), r313_MaskBelow(r313_XH)));
                    r611_currentGlyph.include(r313_BentHook.CrossBar(r611_df, r313_xn$SYMBALANCED$9Jrj));
                    return void 0;
                }));
            })();
        }
        var r313_TSLowerConfig = {
            "serifless": [r313_xn$SLABNONE$5sIl],
            "bilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl],
            "bilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl]
        };
        var _r313_t23 = Object.entries(r313_TSLowerConfig)[Symbol.iterator]();
        var _r313_t24 = void 0;
        while (!(_r313_t24 = _r313_t23.next()).done) {
            _r313_t25 = _r313_t24.value;
            r313_suffix = _r313_t25[0];
            r313_doBS = _r313_t25[1][0];
            _r313_t25[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("tsLig/lowerHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r621_currentGlyph) {
                    var _r621_t0, _r621_t1;
                    var r621_df = r621_currentGlyph.include(r313_DivFrame(1));
                    r621_currentGlyph.include(r621_df.markSet.b());
                    r621_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    r621_currentGlyph.include(r313_intersection(r313_TsLigStrokeShape(r621_df, r313_Stroke, r313_Ascender, r313_doBS), r313_MaskBelow(r313_XH)));
                    r621_currentGlyph.include(r313_SAutoSlabEnd(r621_df, r313_doBS, 0, r313_Stroke, r313_Hook));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("tsLig/upperHalf");
        r313_xn$selectvariant$7Hrq("tsLig/lowerHalf");
        r313_xn$derivecomposites$7Hrq("tsLig", 446, "tsLig/upperHalf", "tsLig/lowerHalf");
        var _r313_t26 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t26.BBS;
        var r313_BBD = _r313_t26.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/t", 120165, new r313_xn$Capture$2Lrc8.GlyphProc(function (r630_currentGlyph) {
            var _r630_t0, _r630_t1;
            var r630_df = r313_DivFrame(1);
            r630_currentGlyph.include(r630_df.markSet.b());
            var r630_xLeft = r313_xSmallTBarLeftT(r630_df);
            r630_currentGlyph.include(r313_HBar.t(r630_xLeft, r630_xLeft + r313_BBD, r313_Ascender, r313_BBS));
            r630_currentGlyph.include(r313_BentHook.HookShapeT(r313_dispiro, r630_df, r313_xn$SYMBALANCED$9Jrj, 0, r313_Ascender, 0, r313_BBS));
            r630_currentGlyph.include(r313_intersection(r313_VBar.l(r630_xLeft + r313_BBD, 0, r313_Ascender, r313_BBS), r313_BentHook.HookShapeT(r313_xn$spirooutline$1aao, r630_df, r313_xn$SYMBALANCED$9Jrj, 1, r313_Ascender, 0, r313_BBS)));
            r630_currentGlyph.include(r313_difference(r313_HCrossBar.top(r630_xLeft + r313_BBD / 2 - r313_LongJut + r313_TBalance2, r630_xLeft + r313_BBD / 2 + r313_LongJut + r313_TBalance2, r313_ySmallTBarPos, r313_BBS), r313_Rect(r313_Ascender, 0, r630_xLeft, r630_xLeft + r313_BBD)));
            return void 0;
        }));
    });
    return void 0;
});


