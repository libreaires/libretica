"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../meta/aesthetics.mjs";
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Mark-Shared-Metrics", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_dialytikaRadius, _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_AccentWidth = _r313_t1.AccentWidth;
        var r313_AccentHeight = _r313_t1.AccentHeight;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DotRadius = _r313_t1.DotRadius;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r317_t0, _r317_t1;
            return {
                "markExtend": r313_markExtend,
                "markStroke": r313_markStroke,
                "markHalfStroke": r313_markHalfStroke,
                "markStress": r313_markStress,
                "markFine": r313_markFine
            };
        });
        var r313_markExtend = r313_AccentWidth * 0.5;
        var r313_markStroke = Math.min(r313_AdviceStroke2(3.375, 4, r313_XH), 0.875 * r313_AccentHeight);
        var r313_markHalfStroke = 0.5 * r313_markStroke;
        var r313_markStress = r313_markHalfStroke * 1.1;
        var r313_markFine = Math.min(r313_markHalfStroke * 0.9, 0.5 * r313_AdviceStroke2(3.875, 4.25, r313_XH));
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "asciiMarkZoomX": r313_asciiMarkZoomX,
                "asciiMarkZoomY": r313_asciiMarkZoomY
            };
        });
        var r313_asciiMarkZoomX = (r313_RightSB - r313_SB) / (r313_markExtend * 3);
        var r313_asciiMarkZoomY = 1.25 * r313_asciiMarkZoomX;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "markMiddle": r313_markMiddle,
                "markDotsRadius": r313_markDotsRadius,
                "dialytikaRadius": r313_dialytikaRadius
            };
        });
        var r313_markMiddle = -r313_Middle;
        var r313_markDotsRadius = r313_DotRadius * Math.min(1, r313_markStress / r313_HalfStroke);
        return r313_dialytikaRadius = r313_DotRadius * Math.min(1, r313_AdviceStroke(5) / r313_Stroke);
    });
    return void 0;
});


