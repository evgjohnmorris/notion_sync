/**
 * Generated Tool: blocksTool_0273
 * Domain: Blocks
 * ID: 0273
 */
exports.blocksTool_0273 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0273:', error);
    throw error;
  }
};
