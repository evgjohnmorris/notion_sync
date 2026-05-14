/**
 * Generated Tool: blocksTool_0241
 * Domain: Blocks
 * ID: 0241
 */
exports.blocksTool_0241 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0241:', error);
    throw error;
  }
};
