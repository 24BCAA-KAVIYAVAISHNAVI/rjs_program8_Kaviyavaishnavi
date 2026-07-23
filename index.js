function Recipe() {

    return (

        <div className="Recipe">

            {/* Card 1 */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Chicken Noodles Soup</h5>
                    <ul>
                        <li className="listElement">2 Tablespoons extra-virgin olive oil</li>
                        <li className="listElement">1 yellow carrots</li>    
                        <li className="listElement">2 medium carrots</li>    
                        <li className="listElement">2 stalks cellery</li>    
                        <li className="listElement">8 cups Chicken broth</li>    
                        <li className="listElement">1 cup cooked Chicken</li>    
                    </ul>                    
                </div>
            </div>

            {/* Card 2 */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Curried Egg</h5>
                    <ul>
                        <li className="listElement">12 boiled eggs</li>
                        <li className="listElement">1/3 cup mayonaise</li>    
                        <li className="listElement">3/4 cup whole grain mustard</li>    
                        <li className="listElement">1 table curry powder</li>    
                        <li className="listElement">1.4 cup finely chopped onion</li>  
                    </ul>                  
                </div>
            </div>

            {/* Card 3 */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Oat Cluster </h5>
                    <ul>
                        <li className="listElement">1 cup rolled oats</li>
                        <li className="listElement">2 tablespoons peanut butter</li>    
                        <li className="listElement">1/4 cup walnuts</li>    
                        <li className="listElement">1/4 cups walnuts</li>    
                        <li className="listElement">1/4 cup dried cranberries</li>    
                        <li className="listElement">1 banana</li>    
                    </ul>                    
                </div>
            </div>
           
        </div>

    );

}

// TODO 2:
// Create the React Root

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// TODO 3:
// Render the Recipe component.

root.render(
    <Recipe />
);
