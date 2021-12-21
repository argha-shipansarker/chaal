import { createSlice } from "@reduxjs/toolkit";

const user1 = require("../data/2.json")
const user2 = require("../data/7.json")
const user3 = require("../data/2627.json")
const user4 = require("../data/10780.json")
const user5 = require("../data/13116.json")
const user6 = require("../data/14842.json")
const user7 = require("../data/17172.json")
const user8 = require("../data/20566.json")
const user9 = require("../data/21632.json")
const user10 = require("../data/27366.json")
const user11 = require("../data/29127.json")
const user12 = require("../data/30024.json")
const user13 = require("../data/30332.json")
const user14 = require("../data/31870.json")
const user15 = require("../data/33550.json")
const user16 = require("../data/34407.json")
const user17 = require("../data/34429.json")
const user18 = require("../data/36495.json")
const user19 = require("../data/37327.json")
const user20 = require("../data/38639.json")


export const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        allUserInfo: [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]
    },
    reducers: {

    }
})

export const {} = userDataSlice.actions
export default userDataSlice.reducer