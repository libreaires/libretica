"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Keyboard", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_close = _r313_t2.close;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var r313_ExtLineLhs = _r313_t5.ExtLineLhs;
        var r313_ExtLineRhs = _r313_t5.ExtLineRhs;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t7.GeometricDim;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "KeyGen": r313_KeyGen
            };
        });
        var r313_KeyGen = function (r319_top, r319_bot, r319_left, r319_right, r319_nCols, r319_nRows, r319_sw, r319_keys) {
            var _r319_t0, _r319_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321_yp, r321_xp1, r321_xp2, _r321_t3, _r321_t4, _r321_t5;
                var _r321_t0 = r319_keys;
                var _r321_t1 = _r321_t0.length;
                var _r321_t2 = 0;
                while (_r321_t2 < _r321_t1) {
                    _r321_t3 = _r321_t0[_r321_t2];
                    r321_yp = _r321_t3[0];
                    r321_xp1 = _r321_t3[1];
                    r321_xp2 = _r321_t3[2];
                    r321_currentGlyph.include(r313_HBar.m(r1_mix(r319_left, r319_right, r321_xp1 / r319_nCols), r1_mix(r319_left, r319_right, r321_xp2 / r319_nCols), r1_mix(r319_bot + r319_sw, r319_top - r319_sw, (r321_yp + 0.5) / r319_nRows), r319_sw));
                    _r321_t2 = _r321_t2 + 1;
                }
                return void 0;
            });
        };
        (function () {
            var r326_FMosaicWide, r326_MosaicNameSuffix, r326_MosaicWidth, r326_MosaicWidthScalar, _r326_t3, _r326_t5, _r326_t6, _r326_tag7;
            var r326_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r326_t0 = r326_WidthKinds;
            var _r326_t1 = _r326_t0.length;
            var _r326_t2 = 0;
            var _r326_t4 = _r326_t2 < _r326_t1;
            while (_r326_t4) {
                _r326_t3 = _r326_t0[_r326_t2];
                r326_FMosaicWide = _r326_t3[0];
                r326_MosaicNameSuffix = _r326_t3[1];
                r326_MosaicWidth = _r326_t3[2];
                r326_MosaicWidthScalar = _r326_t3[3];
                (function () {
                    var _r329_t0, _r329_tag1;
                    var r329_MosaicDesiredWidth = r313_WideWidth1;
                    var r329_MosaicMiddle = r326_MosaicWidth / 2;
                    var r329_MosaicUnitWidth = r326_MosaicWidth / r326_MosaicWidthScalar;
                    var r329_MangleUnicode = function (r330_unicode, r330__desiredOverride) {
                        var _r330_t0, _r330_t1;
                        return r326_MosaicWidth === (r330__desiredOverride || r329_MosaicDesiredWidth) ? r330_unicode : void 0;
                    };
                    var r329_MangleName = function (r331_name) {
                        var _r331_t0, _r331_t1;
                        return r331_name + r326_MosaicNameSuffix;
                    };
                    var r329_Geom = r313_GeometricDim(r329_MosaicUnitWidth, r326_MosaicWidth);
                    return (function () {
                        var r333_KeyboardShape = function (r334_top, r334_bot, r334_left, r334_right, r334_sw) {
                            var _r334_t0, _r334_t1;
                            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                                var _r336_t0, _r336_t1;
                                var r336_scaffold = {};
                                r336_scaffold.keyInset = (r334_top - r334_bot) / 16 * (r326_MosaicWidthScalar / 2);
                                var r336_keyTop = r334_top - r334_sw - r336_scaffold.keyInset;
                                var r336_keyBot = r334_bot + r334_sw + r336_scaffold.keyInset;
                                var r336_keyLeft = r334_left + r313_HSwToV(r334_sw) + r336_scaffold.keyInset;
                                var r336_keyRight = r334_right - r313_HSwToV(r334_sw) - r336_scaffold.keyInset;
                                r336_currentGlyph.include(r313_HBar.t(r334_left, r334_right, r334_top, r334_sw));
                                r336_currentGlyph.include(r313_HBar.b(r334_left, r334_right, r334_bot, r334_sw));
                                r336_currentGlyph.include(r313_VBar.l(r334_left, r334_bot, r334_top, r334_sw));
                                r336_currentGlyph.include(r313_VBar.r(r334_right, r334_bot, r334_top, r334_sw));
                                r336_currentGlyph.include(r313_KeyGen(r336_keyTop, r336_keyBot, r336_keyLeft, r336_keyRight, 59, 5, Math.min(r334_sw, (r336_keyTop - r336_keyBot) / 9), [[4, 0, 3], [4, 4, 7], [4, 8, 11], [4, 12, 15], [4, 16, 19], [4, 20, 23], [4, 24, 27], [4, 28, 31], [4, 32, 35], [4, 36, 39], [4, 40, 43], [4, 44, 47], [4, 48, 51], [4, 52, 55], [4, 56, 59], [3, 0, 5], [3, 6, 9], [3, 10, 13], [3, 14, 17], [3, 18, 21], [3, 22, 25], [3, 26, 29], [3, 30, 33], [3, 34, 37], [3, 38, 41], [3, 42, 45], [3, 46, 49], [3, 50, 53], [3, 54, 59], [2, 0, 6], [2, 7, 10], [2, 11, 14], [2, 15, 18], [2, 19, 22], [2, 23, 26], [2, 27, 30], [2, 31, 34], [2, 35, 38], [2, 39, 42], [2, 43, 46], [2, 47, 50], [2, 51, 59], [1, 0, 8], [1, 9, 12], [1, 13, 16], [1, 17, 20], [1, 21, 24], [1, 25, 28], [1, 29, 32], [1, 33, 36], [1, 37, 40], [1, 41, 44], [1, 45, 48], [1, 49, 55], [1, 56, 59], [0, 6, 9], [0, 10, 15], [0, 16, 39], [0, 40, 45], [0, 46, 49]]));
                                return void 0;
                            });
                        };
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r329_MangleName("keyboard"), r329_MangleUnicode(9000), new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                            var _r344_t0, _r344_t1;
                            r344_currentGlyph.setWidth(r329_Geom.Width);
                            var r344_sw = r313_AdviceStroke(8, Math.sqrt(r326_MosaicWidthScalar));
                            r344_currentGlyph.include(r333_KeyboardShape(r329_Geom.MidY + r329_Geom.Size / 1.5, r329_Geom.MidY - r329_Geom.Size / 1.5, r329_Geom.Left, r329_Geom.Right, r344_sw));
                            return void 0;
                        }));
                    })();
                })();
                _r326_t5 = _r326_t2 = _r326_t2 + 1;
                _r326_t4 = _r326_t2 < _r326_t1;
            }
            return _r326_t5;
        })();
        r313_xn$GlyphSaveSink$2Lrc4b.save("insertSignBase", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            var r349_box = new r1_Box(r313_XH, 0, r313_SB, r313_RightSB);
            var r349_sw = r313_AdviceStroke(4);
            r349_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r349_box.l, r349_box.yp(0.5)), r313_corner(r349_box.xp(0.5), r349_box.t), r313_corner(r349_box.r, r349_box.yp(0.5)), r313_corner(r349_box.xp(0.5), r349_box.b), r313_close()), r313_union(r313_ExtLineLhs(r349_box.l, r349_box.yp(0.5), r349_box.xp(0.5), r349_box.b, r349_sw, 8), r313_ExtLineRhs(r349_box.r, r349_box.yp(0.5), r349_box.xp(0.5), r349_box.b, r349_sw, 8))));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("underscoreSignBase", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
            var _r353_t0, _r353_t1;
            var r353_sb = 0.5 * r313_SB;
            var r353_sw = r313_AdviceStroke(4);
            var r353_yc = r313_SymbolMid - r313_XH / 2;
            r353_currentGlyph.include(r313_HBar.b(r353_sb, r313_Width - r353_sb, r353_yc, r353_sw));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("BrokenUnderscoreSignBase", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
            var _r357_t0, _r357_t1;
            var r357_sb = 0.5 * r313_SB;
            var r357_sw = r313_AdviceStroke(4);
            var r357_yc = r313_SymbolMid - r313_XH / 2;
            var r357_gap = Math.max(r313_Width / 12, r313_AdviceStroke(4));
            r357_currentGlyph.include(r313_HBar.b(r357_sb, r313_Middle - r357_gap / 2, r357_yc, r357_sw));
            r357_currentGlyph.include(r313_HBar.b(r313_Middle + r357_gap / 2, r313_Width - r357_sb, r357_yc, r357_sw));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("correctionSignBase", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
            var _r362_t0, _r362_t1;
            var r362_sb = 0.5 * r313_SB;
            var r362_box = new r1_Box(r313_SymbolMid + r313_XH / 4, r313_SymbolMid - r313_XH / 4, r362_sb, r313_Width - r362_sb);
            var r362_sw = r313_AdviceStroke(5);
            r362_currentGlyph.include(r313_ExtLineCenter(r362_box.l, r362_box.t, r362_box.xp(0.2), r362_box.yp(0.9), r362_sw));
            r362_currentGlyph.include(r313_ExtLineCenter(r362_box.l + r313_OX, r362_box.yp(0.5), r362_box.xp(0.2), r362_box.yp(0.5), r362_sw));
            r362_currentGlyph.include(r313_ExtLineCenter(r362_box.l, r362_box.b, r362_box.xp(0.2), r362_box.yp(0.1), r362_sw));
            r362_currentGlyph.include(r313_ExtLineCenter(r362_box.r, r362_box.t, r362_box.xp(0.8), r362_box.yp(0.9), r362_sw));
            r362_currentGlyph.include(r313_ExtLineCenter(r362_box.r - r313_OX, r362_box.yp(0.5), r362_box.xp(0.8), r362_box.yp(0.5), r362_sw));
            r362_currentGlyph.include(r313_ExtLineCenter(r362_box.r, r362_box.b, r362_box.xp(0.8), r362_box.yp(0.1), r362_sw));
            return void 0;
        }));
    });
    return void 0;
});


