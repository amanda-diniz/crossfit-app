import * as React from "react"
import { SVGProps } from "react"
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={30}
    viewBox="0 0 462 105.75"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M395.04 27.418h66.413V78H395.04Zm0 0" />
      </clipPath>
    </defs>
    <path
      fill="#403933"
      d="M43.985 77.627c-2.98 0-5.602-.582-7.86-1.75-2.25-1.176-4.007-2.836-5.265-4.984-1.25-2.157-1.875-4.633-1.875-7.438V45.893c0-2.77.625-5.22 1.875-7.344 1.258-2.125 3.015-3.77 5.265-4.938 2.258-1.175 4.88-1.765 7.86-1.765 2.976 0 5.597.578 7.86 1.734 2.257 1.149 4.015 2.762 5.265 4.844C58.368 40.51 59 42.916 59 45.643c0 .375-.28.609-.843.703l-2.86.187h-.203a.748.748 0 0 1-.437-.125c-.125-.082-.188-.172-.188-.265v-.375c0-3.02-.96-5.438-2.875-7.25-1.918-1.813-4.453-2.72-7.61-2.72-3.148 0-5.679.919-7.593 2.75-1.918 1.837-2.875 4.243-2.875 7.22v17.875c0 2.98.957 5.386 2.875 7.218 1.914 1.825 4.445 2.735 7.594 2.735 3.156 0 5.691-.899 7.61-2.703 1.913-1.813 2.874-4.227 2.874-7.25 0-.508.274-.743.828-.704l2.86.125c.562 0 .843.11.843.329v.312c0 2.774-.632 5.211-1.89 7.313-1.25 2.105-3.008 3.734-5.266 4.89-2.262 1.145-4.883 1.719-7.86 1.719ZM113.896 77.049c-.47 0-.809-.211-1.016-.64l-9.328-19.657c-.086-.176-.211-.266-.375-.266H92.52c-.22 0-.329.11-.329.328v19.407c0 .554-.277.828-.828.828H88.49c-.554 0-.828-.274-.828-.828V33.127c0-.55.274-.828.828-.828h16.344c3.664 0 6.625 1.133 8.875 3.39 2.258 2.25 3.39 5.204 3.39 8.86 0 2.98-.804 5.508-2.406 7.578-1.593 2.062-3.773 3.414-6.53 4.047-.22.043-.29.168-.204.375l9.516 19.547c.082.168.125.293.125.375 0 .386-.258.578-.766.578ZM92.52 36.252c-.22 0-.329.105-.329.312v15.97c0 .21.11.312.329.312h11.812c2.469 0 4.469-.754 6-2.266 1.531-1.508 2.297-3.5 2.297-5.969 0-2.468-.766-4.476-2.297-6.03-1.531-1.552-3.531-2.329-6-2.329ZM159.048 77.564c-3.024 0-5.684-.613-7.985-1.843-2.305-1.239-4.086-2.973-5.344-5.203-1.25-2.239-1.875-4.829-1.875-7.766V46.658c0-2.937.625-5.52 1.875-7.75 1.258-2.238 3.04-3.972 5.344-5.203 2.3-1.238 4.961-1.86 7.985-1.86 3.02 0 5.687.622 8 1.86 2.32 1.23 4.109 2.965 5.359 5.203 1.258 2.23 1.89 4.813 1.89 7.75v16.094c0 2.937-.632 5.527-1.89 7.766-1.25 2.23-3.04 3.964-5.36 5.203-2.312 1.23-4.98 1.843-8 1.843Zm0-3.906c3.226 0 5.82-.972 7.78-2.922 1.958-1.957 2.938-4.554 2.938-7.797V46.596c0-3.239-.98-5.848-2.937-7.828-1.961-1.977-4.555-2.97-7.781-2.97-3.2 0-5.778.993-7.735 2.97-1.96 1.98-2.937 4.59-2.937 7.828v16.343c0 3.243.976 5.84 2.937 7.797 1.957 1.95 4.535 2.922 7.735 2.922ZM216.51 77.564c-3.117 0-5.836-.492-8.156-1.468-2.313-.977-4.102-2.375-5.36-4.188-1.25-1.812-1.875-3.906-1.875-6.281V63.83c0-.55.274-.828.828-.828h2.75c.551 0 .828.277.828.828v1.531c0 2.43 1.02 4.407 3.063 5.938 2.039 1.531 4.785 2.297 8.234 2.297 3.282 0 5.77-.688 7.47-2.063 1.706-1.383 2.562-3.226 2.562-5.531 0-1.488-.399-2.766-1.188-3.828-.793-1.063-1.996-2.063-3.61-3-1.617-.938-3.933-2.02-6.952-3.25-3.2-1.281-5.684-2.399-7.454-3.36-1.761-.957-3.183-2.191-4.265-3.703-1.086-1.507-1.625-3.414-1.625-5.718 0-3.57 1.242-6.348 3.734-8.329 2.488-1.976 5.926-2.968 10.313-2.968 4.675 0 8.375 1.11 11.093 3.328 2.727 2.21 4.094 5.14 4.094 8.797v1.218c0 .555-.277.829-.828.829h-2.812c-.555 0-.829-.274-.829-.829v-.953c0-2.468-.96-4.488-2.875-6.062-1.918-1.582-4.62-2.375-8.109-2.375-3.023 0-5.328.62-6.922 1.86-1.594 1.23-2.39 3.015-2.39 5.359 0 1.53.39 2.796 1.171 3.796.79 1 1.922 1.875 3.391 2.625 1.469.743 3.711 1.711 6.734 2.907 3.102 1.273 5.614 2.465 7.532 3.578 1.914 1.105 3.445 2.453 4.593 4.047 1.157 1.593 1.735 3.543 1.735 5.843 0 3.532-1.313 6.375-3.938 8.532-2.617 2.148-6.261 3.218-10.937 3.218ZM272.44 77.564c-3.118 0-5.837-.492-8.157-1.468-2.312-.977-4.102-2.375-5.36-4.188-1.25-1.812-1.874-3.906-1.874-6.281V63.83c0-.55.273-.828.828-.828h2.75c.55 0 .828.277.828.828v1.531c0 2.43 1.02 4.407 3.062 5.938 2.04 1.531 4.786 2.297 8.235 2.297 3.281 0 5.77-.688 7.469-2.063 1.707-1.383 2.562-3.226 2.562-5.531 0-1.488-.398-2.766-1.187-3.828-.793-1.063-1.997-2.063-3.61-3-1.617-.938-3.933-2.02-6.953-3.25-3.2-1.281-5.684-2.399-7.453-3.36-1.762-.957-3.184-2.191-4.266-3.703-1.086-1.507-1.625-3.414-1.625-5.718 0-3.57 1.242-6.348 3.735-8.329 2.488-1.976 5.925-2.968 10.312-2.968 4.676 0 8.375 1.11 11.094 3.328 2.726 2.21 4.094 5.14 4.094 8.797v1.218c0 .555-.278.829-.828.829h-2.813c-.555 0-.828-.274-.828-.829v-.953c0-2.468-.961-4.488-2.875-6.062-1.918-1.582-4.621-2.375-8.11-2.375-3.023 0-5.328.62-6.921 1.86-1.594 1.23-2.391 3.015-2.391 5.359 0 1.53.39 2.796 1.172 3.796.789 1 1.922 1.875 3.39 2.625 1.47.743 3.711 1.711 6.735 2.907 3.101 1.273 5.613 2.465 7.531 3.578 1.914 1.105 3.445 2.453 4.594 4.047 1.156 1.593 1.734 3.543 1.734 5.843 0 3.532-1.312 6.375-3.937 8.532-2.617 2.148-6.262 3.218-10.938 3.218ZM344.197 35.486c0 .555-.277.828-.828.828h-23.172c-.219 0-.328.11-.328.329v15.64c0 .211.11.313.328.313h16.14c.551 0 .829.277.829.828v2.297c0 .554-.278.828-.828.828h-16.141c-.219 0-.328.11-.328.328v19.344c0 .554-.278.828-.828.828h-2.875c-.555 0-.828-.274-.828-.828V33.189c0-.55.273-.828.828-.828h27.203c.55 0 .828.278.828.828ZM370.946 77.049c-.555 0-.828-.274-.828-.828V33.189c0-.55.273-.828.828-.828h2.875c.55 0 .828.278.828.828v43.032c0 .554-.277.828-.828.828Zm0 0"
    />
    <g clipPath="url(#a)">
      <path
        fill="#403933"
        d="M461.3 34.875h-3.034c.14-5.473-3.317-7.43-5.641-6.762-2.32.688-2.434 6.875-2.434 6.875l-2.433-.031s-.227.14-.395-.137c-.168-.28-.445.082-.574-.113-.11-.195-.629-.223-.629-.223s-.027-.336-.504-.367c-.476-.027-1.035.77-1.035.77l-27.89.297s-.364-.532-.715-.91c-.336-.38-.965-.07-.965-.07-.559-.157-.781.448-.781.448-.73-.156-1.375.532-1.375.532h-5.54s.07-2.73-.53-5.153c-.602-2.418-2.645-1.972-3.18-.976-.532.976-.375 5.37-.375 5.37h-1.36v.759h-6.87v1.734h6.858v.656h1.383s.168 2.239.45 3.918c.28 1.68.882 3.04 1.414 3.012.543-.031 1.132.504 1.789-1.707.66-2.211.503-6.606.503-6.606l5.528-.058c-.055.715.308 1.05.308 1.05.364 1.524 2.043 3.57 2.73 4.618.685 1.05 2.954 3.344 4.505 4.996 1.57 1.652 3.949 3.289 4.254 3.723.308.421.308 1.359.367 1.988.055.629.683 1.762.797 2.379.11.629.32 3.316.32 3.316l-1.203 1.05s-.797.419-1.387.88c-.601.449-.879.996-.879.996-.476.309-.996 1.414-1.023 1.984-.027.575.113 1.305.113 1.305-.715 1.242-.828 2.152-.715 3.176.114 1.02 1.078 5.441 1.051 5.64-.027.196-.226.63-.281.77-.055.137-.25.336-.39.683-.141.336-.255 1.051-.391 1.528-.141.472-.309.91-.254 1.355.054.45 3.37.364 3.457.282.082-.086.195-.309.14-.883-.058-.574-.086-.824-.027-1.106.055-.281.082-.683.11-1.105.027-.418-.196-.852-.196-.852s-.055-.449-.14-.828c-.083-.363.226-1.734.363-2.52.14-.796.199-.656.687-1.468.489-.813.574-2.098.574-2.098s1.524-.195 1.957-.363c.422-.168.575-.395.938-.477.367-.086.996-.168 1.598-.086.601.086.656.059 1.246.141.601.086 3.035.574 4.027.629.996.059 2.547-.852 2.547-.852-.473.657-.418 1.903-.305 2.547.11.656-.195 1.735-.363 2.184-.168.445-.2 1.328-.45 1.273-.253-.058-.39-.086-.503.25-.113.336-.39 1.528-.477 1.848-.082.309-.113 1.273.055 1.566.168.282 1.848.282 2.297.45.45.168 1.273.503 2.043.628.77.114 1.93.06 2.156-.25.223-.308.14-.574.055-.855-.082-.277-1.188-1.188-1.414-1.469-.223-.281-.684-.742-.88-1.105-.198-.364-.855-.477-.968-.688-.11-.195.422-.906.8-1.761.364-.852 1.903-2.954 2.516-4.368.633-1.414.633-3.511.141-4.394-.476-.88-1.496-1.469-4.2-1.817-2.698-.336-4.558.63-4.558.63s.305-.364.739-1.024c.421-.656.828-1.875.968-2.32.137-.45.88-.801 1.16-1.625.282-.825.055-2.184.168-2.461.114-.282 1.497-3.95 1.653-4.118.14-.167 1.789-1.02 2.52-1.648.738-.633 1.929-1.793 3.316-3.348 1.383-1.566 2.125-3.89 2.488-4.59.363-.71 1.05-1.734 1.105-2.59.06-.85-.14-.992-.14-.992l1.933-.027v.25c.196 4.746 2.157 7.153 3.399 7.348 1.246.195 2.758-.278 3.836-2.7 1.078-2.406.937-4.28.937-4.28h3.121v-1.653Zm-14.972 2.098c-.055.226-2.07 2.547-2.492 2.953-.418.39-1.274 1.191-1.734 1.875-.446.687-.743 1.3-1.383 1.82-.66.504-1.278 1.356-1.57 1.652-.278.278-1.567.63-2.407.825-.851.195-1.273.882-1.273.882s.086-.308.363-.77c.281-.448.309-1.19.336-1.413.027-.223.281-.574.336-.965.055-.395-.027-1.707-.277-2.21-.254-.505-1.192-2.157-1.192-2.157s-.883-.39-1.68-.363c-.796.027-.992-.114-2.21.601-1.22.715-1.247 3.23-1.301 3.723-.055.476-.364.992-.504 1.62-.14.634-.113 2.075-.113 2.075l-.743.195s-.71-.363-1.468-.714c-.77-.336-1.957-.364-2.125-.418-.168-.059-2.52-1.82-2.926-2.184-.39-.363-1.078-.855-1.387-1.441-.308-.602-2.867-3.04-3.203-3.457-.336-.422-1.652-2.016-1.566-2.13.082-.109.601-.992.601-.992h28.254s.082.477.39.575c.31.082 1.106.25 1.106.25s.223-.055.168.168Zm0 0"
      />
    </g>
  </svg>
)
export default Logo
