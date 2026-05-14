/**
 * Generated Tool: blocksTool_0104
 * Domain: Blocks
 * ID: 0104
 */
exports.blocksTool_0104 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0104:', error);
    throw error;
  }
};
