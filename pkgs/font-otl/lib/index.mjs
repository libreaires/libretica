"use strict";
import * as _s0_t0 from "@iosevka/glyph/relation";
import * as _s0_t1 from "./table-util.mjs";
import * as _s0_t2 from "./gsub-ligation.mjs";
import * as _s0_t3 from "./gsub-ccmp.mjs";
import * as _s0_t4 from "./gsub-gr.mjs";
import * as _s0_t5 from "./gsub-frac.mjs";
import * as _s0_t6 from "./gsub-cv-ss.mjs";
import * as _s0_t7 from "./gsub-locl.mjs";
import * as _s0_t8 from "./gsub-thousands.mjs";
import * as _s0_t9 from "./gsub-texture.mjs";
import * as _s0_t10 from "./gpos-mark-mkmk.mjs";
var _s0_t11;
export {_s0_t11 as buildOtl};
var r1_buildOtl, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_Gr = _s0_t0;
var _r1_t8 = _s0_t1;
var r1_CreateEmptyTable = _r1_t8.CreateEmptyTable;
var _r1_t9 = _s0_t2;
var r1_buildLigations = _r1_t9.buildLigations;
var _r1_t10 = _s0_t3;
var r1_buildCCMP = _r1_t10.buildCCMP;
var r1_buildCCMPPostCvSs = _r1_t10.buildCCMPPostCvSs;
var _r1_t11 = _s0_t4;
var r1_buildGrFeature = _r1_t11.buildGrFeature;
var _r1_t12 = _s0_t5;
var r1_buildFrac = _r1_t12.buildFrac;
var _r1_t13 = _s0_t6;
var r1_buildCVSS = _r1_t13.buildCVSS;
var _r1_t14 = _s0_t7;
var r1_buildLOCL = _r1_t14.buildLOCL;
var _r1_t15 = _s0_t8;
var r1_buildGsubThousands = _r1_t15.buildGsubThousands;
var _r1_t16 = _s0_t9;
var r1_buildGsubTexture = _r1_t16.buildGsubTexture;
var _r1_t17 = _s0_t10;
var r1_buildMarkMkmk = _r1_t17.buildMarkMkmk;
var r1_GDEF_SIMPLE = 1;
var r1_GDEF_LIGATURE = 2;
var r1_GDEF_MARK = 3;
var r1_Set = Set;
var r1_Map = Map;
var r1_buildGSUB = function (r142_para, r142_glyphStore, r142_markGlyphs) {
    var r142_grIgnore, _r142_t0, _r142_t1;
    var r142_gsub = r1_CreateEmptyTable();
    if (r142_para.enableNwidWwid) {
        r142_grIgnore = r142_para.isQuasiProportional ? r1_Gr.IsCompositeOrLigature : null;
        r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.Nwid, r142_grIgnore);
        r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.Wwid, r142_grIgnore);
    }
    r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.Lnum);
    r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.Onum);
    r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.MosaicForm);
    r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.AplForm);
    r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.NumeratorForm);
    r1_buildGrFeature(r142_gsub, r142_glyphStore, r1_Gr.DenominatorForm);
    var r142_ccmp = r1_buildCCMP(r142_gsub, r142_glyphStore, r142_markGlyphs);
    if (r142_para.enableLigation) r1_buildLigations(r142_gsub, r142_para, r142_para.ligationBuildups);
    r1_buildFrac(r142_gsub, r142_glyphStore);
    r1_buildGsubThousands(r142_gsub, r142_para, r142_glyphStore);
    var r142_cvs = void 0;
    r142_cvs = r1_buildCVSS(r142_gsub, r142_para, r142_glyphStore);
    r1_buildCCMPPostCvSs(r142_gsub, r142_ccmp, r142_glyphStore, r142_markGlyphs);
    r1_buildLOCL(r142_gsub, r142_para, r142_glyphStore);
    if (r142_para.buildTextureFeature && !r142_para.isQuasiProportional) r1_buildGsubTexture(r142_gsub, r142_glyphStore, r142_markGlyphs, r142_cvs);
    r142_gsub.finalize();
    return r142_gsub;
};
var r1_buildGPOS = function (r143_para, r143_glyphStore, r143_markGlyphs) {
    var _r143_t0, _r143_t1;
    var r143_gpos = r1_CreateEmptyTable();
    r1_buildMarkMkmk(r143_gpos, r143_glyphStore, r143_markGlyphs);
    r143_gpos.finalize();
    return r143_gpos;
};
var r1_buildGDEF = function (r144_para, r144_glyphStore, r144_markGlyphs) {
    var r144_gn, r144_glyph, r144_clsStr, r144_clsNum, _r144_t2, _r144_t5, _r144_t6, _r144_t7;
    var r144_GDEF = {
        "glyphClassDef": {},
        "markAttachClassDef": {},
        "markGlyphSets": []
    };
    var _r144_t0 = r144_glyphStore.namedEntries()[Symbol.iterator]();
    var _r144_t1 = void 0;
    while (!(_r144_t1 = _r144_t0.next()).done) {
        _r144_t2 = _r144_t1.value;
        r144_gn = _r144_t2[0];
        r144_glyph = _r144_t2[1];
        if (r144_markGlyphs.all.has(r144_gn)) r144_GDEF.glyphClassDef[r144_gn] = r1_GDEF_MARK; else if ((/_/).test(r144_gn)) r144_GDEF.glyphClassDef[r144_gn] = r1_GDEF_LIGATURE; else if (true) r144_GDEF.glyphClassDef[r144_gn] = r1_GDEF_SIMPLE; else void 0;
    }
    var r144_n = 1;
    var r144_m = new r1_Map();
    var _r144_t3 = r144_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r144_t4 = void 0;
    while (!(_r144_t4 = _r144_t3.next()).done) {
        _r144_t5 = _r144_t4.value;
        r144_gn = _r144_t5[0];
        r144_clsStr = _r144_t5[1];
        r144_clsNum = r144_m.get(r144_clsStr);
        if (!r144_clsNum) {
            r144_clsNum = r144_n;
            r144_n = r144_n + 1;
            r144_m.set(r144_clsStr, r144_clsNum);
        }
        r144_GDEF.markAttachClassDef[r144_gn] = r144_clsNum;
    }
    r144_GDEF.markGlyphSets = r144_markGlyphs.markGlyphSets;
    return r144_GDEF;
};
_s0_t11 = r1_buildOtl = function (r148_para, r148_glyphStore) {
    var r148_gnMark, _r148_t2, _r148_t3;
    r1_Gr.linkSuffixPairGr(r148_glyphStore, "NWID", "WWID", r1_Gr.Nwid, r1_Gr.Wwid);
    r1_Gr.linkSuffixPairGr(r148_glyphStore, "lnum", "onum", r1_Gr.Lnum, r1_Gr.Onum);
    r1_Gr.linkSuffixGr(r148_glyphStore, "aplForm", r1_Gr.AplForm);
    var r148_markGlyphs = {
        "all": new r1_Set(),
        "markAttachClassDef": new r1_Map(),
        "markGlyphSets": []
    };
    var r148_GPOS = r1_buildGPOS(r148_para, r148_glyphStore, r148_markGlyphs);
    var r148_GDEF = r1_buildGDEF(r148_para, r148_glyphStore, r148_markGlyphs);
    var r148_GSUB = r1_buildGSUB(r148_para, r148_glyphStore, r148_markGlyphs);
    var _r148_t0 = r148_markGlyphs.all[Symbol.iterator]();
    var _r148_t1 = void 0;
    while (!(_r148_t1 = _r148_t0.next()).done) {
        r148_gnMark = _r148_t1.value;
        r1_Gr.Joining.or(r148_glyphStore.queryByName(r148_gnMark), r1_Gr.Joining.Classes.Left);
    }
    return {
        "GSUB": r148_GSUB,
        "GPOS": r148_GPOS,
        "GDEF": r148_GDEF
    };
};


