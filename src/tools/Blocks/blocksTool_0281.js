/**
 * Generated Tool: blocksTool_0281
 * Domain: Blocks
 * ID: 0281
 */
exports.blocksTool_0281 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0281:', error);
    throw error;
  }
};
