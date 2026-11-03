#version 120 // glsl version 1.2 for OpenGL 2.1
uniform vec2 windowSize;
uniform vec2 mousePos;
uniform float time;
void main(void) {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec2 uv = gl_FragCoord.xy / windowSize;
    // vec4 color = vec4(uv.x, uv.y, 0.0, 1.0);
    vec3 purple = vec3(0.6, 0.0, 1.0);
    vec3 blue = vec3(0.0, 0.3, 1.0);
    float pulse = 0.5 + 0.5 * sin(time / 1000.0);
    vec3 tint = mix(purple, blue, pulse); 
    vec3 gradient = vec3(uv.x, uv.y, 0.0);
    vec4 color = vec4(mix(gradient, tint, 0.5), 1.0);

    if (distance(gl_FragCoord.xy, mousePos) < 10.0) {
        color = vec4(1.0, 1.0, 1.0, 1.0);
    }
    gl_FragColor = color;


}
