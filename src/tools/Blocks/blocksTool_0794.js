/**
 * Generated Tool: blocksTool_0794
 * Domain: Blocks
 * ID: 0794
 */
exports.blocksTool_0794 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0794:', error);
    throw error;
  }
};
