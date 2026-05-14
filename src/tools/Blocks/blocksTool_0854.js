/**
 * Generated Tool: blocksTool_0854
 * Domain: Blocks
 * ID: 0854
 */
exports.blocksTool_0854 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0854:', error);
    throw error;
  }
};
