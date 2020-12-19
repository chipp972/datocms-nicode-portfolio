import React from 'react';
import clsx from 'clsx';
import css from './contact.module.sass';

export const PhoneIcon: React.FC<SvgProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 0 511 512"
    width={size}
    className={clsx(className, css.phoneIcon)}>
    <g fillRule="evenodd">
      <path
        className={css.phoneIconMain}
        d="M255.851562 50c112.46875 0 203.617188 91.152344 203.617188 203.621094s-91.148438 203.617187-203.617188 203.617187c-34.277343 0-67.742187-8.480469-97.796874-24.980469l-14.125-7.753906-75.921876 20.519532 20.699219-73.867188-8.609375-14.667969c-18.359375-31.289062-27.867187-66.59375-27.867187-102.867187C52.230469 141.152344 143.382812 50 255.851562 50zM138.808594 467.320312c34.734375 19.070313 74.621094 29.917969 117.042968 29.917969 134.546876 0 243.617188-109.070312 243.617188-243.617187C499.46875 119.070312 390.398438 10 255.851562 10 121.300781 10 12.230469 119.070312 12.230469 253.621094c0 44.914062 12.167969 86.984375 33.371093 123.113281L10.5 502zm0 0"
      />
      <path
        className={css.phoneIconBg}
        d="M459.46875 253.621094C459.46875 141.152344 368.320312 50 255.851562 50S52.230469 141.152344 52.230469 253.621094c0 36.273437 9.507812 71.578125 27.871093 102.867187l8.605469 14.667969-20.699219 73.867188 75.921876-20.519532 14.128906 7.753906c30.050781 16.5 63.515625 24.980469 97.792968 24.980469 112.46875 0 203.617188-91.148437 203.617188-203.617187zm-261.710938-10.386719c9.160157 15.867187 25.152344 33.699219 39.933594 45.144531 17.855469 13.824219 45.863282 31.988282 54.96875 23.933594 4.296875-3.800781 16.121094-20.933594 17.695313-22.15625 1.578125-1.226562 6.824219-9.988281 19.210937-3.984375 12.382813 6.007813 43.28125 21.335937 43.28125 21.335937s6.695313 2.703126 6.410156 13.195313c-.28125 10.488281-.738281 13.175781-.738281 13.175781s-4.488281 35.972656-53.589843 37.40625c-22.226563.648438-47.964844-8.414062-70.769532-20.046875-38.925781-19.847656-63.238281-41.785156-89.238281-75.90625-17.65625-23.167969-35.292969-53.609375-32.175781-80.667969 5.410156-46.949218 35.265625-51.277343 35.265625-51.277343s2.703125-.324219 13.199219-.109375c10.492187.214844 12.871093 7.03125 12.871093 7.03125s14.496094 33.105468 19.90625 45.761718c5.410157 12.65625-.433593 18.171876-1.730469 19.6875-1.296874 1.515626-9.085937 10.710938-13.089843 14.820313-4.003907 4.109375-3.050781 9.808594-1.410157 12.65625zm0 0"
      />
      <path
        className={css.phoneIconMain}
        d="M213.984375 196.066406c-5.40625-12.65625-19.902344-45.757812-19.902344-45.757812s-2.378906-6.816406-12.875-7.03125c-10.492187-.214844-13.199219.109375-13.199219.109375s-29.855468 4.328125-35.265624 51.277343c-3.117188 27.058594 14.519531 57.496094 32.175781 80.667969 26.003906 34.121094 50.316406 56.058594 89.238281 75.90625 22.808594 11.628907 48.546875 20.695313 70.773438 20.046875 49.101562-1.433594 53.589843-37.40625 53.589843-37.40625s.453125-2.6875.738281-13.179687c.285157-10.488281-6.410156-13.191407-6.410156-13.191407s-30.898437-15.328124-43.285156-21.335937c-12.382812-6.007813-17.632812 2.757813-19.207031 3.980469-1.574219 1.226562-13.402344 18.359375-17.699219 22.160156-9.101562 8.054688-37.113281-10.109375-54.96875-23.933594-14.777344-11.445312-30.769531-29.277344-39.929688-45.144531-1.644531-2.847656-2.597656-8.546875 1.40625-12.660156 4.003907-4.109375 11.792969-13.304688 13.089844-14.816407 1.300782-1.515624 7.140625-7.03125 1.730469-19.691406zm0 0"
      />
    </g>
    <path d="M435.1875 74.28125C387.285156 26.382812 323.59375 0 255.851562 0c-53.28125 0-104.277343 16.34375-147.472656 47.269531-4.492187 3.214844-5.527344 9.460938-2.3125 13.953125 3.21875 4.492188 9.464844 5.523438 13.953125 2.308594C159.800781 35.054688 206.769531 20 255.851562 20 384.667969 20 489.46875 124.800781 489.46875 253.621094c0 128.816406-104.800781 233.617187-233.617188 233.617187-39.242187 0-78.050781-9.917969-112.230468-28.683593-2.269532-1.242188-4.929688-1.558594-7.421875-.886719L24.878906 487.753906l30.351563-108.320312c.734375-2.617188.371093-5.417969-1.003907-7.757813-20.933593-35.671875-31.996093-76.492187-31.996093-118.054687 0-49.085938 15.054687-96.054688 43.53125-135.832032 3.214843-4.488281 2.179687-10.734374-2.308594-13.949218C58.960938 100.625 52.714844 101.65625 49.5 106.148438c-30.925781 43.191406-47.269531 94.1875-47.269531 147.472656 0 43.683594 11.261719 86.617187 32.609375 124.460937L.871094 499.300781c-.972656 3.464844-.003906 7.183594 2.523437 9.738281C5.300781 510.957031 7.867188 512 10.5 512c.871094 0 1.746094-.113281 2.609375-.347656l124.464844-33.636719c36.238281 19.128906 77.042969 29.222656 118.273437 29.222656 67.746094 0 131.4375-26.378906 179.335938-74.285156 47.902344-47.898437 74.285156-111.589844 74.285156-179.335937 0-67.742188-26.378906-131.429688-74.28125-179.335938zm0 0" />
    <path d="M419.769531 374.839844c4.59375 3.066406 10.804688 1.828125 13.871094-2.765625 23.4375-35.117188 35.828125-76.078125 35.828125-118.457031 0-57.0625-22.21875-110.710938-62.5625-151.054688S312.917969 40 255.851562 40c-57.066406 0-110.714843 22.21875-151.058593 62.5625s-62.5625 93.992188-62.5625 151.058594c0 38.007812 10.113281 75.328125 29.246093 107.929687l6.453126 11-19.550782 69.773438c-.972656 3.460937-.007812 7.179687 2.523438 9.734375 2.53125 2.554687 6.242187 3.554687 9.714844 2.617187l72.03125-19.46875 10.59375 5.816407c31.242187 17.152343 66.722656 26.214843 102.605468 26.214843 42.382813 0 83.34375-12.390625 118.457032-35.832031 4.59375-3.0625 5.832031-9.273438 2.765624-13.867188-3.066406-4.59375-9.273437-5.832031-13.867187-2.765624-31.816406 21.238281-68.9375 32.464843-107.355469 32.464843-32.527344 0-64.679687-8.210937-92.980468-23.746093l-14.125-7.757813c-2.265626-1.242187-4.925782-1.558594-7.421876-.886719l-58.9375 15.929688 15.953126-56.925782c.730468-2.617187.371093-5.417968-1.003907-7.757812l-8.609375-14.667969c-17.332031-29.535156-26.492187-63.355469-26.492187-97.808593C62.230469 146.855469 149.089844 60 255.851562 60c106.761719 0 193.617188 86.855469 193.617188 193.621094 0 38.410156-11.226562 75.53125-32.464844 107.351562-3.066406 4.59375-1.828125 10.800782 2.765625 13.867188zm0 0" />
    <path d="M219.304688 222.902344l.660156-.769532c8.957031-10.054687 6.695312-21.863281 3.21875-29.996093-5.136719-12.011719-18.574219-42.714844-19.847656-45.621094-1.984376-5.015625-8.605469-12.960937-21.921876-13.238281-10.382812-.210938-13.796874.082031-14.59375.179687-.082031.007813-.164062.019531-.242187.03125-1.53125.222657-37.546875 6.050781-43.765625 60.03125-2.859375 24.816407 8.632812 54.378907 34.15625 87.875 28.257812 37.082031 54.234375 59.164063 92.648438 78.75 19.128906 9.753907 47.070312 21.171875 73.082031 21.171875.84375 0 1.6875-.011718 2.523437-.039062 29.214844-.851563 44.816406-12.992188 52.757813-23.027344 8.429687-10.652344 10.191406-21.148438 10.445312-22.96875.167969-1.15625.574219-4.804688.832031-14.308594.359376-13.316406-7.265624-20.308594-12.179687-22.53125-2.777344-1.378906-31.410156-15.574218-43.148437-21.265625-7.925782-3.847656-19.578126-6.042969-30.066407 5.335938-.054687.058593-.105469.117187-.15625.167969-1.417969 1.238281-2.820312 3.085937-7.082031 8.789062-2.625 3.511719-7.863281 10.519531-10.089844 12.859375-4.703125.332031-20.429687-6.59375-42.722656-23.855469-14.050781-10.882812-29.054688-27.824218-37.355469-42.175781-.082031-.203125-.132812-.574219-.109375-.761719 3.441406-3.539062 9.042969-10.042968 12.957032-14.632812zm12.261718 73.382812c6.664063 5.160156 19.730469 14.773438 32.363282 21.183594 5.972656 3.027344 24.148437 12.25 35.355468 2.332031 3.09375-2.738281 7.488282-8.507812 13.355469-16.359375 1.691406-2.261718 3.769531-5.039062 4.574219-6 .523437-.476562.957031-.945312 1.351562-1.375 1.800782-1.953125 2.621094-2.84375 6.632813-.898437 12.046875 5.84375 42.101562 20.75 43.179687 21.28125.371094.371093.949219 1.578125.882813 3.980469-.222657 8.289062-.546875 11.285156-.613281 11.847656-.042969.207031-.023438.082031-.046876.308594-.117187.679687-1.375 7.382812-6.886718 13.964843-7.773438 9.289063-20.246094 14.246094-37.074219 14.734375-22.5.667969-48.269531-9.945312-65.941406-18.957031-35.953125-18.335937-59.214844-38.136719-85.828125-73.058594-21.96875-28.828125-32.410156-54.234375-30.195313-73.464843 4.171875-36.207032 24.015625-41.894532 26.675781-42.496094.9375-.058594 4.109376-.191406 11.648438-.035156 2.402344.050781 3.578125.6875 3.933594 1.074218.496094 1.132813 14.59375 33.335938 19.855468 45.648438 2.628907 6.152344 1.015626 7.964844.238282 8.835937-.140625.15625-.261719.296875-.367188.414063l-.574218.675781c-5.777344 6.769531-9.84375 11.375-12.085938 13.675781-7.382812 7.585938-6.683594 18.085938-2.902344 24.632813 9.617188 16.664062 26.289063 35.523437 42.46875 48.054687zm0 0M83.585938 91.351562c2.402343 0 4.8125-.859374 6.726562-2.601562 4.085938-3.714844 4.390625-10.039062.675781-14.125-3.71875-4.085938-10.039062-4.386719-14.128906-.671875l-.003906.003906c-4.085938 3.714844-4.382813 10.035157-.667969 14.125 1.972656 2.167969 4.679688 3.269531 7.398438 3.269531zm0 0M392.433594 390.871094l-.003906.007812c-3.714844 4.085938-3.410157 10.40625.675781 14.121094 1.914062 1.742188 4.320312 2.601562 6.722656 2.601562 2.71875 0 5.429687-1.105468 7.402344-3.277343 3.71875-4.085938 3.414062-10.410157-.671875-14.125-4.085938-3.714844-10.410156-3.414063-14.125.671875zm0 0" />
  </svg>
);
