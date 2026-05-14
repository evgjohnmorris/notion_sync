/**
 * Generated Tool: blocksTool_0991
 * Domain: Blocks
 * ID: 0991
 */
exports.blocksTool_0991 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0991:', error);
    throw error;
  }
};
