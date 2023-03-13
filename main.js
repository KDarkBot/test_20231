let nf = "";
let nt = "";

const $write = document.querySelector("#write");
let operatev = "";
const nclickevent = (event) => {
  if ($write.value.indexOf("=") !== -1) {
    console.log("test");
    $write.value = "";
    nt = "";
    nf = "";
    operatev = "";
  }

  if ($write.value[0] == 0 || $write.value[0] == ".") {
    $write.value = "";
    nf = "";
    nt = "";
    alert("첫 수를 0 과 . 이외에 자연수를 입력해주세요");
  } else {
    if (operatev) {
      nt += event.target.textContent;
      if ($write.value.indexOf("=") !== -1) {
        console.log("test");
        $write.value = "";
      } else if ($write.value.indexOf(operatev + ".") !== -1) {
        $write.value = nf + operatev;
        alert("'.'자연수 불가");
      }
    } else {
      nf += event.target.textContent;
    }
    $write.value += event.target.textContent;
  }
};

const operateevent = (event) => {
  if (event.target.textContent == "=") {
    if (operatev == "+") {
      $write.value = nf + "+" + nt + "=" + (Number(nf) + Number(nt));
      nt = "";
      nt = "";
      operatev = "";
    } else if (operatev == "-") {
      $write.value = nf + "-" + nt + "=" + (Number(nf) - Number(nt));
      nt = "";
      nt = "";
      operatev = "";
    } else if (operatev == "x") {
      $write.value = nf + "x" + nt + "=" + Number(nf) * Number(nt);
      nt = "";
      nt = "";
      operatev = "";
    } else if (operatev == "/") {
      $write.value = nf + "/" + nt + "=" + Number(nf) / Number(nt);
      nt = "";
      nt = "";
      operatev = "";
    }
  } else if (event.target.textContent == "c") {
    nf = "";
    nt = "";
    operatev = "";
    $write.value = "";
  } else if (event.target.textContent == "+") {
    $write.value = nf + "+";
    operatev = "+";
  } else if (event.target.textContent == "-") {
    $write.value = nf + "-";
    operatev = "-";
  } else if (event.target.textContent == "x") {
    $write.value = nf + "x";
    operatev = "x";
  } else if (event.target.textContent == "/") {
    $write.value = nf + "/";
    operatev = "/";
  }
};

document.querySelector("#number_0").addEventListener("click", nclickevent);
document.querySelector("#number_1").addEventListener("click", nclickevent);
document.querySelector("#number_2").addEventListener("click", nclickevent);
document.querySelector("#number_3").addEventListener("click", nclickevent);
document.querySelector("#number_4").addEventListener("click", nclickevent);
document.querySelector("#number_5").addEventListener("click", nclickevent);
document.querySelector("#number_6").addEventListener("click", nclickevent);
document.querySelector("#number_7").addEventListener("click", nclickevent);
document.querySelector("#number_8").addEventListener("click", nclickevent);
document.querySelector("#number_9").addEventListener("click", nclickevent);
document.querySelector("#delbutton").addEventListener("click", operateevent);
document.querySelector("#plus").addEventListener("click", operateevent);
document.querySelector("#minus").addEventListener("click", operateevent);
document.querySelector("#multiple").addEventListener("click", operateevent);
document.querySelector("#divide").addEventListener("click", operateevent);
document.querySelector("#result").addEventListener("click", operateevent);

const backevent = () => {
  if (nf !== "") {
    if (operatev === "") {
      nf = nf.slice(0, -1);
      $write.value = nf;
      console.log(nf);
    }
  }
  if (operatev !== "") {
    if (nt === "") {
      operatev = "";
      $write.value = nf + operatev;
    }
  }
  if (nt !== "") {
    nt = nt.slice(0, -1);
    $write.value = nf + operatev + nt;
    console.log(nf);
  }
};

document.querySelector("#pointbutton").addEventListener("click", nclickevent);
document.querySelector("#backbutton").addEventListener("click", backevent);
