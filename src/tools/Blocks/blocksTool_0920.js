/**
 * Generated Tool: blocksTool_0920
 * Domain: Blocks
 * ID: 0920
 */
exports.blocksTool_0920 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0920:', error);
    throw error;
  }
};
