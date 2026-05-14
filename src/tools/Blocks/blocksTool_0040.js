/**
 * Generated Tool: blocksTool_0040
 * Domain: Blocks
 * ID: 0040
 */
exports.blocksTool_0040 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0040:', error);
    throw error;
  }
};
