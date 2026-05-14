/**
 * Generated Tool: blocksTool_0080
 * Domain: Blocks
 * ID: 0080
 */
exports.blocksTool_0080 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0080:', error);
    throw error;
  }
};
