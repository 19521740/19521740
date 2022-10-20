// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import MySection from "./MySection";
import MyButton from "./MyButton";

function App() {
    return (
      <div className="App">{
            {/*       <><><div>

                 const root =

ReactDom.createRoot(document.getElementById("root"));


root.render( 
                <p>
                    Hello, <strong>JSX</strong>
                </p>

                 ); 

            </div>

                <div>
                    {/*const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 
                    <div>
                        <button />
                        <code />
                        <input />
                        <label />
                        <p />
                        <pre />
                        <select />
                        <table />
                        <ul />
                    </div>
                     );
                </div></><div></div></>
          const root =
            ReactDOM.createRoot(document.getElementById('root'));

            root.render(
            <section>
                <header>
                    <h1>A Header</h1>
                </header>
                <nav>
                    <a href="item">Nav Item</a>
                </nav>
                <main>
                    <p> The main content...</p>
                </main>
                <footer>
                    <small>&copy; 2021</small>
                </footer>
            </section>
            ); */}



              /* ReactDom.createRoot(document.getElementById("root")); */}
              
            {/* root.render( */}
            <MySection>
                <MyButton>My Button Text</MyButton>
            </MySection>
{/* ); */}
            </div>

            
    );
        }
 export default App;
