console.log('Інструкція з використання');
console.log('Позначення:           Що означає:');
console.log('leg                   катет');
console.log('hypotenuse            гіпотенуза');
console.log('adjacent angle        прилеглий до катета кут');
console.log('opposite angle        протилежний до катета кут');
console.log('angle                 один з двох гострих кутів(коли задана гіпотенуза)');

function checkNonPositive(value, type) {
    if (value <= 0) {
        if (value === 0) {
            console.log(type + " не може бути рівним 0.");
        } else if (value < 0) {
            console.log(type + " не може бути меншим 0.");
        }
        return false;
    }
    return true;
}

function checkHypoLeg(leg, hypo) {
    if (leg > hypo) {
        console.log("Катет більший за гіпотенузу");
        return false;
    } else if (leg === hypo) {
        console.log("Катет рівний гіпотенузі");
        return false;
    }
    return true;
}

function checkBluntAngle(angle, type) {
    if (type === "adjacent angle" || type === "opposite angle" || type === "angle") {
        if (angle > 89) {
            console.log(type + " є негострим кутом");
            return false;
        }
    }
    return true;
}

function triangle(arg1, type1, arg2, type2) {
    var a = 5, b = 9, c = 10.3, alpha = 29.0546, beta = 60.9454;

    if (!arg1 || !type1 || !arg2 || !type2) {
        console.log("Неправильна кількість введених аргументів.");
        return;
    }

    if ((type1 === "leg" && type2 === "leg") || (type1 === "leg" && type2 === "hypotenuse") ||
        (type2 === "leg" && type1 === "hypotenuse") || (type1 === "leg" && type2 === "opposite angle") ||
        (type1 === "opposite angle" && type2 === "leg") || (type1 === "leg" && type2 === "adjacent angle") ||
        (type1 === "adjacent angle" && type2 === "leg") || (type1 === "hypotenuse" && type2 === "angle") ||
        (type1 === "angle" && type2 === "hypotenuse")) {

        if (type1 === "leg" && type2 === "leg") {
            if (checkNonPositive(arg1, type1) && checkNonPositive(arg2, type2)) {
                a = arg1;
                b = arg2;
                c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
                alpha = Math.asin(a / c) * 180 / Math.PI;
                beta = Math.acos(a / c) * 180 / Math.PI;
            }
        } else if (type1 === "leg" && type2 === "hypotenuse") {
            if (checkNonPositive(arg1, type1) && checkNonPositive(arg2, type2) && checkHypoLeg(arg1, arg2)) {
                a = arg1;
                c = arg2;
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                alpha = Math.asin(a / c) * 180 / Math.PI;
                beta = Math.acos(a / c) * 180 / Math.PI;
            }
        } else if (type1 === "leg" && type2 === "opposite angle") {
            if (checkNonPositive(arg1, type1) && checkBluntAngle(arg2, type2)) {
                a = arg1;
                alpha = arg2;
                c = a / (Math.sin(alpha * Math.PI / 180));
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                beta = 90 - alpha;
            }
        } else if (type1 === "leg" && type2 === "adjacent angle") {
            if (checkNonPositive(arg1, type1) && checkBluntAngle(arg2, type2)) {
                a = arg1;
                beta = arg2;
                c = a / (Math.cos(beta * Math.PI / 180));
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                alpha = 90 - beta;
            }
        } else if (type1 === "hypotenuse" && type2 === "angle") {
            if (checkNonPositive(arg1, type1) && checkBluntAngle(arg2, type2)) {
                c = arg1;
                alpha = arg2;
                beta = 90 - alpha;
                a = c * Math.sin(alpha * Math.PI / 180);
                b = c * Math.sin(beta * Math.PI / 180);
            }
        } else if (type1 === "hypotenuse" && type2 === "leg") {
            if (checkNonPositive(arg1, type1) && checkNonPositive(arg2, type2) && checkHypoLeg(arg1, arg2)) {
                c = arg1;
                a = arg2;
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                alpha = Math.asin(a / c) * 180 / Math.PI;
                beta = Math.acos(a / c) * 180 / Math.PI;
            }
        } else if (type1 === "opposite angle" && type2 === "leg") {
            if (checkNonPositive(arg2, type2) && checkBluntAngle(arg1, type1)) {
                a = arg2;
                alpha = arg1;
                c = a / (Math.sin(alpha * Math.PI / 180));
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                beta = 90 - alpha;
            }
        } else if (type1 === "adjacent angle" && type2 === "leg") {
            if (checkNonPositive(arg2, type2) && checkBluntAngle(arg1, type1)) {
                a = arg2;
                beta = arg1;
                c = a / (Math.cos(beta * Math.PI / 180));
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                alpha = 90 - beta;
            }
        } else if (type1 === "angle" && type2 === "hypotenuse") {
            if (checkNonPositive(arg2, type2) && checkBluntAngle(arg1, type1)) {
                c = arg2;
                alpha = arg1;
                beta = 90 - alpha;
                a = c * Math.sin(alpha * Math.PI / 180);
                b = c * Math.sin(beta * Math.PI / 180);
            }
        } else {
            console.log("failed!");
            return;
        }
    } else {
        console.log("failed!");
        return;
    }

    console.log("a = " + a + "\nb = " + b + "\nc = " + c + "\nalpha = " + alpha + "\nbeta = " + beta + "\nsuccess!");
}

triangle(6, "leg", 8, "hypotenuse");
