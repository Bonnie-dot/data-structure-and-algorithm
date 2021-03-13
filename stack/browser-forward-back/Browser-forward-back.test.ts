import BrowserForwardBack from "./Browser-forward-back";

describe('mock browser forward and back behavior',()=>{

    it('should forward successfully when given some value', function () {
        const browserForwardBack = new BrowserForwardBack();
        browserForwardBack.forward('http://baidu1.com');
        browserForwardBack.forward('http://baidu2.com');

        expect(browserForwardBack.getValues()).toEqual("{\"data\":\"head\",\"next\":{\"data\":\"http://baidu1.com\",\"next\":{\"data\":\"http://baidu2.com\",\"next\":null}}}");
    });
});
