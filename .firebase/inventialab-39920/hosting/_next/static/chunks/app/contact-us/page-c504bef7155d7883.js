(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{8270:function(e,t,n){Promise.resolve().then(n.bind(n,4690))},4690:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var i=n(7437),a=n(5113),o=n(6484),s=n(8486),r=n.n(s),l=n(979),c=n(4395),u=n(6799),p=n(3173),h=n(7311),d=n.n(h),m=n(6118),_=n(2265),f=n(1646),x=()=>{let{t:e}=(0,o.Qy)(),t=(0,l.Z)(768),[n,s]=(0,_.useState)(!1),[h,x]=(0,_.useState)(!1),{API_URL:j}=f.default,b=async e=>{try{s(!0);let t={phoneNumber:null==e?void 0:e["home-phone"],email:null==e?void 0:e["home-email"],name:null==e?void 0:e["home-name"]},n=new m.Z(j);await n.post("inventia/contact/send",t),s(!1),x(!0)}catch(e){console.error(e),s(!1)}},{formData:v,handleChange:C,handleSubmit:g}=(0,u.Z)(b),y={text:e("contact-us.block1.title"),tag:"p",font:"poppinsBold",size:t?32:64,color:"whiteBase"},N={text:e("home.block9.title"),tag:"p",font:"poppinsBold",size:t?32:50,color:"whiteBase"},w={text:e("home.block9.text1"),tag:"p",font:t?"poppinsLight":"poppinsRegular",size:t?15:20,color:"whiteBase"},k={text:n?"Est\xe1 siendo enviado":h&&!n?"Ya lo enviamos":e("home.block9.button"),tag:"p",font:"poppinsRegular",size:t?15:18,color:"blueBase"};return(0,i.jsx)("section",{className:r().background,children:(0,i.jsxs)("div",{className:r().wrapper,children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.Z,{text:y,className:r().title})}),(0,i.jsx)("div",{className:r().container,children:(0,i.jsxs)("div",{className:r().formContainer,children:[(0,i.jsxs)("div",{className:r().infoContent,children:[(0,i.jsx)("div",{className:r().titleContainer,children:(0,i.jsx)(a.Z,{text:N,className:r().title2})}),(0,i.jsx)("div",{className:r().subtitleContainer,children:(0,i.jsx)(a.Z,{text:w,className:r().subtitle})})]}),(0,i.jsxs)("form",{onSubmit:g,children:[(0,i.jsxs)("div",{className:r().inputContainer,children:[(0,i.jsx)(p.Z,{type:"tel",placeholder:e("home.block9.input1"),value:v.phone,onChange:C,name:"home-phone",id:"home-phone",className:d().inputContactUs}),(0,i.jsx)(p.Z,{type:"email",placeholder:e("home.block9.input2"),value:v.email,onChange:C,name:"home-email",id:"home-email",className:d().inputContactUs}),(0,i.jsx)(p.Z,{type:"text",placeholder:e("home.block9.input3"),value:v.name,onChange:C,name:"home-name",id:"home-name",className:d().inputContactUs})]}),(0,i.jsx)("div",{className:r().buttonContainer,children:(0,i.jsx)(c.Z,{expandWidth:!0,responsiveBreakpoint:768,theme:"tertiary",type:"submit",disabled:n||h,children:(0,i.jsx)(a.Z,{text:k})})})]})]})})]})})};function j(){return(0,i.jsx)("main",{children:(0,i.jsx)(x,{})})}},4395:function(e,t,n){"use strict";var i=n(7437);n(2265);var a=n(5238),o=n.n(a),s=n(7138);t.Z=e=>{let{href:t,children:n,theme:a="primary",responsiveBreakpoint:r=920,expandWidth:l,...c}=e,u="tertiary"===a?o().tertiary:"secondary"===a?o().secondary:o().primary,p=728===r?o().responsive728:o().responsive920,h=(null==t?void 0:t.startsWith("/"))||(null==t?void 0:t.startsWith("#")),d="".concat(o().button," ").concat(u," ").concat(p," ").concat(l?o().buttonWidth100per:"");return t&&!h?(0,i.jsx)("a",{href:t,className:d,target:"_blank",rel:"noopener noreferrer",...c,children:n}):t&&h?(0,i.jsx)(s.default,{href:t,className:d,...c,children:n}):(0,i.jsx)("button",{className:d,...c,children:n})}},3173:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(7437);n(2265);var a=n(7311),o=n.n(a),s=n(5113),r=n(6484),l=n(979),c=n(6648),u=e=>{let{text:t,handleDelete:n,index:a,name:r}=e,u=(0,l.Z)(768);return(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:o().filePreview,children:[(0,i.jsxs)("div",{className:o().fileContainer1,children:[(0,i.jsx)(c.default,{src:"/images/components/input/file.svg",alt:"Upload File",width:24,height:24,priority:!0}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{text:{text:t,tag:"p",font:"poppinsRegular",size:u?11:16,color:"blackBase"},className:o().fileItem})})]}),(0,i.jsx)("div",{onClick:()=>n(a,r),className:o().fileContainer2,children:(0,i.jsx)(c.default,{src:"/images/components/input/trash.svg",alt:"Delete File",width:24,height:24,priority:!0})})]})})},p=e=>{let{type:t="text",placeholder:n="",value:a,onChange:p,name:h,id:d,className:m="",options:_=[],handleDelete:f,...x}=e,{t:j}=(0,r.Qy)(),b=(0,l.Z)(768);return"file"===t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:o().filePlaceholder,children:(0,i.jsx)(s.Z,{text:{text:n,tag:"p",font:"poppinsRegular",size:b?14:20,color:"blackBase"}})}),(0,i.jsx)("div",{className:o().fileInputContainer,children:(0,i.jsxs)("label",{className:o().fileLabel,htmlFor:d,children:[(0,i.jsx)("input",{type:"file",onChange:p,name:h,id:d,className:o().fileInput,...x}),(0,i.jsx)("div",{className:o().fileText1,children:(0,i.jsx)(c.default,{src:"/images/components/input/upload.svg",alt:"Upload File",width:32,height:32,priority:!0})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{text:{text:"Arrastra y suelta o",tag:"p",font:"poppinsMedium",size:b?12:16,color:"blackBase"},className:o().fileText1})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{text:{text:"selecciona tus documentos",tag:"p",font:"poppinsMedium",size:b?12:16,color:"blueLink"},className:o().fileText2})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{text:{text:"PDF, JPG o PNG",tag:"p",font:"poppinsRegular",size:b?10:12,color:"blackCaption"},className:o().fileText3})})]})}),a&&(null==a?void 0:a.length)>0?(0,i.jsx)("ul",{children:null==a?void 0:a.map((e,t)=>(0,i.jsx)(u,{handleDelete:f,text:e.name,index:t,name:h},t))}):null]}):"select"===t?(0,i.jsx)("div",{children:(0,i.jsxs)("select",{value:a,onChange:p,name:h,id:d,className:"".concat(m," ").concat(o().input," ").concat(o().customSelect),...x,children:[(0,i.jsx)("option",{value:"",disabled:!0,children:n}),_.map((e,t)=>(0,i.jsx)("option",{value:e.label,children:e.value},t))]})}):(0,i.jsx)("div",{children:(0,i.jsx)("input",{type:t,placeholder:n,value:a,onChange:p,name:h,id:d,className:"".concat(m," ").concat(o().input),...x})})}},1646:function(e,t){"use strict";t.default={API_URL:"https://website-backend-f7fc.onrender.com"}},6799:function(e,t,n){"use strict";var i=n(2265);t.Z=e=>{let[t,n]=(0,i.useState)({}),a=async n=>{try{n.preventDefault(),e&&await e(t)}catch(e){return e}};return{formData:t,handleChange:e=>{let{name:t,value:i}=e.target;n(e=>({...e,[t]:i}))},handleSubmit:a}}},6118:function(e,t){"use strict";class n{async get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new URL("".concat(this.baseURL,"/").concat(e));Object.keys(t).forEach(e=>n.searchParams.append(e,t[e]));try{let e=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"});if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));return await e.json()}catch(e){throw console.error("Fetch error:",e),e}}async post(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="".concat(this.baseURL,"/").concat(e);try{let e=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),mode:"cors"});if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));return await e.json()}catch(e){throw console.error("Fetch error:",e),e}}async postFormData(e,t){let n="".concat(this.baseURL,"/").concat(e),i=this.convertToFormData(t);try{let e=await fetch(n,{method:"POST",body:i,mode:"cors"});if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));return await e.json()}catch(e){throw console.error("Fetch error:",e),e}}convertToFormData(e){let t=new FormData;return Object.keys(e).forEach(n=>{"files"===n?e[n].forEach(e=>{t.append("files",e)}):t.append(n,e[n])}),t}constructor(e){this.baseURL=e}}t.Z=n},8486:function(e){e.exports={background:"main_background__pdfCE",wrapper:"main_wrapper__NS_YH",title:"main_title__Ge5pQ",infoContent:"main_infoContent__IZbFu",logoImg:"main_logoImg__7vhjX",titleContainer:"main_titleContainer__0e_7L",title2:"main_title2___KZij",subtitleContainer:"main_subtitleContainer__HNWDE",formContainer:"main_formContainer__p7UrD",inputContainer:"main_inputContainer__5l8Vf",buttonContainer:"main_buttonContainer__IV9n4",container:"main_container__EcAs4",subtitle:"main_subtitle__VeH1B"}},5238:function(e){e.exports={commonStyles:"anchorbutton_commonStyles__M6SgJ",button:"anchorbutton_button__Ga09y",buttonWidth100per:"anchorbutton_buttonWidth100per__jcEa3",primary:"anchorbutton_primary__7C8mi",secondary:"anchorbutton_secondary__oB_b5",tertiary:"anchorbutton_tertiary__oiFEW"}},7311:function(e){e.exports={inputJoinTeam:"input_inputJoinTeam__KaDzq",inputContactUs:"input_inputContactUs__AtqJO",input:"input_input__WMIm6",fileInputContainer:"input_fileInputContainer__X3FMY",fileLabel:"input_fileLabel__oina3",fileText1:"input_fileText1__7P29a",fileText2:"input_fileText2__1H6UR",fileText3:"input_fileText3__SB5m9",filePlaceholder:"input_filePlaceholder__SdkXk",fileInput:"input_fileInput__N5MKG",filePreview:"input_filePreview__PjuXE",fileItem:"input_fileItem__GvxEC",fileContainer1:"input_fileContainer1__eoVYK",fileContainer2:"input_fileContainer2__MQvAV",customSelect:"input_customSelect__zZ2jB"}}},function(e){e.O(0,[670,974,525,971,23,744],function(){return e(e.s=8270)}),_N_E=e.O()}]);