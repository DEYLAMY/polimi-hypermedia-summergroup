(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{263:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("729a6220",content,!0,{sourceMap:!1})},265:function(t,e,r){"use strict";r.r(e);r(47);var n={name:"CardComponent",props:{cardTitle:{type:String,required:!0},imgPath:{type:String,required:!0},cardDescription:{type:String,required:!0},season:{type:String,required:!1},month:{type:String,required:!0}},data:function(){return{finalCardDescription:""}},mounted:function(){this.cardDescription.length>=60?this.finalCardDescription=this.cardDescription.slice(0,60)+"...":this.finalCardDescription=this.cardDescription}},c=(r(268),r(22)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card col-md-3 d-inline-block mx-1 shadow",class:t.season},[r("div",{staticClass:"image-container"},[r("img",{staticClass:"img-fluid",attrs:{src:t.imgPath,alt:"..."}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.cardTitle))]),t._v(" "),r("p",{staticClass:"card-text text-start"},[r("b",[t._v("Month: ")]),t._v(t._s(t.month)),r("br"),t._v(" "),r("b",[t._v("Description: ")]),t._v(t._s(t.finalCardDescription)+"\n      ")]),t._v(" "),r("button",{staticClass:"btn btn-primary card-button",attrs:{href:"#"}},[t._v("Discover")])])])}),[],!1,null,"4582aa59",null);e.default=component.exports},268:function(t,e,r){"use strict";r(263)},269:function(t,e,r){var n=r(71)(!1);n.push([t.i,".card[data-v-4582aa59]{transition:1s ease;opacity:1}.image-container[data-v-4582aa59]{height:250px;padding:1% 0}.image-container>img[data-v-4582aa59]{-o-object-fit:cover;object-fit:cover;height:100%}",""]),t.exports=n}}]);