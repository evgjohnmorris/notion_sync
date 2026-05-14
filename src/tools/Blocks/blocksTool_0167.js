/**
 * Generated Tool: blocksTool_0167
 * Domain: Blocks
 * ID: 0167
 */
exports.blocksTool_0167 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0167:', error);
    throw error;
  }
};
