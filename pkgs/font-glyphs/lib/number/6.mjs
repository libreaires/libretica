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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Digits-Six", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_archv = _r312_t2.archv;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_DiagCorDs = _r312_t5.DiagCorDs;
        var r312_HBar = _r312_t5.HBar;
        var r312_HookEnd = _r312_t5.HookEnd;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_alias = _r312_t6.alias;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r312_CodeLnum = _r312_t7.CodeLnum;
        var r312_CodeOnum = _r312_t7.CodeOnum;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r317_t0, _r317_t1;
            return {
                "OpenContourSixShape": r312_OpenContourSixShape
            };
        });
        var r312_OpenContourSixShape = function (r318_charTop) {
            var _r318_t0, _r318_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_oTop = r318_charTop * 0.55 + r312_HalfStroke;
                var r320_ymiddlea = (r320_oTop - r312_SmallArchDepthA + r312_SmallArchDepthB) / 2;
                var r320_ymiddleb = (r320_oTop - r312_SmallArchDepthB + r312_SmallArchDepthA) / 2;
                r320_currentGlyph.include(r312_dispiro(r312_widths.rhs(r312_ShoulderFine - r312_TINY), r312_g4(r312_SB + r312_OX + r312_HSwToV(r312_Stroke - r312_ShoulderFine), r320_ymiddlea), r312_Arch.rhs(r320_oTop, new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r312_ShoulderFine - r312_TINY)), r312_g4.down.mid(r312_RightSB - r312_OX, r320_ymiddleb), r312_Arch.rhs(0), r312_g4.up.mid(r312_SB + r312_OX, r320_ymiddlea), r312_quadControls(0, 0.85), r312_g4(r1_mix(r312_SB, r312_RightSB, 0.85) - r312_HSwToV(r312_QuarterStroke), r318_charTop - r312_O, r312_widths.rhs())));
                return void 0;
            });
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r324_t0, _r324_t1;
            return {
                "ClosedContourSixShape": r312_ClosedContourSixShape
            };
        });
        var r312_ClosedContourSixShape = function (r325_top) {
            var _r325_t0, _r325_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var _r327_t0, _r327_t1;
                var r327_oTop = Math.max(2 * r312_SmallArchDepth + r312_TINY, r325_top * 0.55 + r312_HalfStroke);
                r327_currentGlyph.include(r312_dispiro(r312_widths.rhs(r312_ShoulderFine), r312_straight.up.start(r312_SB + r312_OX + r312_HSwToV(r312_Stroke - r312_ShoulderFine), r327_oTop - r312_SmallArchDepthA), r312_Arch.rhs(r327_oTop, new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r312_ShoulderFine)), r312_flat(r312_RightSB - r312_OX, r327_oTop - r312_SmallArchDepthB), r312_curl(r312_RightSB - r312_OX, r312_SmallArchDepthA), r312_Arch.rhs(0), r312_flat(r312_SB + r312_OX, r312_SmallArchDepthB), r312_curl(r312_SB + r312_OX, r325_top - r312_SmallArchDepthA), r312_HookEnd(r325_top), r312_g4(r312_RightSB - r312_OX, r325_top - r312_Hook)));
                return void 0;
            });
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r331_t0, _r331_t1;
            return {
                "StraightBarSixShape": r312_StraightBarSixShape
            };
        });
        var r312_StraightBarSixShape = function () {
            var _r332_t5;
            var _r332_t6 = arguments;
            var r332_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r332_t6, 0);
            var _r332_t0 = [];
            var _r332_t1 = 0;
            while (_r332_t1 < r332_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r332_xn$flexarguments$2Lrc7uIe5[_r332_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r332_t0.push(r332_xn$flexarguments$2Lrc7uIe5[_r332_t1]);
                _r332_t1 = _r332_t1 + 1;
            }
            var _r332_t2 = r332_xn$flexarguments$2Lrc7uIe5;
            var _r332_t3 = _r332_t2.length;
            var _r332_t4 = 0;
            while (_r332_t4 < _r332_t3) {
                _r332_t1 = _r332_t2[_r332_t4];
                if (_r332_t1 && _r332_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "charTop") r332_charTop = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "sw") r332_sw = _r332_t1.right;
                if (_r332_t1 && _r332_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r332_t1.left === "bbd") r332_bbd = _r332_t1.right;
                _r332_t4 = _r332_t4 + 1;
            }
            var r332_charTop = r1_fallback(r332_charTop, _r332_t0[0]);
            var r332_sw = r1_fallback(r332_sw, _r332_t0[1], r312_Stroke);
            var r332_bbd = r1_fallback(r332_bbd, _r332_t0[2], 0);
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var _r338_t0, _r338_t1;
                var r338_oTop = r332_charTop * 0.55 + r332_sw / 2;
                var r338_ymiddlea = (r338_oTop - r312_SmallArchDepthA + r312_SmallArchDepthB) / 2;
                var r338_ymiddleb = (r338_oTop - r312_SmallArchDepthB + r312_SmallArchDepthA) / 2;
                var r338_xMockBarStart = 0;
                var r338_yMockBarStart = r338_ymiddlea + r332_sw * 0.3;
                var r338_xTerminal0 = r1_mix(r312_SB, r312_RightSB, 0.6) - r312_HSwToV(0.5 * r332_sw);
                var r338_kDiagBbd = r312_DiagCorDs(r332_charTop - r338_yMockBarStart, r338_xTerminal0 - r338_xMockBarStart, r332_bbd);
                var r338_xTerminal = r338_xTerminal0 + r338_kDiagBbd * r332_bbd / 2;
                var r338_pStraightBarStart = 0.75 - r332_sw / r332_charTop;
                r338_currentGlyph.include(r312_intersection(r312_Rect(r332_charTop, -r332_charTop, -r312_Width, 2 * r312_Width), r312_dispiro(r312_widths.rhs(r312_ShoulderFine - r312_TINY), r312_g4.up.mid(r312_SB + r332_bbd + r312_OX + r312_HSwToV(r332_sw - r312_ShoulderFine), r338_ymiddlea), r312_Arch.rhs(r338_oTop, new r312_xn$NamedParameterPair$2Lrc9b("sw", r332_sw), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r312_ShoulderFine - r312_TINY)), r312_g4.down.mid(r312_RightSB - r312_OX, r338_ymiddleb), r312_Arch.rhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r332_sw)), r312_g4.up.mid(r312_SB + r332_bbd + r312_OX, r338_ymiddlea), r312_flat(r1_mix(r338_xMockBarStart + r332_bbd, r338_xTerminal, r338_pStraightBarStart), r1_mix(r338_yMockBarStart, r332_charTop, r338_pStraightBarStart), r312_widths.rhs(r332_sw)), r312_curl(r1_mix(r338_xMockBarStart + r332_bbd, r338_xTerminal, 2), r1_mix(r338_yMockBarStart, r332_charTop, 2)))));
                if (r332_bbd) r338_currentGlyph.include(r312_HBar.t(r338_xTerminal - r338_kDiagBbd * r332_bbd, r338_xTerminal, r332_charTop, r332_sw));
                if (r332_bbd) r338_currentGlyph.include(r312_intersection(r312_Rect(r332_charTop, -r332_charTop, -r312_Width, 2 * r312_Width), r312_dispiro(r312_Arch.rhs.centerAt.rtl.b(r312_Middle + r332_bbd / 2, 0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r332_sw)), r312_archv(), r312_g4.up.mid(r312_SB + r312_OX, r338_ymiddlea), r312_flat(r1_mix(r338_xMockBarStart, r338_xTerminal - r338_kDiagBbd * r332_bbd, r338_pStraightBarStart), r1_mix(r338_yMockBarStart, r332_charTop, r338_pStraightBarStart)), r312_curl(r1_mix(r338_xMockBarStart, r338_xTerminal - r338_kDiagBbd * r332_bbd, 2), r1_mix(r338_yMockBarStart, r332_charTop, 2)))));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("six.lnum.openContour", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
            var _r348_t0, _r348_t1;
            r348_currentGlyph.include(r312_MarkSet.capital());
            r348_currentGlyph.include(r312_OpenContourSixShape(r312_CAP));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("six.lnum.closedContour", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
            var _r353_t0, _r353_t1;
            r353_currentGlyph.include(r312_MarkSet.capital());
            r353_currentGlyph.include(r312_ClosedContourSixShape(r312_CAP));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("six.lnum.straightBar", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
            var _r358_t0, _r358_t1;
            r358_currentGlyph.include(r312_MarkSet.capital());
            r358_currentGlyph.include(r312_StraightBarSixShape(r312_CAP));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("six.lnum", r312_CodeLnum("6"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "six"));
        r312_alias("six.onum", r312_CodeOnum("6"), "six.lnum");
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r312_BBS = _r312_t8.BBS;
        var r312_BBD = _r312_t8.BBD;
        return r312_xn$GlyphSaveSink$2Lrc4b.save("mathbb/six", 120798, new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
            var _r365_t0, _r365_t1;
            r365_currentGlyph.include(r312_MarkSet.capital());
            r365_currentGlyph.include(r312_StraightBarSixShape(r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("sw", r312_BBS), new r312_xn$NamedParameterPair$2Lrc9b("bbd", r312_BBD)));
            return void 0;
        }));
    });
    return void 0;
});


