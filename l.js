/* lsync loader v0.20 — загрузчик lampa-sync. tweetnacl-js 1.0.3 (public domain) — проверка подписи */
(function () {
'use strict';
if (window.lsync_loader) return;
var LOADER_CONFIG = {"version": "0.20", "author_key": "2ee650d7c63993e1a8c24f65f207bd142a9435cc62da2bf10300ad8a6787f50d", "default_server": "", "invite": "", "install_url": "https://github.com/timsvensonliveru-debug/lsync#install", "home_url": "https://timsvensonliveru-debug.github.io/lsync/l.js", "min_server": "0.36.0", "tg": {"api_id": 38102940, "api_hash": "b5fd81db3f6f5d1cca5389580edd0e45", "gramjs_url": "https://cdn.jsdelivr.net/gh/lampame/TGSBundle@653586b3ffec2f9003ec7e1806b5c2e41224eb64/telegram.min.js", "gramjs_sha512": "42a103a3111ad46d877b6383a9b7529ed7ec89feace7e67d85756792d59332465ed7d0d593e463b10cab0df31f04eba28356873dc25c7879e5f834953fe85230"}};
var LOADER_MARK = "lsync loader";
var module;
var self = { crypto: window.crypto || window.msCrypto };
!function(i){"use strict";var v=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},h=function(){throw new Error("no PRNG")},o=new Uint8Array(16),n=new Uint8Array(32);n[0]=9;var s=v(),u=v([1]),p=v([56129,1]),c=v([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),y=v([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),e=v([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),a=v([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),l=v([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function f(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function w(r,t,n,e,o){var i,h=0;for(i=0;i<o;i++)h|=r[t+i]^n[e+i];return(1&h-1>>>8)-1}function b(r,t,n,e){return w(r,t,n,e,16)}function g(r,t,n,e){return w(r,t,n,e,32)}function A(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,d=h,E=a,x=f,M=s,m=u,B=c,S=y,k=l,K=w,Y=v,L=p,T=b,z=g,R=A,P=_,N=0;N<20;N+=2)U^=(o=(T^=(o=(k^=(o=(M^=(o=U+T|0)<<7|o>>>25)+U|0)<<9|o>>>23)+M|0)<<13|o>>>19)+k|0)<<18|o>>>14,m^=(o=(d^=(o=(z^=(o=(K^=(o=m+d|0)<<7|o>>>25)+m|0)<<9|o>>>23)+K|0)<<13|o>>>19)+z|0)<<18|o>>>14,Y^=(o=(B^=(o=(E^=(o=(R^=(o=Y+B|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+R|0)<<13|o>>>19)+E|0)<<18|o>>>14,P^=(o=(L^=(o=(S^=(o=(x^=(o=P+L|0)<<7|o>>>25)+P|0)<<9|o>>>23)+x|0)<<13|o>>>19)+S|0)<<18|o>>>14,U^=(o=(x^=(o=(E^=(o=(d^=(o=U+x|0)<<7|o>>>25)+U|0)<<9|o>>>23)+d|0)<<13|o>>>19)+E|0)<<18|o>>>14,m^=(o=(M^=(o=(S^=(o=(B^=(o=m+M|0)<<7|o>>>25)+m|0)<<9|o>>>23)+B|0)<<13|o>>>19)+S|0)<<18|o>>>14,Y^=(o=(K^=(o=(k^=(o=(L^=(o=Y+K|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+L|0)<<13|o>>>19)+k|0)<<18|o>>>14,P^=(o=(R^=(o=(z^=(o=(T^=(o=P+R|0)<<7|o>>>25)+P|0)<<9|o>>>23)+T|0)<<13|o>>>19)+z|0)<<18|o>>>14;U=U+i|0,d=d+h|0,E=E+a|0,x=x+f|0,M=M+s|0,m=m+u|0,B=B+c|0,S=S+y|0,k=k+l|0,K=K+w|0,Y=Y+v|0,L=L+p|0,T=T+b|0,z=z+g|0,R=R+A|0,P=P+_|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=d>>>0&255,r[5]=d>>>8&255,r[6]=d>>>16&255,r[7]=d>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=M>>>0&255,r[17]=M>>>8&255,r[18]=M>>>16&255,r[19]=M>>>24&255,r[20]=m>>>0&255,r[21]=m>>>8&255,r[22]=m>>>16&255,r[23]=m>>>24&255,r[24]=B>>>0&255,r[25]=B>>>8&255,r[26]=B>>>16&255,r[27]=B>>>24&255,r[28]=S>>>0&255,r[29]=S>>>8&255,r[30]=S>>>16&255,r[31]=S>>>24&255,r[32]=k>>>0&255,r[33]=k>>>8&255,r[34]=k>>>16&255,r[35]=k>>>24&255,r[36]=K>>>0&255,r[37]=K>>>8&255,r[38]=K>>>16&255,r[39]=K>>>24&255,r[40]=Y>>>0&255,r[41]=Y>>>8&255,r[42]=Y>>>16&255,r[43]=Y>>>24&255,r[44]=L>>>0&255,r[45]=L>>>8&255,r[46]=L>>>16&255,r[47]=L>>>24&255,r[48]=T>>>0&255,r[49]=T>>>8&255,r[50]=T>>>16&255,r[51]=T>>>24&255,r[52]=z>>>0&255,r[53]=z>>>8&255,r[54]=z>>>16&255,r[55]=z>>>24&255,r[56]=R>>>0&255,r[57]=R>>>8&255,r[58]=R>>>16&255,r[59]=R>>>24&255,r[60]=P>>>0&255,r[61]=P>>>8&255,r[62]=P>>>16&255,r[63]=P>>>24&255}(r,t,n,e)}function _(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=0;U<20;U+=2)i^=(o=(b^=(o=(l^=(o=(s^=(o=i+b|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+l|0)<<18|o>>>14,u^=(o=(h^=(o=(g^=(o=(w^=(o=u+h|0)<<7|o>>>25)+u|0)<<9|o>>>23)+w|0)<<13|o>>>19)+g|0)<<18|o>>>14,v^=(o=(c^=(o=(a^=(o=(A^=(o=v+c|0)<<7|o>>>25)+v|0)<<9|o>>>23)+A|0)<<13|o>>>19)+a|0)<<18|o>>>14,_^=(o=(p^=(o=(y^=(o=(f^=(o=_+p|0)<<7|o>>>25)+_|0)<<9|o>>>23)+f|0)<<13|o>>>19)+y|0)<<18|o>>>14,i^=(o=(f^=(o=(a^=(o=(h^=(o=i+f|0)<<7|o>>>25)+i|0)<<9|o>>>23)+h|0)<<13|o>>>19)+a|0)<<18|o>>>14,u^=(o=(s^=(o=(y^=(o=(c^=(o=u+s|0)<<7|o>>>25)+u|0)<<9|o>>>23)+c|0)<<13|o>>>19)+y|0)<<18|o>>>14,v^=(o=(w^=(o=(l^=(o=(p^=(o=v+w|0)<<7|o>>>25)+v|0)<<9|o>>>23)+p|0)<<13|o>>>19)+l|0)<<18|o>>>14,_^=(o=(A^=(o=(g^=(o=(b^=(o=_+A|0)<<7|o>>>25)+_|0)<<9|o>>>23)+b|0)<<13|o>>>19)+g|0)<<18|o>>>14;r[0]=i>>>0&255,r[1]=i>>>8&255,r[2]=i>>>16&255,r[3]=i>>>24&255,r[4]=u>>>0&255,r[5]=u>>>8&255,r[6]=u>>>16&255,r[7]=u>>>24&255,r[8]=v>>>0&255,r[9]=v>>>8&255,r[10]=v>>>16&255,r[11]=v>>>24&255,r[12]=_>>>0&255,r[13]=_>>>8&255,r[14]=_>>>16&255,r[15]=_>>>24&255,r[16]=c>>>0&255,r[17]=c>>>8&255,r[18]=c>>>16&255,r[19]=c>>>24&255,r[20]=y>>>0&255,r[21]=y>>>8&255,r[22]=y>>>16&255,r[23]=y>>>24&255,r[24]=l>>>0&255,r[25]=l>>>8&255,r[26]=l>>>16&255,r[27]=l>>>24&255,r[28]=w>>>0&255,r[29]=w>>>8&255,r[30]=w>>>16&255,r[31]=w>>>24&255}(r,t,n,e)}var U=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function d(r,t,n,e,o,i,h){var a,f,s=new Uint8Array(16),u=new Uint8Array(64);for(f=0;f<16;f++)s[f]=0;for(f=0;f<8;f++)s[f]=i[f];for(;64<=o;){for(A(u,s,h,U),f=0;f<64;f++)r[t+f]=n[e+f]^u[f];for(a=1,f=8;f<16;f++)a=a+(255&s[f])|0,s[f]=255&a,a>>>=8;o-=64,t+=64,e+=64}if(0<o)for(A(u,s,h,U),f=0;f<o;f++)r[t+f]=n[e+f]^u[f];return 0}function E(r,t,n,e,o){var i,h,a=new Uint8Array(16),f=new Uint8Array(64);for(h=0;h<16;h++)a[h]=0;for(h=0;h<8;h++)a[h]=e[h];for(;64<=n;){for(A(f,a,o,U),h=0;h<64;h++)r[t+h]=f[h];for(i=1,h=8;h<16;h++)i=i+(255&a[h])|0,a[h]=255&i,i>>>=8;n-=64,t+=64}if(0<n)for(A(f,a,o,U),h=0;h<n;h++)r[t+h]=f[h];return 0}function x(r,t,n,e,o){var i=new Uint8Array(32);_(i,e,o,U);for(var h=new Uint8Array(8),a=0;a<8;a++)h[a]=e[a+16];return E(r,t,n,h,i)}function M(r,t,n,e,o,i,h){var a=new Uint8Array(32);_(a,i,h,U);for(var f=new Uint8Array(8),s=0;s<8;s++)f[s]=i[s+16];return d(r,t,n,e,o,f,a)}var m=function(r){var t,n,e,o,i,h,a,f;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,t=255&r[this.fin=0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=8191&(t>>>13|n<<3),e=255&r[4]|(255&r[5])<<8,this.r[2]=7939&(n>>>10|e<<6),o=255&r[6]|(255&r[7])<<8,this.r[3]=8191&(e>>>7|o<<9),i=255&r[8]|(255&r[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,h=255&r[10]|(255&r[11])<<8,this.r[6]=8191&(i>>>14|h<<2),a=255&r[12]|(255&r[13])<<8,this.r[7]=8065&(h>>>11|a<<5),f=255&r[14]|(255&r[15])<<8,this.r[8]=8191&(a>>>8|f<<8),this.r[9]=f>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};function B(r,t,n,e,o,i){var h=new m(i);return h.update(n,e,o),h.finish(r,t),0}function S(r,t,n,e,o,i){var h=new Uint8Array(16);return B(h,0,n,e,o,i),b(r,t,h,0)}function k(r,t,n,e,o){var i;if(n<32)return-1;for(M(r,0,t,0,n,e,o),B(r,16,r,32,n-32,r),i=0;i<16;i++)r[i]=0;return 0}function K(r,t,n,e,o){var i,h=new Uint8Array(32);if(n<32)return-1;if(x(h,0,32,e,o),0!==S(t,16,t,32,n-32,h))return-1;for(M(r,0,t,0,n,e,o),i=0;i<32;i++)r[i]=0;return 0}function Y(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function L(r){var t,n,e=1;for(t=0;t<16;t++)n=r[t]+e+65535,e=Math.floor(n/65536),r[t]=n-65536*e;r[0]+=e-1+37*(e-1)}function T(r,t,n){for(var e,o=~(n-1),i=0;i<16;i++)e=o&(r[i]^t[i]),r[i]^=e,t[i]^=e}function z(r,t){var n,e,o,i=v(),h=v();for(n=0;n<16;n++)h[n]=t[n];for(L(h),L(h),L(h),e=0;e<2;e++){for(i[0]=h[0]-65517,n=1;n<15;n++)i[n]=h[n]-65535-(i[n-1]>>16&1),i[n-1]&=65535;i[15]=h[15]-32767-(i[14]>>16&1),o=i[15]>>16&1,i[14]&=65535,T(h,i,1-o)}for(n=0;n<16;n++)r[2*n]=255&h[n],r[2*n+1]=h[n]>>8}function R(r,t){var n=new Uint8Array(32),e=new Uint8Array(32);return z(n,r),z(e,t),g(n,0,e,0)}function P(r){var t=new Uint8Array(32);return z(t,r),1&t[0]}function N(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function O(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]+n[e]}function C(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]-n[e]}function F(r,t,n){var e,o,i=0,h=0,a=0,f=0,s=0,u=0,c=0,y=0,l=0,w=0,v=0,p=0,b=0,g=0,A=0,_=0,U=0,d=0,E=0,x=0,M=0,m=0,B=0,S=0,k=0,K=0,Y=0,L=0,T=0,z=0,R=0,P=n[0],N=n[1],O=n[2],C=n[3],F=n[4],I=n[5],Z=n[6],G=n[7],q=n[8],D=n[9],V=n[10],X=n[11],j=n[12],H=n[13],J=n[14],Q=n[15];i+=(e=t[0])*P,h+=e*N,a+=e*O,f+=e*C,s+=e*F,u+=e*I,c+=e*Z,y+=e*G,l+=e*q,w+=e*D,v+=e*V,p+=e*X,b+=e*j,g+=e*H,A+=e*J,_+=e*Q,h+=(e=t[1])*P,a+=e*N,f+=e*O,s+=e*C,u+=e*F,c+=e*I,y+=e*Z,l+=e*G,w+=e*q,v+=e*D,p+=e*V,b+=e*X,g+=e*j,A+=e*H,_+=e*J,U+=e*Q,a+=(e=t[2])*P,f+=e*N,s+=e*O,u+=e*C,c+=e*F,y+=e*I,l+=e*Z,w+=e*G,v+=e*q,p+=e*D,b+=e*V,g+=e*X,A+=e*j,_+=e*H,U+=e*J,d+=e*Q,f+=(e=t[3])*P,s+=e*N,u+=e*O,c+=e*C,y+=e*F,l+=e*I,w+=e*Z,v+=e*G,p+=e*q,b+=e*D,g+=e*V,A+=e*X,_+=e*j,U+=e*H,d+=e*J,E+=e*Q,s+=(e=t[4])*P,u+=e*N,c+=e*O,y+=e*C,l+=e*F,w+=e*I,v+=e*Z,p+=e*G,b+=e*q,g+=e*D,A+=e*V,_+=e*X,U+=e*j,d+=e*H,E+=e*J,x+=e*Q,u+=(e=t[5])*P,c+=e*N,y+=e*O,l+=e*C,w+=e*F,v+=e*I,p+=e*Z,b+=e*G,g+=e*q,A+=e*D,_+=e*V,U+=e*X,d+=e*j,E+=e*H,x+=e*J,M+=e*Q,c+=(e=t[6])*P,y+=e*N,l+=e*O,w+=e*C,v+=e*F,p+=e*I,b+=e*Z,g+=e*G,A+=e*q,_+=e*D,U+=e*V,d+=e*X,E+=e*j,x+=e*H,M+=e*J,m+=e*Q,y+=(e=t[7])*P,l+=e*N,w+=e*O,v+=e*C,p+=e*F,b+=e*I,g+=e*Z,A+=e*G,_+=e*q,U+=e*D,d+=e*V,E+=e*X,x+=e*j,M+=e*H,m+=e*J,B+=e*Q,l+=(e=t[8])*P,w+=e*N,v+=e*O,p+=e*C,b+=e*F,g+=e*I,A+=e*Z,_+=e*G,U+=e*q,d+=e*D,E+=e*V,x+=e*X,M+=e*j,m+=e*H,B+=e*J,S+=e*Q,w+=(e=t[9])*P,v+=e*N,p+=e*O,b+=e*C,g+=e*F,A+=e*I,_+=e*Z,U+=e*G,d+=e*q,E+=e*D,x+=e*V,M+=e*X,m+=e*j,B+=e*H,S+=e*J,k+=e*Q,v+=(e=t[10])*P,p+=e*N,b+=e*O,g+=e*C,A+=e*F,_+=e*I,U+=e*Z,d+=e*G,E+=e*q,x+=e*D,M+=e*V,m+=e*X,B+=e*j,S+=e*H,k+=e*J,K+=e*Q,p+=(e=t[11])*P,b+=e*N,g+=e*O,A+=e*C,_+=e*F,U+=e*I,d+=e*Z,E+=e*G,x+=e*q,M+=e*D,m+=e*V,B+=e*X,S+=e*j,k+=e*H,K+=e*J,Y+=e*Q,b+=(e=t[12])*P,g+=e*N,A+=e*O,_+=e*C,U+=e*F,d+=e*I,E+=e*Z,x+=e*G,M+=e*q,m+=e*D,B+=e*V,S+=e*X,k+=e*j,K+=e*H,Y+=e*J,L+=e*Q,g+=(e=t[13])*P,A+=e*N,_+=e*O,U+=e*C,d+=e*F,E+=e*I,x+=e*Z,M+=e*G,m+=e*q,B+=e*D,S+=e*V,k+=e*X,K+=e*j,Y+=e*H,L+=e*J,T+=e*Q,A+=(e=t[14])*P,_+=e*N,U+=e*O,d+=e*C,E+=e*F,x+=e*I,M+=e*Z,m+=e*G,B+=e*q,S+=e*D,k+=e*V,K+=e*X,Y+=e*j,L+=e*H,T+=e*J,z+=e*Q,_+=(e=t[15])*P,h+=38*(d+=e*O),a+=38*(E+=e*C),f+=38*(x+=e*F),s+=38*(M+=e*I),u+=38*(m+=e*Z),c+=38*(B+=e*G),y+=38*(S+=e*q),l+=38*(k+=e*D),w+=38*(K+=e*V),v+=38*(Y+=e*X),p+=38*(L+=e*j),b+=38*(T+=e*H),g+=38*(z+=e*J),A+=38*(R+=e*Q),i=(e=(i+=38*(U+=e*N))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),_=(e=_+o+65535)-65536*(o=Math.floor(e/65536)),i=(e=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),_=(e=_+o+65535)-65536*(o=Math.floor(e/65536)),i+=o-1+37*(o-1),r[0]=i,r[1]=h,r[2]=a,r[3]=f,r[4]=s,r[5]=u,r[6]=c,r[7]=y,r[8]=l,r[9]=w,r[10]=v,r[11]=p,r[12]=b,r[13]=g,r[14]=A,r[15]=_}function I(r,t){F(r,t,t)}function Z(r,t){var n,e=v();for(n=0;n<16;n++)e[n]=t[n];for(n=253;0<=n;n--)I(e,e),2!==n&&4!==n&&F(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function G(r,t){var n,e=v();for(n=0;n<16;n++)e[n]=t[n];for(n=250;0<=n;n--)I(e,e),1!==n&&F(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function q(r,t,n){var e,o,i=new Uint8Array(32),h=new Float64Array(80),a=v(),f=v(),s=v(),u=v(),c=v(),y=v();for(o=0;o<31;o++)i[o]=t[o];for(i[31]=127&t[31]|64,i[0]&=248,N(h,n),o=0;o<16;o++)f[o]=h[o],u[o]=a[o]=s[o]=0;for(a[0]=u[0]=1,o=254;0<=o;--o)T(a,f,e=i[o>>>3]>>>(7&o)&1),T(s,u,e),O(c,a,s),C(a,a,s),O(s,f,u),C(f,f,u),I(u,c),I(y,a),F(a,s,a),F(s,f,c),O(c,a,s),C(a,a,s),I(f,a),C(s,u,y),F(a,s,p),O(a,a,u),F(s,s,a),F(a,u,y),F(u,f,h),I(f,c),T(a,f,e),T(s,u,e);for(o=0;o<16;o++)h[o+16]=a[o],h[o+32]=s[o],h[o+48]=f[o],h[o+64]=u[o];var l=h.subarray(32),w=h.subarray(16);return Z(l,l),F(w,w,l),z(r,w),0}function D(r,t){return q(r,t,n)}function V(r,t){return h(t,32),D(r,t)}function X(r,t,n){var e=new Uint8Array(32);return q(e,n,t),_(r,o,e,U)}m.prototype.blocks=function(r,t,n){for(var e,o,i,h,a,f,s,u,c,y,l,w,v,p,b,g,A,_,U,d=this.fin?0:2048,E=this.h[0],x=this.h[1],M=this.h[2],m=this.h[3],B=this.h[4],S=this.h[5],k=this.h[6],K=this.h[7],Y=this.h[8],L=this.h[9],T=this.r[0],z=this.r[1],R=this.r[2],P=this.r[3],N=this.r[4],O=this.r[5],C=this.r[6],F=this.r[7],I=this.r[8],Z=this.r[9];16<=n;)y=c=0,y+=(E+=8191&(e=255&r[t+0]|(255&r[t+1])<<8))*T,y+=(x+=8191&(e>>>13|(o=255&r[t+2]|(255&r[t+3])<<8)<<3))*(5*Z),y+=(M+=8191&(o>>>10|(i=255&r[t+4]|(255&r[t+5])<<8)<<6))*(5*I),y+=(m+=8191&(i>>>7|(h=255&r[t+6]|(255&r[t+7])<<8)<<9))*(5*F),c=(y+=(B+=8191&(h>>>4|(a=255&r[t+8]|(255&r[t+9])<<8)<<12))*(5*C))>>>13,y&=8191,y+=(S+=a>>>1&8191)*(5*O),y+=(k+=8191&(a>>>14|(f=255&r[t+10]|(255&r[t+11])<<8)<<2))*(5*N),y+=(K+=8191&(f>>>11|(s=255&r[t+12]|(255&r[t+13])<<8)<<5))*(5*P),y+=(Y+=8191&(s>>>8|(u=255&r[t+14]|(255&r[t+15])<<8)<<8))*(5*R),l=c+=(y+=(L+=u>>>5|d)*(5*z))>>>13,l+=E*z,l+=x*T,l+=M*(5*Z),l+=m*(5*I),c=(l+=B*(5*F))>>>13,l&=8191,l+=S*(5*C),l+=k*(5*O),l+=K*(5*N),l+=Y*(5*P),c+=(l+=L*(5*R))>>>13,l&=8191,w=c,w+=E*R,w+=x*z,w+=M*T,w+=m*(5*Z),c=(w+=B*(5*I))>>>13,w&=8191,w+=S*(5*F),w+=k*(5*C),w+=K*(5*O),w+=Y*(5*N),v=c+=(w+=L*(5*P))>>>13,v+=E*P,v+=x*R,v+=M*z,v+=m*T,c=(v+=B*(5*Z))>>>13,v&=8191,v+=S*(5*I),v+=k*(5*F),v+=K*(5*C),v+=Y*(5*O),p=c+=(v+=L*(5*N))>>>13,p+=E*N,p+=x*P,p+=M*R,p+=m*z,c=(p+=B*T)>>>13,p&=8191,p+=S*(5*Z),p+=k*(5*I),p+=K*(5*F),p+=Y*(5*C),b=c+=(p+=L*(5*O))>>>13,b+=E*O,b+=x*N,b+=M*P,b+=m*R,c=(b+=B*z)>>>13,b&=8191,b+=S*T,b+=k*(5*Z),b+=K*(5*I),b+=Y*(5*F),g=c+=(b+=L*(5*C))>>>13,g+=E*C,g+=x*O,g+=M*N,g+=m*P,c=(g+=B*R)>>>13,g&=8191,g+=S*z,g+=k*T,g+=K*(5*Z),g+=Y*(5*I),A=c+=(g+=L*(5*F))>>>13,A+=E*F,A+=x*C,A+=M*O,A+=m*N,c=(A+=B*P)>>>13,A&=8191,A+=S*R,A+=k*z,A+=K*T,A+=Y*(5*Z),_=c+=(A+=L*(5*I))>>>13,_+=E*I,_+=x*F,_+=M*C,_+=m*O,c=(_+=B*N)>>>13,_&=8191,_+=S*P,_+=k*R,_+=K*z,_+=Y*T,U=c+=(_+=L*(5*Z))>>>13,U+=E*Z,U+=x*I,U+=M*F,U+=m*C,c=(U+=B*O)>>>13,U&=8191,U+=S*N,U+=k*P,U+=K*R,U+=Y*z,E=y=8191&(c=(c=((c+=(U+=L*T)>>>13)<<2)+c|0)+(y&=8191)|0),x=l+=c>>>=13,M=w&=8191,m=v&=8191,B=p&=8191,S=b&=8191,k=g&=8191,K=A&=8191,Y=_&=8191,L=U&=8191,t+=16,n-=16;this.h[0]=E,this.h[1]=x,this.h[2]=M,this.h[3]=m,this.h[4]=B,this.h[5]=S,this.h[6]=k,this.h[7]=K,this.h[8]=Y,this.h[9]=L},m.prototype.finish=function(r,t){var n,e,o,i,h=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,h[0]=this.h[0]+5,n=h[0]>>>13,h[0]&=8191,i=1;i<10;i++)h[i]=this.h[i]+n,n=h[i]>>>13,h[i]&=8191;for(h[9]-=8192,e=(1^n)-1,i=0;i<10;i++)h[i]&=e;for(e=~e,i=0;i<10;i++)this.h[i]=this.h[i]&e|h[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},m.prototype.update=function(r,t,n){var e,o;if(this.leftover){for(n<(o=16-this.leftover)&&(o=n),e=0;e<o;e++)this.buffer[this.leftover+e]=r[t+e];if(n-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(16<=n&&(o=n-n%16,this.blocks(r,t,o),t+=o,n-=o),n){for(e=0;e<n;e++)this.buffer[this.leftover+e]=r[t+e];this.leftover+=n}};var j=k,H=K;var J=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Q(r,t,n,e){for(var o,i,h,a,f,s,u,c,y,l,w,v,p,b,g,A,_,U,d,E,x,M,m,B,S=new Int32Array(16),k=new Int32Array(16),K=r[0],Y=r[1],L=r[2],T=r[3],z=r[4],R=r[5],P=r[6],N=r[7],O=t[0],C=t[1],F=t[2],I=t[3],Z=t[4],G=t[5],q=t[6],D=t[7],V=0;128<=e;){for(_=0;_<16;_++)U=8*_+V,S[_]=n[U+0]<<24|n[U+1]<<16|n[U+2]<<8|n[U+3],k[_]=n[U+4]<<24|n[U+5]<<16|n[U+6]<<8|n[U+7];for(_=0;_<80;_++)if(o=Y,i=L,h=T,c=C,y=F,l=I,x=65535&(E=D),M=E>>>16,m=65535&(d=N),B=d>>>16,x+=65535&(E=((w=Z)>>>14|(a=z)<<18)^(Z>>>18|z<<14)^(z>>>9|Z<<23)),M+=E>>>16,m+=65535&(d=(z>>>14|Z<<18)^(z>>>18|Z<<14)^(Z>>>9|z<<23)),B+=d>>>16,x+=65535&(E=Z&(v=G)^~Z&(p=q)),M+=E>>>16,m+=65535&(d=z&(f=R)^~z&(s=P)),B+=d>>>16,d=J[2*_],x+=65535&(E=J[2*_+1]),M+=E>>>16,m+=65535&d,B+=d>>>16,d=S[_%16],M+=(E=k[_%16])>>>16,m+=65535&d,B+=d>>>16,m+=(M+=(x+=65535&E)>>>16)>>>16,x=65535&(E=A=65535&x|M<<16),M=E>>>16,m=65535&(d=g=65535&m|(B+=m>>>16)<<16),B=d>>>16,x+=65535&(E=(O>>>28|K<<4)^(K>>>2|O<<30)^(K>>>7|O<<25)),M+=E>>>16,m+=65535&(d=(K>>>28|O<<4)^(O>>>2|K<<30)^(O>>>7|K<<25)),B+=d>>>16,M+=(E=O&C^O&F^C&F)>>>16,m+=65535&(d=K&Y^K&L^Y&L),B+=d>>>16,u=65535&(m+=(M+=(x+=65535&E)>>>16)>>>16)|(B+=m>>>16)<<16,b=65535&x|M<<16,x=65535&(E=l),M=E>>>16,m=65535&(d=h),B=d>>>16,M+=(E=A)>>>16,m+=65535&(d=g),B+=d>>>16,Y=K,L=o,T=i,z=h=65535&(m+=(M+=(x+=65535&E)>>>16)>>>16)|(B+=m>>>16)<<16,R=a,P=f,N=s,K=u,C=O,F=c,I=y,Z=l=65535&x|M<<16,G=w,q=v,D=p,O=b,_%16==15)for(U=0;U<16;U++)d=S[U],x=65535&(E=k[U]),M=E>>>16,m=65535&d,B=d>>>16,d=S[(U+9)%16],x+=65535&(E=k[(U+9)%16]),M+=E>>>16,m+=65535&d,B+=d>>>16,g=S[(U+1)%16],x+=65535&(E=((A=k[(U+1)%16])>>>1|g<<31)^(A>>>8|g<<24)^(A>>>7|g<<25)),M+=E>>>16,m+=65535&(d=(g>>>1|A<<31)^(g>>>8|A<<24)^g>>>7),B+=d>>>16,g=S[(U+14)%16],M+=(E=((A=k[(U+14)%16])>>>19|g<<13)^(g>>>29|A<<3)^(A>>>6|g<<26))>>>16,m+=65535&(d=(g>>>19|A<<13)^(A>>>29|g<<3)^g>>>6),B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,S[U]=65535&m|B<<16,k[U]=65535&x|M<<16;x=65535&(E=O),M=E>>>16,m=65535&(d=K),B=d>>>16,d=r[0],M+=(E=t[0])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[0]=K=65535&m|B<<16,t[0]=O=65535&x|M<<16,x=65535&(E=C),M=E>>>16,m=65535&(d=Y),B=d>>>16,d=r[1],M+=(E=t[1])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[1]=Y=65535&m|B<<16,t[1]=C=65535&x|M<<16,x=65535&(E=F),M=E>>>16,m=65535&(d=L),B=d>>>16,d=r[2],M+=(E=t[2])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[2]=L=65535&m|B<<16,t[2]=F=65535&x|M<<16,x=65535&(E=I),M=E>>>16,m=65535&(d=T),B=d>>>16,d=r[3],M+=(E=t[3])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[3]=T=65535&m|B<<16,t[3]=I=65535&x|M<<16,x=65535&(E=Z),M=E>>>16,m=65535&(d=z),B=d>>>16,d=r[4],M+=(E=t[4])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[4]=z=65535&m|B<<16,t[4]=Z=65535&x|M<<16,x=65535&(E=G),M=E>>>16,m=65535&(d=R),B=d>>>16,d=r[5],M+=(E=t[5])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[5]=R=65535&m|B<<16,t[5]=G=65535&x|M<<16,x=65535&(E=q),M=E>>>16,m=65535&(d=P),B=d>>>16,d=r[6],M+=(E=t[6])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[6]=P=65535&m|B<<16,t[6]=q=65535&x|M<<16,x=65535&(E=D),M=E>>>16,m=65535&(d=N),B=d>>>16,d=r[7],M+=(E=t[7])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[7]=N=65535&m|B<<16,t[7]=D=65535&x|M<<16,V+=128,e-=128}return e}function W(r,t,n){var e,o=new Int32Array(8),i=new Int32Array(8),h=new Uint8Array(256),a=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,Q(o,i,t,n),n%=128,e=0;e<n;e++)h[e]=t[a-n+e];for(h[n]=128,h[(n=256-128*(n<112?1:0))-9]=0,f(h,n-8,a/536870912|0,a<<3),Q(o,i,h,n),e=0;e<8;e++)f(r,8*e,o[e],i[e]);return 0}function $(r,t){var n=v(),e=v(),o=v(),i=v(),h=v(),a=v(),f=v(),s=v(),u=v();C(n,r[1],r[0]),C(u,t[1],t[0]),F(n,n,u),O(e,r[0],r[1]),O(u,t[0],t[1]),F(e,e,u),F(o,r[3],t[3]),F(o,o,y),F(i,r[2],t[2]),O(i,i,i),C(h,e,n),C(a,i,o),O(f,i,o),O(s,e,n),F(r[0],h,a),F(r[1],s,f),F(r[2],f,a),F(r[3],h,s)}function rr(r,t,n){var e;for(e=0;e<4;e++)T(r[e],t[e],n)}function tr(r,t){var n=v(),e=v(),o=v();Z(o,t[2]),F(n,t[0],o),F(e,t[1],o),z(r,e),r[31]^=P(n)<<7}function nr(r,t,n){var e,o;for(Y(r[0],s),Y(r[1],u),Y(r[2],u),Y(r[3],s),o=255;0<=o;--o)rr(r,t,e=n[o/8|0]>>(7&o)&1),$(t,r),$(r,r),rr(r,t,e)}function er(r,t){var n=[v(),v(),v(),v()];Y(n[0],e),Y(n[1],a),Y(n[2],u),F(n[3],e,a),nr(r,n,t)}function or(r,t,n){var e,o=new Uint8Array(64),i=[v(),v(),v(),v()];for(n||h(t,32),W(o,t,32),o[0]&=248,o[31]&=127,o[31]|=64,er(i,o),tr(r,i),e=0;e<32;e++)t[e+32]=r[e];return 0}var ir=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function hr(r,t){var n,e,o,i;for(e=63;32<=e;--e){for(n=0,o=e-32,i=e-12;o<i;++o)t[o]+=n-16*t[e]*ir[o-(e-32)],n=Math.floor((t[o]+128)/256),t[o]-=256*n;t[o]+=n,t[e]=0}for(o=n=0;o<32;o++)t[o]+=n-(t[31]>>4)*ir[o],n=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=n*ir[o];for(e=0;e<32;e++)t[e+1]+=t[e]>>8,r[e]=255&t[e]}function ar(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;hr(r,n)}function fr(r,t,n,e){var o,i,h=new Uint8Array(64),a=new Uint8Array(64),f=new Uint8Array(64),s=new Float64Array(64),u=[v(),v(),v(),v()];W(h,e,32),h[0]&=248,h[31]&=127,h[31]|=64;var c=n+64;for(o=0;o<n;o++)r[64+o]=t[o];for(o=0;o<32;o++)r[32+o]=h[32+o];for(W(f,r.subarray(32),n+32),ar(f),er(u,f),tr(r,u),o=32;o<64;o++)r[o]=e[o];for(W(a,r,n+64),ar(a),o=0;o<64;o++)s[o]=0;for(o=0;o<32;o++)s[o]=f[o];for(o=0;o<32;o++)for(i=0;i<32;i++)s[o+i]+=a[o]*h[i];return hr(r.subarray(32),s),c}function sr(r,t,n,e){var o,i=new Uint8Array(32),h=new Uint8Array(64),a=[v(),v(),v(),v()],f=[v(),v(),v(),v()];if(n<64)return-1;if(function(r,t){var n=v(),e=v(),o=v(),i=v(),h=v(),a=v(),f=v();if(Y(r[2],u),N(r[1],t),I(o,r[1]),F(i,o,c),C(o,o,r[2]),O(i,r[2],i),I(h,i),I(a,h),F(f,a,h),F(n,f,o),F(n,n,i),G(n,n),F(n,n,o),F(n,n,i),F(n,n,i),F(r[0],n,i),I(e,r[0]),F(e,e,i),R(e,o)&&F(r[0],r[0],l),I(e,r[0]),F(e,e,i),R(e,o))return 1;P(r[0])===t[31]>>7&&C(r[0],s,r[0]),F(r[3],r[0],r[1])}(f,e))return-1;for(o=0;o<n;o++)r[o]=t[o];for(o=0;o<32;o++)r[o+32]=e[o];if(W(h,r,n),ar(h),nr(a,f,h),er(f,t.subarray(32)),$(a,f),tr(i,a),n-=64,g(t,0,i,0)){for(o=0;o<n;o++)r[o]=0;return-1}for(o=0;o<n;o++)r[o]=t[o+64];return n}function ur(r,t){if(32!==r.length)throw new Error("bad key size");if(24!==t.length)throw new Error("bad nonce size")}function cr(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function yr(r){for(var t=0;t<r.length;t++)r[t]=0}i.lowlevel={crypto_core_hsalsa20:_,crypto_stream_xor:M,crypto_stream:x,crypto_stream_salsa20_xor:d,crypto_stream_salsa20:E,crypto_onetimeauth:B,crypto_onetimeauth_verify:S,crypto_verify_16:b,crypto_verify_32:g,crypto_secretbox:k,crypto_secretbox_open:K,crypto_scalarmult:q,crypto_scalarmult_base:D,crypto_box_beforenm:X,crypto_box_afternm:j,crypto_box:function(r,t,n,e,o,i){var h=new Uint8Array(32);return X(h,o,i),j(r,t,n,e,h)},crypto_box_open:function(r,t,n,e,o,i){var h=new Uint8Array(32);return X(h,o,i),H(r,t,n,e,h)},crypto_box_keypair:V,crypto_hash:W,crypto_sign:fr,crypto_sign_keypair:or,crypto_sign_open:sr,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:v,D:c,L:ir,pack25519:z,unpack25519:N,M:F,A:O,S:I,Z:C,pow2523:G,add:$,set25519:Y,modL:hr,scalarmult:nr,scalarbase:er},i.randomBytes=function(r){var t=new Uint8Array(r);return h(t,r),t},i.secretbox=function(r,t,n){cr(r,t,n),ur(n,t);for(var e=new Uint8Array(32+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+32]=r[i];return k(o,e,e.length,t,n),o.subarray(16)},i.secretbox.open=function(r,t,n){cr(r,t,n),ur(n,t);for(var e=new Uint8Array(16+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+16]=r[i];return e.length<32||0!==K(o,e,e.length,t,n)?null:o.subarray(32)},i.secretbox.keyLength=32,i.secretbox.nonceLength=24,i.secretbox.overheadLength=16,i.scalarMult=function(r,t){if(cr(r,t),32!==r.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var n=new Uint8Array(32);return q(n,r,t),n},i.scalarMult.base=function(r){if(cr(r),32!==r.length)throw new Error("bad n size");var t=new Uint8Array(32);return D(t,r),t},i.scalarMult.scalarLength=32,i.scalarMult.groupElementLength=32,i.box=function(r,t,n,e){var o=i.box.before(n,e);return i.secretbox(r,t,o)},i.box.before=function(r,t){cr(r,t),function(r,t){if(32!==r.length)throw new Error("bad public key size");if(32!==t.length)throw new Error("bad secret key size")}(r,t);var n=new Uint8Array(32);return X(n,r,t),n},i.box.after=i.secretbox,i.box.open=function(r,t,n,e){var o=i.box.before(n,e);return i.secretbox.open(r,t,o)},i.box.open.after=i.secretbox.open,i.box.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(32);return V(r,t),{publicKey:r,secretKey:t}},i.box.keyPair.fromSecretKey=function(r){if(cr(r),32!==r.length)throw new Error("bad secret key size");var t=new Uint8Array(32);return D(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},i.box.publicKeyLength=32,i.box.secretKeyLength=32,i.box.sharedKeyLength=32,i.box.nonceLength=24,i.box.overheadLength=i.secretbox.overheadLength,i.sign=function(r,t){if(cr(r,t),64!==t.length)throw new Error("bad secret key size");var n=new Uint8Array(64+r.length);return fr(n,r,r.length,t),n},i.sign.open=function(r,t){if(cr(r,t),32!==t.length)throw new Error("bad public key size");var n=new Uint8Array(r.length),e=sr(n,r,r.length,t);if(e<0)return null;for(var o=new Uint8Array(e),i=0;i<o.length;i++)o[i]=n[i];return o},i.sign.detached=function(r,t){for(var n=i.sign(r,t),e=new Uint8Array(64),o=0;o<e.length;o++)e[o]=n[o];return e},i.sign.detached.verify=function(r,t,n){if(cr(r,t,n),64!==t.length)throw new Error("bad signature size");if(32!==n.length)throw new Error("bad public key size");var e,o=new Uint8Array(64+r.length),i=new Uint8Array(64+r.length);for(e=0;e<64;e++)o[e]=t[e];for(e=0;e<r.length;e++)o[e+64]=r[e];return 0<=sr(i,o,o.length,n)},i.sign.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(64);return or(r,t),{publicKey:r,secretKey:t}},i.sign.keyPair.fromSecretKey=function(r){if(cr(r),64!==r.length)throw new Error("bad secret key size");for(var t=new Uint8Array(32),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},i.sign.keyPair.fromSeed=function(r){if(cr(r),32!==r.length)throw new Error("bad seed size");for(var t=new Uint8Array(32),n=new Uint8Array(64),e=0;e<32;e++)n[e]=r[e];return or(t,n,!0),{publicKey:t,secretKey:n}},i.sign.publicKeyLength=32,i.sign.secretKeyLength=64,i.sign.seedLength=32,i.sign.signatureLength=64,i.hash=function(r){cr(r);var t=new Uint8Array(64);return W(t,r,r.length),t},i.hash.hashLength=64,i.verify=function(r,t){return cr(r,t),0!==r.length&&0!==t.length&&(r.length===t.length&&0===w(r,0,t,0,r.length))},i.setPRNG=function(r){h=r},function(){var o="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(o&&o.getRandomValues){i.setPRNG(function(r,t){var n,e=new Uint8Array(t);for(n=0;n<t;n+=65536)o.getRandomValues(e.subarray(n,n+Math.min(t-n,65536)));for(n=0;n<t;n++)r[n]=e[n];yr(e)})}else"undefined"!=typeof require&&(o=require("crypto"))&&o.randomBytes&&i.setPRNG(function(r,t){var n,e=o.randomBytes(t);for(n=0;n<t;n++)r[n]=e[n];yr(e)})}()}("undefined"!=typeof module&&module.exports?module.exports:self.nacl=self.nacl||{});
var nacl = self.nacl;
var LSYNC_I18N = {"en": {" (\u0442\u0435\u043c\u0430 ": " (topic ", " \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430": " started", " \u043c\u0441 \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043e\u043a\u043d\u0430": " ms after the window opens", " \u043d\u0435\u0442 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0445 \u043a\u043e\u043f\u0438\u0439 lsync": " has no lsync backups", " \u043d\u0443\u0436\u0435\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a v": " needs loader v", " \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0430": " received", " \u0441\u0442\u0430\u0440\u0448\u0435 \u043d\u0443\u0436\u043d\u043e\u0433\u043e v": " older than required v", " \u0441\u0442\u0430\u0440\u0448\u0435 \u0443\u0436\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0432\u0448\u0435\u0439\u0441\u044f v": " older than previously run v", " \u0443 \u043f\u0440\u043e\u0444\u0438\u043b\u044f": " for the profile", " \u2014 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d": " \u2014 disabled", " \u2014 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0441\u0430\u043c": " \u2014 starting, will update itself", " \u2014 \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e": " \u2014 not starting", " \u2014 \u043e\u0431\u043d\u043e\u0432\u043b\u044e \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430": " \u2014 will update after restart", " \u2014 \u043e\u0442\u0432\u0435\u0440\u0433\u043d\u0443\u0442\u0430": " \u2014 rejected", " \u2014 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f": " \u2014 latest", " \u2014 \u0443\u0434\u0430\u043b\u0435\u043d\u0430, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u0437\u0430\u043d\u043e\u0432\u043e": " \u2014 removed, reloading", " \u2192 \u0432\u044b\u0445\u043e\u0434 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430": " \u2192 sign out of the account", "(\u00ab\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u00bb) \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u0412\u043e\u0439\u0442\u0438 \u0432 lampa_sync\u00bb.": "(\u201cServer URL\u201d) and press \u201cSign in to lampa_sync\u201d.", "(\u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430) ": "(after watching) ", "(\u0442\u0438\u0445\u043e) ": "(silent) ", ") \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u043e": ") will be replaced", ") \u2014 \u043d\u0430\u0439\u0434\u0451\u043c \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u2192 ": ") \u2014 we'll find or create it \u2192 ", ") \u2014 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e: \u0432\u0435\u0431-\u0430\u0434\u043c\u0438\u043d\u043a\u0430 \u2192 \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435": ") \u2014 please update it: web admin \u2192 Update", "), \u043f\u043e\u0432\u0442\u043e\u0440 \u0447\u0435\u0440\u0435\u0437 10 \u0441": "), retrying in 10 s", "). \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0430\u0434\u0440\u0435\u0441": "). Check the URL", "+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e": "+ Add category", "+ \u041d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c": "+ New profile", "+ \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439": "+ Add new", ", \u0437\u0435\u0440\u043a\u0430\u043b\u043e ": ", mirror ", ", \u0441\u0435\u0440\u0432\u0435\u0440 ": ", server ", ", \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d ": ", saved ", ", \u0442\u0435\u043c\u0430 ": ", topic ", ", \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0439\u0434\u0451\u0442 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c": ", the device will switch to the main profile", ". \u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u00ab": ". Replace with settings of \u201c", ". \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 Telegram \u2192 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u2192 \u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0435\u0433\u043e": ". Check Telegram \u2192 Settings \u2192 Devices and terminate it", ": \u0437\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c": ": freeze", "; \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0441 ": "; listed since ", "; \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ": "; found: ", "; \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u043e\u043f\u0430\u0441\u043d\u044b\u043c": "; marked as dangerous", "; \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430": "; no reason given", "</b> (QR \u043d\u0438\u0436\u0435) \u2014 ": "</b> (QR below) \u2014 ", "</b> \u2014 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u041f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c\u00bb.<br>": "</b> \u2014 tap \u201cLink\u201d.<br>", "<b>\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0441\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u0445 \u0438 \u0440\u0438\u0441\u043a!</b></div>": "<b>Use only at your own risk!</b></div>", "<b>\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430:</b> \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435 <b>": "<b>Setup:</b> on a computer or phone, open <b>", "<br><b>\u0417\u0430\u043f\u0430\u0441\u043d\u043e\u0439 \u2014 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430:</b> ": "<br><b>Fallback \u2014 from your server:</b> ", "<br><br><b>\u0410\u0434\u0440\u0435\u0441 \u043f\u043b\u0430\u0433\u0438\u043d\u0430:</b> ": "<br><br><b>Plugin URL:</b> ", "<div class=\"lsync-pair__status\" style=\"margin-top:0.8em;color:rgba(255,255,255,0.5)\">\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e \u043a\u043e\u0434\u2026</div>": "<div class=\"lsync-pair__status\" style=\"margin-top:0.8em;color:rgba(255,255,255,0.5)\">Requesting code\u2026</div>", "<div style=\"color:#f5a623;margin-bottom:0.6em\">\u26a0 \u041d\u0430 \u0432\u0440\u0435\u043c\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u044d\u0442\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 ": "<div style=\"color:#f5a623;margin-bottom:0.6em\">\u26a0 For the duration of the operation this device gets full access to your ", "<div style=\"opacity:0.75;margin-bottom:0.6em\">\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442: ": "<div style=\"opacity:0.75;margin-bottom:0.6em\">What will happen: ", "? \u0422\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043d\u043e\u0432\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d lampa-sync \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u00ab\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043a\u0430\u043a\u00bb": "? You will need to add the lampa-sync plugin there again and choose \u201cContinue as\u201d", "Android-\u0442\u0435\u043b\u0435\u0444\u043e\u043d": "Android phone", "CUB (\u043e\u0431\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a)": "CUB (shared list)", "CUB \u043e\u0442\u043c\u0435\u0442\u0438\u043b \u043e\u043f\u0430\u0441\u043d\u044b\u043c: ": "CUB marked as dangerous: ", "Docker) \u0438 \u0445\u0440\u0430\u043d\u0438\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435, \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u044b \u0432\u0441\u0435\u0439 \u0441\u0435\u043c\u044c\u0438. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u0438 \u0447\u0435\u0440\u0435\u0437 ": "Docker) and stores the favorites, timestamps, settings and plugins of the whole family. Works on the local network and over ", "GramJS \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f": "GramJS failed to start", "Lampa (\u0432\u0448\u0438\u0442\u043e \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435)": "Lampa (built into the app)", "backup: \u043e\u0448\u0438\u0431\u043a\u0430": "backup: error", "lampa-sync \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d (\u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430)": "lampa-sync will stop loading the plugin (after restart)", "lampa-sync \u0443\u0436\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0451\u043d \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u2014 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u043c\u043e\u043b\u0447\u0438\u0442": "lampa-sync is already loaded directly \u2014 loader stays idle", "lampa-sync: \u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f": "lampa-sync: guest access", "lampa-sync: \u043c\u043e\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438": "lampa-sync: my categories", "lampa-sync: \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 (": "lampa-sync: this device already has favorites (", "lampa-sync: \u044d\u0442\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u2026": "lampa-sync: this device is\u2026", "lsync: \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0435 \u043a\u043e\u043f\u0438\u0438 Lampa": "lsync: Lampa backups", "\u00bb \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u00ab": "\u201d will be replaced with settings of \u201c", "\u00bb \u0431\u0443\u0434\u0443\u0442 \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u044b \u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e": "\u201d will be reset to defaults", "\u00bb \u0431\u044b\u043b\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u043d\u0435\u0434\u0430\u0432\u043d\u043e. \u0415\u0433\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0437\u0432\u0430\u043d\u0430. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?": "\u201d was online recently. Its link will be revoked. Continue?", "\u00bb \u043d\u0430 \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0438 \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u044f\u0445?": "\u201d on all devices and in all profiles?", "\u00bb \u043d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435?": "\u201d on this device?", "\u00bb \u0441\u043e\u0437\u0434\u0430\u043d": "\u201d created", "\u00bb \u0443\u0434\u0430\u043b\u0451\u043d": "\u201d deleted", "\u00bb, \u0441\u0435\u0440\u0432\u0435\u0440 ": "\u201d, server ", "\u00bb? \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435, \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0443\u0434\u0430\u043b\u044f\u0442\u0441\u044f \u043d\u0430 \u0432\u0441\u0435\u0445 ": "\u201d? The profile's favorites, timestamps and settings will be deleted on all ", "\u00d7 \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e": "\u00d7 Delete category", "\u00d7 \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d": "\u00d7 Remove plugin", "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d Lampa": "URL blocked by Lampa", "\u0410\u0434\u0440\u0435\u0441 \u043f\u043b\u0430\u0433\u0438\u043d\u0430": "Plugin URL", "\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 \u043f\u0430\u0440\u0441\u0435\u0440\u0430": "Parser site URL", "\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Lampa": "Lampa server URL", "\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 lampa-sync": "lampa-sync server URL", "\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d: \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0441 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 \u0441\u0435\u043c\u044c\u0438 (\u0431\u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u044f\u0435\u0442 \u0442\u0430\u043c \u0430\u0434\u0440\u0435\u0441)": "Server URL not found: ask to be added to the family group (the server bot pins the URL there)", "\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ": "Server URL: ", "\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 Telegram \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0430\u0441\u044c \u043d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435": "Telegram library failed to start on this device", "\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 Telegram \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443": "Telegram library failed verification", "\u0411\u043e\u0442 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d.<br>\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435: <b>lampa-sync pair-confirm ": "The server bot is not set up.<br>Confirm on the server: <b>lampa-sync pair-confirm ", "\u0411\u0440\u0430\u0443\u0437\u0435\u0440": "Browser", "\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u0443\u0441\u043a\u0430\u0435\u0442 https-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u043f\u043e http \u2014 \u043d\u0443\u0436\u0435\u043d https-\u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (Tailscale)": "The browser blocks an https page from reaching an http server \u2014 the server needs an https URL (Tailscale)", "\u0411\u044d\u043a\u0430\u043f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430: ": "Device backup: ", "\u0412 \u00ab\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438\u00bb \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f": "To another profile's \u201cBookmarks\u201d", "\u0412 \u0442\u0435\u043c\u0435 ": "Topic ", "\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415: \u0437\u0430 \u0432\u0440\u0435\u043c\u044f \u0432\u0445\u043e\u0434\u0430 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0435\u0430\u043d\u0441 \u2014 ": "WARNING: another session appeared during sign-in \u2014 ", "\u0412\u0438\u0434 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a": "Card view", "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c": "Enable", "\u0412\u043e\u0439\u0442\u0438 \u0432 CUB": "Sign in to CUB", "\u0412\u043e\u0439\u0442\u0438 \u0432 lampa_sync": "Sign in to lampa_sync", "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437 Telegram": "Restore from Telegram", "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432: ": "Parameters restored: ", "\u0412\u0445\u043e\u0434 \u0432 Telegram \u2014 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f/\u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f": "Telegram sign-in only for the duration of backup/restore", "\u0412\u0445\u043e\u0434 \u0432 lampa_sync": "Sign in to lampa_sync", "\u0412\u0445\u043e\u0434 \u0432 lampa_sync \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u2014 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e Lampa\u2026": "Signed in to lampa_sync \u2014 restarting Lampa\u2026", "\u0412\u0445\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d. \u0418\u0449\u0443 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 \u0432\u0430\u0448\u0438\u0445 \u0433\u0440\u0443\u043f\u043f\u0430\u0445\u2026": "Signed in. Looking for server URL in your groups\u2026", "\u0412\u0445\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d. \u0418\u0449\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 ": "Signed in. Looking for group ", "\u0412\u0445\u043e\u0434 \u043e\u0442\u043c\u0435\u043d\u0451\u043d": "Sign-in cancelled", "\u0412\u0445\u043e\u0434 \u043f\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d": "Signed in by invite", "\u0412\u0445\u043e\u0434 \u043f\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044e \u043d\u0435 \u0443\u0434\u0430\u043b\u0441\u044f (": "Invite sign-in failed (", "\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 lampa_sync": "You signed out of lampa_sync", "\u0412\u044b\u0433\u0440\u0443\u0436\u0430\u044e \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e (\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432: ": "Uploading backup (parameters: ", "\u0412\u044b\u0439\u0442\u0438": "Sign out", "\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 lampa_sync": "Sign out of lampa_sync", "\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 lampa_sync? \u0421\u043d\u043e\u0432\u0430 \u0432\u043e\u0439\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435\u043c": "Sign out of lampa_sync? Signing in again will require confirmation", "\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e: \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 CUB": "Off: CUB is active", "\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c": "Disable", "\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430\u2026": "Signing out of the account\u2026", "\u0413\u043e\u0442\u043e\u0432\u043e": "Done", "\u0414\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f\u043c\u0438": "Share with other profiles", "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043a \u043e\u0431\u0449\u0435\u043c\u0443": "Add this device's favorites to the shared ones", "\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u00ab\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438\u00bb \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u00ab": "Added to \u201cBookmarks\u201d of profile \u201c", "\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b": "Other parameters", "\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b: ": "Other parameters: ", "\u0414\u0440\u0443\u0433\u0438\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043d\u0435\u0442": "No other profiles", "\u0416\u0434\u0443 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f\u2026": "Waiting for confirmation\u2026", "\u0417\u0430 \u0432\u0440\u0435\u043c\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 Telegram \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0435\u0430\u043d\u0441 \u2014 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u00ab\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u00bb": "Another session appeared during Telegram sign-in \u2014 check \u201cDevices\u201d", "\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043b: ": "Blocked by: ", "\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430": "Block again", "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e lampa-sync\u2026": "Loading lampa-sync\u2026", "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 Telegram\u2026": "Loading Telegram library\u2026", "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u043a\u043e\u043f\u0438\u044e\u2026": "Loading copy\u2026", "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e": "Load backup", "\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u043d\u0430 GitHub \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u043b \u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u043c \u2014 \u043f\u043b\u0430\u0433\u0438\u043d \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0451\u043d \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430": "The loader on GitHub did not match the signed copy \u2014 the plugin was switched to your server URL", "\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438": "Bookmarks", "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430": "Replace with server data", "\u0417\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b": "Freeze parameters", "\u0417\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b: ": "Freeze parameters: ", "\u0417\u0430\u043f\u0440\u043e\u0441 \u0443\u0436\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0432 \u0431\u043e\u0442 <b>@": "Request already sent to the bot <b>@", "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 (": "This device's favorites (", "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u043e": "This device's favorites will be replaced", "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0434\u0435\u0441\u044c, \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u2014 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0441\u044f": "This device's favorites stay only here; server ones will be added", "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435, \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u044b \u2014 \u043e\u0431\u0449\u0438\u0435 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0448 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440; ": "Favorites, timestamps, settings and plugins shared across all devices via your home server; ", "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a": "Reorder", "\u0418\u043b\u0438 \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u043c.": "Or scan the QR with your phone.", "\u0418\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f": "Profile name", "\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435": "Setup guide", "\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441": "Interface", "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432": "Browsing history", "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0438 \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b": "Browsing history and timestamps", "\u0418\u0449\u0443 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0435 \u043a\u043e\u043f\u0438\u0438\u2026": "Looking for backups\u2026", "\u041a\u0430\u043a\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440": "Which server", "\u041a\u0430\u043a\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c": "Which copy to load", "\u041a\u043e\u0434 \u0438\u0441\u0442\u0451\u043a, \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439": "Code expired, request a new one", "\u041a\u043e\u0434 \u0438\u0441\u0442\u0451\u043a, \u043f\u043e\u043b\u0443\u0447\u0430\u044e \u043d\u043e\u0432\u044b\u0439\u2026": "Code expired, getting a new one\u2026", "\u041a\u043e\u043d\u0442\u0435\u043d\u0442 18+": "18+ content", "\u041a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f": "Cache images", "\u041d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 Telegram \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e": "Telegram backup is unavailable on this device", "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u043d\u044f\u0442\u044c \u0435\u0451 \u043d\u0430 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443; \u0432\u0435\u0440\u0445\u043d\u044f\u044f \u0443\u0439\u0434\u0451\u0442 \u0432 \u043a\u043e\u043d\u0435\u0446": "Tap a category to move it up one row; the top one goes to the end", "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438": "Category name", "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430": "Plugin name", "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b (": "Settings restored (", "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430": "Settings updated, reloading", "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u00ab": "Settings of profile \u201c", "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u00ab": "Settings copied from \u201c", "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0448\u0430\u043f\u043a\u0438": "Header settings", "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u00ab": "This device's settings will be replaced with settings of \u201c", "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u2014 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 lampa_sync, \u0442\u0435\u043c\u0430 backup": "This device's settings \u2014 to the lampa_sync group, backup topic", "\u041d\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c": "Don't merge", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c (": "Failed (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c (": "Couldn't add (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c lampa-sync, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435": "Couldn't load lampa-sync, try again later", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u044d\u043a\u0430\u043f (": "Couldn't load backup (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u0438 (": "Couldn't load profiles (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c (": "Couldn't change (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c, \u043f\u043e\u0432\u0442\u043e\u0440\u044e \u043f\u043e\u0437\u0436\u0435": "Merge failed, will retry later", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c": "Couldn't rename", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c (": "Couldn't switch profile (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c (\u043d\u0435\u0442 \u0441\u0432\u044f\u0437\u0438)": "Couldn't switch profile (no connection)", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f": "Couldn't share", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c (": "Couldn't check (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c": "Couldn't reset", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 Telegram": "Couldn't download the Telegram library", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c": "Couldn't copy", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c": "Couldn't create", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c (": "Couldn't save (", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c": "Couldn't delete", "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c (": "Couldn't delete (", "\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043c\u0435\u0441\u0442\u0430 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0434\u043b\u044f lampa-sync": "Not enough storage space for lampa-sync", "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0431\u043b\u0430\u0447\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c": "Wrong cloud password", "\u041d\u0435\u0442 \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f": "No groups enabled", "\u041d\u0435\u0442 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c": "No connection to server", "\u041d\u0435\u0442 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c (": "No connection to server (", "\u041d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f": "New profile name", "\u041d\u043e\u0432\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435": "New name", "\u041d\u043e\u0432\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e": "New device", "\u041d\u043e\u0432\u043e\u0435, \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u2026": "New, copy settings from\u2026", "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f": "Like", "\u041e\u0431\u043b\u0430\u0447\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c (\u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430: ": "Cloud password (hint: ", "\u041e\u0431\u043b\u0430\u0447\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c Telegram": "Telegram cloud password", "\u041e\u0431\u0449\u0438\u0435 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432; \u0444\u043b\u0430\u0436\u043a\u0438 \u2014 \u0443 \u043f\u0440\u043e\u0444\u0438\u043b\u044f": "Shared across all devices; checkboxes are per profile", "\u041e\u0431\u0449\u0438\u0439 \u0440\u0435\u0436\u0438\u043c: ": "Overall mode: ", "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c": "Merge with server", "\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c lampa-sync ": "lampa-sync main part ", "\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c lampa-sync \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ": "lampa-sync main part from server ", "\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u0434\u043f\u0438\u0441\u0438": "Main part failed signature check", "\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435": "Other", "\u041e\u0442\u043c\u0435\u043d\u0430": "Cancel", "\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u043e": "Cancelled", "\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR \u0432 Telegram \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435: \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u2192 \u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u2192 \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e": "Scan the QR in Telegram on your phone: Settings \u2192 Devices \u2192 Link Desktop Device", "\u041e\u0448\u0438\u0431\u043a\u0430: ": "Error: ", "\u041f\u0430\u0440\u0441\u0435\u0440": "Parser", "\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441": "Restart now", "\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c": "Rename", "\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c": "Rename profile", "\u041f\u0435\u0440\u0435\u0439\u0442\u0438": "Switch", "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a CUB": "Go to CUB", "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a lampa_sync": "Go to lampa_sync", "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 ": "Switch to ", "\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 ": "Switching to ", "\u041f\u043b\u0430\u0433\u0438\u043d \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d (": "Plugin not found (", "\u041f\u043b\u0430\u0433\u0438\u043d \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u043c Lampa, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0442\u043e\u043a\u0435\u043d\u044b": "The plugin will get access to all Lampa data, including tokens", "\u041f\u043b\u0430\u0433\u0438\u043d \u0441\u043c\u043e\u0436\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 Lampa (\u0442\u043e\u043a\u0435\u043d\u044b CUB \u0438 lampa-sync, \u043f\u0430\u0440\u043e\u043b\u0438) \u0438 \u0443\u0432\u043e\u0434\u0438\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044b": "The plugin will be able to read all Lampa data (CUB and lampa-sync tokens, passwords) and redirect to other sites", "\u041f\u043b\u0430\u0433\u0438\u043d\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430": "Plugins updated, reloading", "\u041f\u043b\u0435\u0435\u0440": "Player", "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f": "Share", "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0441\u044c \u043a Telegram\u2026": "Connecting to Telegram\u2026", "\u041f\u043e\u0437\u0436\u0435": "Later", "\u041f\u043e\u043d\u044f\u0442\u043d\u043e": "Got it", "\u041f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u043f\u0440\u043e\u0441\u0438\u0442, \u043a\u0430\u043a \u0441\u0432\u0435\u0441\u0442\u0438 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c": "After restart it will ask how to merge favorites with the server", "\u041f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e: #": "Linked: #", "\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0430": "Device linking rejected", "\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 lampa_sync \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e (\u0443\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e \u0438\u043b\u0438 \u0438\u0441\u0442\u0435\u043a\u043b\u043e) \u2014 \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435": "lampa_sync invite is invalid (already used or expired) \u2014 ask for a new one", "\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 lampa_sync: \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438, \u0432\u044b\u0439\u0434\u0438\u0442\u0435 \u0438\u0437 CUB": "lampa_sync invite: to sign in, sign out of CUB", "\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 Lampa": "Will apply after Lampa restarts", "\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 TG": "Join via TG", "\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Telegram": "Join via Telegram", "\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0432\u044f\u0437\u044c": "Check connection", "\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u044e \u0430\u0434\u0440\u0435\u0441\u2026": "Checking URL\u2026", "\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u044e \u043f\u0430\u0440\u043e\u043b\u044c\u2026": "Checking password\u2026", "\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u044e \u0441\u0432\u044f\u0437\u044c\u2026": "Checking connection\u2026", "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u043a\u0430\u043a \u00ab": "Continuing as \u201c", "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c": "Continue", "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043a\u0430\u043a \u00ab": "Continue as \u201c", "\u041f\u0440\u043e\u043a\u0441\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 TMDB": "TMDB image proxy", "\u041f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435": "Proxy the rest", "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u00ab": "Profile \u201c", "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d \u0432 \u00ab": "Profile renamed to \u201c", "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0441\u043c\u0435\u043d\u0451\u043d, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430": "Profile changed, reloading", "\u041f\u0440\u043e\u0444\u0438\u043b\u044c: ": "Profile: ", "\u041f\u0440\u043e\u0448\u043b\u043e 15 \u043c\u0438\u043d\u0443\u0442": "15 minutes passed", "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c": "Unblock", "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u00ab": "Unblock \u201c", "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435": "Unblock on this device", "\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b": "Mode", "\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b: ": "Mode: ", "\u0420\u0435\u0436\u0438\u043c \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438: ": "Sync mode: ", "\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f \u0432 Telegram": "Backup to Telegram", "\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c Telegram, \u0431\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. ": "Backup of this device's settings to your Telegram, no server. ", "\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430: \u0433\u0440\u0443\u043f\u043f\u0430 ": "Backup saved: group ", "\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 Telegram \u0432 \u044d\u0442\u043e\u0439 \u0441\u0431\u043e\u0440\u043a\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430 \u043d\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e": "Telegram backup is not configured in this loader build", "\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c": "Parental Control", "\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c: \u0432\u0440\u0435\u043c\u044f": "Parental Control: time", "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c": "Reset", "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f": "Reset profile settings", "\u0421\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440": "Own server", "\u0421\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 lampa-sync": "Own lampa-sync server", "\u0421\u0432\u044f\u0437\u044c \u0435\u0441\u0442\u044c, \u0441\u0435\u0440\u0432\u0435\u0440 v": "Connected, server v", "\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e": "Create backup", "\u0421\u0435\u0439\u0447\u0430\u0441 ": "Currently ", "\u0421\u0435\u0440\u0432\u0435\u0440 lampa-sync \u0443\u0441\u0442\u0430\u0440\u0435\u043b (v": "The lampa-sync server is outdated (v", "\u0421\u0435\u0440\u0432\u0435\u0440 lampa-sync \u0443\u0441\u0442\u0430\u0440\u0435\u043b \u2014 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e: \u0432\u0435\u0431-\u0430\u0434\u043c\u0438\u043d\u043a\u0430 \u2192 \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435": "The lampa-sync server is outdated \u2014 please update it: web admin \u2192 Update", "\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0430\u0439\u0434\u0435\u043d: ": "Server found: ", "\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0430\u0439\u0434\u0435\u043d: lampa-sync v": "Server found: lampa-sync v", "\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 (": "Server not responding (", "\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u2014 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0438 \u0443\u0439\u0434\u0443\u0442 \u043f\u043e\u0437\u0436\u0435": "Server unavailable \u2014 changes are saved and will be sent later", "\u0421\u0435\u0440\u0432\u0435\u0440 \u0441\u043e\u0431\u0440\u0430\u043d \u0434\u0440\u0443\u0433\u0438\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u2014 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0435\u043b\u044c\u0437\u044f. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u043b\u0430\u0433\u0438\u043d \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ": "The server was built with a different key \u2014 can't connect. Add the plugin from your server's URL: ", "\u0421\u0435\u0440\u0432\u0435\u0440 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u043d\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440, NAS \u0438\u043b\u0438 \u043c\u0438\u043d\u0438-\u0441\u0435\u0440\u0432\u0435\u0440 (Windows, macOS, Linux, QNAP, Umbrel, ": "The server is installed once on a home computer, NAS or mini-server (Windows, macOS, Linux, QNAP, Umbrel, ", "\u0421\u0435\u0440\u0432\u0435\u0440: ": "Server: ", "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f lampa_sync \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430": "lampa_sync sync will be disabled", "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430": "Sync restored", "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c: ": "Sync: ", "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c": "Copy", "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0437 \u043f\u0440\u043e\u0444\u0438\u043b\u044f": "Copy settings from profile", "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441": "Copy settings from", "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u2026": "Copy settings from device\u2026", "\u0421\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0437\u0430 \u044d\u043a\u0440\u0430\u043d\u043e\u043c": "Hide off-screen cards", "\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c": "Switch profile", "\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c": "Watch", "\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430": "Enter the server URL first", "\u0421\u043e\u0437\u0434\u0430\u044e \u0433\u0440\u0443\u043f\u043f\u0443 ": "Creating group ", "\u0421\u043e\u0437\u0434\u0430\u044e \u0442\u0435\u043c\u0443 ": "Creating topic ", "\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0441\u0435\u0433\u0434\u0430, \u0432 \u043b\u044e\u0431\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438": "Always saved, in any sync mode", "\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f lampa-sync \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u0438\u043b\u0438 \u0443\u0441\u0442\u0430\u0440\u0435\u043b\u0430 \u2014 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u0437\u0430\u043d\u043e\u0432\u043e": "Saved copy of lampa-sync is modified or outdated \u2014 reloading", "\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 Lampa: ": "Current Lampa server: ", "\u0422\u0438\u043f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438": "Card interface type", "\u0422\u043e\u043b\u044c\u043a\u043e backup": "Backup only", "\u0422\u043e\u0447\u043a\u0430 \u0443 \u0430\u0434\u0440\u0435\u0441\u0430: \u0437\u0435\u043b\u0451\u043d\u0430\u044f \u2014 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043a\u0440\u0430\u0441\u043d\u0430\u044f \u2014 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0438\u043b\u0438 \u0430\u0434\u0440\u0435\u0441 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442, ": "Dot next to URL: green \u2014 working, red \u2014 fails to load or URL not responding, ", "\u0423\u0434\u0430\u043b\u0438\u0442\u044c": "Delete", "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u00ab": "Remove \u201c", "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d": "Remove plugin", "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c": "Delete profile", "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u00ab": "Delete profile \u201c", "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u043c": "Manage favorites", "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u043c + \u043c\u043e\u0438 (": "Manage favorites + mine (", "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f": "Manage profile settings", "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430\u043c\u0438": "Manage plugins", "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430\u043c\u0438 (": "Manage plugins (", "\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043d\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e": "Device not linked", "\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u044f\u0437\u0430\u043d\u043e, \u043d\u0443\u0436\u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f": "Device unlinked, sign-in required", "\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u043e\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 Telegram": "Device disconnected from the Telegram account", "\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e": "Device linked", "\u0427\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0432 lampa_sync, \u0432\u044b\u0439\u0434\u0438\u0442\u0435 \u0438\u0437 CUB": "To sign in to lampa_sync, sign out of CUB", "\u042d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0442\u0435\u0440\u044f\u043d\u044b \u0431\u0435\u0437\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u043e": "This is the main profile. Settings will be lost permanently", "\u042d\u0442\u043e \u0441\u0430\u043c lampa-sync": "This is lampa-sync itself", "\u042f\u0437\u044b\u043a TMDB": "TMDB language", "\u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432: ": "loader address in the plugin list: ", "\u0430\u0434\u0440\u0435\u0441 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442": "URL not responding", "\u0430\u0434\u0440\u0435\u0441 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442": "URL responds", "\u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 Telegram. \u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u044b Lampa (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u00ab\u043f\u043b\u043e\u0445\u0438\u0435\u00bb) \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f. ": "Telegram account. Other Lampa plugins (including \u201cbad\u201d ones) could theoretically use it. ", "\u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f": "without invite parameters", "\u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u0438 \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442. \u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u0432\u0435\u0431-\u0430\u0434\u043c\u0438\u043d\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u0432 Telegram-\u0431\u043e\u0442\u0435": "on the local network and over the internet. Devices are approved in the server web admin or the Telegram bot", "\u0432\u043a\u043b": "on", "\u0432\u043a\u043b\u044e\u0447\u0451\u043d": "enabled", "\u0432\u0441\u0435": "all", "\u0432\u0445\u043e\u0434 \u0432 Telegram \u043f\u043e QR \u2192 \u0433\u0440\u0443\u043f\u043f\u0430 ": "Telegram sign-in by QR \u2192 group ", "\u0432\u0445\u043e\u0434 \u0432 Telegram \u043f\u043e QR \u2192 \u043d\u0430\u0439\u0434\u0451\u043c \u0432 \u0432\u0430\u0448\u0438\u0445 \u0433\u0440\u0443\u043f\u043f\u0430\u0445 \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0451\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0441\u0435\u043c\u044c\u0438 \u2192 \u0432\u044b\u0445\u043e\u0434 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u2192 ": "Telegram sign-in by QR \u2192 we'll find the family server URL pinned in your groups \u2192 sign out of the account \u2192 ", "\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u043e": "partial", "\u0432\u044b\u0433\u0440\u0443\u0437\u0438\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 (\u043a\u0440\u043e\u043c\u0435 \u043f\u043b\u0435\u0435\u0440\u0430) \u0444\u0430\u0439\u043b\u043e\u043c \u0432 \u0442\u0435\u043c\u0443 backup": "we'll upload this device's settings (except player) as a file to the backup topic", "\u0432\u044b\u043a\u043b": "off", "\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d": "disabled", "\u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f (\u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043c\u043f\u043e\u0440\u0442)": "guest access (import only)", "\u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u2014 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\u0451\u043c": "guest access \u2014 receive only", "\u0433\u0440\u0443\u043f\u043f\u0430": "group", "\u0433\u0440\u0443\u043f\u043f\u0430 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0430": "group not created", "\u0434\u0430": "yes", "\u0435\u0449\u0451 \u043d\u0435\u0442": "none yet", "\u0436\u0451\u043b\u0442\u0430\u044f \u2014 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f": "yellow \u2014 checking", "\u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u00b7 ": "blocked \u00b7 ", "\u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a v": "loader v", "\u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u043d\u0430 GitHub \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u043c \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u2014 \u043e\u0441\u0442\u0430\u044e\u0441\u044c \u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430": "loader on GitHub does not match the one signed for this server \u2014 staying on the server URL", "\u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u0445\u043e\u0434\u0430 \u0443\u0439\u0434\u0451\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430\u043c \u0433\u0440\u0443\u043f\u043f\u044b": "the sign-in request goes to the group admins", "\u0437\u0435\u0440\u043a\u0430\u043b\u043e ": "mirror ", "\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e \u00ab\u043d\u0430\u0437\u0430\u0434\u00bb \u0447\u0435\u0440\u0435\u0437 ": "ignoring \u201cback\u201d for ", "\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u2014 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0439, \u043f\u043e\u0440\u0442\u044b \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e.<br><br>": "the internet \u2014 the URL is permanent, no ports need to be opened.<br><br>", "\u043a\u043e\u0434 ": "code ", "\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0451\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u2014 \u043d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442": "manifest failed signature check \u2014 not accepted", "\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 \u0441\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0441 \u043a\u043b\u044e\u0447\u043e\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u044d\u0442\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430": "server manifest does not match this plugin's author key", "\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b:": "settings not received:", "\u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0441\u044f \u043d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435": "failed to load on this device", "\u043d\u0435 \u0437\u0430\u0434\u0430\u043d": "not set", "\u043d\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u043e\u0441\u044c": "not saved", "\u043d\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e": "not linked", "\u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u043c \u0432\u044b\u043f\u0443\u0441\u043a\u0430": "does not match the release manifest", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e": "failed to restore history", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b": "failed to restore timestamps", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430": "failed to clean loader URL", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0435\u0440\u0435\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u0434\u0435\u043b": "failed to redraw section", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435": "failed to apply change", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443": "failed to apply setting", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043d\u0438\u043c\u043e\u043a": "failed to apply snapshot", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u043a\u043e\u0434": "failed to apply timestamp", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b": "failed to apply timestamps", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438 CUB": "failed to save CUB bookmarks", "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u00ab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435\u00bb": "failed to sort \u201cFavorites\u201d", "\u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043c\u0435\u0441\u0442\u0430 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0434\u043b\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438": "not enough storage space for main part", "\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430": "unknown error", "\u043d\u0435\u0442": "no", "\u043d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0430": "no response", "\u043d\u0435\u0442 \u0441\u0432\u044f\u0437\u0438": "no connection", "\u043d\u0435\u0442 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c:": "no connection to server:", "\u043d\u0438\u0447\u0435\u0433\u043e": "none", "\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c v": "main part v", "\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0430:": "main part not received:", "\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u2014 \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e": "main part failed verification \u2014 not starting", "\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ": "main part from server ", "\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0443\u043f\u0430\u043b\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435": "main part crashed on start", "\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 v": "main part v", "\u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435": "deferred action", "\u043e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u0432\u0435\u0442\u0430": "response error", "\u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430": "server error", "\u043e\u0448\u0438\u0431\u043a\u0430: ": "error: ", "\u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0430\u0439\u0442": "redirect to another site", "\u043f\u043b\u0430\u0433\u0438\u043d (\u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435): \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e": "plugin (unblocked on device): loading", "\u043f\u043b\u0430\u0433\u0438\u043d \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0441\u044f:": "plugin failed to load:", "\u043f\u043b\u0430\u0433\u0438\u043d\u044b: \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c": "plugins: failed to apply", "\u043f\u043b\u0430\u0433\u0438\u043d\u044b: \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c": "plugins: URL check failed", "\u043f\u043b\u0430\u0433\u0438\u043d\u044b: \u0441\u0432\u0435\u0440\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c": "plugins: reconciliation failed", "\u043f\u043e\u043a\u0430\u0436\u0435\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u043a\u043e\u043f\u0438\u0438 \u2014 \u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435, \u043a\u0430\u043a\u0443\u044e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e)": "we'll show saved copies \u2014 you choose which to load (latest by default)", "\u043f\u043e\u043b\u043d\u0430\u044f": "full", "\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439: ": "changes received: ", "\u043f\u0440\u0430\u0432\u0438\u043b\u043e \u00ab": "rule \u201c", "\u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e": "linked", "\u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435: \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d": "invite: server unavailable", "\u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435: \u0441\u0442\u0430\u0442\u0443\u0441 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d": "invite: status not received", "\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c": "signature check failed", "\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f": "checking", "\u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u043c\u0435\u043d\u0438\u043b\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u2192 ": "device profile changed on server \u2192 ", "\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442": "working", "\u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u00b7 ": "unblocked on this device \u00b7 ", "\u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u0432\u0435\u0440\u0433 \u043f\u0430\u0447\u043a\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e:": "server rejected a batch of operations, discarding:", "\u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u0432\u0435\u0440\u0433 \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b, \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e:": "server rejected timestamps, discarding:", "\u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0431\u0440\u043e\u0441\u0438\u043b \u0436\u0443\u0440\u043d\u0430\u043b \u2014 \u0431\u0435\u0440\u0443 \u0441\u043d\u0438\u043c\u043e\u043a \u0437\u0430\u043d\u043e\u0432\u043e": "server reset the log \u2014 taking a fresh snapshot", "\u0441\u0435\u0440\u0432\u0435\u0440: \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u043d\u0430 GitHub \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u043c": "server: loader on GitHub does not match the signed copy", "\u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c:": "merging enabled categories failed:", "\u0441\u043b\u0438\u044f\u043d\u0438\u0435: \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ": "merge: added to server ", "\u0441\u043d\u0438\u043c\u043e\u043a \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d:": "snapshot not received:", "\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d ": "saved ", "\u0441\u0447\u0451\u0442\u0447\u0438\u043a \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438": "Yandex.Metrica counter", "\u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b:": "timestamps not received:", "\u0442\u0430\u043c \u043a\u043d\u043e\u043f\u043a\u0438 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0412 \u043a\u043e\u043d\u0446\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0441\u0432\u043e\u0439 \u0430\u0434\u0440\u0435\u0441 \u2014 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0435\u0433\u043e \u0437\u0434\u0435\u0441\u044c ": "it has download buttons for every system. At the end the server will show its URL \u2014 enter it here ", "\u0442\u0435\u043c\u0430 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0430": "topic not created", "\u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043c\u043f\u043e\u0440\u0442": "import only", "\u0443\u0441\u0442\u0430\u0440\u0435\u043b\u0430 (\u0432\u044b\u043f\u0443\u0449\u0435\u043d\u0430 v": "outdated (released v", "\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445": "devices", "\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e #": "device #", "\u044d\u0442\u043e \u043d\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f lsync": "this is not an lsync backup", "\u2014 \u0437\u0430\u043f\u0438\u0441\u044c \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0430 \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430": "\u2014 plugin entry switched back to the server URL", "\u2195 \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a": "\u2195 Reorder", "\u270e \u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e": "\u270e Rename category"}};
// Язык — как у Lampa: русский и белорусский → русский; есть словарь → он; иначе английский
var LSYNC_LANG = (function () {
  var l = 'ru';
  try { l = String(Lampa.Storage.get('language', 'ru') || 'ru').toLowerCase().split(/[-_]/)[0]; } catch (e) {}
  if (l === 'ru' || l === 'be') return 'ru';
  return LSYNC_I18N[l] ? l : 'en';
})();
function T(s) {
  if (LSYNC_LANG === 'ru') return s;
  var d = LSYNC_I18N[LSYNC_LANG] || {};
  var t = d[s];
  if (typeof t !== 'string' && LSYNC_I18N.en) t = LSYNC_I18N.en[s];
  return typeof t === 'string' ? t : s;
}
// Надпись самой Lampa для раздела «Синхронизация» (к ней дописываем «lampa_sync») — на языке Lampa.
function lampaSyncLabel() {
  try { var v = Lampa.Lang.translate('settings_cub_sync'); if (v && v !== 'settings_cub_sync') return v; } catch (e) {}
  return LSYNC_LANG === 'ru' ? '\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f' : 'Synchronization';
}

/* --- 10_core.js --- */
// Загрузчик lsync: ядро. Адрес сервера, код приглашения, запросы к серверу.
// Хранилище — window.localStorage напрямую (ключи lsync_*): основная часть стирает их при «Выйти из lampa_sync».
// Токен устройства — общий с основной частью (lampa_sync_token в Lampa.Storage).

var LOADER = window.lsync_loader = { version: LOADER_CONFIG.version };
var LSYNC = LOADER;  // общий модуль привязки (20_pairing.js) работает через LSYNC

var KEY_SERVER = 'lsync_server';   // {"base": "https://…"}
var KEY_MAIN = 'lsync_main';       // {"version", "code", "sig"} — подпись проверена при получении
var KEY_INVITE = 'lsync_invite';   // код приглашения из ссылки (до входа)
var KEY_MODE = 'lsync_mode';       // 'server' | 'backup'
var KEY_FRESH = 'lampa_sync_fresh';  // основной части: после входа предложить «Продолжить как»
var KEY_TOKEN = 'lampa_sync_token';
var KEY_DEVICE = 'lampa_sync_device';

// Адрес, с которого Lampa загрузила загрузчик. Из кэша Lampa (адрес недоступен) он пуст — поэтому параметры
// ссылки сохраняем при первом запуске.
var LOADER_SRC = '';
try { LOADER_SRC = (document.currentScript && document.currentScript.src) || ''; } catch (e) {}

function log() {
  var args = ['lsync'];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  try { console.log.apply(console, args); } catch (e) {}
}

function noty(text) {
  try { Lampa.Noty.show('lsync: ' + text); } catch (e) { log(text); }
}

function rawGet(key) {
  try { return window.localStorage.getItem(key); } catch (e) { return null; }
}

function rawSet(key, value) {
  try { window.localStorage.setItem(key, value); return true; } catch (e) { log(T('не записалось'), key, e && e.message); return false; }
}

function rawRemove(key) {
  try { window.localStorage.removeItem(key); } catch (e) {}
}

function jsonGet(key) {
  var v = rawGet(key);
  if (!v) return null;
  try { return JSON.parse(v); } catch (e) { return null; }
}

function serverBase() {
  var s = jsonGet(KEY_SERVER);
  return (s && s.base) || LOADER_CONFIG.default_server || '';
}

function setServerBase(base) {
  rawSet(KEY_SERVER, JSON.stringify({ base: base }));
  LOADER.invite = rawGet(KEY_INVITE) || '';
}

// «lampa.example.ts.net» → «https://lampa.example.ts.net»; без хвостового «/».
function normalizeBase(text) {
  var url = String(text || '').trim();
  if (!url) return '';
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  return url.replace(/\/+$/, '');
}

function getToken() {
  try { return Lampa.Storage.get(KEY_TOKEN, '') || ''; } catch (e) { return ''; }
}

// Для 20_pairing.js: новая привязка.
function setToken(token, device) {
  Lampa.Storage.set(KEY_TOKEN, token || '');
  Lampa.Storage.set(KEY_DEVICE, device || {});
}

// По умолчанию — всегда «Только backup»; «Свой сервер» — выбором в меню или ссылкой-приглашением.
function mode() {
  return rawGet(KEY_MODE) === 'server' ? 'server' : 'backup';
}

// Параметры ссылки на загрузчик: s — адрес сервера, g — код приглашения.
function linkParams(src) {
  var out = {};
  var q = String(src || '').split('#')[0].split('?')[1] || '';
  var parts = q.split('&');
  for (var i = 0; i < parts.length; i++) {
    var kv = parts[i].split('=');
    if (kv[0] === 's' || kv[0] === 'g') {
      try { out[kv[0]] = decodeURIComponent(kv[1] || ''); } catch (e) {}
    }
  }
  return out;
}

// Свой адрес неизвестен (Lampa запустила загрузчик из кэша или WebView без document.currentScript — Tizen) —
// ищем свою запись в списке плагинов Lampa по адресу сервера: по ней потом убираем из записи ?g=.
function findOwnSrc() {
  var own = LOADER_CONFIG.default_server ? LOADER_CONFIG.default_server + '/l.js' : '';
  if (!own) return '';
  try {
    var list = (Lampa.Plugins && Lampa.Plugins.get) ? Lampa.Plugins.get() : (Lampa.Storage.get('plugins', '[]') || []);
    for (var i = 0; i < list.length; i++) {
      var url = typeof list[i] === 'string' ? list[i] : list[i] && list[i].url;
      if (url && String(url).split('#')[0].split('?')[0] === own) return String(url);
    }
  } catch (e) {}
  return '';
}

// Ссылка-приглашение: адрес сервера и код — пока устройство не вошло (вошедшее приглашение не перепишет).
function applyLinkParams() {
  if (!LOADER_SRC) LOADER_SRC = findOwnSrc();
  var p = linkParams(LOADER_SRC);
  // код приглашения сервер вшивает и в сам загрузчик (/l.js?g=…) — вход сам, даже если свой адрес не виден
  if (!p.g && LOADER_CONFIG.invite) p.g = LOADER_CONFIG.invite;
  if (!getToken()) {
    // без s (загрузчик отдал сам сервер) — приглашение на этот сервер, а не на запомненный раньше
    var base = p.s || (p.g ? LOADER_CONFIG.default_server : '');
    if (base) rawSet(KEY_SERVER, JSON.stringify({ base: normalizeBase(base) }));
    if (p.g) rawSet(KEY_INVITE, p.g);
    if (p.s || p.g) rawSet(KEY_MODE, 'server');
  }
  LOADER.invite = getToken() ? '' : (rawGet(KEY_INVITE) || '');
}

// HTTP к серверу (как в основной части). onFail(reason, status).
function request(method, path, body, onOk, onFail, timeoutMs) {
  var xhr = new XMLHttpRequest();
  var done = false;
  function fail(reason) {
    if (done) return;
    done = true;
    if (onFail) onFail(reason, xhr.status);
  }
  xhr.open(method, serverBase() + path, true);
  xhr.timeout = timeoutMs || 15000;
  var token = getToken();
  if (token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  try { xhr.setRequestHeader('Accept-Language', LSYNC_LANG); } catch (e) {}  // ответы сервера — на языке Lampa
  if (body) xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) return fail('HTTP ' + xhr.status);
    var data;
    try { data = JSON.parse(xhr.responseText); } catch (e) { return fail('bad json'); }
    done = true;
    if (onOk) onOk(data);
  };
  xhr.onerror = function () { fail('network'); };
  xhr.ontimeout = function () { fail('timeout'); };
  xhr.send(body ? JSON.stringify(body) : null);
}

function cubLoggedIn() {
  try { return !!(Lampa.Account && Lampa.Account.Permit && Lampa.Account.Permit.token); } catch (e) { return false; }
}

/* --- 30_main.js --- */
// Основная часть плагина: получение со своего сервера, проверка подписи автора, кэш, запуск.
// Защита основной части (две проверки):
//   подпись автора — при получении И при каждом запуске из кэша: изменённая копия в localStorage (её мог оставить
//   плагин, которого уже нет) не запустится, кэш выбрасывается и основная часть скачивается заново;
//   без отката — версия берётся из ПОДПИСАННОГО кода (а не из поля ответа), версия ниже уже запускавшейся
//   отвергается: старую подписанную версию с известной ошибкой не подсунуть.
//   манифест выпуска — подписан тем же ключом автора: текущая версия основной части, её SHA-512, нужный
//   загрузчик. Основная часть старше манифеста или с другим хешем при той же версии — удаляется с сообщением
//   и скачивается заново; загрузчик старше нужного — основная часть не запускается («обновите загрузчик»).
// Запуск — через new Function с параметром: адрес сервера и функции загрузчика (бэкап в Telegram) основная часть
// получает аргументом, а не через window — чужой плагин не подменит их между загрузчиком и основной частью.

var AUTHOR_KEY = hexBytes(LOADER_CONFIG.author_key);
var KEY_MAIN_MAX = 'lsync_main_max';  // наибольшая версия основной части, которая уже запускалась
var KEY_MANIFEST = 'lsync_manifest';  // {text, sig} — манифест выпуска, подписан автором

function hexBytes(hex) {
  hex = String(hex || '');
  var out = new Uint8Array(hex.length >> 1);
  for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out;
}

function utf8Bytes(str) {
  var bin = unescape(encodeURIComponent(str));
  var out = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

// Версия из подписанного кода: первая строка «/* lampa-sync main vX.Y.Z — …».
function signedVersion(code) {
  var m = /^\/\* lampa-sync main v(\d+(?:\.\d+)*)/.exec(String(code || ''));
  return m ? m[1] : '';
}

function compareVersions(a, b) {
  var x = String(a).split('.');
  var y = String(b).split('.');
  for (var i = 0; i < Math.max(x.length, y.length); i++) {
    var d = (parseInt(x[i], 10) || 0) - (parseInt(y[i], 10) || 0);
    if (d) return d < 0 ? -1 : 1;
  }
  return 0;
}

// Подпись автора верна и версия не ниже уже запускавшейся. Возвращает подписанную версию или ''.
function verifyMain(main) {
  if (!main || typeof main.code !== 'string' || !main.sig || AUTHOR_KEY.length !== 32) return '';
  var ok = false;
  try {
    ok = nacl.sign.detached.verify(utf8Bytes(main.code), hexBytes(main.sig), AUTHOR_KEY);
  } catch (e) {
    log(T('проверка подписи не удалась'), e && e.message);
  }
  var version = ok ? signedVersion(main.code) : '';
  if (!version) return '';
  var max = rawGet(KEY_MAIN_MAX);
  if (max && compareVersions(version, max) < 0) {
    log(T('основная часть v') + version + T(' старше уже запускавшейся v') + max + T(' — отвергнута'));
    return '';
  }
  return version;
}

// ─── манифест выпуска ──────────────────────────────────────────────────────

function verifyManifest(m) {
  if (!m || typeof m.text !== 'string' || !m.sig || AUTHOR_KEY.length !== 32) return null;
  try {
    if (!nacl.sign.detached.verify(utf8Bytes(m.text), hexBytes(m.sig), AUTHOR_KEY)) return null;
  } catch (e) { return null; }
  var d;
  try { d = JSON.parse(m.text); } catch (e) { return null; }
  return d && d.format === 'lsync-manifest' && d.version && d.sha512 ? d : null;
}

function cachedManifest() { return verifyManifest(jsonGet(KEY_MANIFEST)); }

// Свежий манифест с сервера (позже — и с GitHub Pages). Принимается только подписанный и не старее сохранённого.
function fetchManifest(cb) {
  request('GET', '/api/v1/manifest', null, function (m) {
    var d = verifyManifest(m);
    var have = cachedManifest();
    if (!d) log(T('манифест не прошёл проверку подписи — не принят'));
    else if (!have || d.issued >= have.issued) rawSet(KEY_MANIFEST, JSON.stringify({ text: m.text, sig: m.sig }));
    if (d) reportServerOutdated(d.version);  // сервер старее нужного загрузчику — только сообщение
    cb();
  }, function () { cb(); }, 30000);
}

// Сверка основной части с манифестом: '' — всё в порядке, иначе причина.
function manifestProblem(main, version) {
  var mf = cachedManifest();
  if (!mf) return '';
  if (compareVersions(version, mf.version) < 0) return T('устарела (выпущена v') + mf.version + ')';
  if (version === mf.version && sha512Hex(main.code) !== mf.sha512) return T('не совпадает с манифестом выпуска');
  return '';
}

// Загрузчик старше, чем нужно основной части по манифесту: нужная версия, иначе ''.
function loaderTooOld() {
  var mf = cachedManifest();
  return mf && mf.min_loader && compareVersions(LOADER.version, mf.min_loader) < 0 ? mf.min_loader : '';
}

function cachedMain() {
  var m = jsonGet(KEY_MAIN);
  return m && typeof m.code === 'string' ? m : null;
}

// onDone(ok, main): ok — основная часть есть (новая или та же), main — свежая (null, если версия та же).
// quiet — фоновая проверка обновления (может идти фильм): ошибки только в журнал.
function fetchMain(onDone, quiet) {
  fetchManifest(function () { fetchMainPart(onDone, quiet); });
}

function fetchMainPart(onDone, quiet) {
  var have = cachedMain();
  request('GET', '/api/v1/main?have=' + encodeURIComponent(have ? signedVersion(have.code) : ''), null, function (res) {
    if (res.same) return onDone(true, null);
    var version = verifyMain(res);
    if (!version) {
      log(T('основная часть не прошла проверку — не запускаю'));
      if (!quiet) noty(T('Основная часть не прошла проверку подписи'));
      return onDone(!!have, null);
    }
    var problem = manifestProblem(res, version);
    if (problem) {
      log(T('основная часть с сервера ') + problem + T(' — не запускаю'));
      if (!quiet) noty(T('Основная часть lampa-sync с сервера ') + problem);
      return onDone(!!have, null);
    }
    var mf = cachedManifest();
    if (have && mf && mf.min_loader && compareVersions(LOADER.version, mf.min_loader) < 0) {
      // новой основной части нужен загрузчик новее — остаёмся на текущей; свежий загрузчик Lampa скачает сама
      // при следующем запуске, тогда и обновимся (тихо)
      log(T('основной части v') + version + T(' нужен загрузчик v') + mf.min_loader + T(' — обновлю после перезапуска'));
      return onDone(true, null);
    }
    if (!rawSet(KEY_MAIN, JSON.stringify({ version: version, code: res.code, sig: res.sig }))) {
      log(T('не хватает места в хранилище для основной части'));
      if (!quiet) noty(T('Не хватает места в хранилище для lampa-sync'));
    }
    log(T('основная часть v') + version + T(' получена'));
    onDone(true, res);
  }, function (reason, status) {
    if (status === 401) {
      // устройство отозвали на сервере — назад к загрузчику
      setToken('', {});
      rawRemove(KEY_MAIN);
    }
    log(T('основная часть не получена:'), reason);
    onDone(!!have && status !== 401, null);
  }, 60000);
}

// Исполнить код в глобальной области (как Lampa запускает плагины из своего кэша).
function runCode(code) {
  if (typeof document !== 'undefined' && document.createElement && document.body) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.text = code;
    document.body.appendChild(s);
  } else {
    (0, eval)(code);
  }
}

// Что основная часть получает от загрузчика (аргументом LSYNC_BOOT_ARG).
function bootFor(main) {
  return {
    base_url: serverBase(), self_src: LOADER_SRC, loader_version: LOADER.version,
    tg: tgConfigured() ? { backup: tgBackup } : null,
    back_to_server: loaderBackToServer
  };
}

// Запуск основной части. Проверка подписи — здесь, при каждом запуске (в том числе из кэша).
function runMain(main) {
  var version = verifyMain(main);
  if (!version) {
    rawRemove(KEY_MAIN);
    noty(T('Сохранённая копия lampa-sync изменена или устарела — загружаю заново'));
    return false;
  }
  var problem = manifestProblem(main, version);
  if (problem) {
    rawRemove(KEY_MAIN);
    noty(T('Основная часть lampa-sync ') + problem + T(' — удалена, загружаю заново'));
    return false;
  }
  var need = loaderTooOld();
  if (need) {
    // загрузчик из кэша Lampa (адрес был недоступен) старше нужного: запускаем как есть, без сообщений —
    // свежий загрузчик Lampa подтянет сама при следующем запуске с сетью
    log(T('загрузчик v') + LOADER.version + T(' старше нужного v') + need + T(' — запускаю, обновится сам'));
  }
  if (!rawGet(KEY_MAIN_MAX) || compareVersions(version, rawGet(KEY_MAIN_MAX)) > 0) rawSet(KEY_MAIN_MAX, version);
  LOADER.mainVersion = version;
  try {
    var start;
    try {
      start = new Function('LSYNC_BOOT_ARG', main.code);
    } catch (e) {
      start = null;  // eval запрещён политикой страницы — запасной путь через window (без бэкапа в Telegram)
    }
    if (start) {
      start(bootFor(main));
    } else {
      var boot = bootFor(main);
      boot.tg = null;
      window.__lsync_boot = boot;
      runCode(main.code);
    }
    log(T('основная часть v') + version + T(' запущена'));
  } catch (e) {
    log(T('основная часть упала при запуске'), e && e.message);
  }
  return true;
}

/* --- 35_server_check.js --- */
// Совместимость с сервером — до входа (кнопка, приглашение, «Присоединиться через TG») и при каждом запуске:
//   подписанный манифест сервера проверяется ключом автора этого загрузчика. Не сходится — сервер собран другим
//   ключом (чужая сборка): входить нельзя, просим добавить плагин по адресу с этого сервера (…/l.js);
//   сервер старее, чем нужно загрузчику (LOADER_CONFIG.min_server), — только сообщаем «обновите сервер»
//   (не во время фильма), работаем дальше; сами сервер не обновляем.
//   https-страница Lampa не достучится до сервера по http — подсказываем, что нужен https-адрес (Tailscale).

var serverOutdatedShown = false;

function serverLoaderUrl() { return serverBase() + '/l.js'; }

// https-зеркало Lampa в браузере и сервер по http: браузер запросы не пустит (смешанное содержимое).
function mixedContentBlocked() {
  try { return location.protocol === 'https:' && /^http:\/\//i.test(serverBase()); } catch (e) { return false; }
}

// Не мешаем просмотру: идёт фильм — после закрытия плеера.
function whenNotWatching(fn) {
  try {
    if (Lampa.Player && Lampa.Player.opened && Lampa.Player.opened()) {
      var done = false;
      Lampa.Player.listener.follow('destroy', function () {
        if (done) return;
        done = true;
        setTimeout(fn, 1500);
      });
      return;
    }
  } catch (e) {}
  fn();
}

// noManifest — сервер не отдаёт манифест вовсе (старше v0.24): версии нет, сообщаем без неё.
function reportServerOutdated(version, noManifest) {
  var need = LOADER_CONFIG.min_server || '';
  if (!need || serverOutdatedShown) return;
  if (!noManifest && (!version || compareVersions(version, need) >= 0)) return;
  serverOutdatedShown = true;
  whenNotWatching(function () {
    noty(noManifest ? T('Сервер lampa-sync устарел — обновите его: веб-админка → Обновление')
      : T('Сервер lampa-sync устарел (v') + version + T(') — обновите его: веб-админка → Обновление'));
  });
}

// onOk() — можно входить; иначе сообщение и вход не начинается.
function checkServer(onOk) {
  if (mixedContentBlocked()) {
    return noty(T('Браузер не пускает https-страницу к серверу по http — нужен https-адрес сервера (Tailscale)'));
  }
  request('GET', '/api/v1/manifest', null, function (m) {
    var d = verifyManifest(m);
    if (!d) {
      log(T('манифест сервера не сходится с ключом автора этого плагина'));
      return noty(T('Сервер собран другим ключом — подключиться нельзя. Добавьте плагин по адресу с вашего сервера: ') +
        serverLoaderUrl());
    }
    var have = cachedManifest();
    if (!have || d.issued >= have.issued) rawSet(KEY_MANIFEST, JSON.stringify({ text: m.text, sig: m.sig }));
    reportServerOutdated(d.version);
    onOk();
  }, function (reason, status) {
    if (status === 404) reportServerOutdated('', true);  // манифеста нет — сервер старше v0.24
    onOk();  // нет связи — вход сам покажет, что сервер недоступен
  }, 30000);
}

/* --- 40_ui.js --- */
// Загрузчик: раздел «Настройки → Синхронизация», пока устройство не вошло в lampa_sync.
// Загрузчик — не основной плагин, поэтому по умолчанию раздел штатный (CUB) + «Перейти к lampa_sync»;
// в виде lampa_sync — наши пункты (CUB скрыт), внизу «Перейти к CUB».
// Режим работы — переключатель; под ним серым — что даёт выбранный режим.

var LOADER_COMPONENT = 'account';
var SPURIOUS_BACK_MS_LOADER = 1000;

var MODES = {
  server: {
    title: T('Свой сервер'),
    text: T('Избранное, таймкоды, настройки и плагины — общие для всех устройств через ваш домашний сервер; ') +
      T('в локальной сети и через интернет. Устройства подтверждаются в веб-админке сервера или в Telegram-боте')
  },
  backup: {
    title: T('Только backup'),
    text: T('Резервная копия настроек этого устройства в вашем Telegram, без сервера. ') +
      T('Вход в Telegram — только на время копирования/восстановления')
  }
};

var loaderItems = {};
LOADER.view = 'cub';  // 'cub' | 'sync' — вид раздела «Синхронизация» (до перезапуска Lampa)

function refreshLoaderUi() {
  var m = mode();
  var sync = LOADER.view === 'sync';
  function show(name, visible) { if (loaderItems[name]) loaderItems[name].toggleClass('hide', !(visible && sync)); }
  if (loaderItems.goto_sync) loaderItems.goto_sync.toggleClass('hide', sync);
  show('title', true);
  show('mode', true);
  show('goto_cub', true);
  if (loaderItems.mode) {
    loaderItems.mode.find('.settings-param__name').text(T('Режим работы: ') + MODES[m].title);
    loaderItems.mode.find('.settings-param__descr').text(MODES[m].text);
  }
  if (loaderItems.server) loaderItems.server.find('.settings-param__name').text(T('Адрес сервера: ') + (serverBase() || T('не задан')));
  show('join_tg', m === 'server' && tgConfigured());
  show('server', m === 'server');
  show('login', m === 'server');
  show('guide', m === 'server');
  show('backup_make', m === 'backup');
  show('backup_load', m === 'backup');
  if (loaderItems.goto_sync) loaderNavSync(loaderItems.goto_sync.parent());
}

// Пульт и клавиатура: Lampa берёт в навигацию раздела все .selector, в том числе спрятанные, а первый фокус пропускает
// только 'hide' — не наш 'lsync-hidden'. Спрятанным снимаем .selector, видимым возвращаем, список — заново.
function loaderNavSync(container) {
  try {
    if (!container || !container.length) return;
    container.children().each(function () {
      var el = $(this);
      var hidden = el.hasClass('hide') || el.hasClass('lsync-hidden');
      if (hidden && el.hasClass('selector')) el.removeClass('selector').addClass('lsync-unsel');
      else if (!hidden && el.hasClass('lsync-unsel')) el.removeClass('lsync-unsel').addClass('selector');
    });
    var en = Lampa.Controller.enabled();
    if (en && en.name === 'settings_component') {
      Lampa.Controller.collectionSet(container);
      if (!container.find('.selector.focus').length) Lampa.Controller.collectionFocus(false, container);
    }
  } catch (e) {}
}

function addLoaderParam(name, title, description, onChange, type) {
  Lampa.SettingsApi.addParam({
    component: LOADER_COMPONENT,
    param: { name: 'lsync_' + name, type: type || 'button' },
    field: { name: title, description: description },
    onRender: function (item) {
      item.addClass('lsync-lparam');
      if (name === 'title') {
        // номер версии — серым
        var span = item.find('span').first();
        if (span.length) span.append($('<span></span>').text(' v' + LOADER.version).css({ 'opacity': '0.5' }));
      }
      loaderItems[name] = item;
      refreshLoaderUi();
    },
    onChange: onChange
  });
}

function withController(fn) {
  var prev = 'settings_component';
  try { prev = Lampa.Controller.enabled().name; } catch (e) {}
  fn(function () { try { Lampa.Controller.toggle(prev); } catch (e) {} });
}

function chooseMode() {
  var items = [];
  for (var key in MODES) items.push({ title: MODES[key].title, subtitle: MODES[key].text, mode: key, selected: key === mode() });
  withController(function (back) {
    Lampa.Select.show({
      title: T('Режим работы'),
      items: items,
      onSelect: function (item) {
        back();
        rawSet(KEY_MODE, item.mode);
        if (item.mode === 'backup') prefetchGramJS();
        refreshLoaderUi();
      },
      onBack: back
    });
  });
}

function editServer() {
  withController(function (back) {
    Lampa.Input.edit({ title: T('Адрес сервера lampa-sync'), value: serverBase(), free: true, nosave: true }, function (text) {
      back();
      var base = normalizeBase(text);
      if (!base) return;
      setServerBase(base);
      refreshLoaderUi();
      request('GET', '/health', null, function (res) {
        noty(T('Сервер найден: lampa-sync v') + res.version);
      }, function (reason) {
        noty(T('Сервер не отвечает (') + reason + T('). Проверьте адрес'));
      });
    });
  });
}

function login() {
  if (cubLoggedIn()) return noty(T('Чтобы войти в lampa_sync, выйдите из CUB'));
  if (!serverBase()) return noty(T('Сначала укажите адрес сервера'));
  checkServer(function () { LOADER.startPairing(onLoaderPaired); });
}

// Ссылка-приглашение: вход сам, без «Войти» и без подтверждения (приглашение и есть разрешение владельца).
// Приглашение использовано/истекло — сервер не одобрил: запрос отменяем, говорим попросить новое.
var INVITE_START_DELAY_MS = 3000;  // после стартовой навигации Lampa, иначе она закроет окно «Перезапустить?»

function inviteAutoLogin() {
  if (getToken() || !LOADER.invite || !serverBase() || mode() !== 'server') return;
  if (cubLoggedIn()) return noty(T('Приглашение lampa_sync: чтобы войти, выйдите из CUB'));
  checkServer(inviteStart);
}

function inviteStart() {
  var info = detectDevice();
  request('POST', '/api/v1/pair/start', { name: info.name, platform: info.platform, origin: info.origin,
    invite: LOADER.invite }, function (data) {
    if (!data.invited) {
      request('POST', '/api/v1/pair/cancel', { code: data.code, secret: data.secret });
      rawRemove(KEY_INVITE);
      LOADER.invite = '';
      return noty(T('Приглашение lampa_sync недействительно (уже использовано или истекло) — попросите новое'));
    }
    request('GET', '/api/v1/pair/status?code=' + encodeURIComponent(data.code) + '&secret=' +
      encodeURIComponent(data.secret), null, function (st) {
      if (st.status !== 'approved' || !st.token) return noty(T('Вход по приглашению не удался (') + st.status + ')');
      setToken(st.token, { id: st.device_id, name: info.name });
      noty(T('Вход по приглашению выполнен'));
      onLoaderPaired();
    }, function (reason) { log(T('приглашение: статус не получен'), reason); });
  }, function (reason) {
    log(T('приглашение: сервер недоступен'), reason);  // попробуем при следующем запуске Lampa
  });
}

// Адрес без параметров ссылки (keys) — остальное как было.
function stripParams(url, keys) {
  var hash = String(url || '').split('#');
  var q = hash[0].split('?');
  if (q.length < 2) return String(url || '');
  var kept = [];
  var parts = q[1].split('&');
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] && keys.indexOf(parts[i].split('=')[0]) < 0) kept.push(parts[i]);
  }
  return q[0] + (kept.length ? '?' + kept.join('&') : '') + (hash.length > 1 ? '#' + hash.slice(1).join('#') : '');
}

// После входа ссылка-приглашение больше не нужна: в списке плагинов Lampa заменяем …/l.js?s=…&g=… на …/l.js
// (адрес сервера уже запомнен, код использован). Со следующего запуска Lampa грузит загрузчик по чистому адресу.
// target — новый адрес записи; пусто — тот же адрес без параметров приглашения.
function setLoaderUrl(target) {
  var link = ['s', 'g'];
  var all = ['s', 'g', 'logged', 'reset'];  // logged/reset Lampa дописывает к адресу при загрузке
  var me = stripParams(LOADER_SRC, all);
  if (!LOADER_SRC) return false;  // запуск из кэша Lampa — своего адреса не знаем
  try {
    var list = (Lampa.Plugins && Lampa.Plugins.get) ? Lampa.Plugins.get() : (Lampa.Storage.get('plugins', '[]') || []);
    var changed = false;
    for (var i = 0; i < list.length; i++) {
      var url = typeof list[i] === 'string' ? list[i] : list[i] && list[i].url;
      if (!url || stripParams(url, all) !== me) continue;
      var next = target || stripParams(url, link);
      if (next === url) continue;
      if (typeof list[i] === 'string') list[i] = next;
      else list[i].url = next;
      changed = true;
    }
    if (!changed) return false;
    if (Lampa.Plugins && Lampa.Plugins.save) Lampa.Plugins.save();
    else Lampa.Storage.set('plugins', list);
    log(T('адрес загрузчика в списке плагинов: ') + (target || T('без параметров приглашения')));
    return true;
  } catch (e) {
    log(T('не удалось очистить адрес загрузчика'), e && e.message);
    return false;
  }
}

// Тревога сервера (loader_alert: загрузчик на GitHub не совпал с подписанным образцом) — запись плагина с GitHub
// возвращаем на адрес вашего сервера. Вызывает основная часть (функция приходит ей в LSYNC_BOOT_ARG). true — вернули.
function loaderBackToServer() {
  var home = LOADER_CONFIG.home_url || '';
  if (!home || !serverBase()) return false;
  var all = ['s', 'g', 'logged', 'reset'];
  try {
    var list = (Lampa.Plugins && Lampa.Plugins.get) ? Lampa.Plugins.get() : (Lampa.Storage.get('plugins', '[]') || []);
    var changed = false;
    for (var i = 0; i < list.length; i++) {
      var url = typeof list[i] === 'string' ? list[i] : list[i] && list[i].url;
      if (!url || stripParams(url, all) !== home) continue;
      if (typeof list[i] === 'string') list[i] = serverLoaderUrl();
      else list[i].url = serverLoaderUrl();
      changed = true;
    }
    if (!changed) return false;
    if (Lampa.Plugins && Lampa.Plugins.save) Lampa.Plugins.save();
    else Lampa.Storage.set('plugins', list);
    log(T('адрес загрузчика в списке плагинов: ') + serverLoaderUrl());
    return true;
  } catch (e) {
    log(T('не удалось очистить адрес загрузчика'), e && e.message);
    return false;
  }
}

// Постоянный адрес загрузчика — GitHub Pages (LOADER_CONFIG.home_url): запись в списке плагинов Lampa переводим на
// него, только если загрузчик там байт в байт тот, что в ПОДПИСАННОМ манифесте вашего сервера (loader_sha512):
// подменённый или несовместимый с сервером (GitHub новее/старее) — не берём, остаёмся на адресе сервера, только
// убираем параметры приглашения. После входа и при каждом запуске (сервер обновился — запись переедет сама).
function relinkLoader() {
  var home = LOADER_CONFIG.home_url || '';
  var mf = cachedManifest();
  if (!home || stripParams(LOADER_SRC, ['s', 'g', 'logged', 'reset']) === home) return setLoaderUrl('');
  if (!mf || !mf.loader_sha512) return setLoaderUrl('');  // сервер не знает подписанный загрузчик (старше v0.36)
  var xhr;
  try {
    xhr = new XMLHttpRequest();
    xhr.open('GET', home, true);
    xhr.timeout = 15000;
  } catch (e) { return setLoaderUrl(''); }
  var done = false;
  function finish(ok) {
    if (done) return;
    done = true;
    setLoaderUrl(ok ? home : '');
  }
  xhr.onload = function () {
    var text = String(xhr.responseText || '');
    var same = xhr.status >= 200 && xhr.status < 300 && text.indexOf(LOADER_MARK) >= 0 && sha512Hex(text) === mf.loader_sha512;
    if (!same) log(T('загрузчик на GitHub не совпадает с подписанным для этого сервера — остаюсь на адресе сервера'));
    finish(same);
  };
  xhr.onerror = function () { finish(false); };
  xhr.ontimeout = function () { finish(false); };
  try { xhr.send(null); } catch (e) { finish(false); }
  return true;
}

// Вошли: получаем основную часть и сразу перезапускаем Lampa — она стартует уже с синхронизацией
// (идёт фильм — после закрытия плеера). Пауза перед перезапуском — успеть переписать запись плагина (relinkLoader).
var RELOAD_AFTER_LOGIN_MS = 2500;

function onLoaderPaired() {
  rawRemove(KEY_INVITE);
  LOADER.invite = '';
  relinkLoader();
  try { Lampa.Storage.set(KEY_FRESH, '1'); } catch (e) {}
  noty(T('Загружаю lampa-sync…'));
  fetchMain(function (ok) {
    if (!ok) return noty(T('Не удалось загрузить lampa-sync, попробуйте позже'));
    whenNotWatching(function () {
      noty(T('Вход в lampa_sync выполнен — перезапускаю Lampa…'));
      setTimeout(function () { try { window.location.reload(); } catch (e) {} }, RELOAD_AFTER_LOGIN_MS);
    });
  });
}

function openGuide() {
  var url = LOADER_CONFIG.install_url || 'https://github.com/timsvensonliveru-debug/lsync#install';
  var home = LOADER_CONFIG.home_url || '';
  // оба адреса плагина: постоянный (GitHub) и запасной — с вашего сервера (если GitHub недоступен)
  var addrs = (home ? T('<br><br><b>Адрес плагина:</b> ') + escapeHtml(home) : '') +
    (serverBase() ? T('<br><b>Запасной — с вашего сервера:</b> ') + escapeHtml(serverLoaderUrl()) : '');
  setTimeout(function () {  // QR на страницу установки — открыть с телефона
    showQr(url, $('.lsync-guide-qr'));
  }, 50);
  var prev = 'settings_component';
  try { prev = Lampa.Controller.enabled().name; } catch (e) {}
  var openedAt = Date.now();
  function close() {
    try { Lampa.Modal.close(); } catch (e) {}
    try { Lampa.Controller.toggle(prev); } catch (e) {}
  }
  Lampa.Modal.open({
    title: T('Свой сервер lampa-sync'),
    html: $('<div style="padding:0.5em 1em 1em;line-height:1.5">' +
      T('Сервер ставится один раз на домашний компьютер, NAS или мини-сервер (Windows, macOS, Linux, QNAP, Umbrel, ') +
      T('Docker) и хранит избранное, таймкоды, настройки и плагины всей семьи. Работает в локальной сети и через ') +
      T('интернет — адрес постоянный, порты открывать не нужно.<br><br>') +
      T('<b>Установка:</b> откройте на компьютере или телефоне <b>') + escapeHtml(url) + T('</b> (QR ниже) — ') +
      T('там кнопки скачивания для каждой системы. В конце сервер покажет свой адрес — укажите его здесь ') +
      T('(«Адрес сервера») и нажмите «Войти в lampa_sync».') + addrs +
      '</div><div class="lsync-guide-qr" style="text-align:center"></div>'),
    size: 'medium',
    buttons: [{ name: T('Понятно'), onSelect: close }],
    onBack: function () {
      if (Date.now() - openedAt < SPURIOUS_BACK_MS_LOADER) {
        try { Lampa.Modal.toggle(); } catch (e) {}
        return;
      }
      close();
    }
  });
}

// Переключить вид раздела и перерисовать его. Штатные пункты (CUB) прячем своим классом: 'hide' у них
// переключает сама Lampa.
function switchView(view) {
  LOADER.view = view;
  try { Lampa.Settings.create(LOADER_COMPONENT); } catch (e) { log(T('не удалось перерисовать раздел'), e && e.message); }
}

function onLoaderSectionOpen(body) {
  var ours = body.find('.lsync-lparam');
  if (!ours.length) return;
  ours.first().parent().children().not('.lsync-lparam').toggleClass('lsync-hidden', LOADER.view === 'sync');
  refreshLoaderUi();
  loaderNavSync(ours.first().parent());
}



// «Синхронизация» в списке настроек и в заголовке раздела: «Синхронизация lampa_sync» (серым) — видно, кто работает:
// загрузчик (lampa_sync) или основная часть (lampa_sync+).
function labelSyncSection(suffix) {
  function apply(el) {
    el.each(function () {
      var node = $(this);
      if (node.find('.lsync-sync-suffix').length) return;
      if (String(node.text()).indexOf(lampaSyncLabel()) !== 0) return;
      node.append($('<span class="lsync-sync-suffix"></span>').text(' ' + suffix).css({ 'opacity': '0.5' }));
    });
  }
  try { apply($('.settings-folder[data-component="account"] .settings-folder__name')); } catch (e) {}
  try { apply($('.settings__title')); } catch (e) {}
}

function registerLoaderUi() {
  try { $('head').append('<style>.lsync-hidden{display:none !important}</style>'); } catch (e) {}
  addLoaderParam('goto_sync', T('Перейти к lampa_sync'), '', function () { switchView('sync'); });
  addLoaderParam('title', 'lsync', '', null, 'title');
  addLoaderParam('mode', T('Режим работы: ') + MODES[mode()].title, MODES[mode()].text, chooseMode);
  addLoaderParam('guide', T('Инструкция по настройке'), '', openGuide);
  addLoaderParam('join_tg', T('Присоединиться через TG'), '', function () {
    if (cubLoggedIn()) return noty(T('Чтобы войти в lampa_sync, выйдите из CUB'));
    tgBackup('join');
  });
  addLoaderParam('server', T('Адрес сервера: ') + (serverBase() || T('не задан')), '', editServer);
  addLoaderParam('login', T('Войти в lampa_sync'), '', login);
  addLoaderParam('backup_make', T('Сделать резервную копию'), '', function () { tgBackup('make'); });
  addLoaderParam('backup_load', T('Загрузить резервную копию'), '', function () { tgBackup('load'); });
  addLoaderParam('goto_cub', T('Перейти к CUB'), '', function () { switchView('cub'); });
  try {
    Lampa.Settings.listener.follow('open', function (e) {
      if (e.name === 'main' || e.name === LOADER_COMPONENT) setTimeout(function () { labelSyncSection('lampa_sync'); }, 0);
      if (e.name === LOADER_COMPONENT && e.body) onLoaderSectionOpen(e.body);
    });
  } catch (e) {}
}

/* --- 50_backup.js --- */
// Режим «Только backup»: резервная копия настроек устройства в Telegram пользователя, без сервера.
// Вход в аккаунт — на этом устройстве, только на время операции: сеанс GramJS в памяти (MemorySession, на диск
// не пишется), в конце auth.LogOut, через 15 минут — выход в любом случае.
// Группа lampa_sync (форум) с темой backup: найти или создать. Копия — JSON-файл всего хранилища Lampa, кроме
// раздела «Плеер», служебных ключей lampa-sync/lsync и паролей/токенов.
// Библиотека GramJS (~850 КБ) грузится только для этого режима, сверяется по SHA-512 и кэшируется в IndexedDB —
// работает и без GitHub, пока доступен сам Telegram.
//
// Защита от подмены (все плагины Lampa — на одной странице, в общем JavaScript):
//   GramJS исполняется в ЗАКРЫТОЙ области (new Function с собственным module) — в window.telegram ничего нет,
//   чужой плагин не достанет клиент и ключ сеанса через глобальные объекты; уже лежащему в window.telegram
//   (его мог подложить чужой плагин) не доверяем никогда; хеш сверяется при каждой загрузке, и из кэша тоже;
//   функцию бэкапа основная часть получает аргументом при запуске, не через window — свой QR не подсунуть;
//   после операции — проверка устройств аккаунта: появился ли за время входа чужой сеанс (ключ успели
//   использовать) — тогда предупреждение. Полностью защититься от плагина, который уже работает на странице
//   и подменил встроенные функции браузера, нельзя: не ставьте плагины, которым не доверяете.

var BACKUP_GROUP = 'lampa_sync';
var BACKUP_TOPIC = 'backup';
var BACKUP_PREFIX = 'lsync_backup_';
var TG_AUTOLOGOUT_MS = 15 * 60 * 1000;
var GRAMJS_CACHE_KEY = 'gramjs';
var UPLOAD_CHUNK = 512 * 1024;
var BACKUP_LIST_LIMIT = 50;

function tgConfig() { return LOADER_CONFIG.tg || {}; }
function tgConfigured() { return !!(tgConfig().api_id && tgConfig().api_hash); }

// ─── IndexedDB: кэш библиотеки GramJS ──────────────────────────────────────

function idbOpen(fn) {
  var req;
  try { req = window.indexedDB && window.indexedDB.open('lsync', 1); } catch (e) { req = null; }
  if (!req) return fn(null);
  req.onupgradeneeded = function () { try { req.result.createObjectStore('files'); } catch (e) {} };
  req.onsuccess = function () { fn(req.result); };
  req.onerror = function () { fn(null); };
}

function idbGet(key, cb) {
  idbOpen(function (db) {
    if (!db) return cb(null);
    try {
      var r = db.transaction('files', 'readonly').objectStore('files').get(key);
      r.onsuccess = function () { cb(r.result || null); };
      r.onerror = function () { cb(null); };
    } catch (e) { cb(null); }
  });
}

function idbPut(key, value) {
  idbOpen(function (db) {
    if (!db) return;
    try { db.transaction('files', 'readwrite').objectStore('files').put(value, key); } catch (e) {}
  });
}

// ─── GramJS ────────────────────────────────────────────────────────────────

function hexOf(bytes) {
  var out = '';
  for (var i = 0; i < bytes.length; i++) out += (bytes[i] < 16 ? '0' : '') + bytes[i].toString(16);
  return out;
}

function sha512Hex(text) { return hexOf(nacl.hash(utf8Bytes(text))); }

var gramjsLib = null;  // GramJS этого загрузчика — только здесь, не в window

// Исполнить сборку GramJS в закрытой области: UMD-обёртка видит свой module и кладёт библиотеку в него.
function startGramJS(code) {
  try {
    var mod = { exports: {} };
    new Function('module', 'exports', code)(mod, mod.exports);
    var lib = mod.exports;
    if (lib && lib.TelegramClient && lib.MemorySession && lib.Api && lib.Buffer) gramjsLib = lib;
  } catch (e) {
    log(T('GramJS не запустился'), e && e.message);
  }
  return gramjsLib;
}

function fetchText(url, cb) {
  var xhr = new XMLHttpRequest();
  var done = false;
  function finish(text) { if (!done) { done = true; cb(text); } }
  try {
    xhr.open('GET', url, true);
    xhr.timeout = 120000;
    xhr.onload = function () { finish(xhr.status >= 200 && xhr.status < 300 ? xhr.responseText : null); };
    xhr.onerror = function () { finish(null); };
    xhr.ontimeout = function () { finish(null); };
    xhr.send(null);
  } catch (e) { finish(null); }
}

// cb(tg | null, причина)
function loadGramJS(cb) {
  if (gramjsLib) return cb(gramjsLib, '');
  var want = tgConfig().gramjs_sha512;
  function started(code) {
    return startGramJS(code) ? cb(gramjsLib, '') : cb(null, T('Библиотека Telegram не запустилась на этом устройстве'));
  }
  idbGet(GRAMJS_CACHE_KEY, function (cached) {
    if (cached && sha512Hex(cached) === want) return started(cached);  // кэш — тоже по хешу
    fetchText(tgConfig().gramjs_url, function (text) {
      if (!text) return cb(null, T('Не удалось скачать библиотеку Telegram'));
      if (sha512Hex(text) !== want) return cb(null, T('Библиотека Telegram не прошла проверку'));
      idbPut(GRAMJS_CACHE_KEY, text);
      started(text);
    });
  });
}

// Выбрали режим «Только backup» — заранее скачать библиотеку (в фоне, один раз).
function prefetchGramJS() {
  if (!tgConfigured() || gramjsLib) return;
  idbGet(GRAMJS_CACHE_KEY, function (cached) {
    if (cached) return;
    fetchText(tgConfig().gramjs_url, function (text) {
      if (text && sha512Hex(text) === tgConfig().gramjs_sha512) idbPut(GRAMJS_CACHE_KEY, text);
    });
  });
}

function errText(err) {
  return String((err && (err.errorMessage || err.message)) || err || T('неизвестная ошибка'));
}

// ─── Что попадает в копию ──────────────────────────────────────────────────

// Ключи раздела «Плеер» (из шаблона меню Lampa) — не сохраняются и не восстанавливаются.
function playerKeys() {
  var keys = {};
  try {
    var html = (Lampa.Template.all() || {}).settings_player || '';
    var re = /data-name="([^"]+)"/g;
    var m;
    while ((m = re.exec(html))) keys[m[1]] = true;
  } catch (e) {}
  return keys;
}

function backupExcluded(key, player) {
  return !key || /^(lampa_sync_|lsync_)/.test(key) || /(password|token|secret)/i.test(key) ||
    /^(player|subtitles_)/.test(key) || !!player[key];
}

function collectBackup() {
  var player = playerKeys();
  var keys = {};
  var n = 0;
  for (var i = 0; i < window.localStorage.length; i++) {
    var k = window.localStorage.key(i);
    if (backupExcluded(k, player)) continue;
    keys[k] = window.localStorage.getItem(k);
    n++;
  }
  return { format: 'lsync-backup', version: 1, device: detectDevice().name, origin: location.origin,
    created: Date.now(), count: n, keys: keys };
}

function applyBackup(data) {
  var player = playerKeys();
  var n = 0;
  for (var k in data.keys) {
    if (!Object.prototype.hasOwnProperty.call(data.keys, k) || backupExcluded(k, player)) continue;
    if (typeof data.keys[k] !== 'string') continue;
    rawSet(k, data.keys[k]);
    n++;
  }
  return n;
}

function two(n) { return (n < 10 ? '0' : '') + n; }

function stamp(ms) {
  var d = new Date(ms);
  return d.getFullYear() + two(d.getMonth() + 1) + two(d.getDate()) + '-' + two(d.getHours()) + two(d.getMinutes());
}

function humanDate(sec) {
  var d = new Date(sec * 1000);
  return two(d.getDate()) + '.' + two(d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + two(d.getHours()) + ':' + two(d.getMinutes());
}

function utf8Decode(bytes) {
  try { if (typeof TextDecoder !== 'undefined') return new TextDecoder('utf-8').decode(bytes); } catch (e) {}
  var bin = '';
  for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return decodeURIComponent(escape(bin));
}

// ─── Окно операции ─────────────────────────────────────────────────────────

function openTgWindow(action) {
  var prev = 'settings_component';
  try { prev = Lampa.Controller.enabled().name; } catch (e) {}
  var steps = action === 'make' ?
    T('выгрузим настройки этого устройства (кроме плеера) файлом в тему backup') :
    T('покажем сохранённые копии — выберете, какую загрузить (по умолчанию последнюю)');
  var plan = action === 'join' ?
    T('вход в Telegram по QR → найдём в ваших группах закреплённый адрес сервера семьи → выход из аккаунта → ') +
    T('запрос входа уйдёт администраторам группы') :
    T('вход в Telegram по QR → группа ') + BACKUP_GROUP + T(' (тема ') + BACKUP_TOPIC + T(') — найдём или создадим → ') + steps +
    T(' → выход из аккаунта');
  var html = $('<div style="padding:0.5em 1em 1em;line-height:1.45">' +
    T('<div style="color:#f5a623;margin-bottom:0.6em">⚠ На время операции это устройство получает полный доступ к вашему ') +
    T('аккаунту Telegram. Другие плагины Lampa (в том числе «плохие») теоретически могут им воспользоваться. ') +
    T('<b>Использование только на свой страх и риск!</b></div>') +
    T('<div style="opacity:0.75;margin-bottom:0.6em">Что произойдёт: ') + plan + '.</div>' +
    '<div class="lsync-tg-qr" style="text-align:center;min-height:2em"></div>' +
    '<div class="lsync-tg-status" style="margin-top:0.6em;opacity:0.6">…</div></div>');
  var openedAt = Date.now();
  var ui = { onCancel: null, closed: false };
  function open() {
    openedAt = Date.now();
    Lampa.Modal.open({
      title: action === 'join' ? T('Присоединиться через Telegram') :
        action === 'make' ? T('Резервная копия в Telegram') : T('Восстановление из Telegram'),
      html: html,
      size: 'medium',
      onBack: function () {
        if (Date.now() - openedAt < SPURIOUS_BACK_MS_LOADER) {
          try { Lampa.Modal.toggle(); } catch (e) {}
          return;
        }
        ui.close();
        if (ui.onCancel) ui.onCancel();
      }
    });
  }
  ui.status = function (text) { html.find('.lsync-tg-status').text(text); log('backup:', text); };
  ui.qr = function (url) {
    var el = html.find('.lsync-tg-qr');
    el.empty();
    if (!url) return;
    showQr(url, el);
  };
  // Итог списком: «- …» строка на пункт.
  ui.lines = function (lines) {
    var el = html.find('.lsync-tg-status');
    el.empty();
    for (var i = 0; i < lines.length; i++) {
      var t = String(lines[i]);
      if (!/[.…!?]$/.test(t)) t += '.';
      el.append($('<div></div>').text('- ' + t));
    }
    log('backup:', lines.join(' | '));
  };
  ui.hide = function () { try { Lampa.Modal.close(); } catch (e) {} };
  ui.show = function () { if (!ui.closed) open(); };
  ui.close = function () {
    ui.closed = true;
    try { Lampa.Modal.close(); } catch (e) {}
    try { Lampa.Controller.toggle(prev); } catch (e) {}
  };
  open();
  return ui;
}

// QR (Lampa.Utils.qrcode) — уменьшенный, чтобы окно помещалось на экран ТВ.
var QR_SIZE = '9em';

function showQr(url, el) {
  try { Lampa.Utils.qrcode(url, el, function () {}); } catch (e) { el.text(url); return; }
  function fit() { try { el.find('svg, img, canvas').css({ width: QR_SIZE, height: QR_SIZE }); } catch (e) {} }
  fit();
  setTimeout(fit, 100);  // Lampa может дорисовать QR асинхронно
}

function askPassword(hint, ui) {
  return new Promise(function (resolve, reject) {
    ui.hide();
    Lampa.Input.edit({ title: hint ? T('Облачный пароль (подсказка: ') + hint + ')' : T('Облачный пароль Telegram'),
      value: '', free: true, nosave: true }, function (val) {
      setTimeout(function () {
        ui.show();
        if (val && String(val).trim()) {
          ui.status(T('Проверяю пароль…'));
          resolve(String(val).trim());
        } else {
          reject(new Error(T('Вход отменён')));
        }
      }, 300);
    });
  });
}

function pickBackupFile(list, ui) {
  return new Promise(function (resolve) {
    list.sort(function (a, b) { return b.date - a.date; });
    var items = [];
    for (var i = 0; i < list.length; i++) {
      items.push({ title: list[i].device || list[i].name, subtitle: humanDate(list[i].date) + (i === 0 ? T(' — последняя') : ''),
        file: list[i] });
    }
    ui.hide();
    Lampa.Select.show({
      title: T('Какую копию загрузить'),
      items: items,
      onSelect: function (item) { ui.show(); resolve(item.file); },
      onBack: function () { ui.show(); resolve(null); }
    });
  });
}

// ─── Telegram: группа, тема, файл ──────────────────────────────────────────

function topicIdFrom(result) {
  var updates = (result && result.updates) || [];
  for (var i = 0; i < updates.length; i++) if (updates[i].className === 'UpdateMessageID' && updates[i].id) return updates[i].id;
  for (i = 0; i < updates.length; i++) if (updates[i].id) return updates[i].id;
  return null;
}

// {chat, topic}: группа lampa_sync (форум) и тема backup — найти или создать.
function ensureBackupPlace(session) {
  var client = session.client;
  var A = session.tg.Api;
  return client.getDialogs({ limit: 200 }).then(function (dialogs) {
    for (var i = 0; i < dialogs.length; i++) {
      var d = dialogs[i];
      if (d.title === BACKUP_GROUP && d.entity && d.entity.megagroup) return d.entity;
    }
    session.ui.status(T('Создаю группу ') + BACKUP_GROUP + '…');
    return client.invoke(new A.channels.CreateChannel({ title: BACKUP_GROUP, about: T('lsync: резервные копии Lampa'),
      megagroup: true, forum: true })).then(function (r) {
      var chat = r && r.chats && r.chats[0];
      if (!chat) throw new Error(T('группа не создана'));
      return client.invoke(new A.channels.ToggleForum({ channel: chat, enabled: true }))['catch'](function () {})
        .then(function () { return chat; });
    });
  }).then(function (chat) {
    return client.invoke(new A.channels.GetForumTopics({ channel: chat, q: BACKUP_TOPIC, offsetDate: 0, offsetId: 0,
      offsetTopic: 0, limit: 20 })).then(function (r) {
      var topics = (r && r.topics) || [];
      for (var i = 0; i < topics.length; i++) if (topics[i].title === BACKUP_TOPIC) return topics[i].id;
      return null;
    }, function () { return null; }).then(function (topic) {
      if (topic) return { chat: chat, topic: topic };
      session.ui.status(T('Создаю тему ') + BACKUP_TOPIC + '…');
      return client.invoke(new A.channels.CreateForumTopic({ channel: chat, title: BACKUP_TOPIC })).then(function (r) {
        var id = topicIdFrom(r);
        if (!id) throw new Error(T('тема не создана'));
        return { chat: chat, topic: id };
      });
    });
  });
}

// Случайное 63-битное число для id файла/сообщения (BigInt — вызовами, без литералов: загрузчик остаётся ES5).
function randomLong() {
  var bytes = new Uint8Array(8);
  window.crypto.getRandomValues(bytes);
  bytes[7] = bytes[7] & 0x7f;
  var v = BigInt(0);
  for (var i = 0; i < 8; i++) v = v | (BigInt(bytes[i]) << BigInt(i * 8));
  return v;
}

// Загрузка файла частями и отправка в тему — как у GramLink (проверено на ТВ).
function uploadText(session, place, text, fileName, caption) {
  var client = session.client;
  var A = session.tg.Api;
  var buf = session.tg.Buffer.from(text, 'utf-8');
  var fileId = randomLong();
  var total = Math.max(1, Math.ceil(buf.length / UPLOAD_CHUNK));
  var chain = Promise.resolve();
  function part(n) {
    return function () {
      return client.invoke(new A.upload.SaveFilePart({ fileId: fileId, filePart: n,
        bytes: buf.slice(n * UPLOAD_CHUNK, Math.min((n + 1) * UPLOAD_CHUNK, buf.length)) }));
    };
  }
  for (var i = 0; i < total; i++) chain = chain.then(part(i));
  return chain.then(function () {
    return client.invoke(new A.messages.SendMedia({
      peer: place.chat,
      replyTo: new A.InputReplyToMessage({ replyToMsgId: place.topic }),
      media: new A.InputMediaUploadedDocument({
        file: new A.InputFile({ id: fileId, parts: total, name: fileName, md5Checksum: '' }),
        mimeType: 'application/json',
        attributes: [new A.DocumentAttributeFilename({ fileName: fileName })]
      }),
      message: caption,
      randomId: randomLong()
    }));
  });
}

function documentName(msg) {
  var doc = msg && msg.media && msg.media.document;
  var attrs = (doc && doc.attributes) || [];
  for (var i = 0; i < attrs.length; i++) if (attrs[i].fileName) return attrs[i].fileName;
  return '';
}

function makeBackup(session, place) {
  var data = collectBackup();
  var name = BACKUP_PREFIX + String(data.device).replace(/[^A-Za-z0-9А-Яа-яЁё]+/g, '-') + '_' + stamp(data.created) + '.json';
  session.ui.status(T('Выгружаю резервную копию (параметров: ') + data.count + ')…');
  return uploadText(session, place, JSON.stringify(data), name, 'lsync · ' + data.device + ' · ' + data.count)
    .then(function () { return T('Резервная копия сохранена: группа ') + BACKUP_GROUP + T(', тема ') + BACKUP_TOPIC; });
}

function loadBackup(session, place) {
  var client = session.client;
  session.ui.status(T('Ищу резервные копии…'));
  return client.getMessages(place.chat, { limit: BACKUP_LIST_LIMIT, replyTo: place.topic }).then(function (msgs) {
    var list = [];
    for (var i = 0; i < (msgs || []).length; i++) {
      var name = documentName(msgs[i]);
      if (name.indexOf(BACKUP_PREFIX) !== 0) continue;
      var device = String(msgs[i].message || '').split(' · ')[1] || '';
      list.push({ msg: msgs[i], name: name, date: msgs[i].date, device: device });
    }
    if (!list.length) return T('В теме ') + BACKUP_TOPIC + T(' нет резервных копий lsync');
    return pickBackupFile(list, session.ui).then(function (file) {
      if (!file) return T('Отменено');
      session.ui.status(T('Загружаю копию…'));
      return client.downloadMedia(file.msg.media).then(function (bytes) {
        var data = JSON.parse(utf8Decode(bytes));
        if (!data || data.format !== 'lsync-backup' || !data.keys) throw new Error(T('это не резервная копия lsync'));
        var n = applyBackup(data);
        try { if (session.options.onRestored) session.options.onRestored(); } catch (e) {}
        session.after = function () { askRestart(n); };
        return T('Восстановлено параметров: ') + n;
      });
    });
  });
}

function askRestart(n) {
  withController(function (back) {
    Lampa.Select.show({
      title: T('Настройки восстановлены (') + n + ')',
      items: [{ title: T('Перезапустить сейчас'), action: 'now' },
        { title: T('Позже'), subtitle: T('Применятся после перезапуска Lampa'), action: 'later' }],
      onSelect: function (item) {
        back();
        if (item.action === 'now') { try { window.location.reload(); } catch (e) {} }
      },
      onBack: back
    });
  });
}

// ─── «Присоединиться через TG»: адрес сервера из закрепа группы семьи ───────
// Бот сервера публикует в группе семьи (команда /setup) сообщение со строкой «lsync-server: https://…». Ищем её
// одним поиском по всем чатам; несколько серверов (своя группа тоже бывает) — выбор. Вход в аккаунт — только на
// время поиска; запрос входа на сервер уходит уже после выхода, с пометкой «через Telegram: имя (@ник)».

var SERVER_MARKER_RE = /^lsync-server:\s*(https:\/\/\S+)\s*$/m;

function findFamilyServers(session) {
  var A = session.tg.Api;
  return session.client.invoke(new A.messages.SearchGlobal({
    q: 'lsync-server:', filter: new A.InputMessagesFilterEmpty(), minDate: 0, maxDate: 0,
    offsetRate: 0, offsetPeer: new A.InputPeerEmpty(), offsetId: 0, limit: 30
  })).then(function (r) {
    var titles = {};
    var chats = (r && r.chats) || [];
    for (var i = 0; i < chats.length; i++) titles[String(chats[i].id)] = chats[i].title;
    var out = [];
    var seen = {};
    var msgs = (r && r.messages) || [];
    for (i = 0; i < msgs.length; i++) {
      var m = SERVER_MARKER_RE.exec(String(msgs[i].message || ''));
      if (!m) continue;
      var url = m[1].replace(/\/+$/, '');
      if (seen[url]) continue;
      seen[url] = true;
      var peer = msgs[i].peerId || {};
      var chatId = String(peer.channelId || peer.chatId || '');
      out.push({ url: url, title: titles[chatId] || T('группа'), date: msgs[i].date });
    }
    return out;
  });
}

function pickServer(list, ui) {
  if (list.length === 1) return Promise.resolve(list[0]);
  return new Promise(function (resolve) {
    var items = [];
    for (var i = 0; i < list.length; i++) items.push({ title: list[i].title, subtitle: list[i].url, server: list[i] });
    ui.hide();
    Lampa.Select.show({
      title: T('Какой сервер'),
      items: items,
      onSelect: function (item) { ui.show(); resolve(item.server); },
      onBack: function () { ui.show(); resolve(null); }
    });
  });
}

function tgName(me) {
  if (!me) return '';
  var name = [me.firstName, me.lastName].filter(function (x) { return !!x; }).join(' ');
  return (name + (me.username ? ' (@' + me.username + ')' : '')).trim();
}

function joinFamily(session) {
  return findFamilyServers(session).then(function (list) {
    if (!list.length) {
      return T('Адрес сервера не найден: попросите добавить вас в группу семьи (бот сервера закрепляет там адрес)');
    }
    return pickServer(list, session.ui).then(function (server) {
      if (!server) return T('Отменено');
      return session.client.getMe().then(function (me) { return me; }, function () { return null; }).then(function (me) {
        setServerBase(server.url);
        rawSet(KEY_MODE, 'server');
        LOADER.tgFrom = tgName(me);
        // после выхода из аккаунта — обычный вход на сервер (подтверждают администраторы группы)
        session.after = function () {
          refreshLoaderUi();
          checkServer(function () { LOADER.startPairing(onLoaderPaired); });
        };
        return T('Сервер найден: ') + server.url;
      });
    });
  });
}

// ─── Сеанс: вход → действие → выход ────────────────────────────────────────

// Устройства аккаунта, вошедшие во время нашего сеанса (кроме нас): ключ сеанса успели использовать, чтобы
// подтвердить чужой вход. Возвращает строки предупреждения (пусто — чисто).
function auditSessions(session) {
  if (!session.loggedIn || !session.startedAt) return Promise.resolve([]);
  return session.client.invoke(new session.tg.Api.account.GetAuthorizations()).then(function (r) {
    var out = [];
    var list = (r && r.authorizations) || [];
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      if (a.current || !(a.dateCreated >= session.startedAt - 60)) continue;
      out.push(T('ВНИМАНИЕ: за время входа появился другой сеанс — ') +
        [a.deviceModel, a.appName, a.ip, a.country].filter(function (x) { return !!x; }).join(', ') +
        T('. Проверьте Telegram → Настройки → Устройства и завершите его'));
    }
    return out;
  }, function () { return []; });
}

function finishSession(session, message) {
  if (session.done) return;
  session.done = true;
  clearTimeout(session.timer);
  session.ui.qr(null);
  session.ui.lines([message, T('Выход из аккаунта…')]);
  var client = session.client;
  var warnings = [];
  auditSessions(session).then(function (w) {
    warnings = w;
    // Выход — всегда (и при отмене посреди входа: телефон мог уже подтвердить QR). Не вошли — Telegram откажет.
    try { return client.invoke(new session.tg.Api.auth.LogOut()); } catch (e) { return null; }
  })['catch'](function () {}).then(function () {
    try { return client.disconnect(); } catch (e) { return null; }
  })['catch'](function () {}).then(function () {
    session.client = null;
    if (warnings.length) {
      session.after = null;  // предупреждение важнее перезапуска — окно остаётся открытым
      noty(T('За время входа в Telegram появился другой сеанс — проверьте «Устройства»'));
    }
    session.ui.lines([message].concat(warnings, [T('Устройство отключено от аккаунта Telegram')]));
    if (session.after && !session.ui.closed) {
      session.ui.close();
      session.after();
    }
  });
}

// options.onRestored() — вызывается после восстановления, до вопроса о перезапуске (основная часть сбрасывает
// метку синхронизации: на следующем старте спросит «Объединить / Заменить / Не объединять»).
function tgBackup(action, options) {
  if (!tgConfigured()) return noty(T('Резервное копирование через Telegram в этой сборке загрузчика не настроено'));
  if (typeof Promise === 'undefined' || typeof BigInt === 'undefined' || !window.crypto) {
    return noty(T('На этом устройстве резервное копирование через Telegram недоступно'));
  }
  var ui = openTgWindow(action);
  ui.status(T('Загружаю библиотеку Telegram…'));
  loadGramJS(function (tg, reason) {
    if (!tg) return ui.status(reason);
    var cfg = tgConfig();
    var client = new tg.TelegramClient(new tg.MemorySession(), cfg.api_id, cfg.api_hash, {
      connectionRetries: 3, useWSS: true, deviceModel: 'Lampa (lsync)', systemVersion: '1.0',
      appVersion: LOADER.version, langCode: 'ru', systemLangCode: 'ru'
    });
    try { client.setLogLevel('error'); } catch (e) {}
    var session = { client: client, tg: tg, ui: ui, done: false, loggedIn: false, options: options || {} };
    ui.onCancel = function () { finishSession(session, T('Отменено')); };
    session.timer = setTimeout(function () { finishSession(session, T('Прошло 15 минут')); }, TG_AUTOLOGOUT_MS);
    ui.status(T('Подключаюсь к Telegram…'));
    client.connect().then(function () {
      if (session.done) return null;
      ui.status(T('Отсканируйте QR в Telegram на телефоне: Настройки → Устройства → Подключить устройство'));
      return client.signInUserWithQrCode({ apiId: cfg.api_id, apiHash: cfg.api_hash }, {
        qrCode: function (q) {
          var b64 = q.token.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
          ui.qr('tg://login?token=' + b64);
        },
        password: function (hint) { return askPassword(hint, ui); },
        onError: function (err) {
          if (/PASSWORD/i.test(errText(err))) { noty(T('Неверный облачный пароль')); return true; }
          return session.done;
        }
      });
    }).then(function () {
      if (session.done) return null;
      session.loggedIn = true;
      session.startedAt = Math.floor(Date.now() / 1000);
      ui.qr(null);
      if (action === 'join') {
        ui.status(T('Вход выполнен. Ищу адрес сервера в ваших группах…'));
        return joinFamily(session);
      }
      ui.status(T('Вход выполнен. Ищу группу ') + BACKUP_GROUP + '…');
      return ensureBackupPlace(session).then(function (place) {
        return action === 'make' ? makeBackup(session, place) : loadBackup(session, place);
      });
    }).then(function (result) {
      finishSession(session, result || T('Готово'));
    }, function (err) {
      log(T('backup: ошибка'), errText(err));
      finishSession(session, T('Ошибка: ') + errText(err));
    });
  });
}

/* --- 90_start.js --- */
// Старт загрузчика (вызывается после всех модулей, в том числе общего 20_pairing.js).
//   вошли + основная часть в кэше → запустить её сразу, новую версию проверить в фоне (применится со следующего старта);
//   вошли, кэша нет (стёрли, не скачалась) → скачать и запустить;
//   не вошли → меню загрузчика в «Синхронизации».
var MAIN_UPDATE_DELAY_MS = 15000;

function loaderStart() {
  if (window.lampa_sync && window.lampa_sync.loaded) {
    log(T('lampa-sync уже подключён напрямую — загрузчик молчит'));
    return;
  }
  applyLinkParams();
  var main = cachedMain();
  // runMain проверяет подпись; не прошла — кэш выброшен, дальше как «кэша нет»
  if (getToken() && serverBase() && main && runMain(main)) {
    // тихо (может идти фильм): новая основная часть, свежий манифест — и переезд записи плагина на GitHub, если
    // загрузчик там совпадает с подписанным для этого сервера
    setTimeout(function () { fetchMain(function () { relinkLoader(); }, true); }, MAIN_UPDATE_DELAY_MS);
    return;
  }
  if (getToken() && serverBase()) {
    fetchMain(function (ok) {
      var fresh = cachedMain();
      if (!(ok && fresh && runMain(fresh))) registerLoaderUi();
    });
    return;
  }
  registerLoaderUi();
  if (LOADER.invite && mode() === 'server') setTimeout(inviteAutoLogin, INVITE_START_DELAY_MS);
  if (mode() === 'backup') setTimeout(prefetchGramJS, MAIN_UPDATE_DELAY_MS);  // библиотеку Telegram — заранее, в фоне
}

/* --- 20_pairing.js (общий с основным плагином) --- */
// Привязка устройства: код + QR, подтверждение владельцем в Telegram-боте.

var PAIR_POLL_MS = 2000;
var PAIR_MAX_RESTARTS = 5;
var SPURIOUS_BACK_MS = 1000;  // «назад», пришедший сразу после открытия окна, — не действие пользователя

function detectDevice() {
  var platform = 'browser';
  try {
    if (Lampa.Platform.is('tizen')) platform = 'tizen';
    else if (Lampa.Platform.is('webos')) platform = 'webos';
    else if (Lampa.Platform.is('android')) platform = 'android';
  } catch (e) {}
  var mobile = false;
  try { mobile = !!(Lampa.Platform.screen && Lampa.Platform.screen('mobile')); } catch (e) {}
  var ua = navigator.userAgent || '';
  var names = {
    tizen: 'Samsung TV',
    webos: 'LG TV',
    android: mobile ? T('Android-телефон') : 'Android TV',
    browser: T('Браузер') + (ua.indexOf('Windows') >= 0 ? ' (Windows)' : ua.indexOf('Mac OS') >= 0 ? ' (macOS)' : ua.indexOf('Android') >= 0 ? ' (Android)' : '')
  };
  return { name: names[platform], platform: platform, origin: location.origin };
}

function formatCode(code) {
  return code.length === 6 ? code.substr(0, 3) + '-' + code.substr(3) : code;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// onDone(device) — вызывается после успешной привязки.
function startPairing(onDone) {
  var info = detectDevice();
  var active = true;
  var restarts = 0;
  var timer = null;
  var current = null;  // {code, secret} текущего запроса — чтобы отменить его при закрытии окна
  var prevController = 'content';
  try { prevController = Lampa.Controller.enabled().name; } catch (e) {}

  var html = $('<div class="lsync-pair" style="text-align:center;padding:0.5em 1em 1em">' +
    '<div class="lsync-pair__qr" style="min-height:14em"></div>' +
    '<div class="lsync-pair__code" style="font-size:2.2em;font-weight:700;letter-spacing:0.15em;margin:0.4em 0">…</div>' +
    '<div class="lsync-pair__hint" style="color:rgba(255,255,255,0.7);line-height:1.5"></div>' +
    T('<div class="lsync-pair__status" style="margin-top:0.8em;color:rgba(255,255,255,0.5)">Запрашиваю код…</div>') +
    '</div>');

  function close() {
    active = false;
    if (timer) clearTimeout(timer);
    try { Lampa.Modal.close(); } catch (e) {}
    try { Lampa.Controller.toggle(prevController); } catch (e) {}
  }

  var openedAt = Date.now();
  Lampa.Modal.open({
    title: T('Вход в lampa_sync'),
    html: html,
    size: 'medium',
    onBack: function () {
      // Стартовая навигация Lampa может прислать «назад» сразу после открытия — это не действие пользователя.
      if (Date.now() - openedAt < SPURIOUS_BACK_MS) {
        log(T('игнорирую «назад» через ') + (Date.now() - openedAt) + T(' мс после открытия окна'));
        try { Lampa.Modal.toggle(); } catch (e) {}
        return;
      }
      close();
      cancelCurrent();
      noty(T('Вход отменён'));
    }
  });

  function setStatus(text) { html.find('.lsync-pair__status').text(text); }

  // Окно закрыли — отменяем запрос на сервере: подтвердить такой код уже нельзя (иначе устройство-сирота).
  function cancelCurrent() {
    if (!current) return;
    request('POST', '/api/v1/pair/cancel', { code: current.code, secret: current.secret });
    current = null;
  }

  function begin() {
    if (!active) return;
    // invite — код приглашения из ссылки на загрузчик lsync (в основной части его нет)
    var startBody = { name: info.name, platform: info.platform, origin: info.origin, invite: LSYNC.invite || '',
      tg_from: LSYNC.tgFrom || '' };
    request('POST', '/api/v1/pair/start', startBody, function (data) {
      if (!active) return;
      current = { code: data.code, secret: data.secret };
      html.find('.lsync-pair__code').text(formatCode(data.code));
      html.find('.lsync-pair__qr').html('<img src="' + escapeHtml(data.qr_url) + '" style="width:14em;height:14em;border-radius:0.5em;background:#fff">');
      var hint;
      if (data.bot_username) {
        hint = T('Запрос уже отправлен в бот <b>@') + escapeHtml(data.bot_username) + T('</b> — нажмите «Привязать».<br>') +
          T('Или отсканируйте QR телефоном.');
      } else {
        hint = T('Бот на сервере не настроен.<br>Подтвердите на сервере: <b>lampa-sync pair-confirm ') + escapeHtml(data.code) + '</b>';
      }
      html.find('.lsync-pair__hint').html(hint + '<br><span style="opacity:0.6">' + escapeHtml(info.name) + ' · ' + escapeHtml(info.origin) + '</span>');
      setStatus(T('Жду подтверждения…'));
      poll(data.code, data.secret);
    }, function (reason) {
      if (!active) return;
      setStatus(T('Нет связи с сервером (') + reason + T('), повтор через 10 с'));
      timer = setTimeout(begin, 10000);
    });
  }

  function poll(code, secret) {
    if (!active) return;
    timer = setTimeout(function () {
      request('GET', '/api/v1/pair/status?code=' + encodeURIComponent(code) + '&secret=' + encodeURIComponent(secret), null, function (data) {
        if (!active) return;
        if (data.status === 'approved') {
          setToken(data.token, { id: data.device_id, name: info.name });
          close();
          noty(T('Устройство привязано'));
          if (onDone) onDone({ id: data.device_id, name: info.name });
        } else if (data.status === 'rejected' || data.status === 'cancelled') {
          close();
          noty(data.status === 'rejected' ? T('Привязка отклонена') : T('Вход отменён'));
        } else if (data.status === 'expired' || data.status === 'unknown' || data.status === 'consumed') {
          if (++restarts > PAIR_MAX_RESTARTS) {
            close();
            noty(T('Код истёк, запросите новый'));
          } else {
            setStatus(T('Код истёк, получаю новый…'));
            begin();
          }
        } else {
          poll(code, secret);
        }
      }, function () {
        poll(code, secret);  // временная потеря связи — продолжаем ждать
      });
    }, PAIR_POLL_MS);
  }

  begin();
}

LSYNC.startPairing = startPairing;

loaderStart();
})();
