
// copy to clipboard
function copyText(text){
  navigator.clipboard?.writeText(text);
}
// simple filter
function filterDogs(){
  const q = (document.getElementById('q').value||'').toLowerCase();
  const color = document.getElementById('color').value;
  const size = document.getElementById('size').value;
  document.querySelectorAll('[data-dog]').forEach(card=>{
    const name = card.dataset.name.toLowerCase();
    const c = card.dataset.color;
    const s = card.dataset.size;
    const show = (!q || name.includes(q)) && (!color || c===color) && (!size || s===size);
    card.style.display = show ? '' : 'none';
  });
}
// QR code (tiny embedded library)
/*! QRCode for JavaScript - minimal (MIT) https://github.com/davidshimjs/qrcodejs */
!function(o){function n(o){this.mode=s.MODE_8BIT_BYTE,this.data=o}function e(o,n){this.typeNumber=o,this.errorCorrectLevel=n,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var t=function(){for(var o=[],n=0;n<256;n++){var e=n;for(var t=0;t<8;t++)e=1&e?e>>>1^3988292384:e>>>1;o[n]=e}return o}(),r={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34]],G15:1335,G18:7973};n.prototype={getLength:function(){return this.data.length},write:function(o){for(var n=0;n<this.data.length;n++){var e=this.data.charCodeAt(n);o.put(e,8)}}};var i={};i.PAD0=236,i.PAD1=17;var s={MODE_8BIT_BYTE:4};function a(o){this.buffer=[],this.length=0,this.put=function(o,n){for(var e=0;e<n;e++)this.putBit(1==(o>>n-e-1&1))},this.putBit=function(o){var n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),o&&(this.buffer[n]|=128>>>this.length%8),this.length++}}e.prototype={addData:function(o){this.dataList.push(new n(o)),this.dataCache=null},isDark:function(o,n){if(null==this.modules[o][n])throw new Error(o+","+n);return this.modules[o][n]},getModuleCount:function(){return this.moduleCount},make:function(){this.typeNumber=4,this.moduleCount=21;for(var o=this.moduleCount,n=0;n<o;n++){this.modules[n]=new Array(o);for(var e=0;e<o;e++)this.modules[n][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(o-7,0),this.setupPositionProbePattern(0,o-7),this.mapData(this.createData(),0)},setupPositionProbePattern:function(o,n){for(var e=-1;e<=7;e++)if(o+e>-1&&this.moduleCount>o+e)for(var t=-1;t<=7;t++)n+t>-1&&this.moduleCount>n+t&&(this.modules[o+e][n+t]=e>=0&&e<=6&&(0==t||6==t)||t>=0&&t<=6&&(0==e||6==e)||e>=2&&e<=4&&t>=2&&t<=4)},mapData:function(o){for(var n=-1,e=this.moduleCount-1,t=7,r=0,i=this.moduleCount-1;i>0;i-=2)for(6==i&&i--;;){for(var s=0;s<2;s++)if(null==this.modules[e][i-s]){var a=!1;r<o.length&&(a=1==(o[r]>>>t&1));this.modules[e][i-s]=a,t--,-1==t&&(r++,t=7)}if((e+=n)<0||this.moduleCount<=e){e-=n,n=-n;break}}},createData:function(){for(var o=new a,n=0;n<this.dataList.length;n++){var e=this.dataList[n];o.put(s.MODE_8BIT_BYTE,4),o.put(e.getLength(),8),e.write(o)}for(o.put(0,4);o.length%8!=0;)o.putBit(!1);for(;o.length<8*19;)o.put(i.PAD0,8),o.put(i.PAD1,8);return o.buffer}};window.makeQR=function(el,text){var qr=new e(4,0);qr.addData(text);qr.make();var c=document.createElement('canvas');var n=qr.getModuleCount();var cs=4; c.width=c.height=n*cs;var ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#000';for(var r=0;r<n;r++)for(var k=0;k<n;k++)qr.isDark(r,k)&&ctx.fillRect(k*cs,r*cs,cs,cs);el.innerHTML='';el.appendChild(c);};
}();
document.addEventListener('DOMContentLoaded',()=>{
  const el=document.getElementById('qrcode');
  if(el){ makeQR(el, 'https://cash.app/$Teooooooo/500'); }
});
