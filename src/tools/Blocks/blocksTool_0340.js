/**
 * Generated Tool: blocksTool_0340
 * Domain: Blocks
 * ID: 0340
 */
exports.blocksTool_0340 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0340:', error);
    throw error;
  }
};
