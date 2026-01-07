const { getClassificationFromAI } = require("../services/aiService");

exports.classifyText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        error: "Text input is required"
      });
    }

    const result = await getClassificationFromAI(text);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "Failed to classify text"
    });
  }
};
