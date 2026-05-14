/**
 * Generated Tool: blocksTool_0771
 * Domain: Blocks
 * ID: 0771
 */
exports.blocksTool_0771 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0771:', error);
    throw error;
  }
};
