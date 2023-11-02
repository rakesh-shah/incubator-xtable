"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var h=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},4113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={sidebar_position:4},s="BigLake Metastore",c={unversionedId:"biglake-metastore",id:"biglake-metastore",title:"BigLake Metastore",description:"This document walks through the steps to register a Onetable synced Iceberg table in BigLake Metastore on GCP.",source:"@site/docs/biglake-metastore.md",sourceDirName:".",slug:"/biglake-metastore",permalink:"/docs/biglake-metastore",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Unity Catalog",permalink:"/docs/unity-catalog"},next:{title:"Query Engines",permalink:"/docs/query-engines-index"}},u={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Create BigLake Catalog",id:"create-biglake-catalog",level:3},{value:"Create BigLake Database",id:"create-biglake-database",level:3},{value:"Running sync",id:"running-sync",level:3},{value:"Validating the results",id:"validating-the-results",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"biglake-metastore"},"BigLake Metastore"),(0,r.kt)("p",null,"This document walks through the steps to register a Onetable synced Iceberg table in BigLake Metastore on GCP."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Source (Hudi/Delta) table(s) already written to Google Cloud Storage.\nIf you don't have the source table written in GCS,\nyou can follow the steps in ",(0,r.kt)("a",{parentName:"li",href:"https://onetable.dev/docs/how-to#create-dataset"},"this")," tutorial to set it up."),(0,r.kt)("li",{parentName:"ol"},"To ensure that the BigLake API's caller (your service account used by Onetable) has the\nnecessary permissions to create a BigLake table, ask your administrator to grant ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/understanding-roles#biglake.admin"},"BigLake Admin")," (roles/bigquery.admin)\naccess to the service account."),(0,r.kt)("li",{parentName:"ol"},"To ensure that the Storage Account API's caller (your service account used by Onetable) has the\nnecessary permissions to write log/metadata files in GCS, ask your administrator to grant ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/access-control/iam-roles"},"Storage Object User")," (roles/storage.objectUser)\naccess to the service account."),(0,r.kt)("li",{parentName:"ol"},"If you're running Onetable outside of GCP, you need to provide the machine access to interact with BigLake and GCS.\nTo do so, store the permissions key for your service account in your machine using ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_key.json\n"))),(0,r.kt)("li",{parentName:"ol"},"Clone the Onetable ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/onetable-io/onetable"},"repository")," and create the\n",(0,r.kt)("inlineCode",{parentName:"li"},"utilities-0.1.0-SNAPSHOT-bundled.jar")," by following the steps on the ",(0,r.kt)("a",{parentName:"li",href:"https://onetable.dev/docs/setup"},"Installation page"))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("admonition",{title:"Important:",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Currently BigLake Metastore is only accessible through Google's\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest"},"BigLake Rest APIs"),", and as such\nOnetable requires you to setup the below items prior to running sync on your source dataset."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"BigLake Catalog"),(0,r.kt)("li",{parentName:"ul"},"BigLake Database"))),(0,r.kt)("h3",{id:"create-biglake-catalog"},"Create BigLake Catalog"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try this method")," on Google's REST reference docs for\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs/create"},(0,r.kt)("inlineCode",{parentName:"a"},"projects.locations.catalogs.create")),"\nmethod to create a catalog."),(0,r.kt)("p",null,"In this tutorial we'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west1")," region."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rest",metastring:'md title="parent"',md:!0,title:'"parent"'},"projects/<yourProjectName>/locations/us-west1/catalogs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rest",metastring:'md title="catalogId"',md:!0,title:'"catalogId"'},"onetable\n")),(0,r.kt)("h3",{id:"create-biglake-database"},"Create BigLake Database"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try this method")," on Google's REST reference docs for\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs/create"},(0,r.kt)("inlineCode",{parentName:"a"},"projects.locations.catalogs.databases.create")),"\nmethod to create a database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rest",metastring:'md title="parent"',md:!0,title:'"parent"'},"projects/<yourProjectName>/locations/us-west1/catalogs/onetable/databases\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rest",metastring:'md title="databaseId"',md:!0,title:'"databaseId"'},"onetable_synced_db\n")),(0,r.kt)("admonition",{title:"Limitation: ",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The current implementation of Onetable requires you to set the below options in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable/blob/47806329fddba55a15c6af317b9f323bd0147f46/core/src/main/java/io/onetable/iceberg/IcebergClient.java#L78C3-L78C16"},"Java object"),"."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"catalogImpl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"catalogName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gcp_project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gcp_location")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warehouse"))),(0,r.kt)("p",{parentName:"admonition"},"Then proceed to creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"utilities-0.1.0-SNAPSHOT-bundled.jar")," by following the steps\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable#building-the-project-and-running-tests"},"here"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The improvement to let users pass these options through the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_config.yaml"),"\nis being tracked under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable/issues/107"},"this")," github issue.")),(0,r.kt)("h3",{id:"running-sync"},"Running sync"),(0,r.kt)(o.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"sourceFormat: HUDI",value:"hudi"},{label:"sourceFormat: DELTA",value:"delta"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"hudi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: gs://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n"))),(0,r.kt)(l.Z,{value:"delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: DELTA\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: gs://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n")))),(0,r.kt)("admonition",{title:"Note:",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Replace with appropriate values for ",(0,r.kt)("inlineCode",{parentName:"p"},"tableBasePath")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tableName")," fields.")),(0,r.kt)("p",null,"From your terminal under the cloned Onetable directory, run the sync process using the below command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},"java -jar utilities/target/utilities-0.1.0-SNAPSHOT-bundled.jar -datasetConfig my_config.yaml\n")),(0,r.kt)("admonition",{title:"Note:",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"At this point, if you check your bucket path, you will be able to see the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," directory\nwith metadata files which contains the information that helps query engines\nto interpret the data as an Iceberg table.")),(0,r.kt)("h3",{id:"validating-the-results"},"Validating the results"),(0,r.kt)("p",null,"Once the sync succeeds, Onetable would have written the table directly to BigLake Metastore.\nWe can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Try this method")," option on Google's REST reference docs for\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs.databases.tables/get"},(0,r.kt)("inlineCode",{parentName:"a"},"projects.locations.catalogs.databases.tables.get")),"\nmethod to view the created table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rest",metastring:'md title="name"',md:!0,title:'"name"'},"projects/<yourProjectName>/locations/us-west1/catalogs/onetable/databases/onetable_synced_db/tables/table_name\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this guide we saw how to,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"sync a source table to create Iceberg metadata with Onetable"),(0,r.kt)("li",{parentName:"ol"},"catalog the data as an Iceberg table in BigLake Metastore"),(0,r.kt)("li",{parentName:"ol"},"validate the table creation using ",(0,r.kt)("inlineCode",{parentName:"li"},"projects.locations.catalogs.databases.tables.get")," method")))}g.isMDXComponent=!0}}]);