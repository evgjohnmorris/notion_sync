/**
 * Generated Tool: blocksTool_0303
 * Domain: Blocks
 * ID: 0303
 */
exports.blocksTool_0303 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0303:', error);
    throw error;
  }
};
