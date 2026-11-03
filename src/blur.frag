#version 120 // glsl version 1.2 for OpenGL 2.1
uniform sampler2D texture;
uniform vec2 textureSize;

void main() {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec2 uv = gl_TexCoord[0].xy;
    vec2 texelSize = 1.0 / textureSize;

    vec4 color = vec4(0.0);
    for (int dx = -2; dx <= 2; ++dx) {
        for (int dy = -2; dy <= 2; ++dy) {
            vec2 offset = vec2(float(dx), float(dy)) * texelSize;
            color += texture2D(texture, uv + offset);
        }
    }
    gl_FragColor = color / 25.0; // Average the colors of the 25 samples
}
