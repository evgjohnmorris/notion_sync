/**
 * Generated Tool: blocksTool_0077
 * Domain: Blocks
 * ID: 0077
 */
exports.blocksTool_0077 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0077:', error);
    throw error;
  }
};
