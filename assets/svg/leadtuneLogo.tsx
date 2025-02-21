import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: metadata */
const LeadTuneLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="300.000000pt"
    height="300.000000pt"
    viewBox="0 0 300.000000 300.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <G
      transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
      fill="#fff"
      stroke="none"
    >
      <Path d="M1390 2521 c-301 -85 -450 -220 -540 -490 -11 -34 -25 -86 -31 -114 -5 -28 -20 -67 -32 -87 -41 -62 -57 -117 -57 -191 0 -99 23 -172 72 -225 36 -39 45 -44 85 -44 24 0 59 6 78 14 38 16 40 16 50 -34 11 -53 39 -101 84 -144 39 -38 41 -39 93 -33 38 5 57 13 70 29 18 25 15 39 -4 20 -7 -7 -33 -12 -58 -12 -40 0 -52 5 -83 37 -22 21 -46 61 -58 94 -27 73 -49 94 -86 84 -72 -18 -108 -17 -135 4 -44 35 -70 122 -66 216 3 71 8 89 47 165 24 47 45 101 48 120 3 32 29 113 52 165 5 11 12 28 15 38 3 9 14 17 25 17 14 0 28 14 42 42 17 32 18 40 6 29 -15 -12 -15 -10 -1 18 17 34 26 41 18 14 -3 -11 2 -7 12 7 64 91 251 231 290 216 10 -4 13 -2 8 6 -5 7 0 9 14 6 12 -4 20 -3 17 2 -8 13 79 30 155 30 39 0 99 -7 134 -16 68 -17 201 -84 201 -101 0 -6 4 -15 9 -20 5 -5 6 -3 2 5 -15 26 12 10 53 -32 28 -28 41 -49 36 -57 -5 -7 -4 -10 3 -5 6 3 20 -7 31 -23 23 -32 27 -46 11 -36 -6 4 0 -14 12 -39 12 -25 24 -44 26 -42 2 2 -4 18 -13 36 -9 18 -15 34 -12 36 5 6 57 -113 57 -129 -1 -7 -7 2 -15 18 -12 24 -14 25 -8 5 16 -62 -6 -97 -28 -43 -68 165 -112 231 -197 295 -173 130 -394 137 -576 18 -141 -92 -223 -218 -251 -383 -7 -44 -50 -81 -66 -56 -7 11 -9 10 -9 -5 0 -11 -12 -33 -27 -48 -27 -29 -41 -68 -23 -68 5 0 16 15 23 33 31 73 69 74 106 2 23 -44 26 -61 26 -160 -1 -121 -11 -157 -45 -148 -11 3 -29 17 -40 31 -11 13 -20 19 -20 13 0 -7 18 -30 40 -52 l39 -39 15 22 c51 82 46 291 -10 374 -14 20 -23 39 -20 42 10 9 47 -31 69 -73 44 -86 28 -322 -25 -359 -18 -13 -18 -14 4 -19 33 -9 45 8 68 97 23 92 25 170 6 243 -15 55 -54 133 -68 133 -4 0 -8 5 -8 10 0 17 53 11 88 -10 49 -30 74 -95 82 -210 5 -83 7 -90 14 -57 12 55 2 166 -18 206 -10 18 -15 35 -12 38 10 10 48 -88 56 -141 l8 -51 1 43 c0 24 -4 63 -10 87 -6 25 -8 56 -5 70 7 26 62 95 77 95 5 0 9 -25 9 -56 0 -37 4 -53 11 -49 7 5 8 25 4 57 -5 36 -4 49 4 44 13 -8 15 -85 3 -103 -5 -7 -5 -37 -2 -67 3 -30 2 -52 -2 -50 -4 3 -8 -33 -8 -80 l0 -86 -27 -1 -28 -1 25 -7 c21 -6 15 -9 -35 -21 -33 -8 -63 -14 -66 -13 -4 1 -9 -10 -12 -25 -9 -44 -49 -94 -87 -108 l-35 -12 33 -1 c17 -1 32 4 32 10 0 5 5 7 10 4 6 -3 10 -25 10 -48 0 -109 90 -177 197 -148 43 12 107 57 98 70 -2 4 2 32 10 62 9 34 13 76 9 114 -3 33 -1 71 5 85 l10 25 1 -30 2 -30 11 28 c10 24 30 39 25 20 0 -5 1 -15 5 -23 3 -8 8 -37 12 -63 9 -66 50 -112 112 -125 25 -6 53 -8 62 -5 13 4 13 3 2 -5 -7 -5 -32 -8 -55 -5 -28 3 -37 2 -27 -5 25 -18 2 -30 -69 -37 -38 -4 -70 -10 -70 -14 0 -4 -20 -17 -44 -29 -24 -12 -49 -29 -56 -37 -7 -8 -16 -13 -19 -10 -4 2 -8 -2 -8 -10 0 -8 4 -15 8 -15 12 0 17 -38 6 -49 -22 -22 -40 -13 -33 17 l6 27 -30 -33 c-17 -18 -28 -37 -26 -41 10 -15 -49 -34 -100 -32 -40 2 -65 -4 -105 -25 -41 -21 -70 -28 -119 -29 -82 -3 -138 -27 -207 -89 -28 -25 -54 -43 -56 -39 -3 5 -8 50 -12 101 -8 104 -5 100 -96 81 -34 -7 -64 -22 -87 -44 -30 -27 -37 -41 -43 -91 -12 -91 -31 -325 -29 -364 1 -41 22 -76 50 -85 21 -7 124 15 224 46 53 17 69 18 148 8 89 -12 120 -9 239 22 51 13 57 12 64 -11 7 -23 50 -37 68 -22 6 5 37 12 67 15 30 3 78 10 105 17 28 6 76 15 108 19 57 9 78 19 108 55 10 13 30 20 55 21 21 1 46 4 54 8 25 10 119 27 150 27 16 0 46 12 67 26 21 14 51 28 66 31 16 3 31 12 34 19 3 7 21 16 41 19 93 15 202 50 253 81 31 19 62 34 68 34 7 0 22 10 35 22 12 13 38 35 58 50 57 43 81 90 74 141 -7 41 -7 68 -4 134 2 52 -24 73 -94 73 -35 0 -72 -7 -91 -16 -17 -10 -66 -20 -108 -25 -42 -4 -94 -16 -116 -27 -28 -15 -51 -19 -83 -15 -48 5 -266 -32 -288 -50 -25 -20 -23 2 3 25 34 30 65 80 65 106 0 19 -4 21 -31 15 -26 -5 -30 -3 -28 12 5 21 12 25 104 60 38 15 88 43 111 63 22 21 60 53 85 73 64 52 103 129 104 204 0 81 -8 106 -58 167 -25 32 -47 73 -55 103 -43 164 -169 318 -322 392 -137 66 -253 79 -380 44z m255 -91 c56 -21 155 -73 166 -86 28 -34 -46 -46 -106 -17 -19 9 -36 20 -36 25 -1 4 -2 14 -3 20 -1 8 -35 18 -89 27 -78 13 -92 13 -114 1 -14 -8 -26 -19 -27 -25 0 -5 38 -16 84 -23 49 -7 96 -20 110 -31 42 -30 116 -42 163 -25 64 23 67 19 67 -103 0 -73 -3 -103 -10 -93 -5 8 -10 53 -10 99 l0 84 -47 -7 c-27 -4 -57 -8 -68 -9 -11 -1 -25 -5 -31 -9 -17 -11 -175 -69 -204 -75 -89 -18 -153 -48 -203 -93 -41 -38 -82 -94 -93 -127 0 -2 -18 6 -40 16 -21 11 -60 22 -86 26 -45 7 -47 9 -42 34 12 49 54 145 81 184 40 57 100 98 286 194 15 8 67 18 115 22 87 7 99 6 137 -9z m324 -277 c29 -58 28 -77 -4 -69 -14 3 -37 9 -52 12 -16 4 -31 12 -36 18 -8 12 -8 95 0 139 l5 28 32 -43 c18 -24 43 -62 55 -85z m-143 -460 c-2 -144 -3 -153 -28 -190 -15 -23 -42 -46 -67 -57 -35 -16 -47 -17 -81 -7 -71 21 -111 101 -90 180 25 94 124 156 191 121 18 -10 19 -6 19 135 0 109 -3 145 -12 145 -7 0 -83 -25 -170 -56 l-156 -56 4 -162 c2 -88 4 -197 5 -241 2 -65 -2 -88 -20 -123 -68 -133 -251 -93 -251 56 0 58 20 101 65 141 35 30 43 33 89 29 l51 -4 -3 253 c-2 168 1 253 8 253 13 0 307 103 380 133 l55 23 7 -210 c3 -116 5 -279 4 -363z m127 339 c46 -48 60 -104 61 -237 1 -109 -1 -125 -24 -170 -23 -46 -28 -50 -67 -56 -47 -6 -50 -3 -29 27 17 24 46 158 46 213 0 65 -19 136 -51 185 -34 55 -34 53 -11 59 36 10 49 6 75 -21z m54 3 c50 -35 85 -205 63 -311 -15 -73 -45 -134 -66 -134 -12 0 -14 4 -7 13 6 6 19 37 29 67 36 108 18 284 -37 354 -23 29 -15 34 18 11z m95 -30 c53 -36 98 -141 68 -160 -5 -3 -7 -12 -4 -19 9 -25 -15 -90 -46 -126 l-31 -35 8 60 c14 109 3 186 -42 288 -10 24 4 21 47 -8z m-213 -91 c23 -52 34 -165 22 -226 -12 -54 -39 -87 -42 -50 -1 9 -5 -14 -9 -51 -5 -51 -12 -74 -29 -90 l-22 -22 17 40 c24 58 42 205 39 323 -1 56 1 102 5 102 4 0 12 -12 19 -26z m-190 -18 c5 -6 9 -33 8 -59 l-2 -47 -59 -20 c-35 -12 -79 -38 -111 -65 -30 -25 -56 -42 -58 -38 -9 17 -8 160 2 186 8 21 17 27 40 27 15 0 34 6 40 13 14 17 126 20 140 3z m266 -346 c-18 -20 -91 -48 -100 -38 -15 14 10 38 39 38 18 0 41 6 52 14 26 19 31 11 9 -14z m-181 -135 c6 -17 -14 -27 -74 -40 l-35 -7 40 22 c22 12 44 26 50 31 12 12 12 12 19 -6z m36 -53 c0 -4 -15 -22 -32 -39 -23 -22 -50 -35 -90 -43 l-58 -11 0 -190 c0 -156 -2 -189 -14 -189 -8 0 -22 -3 -31 -6 -14 -6 -16 12 -13 185 3 188 3 192 -17 187 -11 -3 -40 -8 -65 -12 -25 -4 -58 -13 -73 -21 -27 -13 -28 -13 -18 4 35 61 41 64 222 103 204 45 189 42 189 32z m714 -11 c9 -10 14 -25 10 -35 -7 -19 -9 -19 -34 -4 -25 16 -73 0 -78 -26 -5 -23 14 -36 51 -36 34 0 77 -40 77 -72 0 -91 -151 -158 -181 -80 -13 35 2 49 36 34 32 -15 72 -6 86 19 14 27 4 38 -43 45 -55 9 -78 34 -78 83 0 32 6 44 31 65 38 32 97 35 123 7z m-199 -52 c21 -26 25 -40 23 -78 l-3 -46 -75 -14 c-41 -8 -77 -16 -79 -18 -2 -2 1 -14 7 -28 15 -32 70 -35 96 -6 17 18 56 18 56 0 0 -20 -63 -78 -91 -84 -41 -9 -87 11 -104 46 -20 37 -19 151 0 189 39 75 123 94 170 39z m-245 -19 c29 -15 40 -65 40 -175 0 -85 -3 -104 -16 -109 -42 -16 -44 -11 -44 113 0 99 -3 120 -16 125 -22 8 -26 7 -49 -10 -18 -13 -21 -30 -25 -137 l-5 -122 -28 -3 -28 -3 3 155 c1 86 6 156 9 156 4 0 14 3 23 6 11 4 16 1 16 -11 0 -14 3 -14 26 4 29 23 64 27 94 11z m-190 -176 c0 -155 0 -155 -22 -153 -13 2 -38 -5 -56 -15 -28 -14 -39 -15 -69 -5 -51 17 -62 50 -57 184 4 109 4 110 29 113 l25 3 0 -101 c0 -56 5 -110 10 -121 13 -23 37 -24 62 -2 15 14 18 32 18 129 0 99 2 113 18 117 43 11 42 13 42 -149z m-390 -53 c0 -158 -2 -180 -17 -185 -9 -4 -21 -2 -26 3 -7 7 -19 3 -35 -9 -14 -11 -36 -20 -49 -20 -61 0 -93 48 -93 141 0 112 59 188 136 176 35 -6 35 -6 28 28 -5 27 -2 34 13 38 44 11 43 15 43 -172z m533 31 c3 -58 9 -88 21 -101 21 -24 60 -16 81 15 13 20 19 22 41 14 51 -20 104 -12 145 21 32 25 42 28 59 19 11 -6 20 -16 20 -23 0 -17 -135 -78 -174 -79 -41 0 -176 -37 -200 -54 -16 -11 -23 -10 -47 8 -26 19 -31 20 -56 8 -16 -8 -41 -15 -57 -17 -16 -2 -37 -10 -47 -19 -11 -10 -25 -13 -39 -9 -26 8 -46 -7 -71 -57 -11 -21 -24 -36 -29 -33 -5 3 -7 12 -4 19 3 8 -7 23 -22 35 -25 20 -29 20 -52 5 -24 -16 -64 -25 -112 -24 -14 0 -34 -4 -45 -8 -39 -18 -146 -42 -192 -43 -32 -2 -52 -29 -54 -75 l-3 -41 -31 32 -31 33 -64 -14 c-36 -7 -83 -19 -105 -26 -22 -6 -90 -12 -150 -13 -80 -2 -120 -7 -142 -19 -18 -9 -63 -21 -102 -28 -103 -18 -104 -17 -96 151 8 165 21 259 41 289 30 47 32 39 51 -275 7 -125 12 -131 87 -114 29 6 66 14 82 17 34 6 94 34 94 43 0 4 30 5 68 3 65 -3 68 -3 103 32 36 35 38 36 65 21 36 -19 67 -19 103 -1 15 8 37 13 48 10 12 -4 31 4 49 19 28 23 33 24 77 14 41 -9 53 -8 78 7 17 10 33 15 36 12 11 -11 63 25 69 49 l6 25 20 -25 c34 -44 98 -21 98 35 0 41 10 42 48 9 30 -27 40 -30 76 -26 79 10 191 38 204 50 13 14 23 65 24 135 1 23 5 42 11 42 5 0 7 6 4 14 -5 13 2 30 9 23 2 -2 5 -40 7 -85z m-1383 -137 c0 -210 -8 -195 93 -171 l57 13 0 -28 c0 -16 0 -32 0 -36 1 -6 -174 -51 -205 -52 -6 -1 -9 78 -7 223 3 246 -2 224 55 235 4 0 7 -82 7 -184z m585 144 c17 -16 21 -38 26 -142 3 -67 4 -125 2 -129 -2 -5 -15 -8 -29 -8 -16 0 -24 6 -24 18 -1 16 -1 16 -11 -1 -26 -44 -105 -53 -136 -15 -54 64 6 160 113 182 29 6 31 10 25 34 -9 34 -35 38 -84 13 l-37 -19 -15 21 c-12 17 -12 23 -3 26 7 2 20 9 28 16 45 37 110 39 145 4z m563 -4 c-2 -50 -18 -55 -18 -6 0 23 4 41 10 41 5 0 9 -16 8 -35z m-798 -45 c24 -24 33 -56 28 -101 -3 -34 -3 -34 -85 -53 -89 -20 -99 -30 -62 -67 23 -23 51 -19 85 12 20 19 64 26 64 11 0 -20 -52 -81 -80 -92 -43 -18 -97 -3 -124 33 -28 38 -29 155 -3 205 36 66 134 95 177 52z m-289 -129 c0 -15 3 -20 6 -11 7 20 34 50 45 50 4 0 8 -31 8 -70 0 -74 -1 -75 -60 -81 -33 -3 -35 2 -32 75 3 60 6 74 18 69 8 -3 14 -17 15 -32z m1575 12 c-11 -12 -246 -61 -251 -52 -3 4 53 18 123 32 70 14 129 26 131 26 2 1 1 -2 -3 -6z m-315 -49 c11 -14 10 -19 -9 -34 -12 -10 -22 -23 -22 -29 0 -6 -4 -11 -10 -11 -5 0 -10 8 -10 18 0 9 -3 27 -6 39 -5 20 1 25 37 32 4 0 13 -6 20 -15z m-87 -47 c-3 -9 -12 -17 -20 -17 -8 0 -14 -7 -14 -15 0 -8 -4 -15 -10 -15 -5 0 -10 18 -10 39 0 29 4 41 18 44 23 5 44 -16 36 -36z m-84 -50 c0 -4 -11 -5 -25 -1 -15 4 -25 2 -25 -5 0 -6 -5 -11 -11 -11 -10 0 -7 16 13 70 l10 25 18 -35 c11 -19 19 -38 20 -43z m-152 25 c2 -7 -5 -12 -15 -12 -25 0 -33 -8 -26 -26 3 -9 13 -12 24 -9 11 4 19 2 19 -4 0 -20 -43 -24 -57 -5 -17 24 -17 30 8 55 21 21 40 21 47 1z m-98 -24 c0 -13 3 -33 6 -45 5 -17 2 -23 -10 -23 -12 0 -16 10 -16 45 0 25 5 45 10 45 6 0 10 -10 10 -22z m-56 -9 c-3 -5 -13 -9 -22 -10 -13 0 -12 -3 6 -11 25 -13 28 -30 8 -47 -15 -12 -49 -4 -41 10 3 4 12 6 20 2 8 -3 15 -1 15 5 0 5 -9 12 -20 15 -24 6 -26 20 -5 41 16 15 49 11 39 -5z m-86 -40 c-3 -44 -28 -73 -47 -54 -16 16 -18 77 -3 82 8 3 12 -6 12 -26 0 -17 5 -31 10 -31 6 0 10 16 10 35 0 19 5 35 11 35 6 0 9 -17 7 -41z m-98 -29 c0 -23 -5 -40 -11 -40 -6 0 -9 7 -5 15 3 8 1 15 -4 15 -6 0 -10 -5 -10 -11 0 -6 -7 -9 -15 -5 -10 4 -15 -1 -15 -14 0 -11 -4 -20 -10 -20 -5 0 -10 20 -10 45 0 44 12 60 24 30 8 -21 23 -19 29 5 9 35 27 22 27 -20z m-165 -29 c-12 -10 -244 -56 -251 -49 -5 5 205 55 241 57 11 1 15 -3 10 -8z" />
      <Path d="M1365 2382 c-36 -7 -41 -22 -8 -22 18 0 34 4 38 9 7 13 -6 18 -30 13z" />
      <Path d="M1755 2160 c-35 -8 -286 -104 -315 -120 -20 -11 -28 -50 -11 -50 10 0 359 127 373 136 5 3 4 11 -1 18 -6 7 -8 16 -4 19 8 8 -2 8 -42 -3z" />
      <Path d="M1639 1661 c-24 -25 -29 -38 -29 -78 0 -36 6 -55 20 -71 42 -45 117 -16 140 53 33 100 -59 167 -131 96z m89 -23 c13 -13 16 -66 4 -85 -4 -6 -19 -16 -34 -22 -21 -8 -29 -6 -42 8 -46 50 24 147 72 99z" />
      <Path d="M1263 1535 c-27 -19 -47 -78 -38 -113 10 -43 34 -62 76 -62 29 0 43 6 63 31 33 39 36 109 6 139 -24 24 -76 26 -107 5z m79 -32 c26 -23 24 -78 -4 -97 -32 -23 -55 -20 -74 9 -21 32 -12 65 23 87 35 22 33 21 55 1z" />
      <Path d="M2221 1254 c-33 -42 -28 -57 17 -50 77 14 82 19 62 57 -15 27 -55 24 -79 -7z" />
      <Path d="M1378 1090 c-45 -27 -47 -162 -2 -182 39 -18 70 19 78 93 3 35 2 69 -4 80 -11 20 -45 24 -72 9z m40 -101 c-2 -31 -7 -44 -18 -44 -19 0 -25 56 -10 86 17 31 32 10 28 -42z" />
      <Path d="M635 770 c-4 -6 -11 -8 -16 -5 -5 4 -9 -13 -9 -38 0 -41 2 -45 21 -40 20 6 20 7 5 18 -23 17 -21 44 3 38 16 -4 19 -1 14 16 -6 24 -9 25 -18 11z" />
      <Path d="M715 718 c-22 -10 -29 -15 -15 -11 14 3 41 9 60 13 27 4 30 7 15 11 -11 3 -38 -2 -60 -13z" />
      <Path d="M1174 939 c-41 -12 -68 -42 -59 -68 12 -40 95 -11 95 33 0 8 3 21 6 30 7 18 3 18 -42 5z" />
      <Path d="M1083 827 c15 -23 30 -22 34 3 1 10 -7 16 -24 18 -24 2 -25 1 -10 -21z" />
      <Path d="M912 1003 c-12 -4 -42 -54 -42 -69 0 -6 81 3 106 13 19 7 17 27 -4 46 -19 17 -36 20 -60 10z" />
      <Path d="M860 823 c0 -7 -7 -10 -17 -6 -18 7 -13 -7 15 -39 20 -23 28 -23 35 3 5 17 3 18 -11 7 -13 -11 -15 -11 -10 3 3 9 2 22 -3 30 -6 9 -9 10 -9 2z" />
      <Path d="M940 2113 c0 -16 -2 -53 -4 -83 -2 -30 -2 -44 0 -30 7 41 23 106 30 124 4 11 1 16 -10 16 -11 0 -16 -9 -16 -27z" />
      <Path d="M865 1745 c5 -11 9 -40 9 -65 1 -34 -3 -45 -14 -45 -9 0 -19 17 -27 45 -10 39 -11 41 -12 15 -2 -57 46 -97 68 -57 11 21 -2 99 -19 115 -10 10 -11 8 -5 -8z" />
      <Path d="M1481 1506 c-1 -38 1 -67 3 -65 10 10 14 92 6 112 -6 16 -9 3 -9 -47z" />
      <Path d="M1255 1263 c11 -3 25 -10 30 -17 8 -10 16 -9 40 6 l30 18 -60 -1 c-33 -1 -51 -3 -40 -6z" />
    </G>
  </Svg>
);
export default LeadTuneLogo;
