/**
 * Generated Tool: blocksTool_0108
 * Domain: Blocks
 * ID: 0108
 */
exports.blocksTool_0108 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0108:', error);
    throw error;
  }
};
