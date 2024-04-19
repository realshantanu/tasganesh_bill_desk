import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div class="h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800">
        <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
          <div class="flex items-center justify-center h-14 border-b">
            <div>Tasganesh Bill Desk</div>
          </div>
          <div class="overflow-y-auto overflow-x-hidden flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
              <li class="px-5">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <Link to="/">
                  <a
                    href="#"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.55281 1.60553C7.10941 1.32725 7.77344 1 9 1C10.2265 1 10.8906 1.32722 11.4472 1.6055L11.4631 1.61347C11.8987 1.83131 12.2359 1.99991 13 1.99993C14.2371 1.99998 14.9698 1.53871 15.2141 1.35512C15.5944 1.06932 16.0437 1.09342 16.3539 1.2369C16.6681 1.38223 17 1.72899 17 2.24148L17 13H20C21.6562 13 23 14.3415 23 15.999V19C23 19.925 22.7659 20.6852 22.3633 21.2891C21.9649 21.8867 21.4408 22.2726 20.9472 22.5194C20.4575 22.7643 19.9799 22.8817 19.6331 22.9395C19.4249 22.9742 19.2116 23.0004 19 23H5C4.07502 23 3.3148 22.7659 2.71092 22.3633C2.11331 21.9649 1.72739 21.4408 1.48057 20.9472C1.23572 20.4575 1.11827 19.9799 1.06048 19.6332C1.03119 19.4574 1.01616 19.3088 1.0084 19.2002C1.00194 19.1097 1.00003 19.0561 1 19V2.24146C1 1.72899 1.33184 1.38223 1.64606 1.2369C1.95628 1.09341 2.40561 1.06931 2.78589 1.35509C3.03019 1.53868 3.76289 1.99993 5 1.99993C5.76415 1.99993 6.10128 1.83134 6.53688 1.6135L6.55281 1.60553ZM3.00332 19L3 3.68371C3.54018 3.86577 4.20732 3.99993 5 3.99993C6.22656 3.99993 6.89059 3.67269 7.44719 3.39441L7.46312 3.38644C7.89872 3.1686 8.23585 3 9 3C9.76417 3 10.1013 3.16859 10.5369 3.38643L10.5528 3.39439C11.1094 3.67266 11.7734 3.9999 13 3.99993C13.7927 3.99996 14.4598 3.86581 15 3.68373V19C15 19.783 15.1678 20.448 15.4635 21H5C4.42498 21 4.0602 20.8591 3.82033 20.6992C3.57419 20.5351 3.39761 20.3092 3.26943 20.0528C3.13928 19.7925 3.06923 19.5201 3.03327 19.3044C3.01637 19.2029 3.00612 19.1024 3.00332 19ZM19.3044 20.9667C19.5201 20.9308 19.7925 20.8607 20.0528 20.7306C20.3092 20.6024 20.5351 20.4258 20.6992 20.1797C20.8591 19.9398 21 19.575 21 19V15.999C21 15.4474 20.5529 15 20 15H17L17 19C17 19.575 17.1409 19.9398 17.3008 20.1797C17.4649 20.4258 17.6908 20.6024 17.9472 20.7306C18.2075 20.8607 18.4799 20.9308 18.6957 20.9667C18.8012 20.9843 18.8869 20.9927 18.9423 20.9967C19.0629 21.0053 19.1857 20.9865 19.3044 20.9667Z"
                            fill="#4b5563"
                          ></path>{" "}
                          <path
                            d="M5 8C5 7.44772 5.44772 7 6 7H12C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9H6C5.44772 9 5 8.55229 5 8Z"
                            fill="#4b5563"
                          ></path>{" "}
                          <path
                            d="M5 12C5 11.4477 5.44772 11 6 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H6C5.44772 13 5 12.5523 5 12Z"
                            fill="#4b5563"
                          ></path>{" "}
                          <path
                            d="M5 16C5 15.4477 5.44772 15 6 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H6C5.44772 17 5 16.5523 5 16Z"
                            fill="#4b5563"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      Generate Bill
                    </span>
                  </a>
                </Link>
              </li>
              <li class="px-5">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-500">
                    Reports
                  </div>
                </div>
              </li>
              <li>
                <Link to="/daily-report">
                  <a
                    href="#"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 192 192"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#4b5563"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="none"
                            stroke="#4b5563"
                            stroke-width="12"
                            d="M146 30H46c-8.837 0-16 7.163-16 16v100c0 8.837 7.163 16 16 16h75.373a16 16 0 0 0 11.313-4.686l24.628-24.628A16 16 0 0 0 162 121.373V46c0-8.837-7.163-16-16-16Z"
                          ></path>
                          <path d="M64.852 120c-3.168 0-4.752-1.536-4.752-4.608 0-3.024 1.584-4.536 4.752-4.536h7.272V81.624l-5.256 3.168c-1.392.816-2.64 1.032-3.744.648s-1.944-1.104-2.52-2.16c-.576-1.056-.744-2.184-.504-3.384.24-1.248 1.032-2.304 2.376-3.168l10.008-6.048a17.78 17.78 0 0 1 3.024-1.512c1.056-.384 2.088-.576 3.096-.576 1.44 0 2.568.384 3.384 1.152.864.768 1.296 1.896 1.296 3.384v37.728h6.552c3.12 0 4.68 1.512 4.68 4.536 0 3.072-1.56 4.608-4.68 4.608H64.852Zm41.732 0c-3.168 0-4.752-1.536-4.752-4.608 0-3.024 1.584-4.536 4.752-4.536h7.272V81.624l-5.256 3.168c-1.392.816-2.64 1.032-3.744.648s-1.944-1.104-2.52-2.16c-.576-1.056-.744-2.184-.504-3.384.24-1.248 1.032-2.304 2.376-3.168l10.008-6.048a17.78 17.78 0 0 1 3.024-1.512c1.056-.384 2.088-.576 3.096-.576 1.44 0 2.568.384 3.384 1.152.864.768 1.296 1.896 1.296 3.384v37.728h6.552c3.12 0 4.68 1.512 4.68 4.536 0 3.072-1.56 4.608-4.68 4.608h-24.984Z"></path>
                        </g>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      Daily Reports
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/range-report">
                  <a
                    href="#"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g
                            fill="none"
                            fill-rule="evenodd"
                            transform="translate(2 2)"
                          >
                            {" "}
                            <path
                              d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z"
                              stroke="#4b5563"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                            <path
                              d="m.5 4.5h16"
                              stroke="#4b5563"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                            <g fill="#4b5563">
                              {" "}
                              <circle cx="8.5" cy="8.5" r="1"></circle>{" "}
                              <circle cx="4.5" cy="8.5" r="1"></circle>{" "}
                              <circle cx="12.5" cy="8.5" r="1"></circle>{" "}
                              <circle cx="8.5" cy="12.5" r="1"></circle>{" "}
                              <circle cx="4.5" cy="12.5" r="1"></circle>{" "}
                              <circle cx="12.5" cy="12.5" r="1"></circle>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      Range Report
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/pending-bills">
                  <a
                    href="#"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        viewBox="0 0 1024 1024"
                        class="icon w-5 h-5"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M182.99 146.2h585.14v402.29h73.14V73.06H109.84v877.71H512v-73.14H182.99z"
                            fill="#4b5563"
                          ></path>
                          <path
                            d="M256.13 219.34h438.86v73.14H256.13zM256.13 365.63h365.71v73.14H256.13zM256.13 511.91h219.43v73.14H256.13zM731.55 585.06c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86c100.99 0 182.86-81.87 182.86-182.86s-81.86-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0.01 60.49-49.21 109.71-109.71 109.71z"
                            fill="#4b5563"
                          ></path>
                          <path
                            d="M758.99 692.08h-54.86v87.27l69.39 68.76 38.61-38.96-53.14-52.66z"
                            fill="#4b5563"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      Pending Bills
                    </span>
                  </a>
                </Link>
              </li>
              <li class="px-5">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-500">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <Link to="/add-service">
                  <a
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        width="64px"
                        height="64px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                            fill="#4b5563"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                            fill="#4b5563"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      Add Service
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
