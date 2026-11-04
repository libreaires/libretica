"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Upper-Omega", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_CThin = _r313_t1.CThin;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
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
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var r313_CreateTurnedLetter = _r313_t7.CreateTurnedLetter;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_SetGrekUpperTonos = _r313_t8.SetGrekUpperTonos;
        var r313_UpperOmegaShape = function (r318_top, r318_extend, r318_ada, r318_adb) {
            var _r318_t0, _r318_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_fine = r313_Stroke * r313_CThin;
                var r320_x1 = r1_mix(r313_SB, r313_RightSB, 0.4);
                var r320_x2 = r313_Width - r320_x1;
                var r320_yattach = r318_top * r318_extend + r313_Stroke;
                r320_currentGlyph.include(r313_dispiro(r313_g4(r320_x1, r320_yattach - r320_fine, r313_widths.rhs.heading(r320_fine, r313_Leftward)), r313_archv(), r313_flatside.lu(r313_SB, r320_yattach - r313_Stroke, r318_top, r318_ada, r318_adb, 0, r313_widths.rhs(r313_Stroke)), r313_Arch.rhs(r318_top), r313_flatside.rd(r313_RightSB, r320_yattach - r313_Stroke, r318_top, r318_ada, r318_adb, 0), r313_arcvh(), r313_g4(r320_x2, r320_yattach - r320_fine, r313_widths.heading(0, r320_fine, r313_Leftward))));
                r320_currentGlyph.include(r313_VBar.r(r320_x1, 0, r320_yattach, r320_fine));
                r320_currentGlyph.include(r313_HBar.m(r313_SB, r320_x1, r313_HalfStroke));
                r320_currentGlyph.include(r313_VBar.l(r320_x2, 0, r320_yattach, r320_fine));
                r320_currentGlyph.include(r313_HBar.m(r320_x2, r313_RightSB, r313_HalfStroke));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Omega", 937, new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.include(r313_MarkSet.capital());
            r328_currentGlyph.include(r313_SetGrekUpperTonos(0));
            r328_currentGlyph.include(r313_UpperOmegaShape(r313_CAP, 0.08, r313_ArchDepthA, r313_ArchDepthB));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/smcpOmega", 43877, new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1;
            r334_currentGlyph.include(r313_MarkSet.e());
            r334_currentGlyph.include(r313_UpperOmegaShape(r313_XH, 0.08, r313_SmallArchDepthA, r313_SmallArchDepthB));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("latn/Upsilon", 433, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            r339_currentGlyph.include(r313_MarkSet.capital());
            r339_currentGlyph.include(r313_UpperOmegaShape(r313_CAP, 0.08, r313_ArchDepthA, r313_ArchDepthB));
            r339_currentGlyph.include(r313_FlipAround(r313_Middle, r313_CAP / 2));
            return void 0;
        }));
        r313_CreateTurnedLetter("latn/upsilon", 650, "grek/smcpOmega", r313_HalfAdvance, r313_XH / 2);
        return r313_CreateAccentedComposition("latn/upsilonBar", 7551, "latn/upsilon", "hStrike");
    });
    return void 0;
});


