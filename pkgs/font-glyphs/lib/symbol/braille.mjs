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
var r1_popCountByte = _r1_t9.popCountByte;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Braille", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_DrawAt, r313_kDotRadius, r313_overshoot, _r313_t9, _r313_t12, _r313_t13, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Middle = _r313_t1.Middle;
        var r313_PeriodRadius = _r313_t1.PeriodRadius;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_ForceUpright = _r313_t5.ForceUpright;
        var r313_DotVariants = _r313_t5.DotVariants;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_left = r313_Middle - 0.25 * r313_Width;
        var r313_right = r313_Middle + 0.25 * r313_Width;
        var r313_offsetY = 0.3 * (r313_SymbolMid - r313_PictTop);
        var r313_stress = 0.5 * r313_AdviceStroke(3.375);
        var r313_dotRadius = r313_PeriodRadius * Math.min(1, r313_stress / r313_HalfStroke);
        var r313_xn$MASKLEFTHALF$5sIl5 = 71;
        var r313_xn$MASKRIGHTHALF$5sIl6 = 184;
        var r313_brailleGlyphName = function (r316_byte, r316_suffix) {
            var _r316_t2, _r316_t3;
            var r316_dots = [];
            var _r316_t0 = 0;
            var _r316_t1 = 8;
            var r316_bit = _r316_t0;
            while (r316_bit < _r316_t1) {
                if (r1_maskBit(r316_byte, r316_bit)) r316_dots.push(r316_bit + 1);
                r316_bit = r316_bit + 1;
            }
            return r316_suffix ? "braille" + r316_dots.join("") + "." + r316_suffix : "braille" + r316_dots.join("");
        };
        var _r313_t7 = Object.entries(r313_DotVariants)[Symbol.iterator]();
        var _r313_t8 = void 0;
        while (!(_r313_t8 = _r313_t7.next()).done) {
            _r313_t9 = _r313_t8.value;
            r313_suffix = _r313_t9[0];
            r313_DrawAt = _r313_t9[1][0];
            r313_kDotRadius = _r313_t9[1][1];
            r313_overshoot = _r313_t9[1][2];
            _r313_t9[1];
            (function () {
                var r321_stage, r321_F, r321_byte, _r321_t3, _r321_t4, _r321_t5, _r321_t7;
                var r321_BrailleYCoord = function (r322_y) {
                    var _r322_t0, _r322_t1;
                    return r313_SymbolMid + r322_y * r313_offsetY;
                };
                var r321_OneHalf = function (r323_byte) {
                    var _r323_t0, _r323_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                        var _r325_t2, _r325_t3, _r325_t4;
                        var r325_r = r313_kDotRadius * r313_dotRadius - r313_overshoot;
                        var _r325_t0 = 0;
                        var _r325_t1 = 8;
                        var r325_bit = _r325_t0;
                        while (r325_bit < _r325_t1) {
                            if (r1_maskBit(r323_byte, r325_bit)) r325_currentGlyph.include((_r325_t2 = r325_bit, 0 === _r325_t2 ? r313_DrawAt(r313_left, r321_BrailleYCoord(-3), r325_r) : 1 === _r325_t2 ? r313_DrawAt(r313_left, r321_BrailleYCoord(-1), r325_r) : 2 === _r325_t2 ? r313_DrawAt(r313_left, r321_BrailleYCoord(1), r325_r) : 3 === _r325_t2 ? r313_DrawAt(r313_right, r321_BrailleYCoord(-3), r325_r) : 4 === _r325_t2 ? r313_DrawAt(r313_right, r321_BrailleYCoord(-1), r325_r) : 5 === _r325_t2 ? r313_DrawAt(r313_right, r321_BrailleYCoord(1), r325_r) : 6 === _r325_t2 ? r313_DrawAt(r313_left, r321_BrailleYCoord(3), r325_r) : 7 === _r325_t2 ? r313_DrawAt(r313_right, r321_BrailleYCoord(3), r325_r) : void 0));
                            r325_bit = r325_bit + 1;
                        }
                        return void 0;
                    });
                };
                var r321_TwoHalves = function (r329_byte) {
                    var _r329_t0, _r329_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                        var _r331_t0, _r331_t1;
                        var r331_leftHalf = r1_maskBits(r329_byte, r313_xn$MASKLEFTHALF$5sIl5);
                        var r331_rightHalf = r1_maskBits(r329_byte, r313_xn$MASKRIGHTHALF$5sIl6);
                        r331_currentGlyph.include(r313_xn$referglyph$1aao(r313_brailleGlyphName(r331_leftHalf, r313_suffix)));
                        r331_currentGlyph.include(r313_xn$referglyph$1aao(r313_brailleGlyphName(r331_rightHalf, r313_suffix)));
                        return void 0;
                    });
                };
                var r321_brailleBuildStage = function (r334_byte) {
                    var _r334_t0, _r334_t1;
                    if (!r1_maskBits(r334_byte, r313_xn$MASKLEFTHALF$5sIl5) || !r1_maskBits(r334_byte, r313_xn$MASKRIGHTHALF$5sIl6)) return 1;
                    return 2;
                };
                var r321_stageConfig = [[1, r321_OneHalf], [2, r321_TwoHalves]];
                var _r321_t0 = r321_stageConfig;
                var _r321_t1 = _r321_t0.length;
                var _r321_t2 = 0;
                var _r321_t6 = _r321_t2 < _r321_t1;
                while (_r321_t6) {
                    _r321_t3 = _r321_t0[_r321_t2];
                    r321_stage = _r321_t3[0];
                    r321_F = _r321_t3[1];
                    _r321_t4 = 1;
                    _r321_t5 = 256;
                    r321_byte = _r321_t4;
                    while (r321_byte < _r321_t5) {
                        if (r321_stage === r321_brailleBuildStage(r321_byte)) r313_xn$GlyphSaveSink$2Lrc4b.save(r313_brailleGlyphName(r321_byte, r313_suffix), null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                            var _r340_t0, _r340_t1;
                            r340_currentGlyph.include(r313_ForceUpright());
                            r340_currentGlyph.include(r321_F(r321_byte));
                            return void 0;
                        }));
                        r321_byte = r321_byte + 1;
                    }
                    _r321_t7 = _r321_t2 = _r321_t2 + 1;
                    _r321_t6 = _r321_t2 < _r321_t1;
                }
                return _r321_t7;
            })();
        }
        var _r313_t10 = 1;
        var _r313_t11 = 256;
        var r313_byte = _r313_t10;
        var _r313_t14 = r313_byte < _r313_t11;
        while (_r313_t14) {
            _r313_t15 = (r313_xn$selectvariant$7Hrq(r313_brailleGlyphName(r313_byte), 10240 + r313_byte, new r313_xn$NamedParameterPair$2Lrc9b("follow", "brailleDot")), r313_byte = r313_byte + 1);
            _r313_t14 = r313_byte < _r313_t11;
        }
        return _r313_t15;
    });
    return void 0;
});


