/**
 * Generated Tool: blocksTool_0334
 * Domain: Blocks
 * ID: 0334
 */
exports.blocksTool_0334 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0334:', error);
    throw error;
  }
};
