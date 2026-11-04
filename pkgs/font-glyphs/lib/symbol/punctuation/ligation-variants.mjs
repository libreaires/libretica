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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Ligation-Variants", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_pDelta, r312_baseName, _r312_t9, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_t16, _r312_t17, _r312_t18;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_XH = _r312_t1.XH;
        var r312_Translate = _r312_t1.Translate;
        var r312_PeriodSize = _r312_t1.PeriodSize;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$deriveglyphs$7Hrq = _r312_t6["derive-glyphs"];
        r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Small"].resolve();
        r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Interpuncts"].resolve();
        r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Emotion"].resolve();
        var r312_dotLikePunctuations = ["colon", "colon/mid", "semicolon", "period", "period/mid", "comma", "exclam", "bar", "slash", "backslash", "question"];
        var r312_deltas = {
            "dRight": 1,
            "dRightHalf": 0.5,
            "dMid": 0,
            "dLeftHalf": -0.5,
            "dLeft": -1
        };
        var r312_LigD = function (r318_baseName, r318_suffix, r318_pDelta) {
            var r318_delta, _r318_t0, _r318_t1;
            return r312_xn$GlyphSaveSink$2Lrc4b.glyphIsNeeded(r318_baseName) ? (r318_delta = Math.max(0, r312_Width / 2 - (r312_XH - r312_PeriodSize) / 2), r312_xn$deriveglyphs$7Hrq(r318_baseName + ".lig." + r318_suffix, null, r318_baseName, function (r320_src, r320_gr) {
                var _r320_t0, _r320_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                    var _r322_t0, _r322_t1;
                    r322_currentGlyph.include(r312_xn$referglyph$1aao(r320_src), true, true);
                    r322_currentGlyph.include(r312_Translate(r318_delta * r318_pDelta, 0));
                    return void 0;
                });
            })) : void 0;
        };
        var _r312_t7 = Object.entries(r312_deltas)[Symbol.iterator]();
        var _r312_t8 = void 0;
        var _r312_t15 = !(_r312_t8 = _r312_t7.next()).done;
        while (_r312_t15) {
            _r312_t9 = _r312_t8.value;
            r312_suffix = _r312_t9[0];
            r312_pDelta = _r312_t9[1];
            _r312_t10 = r312_dotLikePunctuations;
            _r312_t11 = _r312_t10.length;
            _r312_t12 = 0;
            _r312_t17 = _r312_t12 < _r312_t11;
            while (_r312_t17) {
                _r312_t18 = (r312_baseName = _r312_t10[_r312_t12], r312_LigD(r312_baseName, r312_suffix, r312_pDelta), _r312_t12 = _r312_t12 + 1);
                _r312_t17 = _r312_t12 < _r312_t11;
            }
            _r312_t16 = _r312_t18;
            _r312_t15 = !(_r312_t8 = _r312_t7.next()).done;
        }
        return _r312_t16;
    });
    return void 0;
});


