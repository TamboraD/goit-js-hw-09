import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a=document.querySelector(".feedback-form"),r=document.querySelector("input");r.classList.add("feedback-input");const n=document.querySelector("textarea");n.classList.add("feedback-message");const c=document.querySelector("button");c.classList.add("btn");let t={email:"",message:""};const m=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;t=e,console.log(t);for(const o in e)a.elements[o].value=e[o]}catch(e){console.log(e)}};m();const d=e=>{const o=e.target,s=o.value,l=o.name;t[l]=s,localStorage.setItem("feedback-form-state",JSON.stringify(t))},f=e=>{if(e.preventDefault(),t.email===""||t.message==="")return alert("Fill please all fields");{console.log(t);const{currentTarget:o}=e;localStorage.removeItem("feedback-form-state"),t.email="",t.message="",o.reset()}};a.addEventListener("input",d);a.addEventListener("submit",f);
//# sourceMappingURL=2-form.js.map
