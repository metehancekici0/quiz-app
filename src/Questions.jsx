const questions = [
  {
    questionText: "JavaScript'i kodlarını hangi iki etiket arasına yazarız?",
    answerOptions: [
      { answerText: "script", isCorrect: true },
      { answerText: "js", isCorrect: false },
      { answerText: "javascript", isCorrect: false },
      { answerText: "jsScript", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScript'te bir fonksiyon nasıl oluşturulur ?",
    answerOptions: [
      { answerText: "function fonksiyonum()", isCorrect: true },
      { answerText: "function = fonksiyonum()", isCorrect: false },
      { answerText: "function : fonksiyonum()", isCorrect: false },
      { answerText: "function ; fonksiyonum()", isCorrect: false },
    ],
  },
  {
    questionText: "Aşağıdakilerden hangisi Front-End teknolojisi değildir?",
    answerOptions: [
      { answerText: "HTML", isCorrect: false },
      { answerText: "JavaScript", isCorrect: false },
      { answerText: "Tailwind", isCorrect: false },
      { answerText: "PHP", isCorrect: true },
    ],
  },
  {
    questionText: "Kullanıcı bir HTML öğesine tıkladığında hangi olay gerçekleşir?",
    answerOptions: [
      { answerText: "onmouseover", isCorrect: false },
      { answerText: "onmouseclick", isCorrect: false },
      { answerText: "onclick", isCorrect: true },
      { answerText: "onhover", isCorrect: false },
    ],
  },
  {
    questionText: "Aşağıdakilerden hangisi 'sayilar' dizisini sıralar?",
    answerOptions: [
      { answerText: "sort.sayilar[];", isCorrect: false },
      { answerText: "sort(sayilar);", isCorrect: false },
      { answerText: "sayilar.sort();", isCorrect: true },
      { answerText: "sayilar.sort;", isCorrect: false },
    ],
  },
];

export default questions;
