function fetch (request: Request): Response {
  return Response.json({
    response: { text: 'Привет мир!', tts: 'Привет мир!', end_session: true },
    version: '1.0'
  });
}

Bun.serve({ fetch: fetch });
