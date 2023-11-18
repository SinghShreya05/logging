app.get('/search', async (req, res) => {
    const query = req.query.q; // Full-text search query

    try {
        const result = await client.search({
            index: 'logs',
            body: {
                query: {
                    match: {
                        message: query // Adjust according to your search criteria
                    }
                }
            }
        });
        res.json(result.body.hits.hits);
    } catch (error) {
        console.error('Error searching logs:', error);
        res.status(500).send('Error searching logs');
    }
});
