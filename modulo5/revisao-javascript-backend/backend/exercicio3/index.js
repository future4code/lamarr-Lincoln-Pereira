
const contas = [
    {
      email: "astrodev@labenu.com",
      password: "abc123",
    },
    {
      email: "bananinha@gmail.com",
      password: "bananinha",
    },
    {
      email: "lin.lincoln@hotmail.com",
      password: "123456"
    }
  ];
  
  function login(email, password) {
  
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) === false) {
      return "Formato de e-mail inválido";
    } else if (/^.{6,}$/.test(password) === false) {
      return "Senha deve possuir no mínimo 6 caracteres";
    } else {
      const user = contas.find((item) => item.email === email);
      console.log(user)
  
      if (user && user.password === password) {
        return "Login bem-sucedido";
      } else {
        return "E-mail ou senha incorretos";
      }
    }
  }
  
  console.log(login("lin.lincoln@hotmail.com", "123456"));