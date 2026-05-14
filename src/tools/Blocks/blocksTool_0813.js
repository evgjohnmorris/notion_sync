/**
 * Generated Tool: blocksTool_0813
 * Domain: Blocks
 * ID: 0813
 */
exports.blocksTool_0813 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0813:', error);
    throw error;
  }
};
