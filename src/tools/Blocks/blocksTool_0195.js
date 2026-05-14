/**
 * Generated Tool: blocksTool_0195
 * Domain: Blocks
 * ID: 0195
 */
exports.blocksTool_0195 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0195:', error);
    throw error;
  }
};
