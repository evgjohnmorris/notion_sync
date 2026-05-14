/**
 * Generated Tool: blocksTool_0553
 * Domain: Blocks
 * ID: 0553
 */
exports.blocksTool_0553 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0553:', error);
    throw error;
  }
};
