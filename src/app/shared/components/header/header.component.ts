import { Component } from "@angular/core";

@Component({
    selector: "rj-header",
    template: `
         <div class="login-header">
            <div class="logo-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 280" role="img"
                    aria-label="Shivansh AgroTrack">
                    <defs>
                        <linearGradient id="green" x1="0" y1="1" x2="1" y2="0">
                            <stop offset="0" stop-color="#1B5E20" />
                            <stop offset="1" stop-color="#66BB6A" />
                        </linearGradient>
                        <linearGradient id="lime" x1="0" y1="1" x2="1" y2="0">
                            <stop offset="0" stop-color="#43A047" />
                            <stop offset="1" stop-color="#9CCC65" />
                        </linearGradient>
                    </defs>

                    <!-- Logo mark -->
                    <g transform="translate(25 30)">
                        <circle cx="110" cy="110" r="100" fill="#F8FFF8" stroke="#2E7D32" stroke-width="7" />

                        <!-- Tracking route -->
                        <path d="M52 151 C77 130 84 111 103 91 C121 72 145 62 169 48" fill="none" stroke="#F9A825"
                            stroke-width="7" stroke-linecap="round" stroke-dasharray="1 0" />

                        <!-- Location / tracking dot -->
                        <circle cx="169" cy="48" r="11" fill="#F9A825" />
                        <circle cx="169" cy="48" r="4" fill="white" />

                        <!-- Leaf -->
                        <path d="M111 142 C104 112 107 81 128 57 C146 37 169 32 185 35
                     C183 58 171 79 151 92 C138 100 126 103 117 102" fill="url(#green)" />
                        <path d="M116 102 C139 83 156 65 176 42" fill="none" stroke="#C8E6C9" stroke-width="4"
                            stroke-linecap="round" />

                        <!-- Crop rows -->
                        <path d="M43 162 Q110 128 177 162" fill="none" stroke="#2E7D32" stroke-width="9"
                            stroke-linecap="round" />
                        <path d="M50 178 Q110 150 170 178" fill="none" stroke="#66BB6A" stroke-width="7"
                            stroke-linecap="round" />
                        <path d="M62 192 Q110 170 158 192" fill="none" stroke="#A5D6A7" stroke-width="5"
                            stroke-linecap="round" />
                    </g>

                    <!-- Wordmark -->
                    <g transform="translate(245 70)">
                        <text x="0" y="70" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="700"
                            letter-spacing="-2" fill="#1B5E20">Shivansh</text>

                        <text x="4" y="126" font-family="Arial, Helvetica, sans-serif" font-size="43" font-weight="700"
                            letter-spacing="3" fill="#43A047">AgroTrack</text>

                        <path d="M7 147 H280" stroke="#81C784" stroke-width="4" stroke-linecap="round" />
                        <circle cx="297" cy="147" r="5" fill="#F9A825" />
                    </g>
                </svg>
            </div>
        </div>
    `,
    styles: `
        .login-header {
            text-align: center;
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            }
            
            .logo-full {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 320px;
            height: auto;
            margin: 0 auto 32px auto;
            animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            
            svg {
                width: 100%;
                height: auto;
                max-width: 320px;
                filter: drop-shadow(0 4px 12px rgba(#4a7c6f, 0.15));
            }
            }

            @keyframes scaleIn {
            from {
                transform: scale(0.8);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
            }
    `
})

export class AppHeaderComponent {

}