module.exports = mongoose => {
    const Practice = mongoose.model(
      'practice',
      mongoose.Schema(
        {
          title: String,
          context: String,
        },
        { timestamps: true }
      )
    );
    return Practice;
  };