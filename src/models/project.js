const db = require('../../config/db')

module.exports = {
  createProjectModel: (setData) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO project SET ?'
      db.query(query, setData, (err, result) => {
        if(!err) {
          resolve(result)
        }
        reject(new Error(err))
      })
    })
  },

  getAllProjectModel: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT project_name, description, nama, bidang, lokasi, deadline FROM project JOIN recruiter ON id_recruiter = recruiter.id'
      db.query(query, (err, result) => {
        if(!err) {
          resolve(result)
        }
        reject(new Error(err))
      })
    })
  }
}