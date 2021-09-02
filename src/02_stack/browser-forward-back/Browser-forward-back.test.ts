import BrowserForwardBack from './Browser-forward-back';

describe('mock browser forward and back behavior', () => {
    test('should forward successfully when given a', () => {
        const browserForwardBack = new BrowserForwardBack();
        browserForwardBack.forward('a');
        browserForwardBack.forward('b');

        expect(browserForwardBack.getValues()).toEqual('a,b');
    });

    test('should back successfully when back', () => {
        const browserForwardBack = new BrowserForwardBack();
        browserForwardBack.forward('a');
        browserForwardBack.forward('b');
        browserForwardBack.back();

        expect(browserForwardBack.getBackValues()).toEqual('b');
        expect(browserForwardBack.getValues()).toEqual('a');
    });

    test('should back b when forward a,b,c,and back b,and forward d', () => {
        const browserForwardBack = new BrowserForwardBack();
        browserForwardBack.forward('a');
        browserForwardBack.forward('b');
        browserForwardBack.forward('c');
        browserForwardBack.back();
        browserForwardBack.forward('d');
        browserForwardBack.back();

        expect(browserForwardBack.getBackValues()).toEqual('d');
        expect(browserForwardBack.getValues()).toEqual('a,b');
    });
});
