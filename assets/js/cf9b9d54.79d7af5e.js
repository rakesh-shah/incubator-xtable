"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[376],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,b=u["".concat(s,".").concat(p)]||u[p]||g[p]||o;return a?r.createElement(b,i(i({ref:t},d),{},{components:a})):r.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4},i="Google BigQuery",l={unversionedId:"bigquery",id:"bigquery",title:"Google BigQuery",description:"Iceberg tables",source:"@site/docs/bigquery.md",sourceDirName:".",slug:"/bigquery",permalink:"/docs/bigquery",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4}},s={},c=[{value:"Iceberg tables",id:"iceberg-tables",level:3},{value:"Using Iceberg JSON metadata file to create the Iceberg BigLake tables:",id:"using-iceberg-json-metadata-file-to-create-the-iceberg-biglake-tables",level:4},{value:"Steps to add additional configurations to the Hudi writers:",id:"steps-to-add-additional-configurations-to-the-hudi-writers",level:4},{value:"Using BigLake Metastore to create the Iceberg BigLake tables:",id:"using-biglake-metastore-to-create-the-iceberg-biglake-tables",level:4},{value:"Hudi and Delta tables",id:"hudi-and-delta-tables",level:3}],d={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-bigquery"},"Google BigQuery"),(0,n.kt)("h3",{id:"iceberg-tables"},"Iceberg tables"),(0,n.kt)("p",null,"To read a Onetable synced ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/iceberg-tables"},"Iceberg table from BigQuery"),",\nyou have two options:"),(0,n.kt)("h4",{id:"using-iceberg-json-metadata-file-to-create-the-iceberg-biglake-tables"},(0,n.kt)("a",{parentName:"h4",href:"https://cloud.google.com/bigquery/docs/iceberg-tables#create-using-metadata-file"},"Using Iceberg JSON metadata file to create the Iceberg BigLake tables"),":"),(0,n.kt)("p",null,"Onetable outputs metadata files for Iceberg target format syncs which can be used by BigQuery\nto read the BigLake tables."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"CREATE EXTERNAL TABLE onetable_synced_iceberg_table\nWITH CONNECTION `myproject.mylocation.myconnection`\nOPTIONS (\n     format = 'ICEBERG',\n     uris = [\"gs://mybucket/mydata/mytable/metadata/iceberg.metadata.json\"]\n )\n")),(0,n.kt)("admonition",{title:"Note:",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This method requires you to keep the table updated when there are table updates and hence Google\n",(0,n.kt)("a",{parentName:"p",href:"(https://cloud.google.com/bigquery/docs/iceberg-tables#create-using-metadata-file)"},"does not recommend")," this approach.")),(0,n.kt)("admonition",{title:"Important: For Hudi source format to Iceberg target format use cases",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"The Hudi extensions provide the ability to add field IDs to the parquet schema when writing with Hudi.\nThis is a requirement for some engines, like BigQuery and Snowflake, when reading an Iceberg table.\nIf you are not planning on using Iceberg, then you do not need to add these to your Hudi writers.")),(0,n.kt)("h4",{id:"steps-to-add-additional-configurations-to-the-hudi-writers"},"Steps to add additional configurations to the Hudi writers:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the extensions jar (",(0,n.kt)("inlineCode",{parentName:"li"},"hudi-extensions-0.1.0-SNAPSHOT-bundled.jar"),") to your class path",(0,n.kt)("br",{parentName:"li"}),"For example, if you're using the Hudi ",(0,n.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/quick-start-guide#spark-shellsql"},"quick-start guide"),"\nfor spark you can just add ",(0,n.kt)("inlineCode",{parentName:"li"},"--jars hudi-extensions-0.1.0-SNAPSHOT-bundled.jar")," to the end of the command."),(0,n.kt)("li",{parentName:"ol"},"Set the following configurations in your writer options:",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"hoodie.avro.write.support.class: io.onetable.hudi.extensions.HoodieAvroWriteSupportWithFieldIds"),(0,n.kt)("inlineCode",{parentName:"li"},"hoodie.client.init.callback.classes: io.onetable.hudi.extensions.AddFieldIdsClientInitCallback")),(0,n.kt)("li",{parentName:"ol"},"Run your existing code that use Hudi writers")),(0,n.kt)("h4",{id:"using-biglake-metastore-to-create-the-iceberg-biglake-tables"},(0,n.kt)("a",{parentName:"h4",href:"https://cloud.google.com/bigquery/docs/iceberg-tables#create-using-biglake-metastore"},"Using BigLake Metastore to create the Iceberg BigLake tables"),":"),(0,n.kt)("p",null,"You can use two options to register Onetable synced Iceberg tables to BigLake Metastore:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To directly register the Onetable synced Iceberg table to BigLake Metastore,\nfollow the ",(0,n.kt)("a",{parentName:"li",href:"https://onetable.dev/docs/biglake-metastore"},"Onetable guide to integrate with BigLake Metastore")),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/spark-procedures"},"stored procedures for Spark"),"\non BigQuery to register the table in BigLake Metastore and query the tables from BigQuery.")),(0,n.kt)("h3",{id:"hudi-and-delta-tables"},"Hudi and Delta tables"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/query-open-table-format-using-manifest-files"},"This document"),"\nexplains how to query Hudi and Delta table formats through the use of manifest files."))}g.isMDXComponent=!0}}]);