const test = (document.querySelector("body").onload = function() { const pmdd = mostrarficha() });
const estudiantes = [{
        nombre: "Ivan Duque",
        github: "https://github.com/mirepositorio",
        neocites: "miportafolio.neocities.org",
        email: "estudiante@dominio.com",
        telefono: "3125678900",
        foto: "http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bbdd.png",
        actividades: [{
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            },
            {
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            },
            {
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            }
        ],
        valoraciones: {
            valhtml: "3%",
            valcss: "4%",
            valjs: "6%",
            valui: "4%",
            valux: "9%"
        },
        calificacion: "54%"
    },
    {
        nombre: "Orlando Perez",
        github: "https://github.com/mirepositorio",
        neocites: "miportafolio.neocities.org",
        email: "estudiante@dominio.com",
        telefono: "3125678900",
        foto: "https://cdn.pixabay.com/photo/2020/06/08/22/50/dog-5276317_960_720.png",
        actividades: [{
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            },
            {
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            },
            {
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            }
        ],
        valoraciones: {
            valhtml: "3%",
            valcss: "4%",
            valjs: "6%",
            valui: "4%",
            valux: "9%"
        },
        calificacion: "54%"
    },
    {
        nombre: "Joe Biden",
        github: "https://github.com/mirepositorio",
        neocites: "miportafolio.neocities.org",
        email: "estudiante@dominio.com",
        telefono: "3125678900",
        foto: "https://i.pinimg.com/originals/46/37/63/4637632aa50dec67576174f269915e11.png",
        actividades: [{
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            },
            {
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            },
            {
                actividad: "actividad",
                estadouiux: "5%",
                estadotecnico: "2%"
            }
        ],
        valoraciones: {
            valhtml: "3%",
            valcss: "4%",
            valjs: "6%",
            valui: "4%",
            valux: "9%"
        },
        calificacion: "54%"
    }
];





function Datos(estudiantes) {
    return `<div class="main">
<div class="Names">
  <div class="Names_name_order">
    <div class="Names_name">
      <h2>${estudiantes.nombre}</h2>
    </div>

    <div class="Names_Enlaces">
      <a class="Names_Enlaces_data" href="#"><i class="fab fa-github"></i> ${estudiantes.github}</a>
      <a class="Names_Enlaces_data" href="#"><i class="fas fa-network-wired"></i> ${estudiantes.neocites}</a>
      <a class="Names_Enlaces_data" href="#"><i class="fas fa-envelope-open-text"></i> ${estudiantes.email}</a>
      <a class="Names_Enlaces_data" href="#"><i class="fab fa-whatsapp"></i> ${estudiantes.telefono}</a>
    </div>
  </div>
  <img class="Names_Imagen_Img" src="${estudiantes.foto}" alt="">

  </div>
  <div class="Activity">
  <table class="tabla">
      <tr>
        <th>Actividades</th>
        <th>% U/UI</th>
        <th>%Dev</th>
      </tr>

  ${estudiantes.actividades.map((actividad, index) => {
    return (
      `<tr>
      <td>`
      +actividad.actividad+' '+(index+1)+ 
      `</td>
      <td>`
      +actividad.estadouiux+
      `</td>
      <td>`
      +actividad.estadotecnico+
      `</td>
      </tr>`
    )
  })
  .join("")}
  </table>
</div>


<div class="Totals">
  <div class="button">
    <span>${estudiantes.valoraciones.valhtml}</span>
    <a href="#">HTML</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valcss}</span>
    <a href="#">CSS</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valjs}</span>
    <a href="#">JS</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valui}</span>
    <a href="#">UI</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valux}</span>
    <a href="#">UX</a>
  </div>
  <div class="button">
    <span>${estudiantes.calificacion}</span>
    <a href="#">Total</a>
  </div>
</div>
</div>
<br>`;
}

function mostrarficha() {
  console.log(Datos)
  const p2 = document.getElementById("apps").innerHTML = `${estudiantes.map(Datos).join("")}`;
  return p2
}
const p8 = document.getElementById("apps").innerHTML = `${estudiantes.map(Datos).join("")}`;