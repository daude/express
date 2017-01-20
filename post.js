app.post('/resources', function(req, res) {
    var item = req.body;
 
    if (!item.id) {
        return res.sendStatus(500);
    }
 
    resources.push(item);
 
    res.send('/resources/' + item.id);
});