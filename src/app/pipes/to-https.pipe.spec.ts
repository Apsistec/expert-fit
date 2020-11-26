import { ToHttpsPipe } from './to-https.pipe';

describe('ToHttpsPipe', () => {
  it('create an instance', () => {
    const pipe = new ToHttpsPipe();
    expect(pipe).toBeTruthy();
  });
});
