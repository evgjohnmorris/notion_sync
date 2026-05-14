/**
 * Generated Tool: blocksTool_0823
 * Domain: Blocks
 * ID: 0823
 */
exports.blocksTool_0823 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0823:', error);
    throw error;
  }
};
