export default{
    set(userdata){
        localStorage.setItem('auth', JSON.stringify(userdata))
    },

    getAll(){
        return JSON.parse(localStorage.getItem('auth')) || null
    },

    get(key){
        const current = this.getAll()
        return current[key]
    },
    clear(){
        localStorage.clear()
    }
}