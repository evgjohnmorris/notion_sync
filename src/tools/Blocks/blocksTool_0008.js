/**
 * Generated Tool: blocksTool_0008
 * Domain: Blocks
 * ID: 0008
 */
exports.blocksTool_0008 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0008:', error);
    throw error;
  }
};
