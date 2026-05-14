/**
 * Generated Tool: blocksTool_0828
 * Domain: Blocks
 * ID: 0828
 */
exports.blocksTool_0828 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0828:', error);
    throw error;
  }
};
