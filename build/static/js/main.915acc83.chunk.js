(this["webpackJsonprandom-game-map-test-react-and-pixi"]=this["webpackJsonprandom-game-map-test-react-and-pixi"]||[]).push([[0],{21:function(e,t,n){},35:function(e,t){},47:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return Te}));var r=n(0),a=n(11),i=n.n(a),o=n(4),c=n(15),u=n(22),p=n(1),s="PLAYER_MOVE_LEFT",y="PLAYER_MOVE_RIGHT",d="PLAYER_MOVE_TOP",f="PLAYER_MOVE_BOTTOM",l="SET_PLAYER_TEXTURES",b="SET_PLAYER_ANIMATION_TYPES",j="SET_PLAYER_CURRENT_ANIMATION_TYPE",O="SET_ANIMATION_PLAYING",m="SET_CURRENT_DIRECTION_TYPE",h=Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({},{player:{position:{x:384,y:288},coordinate:{x:8,y:6},textures:[],directionTypes:{top:"top",bottom:"bottom",left:"left",right:"right"},currentDirectionType:"top",animationTypes:{waitTop:[],waitBottom:[],waitLeft:[],waitRight:[],top:[],bottom:[],left:[],right:[]},initialAnimationTypes:"waitTop",currentAnimationType:[],animationPlaying:!1}}),{map:{onceMapChipSize:48,columnMapChipCount:13,rowMapTipCount:17,initialArray:[[0]],arrayRenderMapChips:[[0]],chunk:[[0],[0],[0],[0],[0],[0]],playerInitPosition:{x:8,y:6},textures:[],seed:1,seedValueComputedForSaveNeedsValues:{x:0,y:0,z:0,w:0,t:0}}}),{stage:{width:800,height:600}}),{userInput:{disabled:{all:!1,w:!1,s:!1,a:!1,d:!1,Enter:!1},pressed:{w:!1,s:!1,a:!1,d:!1,Enter:!1}}}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.player,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(p.a)(Object(p.a)({},e),{position:{x:e.position.x-h.map.onceMapChipSize,y:e.position.y}});case y:return Object(p.a)(Object(p.a)({},e),{position:{x:e.position.x+h.map.onceMapChipSize,y:e.position.y}});case d:return Object(p.a)(Object(p.a)({},e),{position:{x:e.position.x,y:e.position.y-h.map.onceMapChipSize}});case f:return Object(p.a)(Object(p.a)({},e),{position:{x:e.position.x,y:e.position.y+h.map.onceMapChipSize}});case l:return Object(p.a)(Object(p.a)({},e),t.payload.textures);case b:return Object(p.a)(Object(p.a)({},e),t.payload.animationTypes);case j:return Object(p.a)(Object(p.a)({},e),t.payload.currentAnimationType);case O:return Object(p.a)(Object(p.a)({},e),t.payload.animationPlaying);case m:return Object(p.a)(Object(p.a)({},e),t.payload.currentDirectionType);default:return e}},x="SET_INITIAL_MAP",E="SET_RENDER_MAP_CHIPS",v=function(e){return{type:E,payload:{arrayRenderMapChips:e}}},g="SET_MAP_TEXTURES",M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.map,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(p.a)(Object(p.a)({},e),t.payload.initialArray);case E:return Object(p.a)(Object(p.a)({},e),t.payload.arrayRenderMapChips);case g:return Object(p.a)(Object(p.a)({},e),t.payload.textures);default:return e}},A=(n(35),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.stage,t=arguments.length>1?arguments[1]:void 0;return t.type,e}),C="SET_USER_INPUT_PLESSED",I=function(e){return{type:C,payload:{pressed:e}}},_="SET_USER_INPUT_DISABLED",R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.userInput,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(p.a)(Object(p.a)({},e),t.payload.pressed);case _:return Object(p.a)(Object(p.a)({},e),t.payload.disabled);default:return e}};var P=n(7),S=(n(21),n(5)),w=function(e){return e.userInput},k=Object(S.a)([w],(function(e){return e.disabled})),L=Object(S.a)([w],(function(e){return e.pressed})),N=function(){var e=Object(o.d)((function(e){return e})),t=Object(o.c)(),n=k(e),a=L(e);return{keybordDownEvent:Object(r.useCallback)((function(e){n.all||n[e.key]||t(function(e,t){var n=Object(p.a)({},e);return void 0!=n[t]&&(n[t]=!0),function(e){e(I({pressed:n}))}}(a,e.key))}),[]),keybordUpEvent:Object(r.useCallback)((function(e){n.all||t(function(e,t){var n=Object(p.a)({},e);return void 0!=n[t]&&(n[t]=!1),function(e){e(I({pressed:n}))}}(a,e.key))}),[])}},D=n(2),Y=function(){var e=N(),t=e.keybordDownEvent,n=e.keybordUpEvent;return Object(r.useEffect)((function(){document.addEventListener("keydown",t,!1),document.addEventListener("keyup",n,!1)}),[]),Object(D.jsx)(D.Fragment,{})},U=function(e){return function(t){t(function(e){return{type:l,payload:{textures:e}}}({textures:e}))}},z=function(e,t){var n=Object(p.a)({},t);return e.forEach((function(e){var t=e.textureCacheIds[0];for(var r in n)-1!=t.indexOf(r)&&n[r].push(e)})),function(e){e(function(e){return{type:l,payload:{animationTypes:e}}}({copyAnimationTypes:n}))}},V=function(e){var t=e;return function(e){e(function(e){return{type:j,payload:{currentAnimationType:e}}}({currentAnimationType:t}))}},B=function(e){return function(t){t(function(e){return{type:O,payload:{animationPlaying:e}}}({animationPlaying:e}))}},F=function(e){return function(t){t(function(e){return{type:m,payload:{currentDirectionType:e}}}({currentDirectionType:e}))}},G=function(e){return e.player},H=Object(S.a)([G],(function(e){return e.position})),J=Object(S.a)([G],(function(e){return e.textures})),X=Object(S.a)([G],(function(e){return e.animationTypes})),q=Object(S.a)([G],(function(e){return e.initialAnimationTypes})),K=Object(S.a)([G],(function(e){return e.currentAnimationType})),Q=Object(S.a)([G],(function(e){return e.animationPlaying})),W=Object(S.a)([G],(function(e){return e.directionTypes})),Z=(Object(S.a)([G],(function(e){return e.currentDirectionType})),n(3)),$=function(e,t){(new Z.h).add(e).load((function(n,r){var a=r[e].data.frames,i=Object.keys(a).map((function(e){return Z.q.from(e)}));t(i)}))},ee=function(){var e=Object(o.d)((function(e){return e})),t=Object(o.c)(),n=H(e),a=X(e),i=K(e),c=J(e),u=Q(e),p=q(e),s=(W(e),"".concat(".","/assets/sprite/player/player.json"));return Object(r.useEffect)((function(){$(s,(function(e){return t(U(e))}))}),[]),Object(r.useEffect)((function(){t(z(c,a)),t(V(a[p])),t(B(!0))}),[c]),{textures:c,playerPosition:n,currentAnimationType:i,animationPlaying:u}},te=function(){var e=ee(),t=e.playerPosition,n=e.currentAnimationType,r=e.animationPlaying;return 0===n.length?null:Object(D.jsx)(P.Container,{children:Object(D.jsx)(P.AnimatedSprite,{animationSpeed:.1,isPlaying:r,textures:n,anchor:0,scale:1,x:t.x,y:t.y})})},ne=n(13),re=function(e){return e.map},ae=Object(S.a)([re],(function(e){return e.onceMapChipSize})),ie=Object(S.a)([re],(function(e){return e.arrayRenderMapChips})),oe=Object(S.a)([re],(function(e){return e.playerInitPosition})),ce=Object(S.a)([re],(function(e){return e.textures})),ue=(Object(S.a)([re],(function(e){return e.seed})),n(26)),pe=function(){return function(e,t){var n=t().map;e(function(e){return{type:x,payload:{initialArray:e}}}({initialArray:Array.from(Array(n.columnMapChipCount),(function(){return Array.from(Array(n.rowMapTipCount),(function(){return 0}))}))}))}},se=function(e,t,n){return function(r,a){var i=function(e){var t,n=[],r=Object(ue.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.push(Object(ne.a)(a))}}catch(i){r.e(i)}finally{r.f()}return n}(a().map.arrayRenderMapChips);i[t][e]=n,r(v({arrayRenderMapChips:i}))}},ye=function(e){return function(t){t(function(e){return{type:g,payload:{textures:e}}}({textures:e}))}},de="".concat(".","/assets/sprite/map/map.json"),fe=function(e){var t,n=123456789,r=362436069,a=521288629,i=e||88675123;return{nextInt:function(e,o){return e+Math.abs((t=n^n<<11,n=r,r=a,a=i,i=i^i>>>19^t^t>>>8))%(o+1-e)}}},le=function(){var e,t,n=Object(o.d)((function(e){return e})),a=Object(o.c)(),i=oe(n),c=ae(n),u=ie(n),p=ce(n),s=(e=1,t=100,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)),y=fe(s);return Object(r.useEffect)((function(){a(pe()),$(de,(function(e){return a(ye(e))}))}),[]),Object(r.useEffect)((function(){var e=Object.keys(p).length-1;a(function(e,t){return function(n,r){var a=r().map.initialArray.map((function(n,r){return n.map((function(){return t.nextInt(0,e)}))}));n(v({arrayRenderMapChips:a}))}}(e,y)),a(se(i.x,i.y,0))}),[p]),{onceMapChipSize:c,arrayRenderMapChips:u,textures:p}},be=function(){var e=le(),t=e.onceMapChipSize,n=e.arrayRenderMapChips,r=e.textures;return 0===r.length?null:Object(D.jsx)(P.Container,{children:n.map((function(e,n){var a=e.map((function(e,a){if(void 0!==r[e])return Object(D.jsx)(P.Sprite,{texture:r[e],x:a*t,y:n*t},a)}));return Object(ne.a)(a)}))})},je=function(){var e=Object(o.d)((function(e){return e})),t=Object(o.c)(),n=function(e){t(B(!1)),t(V(e)),t(B(!0))};Object(r.useEffect)((function(){e.userInput.pressed.w?(n(e.player.animationTypes.top),t(F(e.player.directionTypes.top))):n(e.player.animationTypes.waitTop)}),[e.userInput.pressed.w]),Object(r.useEffect)((function(){e.userInput.pressed.s?(n(e.player.animationTypes.bottom),t(F(e.player.directionTypes.bottom))):n(e.player.animationTypes.waitBottom)}),[e.userInput.pressed.s]),Object(r.useEffect)((function(){e.userInput.pressed.a?(n(e.player.animationTypes.left),t(F(e.player.directionTypes.left))):n(e.player.animationTypes.waitLeft)}),[e.userInput.pressed.a]),Object(r.useEffect)((function(){e.userInput.pressed.d?(n(e.player.animationTypes.right),t(F(e.player.directionTypes.right))):n(e.player.animationTypes.waitRight)}),[e.userInput.pressed.d]),Object(r.useEffect)((function(){if(e.userInput.pressed.Enter){var n=e.map.arrayRenderMapChips[e.player.coordinate.y-1][e.player.coordinate.x],r=e.map.arrayRenderMapChips[e.player.coordinate.y+1][e.player.coordinate.x],a=e.map.arrayRenderMapChips[e.player.coordinate.y][e.player.coordinate.x-1],i=e.map.arrayRenderMapChips[e.player.coordinate.y][e.player.coordinate.x+1];switch(e.player.currentDirectionType){case e.player.directionTypes.top:0!=n&&t(se(e.player.coordinate.x,e.player.coordinate.y-1,0));break;case e.player.directionTypes.bottom:0!=r&&t(se(e.player.coordinate.x,e.player.coordinate.y+1,0));break;case e.player.directionTypes.left:0!=a&&t(se(e.player.coordinate.x-1,e.player.coordinate.y,0));break;case e.player.directionTypes.right:0!=i&&t(se(e.player.coordinate.x+1,e.player.coordinate.y,0))}}}),[e.userInput.pressed.Enter])},Oe=function(){return je(),Object(D.jsx)(D.Fragment,{})},me=function(e){var t=e.render,n=e.Context,r=e.children;return Object(D.jsx)(n.Consumer,{children:function(e){return t(Object(D.jsx)(n.Provider,{value:e,children:r}))}})};function he(){Object(o.c)();var e=Object(o.d)((function(e){return e}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)(me,{Context:o.b,render:function(t){return Object(D.jsx)(P.Stage,{width:e.stage.width,height:e.stage.height,children:t})},children:[Object(D.jsx)(be,{}),Object(D.jsx)(te,{})]})}),Object(D.jsx)(Oe,{}),Object(D.jsx)(Y,{})]})}var Te=Object(c.c)(Object(c.b)({player:T,map:M,stage:A,userInput:R}),Object(c.a)(u.a));i.a.render(Object(D.jsx)(o.a,{store:Te,children:Object(D.jsx)(he,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.915acc83.chunk.js.map