const initData = () =>(
    fetch('http://192.168.1.20/api/')
        .then(res=>res.json())
)
export default initData