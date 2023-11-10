// Later we will use https://opentdb.com/api.php?amount=10&category=18 to fetch questions

const questions = [
  {
    id: 'q1',
    text: "Aşağıdaki tanımlamalardan hangisi React.js'yi en iyi şekilde açıklar?",
    answers: [
      'Deklaratif kodun yardımıyla kullanıcı arayüzleri oluşturmak için bir kütüphane.',
      'Web uygulamalarında durumu yönetmek için bir kütüphane.',
      'İmperatif kodun yardımıyla kullanıcı arayüzleri oluşturmak için bir çerçeve.',
      'Sadece mobil uygulamalar oluşturmak için kullanılan bir kütüphane.',
    ],
  },
  {
    id: 'q2',
    text: "React hook'ların amacı nedir?",
    answers: [
      'Fonksiyonel bileşenlerde durum ve diğer React özelliklerini kullanmayı mümkün kılmak.',
      'React uygulamalarında duyarlı düzenler oluşturmak.',
      'Uygulama içinde hataları yönetmek.',
      'Global durumu yönetmek için Redux kütüphanesinin bir parçası.',
    ],
  },
  {
    id: 'q3',
    text: 'JSX nedir?',
    answers: [
      "JavaScript'e HTML benzeri sözdizimi ekleyen bir JavaScript uzantısı.",
      'Dinamik kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi.',
      'React için özel olarak oluşturulmuş belirli bir HTML sürümü.',
      'React uygulamasında HTTP istekleri yapmak için bir araç.',
    ],
  },
  {
    id: 'q4',
    text: "React'te bir bileşen oluşturmanın en yaygın yolu nedir?",
    answers: [
      'Render edilebilir bir değer döndüren bir JavaScript fonksiyonu tanımlayarak.',
      "JavaScript'te özel bir HTML etiketi tanımlayarak.",
      '.jsx uzantılı bir dosya oluşturarak.',
      'Component adından sonra "new" anahtar kelimesini kullanarak.',
    ],
  },
  {
    id: 'q5',
    text: '"React state" terimi ne anlama gelir?',
    answers: [
      'Bir bileşen içinde değerleri tutan ve değişiklik durumunda bileşeni yeniden render yapabilen bir nesne.',
      'React bileşeninin bulunduğu yaşam döngüsü aşaması.',
      'React uygulamasının genel durumu, tüm props ve bileşenleri içerir.',
      'React uygulamalarında global durumu yönetmek için bir kütüphane.',
    ],
  },
  {
    id: 'q6',
    text: 'React uygulamalarında liste içeriğini genellikle nasıl render edersiniz?',
    answers: [
      'map() yöntemini kullanarak bir veri dizisi üzerinde döngü yaparak ve JSX döndürerek.',
      'for() döngüsünü kullanarak bir veri dizisi üzerinde döngü yaparak ve JSX döndürerek.',
      'forEach() yöntemini kullanarak bir veri dizisi üzerinde döngü yaparak ve JSX döndürerek.',
      'loop() yöntemini kullanarak bir veri dizisi üzerinde döngü yaparak ve JSX döndürerek.',
    ],
  },
  {
    id: 'q7',
    text: 'İçerik koşullu olarak render etmek için aşağıdaki yaklaşımlardan HANGİSİ kullanılamaz?',
    answers: [
      '#if şablon sözdizimini kullanmak.',
      'Üçlü operatör kullanmak.',
      '&& operatörünü kullanmak.',
      'if-else ifadesini kullanmak.',
    ],
  },
];

export default questions;
