export default{
    set(userdata){
        localStorage.setItem('auth', JSON.stringify(userdata))
    },

    getAll(){
        try {
            const raw = localStorage.getItem('auth');
            return raw ? JSON.parse(raw) : null;
            } catch (err) {
            console.error("Failed to parse localStorage auth", err);
            return null;
            }
    },

    get(key){
        const current = this.getAll()
        return current[key]
    },
    clear(){
        localStorage.clear()
    }
}