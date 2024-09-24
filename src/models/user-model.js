import db from "../config/db.js";

const userSchema = new db.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    type: {
        type: String,
        enum: ["ADMINISTRADOR", "USUARIO"],
        required: true,
        default: "USUARIO",
    }
});



userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = db.model("User", userSchema)

export default User;