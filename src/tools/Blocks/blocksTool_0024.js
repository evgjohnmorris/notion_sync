/**
 * Generated Tool: blocksTool_0024
 * Domain: Blocks
 * ID: 0024
 */
exports.blocksTool_0024 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0024:', error);
    throw error;
  }
};
