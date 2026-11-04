"use strict";
import * as _s0_t0 from "@iosevka/glyph/relation";
import * as _s0_t1 from "./gsub-gr.mjs";
var _s0_t2;
export {_s0_t2 as buildLOCL};
var r1_buildLOCL, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_CvDecompose = _r1_t8.CvDecompose;
var r1_LocalizedForm = _r1_t8.LocalizedForm;
var _r1_t9 = _s0_t1;
var r1_createGsubLookupFromGr = _r1_t9.createGsubLookupFromGr;
var r1_Set = Set;
_s0_t2 = r1_buildLOCL = function (r148_gsub, r148_para, r148_glyphStore) {
    var _r148_t1, _r148_t2, _r148_t3, _r148_tag4;
    var r148_rec = r148_gsub.beginBlock();
    var _r148_t0 = r148_gsub.ChainRuleBuilder();
    var r148_xn$chainrule$1aao = _r148_t0[0];
    var r148_cyrlSRB = r148_gsub.copyLanguage("cyrl_SRB ", "cyrl_DFLT");
    var r148_cyrlMKD = r148_gsub.copyLanguage("cyrl_MKD ", "cyrl_DFLT");
    var r148_cyrlBOS = r148_gsub.copyLanguage("cyrl_BOS ", "cyrl_DFLT");
    var r148_cyrlBGR = r148_gsub.copyLanguage("cyrl_BGR ", "cyrl_DFLT");
    var r148_cyrlBSH = r148_gsub.copyLanguage("cyrl_BSH ", "cyrl_DFLT");
    var r148_cyrlCHU = r148_gsub.copyLanguage("cyrl_CHU ", "cyrl_DFLT");
    var r148_latnNSM = r148_gsub.copyLanguage("latn_NSM ", "latn_DFLT");
    var r148_latnISM = r148_gsub.copyLanguage("latn_ISM ", "latn_DFLT");
    var r148_latnLSM = r148_gsub.copyLanguage("latn_LSM ", "latn_DFLT");
    var r148_latnSJE = r148_gsub.copyLanguage("latn_SJE ", "latn_DFLT");
    var r148_latnSJU = r148_gsub.copyLanguage("latn_SJU ", "latn_DFLT");
    var r148_latnSKS = r148_gsub.copyLanguage("latn_SKS ", "latn_DFLT");
    var r148_latnSSM = r148_gsub.copyLanguage("latn_SSM ", "latn_DFLT");
    var r148_latnPLK = r148_gsub.copyLanguage("latn_PLK ", "latn_DFLT");
    var r148_latnROM = r148_gsub.copyLanguage("latn_ROM ", "latn_DFLT");
    var r148_latnMOL = r148_gsub.copyLanguage("latn_MOL ", "latn_DFLT");
    var r148_latnTRK = r148_gsub.copyLanguage("latn_TRK ", "latn_DFLT");
    var r148_latnAZE = r148_gsub.copyLanguage("latn_AZE ", "latn_DFLT");
    var r148_latnCRT = r148_gsub.copyLanguage("latn_CRT ", "latn_DFLT");
    var r148_latnGAG = r148_gsub.copyLanguage("latn_GAG ", "latn_DFLT");
    var r148_latnJCT = r148_gsub.copyLanguage("latn_JCT ", "latn_DFLT");
    var r148_latnKAZ = r148_gsub.copyLanguage("latn_KAZ ", "latn_DFLT");
    var r148_latnKJJ = r148_gsub.copyLanguage("latn_KJJ ", "latn_DFLT");
    var r148_latnKMZ = r148_gsub.copyLanguage("latn_KMZ ", "latn_DFLT");
    var r148_latnTAT = r148_gsub.copyLanguage("latn_TAT ", "latn_DFLT");
    var r148_latnTLY = r148_gsub.copyLanguage("latn_TLY ", "latn_DFLT");
    var r148_latnUDI = r148_gsub.copyLanguage("latn_UDI ", "latn_DFLT");
    var r148_latnZZA = r148_gsub.copyLanguage("latn_ZZA ", "latn_DFLT");
    var r148_latnVIT = r148_gsub.copyLanguage("latn_VIT ", "latn_DFLT");
    var r148_latnIPPH = r148_gsub.copyLanguage("latn_IPPH", "latn_DFLT");
    var r148_latnAPPH = r148_gsub.copyLanguage("latn_APPH", "latn_DFLT");
    var r148_grekIPPH = r148_gsub.copyLanguage("grek_IPPH", "grek_DFLT");
    var r148_grekAPPH = r148_gsub.copyLanguage("grek_APPH", "grek_DFLT");
    var r148_loclSRB = r148_gsub.createFeature("locl");
    r148_cyrlSRB.addFeature(r148_loclSRB);
    r148_cyrlMKD.addFeature(r148_loclSRB);
    r148_cyrlBOS.addFeature(r148_loclSRB);
    r148_loclSRB.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, !r148_para.isItalic ? r1_LocalizedForm.SRB.Upright : r1_LocalizedForm.SRB.Italic));
    var r148_loclBGR = r148_cyrlBGR.addFeature(r148_gsub.createFeature("locl"));
    r148_loclBGR.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, r1_LocalizedForm.BGR));
    var r148_loclBSH = r148_cyrlBSH.addFeature(r148_gsub.createFeature("locl"));
    r148_loclBSH.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, !r148_para.isItalic ? r1_LocalizedForm.BSH.Upright : r1_LocalizedForm.BSH.Italic));
    var r148_loclCHU = r148_cyrlCHU.addFeature(r148_gsub.createFeature("locl"));
    r148_loclCHU.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, r1_LocalizedForm.CHU));
    var r148_loclNSM = r148_gsub.createFeature("locl");
    r148_latnNSM.addFeature(r148_loclNSM);
    r148_latnISM.addFeature(r148_loclNSM);
    r148_latnLSM.addFeature(r148_loclNSM);
    r148_latnSJE.addFeature(r148_loclNSM);
    r148_latnSJU.addFeature(r148_loclNSM);
    r148_latnSKS.addFeature(r148_loclNSM);
    r148_latnSSM.addFeature(r148_loclNSM);
    r148_loclNSM.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, r1_LocalizedForm.NSM));
    var r148_loclPLK = r148_latnPLK.addFeature(r148_gsub.createFeature("locl"));
    r148_loclPLK.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, r1_LocalizedForm.PLK));
    var r148_loclROM = r148_gsub.createFeature("locl");
    r148_latnROM.addFeature(r148_loclROM);
    r148_latnMOL.addFeature(r148_loclROM);
    r148_loclROM.addLookup(r148_gsub.createLookup({
        "type": "gsub_single",
        "substitutions": {
            "SCedilla": r148_glyphStore.ensureExists("SComma"),
            "sCedilla": r148_glyphStore.ensureExists("sComma"),
            "TCedilla": r148_glyphStore.ensureExists("TComma"),
            "tCedilla": r148_glyphStore.ensureExists("tComma")
        }
    }));
    var r148_loclTRK = r148_gsub.createFeature("locl");
    r148_latnTRK.addFeature(r148_loclTRK);
    r148_latnAZE.addFeature(r148_loclTRK);
    r148_latnCRT.addFeature(r148_loclTRK);
    r148_latnGAG.addFeature(r148_loclTRK);
    r148_latnJCT.addFeature(r148_loclTRK);
    r148_latnKAZ.addFeature(r148_loclTRK);
    r148_latnKJJ.addFeature(r148_loclTRK);
    r148_latnKMZ.addFeature(r148_loclTRK);
    r148_latnTAT.addFeature(r148_loclTRK);
    r148_latnTLY.addFeature(r148_loclTRK);
    r148_latnUDI.addFeature(r148_loclTRK);
    r148_latnZZA.addFeature(r148_loclTRK);
    r148_loclTRK.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, r1_LocalizedForm.TRK));
    var r148_loclVIT = r148_latnVIT.addFeature(r148_gsub.createFeature("locl"));
    var r148_sx = function (r149_s) {
        var _r149_t0, _r149_t1;
        return function (r150_t) {
            var _r150_t0, _r150_t1;
            return r150_t.map(function (r151_x) {
                var _r151_t0, _r151_t1;
                return "" + r151_x + "/" + r149_s;
            });
        };
    };
    (function () {
        var r153_ch, r153_u, r153_gn, r153_g, r153_decomp;
        var r153_decompositionSubstitutions = {};
        r148_loclVIT.addLookup(r148_gsub.createLookup({
            "type": "gsub_multiple",
            "substitutions": r153_decompositionSubstitutions
        }));
        var r153_viCircumflex = "ẦẤẨỀẾỂỒỐỔầấẩềếểồốổ";
        var r153_viBreve = "ẮẰẲằắẳ";
        var r153_viShiftableMarks = ["acuteAbove", "graveAbove", "hookAbove"];
        var _r153_t0 = (r153_viCircumflex + r153_viBreve)[Symbol.iterator]();
        var _r153_t1 = void 0;
        while (!(_r153_t1 = _r153_t0.next()).done) {
            r153_ch = _r153_t1.value;
            r153_u = r153_ch.codePointAt(0);
            r153_gn = r148_glyphStore.queryNameByUnicode(r153_u);
            r153_g = r148_glyphStore.queryByNameEnsured(r153_gn);
            r153_decomp = r1_CvDecompose.get(r153_g);
            r153_decompositionSubstitutions[r153_gn] = r153_decomp;
        }
        return r148_loclVIT.addLookup(r148_gsub.createLookup({
            "type": "gsub_chaining",
            "rules": [r148_xn$chainrule$1aao({
                "left": ["A", "a", "E", "e", "O", "o"],
                "right": void 0
            }, {
                "left": ["circumflexAbove"],
                "right": void 0
            }, {
                "left": r153_viShiftableMarks,
                "right": r148_sx("viSide")
            }), r148_xn$chainrule$1aao({
                "left": ["A", "a"],
                "right": void 0
            }, {
                "left": ["breveAbove"],
                "right": void 0
            }, {
                "left": r153_viShiftableMarks,
                "right": r148_sx("viCenter")
            })]
        }));
    })();
    var r148_loclIPPH = r148_gsub.createFeature("locl");
    r148_latnIPPH.addFeature(r148_loclIPPH);
    r148_latnAPPH.addFeature(r148_loclIPPH);
    r148_grekIPPH.addFeature(r148_loclIPPH);
    r148_grekAPPH.addFeature(r148_loclIPPH);
    r148_loclIPPH.addLookup(r1_createGsubLookupFromGr(r148_gsub, r148_glyphStore, r1_LocalizedForm.IPPH));
    return r148_gsub.endBlockAtFront(r148_rec);
};


