const YourSkill = require('../models/Courses');
const { multipleMongooseToObject } = require('../../ultill/mongoose')


class SiteController {
    search(req, res) {
        res.render('search');
    }

    // [GET] /search
    // async index(req, res) {
    //     try {
    //         const yourSkills = await YourSkill.find({});

    //         res.json(yourSkills); // Trả về dữ liệu dưới dạng JSON
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ message: "Internal Server Error" });
    //     }
    // }
    index(req, res, next) {
        YourSkill.find({})
            .then(yourskills => {
                // yourskills = yourskills.map(yourskill => yourskill.toObject())
                res.render('home', {
                    yourskills: multipleMongooseToObject(yourskills)
                })
            })
            .catch(next)
    }
}

module.exports = new SiteController();