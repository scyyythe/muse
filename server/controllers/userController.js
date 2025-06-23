const User = require("../model/User");

const getMe = async (req, res) => {
  try {
    const user = req.user;
    res.json({ user });
  } catch (err) {
    console.error("getMe error:", err);
    res.status(500).json({ error: "Internal error" });
  }
};

const updateUserProfile = async (req, res) => {
  const { fullName, username, bio } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { fullName, username, bio },
      { new: true, runValidators: true }
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    res.status(200).json({
      message: "Profile updated",
      user: {
        fullName: updatedUser.fullName,
        username: updatedUser.username,
        bio: updatedUser.bio,
        profilePicture: updatedUser.profilePicture,
      },
    });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update profile" });
  }
};

module.exports = { getMe, updateUserProfile };
