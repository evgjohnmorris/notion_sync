/**
 * Generated Tool: blocksTool_0431
 * Domain: Blocks
 * ID: 0431
 */
exports.blocksTool_0431 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0431:', error);
    throw error;
  }
};
