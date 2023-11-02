const btn = document.querySelector("#lexBtn");
const yacBtn = document.querySelector("#yacBtn");
const firstFollow = document.querySelector("#firstFollow");
const precedent = document.querySelector("#precedent");
const assembler = document.querySelector("#assembler");
const leftFactoring = document.querySelector("#leftFactoring");
const microprocessor = document.querySelector("#microprocessor");

const myInput = document.querySelector("#lex");
const yacc = document.querySelector("#yacc");
const firstFollowFun = document.querySelector("#firstFollowFun");
const precedentFun = document.querySelector("#precedentFun");
const assemplerFun = document.querySelector("#assemplerFun");
const leftFacortingFun = document.querySelector("#leftFacortingFun");
const microprocessorFun = document.querySelector("#microprocessorFun");

function copyText() {
  myInput.select();
  myInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + myInput.value);
}

function yacText() {
  yacc.select();
  yacc.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + myInput.value);
}

function firstText() {
  firstFollowFun.select();
  firstFollowFun.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + myInput.value);
}

function precedentText() {
  precedentFun.select();
  precedentFun.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + myInput.value);
}

function assemblerFunction() {
  assemplerFun.select();
  assemplerFun.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + myInput.value);
}

function leftFacortingFunction() {
  leftFacortingFun.select();
  leftFacortingFun.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + myInput.value);
}

function microprocessorFunction() {
  microprocessorFun.select();
  microprocessorFun.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + myInput.value);
}

btn.addEventListener("click", copyText);
yacBtn.addEventListener("click", yacText);
firstFollow.addEventListener("click", firstText);
precedent.addEventListener("click", precedentText);
assembler.addEventListener("click", assemblerFunction);
leftFactoring.addEventListener("click", leftFacortingFunction);
microprocessor.addEventListener("click", microprocessorFunction);

s;
