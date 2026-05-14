/**
 * Generated Tool: blocksTool_0358
 * Domain: Blocks
 * ID: 0358
 */
exports.blocksTool_0358 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0358:', error);
    throw error;
  }
};
