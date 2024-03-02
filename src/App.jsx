import './App.css';
import Card from './components/Card';




const App = () => {

  return (
    <div className="App">

      <h1>Chicago Must-Visits</h1>

      <div className="grid">
      <Card title='Millenium Park' description='Home to the infamous Chicago Bean' imageUrl="https://i.imgur.com/8PAiE5B.jpg"/>
      <Card title='Navy Pier' description='On the shoreline of Lake Michigan, Navy Pier is a must-see' imageUrl='https://i.imgur.com/KVPkH5u.jpg'/>
      <Card title='Chicago Riverwalk' description='Eat, drink, and explore with stunning outdoor bars and restaurants, boat trips, and kayaking' imageUrl='https://i.imgur.com/ndy3h5h.jpg'/>
      <Card title='Shedd Aquarium' description='From whales to snails, tarantulas to turtles, you will meet 32,000 creatures from aquatic habitats around the world' imageUrl='https://i.imgur.com/pAmzflC.jpg'/>
      <Card title='Wrigley Field' description='The beloved home of the Chicago Cubs for more than a century' imageUrl='https://i.imgur.com/XdhjjXH.jpg'/>
      <Card title='Garfield Park Conservatory' description='A beautiful historic botanical garden located on the outskirts of Chicago.' imageUrl='https://i.imgur.com/Hkvgecc.jpg'/>
      <Card title='Skydeck Chicago' description='The breathtaking, thrilling observatory atop the iconic Willis Tower.' imageUrl='https://i.imgur.com/9RMg4qS.jpg'/>
      <Card title='Cultural Center' description='A Chicago Landmark building' imageUrl='https://i.imgur.com/p7JMSCu.jpg'/>
      <Card title='The 606 Trail' description='A 2.7-mile elevated rail trail linear park running east–west on the northwest side of Chicago.' imageUrl='https://i.imgur.com/npY8uM9.jpg'/>
      <Card title='The Art Institute of Chicago' description='One of the oldest and largest art museums in the world.' imageUrl="https://i.imgur.com/MLrJlXu.jpg"/>

      </div>
   
      
    </div>
  )
}

export default App