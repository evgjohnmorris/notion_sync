/**
 * Generated Tool: blocksTool_0980
 * Domain: Blocks
 * ID: 0980
 */
exports.blocksTool_0980 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0980:', error);
    throw error;
  }
};
