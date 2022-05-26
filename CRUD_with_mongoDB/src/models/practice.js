module.exports = mongoose => {
    const Practice = mongoose.model(
      'practice',
      mongoose.Schema(
        {
          title: String
        },
        { timestamps: true }
      )
    );
    return Practice;
  };