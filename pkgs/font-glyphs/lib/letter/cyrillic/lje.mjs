"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/point";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Point = _r1_t9.Point;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Lje", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Uc, r313_Lc, r313_BGRc, _r313_t11, _r313_t12, _r313_t13, _r313_t14, _r313_tag15;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LegShape = _r313_t7.LegShape;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r313_YeriConfig = _r313_t8.YeriConfig;
        var r313_CyrLjeShape = function (r318_Yeri, r318_df, r318_top) {
            var _r318_t0, _r318_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_sw = r318_df.adviceThinnerStroke2(3, 3, r318_top);
                var r320_xTopLeft = r1_mix(r318_df.leftSB, r318_df.rightSB, 0.025);
                var r320_xBotLeft = r1_mix(r318_df.leftSB, 0, r313_SLAB ? 1 : 0.75);
                var r320_jut = Math.min(r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r320_sw)), r1_mix(r313_HSwToV(0.5 * r320_sw), r313_Jut, 2 / r318_df.hPack * r318_df.adws));
                r320_currentGlyph.include(r313_LegShape(new r313_xn$NamedParameterPair$2Lrc9b("ztop", r1_Point.fromXY(r1_Point.Type.Corner, r320_xTopLeft, r318_top)), new r313_xn$NamedParameterPair$2Lrc9b("zbot", r1_Point.fromXY(r1_Point.Type.Corner, r320_xBotLeft, 0)), new r313_xn$NamedParameterPair$2Lrc9b("xmid", r320_xTopLeft), new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_sw)));
                r320_currentGlyph.include(r318_Yeri(r318_top, new r313_xn$NamedParameterPair$2Lrc9b("left", r318_df.middle - r313_HSwToV(0.5 * r320_sw)), new r313_xn$NamedParameterPair$2Lrc9b("right", r318_df.rightSB - r313_O), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r320_sw), new r313_xn$NamedParameterPair$2Lrc9b("jut", r320_jut)));
                r320_currentGlyph.include(r313_HBar.t(r320_xTopLeft, r318_df.middle, r318_top, r320_sw));
                if (r313_SLAB) r320_currentGlyph.include(r313_HSerif.lt(r320_xTopLeft, r318_top, r320_jut - r313_HSwToV(0.5 * r320_sw), r320_sw));
                return void 0;
            });
        };
        var _r313_t9 = Object.entries(r313_YeriConfig)[Symbol.iterator]();
        var _r313_t10 = void 0;
        while (!(_r313_t10 = _r313_t9.next()).done) {
            _r313_t11 = _r313_t10.value;
            r313_suffix = _r313_t11[0];
            r313_Uc = _r313_t11[1][0];
            r313_Lc = _r313_t11[1][1];
            r313_BGRc = _r313_t11[1][2];
            _r313_t11[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Lje." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                    var _r338_t0, _r338_t1;
                    var r338_df = r338_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r338_currentGlyph.include(r338_df.markSet.capital());
                    r338_currentGlyph.include(r313_CyrLjeShape(r313_Uc, r338_df, r313_CAP));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/lje." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                    var _r344_t0, _r344_t1;
                    var r344_df = r344_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r344_currentGlyph.include(r344_df.markSet.e());
                    r344_currentGlyph.include(r313_CyrLjeShape(r313_Lc, r344_df, r313_XH));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/Lje", 1033, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Lje/rightHalf"));
        return r313_xn$selectvariant$7Hrq("cyrl/lje", 1113, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/lje/rightHalf"));
    });
    return void 0;
});


