/**
 * Generated Tool: blocksTool_0583
 * Domain: Blocks
 * ID: 0583
 */
exports.blocksTool_0583 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0583:', error);
    throw error;
  }
};
