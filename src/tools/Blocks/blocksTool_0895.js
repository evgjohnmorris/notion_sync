/**
 * Generated Tool: blocksTool_0895
 * Domain: Blocks
 * ID: 0895
 */
exports.blocksTool_0895 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0895:', error);
    throw error;
  }
};
