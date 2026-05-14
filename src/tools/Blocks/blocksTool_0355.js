/**
 * Generated Tool: blocksTool_0355
 * Domain: Blocks
 * ID: 0355
 */
exports.blocksTool_0355 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0355:', error);
    throw error;
  }
};
