/**
 * Generated Tool: blocksTool_0443
 * Domain: Blocks
 * ID: 0443
 */
exports.blocksTool_0443 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0443:', error);
    throw error;
  }
};
