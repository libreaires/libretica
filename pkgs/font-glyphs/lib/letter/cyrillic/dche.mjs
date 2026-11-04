"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r335_t) {
    var r335_n, r335_i, r335_a, _r335_t3, _r335_t4, _r335_t5, _r335_t6, _r335_t7, _r335_t8, _r335_t9, _r335_t10, _r335_t11, _r335_t12, _r335_t13, _r335_t14, _r335_t15, _r335_t16, _r335_t17, _r335_t18, _r335_t19, _r335_t20, _r335_t21, _r335_t22, _r335_t23, _r335_t24, _r335_t25, _r335_t26;
    var _r335_t0 = function () {
        _r335_t7 = function (_r335_t8) {
            _r335_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r335_t8
            };
        };
        _r335_t9 = r335_t instanceof Array;
        if (_r335_t9) {
            _r335_t10 = r335_n = r335_t.length;
            _r335_t11 = r335_i = 0;
            _r335_t12 = function (_r335_t14) {
                return _r335_t7(_r335_t14);
            };
            _r335_t13 = function (_r335_t15) {
                _r335_t16 = r335_i < r335_n;
                if (_r335_t16) {
                    _r335_t0 = function (_r335_t17) {
                        return _r335_t13(r335_i = r335_i + 1);
                    };
                    return {
                        "value": [r335_i, r335_t[r335_i]],
                        "done": false
                    };
                } else return _r335_t12(_r335_t15);
            };
            return _r335_t13();
        } else {
            _r335_t18 = r335_a = Object.keys(r335_t);
            _r335_t19 = r335_n = r335_a.length;
            _r335_t20 = r335_i = 0;
            _r335_t21 = function (_r335_t23) {
                return _r335_t7(_r335_t23);
            };
            _r335_t22 = function (_r335_t24) {
                _r335_t25 = r335_i < r335_n;
                if (_r335_t25) {
                    _r335_t0 = function (_r335_t26) {
                        return _r335_t22(r335_i = r335_i + 1);
                    };
                    return {
                        "value": [r335_a[r335_i], r335_t[r335_a[r335_i]]],
                        "done": false
                    };
                } else return _r335_t21(_r335_t24);
            };
            return _r335_t22();
        }
    };
    var _r335_t1 = function (x) {
        try {
            return _r335_t0(x);
        } catch (ex) {
            return _r335_t2(ex);
        }
    };
    var _r335_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9) _r335_t3 = this; else {
        _r335_t4 = function () {
            void 0;
        };
        _r335_t4.prototype = _r1_t9.prototype;
        _r335_t3 = new _r335_t4();
    }
    _r335_t3[Symbol.iterator] = function () {
        return _r335_t3;
    };
    _r335_t3.next = _r335_t1;
    _r335_t3.throw = function (x) {
        return _r335_t2(x);
    };
    return _r335_t3;
};
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Dche", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_body, r312_slabUpright, r312_slabUprightBGR, r312_slabItalic, _r312_t12, _r312_t13, _r312_t14, _r312_t15, _r312_tag16;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_LeaningAnchor = _r312_t7.LeaningAnchor;
        var r312_ExtendBelowBaseAnchors = _r312_t7.ExtendBelowBaseAnchors;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Che"].resolve();
        var r312_CyrCheShape = _r312_t8.CyrCheShape;
        var r312_ItalicConfig = _r312_t8.ItalicConfig;
        var r312_BODY = _r312_t8.BODY;
        var r312_SERIFS = _r312_t8.SERIFS;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-De"].resolve();
        var r312_CyrDeBottom = _r312_t9.CyrDeBottom;
        var r312_BottomExtension = _r312_t9.BottomExtension;
        var r312_CyrDeItalicShape = _r312_t9.CyrDeItalicShape;
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dche", 1324, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
            var _r320_t0, _r320_t1;
            r320_currentGlyph.include(r312_MarkSet.capital());
            r320_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            r320_currentGlyph.include(r312_CyrCheShape(r312_DivFrame(1), r312_CAP, 0.4, r312_BODY.STRAIGHT, r312_SLAB ? r312_SERIFS.TOP : r312_SERIFS.NONE));
            r320_currentGlyph.include(r312_CyrDeBottom(r312_SB, r312_RightSB));
            var r320_fine = r312_AdviceStroke(3.5);
            r320_currentGlyph.include(r312_dispiro(r312_widths.rhs(r320_fine), r312_flat(r312_SB, r312_Stroke), r312_curl(r312_RightSB - r312_HSwToV(r312_Stroke), r312_CAP - (r312_SLAB ? r312_Stroke : 0))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dche.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.include(r312_MarkSet.e());
            r328_currentGlyph.include(r312_ExtendBelowBaseAnchors(r312_BottomExtension));
            r328_currentGlyph.include(r312_CyrCheShape(r312_DivFrame(1), r312_XH, 0.4, r312_BODY.STRAIGHT, r312_SLAB ? r312_SERIFS.TOP : r312_SERIFS.NONE));
            r328_currentGlyph.include(r312_CyrDeBottom(r312_SB, r312_RightSB));
            var r328_fine = r312_AdviceStroke(3.5);
            r328_currentGlyph.include(r312_dispiro(r312_widths.rhs(r328_fine), r312_flat(r312_SB, r312_Stroke), r312_curl(r312_RightSB - r312_HSwToV(r312_Stroke), r312_XH - (r312_SLAB ? r312_Stroke : 0))));
            return void 0;
        }));
        var _r312_t10 = _r1_t2(r312_ItalicConfig)[Symbol.iterator]();
        var _r312_t11 = void 0;
        while (!(_r312_t11 = _r312_t10.next()).done) {
            _r312_t12 = _r312_t11.value;
            r312_suffix = _r312_t12[0];
            r312_body = _r312_t12[1][0];
            r312_slabUpright = _r312_t12[1][1];
            r312_slabUprightBGR = _r312_t12[1][2];
            r312_slabItalic = _r312_t12[1][3];
            _r312_t12[1];
            (function () {
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dche.italic." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                    var _r341_t0, _r341_t1;
                    var r341_df = r341_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r341_currentGlyph.include(r341_df.markSet.e());
                    var r341_sw = r341_df.adviceThinnerStroke(2, 0.75);
                    var r341_gap = 0.375 * (r341_df.rightSB - r341_df.leftSB) - r312_HSwToV(0.25 * r341_sw) + r341_sw / 16;
                    var r341_subDf = r312_DivFrame(Math.min((r341_df.width - r341_gap) / r312_Width, 0.75 * r341_df.adws), 2);
                    r341_currentGlyph.include(r312_CyrDeItalicShape(r341_subDf, r341_sw));
                    r341_currentGlyph.include(r312_difference(r312_CyrCheShape(r341_df, r312_XH, 0.5, r312_body, r312_SLAB ? r312_slabItalic : r312_SERIFS.NONE, new r312_xn$NamedParameterPair$2Lrc9b("sw", r341_sw)), r312_MaskLeft(r341_subDf.rightSB - r312_HSwToV(0.5 * r341_sw))));
                    return void 0;
                }));
            })();
        }
        return r312_xn$selectvariant$7Hrq("cyrl/dche.italic", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/che"));
    });
    return void 0;
});


