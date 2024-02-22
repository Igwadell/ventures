precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

vec3 hsb2rgb(vec3 c){
    vec3 rgb=clamp(abs(mod(c.x*6.+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);
    rgb=rgb*rgb*(3.-2.*rgb);
    return c.z*mix(vec3(1.),rgb,c.y);
}

void main(){
    vec2 p=(2.*gl_FragCoord.xy-u_resolution.xy)/u_resolution.y;
    
    float r=length(p)*.9;
    vec3 color=hsb2rgb(vec3(.24,.7,.4));
    
    float a=pow(r,2.);
    float b=sin(r*.8-1.6);
    float c=sin(r-.010);
    float s=sin(a-u_time*3.+b)*c;
    
    color*=abs(1./(s*10.8))-.01;
    gl_FragColor=vec4(color,1.);
}