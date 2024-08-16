export default function loadcss() {
  GM_addStyle(`
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: Lato, sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0 rgb(255 255 255 / 50%), 7px 7px 20px 0 rgb(0 0 0 / 10%),
    4px 4px 5px 0 rgb(0 0 0 / 10%);
  outline: none;
}

/* 6 */
.btn-6 {
  color: #DDD06A;
  background: #238CCD;
  line-height: 42px;
  border: none;
  display: inline-block;
  font-size: 0.7em;
  font-weight: 700;
  width: fit-content;
  padding: 0;
  padding-left: 0.8em;
  padding-right: 0.8em;
  margin-left: 0.5em
}

.btn-6 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-6::before,
.btn-6::after {
  position: absolute;
  content: '';
  height: 0%;
  width: 1px;
  box-shadow: -1px -1px 20px 0 rgb(255 255 255 / 100%), -4px -4px 5px 0 rgb(255 255 255 / 100%),
    7px 7px 20px 0 rgb(0 0 0 / 40%), 4px 4px 5px 0 rgb(0 0 0 / 30%);
}

.btn-6::before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}

.btn-6::after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}

.btn-6:hover {
  background: transparent;
  color: #76aef1;
  box-shadow: none;
}

.btn-6:hover::before {
  transition: all 500ms ease;
  height: 100%;
}

.btn-6:hover::after {
  transition: all 500ms ease;
  height: 100%;
}

.btn-6 span::before,
.btn-6 span::after {
  position: absolute;
  content: '';
  box-shadow: -1px -1px 20px 0 rgb(255 255 255 / 100%), -4px -4px 5px 0 rgb(255 255 255 / 100%),
    7px 7px 20px 0 rgb(0 0 0 / 40%), 4px 4px 5px 0 rgb(0 0 0 / 30%);
}

.btn-6 span::before {
  left: 0;
  top: 0;
  width: 0%;
  height: 0.5px;
  transition: all 500ms ease;
}

.btn-6 span::after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: 0.5px;
  transition: all 500ms ease;
}

.btn-6 span:hover::before {
  width: 100%;
}

.btn-6 span:hover::after {
  width: 100%;
}
`)
}
