"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/util/mask-bit";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_maskBit = _r1_t9.maskBit;
var r1_maskBits = _r1_t9.maskBits;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Long-S", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_serifStyle, r313_pShift, _r313_t15, _r313_t18, _r313_t19, _r313_t20, _r313_t21, _r313_tag22, _r313_t23, _r313_tag24;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_Hook = _r313_t1.Hook;
        var r313_HookX = _r313_t1.HookX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_OverlayPos = _r313_t1.OverlayPos;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_JBalance = _r313_t1.JBalance;
        var r313_RBalance2 = _r313_t1.RBalance2;
        var r313_FBalance = _r313_t1.FBalance;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t9.CurlyTail;
        var r313_FlatHookDepth = _r313_t9.FlatHookDepth;
        var r313_LetterBarOverlay = _r313_t9.LetterBarOverlay;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_PalatalHook = _r313_t10.PalatalHook;
        var r313_RetroflexHook = _r313_t10.RetroflexHook;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-F"].resolve();
        var r313_StdSmallFBarLeftPos = _r313_t11.StdSmallFBarLeftPos;
        var r313_StdSmallFBarLeftPos0 = _r313_t11.StdSmallFBarLeftPos0;
        var r313_ySmallFBarPos = _r313_t11.ySmallFBarPos;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-F"].resolve();
        var r313_SmallFDiagonalTail = _r313_t12.SmallFDiagonalTail;
        var r313_SLAB_SERIFLESS = 0;
        var r313_SLAB_BOTTOM = 1;
        var r313_SLAB_MIDDLE = 2;
        var r313_SLAB_MIDDLE_XH = 4;
        var r313_SLAB_MIDDLE_HALF_ASC = 8;
        var r313_SLAB_DOUBLE = r313_SLAB_BOTTOM + r313_SLAB_MIDDLE;
        var r313_SLAB_DOUBLE_XH = r313_SLAB_BOTTOM + r313_SLAB_MIDDLE_XH;
        var r313_SLAB_DOUBLE_HALF_ASC = r313_SLAB_BOTTOM + r313_SLAB_MIDDLE_HALF_ASC;
        var r313_LongSUpperHalf = function (r322_sign, r322_x, r322_top, r322_bottom, r322_hookX, r322_hookY, r322__sw) {
            var _r322_t0, _r322_t1;
            var r322_hd = r313_FlatHookDepth(r313_DivFrame(1));
            var r322_sw = r1_fallback(r322__sw, r313_Stroke);
            return r313_dispiro(r313_widths.center(r322_sw), r313_flat(r322_x + r322_sign * r322_hookX, r322_top - r322_sw / 2), r313_curl(r322_x + r322_sign * Math.min(r322_hd.x - r313_HSwToV(0.25 * r322_sw), r322_hookX - r313_TINY), r322_top - r322_sw / 2), r313_archv.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r322_x, r322_top - r322_sw / 2 - Math.min(r322_hd.y, r322_hookY)), r313_curl(r322_x, r322_bottom, r313_heading(r313_Downward)));
        };
        var r313_LongSLowerHalf = function (r323_sign, r323_x, r323_top, r323_bottom, r323_hookX, r323_hookY, r323__sw) {
            var _r323_t0, _r323_t1;
            var r323_hd = r313_FlatHookDepth(r313_DivFrame(1));
            var r323_sw = r1_fallback(r323__sw, r313_Stroke);
            return r313_dispiro(r313_widths.center(r323_sw), r313_flat(r323_x - r323_sign * r323_hookX, r323_bottom + r323_sw / 2), r313_curl(r323_x - r323_sign * Math.min(r323_hd.x - r313_HSwToV(0.25 * r323_sw), r323_hookX - r313_TINY), r323_bottom + r323_sw / 2), r313_archv.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r323_x, r323_bottom + r323_sw / 2 + Math.min(r323_hd.y, r323_hookY)), r313_curl(r323_x, r323_top, r313_heading(r313_Upward)));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r325_t0, _r325_t1;
            return {
                "LongSShape": r313_LongSShape
            };
        });
        var r313_LongSShape = function (r326_top, r326_bottom, r326_hookx, r326_hooky, r326_fine) {
            var _r326_t0, _r326_t1;
            return r313_union(r313_LongSUpperHalf(+1, r313_Middle, r326_top, r1_mix(r326_top, r326_bottom, 0.5), r326_hookx, r326_hooky, r326_fine), r313_LongSLowerHalf(+1, r313_Middle, r1_mix(r326_top, r326_bottom, 0.5), r326_bottom, r326_hookx, r326_hooky, r326_fine));
        };
        var r313_StandardSerifs = function (r327_m0, r327_fSlab, r327__kSerif) {
            var _r327_t0, _r327_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                var _r329_t0, _r329_t1;
                var r329_m = r327_m0 + r313_HSwToV(r313_HalfStroke);
                var r329_serifLength = Math.max(r313_Jut, r1_mix(r313_HSwToV(r313_HalfStroke), r313_MidJutCenter, r1_fallback(r327__kSerif, 1)));
                var r329_xSerifPos = r1_mix(r329_m, r313_Middle, r329_serifLength / r313_Width);
                if (r1_maskBits(r327_fSlab, r313_SLAB_BOTTOM)) r329_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.mb(r329_xSerifPos, 0, r329_serifLength)));
                if (r1_maskBits(r327_fSlab, r313_SLAB_MIDDLE)) r329_currentGlyph.include(r313_tagged("serifLM", r313_intersection(r313_MaskLeft(r329_m + r313_TINY), r313_HSerif.mt(r329_xSerifPos, r313_ySmallFBarPos, r329_serifLength))));
                if (r1_maskBits(r327_fSlab, r313_SLAB_MIDDLE_XH)) r329_currentGlyph.include(r313_tagged("serifLM", r313_intersection(r313_MaskLeft(r329_m + r313_TINY), r313_HSerif.mt(r329_xSerifPos, r313_XH, r329_serifLength))));
                if (r1_maskBits(r327_fSlab, r313_SLAB_MIDDLE_HALF_ASC)) r329_currentGlyph.include(r313_tagged("serifLM", r313_intersection(r313_MaskLeft(r329_m + r313_TINY), r313_HSerif.mt(r329_xSerifPos, r1_mix(0, r313_Ascender, 0.5) + r313_HalfStroke, r329_serifLength))));
                return void 0;
            });
        };
        var r313_LongSBentHookBase = function (r334_y0, r334_m, r334_fSlab, r334__kSerif) {
            var _r334_t0, _r334_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                var _r336_t0, _r336_t1;
                var r336_xTerminal = r313_RightSB + r313_RBalance2 + Math.max(0, r334_m - r313_StdSmallFBarLeftPos0());
                r336_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4(r336_xTerminal, r313_Ascender - r313_Hook), r313_HookStart(r313_Ascender), r313_flat(r334_m, r313_Ascender - r313_ArchDepthA), r313_curl(r334_m, 0, r313_heading(r313_Downward))));
                r336_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r334_m, r336_xTerminal));
                r336_currentGlyph.setBaseAnchor("overlay", r334_m + r313_HSwToV(0.65 * r313_Stroke), r1_mix(0, r313_Ascender, r313_OverlayPos));
                r336_currentGlyph.include(r313_StandardSerifs(r334_m, r334_fSlab, r334__kSerif));
                return void 0;
            });
        };
        var r313_LongSBentHookOverlayBar = function (r341_m) {
            var _r341_t0, _r341_t1;
            return r313_LetterBarOverlay.m.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r341_m + r313_HSwToV(r313_HalfStroke)), new r313_xn$NamedParameterPair$2Lrc9b("bot", r1_mix(0, r313_XH, 0.75) - r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_Ascender - r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("py", r313_OverlayPos));
        };
        var r313_LongSSymmetricOverlayBar = function (r346_m) {
            var _r346_t0, _r346_t1;
            return r313_LetterBarOverlay.m.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r346_m), new r313_xn$NamedParameterPair$2Lrc9b("bot", r1_mix(0, r313_XH, 0.75) - r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_Ascender - r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("py", r313_OverlayPos));
        };
        var r313_LongSFlatHookNoTailShape = function (r351_m, r351_yBot, r351_fSlab, r351__kSerif) {
            var _r351_t0, _r351_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                var _r353_t0, _r353_t1;
                var r353_hd = r313_FlatHookDepth(r313_DivFrame(1));
                r353_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flat(r313_RightSB, r313_Ascender), r313_curl(Math.min(r313_RightSB - r313_TINY, r351_m + r353_hd.x), r313_Ascender), r313_archv(), r313_flat(r351_m, r313_Ascender - r353_hd.y), r313_curl(r351_m, r351_yBot, r313_heading(r313_Downward))));
                r353_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r351_m, r313_RightSB));
                r353_currentGlyph.setBaseAnchor("overlay", r351_m + r313_HSwToV(0.65 * r313_Stroke), r1_mix(0, r313_Ascender, r313_OverlayPos));
                r353_currentGlyph.include(r313_StandardSerifs(r351_m, r351_fSlab, r351__kSerif));
                return void 0;
            });
        };
        var r313_SerifSuffixes = {
            "Serifless": [r313_SLAB_SERIFLESS, 1],
            "MiddleSerifed": [r313_SLAB_MIDDLE, 0.5],
            "MiddleSerifedXH": [r313_SLAB_MIDDLE_XH, 0.5],
            "MiddleSerifedHalfAscender": [r313_SLAB_MIDDLE_HALF_ASC, 0.5],
            "BottomSerifed": [r313_SLAB_BOTTOM, 0.5],
            "DoubleSerifed": [r313_SLAB_DOUBLE, 0.5],
            "DoubleSerifedXH": [r313_SLAB_DOUBLE_XH, 0.5],
            "DoubleSerifedHalfAscender": [r313_SLAB_DOUBLE_HALF_ASC, 0.5]
        };
        var _r313_t13 = Object.entries(r313_SerifSuffixes)[Symbol.iterator]();
        var _r313_t14 = void 0;
        while (!(_r313_t14 = _r313_t13.next()).done) {
            _r313_t15 = _r313_t14.value;
            r313_suffix = _r313_t15[0];
            r313_serifStyle = _r313_t15[1][0];
            r313_pShift = _r313_t15[1][1];
            _r313_t15[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.bentHook" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                    var _r363_t0, _r363_t1;
                    r363_currentGlyph.include(r313_MarkSet.b());
                    var r363_m = r313_Middle - r313_JBalance - r313_HSwToV(r313_HalfStroke);
                    r363_currentGlyph.include(r313_LongSBentHookBase(0, r363_m, r313_serifStyle));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.bentHook" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r363_currentGlyph, r313_LongSBentHookOverlayBar(r363_m)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHook" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                    var _r370_t0, _r370_t1;
                    r370_currentGlyph.include(r313_MarkSet.b());
                    var r370_m = r313_Middle - r313_pShift * (r313_JBalance + r313_HSwToV(r313_HalfStroke));
                    r370_currentGlyph.include(r313_LongSFlatHookNoTailShape(r370_m, 0, r313_serifStyle));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.flatHook" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r370_currentGlyph, r313_LongSBentHookOverlayBar(r370_m)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHookExt" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                    var _r377_t0, _r377_t1;
                    r377_currentGlyph.include(r313_xn$referglyph$1aao("longs.flatHook" + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r377_currentGlyph.include(r313_HBar.t(r313_RightSB, r1_mix(0, r313_Width, 2), r313_Ascender));
                    return void 0;
                }));
            })();
        }
        var r313_SerifSuffixesDescending = {
            "Serifless": [r313_SLAB_SERIFLESS, 1],
            "MiddleSerifed": [r313_SLAB_MIDDLE, 0.5],
            "MiddleSerifedXH": [r313_SLAB_MIDDLE_XH, 0.5],
            "MiddleSerifedHalfAscender": [r313_SLAB_MIDDLE_HALF_ASC, 0.5]
        };
        var _r313_t16 = Object.entries(r313_SerifSuffixesDescending)[Symbol.iterator]();
        var _r313_t17 = void 0;
        while (!(_r313_t17 = _r313_t16.next()).done) {
            _r313_t18 = _r313_t17.value;
            r313_suffix = _r313_t18[0];
            r313_serifStyle = _r313_t18[1][0];
            r313_pShift = _r313_t18[1][1];
            _r313_t18[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHookDescending" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                    var _r385_t0, _r385_t1;
                    r385_currentGlyph.include(r313_MarkSet.bp());
                    var r385_m = r313_Middle - r313_pShift * (r313_JBalance + r313_HSwToV(r313_HalfStroke));
                    r385_currentGlyph.include(r313_LongSFlatHookNoTailShape(r385_m, r313_Descender, false));
                    r385_currentGlyph.include(r313_StandardSerifs(r385_m, r313_serifStyle));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.flatHookDescending" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r385_currentGlyph, r313_LongSBentHookOverlayBar(r385_m)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHookExtDescending" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                    var _r393_t0, _r393_t1;
                    r393_currentGlyph.include(r313_xn$referglyph$1aao("longs.flatHookDescending" + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r393_currentGlyph.include(r313_HBar.t(r313_RightSB, r1_mix(0, r313_Width, 2), r313_Ascender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHookTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
                    var _r398_t0, _r398_t1;
                    r398_currentGlyph.include(r313_MarkSet.bp());
                    r398_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                    r398_currentGlyph.include(r313_LongSShape(r313_Ascender, r313_Descender, r313_HookX + r313_QuarterStroke, r313_Hook));
                    r398_currentGlyph.include(r313_StandardSerifs(r313_Middle - r313_HSwToV(r313_HalfStroke), r313_serifStyle));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.flatHookTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r398_currentGlyph, r313_LongSSymmetricOverlayBar(r313_Middle)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHookExtTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                    var _r406_t0, _r406_t1;
                    r406_currentGlyph.include(r313_xn$referglyph$1aao("longs.flatHookTailed" + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r406_currentGlyph.include(r313_HBar.t(r313_Middle + r313_HookX + (0.25 - r313_TanSlope) * r313_Stroke, r1_mix(0, r313_Width, 2), r313_Ascender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHookDiagonalTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
                    var _r411_t0, _r411_t1;
                    r411_currentGlyph.include(r313_MarkSet.bp());
                    r411_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                    r411_currentGlyph.include(r313_union(r313_intersection(r313_MaskAbove(0), r313_LongSShape(r313_Ascender, r313_Descender, r313_HookX + r313_QuarterStroke, r313_Hook)), r313_SmallFDiagonalTail(r313_DivFrame(1), r313_Middle - r313_HSwToV(r313_HalfStroke)), r313_StandardSerifs(r313_Middle - r313_HSwToV(r313_HalfStroke), r313_serifStyle)));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.flatHookDiagonalTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r411_currentGlyph, r313_LongSSymmetricOverlayBar(r313_Middle)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.flatHookExtDiagonalTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                    var _r418_t0, _r418_t1;
                    r418_currentGlyph.include(r313_xn$referglyph$1aao("longs.flatHookDiagonalTailed" + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r418_currentGlyph.include(r313_HBar.t(r313_Middle + r313_HookX + (0.25 - r313_TanSlope) * r313_Stroke, r1_mix(0, r313_Width, 2), r313_Ascender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.bentHookDescending" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r423_currentGlyph) {
                    var _r423_t0, _r423_t1;
                    r423_currentGlyph.include(r313_MarkSet.bp());
                    var r423_m = r313_StdSmallFBarLeftPos(true);
                    r423_currentGlyph.include(r313_LongSBentHookBase(r313_XH / 2, r423_m, r313_SLAB_SERIFLESS));
                    r423_currentGlyph.include(r313_VBar.l(r423_m, r313_Descender, 0));
                    r423_currentGlyph.include(r313_StandardSerifs(r423_m, r313_serifStyle));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.bentHookDescending" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r423_currentGlyph, r313_LongSBentHookOverlayBar(r423_m)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("longs.bentHookTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r432_currentGlyph) {
                    var _r432_t0, _r432_t1;
                    r432_currentGlyph.include(r313_MarkSet.bp());
                    var r432_m = r313_StdSmallFBarLeftPos(true);
                    r432_currentGlyph.include(r313_LongSBentHookBase(r313_XH / 2, r432_m, r313_SLAB_SERIFLESS));
                    r432_currentGlyph.include(r313_LongSLowerHalf(+1, r432_m + r313_HSwToV(r313_HalfStroke), r313_XH / 2 - r313_O, r313_Descender, r313_HookX + r313_QuarterStroke, r313_Hook, r313_Stroke));
                    r432_currentGlyph.include(r313_StandardSerifs(r432_m, r313_serifStyle));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.bentHookTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r432_currentGlyph, r313_LongSBentHookOverlayBar(r432_m)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("longs.bentHookDiagonalTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r441_currentGlyph) {
                    var _r441_t0, _r441_t1;
                    r441_currentGlyph.include(r313_MarkSet.bp());
                    var r441_m = r313_StdSmallFBarLeftPos(true);
                    r441_currentGlyph.include(r313_LongSBentHookBase(r313_XH / 2, r441_m, r313_SLAB_SERIFLESS));
                    r441_currentGlyph.include(r313_SmallFDiagonalTail(r313_DivFrame(1), r441_m));
                    r441_currentGlyph.include(r313_StandardSerifs(r441_m, r313_serifStyle));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("longsBar.bentHookDiagonalTailed" + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r441_currentGlyph, r313_LongSBentHookOverlayBar(r441_m)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("longs", 383);
        r313_xn$selectvariant$7Hrq("longs/compLigLeft", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "longs"));
        r313_xn$selectvariant$7Hrq("longsBar", 7837);
        r313_alias("esh", 643, "longs.flatHookTailedSerifless");
        r313_xn$GlyphSaveSink$2Lrc4b.save("eshBaseline", 43853, new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
            var _r451_t0, _r451_t1;
            r451_currentGlyph.include(r313_MarkSet.b());
            r451_currentGlyph.include(r313_LongSShape(r313_Ascender, 0, r313_HookX + r313_QuarterStroke, r313_Hook));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("eshRTail", 7576, "eshBaseline", r313_RetroflexHook.l(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_Middle - (r313_HookX + r313_QuarterStroke)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke)));
        r313_xn$derivecomposites$7Hrq("eshRTail/phoneticRight", null, "esh", r313_RetroflexHook.l(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_Middle - (r313_HookX + r313_QuarterStroke)), new r313_xn$NamedParameterPair$2Lrc9b("y", r313_Descender), new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke)));
        r313_xn$derivecomposites$7Hrq("eshPalatalHook", 7563, "esh", r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r313_Middle), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke(3)), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r313_Middle + r313_HSwToV(r313_HalfStroke))))));
        r313_xn$GlyphSaveSink$2Lrc4b.save("eshCurlyTail", 646, new r313_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
            var _r467_t0, _r467_t1;
            r467_currentGlyph.include(r313_MarkSet.bp());
            var r467_fine = r313_AdviceStroke(3.5);
            var r467_m = r313_Middle - r313_FBalance;
            r467_currentGlyph.include(r313_union(r313_LongSUpperHalf(+1, r467_m, r313_Ascender, 0, r313_HookX + r313_QuarterStroke, r313_Hook), r313_dispiro(r313_widths.rhs(), r313_flat(r467_m + r313_HSwToV(r313_HalfStroke), -r313_O, r313_heading(r313_Downward)), r313_curl(r467_m + r313_HSwToV(r313_HalfStroke), r313_Descender + r313_LongVJut), r313_CurlyTail.n(r467_fine, r313_Descender, r467_m - r313_HSwToV(r313_HalfStroke) - r313_LongJut, new r313_xn$NamedParameterPair$2Lrc9b("x2", r313_RightSB + r313_HSwToV(0.5 * r467_fine)), new r313_xn$NamedParameterPair$2Lrc9b("y2", r313_Descender + r467_fine / 2)))));
            return void 0;
        }));
        r313_CreateAccentedComposition("eshDblBar", 122635, "esh", "dblBarOver");
        r313_CreateAccentedComposition("eshDblBarCurlyTail", 122636, "eshCurlyTail", "dblBarOver");
        return r313_xn$GlyphSaveSink$2Lrc4b.save("reveshLoop", 426, new r313_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
            var _r474_t0, _r474_t1;
            r474_currentGlyph.include(r313_MarkSet.bp());
            var r474_fine = r313_AdviceStroke(4);
            r474_currentGlyph.include(r313_dispiro(r313_widths.center(r474_fine), r313_g4.down.start(r313_Middle, r313_Ascender - r474_fine * 1.5, r313_heading(r313_Downward)), r313_arcvh(), r313_g4(r313_Middle - r474_fine * 1, r313_Ascender - r474_fine * 2.5, r313_heading(r313_Leftward)), r313_archv(), r313_g4(r313_Middle - r474_fine * 2, r313_Ascender - r474_fine * 1.5, r313_heading(r313_Upward)), r313_arcvh(), r313_g4(r313_Middle - r474_fine * 1, r313_Ascender - r474_fine * 0.5, r313_heading(r313_Rightward)), r313_archv(), r313_flat(r313_Middle, r313_Ascender - r474_fine * 1.5, r313_widths.center.heading(r313_Stroke, r313_Downward)), r313_curl(r313_Middle, r313_Descender + r313_Hook, r313_heading(r313_Downward)), r313_arcvh(), r313_straight.right.end(r313_Middle + r313_HookX, r313_Descender + r313_O + r313_HalfStroke)));
            return void 0;
        }));
    });
    return void 0;
});


