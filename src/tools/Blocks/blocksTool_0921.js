/**
 * Generated Tool: blocksTool_0921
 * Domain: Blocks
 * ID: 0921
 */
exports.blocksTool_0921 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0921:', error);
    throw error;
  }
};
