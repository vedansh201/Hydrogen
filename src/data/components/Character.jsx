export default function Character({ person }) {
  const { id, name, color } = person;
  const bald = ["walter", "mike", "hank", "gus"].includes(id);
  const glasses = ["walter", "gus"].includes(id);

  return (
    <svg
      className={`portrait portrait-${id}`}
      viewBox="0 0 440 460"
      role="img"
      aria-label={`Stylized illustration of ${name}`}
    >
      <defs>

        <linearGradient id={`coat-${id}`} x2="1" y2="1">
          <stop stopColor={color} />
          <stop offset="1" stopColor="#101e18" />
        </linearGradient>

        <pattern
          id={`lines-${id}`}
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 0H5" stroke="#000" strokeOpacity=".14"/>
        </pattern>
      </defs>

      <circle
        cx="225"
        cy="210"
        r="165"
        
        fill="none"
        stroke={color}

        strokeOpacity=".22"
      />

      <circle
        cx="225"
        cy="210"

        r="140"        
        fill="none"
        
        stroke={color}
        
        strokeOpacity=".14"
        strokeDasharray="3 12"
      />

      {id === "skyler" && (
        <path
          d="M135 270Q105 115 170 80Q275 32 310 135L335 340H112Z"
          fill="#9c8954"
        />
      )}

      <path d="M65 460L85 350Q100 307 171 294H272Q349 310 366 350L391 460" fill={`url(#coat-${id})`}/>

      {id === "jesse" && (<path d="M110 355Q75 185 142 101Q221 25 294 111Q347 193 319 355L279 298L170 299Z" fill="#667447"/>)}

      <path d="M185 255L178 307L219 343L268 307L255 250" fill="#ad9e79"/>
      <path d="M148 152Q148 85 220 84Q291 88 294 155L285 238Q270 290 220 302Q166 280 154 231Z" fill="#c3b18a"/>
      <path d="M224 86Q287 89 294 155L285 238Q270 290 220 302L224 250L240 215L224 207Z" fill="#8c8467"/>
      <path d="M148 168Q130 150 137 195L153 214M292 168Q309 150 300 195L286 214" fill="#af9f7d"/>
      {!bald && id !== "skyler" && (<path d="M145 154L146 106Q205 54 281 103L298 158L265 128L190 125L153 170Z" fill={id === "saul" ? "#463e2e" : "#514c34"} /> )}

      {id === "skyler" && ( <path d="M143 189Q123 94 197 77Q290 59 305 163L267 126L227 108Q205 155 143 189" fill="#baa56c" /> )}

      {id === "gus" && ( <path d="M150 137L155 110Q219 67 285 113L291 141Q218 107 150 137" fill="#333d30" /> )}

      <path d="M166 173L197 169M248 169L277 174" stroke="#474c35" strokeWidth="5"/>
      <path d="M179 185h11M254 185h11" stroke="#24352a" strokeWidth="4"/>

      {glasses && (
        <g
          fill="#243d30"
          fillOpacity=".4"
          stroke="#29392c"
          strokeWidth="5"
        >
          <path d="M151 164H207L202 200H158Z" />
          <path d="M236 164H289L282 200H241Z" />
        
          <path d="M207 175H236" />
        </g>
      )}
      <path d="M217 181L205 221L226 225" fill="none" stroke="#746d50" strokeWidth="4" />

      <path d="M196 251Q221 257 245 247" fill="none" stroke="#615d44" strokeWidth="3" />
      {id === "walter" && (
        <>
          <path d="M189 236L207 231L220 236L236 230L252 237L249 274L221 289L194 274Z" fill="#514f3a"/>
          <path d="M206 250H238" stroke="#b3a27d" strokeWidth="4" />

          <path d="M116 137H326L321 119H294L284 52Q221 31 160 55L149 119H119Z" fill="#182a21"/>

          <path d="M157 105H291V121H153Z" fill="#405140"/>
        </>
      )}

      {id === "mike" && (<path d="M157 231L179 268L221 294L268 267L285 232L274 275L220 311L167 275Z" fill="#b3b49a" />)}

      {id === "hank" && (<path d="M175 317L219 347L265 318L281 460H159Z" fill="#464a32"/>)}
      {["gus", "saul"].includes(id) && (
        <>
          <path d="M179 300L221 335L265 300L248 460H195Z" fill={id === "gus" ? "#b5ab78" : "#d2c9a6"} />
          <path d="M220 334L207 354L215 369L203 452L230 460L241 448L226 368L233 351Z" fill={id === "gus" ? "#343b29" : "#a08046"}/>

          <path d="M169 300L148 350L184 365L174 384L212 455M275 300L295 350L260 365L269 384L234 455" fill="none" stroke="#a6b285" strokeOpacity=".3" strokeWidth="2" />
        </>
      )}

      {id === "jesse" && ( <path d="M175 299L159 357M271 299L289 357" stroke="#b8bd93" strokeWidth="3" /> )}
      <path d="M0 0H440V460H0Z" fill={`url(#lines-${id})`} />
    </svg>
  );
}