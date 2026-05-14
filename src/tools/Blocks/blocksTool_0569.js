/**
 * Generated Tool: blocksTool_0569
 * Domain: Blocks
 * ID: 0569
 */
exports.blocksTool_0569 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0569:', error);
    throw error;
  }
};
