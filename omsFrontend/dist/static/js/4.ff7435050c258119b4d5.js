webpackJsonp([4,69,71,72],{"+rKb":function(e,t,a){var o=a("yMEV");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("47761e8b",o,!0)},"0iGr":function(e,t,a){var o=a("Pg+a");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("dc2c6a74",o,!0)},"3QEB":function(e,t,a){"use strict";function o(e){a("0iGr")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("jtw6"),l={components:{},props:["dnsname"],data:function(){var e=this;return{tableData:[],tabletotal:0,dnsapis:[],domain_searchDef:{colProps:{span:18}},record_searchDef:{colProps:{span:8}},listQuery:{dnsname:this.dnsname},paginationDef:{show:!1},showrecord:!1,recordData:[],domain_actionsDef:{colProps:{span:6},def:[{name:"同步",handler:function(){e.syncDomwin()}}]},record_actionsDef:{colProps:{span:16},def:[{name:"添加",icon:"el-icon-plus",handler:function(){e.addForm=!0}}]},addForm:!1,ruleForm:{action:"create",dnsname:"",domain:"",sub_domain:"",value:"",record_type:"A",ttl:600},record_types:["A","CNAME","MX","TXT"],editForm:!1,rowdata:{},actionColDef:{label:"操作",tableColProps:{align:"center"},def:[{handler:function(t){e.editForm=!0,e.rowdata={action:"update",sub_domain:t.name,record_type:t.type,value:t.data,ttl:t.ttl}},buttonProps:{type:"success"},name:"编辑"}]},domainloading:!0,recordloading:!0}},created:function(){this.fetchDnsapiData()},methods:{fetchData:function(e){var t=this;this.listQuery.dnsname=e,Object(r.l)(this.listQuery).then(function(e){t.tableData=e.data,t.tabletotal=e.data.length,t.domainloading=!1})},fetchDnsapiData:function(){var e=this,t={type:"godaddy"};Object(r.i)(t).then(function(t){e.dnsapis=t.data,e.fetchData(e.dnsapis[0].name)})},fetchRecordData:function(){var e=this,t={dnsname:this.listQuery.dnsname,domain:this.ruleForm.domain};this.ruleForm.dnsname=this.listQuery.dnsname,Object(r.m)(t).then(function(t){e.recordData=t.data,e.recordloading=!1})},handleRowClick:function(e){this.showrecord=!0,this.recordloading=!0,this.ruleForm.domain=e.domain,this.fetchRecordData()},addGroupSubmit:function(){var e=this;Object(r.t)(this.ruleForm).then(function(){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchRecordData(),e.addForm=!1}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},editGroupSubmit:function(){var e=this;this.rowdata.dnsname=this.ruleForm.dnsname,this.rowdata.domain=this.ruleForm.domain,Object(r.t)(this.rowdata).then(function(){e.$message({message:"恭喜你，修改成功",type:"success"}),e.fetchRecordData(),e.editForm=!1}).catch(function(t){e.$message.error("修改失败"),console.log(t)})},syncDomwin:function(){var e=this;this.$message({message:"正在同步中，请稍后",type:"info"}),Object(r.c)(this.listQuery).then(function(){e.$message({message:"同步成功",type:"success"})})}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("域名列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.domainloading,expression:"domainloading"}],attrs:{"element-loading-text":"让子弹飞一会儿","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,"actions-def":e.domain_actionsDef,"search-def":e.domain_searchDef,"pagination-def":e.paginationDef},on:{"row-click":e.handleRowClick}},[a("el-table-column",{attrs:{prop:"domain",label:"域名",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"custom"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:16}},[e.showrecord?a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("记录列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.recordloading,expression:"recordloading"}],attrs:{"element-loading-text":"让子弹飞一会儿","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.recordData,"search-def":e.record_searchDef,"pagination-def":e.paginationDef}},[a("el-table-column",{attrs:{prop:"name",label:"记录",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"data",label:"值",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ttl",label:"ttl",sortable:"custom"}})],1)],1):e._e()],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{model:{value:e.ruleForm.sub_domain,callback:function(t){e.$set(e.ruleForm,"sub_domain",t)},expression:"ruleForm.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.record_type,callback:function(t){e.$set(e.ruleForm,"record_type",t)},expression:"ruleForm.record_type"}},e._l(e.record_types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"ip",prop:"value"}},[a("el-input",{model:{value:e.ruleForm.value,callback:function(t){e.$set(e.ruleForm,"value",t)},expression:"ruleForm.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.ruleForm.ttl,callback:function(t){e.$set(e.ruleForm,"ttl",t)},expression:"ruleForm.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addGroupSubmit("ruleForm")}}},[e._v("立即创建")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t}}},[a("el-form",{ref:"rowdata",attrs:{model:e.rowdata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.sub_domain,callback:function(t){e.$set(e.rowdata,"sub_domain",t)},expression:"rowdata.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.record_type,callback:function(t){e.$set(e.rowdata,"record_type",t)},expression:"rowdata.record_type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"值",prop:"value"}},[a("el-input",{model:{value:e.rowdata.value,callback:function(t){e.$set(e.rowdata,"value",t)},expression:"rowdata.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.rowdata.ttl,callback:function(t){e.$set(e.rowdata,"ttl",t)},expression:"rowdata.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editGroupSubmit("rowdata")}}},[e._v("立即修改")])],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s},d=i,c=a("VU/8"),u=o,m=c(l,d,!1,u,null,null);t.default=m.exports},"4JbM":function(e,t,a){"use strict";function o(e){a("xpF1")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("jtw6"),l={components:{},props:["dnsname"],data:function(){var e=this;return{tableData:[],tabletotal:0,dnsapis:[],domain_searchDef:{colProps:{span:14}},record_searchDef:{colProps:{span:8}},listQuery:{dnsname:this.dnsname},paginationDef:{show:!1},showrecord:!1,recordData:[],domain_actionsDef:{colProps:{span:10},def:[{name:"同步",handler:function(){e.syncDomwin()}}]},record_actionsDef:{colProps:{span:16},def:[{name:"添加",icon:"el-icon-plus",handler:function(){e.addForm=!0}}]},addForm:!1,ruleForm:{action:"create",dnsname:"",domain:"",sub_domain:"",value:"",record_type:"A",ttl:600},record_types:["A","CNAME","MX","TXT"],editForm:!1,rowdata:{},actionColDef:{label:"操作",tableColProps:{align:"center"},def:[{handler:function(t){e.editForm=!0,e.rowdata={action:"update",record_id:t.id,sub_domain:t.name,record_type:t.type,value:t.value,ttl:t.ttl}},buttonProps:{type:"success"},name:"编辑"}]},domainloading:!0,recordloading:!0}},created:function(){this.fetchDnsapiData()},methods:{fetchData:function(){var e=this;Object(r.j)(this.listQuery).then(function(t){e.tableData=t.data,e.tabletotal=t.data.length,e.domainloading=!1})},fetchDnsapiData:function(){var e=this,t={type:"dnspod"};Object(r.i)(t).then(function(t){e.dnsapis=t.data,e.fetchData(e.dnsapis[0].name)})},fetchRecordData:function(){var e=this,t={dnsname:this.listQuery.dnsname,domain:this.ruleForm.domain};this.ruleForm.dnsname=this.listQuery.dnsname,Object(r.k)(t).then(function(t){e.recordData=t.data,e.recordloading=!1})},handleRowClick:function(e){this.showrecord=!0,this.recordloading=!0,this.ruleForm.domain=e.name,this.fetchRecordData()},addGroupSubmit:function(){var e=this;Object(r.s)(this.ruleForm).then(function(){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchRecordData(),e.addForm=!1}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},editGroupSubmit:function(){var e=this;this.rowdata.dnsname=this.ruleForm.dnsname,this.rowdata.domain=this.ruleForm.domain,Object(r.s)(this.rowdata).then(function(){e.$message({message:"恭喜你，修改成功",type:"success"}),e.fetchRecordData(),e.editForm=!1}).catch(function(t){e.$message.error("修改失败"),console.log(t)})},syncDomwin:function(){var e=this;this.$message({message:"正在同步中，请稍后",type:"info"}),Object(r.b)(this.listQuery).then(function(){e.$message({message:"同步成功",type:"success"})})}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("域名列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.domainloading,expression:"domainloading"}],attrs:{"element-loading-text":"让子弹飞一会儿","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,"actions-def":e.domain_actionsDef,"search-def":e.domain_searchDef,"pagination-def":e.paginationDef},on:{"row-click":e.handleRowClick}},[a("el-table-column",{attrs:{prop:"name",label:"域名",sortable:"custom"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:16}},[e.showrecord?a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("记录列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.recordloading,expression:"recordloading"}],attrs:{"element-loading-text":"让子弹飞一会儿","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.recordData,"search-def":e.record_searchDef,"pagination-def":e.paginationDef}},[a("el-table-column",{attrs:{prop:"id",label:"记录ID",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"记录",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ttl",label:"ttl",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"custom"}})],1)],1):e._e()],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{model:{value:e.ruleForm.sub_domain,callback:function(t){e.$set(e.ruleForm,"sub_domain",t)},expression:"ruleForm.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.record_type,callback:function(t){e.$set(e.ruleForm,"record_type",t)},expression:"ruleForm.record_type"}},e._l(e.record_types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"ip",prop:"value"}},[a("el-input",{model:{value:e.ruleForm.value,callback:function(t){e.$set(e.ruleForm,"value",t)},expression:"ruleForm.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.ruleForm.ttl,callback:function(t){e.$set(e.ruleForm,"ttl",t)},expression:"ruleForm.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addGroupSubmit("ruleForm")}}},[e._v("立即创建")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t}}},[a("el-form",{ref:"rowdata",attrs:{model:e.rowdata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.sub_domain,callback:function(t){e.$set(e.rowdata,"sub_domain",t)},expression:"rowdata.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.record_type,callback:function(t){e.$set(e.rowdata,"record_type",t)},expression:"rowdata.record_type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"值",prop:"value"}},[a("el-input",{model:{value:e.rowdata.value,callback:function(t){e.$set(e.rowdata,"value",t)},expression:"rowdata.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.rowdata.ttl,callback:function(t){e.$set(e.rowdata,"ttl",t)},expression:"rowdata.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editGroupSubmit("rowdata")}}},[e._v("立即修改")])],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s},d=i,c=a("VU/8"),u=o,m=c(l,d,!1,u,null,null);t.default=m.exports},HbV3:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},"Pg+a":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},RNxo:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},gZ7q:function(e,t,a){var o=a("HbV3");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("c48f36c6",o,!0)},vnal:function(e,t,a){"use strict";function o(e){a("gZ7q")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("jtw6"),l=a("4JbM"),n=a("3QEB"),s=a("xBUS"),i={components:{vDnspod:l.default,vGodaddy:n.default,vBind:s.default},data:function(){return{tableData:[],ruleForm:{name:"",key:"",secret:"",type:"",desc:""},addForm:!1,editForm:!1,rowdata:{},Dns_Types:["dnspod","godaddy","bind"],showdnspod:!1,showgodaddy:!1,showbind:!1,dnsname:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(r.i)().then(function(t){e.tableData=t.data})},addGroupSubmit:function(){var e=this;Object(r.r)(this.ruleForm).then(function(){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchData(),e.addForm=!1}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},editGroup:function(e){this.rowdata=e,this.editForm=!0},editGroupSubmit:function(){var e=this;Object(r.v)(this.rowdata.id,this.rowdata).then(function(){e.$message({message:"恭喜你，修改成功",type:"success"}),e.fetchData(),e.editForm=!1}).catch(function(t){e.$message.error("修改失败"),console.log(t)})},deleteGroup:function(e){var t=this;Object(r.d)(e).then(function(e){t.$message({message:"恭喜你，删除成功",type:"success"}),t.fetchData()}).catch(function(e){t.$message.error("删除失败"),console.log(e)})},selectDns:function(e){this.dnsname=e.name,this.showdnspod=!1,this.showgodaddy=!1,this.showbind=!1,"dnspod"===e.type?this.showdnspod=!0:"godaddy"===e.type?this.showgodaddy=!0:"bind"===e.type&&(this.showbind=!0)}}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("dnsapi列表")])]),e._v(" "),a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.addForm=!0}}},[e._v("新建")])],1),e._v(" "),a("div",{staticClass:"table-search"})]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:"",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticStyle:{color:"#257cff"},on:{click:function(a){e.selectDns(t.row)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.editGroup(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.deleteGroup(t.row.id)}}},[e._v("删除")])]}}])})],1)],1)])],1),e._v(" "),a("el-col",{attrs:{span:18}},[e.showdnspod?a("v-dnspod",{attrs:{dnsname:e.dnsname}}):e._e(),e._v(" "),e.showgodaddy?a("v-godaddy",{attrs:{dnsname:e.dnsname}}):e._e(),e._v(" "),e.showbind?a("v-bind",{attrs:{dnsname:e.dnsname}}):e._e()],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"key / id",prop:"key"}},[a("el-input",{model:{value:e.ruleForm.key,callback:function(t){e.$set(e.ruleForm,"key",t)},expression:"ruleForm.key"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"secret / token",prop:"secret"}},[a("el-input",{model:{value:e.ruleForm.secret,callback:function(t){e.$set(e.ruleForm,"secret",t)},expression:"ruleForm.secret"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.Dns_Types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addGroupSubmit("ruleForm")}}},[e._v("立即创建")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t}}},[a("el-form",{ref:"rowdata",attrs:{model:e.rowdata,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.rowdata.name,callback:function(t){e.$set(e.rowdata,"name",t)},expression:"rowdata.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"key / id",prop:"key"}},[a("el-input",{model:{value:e.rowdata.key,callback:function(t){e.$set(e.rowdata,"key",t)},expression:"rowdata.key"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"secret / token",prop:"secret"}},[a("el-input",{model:{value:e.rowdata.secret,callback:function(t){e.$set(e.rowdata,"secret",t)},expression:"rowdata.secret"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.rowdata.type,callback:function(t){e.$set(e.rowdata,"type",t)},expression:"rowdata.type"}},e._l(e.Dns_Types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{model:{value:e.rowdata.desc,callback:function(t){e.$set(e.rowdata,"desc",t)},expression:"rowdata.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editGroupSubmit("rowdata")}}},[e._v("立即更新")])],1)],1)],1)],1)},c=[],u={render:d,staticRenderFns:c},m=u,p=a("VU/8"),f=o,b=p(i,m,!1,f,null,null);t.default=b.exports},xBUS:function(e,t,a){"use strict";function o(e){a("+rKb")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("jtw6"),l={components:{},props:["dnsname"],data:function(){var e=this;return{tableData:[],tabletotal:0,dnsapis:[],domain_searchDef:{colProps:{span:14}},record_searchDef:{colProps:{span:8}},listQuery:{dnsname:this.dnsname},paginationDef:{show:!1},showrecord:!1,recordData:[],domain_actionsDef:{colProps:{span:10},def:[{name:"同步",handler:function(){e.syncDomwin()}}]},record_actionsDef:{colProps:{span:16},def:[{name:"添加",icon:"el-icon-plus",handler:function(){e.addForm=!0}}]},addForm:!1,ruleForm:{action:"create",dnsname:"",domain:"",sub_domain:"",value:"",record_type:"A",ttl:600},record_types:["A","CNAME","MX","TXT"],editForm:!1,rowdata:{},actionColDef:{label:"操作",tableColProps:{align:"center"},def:[{handler:function(t){e.editForm=!0,e.rowdata={action:"update",record_id:t.id,sub_domain:t.name,record_type:t.type,value:t.value,ttl:t.ttl}},buttonProps:{type:"success"},name:"编辑"}]},domainloading:!0,recordloading:!0}},created:function(){this.fetchDnsapiData()},methods:{fetchData:function(){var e=this;Object(r.e)(this.listQuery).then(function(t){e.tableData=t.data,console.log(e.tableData),e.tabletotal=t.data.length,e.domainloading=!1})},fetchDnsapiData:function(){var e=this,t={type:"bind"};Object(r.i)(t).then(function(t){e.dnsapis=t.data,e.fetchData(e.dnsapis[0].name)})},fetchRecordData:function(){var e=this,t={dnsname:this.listQuery.dnsname,domain:this.ruleForm.domain};this.ruleForm.dnsname=this.listQuery.dnsname,Object(r.f)(t).then(function(t){e.recordData=t.data,e.recordloading=!1})},handleRowClick:function(e){this.showrecord=!0,this.recordloading=!0,this.ruleForm.domain=e.name,this.fetchRecordData()},addGroupSubmit:function(){var e=this;Object(r.p)(this.ruleForm).then(function(){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchRecordData(),e.addForm=!1}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},editGroupSubmit:function(){var e=this;this.rowdata.dnsname=this.ruleForm.dnsname,this.rowdata.domain=this.ruleForm.domain,Object(r.p)(this.rowdata).then(function(){e.$message({message:"恭喜你，修改成功",type:"success"}),e.fetchRecordData(),e.editForm=!1}).catch(function(t){e.$message.error("修改失败"),console.log(t)})},syncDomwin:function(){var e=this;this.$message({message:"正在同步中，请稍后",type:"info"}),Object(r.a)(this.listQuery).then(function(){e.$message({message:"同步成功",type:"success"})})}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("域名列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.domainloading,expression:"domainloading"}],attrs:{"element-loading-text":"让子弹飞一会儿","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,"actions-def":e.domain_actionsDef,"search-def":e.domain_searchDef,"pagination-def":e.paginationDef},on:{"row-click":e.handleRowClick}},[a("el-table-column",{attrs:{prop:"name",label:"域名",sortable:"custom"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:16}},[e.showrecord?a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("记录列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.recordloading,expression:"recordloading"}],attrs:{"element-loading-text":"让子弹飞一会儿","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.recordData,"search-def":e.record_searchDef,"pagination-def":e.paginationDef}},[a("el-table-column",{attrs:{prop:"id",label:"记录ID",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"记录",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ttl",label:"ttl",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"custom"}})],1)],1):e._e()],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{model:{value:e.ruleForm.sub_domain,callback:function(t){e.$set(e.ruleForm,"sub_domain",t)},expression:"ruleForm.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.record_type,callback:function(t){e.$set(e.ruleForm,"record_type",t)},expression:"ruleForm.record_type"}},e._l(e.record_types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"ip",prop:"value"}},[a("el-input",{model:{value:e.ruleForm.value,callback:function(t){e.$set(e.ruleForm,"value",t)},expression:"ruleForm.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.ruleForm.ttl,callback:function(t){e.$set(e.ruleForm,"ttl",t)},expression:"ruleForm.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addGroupSubmit("ruleForm")}}},[e._v("立即创建")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t}}},[a("el-form",{ref:"rowdata",attrs:{model:e.rowdata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.sub_domain,callback:function(t){e.$set(e.rowdata,"sub_domain",t)},expression:"rowdata.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.record_type,callback:function(t){e.$set(e.rowdata,"record_type",t)},expression:"rowdata.record_type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"值",prop:"value"}},[a("el-input",{model:{value:e.rowdata.value,callback:function(t){e.$set(e.rowdata,"value",t)},expression:"rowdata.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.rowdata.ttl,callback:function(t){e.$set(e.rowdata,"ttl",t)},expression:"rowdata.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editGroupSubmit("rowdata")}}},[e._v("立即修改")])],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s},d=i,c=a("VU/8"),u=o,m=c(l,d,!1,u,null,null);t.default=m.exports},xpF1:function(e,t,a){var o=a("RNxo");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("68af2414",o,!0)},yMEV:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])}});