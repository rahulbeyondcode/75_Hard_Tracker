import React from "react";

function TaskIcon() {
  return (
    <svg
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.14062 0H5.85938C5.34053 1.67206e-05 4.83989 0.204007 4.45317 0.572972C4.06644 0.941936 3.82077 1.44999 3.76312 2H2.10938C1.54993 2 1.01341 2.23705 0.617822 2.65901C0.222237 3.08097 0 3.65326 0 4.25V17.75C0 18.3467 0.222237 18.919 0.617822 19.341C1.01341 19.7629 1.54993 20 2.10938 20H12.8906C13.1676 20 13.4419 19.9418 13.6978 19.8287C13.9538 19.7157 14.1863 19.5499 14.3822 19.341C14.5781 19.1321 14.7334 18.884 14.8394 18.611C14.9454 18.3381 15 18.0455 15 17.75V4.25C15 3.95453 14.9454 3.66194 14.8394 3.38896C14.7334 3.11598 14.5781 2.86794 14.3822 2.65901C14.1863 2.45008 13.9538 2.28434 13.6978 2.17127C13.4419 2.0582 13.1676 2 12.8906 2H11.2369C11.1792 1.44999 10.9336 0.941936 10.5468 0.572972C10.1601 0.204007 9.65947 1.67206e-05 9.14062 0ZM5.85938 1.5H9.14062C9.32711 1.5 9.50595 1.57902 9.63781 1.71967C9.76967 1.86032 9.84375 2.05109 9.84375 2.25C9.84375 2.44891 9.76967 2.63968 9.63781 2.78033C9.50595 2.92098 9.32711 3 9.14062 3H5.85938C5.67289 3 5.49405 2.92098 5.36219 2.78033C5.23033 2.63968 5.15625 2.44891 5.15625 2.25C5.15625 2.05109 5.23033 1.86032 5.36219 1.71967C5.49405 1.57902 5.67289 1.5 5.85938 1.5ZM7.96875 8.25C7.96875 8.05109 8.04283 7.86032 8.17469 7.71967C8.30655 7.57902 8.48539 7.5 8.67188 7.5H11.9531C12.1396 7.5 12.3184 7.57902 12.4503 7.71967C12.5822 7.86032 12.6562 8.05109 12.6562 8.25C12.6562 8.44891 12.5822 8.63968 12.4503 8.78033C12.3184 8.92098 12.1396 9 11.9531 9H8.67188C8.48539 9 8.30655 8.92098 8.17469 8.78033C8.04283 8.63968 7.96875 8.44891 7.96875 8.25ZM8.67188 13H11.9531C12.1396 13 12.3184 13.079 12.4503 13.2197C12.5822 13.3603 12.6562 13.5511 12.6562 13.75C12.6562 13.9489 12.5822 14.1397 12.4503 14.2803C12.3184 14.421 12.1396 14.5 11.9531 14.5H8.67188C8.48539 14.5 8.30655 14.421 8.17469 14.2803C8.04283 14.1397 7.96875 13.9489 7.96875 13.75C7.96875 13.5511 8.04283 13.3603 8.17469 13.2197C8.30655 13.079 8.48539 13 8.67188 13ZM6.35625 7.78L4.48125 9.78C4.34941 9.92045 4.1707 9.99934 3.98438 9.99934C3.79805 9.99934 3.61934 9.92045 3.4875 9.78L2.55 8.78C2.48092 8.71134 2.42551 8.62854 2.38708 8.53654C2.34865 8.44454 2.32799 8.34523 2.32632 8.24452C2.32465 8.14382 2.34202 8.04379 2.37738 7.9504C2.41275 7.85701 2.46538 7.77218 2.53215 7.70096C2.59892 7.62974 2.67845 7.5736 2.766 7.53588C2.85355 7.49816 2.94733 7.47963 3.04174 7.48141C3.13615 7.48318 3.22926 7.50523 3.3155 7.54622C3.40175 7.58721 3.47938 7.64631 3.54375 7.72L3.98438 8.19L5.3625 6.72C5.42687 6.64631 5.5045 6.58721 5.59075 6.54622C5.67699 6.50523 5.7701 6.48318 5.86451 6.48141C5.95892 6.47963 6.0527 6.49816 6.14025 6.53588C6.2278 6.5736 6.30733 6.62974 6.3741 6.70096C6.44087 6.77218 6.4935 6.85701 6.52886 6.9504C6.56423 7.04379 6.5816 7.14382 6.57993 7.24452C6.57826 7.34522 6.5576 7.44454 6.51917 7.53654C6.48074 7.62854 6.42533 7.71134 6.35625 7.78ZM6.35625 12.22C6.48792 12.3606 6.56188 12.5512 6.56188 12.75C6.56188 12.9488 6.48792 13.1394 6.35625 13.28L4.48125 15.28C4.34941 15.4205 4.1707 15.4993 3.98438 15.4993C3.79805 15.4993 3.61934 15.4205 3.4875 15.28L2.55 14.28C2.48092 14.2113 2.42551 14.1285 2.38708 14.0365C2.34865 13.9445 2.32799 13.8452 2.32632 13.7445C2.32465 13.6438 2.34202 13.5438 2.37738 13.4504C2.41275 13.357 2.46538 13.2722 2.53215 13.201C2.59892 13.1297 2.67845 13.0736 2.766 13.0359C2.85355 12.9982 2.94733 12.9796 3.04174 12.9814C3.13615 12.9832 3.22926 13.0052 3.3155 13.0462C3.40175 13.0872 3.47938 13.1463 3.54375 13.22L3.98438 13.69L5.3625 12.22C5.49434 12.0795 5.67305 12.0007 5.85938 12.0007C6.0457 12.0007 6.22441 12.0795 6.35625 12.22Z"
        fill="white"
      />
    </svg>
  );
}

export default TaskIcon;
