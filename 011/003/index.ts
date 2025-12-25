export const getCodeAi = ({ headers, params, callBack }: any) => {
  return fetch('XXX', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'text/event-stream',
      headers: {
        Authorization: 'Bearer XXX',
        ...headers,
      }
    },
    body: JSON.stringify(params),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`log: ${res.status}`);
      }
      if (res.status !== 200) {
        throw new Error(`log: ${res.status}`);
      }
      return res.body;
    })
    .then((rb) => {
      if (!rb) {
        throw new Error('no log');
      }

      const reader = rb?.getReader();
      let buffer = '';


      const process: any = ({ done, value }: any) => {
        if (!rb) {
          throw new Error('');
        }
        if (done) {
          return Promise.resolve();
        }

        let msg = new TextDecoder('utf-8').decode(value, { stream: true });
        msg = msg.replace(/\\u([\dA-F]{4})/gi, (_, p1) => String.fromCharCode(parseInt(p1, 16)));
        buffer += msg;
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (let i = 0; i < lines.length; i++) {
          const line: string = lines[i] || '';
          const startString = 'data:';
          if (line.indexOf(startString) >= 0) {
            const result: any = line.substring(line.indexOf(startString) + startString.length, line.length)
            callBack(result)
          }
        }
        return reader?.read().then(process);
      }

      return reader?.read().then(process);
    })
    .catch(error => {
      throw error;
    });;
}
getCodeAi({
  headers: {
    Authorization: 'Bearer XXX',
  },
  params: {

  },
  callBack: () => { },
}).then(res => {
}).catch(err => {
  console.log(err)
})