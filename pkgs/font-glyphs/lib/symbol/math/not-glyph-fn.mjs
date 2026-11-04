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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "NotGlyphFn", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_BgOpTop = _r312_t1.BgOpTop;
        var r312_BgOpBot = _r312_t1.BgOpBot;
        var r312_Translate = _r312_t1.Translate;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
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
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$queryglyph$1aao = _r312_t6["query-glyph"];
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "NotGlyphSw": r312_NotGlyphSw,
                "notGlyph": r312_notGlyph
            };
        });
        var r312_NotGlyphSw = r312_AdviceStroke(4.5);
        var r312_notGlyphGeneric = function (r317_newid, r317_unicode, r317_oldid, r317_top, r317_bot, r317_prop, r317_shift, r317_F) {
            var _r317_t0, _r317_t1;
            var r317_component = r317_F(r1_fallback(r317_top, r312_BgOpTop), r1_fallback(r317_bot, r312_BgOpBot), r1_mix(r312_SB, r312_RightSB, r1_fallback(r317_prop, 0.25)), r1_mix(r312_RightSB, r312_SB, r1_fallback(r317_prop, 0.25)), r312_NotGlyphSw, r1_fallback(r317_shift, 0));
            return r312_xn$GlyphSaveSink$2Lrc4b.save(r317_newid || "not" + r317_oldid, r317_unicode, new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                r320_currentGlyph.include(r312_xn$referglyph$1aao(r317_oldid));
                r320_currentGlyph.include(r317_component);
                return void 0;
            }));
        };
        var r312_notGlyph = function () {
            var _r323_t5;
            var _r323_t6 = arguments;
            var r323_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r323_t6, 0);
            var _r323_t0 = [];
            var _r323_t1 = 0;
            while (_r323_t1 < r323_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r323_xn$flexarguments$2Lrc7uIe5[_r323_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r323_t0.push(r323_xn$flexarguments$2Lrc7uIe5[_r323_t1]);
                _r323_t1 = _r323_t1 + 1;
            }
            var _r323_t2 = r323_xn$flexarguments$2Lrc7uIe5;
            var _r323_t3 = _r323_t2.length;
            var _r323_t4 = 0;
            while (_r323_t4 < _r323_t3) {
                _r323_t1 = _r323_t2[_r323_t4];
                if (_r323_t1 && _r323_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "newid") r323_newid = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "unicode") r323_unicode = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "oldid") r323_oldid = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "top") r323_top = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "bot") r323_bot = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "prop") r323_prop = _r323_t1.right;
                if (_r323_t1 && _r323_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r323_t1.left === "shift") r323_shift = _r323_t1.right;
                _r323_t4 = _r323_t4 + 1;
            }
            var r323_newid = r1_fallback(r323_newid, _r323_t0[0]);
            var r323_unicode = r1_fallback(r323_unicode, _r323_t0[1]);
            var r323_oldid = r1_fallback(r323_oldid, _r323_t0[2]);
            var r323_top = r1_fallback(r323_top, _r323_t0[3]);
            var r323_bot = r1_fallback(r323_bot, _r323_t0[4]);
            var r323_prop = r1_fallback(r323_prop, _r323_t0[5]);
            var r323_shift = r1_fallback(r323_shift, _r323_t0[6]);
            return r312_notGlyphGeneric(r323_newid, r323_unicode, r323_oldid, r323_top, r323_bot, r323_prop, r323_shift, function (r328_t, r328_b, r328_l, r328_r, r328_sw, r328_sh) {
                var _r328_t0, _r328_t1;
                var r328_slashBarName = ".NotGlyphSlash{" + r328_l + "}{" + r328_r + "}{" + r328_t + "}{" + r328_b + "}{" + r328_sw + "}";
                if (!r312_xn$queryglyph$1aao(r328_slashBarName)) r312_xn$GlyphSaveSink$2Lrc4b.save(r328_slashBarName, null, r312_dispiro(r312_widths.center(r328_sw), r312_flat(r328_l, r328_b), r312_curl(r328_r, r328_t)));
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                    var _r331_t0, _r331_t1;
                    r331_currentGlyph.include(r312_xn$withtransform$5sIl(r312_Translate(r328_sh, 0), r312_xn$referglyph$1aao(r328_slashBarName)));
                    return void 0;
                });
            });
        };
        r312_notGlyph.right = function () {
            var _r333_t5;
            var _r333_t6 = arguments;
            var r333_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r333_t6, 0);
            var _r333_t0 = [];
            var _r333_t1 = 0;
            while (_r333_t1 < r333_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r333_xn$flexarguments$2Lrc7uIe5[_r333_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r333_t0.push(r333_xn$flexarguments$2Lrc7uIe5[_r333_t1]);
                _r333_t1 = _r333_t1 + 1;
            }
            var _r333_t2 = r333_xn$flexarguments$2Lrc7uIe5;
            var _r333_t3 = _r333_t2.length;
            var _r333_t4 = 0;
            while (_r333_t4 < _r333_t3) {
                _r333_t1 = _r333_t2[_r333_t4];
                if (_r333_t1 && _r333_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "newid") r333_newid = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "unicode") r333_unicode = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "oldid") r333_oldid = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "top") r333_top = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "bot") r333_bot = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "prop") r333_prop = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "shift") r333_shift = _r333_t1.right;
                _r333_t4 = _r333_t4 + 1;
            }
            var r333_newid = r1_fallback(r333_newid, _r333_t0[0]);
            var r333_unicode = r1_fallback(r333_unicode, _r333_t0[1]);
            var r333_oldid = r1_fallback(r333_oldid, _r333_t0[2]);
            var r333_top = r1_fallback(r333_top, _r333_t0[3]);
            var r333_bot = r1_fallback(r333_bot, _r333_t0[4]);
            var r333_prop = r1_fallback(r333_prop, _r333_t0[5]);
            var r333_shift = r1_fallback(r333_shift, _r333_t0[6]);
            return r312_notGlyph(r333_newid, r333_unicode, r333_oldid, r333_top, r333_bot, r333_prop, -r312_NotGlyphSw * 0.5);
        };
        r312_notGlyph.left = function () {
            var _r338_t5;
            var _r338_t6 = arguments;
            var r338_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r338_t6, 0);
            var _r338_t0 = [];
            var _r338_t1 = 0;
            while (_r338_t1 < r338_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r338_xn$flexarguments$2Lrc7uIe5[_r338_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r338_t0.push(r338_xn$flexarguments$2Lrc7uIe5[_r338_t1]);
                _r338_t1 = _r338_t1 + 1;
            }
            var _r338_t2 = r338_xn$flexarguments$2Lrc7uIe5;
            var _r338_t3 = _r338_t2.length;
            var _r338_t4 = 0;
            while (_r338_t4 < _r338_t3) {
                _r338_t1 = _r338_t2[_r338_t4];
                if (_r338_t1 && _r338_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "newid") r338_newid = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "unicode") r338_unicode = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "oldid") r338_oldid = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "top") r338_top = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "bot") r338_bot = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "prop") r338_prop = _r338_t1.right;
                if (_r338_t1 && _r338_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r338_t1.left === "shift") r338_shift = _r338_t1.right;
                _r338_t4 = _r338_t4 + 1;
            }
            var r338_newid = r1_fallback(r338_newid, _r338_t0[0]);
            var r338_unicode = r1_fallback(r338_unicode, _r338_t0[1]);
            var r338_oldid = r1_fallback(r338_oldid, _r338_t0[2]);
            var r338_top = r1_fallback(r338_top, _r338_t0[3]);
            var r338_bot = r1_fallback(r338_bot, _r338_t0[4]);
            var r338_prop = r1_fallback(r338_prop, _r338_t0[5]);
            var r338_shift = r1_fallback(r338_shift, _r338_t0[6]);
            return r312_notGlyph(r338_newid, r338_unicode, r338_oldid, r338_top, r338_bot, r338_prop, r312_NotGlyphSw * 0.5);
        };
        return r312_notGlyph.generic = function () {
            var _r343_t5;
            var _r343_t6 = arguments;
            var r343_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r343_t6, 0);
            var _r343_t0 = [];
            var _r343_t1 = 0;
            while (_r343_t1 < r343_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r343_xn$flexarguments$2Lrc7uIe5[_r343_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r343_t0.push(r343_xn$flexarguments$2Lrc7uIe5[_r343_t1]);
                _r343_t1 = _r343_t1 + 1;
            }
            var _r343_t2 = r343_xn$flexarguments$2Lrc7uIe5;
            var _r343_t3 = _r343_t2.length;
            var _r343_t4 = 0;
            while (_r343_t4 < _r343_t3) {
                _r343_t1 = _r343_t2[_r343_t4];
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "newid") r343_newid = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "unicode") r343_unicode = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "oldid") r343_oldid = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "top") r343_top = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "bot") r343_bot = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "prop") r343_prop = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "shift") r343_shift = _r343_t1.right;
                if (_r343_t1 && _r343_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r343_t1.left === "F") r343_F = _r343_t1.right;
                _r343_t4 = _r343_t4 + 1;
            }
            var r343_newid = r1_fallback(r343_newid, _r343_t0[0]);
            var r343_unicode = r1_fallback(r343_unicode, _r343_t0[1]);
            var r343_oldid = r1_fallback(r343_oldid, _r343_t0[2]);
            var r343_top = r1_fallback(r343_top, _r343_t0[3]);
            var r343_bot = r1_fallback(r343_bot, _r343_t0[4]);
            var r343_prop = r1_fallback(r343_prop, _r343_t0[5]);
            var r343_shift = r1_fallback(r343_shift, _r343_t0[6]);
            var r343_F = r1_fallback(r343_F, _r343_t0[7]);
            return r312_notGlyphGeneric(r343_newid, r343_unicode, r343_oldid, r343_top, r343_bot, r343_prop, r343_shift, r343_F);
        };
    });
    return void 0;
});


