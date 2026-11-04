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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Astronomy", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9, _r312_t10, _r312_tag11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_PictTop = _r312_t1.PictTop;
        var r312_PictBot = _r312_t1.PictBot;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_end = _r312_t2.end;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_OShape = _r312_t5.OShape;
        var r312_OShapeOutline = _r312_t5.OShapeOutline;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_Arch = _r312_t5.Arch;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_turned = _r312_t6.turned;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
        var r312_ArrowShape = _r312_t7.ArrowShape;
        (function () {
            var r317_oBot = r312_PictTop - (r312_RightSB - r312_SB);
            r312_xn$GlyphSaveSink$2Lrc4b.save("neuter", 9906, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                r320_currentGlyph.include(r312_OShape(r312_PictTop, r317_oBot, r312_SB, r312_RightSB, r312_OperatorStroke));
                r320_currentGlyph.include(r312_VBar.m(r312_Middle, r312_PictBot, r317_oBot, r312_OperatorStroke));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("venus", 9792, new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1;
                r325_currentGlyph.include(r312_xn$referglyph$1aao("neuter"));
                r325_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r1_mix(r312_PictBot, r317_oBot + r312_OperatorStroke, 0.5), r312_OperatorStroke));
                return void 0;
            }));
        })();
        r312_turned("earth", 9793, "venus", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("mercury", 9791, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            var r330_ext = (r312_RightSB - r312_SB) / 2;
            r330_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(0, r312_O - r330_ext / 2 + r312_OperatorStroke / 2), r312_xn$referglyph$1aao("venus")));
            var r330_oTop = r312_PictTop - r330_ext / 2 + r312_OperatorStroke / 2;
            r330_currentGlyph.include(r312_dispiro(r312_widths.lhs(r312_OperatorStroke), r312_g4.down.start(r312_SB + r312_OX, r330_oTop - r312_OperatorStroke + r330_ext - r312_O, r312_heading(r312_Downward)), r312_arcvh(), r312_g4.right.mid(r312_Arch["adjust-x"].bot(r312_Middle, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_OperatorStroke)), r330_oTop - r312_OperatorStroke, r312_heading(r312_Rightward)), r312_archv(), r312_g4.up.end(r312_RightSB - r312_OX, r330_oTop - r312_OperatorStroke + r330_ext - r312_O, r312_heading(r312_Upward))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("mars", 9794, new r312_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            var r336_oTop = r312_PictBot + (r312_RightSB - r312_SB);
            var r336_shift = -0.5 * (r312_SB - 0);
            var r336_arrowSize = 0.4 * (r312_RightSB - r312_SB);
            r336_currentGlyph.include(r312_OShape(r336_oTop, r312_PictBot, r312_SB + r336_shift, r312_RightSB + r336_shift, r312_OperatorStroke));
            r336_currentGlyph.include(r312_difference(r312_ArrowShape(r312_Middle + r336_shift, r1_mix(r336_oTop, r312_PictBot, 0.5), r312_RightSB - r336_shift - 0.5 * r336_arrowSize, r312_PictTop, r336_arrowSize), r312_OShapeOutline.NoOvershoot(r336_oTop, r312_PictBot, r312_SB + r336_shift, r312_RightSB + r336_shift)));
            return void 0;
        }));
    });
    return void 0;
});


