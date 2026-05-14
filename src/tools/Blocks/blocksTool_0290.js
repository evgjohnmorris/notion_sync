/**
 * Generated Tool: blocksTool_0290
 * Domain: Blocks
 * ID: 0290
 */
exports.blocksTool_0290 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0290:', error);
    throw error;
  }
};
