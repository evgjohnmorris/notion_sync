/**
 * Generated Tool: blocksTool_0036
 * Domain: Blocks
 * ID: 0036
 */
exports.blocksTool_0036 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0036:', error);
    throw error;
  }
};
