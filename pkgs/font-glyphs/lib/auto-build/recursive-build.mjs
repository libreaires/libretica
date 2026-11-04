"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Recursive-Build", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_glyphStore = _r312_t0.glyphStore;
        var r312_buildGlyphs = _r312_t0.buildGlyphs;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_UPM = _r312_t1.UPM;
        var r312_HalfUPM = _r312_t1.HalfUPM;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_HookX = _r312_t1.HookX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_LongJut = _r312_t1.LongJut;
        var r312_AccentWidth = _r312_t1.AccentWidth;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_Fork = function (r313_gs, r313_ps) {
            var r313_glyphid, r313_g, _r313_t3, _r313_t4;
            var r313_glyphs = [];
            var _r313_t0 = r313_gs;
            var _r313_t1 = _r313_t0.length;
            var _r313_t2 = 0;
            while (_r313_t2 < _r313_t1) {
                r313_glyphid = _r313_t0[_r313_t2];
                r313_g = r312_glyphStore.queryByName(r313_glyphid);
                if (r313_g) r313_glyphs.push(r313_g);
                _r313_t2 = _r313_t2 + 1;
            }
            r313_gs = r312_buildGlyphs(r313_ps, r312_xn$Exec$2Lrc5.dependencyManager.traverseDependencies(r313_glyphs));
            return r313_gs.glyphStore;
        };
        var r312_MiniatureParaT = function () {
            var _r316_t5;
            var _r316_t6 = arguments;
            var r316_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r316_t6, 0);
            var _r316_t0 = [];
            var _r316_t1 = 0;
            while (_r316_t1 < r316_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r316_xn$flexarguments$2Lrc7uIe5[_r316_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r316_t0.push(r316_xn$flexarguments$2Lrc7uIe5[_r316_t1]);
                _r316_t1 = _r316_t1 + 1;
            }
            var _r316_t2 = r316_xn$flexarguments$2Lrc7uIe5;
            var _r316_t3 = _r316_t2.length;
            var _r316_t4 = 0;
            while (_r316_t4 < _r316_t3) {
                _r316_t1 = _r316_t2[_r316_t4];
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "pp") r316_pp = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "crowd") r316_crowd = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "scale") r316_scale = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "sbscale") r316_sbscale = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "mono") r316_mono = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "mono2") r316_mono2 = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "forceUpright") r316_forceUpright = _r316_t1.right;
                _r316_t4 = _r316_t4 + 1;
            }
            var r316_pp = r1_fallback(r316_pp, _r316_t0[0]);
            var r316_crowd = r1_fallback(r316_crowd, _r316_t0[1]);
            var r316_scale = r1_fallback(r316_scale, _r316_t0[2]);
            var r316_sbscale = r1_fallback(r316_sbscale, _r316_t0[3], r312_Width / r312_UPM);
            var r316_mono = r1_fallback(r316_mono, _r316_t0[4], false);
            var r316_mono2 = r1_fallback(r316_mono2, _r316_t0[5], false);
            var r316_forceUpright = r1_fallback(r316_forceUpright, _r316_t0[6], false);
            var r316_forkedPara = Object.assign({}, r316_pp);
            r316_forkedPara.stroke = r312_AdviceStroke(r316_crowd, Math.sqrt(r1_clamp(0, 1, r312_HalfUPM / r312_Width))) / r316_scale;
            r316_forkedPara.dotSize = r316_pp.dotSize * r316_forkedPara.stroke / r316_pp.stroke;
            r316_forkedPara.periodSize = r316_pp.periodSize * r316_forkedPara.stroke / r316_pp.stroke;
            r316_forkedPara.sb = r312_SB * r316_sbscale;
            if (r316_forceUpright) r316_forkedPara.slopeAngle = 0;
            if (r316_mono) {
                r316_forkedPara.advanceScaleMM = 1;
                r316_forkedPara.advanceScaleM = 1;
                r316_forkedPara.advanceScaleT = 1;
            }
            if (r316_mono2) {
                r316_forkedPara.advanceScaleF = 1;
                r316_forkedPara.advanceScaleI = 1;
                r316_forkedPara.advanceScaleII = 1;
                r316_forkedPara.advanceScaleSp = 1;
            }
            return r316_forkedPara;
        };
        var r312_Miniature = function (r321_glyphs) {
            var _r321_t0;
            var _r321_t1 = arguments;
            return r312_Fork(r321_glyphs, r312_MiniatureParaT.apply(null, [r312_para].concat([].slice.call(_r321_t1, 1))));
        };
        var r312_Thinner = function () {
            var _r322_t5;
            var _r322_t6 = arguments;
            var r322_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r322_t6, 0);
            var _r322_t0 = [];
            var _r322_t1 = 0;
            while (_r322_t1 < r322_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r322_t0.push(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1]);
                _r322_t1 = _r322_t1 + 1;
            }
            var _r322_t2 = r322_xn$flexarguments$2Lrc7uIe5;
            var _r322_t3 = _r322_t2.length;
            var _r322_t4 = 0;
            while (_r322_t4 < _r322_t3) {
                _r322_t1 = _r322_t2[_r322_t4];
                if (_r322_t1 && _r322_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "glyphs") r322_glyphs = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "p") r322_p = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "fMono") r322_fMono = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "crowd") r322_crowd = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "crowdAdjScale") r322_crowdAdjScale = _r322_t1.right;
                _r322_t4 = _r322_t4 + 1;
            }
            var r322_glyphs = r1_fallback(r322_glyphs, _r322_t0[0]);
            var r322_p = r1_fallback(r322_p, _r322_t0[1]);
            var r322_fMono = r1_fallback(r322_fMono, _r322_t0[2]);
            var r322_crowd = r1_fallback(r322_crowd, _r322_t0[3]);
            var r322_crowdAdjScale = r1_fallback(r322_crowdAdjScale, _r322_t0[4]);
            var r322_forkedPara = Object.assign({}, r312_para);
            if (r322_crowd && r322_crowdAdjScale) {
                r322_forkedPara.stroke = r312_AdviceStroke(r322_crowd) / r322_crowdAdjScale;
                r322_forkedPara.dotSize = r312_para.dotSize * r322_forkedPara.stroke / r312_para.stroke;
                r322_forkedPara.periodSize = r312_para.periodSize * r322_forkedPara.stroke / r312_para.stroke;
            }
            r322_forkedPara.unitWidthScalar = r312_para.unitWidthScalar * r322_p;
            r322_forkedPara.width = r312_Width * r322_p;
            r322_forkedPara.accentWidth = r312_AccentWidth * r322_p;
            r322_forkedPara.jut = r312_Jut * r322_p;
            r322_forkedPara.longjut = r312_LongJut * r322_p;
            r322_forkedPara.advanceScaleMM = 1;
            r322_forkedPara.advanceScaleM = 1;
            r322_forkedPara.advanceScaleT = 1;
            if (r322_fMono) {
                r322_forkedPara.advanceScaleF = 1;
                r322_forkedPara.advanceScaleI = 1;
                r322_forkedPara.advanceScaleII = 1;
                r322_forkedPara.advanceScaleSp = 1;
            }
            return r312_Fork(r322_glyphs, r322_forkedPara);
        };
        var r312_Widen = function (r327_glyphs, r327_p, r327_psb) {
            var _r327_t0, _r327_t1;
            var r327_forkedPara = Object.assign({}, r312_para);
            r327_forkedPara.unitWidthScalar = r312_para.unitWidthScalar * r327_p;
            r327_forkedPara.width = r312_Width * r327_p;
            r327_forkedPara.sb = r312_SB * r1_fallback(r327_psb, r327_p);
            r327_forkedPara.accentWidth = r312_AccentWidth * r327_p;
            r327_forkedPara.jut = r312_Jut * r327_p;
            r327_forkedPara.longjut = r312_LongJut * r327_p;
            r327_forkedPara.hookx = r312_HookX * r327_p;
            return r312_Fork(r327_glyphs, r327_forkedPara);
        };
        return r312_xn$ExportCapture$2Lrc4b(function () {
            var _r329_t0, _r329_t1;
            return {
                "Fork": r312_Fork,
                "Miniature": r312_Miniature,
                "MiniatureParaT": r312_MiniatureParaT,
                "Thinner": r312_Thinner,
                "Widen": r312_Widen
            };
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r332_xn$Capture_Ext$2Lrc2b) {
    var _r332_t0, _r332_t1;
    r332_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r332_xn$Capture_Ext$2Lrc2b, "Recursive-Build-ParaTfm", function (r333_xn$Capture$2Lrc8, r333_xn$ExportCapture$2Lrc4b) {
        var r333_ForkTfm, _r333_t5, _r333_t6, _r333_t7, _r333_tag8;
        var _r333_t0 = r333_xn$Capture$2Lrc8;
        var r333_xn$GlyphSaveSink$2Lrc4b = _r333_t0["$GlyphSaveSink$"];
        var r333_xn$NamedParameterPair$2Lrc9b = _r333_t0["$NamedParameterPair$"];
        var r333_xn$Exec$2Lrc5 = _r333_t0["$Exec$"];
        var r333_para = _r333_t0.para;
        var _r333_t1 = r333_xn$Capture$2Lrc8.Metrics;
        var _r333_t2 = r333_xn$Capture$2Lrc8.SpiroFns;
        var _r333_t3 = r333_xn$Capture$2Lrc8.SpiroFns;
        var r333_xn$decor$0cao = _r333_t3["decor@"];
        var r333_xn$decor$0cao1 = _r333_t3["decor@@"];
        var r333_xn$decor$0cao11 = _r333_t3["decor@@@"];
        var _r333_t4 = r333_xn$Capture$2Lrc8.BooleFns;
        r333_xn$ExportCapture$2Lrc4b(function () {
            var _r335_t0, _r335_t1;
            return {
                "ForkTfm": r333_ForkTfm
            };
        });
        return r333_ForkTfm = (function () {
            var r338_Bold, r338_Italic, r338_Sans, r338_BoldItalic, r338_SansBold, r338_SansItalic, r338_SansBoldItalic, r338_TypeWriter;
            var r338_exports = {};
            var r338_boldGrade = function (r345_g) {
                var _r345_t0, _r345_t1;
                var r345_pGrade = (900 - r345_g) / 100;
                return 900 - 100 * (2 / 25) * Math.pow(r345_pGrade, 2);
            };
            r338_exports.Bold = r338_Bold = function (r348_a) {
                var _r348_t0, _r348_t1;
                return r348_a.shape.weight = r338_boldGrade(r348_a.shape.weight);
            };
            r338_exports.Italic = r338_Italic = function (r350_a) {
                var _r350_t0, _r350_t1;
                r350_a.shape.slope = "italic";
                return r350_a.shape.slopeAngle = r1_mix(r333_para.slopeAngle || 0, 15, 94 / 150);
            };
            r338_exports.Sans = r338_Sans = function (r352_a) {
                var _r352_t0, _r352_t1;
                return r352_a.shape.serifs = "sans";
            };
            r338_exports.BoldItalic = r338_BoldItalic = function (r354_a) {
                var _r354_t0, _r354_t1;
                r338_Bold(r354_a);
                return r338_Italic(r354_a);
            };
            r338_exports.SansBold = r338_SansBold = function (r356_a) {
                var _r356_t0, _r356_t1;
                r338_Sans(r356_a);
                return r338_Bold(r356_a);
            };
            r338_exports.SansItalic = r338_SansItalic = function (r358_a) {
                var _r358_t0, _r358_t1;
                r338_Sans(r358_a);
                return r338_Italic(r358_a);
            };
            r338_exports.SansBoldItalic = r338_SansBoldItalic = function (r360_a) {
                var _r360_t0, _r360_t1;
                r338_Sans(r360_a);
                r338_Bold(r360_a);
                return r338_Italic(r360_a);
            };
            r338_exports.TypeWriter = r338_TypeWriter = function (r362_a) {
                var _r362_t0, _r362_t1;
                r362_a.shape.spacing = "fixed";
                return r362_a.derivingVariants && r362_a.derivingVariants.mathtt ? r362_a.variants = r362_a.derivingVariants.mathtt : void 0;
            };
            return r338_exports;
        })();
    });
    return void 0;
});


