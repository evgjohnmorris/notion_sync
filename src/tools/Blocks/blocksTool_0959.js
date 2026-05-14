/**
 * Generated Tool: blocksTool_0959
 * Domain: Blocks
 * ID: 0959
 */
exports.blocksTool_0959 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0959:', error);
    throw error;
  }
};
