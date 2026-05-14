/**
 * Generated Tool: blocksTool_0306
 * Domain: Blocks
 * ID: 0306
 */
exports.blocksTool_0306 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0306:', error);
    throw error;
  }
};
