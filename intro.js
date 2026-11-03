const me = {
  myData: {
    name: "Chuwang Emmanuel Nyam",
    age: 23,
    favoriteProgLang: [
      "javaScript", "Python", "React", "HTML", "CSS"
    ],
  },

  deco: {
    style1: "####################",
    style2: "________________________",
  },

  getInfo(myData) {
    console.log(this.deco.style1, "My detail", this.deco.style1);

    console.log(
      `name: ${myData.name} \nage: ${myData.age} \nprogrammingLang: ${myData.favoriteProgLang}`,
    );

    console.log(this.deco.style2, "end", this.deco.style2);
  },
};

me.getInfo(me.myData);
