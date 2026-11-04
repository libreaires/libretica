"use strict";
import * as _s0_t0 from "@iosevka/glyph";
import * as _s0_t1 from "@iosevka/glyph/store";
import * as _s0_t2 from "@iosevka/glyph/block";
import * as _s0_t3 from "@iosevka/glyph/relation";
import * as _s0_t4 from "@iosevka/font-kits/spiro-kit";
import * as _s0_t5 from "@iosevka/font-kits/boole-kit";
import * as _s0_t6 from "@iosevka/font-kits/letter-model";
import * as _s0_t7 from "./meta/aesthetics.mjs";
import * as _s0_t8 from "@iosevka/util";
import * as _s0_t10 from "./common/derivatives.mjs";
import * as _s0_t11 from "./common/shapes.mjs";
import * as _s0_t12 from "./common/o-shape-variants.mjs";
import * as _s0_t13 from "./common/polygon.mjs";
import * as _s0_t14 from "./space/index.mjs";
import * as _s0_t15 from "./marks/index.mjs";
import * as _s0_t16 from "./letter/accent-builder.mjs";
import * as _s0_t17 from "./letter/shared.mjs";
import * as _s0_t18 from "./letter/shared/arc-hook.mjs";
import * as _s0_t19 from "./letter/shared/shoulder-bowl.mjs";
import * as _s0_t20 from "./letter/latin.mjs";
import * as _s0_t21 from "./letter/greek.mjs";
import * as _s0_t22 from "./letter/cyrillic.mjs";
import * as _s0_t23 from "./letter/armenian.mjs";
import * as _s0_t24 from "./number/index.mjs";
import * as _s0_t25 from "./letter-like/cursive.mjs";
import * as _s0_t26 from "./letter-like/fraktur.mjs";
import * as _s0_t27 from "./symbol/shared.mjs";
import * as _s0_t28 from "./symbol/punctuation.mjs";
import * as _s0_t29 from "./symbol/arrow.mjs";
import * as _s0_t30 from "./symbol/geometric.mjs";
import * as _s0_t31 from "./symbol/mosaic.mjs";
import * as _s0_t32 from "./symbol/enclosure.mjs";
import * as _s0_t33 from "./symbol/pictograph.mjs";
import * as _s0_t34 from "./symbol/math.mjs";
import * as _s0_t35 from "./symbol/letter.mjs";
import * as _s0_t36 from "./symbol/braille.mjs";
import * as _s0_t37 from "./symbol/counting-rod.mjs";
import * as _s0_t38 from "./symbol/combining.mjs";
import * as _s0_t39 from "./symbol/ligation.mjs";
import * as _s0_t40 from "./orthography/index.mjs";
import * as _s0_t41 from "./auto-build/recursive-build.mjs";
import * as _s0_t42 from "./auto-build/accents.mjs";
import * as _s0_t43 from "./auto-build/transformed.mjs";
import * as _s0_t44 from "./auto-build/composite.mjs";
var _s0_t9;
export {_s0_t9 as buildGlyphs};
var r1_buildGlyphs, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Glyph = _r1_t8.Glyph;
var r1_GlyphProc = _r1_t8.GlyphProc;
var r1_ForkGlyphProc = _r1_t8.ForkGlyphProc;
var _r1_t9 = _s0_t1;
var r1_GlyphStore = _r1_t9.GlyphStore;
var _r1_t10 = _s0_t2;
var r1_GlyphBlock = _r1_t10.GlyphBlock;
var r1_GlyphBuildExecutor = _r1_t10.GlyphBuildExecutor;
var r1_GlyphSaveSink = _r1_t10.GlyphSaveSink;
var r1_Gr = _s0_t3;
var r1_SpiroKit = _s0_t4;
var r1_BooleKit = _s0_t5;
var r1_LetterModel = _s0_t6;
var _r1_t11 = _s0_t7;
var r1_DesignParameters = _r1_t11.DesignParameters;
var r1_calculateMetrics = _r1_t11.calculateMetrics;
var r1_setFontMetrics = _r1_t11.setFontMetrics;
var _r1_t12 = _s0_t8;
var r1_xn$NamedParameterPair$2Lrc9b = _r1_t12["$NamedParameterPair$"];
var r1_isFinite = isFinite;
_s0_t9 = r1_buildGlyphs = function (r315_para, r315_recursive) {
    var _r315_t1, _r315_t2;
    var r315_xn$Exec$2Lrc5 = new r1_GlyphBuildExecutor(r315_recursive);
    var r315_glyphStore = new r1_GlyphStore();
    var r315_Metrics = r1_calculateMetrics(r315_para);
    var r315_fontMetrics = {
        "head": {},
        "hhea": {},
        "os2": {},
        "post": {}
    };
    r1_setFontMetrics(r315_para, r315_Metrics, r315_fontMetrics);
    var r315_DivFrame = r1_LetterModel.SetupBuilders(r315_Metrics);
    var r315_MarkSet = r315_DivFrame(1, 2).markSet;
    var _r315_t0 = ["AS-BASE", "ALSO-METRICS"];
    var r315_AS_BASE = _r315_t0[0];
    var r315_ALSO_METRICS = _r315_t0[1];
    var r315_xn$GlyphSaveSink$2Lrc4b = new r1_GlyphSaveSink(r315_xn$Exec$2Lrc5, r315_Metrics, r315_glyphStore);
    var r315_SpiroFns = r1_SpiroKit.SetupBuilders({
        "globalTransform": r315_Metrics.GlobalTransform,
        "Contrast": r315_Metrics.Contrast,
        "Stroke": r315_Metrics.Stroke,
        "CorrectionOMidX": r315_Metrics.CorrectionOMidX,
        "TINY": r315_Metrics.TINY,
        "Superness": r1_DesignParameters.superness
    });
    var r315_BooleFns = r1_BooleKit.SetupBuilders({
        "globalTransform": r315_Metrics.GlobalTransform
    });
    var r315_xn$Capture$2Lrc181 = {
        "$NamedParameterPair$": r1_xn$NamedParameterPair$2Lrc9b,
        "$Exec$": r315_xn$Exec$2Lrc5,
        "$GlyphSaveSink$": r315_xn$GlyphSaveSink$2Lrc4b,
        "Metrics": Object.assign({}, r315_Metrics),
        "para": r315_para,
        "recursive": r315_recursive,
        "glyphStore": r315_glyphStore,
        "SpiroFns": r315_SpiroFns,
        "BooleFns": r315_BooleFns,
        "DivFrame": r315_DivFrame,
        "MarkSet": r315_MarkSet,
        "AS_BASE": r315_AS_BASE,
        "ALSO_METRICS": r315_ALSO_METRICS,
        "buildGlyphs": r1_buildGlyphs,
        "fontMetrics": r315_fontMetrics,
        "GlyphProc": r1_GlyphProc,
        "ForkGlyphProc": r1_ForkGlyphProc
    };
    _s0_t10.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t11.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t12.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t13.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t14.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t15.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t16.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t17.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t18.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t19.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t20.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t21.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t22.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t23.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t24.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t25.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t26.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t27.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t28.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t29.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t30.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t31.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t32.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t33.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t34.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t35.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t36.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t37.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t38.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t39.apply.call(r315_xn$Capture$2Lrc181);
    _s0_t40.apply.call(r315_xn$Capture$2Lrc181);
    if (!r315_recursive) {
        _s0_t41.apply.call(r315_xn$Capture$2Lrc181);
        _s0_t42.apply.call(r315_xn$Capture$2Lrc181);
        _s0_t43.apply.call(r315_xn$Capture$2Lrc181);
        _s0_t44.apply.call(r315_xn$Capture$2Lrc181);
    }
    r315_xn$Exec$2Lrc5.executePendingBlocks();
    r315_xn$Exec$2Lrc5.release();
    return {
        "glyphStore": r315_glyphStore,
        "fontMetrics": r315_fontMetrics
    };
};


