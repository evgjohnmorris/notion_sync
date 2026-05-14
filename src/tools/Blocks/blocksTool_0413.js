/**
 * Generated Tool: blocksTool_0413
 * Domain: Blocks
 * ID: 0413
 */
exports.blocksTool_0413 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0413:', error);
    throw error;
  }
};
