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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-N", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_bodyType, r313_crDiag, r313_slabType, _r313_t12, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_Rect = _r313_t5.Rect;
        var r313_NeedSlab = _r313_t5.NeedSlab;
        var r313_DiagCor = _r313_t5.DiagCor;
        var r313_VBar = _r313_t5.VBar;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var r313_ExtLineLhsToRhs = _r313_t5.ExtLineLhsToRhs;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$aliasreducedvariant$1aao8 = _r313_t6["alias-reduced-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markHalfStroke = _r313_t7.markHalfStroke;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CyrDescender = _r313_t9.CyrDescender;
        var r313_SerifFrame = _r313_t9.SerifFrame;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_EngHook = _r313_t9.EngHook;
        var r313_CyrTailDescender = _r313_t9.CyrTailDescender;
        var r313_xn$BODYSYMMETRIC$5sIl = 1;
        var r313_xn$BODYASYMMETRIC$5sIl = 2;
        var r313_xn$BODYCYRISLAB$5sIl42 = 3;
        var r313_xn$BODYCYRI$5sIl4 = r313_SLAB ? r313_xn$BODYCYRISLAB$5sIl42 : r313_xn$BODYSYMMETRIC$5sIl;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABAUTO$5sIl = 1;
        var r313_xn$SLABMOTION$5sIl = 2;
        var r313_xn$SLABALL$5sIl = 3;
        var r313_xn$SLABCYRI$5sIl4 = 4;
        var r313_xn$SLABUPPERTSAN$5sIl6 = 5;
        var r313_xn$SLABLOWERTSAN$5sIl6 = 6;
        var r313_pInkTrap = 0.4;
        var r313_NShape = function () {
            var _r320_t5;
            var _r320_t6 = arguments;
            var r320_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r320_t6, 0);
            var _r320_t0 = [];
            var _r320_t1 = 0;
            while (_r320_t1 < r320_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r320_t0.push(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1]);
                _r320_t1 = _r320_t1 + 1;
            }
            var _r320_t2 = r320_xn$flexarguments$2Lrc7uIe5;
            var _r320_t3 = _r320_t2.length;
            var _r320_t4 = 0;
            while (_r320_t4 < _r320_t3) {
                _r320_t1 = _r320_t2[_r320_t4];
                if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "df") r320_df = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "top") r320_top = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "bodyType") r320_bodyType = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "slabType") r320_slabType = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "kSB") r320_kSB = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "stroke") r320_stroke = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "swDiag") r320_swDiag = _r320_t1.right;
                _r320_t4 = _r320_t4 + 1;
            }
            var r320_df = r1_fallback(r320_df, _r320_t0[0]);
            var r320_top = r1_fallback(r320_top, _r320_t0[1]);
            var r320_bodyType = r1_fallback(r320_bodyType, _r320_t0[2]);
            var r320_slabType = r1_fallback(r320_slabType, _r320_t0[3]);
            var r320_kSB = r1_fallback(r320_kSB, _r320_t0[4], 1);
            var r320_stroke = r1_fallback(r320_stroke, _r320_t0[5], r313_AdviceStroke(2));
            var r320_swDiag = r1_fallback(r320_swDiag, _r320_t0[6], r313_AdviceStroke(4));
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var r325___, _r325_t0, _r325_t1, _r325_t2, _r325_t3, _r325_t4, _r325_t5, _r325_t6, _r325_t7;
                var r325_left = r1_mix(0, r320_df.leftSB, r320_kSB);
                var r325_right = r1_mix(r320_df.width, r320_df.rightSB, r320_kSB);
                var r325_fine = (_r325_t0 = r320_bodyType, _r325_t0 === r313_xn$BODYSYMMETRIC$5sIl ? r320_swDiag : (r325___ = _r325_t0, r320_stroke));
                var r325_xEnd = r325_right - r320_swDiag;
                var r325_xStart = r325_left + r320_swDiag;
                var r325_yEnd = (_r325_t1 = r320_bodyType, _r325_t1 === r313_xn$BODYASYMMETRIC$5sIl ? r1_mix(0, r320_top, 0.375) : (r325___ = _r325_t1, 0));
                var r325_yStart = (_r325_t2 = r320_bodyType, _r325_t2 === r313_xn$BODYASYMMETRIC$5sIl ? r320_top : (r325___ = _r325_t2, r320_top - r325_yEnd));
                r325_currentGlyph.include(r313_union((_r325_t3 = r320_bodyType, _r325_t3 === r313_xn$BODYSYMMETRIC$5sIl ? r313_dispiro(r313_widths.rhs(r320_stroke), r313_flat(r325_left, 0, r313_heading(r313_Upward)), r313_curl(r325_left, r1_mix(0, r320_top, r313_pInkTrap), r313_heading(r313_Upward)), r313_straight.up.end(r325_left, r320_top, r313_widths.rhs.heading(r325_fine, r313_Upward))) : (r325___ = _r325_t3, r313_VBar.l(r325_left, 0, r320_top, r325_fine))), (_r325_t4 = r320_bodyType, _r325_t4 === r313_xn$BODYSYMMETRIC$5sIl ? r313_dispiro(r313_widths.rhs(r320_stroke), r313_flat(r325_right, r320_top, r313_heading(r313_Downward)), r313_curl(r325_right, r1_mix(r320_top, 0, r313_pInkTrap), r313_heading(r313_Downward)), r313_straight.down.end(r325_right, 0, r313_widths.rhs.heading(r325_fine, r313_Downward))) : (r325___ = _r325_t4, r313_VBar.r(r325_right, 0, r320_top, r325_fine))), r313_intersection(r313_Rect(r320_top, 0, r325_left, r325_right), r313_ExtLineCenter(r325_xStart, r325_yStart, r325_xEnd, r325_yEnd, r320_swDiag, 2))));
                var r325_sf = r313_SerifFrame(r320_top, 0, r325_left, r325_right, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r320_stroke));
                r325_currentGlyph.include((_r325_t5 = r320_slabType, _r325_t5 === r313_xn$SLABALL$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                    var _r338_t0, _r338_t1;
                    r338_currentGlyph.include(r325_sf.lt.outer, true, true);
                    r338_currentGlyph.include(r325_sf.lb.full);
                    r338_currentGlyph.include(r325_sf.rt.full);
                    return void 0;
                }) : _r325_t5 === r313_xn$SLABAUTO$5sIl ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                    var _r333_t0, _r333_t1;
                    r333_currentGlyph.include(r325_sf.lt.outer, true, true);
                    r333_currentGlyph.include(r325_sf.lb.full);
                    r333_currentGlyph.include(r325_sf.rt.full);
                    return void 0;
                })) : _r325_t5 === r313_xn$SLABMOTION$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                    var _r330_t0, _r330_t1;
                    r330_currentGlyph.include(r325_sf.lt.outer, true, true);
                    return void 0;
                }) : (r325___ = _r325_t5, r313_xn$noshape$3cah())));
                return {
                    "xStart": r325_xStart,
                    "yStart": r325_yStart,
                    "xEnd": r325_xEnd,
                    "yEnd": r325_yEnd,
                    "stroke": r320_stroke,
                    "fine": r325_fine
                };
            });
        };
        var r313_RevNShape = function () {
            var _r343_t5;
            var _r343_t6 = arguments;
            var r343_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r343_t6, 0);
            var _r343_t0 = [];
            var _r343_t1 = 0;
            while (_r343_t1 < r343_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r343_xn$flexarguments$2Lrc7uIe5[_r343_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r343_t0.push(r343_xn$flexarguments$2Lrc7uIe5[_r343_t1]);
                _r343_t1 = _r343_t1 + 1;
            }
            var _r343_t2 = r343_xn$flexarguments$2Lrc7uIe5;
            var _r343_t3 = _r343_t2.length;
            var _r343_t4 = 0;
            while (_r343_t4 < _r343_t3) {
                _r343_t1 = _r343_t2[_r343_t4];
                if (_r343_t1 && _r343_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "df") r343_df = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "top") r343_top = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "bodyType") r343_bodyType = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "slabType") r343_slabType = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "kSB") r343_kSB = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "stroke") r343_stroke = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "swDiag") r343_swDiag = _r343_t1.right;
                _r343_t4 = _r343_t4 + 1;
            }
            var r343_df = r1_fallback(r343_df, _r343_t0[0]);
            var r343_top = r1_fallback(r343_top, _r343_t0[1]);
            var r343_bodyType = r1_fallback(r343_bodyType, _r343_t0[2]);
            var r343_slabType = r1_fallback(r343_slabType, _r343_t0[3]);
            var r343_kSB = r1_fallback(r343_kSB, _r343_t0[4], 1);
            var r343_stroke = r1_fallback(r343_stroke, _r343_t0[5], r313_AdviceStroke(2));
            var r343_swDiag = r1_fallback(r343_swDiag, _r343_t0[6], r313_AdviceStroke(4));
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                var r348___, _r348_t0, _r348_t1, _r348_t2, _r348_t3, _r348_t4, _r348_t5, _r348_t6, _r348_t7, _r348_t8, _r348_t9, _r348_t10, _r348_t11;
                var r348_left = r1_mix(0, r343_df.leftSB, r343_kSB);
                var r348_right = r1_mix(r343_df.width, r343_df.rightSB, r343_kSB);
                var r348_fine = (_r348_t0 = r343_bodyType, _r348_t0 === r313_xn$BODYSYMMETRIC$5sIl ? r343_swDiag : (r348___ = _r348_t0, r343_stroke));
                var r348_xEnd = (_r348_t1 = r343_bodyType, _r348_t1 === r313_xn$BODYCYRISLAB$5sIl42 ? r348_left + r313_HSwToV(r348_fine) : (r348___ = _r348_t1, r348_left + r343_swDiag));
                var r348_xStart = (_r348_t2 = r343_bodyType, _r348_t2 === r313_xn$BODYCYRISLAB$5sIl42 ? r348_right - r313_HSwToV(r348_fine) : (r348___ = _r348_t2, r348_right - r343_swDiag));
                var r348_yEnd = (_r348_t3 = r343_bodyType, _r348_t3 === r313_xn$BODYCYRISLAB$5sIl42 ? 0 + r343_stroke : _r348_t3 === r313_xn$BODYASYMMETRIC$5sIl ? r1_mix(0, r343_top, 0.375) : (r348___ = _r348_t3, 0));
                var r348_yStart = (_r348_t4 = r343_bodyType, _r348_t4 === r313_xn$BODYASYMMETRIC$5sIl ? r343_top : (r348___ = _r348_t4, r343_top - r348_yEnd));
                r348_currentGlyph.include(r313_union((_r348_t5 = r343_bodyType, _r348_t5 === r313_xn$BODYSYMMETRIC$5sIl ? r313_dispiro(r313_widths.lhs(r343_stroke), r313_flat(r348_right, 0, r313_heading(r313_Upward)), r313_curl(r348_right, r1_mix(0, r343_top, r313_pInkTrap), r313_heading(r313_Upward)), r313_straight.up.end(r348_right, r343_top, r313_widths.lhs.heading(r348_fine, r313_Upward))) : (r348___ = _r348_t5, r313_VBar.r(r348_right, 0, r343_top, r348_fine))), (_r348_t6 = r343_bodyType, _r348_t6 === r313_xn$BODYSYMMETRIC$5sIl ? r313_dispiro(r313_widths.lhs(r343_stroke), r313_flat(r348_left, r343_top, r313_heading(r313_Downward)), r313_curl(r348_left, r1_mix(r343_top, 0, r313_pInkTrap), r313_heading(r313_Downward)), r313_straight.down.end(r348_left, 0, r313_widths.lhs.heading(r348_fine, r313_Downward))) : (r348___ = _r348_t6, r313_VBar.l(r348_left, 0, r343_top, r348_fine))), r313_intersection(r313_Rect(r343_top, 0, r348_left, r348_right), (_r348_t7 = r343_bodyType, _r348_t7 === r313_xn$BODYCYRISLAB$5sIl42 ? r313_ExtLineLhsToRhs(r348_xStart, r348_yStart, r348_xEnd, r348_yEnd, r343_swDiag) : (r348___ = _r348_t7, r313_ExtLineCenter(r348_xStart, r348_yStart, r348_xEnd, r348_yEnd, r343_swDiag, 2))))));
                var r348_sf = r313_SerifFrame(r343_top, 0, r348_left, r348_right, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r343_stroke));
                r348_currentGlyph.include((_r348_t8 = r343_slabType, _r348_t8 === r313_xn$SLABALL$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                    var _r380_t0, _r380_t1;
                    r380_currentGlyph.include(r348_sf.lt.full, true, true);
                    r380_currentGlyph.include(r348_sf.rt.outer);
                    r380_currentGlyph.include(r348_sf.rb.full);
                    return void 0;
                }) : _r348_t8 === r313_xn$SLABAUTO$5sIl ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                    var _r375_t0, _r375_t1;
                    r375_currentGlyph.include(r348_sf.lt.full, true, true);
                    r375_currentGlyph.include(r348_sf.rt.outer);
                    r375_currentGlyph.include(r348_sf.rb.full);
                    return void 0;
                })) : _r348_t8 === r313_xn$SLABMOTION$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                    var _r372_t0, _r372_t1;
                    r372_currentGlyph.include(r348_sf.rt.outer, true, true);
                    return void 0;
                }) : _r348_t8 === r313_xn$SLABCYRI$5sIl4 ? r313_NeedSlab(r313_SLAB, (_r348_t9 = r343_bodyType, _r348_t9 === r313_xn$BODYCYRISLAB$5sIl42 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                    var _r366_t0, _r366_t1;
                    r366_currentGlyph.include(r348_sf.lt.full, true, true);
                    r366_currentGlyph.include(r348_sf.lb.full);
                    r366_currentGlyph.include(r348_sf.rt.full);
                    r366_currentGlyph.include(r348_sf.rb.full);
                    return void 0;
                }) : (r348___ = _r348_t9, new r313_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                    var _r360_t0, _r360_t1;
                    r360_currentGlyph.include(r348_sf.lt.full, true, true);
                    r360_currentGlyph.include(r348_sf.lb.outer);
                    r360_currentGlyph.include(r348_sf.rt.outer);
                    r360_currentGlyph.include(r348_sf.rb.full);
                    return void 0;
                })))) : _r348_t8 === r313_xn$SLABUPPERTSAN$5sIl6 ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                    var _r356_t0, _r356_t1;
                    r356_currentGlyph.include(r348_sf.lt.full, true, true);
                    r356_currentGlyph.include(r348_sf.rb.full);
                    return void 0;
                })) : _r348_t8 === r313_xn$SLABLOWERTSAN$5sIl6 ? r313_NeedSlab(r313_SLAB, new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                    var _r353_t0, _r353_t1;
                    r353_currentGlyph.include(r348_sf.lt.outer, true, true);
                    return void 0;
                })) : (r348___ = _r348_t8, r313_xn$noshape$3cah())));
                return void 0;
            });
        };
        var r313_NConfig = r1_SuffixCfg.weave({
            "standard": [r313_xn$BODYSYMMETRIC$5sIl, 4],
            "asymmetric": [r313_xn$BODYASYMMETRIC$5sIl, 3]
        }, {
            "": r313_xn$SLABAUTO$5sIl,
            "serifless": r313_xn$SLABNONE$5sIl,
            "motionSerifed": r313_xn$SLABMOTION$5sIl,
            "serifed": r313_xn$SLABALL$5sIl
        });
        var _r313_t10 = Object.entries(r313_NConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_bodyType = _r313_t12[1][0][0];
            r313_crDiag = _r313_t12[1][0][1];
            _r313_t12[1][0];
            r313_slabType = _r313_t12[1][1];
            _r313_t12[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("N." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                    var _r389_t0, _r389_t1;
                    r389_currentGlyph.include(r313_MarkSet.capital());
                    r389_currentGlyph.include(r313_NShape(r313_DivFrame(1), r313_CAP, r313_bodyType, r313_slabType, new r313_xn$NamedParameterPair$2Lrc9b("swDiag", r313_AdviceStroke(r313_crDiag))));
                    r389_currentGlyph.setBaseAnchor("trailing", r313_RightSB - r313_markHalfStroke, 0);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revN." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                    var _r396_t0, _r396_t1;
                    r396_currentGlyph.include(r313_MarkSet.capital());
                    r396_currentGlyph.include(r313_RevNShape(r313_DivFrame(1), r313_CAP, r313_bodyType, r313_slabType, new r313_xn$NamedParameterPair$2Lrc9b("swDiag", r313_AdviceStroke(r313_crDiag))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("Eng.NSM." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                    var _r402_t0, _r402_t1;
                    r402_currentGlyph.include(r313_MarkSet.capDesc());
                    var r402_dim = r402_currentGlyph.include(r313_NShape(r313_DivFrame(1), r313_CAP, r313_bodyType, r313_slabType, new r313_xn$NamedParameterPair$2Lrc9b("swDiag", r313_AdviceStroke(r313_crDiag))));
                    var r402_cor = r313_HSwToV(r313_DiagCor(r402_dim.yEnd - r402_dim.yStart, r402_dim.xEnd - r402_dim.xStart));
                    r402_currentGlyph.include(r313_EngHook(r313_RightSB, 0, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r1_clamp(r402_dim.fine, r402_dim.stroke, r313_VSwToH(r402_dim.fine * (1 + 0.5 * r402_cor))))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("NHookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t0, _r410_t1;
                    r410_currentGlyph.include(r313_xn$referglyph$1aao("N." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r410_currentGlyph.ejectTagged("serifLB");
                    r410_currentGlyph.include(r313_PalatalHook.lExt(r313_SB, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpN." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                    var _r416_t0, _r416_t1;
                    r416_currentGlyph.include(r313_MarkSet.e());
                    r416_currentGlyph.include(r313_NShape(r313_DivFrame(1), r313_XH, r313_bodyType, r313_slabType, new r313_xn$NamedParameterPair$2Lrc9b("swDiag", r313_AdviceStroke(r313_crDiag))));
                    r416_currentGlyph.setBaseAnchor("trailing", r313_RightSB - r313_markHalfStroke, 0);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpRevN." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r423_currentGlyph) {
                    var _r423_t0, _r423_t1;
                    r423_currentGlyph.include(r313_MarkSet.e());
                    r423_currentGlyph.include(r313_RevNShape(r313_DivFrame(1), r313_XH, r313_bodyType, r313_slabType, new r313_xn$NamedParameterPair$2Lrc9b("swDiag", r313_AdviceStroke(r313_crDiag))));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("currency/nairaSign/base." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
                    var _r429_t0, _r429_t1;
                    r429_currentGlyph.include(r313_MarkSet.capital());
                    r429_currentGlyph.include(r313_NShape(r313_DivFrame(1), r313_CAP, r313_bodyType, r313_slabType, new r313_xn$NamedParameterPair$2Lrc9b("kSB", 1.25), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r313_AdviceStroke(3.5)), new r313_xn$NamedParameterPair$2Lrc9b("swDiag", r313_AdviceStroke(4))));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("N", "N");
        r313_xn$linkreducedvariant$5sIl8("N/sansSerif", "N", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpN", 628, new r313_xn$NamedParameterPair$2Lrc9b("follow", "N"));
        r313_xn$selectvariant$7Hrq("revN", new r313_xn$NamedParameterPair$2Lrc9b("follow", "N"));
        r313_xn$selectvariant$7Hrq("smcpRevN", 7438, new r313_xn$NamedParameterPair$2Lrc9b("follow", "N"));
        r313_alias("grek/Nu", 925, "N");
        r313_xn$aliasreducedvariant$1aao8("grek/Nu/sansSerif", "grek/Nu", "N/sansSerif", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("Eng.NSM", new r313_xn$NamedParameterPair$2Lrc9b("follow", "N"));
        r313_xn$selectvariant$7Hrq("NHookLeft", 413, new r313_xn$NamedParameterPair$2Lrc9b("follow", "N"));
        r313_xn$selectvariant$7Hrq("currency/nairaSign/base", new r313_xn$NamedParameterPair$2Lrc9b("follow", "N"));
        r313_xn$derivecomposites$7Hrq("NDescender", 42896, "N", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_CreateAccentedComposition("NAcute", 323, "N", "acuteAbove");
        r313_CreateAccentedComposition("NAcute.PLK", null, "N", "kreskaAbove");
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/I", 1048, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
            var _r443_t0, _r443_t1;
            r443_currentGlyph.include(r313_MarkSet.capital());
            r443_currentGlyph.include(r313_RevNShape(r313_DivFrame(1), r313_CAP, r313_xn$BODYCYRI$5sIl4, r313_xn$SLABCYRI$5sIl4));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("cyrl/ITail", null, "cyrl/I", r313_CyrTailDescender.rSideJut(r313_RightSB, 0));
        r313_CreateAccentedComposition("cyrl/IBreve", 1049, "cyrl/I", "breveAbove");
        r313_CreateAccentedComposition("cyrl/IGrave", 1037, "cyrl/I", "graveAbove");
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/I.BGR", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
            var _r448_t0, _r448_t1;
            r448_currentGlyph.include(r313_MarkSet.capital());
            r448_currentGlyph.include(r313_RevNShape(r313_DivFrame(1), r313_CAP, r313_xn$BODYSYMMETRIC$5sIl, r313_xn$SLABCYRI$5sIl4));
            return void 0;
        }));
        r313_CreateAccentedComposition("cyrl/IBreve.BGR", null, "cyrl/I.BGR", "breveAbove");
        r313_CreateAccentedComposition("cyrl/IGrave.BGR", null, "cyrl/I.BGR", "graveAbove");
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/i.upright", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
            var _r453_t0, _r453_t1;
            r453_currentGlyph.include(r313_MarkSet.e());
            r453_currentGlyph.include(r313_RevNShape(r313_DivFrame(1), r313_XH, r313_xn$BODYCYRI$5sIl4, r313_xn$SLABCYRI$5sIl4));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("cyrl/iTail.upright", null, "cyrl/i.upright", r313_CyrTailDescender.rSideJut(r313_RightSB, 0));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Tsan", 886, new r313_xn$Capture$2Lrc8.GlyphProc(function (r458_currentGlyph) {
            var _r458_t0, _r458_t1;
            r458_currentGlyph.include(r313_MarkSet.capital());
            r458_currentGlyph.include(r313_RevNShape(r313_DivFrame(1), r313_CAP, r313_xn$BODYSYMMETRIC$5sIl, r313_xn$SLABUPPERTSAN$5sIl6));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/tsan", 887, new r313_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
            var _r463_t0, _r463_t1;
            r463_currentGlyph.include(r313_MarkSet.e());
            r463_currentGlyph.include(r313_RevNShape(r313_DivFrame(1), r313_XH, r313_xn$BODYSYMMETRIC$5sIl, r313_xn$SLABLOWERTSAN$5sIl6));
            return void 0;
        }));
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t13.BBS;
        var r313_BBD = _r313_t13.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/N", 8469, new r313_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
            var _r469_t0, _r469_t1;
            r469_currentGlyph.include(r313_MarkSet.capital());
            r469_currentGlyph.include(r313_VBar.l(r313_SB, 0, r313_CAP, r313_BBS));
            r469_currentGlyph.include(r313_VBar.r(r313_RightSB, 0, r313_CAP, r313_BBS));
            r469_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, r313_SB, r313_RightSB), r313_union(r313_ExtLineCenter(r313_SB + r313_HSwToV(1 * r313_BBS), r313_CAP, r313_RightSB - r313_HSwToV(0.5 * r313_BBS), r1_mix(r313_CAP, 0, 0.8), r313_BBS), r313_ExtLineCenter(r313_SB + r313_HSwToV(0.5 * r313_BBS), r1_mix(r313_CAP, 0, 0.2), r313_RightSB - r313_HSwToV(1 * r313_BBS), 0, r313_BBS))));
            return void 0;
        }));
    });
    return void 0;
});


