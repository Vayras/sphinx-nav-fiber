import{r as c,C as ue,j as u,s as z,c as C,F as Ne,Z as ke,p as st,u as nt,a5 as ot,a6 as rt,a7 as it,a8 as ct,g as at}from"./index-d235c36b.js";import{u as pe,a as fe,e as lt,m as Ge,b as _,c as A,p as ut,g as dt,C as pt,d as me,S as ft,H as he,f as mt,T as ht,h as Oe,i as gt,L as xt,D as yt,U as J,E as bt,j as St,k as wt,P as jt,l as Mt,A as vt,n as _t,o as Ct,q as Pt,r as It,V as Et,B as At,R as we,O as Tt,s as Rt}from"./EditIcon-b6d1d535.js";import{O as te,Q as $,R as je,U as zt,W as Ue,X as Nt,Y as q,V as w,Z as D,_ as kt,$ as Gt,a0 as Ot,a1 as Ut,a2 as Lt,a3 as $t,a as P,u as x,a4 as Ft,a5 as Ht,a6 as Z,a7 as Le,a8 as Bt,e as Vt,A as Wt,a9 as qt,aa as Zt,b as $e,ab as W,ac as Yt,ad as Xt,ae as Kt,af as re,ag as Fe,ah as Qt}from"./react-toastify.esm-c1f13023.js";import{q as ge}from"./generateCategoricalChart-7b8b23ce.js";import{T as Jt}from"./index-6a43b537.js";import{f as Dt,d as es}from"./index.esm-1e4be125.js";import{P as ts}from"./PlusIcon-da9b2641.js";import{u as ie}from"./index-13b29bcb.js";import{P as ss,O as ns}from"./index-b50309df.js";import"./Popover-4aef1318.js";import"./useSlotProps-aadac426.js";import"./InfoIcon-34912e05.js";import"./index-a2b43141.js";import"./ClipLoader-a3c62db1.js";import"./NoFilterResultIcon-c938240b.js";import"./ChevronUpIcon-af1325f8.js";import"./index-1a60b77b.js";import"./index-80f56cec.js";import"./index-ebe3b400.js";import"./Popper-d2a7d2bb.js";import"./CheckIcon-fb050644.js";import"./SettingsIcon-2cfb5467.js";import"./Tabs-cf68de01.js";import"./Stack-ac1ce3e3.js";const Me=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!="function";function R(e,t){const d=pe(r=>r.gl),s=fe(te,Me(e)?Object.values(e):e);if(c.useLayoutEffect(()=>{t==null||t(s)},[t]),c.useEffect(()=>{(Array.isArray(s)?s:[s]).forEach(d.initTexture)},[d,s]),Me(e)){const r=Object.keys(e),o={};return r.forEach(n=>Object.assign(o,{[n]:s[r.indexOf(n)]})),o}else return s}R.preload=e=>fe.preload(te,e);R.clear=e=>fe.clear(te,e);$.func.isRequired,$.arrayOf($.oneOfType([$.element,$.func])).isRequired;const ve=new q,_e=new q,X=[],F=new kt;class os extends zt{constructor(){super(),this.color=new Ue("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var t;return(t=this.instance.current)==null?void 0:t.geometry}raycast(t,d){const s=this.instance.current;if(!s||!s.geometry||!s.material)return;F.geometry=s.geometry;const r=s.matrixWorld,o=s.userData.instances.indexOf(this.instanceKey);if(!(o===-1||o>s.count)){s.getMatrixAt(o,ve),_e.multiplyMatrices(r,ve),F.matrixWorld=_e,s.material instanceof Nt?F.material.side=s.material.side:F.material.side=s.material[0].side,F.raycast(t,X);for(let n=0,l=X.length;n<l;n++){const a=X[n];a.instanceId=o,a.object=this,d.push(a)}X.length=0}}}const He=c.createContext(null),Ce=new q,Pe=new q,rs=new q,Ie=new w,Ee=new D,Ae=new w,Be=c.forwardRef(({context:e,children:t,...d},s)=>{c.useMemo(()=>lt({PositionMesh:os}),[]);const r=c.useRef(),{subscribe:o,getParent:n}=c.useContext(e||He);return c.useLayoutEffect(()=>o(r),[]),c.createElement("positionMesh",ue({instance:n(),instanceKey:r,ref:Ge([s,r])},d),t)}),is=c.forwardRef(({children:e,range:t,limit:d=1e3,frames:s=1/0,...r},o)=>{const[{context:n,instance:l}]=c.useState(()=>{const b=c.createContext(null);return{context:b,instance:c.forwardRef((j,v)=>c.createElement(Be,ue({context:b},j,{ref:v})))}}),a=c.useRef(null),[h,f]=c.useState([]),[[m,i]]=c.useState(()=>{const b=new Float32Array(d*16);for(let j=0;j<d;j++)rs.identity().toArray(b,j*16);return[b,new Float32Array([...new Array(d*3)].map(()=>1))]});c.useEffect(()=>{a.current.instanceMatrix.needsUpdate=!0});let g=0,p=0;_(()=>{if(s===1/0||g<s){a.current.updateMatrix(),a.current.updateMatrixWorld(),Ce.copy(a.current.matrixWorld).invert(),p=Math.min(d,t!==void 0?t:d,h.length),a.current.count=p,a.current.instanceMatrix.updateRange.count=p*16,a.current.instanceColor.updateRange.count=p*3;for(let b=0;b<h.length;b++){const j=h[b].current;j.matrixWorld.decompose(Ie,Ee,Ae),Pe.compose(Ie,Ee,Ae).premultiply(Ce),Pe.toArray(m,b*16),a.current.instanceMatrix.needsUpdate=!0,j.color.toArray(i,b*3),a.current.instanceColor.needsUpdate=!0}g++}});const S=c.useMemo(()=>({getParent:()=>a,subscribe:b=>(f(j=>[...j,b]),()=>f(j=>j.filter(v=>v.current!==b.current)))}),[]);return c.createElement("instancedMesh",ue({userData:{instances:h},matrixAutoUpdate:!1,ref:Ge([o,a]),args:[null,null,0],raycast:()=>null},r),c.createElement("instancedBufferAttribute",{attach:"instanceMatrix",count:m.length/16,array:m,itemSize:16,usage:je}),c.createElement("instancedBufferAttribute",{attach:"instanceColor",count:i.length/3,array:i,itemSize:3,usage:je}),typeof e=="function"?c.createElement(n.Provider,{value:S},e(l)):c.createElement(He.Provider,{value:S},e))}),cs=(e,t,d,s,r)=>{const o=new Ot,n=1e-5;o.absarc(n,n,n,-Math.PI/2,-Math.PI,!0),o.absarc(n,t-s*2,n,Math.PI,Math.PI/2,!0),o.absarc(e-s*2,t-s*2,n,Math.PI/2,0,!0),o.absarc(e-s*2,n,n,0,-Math.PI/2,!0);const l=new Ut(o,{depth:d-s*2,bevelEnabled:!0,bevelSegments:r,steps:2,bevelSize:s,bevelThickness:s,curveSegments:r});l.center();const a=[],h=l.getAttribute("normal"),f=l.getAttribute("position");for(let m=0;m<f.count;m+=1){const i=new w(h.getX(m),h.getY(m),h.getZ(m)),g=new w(f.getX(m),f.getY(m),f.getZ(m));let p=0,S=0;Math.abs(i.y)>.9?(p=g.x/e+.5,S=1-(g.z/d+.5)):Math.abs(i.x)>.9?(p=-g.z/d+.5,S=1-(-g.y/t+.5)):Math.abs(i.z)>.9&&(p=g.x/e+.5,S=1-(-g.y/t+.5)),a.push(p,S)}return l.setAttribute("uv",new Lt(a,2)),l};cs(10,10,10,2,10);const de=new Gt(10,10,10),Ve=e=>e.node_type==="topic"&&(e.scale||1)>5,as=500,ls=800;let H=null;const us=500,xe=(e,t)=>{if(H)return null;H=setTimeout(()=>{H&&(clearTimeout(H),H=null)},us);const d=[];return e.forEach(r=>{const o=t.position.distanceTo($t.set(r.x,r.y,r.z));o<ls&&d.push({id:r.ref_id||"",distance:o})}),d.sort((r,o)=>r.distance-o.distance).slice(0,as).map(r=>r.id)},E=new w(5e3,600,1600),Te=100,ds=600,ps=2e3,ce={x:172.7392402058252,y:-239.04675366094037,z:-2e3};let G,B;const fs=4e3,ms=2e3,hs=e=>{const t=P(),d=x(y=>y.cameraFocusTrigger),s=A(y=>y.isUserDragging),r=A(y=>y.isUserScrolling),o=A(y=>y.setUserMovedCamera),n=x(y=>y.setNearbyNodeIds),l=x(y=>y.showSelectionGraph),a=x(y=>y.data),h=x(y=>y.graphStyle),{camera:f}=pe(),[m,i]=c.useState(!1),[g,p]=c.useState(!1),[S,b]=c.useState(Te),j=c.useMemo(()=>{if(l)return new w(0,0,0);const y=a==null?void 0:a.nodes.find(T=>T.ref_id===(t==null?void 0:t.ref_id));let M=new w(2e3,2e3,3e3);if(y&&a){const T=a==null?void 0:a.nodes.filter(k=>{var Se;return(Se=y.children)==null?void 0:Se.find(tt=>tt===k.id)}),L=new w(y.x,y.y,y.z);let oe=new w(0,0,0);T.map(k=>(oe=oe.add(new w(k.x,k.y,k.z).normalize()),k));const De=y.scale?1-1/(y.scale+10):1,et=L.sub(oe).multiplyScalar(.8*De);M=L.add(et)}return M},[l,t,a]),v=c.useMemo(()=>{if(l)return new w(0,0,0);const y=a==null?void 0:a.nodes.find(M=>M.ref_id===(t==null?void 0:t.ref_id));return new w((y==null?void 0:y.x)||0,(y==null?void 0:y.y)||0,(y==null?void 0:y.z)||0)},[l,t,a]);c.useEffect(()=>{var y;l&&((y=e.current)==null||y.setLookAt(ce.x,ce.y,ce.z,0,0,0,!1)),ne()},[l]),c.useEffect(()=>{l?b(ps):(t==null?void 0:t.node_type)==="topic"?b(ds):b(Te)},[t,b,l]),c.useEffect(()=>{N()},[d]),c.useEffect(()=>{(s||r)&&(i(!0),p(!0))},[s,r,i,p]),c.useEffect(()=>{if(t)if(!l&&h==="earth"&&(e!=null&&e.current)){const y=e.current.camera.position.distanceTo(new w),M=Ft(v,-y/2);e.current.setLookAt(M.x,M.y,M.z,0,0,0,!0)}else G&&clearTimeout(G),G=setTimeout(()=>{p(!0),clearTimeout(G)},ms),ne();return()=>{G&&clearTimeout(G),B&&clearTimeout(B)}},[t]),_(y=>{e.current&&(m||Y(j,y.camera),g||U(v,y.camera))});const ne=()=>{if(t){const y=f.position.distanceTo(j);ut(y)}N()},N=()=>{i(!1),p(!1),o(!1),B&&clearTimeout(B),B=setTimeout(()=>{i(!0),p(!0)},fs)},Y=(y,M)=>{if(M.position.distanceTo(y)<S)i(!0);else{M.position.lerp(y,.5);const L=xe((a==null?void 0:a.nodes)||[],f);L&&n(L)}},U=(y,M)=>{var T;(T=e==null?void 0:e.current)==null||T.setLookAt(M.position.x,M.position.y,M.position.z,y.x,y.y,y.z,!0)};return null},gs=1;let I=null;const xs=(e,{enabled:t})=>{const d=P();hs(e);const s=A(f=>f.isUserDragging),r=x(f=>f.disableCameraRotation),o=x(f=>f.data),n=x(f=>f.graphStyle),l=x(f=>f.graphRadius),a=x(f=>f.setNearbyNodeIds);c.useEffect(()=>{t||(I==null||I.kill(),I=null)},[t]);const h=c.useCallback(()=>{I==null||I.kill();const f={value:-244},m=dt.to(f,{duration:5,keyframes:{"0%":{value:10},"100%":{delay:2,ease:"Power4.easeIn",value:-200}},onComplete:()=>{I=null},onInterrupt(){m.kill()},onUpdate:()=>{var g;const{value:i}=f;if(e.current){const p=xe((o==null?void 0:o.nodes)||[],e.current.camera);p&&a(p),(g=e.current)==null||g.dolly(i,!1)}}});m.play(),I=m},[]);return c.useEffect(()=>{e.current&&l&&(n==="sphere"?(e.current.maxDistance=8e3,e.current.minDistance=200,e.current.setTarget(0,0,500,!0)):(e.current.maxDistance=e.current.getDistanceToFitSphere(l+200),e.current.minDistance=100))},[l,n,e]),c.useEffect(()=>{h()},[h,n]),c.useEffect(()=>{!d&&e.current&&e.current.setLookAt(E.x,E.y,E.z,0,0,0,!0)},[d]),_((f,m)=>{e.current&&(!r&&!s&&(e.current.azimuthAngle+=gs*m*Ht.DEG2RAD),e.current.update(m))}),null},ys=({disableAnimations:e})=>{const t=c.useRef(null),d=x(i=>i.graphStyle),s=x(i=>i.data),r=x(i=>i.setNearbyNodeIds),o=x(i=>i.setDisableCameraRotation),[n]=c.useState(.8),{camera:l}=pe(),[a,h,f,m]=A(i=>[i.isUserDragging,i.setIsUserDragging,i.isUserScrolling,i.isUserScrollingOnHtmlPanel]);return xs(t,{enabled:!e&&!f&&!a}),c.useEffect(()=>{t.current&&t.current.setLookAt(E.x,E.y,E.z,0,0,0,!0)},[d]),c.useEffect(()=>{if(!a){const i=xe((s==null?void 0:s.nodes)||[],l);i&&r(i)}},[l,l.position,l.position.x,l.position.y,l.position.z,s==null?void 0:s.nodes,r,a]),c.useEffect(()=>{a&&o(!0)},[a,o]),u.jsx(pt,{ref:t,boundaryEnclosesCamera:!0,enabled:!m,makeDefault:!0,maxDistance:12e3,minDistance:100,onEnd:()=>h(!1),onStart:()=>h(!0),smoothTime:n})},se={metalness:.9,roughness:0},bs={...se},Ss=new Z(bs),ws=({hide:e})=>{const t=ge(),d=x(r=>r.graphStyle),s=c.useMemo(()=>t.nodes.map((r,o)=>{if(r.node_type==="topic")return!1;const n=!Ve(r),l=me(r.node_type||"",!0);return u.jsx(Be,{color:l,name:r.id,position:[r.x,r.y,r.z],scale:n?(r.scale||1)*.9:0,userData:r},`${r.ref_id||r.id}-instanced-node-${o}-${d}`)}),[d,t]);return u.jsx(is,{geometry:de,material:Ss,visible:!e,children:s})},We=new te,ee=We.load("noimage.jpeg"),Re=new Z({...se,map:ee}),qe=.4,js=new Z({...se,map:ee,transparent:!0,opacity:qe}),K={},Ms=(e,t)=>{const[d,s]=c.useState(ee),[r,o]=c.useState(Re);return c.useEffect(()=>{const n=`${e}${t&&"-transparent"}`;if(K[n]){s(K[n].texture),o(K[n].material);return}We.load(e,l=>{const a=new Z({map:l,transparent:t,opacity:t?qe:1,...se});K[n]={texture:l,material:a},s(l),o(a)},void 0,()=>{s(ee),o(t?js:Re)})},[e,t]),c.useEffect(()=>function(){d.dispose(),r.dispose()},[d,r]),r},ye=c.memo(({node:e,hide:t,animated:d})=>{const s=c.useRef(null),[r]=c.useState(de),o=P(),n=x(f=>f.showSelectionGraph),l=!!o&&e.ref_id===o.ref_id,a=Ms(e.image_url||"noimage.jpeg",!1);_((f,m)=>{d&&s.current&&(s.current.position.set(e.x,e.y,e.z),l&&(s.current.rotation.y+=m*1,s.current.rotation.x-=m*.6))}),c.useEffect(()=>function(){r.dispose()},[r]);const h=c.useMemo(()=>n&&l?20:l?(e.scale||1)*1.2:e.scale,[e,l,n]);return u.jsx(ft,{enabled:!!l,children:u.jsx("mesh",{ref:s,geometry:de,material:a,name:e.id,position:[e.x,e.y,e.z],scale:h,userData:e,visible:!t})})});ye.displayName="Cube";const vs=z(Ne)`
  text-align: center;
  width: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  height: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  outline: 1px solid ${e=>C.white};
  outline-offset: 0px;
  background: rgba(0, 0, 0, 0.75);
  color: ${e=>e.fontColor};
  border-radius: ${e=>`${e.type==="guest"?"100%":"6px"}`};
  font-size: ${e=>`${e.fontSize}px`};
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  transform: scale(${e=>e.scale});
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    outline-offset: 4px;
  }

  &.selected {
    .badge-wrapper {
      top: 0;
    }

    font-size: 36px;

    &:hover {
      outline-offset: 0px;
    }
  }

  &.topic {
    outline: none;
    background: none;
    &:hover {
      font-size: 36px;
    }
    white-space: nowrap;
    .badge-wrapper {
      display: none;
    }
  }

  .badge-wrapper {
    position: absolute;
    top: -7px;
    left: -14px;
  }
`;z.img`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: ${e=>e.borderRadius};
`;z.div`
  display: flex;
  position: absolute;
  bottom: -14px;
  left: -5px;
  width: auto;
  justify-content: center;
  align-items: center;
`;z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${C.transparentBlack};
  border: 2px solid ${e=>e.color};
  color: #fff;
  padding: 0 4px;
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${e=>e.color}44;
  background: ${C.transparentBlack};
  padding: 0 4px;
  color: ${e=>e.color};
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;const _s=new w,Cs=({position:e,userData:t,color:d})=>{const s=c.useRef(null),[r,o]=x(g=>[g.selectedNode,g.setSelectedNode]),n=x(g=>g.setHoveredNode),l=x(g=>g.hoveredNode),a=x(g=>g.showSelectionGraph),h=((t==null?void 0:t.node_type)||"")==="topic",f=((t==null?void 0:t.node_type)||"")==="guest"||((t==null?void 0:t.node_type)||"")==="person";_(()=>{if(a&&s.current){const g=_s.set((t==null?void 0:t.x)||0,(t==null?void 0:t.y)||0,(t==null?void 0:t.z)||0);s.current.position.copy(g)}}),c.useEffect(()=>function(){s.current&&s.current.clear()},[s]);const m=c.useMemo(()=>(l==null?void 0:l.ref_id)===(t==null?void 0:t.ref_id),[l==null?void 0:l.ref_id,t==null?void 0:t.ref_id]),i=(r==null?void 0:r.ref_id)===(t==null?void 0:t.ref_id);return h||i&&a||!i?u.jsx("group",{ref:s,position:e,children:u.jsx(he,{center:!0,sprite:!0,zIndexRange:[0,0],children:u.jsxs(vs,{className:Vt(t==null?void 0:t.node_type,{selected:i}),color:d,fontColor:C.white,fontSize:h?64:20,onClick:g=>{g.stopPropagation(),t&&o(t)},onPointerOut:g=>{g.stopPropagation(),n(null)},onPointerOver:g=>{g.stopPropagation(),n(t||null)},scale:m?1.05:1,selected:!1,size:i?100:68,type:(t==null?void 0:t.node_type)||"",children:[!f&&!h?u.jsx("div",{className:"badge-wrapper",children:u.jsx(Jt,{type:(t==null?void 0:t.node_type)||""})}):null,h?t==null?void 0:t.label:u.jsx(Wt,{rounded:f,size:i?60:52,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:t==null?void 0:t.node_type})]})})}):null},Ze=c.memo(()=>{const e=x(n=>n.data),t=P(),d=x(n=>n.showSelectionGraph),s=x(n=>n.selectionGraphData),r=x(n=>n.selectedNodeRelativeIds),o=c.useMemo(()=>{const l=(d?s.nodes:(e==null?void 0:e.nodes)||[]).filter(f=>r.includes((f==null?void 0:f.ref_id)||"")||(t==null?void 0:t.ref_id)===(f==null?void 0:f.ref_id)).slice(0,Le);return(t?[...l,t]:l).map(f=>{const m=me(f.node_type||"",!0),i=new w((f==null?void 0:f.x)||0,(f==null?void 0:f.y)||0,(f==null?void 0:f.z)||0),g=((e==null?void 0:e.nodes)||[]).filter(p=>p.ref_id&&Bt(p,f)).map(p=>(p==null?void 0:p.ref_id)||"")||[];return u.jsx(Cs,{color:m,position:i,relativeIds:g,userData:f},`node-badge-${f.ref_id}`)})},[r,e==null?void 0:e.nodes,d,s,t]);return u.jsx(c.Fragment,{children:o.length?o:null},"node-badges")});Ze.displayName="RelevanceBadges";const Ye=({link:e,animated:t})=>{const d=c.useRef(null),s=P(),[r,o]=c.useState(new w(0,0,0)),[n,l]=c.useState(new w(0,0,0)),[a,h]=c.useState(8947848),f=x(m=>m.selectionGraphData);return c.useEffect(()=>{var g,p,S,b,j,v;const m=(s==null?void 0:s.ref_id)||"",i=s&&(m===e.targetRef||m===e.sourceRef);!e.onlyVisibleOnSelect||i?(o(new w(((g=e.sourcePosition)==null?void 0:g.x)||0,((p=e.sourcePosition)==null?void 0:p.y)||0,((S=e.sourcePosition)==null?void 0:S.z)||0)),l(new w(((b=e.targetPosition)==null?void 0:b.x)||0,((j=e.targetPosition)==null?void 0:j.y)||0,((v=e.targetPosition)==null?void 0:v.z)||0))):(o(new w(0,0,0)),l(new w(0,0,0))),h(i?e.color||ke.children.segmentColor:s?5592405:8947848)},[s,e]),_(()=>{if(t&&d.current){const m=f.nodes.find(g=>g.ref_id===e.sourceRef),i=f.nodes.find(g=>g.ref_id===e.targetRef);d.current.start.set((m==null?void 0:m.x)||0,(m==null?void 0:m.y)||0,(m==null?void 0:m.z)||0),d.current.end.set((i==null?void 0:i.x)||0,(i==null?void 0:i.y)||0,(i==null?void 0:i.z)||0)}}),u.jsx(mt,{ref:d,color:"0xFFFFFF",end:n,start:r})},Ps={font:"/fonts/Inter-Bold.woff",characters:"abcdefghijklmnopqrstuvwxyz0123456789!",fontSize:2,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1},be=c.memo(({node:e,hide:t})=>{const d=c.useRef(null),s=P(),o=x(f=>f.selectedNodeRelativeIds).includes((e==null?void 0:e.ref_id)||""),n=!!s&&(s==null?void 0:s.id)===e.id,l=x(f=>f.showSelectionGraph);_(({camera:f})=>{d!=null&&d.current&&(d.current.quaternion.copy(f.quaternion),l&&d.current.position.set(e.x,e.y,e.z))});const a=c.useMemo(()=>{let f=(e.scale||1)*4;return l&&n?f=40:!n&&o&&(f=0),f},[e.scale,n,o,l]),h=c.useMemo(()=>s&&s.node_type==="topic"&&!n?.2:1,[n,s]);return u.jsx(ht,{ref:d,anchorX:"center",anchorY:"middle",color:C.white,fillOpacity:h,position:[e.x,e.y,e.z],scale:a,userData:e,visible:!t&&!n,...Ps,children:e.label})});be.displayName="TextNode";let ae=null;const Xe=c.memo(()=>{const e=ge(),t=P(),d=x(o=>o.selectedNodeRelativeIds),s=x(o=>o.selectionGraphData),r=x(o=>o.setSelectionData);return c.useEffect(()=>{const o=e.nodes.filter(l=>l.ref_id===(t==null?void 0:t.ref_id)||d.includes((l==null?void 0:l.ref_id)||"")).map(l=>{const a=l.ref_id===(t==null?void 0:t.ref_id)&&l.node_type!=="topic"?{fx:0,fy:0,fz:0}:{};return{...l,x:0,y:0,z:0,...a}}),n=qt(o,!1,!1);r({nodes:o,links:n})},[e,t,d,r]),c.useEffect(()=>{ae=Zt(s.nodes,s.links,{numDimensions:2,forceLinkStrength:.01,forceCenterStrength:.85,forceChargeStrength:-20,velocityDecay:.9})},[s]),_(()=>{ae&&ae.tick()}),console.log(s),u.jsxs(u.Fragment,{children:[s==null?void 0:s.nodes.map(o=>o.node_type==="topic"?u.jsx(be,{hide:!0,node:o},`${o.ref_id||o.id}-compact`):u.jsx(ye,{animated:!0,hide:!0,node:o},`${o.ref_id||o.id}-compact`)),u.jsx(Oe,{fog:!0,lineWidth:.9,children:(s==null?void 0:s.links).map((o,n)=>u.jsx(Ye,{animated:!0,link:o},n.toString()))},`selection-links-${s==null?void 0:s.links.length}`)]})});Xe.displayName="SelectionDataNodes";const Ke=c.memo(()=>{const e=ge(),t=P(),d=x(i=>i.nearbyNodeIds),s=x(i=>i.setHoveredNode),r=x(i=>i.showSelectionGraph),o=x(i=>i.selectionGraphData),n=$e(i=>i.setTranscriptOpen),l=c.useCallback(i=>!!(r&&!o.nodes.find(g=>g.ref_id===i.ref_id)),[r,o]),a=c.useCallback(i=>{const g=i==null?void 0:i[0];g&&(n(!1),g.userData&&(l(g.userData)||x.getState().setSelectedNode((g==null?void 0:g.userData)||null)))},[n,l]),h=c.useCallback(i=>{i.stopPropagation(),s(null)},[s]),f=c.useCallback(i=>{var S;const p=i.intersections.map(b=>b.object)[0];if((S=p==null?void 0:p.userData)!=null&&S.ref_id){const b=p.userData;l(b)||(i.stopPropagation(),s(b))}},[s,l]),m=r&&!!t;return u.jsxs(gt,{filter:i=>i.filter(g=>{var p;return!!((p=g.userData)!=null&&p.id)}),onChange:a,onPointerOut:h,onPointerOver:f,children:[u.jsx(ws,{hide:m}),u.jsx(Ze,{}),e.nodes.filter(i=>{const g=(i==null?void 0:i.ref_id)===(t==null?void 0:t.ref_id);return d.includes(i.ref_id||"")||Ve(i)||g}).map(i=>i.node_type==="topic"?u.jsx(be,{hide:m,node:i},i.ref_id||i.id):u.jsx(ye,{hide:m,node:i},i.ref_id||i.id)),m&&u.jsx(Xe,{})]})});Ke.displayName="Cubes";const Is={earthRef:null},Es=st(e=>({...Is,setEarthRef:t=>e({earthRef:t})})),As=(e,t)=>{const d=new D().setFromUnitVectors(new w(0,1,0),e.clone().normalize()),s=new D().setFromUnitVectors(new w(0,1,0),t.clone().normalize()),r=new D,o=50,n=[];for(let a=0;a<=o;a+=1){const h=a/o;r.slerpQuaternions(d,s,h);const f=new w(0,1,0).applyQuaternion(r).multiplyScalar(W+Yt);n.push(f)}return new Xt(n).getPoints(o)},Ts=({link:e})=>{const t=P(),[d,s]=c.useState(8947848);c.useEffect(()=>{const o=(t==null?void 0:t.ref_id)||"",n=t&&(o===e.targetRef||o===e.sourceRef);s(n?e.color||ke.children.segmentColor:t?5592405:8947848)},[t,e]);const r=c.useMemo(()=>{var h,f,m,i,g,p;const o=(t==null?void 0:t.ref_id)||"",n=t&&(o===e.targetRef||o===e.sourceRef);if(!(!e.onlyVisibleOnSelect||n))return[];const l=new w(((h=e.sourcePosition)==null?void 0:h.x)||0,((f=e.sourcePosition)==null?void 0:f.y)||0,((m=e.sourcePosition)==null?void 0:m.z)||0),a=new w(((i=e.targetPosition)==null?void 0:i.x)||0,((g=e.targetPosition)==null?void 0:g.y)||0,((p=e.targetPosition)==null?void 0:p.z)||0);return As(l,a)},[e,t]);return r.length?u.jsx(xt,{color:d,dashed:!1,lineWidth:3,points:r}):null},Rs=new w(0,0,0),zs=()=>{const e=c.useRef(null),t=c.useRef(null),d=x(a=>a.graphStyle),s=x(a=>a.showSelectionGraph),r=x(a=>a.data),o=Es(a=>a.setEarthRef),n=R("textures/earth/galaxy.png"),l=R("textures/earth/clouds.png");return _(({camera:a})=>{t.current&&t.current.position.copy(a.getWorldPosition(Rs))}),c.useLayoutEffect(()=>{e.current&&o(e)},[o]),d!=="earth"||s?null:u.jsxs(u.Fragment,{children:[u.jsxs("mesh",{ref:e,userData:{type:"earth"},children:[u.jsx("sphereGeometry",{args:[W,200,200]}),u.jsx(Ns,{})]}),u.jsxs("mesh",{children:[u.jsx("sphereGeometry",{args:[W+2,200,200]}),u.jsx("meshStandardMaterial",{alphaMap:l,map:l,transparent:!0})]}),u.jsxs("mesh",{children:[u.jsx("sphereGeometry",{args:[W*4,200,200]}),u.jsx("meshStandardMaterial",{map:n,opacity:.4,side:Kt,transparent:!0})]}),u.jsx("directionalLight",{ref:t,intensity:.9,position:[0,0,W*3]}),r==null?void 0:r.links.map((a,h)=>u.jsx(Ts,{link:a},`curved-${h}`))]})},Ns=()=>{const e=R("textures/earth/earth.jpeg"),t=R("textures/earth/bump.jpeg"),d=R("textures/earth/water.png"),s=c.useMemo(()=>new Z({map:e,bumpMap:t,aoMap:t,roughnessMap:t,metalnessMap:d,toneMapped:!0,roughness:35,metalness:0}),[e,t,d]);return u.jsx("meshStandardMaterial",{...s})},O=2e3,Q=J*4,ze=Object.values(yt).map(e=>e),ks=()=>{const e=c.useRef(null);_(()=>{var n,l,a,h,f;const r=(l=(n=e.current)==null?void 0:n.geometry.getAttribute("position"))==null?void 0:l.array,o=(h=(a=e.current)==null?void 0:a.geometry.getAttribute("velocity"))==null?void 0:h.array;if(r&&o){for(let m=0;m<r.length;m+=3){const i=r[m],g=r[m+1],p=r[m+2],S=o[m],b=o[m+1],j=o[m+2];r[m]+=S,r[m+1]+=b,r[m+2]+=j;const v=Math.sqrt(i*i+g*g+p*p);if(v*v>Q*Q){const N=Math.random()*Math.PI*2,Y=Math.random()*Math.PI*2,U=Math.random()*Q;r[m]=Math.sin(N)*Math.cos(Y)*U,r[m+1]=Math.sin(N)*Math.sin(Y)*U,r[m+2]=Math.cos(N)*U}}((f=e.current)==null?void 0:f.geometry.getAttribute("position")).needsUpdate=!0}});const t=c.useMemo(()=>new Float32Array(O*3),[]),d=c.useMemo(()=>new Float32Array(O*3),[]);c.useEffect(()=>{const r=Q;for(let o=0;o<O;o+=1){const n=o*3,l=Math.acos(1-o/O*2),a=Math.PI*2*o/O;t[n]=Math.sin(l)*Math.cos(a)*r,t[n+1]=Math.sin(l)*Math.sin(a)*r,t[n+2]=Math.cos(l)*r,d[n]=Math.random()-.5,d[n+1]=Math.random()-.5,d[n+2]=Math.random()-.5}},[t,d]);const s=c.useRef(null);return c.useEffect(()=>{s.current&&e.current&&(s.current.setAttribute("position",new re(t,3)),s.current.setAttribute("velocity",new re(d,3)),e.current.geometry=s.current)},[t,d]),c.useEffect(()=>{if(s.current){const r=[];for(let o=0;o<O;o+=1){const n=Math.floor(Math.random()*ze.length),l=ze[n],a=new Ue(l);a.multiplyScalar(2),r.push(a.r,a.g,a.b)}s.current.setAttribute("color",new re(new Float32Array(r),3))}},[]),u.jsxs("points",{ref:e,frustumCulled:!1,children:[u.jsx("bufferGeometry",{ref:s}),u.jsx("pointsMaterial",{opacity:.8,size:4,transparent:!0,vertexColors:!0})]})},V=e=>({close:{backgroundColor:"rgba(48, 51, 66, 1)",borderColor:"#fff",fontColor:"rgba(255, 255, 255, 1)"},focus:{backgroundColor:e?"rgba(255, 255, 255, 0.90);":"rgba(255, 255, 255, 0.90)",borderColor:e?"#FFDB58bb":"#fff",fontColor:"rgba(48, 51, 66, 1)"},menu:{backgroundColor:"#00000066",borderColor:e?"#ffffff66":"#5078f2",fontColor:e?"#ffffff66":"#fff"}}),Gs=new w,Qe=c.memo(()=>{const e=c.useRef(null),t=$e(p=>p.setSidebarOpen),{open:d}=ie("editNodeName"),{open:s}=ie("removeNode"),{open:r}=ie("addEdgeToNode"),[o]=nt(p=>[p.isAdmin]),n=x(p=>p.showSelectionGraph),l=x(p=>p.selectionGraphData),a=x(p=>p.data),h=P(),f=x(p=>p.setSelectedNode),m=x(p=>p.setShowSelectionGraph);_(()=>{i()});const i=c.useCallback(()=>{const p=n?l:a;if(e.current){const S=p==null?void 0:p.nodes.find(b=>b.ref_id===(h==null?void 0:h.ref_id));if(S){const b=Gs.set(S==null?void 0:S.x,S==null?void 0:S.y,S==null?void 0:S.z);e.current.position.copy(b)}}},[h,n,l,a]),g=c.useMemo(()=>{const p=o?[{key:"control-key-1",colors:V(n).focus,icon:u.jsx(ts,{}),left:-80,className:"add",onClick:()=>{r()}},{key:"control-key-2",colors:V(n).focus,icon:u.jsx(bt,{}),left:-40,className:"edit",onClick:()=>{d()}},{key:"control-key-3",colors:V(n).focus,icon:u.jsx(St,{}),left:0,className:"delete",onClick:()=>{s()}}]:[],S=[{key:"control-key-4",colors:V(n).focus,icon:u.jsx(Dt,{}),left:0,className:"expand",onClick:()=>{const b=!n;m(b),b&&t(!0)}},{key:"control-key-5",colors:V(!0).close,icon:u.jsx(es,{}),left:40,className:"exit",onClick:()=>{f(null),m(!1)}}];return[...p,...S].map((b,j)=>({...b,left:-80+j*40}))},[n,r,d,s,m,t,f,o]);return h?u.jsx("group",{ref:e,children:u.jsx(he,{center:!0,className:"control-panel",onClick:p=>p.stopPropagation(),onKeyDown:p=>p.stopPropagation(),onPointerDown:p=>p.stopPropagation(),onPointerOut:p=>p.stopPropagation(),onPointerOver:p=>p.stopPropagation(),onPointerUp:p=>p.stopPropagation(),sprite:!0,zIndexRange:[16777271,16777272],children:g.map(p=>u.jsx(Os,{backgroundColor:p.colors.backgroundColor,borderColor:p.colors.borderColor,className:p.className,fontColor:p.colors.fontColor,left:p.left,onClick:S=>{S.stopPropagation(),p.onClick()},children:p.icon},p.key))})}):null});Qe.displayName="NodeControls";const Os=z.div`
  position: fixed;
  top: -60px;
  left: ${e=>-7+e.left}px;
  width: 24px;
  height: 24px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.backgroundColor?e.backgroundColor:"#000000bb"};
  color: ${e=>e.fontColor?e.fontColor:"#ffffff"};
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.4s;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
`,Je=c.memo(()=>u.jsx(u.Fragment,{children:u.jsx(Qe,{})}));Je.displayName="NodeDetailsPanel";const Us=()=>{const e=x(h=>h.data),t=x(h=>h.isFetching),d=x(h=>h.graphStyle),s=x(h=>h.showSelectionGraph),r=x(h=>h.selectedNodeRelativeIds),o=x(h=>h.selectionGraphData),n=x(h=>h.selectedNode),l=c.useMemo(()=>s?0:d==="force"?.2:.4,[s,d]),a=c.useMemo(()=>(s?o.nodes:(e==null?void 0:e.nodes)||[]).filter(i=>r.includes((i==null?void 0:i.ref_id)||"")||(n==null?void 0:n.ref_id)===(i==null?void 0:i.ref_id)).slice(0,Le).map(i=>{const g=new w(n==null?void 0:n.x,n==null?void 0:n.y,n==null?void 0:n.z),p=new w(i.x,i.y,i.z),S={source:n!=null&&n.id?n.id:"",target:i.id?i.id:"",targetRef:i.ref_id,sourceRef:n==null?void 0:n.ref_id,sourcePosition:g,targetPosition:p};return u.jsx(Ye,{link:S},i.id)}),[r,e==null?void 0:e.nodes,s,o,n]);return t?null:u.jsxs(u.Fragment,{children:[u.jsx(Ke,{}),u.jsx(zs,{}),u.jsx(ks,{}),d!=="earth"&&u.jsx(Oe,{fog:!0,limit:a.length,lineWidth:l,children:a},`links-${a.length}-${d}`),u.jsx(Je,{})]})},Ls=()=>{const{fogColor:e}=Fe("universe",{fogColor:it}),t=x(o=>o.graphStyle),d=c.useRef(null),s=c.useRef(null),r=c.useRef(null);return _(({camera:o,clock:n})=>{const l=n.getElapsedTime();if(d.current){const h=Math.sin(l/8)*1e3;d.current.position.setZ(h)}if(s.current&&s.current.position.lerp(o.position,.5),r.current){const a=l*.5,h=Math.sin(a)*J,f=Math.cos(a)*J;r.current.position.set(h,0,f)}}),u.jsxs(u.Fragment,{children:[u.jsx("hemisphereLight",{args:[C.white,ot,rt]}),t!=="earth"&&u.jsx("fog",{args:[e,5,18e3],attach:"fog"}),u.jsx("ambientLight",{color:C.white,intensity:1}),u.jsx("pointLight",{ref:s,color:C.white,distance:4e3,intensity:5,position:[0,0,0]}),u.jsx("directionalLight",{ref:r,color:C.white,intensity:8,position:[J,0,0]}),u.jsx("pointLight",{ref:d,color:C.white,distance:4e3,intensity:8,position:[0,0,0]})]})},$s=()=>u.jsx(he,{children:u.jsx(Ct,{})}),Fs=()=>{const{universeColor:e}=Fe("universe",{universeColor:C.black}),t=P(),d=c.useMemo(()=>t!=null&&t.node_type?me(t.node_type):Qt,[t]);return u.jsxs(u.Fragment,{children:[u.jsx("color",{args:[e],attach:"background"}),u.jsx(Ls,{}),u.jsx(ys,{}),u.jsxs(Pt,{children:[u.jsxs(It,{autoClear:!1,multisampling:8,children:[u.jsx(Et,{darkness:.7,eskil:!1,offset:.05}),u.jsx(At,{luminanceThreshold:1,mipmapBlur:!0,resolutionX:we.AUTO_SIZE,resolutionY:we.AUTO_SIZE}),u.jsx(Tt,{blendFunction:Rt.SCREEN,blur:!0,edgeStrength:4,hiddenEdgeColor:d,visibleEdgeColor:d})]}),u.jsx(Us,{})]})]})};let le=null;const Hs={aspect:window.innerWidth/window.innerHeight,far:3e4,near:1,position:[E.x,E.y,E.z]},Bs=()=>{const[e,t,d]=[A(n=>n.setIsUserScrollingOnHtmlPanel),A(n=>n.setIsUserScrolling),A(n=>n.setUserMovedCamera)],s=x(n=>n.isFetching),r=c.useCallback(n=>{var h;const{target:l}=n,{offsetParent:a}=l;le&&clearTimeout(le),(h=a==null?void 0:a.classList)!=null&&h.contains("html-panel")&&a.clientHeight<a.scrollHeight&&e(!0),t(!0),d(!0),le=setTimeout(()=>{t(!1),e(!1)},200)},[t,e,d]),o=c.useCallback(n=>ct(n,"threeState"),[]);return u.jsxs(Vs,{children:[u.jsx(c.Suspense,{fallback:null,children:u.jsxs(wt,{camera:Hs,id:"universe-canvas",onCreated:o,onWheel:r,children:[at&&u.jsx(jt,{position:"top-right"}),u.jsxs(c.Suspense,{fallback:u.jsx($s,{}),children:[u.jsx(Mt,{}),u.jsx(vt,{}),u.jsx(_t,{}),u.jsx(Fs,{})]})]})}),s&&u.jsx(ss,{fullSize:!1}),u.jsx(ns,{})]})},Vs=z(Ne)`
  flex: 1 1 100%;
  position: relative;
`,gn=c.memo(Bs);export{gn as Universe};
