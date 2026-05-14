/**
 * Generated Tool: blocksTool_0163
 * Domain: Blocks
 * ID: 0163
 */
exports.blocksTool_0163 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0163:', error);
    throw error;
  }
};
