export const fetchScenario = () => {
    return (dispatch) => {
        fetch('http://http://localhost:3000/scenarios')
        .then(resp => resp.json())
        .then(data => console.log('fetch scenarios', data))
    }
}