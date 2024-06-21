var elBtn = document.querySelector("#js-btn");
var elAnswers1 = document.querySelector("#js-answers1");
var elAnswers2 = document.querySelector("#js-answers2");
var elAnswers3 = document.querySelector("#js-answers3");
var elAnswers4 = document.querySelector("#js-answers4");
var elAnswers5 = document.querySelector("#js-answers5");
var elAnswers6 = document.querySelector("#js-answers6");
var elAnswers7 = document.querySelector("#js-answers7");
var elAnswers8 = document.querySelector("#js-answers8");

elBtn.addEventListener("click", () => {
  var con = confirm("Bu savol-javobda shaxsiy ma'lumot so'ralishi mumkun");
  if (con === true) {
    var userName = prompt("Ismizdi kiriting"),
      userSurname = prompt("Familiyangizni kiriting"),
      userPatronymic = prompt("Sharfingizni kiriting"),
      userMail = prompt("Email pochtangizni kiriting", "aziz@gmail.com"),
      isMarriyed = confirm("Uylanganmisiz (Erga tekgganmisiz) ?");
    if (isMarriyed === true) {
      isMarriyed = "turmush o'rtog'i bor";
      var loveName = prompt("Turmush o'tog'izdi ismini kiriting"),
        child = confirm("Bolangiz bormi?");
      if (child === true) {
        var howMany = Number(prompt("Nectha farzandiz bor"));
        if (howMany >= 2) {
          var names = prompt(
            "Farzandalizni ismlarini kiriting (orasida bo'shliq qoldirib yozing)"
          );
          console.log(`Foydalanuvchi ismi: ${userName}
Foydalanuvchi familiyasi: ${userSurname}
Foydalanuvchi sharfi: ${userPatronymic}
Foydalanuvchi email pochtasi: ${userMail}
Foydalanuvchining oilaviy ahvoli: ${isMarriyed}
Foydalanuvchining turmush o'rtog'ini ismi: ${loveName}
Foydalanuvchining bolalari: ${howMany}
Foydalanuvchining bolalarini ismi: ${names}`);
          elAnswers1.textContent = `Foydalanuvchi ismi: ${userName}`;
          elAnswers2.textContent = `Foydalanuvchi familiyasi: ${userSurname}`;
          elAnswers3.textContent = `Foydalanuvchi sharfi: ${userPatronymic}`;
          elAnswers4.textContent = `Foydalanuvchi email pochtasi: ${userMail}`;
          elAnswers5.textContent = `Foydalanuvchining oilaviy ahvoli: ${isMarriyed}`;
          elAnswers6.textContent = `Foydalanuvchining turmush o'rtog'ini ismi: ${loveName}`;
          elAnswers7.textContent = `Foydalanuvchining bolalari: ${howMany}`;
          elAnswers8.textContent = `Foydalanuvchining bolalarini ismi: ${names}`;
        } else if (howMany === 1) {
          var name = prompt("Farzandingiz ismini kiriting");
          console.log(`Foydalanuvchi ismi: ${userName}
Foydalanuvchi familiyasi: ${userSurname}
Foydalanuvchi sharfi: ${userPatronymic}
Foydalanuvchi email pochtasi: ${userMail}
Foydalanuvchining oilaviy ahvoli: ${isMarriyed}
Foydalanuvchining turmush o'rtog'ini ismi: ${loveName}
Foydalanuvchining bolalari: ${howMany}
Foydalanuvchining bolasini ismi: ${name}`);
          elAnswers1.textContent = `Foydalanuvchi ismi: ${userName}`;
          elAnswers2.textContent = `Foydalanuvchi familiyasi: ${userSurname}`;
          elAnswers3.textContent = `Foydalanuvchi sharfi: ${userPatronymic}`;
          elAnswers4.textContent = `Foydalanuvchi email pochtasi: ${userMail}`;
          elAnswers5.textContent = `Foydalanuvchining oilaviy ahvoli: ${isMarriyed}`;
          elAnswers6.textContent = `Foydalanuvchining turmush o'rtog'ini ismi: ${loveName}`;
          elAnswers7.textContent = `Foydalanuvchining bolalari: ${howMany}`;
          elAnswers8.textContent = `Foydalanuvchining bolasini ismi: ${name}`;
        } else {
          var fake = alert("Yolg'on gapirmang😅😅😄");
          fake = "yo'q";
          console.log(`Foydalanuvchi ismi: ${userName}
Foydalanuvchi familiyasi: ${userSurname}
Foydalanuvchi sharfi: ${userPatronymic}
Foydalanuvchi email pochtasi: ${userMail}
Foydalanuvchining oilaviy ahvoli: ${isMarriyed}
Foydalanuvchining turmush o'rtog'ini ismi: ${loveName}
Foydalanuvchining bolalari: ${fake}`);
          elAnswers1.textContent = `Foydalanuvchi ismi: ${userName}`;
          elAnswers2.textContent = `Foydalanuvchi familiyasi: ${userSurname}`;
          elAnswers3.textContent = `Foydalanuvchi sharfi: ${userPatronymic}`;
          elAnswers4.textContent = `Foydalanuvchi email pochtasi: ${userMail}`;
          elAnswers5.textContent = `Foydalanuvchining oilaviy ahvoli: ${isMarriyed}`;
          elAnswers6.textContent = `Foydalanuvchining turmush o'rtog'ini ismi: ${loveName}`;
          elAnswers7.textContent = `Foydalanuvchining bolalari: ${fake}`;
        }
      }
    } else {
      isMarriyed = "turmush o'rtog'i yo'q";
      console.log(`Foydalanuvchi ismi: ${userName}
Foydalanuvchi familiyasi: ${userSurname}
Foydalanuvchi sharfi: ${userPatronymic}
Foydalanuvchi email pochtasi: ${userMail}
Foydalanuvchining oilaviy ahvoli: ${isMarriyed}`);
      elAnswers1.textContent = `Foydalanuvchi ismi: ${userName}`;
      elAnswers2.textContent = `Foydalanuvchi familiyasi: ${userSurname}`;
      elAnswers3.textContent = `Foydalanuvchi sharfi: ${userPatronymic}`;
      elAnswers4.textContent = ` Foydalanuvchi email pochtasi: ${userMail}`;
      elAnswers5.textContent = `Foydalanuvchining oilaviy ahvoli: ${isMarriyed}`;
    }
    alert("Sizga katta rahmat!!!!!");
  }
});
