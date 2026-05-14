/**
 * Generated Tool: blocksTool_0351
 * Domain: Blocks
 * ID: 0351
 */
exports.blocksTool_0351 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0351:', error);
    throw error;
  }
};
