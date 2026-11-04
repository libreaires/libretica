"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-M", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_slanted, r313_form, r313_slab, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
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
        var r313_Width = _r313_t1.Width;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_VJut = _r313_t1.VJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
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
        var r313_VSerif = _r313_t5.VSerif;
        var r313_NeedSlab = _r313_t5.NeedSlab;
        var r313_DiagCorDs = _r313_t5.DiagCorDs;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$aliasreducedvariant$1aao8 = _r313_t6["alias-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateSelectorVariants = _r313_t9.CreateSelectorVariants;
        var r313_DefineSelectorGlyph = _r313_t9.DefineSelectorGlyph;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t10.SerifFrame;
        var r313_EngHook = _r313_t10.EngHook;
        var r313_CyrTailDescender = _r313_t10.CyrTailDescender;
        var r313_xn$FORMFLAT$5sIl = 0;
        var r313_xn$FORMHANGING$5sIl = 1;
        var r313_xn$FORMTURNW$5sIl5 = 2;
        var r313_xn$FORMSAN$5sIl = 3;
        var r313_xn$FORMSANSMALL$5sIl4 = 4;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABAUTO$5sIl = 1;
        var r313_xn$SLABMOTION$5sIl = 2;
        var r313_xn$SLABSMALLCYRILLIC$5sIl6 = 3;
        var r313_xn$SLABFULL$5sIl = 4;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "MShape": r313_MShape
            };
        });
        var r313_MShape = function () {
            var _r322_t5;
            var _r322_t6 = arguments;
            var r322_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r322_t6, 0);
            var _r322_t0 = [];
            var _r322_t1 = 0;
            while (_r322_t1 < r322_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r322_t0.push(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1]);
                _r322_t1 = _r322_t1 + 1;
            }
            var _r322_t2 = r322_xn$flexarguments$2Lrc7uIe5;
            var _r322_t3 = _r322_t2.length;
            var _r322_t4 = 0;
            while (_r322_t4 < _r322_t3) {
                _r322_t1 = _r322_t2[_r322_t4];
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "top") r322_top = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "df") r322_df = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "form") r322_form = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "slabType") r322_slabType = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "slanted") r322_slanted = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "kMidHang") r322_kMidHang = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "middleYExt") r322_middleYExt = _r322_t1.right;
                _r322_t4 = _r322_t4 + 1;
            }
            var r322_top = r1_fallback(r322_top, _r322_t0[0]);
            var r322_df = r1_fallback(r322_df, _r322_t0[1]);
            var r322_form = r1_fallback(r322_form, _r322_t0[2]);
            var r322_slabType = r1_fallback(r322_slabType, _r322_t0[3]);
            var r322_slanted = r1_fallback(r322_slanted, _r322_t0[4]);
            var r322_kMidHang = r1_fallback(r322_kMidHang, _r322_t0[5], r322_df.adws);
            var r322_middleYExt = r1_fallback(r322_middleYExt, _r322_t0[6], void 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var r328___, _r328_t0, _r328_t1, _r328_t2, _r328_t3, _r328_t4, _r328_t5, _r328_t6, _r328_t7, _r328_t8;
                var r328_sidesSlope = r322_slanted ? 0.04 : 0;
                var r328_xLeftTop = r322_df.leftSB + (r322_top - 0) * r328_sidesSlope;
                var r328_xRightTop = r322_df.rightSB - (r322_top - 0) * r328_sidesSlope;
                var r328_fHasBottomInnerSerif = (_r328_t0 = r322_slabType, _r328_t0 === r313_xn$SLABFULL$5sIl ? true : _r328_t0 === r313_xn$SLABAUTO$5sIl ? r313_SLAB : (r328___ = _r328_t0, false));
                var r328_swSideBot = (_r328_t1 = r322_form, _r328_t1 === r313_xn$FORMSANSMALL$5sIl4 ? r322_df.adviceStroke(2.5) : _r328_t1 === r313_xn$FORMSAN$5sIl ? r322_df.adviceStroke(2.5) : _r328_t1 === r313_xn$FORMTURNW$5sIl5 ? r322_df.adviceStroke(2.5) : _r328_t1 === r313_xn$FORMHANGING$5sIl ? r322_df.adviceStroke(2.5) : (r328___ = _r328_t1, r322_df.adviceStroke(2.75)));
                var r328_swSideTop = (_r328_t2 = r322_form, _r328_t2 === r313_xn$FORMSANSMALL$5sIl4 ? r322_df.adviceStroke(3) : _r328_t2 === r313_xn$FORMSAN$5sIl ? r322_df.adviceStroke(3) : _r328_t2 === r313_xn$FORMTURNW$5sIl5 ? r322_df.adviceStroke(3) : (r328___ = _r328_t2, r322_df.adviceStroke(4)));
                var r328_swMiddle = r322_df.adviceStroke(4.5);
                var r328_middleY = (_r328_t3 = r322_form, _r328_t3 === r313_xn$FORMSANSMALL$5sIl4 ? r1_mix(0, r322_top, 0.55) : _r328_t3 === r313_xn$FORMSAN$5sIl ? r1_mix(0, r322_top, 0.55) : _r328_t3 === r313_xn$FORMTURNW$5sIl5 ? r1_mix(0, r322_top, 0.45) : _r328_t3 === r313_xn$FORMHANGING$5sIl ? r1_mix(0, r322_top, 0.3 / (r322_kMidHang * r322_kMidHang)) : (r328___ = _r328_t3, r328_fHasBottomInnerSerif ? r328_swSideBot : 0));
                var r328_kMidShift = (_r328_t4 = r322_form, _r328_t4 === r313_xn$FORMFLAT$5sIl ? 0.75 : (r328___ = _r328_t4, 0.5));
                var r328_kMidBotStrokeShrink = r1_mix(r322_df.adws, 1, (_r328_t5 = r322_form, _r328_t5 === r313_xn$FORMFLAT$5sIl ? 1.5 : (r328___ = _r328_t5, 1)));
                var r328_swMiddleShrink = r328_kMidBotStrokeShrink * r328_swMiddle;
                r328_currentGlyph.include(r313_tagged("strokeLeftBar", r313_dispiro(r313_flat(r322_df.leftSB, r322_form === r313_xn$FORMSANSMALL$5sIl4 ? r313_Descender : 0, r313_widths.heading(0, r328_swSideBot, r313_Upward)), r313_curl(r1_mix(r322_df.leftSB, r328_xLeftTop, 0.2), r322_top * 0.2, r313_heading(r313_Upward)), r313_straight.up.end(r328_xLeftTop, r322_top, r313_widths.heading(0, r328_swSideTop, r313_Upward)))));
                r328_currentGlyph.include(r313_tagged("strokeRightBar", r313_dispiro(r313_flat(r322_df.rightSB, 0, r313_widths.heading(r328_swSideBot, 0, r313_Upward)), r313_curl(r1_mix(r322_df.rightSB, r328_xRightTop, 0.2), r322_top * 0.2, r313_heading(r313_Upward)), r313_straight.up.end(r328_xRightTop, r322_top, r313_widths.heading(r328_swSideTop, 0, r313_Upward)))));
                r328_currentGlyph.include(r313_dispiro(r313_flat(r328_xLeftTop + r328_kMidShift * r313_HSwToV(r328_swSideTop), r322_top, r313_widths.lhs.heading(r328_swMiddle, r313_Downward)), r313_curl(r322_df.middle - r313_HSwToV(0.5 * r328_swMiddleShrink), r328_middleY, r313_widths.lhs.heading(r328_swMiddleShrink, r313_Downward))));
                r328_currentGlyph.include(r313_dispiro(r313_flat(r328_xRightTop - r328_kMidShift * r313_HSwToV(r328_swSideTop), r322_top, r313_widths.rhs.heading(r328_swMiddle, r313_Downward)), r313_curl(r322_df.middle + r313_HSwToV(0.5 * r328_swMiddleShrink), r328_middleY, r313_widths.rhs.heading(r328_swMiddleShrink, r313_Downward))));
                if (r322_middleYExt !== void 0) r328_currentGlyph.include(r313_VBar.m(r322_df.middle, r322_middleYExt, r328_middleY, r328_swMiddleShrink));
                var r328_sfT = r313_SerifFrame(r322_top, 0, r328_xLeftTop, r328_xRightTop, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r328_swSideBot), new r313_xn$NamedParameterPair$2Lrc9b("hSplit", 3), new r313_xn$NamedParameterPair$2Lrc9b("fForceSymmetric", r322_form !== r313_xn$FORMFLAT$5sIl));
                var r328_sfB = r313_SerifFrame(r322_top, 0, r322_df.leftSB, r322_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r328_swSideBot), new r313_xn$NamedParameterPair$2Lrc9b("hSplit", 3), new r313_xn$NamedParameterPair$2Lrc9b("fForceSymmetric", r322_form !== r313_xn$FORMFLAT$5sIl));
                r328_currentGlyph.include((_r328_t6 = r322_slabType, _r328_t6 === r313_xn$SLABNONE$5sIl ? r313_xn$noshape$3cah() : _r328_t6 === r313_xn$SLABFULL$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var _r354_t0, _r354_t1;
                    r354_currentGlyph.include(r328_sfT.lt.outer, true, true);
                    r354_currentGlyph.include(r328_sfT.rt.outer);
                    r354_currentGlyph.include(r328_sfB.lb.full);
                    r354_currentGlyph.include(r328_sfB.rb.full);
                    return void 0;
                }) : _r328_t6 === r313_xn$SLABAUTO$5sIl ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                    var _r348_t0, _r348_t1;
                    r348_currentGlyph.include(r328_sfT.lt.outer, true, true);
                    r348_currentGlyph.include(r328_sfT.rt.outer);
                    r348_currentGlyph.include(r328_sfB.lb.full);
                    r348_currentGlyph.include(r328_sfB.rb.full);
                    return void 0;
                })) : _r328_t6 === r313_xn$SLABMOTION$5sIl ? r328_sfT.lt.outer : _r328_t6 === r313_xn$SLABSMALLCYRILLIC$5sIl6 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                    var _r342_t0, _r342_t1;
                    r342_currentGlyph.include(r328_sfT.lt.outer, true, true);
                    r342_currentGlyph.include(r313_para.isItalic ? r313_xn$noshape$3cah() : r328_sfT.rt.outer);
                    r342_currentGlyph.include(r313_para.isItalic ? r328_sfB.lb.outer : r328_sfB.lb.full);
                    r342_currentGlyph.include(r313_para.isItalic ? r328_sfB.rb.outer : r328_sfB.rb.full);
                    return void 0;
                }) : void 0));
                return {
                    "swSideBot": r328_swSideBot
                };
            });
        };
        var r313_CyrSoftEmShape = function () {
            var _r359_t5;
            var _r359_t6 = arguments;
            var r359_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r359_t6, 0);
            var _r359_t0 = [];
            var _r359_t1 = 0;
            while (_r359_t1 < r359_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r359_xn$flexarguments$2Lrc7uIe5[_r359_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r359_t0.push(r359_xn$flexarguments$2Lrc7uIe5[_r359_t1]);
                _r359_t1 = _r359_t1 + 1;
            }
            var _r359_t2 = r359_xn$flexarguments$2Lrc7uIe5;
            var _r359_t3 = _r359_t2.length;
            var _r359_t4 = 0;
            while (_r359_t4 < _r359_t3) {
                _r359_t1 = _r359_t2[_r359_t4];
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "top") r359_top = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "df") r359_df = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "form") r359_form = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "slabType") r359_slabType = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "slanted") r359_slanted = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "vSlab") r359_vSlab = _r359_t1.right;
                _r359_t4 = _r359_t4 + 1;
            }
            var r359_top = r1_fallback(r359_top, _r359_t0[0]);
            var r359_df = r1_fallback(r359_df, _r359_t0[1]);
            var r359_form = r1_fallback(r359_form, _r359_t0[2]);
            var r359_slabType = r1_fallback(r359_slabType, _r359_t0[3]);
            var r359_slanted = r1_fallback(r359_slanted, _r359_t0[4]);
            var r359_vSlab = r1_fallback(r359_vSlab, _r359_t0[5]);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                var r365___, r365_swVJut, _r365_t0, _r365_t1, _r365_t2;
                var r365_subDf = r359_df.slice(4, 3);
                var r365_sidesSlope = r359_slanted ? 0.04 : 0;
                var r365_xRightTop = r365_subDf.rightSB - r359_top * r365_sidesSlope;
                var r365_xTopBarRightEnd = r1_mix(r359_df.width, r359_df.rightSB, r359_vSlab ? 0.25 : 0.375);
                var r365_swSideBot = (_r365_t0 = r359_form, _r365_t0 === r313_xn$FORMSANSMALL$5sIl4 ? r313_AdviceStroke(2.5, r365_subDf.adws) : _r365_t0 === r313_xn$FORMSAN$5sIl ? r313_AdviceStroke(2.5, r365_subDf.adws) : _r365_t0 === r313_xn$FORMTURNW$5sIl5 ? r313_AdviceStroke(2.5, r365_subDf.adws) : _r365_t0 === r313_xn$FORMHANGING$5sIl ? r313_AdviceStroke(2.5, r365_subDf.adws) : (r365___ = _r365_t0, r313_AdviceStroke(2.75, r365_subDf.adws)));
                r365_currentGlyph.include(r313_MShape(r359_top, r365_subDf, r359_form, r359_slabType, r359_slanted, new r313_xn$NamedParameterPair$2Lrc9b("kMidHang", r359_df.adws)));
                r365_currentGlyph.include(r313_HBar.t(r365_xRightTop, r365_xTopBarRightEnd, r359_top, r365_swSideBot));
                if (r359_vSlab) {
                    r365_swVJut = Math.min(r313_VJutStroke * (r365_swSideBot / r313_Stroke), r313_VSwToH(0.625 * (r365_xTopBarRightEnd - r365_xRightTop)));
                    r365_currentGlyph.include(r313_VSerif.dr(r365_xTopBarRightEnd, r359_top, r313_VJut, r365_swVJut));
                }
                return void 0;
            });
        };
        var r313_MConfig = r1_SuffixCfg.combine(r1_SuffixCfg.weave({
            "": false,
            "slantedSides": true
        }, {
            "hanging": r313_xn$FORMHANGING$5sIl,
            "flatBottom": r313_xn$FORMFLAT$5sIl
        }, {
            "serifless": r313_xn$SLABNONE$5sIl,
            "motionSerifed": r313_xn$SLABMOTION$5sIl,
            "smallCyrl": r313_xn$SLABSMALLCYRILLIC$5sIl6,
            "serifed": r313_xn$SLABFULL$5sIl
        }), {
            "grekCapitalSan": [false, r313_xn$FORMSAN$5sIl, r313_xn$SLABAUTO$5sIl],
            "grekSmallSan": [false, r313_xn$FORMSANSMALL$5sIl4, r313_xn$SLABNONE$5sIl]
        });
        var r313_CyrSoftEmGheConfig = {
            "serifless": false,
            "topRightSerifed": true
        };
        var _r313_t11 = Object.entries(r313_MConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_slanted = _r313_t13[1][0];
            r313_form = _r313_t13[1][1];
            r313_slab = _r313_t13[1][2];
            _r313_t13[1];
            (function () {
                var r372_suffixGhe, r372_cyrSoftEmVSlab, _r372_t2, _r372_t3, _r372_tag4;
                r313_xn$GlyphSaveSink$2Lrc4b.save("M." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                    var _r375_t0, _r375_t1;
                    var r375_df = r375_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                    r375_currentGlyph.include(r375_df.markSet.capital());
                    r375_currentGlyph.include(r313_MShape(r313_CAP, r375_df, r313_form, r313_slab, r313_slanted));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("Meng." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                    var _r381_t0, _r381_t1;
                    var r381_df = r381_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                    r381_currentGlyph.include(r381_df.markSet.capDesc());
                    var r381_ret_M = r381_currentGlyph.include(r313_MShape(r313_CAP, r381_df, r313_form, r313_slab, r313_slanted));
                    r381_currentGlyph.ejectTagged("serifRB");
                    r381_currentGlyph.include(r313_EngHook(r381_df.rightSB, 0, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r381_ret_M.swSideBot)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpM." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                    var _r390_t0, _r390_t1;
                    var r390_df = r390_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 3));
                    r390_currentGlyph.include(r390_df.markSet.e());
                    r390_currentGlyph.include(r313_MShape(r313_XH, r390_df, r313_form, r313_slab, r313_slanted));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpMWithDescender." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                    var _r396_t0, _r396_t1;
                    var r396_df = r396_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 3));
                    r396_currentGlyph.include(r396_df.markSet.p());
                    r396_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r396_df.leftSB));
                    r396_currentGlyph.include(r313_MShape(r313_XH, r396_df, r313_form, r313_slab, r313_slanted));
                    return void 0;
                }));
                var r372_cyrSoftEmDf = r313_DivFrame(r1_mix(1, r313_para.advanceScaleM, 2), 4);
                var r372_cyrSoftemDf = r313_DivFrame(r313_para.advanceScaleMM, 4);
                r313_DefineSelectorGlyph("cyrl/EmSoft", r313_suffix, r372_cyrSoftEmDf, "capital");
                r313_DefineSelectorGlyph("cyrl/emSoft", r313_suffix, r372_cyrSoftemDf, "e");
                var _r372_t0 = Object.entries(r313_CyrSoftEmGheConfig)[Symbol.iterator]();
                var _r372_t1 = void 0;
                while (!(_r372_t1 = _r372_t0.next()).done) {
                    _r372_t2 = _r372_t1.value;
                    r372_suffixGhe = _r372_t2[0];
                    r372_cyrSoftEmVSlab = _r372_t2[1];
                    (function () {
                        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/EmSoft." + r313_suffix + "." + r372_suffixGhe, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                            var _r406_t0, _r406_t1;
                            r406_currentGlyph.setWidth(0);
                            r406_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r406_currentGlyph.include(r313_CyrSoftEmShape(r313_CAP, r372_cyrSoftEmDf, r313_form, r313_slab, r313_slanted, r372_cyrSoftEmVSlab));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/emSoft." + r313_suffix + "." + r372_suffixGhe, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                            var _r412_t0, _r412_t1;
                            r412_currentGlyph.setWidth(0);
                            r412_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r412_currentGlyph.include(r313_CyrSoftEmShape(r313_XH, r372_cyrSoftemDf, r313_form, r313_slab, r313_slanted, r372_cyrSoftEmVSlab));
                            return void 0;
                        }));
                    })();
                }
                r313_xn$selectvariant$7Hrq("cyrl/EmSoft." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/EnGhe/Ghe"));
                return r313_xn$selectvariant$7Hrq("cyrl/emSoft." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/enghe/ghe"));
            })();
        }
        r313_xn$selectvariant$7Hrq("M", "M");
        r313_xn$linkreducedvariant$5sIl8("M/sansSerif", "M", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("Meng", 11374, new r313_xn$NamedParameterPair$2Lrc9b("follow", "M"));
        r313_xn$selectvariant$7Hrq("smcpM", 7437, new r313_xn$NamedParameterPair$2Lrc9b("follow", "M"));
        r313_xn$selectvariant$7Hrq("cyrl/em", 1084, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpM"));
        r313_alias("grek/Mu", 924, "M");
        r313_xn$aliasreducedvariant$1aao8("grek/Mu/sansSerif", "grek/Mu", "M/sansSerif", r1_MathSansSerif);
        r313_alias("cyrl/Em", 1052, "M");
        r313_CreateSelectorVariants("cyrl/EmSoft", 42598, Object.keys(r313_MConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "M"));
        r313_CreateSelectorVariants("cyrl/emSoft", 42599, Object.keys(r313_MConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/em"));
        r313_xn$deriveglyphs$7Hrq("cyrl/EmTail", 1229, "cyrl/Em", function (r423_src, r423_gr) {
            var _r423_t0, _r423_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                var _r425_t0, _r425_t1;
                r425_currentGlyph.include(r313_xn$referglyph$1aao(r423_src), r313_AS_BASE, r313_ALSO_METRICS);
                var r425_df = r313_DivFrame(r313_para.advanceScaleM, 3);
                r425_currentGlyph.include(r313_CyrTailDescender.rSideJut(r425_df.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("refSw", r425_df.mvs)));
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("cyrl/emTail", 1230, "cyrl/em", function (r429_src, r429_gr) {
            var _r429_t0, _r429_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                var _r431_t0, _r431_t1;
                r431_currentGlyph.include(r313_xn$referglyph$1aao(r429_src), r313_AS_BASE, r313_ALSO_METRICS);
                var r431_df = r313_DivFrame(r313_para.advanceScaleT, 3);
                r431_currentGlyph.include(r313_CyrTailDescender.rSideJut(r431_df.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("refSw", r431_df.mvs)));
                return void 0;
            });
        });
        r313_alias("grek/San", 1018, "M.grekCapitalSan");
        r313_alias("grek/san", 1019, "smcpMWithDescender.grekSmallSan");
        r313_CreateTurnedLetter("turnM", null, "M", r313_HalfAdvance, r313_CAP / 2);
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        var r313_BBBarRight = _r313_t14.BBBarRight;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/M", 120132, new r313_xn$Capture$2Lrc8.GlyphProc(function (r438_currentGlyph) {
            var _r438_t0, _r438_t1;
            var r438_df = r313_DivFrame(1, 3);
            var r438_bbs = Math.min(r313_BBS, r313_AdviceStroke(8));
            var r438_bbd = r313_BBD * Math.min(0.75, r438_bbs / r313_BBS);
            var r438_kDiag = r313_DiagCorDs(r313_CAP, r438_df.rightSB - r438_df.leftSB, r438_bbd);
            var r438_yTurnPos = r1_mix(0, r313_CAP, 0.25);
            r438_currentGlyph.include(r313_MarkSet.capital());
            r438_currentGlyph.include(r313_VBar.l(r438_df.leftSB, 0, r313_CAP, r438_bbs));
            r438_currentGlyph.include(r313_BBBarRight(r438_df.rightSB, 0, r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("bbd", r438_bbd), new r313_xn$NamedParameterPair$2Lrc9b("bbs", r438_bbs)));
            var r438_xLeft = r438_df.leftSB + r313_HSwToV(0.5 * r438_bbs);
            var r438_xRight = r438_df.rightSB - r438_bbd - r313_HSwToV(0.5 * r438_bbs);
            var r438_xMiddle = r1_mix(r438_xLeft, r438_xRight, 0.5);
            r438_currentGlyph.include(r313_HBar.t(r438_xLeft, r438_xLeft + r438_kDiag * r438_bbd, r313_CAP, r438_bbs));
            r438_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, r438_yTurnPos, r438_xLeft, r438_xRight), r313_ExtLineCenter(r438_xRight, r313_CAP, r438_xMiddle, r438_yTurnPos, r438_bbs, 2)));
            r438_currentGlyph.include(r313_difference(r313_intersection(r313_Rect(r313_CAP, r438_yTurnPos, r438_xLeft, r438_xRight), r313_union(r313_ExtLineCenter(r438_xLeft, r313_CAP, r438_xMiddle, r438_yTurnPos, r438_bbs, 2), r313_ExtLineCenter(r438_xLeft + r438_kDiag * r438_bbd, r313_CAP, r438_xMiddle + r438_kDiag * r438_bbd, r438_yTurnPos, r438_bbs, 2))), r313_xn$spirooutline$1aao(r313_corner(r1_mix(0, r313_Width, +4), r1_mix(r313_CAP, r438_yTurnPos, -1)), r313_corner(r1_mix(r438_xRight, r438_xMiddle, -1), r1_mix(r313_CAP, r438_yTurnPos, -1)), r313_corner(r1_mix(r438_xRight, r438_xMiddle, +2), r1_mix(r313_CAP, r438_yTurnPos, +2)), r313_corner(r1_mix(0, r313_Width, +4), r1_mix(r313_CAP, r438_yTurnPos, +2)))));
            return void 0;
        }));
    });
    return void 0;
});


