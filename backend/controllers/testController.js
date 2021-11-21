module.exports = {
    testCall: (req, res) => {
            console.log('In test controller')
            return res.json({msg: 'returning from test controller'})
     }
}
