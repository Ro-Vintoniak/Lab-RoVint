(function() {
    var speakWord = "Hello";
  
    var greetingLibrary1 = {
      greet: function(name) {
        var firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
          console.log("Goodbye " + name);
        } else {
          console.log(speakWord + " " + name);
        }
      }
    };
  
    var names = ['Jack', 'John', 'Alice', 'Bob'];
  
    names.forEach(function(name) {
      greetingLibrary1.greet(name);
    });
  })();
  
  (function() {
    var speakWord = "Goodbye";
  
    var greetingLibrary2 = {
      greet: function(name) {
        var firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
          console.log(speakWord + " " + name);
        } else {
          console.log("Hello " + name);
        }
      }
    };
  
    var names = ['Jim', 'Jill', 'Emma', 'Dave'];
  
    names.forEach(function(name) {
      greetingLibrary2.greet(name);
    });
  })();
  
  (function() {
    var nameSelection = {
      selectNames: function(names) {
        var selectedNames = names.filter(function(name) {
          return name.charAt(0).toLowerCase() === 'a';
        });
  
        console.log("Selected names starting with 'A':", selectedNames);
      }
    };
  
    var allNames = ['Alice', 'Bob', 'John', 'Amanda', 'James', 'Alex'];
  
    nameSelection.selectNames(allNames);
  })();