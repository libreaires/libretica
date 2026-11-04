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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-I-Ching", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_OperBot = _r313_t1.OperBot;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        r313_xn$GlyphSaveSink$2Lrc4b.save("iChing/barYin", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            var r318_bar = r313_AdviceStroke(3);
            var r318_gap = Math.max(r313_Width / 8, r313_AdviceStroke(5));
            r318_currentGlyph.include(r313_HBar.m(r313_SB, r313_Middle - r313_HSwToV(0.5 * r318_gap), 0, r318_bar));
            r318_currentGlyph.include(r313_HBar.m(r313_Middle + r313_HSwToV(0.5 * r318_gap), r313_RightSB, 0, r318_bar));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("iChing/barYang", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            var r323_bar = r313_AdviceStroke(3);
            r323_currentGlyph.include(r313_HBar.m(r313_SB, r313_RightSB, 0, r323_bar));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("iChing/barRen", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            var r327_bar = r313_AdviceStroke(3);
            var r327_gap = Math.max(r313_Width / 8, r313_AdviceStroke(5));
            var r327_width = (r313_RightSB - r313_SB - r313_HSwToV(2 * r327_gap)) / 3;
            r327_currentGlyph.include(r313_HBar.m(r313_SB, r313_SB + r327_width, 0, r327_bar));
            r327_currentGlyph.include(r313_HBar.m(r313_Middle - 0.5 * r327_width, r313_Middle + 0.5 * r327_width, 0, r327_bar));
            r327_currentGlyph.include(r313_HBar.m(r313_RightSB - r327_width, r313_RightSB, 0, r327_bar));
            return void 0;
        }));
        var r313_patterns = function (r331_n, r331_su) {
            var _r331_t2, _r331_t3, _r331_t5;
            var _r331_t0 = 0;
            var _r331_t1 = Math.pow(2, r331_n);
            var r331_offset = _r331_t0;
            var _r331_t4 = r331_offset < _r331_t1;
            while (_r331_t4) {
                _r331_t5 = (r313_xn$GlyphSaveSink$2Lrc4b.save("iChing/Pattern/" + r331_n + "/" + r331_offset, r331_su + r331_offset, new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                    var _r337_t2, _r337_t3;
                    var r337_offsetY = 2 / 3 * (r313_OperBot - r313_PictTop) / r331_n;
                    var r337_startY = r313_SymbolMid - r337_offsetY * (r331_n - 1) / 2;
                    var _r337_t0 = 0;
                    var _r337_t1 = r331_n;
                    var r337_bit = _r337_t0;
                    while (r337_bit < _r337_t1) {
                        r337_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r337_startY + r337_offsetY * r337_bit), r313_xn$referglyph$1aao(!r1_maskBit(r331_offset, r337_bit) ? "iChing/barYang" : "iChing/barYin")));
                        r337_bit = r337_bit + 1;
                    }
                    return void 0;
                })), r331_offset = r331_offset + 1);
                _r331_t4 = r331_offset < _r331_t1;
            }
            return _r331_t5;
        };
        var r313_hexagramPatterns = function (r341_su, r341_order) {
            var _r341_t2, _r341_t3, _r341_t5;
            var _r341_t0 = 0;
            var _r341_t1 = 64;
            var r341_offset = _r341_t0;
            var _r341_t4 = r341_offset < _r341_t1;
            while (_r341_t4) {
                _r341_t5 = (r313_xn$GlyphSaveSink$2Lrc4b.save("iChing/Pattern/6/" + r341_offset, r341_su + r341_offset, new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                    var _r346_t2, _r346_t3;
                    var r346_offsetY = (r313_PictBot - r313_PictTop) / 6;
                    var r346_startY = r313_SymbolMid - r346_offsetY * (6 - 1) / 2;
                    var _r346_t0 = 0;
                    var _r346_t1 = 6;
                    var r346_bit = _r346_t0;
                    while (r346_bit < _r346_t1) {
                        r346_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r346_startY + r346_offsetY * r346_bit), r313_xn$referglyph$1aao(!r1_maskBit(r341_order[r341_offset], r346_bit) ? "iChing/barYang" : "iChing/barYin")));
                        r346_bit = r346_bit + 1;
                    }
                    return void 0;
                })), r341_offset = r341_offset + 1);
                _r341_t4 = r341_offset < _r341_t1;
            }
            return _r341_t5;
        };
        var r313_stringPattern = function (r350_pat) {
            var _r350_t0, _r350_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var r352___, _r352_t2, _r352_t3, _r352_t4;
                var r352_n = r350_pat.length;
                var r352_offsetY = (r352_n >= 4 ? 1 : 2 / 3) * (r313_OperBot - r313_PictTop) / r352_n;
                var r352_startY = r313_SymbolMid - r352_offsetY * (r352_n - 1) / 2;
                var _r352_t0 = 0;
                var _r352_t1 = r352_n;
                var r352_bit = _r352_t0;
                while (r352_bit < _r352_t1) {
                    r352_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r352_startY + r352_offsetY * r352_bit), r313_xn$referglyph$1aao((_r352_t2 = r350_pat[r352_bit], _r352_t2 === "0" ? "iChing/barYang" : _r352_t2 === "1" ? "iChing/barYin" : (r352___ = _r352_t2, "iChing/barRen")))));
                    r352_bit = r352_bit + 1;
                }
                return void 0;
            });
        };
        var r313_stringPatterns = function (r356_su, r356_pats) {
            var r356_pat, _r356_t2, _r356_t3, _r356_t5;
            var _r356_t0 = 0;
            var _r356_t1 = r356_pats.length;
            var r356_offset = _r356_t0;
            var _r356_t4 = r356_offset < _r356_t1;
            while (_r356_t4) {
                _r356_t5 = (r356_pat = r356_pats[r356_offset], r313_xn$GlyphSaveSink$2Lrc4b.save("iChing/Pattern/txj/" + r356_pat, r356_su + r356_offset, r313_stringPattern(r356_pat)), r356_offset = r356_offset + 1);
                _r356_t4 = r356_offset < _r356_t1;
            }
            return _r356_t5;
        };
        var r313_ternaryPatterns = function (r360_n, r360_su) {
            var r360_pat, _r360_t2, _r360_t3, _r360_t5;
            var _r360_t0 = 0;
            var _r360_t1 = Math.pow(3, r360_n);
            var r360_offset = _r360_t0;
            var _r360_t4 = r360_offset < _r360_t1;
            while (_r360_t4) {
                _r360_t5 = (r360_pat = r360_offset.toString(3).padStart(r360_n, "0"), r313_xn$GlyphSaveSink$2Lrc4b.save("iChing/Pattern/txj/" + r360_pat, r360_su + r360_offset, r313_stringPattern(r360_pat)), r360_offset = r360_offset + 1);
                _r360_t4 = r360_offset < _r360_t1;
            }
            return _r360_t5;
        };
        r313_patterns(1, 9866);
        r313_patterns(2, 9868);
        r313_patterns(3, 9776);
        r313_hexagramPatterns(19904, [0, 63, 29, 46, 5, 40, 47, 61, 4, 8, 7, 56, 16, 2, 55, 59, 25, 38, 15, 60, 26, 22, 62, 31, 24, 6, 30, 33, 45, 18, 49, 35, 48, 3, 58, 23, 20, 10, 53, 43, 14, 28, 1, 32, 57, 39, 41, 37, 17, 34, 27, 54, 52, 11, 19, 50, 36, 9, 44, 13, 12, 51, 21, 42]);
        r313_stringPatterns(119552, ["2", "02", "12", "20", "21", "22"]);
        return r313_ternaryPatterns(4, 119558);
    });
    return void 0;
});


