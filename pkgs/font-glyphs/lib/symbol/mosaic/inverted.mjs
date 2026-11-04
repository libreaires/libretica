"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_Gr = _s0_t1;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Inverted", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_fontMetrics = _r313_t0.fontMetrics;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_difference = _r313_t4.difference;
        return (function () {
            var r316_FMosaicWide, r316_MosaicNameSuffix, r316_MosaicWidth, r316_MosaicWidthScalar, _r316_t3, _r316_t5, _r316_t6, _r316_tag7;
            var r316_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r316_t0 = r316_WidthKinds;
            var _r316_t1 = _r316_t0.length;
            var _r316_t2 = 0;
            var _r316_t4 = _r316_t2 < _r316_t1;
            while (_r316_t4) {
                _r316_t3 = _r316_t0[_r316_t2];
                r316_FMosaicWide = _r316_t3[0];
                r316_MosaicNameSuffix = _r316_t3[1];
                r316_MosaicWidth = _r316_t3[2];
                r316_MosaicWidthScalar = _r316_t3[3];
                (function () {
                    var r319_MosaicDesiredWidth = r313_WideWidth1;
                    var r319_MosaicMiddle = r316_MosaicWidth / 2;
                    var r319_MosaicUnitWidth = r316_MosaicWidth / r316_MosaicWidthScalar;
                    var r319_MangleUnicode = function (r320_unicode, r320__desiredOverride) {
                        var _r320_t0, _r320_t1;
                        return r316_MosaicWidth === (r320__desiredOverride || r319_MosaicDesiredWidth) ? r320_unicode : void 0;
                    };
                    var r319_MangleName = function (r321_name) {
                        var _r321_t0, _r321_t1;
                        return r321_name + r316_MosaicNameSuffix;
                    };
                    var _r319_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r319_xn$withtransform$5sIl = _r319_t0["with-transform"];
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var r319_NameUni = _r319_t1.NameUni;
                    var r319_MosaicTop = r313_fontMetrics.os2.sTypoAscender;
                    var r319_MosaicBottom = r313_fontMetrics.os2.sTypoDescender;
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(9688)), r319_MangleUnicode(9688), new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                        var _r326_t0, _r326_t1;
                        r326_currentGlyph.setWidth(r316_MosaicWidth);
                        r326_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$referglyph$1aao(r319_MangleName("blackCircle"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(9690)), r319_MangleUnicode(9690), new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                        var _r331_t0, _r331_t1;
                        r331_currentGlyph.setWidth(r316_MosaicWidth);
                        r331_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9600))), r319_xn$referglyph$1aao(r319_MangleName("whiteCircle"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(9691)), r319_MangleUnicode(9691), new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                        var _r336_t0, _r336_t1;
                        r336_currentGlyph.setWidth(r316_MosaicWidth);
                        r336_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9604))), r319_xn$referglyph$1aao(r319_MangleName("whiteCircle"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(9689)), r319_MangleUnicode(9689), new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                        var _r341_t0, _r341_t1;
                        r341_currentGlyph.setWidth(r316_MosaicWidth);
                        r341_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$referglyph$1aao(r319_MangleName("whiteCircle"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("negBlackDiamond"), r319_MangleUnicode(117901), new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                        var _r346_t0, _r346_t1;
                        r346_currentGlyph.setWidth(r316_MosaicWidth);
                        r346_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$referglyph$1aao(r319_MangleName("blackDiamond"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(117902)), r319_MangleUnicode(117902), new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                        var _r351_t0, _r351_t1;
                        r351_currentGlyph.setWidth(r316_MosaicWidth);
                        r351_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(129917))));
                        r351_currentGlyph.include(r319_xn$withtransform$5sIl(r313_ApparentTranslate(r316_MosaicWidth / 16, (r319_MosaicBottom - r319_MosaicTop) / 16), r319_xn$referglyph$1aao(r319_MangleName("blackSmallSquare"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(117903)), r319_MangleUnicode(117903), new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                        var _r357_t0, _r357_t1;
                        r357_currentGlyph.setWidth(r316_MosaicWidth);
                        r357_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$withtransform$5sIl(r313_ApparentTranslate(r316_MosaicWidth / 16, (r319_MosaicBottom - r319_MosaicTop) / 16), r319_xn$referglyph$1aao(r319_MangleName("blackSmallSquare")))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(129204)), r319_MangleUnicode(129204), new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                        var _r362_t0, _r362_t1;
                        r362_currentGlyph.setWidth(r316_MosaicWidth);
                        r362_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$referglyph$1aao(r319_MangleName("arrowLeft"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(129205)), r319_MangleUnicode(129205), new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
                        var _r367_t0, _r367_t1;
                        r367_currentGlyph.setWidth(r316_MosaicWidth);
                        r367_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$referglyph$1aao(r319_MangleName("arrowUp"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(129206)), r319_MangleUnicode(129206), new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                        var _r372_t0, _r372_t1;
                        r372_currentGlyph.setWidth(r316_MosaicWidth);
                        r372_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$referglyph$1aao(r319_MangleName("arrowRight"))));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r319_NameUni(129207)), r319_MangleUnicode(129207), new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                        var _r377_t0, _r377_t1;
                        r377_currentGlyph.setWidth(r316_MosaicWidth);
                        r377_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName(r319_NameUni(9608))), r319_xn$referglyph$1aao(r319_MangleName("arrowDown"))));
                        return void 0;
                    }));
                })();
                _r316_t5 = _r316_t2 = _r316_t2 + 1;
                _r316_t4 = _r316_t2 < _r316_t1;
            }
            return _r316_t5;
        })();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r382_xn$Capture_Ext$2Lrc2b) {
    var _r382_t0, _r382_t1;
    r382_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r382_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Inverted-Box-Drawing", function (r383_xn$Capture$2Lrc8, r383_xn$ExportCapture$2Lrc4b) {
        var _r383_t5, _r383_t6, _r383_t7, _r383_tag8;
        var _r383_t0 = r383_xn$Capture$2Lrc8;
        var r383_xn$GlyphSaveSink$2Lrc4b = _r383_t0["$GlyphSaveSink$"];
        var r383_xn$NamedParameterPair$2Lrc9b = _r383_t0["$NamedParameterPair$"];
        var r383_xn$Exec$2Lrc5 = _r383_t0["$Exec$"];
        var r383_fontMetrics = _r383_t0.fontMetrics;
        var _r383_t1 = r383_xn$Capture$2Lrc8.Metrics;
        var r383_WideWidth4 = _r383_t1.WideWidth4;
        var _r383_t2 = r383_xn$Capture$2Lrc8.SpiroFns;
        var _r383_t3 = r383_xn$Capture$2Lrc8.SpiroFns;
        var r383_xn$decor$0cao = _r383_t3["decor@"];
        var r383_xn$decor$0cao1 = _r383_t3["decor@@"];
        var r383_xn$decor$0cao11 = _r383_t3["decor@@@"];
        var _r383_t4 = r383_xn$Capture$2Lrc8.BooleFns;
        var r383_difference = _r383_t4.difference;
        return (function () {
            var r386_FMosaicWide, r386_MosaicNameSuffix, r386_MosaicWidth, r386_MosaicWidthScalar, _r386_t3, _r386_t5, _r386_t6, _r386_tag7;
            var r386_WidthKinds = [[0, ".NWID", r383_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r383_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r386_t0 = r386_WidthKinds;
            var _r386_t1 = _r386_t0.length;
            var _r386_t2 = 0;
            var _r386_t4 = _r386_t2 < _r386_t1;
            while (_r386_t4) {
                _r386_t3 = _r386_t0[_r386_t2];
                r386_FMosaicWide = _r386_t3[0];
                r386_MosaicNameSuffix = _r386_t3[1];
                r386_MosaicWidth = _r386_t3[2];
                r386_MosaicWidthScalar = _r386_t3[3];
                (function () {
                    var r389_MosaicDesiredWidth = r383_WideWidth4;
                    var r389_MosaicMiddle = r386_MosaicWidth / 2;
                    var r389_MosaicUnitWidth = r386_MosaicWidth / r386_MosaicWidthScalar;
                    var r389_MangleUnicode = function (r390_unicode, r390__desiredOverride) {
                        var _r390_t0, _r390_t1;
                        return r386_MosaicWidth === (r390__desiredOverride || r389_MosaicDesiredWidth) ? r390_unicode : void 0;
                    };
                    var r389_MangleName = function (r391_name) {
                        var _r391_t0, _r391_t1;
                        return r391_name + r386_MosaicNameSuffix;
                    };
                    var _r389_t0 = r383_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r389_ForceUpright = _r389_t0.ForceUpright;
                    var _r389_t1 = r383_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r389_xn$referglyph$1aao = _r389_t1["refer-glyph"];
                    var r389_NameUni = _r389_t1.NameUni;
                    var r389_MosaicTop = r383_fontMetrics.os2.sTypoAscender;
                    var r389_MosaicBottom = r383_fontMetrics.os2.sTypoDescender;
                    r383_xn$GlyphSaveSink$2Lrc4b.save(r389_MangleName(r389_NameUni(129981)), r389_MangleUnicode(129981), new r383_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                        var _r396_t0, _r396_t1;
                        r396_currentGlyph.setWidth(r386_MosaicWidth);
                        r396_currentGlyph.include(r389_ForceUpright());
                        r396_currentGlyph.include(r383_difference(r389_xn$referglyph$1aao(r389_MangleName(r389_NameUni(9608))), r389_xn$referglyph$1aao(r389_MangleName(r389_NameUni(9587)))));
                        return void 0;
                    }));
                    r383_xn$GlyphSaveSink$2Lrc4b.save(r389_MangleName(r389_NameUni(129982)), r389_MangleUnicode(129982), new r383_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                        var _r402_t0, _r402_t1;
                        r402_currentGlyph.setWidth(r386_MosaicWidth);
                        r402_currentGlyph.include(r389_ForceUpright());
                        r402_currentGlyph.include(r383_difference(r389_xn$referglyph$1aao(r389_MangleName(r389_NameUni(9608))), r389_xn$referglyph$1aao(r389_MangleName(r389_NameUni(129955)))));
                        return void 0;
                    }));
                    return r383_xn$GlyphSaveSink$2Lrc4b.save(r389_MangleName(r389_NameUni(129983)), r389_MangleUnicode(129983), new r383_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
                        var _r408_t0, _r408_t1;
                        r408_currentGlyph.setWidth(r386_MosaicWidth);
                        r408_currentGlyph.include(r389_ForceUpright());
                        r408_currentGlyph.include(r383_difference(r389_xn$referglyph$1aao(r389_MangleName(r389_NameUni(9608))), r389_xn$referglyph$1aao(r389_MangleName(r389_NameUni(129966)))));
                        return void 0;
                    }));
                })();
                _r386_t5 = _r386_t2 = _r386_t2 + 1;
                _r386_t4 = _r386_t2 < _r386_t1;
            }
            return _r386_t5;
        })();
    });
    return void 0;
});


