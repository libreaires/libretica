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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Glottal-Stop", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_Hook = _r312_t1.Hook;
        var r312_SHook = _r312_t1.SHook;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_OverlayStroke = _r312_t1.OverlayStroke;
        var r312_LongJut = _r312_t1.LongJut;
        var r312_MidJutCenter = _r312_t1.MidJutCenter;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_SmoothAdjust = _r312_t1.SmoothAdjust;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_g2 = _r312_t2.g2;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_important = _r312_t2.important;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HSerif = _r312_t5.HSerif;
        var r312_HOverlayBar = _r312_t5.HOverlayBar;
        var r312_HookStart = _r312_t5.HookStart;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_HalfAdvance = _r312_t6.HalfAdvance;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r312_CreateTurnedLetter = _r312_t7.CreateTurnedLetter;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_LetterBarOverlay = _r312_t8.LetterBarOverlay;
        var r312_CurlyTail = _r312_t8.CurlyTail;
        var r312_PalatalHook = _r312_t8.PalatalHook;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "AdviceGlottalStopArchDepth": r312_AdviceGlottalStopArchDepth
            };
        });
        var r312_AdviceGlottalStopArchDepth = function (r319_top, r319_sign) {
            var _r319_t0, _r319_t1;
            return (r319_top - 0) * 0.24 + r312_Stroke * 0.385 + r319_sign * r312_TanSlope * r312_SmoothAdjust;
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("glottalStop", 660, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            r322_currentGlyph.include(r312_MarkSet.b());
            var r322_adb = r312_AdviceGlottalStopArchDepth(r312_Ascender, +1);
            r322_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_g4(r312_SB, r312_Ascender - r312_Hook), r312_HookStart(r312_Ascender), r312_g4(r312_RightSB, r312_Ascender - r322_adb), r312_alsoThru.g2(0.5, 0.5, r312_important), r312_flat(r312_Middle + r312_HSwToV(r312_HalfStroke), r1_mix(0, r312_XH, 0.3)), r312_curl(r312_Middle + r312_HSwToV(r312_HalfStroke), 0, r312_heading(r312_Downward))));
            if (r312_SLAB) r322_currentGlyph.include(r312_HSerif.mb(r312_Middle, 0, r312_MidJutCenter));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revGlottalStop", 661, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.include(r312_MarkSet.b());
            var r328_ada = r312_AdviceGlottalStopArchDepth(r312_Ascender, -1);
            r328_currentGlyph.include(r312_dispiro(r312_widths.lhs(), r312_g4(r312_RightSB, r312_Ascender - r312_Hook), r312_HookStart(r312_Ascender), r312_g4(r312_SB, r312_Ascender - r328_ada), r312_alsoThru.g2(0.5, 0.5, r312_important), r312_flat(r312_Middle - r312_HSwToV(r312_HalfStroke), r1_mix(0, r312_XH, 0.3)), r312_curl(r312_Middle - r312_HSwToV(r312_HalfStroke), 0, r312_heading(r312_Downward))));
            if (r312_SLAB) r328_currentGlyph.include(r312_HSerif.mb(r312_Middle, 0, r312_MidJutCenter));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("capGlottalStop", 577, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1;
            r334_currentGlyph.include(r312_MarkSet.capital());
            var r334_adb = r312_AdviceGlottalStopArchDepth(r312_CAP, +1);
            r334_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_g4(r312_SB, r312_CAP - r312_Hook), r312_HookStart(r312_CAP), r312_g4(r312_RightSB, r312_CAP - r334_adb), r312_alsoThru.g2(0.5, 0.5, r312_important), r312_flat(r312_Middle + r312_HSwToV(r312_HalfStroke), r1_mix(0, r312_XH, 0.3)), r312_curl(r312_Middle + r312_HSwToV(r312_HalfStroke), 0, r312_heading(r312_Downward))));
            if (r312_SLAB) r334_currentGlyph.include(r312_HSerif.mb(r312_Middle, 0, r312_MidJutCenter));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revCapGlottalStop", 42958, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            r340_currentGlyph.include(r312_MarkSet.capital());
            var r340_ada = r312_AdviceGlottalStopArchDepth(r312_CAP, -1);
            r340_currentGlyph.include(r312_dispiro(r312_widths.lhs(), r312_g4(r312_RightSB, r312_CAP - r312_Hook), r312_HookStart(r312_CAP), r312_g4(r312_SB, r312_CAP - r340_ada), r312_alsoThru.g2(0.5, 0.5, r312_important), r312_flat(r312_Middle - r312_HSwToV(r312_HalfStroke), r1_mix(0, r312_XH, 0.3)), r312_curl(r312_Middle - r312_HSwToV(r312_HalfStroke), 0, r312_heading(r312_Downward))));
            if (r312_SLAB) r340_currentGlyph.include(r312_HSerif.mb(r312_Middle, 0, r312_MidJutCenter));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("smallGlottalStop", 578, new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            r346_currentGlyph.include(r312_MarkSet.e());
            var r346_adb = r312_AdviceGlottalStopArchDepth(r312_XH, +1);
            r346_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_g4(r312_SB, r312_XH - r312_SHook), r312_HookStart(r312_XH), r312_g4(r312_RightSB, r312_XH - r346_adb), r312_alsoThru.g2(0.5, 0.5, r312_important), r312_flat(r312_Middle + r312_HSwToV(r312_HalfStroke), r1_mix(0, r312_XH, 0.15)), r312_curl(r312_Middle + r312_HSwToV(r312_HalfStroke), 0, r312_heading(r312_Downward))));
            if (r312_SLAB) r346_currentGlyph.include(r312_HSerif.mb(r312_Middle, 0, r312_MidJutCenter));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revSmallGlottalStop", 42959, new r312_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
            var _r352_t0, _r352_t1;
            r352_currentGlyph.include(r312_MarkSet.e());
            var r352_ada = r312_AdviceGlottalStopArchDepth(r312_XH, -1);
            r352_currentGlyph.include(r312_dispiro(r312_widths.lhs(), r312_g4(r312_RightSB, r312_XH - r312_SHook), r312_HookStart(r312_XH), r312_g4(r312_SB, r312_XH - r352_ada), r312_alsoThru.g2(0.5, 0.5, r312_important), r312_flat(r312_Middle - r312_HSwToV(r312_HalfStroke), r1_mix(0, r312_XH, 0.15)), r312_curl(r312_Middle - r312_HSwToV(r312_HalfStroke), 0, r312_heading(r312_Downward))));
            if (r312_SLAB) r352_currentGlyph.include(r312_HSerif.mb(r312_Middle, 0, r312_MidJutCenter));
            return void 0;
        }));
        r312_CreateTurnedLetter("invGlottalStop", 662, "revGlottalStop", r312_HalfAdvance, r312_Ascender / 2);
        r312_xn$GlyphSaveSink$2Lrc4b.save("invGlottalStopCurlyTail", 122638, new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
            var _r358_t0, _r358_t1;
            r358_currentGlyph.include(r312_MarkSet.b());
            var r358_ada = r312_AdviceGlottalStopArchDepth(r312_Ascender, -1);
            r358_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_flat(r312_Middle + r312_HSwToV(r312_HalfStroke), r312_Ascender, r312_heading(r312_Downward)), r312_curl(r312_Middle + r312_HSwToV(r312_HalfStroke), r312_Ascender - (r312_XH - 0) * 0.3), r312_alsoThru.g2(0.5, 0.5, r312_important), r312_g4(r312_RightSB, 0 + r358_ada), r312_CurlyTail.n(r312_AdviceStroke(3.5), 0, r312_SB, r312_RightSB, 0, 0 + r358_ada)));
            if (r312_SLAB) r358_currentGlyph.include(r312_HSerif.mt(r312_Middle, r312_Ascender, r312_MidJutCenter));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("glottalStopBar", 673, new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
            var _r364_t0, _r364_t1;
            r364_currentGlyph.include(r312_xn$referglyph$1aao("glottalStop"), r312_AS_BASE);
            r364_currentGlyph.include(r312_LetterBarOverlay.m.in(r312_Middle, r312_SLAB ? r312_Stroke : 0, r1_mix(0, r312_Ascender, 0.5), 0.5));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revGlottalStopBar", 674, new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
            var _r369_t0, _r369_t1;
            r369_currentGlyph.include(r312_xn$referglyph$1aao("revGlottalStop"), r312_AS_BASE);
            r369_currentGlyph.include(r312_LetterBarOverlay.m.in(r312_Middle, r312_SLAB ? r312_Stroke : 0, r1_mix(0, r312_Ascender, 0.5), 0.5));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revGlottalStopPalatalHook", 122682, new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
            var _r374_t0, _r374_t1;
            r374_currentGlyph.include(r312_xn$referglyph$1aao("revGlottalStop"), r312_AS_BASE);
            var r374_attach = {
                "x": r312_Middle + r312_HSwToV(r312_HalfStroke),
                "y": 0
            };
            r374_currentGlyph.include(r312_SLAB ? r312_PalatalHook.rSideJut(r374_attach.x, r374_attach.y, new r312_xn$NamedParameterPair$2Lrc9b("jut", r312_MidJutCenter)) : r312_PalatalHook.r(r374_attach.x + r312_PalatalHook.adviceGap(r312_Stroke), r374_attach.y, new r312_xn$NamedParameterPair$2Lrc9b("xLink", r374_attach.x)));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("glottalStopDblBar", 122710, new r312_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
            var _r381_t0, _r381_t1;
            r381_currentGlyph.include(r312_xn$referglyph$1aao("glottalStop"), r312_AS_BASE);
            var r381_gap = (r312_XH - 0) * 0.2;
            var r381_yBot = r312_SLAB ? r312_Stroke : 0;
            var r381_yTop = r1_mix(0, r312_Ascender, 0.5);
            var r381_yMid = r1_mix(r381_yBot, r381_yTop, 0.5);
            var r381_fine = Math.min(0.5 * r312_OverlayStroke, 0.625 * Math.abs(r381_yTop - (r381_yMid + r381_gap / 2)), 0.625 * Math.abs(r381_yBot - (r381_yMid - r381_gap / 2)), 0.375 * r381_gap);
            r381_currentGlyph.include(r312_HOverlayBar(r312_Middle - r312_LongJut * 0.75, r312_Middle + r312_LongJut * 0.75, r381_yMid + r381_gap / 2, 2 * r381_fine));
            r381_currentGlyph.include(r312_HOverlayBar(r312_Middle - r312_LongJut * 0.75, r312_Middle + r312_LongJut * 0.75, r381_yMid - r381_gap / 2, 2 * r381_fine));
            return void 0;
        }));
    });
    return void 0;
});


