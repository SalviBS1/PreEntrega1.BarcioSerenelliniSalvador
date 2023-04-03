do {
    // Pedir al usuario que ingrese el monto del préstamo, la tasa de interés y el plazo en años.
    let prestamo = prompt("Ingrese el monto del préstamo:");
    let interes = prompt("Ingrese la tasa de interés:");
    let tiempoPrestamo = prompt("Ingrese el plazo del préstamo en años:");
  
    // Convertir las entradas del usuario en números.
    prestamo = parseFloat(prestamo);
    interes = parseFloat(interes);
    tiempoPrestamo = parseFloat(tiempoPrestamo);
  
    // Calcular el pago mensual.
    const interesMensual = interes / 1200;
    const cantidadDePagos = tiempoPrestamo * 12;
    let pagosMensuales = prestamo * interesMensual / (1 - (1 / Math.pow(1 + interesMensual, cantidadDePagos)));
  
    // Verificar que el pago mensual sea un número válido.
    while (isNaN(pagosMensuales)) {
      alert("El pago mensual no puede ser calculado. Por favor, verifique los datos ingresados.");
      prestamo = prompt("Ingrese el monto del préstamo:");
      interes = prompt("Ingrese la tasa de interés:");
      tiempoPrestamo = prompt("Ingrese el plazo del préstamo en años:");
  
      prestamo = parseFloat(prestamo);
      interes = parseFloat(interes);
      tiempoPrestamo = parseFloat(tiempoPrestamo);
  
      interesMensual = interes / 1200;
      cantidadDePagos = tiempoPrestamo * 12;
      pagosMensuales = prestamo * interesMensual / (1 - (1 / Math.pow(1 + interesMensual, cantidadDePagos)));
    }
  
    // Mostrar el pago mensual en la consola.
    console.log("El pago mensual es de: $" + pagosMensuales.toFixed(2));
  
    // Preguntar al usuario si desea solicitar otro préstamo.
    let answer = prompt("¿Desea solicitar otro préstamo? (s/n)").toLowerCase();
  
    // Verificar la respuesta del usuario.
    if (answer === "s") {
      continue; // Si la respuesta es 's', continuar con el ciclo do-while.
    } else if (answer === "n") {
      break; // Si la respuesta es 'n', salir del ciclo do-while.
    } else {
      alert("Respuesta no válida. Por favor, ingrese 's' o 'n'."); // Si la respuesta no es válida, mostrar una alerta.
    }
  } while (true);
  