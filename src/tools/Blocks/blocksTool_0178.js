/**
 * Generated Tool: blocksTool_0178
 * Domain: Blocks
 * ID: 0178
 */
exports.blocksTool_0178 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0178:', error);
    throw error;
  }
};
