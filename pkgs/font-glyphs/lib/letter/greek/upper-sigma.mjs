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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Upper-Sigma", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_SLAB = _r313_t1.SLAB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VSerif = _r313_t5.VSerif;
        var r313_DiagCor = _r313_t5.DiagCor;
        var r313_HBar = _r313_t5.HBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t7.EFVJutLength;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "SigmaShape": r313_SigmaShape
            };
        });
        var r313_SigmaShape = function () {
            var _r319_t5;
            var _r319_t6 = arguments;
            var r319_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r319_t6, 0);
            var _r319_t0 = [];
            var _r319_t1 = 0;
            while (_r319_t1 < r319_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r319_t0.push(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1]);
                _r319_t1 = _r319_t1 + 1;
            }
            var _r319_t2 = r319_xn$flexarguments$2Lrc7uIe5;
            var _r319_t3 = _r319_t2.length;
            var _r319_t4 = 0;
            while (_r319_t4 < _r319_t3) {
                _r319_t1 = _r319_t2[_r319_t4];
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "df") r319_df = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "top") r319_top = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "bottom") r319_bottom = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "fine") r319_fine = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "doSerif") r319_doSerif = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "pxMid") r319_pxMid = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "pyMid") r319_pyMid = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "offsetLeft") r319_offsetLeft = _r319_t1.right;
                _r319_t4 = _r319_t4 + 1;
            }
            var r319_df = r1_fallback(r319_df, _r319_t0[0]);
            var r319_top = r1_fallback(r319_top, _r319_t0[1]);
            var r319_bottom = r1_fallback(r319_bottom, _r319_t0[2]);
            var r319_fine = r1_fallback(r319_fine, _r319_t0[3]);
            var r319_doSerif = r1_fallback(r319_doSerif, _r319_t0[4], r313_SLAB);
            var r319_pxMid = r1_fallback(r319_pxMid, _r319_t0[5], 0.5);
            var r319_pyMid = r1_fallback(r319_pyMid, _r319_t0[6], 0.5);
            var r319_offsetLeft = r1_fallback(r319_offsetLeft, _r319_t0[7], 0);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var r325_jutTop, r325_jutBot, r325_jutMid, _r325_t0, _r325_t1, _r325_t2;
                var r325_cor = r313_DiagCor(r319_top - r319_bottom, r319_df.rightSB - r319_df.leftSB);
                var r325_xMid = r1_mix(r319_df.leftSB, r319_df.rightSB, r319_pxMid) - r319_fine / 2;
                var r325_yMid = r1_mix(r319_bottom, r319_top, r319_pyMid);
                r325_currentGlyph.include(r313_union(r313_HBar.t(r319_offsetLeft + r319_df.leftSB, r319_df.rightSB, r319_top, r319_fine), r313_HBar.b(r319_offsetLeft + r319_df.leftSB, r319_df.rightSB, r319_bottom, r319_fine), r313_xn$spirooutline$1aao(r313_corner(r319_df.leftSB + r319_offsetLeft, r319_bottom + r319_fine), r313_corner(r319_df.leftSB + r319_offsetLeft + r319_fine * r325_cor, r319_bottom + r319_fine), r313_corner(r325_xMid + r319_offsetLeft + r319_fine * r325_cor, r325_yMid), r313_corner(r319_df.leftSB + r319_offsetLeft + r319_fine * r325_cor, r319_top - r319_fine), r313_corner(r319_df.leftSB + r319_offsetLeft, r319_top - r319_fine), r313_corner(r325_xMid + r319_offsetLeft, r325_yMid))));
                if (r319_doSerif) {
                    _r325_t0 = r313_EFVJutLength(r319_top, r319_bottom, r319_pyMid, r319_fine);
                    r325_jutTop = _r325_t0[0];
                    r325_jutBot = _r325_t0[1];
                    r325_jutMid = _r325_t0[2];
                    r325_currentGlyph.include(r313_VSerif.dr(r319_df.rightSB, r319_top, r325_jutTop));
                    r325_currentGlyph.include(r313_VSerif.ur(r319_df.rightSB, r319_bottom, r325_jutBot));
                }
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Sigma", 931, new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var _r331_t0, _r331_t1;
            var r331_df = r331_currentGlyph.include(r313_DivFrame(1));
            r331_currentGlyph.include(r331_df.markSet.capital());
            r331_currentGlyph.include(r313_SigmaShape(r331_df, r313_CAP, 0, r313_Stroke));
            return void 0;
        }));
        return r313_alias("Esh", 425, "grek/Sigma");
    });
    return void 0;
});


