/**
 * Generated Tool: blocksTool_0896
 * Domain: Blocks
 * ID: 0896
 */
exports.blocksTool_0896 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0896:', error);
    throw error;
  }
};
