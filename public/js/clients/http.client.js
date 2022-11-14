class Http{

    async get(url, id){
        try{
            return await fetch (url + (id || ''), {method:'get'}).then(r => r.json());
        } catch (error){
            console.error('ERROR GET',error)
        }
    }

    async post(url, data){
        try{
            return await fetch(url,{
                method:'post',
                body:JSON.stringify(data),
                headers:{'content-type': 'application/json'}
            }).then(r => r.json());
        } catch (error){
            console.error('ERROR POST', error);
        }
    }

    async put(url, id, data){
        try{
            return await fetch(url + id,{
                method: 'put',
                body: JSON.stringify(data),
                headers: {'content-type':'application/json'}
            }).then(r => r.json());
        }catch (error){
            console.error('ERROR PUT',error);
        }
    }

    async delete(url, id){
        try{
            return await fetch(url + id, {method:'delete'}).then(r=>r.json());
        } catch (error){
            console.error('ERROR DELETE',error);
        }
    }

    async del(){
        console.error('CALL DELETE()!');
    }
}

const http = new Http();

export default http;
