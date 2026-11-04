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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Other", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_TackTop = _r312_t1.TackTop;
        var r312_TackBot = _r312_t1.TackBot;
        var r312_Downward = _r312_t1.Downward;
        var r312_OverlayStroke = _r312_t1.OverlayStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_PeriodRadius = _r312_t1.PeriodRadius;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_WithDotVariants = _r312_t5.WithDotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_alias = _r312_t6.alias;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.NotGlyphFn.resolve();
        var r312_NotGlyphSw = _r312_t7.NotGlyphSw;
        r312_alias("mathBullet", 8729, "bullet");
        r312_alias("whiteDiamondOperator", 8900, "whiteDiamondOperatorImpl.NWID");
        r312_alias("mathstar", 8902, "blackStar.NWID");
        r312_xn$GlyphSaveSink$2Lrc4b.save("notdivides", 8740, new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            r318_currentGlyph.include(r312_xn$referglyph$1aao("stile"));
            r318_currentGlyph.include(r312_dispiro(r312_widths.center(r312_NotGlyphSw), r312_flat(r1_mix(r312_SB, r312_RightSB, 0.1), r1_mix(r312_SymbolMid, r312_TackBot, 0.5)), r312_curl(r1_mix(r312_SB, r312_RightSB, 0.9), r1_mix(r312_SymbolMid, r312_TackTop, 0.5))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("notparallel", 8742, new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            r323_currentGlyph.include(r312_xn$referglyph$1aao("parallel"));
            r323_currentGlyph.include(r312_dispiro(r312_widths.center(r312_NotGlyphSw), r312_flat(r312_SB, r1_mix(r312_SymbolMid, r312_TackBot, 0.5)), r312_curl(r312_RightSB, r1_mix(r312_SymbolMid, r312_TackTop, 0.5))));
            return void 0;
        }));
        r312_WithDotVariants("barWithDot", 9087, function (r326_DrawAt, r326_kr, r326_ov) {
            var _r326_t0, _r326_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var _r328_t0, _r328_t1;
                r328_currentGlyph.include(r312_xn$referglyph$1aao("stile"));
                r328_currentGlyph.include(r326_DrawAt(r312_Middle, r312_SymbolMid, r312_PeriodRadius * r326_kr - r326_ov));
                return void 0;
            });
        });
        r312_xn$GlyphSaveSink$2Lrc4b.save("barStroke", 10186, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            r333_currentGlyph.include(r312_xn$referglyph$1aao("stile"));
            r333_currentGlyph.include(r312_HBar.m(r1_mix(r312_SB, r312_RightSB, 0.1), r1_mix(r312_SB, r312_RightSB, 0.9), r312_SymbolMid, r312_OverlayStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revnotdivides", 10990, new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
            var _r338_t0, _r338_t1;
            r338_currentGlyph.include(r312_xn$referglyph$1aao("stile"));
            r338_currentGlyph.include(r312_dispiro(r312_widths.center(r312_NotGlyphSw), r312_flat(r1_mix(r312_SB, r312_RightSB, 0.1), r1_mix(r312_SymbolMid, r312_TackTop, 0.5)), r312_curl(r1_mix(r312_SB, r312_RightSB, 0.9), r1_mix(r312_SymbolMid, r312_TackBot, 0.5))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleBarStroke", 10994, new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
            var _r343_t0, _r343_t1;
            r343_currentGlyph.include(r312_xn$referglyph$1aao("parallel"));
            r343_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_OverlayStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleBarTilde", 10995, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
            var _r348_t0, _r348_t1;
            r348_currentGlyph.include(r312_xn$referglyph$1aao("parallel"), true, true);
            r348_currentGlyph.include(r312_xn$referglyph$1aao("sym"));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("tripleBarStroke", 10997, new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
            var _r353_t0, _r353_t1;
            r353_currentGlyph.include(r312_xn$referglyph$1aao("interleave"));
            r353_currentGlyph.include(r312_HBar.m(r1_mix(r312_SB, 0, 0.5), r1_mix(r312_RightSB, r312_Width, 0.5), r312_SymbolMid, r312_OverlayStroke));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("sqrt", 8730, new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
            var _r358_t0, _r358_t1;
            r358_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_flat(r312_SB, r1_mix(r312_ParenBot, r312_ParenTop, 0.45)), r312_curl(r312_Middle, r312_ParenBot, r312_heading(r312_Downward))));
            r358_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_flat(r312_Width, r312_ParenTop), r312_curl(r312_Middle, r312_ParenBot, r312_heading(r312_Downward))));
            return void 0;
        }));
    });
    return void 0;
});


