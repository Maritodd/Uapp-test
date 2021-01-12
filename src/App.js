import './App.css';
import Board from 'react-trello'

const handleDragStart = (cardId, laneId) => {
  console.log('drag started')
  console.log(`cardId: ${cardId}`)
  console.log(`laneId: ${laneId}`)
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended')
  console.log(`cardId: ${cardId}`)
  console.log(`sourceLaneId: ${sourceLaneId}`)
  console.log(`targetLaneId: ${targetLaneId}`)
}

function App() {

  const settings = {
    editable: true,
    canAddLanes: true,
    editLaneTitle: true,
    draggable: true,

  }

  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins',},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane3',
        title: 'Work in progress',
        label: '1/1',
        cards: [
          {id: 'Card1', title: 'Clean house', description: 'Clean house(bath, living room, kitchen)', label: '30 mins'}
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '1/1',
        cards: [
          {id: 'Card1', title: 'Buy a cup of tea', description: 'Herbal tea', label: '30 mins'}
        ]
      }
    ],
  }

  return (
    <div className="App">
      <Board data={data} { ...settings }
             handleDragStart={handleDragStart}
             handleDragEnd={handleDragEnd}/>
    </div>
  );
}

export default App;
