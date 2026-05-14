/**
 * Generated Tool: blocksTool_0048
 * Domain: Blocks
 * ID: 0048
 */
exports.blocksTool_0048 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0048:', error);
    throw error;
  }
};
