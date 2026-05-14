/**
 * Generated Tool: blocksTool_0267
 * Domain: Blocks
 * ID: 0267
 */
exports.blocksTool_0267 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0267:', error);
    throw error;
  }
};
