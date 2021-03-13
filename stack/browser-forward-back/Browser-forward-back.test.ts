import BrowserForwardBack from "./Browser-forward-back";

describe('mock browser forward and back behavior',()=>{

    it('should forward successfully when given some url', function () {

        const browserForwardBack = new BrowserForwardBack();
        browserForwardBack.forward('http://baidu1.com');
        browserForwardBack.forward('http://baidu2.com');

        expect(browserForwardBack.getValues()).toEqual("{\"data\":\"head\",\"next\":{\"data\":\"http://baidu1.com\",\"next\":{\"data\":\"http://baidu2.com\",\"next\":null}}}");
    });

    it('should back successfully when back', function () {

        const browserForwardBack = new BrowserForwardBack();
        browserForwardBack.forward('http://baidu1.com');
        browserForwardBack.forward('http://baidu2.com');
        browserForwardBack.back();

        expect(browserForwardBack.getValues()).toEqual("{\"data\":\"head\",\"next\":{\"data\":\"http://baidu1.com\",\"next\":null}}");
    });

    it('should forward c successed when forward a,b,c,and back b', function () {

        const browserForwardBack = new BrowserForwardBack();
        browserForwardBack.forward('a');
        browserForwardBack.forward('b');
        browserForwardBack.forward('c');
        browserForwardBack.back();
        browserForwardBack.back();

        expect(browserForwardBack.getValues()).toEqual("{\"data\":\"head\",\"next\":{\"data\":\"http://baidu1.com\",\"next\":null}}");
    });
});
