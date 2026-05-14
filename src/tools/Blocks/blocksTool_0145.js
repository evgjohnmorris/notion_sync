/**
 * Generated Tool: blocksTool_0145
 * Domain: Blocks
 * ID: 0145
 */
exports.blocksTool_0145 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0145:', error);
    throw error;
  }
};
