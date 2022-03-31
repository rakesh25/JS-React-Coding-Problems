//https://bigfrontend.dev/problem/implement-basic-throttle

function throttle(func, wait) {
    let rateLimit = true;
    let lastArgs = null;
    return function(...args) {
        let context = this;
        if(rateLimit) {
            func.apply(context, args);
            rateLimit=false;
            setTimeout(() => {
                if(lastArgs) {
                    func.apply(context, lastArgs);
                }
                lastArgs=null;
                rateLimit=true;
            }, wait);
        }else{
            lastArgs=args;
            return;
        }
    }
}