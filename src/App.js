import "./styles.css";

//function App(){
//State

//Comportement
const submit = () => {
  alert("Votre est interface va etre tester par Seliluim");
};

//Affichage

export default function App() {
  return (
    <body>
      <div type="H1">
        <h1 className="heading">
          <span className="light">Testeur</span> d'interface
        </h1>
        <div type="text" className="box">
          <div type="text1">
            <h2>Vieullez saisir l'URL du site a tester</h2>
          </div>
          <div>
            <form className="box">
              <input type="text" placeholder="URL du site" />
              <button onClick={submit}> Soumettre</button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
