/**
 * Generated Tool: blocksTool_0223
 * Domain: Blocks
 * ID: 0223
 */
exports.blocksTool_0223 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0223:', error);
    throw error;
  }
};
