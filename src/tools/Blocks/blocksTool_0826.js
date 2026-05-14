/**
 * Generated Tool: blocksTool_0826
 * Domain: Blocks
 * ID: 0826
 */
exports.blocksTool_0826 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0826:', error);
    throw error;
  }
};
