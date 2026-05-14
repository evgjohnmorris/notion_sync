/**
 * Generated Tool: blocksTool_0440
 * Domain: Blocks
 * ID: 0440
 */
exports.blocksTool_0440 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0440:', error);
    throw error;
  }
};
