function triangle(arg1, type1, arg2, type2) {
    
    if (arg1 <= 0 || arg2 <= 0) {
      console.log("Введені сторони мають бути додатними числами.");
      return "failed";
    }
  
    if (type1 === type2) {
      console.log("Типи аргументів повинні бути різними.");
      return "failed";
    }
  
    
    let c, a, b, alpha, beta;
  
    if (type1 === "hypotenuse" && type2 === "leg") {
      c = arg1;
      a = arg2;
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c) * (180 / Math.PI);
      beta = 90 - alpha;
    } else if (type1 === "leg" && type2 === "hypotenuse") {
      c = arg2;
      a = arg1;
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c) * (180 / Math.PI);
      beta = 90 - alpha;
    } else {
      console.log("Некоректна комбінація типів елементів.");
      return "failed";
    }
  
    
    if (alpha >= 90 || beta >= 90) {
      console.log("Введені кути не є гострими кутами.");
      return "failed";
    }
  
    
    console.log("c (гіпотенуза):", c);
    console.log("a (катет):", a);
    console.log("b (катет):", b);
    console.log("alpha (гострий кут):", alpha);
    console.log("beta (гострий кут):", beta);
  
    return "success";
  }
  
  
  console.log(triangle(7, "leg", 18, "hypotenuse"));
  console.log(triangle(9, "leg", 8, "hypotenuse"));
  console.log(triangle(8, "hypotenuse", -4, "leg"));
  console.log(triangle(0, "leg", 9, "hypotenuse"));
  console.log(triangle(8, "leg", 8, "hypotenuse"));
  
  function solveTriangle() {
    const arg1 = parseFloat(document.getElementById("arg1").value);
    const type1 = document.getElementById("type1").value.toLowerCase();
    const arg2 = parseFloat(document.getElementById("arg2").value);
    const type2 = document.getElementById("type2").value.toLowerCase();

    const result = triangle(arg1, type1, arg2, type2);
    const resultElement = document.getElementById("result");
    
    if (result === "success") {
      resultElement.textContent = "Результати розрахунків виведені у консоль.";
    } else {
      resultElement.textContent = "Введено некоректні дані. Перевірте введені значення та типи.";
    }
  }