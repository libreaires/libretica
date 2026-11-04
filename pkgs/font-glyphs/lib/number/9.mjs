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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Digits-Nine", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_Middle = _r312_t1.Middle;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_FlipAround = _r312_t5.FlipAround;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r312_OnumHeight = _r312_t7.OnumHeight;
        var r312_OnumMarks = _r312_t7.OnumMarks;
        var r312_ShiftDown = _r312_t7.ShiftDown;
        var r312_CodeLnum = _r312_t7.CodeLnum;
        var r312_CodeOnum = _r312_t7.CodeOnum;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Six"].resolve();
        var r312_ClosedContourSixShape = _r312_t8.ClosedContourSixShape;
        var r312_OpenContourSixShape = _r312_t8.OpenContourSixShape;
        var r312_StraightBarSixShape = _r312_t8.StraightBarSixShape;
        r312_xn$GlyphSaveSink$2Lrc4b.save("nine.lnum.closedContour", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
            var _r319_t0, _r319_t1;
            r319_currentGlyph.include(r312_MarkSet.capital());
            r319_currentGlyph.include(r312_ClosedContourSixShape(r312_CAP));
            r319_currentGlyph.include(r312_FlipAround(r312_Middle, r312_CAP / 2));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("nine.onum.closedContour", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
            var _r325_t0, _r325_t1;
            r325_currentGlyph.include(r312_OnumMarks.p());
            r325_currentGlyph.include(r312_ClosedContourSixShape(r312_CAP));
            r325_currentGlyph.include(r312_FlipAround(r312_Middle, r312_OnumHeight / 2));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("nine.lnum.openContour", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var _r331_t0, _r331_t1;
            r331_currentGlyph.include(r312_MarkSet.capital());
            r331_currentGlyph.include(r312_OpenContourSixShape(r312_CAP));
            r331_currentGlyph.include(r312_FlipAround(r312_Middle, r312_CAP / 2));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("nine.onum.openContour", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
            var _r337_t0, _r337_t1;
            r337_currentGlyph.include(r312_OnumMarks.p());
            r337_currentGlyph.include(r312_OpenContourSixShape(r312_CAP));
            r337_currentGlyph.include(r312_FlipAround(r312_Middle, r312_OnumHeight / 2));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("nine.lnum.straightBar", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
            var _r343_t0, _r343_t1;
            r343_currentGlyph.include(r312_MarkSet.capital());
            r343_currentGlyph.include(r312_StraightBarSixShape(r312_CAP));
            r343_currentGlyph.include(r312_FlipAround(r312_Middle, r312_CAP / 2));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("nine.onum.straightBar", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            r349_currentGlyph.include(r312_OnumMarks.p());
            r349_currentGlyph.include(r312_StraightBarSixShape(r312_CAP));
            r349_currentGlyph.include(r312_FlipAround(r312_Middle, r312_OnumHeight / 2));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("nine.lnum", r312_CodeLnum("9"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "nine"));
        r312_xn$selectvariant$7Hrq("nine.onum", r312_CodeOnum("9"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "nine"));
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r312_BBS = _r312_t9.BBS;
        var r312_BBD = _r312_t9.BBD;
        return r312_xn$GlyphSaveSink$2Lrc4b.save("mathbb/nine", 120801, new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
            var _r358_t0, _r358_t1;
            r358_currentGlyph.include(r312_MarkSet.capital());
            r358_currentGlyph.include(r312_StraightBarSixShape(r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_BBS), new r312_xn$NamedParameterPair$2Lrc9b("bbd", r312_BBD)));
            r358_currentGlyph.include(r312_FlipAround(r312_Middle, r312_CAP / 2));
            return void 0;
        }));
    });
    return void 0;
});


